import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ukiyo.alchemy",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cmu-typewriter-text", "jetbrains-mono"],
    fontFiles: [
      {
        family: "CMU Typewriter Text",
        style: "normal",
        weight: "500",
        file: "cmu-typewriter-text.woff2",
        format: "woff2",
        unicodeRange: null,
      },
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
  --activeline: #242424bf;
  --background-modifier-border: var(--color-base-30, #292929);
  --background-modifier-border-focus: var(--color-base-40, #373738);
  --background-modifier-border-hover: var(--color-base-35, #292929);
  --background-modifier-form-field: var(--color-base-25, #232323);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #232323);
  --background-modifier-message: #000000;
  --background-primary: var(--color-base-00, #171717);
  --background-primary-alt: var(--color-base-10, #282523);
  --background-secondary: var(--color-base-20, #1a1a1a);
  --background-secondary-alt: var(--color-base-30, #292929);
  --bases-cards-background: var(--background-primary, #171717);
  --bases-cards-cover-background: var(--background-primary-alt, #282523);
  --bases-embed-border-color: var(--background-modifier-border, #292929);
  --bases-group-heading-property-color: var(--text-muted, #9e9184);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, #292929);
  --bases-table-cell-background-active: var(--background-primary, #171717);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #282523);
  --bases-table-group-background: var(--background-primary-alt, #282523);
  --bases-table-header-background: var(--background-primary, #171717);
  --bases-table-header-color: var(--text-muted, #9e9184);
  --bases-table-summary-background: var(--background-primary, #171717);
  --blockquote-border-color: var(--interactive-accent, #978159);
  --canvas-background: var(--background-primary, #171717);
  --canvas-card-label-color: var(--text-faint, #8c7c6d);
  --canvas-dot-pattern: var(--color-base-30, #292929);
  --caret-color: var(--text-normal, #c0bcb5);
  --checkbox-border-color: var(--text-faint, #8c7c6d);
  --checkbox-border-color-hover: var(--text-muted, #9e9184);
  --checkbox-color: var(--interactive-accent, #978159);
  --checkbox-color-hover: var(--interactive-accent-hover, #978159);
  --checkbox-marker-color: var(--background-primary, #171717);
  --checklist-done-color: var(--text-muted, #9e9184);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-primary-alt, #282523);
  --code-border-color: var(--background-modifier-border, #292929);
  --code-comment: var(--text-faint, #8c7c6d);
  --code-normal: var(--text-normal, #c0bcb5);
  --code-punctuation: var(--text-muted, #9e9184);
  --collapse-icon-color: var(--text-faint, #8c7c6d);
  --collapse-icon-color-collapsed: var(--text-accent, #978159);
  --color-accent-1: var(--color-accent, #978159);
  --color-base-00: #171717;
  --color-base-05: var(--color-base-30, #292929);
  --color-base-10: #282523;
  --color-base-100: #c0bcb5;
  --color-base-20: #1a1a1a;
  --color-base-25: #232323;
  --color-base-30: #292929;
  --color-base-35: var(--color-base-30, #292929);
  --color-base-40: #373738;
  --color-base-50: #8c7c6d;
  --color-base-70: #9e9184;
  --color-bold: var(--color-accent, #7b9cac);
  --color-italic: #a07f6c;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --dark: var(--text-normal, var(--color-base-100, #c0bcb5));
  --darkgray: var(--text-normal, var(--color-base-100, #c0bcb5));
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --divider-color: var(--background-modifier-border, #292929);
  --divider-color-hover: var(--interactive-accent, #978159);
  --dropdown-background: var(--interactive-normal, #292929);
  --dropdown-background-hover: var(--interactive-hover, #292929);
  --file-header-background: var(--background-primary, #171717);
  --file-header-background-focused: var(--background-primary, #171717);
  --file-header-font: var(--font-interface, "CMU Typewriter Text");
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-line-width: 900px;
  --flair-background: var(--interactive-normal, #292929);
  --flair-color: var(--text-normal, #c0bcb5);
  --font-default: "CMU Typewriter Text";
  --font-mermaid: var(--font-text, "CMU Typewriter Text");
  --font-monospace-default: "JetBrains Mono";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, #292929);
  --footnote-id-color: var(--text-muted, #9e9184);
  --footnote-id-color-no-occurrences: var(--text-faint, #8c7c6d);
  --graph-node: var(--text-muted, #9e9184);
  --graph-node-focused: var(--text-accent, #978159);
  --graph-node-unresolved: var(--text-faint, #8c7c6d);
  --graph-text: var(--text-normal, #c0bcb5);
  --gray: var(--text-muted, var(--color-base-70, #9e9184));
  --header-height: 30px;
  --heading-formatting: var(--text-faint, #8c7c6d);
  --heading-formatting-color: #8f2d2d;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --hr-color: var(--background-modifier-border, #292929);
  --icon-color: var(--text-muted, #9e9184);
  --icon-color-active: var(--text-accent, #978159);
  --icon-color-focused: var(--text-normal, #c0bcb5);
  --icon-color-hover: var(--text-muted, #9e9184);
  --in-between-background: #101010;
  --input-date-separator: var(--text-faint, #8c7c6d);
  --input-placeholder-color: var(--text-faint, #8c7c6d);
  --interactive-accent: var(--color-accent, #978159);
  --interactive-accent-hover: var(--color-accent-1, #978159);
  --interactive-hover: var(--color-base-35, #292929);
  --interactive-normal: var(--color-base-30, #292929);
  --light: var(--background-primary, var(--color-base-00, #171717));
  --lightgray: var(--background-secondary, var(--color-base-20, #1a1a1a));
  --link-color: var(--text-accent, #978159);
  --link-color-hover: var(--text-accent-hover, #b1996c);
  --link-external-color: var(--text-accent, #978159);
  --link-external-color-hover: var(--text-accent-hover, #b1996c);
  --link-unresolved-color: var(--text-accent, #978159);
  --list-marker-color: var(--text-faint, #8c7c6d);
  --list-marker-color-collapsed: var(--text-accent, #978159);
  --list-marker-color-hover: var(--text-muted, #9e9184);
  --menu-background: var(--background-secondary, #1a1a1a);
  --menu-border-color: var(--background-modifier-border-hover, #292929);
  --metadata-border-color: var(--background-modifier-border, #292929);
  --metadata-divider-color: var(--background-modifier-border, #292929);
  --metadata-input-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-input-text-color: var(--text-normal, #c0bcb5);
  --metadata-label-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-label-text-color: var(--text-muted, #9e9184);
  --metadata-label-text-color-hover: var(--text-muted, #9e9184);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #171717);
  --nav-collapse-icon-color: var(--collapse-icon-color, #8c7c6d);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #8c7c6d);
  --nav-heading-color: var(--text-normal, #c0bcb5);
  --nav-heading-color-collapsed: var(--text-faint, #8c7c6d);
  --nav-heading-color-collapsed-hover: var(--text-muted, #9e9184);
  --nav-heading-color-hover: var(--text-normal, #c0bcb5);
  --nav-item-color: var(--text-muted, #9e9184);
  --nav-item-color-active: var(--text-normal, #c0bcb5);
  --nav-item-color-highlighted: var(--text-accent, #978159);
  --nav-item-color-hover: var(--text-normal, #c0bcb5);
  --nav-item-color-selected: var(--text-normal, #c0bcb5);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #8c7c6d);
  --nav-tag-color-active: var(--text-muted, #9e9184);
  --nav-tag-color-hover: var(--text-muted, #9e9184);
  --pdf-background: var(--background-primary, #171717);
  --pdf-page-background: var(--background-primary, #171717);
  --pdf-sidebar-background: var(--background-primary, #171717);
  --pill-border-color: var(--background-modifier-border, #292929);
  --pill-border-color-hover: var(--background-modifier-border-hover, #292929);
  --pill-color: var(--text-muted, #9e9184);
  --pill-color-hover: var(--text-normal, #c0bcb5);
  --pill-color-remove: var(--text-faint, #8c7c6d);
  --pill-color-remove-hover: var(--text-accent, #978159);
  --pop-callout-slide-out-duration: 0ms;
  --pop-callout-width: 20px;
  --prompt-background: var(--background-primary, #171717);
  --raised-background: var(--blur-background, color-mix(in srgb, #292929 65%, transparent) linear-gradient(#292929, color-mix(in srgb, #292929 65%, transparent)));
  --ribbon-background: var(--background-secondary, #1a1a1a);
  --ribbon-background-collapsed: var(--background-primary, #171717);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --ribbon-width: 40px;
  --search-clear-button-color: var(--text-muted, #9e9184);
  --search-icon-color: var(--text-muted, #9e9184);
  --search-result-background: var(--background-primary, #171717);
  --secondary: var(--text-accent, var(--color-accent-1, #978159));
  --setting-group-heading-color: var(--text-normal, #c0bcb5);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #282523);
  --setting-items-border-color: var(--background-modifier-border, #292929);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #9e9184);
  --shiki-code-background: var(--code-background, #282523);
  --shiki-code-comment: var(--text-faint, #8c7c6d);
  --shiki-code-normal: var(--text-muted, #9e9184);
  --shiki-code-punctuation: var(--text-muted, #9e9184);
  --shiki-gutter-border-color: var(--background-modifier-border, #292929);
  --shiki-gutter-text-color: var(--text-faint, #8c7c6d);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #9e9184);
  --shiki-highlight-neutral: var(--shiki-code-normal, #9e9184);
  --shiki-terminal-dots-color: var(--text-faint, #8c7c6d);
  --shiki-tooltip-background: var(--background-modifier-message, #000000);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #292929);
  --slider-track-background: var(--background-modifier-border, #292929);
  --status-bar-background: var(--background-secondary, #1a1a1a);
  --status-bar-border-color: var(--divider-color, #292929);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-text-color: var(--text-muted, #9e9184);
  --suggestion-background: var(--background-primary, #171717);
  --tab-background-active: var(--background-primary, #171717);
  --tab-container-background: var(--background-secondary, #1a1a1a);
  --tab-divider-color: var(--background-modifier-border-hover, #292929);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #292929);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-stacked-header-width: var(--header-height, 30px);
  --tab-switcher-background: var(--background-secondary, #1a1a1a);
  --tab-text-color: var(--text-faint, #8c7c6d);
  --tab-text-color-active: var(--text-muted, #9e9184);
  --tab-text-color-focused: var(--text-muted, #9e9184);
  --tab-text-color-focused-active: var(--text-muted, #9e9184);
  --tab-text-color-focused-active-current: var(--text-normal, #c0bcb5);
  --tab-text-color-focused-highlighted: var(--text-accent, #978159);
  --table-add-button-border-color: var(--background-modifier-border, #292929);
  --table-border-color: var(--background-modifier-border, #292929);
  --table-drag-handle-background-active: var(--table-selection-border-color, #978159);
  --table-drag-handle-color: var(--text-faint, #8c7c6d);
  --table-header-border-color: var(--table-border-color, #292929);
  --table-header-color: var(--text-normal, #c0bcb5);
  --table-selection-border-color: var(--interactive-accent, #978159);
  --tag-color: var(--text-accent, #978159);
  --tag-color-hover: var(--text-accent, #978159);
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #b1996c));
  --text-accent: var(--color-accent-1, #978159);
  --text-accent-hover: var(--color-accent-2, #b1996c);
  --text-faint: var(--color-base-50, #8c7c6d);
  --text-highlight-bg-active: var(--text-highlight-bg, #a0632666);
  --text-muted: var(--color-base-70, #9e9184);
  --text-normal: var(--color-base-100, #c0bcb5);
  --titlebar-background: var(--background-secondary, #1a1a1a);
  --titlebar-background-focused: var(--color-base-20, #1a1a1a);
  --titlebar-border-color: var(--background-modifier-border, #292929);
  --titlebar-text-color: var(--text-muted, #9e9184);
  --titlebar-text-color-focused: var(--text-normal, #c0bcb5);
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --vault-profile-color: var(--text-normal, #c0bcb5);
  --vault-profile-color-hover: var(--vault-profile-color, #c0bcb5);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(23, 23, 23));
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 41, 41);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  border-left-color: rgb(41, 41, 41);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body html {
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-bold, rgb(123, 156, 172));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(123, 156, 172) none 0px;
  text-decoration-color: rgb(123, 156, 172);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(160, 127, 108));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(160, 127, 108) none 0px;
  text-decoration-color: rgb(160, 127, 108);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(160, 127, 108));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(160, 127, 108) none 0px;
  text-decoration-color: rgb(160, 127, 108);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-bold, rgb(123, 156, 172));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(123, 156, 172) none 0px;
  text-decoration-color: rgb(123, 156, 172);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(160, 99, 38, 0.4));
  color: var(--text-normal, rgb(192, 188, 181));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(192, 188, 181) none 0px;
  text-decoration-color: rgb(192, 188, 181);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body del {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(192, 188, 181);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(192, 188, 181) none 0px;
  text-decoration-color: rgb(192, 188, 181);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body footer {
  opacity: 0.5;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(192, 188, 181));
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(140, 124, 109);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(151, 129, 89));
  border-color: rgb(151, 129, 89);
}

html[saved-theme="dark"] body p {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-muted, rgb(158, 145, 132));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(158, 145, 132) none 0px;
  text-decoration-color: rgb(158, 145, 132);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-external-color, rgb(151, 129, 89));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(151, 129, 89) none 0px;
  text-decoration-color: rgb(151, 129, 89);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(151, 129, 89));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(151, 129, 89) none 0px;
  text-decoration-color: rgb(151, 129, 89);
  transition: filter 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(151, 129, 89));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(151, 129, 89) none 0px;
  transition: color 0.1s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body dl {
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body dt {
  color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(140, 124, 109));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .table-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body table {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(192, 188, 181);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 334.719px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  width: 194.578px;
}

html[saved-theme="dark"] body tbody {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body td {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: var(--table-text-color, rgb(192, 188, 181));
}

html[saved-theme="dark"] body th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: var(--table-header-color, rgb(192, 188, 181));
}

html[saved-theme="dark"] body thead {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  border-bottom-color: rgb(55, 55, 56);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(55, 55, 56);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(40, 37, 35));
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: var(--code-normal, rgb(192, 188, 181));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(40, 37, 35));
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
}`,
    images: `html[saved-theme="dark"] body audio {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(192, 188, 181);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body figure {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-secondary, rgb(40, 37, 35));
  border-bottom-color: rgb(158, 145, 132);
  border-left-color: rgb(158, 145, 132);
  border-right-color: rgb(158, 145, 132);
  border-top-color: rgb(158, 145, 132);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body .footnotes {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-top-color: rgb(192, 188, 181);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-left-width: 0px;
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(140, 124, 109);
  border-left-color: rgb(140, 124, 109);
  border-right-color: rgb(140, 124, 109);
  border-top-color: rgb(140, 124, 109);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(158, 145, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(158, 145, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(192, 188, 181);
  text-decoration-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 23, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 23, 23);
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
  background-color: rgb(140, 124, 109);
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
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background-color: var(--background-secondary, rgba(83, 223, 221, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background-color: var(--background-secondary, rgba(251, 70, 76, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background-color: var(--background-secondary, rgba(251, 70, 76, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background-color: var(--background-secondary, rgba(168, 130, 255, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(168, 130, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background-color: var(--background-secondary, rgba(251, 70, 76, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background-color: var(--background-secondary, rgba(2, 122, 255, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background-color: var(--background-secondary, rgba(2, 122, 255, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background-color: var(--background-secondary, rgba(233, 151, 63, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background-color: var(--background-secondary, rgba(158, 158, 158, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background-color: var(--background-secondary, rgba(68, 207, 110, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(68, 207, 110);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background-color: var(--background-secondary, rgba(83, 223, 221, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background-color: var(--background-secondary, rgba(2, 122, 255, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background-color: var(--background-secondary, rgba(233, 151, 63, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(26, 26, 26));
  color: rgb(192, 188, 181);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
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
  background-color: var(--background-secondary, rgb(35, 35, 35));
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(192, 188, 181));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(23, 23, 23));
  border-bottom-color: rgb(55, 55, 56);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(55, 55, 56);
  border-right-color: rgb(55, 55, 56);
  border-top-color: rgb(55, 55, 56);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(192, 188, 181);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(192, 188, 181) none 0px;
  text-decoration-color: rgb(192, 188, 181);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(55, 55, 56);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(55, 55, 56);
  border-right-color: rgb(55, 55, 56);
  border-top-color: rgb(55, 55, 56);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(151, 129, 89);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(192, 188, 181));
  font-family: var(--h1-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(192, 188, 181));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(192, 188, 181));
  font-family: var(--h2-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(192, 188, 181));
  font-family: var(--inline-title-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(192, 188, 181));
  font-family: var(--h3-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(192, 188, 181));
  font-family: var(--h4-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(192, 188, 181));
  font-family: var(--h5-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(192, 188, 181));
  font-family: var(--h6-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(158, 145, 132));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(158, 145, 132));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(192, 188, 181);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(158, 145, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(158, 145, 132);
  border-right-color: rgb(158, 145, 132);
  border-top-color: rgb(158, 145, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(158, 145, 132));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--status-bar-text-color, rgb(158, 145, 132));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(158, 145, 132);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(192, 188, 181);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(158, 145, 132));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(158, 145, 132);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(158, 145, 132);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(158, 145, 132));
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(158, 145, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(158, 145, 132);
  border-right-color: rgb(158, 145, 132);
  border-top-color: rgb(158, 145, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(158, 145, 132));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(158, 145, 132);
  stroke: rgb(158, 145, 132);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(158, 145, 132);
  border-left-color: rgb(158, 145, 132);
  border-right-color: rgb(158, 145, 132);
  border-top-color: rgb(158, 145, 132);
  color: rgb(158, 145, 132);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(140, 124, 109));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(192, 188, 181));
}

html[saved-theme="dark"] body .canvas-node-group {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  border-color: rgb(192, 188, 181);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(41, 41, 41);
  color: var(--table-header-color, rgb(192, 188, 181));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: var(--text-muted, rgb(158, 145, 132));
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(158, 145, 132);
  border-left-color: rgb(158, 145, 132);
  border-right-color: rgb(158, 145, 132);
  border-top-color: rgb(158, 145, 132);
  color: rgb(158, 145, 132);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(41, 41, 41);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(158, 145, 132);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(158, 145, 132);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(151, 129, 89));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(158, 145, 132);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-secondary, rgb(23, 23, 23));
  color: var(--text-normal, rgb(192, 188, 181));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(26, 26, 26));
  border-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--background-secondary, rgb(26, 26, 26));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(192, 188, 181);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--background-secondary, rgb(26, 26, 26));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(192, 188, 181));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body abbr {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body details {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(158, 145, 132);
  border-left-color: rgb(158, 145, 132);
  border-right-color: rgb(158, 145, 132);
  border-top-color: rgb(158, 145, 132);
  color: var(--text-normal, rgb(158, 145, 132));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--background-secondary, rgb(40, 37, 35));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
  color: var(--code-normal, rgb(192, 188, 181));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="dark"] body progress {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(192, 188, 181);
  border-left-color: rgb(192, 188, 181);
  border-right-color: rgb(192, 188, 181);
  border-top-color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body sub {
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body summary {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(192, 188, 181);
}

html[saved-theme="dark"] body sup {
  color: rgb(192, 188, 181);
  vertical-align: baseline;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(151, 129, 89));
}`,
  },
  light: {
    base: `:root:root {
  --activeline: #22373270;
  --background-modifier-border: var(--color-base-30, #253a35);
  --background-modifier-border-focus: var(--color-base-40, #253a35);
  --background-modifier-border-hover: var(--color-base-35, #253a35);
  --background-modifier-error: var(--color-red, #cf1e33);
  --background-modifier-error-hover: var(--color-red, #cf1e33);
  --background-modifier-error-rgb: var(--color-red-rgb, 207, 30, 51);
  --background-modifier-form-field: var(--color-base-25, #1e332f);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #1e332f);
  --background-modifier-message: #12312b;
  --background-modifier-success: var(--color-green, #01903b);
  --background-modifier-success-rgb: var(--color-green-rgb, 1, 144, 59);
  --background-primary: var(--color-base-00, #0f1d1a);
  --background-primary-alt: var(--color-base-10, #0b1614);
  --background-secondary: var(--color-base-20, #10201d);
  --background-secondary-alt: var(--color-base-05, #253a35);
  --bases-cards-background: var(--background-primary, #0f1d1a);
  --bases-cards-cover-background: var(--background-primary-alt, #0b1614);
  --bases-embed-border-color: var(--background-modifier-border, #253a35);
  --bases-group-heading-property-color: var(--text-muted, #ad9962);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, #253a35);
  --bases-table-cell-background-active: var(--background-primary, #0f1d1a);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #0b1614);
  --bases-table-group-background: var(--background-primary-alt, #0b1614);
  --bases-table-header-background: var(--background-primary, #0f1d1a);
  --bases-table-header-color: var(--text-muted, #ad9962);
  --bases-table-summary-background: var(--background-primary, #0f1d1a);
  --blockquote-border-color: var(--interactive-accent, #b49967);
  --callout-bug: var(--color-red-rgb, 207, 30, 51);
  --callout-default: var(--color-blue-rgb, 2, 95, 200);
  --callout-error: var(--color-red-rgb, 207, 30, 51);
  --callout-example: var(--color-purple-rgb, 95, 56, 214);
  --callout-fail: var(--color-red-rgb, 207, 30, 51);
  --callout-important: var(--color-cyan-rgb, 0, 158, 155);
  --callout-info: var(--color-blue-rgb, 2, 95, 200);
  --callout-question: var(--color-orange-rgb, 193, 109, 24);
  --callout-success: var(--color-green-rgb, 1, 144, 59);
  --callout-summary: var(--color-cyan-rgb, 0, 158, 155);
  --callout-tip: var(--color-cyan-rgb, 0, 158, 155);
  --callout-todo: var(--color-blue-rgb, 2, 95, 200);
  --callout-warning: var(--color-orange-rgb, 193, 109, 24);
  --canvas-background: var(--background-primary, #0f1d1a);
  --canvas-card-label-color: var(--text-faint, #a08d57);
  --canvas-color-1: var(--color-red-rgb, 207, 30, 51);
  --canvas-color-2: var(--color-orange-rgb, 193, 109, 24);
  --canvas-color-3: var(--color-yellow-rgb, 151, 116, 0);
  --canvas-color-4: var(--color-green-rgb, 1, 144, 59);
  --canvas-color-5: var(--color-cyan-rgb, 0, 158, 155);
  --canvas-color-6: var(--color-purple-rgb, 95, 56, 214);
  --canvas-dot-pattern: var(--color-base-30, #253a35);
  --caret-color: var(--text-normal, #cabbab);
  --checkbox-border-color: var(--text-faint, #a08d57);
  --checkbox-border-color-hover: var(--text-muted, #ad9962);
  --checkbox-color: var(--interactive-accent, #b49967);
  --checkbox-color-hover: var(--interactive-accent-hover, #c9ab73);
  --checkbox-marker-color: var(--background-primary, #0f1d1a);
  --checklist-done-color: var(--text-muted, #ad9962);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--color-base-05, #122a25);
  --code-border-color: var(--background-modifier-border, #253a35);
  --code-comment: var(--text-faint, #a08d57);
  --code-function: var(--color-yellow, #977400);
  --code-important: var(--color-orange, #c16d18);
  --code-keyword: var(--color-pink, #bf206d);
  --code-normal: var(--text-normal, #cabbab);
  --code-operator: var(--color-red, #cf1e33);
  --code-property: var(--color-cyan, #009e9b);
  --code-punctuation: var(--text-muted, #ad9962);
  --code-string: var(--color-green, #01903b);
  --code-tag: var(--color-red, #cf1e33);
  --code-value: var(--color-purple, #5f38d6);
  --collapse-icon-color: var(--text-faint, #a08d57);
  --collapse-icon-color-collapsed: var(--text-accent, #b49967);
  --color-accent-1: var(--color-accent, #b49967);
  --color-base-00: #0f1d1a;
  --color-base-05: var(--color-base-30, #253a35);
  --color-base-10: #0b1614;
  --color-base-100: #cabbab;
  --color-base-20: #10201d;
  --color-base-25: #1e332f;
  --color-base-30: #253a35;
  --color-base-35: var(--color-base-30, #253a35);
  --color-base-40: #253a35;
  --color-base-50: #a08d57;
  --color-base-70: #ad9962;
  --color-blue: #025fc8;
  --color-blue-rgb: 2, 95, 200;
  --color-bold: #359e87;
  --color-cyan: #009e9b;
  --color-cyan-rgb: 0, 158, 155;
  --color-green: #01903b;
  --color-green-rgb: 1, 144, 59;
  --color-italic: #1cacb4;
  --color-orange: #c16d18;
  --color-orange-rgb: 193, 109, 24;
  --color-pink: #bf206d;
  --color-pink-rgb: 191, 32, 109;
  --color-purple: #5f38d6;
  --color-purple-rgb: 95, 56, 214;
  --color-red: #cf1e33;
  --color-red-rgb: 207, 30, 51;
  --color-yellow: #977400;
  --color-yellow-rgb: 151, 116, 0;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --dark: var(--text-normal, var(--color-base-100, #cabbab));
  --darkgray: var(--text-normal, var(--color-base-100, #cabbab));
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --divider-color: var(--background-modifier-border, #253a35);
  --divider-color-hover: var(--interactive-accent, #b49967);
  --dropdown-background: var(--interactive-normal, #253a35);
  --dropdown-background-hover: var(--interactive-hover, #253a35);
  --file-header-background: var(--background-primary, #0f1d1a);
  --file-header-background-focused: var(--background-primary, #0f1d1a);
  --file-header-font: var(--font-interface, "CMU Typewriter Text");
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-line-width: 900px;
  --flair-background: var(--interactive-normal, #253a35);
  --flair-color: var(--text-normal, #cabbab);
  --font-default: "CMU Typewriter Text";
  --font-mermaid: var(--font-text, "CMU Typewriter Text");
  --font-monospace-default: "JetBrains Mono";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, #253a35);
  --footnote-id-color: var(--text-muted, #ad9962);
  --footnote-id-color-no-occurrences: var(--text-faint, #a08d57);
  --graph-node: var(--text-muted, #ad9962);
  --graph-node-attachment: var(--color-yellow, #977400);
  --graph-node-focused: var(--text-accent, #b49967);
  --graph-node-tag: var(--color-green, #01903b);
  --graph-node-unresolved: var(--text-faint, #a08d57);
  --graph-text: var(--text-normal, #cabbab);
  --gray: var(--text-muted, var(--color-base-70, #ad9962));
  --header-height: 30px;
  --heading-formatting: var(--text-faint, #a08d57);
  --heading-formatting-color: #a83d3d;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --hr-color: var(--background-modifier-border, #253a35);
  --icon-color: var(--text-muted, #ad9962);
  --icon-color-active: var(--text-accent, #b49967);
  --icon-color-focused: var(--text-normal, #cabbab);
  --icon-color-hover: var(--text-muted, #ad9962);
  --in-between-background: #0c1815;
  --input-date-separator: var(--text-faint, #a08d57);
  --input-placeholder-color: var(--text-faint, #a08d57);
  --interactive-accent: var(--color-accent-1, #b49967);
  --interactive-accent-hover: var(--color-accent-2, #c9ab73);
  --interactive-hover: var(--color-base-35, #253a35);
  --interactive-normal: var(--color-base-30, #253a35);
  --light: var(--background-primary, var(--color-base-00, #0f1d1a));
  --lightgray: var(--background-secondary, var(--color-base-20, #10201d));
  --link-color: var(--text-accent, #b49967);
  --link-color-hover: var(--text-accent-hover, #c9ab73);
  --link-external-color: var(--text-accent, #b49967);
  --link-external-color-hover: var(--text-accent-hover, #c9ab73);
  --link-unresolved-color: var(--text-accent, #b49967);
  --list-marker-color: var(--text-faint, #a08d57);
  --list-marker-color-collapsed: var(--text-accent, #b49967);
  --list-marker-color-hover: var(--text-muted, #ad9962);
  --menu-background: var(--background-secondary, #10201d);
  --menu-border-color: var(--background-modifier-border-hover, #253a35);
  --metadata-border-color: var(--background-modifier-border, #253a35);
  --metadata-divider-color: var(--background-modifier-border, #253a35);
  --metadata-input-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-input-text-color: var(--text-normal, #cabbab);
  --metadata-label-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-label-text-color: var(--text-muted, #ad9962);
  --metadata-label-text-color-hover: var(--text-muted, #ad9962);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #0f1d1a);
  --nav-collapse-icon-color: var(--collapse-icon-color, #a08d57);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #a08d57);
  --nav-heading-color: var(--text-normal, #cabbab);
  --nav-heading-color-collapsed: var(--text-faint, #a08d57);
  --nav-heading-color-collapsed-hover: var(--text-muted, #ad9962);
  --nav-heading-color-hover: var(--text-normal, #cabbab);
  --nav-item-color: var(--text-muted, #ad9962);
  --nav-item-color-active: var(--text-normal, #cabbab);
  --nav-item-color-highlighted: var(--text-accent, #b49967);
  --nav-item-color-hover: var(--text-normal, #cabbab);
  --nav-item-color-selected: var(--text-normal, #cabbab);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #a08d57);
  --nav-tag-color-active: var(--text-muted, #ad9962);
  --nav-tag-color-hover: var(--text-muted, #ad9962);
  --pdf-background: var(--background-primary, #0f1d1a);
  --pdf-page-background: var(--background-primary, #0f1d1a);
  --pdf-sidebar-background: var(--background-primary, #0f1d1a);
  --pill-border-color: var(--background-modifier-border, #253a35);
  --pill-border-color-hover: var(--background-modifier-border-hover, #253a35);
  --pill-color: var(--text-muted, #ad9962);
  --pill-color-hover: var(--text-normal, #cabbab);
  --pill-color-remove: var(--text-faint, #a08d57);
  --pill-color-remove-hover: var(--text-accent, #b49967);
  --pop-callout-slide-out-duration: 0ms;
  --pop-callout-width: 20px;
  --prompt-background: var(--background-primary, #0f1d1a);
  --raised-background: var(--blur-background, color-mix(in srgb, #0f1d1a 65%, transparent) linear-gradient(#0f1d1a, color-mix(in srgb, #0f1d1a 65%, transparent)));
  --ribbon-background: var(--background-secondary, #10201d);
  --ribbon-background-collapsed: var(--background-primary, #0f1d1a);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --ribbon-width: 40px;
  --search-clear-button-color: var(--text-muted, #ad9962);
  --search-icon-color: var(--text-muted, #ad9962);
  --search-result-background: var(--background-primary, #0f1d1a);
  --secondary: var(--text-accent, var(--color-accent, #b49967));
  --setting-group-heading-color: var(--text-normal, #cabbab);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #0b1614);
  --setting-items-border-color: var(--background-modifier-border, #253a35);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #ad9962);
  --shiki-code-background: var(--code-background, #122a25);
  --shiki-code-comment: var(--text-faint, #a08d57);
  --shiki-code-function: var(--color-green, #01903b);
  --shiki-code-important: var(--color-orange, #c16d18);
  --shiki-code-keyword: var(--color-pink, #bf206d);
  --shiki-code-normal: var(--text-muted, #ad9962);
  --shiki-code-property: var(--color-cyan, #009e9b);
  --shiki-code-punctuation: var(--text-muted, #ad9962);
  --shiki-code-string: var(--color-yellow, #977400);
  --shiki-code-value: var(--color-purple, #5f38d6);
  --shiki-gutter-border-color: var(--background-modifier-border, #253a35);
  --shiki-gutter-text-color: var(--text-faint, #a08d57);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #ad9962);
  --shiki-highlight-neutral: var(--shiki-code-normal, #ad9962);
  --shiki-terminal-dots-color: var(--text-faint, #a08d57);
  --shiki-tooltip-background: var(--background-modifier-message, #12312b);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #253a35);
  --slider-track-background: var(--background-modifier-border, #253a35);
  --status-bar-background: var(--background-secondary, #10201d);
  --status-bar-border-color: var(--divider-color, #253a35);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-text-color: var(--text-muted, #ad9962);
  --suggestion-background: var(--background-primary, #0f1d1a);
  --sync-avatar-color-1: var(--color-red, #cf1e33);
  --sync-avatar-color-2: var(--color-orange, #c16d18);
  --sync-avatar-color-3: var(--color-yellow, #977400);
  --sync-avatar-color-4: var(--color-green, #01903b);
  --sync-avatar-color-5: var(--color-cyan, #009e9b);
  --sync-avatar-color-6: var(--color-blue, #025fc8);
  --sync-avatar-color-7: var(--color-purple, #5f38d6);
  --sync-avatar-color-8: var(--color-pink, #bf206d);
  --tab-background-active: var(--background-primary, #0f1d1a);
  --tab-container-background: var(--background-secondary, #10201d);
  --tab-divider-color: var(--background-modifier-border-hover, #253a35);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #253a35);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-stacked-header-width: var(--header-height, 30px);
  --tab-switcher-background: var(--background-secondary, #10201d);
  --tab-text-color: var(--text-faint, #a08d57);
  --tab-text-color-active: var(--text-muted, #ad9962);
  --tab-text-color-focused: var(--text-muted, #ad9962);
  --tab-text-color-focused-active: var(--text-muted, #ad9962);
  --tab-text-color-focused-active-current: var(--text-normal, #cabbab);
  --tab-text-color-focused-highlighted: var(--text-accent, #b49967);
  --table-add-button-border-color: var(--background-modifier-border, #253a35);
  --table-border-color: var(--background-modifier-border, #253a35);
  --table-drag-handle-background-active: var(--table-selection-border-color, #b49967);
  --table-drag-handle-color: var(--text-faint, #a08d57);
  --table-header-border-color: var(--table-border-color, #253a35);
  --table-header-color: var(--text-normal, #cabbab);
  --table-selection-border-color: var(--interactive-accent, #b49967);
  --tag-color: var(--text-accent, #b49967);
  --tag-color-hover: var(--text-accent, #b49967);
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #c9ab73));
  --text-accent: var(--color-accent, #b49967);
  --text-accent-hover: var(--color-accent-2, #c9ab73);
  --text-error: var(--color-red, #cf1e33);
  --text-faint: var(--color-base-50, #a08d57);
  --text-highlight-bg-active: var(--text-highlight-bg, #a0632666);
  --text-muted: var(--color-base-70, #ad9962);
  --text-normal: var(--color-base-100, #cabbab);
  --text-success: var(--color-green, #01903b);
  --text-warning: var(--color-orange, #c16d18);
  --titlebar-background: var(--background-secondary, #10201d);
  --titlebar-background-focused: var(--color-base-20, #10201d);
  --titlebar-border-color: var(--background-modifier-border, #253a35);
  --titlebar-text-color: var(--text-muted, #ad9962);
  --titlebar-text-color-focused: var(--text-normal, #cabbab);
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --vault-profile-color: var(--text-normal, #cabbab);
  --vault-profile-color-hover: var(--vault-profile-color, #cabbab);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(15, 29, 26));
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(37, 58, 53);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--background-secondary, rgb(16, 32, 29));
  border-left-color: rgb(37, 58, 53);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body html {
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-bold, rgb(53, 158, 135));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(53, 158, 135) none 0px;
  text-decoration-color: rgb(53, 158, 135);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(28, 172, 180));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(28, 172, 180) none 0px;
  text-decoration-color: rgb(28, 172, 180);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(28, 172, 180));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(28, 172, 180) none 0px;
  text-decoration-color: rgb(28, 172, 180);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-bold, rgb(53, 158, 135));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(53, 158, 135) none 0px;
  text-decoration-color: rgb(53, 158, 135);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(160, 99, 38, 0.4));
  color: var(--text-normal, rgb(202, 187, 171));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(202, 187, 171) none 0px;
  text-decoration-color: rgb(202, 187, 171);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body del {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(202, 187, 171);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(202, 187, 171) none 0px;
  text-decoration-color: rgb(202, 187, 171);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body footer {
  opacity: 0.5;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(202, 187, 171));
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(160, 141, 87);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(180, 153, 103));
  border-color: rgb(180, 153, 103);
}

html[saved-theme="light"] body p {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-muted, rgb(173, 153, 98));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(173, 153, 98) none 0px;
  text-decoration-color: rgb(173, 153, 98);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-external-color, rgb(180, 153, 103));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(180, 153, 103) none 0px;
  text-decoration-color: rgb(180, 153, 103);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(180, 153, 103));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(180, 153, 103) none 0px;
  text-decoration-color: rgb(180, 153, 103);
}

html[saved-theme="light"] body a.internal-link.broken {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(180, 153, 103));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(180, 153, 103) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body dl {
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body dt {
  color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body ol > li {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body ul > li {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(160, 141, 87));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--background-secondary, rgb(16, 32, 29));
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .table-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body table {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(202, 187, 171);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 334.719px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  width: 194.578px;
}

html[saved-theme="light"] body tbody {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body td {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(37, 58, 53);
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  color: var(--table-text-color, rgb(202, 187, 171));
}

html[saved-theme="light"] body th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(37, 58, 53);
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  color: var(--table-header-color, rgb(202, 187, 171));
}

html[saved-theme="light"] body thead {
  background-color: var(--background-secondary, rgb(16, 32, 29));
  border-bottom-color: rgb(37, 58, 53);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(37, 58, 53);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(18, 42, 37));
  border-bottom-color: rgb(37, 58, 53);
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  color: var(--code-normal, rgb(202, 187, 171));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(18, 42, 37));
  border-bottom-color: rgb(37, 58, 53);
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
}`,
    images: `html[saved-theme="light"] body audio {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body figcaption {
  color: rgb(202, 187, 171);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body figure {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-secondary, rgb(11, 22, 20));
  border-bottom-color: rgb(173, 153, 98);
  border-left-color: rgb(173, 153, 98);
  border-right-color: rgb(173, 153, 98);
  border-top-color: rgb(173, 153, 98);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body .footnotes {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-top-color: rgb(202, 187, 171);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-left-width: 0px;
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(160, 141, 87);
  border-left-color: rgb(160, 141, 87);
  border-right-color: rgb(160, 141, 87);
  border-top-color: rgb(160, 141, 87);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(173, 153, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(173, 153, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(202, 187, 171);
  text-decoration-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 29, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 29, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 109, 24);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(160, 141, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 158, 155);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 95, 200);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 95, 200);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(95, 56, 214);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(1, 144, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(1, 144, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(1, 144, 59);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 158, 155);
  background: rgba(0, 158, 155, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(0, 158, 155, 0.1));
  border-bottom-color: rgba(0, 158, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(0, 158, 155);
  border-left-width: 3px;
  border-right-color: rgba(0, 158, 155, 0.25);
  border-top-color: rgba(0, 158, 155, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 207, 30, 51);
  background: rgba(207, 30, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(207, 30, 51, 0.1));
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 207, 30, 51);
  background: rgba(207, 30, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(207, 30, 51, 0.1));
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 95, 56, 214);
  background: rgba(95, 56, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(95, 56, 214, 0.1));
  border-bottom-color: rgba(95, 56, 214, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(95, 56, 214);
  border-left-width: 3px;
  border-right-color: rgba(95, 56, 214, 0.25);
  border-top-color: rgba(95, 56, 214, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 207, 30, 51);
  background: rgba(207, 30, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(207, 30, 51, 0.1));
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 95, 200);
  background: rgba(2, 95, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(2, 95, 200, 0.1));
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 95, 200);
  background: rgba(2, 95, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(2, 95, 200, 0.1));
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 193, 109, 24);
  background: rgba(193, 109, 24, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(193, 109, 24, 0.1));
  border-bottom-color: rgba(193, 109, 24, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(193, 109, 24);
  border-left-width: 3px;
  border-right-color: rgba(193, 109, 24, 0.25);
  border-top-color: rgba(193, 109, 24, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background-color: var(--background-secondary, rgba(158, 158, 158, 0.1));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 1, 144, 59);
  background: rgba(1, 144, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(1, 144, 59, 0.1));
  border-bottom-color: rgba(1, 144, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(1, 144, 59);
  border-left-width: 3px;
  border-right-color: rgba(1, 144, 59, 0.25);
  border-top-color: rgba(1, 144, 59, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 158, 155);
  background: rgba(0, 158, 155, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(0, 158, 155, 0.1));
  border-bottom-color: rgba(0, 158, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(0, 158, 155);
  border-left-width: 3px;
  border-right-color: rgba(0, 158, 155, 0.25);
  border-top-color: rgba(0, 158, 155, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 95, 200);
  background: rgba(2, 95, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(2, 95, 200, 0.1));
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 193, 109, 24);
  background: rgba(193, 109, 24, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgba(193, 109, 24, 0.1));
  border-bottom-color: rgba(193, 109, 24, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(193, 109, 24);
  border-left-width: 3px;
  border-right-color: rgba(193, 109, 24, 0.25);
  border-top-color: rgba(193, 109, 24, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 95, 200;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(2, 95, 200));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(16, 32, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(16, 32, 29));
  color: rgb(202, 187, 171);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
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
  background-color: var(--background-secondary, rgb(30, 51, 47));
  border-bottom-color: rgb(37, 58, 53);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(202, 187, 171));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(15, 29, 26));
  border-bottom-color: rgb(37, 58, 53);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(202, 187, 171);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(202, 187, 171) none 0px;
  text-decoration-color: rgb(202, 187, 171);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(37, 58, 53);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(16, 32, 29);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(180, 153, 103);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(202, 187, 171));
  font-family: var(--h1-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(202, 187, 171));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(202, 187, 171));
  font-family: var(--h2-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(202, 187, 171));
  font-family: var(--inline-title-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(202, 187, 171));
  font-family: var(--h3-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(202, 187, 171));
  font-family: var(--h4-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(202, 187, 171));
  font-family: var(--h5-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(202, 187, 171));
  font-family: var(--h6-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(37, 58, 53);
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 2, 95, 200);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(173, 153, 98));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(173, 153, 98));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(202, 187, 171);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 153, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 153, 98);
  border-right-color: rgb(173, 153, 98);
  border-top-color: rgb(173, 153, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(173, 153, 98));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--background-secondary, rgb(16, 32, 29));
  border-bottom-color: rgb(37, 58, 53);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--status-bar-text-color, rgb(173, 153, 98));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(173, 153, 98);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(202, 187, 171);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(173, 153, 98));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(173, 153, 98);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(173, 153, 98);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(173, 153, 98));
}

html[saved-theme="light"] body ul.section-ul {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 153, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 153, 98);
  border-right-color: rgb(173, 153, 98);
  border-top-color: rgb(173, 153, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(173, 153, 98));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(173, 153, 98);
  stroke: rgb(173, 153, 98);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 153, 98);
  border-left-color: rgb(173, 153, 98);
  border-right-color: rgb(173, 153, 98);
  border-top-color: rgb(173, 153, 98);
  color: rgb(173, 153, 98);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(160, 141, 87));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(202, 187, 171));
}

html[saved-theme="light"] body .canvas-node-group {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(15, 29, 26));
  border-color: rgb(202, 187, 171);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(37, 58, 53);
  color: var(--table-header-color, rgb(202, 187, 171));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(37, 58, 53);
  border-left-color: rgb(37, 58, 53);
  border-right-color: rgb(37, 58, 53);
  border-top-color: rgb(37, 58, 53);
  color: var(--text-muted, rgb(173, 153, 98));
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 153, 98);
  border-left-color: rgb(173, 153, 98);
  border-right-color: rgb(173, 153, 98);
  border-top-color: rgb(173, 153, 98);
  color: rgb(173, 153, 98);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(37, 58, 53);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(173, 153, 98);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(173, 153, 98);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(180, 153, 103));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(173, 153, 98);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-secondary, rgb(15, 29, 26));
  color: var(--text-normal, rgb(202, 187, 171));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(16, 32, 29));
  border-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--background-secondary, rgb(16, 32, 29));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(202, 187, 171);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--background-secondary, rgb(16, 32, 29));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(202, 187, 171));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body abbr {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body details {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body input[type=text] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 153, 98);
  border-left-color: rgb(173, 153, 98);
  border-right-color: rgb(173, 153, 98);
  border-top-color: rgb(173, 153, 98);
  color: var(--text-normal, rgb(173, 153, 98));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--background-secondary, rgb(18, 42, 37));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
  color: var(--code-normal, rgb(202, 187, 171));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="light"] body progress {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(202, 187, 171);
  border-left-color: rgb(202, 187, 171);
  border-right-color: rgb(202, 187, 171);
  border-top-color: rgb(202, 187, 171);
}

html[saved-theme="light"] body sub {
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body summary {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(202, 187, 171);
}

html[saved-theme="light"] body sup {
  color: rgb(202, 187, 171);
  vertical-align: baseline;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(180, 153, 103));
}`,
  },
};
