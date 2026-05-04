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
  --background-modifier-border: var(--color-base-30, #4a5568);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: var(--color-red, #dc2626);
  --background-modifier-error-hover: var(--color-red, #b91c1c);
  --background-modifier-error-rgb: var(--color-red-rgb, 220, 38, 38);
  --background-modifier-form-field: var(--color-base-25, #374151);
  --background-modifier-form-field-highlighted: #4a5568;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #374151);
  --background-modifier-success: var(--color-green, #059669);
  --background-primary: var(--color-base-00, #1a2332);
  --background-primary-alt: var(--color-base-10, #2d3748);
  --background-secondary: var(--color-base-20, #374151);
  --bases-cards-background: var(--background-primary, #1a2332);
  --bases-cards-cover-background: var(--background-primary-alt, #2d3748);
  --bases-embed-border-color: var(--background-modifier-border, #4a5568);
  --bases-group-heading-property-color: var(--text-muted, #a0aec0);
  --bases-table-border-color: var(--table-border-color, rgba(125, 211, 192, 0.3));
  --bases-table-cell-background-active: var(--background-primary, #1a2332);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #2d3748);
  --bases-table-group-background: var(--background-primary-alt, #2d3748);
  --bases-table-header-background: var(--background-primary, #1a2332);
  --bases-table-header-color: var(--text-muted, #a0aec0);
  --bases-table-summary-background: var(--background-primary, #1a2332);
  --blockquote-bg: #303E59;
  --blockquote-border-color: var(--interactive-accent, #fbbf24);
  --blockquote-color: #E1DCF2;
  --blockquote-font-style: italic;
  --bodyFont: var(--font-text, var(--font-text-theme, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif));
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #1a2332);
  --canvas-card-label-color: var(--text-faint, #718096);
  --caret-color: var(--text-normal, #e2e8f0);
  --checkbox-border-color: var(--text-faint, #718096);
  --checkbox-border-color-hover: var(--text-muted, #a0aec0);
  --checkbox-color: var(--interactive-accent, #7dd3c0);
  --checkbox-color-hover: var(--interactive-accent-hover, #5eead4);
  --checkbox-marker-color: var(--background-primary, #1a2332);
  --checklist-done-color: var(--text-muted, #a0aec0);
  --code-background: var(--background-primary-alt, #374151);
  --code-border-color: var(--background-modifier-border, #4a5568);
  --code-comment: var(--text-faint, #718096);
  --code-normal: var(--text-normal, #e2e8f0);
  --code-punctuation: var(--text-muted, #a0aec0);
  --codeFont: var(--font-monospace, var(--font-monospace-theme, 'JetBrains Mono', 'Source Code Pro', monospace));
  --collapse-icon-color: var(--text-faint, #718096);
  --collapse-icon-color-collapsed: var(--text-accent, #7dd3c0);
  --dark: var(--text-normal, var(--color-base-100, #e2e8f0));
  --darkgray: var(--text-normal, var(--color-base-100, #e2e8f0));
  --divider-color: var(--background-modifier-border, #4a5568);
  --divider-color-hover: var(--interactive-accent, #7dd3c0);
  --dropdown-background: var(--interactive-normal, #374151);
  --dropdown-background-hover: var(--interactive-hover, #4a5568);
  --file-header-background: var(--background-primary, #1a2332);
  --file-header-background-focused: var(--background-primary, #1a2332);
  --file-header-font: var(--font-interface, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --flair-background: var(--interactive-normal, #374151);
  --flair-color: var(--text-normal, #e2e8f0);
  --font-interface: var(--font-interface-theme, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --font-interface-theme: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mermaid: var(--font-text, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --font-monospace: var(--font-monospace-theme, 'JetBrains Mono', 'Source Code Pro', monospace);
  --font-monospace-theme: 'JetBrains Mono', 'Source Code Pro', monospace;
  --font-text: var(--font-text-theme, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --font-text-theme: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, #4a5568);
  --footnote-id-color: var(--text-muted, #a0aec0);
  --footnote-id-color-no-occurrences: var(--text-faint, #718096);
  --graph-node: var(--text-muted, #a0aec0);
  --graph-node-focused: var(--text-accent, #7dd3c0);
  --graph-node-unresolved: var(--text-faint, #718096);
  --graph-text: var(--text-normal, #e2e8f0);
  --gray: var(--text-muted, var(--color-base-70, #a0aec0));
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
  --headerFont: var(--font-text, var(--font-text-theme, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif));
  --heading-formatting: var(--text-faint, #718096);
  --hr-color: var(--background-modifier-border, #fbbf24);
  --icon-color: var(--text-muted, #7dd3c0);
  --icon-color-active: var(--text-accent, #f561ab);
  --icon-color-focused: var(--text-normal, #fbbf24);
  --icon-color-hover: var(--text-muted, #fde68a);
  --inline-title-color: var(--h1-color, #EF44C0);
  --inline-title-size: var(--h1-size, 2.5em);
  --input-date-separator: var(--text-faint, #718096);
  --input-placeholder-color: var(--text-faint, #718096);
  --interactive-accent: var(--color-accent, #7dd3c0);
  --interactive-accent-hover: var(--color-accent-1, #5eead4);
  --interactive-hover: var(--color-base-35, #4a5568);
  --interactive-normal: var(--color-base-30, #374151);
  --interactive-success: #059669;
  --light: var(--background-primary, var(--color-base-00, #1a2332));
  --lightgray: var(--background-secondary, var(--color-base-20, #374151));
  --link-color: var(--text-accent, #7dd3c0);
  --link-color-hover: var(--text-accent-hover, #5eead4);
  --link-external-color: var(--text-accent, #fbbf24);
  --link-external-color-hover: var(--text-accent-hover, #5eead4);
  --link-unresolved-color: var(--text-accent, #6cf58e);
  --list-marker-color: var(--text-faint, #718096);
  --list-marker-color-collapsed: var(--text-accent, #7dd3c0);
  --list-marker-color-hover: var(--text-muted, #a0aec0);
  --menu-background: var(--background-secondary, #374151);
  --metadata-border-color: var(--background-modifier-border, #4a5568);
  --metadata-divider-color: var(--background-modifier-border, #4a5568);
  --metadata-input-font: var(--font-interface, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --metadata-input-text-color: var(--text-normal, #e2e8f0);
  --metadata-label-font: var(--font-interface, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --metadata-label-text-color: var(--text-muted, #a0aec0);
  --metadata-label-text-color-hover: var(--text-muted, #a0aec0);
  --modal-background: var(--background-primary, #1a2332);
  --nav-collapse-icon-color: var(--collapse-icon-color, #718096);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #718096);
  --nav-heading-color: var(--text-normal, #e2e8f0);
  --nav-heading-color-collapsed: var(--text-faint, #718096);
  --nav-heading-color-collapsed-hover: var(--text-muted, #a0aec0);
  --nav-heading-color-hover: var(--text-normal, #e2e8f0);
  --nav-indentation-guide-color: var(--indentation-guide-color, #59FFD5);
  --nav-item-color: var(--text-muted, #a0aec0);
  --nav-item-color-active: var(--text-normal, #e2e8f0);
  --nav-item-color-highlighted: var(--text-accent, #7dd3c0);
  --nav-item-color-hover: var(--text-normal, #e2e8f0);
  --nav-item-color-selected: var(--text-normal, #e2e8f0);
  --nav-tag-color: var(--text-faint, #718096);
  --nav-tag-color-active: var(--text-muted, #a0aec0);
  --nav-tag-color-hover: var(--text-muted, #a0aec0);
  --pdf-background: var(--background-primary, #1a2332);
  --pdf-page-background: var(--background-primary, #1a2332);
  --pdf-sidebar-background: var(--background-primary, #1a2332);
  --pill-border-color: var(--background-modifier-border, #4a5568);
  --pill-color: var(--text-muted, #a0aec0);
  --pill-color-hover: var(--text-normal, #e2e8f0);
  --pill-color-remove: var(--text-faint, #718096);
  --pill-color-remove-hover: var(--text-accent, #7dd3c0);
  --prompt-background: var(--background-primary, #1a2332);
  --raised-background: var(--blur-background, color-mix(in srgb, #374151 65%, transparent) linear-gradient(#374151, color-mix(in srgb, #374151 65%, transparent)));
  --ribbon-background: var(--background-secondary, #374151);
  --ribbon-background-collapsed: var(--background-primary, #1a2332);
  --search-clear-button-color: var(--text-muted, #a0aec0);
  --search-icon-color: var(--text-muted, #a0aec0);
  --search-result-background: var(--background-primary, #1a2332);
  --secondary: var(--text-accent, var(--color-accent-1, #7dd3c0));
  --setting-group-heading-color: var(--text-normal, #e2e8f0);
  --setting-items-background: var(--background-primary-alt, #2d3748);
  --setting-items-border-color: var(--background-modifier-border, #4a5568);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #a0aec0);
  --shiki-code-background: var(--code-background, #374151);
  --shiki-code-comment: var(--text-faint, #718096);
  --shiki-code-normal: var(--text-muted, #a0aec0);
  --shiki-code-punctuation: var(--text-muted, #a0aec0);
  --shiki-gutter-border-color: var(--background-modifier-border, #4a5568);
  --shiki-gutter-text-color: var(--text-faint, #718096);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #a0aec0);
  --shiki-highlight-neutral: var(--shiki-code-normal, #a0aec0);
  --shiki-terminal-dots-color: var(--text-faint, #718096);
  --slider-track-background: var(--background-modifier-border, #4a5568);
  --status-bar-background: var(--background-secondary, #374151);
  --status-bar-border-color: var(--divider-color, #4a5568);
  --status-bar-text-color: var(--text-muted, #a0aec0);
  --suggestion-background: var(--background-primary, #1a2332);
  --tab-background-active: var(--background-primary, #1a2332);
  --tab-container-background: var(--background-secondary, #374151);
  --tab-outline-color: var(--divider-color, #4a5568);
  --tab-switcher-background: var(--background-secondary, #374151);
  --tab-text-color: var(--text-faint, #718096);
  --tab-text-color-active: var(--text-muted, #a0aec0);
  --tab-text-color-focused: var(--text-muted, #a0aec0);
  --tab-text-color-focused-active: var(--text-muted, #FBBF24);
  --tab-text-color-focused-active-current: var(--text-normal, #e2e8f0);
  --tab-text-color-focused-highlighted: var(--text-accent, #7dd3c0);
  --tab-text-color-unfocused-active: #7dd3c0;
  --table-add-button-border-color: var(--background-modifier-border, #4a5568);
  --table-border-color: var(--background-modifier-border, rgba(125, 211, 192, 0.3));
  --table-drag-handle-background-active: var(--table-selection-border-color, #7dd3c0);
  --table-drag-handle-color: var(--text-faint, #718096);
  --table-drag-handle-color-active: var(--text-on-accent, #1a202c);
  --table-header-background: var(--table-background, linear-gradient(135deg, rgba(125, 211, 192, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%));
  --table-header-border-color: var(--table-border-color, rgba(125, 211, 192, 0.3));
  --table-header-color: var(--text-normal, #e2e8f0);
  --table-row-even-background: rgba(125, 211, 192, 0.03);
  --table-row-hover-background: rgba(251, 191, 36, 0.05);
  --table-selection-border-color: var(--interactive-accent, #7dd3c0);
  --tag-color: var(--text-accent, #fbbf24);
  --tag-color-hover: var(--text-accent, #7dd3c0);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #5eead4));
  --text-accent: var(--color-accent-1, #7dd3c0);
  --text-accent-hover: var(--color-accent-2, #5eead4);
  --text-faint: var(--color-base-50, #718096);
  --text-highlight-bg-active: rgba(251, 191, 36, 0.6);
  --text-highlight-color: var(--avatar-pink, #EF44C0);
  --text-muted: var(--color-base-70, #a0aec0);
  --text-normal: var(--color-base-100, #e2e8f0);
  --text-on-accent: #1a202c;
  --titleFont: var(--font-text, var(--font-text-theme, 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif));
  --titlebar-background: var(--background-secondary, #374151);
  --titlebar-border-color: var(--background-modifier-border, #4a5568);
  --titlebar-text-color: var(--text-muted, #a0aec0);
  --titlebar-text-color-focused: var(--text-normal, #FBBF24);
  --titlebar-text-color-unfocused: #a0aec0;
  --vault-profile-color: var(--text-normal, #e2e8f0);
  --vault-profile-color-hover: var(--vault-profile-color, #e2e8f0);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #374151);
  background-color: var(--tab-container-background, rgb(26, 35, 50));
  color: rgb(226, 232, 240);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(26, 35, 50));
  color: rgb(226, 232, 240);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(55, 65, 81));
  color: rgb(226, 232, 240);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #374151);
  background-color: var(--tab-container-background, rgb(26, 35, 50));
  border-left-color: rgb(128, 128, 128);
  color: rgb(226, 232, 240);
}

html body html {
  --avatar-focus-border: rgba(125, 211, 192, 0.2);
  --avatar-focus-color: #343e4f;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--avatar-bold, rgb(52, 211, 153));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(52, 211, 153) none 0px;
  text-decoration-color: rgb(52, 211, 153);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(129, 140, 248));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(129, 140, 248) none 0px;
  text-decoration-color: rgb(129, 140, 248);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(129, 140, 248));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(129, 140, 248) none 0px;
  text-decoration-color: rgb(129, 140, 248);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, rgb(129, 140, 248));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  outline: rgb(129, 140, 248) none 0px;
  text-decoration-color: rgb(129, 140, 248);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--avatar-bold, rgb(52, 211, 153));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(52, 211, 153) none 0px;
  text-decoration-color: rgb(52, 211, 153);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(72, 43, 177, 0.48));
  color: var(--text-normal, rgb(64, 199, 204));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 500;
  outline: rgb(64, 199, 204) none 0px;
  text-decoration-color: rgb(64, 199, 204);
}

html body del {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(226, 232, 240) none 0px;
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(113, 128, 150);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(125, 211, 192));
  border-color: rgb(125, 211, 192);
}

html body p {
  color: var(--text-muted, rgb(160, 174, 192));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(160, 174, 192) none 0px;
  text-decoration-color: rgb(160, 174, 192);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(251, 191, 36));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(251, 191, 36) none 0px;
  text-decoration-color: rgb(251, 191, 36);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(125, 211, 192));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(125, 211, 192) none 0px;
  text-decoration-color: rgb(125, 211, 192);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(108, 245, 142));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(108, 245, 142) none 0px;
}`,
    lists: `html body dd {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body dt {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body ol > li {
  color: rgb(226, 232, 240);
  margin-left: 30.1875px;
}

html body ul > li {
  color: rgb(226, 232, 240);
  margin-left: 30.1875px;
}

html body ul.overflow {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(113, 128, 150));
}

html body blockquote {
  color: var(--blockquote-color, rgb(225, 220, 242));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body table {
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
}

html body tbody tr:nth-child(even) {
  background-color: var(--table-row-even-background, rgba(125, 211, 192, 0.03));
}

html body td {
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-left-color: rgb(226, 232, 240);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(125, 211, 192, 0.15);
  border-top-color: rgba(125, 211, 192, 0.3);
  color: var(--table-text-color, rgb(226, 232, 240));
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

html body th {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(125, 211, 192);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(125, 211, 192, 0.15);
  border-top-color: rgba(125, 211, 192, 0.3);
  color: var(--avatar-aqua, rgb(125, 211, 192));
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  text-align: left;
}

html body thead {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-left-color: rgba(125, 211, 192, 0.3);
  border-right-color: rgba(125, 211, 192, 0.3);
  border-top-color: rgba(125, 211, 192, 0.3);
}

html body tr {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-left-color: rgba(125, 211, 192, 0.3);
  border-right-color: rgba(125, 211, 192, 0.3);
  border-top-color: rgba(125, 211, 192, 0.3);
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(55, 65, 81));
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  color: var(--code-normal, rgb(226, 232, 240));
  font-family: var(--font-monospace, "JetBrains Mono", "Source Code Pro", monospace);
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(55, 65, 81));
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
}`,
    images: `html body audio {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body figcaption {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body figure {
  --code-background: var(--ec-frm-edBg, #374151);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body img {
  border-bottom-color: rgb(239, 68, 192);
  border-left-color: rgb(239, 68, 192);
  border-right-color: rgb(239, 68, 192);
  border-top-color: rgb(239, 68, 192);
}

html body video {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(45, 55, 72));
  border-bottom-color: rgb(160, 174, 192);
  border-left-color: rgb(160, 174, 192);
  border-right-color: rgb(160, 174, 192);
  border-top-color: rgb(160, 174, 192);
  color: var(--text-muted, rgb(160, 174, 192));
}

html body .footnotes {
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .transclude {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .transclude-inner {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(113, 128, 150);
  border-left-color: rgb(113, 128, 150);
  border-right-color: rgb(113, 128, 150);
  border-top-color: rgb(113, 128, 150);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(226, 232, 240);
}

html li.task-list-item[data-task="body"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="."] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="="] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(160, 174, 192);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(160, 174, 192);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 35, 50);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 35, 50);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
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
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(99, 102, 241, 0.08) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(235, 61, 102, 0.518) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(237, 49, 93, 0.61);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 49, 93, 0.61);
  border-left-width: 4px;
  border-right-color: rgba(237, 49, 93, 0.61);
  border-top-color: rgba(237, 49, 93, 0.61);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(235, 61, 102, 0.518) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(237, 49, 93, 0.61);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 49, 93, 0.61);
  border-left-width: 4px;
  border-right-color: rgba(237, 49, 93, 0.61);
  border-top-color: rgba(237, 49, 93, 0.61);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(99, 102, 241, 0.08) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(224, 235, 73, 0.545) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(214, 47, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(214, 47, 35);
  border-left-width: 4px;
  border-right-color: rgb(214, 47, 35);
  border-top-color: rgb(214, 47, 35);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(68, 56, 202, 0.545) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(248, 191, 40);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(248, 191, 40);
  border-left-width: 4px;
  border-right-color: rgb(248, 191, 40);
  border-top-color: rgb(248, 191, 40);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(99, 102, 241, 0.08) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(133, 36, 251, 0.08) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(251, 191, 36, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(125, 211, 192, 0.08) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(8, 250, 169);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(8, 250, 169);
  border-left-width: 4px;
  border-right-color: rgb(8, 250, 169);
  border-top-color: rgb(8, 250, 169);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(11, 112, 200, 0.48) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(225, 63, 243);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(225, 63, 243);
  border-left-width: 4px;
  border-right-color: rgb(225, 63, 243);
  border-top-color: rgb(225, 63, 243);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(68, 56, 202, 0.545) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(248, 191, 40);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(248, 191, 40);
  border-left-width: 4px;
  border-right-color: rgb(248, 191, 40);
  border-top-color: rgb(248, 191, 40);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(251, 191, 36, 0.08) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(226, 232, 240);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 203, 209));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(226, 232, 240);
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
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, rgb(226, 232, 240));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(52, 62, 79));
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(125, 211, 192, 0.2);
  border-right-color: rgba(125, 211, 192, 0.2);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(226, 232, 240) none 0px;
  text-decoration-color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(125, 211, 192, 0.2);
  border-right-color: rgba(125, 211, 192, 0.2);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search > .search-container > .search-space > input {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(226, 232, 240);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(251, 191, 36, 0.2));
  --pill-background-hover: var(--tag-background-hover, rgba(251, 191, 36, 0.3));
  --pill-color: var(--tag-color, #fbbf24);
  --pill-color-hover: var(--tag-color-hover, #7dd3c0);
  --pill-color-remove: var(--tag-color, #fbbf24);
  --pill-color-remove-hover: var(--tag-color-hover, #7dd3c0);
  background-color: var(--pill-background, rgba(251, 191, 36, 0.2));
  color: var(--pill-color, rgb(251, 191, 36));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(251, 191, 36);
}

html body h1 {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(239, 68, 192);
  border-right-color: rgb(239, 68, 192);
  border-top-color: rgb(239, 68, 192);
  color: var(--h1-color, rgb(239, 68, 192));
  font-family: var(--h1-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: var(--h1-size, 40px);
  letter-spacing: var(--h1-letter-spacing, -0.6px);
  line-height: var(--h1-line-height, 48px);
  padding-bottom: 8px;
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(239, 68, 192));
  font-size: var(--inline-title-size, 40px);
}

html body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgba(125, 211, 192, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(167, 139, 250);
  border-right-color: rgb(167, 139, 250);
  border-top-color: rgb(167, 139, 250);
  color: var(--h2-color, rgb(167, 139, 250));
  font-family: var(--h2-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: var(--h2-size, 32px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 38.4px);
  padding-bottom: 6px;
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(239, 68, 192);
  border-left-color: rgb(239, 68, 192);
  border-right-color: rgb(239, 68, 192);
  border-top-color: rgb(239, 68, 192);
  color: var(--inline-title-color, rgb(239, 68, 192));
  font-family: var(--inline-title-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: var(--inline-title-size, 40px);
  letter-spacing: -0.6px;
  line-height: var(--inline-title-line-height, 48px);
  margin-bottom: 20px;
}

html body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgba(251, 191, 36, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(251, 191, 36);
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  color: var(--h3-color, rgb(251, 191, 36));
  font-family: var(--h3-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: var(--h3-size, 25.6px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.2048px);
  line-height: var(--h3-line-height, 33.28px);
  padding-bottom: 4px;
}

html body h4 {
  --font-weight: var(--h4-weight, 500);
  border-bottom-color: rgb(94, 234, 212);
  border-left-color: rgb(94, 234, 212);
  border-right-color: rgb(94, 234, 212);
  border-top-color: rgb(94, 234, 212);
  color: var(--h4-color, rgb(94, 234, 212));
  font-family: var(--h4-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: var(--h4-size, 20.8px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h4-letter-spacing, -0.104px);
  line-height: var(--h4-line-height, 29.12px);
}

html body h5 {
  --font-weight: var(--h5-weight, 500);
  border-bottom-color: rgb(125, 211, 192);
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(125, 211, 192);
  border-top-color: rgb(125, 211, 192);
  color: var(--h5-color, rgb(125, 211, 192));
  font-family: var(--h5-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: var(--h5-size, 17.6px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h5-letter-spacing, -0.0352px);
  line-height: var(--h5-line-height, 26.4px);
}

html body h6 {
  --font-weight: var(--h6-weight, 500);
  border-bottom-color: rgb(99, 102, 241);
  border-left-color: rgb(99, 102, 241);
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  color: var(--h6-color, rgb(99, 102, 241));
  font-family: var(--h6-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-weight: var(--font-weight, 500);
}

html body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(251, 191, 36);
  border-top-style: solid;
  border-top-width: 3px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    explorer: `html body .nav-files-container {
  background-color: rgba(45, 55, 72, 0.3);
}

html body .nav-files-container .tree-item-children {
  border-left-color: rgba(125, 211, 192, 0.2);
}

html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(160, 174, 192));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(160, 174, 192));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(226, 232, 240);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(125, 211, 192);
  border-top-color: rgb(125, 211, 192);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(125, 211, 192));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(52, 62, 79));
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 0px;
  color: var(--text-muted, rgb(160, 174, 192));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body footer ul li a {
  color: var(--avatar-gold, rgb(251, 191, 36));
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(160, 174, 192));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body li.section-li > .section .meta {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(160, 174, 192));
}

html body ul.section-ul {
  background-color: rgba(45, 55, 72, 0.3);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(125, 211, 192);
  border-top-color: rgb(125, 211, 192);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(125, 211, 192));
}

html body .darkmode svg {
  color: rgb(125, 211, 192);
  stroke: rgb(125, 211, 192);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(251, 191, 36);
  border-left-color: rgb(251, 191, 36);
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  color: var(--avatar-gold, rgb(251, 191, 36));
}

html body .breadcrumb-element p {
  color: var(--avatar-gold, rgb(251, 191, 36));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(226, 232, 240);
}

html body .canvas-node-content {
  color: rgb(226, 232, 240);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(226, 232, 240));
}

html body .canvas-node-group {
  border-color: rgb(226, 232, 240);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(55, 65, 81));
  border-color: rgb(226, 232, 240);
}`,
    bases: `html body .bases-table {
  border-color: rgba(125, 211, 192, 0.3);
}

html body .bases-table thead th {
  border-color: rgba(125, 211, 192, 0.3) rgba(125, 211, 192, 0.15) rgb(125, 211, 192) rgb(125, 211, 192);
  color: var(--avatar-aqua, rgb(125, 211, 192));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  color: var(--text-muted, rgb(160, 174, 192));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .metadata-container .metadata-property {
  border-bottom-color: rgb(160, 174, 192);
  border-left-color: rgb(160, 174, 192);
  border-right-color: rgb(160, 174, 192);
  border-top-color: rgb(160, 174, 192);
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(160, 174, 192);
  border-left-color: rgb(160, 174, 192);
  border-right-color: rgb(160, 174, 192);
  border-top-color: rgb(160, 174, 192);
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .metadata-property-key {
  color: rgb(160, 174, 192);
  font-family: var(--metadata-label-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}

html body .metadata-property-value {
  color: rgb(160, 174, 192);
  font-family: var(--metadata-input-font, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}

html body .note-properties {
  border-color: rgb(74, 85, 104);
}

html body .note-properties-key {
  color: rgb(160, 174, 192);
}

html body .note-properties-row {
  border-color: rgb(160, 174, 192);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(251, 191, 36, 0.2));
  --pill-background-hover: var(--tag-background-hover, rgba(251, 191, 36, 0.3));
  --pill-color: var(--tag-color, #fbbf24);
  --pill-color-hover: var(--tag-color-hover, #7dd3c0);
  --pill-color-remove: var(--tag-color, #fbbf24);
  --pill-color-remove-hover: var(--tag-color-hover, #7dd3c0);
  background-color: var(--pill-background, rgba(251, 191, 36, 0.2));
  color: var(--pill-color, rgb(251, 191, 36));
}

html body .note-properties-value {
  color: rgb(160, 174, 192);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(26, 35, 50));
  color: var(--text-normal, rgb(226, 232, 240));
}

html body ol.overflow {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(55, 65, 81));
  border-color: rgb(226, 232, 240);
}

html body .stacked-page.active {
  border-color: rgb(226, 232, 240);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(52, 62, 79));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: var(--avatar-gold, rgb(226, 232, 240));
  font-family: Kalam, cursive;
  font-weight: 600;
}

html body abbr {
  color: rgb(226, 232, 240);
}

html body details {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body input[type=text] {
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
  color: var(--text-normal, rgb(160, 174, 192));
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body kbd {
  background-color: var(--code-background, rgb(55, 65, 81));
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: var(--code-normal, rgb(226, 232, 240));
  font-family: var(--font-monospace, "JetBrains Mono", "Source Code Pro", monospace);
}

html body progress {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body sub {
  color: rgb(226, 232, 240);
}

html body summary {
  color: rgb(226, 232, 240);
}

html body sup {
  color: rgb(226, 232, 240);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(251, 191, 36, 0.2));
  color: var(--tag-color, rgb(251, 191, 36));
}`,
  },
  light: {},
};
