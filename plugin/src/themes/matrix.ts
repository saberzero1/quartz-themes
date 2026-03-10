import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "matrix", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 140;
  --accent-l: 50%;
  --accent-s: 100%;
  --background-modifier-active: #164a30;
  --background-modifier-active-hover: rgba(0, 255, 85, 0.1);
  --background-modifier-border: #0b2a1a;
  --background-modifier-cover: rgba(0, 0, 0, 0.82);
  --background-modifier-form-field: #07140c;
  --background-modifier-form-field-highlighted: #0e2117;
  --background-modifier-form-field-hover: #07140c;
  --background-modifier-hover: #103422;
  --background-primary: #000000;
  --background-primary-alt: #030d06;
  --background-secondary: #06160d;
  --background-secondary-alt: #0a2015;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #030d06;
  --bases-cards-shadow: 0 0 0 1px #0b2a1a;
  --bases-embed-border-color: #0b2a1a;
  --bases-group-heading-property-color: #7affe0;
  --bases-table-border-color: #0b2a1a;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #030d06;
  --bases-table-cell-background-selected: rgba(0, 255, 85, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #00ff41;
  --bases-table-group-background: #030d06;
  --bases-table-header-background: #000000;
  --bases-table-header-background-hover: #103422;
  --bases-table-header-color: #7affe0;
  --bases-table-summary-background: #000000;
  --bases-table-summary-background-hover: #103422;
  --blockquote-border-color: #00ff41;
  --blur-background: color-mix(in srgb, #0a2418 65%, transparent) linear-gradient(#0a2418, color-mix(in srgb, #0a2418 65%, transparent));
  --border-w: 1.5px;
  --canvas-background: #000000;
  --canvas-card-label-color: #25b07b;
  --caret-color: #00ff41;
  --checkbox-border-color: #25b07b;
  --checkbox-border-color-hover: #7affe0;
  --checkbox-color: #00ff41;
  --checkbox-color-hover: #00ffaa;
  --checkbox-marker-color: #000000;
  --checklist-done-color: #7affe0;
  --code-background: #0d0208;
  --code-border: #00ffaa;
  --code-border-color: #0b2a1a;
  --code-bracket-background: #103422;
  --code-comment: #25b07b;
  --code-fg: #00ff41;
  --code-normal: #00ff41;
  --code-punctuation: #7affe0;
  --collapse-icon-color: #25b07b;
  --collapse-icon-color-collapsed: #00ff9c;
  --color-accent: rgb(0, 255, 85);
  --color-accent-1: #00ffaa;
  --color-accent-2: #00ff41;
  --color-accent-hsl: 140, 100%, 50%;
  --color-border: #0a7a3f;
  --color-border-strong: #00ff41;
  --color-outline: #00ffaa;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #0b2a1a;
  --divider-color-hover: #00ff41;
  --dropdown-background: #0a2418;
  --dropdown-background-hover: #133222;
  --embed-block-shadow-hover: 0 0 0 1px #0b2a1a, inset 0 0 0 1px #0b2a1a;
  --embed-border-start: 2px solid #00ff41;
  --fast: 120ms;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --flair-background: #0a2418;
  --flair-color: #00ff41;
  --footnote-divider-color: #0b2a1a;
  --footnote-id-color: #7affe0;
  --footnote-id-color-no-occurrences: #25b07b;
  --footnote-input-background-active: #103422;
  --glow-1: #00ffaa;
  --glow-2: #00ff41;
  --graph-line: #007a3f;
  --graph-node: #00ff41;
  --graph-node-focus: #00ffaa;
  --graph-node-focused: #00ff9c;
  --graph-node-unresolved: #25b07b;
  --graph-text: #00ff9c;
  --gray: var(--text-muted);
  --heading-formatting: #25b07b;
  --highlight: var(--background-modifier-hover);
  --hr-color: #0b2a1a;
  --icon-color: #7affe0;
  --icon-color-active: #00ff9c;
  --icon-color-focused: #00ff41;
  --icon-color-hover: #7affe0;
  --input-date-separator: #25b07b;
  --input-placeholder-color: #25b07b;
  --interactive-accent: #00ff41;
  --interactive-accent-hover: #00ffaa;
  --interactive-accent-hsl: 140, 100%, 50%;
  --interactive-hover: #133222;
  --interactive-normal: #0a2418;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #00ff9c;
  --link-color-hover: #00ff41;
  --link-external-color: #00ff9c;
  --link-external-color-hover: #00ff41;
  --link-unresolved-color: #00ff9c;
  --link-unresolved-decoration-color: rgba(0, 255, 85, 0.3);
  --list-marker-color: #25b07b;
  --list-marker-color-collapsed: #00ff9c;
  --list-marker-color-hover: #7affe0;
  --med: 180ms;
  --menu-background: #06160d;
  --metadata-border-color: #0b2a1a;
  --metadata-divider-color: #0b2a1a;
  --metadata-input-background-active: #103422;
  --metadata-input-text-color: #00ff41;
  --metadata-label-background-active: #103422;
  --metadata-label-text-color: #7affe0;
  --metadata-label-text-color-hover: #7affe0;
  --metadata-property-background-active: #103422;
  --modal-background: #000000;
  --nav-collapse-icon-color: #25b07b;
  --nav-collapse-icon-color-collapsed: #25b07b;
  --nav-heading-color: #00ff41;
  --nav-heading-color-collapsed: #25b07b;
  --nav-heading-color-collapsed-hover: #7affe0;
  --nav-heading-color-hover: #00ff41;
  --nav-item-background-active: #103422;
  --nav-item-background-hover: #103422;
  --nav-item-background-selected: rgba(0, 255, 85, 0.15);
  --nav-item-color: #7affe0;
  --nav-item-color-active: #00ff41;
  --nav-item-color-highlighted: #00ff9c;
  --nav-item-color-hover: #00ff41;
  --nav-item-color-selected: #00ff41;
  --nav-tag-color: #25b07b;
  --nav-tag-color-active: #7affe0;
  --nav-tag-color-hover: #7affe0;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-shadow: 0 0 0 1px #0b2a1a;
  --pdf-sidebar-background: #000000;
  --pdf-thumbnail-shadow: 0 0 0 1px #0b2a1a;
  --pill-border-color: #0b2a1a;
  --pill-color: #7affe0;
  --pill-color-hover: #00ff41;
  --pill-color-remove: #25b07b;
  --pill-color-remove-hover: #00ff9c;
  --prompt-background: #000000;
  --raised-background: color-mix(in srgb, #0a2418 65%, transparent) linear-gradient(#0a2418, color-mix(in srgb, #0a2418 65%, transparent));
  --ribbon-background: #06160d;
  --ribbon-background-collapsed: #000000;
  --scrollbar-bg: #0d0208;
  --scrollbar-thumb-bg: #003b00;
  --scrollbar-thumb-hover-bg: #00ff41;
  --search-clear-button-color: #7affe0;
  --search-icon-color: #7affe0;
  --search-result-background: #000000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #00ff41;
  --setting-items-background: #030d06;
  --setting-items-border-color: #0b2a1a;
  --shadow-1: 0 0 0 1px #08351f inset, 0 0 12px rgba(0, 255, 170, 0.08);
  --shadow-2: 0 0 0 1px #0a5230 inset, 0 0 22px rgba(0, 255, 65, 0.1);
  --slider-track-background: #0b2a1a;
  --slow: 260ms;
  --status-bar-background: #06160d;
  --status-bar-border-color: #0b2a1a;
  --status-bar-text-color: #7affe0;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #06160d;
  --tab-outline-color: #0b2a1a;
  --tab-switcher-background: #06160d;
  --tab-switcher-menubar-background: linear-gradient(to top, #06160d, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 255, 85);
  --tab-text-color: #25b07b;
  --tab-text-color-active: #7affe0;
  --tab-text-color-focused: #7affe0;
  --tab-text-color-focused-active: #7affe0;
  --tab-text-color-focused-active-current: #00ff41;
  --tab-text-color-focused-highlighted: #00ff9c;
  --table-add-button-border-color: #0b2a1a;
  --table-border-color: #0b2a1a;
  --table-drag-handle-background-active: #00ff41;
  --table-drag-handle-color: #25b07b;
  --table-drag-handle-color-active: #001e0f;
  --table-header-border-color: #0b2a1a;
  --table-header-color: #00ff41;
  --table-selection: rgba(0, 255, 85, 0.1);
  --table-selection-border-color: #00ff41;
  --tag-background: #042416;
  --tag-background-hover: rgba(0, 255, 85, 0.2);
  --tag-border: #00ffaa;
  --tag-border-color: rgba(0, 255, 85, 0.15);
  --tag-border-color-hover: rgba(0, 255, 85, 0.15);
  --tag-color: #00ff9c;
  --tag-color-hover: #00ff9c;
  --tag-foreground: #00ff41;
  --tertiary: var(--text-accent-hover);
  --text-accent: #00ff9c;
  --text-accent-hover: #00ff41;
  --text-error: #ff5a5a;
  --text-faint: #25b07b;
  --text-muted: #7affe0;
  --text-normal: #00ff41;
  --text-on-accent: #001e0f;
  --text-selection: #00ffaa;
  --text-success: #7dff93;
  --text-warning: #ffd166;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #06160d;
  --titlebar-background-focused: #0a2015;
  --titlebar-border-color: #0b2a1a;
  --titlebar-text-color: #7affe0;
  --titlebar-text-color-focused: #00ff41;
  --vault-profile-color: #00ff41;
  --vault-profile-color-hover: #00ff41;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(6, 22, 13);
  color: rgb(0, 255, 65);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 255, 65);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(6, 22, 13);
  color: rgb(0, 255, 65);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(11, 42, 26);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(6, 22, 13);
  border-left-color: rgb(11, 42, 26);
  color: rgb(0, 255, 65);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 255, 65);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body .page article p > em, em {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body .page article p > i, i {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body .page article p > strong, strong {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body .text-highlight {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body del {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration: line-through rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body p {
  color: rgb(122, 255, 224);
  outline: rgb(122, 255, 224) none 0px;
  text-decoration: rgb(122, 255, 224);
  text-decoration-color: rgb(122, 255, 224);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 255, 156);
  outline: rgb(0, 255, 156) none 0px;
  text-decoration: underline rgb(0, 255, 156);
  text-decoration-color: rgb(0, 255, 156);
  transition: color 0.12s, text-shadow 0.12s, background 0.12s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 255, 156);
  outline: rgb(0, 255, 156) none 0px;
  text-decoration: underline rgb(0, 255, 156);
  text-decoration-color: rgb(0, 255, 156);
}

body a.internal.broken {
  color: rgb(0, 255, 156);
  outline: rgb(0, 255, 156) none 0px;
  text-decoration: underline rgba(0, 255, 85, 0.3);
  text-decoration-color: rgba(0, 255, 85, 0.3);
}`,
    lists: `body dd {
  color: rgb(0, 255, 65);
}

body dt {
  color: rgb(0, 255, 65);
}

body ol > li {
  color: rgb(0, 255, 65);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body ul > li {
  color: rgb(0, 255, 65);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(37, 176, 123);
  text-decoration: rgb(37, 176, 123);
}

body blockquote {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body table {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 170);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 170);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(0, 255, 65);
  width: 662px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(3, 13, 6);
}

body td {
  border-bottom-color: rgb(11, 42, 26);
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
  border-top-color: rgb(11, 42, 26);
  color: rgb(0, 255, 65);
  padding-bottom: 8.8px;
  padding-left: 11.2px;
  padding-right: 11.2px;
  padding-top: 8.8px;
}

body th {
  background-color: rgb(10, 32, 21);
  border-bottom-color: rgb(11, 42, 26);
  border-bottom-width: 2px;
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
  border-top-color: rgb(11, 42, 26);
  color: rgb(0, 255, 156);
  padding-bottom: 9.6px;
  padding-left: 11.2px;
  padding-right: 11.2px;
  padding-top: 9.6px;
}

body thead {
  border-bottom-color: rgb(0, 255, 170);
  border-left-color: rgb(0, 255, 170);
  border-right-color: rgb(0, 255, 170);
  border-top-color: rgb(0, 255, 170);
}

body tr {
  border-bottom-color: rgb(0, 255, 170);
  border-left-color: rgb(0, 255, 170);
  border-right-color: rgb(0, 255, 170);
  border-top-color: rgb(0, 255, 170);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}

body pre > code, pre:has(> code) {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 170);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body figcaption {
  color: rgb(0, 255, 65);
}

body figure {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body img {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body video {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}`,
    embeds: `body .file-embed {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-style: solid;
  border-top-width: 1px;
}

body .footnotes {
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

body .transclude {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(122, 255, 224);
  text-decoration: line-through rgb(122, 255, 224);
  text-decoration-color: rgb(122, 255, 224);
}

body input[type=checkbox] {
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-width: 2px;
  border-left-color: rgb(10, 122, 63);
  border-left-width: 2px;
  border-right-color: rgb(10, 122, 63);
  border-right-width: 2px;
  border-top-color: rgb(10, 122, 63);
  border-top-width: 2px;
  width: 14.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 255, 156);
  border-left-color: rgb(0, 255, 156);
  border-right-color: rgb(0, 255, 156);
  border-top-color: rgb(0, 255, 156);
}

body .callout[data-callout="abstract"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 90, 90);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 255, 147);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  background-color: oklab(0.252046 -0.0438306 0.0183013);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 209, 102);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(7, 20, 12);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(10, 122, 63);
  border-right-color: rgb(10, 122, 63);
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(0, 255, 65);
}

body .search > .search-container > .search-space {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(10, 122, 63);
  border-right-color: rgb(10, 122, 63);
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgb(10, 82, 48) 0px 0px 0px 1px inset, rgba(0, 255, 65, 0.1) 0px 0px 22px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 255, 65);
  outline: rgb(0, 255, 65) none 0px;
  text-decoration: rgb(0, 255, 65);
  text-decoration-color: rgb(0, 255, 65);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 255, 156);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 255, 156);
  border-left-color: rgb(0, 255, 156);
  border-right-color: rgb(0, 255, 156);
  border-top-color: rgb(0, 255, 156);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 255, 156);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(16, 52, 34);
  color: rgb(0, 255, 156);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(10, 122, 63);
  border-right-color: rgb(10, 122, 63);
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(7, 20, 12);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(8, 53, 31) 0px 0px 0px 1px inset, rgba(0, 255, 170, 0.08) 0px 0px 12px 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(16, 52, 34);
  border-bottom-color: rgb(0, 255, 156);
  border-left-color: rgb(0, 255, 156);
  border-right-color: rgb(0, 255, 156);
  border-top-color: rgb(0, 255, 156);
  color: rgb(0, 255, 156);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(16, 52, 34);
  color: rgb(0, 255, 156);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(4, 36, 22);
  border-bottom-color: rgba(0, 255, 85, 0.15);
  border-left-color: rgba(0, 255, 85, 0.15);
  border-right-color: rgba(0, 255, 85, 0.15);
  border-top-color: rgba(0, 255, 85, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(0, 255, 156);
}

body h1 {
  color: rgba(0, 0, 0, 0);
  text-shadow: rgb(0, 255, 170) 0px 0px 7.8522px, rgba(0, 255, 65, 0.153) 0px 0px 4.32179px;
}

body h2 {
  color: rgb(0, 255, 65);
}

body h2.page-title, h2.page-title a {
  color: rgba(0, 0, 0, 0);
  text-shadow: rgb(0, 255, 170) 0px 0px 7.90511px, rgba(0, 255, 65, 0.157) 0px 0px 4.44526px;
}

body h3 {
  color: rgb(0, 255, 170);
}

body h4 {
  color: rgb(0, 255, 65);
}

body h5 {
  color: rgb(37, 176, 123);
}

body h6 {
  color: rgb(37, 176, 123);
}

body hr {
  border-bottom-color: rgb(11, 42, 26);
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 255, 170);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 17.6px;
  padding-right: 17.6px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(22, 74, 48);
  border-bottom-color: rgb(0, 255, 156);
  border-left-color: rgb(0, 255, 156);
  border-right-color: rgb(0, 255, 156);
  border-top-color: rgb(0, 255, 156);
  color: rgb(0, 255, 156);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(10, 36, 24);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}`,
    footer: `body footer {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(11, 42, 26);
  border-left-color: rgb(11, 42, 26);
  border-right-color: rgb(11, 42, 26);
  border-top-color: rgb(11, 42, 26);
  color: rgb(37, 176, 123);
}

body footer ul li a {
  color: rgb(37, 176, 123);
  text-decoration: rgb(37, 176, 123);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 255, 65);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 255, 65);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body li.section-li > .section .meta {
  color: rgb(0, 255, 65);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 255, 65);
  text-decoration: rgb(0, 255, 65);
}

body ul.section-ul {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}`,
    darkmode: `body .darkmode {
  background-color: rgb(10, 36, 24);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}

body .darkmode svg {
  color: rgb(0, 255, 65);
  stroke: rgb(0, 255, 65);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(122, 255, 224);
  border-left-color: rgb(122, 255, 224);
  border-right-color: rgb(122, 255, 224);
  border-top-color: rgb(122, 255, 224);
  color: rgb(122, 255, 224);
}

body .breadcrumb-element p {
  color: rgb(37, 176, 123);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

body .metadata {
  background-color: rgb(6, 22, 13);
  border-bottom-color: rgb(11, 42, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(11, 42, 26);
  border-left-width: 1px;
  border-right-color: rgb(11, 42, 26);
  border-right-width: 1px;
  border-top-color: rgb(11, 42, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(122, 255, 224);
}

body .metadata-properties {
  border-bottom-color: rgb(122, 255, 224);
  border-left-color: rgb(122, 255, 224);
  border-right-color: rgb(122, 255, 224);
  border-top-color: rgb(122, 255, 224);
  color: rgb(122, 255, 224);
}

body .navigation-progress {
  background-color: rgb(6, 22, 13);
}

body .page-header h2.page-title {
  color: rgb(0, 255, 65);
}

body abbr {
  color: rgb(0, 255, 65);
  text-decoration: underline dotted rgb(0, 255, 65);
}

body details {
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body input[type=text] {
  background-color: rgb(7, 20, 12);
  border-bottom-color: rgb(10, 122, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(10, 122, 63);
  border-left-width: 1px;
  border-right-color: rgb(10, 122, 63);
  border-right-width: 1px;
  border-top-color: rgb(10, 122, 63);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(0, 255, 65);
}

body kbd {
  background-color: rgb(13, 2, 8);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
  color: rgb(0, 255, 65);
}

body progress {
  background-color: rgb(11, 42, 26);
  border-bottom-color: rgb(0, 255, 65);
  border-left-color: rgb(0, 255, 65);
  border-right-color: rgb(0, 255, 65);
  border-top-color: rgb(0, 255, 65);
}

body sub {
  color: rgb(0, 255, 65);
}

body summary {
  color: rgb(0, 255, 65);
}

body sup {
  color: rgb(0, 255, 65);
}`,
  },
  light: {},
};
