import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "origin",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "origin-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-cover: rgba(0, 0, 0, 0.78);
  --background-modifier-error: var(--color-red, rgb(255, 23, 68));
  --background-modifier-error-hover: var(--color-red, rgb(255, 23, 68));
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 23, 68);
  --background-modifier-hover: var(--background-secondary, #161616);
  --background-modifier-success: var(--color-green, rgb(100, 221, 23));
  --background-modifier-success-rgb: var(--color-green-rgb, 100, 221, 23);
  --background-primary: var(--color-base-00, #202020);
  --background-primary-alt: var(--color-base-10, #000000);
  --background-secondary: var(--color-base-20, #161616);
  --background-secondary-alt: var(--color-base-10, #000000);
  --bases-cards-background: var(--background-primary, #202020);
  --bases-cards-cover-background: var(--background-primary-alt, #000000);
  --bases-cards-radius: var(--radius-m, 5px);
  --bases-embed-border-radius: var(--radius-s, 3px);
  --bases-table-cell-background-active: var(--background-primary, #202020);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #000000);
  --bases-table-container-border-radius: var(--radius-s, 3px);
  --bases-table-group-background: var(--background-primary-alt, #000000);
  --bases-table-header-background: var(--background-primary, #202020);
  --bases-table-header-background-hover: var(--background-modifier-hover, #161616);
  --bases-table-summary-background: var(--background-primary, #202020);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #161616);
  --blockquote-border-color: var(--background-modifier-border, #363636);
  --blockquote-border-thickness: 4px;
  --button-radius: var(--input-radius, 3px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-bug: var(--color-pink-rgb, 245, 0, 87);
  --callout-content-background: var(--background-secondary, #161616);
  --callout-content-padding: 0.25em 1.2em;
  --callout-default: var(--color-blue-rgb, 68, 138, 255);
  --callout-error: var(--color-red-rgb, 255, 23, 68);
  --callout-example: var(--color-purple-rgb, 124, 77, 255);
  --callout-fail: var(--color-orange-red-rgb, 255, 82, 82);
  --callout-important: var(--color-teal-rgb, 0, 191, 165);
  --callout-info: var(--color-cyan-rgb, 0, 184, 212);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-green-rgb, 100, 221, 23);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 3px);
  --callout-success: var(--color-dark-green-rgb, 0, 191, 165);
  --callout-summary: var(--color-light-blue-rgb, 0, 176, 255);
  --callout-tip: var(--color-teal-rgb, 0, 191, 165);
  --callout-title-color: var(--text-normal, #dadada);
  --callout-title-padding: 0.7em 0.5em 0.7em 0.7em;
  --callout-title-size: var(--h6-size, 1em);
  --callout-todo: var(--color-cyan-rgb, 0, 184, 212);
  --callout-warning: var(--color-orange-rgb, 255, 145, 0);
  --canvas-background: var(--background-primary, #202020);
  --canvas-color-1: var(--color-red-rgb, 255, 23, 68);
  --canvas-color-2: var(--color-orange-rgb, 255, 145, 0);
  --canvas-color-4: var(--color-green-rgb, 100, 221, 23);
  --canvas-color-5: var(--color-cyan-rgb, 0, 184, 212);
  --canvas-color-6: var(--color-purple-rgb, 124, 77, 255);
  --canvas-controls-radius: var(--radius-s, 3px);
  --checkbox-color: var(--interactive-accent, hsl(250, 93%, 70%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(253, 58%, 39%));
  --checkbox-marker-color: var(--background-primary, #202020);
  --checkbox-radius: var(--radius-s, 3px);
  --clickable-icon-radius: var(--radius-s, 3px);
  --code-background: var(--background-secondary, #161616);
  --code-bracket-background: var(--background-modifier-hover, #161616);
  --code-important: var(--color-orange, rgb(255, 145, 0));
  --code-keyword: var(--color-pink, rgb(245, 0, 87));
  --code-operator: var(--color-red, rgb(255, 23, 68));
  --code-property: var(--color-dark-green, rgb(0, 191, 165));
  --code-radius: var(--radius-s, 3px);
  --code-string: var(--color-teal, rgb(0, 191, 165));
  --code-tag: var(--color-orange-red, rgb(255, 82, 82));
  --code-value: var(--color-purple, rgb(124, 77, 255));
  --collapse-icon-color-collapsed: var(--text-muted, #b3b3b3);
  --color-accent: hsl(calc(var(--accent-h) - 8), calc(var(--accent-s) + 5%), calc(var(--accent-l) + 4%));
  --color-accent-1: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s) - 30%), calc(var(--accent-l) - 27%));
  --color-accent-2: hsl(calc(var(--accent-h) - 8), calc(var(--accent-s) + 7%), calc(var(--accent-l) + 8%));
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
  --divider-color-hover: var(--interactive-accent, hsl(250, 93%, 70%));
  --dropdown-background: var(--interactive-normal, #0c0c0c);
  --file-header-background: var(--background-primary, #202020);
  --file-header-background-focused: var(--background-primary, #202020);
  --file-header-font: var(--font-interface, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --file-header-justify: left;
  --flair-background: var(--interactive-normal, #0c0c0c);
  --font-default: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-mermaid: var(--font-text, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --footnote-input-background-active: var(--metadata-input-background-active, #161616);
  --footnote-padding-block: var(--size-2-3, 10px);
  --footnote-padding-inline: var(--size-2-3, 10px);
  --footnote-radius: var(--radius-s, 3px);
  --graph-node-focused: var(--text-accent, hsl(253, 58%, 39%));
  --graph-node-tag: var(--color-green, rgb(100, 221, 23));
  --header-height: 30px;
  --highlight: var(--background-modifier-hover, var(--background-secondary, #161616));
  --icon-color-active: var(--text-accent, hsl(253, 58%, 39%));
  --input-shadow: var(--background-modifier-border, #363636 0 0 0px 1px) 0 0 0px 1px;
  --interactive-accent: var(--color-accent, hsl(250, 93%, 70%));
  --interactive-accent-hover: var(--color-accent-1, hsl(253, 58%, 39%));
  --interactive-normal: var(--color-base-30, #0c0c0c);
  --light: var(--background-primary, var(--color-base-00, #202020));
  --lightgray: var(--background-secondary, var(--color-base-20, #161616));
  --link-color: var(--text-accent, hsl(253, 58%, 39%));
  --link-color-hover: var(--text-accent-hover, hsl(250, 95%, 74%));
  --link-external-color: var(--text-accent, hsl(253, 58%, 39%));
  --link-external-color-hover: var(--text-accent-hover, hsl(250, 95%, 74%));
  --link-unresolved-color: var(--text-accent, hsl(253, 58%, 39%));
  --list-marker-color-collapsed: var(--text-accent, hsl(253, 58%, 39%));
  --menu-background: var(--background-secondary, #161616);
  --menu-padding: var(--size-2-3, 10px);
  --menu-radius: var(--radius-m, 5px);
  --metadata-input-background-active: var(--background-modifier-hover, #161616);
  --metadata-input-font: var(--font-interface, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --metadata-label-background-active: var(--background-modifier-hover, #161616);
  --metadata-label-font: var(--font-interface, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --metadata-property-background-active: var(--background-modifier-hover, #161616);
  --modal-background: var(--background-primary, #202020);
  --modal-border-color: var(--background-modifier-border, #363636);
  --modal-border-width: var(--border-width, 0px);
  --modal-height: 650px;
  --modal-max-width: 80vw;
  --modal-radius: var(--radius-l, 6px);
  --modal-width: 80vw;
  --nav-collapse-icon-color: var(--text-muted, #b3b3b3);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-background-active: var(--background-secondary-alt, #000000);
  --nav-item-background-hover: var(--background-secondary-alt, #000000);
  --nav-item-children-padding-start: var(--size-2-2, 10px);
  --nav-item-color-highlighted: var(--text-accent, hsl(253, 58%, 39%));
  --nav-item-margin-bottom: var(--size-2-1, 6px);
  --nav-item-radius: var(--radius-s, 3px);
  --nav-tag-radius: var(--radius-s, 3px);
  --pdf-background: var(--background-primary, #202020);
  --pdf-page-background: var(--background-primary, #202020);
  --pdf-sidebar-background: var(--background-primary, #202020);
  --pill-color-remove-hover: var(--text-accent, hsl(253, 58%, 39%));
  --prompt-background: var(--background-primary, #202020);
  --radius-l: 6px;
  --radius-m: 5px;
  --radius-s: 3px;
  --raised-background: var(--blur-background, color-mix(in srgb, #0c0c0c 65%, transparent) linear-gradient(#0c0c0c, color-mix(in srgb, #0c0c0c 65%, transparent)));
  --ribbon-background: var(--background-secondary-alt, #000000);
  --ribbon-background-collapsed: var(--background-secondary-alt, #000000);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --ribbon-width: 30px;
  --scrollbar-radius: var(--radius-l, 6px);
  --search-result-background: var(--background-primary, #202020);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(253, 58%, 39%)));
  --setting-items-background: var(--background-primary-alt, #000000);
  --setting-items-radius: var(--radius-l, 6px);
  --shiki-code-background: var(--code-background, #161616);
  --shiki-code-block-border-radius: var(--code-radius, 3px);
  --shiki-code-function: var(--color-green, rgb(100, 221, 23));
  --shiki-code-important: var(--color-orange, rgb(255, 145, 0));
  --shiki-code-keyword: var(--color-pink, rgb(245, 0, 87));
  --shiki-code-property: var(--color-cyan, rgb(0, 184, 212));
  --shiki-code-value: var(--color-purple, rgb(124, 77, 255));
  --size-2-1: 6px;
  --size-2-2: 10px;
  --size-2-3: 10px;
  --status-bar-background: var(--background-secondary, #161616);
  --status-bar-radius: var(--radius-m, 5px 0 0 0) 0 0 0;
  --suggestion-background: var(--background-primary, #202020);
  --sync-avatar-color-1: var(--color-red, rgb(255, 23, 68));
  --sync-avatar-color-2: var(--color-orange, rgb(255, 145, 0));
  --sync-avatar-color-4: var(--color-green, rgb(100, 221, 23));
  --sync-avatar-color-5: var(--color-cyan, rgb(0, 184, 212));
  --sync-avatar-color-6: var(--color-blue, rgb(68, 138, 255));
  --sync-avatar-color-7: var(--color-purple, rgb(124, 77, 255));
  --sync-avatar-color-8: var(--color-pink, rgb(245, 0, 87));
  --tab-background-active: var(--background-primary-alt, #000000);
  --tab-container-background: var(--background-secondary, #161616);
  --tab-curve: 0;
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 3px);
  --tab-radius-active: 3px;
  --tab-stacked-header-width: var(--header-height, 30px);
  --tab-switcher-background: var(--background-secondary, #161616);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(253, 58%, 39%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(250, 93%, 70%));
  --table-selection-border-color: var(--interactive-accent, hsl(250, 93%, 70%));
  --tag-color: var(--text-accent, hsl(253, 58%, 39%));
  --tag-color-hover: var(--text-accent, hsl(253, 58%, 39%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(250, 95%, 74%)));
  --text-accent: var(--color-accent-1, hsl(253, 58%, 39%));
  --text-accent-hover: var(--color-accent-2, hsl(250, 95%, 74%));
  --text-error: var(--color-red, rgb(255, 23, 68));
  --text-success: var(--color-green, rgb(100, 221, 23));
  --text-warning: var(--color-orange, rgb(255, 145, 0));
  --textHighlight: var(--background-modifier-hover, var(--background-secondary, #161616));
  --titlebar-background: var(--background-secondary-alt, #000000);
  --titlebar-background-focused: var(--background-secondary-alt, #000000);
  --titlebar-height: 25px;
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --quartz-icon-color: currentColor;
  --collapse-icon-color: var(--nav-collapse-icon-color);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #161616);
  background-color: var(--tab-container-background, rgb(22, 22, 22));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(32, 32, 32));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 22));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #161616);
  background-color: var(--tab-container-background, rgb(22, 22, 22));
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body del {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(131, 107, 250));
  border-color: rgb(131, 107, 250);
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(67, 42, 157));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration-color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(67, 42, 157));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration-color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(67, 42, 157));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body dt {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body td {
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
}

html[saved-theme="dark"] body th {
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(22, 22, 22));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--code-normal, rgb(202, 57, 86));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(22, 22, 22));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #161616);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(0, 0, 0));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(131, 107, 250);
  border-left-width: 0px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 145, 0);
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
  background-color: rgb(0, 184, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
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
  background-color: rgb(124, 77, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 176, 255);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 245, 0, 87);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 23, 68);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 124, 77, 255);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 82, 82);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 184, 212);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 68, 138, 255);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 100, 221, 23);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 0, 191, 165);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 165);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 184, 212);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 145, 0);
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(22, 22, 22));
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
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
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(32, 32, 32));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(22, 22, 22));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 22);
  border-bottom-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(22, 22, 22));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(22, 22, 22));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, hsl(253, 58%, 39%));
  --pill-color-hover: var(--tag-color-hover, hsl(253, 58%, 39%));
  --pill-color-remove: var(--tag-color, hsl(253, 58%, 39%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(253, 58%, 39%));
  color: var(--pill-color, rgb(67, 42, 157));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body h1 {
  font-family: var(--h1-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body h2 {
  font-family: var(--h2-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: var(--inline-title-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body h3 {
  font-family: var(--h3-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body h4 {
  font-family: var(--h4-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body h5 {
  font-family: var(--h5-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body h6 {
  font-family: var(--h6-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 68, 138, 255);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(22, 22, 22));
  border-top-left-radius: 5px;
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  box-shadow: var(--input-shadow, rgb(54, 54, 54) 0px 0px 0px 1px);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  font-family: var(--metadata-label-font, "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  font-family: var(--metadata-input-font, "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, hsl(253, 58%, 39%));
  --pill-color-hover: var(--tag-color-hover, hsl(253, 58%, 39%));
  --pill-color-remove: var(--tag-color, hsl(253, 58%, 39%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(253, 58%, 39%));
  color: var(--pill-color, rgb(67, 42, 157));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(32, 32, 32));
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--background-secondary-alt, rgb(0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgba(138, 92, 245, 0.45);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(22, 22, 22));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(22, 22, 22));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body ul.tags > li {
  color: var(--tag-color, rgb(67, 42, 157));
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: var(--color-base-30, #ddd);
  --background-modifier-border-hover: var(--color-base-35, rgb(250, 250, 250));
  --background-modifier-cover: rgba(0, 0, 0, 0.78);
  --background-modifier-error: var(--color-red, rgb(255, 23, 68));
  --background-modifier-error-hover: var(--color-red, rgb(255, 23, 68));
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 23, 68);
  --background-modifier-hover: var(--background-secondary, #f2f3f5);
  --background-modifier-success: var(--color-green, rgb(100, 221, 23));
  --background-modifier-success-rgb: var(--color-green-rgb, 100, 221, 23);
  --background-primary-alt: var(--color-base-10, #f5f6f8);
  --background-secondary: var(--color-base-20, #f2f3f5);
  --background-secondary-alt: var(--color-base-05, #e3e5e8);
  --bases-cards-cover-background: var(--background-primary-alt, #f5f6f8);
  --bases-cards-radius: var(--radius-m, 5px);
  --bases-embed-border-color: var(--background-modifier-border, #ddd);
  --bases-embed-border-radius: var(--radius-s, 3px);
  --bases-group-heading-property-color: var(--text-muted, #888888);
  --bases-table-border-color: var(--table-border-color, #ddd);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f5f6f8);
  --bases-table-container-border-radius: var(--radius-s, 3px);
  --bases-table-group-background: var(--background-primary-alt, #f5f6f8);
  --bases-table-header-background-hover: var(--background-modifier-hover, #f2f3f5);
  --bases-table-header-color: var(--text-muted, #888888);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #f2f3f5);
  --blockquote-border-color: var(--background-modifier-border, #ddd);
  --blockquote-border-thickness: 4px;
  --button-radius: var(--input-radius, 3px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-bug: var(--color-pink-rgb, 245, 0, 87);
  --callout-content-background: var(--background-secondary, #f2f3f5);
  --callout-content-padding: 0.25em 1.2em;
  --callout-default: var(--color-blue-rgb, 68, 138, 255);
  --callout-error: var(--color-red-rgb, 255, 23, 68);
  --callout-example: var(--color-purple-rgb, 124, 77, 255);
  --callout-fail: var(--color-orange-red-rgb, 255, 82, 82);
  --callout-important: var(--color-teal-rgb, 0, 191, 165);
  --callout-info: var(--color-cyan-rgb, 0, 184, 212);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-green-rgb, 100, 221, 23);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 3px);
  --callout-success: var(--color-dark-green-rgb, 0, 191, 165);
  --callout-summary: var(--color-light-blue-rgb, 0, 176, 255);
  --callout-tip: var(--color-teal-rgb, 0, 191, 165);
  --callout-title-color: var(--text-normal, #2e3338);
  --callout-title-padding: 0.7em 0.5em 0.7em 0.7em;
  --callout-title-size: var(--h6-size, 1em);
  --callout-todo: var(--color-cyan-rgb, 0, 184, 212);
  --callout-warning: var(--color-orange-rgb, 255, 145, 0);
  --canvas-card-label-color: var(--text-faint, #999999);
  --canvas-color-1: var(--color-red-rgb, 255, 23, 68);
  --canvas-color-2: var(--color-orange-rgb, 255, 145, 0);
  --canvas-color-4: var(--color-green-rgb, 100, 221, 23);
  --canvas-color-5: var(--color-cyan-rgb, 0, 184, 212);
  --canvas-color-6: var(--color-purple-rgb, 124, 77, 255);
  --canvas-controls-radius: var(--radius-s, 3px);
  --canvas-dot-pattern: var(--color-base-30, #ddd);
  --caret-color: var(--text-normal, #2e3338);
  --checkbox-border-color: var(--text-faint, #999999);
  --checkbox-border-color-hover: var(--text-muted, #888888);
  --checkbox-color: var(--interactive-accent, hsl(253, 61%, 60%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(258, 58%, 58%));
  --checkbox-radius: var(--radius-s, 3px);
  --checklist-done-color: var(--text-muted, #888888);
  --clickable-icon-radius: var(--radius-s, 3px);
  --code-background: var(--background-secondary, #f2f3f5);
  --code-border-color: var(--background-modifier-border, #ddd);
  --code-bracket-background: var(--background-modifier-hover, #f2f3f5);
  --code-comment: var(--text-faint, #999999);
  --code-important: var(--color-orange, rgb(255, 145, 0));
  --code-keyword: var(--color-pink, rgb(245, 0, 87));
  --code-normal: var(--text-normal, #2e3338);
  --code-operator: var(--color-red, rgb(255, 23, 68));
  --code-property: var(--color-dark-green, rgb(0, 191, 165));
  --code-punctuation: var(--text-muted, #888888);
  --code-radius: var(--radius-s, 3px);
  --code-string: var(--color-teal, rgb(0, 191, 165));
  --code-tag: var(--color-orange-red, rgb(255, 82, 82));
  --code-value: var(--color-purple, rgb(124, 77, 255));
  --collapse-icon-color: var(--text-faint, #999999);
  --collapse-icon-color-collapsed: var(--text-muted, #888888);
  --color-accent: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s) - 25%), calc(var(--accent-l) - 4%));
  --color-accent-1: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s) - 27%), calc(var(--accent-l) - 6%));
  --color-accent-2: hsl(var(--accent-h), calc(var(--accent-s) - 30%), calc(var(--accent-l) - 8%));
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
  --dark: var(--text-normal, var(--color-base-100, #2e3338));
  --darkgray: var(--text-normal, var(--color-base-100, #2e3338));
  --divider-color: var(--background-modifier-border, #ddd);
  --divider-color-hover: var(--interactive-accent, hsl(253, 61%, 60%));
  --dropdown-background-hover: var(--interactive-hover, #f5f6f8);
  --file-header-font: var(--font-interface, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --file-header-justify: left;
  --flair-color: var(--text-normal, #2e3338);
  --font-default: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif;
  --font-mermaid: var(--font-text, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, #ddd);
  --footnote-id-color: var(--text-muted, #888888);
  --footnote-id-color-no-occurrences: var(--text-faint, #999999);
  --footnote-input-background-active: var(--metadata-input-background-active, #f2f3f5);
  --footnote-padding-block: var(--size-2-3, 10px);
  --footnote-padding-inline: var(--size-2-3, 10px);
  --footnote-radius: var(--radius-s, 3px);
  --graph-node: var(--text-muted, #888888);
  --graph-node-focused: var(--text-accent, hsl(253, 63%, 62%));
  --graph-node-tag: var(--color-green, rgb(100, 221, 23));
  --graph-node-unresolved: var(--text-faint, #999999);
  --graph-text: var(--text-normal, #2e3338);
  --gray: var(--text-muted, var(--color-base-70, #888888));
  --header-height: 30px;
  --heading-formatting: var(--text-faint, #999999);
  --highlight: var(--background-modifier-hover, var(--background-secondary, #f2f3f5));
  --hr-color: var(--background-modifier-border, #ddd);
  --icon-color: var(--text-muted, #888888);
  --icon-color-active: var(--text-accent, hsl(253, 63%, 62%));
  --icon-color-focused: var(--text-normal, #2e3338);
  --icon-color-hover: var(--text-muted, #888888);
  --input-date-separator: var(--text-faint, #999999);
  --input-placeholder-color: var(--text-faint, #999999);
  --interactive-accent: var(--color-accent-1, hsl(253, 61%, 60%));
  --interactive-accent-hover: var(--color-accent-2, hsl(258, 58%, 58%));
  --interactive-hover: var(--color-base-10, #f5f6f8);
  --light: var(--background-primary-alt, var(--color-base-10, #f5f6f8));
  --lightgray: var(--background-secondary, var(--color-base-20, #f2f3f5));
  --link-color: var(--text-accent, hsl(253, 63%, 62%));
  --link-color-hover: var(--text-accent-hover, hsl(258, 58%, 58%));
  --link-external-color: var(--text-accent, hsl(253, 63%, 62%));
  --link-external-color-hover: var(--text-accent-hover, hsl(258, 58%, 58%));
  --link-unresolved-color: var(--text-accent, hsl(253, 63%, 62%));
  --list-marker-color: var(--text-faint, #999999);
  --list-marker-color-collapsed: var(--text-accent, hsl(253, 63%, 62%));
  --list-marker-color-hover: var(--text-muted, #888888);
  --menu-background: var(--background-secondary, #f2f3f5);
  --menu-border-color: var(--background-modifier-border-hover, rgb(250, 250, 250));
  --menu-padding: var(--size-2-3, 10px);
  --menu-radius: var(--radius-m, 5px);
  --metadata-border-color: var(--background-modifier-border, #ddd);
  --metadata-divider-color: var(--background-modifier-border, #ddd);
  --metadata-input-background-active: var(--background-modifier-hover, #f2f3f5);
  --metadata-input-font: var(--font-interface, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --metadata-input-text-color: var(--text-normal, #2e3338);
  --metadata-label-background-active: var(--background-modifier-hover, #f2f3f5);
  --metadata-label-font: var(--font-interface, Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif);
  --metadata-label-text-color: var(--text-muted, #888888);
  --metadata-label-text-color-hover: var(--text-muted, #888888);
  --metadata-property-background-active: var(--background-modifier-hover, #f2f3f5);
  --modal-border-color: var(--background-modifier-border, #ddd);
  --modal-border-width: var(--border-width, 0px);
  --modal-height: 650px;
  --modal-max-width: 80vw;
  --modal-radius: var(--radius-l, 6px);
  --modal-width: 80vw;
  --nav-collapse-icon-color: var(--text-muted, #888888);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #999999);
  --nav-heading-color: var(--text-normal, #2e3338);
  --nav-heading-color-collapsed: var(--text-faint, #999999);
  --nav-heading-color-collapsed-hover: var(--text-muted, #888888);
  --nav-heading-color-hover: var(--text-normal, #2e3338);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-background-active: var(--background-secondary-alt, #e3e5e8);
  --nav-item-background-hover: var(--background-secondary-alt, #e3e5e8);
  --nav-item-children-padding-start: var(--size-2-2, 10px);
  --nav-item-color: var(--text-muted, #888888);
  --nav-item-color-active: var(--text-normal, #2e3338);
  --nav-item-color-highlighted: var(--text-accent, hsl(253, 63%, 62%));
  --nav-item-color-hover: var(--text-normal, #2e3338);
  --nav-item-color-selected: var(--text-normal, #2e3338);
  --nav-item-margin-bottom: var(--size-2-1, 6px);
  --nav-item-radius: var(--radius-s, 3px);
  --nav-tag-color: var(--text-faint, #999999);
  --nav-tag-color-active: var(--text-muted, #888888);
  --nav-tag-color-hover: var(--text-muted, #888888);
  --nav-tag-radius: var(--radius-s, 3px);
  --pill-border-color: var(--background-modifier-border, #ddd);
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(250, 250, 250));
  --pill-color: var(--text-muted, #888888);
  --pill-color-hover: var(--text-normal, #2e3338);
  --pill-color-remove: var(--text-faint, #999999);
  --pill-color-remove-hover: var(--text-accent, hsl(253, 63%, 62%));
  --radius-l: 6px;
  --radius-m: 5px;
  --radius-s: 3px;
  --ribbon-background: var(--background-secondary-alt, #e3e5e8);
  --ribbon-background-collapsed: var(--background-secondary-alt, #e3e5e8);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --ribbon-width: 30px;
  --scrollbar-radius: var(--radius-l, 6px);
  --search-clear-button-color: var(--text-muted, #888888);
  --search-icon-color: var(--text-muted, #888888);
  --secondary: var(--text-accent, var(--color-accent, hsl(253, 63%, 62%)));
  --setting-group-heading-color: var(--text-normal, #2e3338);
  --setting-items-background: var(--background-primary-alt, #f5f6f8);
  --setting-items-border-color: var(--background-modifier-border, #ddd);
  --setting-items-radius: var(--radius-l, 6px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #888888);
  --shiki-code-background: var(--code-background, #f2f3f5);
  --shiki-code-block-border-radius: var(--code-radius, 3px);
  --shiki-code-comment: var(--text-faint, #999999);
  --shiki-code-function: var(--color-green, rgb(100, 221, 23));
  --shiki-code-important: var(--color-orange, rgb(255, 145, 0));
  --shiki-code-keyword: var(--color-pink, rgb(245, 0, 87));
  --shiki-code-normal: var(--text-muted, #888888);
  --shiki-code-property: var(--color-cyan, rgb(0, 184, 212));
  --shiki-code-punctuation: var(--text-muted, #888888);
  --shiki-code-value: var(--color-purple, rgb(124, 77, 255));
  --shiki-gutter-border-color: var(--background-modifier-border, #ddd);
  --shiki-gutter-text-color: var(--text-faint, #999999);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #888888);
  --shiki-highlight-neutral: var(--shiki-code-normal, #888888);
  --shiki-terminal-dots-color: var(--text-faint, #999999);
  --size-2-1: 6px;
  --size-2-2: 10px;
  --size-2-3: 10px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(250, 250, 250));
  --slider-track-background: var(--background-modifier-border, #ddd);
  --status-bar-background: var(--background-secondary, #f2f3f5);
  --status-bar-border-color: var(--divider-color, #ddd);
  --status-bar-radius: var(--radius-m, 5px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #888888);
  --sync-avatar-color-1: var(--color-red, rgb(255, 23, 68));
  --sync-avatar-color-2: var(--color-orange, rgb(255, 145, 0));
  --sync-avatar-color-4: var(--color-green, rgb(100, 221, 23));
  --sync-avatar-color-5: var(--color-cyan, rgb(0, 184, 212));
  --sync-avatar-color-6: var(--color-blue, rgb(68, 138, 255));
  --sync-avatar-color-7: var(--color-purple, rgb(124, 77, 255));
  --sync-avatar-color-8: var(--color-pink, rgb(245, 0, 87));
  --tab-background-active: var(--background-primary-alt, #f5f6f8);
  --tab-container-background: var(--background-secondary, #f2f3f5);
  --tab-curve: 0;
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 3px);
  --tab-radius-active: 3px;
  --tab-stacked-header-width: var(--header-height, 30px);
  --tab-switcher-background: var(--background-secondary, #f2f3f5);
  --tab-text-color: var(--text-faint, #999999);
  --tab-text-color-active: var(--text-muted, #888888);
  --tab-text-color-focused: var(--text-muted, #888888);
  --tab-text-color-focused-active: var(--text-muted, #888888);
  --tab-text-color-focused-active-current: var(--text-normal, #2e3338);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(253, 63%, 62%));
  --table-add-button-border-color: var(--background-modifier-border, #ddd);
  --table-border-color: var(--background-modifier-border, #ddd);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(253, 61%, 60%));
  --table-drag-handle-color: var(--text-faint, #999999);
  --table-header-border-color: var(--table-border-color, #ddd);
  --table-header-color: var(--text-normal, #2e3338);
  --table-selection-border-color: var(--interactive-accent, hsl(253, 61%, 60%));
  --tag-color: var(--text-accent, hsl(253, 63%, 62%));
  --tag-color-hover: var(--text-accent, hsl(253, 63%, 62%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(258, 58%, 58%)));
  --text-accent: var(--color-accent, hsl(253, 63%, 62%));
  --text-accent-hover: var(--color-accent-2, hsl(258, 58%, 58%));
  --text-error: var(--color-red, rgb(255, 23, 68));
  --text-faint: var(--color-base-50, #999999);
  --text-muted: var(--color-base-70, #888888);
  --text-normal: var(--color-base-100, #2e3338);
  --text-success: var(--color-green, rgb(100, 221, 23));
  --text-warning: var(--color-orange, rgb(255, 145, 0));
  --textHighlight: var(--background-modifier-hover, var(--background-secondary, #f2f3f5));
  --titlebar-background: var(--background-secondary-alt, #e3e5e8);
  --titlebar-background-focused: var(--background-secondary-alt, #e3e5e8);
  --titlebar-border-color: var(--background-modifier-border, #ddd);
  --titlebar-height: 25px;
  --titlebar-text-color: var(--text-muted, #888888);
  --titlebar-text-color-focused: var(--text-normal, #2e3338);
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --vault-profile-color: var(--text-normal, #2e3338);
  --vault-profile-color-hover: var(--vault-profile-color, #2e3338);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #f2f3f5);
  background-color: var(--tab-container-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #f2f3f5);
  background-color: var(--tab-container-background, rgb(242, 243, 245));
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  color: rgb(46, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(46, 51, 56));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(46, 51, 56));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(46, 51, 56));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(46, 51, 56));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(46, 51, 56));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(46, 51, 56));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body del {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(118, 91, 215));
  border-color: rgb(118, 91, 215);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(136, 136, 136));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(124, 97, 219));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration-color: rgb(124, 97, 219);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(124, 97, 219));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration-color: rgb(124, 97, 219);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(124, 97, 219));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 51, 56);
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 51, 56);
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(153, 153, 153));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(46, 51, 56));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(46, 51, 56));
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(46, 51, 56));
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(242, 243, 245));
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(202, 57, 86));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(242, 243, 245));
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f2f3f5);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(245, 246, 248));
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-radius: 5px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(136, 136, 136));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(118, 91, 215);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(153, 153, 153);
  border-left-width: 0px;
  border-right-color: rgb(153, 153, 153);
  border-right-width: 0px;
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 145, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 153, 153);
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
  background-color: rgb(0, 184, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
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
  background-color: rgb(124, 77, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 176, 255);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 245, 0, 87);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 23, 68);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 124, 77, 255);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 82, 82);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 184, 212);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 68, 138, 255);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 100, 221, 23);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 0, 191, 165);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 165);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 184, 212);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 145, 0);
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(46, 51, 56));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
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
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: var(--text-normal, rgb(46, 51, 56));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(242, 243, 245));
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(242, 243, 245));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, hsl(253, 63%, 62%));
  --pill-color-hover: var(--tag-color-hover, hsl(253, 63%, 62%));
  --pill-color-remove: var(--tag-color, hsl(253, 63%, 62%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(253, 63%, 62%));
  color: var(--pill-color, rgb(124, 97, 219));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(124, 97, 219);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--h1-color, rgb(46, 51, 56));
  font-family: var(--h1-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(46, 51, 56));
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--h2-color, rgb(46, 51, 56));
  font-family: var(--h2-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(46, 51, 56));
  font-family: var(--inline-title-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--h3-color, rgb(46, 51, 56));
  font-family: var(--h3-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--h4-color, rgb(46, 51, 56));
  font-family: var(--h4-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--h5-color, rgb(46, 51, 56));
  font-family: var(--h5-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--h6-color, rgb(46, 51, 56));
  font-family: var(--h6-font, "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 68, 138, 255);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(136, 136, 136));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(136, 136, 136));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 51, 56);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(136, 136, 136));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(242, 243, 245));
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 5px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(136, 136, 136));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(136, 136, 136);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(136, 136, 136));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(136, 136, 136));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(136, 136, 136));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(153, 153, 153));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(46, 51, 56));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(46, 51, 56);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(221, 221, 221);
  color: var(--table-header-color, rgb(46, 51, 56));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: var(--text-muted, rgb(136, 136, 136));
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: rgb(136, 136, 136);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: rgb(136, 136, 136);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(136, 136, 136);
  font-family: var(--metadata-label-font, "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(136, 136, 136);
  font-family: var(--metadata-input-font, "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, hsl(253, 63%, 62%));
  --pill-color-hover: var(--tag-color-hover, hsl(253, 63%, 62%));
  --pill-color-remove: var(--tag-color, hsl(253, 63%, 62%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(253, 63%, 62%));
  color: var(--pill-color, rgb(124, 97, 219));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(46, 51, 56));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(242, 243, 245));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--background-secondary-alt, rgb(227, 229, 232));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgba(138, 92, 245, 0.45);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(242, 243, 245));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
  color: var(--text-normal, rgb(46, 51, 56));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: var(--text-normal, rgb(136, 136, 136));
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(242, 243, 245));
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(46, 51, 56));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(46, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(46, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(46, 51, 56);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.tags > li {
  color: var(--tag-color, rgb(124, 97, 219));
}`,
  },
  classSettings: {
    "hide-tabs": {
      general: `.hide-tabs .workspace-tab-header-container:not(:has([data-type="file-explorer"])) {
display: none;
}`,
    },
    "show-tabs": {
      general: `.show-tabs .workspace-tab-header-container:not(:has([data-type="file-explorer"])) {
height: var(--header-height);
}

.show-tabs .workspace-tab-header-container:not(:has([data-type="file-explorer"])) >* {
opacity: 1;
}`,
    },
    "frontmatter-properties": {
      general: `.frontmatter-properties .frontmatter.language-yaml {
display: none !important;
}`,
    },
  },
};
