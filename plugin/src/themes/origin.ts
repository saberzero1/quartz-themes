import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "origin", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-cover: rgba(0, 0, 0, 0.78);
  --background-modifier-error: rgb(255, 23, 68);
  --background-modifier-error-hover: rgb(255, 23, 68);
  --background-modifier-error-rgb: 255, 23, 68;
  --background-modifier-hover: #161616;
  --background-modifier-success: rgb(100, 221, 23);
  --background-modifier-success-rgb: 100, 221, 23;
  --background-primary: #202020;
  --background-primary-alt: #000000;
  --background-secondary: #161616;
  --background-secondary-alt: #000000;
  --bases-cards-background: #202020;
  --bases-cards-cover-background: #000000;
  --bases-cards-radius: 5px;
  --bases-embed-border-radius: 3px;
  --bases-table-cell-background-active: #202020;
  --bases-table-cell-background-disabled: #000000;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(131, 107, 250);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: #000000;
  --bases-table-header-background: #202020;
  --bases-table-header-background-hover: #161616;
  --bases-table-summary-background: #202020;
  --bases-table-summary-background-hover: #161616;
  --blockquote-border-color: #363636;
  --blockquote-border-thickness: 4px;
  --blur-background: color-mix(in srgb, #0c0c0c 65%, transparent) linear-gradient(#0c0c0c, color-mix(in srgb, #0c0c0c 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 3px;
  --callout-blend-mode: normal;
  --callout-bug: 245, 0, 87;
  --callout-content-background: #161616;
  --callout-content-padding: 0.25em 1.2em;
  --callout-default: 68, 138, 255;
  --callout-error: 255, 23, 68;
  --callout-example: 124, 77, 255;
  --callout-fail: 255, 82, 82;
  --callout-important: 0, 191, 165;
  --callout-info: 0, 184, 212;
  --callout-padding: 0;
  --callout-question: 100, 221, 23;
  --callout-radius: 3px;
  --callout-success: 0, 191, 165;
  --callout-summary: 0, 176, 255;
  --callout-tip: 0, 191, 165;
  --callout-title-color: #dadada;
  --callout-title-padding: 0.7em 0.5em 0.7em 0.7em;
  --callout-title-size: 1em;
  --callout-todo: 0, 184, 212;
  --callout-warning: 255, 145, 0;
  --canvas-background: #202020;
  --canvas-color-1: 255, 23, 68;
  --canvas-color-2: 255, 145, 0;
  --canvas-color-4: 100, 221, 23;
  --canvas-color-5: 0, 184, 212;
  --canvas-color-6: 124, 77, 255;
  --canvas-controls-radius: 3px;
  --checkbox-color: rgb(131, 107, 250);
  --checkbox-color-hover: rgb(67, 42, 157);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 3px;
  --clickable-icon-radius: 3px;
  --code-background: #161616;
  --code-bracket-background: #161616;
  --code-important: rgb(255, 145, 0);
  --code-keyword: rgb(245, 0, 87);
  --code-operator: rgb(255, 23, 68);
  --code-property: rgb(0, 191, 165);
  --code-radius: 3px;
  --code-string: rgb(0, 191, 165);
  --code-tag: rgb(255, 82, 82);
  --code-value: rgb(124, 77, 255);
  --codeFont: var(--font-text);
  --collapse-icon-color-collapsed: #b3b3b3;
  --color-accent: rgb(131, 107, 250);
  --color-accent-1: rgb(67, 42, 157);
  --color-accent-2: rgb(147, 126, 252);
  --color-base-00: #202020;
  --color-base-05: #1a1a1a;
  --color-base-10: #000000;
  --color-base-20: #161616;
  --color-blue: rgb(68, 138, 255);
  --color-blue-rgb: 68, 138, 255;
  --color-cyan: rgb(0, 184, 212);
  --color-cyan-rgb: 0, 184, 212;
  --color-dark-green: rgb(0, 191, 165);
  --color-dark-green-rgb: 0, 191, 165;
  --color-green: rgb(100, 221, 23);
  --color-green-rgb: 100, 221, 23;
  --color-light-blue: rgb(0, 176, 255);
  --color-light-blue-rgb: 0, 176, 255;
  --color-orange: rgb(255, 145, 0);
  --color-orange-red: rgb(255, 82, 82);
  --color-orange-red-rgb: 255, 82, 82;
  --color-orange-rgb: 255, 145, 0;
  --color-pink: rgb(245, 0, 87);
  --color-pink-rgb: 245, 0, 87;
  --color-purple: rgb(124, 77, 255);
  --color-purple-rgb: 124, 77, 255;
  --color-red: rgb(255, 23, 68);
  --color-red-rgb: 255, 23, 68;
  --color-teal: rgb(0, 191, 165);
  --color-teal-rgb: 0, 191, 165;
  --divider-color-hover: rgb(131, 107, 250);
  --dropdown-background: #0c0c0c;
  --embed-border-start: 2px solid rgb(131, 107, 250);
  --file-header-background: #202020;
  --file-header-background-focused: #202020;
  --file-header-font: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --file-header-justify: left;
  --flair-background: #0c0c0c;
  --font-default: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-text: '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --footnote-input-background-active: #161616;
  --footnote-padding-block: 10px;
  --footnote-padding-inline: 10px;
  --footnote-radius: 3px;
  --graph-node-focused: rgb(67, 42, 157);
  --graph-node-tag: rgb(100, 221, 23);
  --header-height: 30px;
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-hover);
  --icon-color-active: rgb(67, 42, 157);
  --input-shadow: #363636 0 0 0px 1px;
  --interactive-accent: rgb(131, 107, 250);
  --interactive-accent-hover: rgb(67, 42, 157);
  --interactive-normal: #0c0c0c;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(67, 42, 157);
  --link-color-hover: rgb(147, 126, 252);
  --link-external-color: rgb(67, 42, 157);
  --link-external-color-hover: rgb(147, 126, 252);
  --link-unresolved-color: rgb(67, 42, 157);
  --list-marker-color-collapsed: rgb(67, 42, 157);
  --menu-background: #161616;
  --menu-padding: 10px;
  --menu-radius: 5px;
  --metadata-input-background-active: #161616;
  --metadata-input-font: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --metadata-label-background-active: #161616;
  --metadata-label-font: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --metadata-property-background-active: #161616;
  --modal-background: #202020;
  --modal-border-color: #363636;
  --modal-border-width: 0px;
  --modal-height: 650px;
  --modal-max-width: 80vw;
  --modal-radius: 6px;
  --modal-width: 80vw;
  --nav-collapse-icon-color: #b3b3b3;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: #000000;
  --nav-item-background-hover: #000000;
  --nav-item-background-selected: transparent;
  --nav-item-children-padding-start: 10px;
  --nav-item-color-highlighted: rgb(67, 42, 157);
  --nav-item-margin-bottom: 6px;
  --nav-item-radius: 3px;
  --nav-tag-radius: 3px;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-sidebar-background: #202020;
  --pill-color-remove-hover: rgb(67, 42, 157);
  --prompt-background: #202020;
  --radius-l: 6px;
  --radius-m: 5px;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, #0c0c0c 65%, transparent) linear-gradient(#0c0c0c, color-mix(in srgb, #0c0c0c 65%, transparent));
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --ribbon-padding: 0px;
  --ribbon-width: 30px;
  --scrollbar-radius: 6px;
  --search-result-background: #202020;
  --secondary: var(--text-accent);
  --setting-items-background: #000000;
  --setting-items-radius: 6px;
  --size-2-1: 6px;
  --size-2-2: 10px;
  --size-2-3: 10px;
  --status-bar-background: #161616;
  --status-bar-radius: 5px 0 0 0;
  --suggestion-background: #202020;
  --sync-avatar-color-1: rgb(255, 23, 68);
  --sync-avatar-color-2: rgb(255, 145, 0);
  --sync-avatar-color-4: rgb(100, 221, 23);
  --sync-avatar-color-5: rgb(0, 184, 212);
  --sync-avatar-color-6: rgb(68, 138, 255);
  --sync-avatar-color-7: rgb(124, 77, 255);
  --sync-avatar-color-8: rgb(245, 0, 87);
  --tab-background-active: #000000;
  --tab-container-background: #161616;
  --tab-curve: 0;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 3px;
  --tab-radius-active: 3px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #161616;
  --tab-switcher-menubar-background: linear-gradient(to top, #161616, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(131, 107, 250);
  --tab-text-color-focused-highlighted: rgb(67, 42, 157);
  --table-drag-handle-background-active: rgb(131, 107, 250);
  --table-header-weight: bold;
  --table-selection-border-color: rgb(131, 107, 250);
  --tag-color: rgb(67, 42, 157);
  --tag-color-hover: rgb(67, 42, 157);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(67, 42, 157);
  --text-accent-hover: rgb(147, 126, 252);
  --text-error: rgb(255, 23, 68);
  --text-success: rgb(100, 221, 23);
  --text-warning: rgb(255, 145, 0);
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-height: 25px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 22);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 22);
}

body div#quartz-root {
  background-color: rgb(32, 32, 32);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .page article p > em, em {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .page article p > i, i {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .text-highlight {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body del {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body p {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration: underline rgb(67, 42, 157);
  text-decoration-color: rgb(67, 42, 157);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration: underline rgb(67, 42, 157);
  text-decoration-color: rgb(67, 42, 157);
}

body a.internal.broken {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(32, 32, 32);
}

body ul.overflow {
  background-color: rgb(32, 32, 32);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `body table {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body td {
  padding-bottom: 10px;
  padding-top: 10px;
}

body th {
  font-weight: 700;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    code: `body code {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body figcaption {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .transclude {
  border-left-color: rgb(131, 107, 250);
}

body .transclude-inner {
  border-left-color: rgb(131, 107, 250);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  --callout-color: 0, 191, 165;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 22);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(67, 42, 157);
}

body h1 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    scrollbars: `body .callout {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    footer: `body footer {
  background-color: rgb(22, 22, 22);
  border-top-left-radius: 5px;
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(22, 22, 22);
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body input[type=text] {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #ddd;
  --background-modifier-border-hover: rgb(250, 250, 250);
  --background-modifier-cover: rgba(0, 0, 0, 0.78);
  --background-modifier-error: rgb(255, 23, 68);
  --background-modifier-error-hover: rgb(255, 23, 68);
  --background-modifier-error-rgb: 255, 23, 68;
  --background-modifier-hover: #f2f3f5;
  --background-modifier-success: rgb(100, 221, 23);
  --background-modifier-success-rgb: 100, 221, 23;
  --background-primary-alt: #f5f6f8;
  --background-secondary: #f2f3f5;
  --background-secondary-alt: #e3e5e8;
  --bases-cards-cover-background: #f5f6f8;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #ddd;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(250, 250, 250);
  --bases-embed-border-color: #ddd;
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: #888888;
  --bases-table-border-color: #ddd;
  --bases-table-cell-background-disabled: #f5f6f8;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(118, 91, 215);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: #f5f6f8;
  --bases-table-header-background-hover: #f2f3f5;
  --bases-table-header-color: #888888;
  --bases-table-summary-background-hover: #f2f3f5;
  --blockquote-border-color: #ddd;
  --blockquote-border-thickness: 4px;
  --bodyFont: var(--font-text);
  --button-radius: 3px;
  --callout-blend-mode: normal;
  --callout-bug: 245, 0, 87;
  --callout-content-background: #f2f3f5;
  --callout-content-padding: 0.25em 1.2em;
  --callout-default: 68, 138, 255;
  --callout-error: 255, 23, 68;
  --callout-example: 124, 77, 255;
  --callout-fail: 255, 82, 82;
  --callout-important: 0, 191, 165;
  --callout-info: 0, 184, 212;
  --callout-padding: 0;
  --callout-question: 100, 221, 23;
  --callout-radius: 3px;
  --callout-success: 0, 191, 165;
  --callout-summary: 0, 176, 255;
  --callout-tip: 0, 191, 165;
  --callout-title-color: #2e3338;
  --callout-title-padding: 0.7em 0.5em 0.7em 0.7em;
  --callout-title-size: 1em;
  --callout-todo: 0, 184, 212;
  --callout-warning: 255, 145, 0;
  --canvas-card-label-color: #999999;
  --canvas-color-1: 255, 23, 68;
  --canvas-color-2: 255, 145, 0;
  --canvas-color-4: 100, 221, 23;
  --canvas-color-5: 0, 184, 212;
  --canvas-color-6: 124, 77, 255;
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: #ddd;
  --caret-color: #2e3338;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #888888;
  --checkbox-color: rgb(118, 91, 215);
  --checkbox-color-hover: rgb(123, 86, 210);
  --checkbox-radius: 3px;
  --checklist-done-color: #888888;
  --clickable-icon-radius: 3px;
  --code-background: #f2f3f5;
  --code-border-color: #ddd;
  --code-bracket-background: #f2f3f5;
  --code-comment: #999999;
  --code-important: rgb(255, 145, 0);
  --code-keyword: rgb(245, 0, 87);
  --code-normal: #2e3338;
  --code-operator: rgb(255, 23, 68);
  --code-property: rgb(0, 191, 165);
  --code-punctuation: #888888;
  --code-radius: 3px;
  --code-string: rgb(0, 191, 165);
  --code-tag: rgb(255, 82, 82);
  --code-value: rgb(124, 77, 255);
  --codeFont: var(--font-text);
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #888888;
  --color-accent: rgb(124, 97, 219);
  --color-accent-1: rgb(118, 91, 215);
  --color-accent-2: rgb(123, 86, 210);
  --color-base-05: #e3e5e8;
  --color-base-10: #f5f6f8;
  --color-base-100: #2e3338;
  --color-base-20: #f2f3f5;
  --color-base-25: rgb(242, 242, 242);
  --color-base-30: #ddd;
  --color-base-35: rgb(250, 250, 250);
  --color-base-50: #999999;
  --color-base-60: #919191;
  --color-base-70: #888888;
  --color-blue: rgb(68, 138, 255);
  --color-blue-rgb: 68, 138, 255;
  --color-cyan: rgb(0, 184, 212);
  --color-cyan-rgb: 0, 184, 212;
  --color-dark-green: rgb(0, 191, 165);
  --color-dark-green-rgb: 0, 191, 165;
  --color-green: rgb(100, 221, 23);
  --color-green-rgb: 100, 221, 23;
  --color-light-blue: rgb(0, 176, 255);
  --color-light-blue-rgb: 0, 176, 255;
  --color-orange: rgb(255, 145, 0);
  --color-orange-red: rgb(255, 82, 82);
  --color-orange-red-rgb: 255, 82, 82;
  --color-orange-rgb: 255, 145, 0;
  --color-pink: rgb(245, 0, 87);
  --color-pink-rgb: 245, 0, 87;
  --color-purple: rgb(124, 77, 255);
  --color-purple-rgb: 124, 77, 255;
  --color-red: rgb(255, 23, 68);
  --color-red-rgb: 255, 23, 68;
  --color-teal: rgb(0, 191, 165);
  --color-teal-rgb: 0, 191, 165;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #ddd;
  --divider-color-hover: rgb(118, 91, 215);
  --dropdown-background-hover: #f5f6f8;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd;
  --embed-border-start: 2px solid rgb(118, 91, 215);
  --file-header-font: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --file-header-justify: left;
  --flair-color: #2e3338;
  --font-default: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-text: '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --footnote-divider-color: #ddd;
  --footnote-id-color: #888888;
  --footnote-id-color-no-occurrences: #999999;
  --footnote-input-background-active: #f2f3f5;
  --footnote-padding-block: 10px;
  --footnote-padding-inline: 10px;
  --footnote-radius: 3px;
  --graph-line: rgb(250, 250, 250);
  --graph-node: #888888;
  --graph-node-focused: rgb(124, 97, 219);
  --graph-node-tag: rgb(100, 221, 23);
  --graph-node-unresolved: #999999;
  --graph-text: #2e3338;
  --gray: var(--text-muted);
  --header-height: 30px;
  --headerFont: var(--font-text);
  --heading-formatting: #999999;
  --highlight: var(--background-modifier-hover);
  --hr-color: #ddd;
  --icon-color: #888888;
  --icon-color-active: rgb(124, 97, 219);
  --icon-color-focused: #2e3338;
  --icon-color-hover: #888888;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: rgb(118, 91, 215);
  --interactive-accent-hover: rgb(123, 86, 210);
  --interactive-hover: #f5f6f8;
  --light: var(--background-primary-alt);
  --lightgray: var(--background-secondary);
  --link-color: rgb(124, 97, 219);
  --link-color-hover: rgb(123, 86, 210);
  --link-external-color: rgb(124, 97, 219);
  --link-external-color-hover: rgb(123, 86, 210);
  --link-unresolved-color: rgb(124, 97, 219);
  --list-marker-color: #999999;
  --list-marker-color-collapsed: rgb(124, 97, 219);
  --list-marker-color-hover: #888888;
  --menu-background: #f2f3f5;
  --menu-border-color: rgb(250, 250, 250);
  --menu-padding: 10px;
  --menu-radius: 5px;
  --metadata-border-color: #ddd;
  --metadata-divider-color: #ddd;
  --metadata-input-background-active: #f2f3f5;
  --metadata-input-font: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --metadata-input-text-color: #2e3338;
  --metadata-label-background-active: #f2f3f5;
  --metadata-label-font: '??', '??', '??', Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --metadata-label-text-color: #888888;
  --metadata-label-text-color-hover: #888888;
  --metadata-property-background-active: #f2f3f5;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(250, 250, 250);
  --modal-border-color: #ddd;
  --modal-border-width: 0px;
  --modal-height: 650px;
  --modal-max-width: 80vw;
  --modal-radius: 6px;
  --modal-width: 80vw;
  --nav-collapse-icon-color: #888888;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #2e3338;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #888888;
  --nav-heading-color-hover: #2e3338;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: #e3e5e8;
  --nav-item-background-hover: #e3e5e8;
  --nav-item-background-selected: transparent;
  --nav-item-children-padding-start: 10px;
  --nav-item-color: #888888;
  --nav-item-color-active: #2e3338;
  --nav-item-color-highlighted: rgb(124, 97, 219);
  --nav-item-color-hover: #2e3338;
  --nav-item-color-selected: #2e3338;
  --nav-item-margin-bottom: 6px;
  --nav-item-radius: 3px;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #888888;
  --nav-tag-color-hover: #888888;
  --nav-tag-radius: 3px;
  --pill-border-color: #ddd;
  --pill-border-color-hover: rgb(250, 250, 250);
  --pill-color: #888888;
  --pill-color-hover: #2e3338;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: rgb(124, 97, 219);
  --radius-l: 6px;
  --radius-m: 5px;
  --radius-s: 3px;
  --ribbon-background: #e3e5e8;
  --ribbon-background-collapsed: #e3e5e8;
  --ribbon-padding: 0px;
  --ribbon-width: 30px;
  --scrollbar-radius: 6px;
  --search-clear-button-color: #888888;
  --search-icon-color: #888888;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #2e3338;
  --setting-items-background: #f5f6f8;
  --setting-items-border-color: #ddd;
  --setting-items-radius: 6px;
  --size-2-1: 6px;
  --size-2-2: 10px;
  --size-2-3: 10px;
  --slider-thumb-border-color: rgb(250, 250, 250);
  --slider-track-background: #ddd;
  --status-bar-background: #f2f3f5;
  --status-bar-border-color: #ddd;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: #888888;
  --sync-avatar-color-1: rgb(255, 23, 68);
  --sync-avatar-color-2: rgb(255, 145, 0);
  --sync-avatar-color-4: rgb(100, 221, 23);
  --sync-avatar-color-5: rgb(0, 184, 212);
  --sync-avatar-color-6: rgb(68, 138, 255);
  --sync-avatar-color-7: rgb(124, 77, 255);
  --sync-avatar-color-8: rgb(245, 0, 87);
  --tab-background-active: #f5f6f8;
  --tab-container-background: #f2f3f5;
  --tab-curve: 0;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 3px;
  --tab-radius-active: 3px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #f2f3f5;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(124, 97, 219);
  --tab-text-color: #999999;
  --tab-text-color-active: #888888;
  --tab-text-color-focused: #888888;
  --tab-text-color-focused-active: #888888;
  --tab-text-color-focused-active-current: #2e3338;
  --tab-text-color-focused-highlighted: rgb(124, 97, 219);
  --table-add-button-border-color: #ddd;
  --table-border-color: #ddd;
  --table-drag-handle-background-active: rgb(118, 91, 215);
  --table-drag-handle-color: #999999;
  --table-header-border-color: #ddd;
  --table-header-color: #2e3338;
  --table-header-weight: bold;
  --table-selection-border-color: rgb(118, 91, 215);
  --tag-color: rgb(124, 97, 219);
  --tag-color-hover: rgb(124, 97, 219);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(124, 97, 219);
  --text-accent-hover: rgb(123, 86, 210);
  --text-error: rgb(255, 23, 68);
  --text-faint: #999999;
  --text-muted: #888888;
  --text-normal: #2e3338;
  --text-success: rgb(100, 221, 23);
  --text-warning: rgb(255, 145, 0);
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #e3e5e8;
  --titlebar-background-focused: #e3e5e8;
  --titlebar-border-color: #ddd;
  --titlebar-height: 25px;
  --titlebar-text-color: #888888;
  --titlebar-text-color-focused: #2e3338;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  --vault-profile-color: #2e3338;
  --vault-profile-color-hover: #2e3338;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body div#quartz-root {
  color: rgb(46, 51, 56);
}`,
    typography: `body .page article p > b, b {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > em, em {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > i, i {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > strong, strong {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .text-highlight {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body del {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: line-through rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body p {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `body a.external, footer a {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration: underline rgb(124, 97, 219);
  text-decoration-color: rgb(124, 97, 219);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration: underline rgb(124, 97, 219);
  text-decoration-color: rgb(124, 97, 219);
}

body a.internal.broken {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
}`,
    lists: `body dd {
  color: rgb(46, 51, 56);
}

body dt {
  color: rgb(46, 51, 56);
}

body ol > li {
  color: rgb(46, 51, 56);
}

body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body ul > li {
  color: rgb(46, 51, 56);
}

body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body table {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  padding-bottom: 10px;
  padding-top: 10px;
}

body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-weight: 700;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    code: `body code {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

body pre > code, pre:has(> code) {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body figcaption {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(118, 91, 215);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(118, 91, 215);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration: line-through rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  background-color: rgb(242, 243, 245);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  --callout-color: 0, 191, 165;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(242, 243, 245);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(124, 97, 219);
}

body h1 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `body .callout {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(227, 229, 232);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(46, 51, 56);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
}`,
    footer: `body footer {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 5px;
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
}

body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(242, 243, 245);
}

body .page-header h2.page-title {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(46, 51, 56);
  text-decoration: underline dotted rgb(46, 51, 56);
}

body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body sub {
  color: rgb(46, 51, 56);
}

body summary {
  color: rgb(46, 51, 56);
}

body sup {
  color: rgb(46, 51, 56);
}`,
  },
};
