import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "museifu-basic",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
    fontFiles: [
      {
        family: "JetBrains Mono",
        style: "normal",
        weight: "400",
        file: "jetbrains-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: rgb(22, 22, 22);
  --background-primary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%);
  --background-secondary: rgb(24, 24, 24);
  --background-secondary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 50%, transparent 0%);
  --bases-cards-background: rgb(22, 22, 22);
  --bases-cards-cover-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%);
  --bases-group-heading-property-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --bases-table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%);
  --bases-table-cell-background-active: rgb(22, 22, 22);
  --bases-table-cell-background-disabled: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%);
  --bases-table-group-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%);
  --bases-table-header-background: rgb(22, 22, 22);
  --bases-table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --bases-table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --bases-table-summary-background: rgb(22, 22, 22);
  --bodyFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #ffffff 20%);
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --canvas-card-label-color: hsl(258, 88%, 66%);
  --canvas-dot-pattern: rgb(102, 102, 102);
  --caret-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --checkbox-border-color: hsl(258, 88%, 66%);
  --checkbox-border-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --checkbox-marker-color: rgb(22, 22, 22);
  --checkbox-radius: 15px;
  --checklist-done-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --code-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --code-comment: hsl(258, 88%, 66%);
  --code-punctuation: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --codeFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: hsl(258, 88%, 66%);
  --color-accent-trans: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --dark: var(--text-normal, color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%));
  --dark-or-white-var: #ffffff;
  --darkgray: var(--text-normal, color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%));
  --default-font: 'JetBrains Mono', monospace;
  --file-header-background: rgb(22, 22, 22);
  --file-header-background-focused: rgb(22, 22, 22);
  --file-header-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --font-interface: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%);
  --graph-node: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --graph-node-unresolved: hsl(258, 88%, 66%);
  --graph-text: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --gray: var(--text-muted, color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%));
  --grid-size: 64px;
  --headerFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: hsl(258, 88%, 66%);
  --highlight: var(--text-highlight-bg, color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%));
  --icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --icon-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --icon-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --input-date-separator: hsl(258, 88%, 66%);
  --input-placeholder-color: hsl(258, 88%, 66%);
  --interactive-color: hsl(258, 88%, 66%);
  --italic-color: color-mix(in srgb, hsl(258, 88%, 66%) 60%, #ffffff 20%);
  --large-kanban-width: 400px;
  --light: var(--background-primary, rgb(22, 22, 22));
  --lightgray: var(--background-secondary, rgb(24, 24, 24));
  --list-marker-color: hsl(258, 88%, 66%);
  --list-marker-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --menu-background: rgb(24, 24, 24);
  --metadata-input-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --metadata-label-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --metadata-label-text-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --modal-background: rgb(22, 22, 22);
  --nav-collapse-icon-color: hsl(258, 88%, 66%);
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --nav-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-heading-color-collapsed: hsl(258, 88%, 66%);
  --nav-heading-color-collapsed-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-heading-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-item-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-item-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-item-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-item-color-selected: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-tag-color: hsl(258, 88%, 66%);
  --nav-tag-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --nav-tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --pdf-background: rgb(22, 22, 22);
  --pdf-page-background: rgb(22, 22, 22);
  --pdf-sidebar-background: rgb(22, 22, 22);
  --pen-black: #26241f;
  --pen-blue: #3f76ed;
  --pen-gray: #5f5d58;
  --pen-green: #15b64f;
  --pen-light-blue: #54b6f8;
  --pen-museifu-cream: #804620;
  --pen-museifu-dark: #838383;
  --pen-museifu-paperdark: #beb7b7;
  --pen-museifu-paperlike: #32302c;
  --pen-museifu-simple: #edf1fc;
  --pen-purple: #9b4ff0;
  --pen-red: #e14a49;
  --pen-white: #edf1fc;
  --pill-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --pill-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --pill-color-remove: hsl(258, 88%, 66%);
  --prompt-background: rgb(22, 22, 22);
  --ribbon-background: rgb(24, 24, 24);
  --ribbon-background-collapsed: rgb(22, 22, 22);
  --search-clear-button-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --search-icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --search-result-background: rgb(22, 22, 22);
  --setting-group-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --setting-items-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%);
  --shiki-active-tab-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --shiki-code-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --shiki-code-comment: hsl(258, 88%, 66%);
  --shiki-code-normal: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --shiki-code-punctuation: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --shiki-gutter-text-color: hsl(258, 88%, 66%);
  --shiki-gutter-text-color-highlight: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --shiki-highlight-neutral: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --shiki-terminal-dots-color: hsl(258, 88%, 66%);
  --status-bar-background: rgb(24, 24, 24);
  --status-bar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --suggestion-background: rgb(22, 22, 22);
  --tab-background-active: rgb(22, 22, 22);
  --tab-container-background: rgb(24, 24, 24);
  --tab-switcher-background: rgb(24, 24, 24);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 24, 24), transparent);
  --tab-text-color: hsl(258, 88%, 66%);
  --tab-text-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --tab-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --tab-text-color-focused-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --table-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%);
  --table-column-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-drag-handle-color: hsl(258, 88%, 66%);
  --table-header-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-header-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%);
  --table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #ffffff 20%);
  --table-row-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-row-alt-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --text-faint: hsl(258, 88%, 66%);
  --text-highlight-bg: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%);
  --text-muted: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --text-normal: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --textHighlight: var(--text-highlight-bg, color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%));
  --titleFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: rgb(24, 24, 24);
  --titlebar-background-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, transparent 0%);
  --titlebar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --titlebar-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --vault-profile-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --vault-profile-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body html {
  --default-font: 'JetBrains Mono', monospace;
  --font-interface-theme: 'JetBrains Mono', monospace;
  --font-text-theme: 'JetBrains Mono', monospace;
  --large-kanban-width: 400px;
  --pen-black: #26241f;
  --pen-blue: #3f76ed;
  --pen-gray: #5f5d58;
  --pen-green: #15b64f;
  --pen-light-blue: #54b6f8;
  --pen-museifu-cream: #804620;
  --pen-museifu-dark: #838383;
  --pen-museifu-paperdark: #beb7b7;
  --pen-museifu-paperlike: #32302c;
  --pen-museifu-simple: #edf1fc;
  --pen-purple: #9b4ff0;
  --pen-red: #e14a49;
  --pen-white: #edf1fc;
  --radius-l: 15px;
  --radius-m: 10px;
  --radius-s: 5px;
  --radius-xl: 20px;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body footer {
  opacity: 0;
}

html[saved-theme="dark"] body h1.article-title {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 15px;
}

html[saved-theme="dark"] body p {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body table {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.632256 0.48864 0.96736);
}

html[saved-theme="dark"] body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body img {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body video {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: color(srgb 0.616933 0.467333 0.966 / 0.6);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background: color(srgb 0 0 0 / 0.272727) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.272727);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0.862096 0.80824 0.98776);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h1 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h1.article-title {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body h2 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h4 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h5 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h6 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.862096 0.80824 0.98776);
  stroke: color(srgb 0.862096 0.80824 0.98776);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 24, 24);
  border-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.632256 0.48864 0.96736);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(24, 24, 24);
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.5);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: rgb(228, 228, 228);
  --background-primary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%);
  --background-secondary: rgb(197, 197, 197);
  --background-secondary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%);
  --bases-cards-background: rgb(228, 228, 228);
  --bases-cards-cover-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%);
  --bases-group-heading-property-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --bases-table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%);
  --bases-table-cell-background-active: rgb(228, 228, 228);
  --bases-table-cell-background-disabled: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%);
  --bases-table-group-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%);
  --bases-table-header-background: rgb(228, 228, 228);
  --bases-table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --bases-table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --bases-table-summary-background: rgb(228, 228, 228);
  --blur-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent));
  --bodyFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #000000 20%);
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --canvas-card-label-color: hsl(258, 88%, 66%);
  --canvas-dot-pattern: rgb(102, 102, 102);
  --caret-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --checkbox-border-color: hsl(258, 88%, 66%);
  --checkbox-border-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-marker-color: rgb(228, 228, 228);
  --checkbox-radius: 15px;
  --checklist-done-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --code-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --code-comment: hsl(258, 88%, 66%);
  --code-normal: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --code-punctuation: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --codeFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: hsl(258, 88%, 66%);
  --color-accent-trans: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --dark: var(--text-normal, color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%));
  --dark-or-white-var: #000000;
  --darkgray: var(--text-normal, color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%));
  --default-font: 'JetBrains Mono', monospace;
  --file-header-background: rgb(228, 228, 228);
  --file-header-background-focused: rgb(228, 228, 228);
  --file-header-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --font-interface: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%);
  --graph-node: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --graph-node-unresolved: hsl(258, 88%, 66%);
  --graph-text: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --gray: var(--text-muted, color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%));
  --grid-size: 64px;
  --headerFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: hsl(258, 88%, 66%);
  --highlight: var(--text-highlight-bg, color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%));
  --icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --icon-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --icon-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --input-date-separator: hsl(258, 88%, 66%);
  --input-placeholder-color: hsl(258, 88%, 66%);
  --interactive-color: hsl(258, 88%, 66%);
  --italic-color: color-mix(in srgb, hsl(258, 88%, 66%) 60%, #000000 20%);
  --large-kanban-width: 400px;
  --light: var(--background-primary, rgb(228, 228, 228));
  --lightgray: var(--background-secondary, rgb(197, 197, 197));
  --list-marker-color: hsl(258, 88%, 66%);
  --list-marker-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --menu-background: rgb(197, 197, 197);
  --metadata-input-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --metadata-label-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --metadata-label-text-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --modal-background: rgb(228, 228, 228);
  --nav-collapse-icon-color: hsl(258, 88%, 66%);
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --nav-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-heading-color-collapsed: hsl(258, 88%, 66%);
  --nav-heading-color-collapsed-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-heading-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-item-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-item-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-item-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-item-color-selected: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-tag-color: hsl(258, 88%, 66%);
  --nav-tag-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --nav-tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --pdf-background: rgb(228, 228, 228);
  --pdf-page-background: rgb(228, 228, 228);
  --pdf-sidebar-background: rgb(228, 228, 228);
  --pen-black: #26241f;
  --pen-blue: #3f76ed;
  --pen-gray: #5f5d58;
  --pen-green: #15b64f;
  --pen-light-blue: #54b6f8;
  --pen-museifu-cream: #804620;
  --pen-museifu-dark: #838383;
  --pen-museifu-paperdark: #beb7b7;
  --pen-museifu-paperlike: #32302c;
  --pen-museifu-simple: #edf1fc;
  --pen-purple: #9b4ff0;
  --pen-red: #e14a49;
  --pen-white: #edf1fc;
  --pill-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --pill-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --pill-color-remove: hsl(258, 88%, 66%);
  --prompt-background: rgb(228, 228, 228);
  --raised-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent));
  --ribbon-background: rgb(197, 197, 197);
  --ribbon-background-collapsed: rgb(228, 228, 228);
  --search-clear-button-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --search-icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --search-result-background: rgb(228, 228, 228);
  --setting-group-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --setting-items-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%);
  --shiki-active-tab-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --shiki-code-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%);
  --shiki-code-comment: hsl(258, 88%, 66%);
  --shiki-code-normal: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --shiki-code-punctuation: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --shiki-gutter-text-color: hsl(258, 88%, 66%);
  --shiki-gutter-text-color-highlight: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --shiki-highlight-neutral: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --shiki-terminal-dots-color: hsl(258, 88%, 66%);
  --status-bar-background: rgb(197, 197, 197);
  --status-bar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --suggestion-background: rgb(228, 228, 228);
  --tab-background-active: rgb(228, 228, 228);
  --tab-container-background: rgb(197, 197, 197);
  --tab-switcher-background: rgb(197, 197, 197);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(197, 197, 197), transparent);
  --tab-text-color: hsl(258, 88%, 66%);
  --tab-text-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --tab-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --tab-text-color-focused-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --table-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%);
  --table-column-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-drag-handle-color: hsl(258, 88%, 66%);
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-header-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%);
  --table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #000000 20%);
  --table-row-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-row-alt-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%);
  --text-faint: hsl(258, 88%, 66%);
  --text-highlight-bg: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%);
  --text-muted: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --text-normal: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --text-on-accent: #ffffff;
  --textHighlight: var(--text-highlight-bg, color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%));
  --titleFont: var(--font-interface, JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: rgb(197, 197, 197);
  --titlebar-background-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%);
  --titlebar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --titlebar-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --vault-profile-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --vault-profile-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(197, 197, 197);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body html {
  --default-font: 'JetBrains Mono', monospace;
  --font-interface-theme: 'JetBrains Mono', monospace;
  --font-text-theme: 'JetBrains Mono', monospace;
  --large-kanban-width: 400px;
  --pen-black: #26241f;
  --pen-blue: #3f76ed;
  --pen-gray: #5f5d58;
  --pen-green: #15b64f;
  --pen-light-blue: #54b6f8;
  --pen-museifu-cream: #804620;
  --pen-museifu-dark: #838383;
  --pen-museifu-paperdark: #beb7b7;
  --pen-museifu-paperlike: #32302c;
  --pen-museifu-simple: #edf1fc;
  --pen-purple: #9b4ff0;
  --pen-red: #e14a49;
  --pen-white: #edf1fc;
  --radius-l: 15px;
  --radius-m: 10px;
  --radius-s: 5px;
  --radius-xl: 20px;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body footer {
  opacity: 0;
}

html[saved-theme="light"] body h1.article-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 15px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body p {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body a.internal-link.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body table {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="light"] body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.432256 0.28864 0.76736);
}

html[saved-theme="light"] body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body img {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body video {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: color(srgb 0.450267 0.300667 0.799333 / 0.6);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  background: color(srgb 0 0 0 / 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0 0 0 / 0.05);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h1 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h1.article-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body h2 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h4 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h5 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h6 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  stroke: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(228, 228, 228);
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.432256 0.28864 0.76736);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(197, 197, 197);
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(197, 197, 197);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body progress {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
  },
};
