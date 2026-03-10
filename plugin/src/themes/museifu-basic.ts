import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "museifu-basic",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: rgb(22, 22, 22);
  --background-primary-alt: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%);
  --background-secondary: rgb(24, 24, 24);
  --background-secondary-alt: color-mix(in srgb, rgb(138, 92, 245) 50%, transparent 0%);
  --bases-cards-background: rgb(22, 22, 22);
  --bases-cards-cover-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%);
  --bases-group-heading-property-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --bases-table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%);
  --bases-table-cell-background-active: rgb(22, 22, 22);
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%);
  --bases-table-group-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%);
  --bases-table-header-background: rgb(22, 22, 22);
  --bases-table-header-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --bases-table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --bases-table-summary-background: rgb(22, 22, 22);
  --bodyFont: var(--font-interface);
  --bold-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #ffffff 20%);
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%);
  --canvas-card-label-color: rgb(138, 92, 245);
  --canvas-dot-pattern: rgb(102, 102, 102);
  --caret-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --checkbox-border-color: rgb(138, 92, 245);
  --checkbox-border-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --checkbox-marker-color: rgb(22, 22, 22);
  --checkbox-radius: 15px;
  --checklist-done-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --code-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%);
  --code-comment: rgb(138, 92, 245);
  --code-punctuation: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --codeFont: var(--font-interface);
  --collapse-icon-color: rgb(138, 92, 245);
  --color-accent-trans: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%);
  --dark: var(--text-normal);
  --dark-or-white-var: #ffffff;
  --darkgray: var(--text-normal);
  --default-font: 'JetBrains Mono', monospace;
  --file-header-background: rgb(22, 22, 22);
  --file-header-background-focused: rgb(22, 22, 22);
  --file-header-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --font-interface: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --footnote-id-color-no-occurrences: rgb(138, 92, 245);
  --graph-node: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --graph-node-unresolved: rgb(138, 92, 245);
  --graph-text: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --gray: var(--text-muted);
  --grid-size: 64px;
  --headerFont: var(--font-interface);
  --heading-formatting: rgb(138, 92, 245);
  --highlight: var(--text-highlight-bg);
  --icon-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --icon-color-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --icon-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --input-date-separator: rgb(138, 92, 245);
  --input-placeholder-color: rgb(138, 92, 245);
  --interactive-color: rgb(138, 92, 245);
  --italic-color: color-mix(in srgb, rgb(138, 92, 245) 60%, #ffffff 20%);
  --large-kanban-width: 400px;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --menu-background: rgb(24, 24, 24);
  --metadata-input-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --metadata-label-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --metadata-label-text-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --modal-background: rgb(22, 22, 22);
  --nav-collapse-icon-color: rgb(138, 92, 245);
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245);
  --nav-heading-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-heading-color-collapsed: rgb(138, 92, 245);
  --nav-heading-color-collapsed-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-heading-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-item-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-item-color-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-item-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-item-color-selected: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-tag-color: rgb(138, 92, 245);
  --nav-tag-color-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --nav-tag-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
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
  --pill-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --pill-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --pill-color-remove: rgb(138, 92, 245);
  --prompt-background: rgb(22, 22, 22);
  --ribbon-background: rgb(24, 24, 24);
  --ribbon-background-collapsed: rgb(22, 22, 22);
  --search-clear-button-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --search-icon-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --search-result-background: rgb(22, 22, 22);
  --setting-group-heading-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --setting-items-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%);
  --status-bar-background: rgb(24, 24, 24);
  --status-bar-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --suggestion-background: rgb(22, 22, 22);
  --tab-background-active: rgb(22, 22, 22);
  --tab-container-background: rgb(24, 24, 24);
  --tab-switcher-background: rgb(24, 24, 24);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 24, 24), transparent);
  --tab-text-color: rgb(138, 92, 245);
  --tab-text-color-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --tab-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --tab-text-color-focused-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --tab-text-color-focused-active-current: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --table-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%);
  --table-column-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-drag-handle-color: rgb(138, 92, 245);
  --table-header-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-header-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%);
  --table-header-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #ffffff 20%);
  --table-row-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-row-alt-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --text-faint: rgb(138, 92, 245);
  --text-highlight-bg: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%);
  --text-muted: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --text-normal: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: rgb(24, 24, 24);
  --titlebar-background-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, transparent 0%);
  --titlebar-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --titlebar-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --vault-profile-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --vault-profile-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration: color(srgb 0.632256 0.48864 0.96736);
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

body .page article p > em, em {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

body .page article p > i, i {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

body .page article p > strong, strong {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration: color(srgb 0.632256 0.48864 0.96736);
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body del {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: line-through color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body p {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    links: `body a.external, footer a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `body dd {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body dt {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body ol > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body ol.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ul > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body ul.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body table {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.632256 0.48864 0.96736);
}

body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body figcaption {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body figure {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body img {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body video {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.616933 0.467333 0.966 / 0.6);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .footnotes {
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .transclude {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .transclude-inner {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: line-through color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
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
}

body .callout[data-callout="bug"] {
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
}

body .callout[data-callout="danger"] {
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
}

body .callout[data-callout="example"] {
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
}

body .callout[data-callout="failure"] {
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
}

body .callout[data-callout="info"] {
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
}

body .callout[data-callout="note"] {
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
}

body .callout[data-callout="question"] {
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
}

body .callout[data-callout="quote"] {
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
}

body .callout[data-callout="success"] {
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
}

body .callout[data-callout="tip"] {
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
}

body .callout[data-callout="todo"] {
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
}

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

body h1 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h2 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h2.page-title, h2.page-title a {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h4 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h5 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h6 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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
}

body ::-webkit-scrollbar {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    footer: `body footer {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body footer ul li a {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.section-li > .section .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .darkmode svg {
  color: color(srgb 0.862096 0.80824 0.98776);
  stroke: color(srgb 0.862096 0.80824 0.98776);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .metadata {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

body .page-header h2.page-title {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body abbr {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: underline dotted color(srgb 0.862096 0.80824 0.98776);
}

body details {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body progress {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body sub {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body summary {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body sup {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: rgb(228, 228, 228);
  --background-primary-alt: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%);
  --background-secondary: rgb(197, 197, 197);
  --background-secondary-alt: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%);
  --bases-cards-background: rgb(228, 228, 228);
  --bases-cards-cover-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%);
  --bases-group-heading-property-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --bases-table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%);
  --bases-table-cell-background-active: rgb(228, 228, 228);
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%);
  --bases-table-group-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%);
  --bases-table-header-background: rgb(228, 228, 228);
  --bases-table-header-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --bases-table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --bases-table-summary-background: rgb(228, 228, 228);
  --blur-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent));
  --bodyFont: var(--font-interface);
  --bold-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #000000 20%);
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%);
  --canvas-card-label-color: rgb(138, 92, 245);
  --canvas-dot-pattern: rgb(102, 102, 102);
  --caret-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --checkbox-border-color: rgb(138, 92, 245);
  --checkbox-border-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-marker-color: rgb(228, 228, 228);
  --checkbox-radius: 15px;
  --checklist-done-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --code-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%);
  --code-comment: rgb(138, 92, 245);
  --code-normal: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --code-punctuation: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --codeFont: var(--font-interface);
  --collapse-icon-color: rgb(138, 92, 245);
  --color-accent-trans: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%);
  --dark: var(--text-normal);
  --dark-or-white-var: #000000;
  --darkgray: var(--text-normal);
  --default-font: 'JetBrains Mono', monospace;
  --file-header-background: rgb(228, 228, 228);
  --file-header-background-focused: rgb(228, 228, 228);
  --file-header-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --font-interface: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --footnote-id-color-no-occurrences: rgb(138, 92, 245);
  --graph-node: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --graph-node-unresolved: rgb(138, 92, 245);
  --graph-text: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --gray: var(--text-muted);
  --grid-size: 64px;
  --headerFont: var(--font-interface);
  --heading-formatting: rgb(138, 92, 245);
  --highlight: var(--text-highlight-bg);
  --icon-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --icon-color-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --icon-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --input-date-separator: rgb(138, 92, 245);
  --input-placeholder-color: rgb(138, 92, 245);
  --interactive-color: rgb(138, 92, 245);
  --italic-color: color-mix(in srgb, rgb(138, 92, 245) 60%, #000000 20%);
  --large-kanban-width: 400px;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --menu-background: rgb(197, 197, 197);
  --metadata-input-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --metadata-label-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --metadata-label-text-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --modal-background: rgb(228, 228, 228);
  --nav-collapse-icon-color: rgb(138, 92, 245);
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245);
  --nav-heading-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-heading-color-collapsed: rgb(138, 92, 245);
  --nav-heading-color-collapsed-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-heading-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-item-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-item-color-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-item-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-item-color-selected: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-tag-color: rgb(138, 92, 245);
  --nav-tag-color-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --nav-tag-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
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
  --pill-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --pill-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --pill-color-remove: rgb(138, 92, 245);
  --prompt-background: rgb(228, 228, 228);
  --raised-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent));
  --ribbon-background: rgb(197, 197, 197);
  --ribbon-background-collapsed: rgb(228, 228, 228);
  --search-clear-button-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --search-icon-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --search-result-background: rgb(228, 228, 228);
  --setting-group-heading-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --setting-items-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%);
  --status-bar-background: rgb(197, 197, 197);
  --status-bar-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --suggestion-background: rgb(228, 228, 228);
  --tab-background-active: rgb(228, 228, 228);
  --tab-container-background: rgb(197, 197, 197);
  --tab-switcher-background: rgb(197, 197, 197);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(197, 197, 197), transparent);
  --tab-text-color: rgb(138, 92, 245);
  --tab-text-color-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --tab-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --tab-text-color-focused-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --tab-text-color-focused-active-current: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --table-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%);
  --table-column-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-drag-handle-color: rgb(138, 92, 245);
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-header-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%);
  --table-header-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #000000 20%);
  --table-row-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-row-alt-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%);
  --text-faint: rgb(138, 92, 245);
  --text-highlight-bg: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%);
  --text-muted: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --text-normal: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --text-on-accent: #ffffff;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: rgb(197, 197, 197);
  --titlebar-background-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%);
  --titlebar-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --titlebar-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --vault-profile-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --vault-profile-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(197, 197, 197);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body div#quartz-root {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration: color(srgb 0.432256 0.28864 0.76736);
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

body .page article p > em, em {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

body .page article p > i, i {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

body .page article p > strong, strong {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration: color(srgb 0.432256 0.28864 0.76736);
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body del {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: line-through color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body p {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    links: `body a.external, footer a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `body dd {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body dt {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ol > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ol.overflow {
  background-color: rgb(228, 228, 228);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ul > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ul.overflow {
  background-color: rgb(228, 228, 228);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body table {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.432256 0.28864 0.76736);
}

body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body figcaption {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body figure {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body img {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body video {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.450267 0.300667 0.799333 / 0.6);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .footnotes {
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .transclude {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .transclude-inner {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: line-through color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
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
}

body .callout[data-callout="bug"] {
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
}

body .callout[data-callout="danger"] {
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
}

body .callout[data-callout="example"] {
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
}

body .callout[data-callout="failure"] {
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
}

body .callout[data-callout="info"] {
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
}

body .callout[data-callout="note"] {
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
}

body .callout[data-callout="question"] {
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
}

body .callout[data-callout="quote"] {
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
}

body .callout[data-callout="success"] {
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
}

body .callout[data-callout="tip"] {
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
}

body .callout[data-callout="todo"] {
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
}

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(228, 228, 228);
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

body h1 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h2 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h2.page-title, h2.page-title a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h4 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h5 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h6 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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
}

body ::-webkit-scrollbar {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-corner {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-track {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    footer: `body footer {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body footer ul li a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.section-li > .section .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .darkmode svg {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  stroke: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .metadata {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .navigation-progress {
  background-color: rgb(197, 197, 197);
}

body .page-header h2.page-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body abbr {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: underline dotted color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body details {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body progress {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body sub {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body summary {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body sup {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
  },
};
