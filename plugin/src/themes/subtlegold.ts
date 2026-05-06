import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "subtlegold",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["flow-circular", "sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 41;
  --accent-s: 52%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-form-field: var(--color-base-00, #2a2a2a);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-nav: #151615;
  --background-nav-alt: #1f201f;
  --background-primary: var(--color-base-00, #202020);
  --background-primary-alt: var(--color-base-10, #1a1a1a);
  --background-secondary: var(--color-base-20, #161616);
  --bases-cards-background: var(--background-primary, #202020);
  --bases-cards-cover-background: var(--background-primary-alt, #1a1a1a);
  --bases-group-heading-property-color: var(--text-muted, #888);
  --bases-table-cell-background-active: var(--background-primary, #202020);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #1a1a1a);
  --bases-table-cell-background-selected: var(--table-selection, hsla(41, 52%, 66%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #1a1a1a);
  --bases-table-header-background: var(--background-primary, #202020);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, #888);
  --bases-table-summary-background: var(--background-primary, #202020);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --blockquote-border-color: var(--interactive-accent, #d6ba7c);
  --bodyFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --bold-weight: var(--font-semibold, 600);
  --callout-bug: var(--callout-bug, 245, 0, 87);
  --callout-default: var(--callout-default, 68, 138, 255);
  --callout-error: var(--callout-error, 255, 23, 68);
  --callout-example: var(--callout-example, 124, 77, 255);
  --callout-fail: var(--callout-fail, 255, 82, 82);
  --callout-info: var(--callout-info, 0, 184, 212);
  --callout-question: var(--callout-question, 100, 221, 23);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 0, 200, 83);
  --callout-summary: var(--callout-summary, 0, 176, 255);
  --callout-tip: var(--callout-tip, 0, 191, 165);
  --callout-todo: var(--callout-todo, 0, 184, 212);
  --callout-warning: var(--callout-warning, 255, 145, 0);
  --canvas-background: var(--background-primary, #202020);
  --canvas-card-label-color: var(--text-faint, #555);
  --caret-color: var(--text-normal, #dcddde);
  --checkbox-border-color: var(--text-faint, #555);
  --checkbox-border-color-hover: var(--text-muted, #888);
  --checkbox-color: var(--interactive-accent, #d6ba7c);
  --checkbox-color-hover: var(--interactive-accent-hover, #d6ba7c);
  --checkbox-marker-color: var(--background-primary, #202020);
  --checkbox-size: var(--font-text-size, 15px);
  --checklist-done-color: var(--text-muted, #888);
  --code-background: var(--background-primary-alt, #1a1a1a);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, #555);
  --code-normal: var(--text-muted, #888);
  --code-punctuation: var(--text-muted, #888);
  --codeFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --collapse-icon-color: var(--text-faint, #555);
  --collapse-icon-color-collapsed: var(--text-accent, #d6ba7c);
  --dark: var(--text-normal, var(--color-base-100, #dcddde));
  --darkgray: var(--text-normal, var(--color-base-100, #dcddde));
  --divider-color-hover: var(--interactive-accent, #d6ba7c);
  --dropdown-background: var(--interactive-normal, #2a2a2a);
  --dropdown-background-hover: var(--interactive-hover, #303030);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
	inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, #202020);
  --file-header-background-focused: var(--background-primary, #202020);
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #2a2a2a);
  --flair-color: var(--text-normal, #dcddde);
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-monospace-default: Menlo, SFMono-Regular, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-text: var(--font-text-override), var(--font-text-theme), var(--font-interface);
  --footnote-id-color: var(--text-muted, #888);
  --footnote-id-color-no-occurrences: var(--text-faint, #555);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --golden-brown: #d6ba7c;
  --graph-node: var(--text-muted, #888);
  --graph-node-focused: var(--text-accent, #d6ba7c);
  --graph-node-unresolved: var(--text-faint, #555);
  --graph-text: var(--text-normal, #dcddde);
  --gray: var(--text-muted, var(--color-base-70, #888));
  --h1-size: 2em;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-size: 1.12em;
  --headerFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --heading-formatting: var(--text-faint, #555);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --icon-color: var(--text-muted, #888);
  --icon-color-active: var(--text-accent, #d6ba7c);
  --icon-color-focused: var(--text-normal, #dcddde);
  --icon-color-hover: var(--text-muted, #888);
  --inline-title-size: var(--h1-size, 2em);
  --input-date-separator: var(--text-faint, #555);
  --input-placeholder-color: var(--text-faint, #555);
  --interactive-accent: var(--color-accent-1, #d6ba7c);
  --interactive-accent-hover: var(--color-accent-2, #d6ba7c);
  --interactive-accent-hsl: var(--color-accent-hsl, 41, 52%, 66%);
  --interactive-accent-rgb: #d6ba7c;
  --interactive-hover: var(--color-base-10, #303030);
  --interactive-normal: var(--color-base-00, #2a2a2a);
  --light: var(--background-primary, var(--color-base-00, #202020));
  --lightgray: var(--background-secondary, var(--color-base-20, #161616));
  --link-color: var(--text-accent, #d6ba7c);
  --link-color-hover: var(--text-accent-hover, #d6ba7c);
  --link-external-color: var(--text-accent, #d6ba7c);
  --link-external-color-hover: var(--text-accent-hover, #d6ba7c);
  --link-unresolved-color: var(--text-accent, #d6ba7c);
  --list-bullet-size: 5px;
  --list-marker-color: var(--text-faint, #555);
  --list-marker-color-collapsed: var(--text-accent, #d6ba7c);
  --list-marker-color-hover: var(--text-muted, #888);
  --list-numbered-style: auto;
  --menu-background: var(--background-secondary, #161616);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-input-text-color: var(--text-normal, #dcddde);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-label-text-color: var(--text-muted, #888);
  --metadata-label-text-color-hover: var(--text-muted, #888);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --modal-background: var(--background-primary, #202020);
  --modal-radius: var(--radius-l, 10px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #555);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #555);
  --nav-heading-color: var(--text-normal, #dcddde);
  --nav-heading-color-collapsed: var(--text-faint, #555);
  --nav-heading-color-collapsed-hover: var(--text-muted, #888);
  --nav-heading-color-hover: var(--text-normal, #dcddde);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-color: var(--text-muted, #888);
  --nav-item-color-active: var(--text-normal, #dcddde);
  --nav-item-color-highlighted: var(--text-accent-hover, #d6ba7c);
  --nav-item-color-hover: var(--text-normal, #dcddde);
  --nav-item-color-selected: var(--text-normal, #dcddde);
  --nav-item-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, #555);
  --nav-tag-color-active: var(--text-muted, #888);
  --nav-tag-color-hover: var(--text-muted, #888);
  --pdf-background: var(--background-primary, #202020);
  --pdf-page-background: var(--background-primary, #202020);
  --pdf-sidebar-background: var(--background-primary, #202020);
  --pill-color: var(--text-muted, #888);
  --pill-color-hover: var(--text-normal, #dcddde);
  --pill-color-remove: var(--text-faint, #555);
  --pill-color-remove-hover: var(--text-accent, #d6ba7c);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, #202020);
  --radius-l: 10px;
  --raised-background: var(--blur-background, color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)));
  --ribbon-background: var(--background-secondary, #161616);
  --ribbon-background-collapsed: var(--background-primary, #202020);
  --scrollbar-radius: var(--radius-l, 10px);
  --search-clear-button-color: var(--text-muted, #888);
  --search-icon-color: var(--text-muted, #888);
  --search-result-background: var(--background-primary, #202020);
  --secondary: var(--text-accent, var(--color-accent, #d6ba7c));
  --setting-group-heading-color: var(--text-normal, #dcddde);
  --setting-items-background: var(--background-primary-alt, #1a1a1a);
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #888);
  --shiki-code-background: var(--code-background, #1a1a1a);
  --shiki-code-comment: var(--text-faint, #555);
  --shiki-code-normal: var(--text-muted, #888);
  --shiki-code-punctuation: var(--text-muted, #888);
  --shiki-gutter-text-color: var(--text-faint, #555);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #888);
  --shiki-highlight-neutral: var(--shiki-code-normal, #888);
  --shiki-terminal-dots-color: var(--text-faint, #555);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --status-bar-background: var(--background-secondary, #161616);
  --status-bar-text-color: var(--text-muted, #888);
  --suggestion-background: var(--background-primary, #202020);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: var(--background-primary, #202020);
  --tab-container-background: var(--background-secondary, #161616);
  --tab-stacked-text-align: left;
  --tab-switcher-background: var(--background-secondary, #161616);
  --tab-text-color: var(--text-faint, #555);
  --tab-text-color-active: var(--text-muted, #888);
  --tab-text-color-focused: var(--text-muted, #888);
  --tab-text-color-focused-active: var(--text-muted, #888);
  --tab-text-color-focused-active-current: var(--text-normal, #dcddde);
  --tab-text-color-focused-highlighted: var(--text-accent, #d6ba7c);
  --table-drag-handle-background-active: var(--table-selection-border-color, #d6ba7c);
  --table-drag-handle-color: var(--text-faint, #555);
  --table-drag-handle-color-active: var(--text-on-accent, #dcddde);
  --table-header-color: var(--text-muted, #888);
  --table-header-size: var(--font-smaller, 0.875em);
  --table-header-weight: var(--font-normal, 400);
  --table-selection-border-color: var(--interactive-accent, #d6ba7c);
  --table-white-space: normal;
  --tag-color: var(--text-accent, #d6ba7c);
  --tag-color-hover: var(--text-accent, #d6ba7c);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #d6ba7c));
  --text-accent: var(--color-accent, #d6ba7c);
  --text-accent-hover: var(--color-accent-2, #d6ba7c);
  --text-error: var(--color-red, #ff3333);
  --text-error-hover: #990000;
  --text-faint: var(--color-base-50, #555);
  --text-muted: var(--color-base-70, #888);
  --text-nav-selected: #000000;
  --text-normal: var(--color-base-100, #dcddde);
  --text-on-accent: #dcddde;
  --text-selection: hsla(var(--color-accent-hsl), 0.2);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titleFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --titlebar-background: var(--background-secondary, #161616);
  --titlebar-text-color: var(--text-muted, #888);
  --titlebar-text-color-focused: var(--text-normal, #dcddde);
  --vault-name-color: var(--text-normal, #dcddde);
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, #dcddde);
  --vault-profile-color-hover: var(--vault-profile-color, #dcddde);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #161616);
  background-color: var(--tab-container-background, rgb(22, 22, 22));
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(32, 32, 32));
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-width: var(--divider-width, 1px);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #161616);
  background-color: var(--tab-container-background, rgb(22, 22, 22));
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body html {
  overflow-x: hidden;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(220, 221, 222));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--bold-weight, 600);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(220, 221, 222));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(220, 221, 222));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(220, 221, 222));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(220, 221, 222));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--bold-weight, 600);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(219, 170, 32, 0.37));
  color: var(--text-normal, rgb(220, 221, 222));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(214, 186, 124));
  border-color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(136, 136, 136));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration: underline rgba(213, 185, 123, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(213, 185, 123, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 221, 222);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(85, 85, 85));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(220, 221, 222));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body td {
  color: var(--table-text-color, rgb(220, 221, 222));
}

html[saved-theme="dark"] body th {
  color: var(--table-header-color, rgb(136, 136, 136));
  font-weight: var(--table-header-weight, 400);
  text-align: left;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(26, 26, 26));
  color: var(--code-normal, rgb(136, 136, 136));
  font-family: var(--font-monospace, "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(26, 26, 26));
  overflow-x: scroll;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #1a1a1a);
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(26, 26, 26));
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: var(--text-muted, rgb(136, 136, 136));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(214, 186, 124);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
  padding-bottom: 0px;
  padding-left: 24px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-width: 0px;
  border-left-color: rgb(85, 85, 85);
  border-left-width: 0px;
  border-right-color: rgb(85, 85, 85);
  border-right-width: 0px;
  border-top-color: rgb(85, 85, 85);
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: -21px;
  margin-right: 6px;
  margin-top: 0px;
  width: var(--checkbox-size, 15px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 176, 255);
  background: rgba(0, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 176, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 176, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 176, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 176, 255, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 245, 0, 87);
  background: rgba(245, 0, 87, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(245, 0, 87, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(245, 0, 87, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(245, 0, 87, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(245, 0, 87, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 23, 68);
  background: rgba(255, 23, 68, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 23, 68, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 23, 68, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 23, 68, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 23, 68, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 124, 77, 255);
  background: rgba(124, 77, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(124, 77, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(124, 77, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(124, 77, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(124, 77, 255, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 82, 82);
  background: rgba(255, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 82, 82, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 82, 82, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 82, 82, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 82, 82, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 184, 212);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 184, 212, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 184, 212, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 184, 212, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 68, 138, 255);
  background: rgba(68, 138, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(68, 138, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(68, 138, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(68, 138, 255, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 100, 221, 23);
  background: rgba(100, 221, 23, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(100, 221, 23, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(100, 221, 23, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(100, 221, 23, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(100, 221, 23, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 0, 200, 83);
  background: rgba(0, 200, 83, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 200, 83, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 200, 83, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 200, 83, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 200, 83, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 165);
  background: rgba(0, 191, 165, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 191, 165, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 191, 165, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 191, 165, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 191, 165, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 184, 212);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 184, 212, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 184, 212, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 184, 212, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 145, 0);
  background: rgba(255, 145, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 145, 0, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 145, 0, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 145, 0, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 145, 0, 0.25);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(220, 221, 222);
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
  color: var(--text-normal, rgb(220, 221, 222));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-primary, rgb(32, 32, 32));
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  cursor: grab;
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-primary, rgb(32, 32, 32));
  border-bottom-color: rgb(22, 22, 22);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(41, 52%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(41, 52%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(41, 52%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(41, 52%, 66%, 0.15));
  --pill-color: var(--tag-color, #d6ba7c);
  --pill-color-hover: var(--tag-color-hover, #d6ba7c);
  --pill-color-remove: var(--tag-color, #d6ba7c);
  --pill-color-remove-hover: var(--tag-color-hover, #d6ba7c);
  background-color: var(--pill-background, rgba(213, 185, 123, 0.1));
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(213, 185, 123, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(213, 185, 123, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(213, 185, 123, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(214, 186, 124);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--h1-color, rgb(220, 221, 222));
  font-family: var(--h1-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h1-size, 32px);
  font-weight: var(--h1-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.48px);
  line-height: var(--h1-line-height, 38.4px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(220, 221, 222));
  font-size: var(--inline-title-size, 32px);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--h2-color, rgb(220, 221, 222));
  font-family: var(--h2-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h2-size, 25.6px);
  font-weight: var(--h2-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.384px);
  line-height: var(--h2-line-height, 30.72px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(220, 221, 222));
  font-family: var(--inline-title-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--inline-title-size, 32px);
  letter-spacing: -0.48px;
  line-height: var(--inline-title-line-height, 38.4px);
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--h3-color, rgb(220, 221, 222));
  font-family: var(--h3-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h3-size, 21.92px);
  font-weight: var(--h3-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.3288px);
  line-height: var(--h3-line-height, 28.496px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 15px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--h4-color, rgb(220, 221, 222));
  font-family: var(--h4-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h4-size, 20px);
  font-weight: var(--h4-weight, 600);
  letter-spacing: var(--h4-letter-spacing, 0.3px);
  line-height: var(--h4-line-height, 28px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 15px);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--h5-color, rgb(220, 221, 222));
  font-family: var(--h5-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h5-size, 17.92px);
  font-weight: var(--h5-weight, 600);
  letter-spacing: var(--h5-letter-spacing, 0.2688px);
  line-height: var(--h5-line-height, 26.88px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 15px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--h6-color, rgb(220, 221, 222));
  font-family: var(--h6-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h6-size, 17.92px);
  font-weight: var(--h6-weight, 600);
  letter-spacing: var(--h6-letter-spacing, 0.2688px);
  line-height: var(--h6-line-height, 26.88px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 15px;
}

html[saved-theme="dark"] body hr {
  border-right-width: var(--divider-width, 1px);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 68, 138, 255);
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(68, 138, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(68, 138, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(68, 138, 255, 0.25);
  border-top-width: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(136, 136, 136));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(136, 136, 136));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: var(--icon-color, rgb(136, 136, 136));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(22, 22, 22));
  color: var(--status-bar-text-color, rgb(136, 136, 136));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(136, 136, 136);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(136, 136, 136));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(136, 136, 136));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: var(--icon-color, rgb(136, 136, 136));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(85, 85, 85));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(220, 221, 222));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-color: rgb(220, 221, 222);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  color: var(--table-header-color, rgb(136, 136, 136));
  font-weight: var(--table-header-weight, 400);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: var(--text-muted, rgb(136, 136, 136));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(136, 136, 136);
  font-family: var(--metadata-label-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(136, 136, 136);
  font-family: var(--metadata-input-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(41, 52%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(41, 52%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(41, 52%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(41, 52%, 66%, 0.15));
  --pill-color: var(--tag-color, #d6ba7c);
  --pill-color-hover: var(--tag-color-hover, #d6ba7c);
  --pill-color-remove: var(--tag-color, #d6ba7c);
  --pill-color-remove-hover: var(--tag-color-hover, #d6ba7c);
  background-color: var(--pill-background, rgba(213, 185, 123, 0.1));
  color: var(--pill-color, rgb(214, 186, 124));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(32, 32, 32));
  color: var(--text-normal, rgb(220, 221, 222));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(220, 221, 222);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(22, 22, 22));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
  color: var(--text-normal, rgb(220, 221, 222));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-size: var(--file-header-font-size, 13px);
  font-weight: var(--file-header-font-weight, 400);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-width: 0px;
  color: var(--text-normal, rgb(220, 221, 222));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(26, 26, 26));
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 0px;
  border-right-color: rgb(136, 136, 136);
  border-right-width: 0px;
  border-top-color: rgb(136, 136, 136);
  border-top-width: 0px;
  color: var(--code-normal, rgb(136, 136, 136));
  font-family: var(--font-interface, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--font-ui-smaller, 12px);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 0px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 0px;
  border-top-color: rgb(220, 221, 222);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
  vertical-align: top;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(213, 185, 123, 0.1));
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(213, 185, 123, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(213, 185, 123, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(213, 185, 123, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(214, 186, 124));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 41;
  --accent-s: 52%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-nav: rgba(41, 44, 46, 255);
  --background-nav-alt: rgba(58, 62, 63, 255);
  --background-primary: var(--color-base-00, rgba(250, 250, 250));
  --bases-cards-background: var(--background-primary, rgba(250, 250, 250));
  --bases-table-cell-background-active: var(--background-primary, rgba(250, 250, 250));
  --bases-table-cell-background-selected: var(--table-selection, hsla(41, 52%, 66%, 0.1));
  --bases-table-header-background: var(--background-primary, rgba(250, 250, 250));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bases-table-summary-background: var(--background-primary, rgba(250, 250, 250));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --blockquote-border-color: var(--interactive-accent, #d6ba7c);
  --bodyFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --bold-weight: var(--font-semibold, 600);
  --callout-bug: var(--callout-bug, 245, 0, 87);
  --callout-default: var(--callout-default, 68, 138, 255);
  --callout-error: var(--callout-error, 255, 23, 68);
  --callout-example: var(--callout-example, 124, 77, 255);
  --callout-fail: var(--callout-fail, 255, 82, 82);
  --callout-info: var(--callout-info, 0, 184, 212);
  --callout-question: var(--callout-question, 100, 221, 23);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 0, 200, 83);
  --callout-summary: var(--callout-summary, 0, 176, 255);
  --callout-tip: var(--callout-tip, 0, 191, 165);
  --callout-todo: var(--callout-todo, 0, 184, 212);
  --callout-warning: var(--callout-warning, 255, 145, 0);
  --canvas-background: var(--background-primary, rgba(250, 250, 250));
  --canvas-card-label-color: var(--text-faint, rgba(150, 150, 150, 255));
  --caret-color: var(--text-normal, rgba(44, 44, 44, 255));
  --checkbox-border-color: var(--text-faint, rgba(150, 150, 150, 255));
  --checkbox-color: var(--interactive-accent, #d6ba7c);
  --checkbox-color-hover: var(--interactive-accent-hover, #d6ba7c);
  --checkbox-marker-color: var(--background-primary, rgba(250, 250, 250));
  --checkbox-size: var(--font-text-size, 15px);
  --code-block-background: #ffff;
  --code-block-border: #92a1a17a;
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --code-comment: var(--text-faint, rgba(150, 150, 150, 255));
  --code-normal: var(--text-muted, #5c5c5c);
  --codeFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --collapse-icon-color: var(--text-faint, rgba(150, 150, 150, 255));
  --collapse-icon-color-collapsed: var(--text-accent, #d6ba7c);
  --dark: var(--text-normal, var(--color-base-100, rgba(44, 44, 44, 255)));
  --darkgray: var(--text-normal, var(--color-base-100, rgba(44, 44, 44, 255)));
  --divider-color-hover: var(--interactive-accent, #d6ba7c);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
	inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, rgba(250, 250, 250));
  --file-header-background-focused: var(--background-primary, rgba(250, 250, 250));
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --file-margins: var(--size-4-8, 32px);
  --flair-color: var(--text-normal, rgba(44, 44, 44, 255));
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-monospace-default: Menlo, SFMono-Regular, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-text: var(--font-text-override), var(--font-text-theme), var(--font-interface);
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(150, 150, 150, 255));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.075));
  --golden-brown: #d6ba7c;
  --graph-node-focused: var(--text-accent, #d6ba7c);
  --graph-node-unresolved: var(--text-faint, rgba(150, 150, 150, 255));
  --graph-text: var(--text-normal, rgba(44, 44, 44, 255));
  --gray: var(--text-faint, var(--color-base-50, rgba(150, 150, 150, 255)));
  --h1-size: 2em;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-size: 1.12em;
  --headerFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --heading-formatting: var(--text-faint, rgba(150, 150, 150, 255));
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --icon-color-active: var(--text-accent, #d6ba7c);
  --icon-color-focused: var(--text-normal, rgba(44, 44, 44, 255));
  --inline-title-size: var(--h1-size, 2em);
  --input-date-separator: var(--text-faint, rgba(150, 150, 150, 255));
  --input-placeholder-color: var(--text-faint, rgba(150, 150, 150, 255));
  --interactive-accent: var(--color-accent-1, #d6ba7c);
  --interactive-accent-hover: var(--color-accent-2, #d6ba7c);
  --interactive-accent-hsl: var(--color-accent-hsl, 41, 52%, 66%);
  --interactive-accent-rgb: #d6ba7c;
  --light: var(--background-primary, var(--color-base-00, rgba(250, 250, 250)));
  --link-color: var(--text-accent, #d6ba7c);
  --link-color-hover: var(--text-accent-hover, #d6ba7c);
  --link-external-color: var(--text-accent, #d6ba7c);
  --link-external-color-hover: var(--text-accent-hover, #d6ba7c);
  --link-unresolved-color: var(--text-accent, #d6ba7c);
  --list-bullet-size: 5px;
  --list-color: #d6ba7c;
  --list-marker-color: var(--text-faint, rgba(150, 150, 150, 255));
  --list-marker-color-collapsed: var(--text-accent, #d6ba7c);
  --list-numbered-style: auto;
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-input-text-color: var(--text-normal, rgba(44, 44, 44, 255));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --modal-background: var(--background-primary, rgba(250, 250, 250));
  --modal-radius: var(--radius-l, 10px);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgba(150, 150, 150, 255));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(150, 150, 150, 255));
  --nav-heading-color: var(--text-normal, rgba(44, 44, 44, 255));
  --nav-heading-color-collapsed: var(--text-faint, rgba(150, 150, 150, 255));
  --nav-heading-color-hover: var(--text-normal, rgba(44, 44, 44, 255));
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-color-active: var(--text-normal, rgba(44, 44, 44, 255));
  --nav-item-color-highlighted: var(--text-accent-hover, #d6ba7c);
  --nav-item-color-hover: var(--text-normal, rgba(44, 44, 44, 255));
  --nav-item-color-selected: var(--text-normal, rgba(44, 44, 44, 255));
  --nav-item-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, rgba(150, 150, 150, 255));
  --pdf-background: var(--background-primary, rgba(250, 250, 250));
  --pdf-page-background: var(--background-primary, rgba(250, 250, 250));
  --pdf-sidebar-background: var(--background-primary, rgba(250, 250, 250));
  --pill-color-hover: var(--text-normal, rgba(44, 44, 44, 255));
  --pill-color-remove: var(--text-faint, rgba(150, 150, 150, 255));
  --pill-color-remove-hover: var(--text-accent, #d6ba7c);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, rgba(250, 250, 250));
  --radius-l: 10px;
  --raised-background: var(--blur-background, color-mix(in srgb, rgba(250, 250, 250) 65%, transparent) linear-gradient(rgba(250, 250, 250), color-mix(in srgb, rgba(250, 250, 250) 65%, transparent)));
  --ribbon-background-collapsed: var(--background-primary, rgba(250, 250, 250));
  --scrollbar-radius: var(--radius-l, 10px);
  --search-result-background: var(--background-primary, rgba(250, 250, 250));
  --secondary: var(--text-accent, var(--color-accent, #d6ba7c));
  --setting-group-heading-color: var(--text-normal, rgba(44, 44, 44, 255));
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-code-comment: var(--text-faint, rgba(150, 150, 150, 255));
  --shiki-gutter-text-color: var(--text-faint, rgba(150, 150, 150, 255));
  --shiki-terminal-dots-color: var(--text-faint, rgba(150, 150, 150, 255));
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --suggestion-background: var(--background-primary, rgba(250, 250, 250));
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: var(--background-primary, rgba(250, 250, 250));
  --tab-stacked-text-align: left;
  --tab-text-color: var(--text-faint, rgba(150, 150, 150, 255));
  --tab-text-color-focused-active-current: var(--text-normal, rgba(44, 44, 44, 255));
  --tab-text-color-focused-highlighted: var(--text-accent, #d6ba7c);
  --table-drag-handle-background-active: var(--table-selection-border-color, #d6ba7c);
  --table-drag-handle-color: var(--text-faint, rgba(150, 150, 150, 255));
  --table-header-color: var(--text-muted, #5c5c5c);
  --table-header-size: var(--font-smaller, 0.875em);
  --table-header-weight: var(--font-normal, 400);
  --table-selection-border-color: var(--interactive-accent, #d6ba7c);
  --table-white-space: normal;
  --tag-color: var(--text-accent, #d6ba7c);
  --tag-color-hover: var(--text-accent, #d6ba7c);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #d6ba7c));
  --text-accent: var(--color-accent, #d6ba7c);
  --text-accent-hover: var(--color-accent-2, #d6ba7c);
  --text-faint: var(--color-base-50, rgba(150, 150, 150, 255));
  --text-nav: rgba(190, 190, 190, 255);
  --text-nav-selected: rgba(255, 255, 255, 255);
  --text-normal: var(--color-base-100, rgba(44, 44, 44, 255));
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titleFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-interface));
  --titlebar-text-color-focused: var(--text-normal, rgba(44, 44, 44, 255));
  --vault-name-color: var(--text-normal, rgba(44, 44, 44, 255));
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, rgba(44, 44, 44, 255));
  --vault-profile-color-hover: var(--vault-profile-color, rgba(44, 44, 44, 255));
  --quartz-icon-color: currentColor;
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(250, 250, 250));
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-width: var(--divider-width, 1px);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body html {
  overflow-x: hidden;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(44, 44, 44));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--bold-weight, 600);
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(44, 44, 44));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(44, 44, 44));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(44, 44, 44));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(44, 44, 44));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--bold-weight, 600);
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(219, 170, 32, 0.37));
  color: var(--text-normal, rgb(44, 44, 44));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body del {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(150, 150, 150);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(214, 186, 124));
  border-color: rgb(214, 186, 124);
}

html[saved-theme="light"] body p {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(214, 186, 124) none 0px;
  text-decoration: underline rgba(213, 185, 123, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(213, 185, 123, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(44, 44, 44);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(44, 44, 44);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(150, 150, 150));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(44, 44, 44));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body td {
  color: var(--table-text-color, rgb(44, 44, 44));
}

html[saved-theme="light"] body th {
  color: var(--table-header-color, rgb(92, 92, 92));
  font-weight: var(--table-header-weight, 400);
  text-align: left;
}`,
    code: `html[saved-theme="light"] body code {
  color: var(--code-normal, rgb(92, 92, 92));
  font-family: var(--font-monospace, "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

html[saved-theme="light"] body pre:has(> code) {
  overflow-x: scroll;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(214, 186, 124);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
  padding-bottom: 0px;
  padding-left: 24px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(150, 150, 150);
  border-bottom-width: 0px;
  border-left-color: rgb(150, 150, 150);
  border-left-width: 0px;
  border-right-color: rgb(150, 150, 150);
  border-right-width: 0px;
  border-top-color: rgb(150, 150, 150);
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: -21px;
  margin-right: 6px;
  margin-top: 0px;
  width: var(--checkbox-size, 15px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(44, 44, 44);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 176, 255);
  background: rgba(0, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 176, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 176, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 176, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 176, 255, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 245, 0, 87);
  background: rgba(245, 0, 87, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(245, 0, 87, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(245, 0, 87, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(245, 0, 87, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(245, 0, 87, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 23, 68);
  background: rgba(255, 23, 68, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 23, 68, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 23, 68, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 23, 68, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 23, 68, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 124, 77, 255);
  background: rgba(124, 77, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(124, 77, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(124, 77, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(124, 77, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(124, 77, 255, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 82, 82);
  background: rgba(255, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 82, 82, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 82, 82, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 82, 82, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 82, 82, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 184, 212);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 184, 212, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 184, 212, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 184, 212, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 68, 138, 255);
  background: rgba(68, 138, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(68, 138, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(68, 138, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(68, 138, 255, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 100, 221, 23);
  background: rgba(100, 221, 23, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(100, 221, 23, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(100, 221, 23, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(100, 221, 23, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(100, 221, 23, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 0, 200, 83);
  background: rgba(0, 200, 83, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 200, 83, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 200, 83, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 200, 83, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 200, 83, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 165);
  background: rgba(0, 191, 165, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 191, 165, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 191, 165, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 191, 165, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 191, 165, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 184, 212);
  background: rgba(0, 184, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 184, 212, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 184, 212, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 184, 212, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 145, 0);
  background: rgba(255, 145, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 145, 0, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 145, 0, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 145, 0, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 145, 0, 0.25);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(68, 138, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 0px;
  border-right-color: rgb(68, 138, 255);
  border-right-width: 0px;
  border-top-color: rgb(68, 138, 255);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(68, 138, 255));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(44, 44, 44);
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
  color: var(--text-normal, rgb(44, 44, 44));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-primary, rgb(250, 250, 250));
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(44, 44, 44);
  cursor: grab;
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-primary, rgb(250, 250, 250));
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(41, 52%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(41, 52%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(41, 52%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(41, 52%, 66%, 0.15));
  --pill-color: var(--tag-color, #d6ba7c);
  --pill-color-hover: var(--tag-color-hover, #d6ba7c);
  --pill-color-remove: var(--tag-color, #d6ba7c);
  --pill-color-remove-hover: var(--tag-color-hover, #d6ba7c);
  background-color: var(--pill-background, rgba(213, 185, 123, 0.1));
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(213, 185, 123, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(213, 185, 123, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(213, 185, 123, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(214, 186, 124));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(214, 186, 124);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--h1-color, rgb(44, 44, 44));
  font-family: var(--h1-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h1-size, 32px);
  font-weight: var(--h1-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.48px);
  line-height: var(--h1-line-height, 38.4px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(44, 44, 44));
  font-size: var(--inline-title-size, 32px);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--h2-color, rgb(44, 44, 44));
  font-family: var(--h2-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h2-size, 25.6px);
  font-weight: var(--h2-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.384px);
  line-height: var(--h2-line-height, 30.72px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(44, 44, 44));
  font-family: var(--inline-title-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--inline-title-size, 32px);
  letter-spacing: -0.48px;
  line-height: var(--inline-title-line-height, 38.4px);
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--h3-color, rgb(44, 44, 44));
  font-family: var(--h3-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h3-size, 21.92px);
  font-weight: var(--h3-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.3288px);
  line-height: var(--h3-line-height, 28.496px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 15px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--h4-color, rgb(44, 44, 44));
  font-family: var(--h4-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h4-size, 20px);
  font-weight: var(--h4-weight, 600);
  letter-spacing: var(--h4-letter-spacing, 0.3px);
  line-height: var(--h4-line-height, 28px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 15px);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--h5-color, rgb(44, 44, 44));
  font-family: var(--h5-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h5-size, 17.92px);
  font-weight: var(--h5-weight, 600);
  letter-spacing: var(--h5-letter-spacing, 0.2688px);
  line-height: var(--h5-line-height, 26.88px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 15px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--h6-color, rgb(44, 44, 44));
  font-family: var(--h6-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h6-size, 17.92px);
  font-weight: var(--h6-weight, 600);
  letter-spacing: var(--h6-letter-spacing, 0.2688px);
  line-height: var(--h6-line-height, 26.88px);
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 15px;
}

html[saved-theme="light"] body hr {
  border-right-width: var(--divider-width, 1px);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 68, 138, 255);
  border-bottom-color: rgba(68, 138, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(68, 138, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(68, 138, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(68, 138, 255, 0.25);
  border-top-width: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  color: rgb(44, 44, 44);
}`,
    footer: `html[saved-theme="light"] body footer {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(44, 44, 44);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(150, 150, 150));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(44, 44, 44));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(250, 250, 250));
  border-color: rgb(44, 44, 44);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  color: var(--table-header-color, rgb(92, 92, 92));
  font-weight: var(--table-header-weight, 400);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  font-family: var(--metadata-label-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  font-family: var(--metadata-input-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(41, 52%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(41, 52%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(41, 52%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(41, 52%, 66%, 0.15));
  --pill-color: var(--tag-color, #d6ba7c);
  --pill-color-hover: var(--tag-color-hover, #d6ba7c);
  --pill-color-remove: var(--tag-color, #d6ba7c);
  --pill-color-remove-hover: var(--tag-color-hover, #d6ba7c);
  background-color: var(--pill-background, rgba(213, 185, 123, 0.1));
  color: var(--pill-color, rgb(214, 186, 124));
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(250, 250, 250));
  color: var(--text-normal, rgb(44, 44, 44));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(44, 44, 44);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
  color: var(--text-normal, rgb(44, 44, 44));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-size: var(--file-header-font-size, 13px);
  font-weight: var(--file-header-font-weight, 400);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body abbr {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: var(--text-normal, rgb(44, 44, 44));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-width: 0px;
  color: var(--code-normal, rgb(92, 92, 92));
  font-family: var(--font-interface, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--font-ui-smaller, 12px);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 44, 44);
  border-left-width: 0px;
  border-right-color: rgb(44, 44, 44);
  border-right-width: 0px;
  border-top-color: rgb(44, 44, 44);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body summary {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body sup {
  color: rgb(44, 44, 44);
  vertical-align: top;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(213, 185, 123, 0.1));
  border-bottom-color: rgba(213, 185, 123, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(213, 185, 123, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(213, 185, 123, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(213, 185, 123, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(214, 186, 124));
}`,
  },
};
