import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "universitario",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --A01: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A02: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A03: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A04: hsl(calc(var(--accent-h) + 30), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A05: hsl(calc(var(--accent-h) + 40), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A06: hsl(calc(var(--accent-h) + 50), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A07: hsl(calc(var(--accent-h) + 45), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A08: hsl(calc(var(--accent-h) + 40), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A09: hsl(calc(var(--accent-h) + 30), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A10: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --A11: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 40%));
  --accent-h: 220;
  --accent-l: 65%;
  --accent-s: 80%;
  --background-highlight: hsl(calc(var(--accent-h) + 70), calc(var(--accent-s) - 40%), calc(var(--accent-l) - 40%));
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-form-field: var(--color-base-00, #2a2a2a);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-primary: hsl(calc(var(--accent-h) - 10), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 55%));
  --background-primary-alt: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 70%), calc(var(--accent-l) - 50%));
  --background-primary-alt-1: var(--background-primary-alt, hsl(220, 10%, 15%));
  --background-search: hsl(calc(var(--accent-h) - 30), calc(var(--accent-s) - 60%), calc(var(--accent-l) - 40%));
  --background-secondary: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 75%), calc(var(--accent-l) - 35%));
  --background-table: hsl(calc(var(--accent-h) - 30), calc(var(--accent-s) - 85%), calc(var(--accent-l) - 35%));
  --background-tertiary: hsl(calc(var(--accent-h) - 20), calc(var(--accent-s) - 70%), calc(var(--accent-l) - 45%));
  --bases-cards-background: var(--background-primary, hsl(210, 15%, 10%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(220, 10%, 15%));
  --bases-group-heading-property-color: var(--text-muted, white);
  --bases-table-cell-background-active: var(--background-primary, hsl(210, 15%, 10%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(220, 10%, 15%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(220, 80%, 65%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(220, 10%, 15%));
  --bases-table-header-background: var(--background-primary, hsl(210, 15%, 10%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, white);
  --bases-table-summary-background: var(--background-primary, hsl(210, 15%, 10%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --blockquote-border-color: var(--interactive-accent, hsl(220, 80%, 65%));
  --bold-color: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 30%), calc(var(--accent-l) + 5%));
  --bold-weight: var(--font-semibold, 600);
  --callout-border-opacity: 0;
  --callout-content-padding: 0px 12px;
  --callout-gap: 1em;
  --callout-margin: 0px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 4px 11px 11px 11px);
  --callout-radius: var(--radius-s, 10px);
  --callout-title-background: transparent;
  --callout-title-size: 1.1em;
  --canvas-background: var(--background-primary, hsl(210, 15%, 10%));
  --canvas-card-label-color: var(--text-faint, hsl(300, 30%, 75%));
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --cbs: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.03),
        0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 12px rgba(0, 0, 0, 0.03),
        0px 2px 16px rgba(0, 0, 0, 0.03), 0px 4px 20px rgba(0, 0, 0, 0.02);
  --checkbox-border-color: var(--text-faint, hsl(300, 30%, 75%));
  --checkbox-border-color-hover: var(--text-muted, white);
  --checkbox-color: var(--interactive-accent, hsl(220, 80%, 65%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(217, 81.6%, 74.75%));
  --checkbox-marker-color: var(--background-primary, hsl(210, 15%, 10%));
  --checklist-done-color: var(--text-muted, white);
  --code-background: var(--background-primary-alt, hsl(220, 10%, 15%));
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, hsl(300, 30%, 75%));
  --code-normal: var(--text-muted, white);
  --code-punctuation: var(--text-muted, white);
  --collapse-icon-color: var(--text-faint, hsl(300, 30%, 75%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --dark: var(--text-muted, var(--color-base-70, white));
  --darkgray: var(--text-muted, var(--color-base-70, white));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(220, 80%, 65%));
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
        inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, hsl(210, 15%, 10%));
  --file-header-background-focused: var(--background-primary, hsl(210, 15%, 10%));
  --file-margins: var(--size-4-8, 32px);
  --footnote-id-color: var(--text-muted, white);
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(300, 30%, 75%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --graph-line: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --graph-node: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --graph-node-focused: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --graph-node-unresolved: var(--text-faint, hsl(300, 30%, 75%));
  --gray: var(--text-muted, var(--color-base-70, white));
  --h1-size: 2.5rem;
  --h2-size: 2.0rem;
  --h2-weight: 600;
  --h3-size: 1.7rem;
  --h3-weight: 600;
  --h4-size: 1.5rem;
  --h4-weight: 600;
  --h5-color: #e1aaff;
  --h5-size: 1.3rem;
  --h5-weight: 600;
  --h6-color: #ffafc8;
  --h6-size: 1.2rem;
  --heading-formatting: var(--text-faint, hsl(300, 30%, 75%));
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --icon-color: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 25%));
  --icon-color-active: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --icon-color-hover: var(--text-muted, white);
  --indentation-guide-color: var(--background-secondary, hsl(230, 5%, 30%));
  --indentation-guide-color-active: rgba(var(--mono-rgb-100), 1);
  --indentation-guide-width: var(--border-width, 2px);
  --indentation-guide-width-active: var(--border-width, 2px);
  --inline-title-size: var(--h1-size, 2.5rem);
  --input-date-separator: var(--text-faint, hsl(300, 30%, 75%));
  --input-placeholder-color: var(--text-faint, hsl(300, 30%, 75%));
  --interactive-accent: var(--color-accent-1, hsl(220, 80%, 65%));
  --interactive-accent-hover: var(--color-accent-2, hsl(217, 81.6%, 74.75%));
  --interactive-accent-hsl: var(--color-accent-hsl, 220, 80%, 65%);
  --interactive-hover: var(--color-base-10, #3f3f3f);
  --interactive-normal: var(--color-base-00, #363636);
  --italic-color: hsl(calc(var(--accent-h) + 60), calc(var(--accent-s) - 30%), calc(var(--accent-l) + 10%));
  --light: var(--background-primary, hsl(calc(var(--accent-h) - 10), calc(var(--accent-s) - 65%), calc(var(--accent-l) - 55%)));
  --lightgray: var(--background-secondary, hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 75%), calc(var(--accent-l) - 35%)));
  --link-color: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 17%));
  --link-color-hover: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 22%));
  --link-external-color: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --link-external-color-hover: var(--text-accent-hover, hsl(215, 84%, 83.85%));
  --link-unresolved-color: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --list-bullet-size: 0.3rem;
  --list-marker-color: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 35%));
  --list-marker-color-collapsed: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --list-marker-color-hover: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --list-spacing: 0.2em;
  --mcc-img-snw-display: none;
  --menu-background: var(--background-secondary, hsl(230, 5%, 30%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-text-color: var(--text-muted, white);
  --metadata-label-text-color-hover: var(--text-muted, white);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --modal-background: var(--background-primary, hsl(210, 15%, 10%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(300, 30%, 75%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(300, 30%, 75%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(300, 30%, 75%));
  --nav-heading-color-collapsed-hover: var(--text-muted, white);
  --nav-indentation-guide-color: var(--indentation-guide-color, transparent);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-children-margin-left: var(--size-4-3, 12px);
  --nav-item-children-padding-left: var(--size-2-2, 4px);
  --nav-item-color: var(--text-muted, white);
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(215, 84%, 83.85%));
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsl(300, 30%, 75%));
  --nav-tag-color-active: var(--text-muted, white);
  --nav-tag-color-hover: var(--text-muted, white);
  --pdf-background: var(--background-primary, hsl(210, 15%, 10%));
  --pdf-page-background: var(--background-primary, hsl(210, 15%, 10%));
  --pdf-sidebar-background: var(--background-primary, hsl(210, 15%, 10%));
  --pill-color: var(--text-muted, white);
  --pill-color-remove: var(--text-faint, hsl(300, 30%, 75%));
  --pill-color-remove-hover: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, hsl(210, 15%, 10%));
  --red: hsla(var(--interactive-accent-hsl), 0.9);
  --ribbon-background: var(--background-secondary, hsl(230, 5%, 30%));
  --ribbon-background-collapsed: var(--background-secondary, hsl(230, 5%, 30%));
  --scrollbar-active-thumb-bg: hsla(var(--interactive-accent-hsl), 0.2);
  --scrollbar-bg: hsla(var(--interactive-accent-hsl), 0.2);
  --scrollbar-thumb-bg: hsla(var(--interactive-accent-hsl), 0.2);
  --search-clear-button-color: var(--text-muted, white);
  --search-icon-color: var(--text-muted, white);
  --search-result-background: var(--background-primary, hsl(210, 15%, 10%));
  --secondary: var(--text-accent, var(--color-accent, hsl(217, 81.6%, 74.75%)));
  --setting-items-background: var(--background-primary-alt, hsl(220, 10%, 15%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, white);
  --shiki-code-background: var(--code-background, hsl(220, 10%, 15%));
  --shiki-code-comment: var(--text-faint, hsl(300, 30%, 75%));
  --shiki-code-normal: var(--text-muted, white);
  --shiki-code-punctuation: var(--text-muted, white);
  --shiki-gutter-text-color: var(--text-faint, hsl(300, 30%, 75%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, white);
  --shiki-highlight-neutral: var(--shiki-code-normal, white);
  --shiki-terminal-dots-color: var(--text-faint, hsl(300, 30%, 75%));
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --status-bar-background: var(--background-tertiary, hsl(200, 10%, 20%));
  --status-bar-border-color: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0px);
  --status-bar-scroll-padding: calc(var(--status-bar-font-size) + 18px);
  --status-bar-text-color: var(--text-muted, white);
  --suggestion-background: var(--background-primary, hsl(210, 15%, 10%));
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: var(--background-primary, transparent);
  --tab-container-background: var(--background-primary, hsl(210, 15%, 10%));
  --tab-outline-color: var(--divider-color, transparent);
  --tab-stacked-text-align: left;
  --tab-switcher-background: var(--background-secondary, hsl(230, 5%, 30%));
  --tab-text-color: var(--text-faint, hsl(300, 30%, 75%));
  --tab-text-color-active: var(--text-muted, white);
  --tab-text-color-focused: var(--text-muted, white);
  --tab-text-color-focused-active: var(--text-muted, white);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(220, 80%, 65%));
  --table-drag-handle-color: var(--text-faint, hsl(300, 30%, 75%));
  --table-drag-padding: var(--table-drag-space, 16px);
  --table-drag-space: 16px;
  --table-selection-border-color: var(--interactive-accent, hsl(220, 80%, 65%));
  --tag-color: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --tag-color-hover: var(--text-accent, hsl(217, 81.6%, 74.75%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(215, 84%, 83.85%)));
  --text-accent: var(--color-accent, hsl(217, 81.6%, 74.75%));
  --text-accent-hover: var(--color-accent-2, hsl(215, 84%, 83.85%));
  --text-faint: hsl(calc(var(--accent-h) + 80), calc(var(--accent-s) - 50%), calc(var(--accent-l) + 10%));
  --text-important: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s)), calc(var(--accent-l) + 30%));
  --text-muted: var(--color-base-70, white);
  --text-selection: hsla(var(--color-accent-hsl), 0.2);
  --text-title: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 20%), calc(var(--accent-l) + 20%));
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titlebar-background: var(--background-primary, hsl(210, 15%, 10%));
  --titlebar-background-focused: var(--background-primary, hsl(210, 15%, 10%));
  --titlebar-text-color: var(--text-muted, white);
  --vault-name-color: var(--text-normal, #dadada);
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(230, 5%, 30%));
  background-color: var(--tab-container-background, rgb(22, 26, 29));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(22, 26, 29));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, rgb(22, 26, 29));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(230, 5%, 30%));
  background-color: var(--tab-container-background, rgb(22, 26, 29));
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body html {
  border: 0px none rgb(0, 0, 0);
  border-bottom: 0px none rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-left: 0px none rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right: 0px none rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top: 0px none rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  caret-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  column-rule-color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  outline-color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
  text-fill-color: rgb(0, 0, 0);
  text-stroke: 0px rgb(0, 0, 0);
  text-stroke-color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(140, 140, 217));
  outline: rgb(140, 140, 217) none 0px;
  text-decoration-color: rgb(140, 140, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(202, 159, 223));
  outline: rgb(202, 159, 223) none 0px;
  text-decoration-color: rgb(202, 159, 223);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(202, 159, 223));
  outline: rgb(202, 159, 223) none 0px;
  text-decoration-color: rgb(202, 159, 223);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(140, 140, 217));
  outline: rgb(140, 140, 217) none 0px;
  text-decoration-color: rgb(140, 140, 217);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(81, 38, 89));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(210, 172, 210);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(94, 142, 237));
  border-color: rgb(94, 142, 237);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(138, 178, 243));
  outline: rgb(138, 178, 243) none 0px;
  text-decoration-color: rgb(138, 178, 243);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(172, 197, 246));
  outline: rgb(172, 197, 246) none 0px;
  text-decoration-color: rgb(172, 197, 246);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(138, 178, 243));
  outline: rgb(138, 178, 243) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(138, 178, 243));
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(210, 172, 210));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(46, 53, 56));
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  width: 664px;
}

html[saved-theme="dark"] body td {
  background-color: rgb(77, 77, 77);
  text-align: center;
}

html[saved-theme="dark"] body th {
  background-color: rgb(46, 53, 56);
  border-bottom-width: 0px;
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-width: 0px;
  border-top-width: var(--table-header-border-width, 0px);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(255, 255, 255));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(34, 37, 42));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(220, 10%, 15%));
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(34, 37, 42));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(210, 172, 210);
  border-left-color: rgb(210, 172, 210);
  border-right-color: rgb(210, 172, 210);
  border-top-color: rgb(210, 172, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 26, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 26, 29);
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
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 74, 176, 255);
  background: rgba(74, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(74, 176, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 176, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(74, 176, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(74, 176, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="anki"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 100, 255, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(100, 255, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(100, 255, 255, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(100, 255, 255, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(100, 255, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="author"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 255, 240, 100);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 240, 100, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 240, 100, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(255, 240, 100, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(255, 240, 100, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 252, 95, 142);
  background: rgba(252, 95, 142, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(252, 95, 142, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(252, 95, 142, 0);
  border-left-width: 3px;
  border-right-color: rgba(252, 95, 142, 0);
  border-right-width: 3px;
  border-top-color: rgba(252, 95, 142, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="con"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 255, 84, 84);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 84, 84, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 84, 84, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(255, 84, 84, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(255, 84, 84, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 74, 74);
  background: rgba(255, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="exactas"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 74, 202, 234);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(74, 202, 234, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 202, 234, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(74, 202, 234, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(74, 202, 234, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 184, 148, 255);
  background: rgba(184, 148, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(184, 148, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(184, 148, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(184, 148, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(184, 148, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 74, 74);
  background: rgba(255, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="humanidades"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 234, 183, 74);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(234, 183, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(234, 183, 74, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(234, 183, 74, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(234, 183, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 238, 255, 139);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(238, 255, 139, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(238, 255, 139, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(238, 255, 139, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(238, 255, 139, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 74, 176, 255);
  background: rgba(74, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(74, 176, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 176, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(74, 176, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(74, 176, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="naturales"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 99, 180, 102);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(99, 180, 102, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(99, 180, 102, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(99, 180, 102, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(99, 180, 102, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 255, 130, 255);
  background: rgba(255, 130, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 130, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 130, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 130, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 130, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="pro"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 65, 201, 108);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(65, 201, 108, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(65, 201, 108, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(65, 201, 108, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(65, 201, 108, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 128, 183);
  background: rgba(255, 128, 183, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 128, 183, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 128, 183, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 128, 183, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 128, 183, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 184, 148, 255);
  background: rgba(184, 148, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(184, 148, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(184, 148, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(184, 148, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(184, 148, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="related"] {
  --A01: hsl(220, 15%, 25%);
  --A02: hsl(230, 15%, 25%);
  --A03: hsl(240, 15%, 25%);
  --A04: hsl(250, 15%, 25%);
  --A05: hsl(260, 15%, 25%);
  --A06: hsl(270, 15%, 25%);
  --A07: hsl(265, 15%, 25%);
  --A08: hsl(260, 15%, 25%);
  --A09: hsl(250, 15%, 25%);
  --A10: hsl(240, 15%, 25%);
  --A11: hsl(230, 15%, 25%);
  --background-highlight: hsl(290, 40%, 25%);
  --background-modifier-active-hover: hsla(220, 80%, 65%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(210, 15%, 10%);
  --background-primary-alt: hsl(220, 10%, 15%);
  --background-primary-alt-1: hsl(220, 10%, 15%);
  --background-search: hsl(190, 20%, 25%);
  --background-secondary: hsl(230, 5%, 30%);
  --background-secondary-alt: #363636;
  --background-table: hsl(190, -5%, 30%);
  --background-tertiary: hsl(200, 10%, 20%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(220, 80%, 65%);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(240, 50%, 70%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 184, 148, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 233, 151, 63;
  --callout-radius: 10px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(210, 15%, 10%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: hsl(300, 30%, 75%);
  --checkbox-border-color-hover: white;
  --checkbox-color: hsl(220, 80%, 65%);
  --checkbox-color-hover: hsl(217, 81.6%, 74.75%);
  --checkbox-marker-color: hsl(210, 15%, 10%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: white;
  --clickable-icon-radius: 4px;
  --code-background: hsl(220, 10%, 15%);
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(300, 30%, 75%);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: white;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: hsl(300, 30%, 75%);
  --collapse-icon-color-collapsed: hsl(217, 81.6%, 74.75%);
  --color-accent: hsl(220, 80%, 65%);
  --color-accent-1: hsl(217, 81.6%, 74.75%);
  --color-accent-2: hsl(215, 84%, 83.85%);
  --color-accent-hsl: 220, 80%, 65%;
  --divider-color: transparent;
  --divider-color-hover: hsl(220, 80%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(217, 81.6%, 74.75%);
  --graph-node: hsl(217, 81.6%, 74.75%);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(217, 81.6%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: hsl(300, 30%, 75%);
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(300, 30%, 75%);
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: hsl(220, 80%, 65%);
  --interactive-accent-hover: hsl(217, 81.6%, 74.75%);
  --interactive-accent-hsl: 220, 80%, 65%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(280, 50%, 75%);
  --link-color: hsl(220, 80%, 82%);
  --link-color-hover: hsl(220, 80%, 87%);
  --link-external-color: hsl(217, 81.6%, 74.75%);
  --link-external-color-hover: hsl(215, 84%, 83.85%);
  --link-unresolved-color: hsl(217, 81.6%, 74.75%);
  --link-unresolved-decoration-color: hsla(220, 80%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(230, 5%, 30%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(210, 15%, 10%);
  --pdf-page-background: hsl(210, 15%, 10%);
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: hsl(210, 15%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(220, 80%, 65%, 0.9);
  --scrollbar-active-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-bg: hsla(220, 80%, 65%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsla(220, 80%, 65%, 0.2);
  --search-clear-button-color: white;
  --search-icon-color: white;
  --search-result-background: hsl(210, 15%, 10%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(220, 10%, 15%);
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: white;
  --shiki-code-background: hsl(220, 10%, 15%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(300, 30%, 75%);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: white;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: white;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(300, 30%, 75%);
  --shiki-gutter-text-color-highlight: white;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: white;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(300, 30%, 75%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(210, 15%, 10%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: transparent;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 5%, 30%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 5%, 30%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(220, 80%, 65%);
  --tab-text-color: hsl(300, 30%, 75%);
  --tab-text-color-active: white;
  --tab-text-color-focused: white;
  --tab-text-color-focused-active: white;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(217, 81.6%, 74.75%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(220, 80%, 65%);
  --table-drag-handle-color: hsl(300, 30%, 75%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(220, 80%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(220, 80%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(220, 80%, 65%, 0.1);
  --tag-background-hover: hsla(220, 80%, 65%, 0.2);
  --tag-border-color: hsla(220, 80%, 65%, 0.15);
  --tag-border-color-hover: hsla(220, 80%, 65%, 0.15);
  --tag-color: hsl(217, 81.6%, 74.75%);
  --tag-color-hover: hsl(217, 81.6%, 74.75%);
  --tag-size: 0.875em;
  --text-accent: hsl(217, 81.6%, 74.75%);
  --text-accent-hover: hsl(215, 84%, 83.85%);
  --text-error: #fb464c;
  --text-faint: hsl(300, 30%, 75%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(230, 80%, 95%);
  --text-muted: white;
  --text-normal: #dadada;
  --text-selection: hsla(220, 80%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-title: hsl(220, 60%, 85%);
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(184, 148, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(184, 148, 255, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(184, 148, 255, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(184, 148, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(218, 218, 218);
  filter: brightness(1.2);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 77, 224, 185);
  background: rgba(77, 224, 185, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(77, 224, 185, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(77, 224, 185, 0);
  border-left-width: 3px;
  border-right-color: rgba(77, 224, 185, 0);
  border-right-width: 3px;
  border-top-color: rgba(77, 224, 185, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 244, 138, 74);
  background: rgba(244, 138, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 138, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(244, 138, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(244, 138, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(244, 138, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 170, 230, 89);
  background: rgba(170, 230, 89, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(170, 230, 89, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(170, 230, 89, 0);
  border-left-width: 3px;
  border-right-color: rgba(170, 230, 89, 0);
  border-right-width: 3px;
  border-top-color: rgba(170, 230, 89, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 244, 138, 74);
  background: rgba(244, 138, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 138, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(244, 138, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(244, 138, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(244, 138, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 100, 255, 255;
  border-bottom-color: rgb(100, 255, 255);
  border-left-color: rgb(100, 255, 255);
  border-right-color: rgb(100, 255, 255);
  border-top-color: rgb(100, 255, 255);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(100, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgba(100, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(100, 255, 255, 0.1));
  padding-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="anki"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="author"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6 4 14'/%3E%3Cpath d='M12 6v14'/%3E%3Cpath d='M8 8v12'/%3E%3Cpath d='M4 4v16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="con"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="exactas"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='16' height='20' x='4' y='2' rx='2'/%3E%3Cline x1='8' x2='16' y1='6' y2='6'/%3E%3Cline x1='16' x2='16' y1='14' y2='18'/%3E%3Cpath d='M16 10h.01'/%3E%3Cpath d='M12 10h.01'/%3E%3Cpath d='M8 10h.01'/%3E%3Cpath d='M12 14h.01'/%3E%3Cpath d='M8 14h.01'/%3E%3Cpath d='M12 18h.01'/%3E%3Cpath d='M8 18h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="humanidades"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 18v-7'/%3E%3Cpath d='M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z'/%3E%3Cpath d='M14 18v-7'/%3E%3Cpath d='M18 18v-7'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M6 18v-7'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="naturales"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 18h8'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M14 22a7 7 0 1 0 0-14h-1'/%3E%3Cpath d='M9 14h2'/%3E%3Cpath d='M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z'/%3E%3Cpath d='M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="pro"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3Cpath d='M7 10v12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="related"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 14 4 4-4 4'/%3E%3Cpath d='m18 2 4 4-4 4'/%3E%3Cpath d='M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22'/%3E%3Cpath d='M2 6h1.972a4 4 0 0 1 3.6 2.2'/%3E%3Cpath d='M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45'/%3E%3C/svg%3E");
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
  background-color: rgb(22, 26, 29);
  border-bottom-color: rgb(138, 178, 243);
  border-left-color: rgb(138, 178, 243);
  border-right-color: rgb(138, 178, 243);
  border-top-color: rgb(138, 178, 243);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(22, 26, 29));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(73, 74, 80));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(73, 74, 80);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(73, 74, 80));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(73, 74, 80));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(220, 80%, 65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(220, 80%, 65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(220, 80%, 65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(220, 80%, 65%, 0.15));
  --pill-color: var(--tag-color, hsl(217, 81.6%, 74.75%));
  --pill-color-hover: var(--tag-color-hover, hsl(217, 81.6%, 74.75%));
  --pill-color-remove: var(--tag-color, hsl(217, 81.6%, 74.75%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(217, 81.6%, 74.75%));
  background-color: var(--pill-background, rgba(94, 142, 237, 0.1));
  border-bottom-color: rgba(94, 142, 237, 0.15);
  border-left-color: rgba(94, 142, 237, 0.15);
  border-right-color: rgba(94, 142, 237, 0.15);
  border-top-color: rgba(94, 142, 237, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(138, 178, 243);
}

html[saved-theme="dark"] body h1 {
  text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 5px;
}

html[saved-theme="dark"] body h1.article-title {
  font-size: var(--inline-title-size, 40px);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(225, 170, 255));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(255, 175, 200));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 255, 130, 255);
  border-bottom-color: rgba(255, 130, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 130, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 130, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 130, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-important, rgb(232, 235, 252));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-important, rgb(232, 235, 252));
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(209, 223, 250);
  border-left-color: rgb(209, 223, 250);
  border-right-color: rgb(209, 223, 250);
  border-top-color: rgb(209, 223, 250);
  color: var(--icon-color, rgb(209, 223, 250));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(46, 53, 56));
  border-bottom-color: rgb(138, 178, 243);
  border-left-color: rgb(138, 178, 243);
  border-left-width: 0px;
  border-right-color: rgb(138, 178, 243);
  border-top-color: rgb(138, 178, 243);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  --colorful: var(--A01, hsl(220, 15%, 25%));
  background-color: var(--colorful, rgb(54, 61, 73));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-important, rgb(232, 235, 252));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 235, 252);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  --colorful: var(--A01, hsl(220, 15%, 25%));
  background-color: var(--colorful, rgb(54, 61, 73));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(232, 235, 252);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-important, rgb(232, 235, 252));
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(209, 223, 250);
  border-left-color: rgb(209, 223, 250);
  border-right-color: rgb(209, 223, 250);
  border-top-color: rgb(209, 223, 250);
  color: var(--icon-color, rgb(209, 223, 250));
}

html[saved-theme="dark"] body .darkmode svg {
  color: var(--icon-color, rgb(209, 223, 250));
  stroke: rgb(209, 223, 250);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(194, 209, 240);
  border-left-color: rgb(194, 209, 240);
  border-right-color: rgb(194, 209, 240);
  border-top-color: rgb(194, 209, 240);
  color: rgb(194, 209, 240);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(210, 172, 210));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(73, 74, 80));
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(54, 54, 54);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(46, 53, 56);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: var(--text-muted, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(220, 80%, 65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(220, 80%, 65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(220, 80%, 65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(220, 80%, 65%, 0.15));
  --pill-color: var(--tag-color, hsl(217, 81.6%, 74.75%));
  --pill-color-hover: var(--tag-color-hover, hsl(217, 81.6%, 74.75%));
  --pill-color-remove: var(--tag-color, hsl(217, 81.6%, 74.75%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(217, 81.6%, 74.75%));
  background-color: var(--pill-background, rgba(94, 142, 237, 0.1));
  color: var(--pill-color, rgb(138, 178, 243));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(22, 26, 29));
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-primary, rgb(22, 26, 29));
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(22, 26, 29));
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(46, 53, 56));
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(232, 235, 252);
  border-left-color: rgb(232, 235, 252);
  border-right-color: rgb(232, 235, 252);
  border-top-color: rgb(232, 235, 252);
  color: var(--text-important, rgb(232, 235, 252));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(34, 37, 42));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--code-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(46, 53, 56));
  border-bottom-color: rgba(94, 142, 237, 0.15);
  border-left-color: rgba(94, 142, 237, 0.15);
  border-right-color: rgba(94, 142, 237, 0.15);
  border-top-color: rgba(94, 142, 237, 0.15);
  color: var(--tag-color, rgb(186, 186, 186));
}`,
  },
  light: {
    base: `:root:root {
  --A01: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A02: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A03: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A04: hsl(calc(var(--accent-h) + 30), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A05: hsl(calc(var(--accent-h) + 40), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A06: hsl(calc(var(--accent-h) + 50), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A07: hsl(calc(var(--accent-h) + 45), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A08: hsl(calc(var(--accent-h) + 40), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A09: hsl(calc(var(--accent-h) + 30), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A10: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --A11: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 16%));
  --accent-h: 28;
  --accent-l: 70%;
  --accent-s: 70%;
  --background-highlight: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 10%), calc(var(--accent-l) + 10%));
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-primary: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 10%), calc(var(--accent-l) + 25%));
  --background-primary-alt: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 20%));
  --background-primary-alt-1: var(--background-primary, hsl(28, 60%, 95%));
  --background-search: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 20%), calc(var(--accent-l) + 7%));
  --background-secondary: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 15%));
  --background-table: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 20%), calc(var(--accent-l) + 20%));
  --background-tertiary: hsl(calc(var(--accent-h) - 20), calc(var(--accent-s) - 30%), calc(var(--accent-l) + 10%));
  --bases-cards-background: var(--background-primary, hsl(28, 60%, 95%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(48, 30%, 90%));
  --bases-group-heading-property-color: var(--text-muted, black);
  --bases-table-cell-background-active: var(--background-primary, hsl(28, 60%, 95%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(48, 30%, 90%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(28, 70%, 70%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(48, 30%, 90%));
  --bases-table-header-background: var(--background-primary, hsl(28, 60%, 95%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bases-table-header-color: var(--text-muted, black);
  --bases-table-summary-background: var(--background-primary, hsl(28, 60%, 95%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --blockquote-border-color: var(--interactive-accent, hsl(27, 70.7%, 75.25%));
  --bold-color: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 30%), calc(var(--accent-l) - 40%));
  --bold-weight: var(--font-semibold, 600);
  --callout-border-opacity: 0;
  --callout-content-padding: 0px 12px;
  --callout-gap: 1em;
  --callout-margin: 0px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 4px 11px 11px 11px);
  --callout-radius: var(--radius-s, 10px);
  --callout-title-background: transparent;
  --callout-title-size: 1.1em;
  --canvas-background: var(--background-primary, hsl(28, 60%, 95%));
  --canvas-card-label-color: var(--text-faint, hsl(108, 20%, 30%));
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --cbs: 0px 2px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.01),
        0px 4px 8px rgba(0, 0, 0, 0.01), 0px 0px 12px rgba(0, 0, 0, 0.01),
        0px 2px 16px rgba(0, 0, 0, 0.01), 0px 4px 20px rgba(0, 0, 0, 0.01);
  --checkbox-border-color: var(--text-faint, hsl(108, 20%, 30%));
  --checkbox-border-color-hover: var(--text-muted, black);
  --checkbox-color: var(--interactive-accent, hsl(27, 70.7%, 75.25%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(25, 71.4%, 80.5%));
  --checkbox-marker-color: var(--background-primary, hsl(28, 60%, 95%));
  --checklist-done-color: var(--text-muted, black);
  --code-background: var(--background-primary-alt, hsl(48, 30%, 90%));
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --code-comment: var(--text-faint, hsl(108, 20%, 30%));
  --code-normal: var(--text-muted, black);
  --code-punctuation: var(--text-muted, black);
  --collapse-icon-color: var(--text-faint, hsl(108, 20%, 30%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(28, 70%, 70%));
  --dark: var(--text-muted, var(--color-base-70, black));
  --darkgray: var(--text-muted, var(--color-base-70, black));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(27, 70.7%, 75.25%));
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
        inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, hsl(28, 60%, 95%));
  --file-header-background-focused: var(--background-primary, hsl(28, 60%, 95%));
  --file-margins: var(--size-4-8, 32px);
  --footnote-id-color: var(--text-muted, black);
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(108, 20%, 30%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.075));
  --graph-line: var(--text-accent, hsl(28, 70%, 70%));
  --graph-node: var(--text-accent, hsl(28, 70%, 70%));
  --graph-node-focused: var(--text-accent, hsl(28, 70%, 70%));
  --graph-node-unresolved: var(--text-faint, hsl(108, 20%, 30%));
  --gray: var(--text-muted, var(--color-base-70, black));
  --h1-size: 2.5rem;
  --h2-size: 2.0rem;
  --h2-weight: 600;
  --h3-size: 1.7rem;
  --h3-weight: 600;
  --h4-size: 1.5rem;
  --h4-weight: 600;
  --h5-size: 1.3rem;
  --h5-weight: 600;
  --h6-size: 1.2rem;
  --heading-formatting: var(--text-faint, hsl(108, 20%, 30%));
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --icon-color: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 50%));
  --icon-color-active: var(--icon-color, hsl(28, 70%, 20%));
  --icon-color-hover: var(--text-muted, black);
  --indentation-guide-color: var(--background-secondary, hsl(28, 30%, 85%));
  --indentation-guide-color-active: var(--text-accent, hsl(28, 70%, 70%));
  --indentation-guide-width: var(--border-width, 2px);
  --indentation-guide-width-active: var(--border-width, 2px);
  --inline-title-size: var(--h1-size, 2.5rem);
  --input-date-separator: var(--text-faint, hsl(108, 20%, 30%));
  --input-placeholder-color: var(--text-faint, hsl(108, 20%, 30%));
  --interactive-accent: var(--color-accent-1, hsl(27, 70.7%, 75.25%));
  --interactive-accent-hover: var(--color-accent-2, hsl(25, 71.4%, 80.5%));
  --interactive-accent-hsl: var(--color-accent-hsl, 28, 70%, 70%);
  --italic-color: hsl(calc(var(--accent-h) + 20), calc(var(--accent-s) - 30%), calc(var(--accent-l) - 35%));
  --light: var(--background-primary, hsl(calc(var(--accent-h)), calc(var(--accent-s) - 10%), calc(var(--accent-l) + 25%)));
  --lightgray: var(--background-secondary, hsl(calc(var(--accent-h)), calc(var(--accent-s) - 40%), calc(var(--accent-l) + 15%)));
  --link-color: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 30%), calc(var(--accent-l) - 40%));
  --link-color-hover: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 30%), calc(var(--accent-l) - 50%));
  --link-external-color: var(--text-accent, hsl(28, 70%, 70%));
  --link-external-color-hover: var(--text-accent-hover, hsl(25, 71.4%, 80.5%));
  --link-unresolved-color: var(--text-accent, hsl(28, 70%, 70%));
  --list-bullet-size: 0.3rem;
  --list-marker-color: hsl(calc(var(--accent-h)), calc(var(--accent-s) - 30%), calc(var(--accent-l) - 40%));
  --list-marker-color-collapsed: var(--text-accent, hsl(28, 70%, 70%));
  --list-marker-color-hover: var(--text-accent, hsl(28, 70%, 70%));
  --list-spacing: 0.2em;
  --mcc-img-snw-display: none;
  --menu-background: var(--background-secondary, hsl(28, 30%, 85%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-label-text-color: var(--text-muted, black);
  --metadata-label-text-color-hover: var(--text-muted, black);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --modal-background: var(--background-primary, hsl(28, 60%, 95%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(108, 20%, 30%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(108, 20%, 30%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(108, 20%, 30%));
  --nav-heading-color-collapsed-hover: var(--text-muted, black);
  --nav-indentation-guide-color: transparent
    --nav-collapse-icon-color: var(--collapse-icon-color);
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-children-margin-left: var(--size-4-3, 12px);
  --nav-item-children-padding-left: var(--size-2-2, 4px);
  --nav-item-color: var(--text-muted, black);
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(25, 71.4%, 80.5%));
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsl(108, 20%, 30%));
  --nav-tag-color-active: var(--text-muted, black);
  --nav-tag-color-hover: var(--text-muted, black);
  --pdf-background: var(--background-primary, hsl(28, 60%, 95%));
  --pdf-page-background: var(--background-primary, hsl(28, 60%, 95%));
  --pdf-sidebar-background: var(--background-primary, hsl(28, 60%, 95%));
  --pill-color: var(--text-muted, black);
  --pill-color-remove: var(--text-faint, hsl(108, 20%, 30%));
  --pill-color-remove-hover: var(--text-accent, hsl(28, 70%, 70%));
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, hsl(28, 60%, 95%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent)));
  --red: hsla(var(--interactive-accent-hsl), 0.9);
  --ribbon-background: var(--background-primary, hsl(28, 60%, 95%));
  --ribbon-background-collapsed: var(--background-secondary, hsl(28, 30%, 85%));
  --scrollbar-active-thumb-bg: hsla(var(--interactive-accent-hsl), 0.2);
  --scrollbar-bg: hsla(var(--interactive-accent-hsl), 0.2);
  --scrollbar-thumb-bg: hsl(calc(var(--accent-h) - 20), calc(var(--accent-s) - 40%), calc(var(--accent-l)));
  --search-clear-button-color: var(--text-muted, black);
  --search-icon-color: var(--text-muted, black);
  --search-result-background: var(--color-base-10, #fafafa);
  --secondary: var(--text-accent, var(--color-accent, hsl(28, 70%, 70%)));
  --setting-items-background: var(--background-primary-alt, hsl(48, 30%, 90%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, black);
  --shiki-code-background: var(--code-background, hsl(48, 30%, 90%));
  --shiki-code-comment: var(--text-faint, hsl(108, 20%, 30%));
  --shiki-code-normal: var(--text-muted, black);
  --shiki-code-punctuation: var(--text-muted, black);
  --shiki-gutter-text-color: var(--text-faint, hsl(108, 20%, 30%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, black);
  --shiki-highlight-neutral: var(--shiki-code-normal, black);
  --shiki-terminal-dots-color: var(--text-faint, hsl(108, 20%, 30%));
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --status-bar-background: var(--background-secondary, hsl(28, 30%, 85%));
  --status-bar-border-color: var(--text-accent, hsl(28, 70%, 70%));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0px);
  --status-bar-scroll-padding: calc(var(--status-bar-font-size) + 18px);
  --status-bar-text-color: var(--text-muted, black);
  --suggestion-background: var(--background-primary, hsl(28, 60%, 95%));
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: var(--background-primary, transparent);
  --tab-container-background: var(--background-primary, hsl(28, 60%, 95%));
  --tab-outline-color: var(--divider-color, transparent);
  --tab-stacked-text-align: left;
  --tab-switcher-background: var(--background-secondary, hsl(28, 30%, 85%));
  --tab-text-color: var(--text-faint, hsl(108, 20%, 30%));
  --tab-text-color-active: var(--text-muted, black);
  --tab-text-color-focused: var(--text-muted, black);
  --tab-text-color-focused-active: var(--text-muted, black);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(28, 70%, 70%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(27, 70.7%, 75.25%));
  --table-drag-handle-color: var(--text-faint, hsl(108, 20%, 30%));
  --table-drag-padding: var(--table-drag-space, 16px);
  --table-drag-space: 16px;
  --table-selection-border-color: var(--interactive-accent, hsl(27, 70.7%, 75.25%));
  --tag-color: var(--text-accent, hsl(28, 70%, 70%));
  --tag-color-hover: var(--text-accent, hsl(28, 70%, 70%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(25, 71.4%, 80.5%)));
  --text-accent: var(--color-accent, hsl(28, 70%, 70%));
  --text-accent-hover: var(--color-accent-2, hsl(25, 71.4%, 80.5%));
  --text-faint: hsl(calc(var(--accent-h) + 80), calc(var(--accent-s) - 50%), calc(var(--accent-l) - 40%));
  --text-important: hsl(calc(var(--accent-h) + 30), calc(var(--accent-s) - 10%), calc(var(--accent-l) - 55%));
  --text-muted: var(--color-base-70, black);
  --text-title: hsl(calc(var(--accent-h) + 10), calc(var(--accent-s) - 40%), calc(var(--accent-l) - 35%));
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titlebar-background: var(--background-primary, hsl(28, 60%, 95%));
  --titlebar-background-focused: var(--background-primary, hsl(28, 60%, 95%));
  --titlebar-text-color: var(--text-muted, black);
  --vault-name-color: var(--text-normal, #222222);
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(28, 30%, 85%));
  background-color: var(--tab-container-background, rgb(250, 242, 235));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(250, 242, 235));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, rgb(250, 242, 235));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(28, 30%, 85%));
  background-color: var(--tab-container-background, rgb(250, 242, 235));
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body html {
  border: 0px none rgb(0, 0, 0);
  border-bottom: 0px none rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-left: 0px none rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right: 0px none rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top: 0px none rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  caret-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  column-rule-color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  outline-color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
  text-fill-color: rgb(0, 0, 0);
  text-stroke: 0px rgb(0, 0, 0);
  text-stroke-color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(107, 95, 46));
  outline: rgb(107, 95, 46) none 0px;
  text-decoration-color: rgb(107, 95, 46);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(125, 111, 54));
  outline: rgb(125, 111, 54) none 0px;
  text-decoration-color: rgb(125, 111, 54);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(125, 111, 54));
  outline: rgb(125, 111, 54) none 0px;
  text-decoration-color: rgb(125, 111, 54);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(107, 95, 46));
  outline: rgb(107, 95, 46) none 0px;
  text-decoration-color: rgb(107, 95, 46);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(235, 212, 173));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(67, 92, 61);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(237, 187, 147));
  border-color: rgb(237, 187, 147);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(232, 175, 125));
  outline: rgb(232, 175, 125) none 0px;
  text-decoration-color: rgb(232, 175, 125);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(107, 74, 46));
  outline: rgb(107, 74, 46) none 0px;
  text-decoration-color: rgb(107, 74, 46);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(232, 175, 125));
  outline: rgb(232, 175, 125) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(232, 175, 125));
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(67, 92, 61));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(224, 189, 184));
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  width: 664px;
}

html[saved-theme="light"] body td {
  background-color: rgb(242, 233, 217);
  text-align: center;
}

html[saved-theme="light"] body th {
  background-color: rgb(224, 189, 184);
  border-bottom-width: 0px;
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-width: 0px;
  border-top-width: var(--table-header-border-width, 0px);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(0, 0, 0));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(237, 234, 222));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(48, 30%, 90%));
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(237, 234, 222));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(67, 92, 61);
  border-left-color: rgb(67, 92, 61);
  border-right-color: rgb(67, 92, 61);
  border-top-color: rgb(67, 92, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 242, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 242, 235);
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
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 50, 100, 140);
  background: rgba(50, 100, 140, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(50, 100, 140, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(50, 100, 140, 0);
  border-left-width: 3px;
  border-right-color: rgba(50, 100, 140, 0);
  border-right-width: 3px;
  border-top-color: rgba(50, 100, 140, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="anki"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 0, 0, 0);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="author"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 102, 10, 50);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(102, 10, 50, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(102, 10, 50, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(102, 10, 50, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(102, 10, 50, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 0, 0);
  background: rgba(255, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="con"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 0, 84, 84);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(0, 84, 84, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 84, 84, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 84, 84, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 84, 84, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 74, 74);
  background: rgba(255, 74, 74, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="exactas"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 74, 202, 234);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(74, 202, 234, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(74, 202, 234, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(74, 202, 234, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(74, 202, 234, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 72, 122, 33);
  background: rgba(72, 122, 33, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(72, 122, 33, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(72, 122, 33, 0);
  border-left-width: 3px;
  border-right-color: rgba(72, 122, 33, 0);
  border-right-width: 3px;
  border-top-color: rgba(72, 122, 33, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 74, 74);
  background: rgba(255, 74, 74, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 74, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 74, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 74, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 74, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="humanidades"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 234, 183, 74);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(234, 183, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(234, 183, 74, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(234, 183, 74, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(234, 183, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 50, 150, 50);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(50, 150, 50, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(50, 150, 50, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(50, 150, 50, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(50, 150, 50, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 10, 220, 0);
  background: rgba(10, 220, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(10, 220, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(10, 220, 0, 0);
  border-left-width: 3px;
  border-right-color: rgba(10, 220, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(10, 220, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="naturales"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 99, 180, 102);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(99, 180, 102, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(99, 180, 102, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(99, 180, 102, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(99, 180, 102, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.9);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 20, 120, 200);
  background: rgba(20, 120, 200, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(20, 120, 200, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(20, 120, 200, 0);
  border-left-width: 3px;
  border-right-color: rgba(20, 120, 200, 0);
  border-right-width: 3px;
  border-top-color: rgba(20, 120, 200, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="pro"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 50, 100, 150);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(50, 100, 150, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(50, 100, 150, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(50, 100, 150, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(50, 100, 150, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 0, 183);
  background: rgba(255, 0, 183, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 0, 183, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(255, 0, 183, 0);
  border-left-width: 3px;
  border-right-color: rgba(255, 0, 183, 0);
  border-right-width: 3px;
  border-top-color: rgba(255, 0, 183, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 0, 100, 255);
  background: rgba(0, 100, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 100, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 100, 255, 0);
  border-left-width: 3px;
  border-right-color: rgba(0, 100, 255, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 100, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="related"] {
  --A01: hsl(28, 30%, 86%);
  --A02: hsl(38, 30%, 86%);
  --A03: hsl(48, 30%, 86%);
  --A04: hsl(58, 30%, 86%);
  --A05: hsl(68, 30%, 86%);
  --A06: hsl(78, 30%, 86%);
  --A07: hsl(73, 30%, 86%);
  --A08: hsl(68, 30%, 86%);
  --A09: hsl(58, 30%, 86%);
  --A10: hsl(48, 30%, 86%);
  --A11: hsl(38, 30%, 86%);
  --background-highlight: hsl(38, 60%, 80%);
  --background-modifier-active-hover: hsla(28, 70%, 70%, 0.15);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(28, 60%, 95%);
  --background-primary-alt: hsl(48, 30%, 90%);
  --background-primary-alt-1: hsl(28, 60%, 95%);
  --background-search: hsl(28, 50%, 77%);
  --background-secondary: hsl(28, 30%, 85%);
  --background-secondary-alt: #fcfcfc;
  --background-table: hsl(38, 50%, 90%);
  --background-tertiary: hsl(8, 40%, 80%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(27, 70.7%, 75.25%);
  --blur-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(48, 40%, 30%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 0, 120, 255);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px 11px 11px 11px;
  --callout-question: 236, 117, 0;
  --callout-radius: 10px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(28, 60%, 95%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: hsl(108, 20%, 30%);
  --checkbox-border-color-hover: black;
  --checkbox-color: hsl(27, 70.7%, 75.25%);
  --checkbox-color-hover: hsl(25, 71.4%, 80.5%);
  --checkbox-marker-color: hsl(28, 60%, 95%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: black;
  --clickable-icon-radius: 4px;
  --code-background: hsl(48, 30%, 90%);
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(108, 20%, 30%);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: black;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: black;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: hsl(108, 20%, 30%);
  --collapse-icon-color-collapsed: hsl(28, 70%, 70%);
  --color-accent: hsl(28, 70%, 70%);
  --color-accent-1: hsl(27, 70.7%, 75.25%);
  --color-accent-2: hsl(25, 71.4%, 80.5%);
  --color-accent-hsl: 28, 70%, 70%;
  --divider-color: transparent;
  --divider-color-hover: hsl(27, 70.7%, 75.25%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(28, 70%, 70%);
  --graph-node: hsl(28, 70%, 70%);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(28, 70%, 70%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: hsl(108, 20%, 30%);
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: hsl(108, 20%, 30%);
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(27, 70.7%, 75.25%);
  --interactive-accent-hover: hsl(25, 71.4%, 80.5%);
  --interactive-accent-hsl: 28, 70%, 70%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(48, 40%, 35%);
  --link-color: hsl(28, 40%, 30%);
  --link-color-hover: hsl(28, 40%, 20%);
  --link-external-color: hsl(28, 70%, 70%);
  --link-external-color-hover: hsl(25, 71.4%, 80.5%);
  --link-unresolved-color: hsl(28, 70%, 70%);
  --link-unresolved-decoration-color: hsla(28, 70%, 70%, 0.3);
  --link-weight: 400;
  --list-indent: 3em;
  --menu-background: hsl(28, 30%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(28, 60%, 95%);
  --pdf-page-background: hsl(28, 60%, 95%);
  --pdf-sidebar-background: hsl(28, 60%, 95%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent) linear-gradient(hsl(28, 60%, 95%), color-mix(in srgb, hsl(28, 60%, 95%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --red: hsla(28, 70%, 70%, 0.9);
  --scrollbar-active-thumb-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-bg: hsla(28, 70%, 70%, 0.2);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(8, 30%, 70%);
  --search-clear-button-color: black;
  --search-icon-color: black;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(48, 30%, 90%);
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: black;
  --shiki-code-background: hsl(48, 30%, 90%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(108, 20%, 30%);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: black;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: black;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(108, 20%, 30%);
  --shiki-gutter-text-color-highlight: black;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: black;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(108, 20%, 30%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(28, 60%, 95%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: transparent;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: transparent;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(28, 30%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(28, 30%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(28, 70%, 70%);
  --tab-text-color: hsl(108, 20%, 30%);
  --tab-text-color-active: black;
  --tab-text-color-focused: black;
  --tab-text-color-focused-active: black;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(28, 70%, 70%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(27, 70.7%, 75.25%);
  --table-drag-handle-color: hsl(108, 20%, 30%);
  --table-drag-handle-color-active: white;
  --table-drag-padding: 16px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(28, 70%, 70%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(27, 70.7%, 75.25%);
  --table-text-size: 16px;
  --tag-background: hsla(28, 70%, 70%, 0.1);
  --tag-background-hover: hsla(28, 70%, 70%, 0.2);
  --tag-border-color: hsla(28, 70%, 70%, 0.15);
  --tag-border-color-hover: hsla(28, 70%, 70%, 0.15);
  --tag-color: hsl(28, 70%, 70%);
  --tag-color-hover: hsl(28, 70%, 70%);
  --tag-size: 0.875em;
  --text-accent: hsl(28, 70%, 70%);
  --text-accent-hover: hsl(25, 71.4%, 80.5%);
  --text-error: #e93147;
  --text-faint: hsl(108, 20%, 30%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-important: hsl(58, 60%, 15%);
  --text-muted: black;
  --text-normal: #222222;
  --text-selection: hsla(28, 70%, 70%, 0.2);
  --text-success: #08b94e;
  --text-title: hsl(38, 30%, 35%);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(0, 120, 255, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 120, 255, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 120, 255, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 120, 255, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(34, 34, 34);
  filter: brightness(0.6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 137, 68, 198);
  background: rgba(137, 68, 198, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 68, 198, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(137, 68, 198, 0);
  border-left-width: 3px;
  border-right-color: rgba(137, 68, 198, 0);
  border-right-width: 3px;
  border-top-color: rgba(137, 68, 198, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 210, 100, 100);
  background: rgba(210, 100, 100, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 100, 100, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(210, 100, 100, 0);
  border-left-width: 3px;
  border-right-color: rgba(210, 100, 100, 0);
  border-right-width: 3px;
  border-top-color: rgba(210, 100, 100, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 40, 150, 15);
  background: rgba(40, 150, 15, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 150, 15, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(40, 150, 15, 0);
  border-left-width: 3px;
  border-right-color: rgba(40, 150, 15, 0);
  border-right-width: 3px;
  border-top-color: rgba(40, 150, 15, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 244, 138, 74);
  background: rgba(244, 138, 74, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 138, 74, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(244, 138, 74, 0);
  border-left-width: 3px;
  border-right-color: rgba(244, 138, 74, 0);
  border-right-width: 3px;
  border-top-color: rgba(244, 138, 74, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgba(0, 0, 0, 0.15));
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="anki"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="author"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6 4 14'/%3E%3Cpath d='M12 6v14'/%3E%3Cpath d='M8 8v12'/%3E%3Cpath d='M4 4v16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="con"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="exactas"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='16' height='20' x='4' y='2' rx='2'/%3E%3Cline x1='8' x2='16' y1='6' y2='6'/%3E%3Cline x1='16' x2='16' y1='14' y2='18'/%3E%3Cpath d='M16 10h.01'/%3E%3Cpath d='M12 10h.01'/%3E%3Cpath d='M8 10h.01'/%3E%3Cpath d='M12 14h.01'/%3E%3Cpath d='M8 14h.01'/%3E%3Cpath d='M12 18h.01'/%3E%3Cpath d='M8 18h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="humanidades"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 18v-7'/%3E%3Cpath d='M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z'/%3E%3Cpath d='M14 18v-7'/%3E%3Cpath d='M18 18v-7'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M6 18v-7'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="naturales"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 18h8'/%3E%3Cpath d='M3 22h18'/%3E%3Cpath d='M14 22a7 7 0 1 0 0-14h-1'/%3E%3Cpath d='M9 14h2'/%3E%3Cpath d='M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z'/%3E%3Cpath d='M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="pro"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3Cpath d='M7 10v12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="related"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 14 4 4-4 4'/%3E%3Cpath d='m18 2 4 4-4 4'/%3E%3Cpath d='M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22'/%3E%3Cpath d='M2 6h1.972a4 4 0 0 1 3.6 2.2'/%3E%3Cpath d='M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45'/%3E%3C/svg%3E");
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
  background-color: rgb(250, 242, 235);
  border-bottom-color: rgb(232, 175, 125);
  border-left-color: rgb(232, 175, 125);
  border-right-color: rgb(232, 175, 125);
  border-top-color: rgb(232, 175, 125);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(250, 242, 235));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(228, 216, 205));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(228, 216, 205);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(228, 216, 205));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(228, 216, 205));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(28, 70%, 70%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(28, 70%, 70%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(28, 70%, 70%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(28, 70%, 70%, 0.15));
  --pill-color: var(--tag-color, hsl(28, 70%, 70%));
  --pill-color-hover: var(--tag-color-hover, hsl(28, 70%, 70%));
  --pill-color-remove: var(--tag-color, hsl(28, 70%, 70%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(28, 70%, 70%));
  background-color: var(--pill-background, rgba(232, 175, 125, 0.1));
  border-bottom-color: rgba(232, 175, 125, 0.15);
  border-left-color: rgba(232, 175, 125, 0.15);
  border-right-color: rgba(232, 175, 125, 0.15);
  border-top-color: rgba(232, 175, 125, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(232, 175, 125);
}

html[saved-theme="light"] body h1.article-title {
  font-size: var(--inline-title-size, 40px);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 20, 120, 200);
  border-bottom-color: rgba(20, 120, 200, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 3px;
  border-left-color: rgba(20, 120, 200, 0);
  border-left-width: 3px;
  border-right-color: rgba(20, 120, 200, 0);
  border-right-width: 3px;
  border-top-color: rgba(20, 120, 200, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 3px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-important, rgb(61, 60, 15));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-important, rgb(61, 60, 15));
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 49, 15);
  border-left-color: rgb(87, 49, 15);
  border-right-color: rgb(87, 49, 15);
  border-top-color: rgb(87, 49, 15);
  color: var(--icon-color, rgb(87, 49, 15));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(228, 216, 205));
  border-bottom-color: rgb(232, 175, 125);
  border-left-color: rgb(232, 175, 125);
  border-left-width: 0px;
  border-right-color: rgb(232, 175, 125);
  border-top-color: rgb(232, 175, 125);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  --colorful: var(--A01, hsl(28, 30%, 86%));
  background-color: var(--colorful, rgb(230, 219, 209));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-important, rgb(61, 60, 15));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(61, 60, 15);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  --colorful: var(--A01, hsl(28, 30%, 86%));
  background-color: var(--colorful, rgb(230, 219, 209));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(61, 60, 15);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-important, rgb(61, 60, 15));
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 49, 15);
  border-left-color: rgb(87, 49, 15);
  border-right-color: rgb(87, 49, 15);
  border-top-color: rgb(87, 49, 15);
  color: var(--icon-color, rgb(87, 49, 15));
}

html[saved-theme="light"] body .darkmode svg {
  color: var(--icon-color, rgb(87, 49, 15));
  stroke: rgb(87, 49, 15);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(116, 96, 62);
  border-left-color: rgb(116, 96, 62);
  border-right-color: rgb(116, 96, 62);
  border-top-color: rgb(116, 96, 62);
  color: rgb(116, 96, 62);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(67, 92, 61));
}`,
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(250, 242, 235));
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(224, 189, 184);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: var(--text-muted, rgb(0, 0, 0));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(28, 70%, 70%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(28, 70%, 70%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(28, 70%, 70%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(28, 70%, 70%, 0.15));
  --pill-color: var(--tag-color, hsl(28, 70%, 70%));
  --pill-color-hover: var(--tag-color-hover, hsl(28, 70%, 70%));
  --pill-color-remove: var(--tag-color, hsl(28, 70%, 70%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(28, 70%, 70%));
  background-color: var(--pill-background, rgba(232, 175, 125, 0.1));
  color: var(--pill-color, rgb(232, 175, 125));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(250, 242, 235));
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-primary, rgb(250, 242, 235));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(250, 242, 235));
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(228, 216, 205));
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(61, 60, 15);
  border-left-color: rgb(61, 60, 15);
  border-right-color: rgb(61, 60, 15);
  border-top-color: rgb(61, 60, 15);
  color: var(--text-important, rgb(61, 60, 15));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(237, 234, 222));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--code-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgb(224, 189, 184));
  border-bottom-color: rgba(232, 175, 125, 0.15);
  border-left-color: rgba(232, 175, 125, 0.15);
  border-right-color: rgba(232, 175, 125, 0.15);
  border-top-color: rgba(232, 175, 125, 0.15);
  color: var(--tag-color, rgb(71, 71, 71));
}`,
  },
};
