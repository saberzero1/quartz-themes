import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ukiyo",
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
    styleSettingsId: "entry-point",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --activeline: #51454140;
  --background-modifier-border: var(--color-base-30, #504431);
  --background-modifier-border-focus: var(--color-base-40, #504431);
  --background-modifier-border-hover: var(--color-base-35, #645743);
  --background-modifier-form-field: var(--color-base-25, #2b2723);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #2b2723);
  --background-modifier-message: #281f1b;
  --background-primary: var(--color-base-00, #372d29);
  --background-primary-alt: var(--color-base-10, #2b2723);
  --background-secondary: var(--color-base-20, #413632);
  --background-secondary-alt: var(--color-base-30, #504431);
  --bases-cards-background: var(--background-primary, #372d29);
  --bases-cards-cover-background: var(--background-primary-alt, #2b2723);
  --bases-embed-border-color: var(--background-modifier-border, #504431);
  --bases-group-heading-property-color: var(--text-muted, #b2a699);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, #504431);
  --bases-table-cell-background-active: var(--background-primary, #372d29);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #2b2723);
  --bases-table-group-background: var(--background-primary-alt, #2b2723);
  --bases-table-header-background: var(--background-primary, #372d29);
  --bases-table-header-color: var(--text-muted, #b2a699);
  --bases-table-summary-background: var(--background-primary, #372d29);
  --blockquote-border-color: var(--interactive-accent, #ba945f);
  --canvas-background: var(--background-primary, #372d29);
  --canvas-card-label-color: var(--text-faint, #868074);
  --canvas-dot-pattern: var(--color-base-30, #504431);
  --caret-color: var(--text-normal, #ccc2b7);
  --checkbox-border-color: var(--text-faint, #868074);
  --checkbox-border-color-hover: var(--text-muted, #b2a699);
  --checkbox-color: var(--interactive-accent, #ba945f);
  --checkbox-color-hover: var(--interactive-accent-hover, #ba945f);
  --checkbox-marker-color: var(--background-primary, #372d29);
  --checklist-done-color: var(--text-muted, #b2a699);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-primary-alt, #2b2723);
  --code-border-color: var(--background-modifier-border, #504431);
  --code-comment: var(--text-faint, #868074);
  --code-normal: var(--text-normal, #ccc2b7);
  --code-punctuation: var(--text-muted, #b2a699);
  --collapse-icon-color: var(--text-faint, #868074);
  --collapse-icon-color-collapsed: var(--text-accent, #ba945f);
  --color-accent-1: var(--color-accent, #ba945f);
  --color-base-00: #372d29;
  --color-base-05: #413632;
  --color-base-10: #2b2723;
  --color-base-100: #ccc2b7;
  --color-base-20: #413632;
  --color-base-25: #2b2723;
  --color-base-30: #504431;
  --color-base-35: #645743;
  --color-base-40: #504431;
  --color-base-50: #868074;
  --color-base-70: #b2a699;
  --color-bold: var(--color-accent, #ba945f);
  --color-italic: #e77a59;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --dark: var(--text-normal, var(--color-base-100, #ccc2b7));
  --darkgray: var(--text-normal, var(--color-base-100, #ccc2b7));
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --divider-color: var(--background-modifier-border, #504431);
  --divider-color-hover: var(--interactive-accent, #ba945f);
  --dropdown-background: var(--interactive-normal, #504431);
  --dropdown-background-hover: var(--interactive-hover, #645743);
  --file-header-background: var(--background-primary, #372d29);
  --file-header-background-focused: var(--background-primary, #372d29);
  --file-header-font: var(--font-interface, "CMU Typewriter Text");
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-line-width: 900px;
  --flair-background: var(--interactive-normal, #504431);
  --flair-color: var(--text-normal, #ccc2b7);
  --font-default: "CMU Typewriter Text";
  --font-mermaid: var(--font-text, "CMU Typewriter Text");
  --font-monospace-default: "JetBrains Mono";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, #504431);
  --footnote-id-color: var(--text-muted, #b2a699);
  --footnote-id-color-no-occurrences: var(--text-faint, #868074);
  --graph-node: var(--text-muted, #b2a699);
  --graph-node-focused: var(--text-accent, #ba945f);
  --graph-node-unresolved: var(--text-faint, #868074);
  --graph-text: var(--text-normal, #ccc2b7);
  --gray: var(--text-muted, var(--color-base-70, #b2a699));
  --header-height: 30px;
  --heading-formatting: var(--text-faint, #868074);
  --heading-formatting-color: #c72626;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --hr-color: var(--background-modifier-border, #504431);
  --icon-color: var(--text-muted, #b2a699);
  --icon-color-active: var(--text-accent, #ba945f);
  --icon-color-focused: var(--text-normal, #ccc2b7);
  --icon-color-hover: var(--text-muted, #b2a699);
  --in-between-background: #2e2420;
  --input-date-separator: var(--text-faint, #868074);
  --input-placeholder-color: var(--text-faint, #868074);
  --interactive-accent: var(--color-accent, #ba945f);
  --interactive-accent-hover: var(--color-accent-1, #ba945f);
  --interactive-hover: var(--color-base-35, #645743);
  --interactive-normal: var(--color-base-30, #504431);
  --light: var(--background-primary, var(--color-base-00, #372d29));
  --lightgray: var(--background-secondary, var(--color-base-20, #413632));
  --link-color: var(--text-accent, #ba945f);
  --link-color-hover: var(--text-accent-hover, #e0ba86);
  --link-external-color: var(--text-accent, #ba945f);
  --link-external-color-hover: var(--text-accent-hover, #e0ba86);
  --link-unresolved-color: var(--text-accent, #ba945f);
  --list-marker-color: var(--text-faint, #868074);
  --list-marker-color-collapsed: var(--text-accent, #ba945f);
  --list-marker-color-hover: var(--text-muted, #b2a699);
  --menu-background: var(--background-secondary, #413632);
  --menu-border-color: var(--background-modifier-border-hover, #645743);
  --metadata-border-color: var(--background-modifier-border, #504431);
  --metadata-divider-color: var(--background-modifier-border, #504431);
  --metadata-input-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-input-text-color: var(--text-normal, #ccc2b7);
  --metadata-label-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-label-text-color: var(--text-muted, #b2a699);
  --metadata-label-text-color-hover: var(--text-muted, #b2a699);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #372d29);
  --nav-collapse-icon-color: var(--collapse-icon-color, #868074);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #868074);
  --nav-heading-color: var(--text-normal, #ccc2b7);
  --nav-heading-color-collapsed: var(--text-faint, #868074);
  --nav-heading-color-collapsed-hover: var(--text-muted, #b2a699);
  --nav-heading-color-hover: var(--text-normal, #ccc2b7);
  --nav-item-color: var(--text-muted, #b2a699);
  --nav-item-color-active: var(--text-normal, #ccc2b7);
  --nav-item-color-highlighted: var(--text-accent, #ba945f);
  --nav-item-color-hover: var(--text-normal, #ccc2b7);
  --nav-item-color-selected: var(--text-normal, #ccc2b7);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #868074);
  --nav-tag-color-active: var(--text-muted, #b2a699);
  --nav-tag-color-hover: var(--text-muted, #b2a699);
  --pdf-background: var(--background-primary, #372d29);
  --pdf-page-background: var(--background-primary, #372d29);
  --pdf-sidebar-background: var(--background-primary, #372d29);
  --pill-border-color: var(--background-modifier-border, #504431);
  --pill-border-color-hover: var(--background-modifier-border-hover, #645743);
  --pill-color: var(--text-muted, #b2a699);
  --pill-color-hover: var(--text-normal, #ccc2b7);
  --pill-color-remove: var(--text-faint, #868074);
  --pill-color-remove-hover: var(--text-accent, #ba945f);
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
  --prompt-background: var(--background-primary, #372d29);
  --raised-background: var(--blur-background, color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent)));
  --ribbon-background: var(--background-secondary, #413632);
  --ribbon-background-collapsed: var(--background-primary, #372d29);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --ribbon-width: 40px;
  --search-clear-button-color: var(--text-muted, #b2a699);
  --search-icon-color: var(--text-muted, #b2a699);
  --search-result-background: var(--background-primary, #372d29);
  --secondary: var(--text-accent, var(--color-accent-1, #ba945f));
  --setting-group-heading-color: var(--text-normal, #ccc2b7);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #2b2723);
  --setting-items-border-color: var(--background-modifier-border, #504431);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #b2a699);
  --shiki-code-background: var(--code-background, #2b2723);
  --shiki-code-comment: var(--text-faint, #868074);
  --shiki-code-normal: var(--text-muted, #b2a699);
  --shiki-code-punctuation: var(--text-muted, #b2a699);
  --shiki-gutter-border-color: var(--background-modifier-border, #504431);
  --shiki-gutter-text-color: var(--text-faint, #868074);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #b2a699);
  --shiki-highlight-neutral: var(--shiki-code-normal, #b2a699);
  --shiki-terminal-dots-color: var(--text-faint, #868074);
  --shiki-tooltip-background: var(--background-modifier-message, #281f1b);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #645743);
  --slider-track-background: var(--background-modifier-border, #504431);
  --status-bar-background: var(--background-secondary, #413632);
  --status-bar-border-color: var(--divider-color, #504431);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-text-color: var(--text-muted, #b2a699);
  --suggestion-background: var(--background-primary, #372d29);
  --tab-background-active: var(--background-primary, #372d29);
  --tab-container-background: var(--background-secondary, #413632);
  --tab-divider-color: var(--background-modifier-border-hover, #645743);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #504431);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-stacked-header-width: var(--header-height, 30px);
  --tab-switcher-background: var(--background-secondary, #413632);
  --tab-text-color: var(--text-faint, #868074);
  --tab-text-color-active: var(--text-muted, #b2a699);
  --tab-text-color-focused: var(--text-muted, #b2a699);
  --tab-text-color-focused-active: var(--text-muted, #b2a699);
  --tab-text-color-focused-active-current: var(--text-normal, #ccc2b7);
  --tab-text-color-focused-highlighted: var(--text-accent, #ba945f);
  --table-add-button-border-color: var(--background-modifier-border, #504431);
  --table-border-color: var(--background-modifier-border, #504431);
  --table-drag-handle-background-active: var(--table-selection-border-color, #ba945f);
  --table-drag-handle-color: var(--text-faint, #868074);
  --table-header-border-color: var(--table-border-color, #504431);
  --table-header-color: var(--text-normal, #ccc2b7);
  --table-selection-border-color: var(--interactive-accent, #ba945f);
  --tag-color: var(--text-accent, #ba945f);
  --tag-color-hover: var(--text-accent, #ba945f);
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #e0ba86));
  --text-accent: var(--color-accent-1, #ba945f);
  --text-accent-hover: var(--color-accent-2, #e0ba86);
  --text-faint: var(--color-base-50, #868074);
  --text-muted: var(--color-base-70, #b2a699);
  --text-normal: var(--color-base-100, #ccc2b7);
  --titlebar-background: var(--background-secondary, #413632);
  --titlebar-background-focused: var(--color-base-20, #413632);
  --titlebar-border-color: var(--background-modifier-border, #504431);
  --titlebar-text-color: var(--text-muted, #b2a699);
  --titlebar-text-color-focused: var(--text-normal, #ccc2b7);
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --vault-profile-color: var(--text-normal, #ccc2b7);
  --vault-profile-color-hover: var(--vault-profile-color, #ccc2b7);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(55, 45, 41));
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 68, 49);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  border-left-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
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
  color: var(--color-bold, rgb(186, 148, 95));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(231, 122, 89));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(231, 122, 89));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-bold, rgb(186, 148, 95));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(146, 107, 34, 0.9));
  color: var(--text-normal, rgb(204, 194, 183));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body del {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body footer {
  opacity: 0.5;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(204, 194, 183));
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(134, 128, 116);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(186, 148, 95));
  border-color: rgb(186, 148, 95);
}

html[saved-theme="dark"] body p {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-muted, rgb(178, 166, 153));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(178, 166, 153) none 0px;
  text-decoration-color: rgb(178, 166, 153);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-external-color, rgb(186, 148, 95));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(186, 148, 95));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: filter 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(186, 148, 95));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  transition: color 0.1s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 194, 183);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body dl {
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 194, 183);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(134, 128, 116));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .table-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body table {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(204, 194, 183);
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
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: var(--table-text-color, rgb(204, 194, 183));
}

html[saved-theme="dark"] body th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: var(--table-header-color, rgb(204, 194, 183));
}

html[saved-theme="dark"] body thead {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(80, 68, 49);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(43, 39, 35));
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: var(--code-normal, rgb(204, 194, 183));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(43, 39, 35));
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
}`,
    images: `html[saved-theme="dark"] body audio {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body figure {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-secondary, rgb(43, 39, 35));
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body .footnotes {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
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
  border-bottom-color: rgb(134, 128, 116);
  border-left-color: rgb(134, 128, 116);
  border-right-color: rgb(134, 128, 116);
  border-top-color: rgb(134, 128, 116);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(55, 45, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(55, 45, 41);
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
  background-color: rgb(134, 128, 116);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="col"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #504431;
  --background-modifier-border-focus: #504431;
  --background-modifier-border-hover: #645743;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2b2723;
  --background-modifier-form-field-hover: #2b2723;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #372d29;
  --background-primary-alt: #2b2723;
  --background-secondary: #413632;
  --background-secondary-alt: #504431;
  --blockquote-border-color: #ba945f;
  --blur-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
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
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #372d29;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #504431;
  --caret-color: #ccc2b7;
  --checkbox-border-color: #868074;
  --checkbox-border-color-hover: #b2a699;
  --checkbox-color: #ba945f;
  --checkbox-color-hover: #ba945f;
  --checkbox-marker-color: #372d29;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b2a699;
  --clickable-icon-radius: 0px;
  --code-background: #2b2723;
  --code-border-color: #504431;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #868074;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ccc2b7;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b2a699;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #868074;
  --collapse-icon-color-collapsed: #ba945f;
  --color-accent: #ba945f;
  --color-accent-1: #ba945f;
  --color-accent-2: #e0ba86;
  --color-accent-hsl: 258, 88%, 66%;
  --color-bold: #ba945f;
  --divider-color: #504431;
  --divider-color-hover: #ba945f;
  --divider-vertical-height: 100%;
  --dropdown-background: #504431;
  --dropdown-background-hover: #645743;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #504431;
  --flair-color: #ccc2b7;
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-weight: 400;
  --graph-line: #645743;
  --graph-node: #b2a699;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #ba945f;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #868074;
  --graph-text: #ccc2b7;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #868074;
  --heading-spacing: 2.5rem;
  --hr-color: #504431;
  --interactive-accent: #ba945f;
  --interactive-accent-hover: #ba945f;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #645743;
  --interactive-normal: #504431;
  --link-color: #ba945f;
  --link-color-hover: #e0ba86;
  --link-external-color: #ba945f;
  --link-external-color-hover: #e0ba86;
  --link-unresolved-color: #ba945f;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.4em;
  --menu-background: #413632;
  --menu-border-color: #645743;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #372d29;
  --pdf-page-background: #372d29;
  --pdf-shadow: 0 0 0 1px #504431;
  --pdf-sidebar-background: #372d29;
  --pdf-thumbnail-shadow: 0 0 0 1px #504431;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b2a699;
  --search-icon-color: #b2a699;
  --search-result-background: #372d29;
  --setting-group-heading-color: #ccc2b7;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2b2723;
  --setting-items-border-color: #504431;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b2a699;
  --shiki-code-background: #2b2723;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #868074;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b2a699;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b2a699;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #504431;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #868074;
  --shiki-gutter-text-color-highlight: #b2a699;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b2a699;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #868074;
  --shiki-tooltip-background: #281f1b;
  --suggestion-background: #372d29;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #372d29;
  --tab-divider-color: #645743;
  --tab-font-size: 14px;
  --tab-outline-color: #504431;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #413632;
  --tab-switcher-menubar-background: linear-gradient(to top, #413632, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #ba945f;
  --tab-text-color: #868074;
  --tab-text-color-active: #b2a699;
  --tab-text-color-focused: #b2a699;
  --tab-text-color-focused-active: #b2a699;
  --tab-text-color-focused-active-current: #ccc2b7;
  --tab-text-color-focused-highlighted: #ba945f;
  --table-add-button-border-color: #504431;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #ba945f;
  --table-drag-handle-color: #868074;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #504431;
  --table-header-border-width: 1px;
  --table-header-color: #ccc2b7;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #ba945f;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #ba945f;
  --tag-color-hover: #ba945f;
  --tag-size: 0.875em;
  --text-accent: #ba945f;
  --text-accent-hover: #e0ba86;
  --text-error: #fb464c;
  --text-faint: #868074;
  --text-highlight-bg: #926b22e6;
  --text-muted: #b2a699;
  --text-normal: #ccc2b7;
  --text-selection: #6154508f;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: var(--background-secondary, rgba(2, 122, 255, 0.1));
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 0px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="cont"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #504431;
  --background-modifier-border-focus: #504431;
  --background-modifier-border-hover: #645743;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2b2723;
  --background-modifier-form-field-hover: #2b2723;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #372d29;
  --background-primary-alt: #2b2723;
  --background-secondary: #413632;
  --background-secondary-alt: #504431;
  --blockquote-border-color: #ba945f;
  --blur-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
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
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #372d29;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #504431;
  --caret-color: #ccc2b7;
  --checkbox-border-color: #868074;
  --checkbox-border-color-hover: #b2a699;
  --checkbox-color: #ba945f;
  --checkbox-color-hover: #ba945f;
  --checkbox-marker-color: #372d29;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b2a699;
  --clickable-icon-radius: 0px;
  --code-background: #2b2723;
  --code-border-color: #504431;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #868074;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ccc2b7;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b2a699;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #868074;
  --collapse-icon-color-collapsed: #ba945f;
  --color-accent: #ba945f;
  --color-accent-1: #ba945f;
  --color-accent-2: #e0ba86;
  --color-accent-hsl: 258, 88%, 66%;
  --color-bold: #ba945f;
  --divider-color: #504431;
  --divider-color-hover: #ba945f;
  --divider-vertical-height: 100%;
  --dropdown-background: #504431;
  --dropdown-background-hover: #645743;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #504431;
  --flair-color: #ccc2b7;
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-weight: 400;
  --graph-line: #645743;
  --graph-node: #b2a699;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #ba945f;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #868074;
  --graph-text: #ccc2b7;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #868074;
  --heading-spacing: 2.5rem;
  --hr-color: #504431;
  --interactive-accent: #ba945f;
  --interactive-accent-hover: #ba945f;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #645743;
  --interactive-normal: #504431;
  --link-color: #ba945f;
  --link-color-hover: #e0ba86;
  --link-external-color: #ba945f;
  --link-external-color-hover: #e0ba86;
  --link-unresolved-color: #ba945f;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.4em;
  --menu-background: #413632;
  --menu-border-color: #645743;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #372d29;
  --pdf-page-background: #372d29;
  --pdf-shadow: 0 0 0 1px #504431;
  --pdf-sidebar-background: #372d29;
  --pdf-thumbnail-shadow: 0 0 0 1px #504431;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b2a699;
  --search-icon-color: #b2a699;
  --search-result-background: #372d29;
  --setting-group-heading-color: #ccc2b7;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2b2723;
  --setting-items-border-color: #504431;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b2a699;
  --shiki-code-background: #2b2723;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #868074;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b2a699;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b2a699;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #504431;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #868074;
  --shiki-gutter-text-color-highlight: #b2a699;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b2a699;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #868074;
  --shiki-tooltip-background: #281f1b;
  --suggestion-background: #372d29;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #372d29;
  --tab-divider-color: #645743;
  --tab-font-size: 14px;
  --tab-outline-color: #504431;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #413632;
  --tab-switcher-menubar-background: linear-gradient(to top, #413632, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #ba945f;
  --tab-text-color: #868074;
  --tab-text-color-active: #b2a699;
  --tab-text-color-focused: #b2a699;
  --tab-text-color-focused-active: #b2a699;
  --tab-text-color-focused-active-current: #ccc2b7;
  --tab-text-color-focused-highlighted: #ba945f;
  --table-add-button-border-color: #504431;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #ba945f;
  --table-drag-handle-color: #868074;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #504431;
  --table-header-border-width: 1px;
  --table-header-color: #ccc2b7;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #ba945f;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #ba945f;
  --tag-color-hover: #ba945f;
  --tag-size: 0.875em;
  --text-accent: #ba945f;
  --text-accent-hover: #e0ba86;
  --text-error: #fb464c;
  --text-faint: #868074;
  --text-highlight-bg: #926b22e6;
  --text-muted: #b2a699;
  --text-normal: #ccc2b7;
  --text-selection: #6154508f;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-bottom-width: 0px;
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-right-width: 0px;
  border-top-color: rgb(204, 194, 183);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  border-top-width: 0px;
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 0px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="container"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #504431;
  --background-modifier-border-focus: #504431;
  --background-modifier-border-hover: #645743;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2b2723;
  --background-modifier-form-field-hover: #2b2723;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #372d29;
  --background-primary-alt: #2b2723;
  --background-secondary: #413632;
  --background-secondary-alt: #504431;
  --blockquote-border-color: #ba945f;
  --blur-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
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
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #372d29;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #504431;
  --caret-color: #ccc2b7;
  --checkbox-border-color: #868074;
  --checkbox-border-color-hover: #b2a699;
  --checkbox-color: #ba945f;
  --checkbox-color-hover: #ba945f;
  --checkbox-marker-color: #372d29;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b2a699;
  --clickable-icon-radius: 0px;
  --code-background: #2b2723;
  --code-border-color: #504431;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #868074;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ccc2b7;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b2a699;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #868074;
  --collapse-icon-color-collapsed: #ba945f;
  --color-accent: #ba945f;
  --color-accent-1: #ba945f;
  --color-accent-2: #e0ba86;
  --color-accent-hsl: 258, 88%, 66%;
  --color-bold: #ba945f;
  --divider-color: #504431;
  --divider-color-hover: #ba945f;
  --divider-vertical-height: 100%;
  --dropdown-background: #504431;
  --dropdown-background-hover: #645743;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #504431;
  --flair-color: #ccc2b7;
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-weight: 400;
  --graph-line: #645743;
  --graph-node: #b2a699;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #ba945f;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #868074;
  --graph-text: #ccc2b7;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #868074;
  --heading-spacing: 2.5rem;
  --hr-color: #504431;
  --interactive-accent: #ba945f;
  --interactive-accent-hover: #ba945f;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #645743;
  --interactive-normal: #504431;
  --link-color: #ba945f;
  --link-color-hover: #e0ba86;
  --link-external-color: #ba945f;
  --link-external-color-hover: #e0ba86;
  --link-unresolved-color: #ba945f;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.4em;
  --menu-background: #413632;
  --menu-border-color: #645743;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #372d29;
  --pdf-page-background: #372d29;
  --pdf-shadow: 0 0 0 1px #504431;
  --pdf-sidebar-background: #372d29;
  --pdf-thumbnail-shadow: 0 0 0 1px #504431;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b2a699;
  --search-icon-color: #b2a699;
  --search-result-background: #372d29;
  --setting-group-heading-color: #ccc2b7;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2b2723;
  --setting-items-border-color: #504431;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b2a699;
  --shiki-code-background: #2b2723;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #868074;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b2a699;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b2a699;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #504431;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #868074;
  --shiki-gutter-text-color-highlight: #b2a699;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b2a699;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #868074;
  --shiki-tooltip-background: #281f1b;
  --suggestion-background: #372d29;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #372d29;
  --tab-divider-color: #645743;
  --tab-font-size: 14px;
  --tab-outline-color: #504431;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #413632;
  --tab-switcher-menubar-background: linear-gradient(to top, #413632, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #ba945f;
  --tab-text-color: #868074;
  --tab-text-color-active: #b2a699;
  --tab-text-color-focused: #b2a699;
  --tab-text-color-focused-active: #b2a699;
  --tab-text-color-focused-active-current: #ccc2b7;
  --tab-text-color-focused-highlighted: #ba945f;
  --table-add-button-border-color: #504431;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #ba945f;
  --table-drag-handle-color: #868074;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #504431;
  --table-header-border-width: 1px;
  --table-header-color: #ccc2b7;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #ba945f;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #ba945f;
  --tag-color-hover: #ba945f;
  --tag-size: 0.875em;
  --text-accent: #ba945f;
  --text-accent-hover: #e0ba86;
  --text-error: #fb464c;
  --text-faint: #868074;
  --text-highlight-bg: #926b22e6;
  --text-muted: #b2a699;
  --text-normal: #ccc2b7;
  --text-selection: #6154508f;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-bottom-width: 0px;
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-right-width: 0px;
  border-top-color: rgb(204, 194, 183);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  border-top-width: 0px;
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 0px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
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
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(65, 54, 50));
  color: rgb(204, 194, 183);
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

html[saved-theme="dark"] body .callout[data-callout="col"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cont"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: var(--background-secondary, rgb(43, 39, 35));
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(204, 194, 183));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(55, 45, 41));
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(65, 54, 50);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 194, 183);
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
  color: rgb(186, 148, 95);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(204, 194, 183));
  font-family: var(--h1-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(204, 194, 183));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(204, 194, 183));
  font-family: var(--h2-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(204, 194, 183));
  font-family: var(--inline-title-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(204, 194, 183));
  font-family: var(--h3-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(204, 194, 183));
  font-family: var(--h4-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(204, 194, 183));
  font-family: var(--h5-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(204, 194, 183));
  font-family: var(--h6-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
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
  color: var(--nav-item-color, rgb(178, 166, 153));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(178, 166, 153));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 194, 183);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(178, 166, 153);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(178, 166, 153));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--status-bar-text-color, rgb(178, 166, 153));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(178, 166, 153);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(178, 166, 153));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(178, 166, 153));
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(178, 166, 153);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(178, 166, 153));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(178, 166, 153);
  stroke: rgb(178, 166, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(134, 128, 116));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(204, 194, 183));
}

html[saved-theme="dark"] body .canvas-node-group {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  border-color: rgb(204, 194, 183);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(80, 68, 49);
  color: var(--table-header-color, rgb(204, 194, 183));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: var(--text-muted, rgb(178, 166, 153));
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(80, 68, 49);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(186, 148, 95));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-secondary, rgb(55, 45, 41));
  color: var(--text-normal, rgb(204, 194, 183));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(65, 54, 50));
  border-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--background-secondary, rgb(65, 54, 50));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(204, 194, 183);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--background-secondary, rgb(65, 54, 50));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(204, 194, 183));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body details {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: var(--text-normal, rgb(178, 166, 153));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--background-secondary, rgb(43, 39, 35));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: var(--code-normal, rgb(204, 194, 183));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="dark"] body progress {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body summary {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 194, 183);
  vertical-align: baseline;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(186, 148, 95));
}`,
  },
  light: {
    base: `:root:root {
  --activeline: #d4b4946a;
  --background-modifier-border: var(--color-base-30, #c6a57f);
  --background-modifier-border-focus: var(--color-base-40, #b4916a);
  --background-modifier-border-hover: var(--color-base-35, #a8865f);
  --background-modifier-error: var(--color-red, #cf1e33);
  --background-modifier-error-hover: var(--color-red, #cf1e33);
  --background-modifier-error-rgb: var(--color-red-rgb, 207, 30, 51);
  --background-modifier-form-field: var(--color-base-00, #e1c4a6);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #e1c4a6);
  --background-modifier-message: #d7b38d;
  --background-modifier-success: var(--color-green, #01903b);
  --background-modifier-success-rgb: var(--color-green-rgb, 1, 144, 59);
  --background-primary: var(--color-base-00, #e1c4a6);
  --background-primary-alt: var(--color-base-10, #daba97);
  --background-secondary: var(--color-base-20, #dabb9a);
  --background-secondary-alt: var(--color-base-05, #cbaa87);
  --bases-cards-background: var(--background-primary, #e1c4a6);
  --bases-cards-cover-background: var(--background-primary-alt, #daba97);
  --bases-embed-border-color: var(--background-modifier-border, #c6a57f);
  --bases-group-heading-property-color: var(--text-muted, #5b4f4a);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, #c6a57f);
  --bases-table-cell-background-active: var(--background-primary, #e1c4a6);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #daba97);
  --bases-table-group-background: var(--background-primary-alt, #daba97);
  --bases-table-header-background: var(--background-primary, #e1c4a6);
  --bases-table-header-color: var(--text-muted, #5b4f4a);
  --bases-table-summary-background: var(--background-primary, #e1c4a6);
  --blockquote-border-color: var(--interactive-accent, #800000);
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
  --canvas-background: var(--background-primary, #e1c4a6);
  --canvas-card-label-color: var(--text-faint, #7a6d68);
  --canvas-color-1: var(--color-red-rgb, 207, 30, 51);
  --canvas-color-2: var(--color-orange-rgb, 193, 109, 24);
  --canvas-color-3: var(--color-yellow-rgb, 151, 116, 0);
  --canvas-color-4: var(--color-green-rgb, 1, 144, 59);
  --canvas-color-5: var(--color-cyan-rgb, 0, 158, 155);
  --canvas-color-6: var(--color-purple-rgb, 95, 56, 214);
  --canvas-dot-pattern: var(--color-base-30, #c6a57f);
  --caret-color: var(--text-normal, #5f4f49);
  --checkbox-border-color: var(--text-faint, #7a6d68);
  --checkbox-border-color-hover: var(--text-muted, #5b4f4a);
  --checkbox-color: var(--interactive-accent, #800000);
  --checkbox-color-hover: var(--interactive-accent-hover, #a00000);
  --checkbox-marker-color: var(--background-primary, #e1c4a6);
  --checklist-done-color: var(--text-muted, #5b4f4a);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--color-base-05, #cbaa87);
  --code-border-color: var(--background-modifier-border, #c6a57f);
  --code-comment: var(--text-faint, #7a6d68);
  --code-function: var(--color-yellow, #977400);
  --code-important: var(--color-orange, #c16d18);
  --code-keyword: var(--color-pink, #bf206d);
  --code-normal: var(--text-normal, #5f4f49);
  --code-operator: var(--color-red, #cf1e33);
  --code-property: var(--color-cyan, #009e9b);
  --code-punctuation: var(--text-muted, #5b4f4a);
  --code-string: var(--color-green, #01903b);
  --code-tag: var(--color-red, #cf1e33);
  --code-value: var(--color-purple, #5f38d6);
  --collapse-icon-color: var(--text-faint, #7a6d68);
  --collapse-icon-color-collapsed: var(--text-accent, #800000);
  --color-accent-1: var(--color-accent, #800000);
  --color-base-00: #e1c4a6;
  --color-base-05: #cbaa87;
  --color-base-10: #daba97;
  --color-base-100: #5f4f49;
  --color-base-20: #dabb9a;
  --color-base-25: #4c4743;
  --color-base-30: #c6a57f;
  --color-base-35: #a8865f;
  --color-base-40: #b4916a;
  --color-base-50: #7a6d68;
  --color-base-70: #5b4f4a;
  --color-blue: #025fc8;
  --color-blue-rgb: 2, 95, 200;
  --color-bold: #bd5757;
  --color-cyan: #009e9b;
  --color-cyan-rgb: 0, 158, 155;
  --color-green: #01903b;
  --color-green-rgb: 1, 144, 59;
  --color-italic: #ae612b;
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
  --dark: var(--text-normal, var(--color-base-100, #5f4f49));
  --darkgray: var(--text-normal, var(--color-base-100, #5f4f49));
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --divider-color: var(--background-modifier-border, #c6a57f);
  --divider-color-hover: var(--interactive-accent, #800000);
  --dropdown-background: var(--interactive-normal, #e1c4a6);
  --dropdown-background-hover: var(--interactive-hover, #daba97);
  --file-header-background: var(--background-primary, #e1c4a6);
  --file-header-background-focused: var(--background-primary, #e1c4a6);
  --file-header-font: var(--font-interface, "CMU Typewriter Text");
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-line-width: 900px;
  --flair-background: var(--interactive-normal, #e1c4a6);
  --flair-color: var(--text-normal, #5f4f49);
  --font-default: "CMU Typewriter Text";
  --font-mermaid: var(--font-text, "CMU Typewriter Text");
  --font-monospace-default: "JetBrains Mono";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, #c6a57f);
  --footnote-id-color: var(--text-muted, #5b4f4a);
  --footnote-id-color-no-occurrences: var(--text-faint, #7a6d68);
  --graph-node: var(--text-muted, #5b4f4a);
  --graph-node-attachment: var(--color-yellow, #977400);
  --graph-node-focused: var(--text-accent, #800000);
  --graph-node-tag: var(--color-green, #01903b);
  --graph-node-unresolved: var(--text-faint, #7a6d68);
  --graph-text: var(--text-normal, #5f4f49);
  --gray: var(--text-muted, var(--color-base-70, #5b4f4a));
  --header-height: 30px;
  --heading-formatting: var(--text-faint, #7a6d68);
  --heading-formatting-color: #d34747;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --hr-color: var(--background-modifier-border, #c6a57f);
  --icon-color: var(--text-muted, #5b4f4a);
  --icon-color-active: var(--text-accent, #800000);
  --icon-color-focused: var(--text-normal, #5f4f49);
  --icon-color-hover: var(--text-muted, #5b4f4a);
  --in-between-background: #d4af88;
  --input-date-separator: var(--text-faint, #7a6d68);
  --input-placeholder-color: var(--text-faint, #7a6d68);
  --interactive-accent: var(--color-accent-1, #800000);
  --interactive-accent-hover: var(--color-accent-2, #a00000);
  --interactive-hover: var(--color-base-10, #daba97);
  --interactive-normal: var(--color-base-00, #e1c4a6);
  --light: var(--background-primary, var(--color-base-00, #e1c4a6));
  --lightgray: var(--background-secondary, var(--color-base-20, #dabb9a));
  --link-color: var(--text-accent, #800000);
  --link-color-hover: var(--text-accent-hover, #a00000);
  --link-external-color: var(--text-accent, #800000);
  --link-external-color-hover: var(--text-accent-hover, #a00000);
  --link-unresolved-color: var(--text-accent, #800000);
  --list-marker-color: var(--text-faint, #7a6d68);
  --list-marker-color-collapsed: var(--text-accent, #800000);
  --list-marker-color-hover: var(--text-muted, #5b4f4a);
  --menu-background: var(--background-secondary, #dabb9a);
  --menu-border-color: var(--background-modifier-border-hover, #a8865f);
  --metadata-border-color: var(--background-modifier-border, #c6a57f);
  --metadata-divider-color: var(--background-modifier-border, #c6a57f);
  --metadata-input-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-input-text-color: var(--text-normal, #5f4f49);
  --metadata-label-font: var(--font-interface, "CMU Typewriter Text");
  --metadata-label-text-color: var(--text-muted, #5b4f4a);
  --metadata-label-text-color-hover: var(--text-muted, #5b4f4a);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #e1c4a6);
  --nav-collapse-icon-color: var(--collapse-icon-color, #7a6d68);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #7a6d68);
  --nav-heading-color: var(--text-normal, #5f4f49);
  --nav-heading-color-collapsed: var(--text-faint, #7a6d68);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5b4f4a);
  --nav-heading-color-hover: var(--text-normal, #5f4f49);
  --nav-item-color: var(--text-muted, #5b4f4a);
  --nav-item-color-active: var(--text-normal, #5f4f49);
  --nav-item-color-highlighted: var(--text-accent, #800000);
  --nav-item-color-hover: var(--text-normal, #5f4f49);
  --nav-item-color-selected: var(--text-normal, #5f4f49);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #7a6d68);
  --nav-tag-color-active: var(--text-muted, #5b4f4a);
  --nav-tag-color-hover: var(--text-muted, #5b4f4a);
  --pdf-background: var(--background-primary, #e1c4a6);
  --pdf-page-background: var(--background-primary, #e1c4a6);
  --pdf-sidebar-background: var(--background-primary, #e1c4a6);
  --pill-border-color: var(--background-modifier-border, #c6a57f);
  --pill-border-color-hover: var(--background-modifier-border-hover, #a8865f);
  --pill-color: var(--text-muted, #5b4f4a);
  --pill-color-hover: var(--text-normal, #5f4f49);
  --pill-color-remove: var(--text-faint, #7a6d68);
  --pill-color-remove-hover: var(--text-accent, #800000);
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
  --prompt-background: var(--background-primary, #e1c4a6);
  --raised-background: var(--blur-background, color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent)));
  --ribbon-background: var(--background-secondary, #dabb9a);
  --ribbon-background-collapsed: var(--background-primary, #e1c4a6);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --ribbon-width: 40px;
  --search-clear-button-color: var(--text-muted, #5b4f4a);
  --search-icon-color: var(--text-muted, #5b4f4a);
  --search-result-background: var(--background-primary, #e1c4a6);
  --secondary: var(--text-accent, var(--color-accent, #800000));
  --setting-group-heading-color: var(--text-normal, #5f4f49);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #daba97);
  --setting-items-border-color: var(--background-modifier-border, #c6a57f);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #5b4f4a);
  --shiki-code-background: var(--code-background, #cbaa87);
  --shiki-code-comment: var(--text-faint, #7a6d68);
  --shiki-code-function: var(--color-green, #01903b);
  --shiki-code-important: var(--color-orange, #c16d18);
  --shiki-code-keyword: var(--color-pink, #bf206d);
  --shiki-code-normal: var(--text-muted, #5b4f4a);
  --shiki-code-property: var(--color-cyan, #009e9b);
  --shiki-code-punctuation: var(--text-muted, #5b4f4a);
  --shiki-code-string: var(--color-yellow, #977400);
  --shiki-code-value: var(--color-purple, #5f38d6);
  --shiki-gutter-border-color: var(--background-modifier-border, #c6a57f);
  --shiki-gutter-text-color: var(--text-faint, #7a6d68);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #5b4f4a);
  --shiki-highlight-neutral: var(--shiki-code-normal, #5b4f4a);
  --shiki-terminal-dots-color: var(--text-faint, #7a6d68);
  --shiki-tooltip-background: var(--background-modifier-message, #d7b38d);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #a8865f);
  --slider-track-background: var(--background-modifier-border, #c6a57f);
  --status-bar-background: var(--background-secondary, #dabb9a);
  --status-bar-border-color: var(--divider-color, #c6a57f);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-text-color: var(--text-muted, #5b4f4a);
  --suggestion-background: var(--background-primary, #e1c4a6);
  --sync-avatar-color-1: var(--color-red, #cf1e33);
  --sync-avatar-color-2: var(--color-orange, #c16d18);
  --sync-avatar-color-3: var(--color-yellow, #977400);
  --sync-avatar-color-4: var(--color-green, #01903b);
  --sync-avatar-color-5: var(--color-cyan, #009e9b);
  --sync-avatar-color-6: var(--color-blue, #025fc8);
  --sync-avatar-color-7: var(--color-purple, #5f38d6);
  --sync-avatar-color-8: var(--color-pink, #bf206d);
  --tab-background-active: var(--background-primary, #e1c4a6);
  --tab-container-background: var(--background-secondary, #dabb9a);
  --tab-divider-color: var(--background-modifier-border-hover, #a8865f);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #c6a57f);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-stacked-header-width: var(--header-height, 30px);
  --tab-switcher-background: var(--background-secondary, #dabb9a);
  --tab-text-color: var(--text-faint, #7a6d68);
  --tab-text-color-active: var(--text-muted, #5b4f4a);
  --tab-text-color-focused: var(--text-muted, #5b4f4a);
  --tab-text-color-focused-active: var(--text-muted, #5b4f4a);
  --tab-text-color-focused-active-current: var(--text-normal, #5f4f49);
  --tab-text-color-focused-highlighted: var(--text-accent, #800000);
  --table-add-button-border-color: var(--background-modifier-border, #c6a57f);
  --table-border-color: var(--background-modifier-border, #c6a57f);
  --table-drag-handle-background-active: var(--table-selection-border-color, #800000);
  --table-drag-handle-color: var(--text-faint, #7a6d68);
  --table-header-border-color: var(--table-border-color, #c6a57f);
  --table-header-color: var(--text-normal, #5f4f49);
  --table-selection-border-color: var(--interactive-accent, #800000);
  --tag-color: var(--text-accent, #800000);
  --tag-color-hover: var(--text-accent, #800000);
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #a00000));
  --text-accent: var(--color-accent, #800000);
  --text-accent-hover: var(--color-accent-2, #a00000);
  --text-error: var(--color-red, #cf1e33);
  --text-faint: var(--color-base-50, #7a6d68);
  --text-muted: var(--color-base-70, #5b4f4a);
  --text-normal: var(--color-base-100, #5f4f49);
  --text-success: var(--color-green, #01903b);
  --text-warning: var(--color-orange, #c16d18);
  --titlebar-background: var(--background-secondary, #dabb9a);
  --titlebar-background-focused: var(--color-base-20, #dabb9a);
  --titlebar-border-color: var(--background-modifier-border, #c6a57f);
  --titlebar-text-color: var(--text-muted, #5b4f4a);
  --titlebar-text-color-focused: var(--text-normal, #5f4f49);
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --vault-profile-color: var(--text-normal, #5f4f49);
  --vault-profile-color-hover: var(--vault-profile-color, #5f4f49);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(225, 196, 166));
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 165, 127);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--background-secondary, rgb(218, 187, 154));
  border-left-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
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
  color: var(--color-bold, rgb(189, 87, 87));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(189, 87, 87) none 0px;
  text-decoration-color: rgb(189, 87, 87);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(174, 97, 43));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-italic, rgb(174, 97, 43));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--color-bold, rgb(189, 87, 87));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(189, 87, 87) none 0px;
  text-decoration-color: rgb(189, 87, 87);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(234, 195, 87));
  color: var(--text-normal, rgb(95, 79, 73));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body del {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body footer {
  opacity: 0.5;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(95, 79, 73));
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(122, 109, 104);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(128, 0, 0));
  border-color: rgb(128, 0, 0);
}

html[saved-theme="light"] body p {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-muted, rgb(91, 79, 74));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(91, 79, 74) none 0px;
  text-decoration-color: rgb(91, 79, 74);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-external-color, rgb(128, 0, 0));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration-color: rgb(128, 0, 0);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(128, 0, 0));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration-color: rgb(128, 0, 0);
}

html[saved-theme="light"] body a.internal-link.broken {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(128, 0, 0));
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(95, 79, 73);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body dl {
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body dt {
  color: rgb(95, 79, 73);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body ol > li {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ul > li {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(122, 109, 104));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--background-secondary, rgb(218, 187, 154));
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .table-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body table {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(95, 79, 73);
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
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: var(--table-text-color, rgb(95, 79, 73));
}

html[saved-theme="light"] body th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: var(--table-header-color, rgb(95, 79, 73));
}

html[saved-theme="light"] body thead {
  background-color: var(--background-secondary, rgb(218, 187, 154));
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(180, 145, 106);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(203, 170, 135));
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: var(--code-normal, rgb(95, 79, 73));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(203, 170, 135));
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
}`,
    images: `html[saved-theme="light"] body audio {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body figcaption {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body figure {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-secondary, rgb(218, 186, 151));
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body .footnotes {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
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
  border-bottom-color: rgb(122, 109, 104);
  border-left-color: rgb(122, 109, 104);
  border-right-color: rgb(122, 109, 104);
  border-top-color: rgb(122, 109, 104);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 196, 166);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 196, 166);
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
  background-color: rgb(122, 109, 104);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="col"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #c6a57f;
  --background-modifier-border-focus: #b4916a;
  --background-modifier-border-hover: #a8865f;
  --background-modifier-error: #cf1e33;
  --background-modifier-error-hover: #cf1e33;
  --background-modifier-error-rgb: 207, 30, 51;
  --background-modifier-form-field: #e1c4a6;
  --background-modifier-form-field-hover: #e1c4a6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #01903b;
  --background-modifier-success-rgb: 1, 144, 59;
  --background-primary: #e1c4a6;
  --background-primary-alt: #daba97;
  --background-secondary: #dabb9a;
  --background-secondary-alt: #cbaa87;
  --blockquote-border-color: #800000;
  --blur-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 207, 30, 51;
  --callout-color: var(--callout-default, 2, 95, 200);
  --callout-default: 2, 95, 200;
  --callout-error: 207, 30, 51;
  --callout-example: 95, 56, 214;
  --callout-fail: 207, 30, 51;
  --callout-important: 0, 158, 155;
  --callout-info: 2, 95, 200;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 193, 109, 24;
  --callout-radius: 4px;
  --callout-success: 1, 144, 59;
  --callout-summary: 0, 158, 155;
  --callout-tip: 0, 158, 155;
  --callout-title-weight: 600;
  --callout-todo: 2, 95, 200;
  --callout-warning: 193, 109, 24;
  --canvas-background: #e1c4a6;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c6a57f;
  --caret-color: #5f4f49;
  --checkbox-border-color: #7a6d68;
  --checkbox-border-color-hover: #5b4f4a;
  --checkbox-color: #800000;
  --checkbox-color-hover: #a00000;
  --checkbox-marker-color: #e1c4a6;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5b4f4a;
  --clickable-icon-radius: 0px;
  --code-background: #cbaa87;
  --code-border-color: #c6a57f;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #7a6d68;
  --code-function: #977400;
  --code-important: #c16d18;
  --code-keyword: #bf206d;
  --code-normal: #5f4f49;
  --code-operator: #cf1e33;
  --code-property: #009e9b;
  --code-punctuation: #5b4f4a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #01903b;
  --code-tag: #cf1e33;
  --code-value: #5f38d6;
  --collapse-icon-color: #7a6d68;
  --collapse-icon-color-collapsed: #800000;
  --color-accent: #800000;
  --color-accent-1: #800000;
  --color-accent-2: #a00000;
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #c6a57f;
  --divider-color-hover: #800000;
  --divider-vertical-height: 100%;
  --dropdown-background: #e1c4a6;
  --dropdown-background-hover: #daba97;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #e1c4a6;
  --flair-color: #5f4f49;
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-weight: 400;
  --graph-line: #a8865f;
  --graph-node: #5b4f4a;
  --graph-node-attachment: #977400;
  --graph-node-focused: #800000;
  --graph-node-tag: #01903b;
  --graph-node-unresolved: #7a6d68;
  --graph-text: #5f4f49;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #7a6d68;
  --heading-spacing: 2.5rem;
  --hr-color: #c6a57f;
  --interactive-accent: #800000;
  --interactive-accent-hover: #a00000;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #daba97;
  --interactive-normal: #e1c4a6;
  --link-color: #800000;
  --link-color-hover: #a00000;
  --link-external-color: #800000;
  --link-external-color-hover: #a00000;
  --link-unresolved-color: #800000;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.4em;
  --menu-background: #dabb9a;
  --menu-border-color: #a8865f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #e1c4a6;
  --pdf-page-background: #e1c4a6;
  --pdf-sidebar-background: #e1c4a6;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5b4f4a;
  --search-icon-color: #5b4f4a;
  --search-result-background: #e1c4a6;
  --setting-group-heading-color: #5f4f49;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #daba97;
  --setting-items-border-color: #c6a57f;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5b4f4a;
  --shiki-code-background: #cbaa87;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7a6d68;
  --shiki-code-function: #01903b;
  --shiki-code-important: #c16d18;
  --shiki-code-keyword: #bf206d;
  --shiki-code-normal: #5b4f4a;
  --shiki-code-property: #009e9b;
  --shiki-code-punctuation: #5b4f4a;
  --shiki-code-string: #977400;
  --shiki-code-value: #5f38d6;
  --shiki-gutter-border-color: #c6a57f;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7a6d68;
  --shiki-gutter-text-color-highlight: #5b4f4a;
  --shiki-highlight-green: rgba(1, 144, 59, 0.5);
  --shiki-highlight-green-background: rgba(1, 144, 59, 0.1);
  --shiki-highlight-neutral: #5b4f4a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(207, 30, 51, 0.5);
  --shiki-highlight-red-background: rgba(207, 30, 51, 0.1);
  --shiki-terminal-dots-color: #7a6d68;
  --shiki-tooltip-background: #d7b38d;
  --suggestion-background: #e1c4a6;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #cf1e33;
  --sync-avatar-color-2: #c16d18;
  --sync-avatar-color-3: #977400;
  --sync-avatar-color-4: #01903b;
  --sync-avatar-color-5: #009e9b;
  --sync-avatar-color-6: #025fc8;
  --sync-avatar-color-7: #5f38d6;
  --sync-avatar-color-8: #bf206d;
  --tab-background-active: #e1c4a6;
  --tab-divider-color: #a8865f;
  --tab-font-size: 14px;
  --tab-outline-color: #c6a57f;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #dabb9a;
  --tab-switcher-menubar-background: linear-gradient(to top, #dabb9a, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #800000;
  --tab-text-color: #7a6d68;
  --tab-text-color-active: #5b4f4a;
  --tab-text-color-focused: #5b4f4a;
  --tab-text-color-focused-active: #5b4f4a;
  --tab-text-color-focused-active-current: #5f4f49;
  --tab-text-color-focused-highlighted: #800000;
  --table-add-button-border-color: #c6a57f;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #800000;
  --table-drag-handle-color: #7a6d68;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #c6a57f;
  --table-header-border-width: 1px;
  --table-header-color: #5f4f49;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #800000;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #800000;
  --tag-color-hover: #800000;
  --tag-size: 0.875em;
  --text-accent: #800000;
  --text-accent-hover: #a00000;
  --text-error: #cf1e33;
  --text-faint: #7a6d68;
  --text-highlight-bg: #eac357;
  --text-muted: #5b4f4a;
  --text-normal: #5f4f49;
  --text-selection: #c7a78683;
  --text-success: #01903b;
  --text-warning: #c16d18;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: var(--background-secondary, rgba(2, 95, 200, 0.1));
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 0px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="cont"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #c6a57f;
  --background-modifier-border-focus: #b4916a;
  --background-modifier-border-hover: #a8865f;
  --background-modifier-error: #cf1e33;
  --background-modifier-error-hover: #cf1e33;
  --background-modifier-error-rgb: 207, 30, 51;
  --background-modifier-form-field: #e1c4a6;
  --background-modifier-form-field-hover: #e1c4a6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #01903b;
  --background-modifier-success-rgb: 1, 144, 59;
  --background-primary: #e1c4a6;
  --background-primary-alt: #daba97;
  --background-secondary: #dabb9a;
  --background-secondary-alt: #cbaa87;
  --blockquote-border-color: #800000;
  --blur-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 207, 30, 51;
  --callout-color: var(--callout-default, 2, 95, 200);
  --callout-default: 2, 95, 200;
  --callout-error: 207, 30, 51;
  --callout-example: 95, 56, 214;
  --callout-fail: 207, 30, 51;
  --callout-important: 0, 158, 155;
  --callout-info: 2, 95, 200;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 193, 109, 24;
  --callout-radius: 4px;
  --callout-success: 1, 144, 59;
  --callout-summary: 0, 158, 155;
  --callout-tip: 0, 158, 155;
  --callout-title-weight: 600;
  --callout-todo: 2, 95, 200;
  --callout-warning: 193, 109, 24;
  --canvas-background: #e1c4a6;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c6a57f;
  --caret-color: #5f4f49;
  --checkbox-border-color: #7a6d68;
  --checkbox-border-color-hover: #5b4f4a;
  --checkbox-color: #800000;
  --checkbox-color-hover: #a00000;
  --checkbox-marker-color: #e1c4a6;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5b4f4a;
  --clickable-icon-radius: 0px;
  --code-background: #cbaa87;
  --code-border-color: #c6a57f;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #7a6d68;
  --code-function: #977400;
  --code-important: #c16d18;
  --code-keyword: #bf206d;
  --code-normal: #5f4f49;
  --code-operator: #cf1e33;
  --code-property: #009e9b;
  --code-punctuation: #5b4f4a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #01903b;
  --code-tag: #cf1e33;
  --code-value: #5f38d6;
  --collapse-icon-color: #7a6d68;
  --collapse-icon-color-collapsed: #800000;
  --color-accent: #800000;
  --color-accent-1: #800000;
  --color-accent-2: #a00000;
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #c6a57f;
  --divider-color-hover: #800000;
  --divider-vertical-height: 100%;
  --dropdown-background: #e1c4a6;
  --dropdown-background-hover: #daba97;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #e1c4a6;
  --flair-color: #5f4f49;
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-weight: 400;
  --graph-line: #a8865f;
  --graph-node: #5b4f4a;
  --graph-node-attachment: #977400;
  --graph-node-focused: #800000;
  --graph-node-tag: #01903b;
  --graph-node-unresolved: #7a6d68;
  --graph-text: #5f4f49;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #7a6d68;
  --heading-spacing: 2.5rem;
  --hr-color: #c6a57f;
  --interactive-accent: #800000;
  --interactive-accent-hover: #a00000;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #daba97;
  --interactive-normal: #e1c4a6;
  --link-color: #800000;
  --link-color-hover: #a00000;
  --link-external-color: #800000;
  --link-external-color-hover: #a00000;
  --link-unresolved-color: #800000;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.4em;
  --menu-background: #dabb9a;
  --menu-border-color: #a8865f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #e1c4a6;
  --pdf-page-background: #e1c4a6;
  --pdf-sidebar-background: #e1c4a6;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5b4f4a;
  --search-icon-color: #5b4f4a;
  --search-result-background: #e1c4a6;
  --setting-group-heading-color: #5f4f49;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #daba97;
  --setting-items-border-color: #c6a57f;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5b4f4a;
  --shiki-code-background: #cbaa87;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7a6d68;
  --shiki-code-function: #01903b;
  --shiki-code-important: #c16d18;
  --shiki-code-keyword: #bf206d;
  --shiki-code-normal: #5b4f4a;
  --shiki-code-property: #009e9b;
  --shiki-code-punctuation: #5b4f4a;
  --shiki-code-string: #977400;
  --shiki-code-value: #5f38d6;
  --shiki-gutter-border-color: #c6a57f;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7a6d68;
  --shiki-gutter-text-color-highlight: #5b4f4a;
  --shiki-highlight-green: rgba(1, 144, 59, 0.5);
  --shiki-highlight-green-background: rgba(1, 144, 59, 0.1);
  --shiki-highlight-neutral: #5b4f4a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(207, 30, 51, 0.5);
  --shiki-highlight-red-background: rgba(207, 30, 51, 0.1);
  --shiki-terminal-dots-color: #7a6d68;
  --shiki-tooltip-background: #d7b38d;
  --suggestion-background: #e1c4a6;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #cf1e33;
  --sync-avatar-color-2: #c16d18;
  --sync-avatar-color-3: #977400;
  --sync-avatar-color-4: #01903b;
  --sync-avatar-color-5: #009e9b;
  --sync-avatar-color-6: #025fc8;
  --sync-avatar-color-7: #5f38d6;
  --sync-avatar-color-8: #bf206d;
  --tab-background-active: #e1c4a6;
  --tab-divider-color: #a8865f;
  --tab-font-size: 14px;
  --tab-outline-color: #c6a57f;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #dabb9a;
  --tab-switcher-menubar-background: linear-gradient(to top, #dabb9a, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #800000;
  --tab-text-color: #7a6d68;
  --tab-text-color-active: #5b4f4a;
  --tab-text-color-focused: #5b4f4a;
  --tab-text-color-focused-active: #5b4f4a;
  --tab-text-color-focused-active-current: #5f4f49;
  --tab-text-color-focused-highlighted: #800000;
  --table-add-button-border-color: #c6a57f;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #800000;
  --table-drag-handle-color: #7a6d68;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #c6a57f;
  --table-header-border-width: 1px;
  --table-header-color: #5f4f49;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #800000;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #800000;
  --tag-color-hover: #800000;
  --tag-size: 0.875em;
  --text-accent: #800000;
  --text-accent-hover: #a00000;
  --text-error: #cf1e33;
  --text-faint: #7a6d68;
  --text-highlight-bg: #eac357;
  --text-muted: #5b4f4a;
  --text-normal: #5f4f49;
  --text-selection: #c7a78683;
  --text-success: #01903b;
  --text-warning: #c16d18;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-bottom-width: 0px;
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-right-width: 0px;
  border-top-color: rgb(95, 79, 73);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  border-top-width: 0px;
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 0px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="container"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #c6a57f;
  --background-modifier-border-focus: #b4916a;
  --background-modifier-border-hover: #a8865f;
  --background-modifier-error: #cf1e33;
  --background-modifier-error-hover: #cf1e33;
  --background-modifier-error-rgb: 207, 30, 51;
  --background-modifier-form-field: #e1c4a6;
  --background-modifier-form-field-hover: #e1c4a6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #01903b;
  --background-modifier-success-rgb: 1, 144, 59;
  --background-primary: #e1c4a6;
  --background-primary-alt: #daba97;
  --background-secondary: #dabb9a;
  --background-secondary-alt: #cbaa87;
  --blockquote-border-color: #800000;
  --blur-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 207, 30, 51;
  --callout-color: var(--callout-default, 2, 95, 200);
  --callout-default: 2, 95, 200;
  --callout-error: 207, 30, 51;
  --callout-example: 95, 56, 214;
  --callout-fail: 207, 30, 51;
  --callout-important: 0, 158, 155;
  --callout-info: 2, 95, 200;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 193, 109, 24;
  --callout-radius: 4px;
  --callout-success: 1, 144, 59;
  --callout-summary: 0, 158, 155;
  --callout-tip: 0, 158, 155;
  --callout-title-weight: 600;
  --callout-todo: 2, 95, 200;
  --callout-warning: 193, 109, 24;
  --canvas-background: #e1c4a6;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c6a57f;
  --caret-color: #5f4f49;
  --checkbox-border-color: #7a6d68;
  --checkbox-border-color-hover: #5b4f4a;
  --checkbox-color: #800000;
  --checkbox-color-hover: #a00000;
  --checkbox-marker-color: #e1c4a6;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5b4f4a;
  --clickable-icon-radius: 0px;
  --code-background: #cbaa87;
  --code-border-color: #c6a57f;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #7a6d68;
  --code-function: #977400;
  --code-important: #c16d18;
  --code-keyword: #bf206d;
  --code-normal: #5f4f49;
  --code-operator: #cf1e33;
  --code-property: #009e9b;
  --code-punctuation: #5b4f4a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #01903b;
  --code-tag: #cf1e33;
  --code-value: #5f38d6;
  --collapse-icon-color: #7a6d68;
  --collapse-icon-color-collapsed: #800000;
  --color-accent: #800000;
  --color-accent-1: #800000;
  --color-accent-2: #a00000;
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #c6a57f;
  --divider-color-hover: #800000;
  --divider-vertical-height: 100%;
  --dropdown-background: #e1c4a6;
  --dropdown-background-hover: #daba97;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #e1c4a6;
  --flair-color: #5f4f49;
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-weight: 400;
  --graph-line: #a8865f;
  --graph-node: #5b4f4a;
  --graph-node-attachment: #977400;
  --graph-node-focused: #800000;
  --graph-node-tag: #01903b;
  --graph-node-unresolved: #7a6d68;
  --graph-text: #5f4f49;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #7a6d68;
  --heading-spacing: 2.5rem;
  --hr-color: #c6a57f;
  --interactive-accent: #800000;
  --interactive-accent-hover: #a00000;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #daba97;
  --interactive-normal: #e1c4a6;
  --link-color: #800000;
  --link-color-hover: #a00000;
  --link-external-color: #800000;
  --link-external-color-hover: #a00000;
  --link-unresolved-color: #800000;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.4em;
  --menu-background: #dabb9a;
  --menu-border-color: #a8865f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #e1c4a6;
  --pdf-page-background: #e1c4a6;
  --pdf-sidebar-background: #e1c4a6;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5b4f4a;
  --search-icon-color: #5b4f4a;
  --search-result-background: #e1c4a6;
  --setting-group-heading-color: #5f4f49;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #daba97;
  --setting-items-border-color: #c6a57f;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5b4f4a;
  --shiki-code-background: #cbaa87;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7a6d68;
  --shiki-code-function: #01903b;
  --shiki-code-important: #c16d18;
  --shiki-code-keyword: #bf206d;
  --shiki-code-normal: #5b4f4a;
  --shiki-code-property: #009e9b;
  --shiki-code-punctuation: #5b4f4a;
  --shiki-code-string: #977400;
  --shiki-code-value: #5f38d6;
  --shiki-gutter-border-color: #c6a57f;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7a6d68;
  --shiki-gutter-text-color-highlight: #5b4f4a;
  --shiki-highlight-green: rgba(1, 144, 59, 0.5);
  --shiki-highlight-green-background: rgba(1, 144, 59, 0.1);
  --shiki-highlight-neutral: #5b4f4a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(207, 30, 51, 0.5);
  --shiki-highlight-red-background: rgba(207, 30, 51, 0.1);
  --shiki-terminal-dots-color: #7a6d68;
  --shiki-tooltip-background: #d7b38d;
  --suggestion-background: #e1c4a6;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #cf1e33;
  --sync-avatar-color-2: #c16d18;
  --sync-avatar-color-3: #977400;
  --sync-avatar-color-4: #01903b;
  --sync-avatar-color-5: #009e9b;
  --sync-avatar-color-6: #025fc8;
  --sync-avatar-color-7: #5f38d6;
  --sync-avatar-color-8: #bf206d;
  --tab-background-active: #e1c4a6;
  --tab-divider-color: #a8865f;
  --tab-font-size: 14px;
  --tab-outline-color: #c6a57f;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #dabb9a;
  --tab-switcher-menubar-background: linear-gradient(to top, #dabb9a, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #800000;
  --tab-text-color: #7a6d68;
  --tab-text-color-active: #5b4f4a;
  --tab-text-color-focused: #5b4f4a;
  --tab-text-color-focused-active: #5b4f4a;
  --tab-text-color-focused-active-current: #5f4f49;
  --tab-text-color-focused-highlighted: #800000;
  --table-add-button-border-color: #c6a57f;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #800000;
  --table-drag-handle-color: #7a6d68;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #c6a57f;
  --table-header-border-width: 1px;
  --table-header-color: #5f4f49;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #800000;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #800000;
  --tag-color-hover: #800000;
  --tag-size: 0.875em;
  --text-accent: #800000;
  --text-accent-hover: #a00000;
  --text-error: #cf1e33;
  --text-faint: #7a6d68;
  --text-highlight-bg: #eac357;
  --text-muted: #5b4f4a;
  --text-normal: #5f4f49;
  --text-selection: #c7a78683;
  --text-success: #01903b;
  --text-warning: #c16d18;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: var(--default-border-radius, 4px);
  border-bottom-width: 0px;
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-right-width: 0px;
  border-top-color: rgb(95, 79, 73);
  border-top-left-radius: 0px;
  border-top-right-radius: var(--default-border-radius, 4px);
  border-top-width: 0px;
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-right: 0px;
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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
  color: rgb(95, 79, 73);
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary, rgb(218, 187, 154));
  color: rgb(95, 79, 73);
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

html[saved-theme="light"] body .callout[data-callout="col"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cont"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: var(--background-secondary, rgb(225, 196, 166));
  border-bottom-color: rgb(198, 165, 127);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(95, 79, 73));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(225, 196, 166));
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(180, 145, 106);
  border-right-color: rgb(180, 145, 106);
  border-top-color: rgb(180, 145, 106);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(180, 145, 106);
  border-right-color: rgb(180, 145, 106);
  border-top-color: rgb(180, 145, 106);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(218, 187, 154);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(95, 79, 73);
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
  color: rgb(128, 0, 0);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(95, 79, 73));
  font-family: var(--h1-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(95, 79, 73));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(95, 79, 73));
  font-family: var(--h2-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(95, 79, 73));
  font-family: var(--inline-title-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(95, 79, 73));
  font-family: var(--h3-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(95, 79, 73));
  font-family: var(--h4-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(95, 79, 73));
  font-family: var(--h5-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(95, 79, 73));
  font-family: var(--h6-font, "??", "??", "CMU Typewriter Text");
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
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
  color: var(--nav-item-color, rgb(91, 79, 74));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(91, 79, 74));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(95, 79, 73);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(91, 79, 74);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(91, 79, 74));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--background-secondary, rgb(218, 187, 154));
  border-bottom-color: rgb(198, 165, 127);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--status-bar-text-color, rgb(91, 79, 74));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(91, 79, 74);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(91, 79, 74));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(91, 79, 74));
}

html[saved-theme="light"] body ul.section-ul {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(91, 79, 74);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(91, 79, 74));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(91, 79, 74);
  stroke: rgb(91, 79, 74);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(122, 109, 104));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(95, 79, 73));
}

html[saved-theme="light"] body .canvas-node-group {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(225, 196, 166));
  border-color: rgb(95, 79, 73);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(198, 165, 127);
  color: var(--table-header-color, rgb(95, 79, 73));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: var(--text-muted, rgb(91, 79, 74));
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(198, 165, 127);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(128, 0, 0));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-secondary, rgb(225, 196, 166));
  color: var(--text-normal, rgb(95, 79, 73));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(218, 187, 154));
  border-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--background-secondary, rgb(218, 187, 154));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(95, 79, 73);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--background-secondary, rgb(218, 187, 154));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(95, 79, 73));
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body abbr {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body details {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  margin-left: calc(var(--ribbon-width)*-1 + 10px);
  margin-top: calc(var(--header-height)*-1 + 10px);
}

html[saved-theme="light"] body input[type=text] {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: var(--text-normal, rgb(91, 79, 74));
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--background-secondary, rgb(203, 170, 135));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: var(--code-normal, rgb(95, 79, 73));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
}

html[saved-theme="light"] body progress {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body sub {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body summary {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body sup {
  color: rgb(95, 79, 73);
  vertical-align: baseline;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--background-secondary, rgba(138, 92, 245, 0.1));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(128, 0, 0));
}`,
  },
  classSettings: {
    "smooth-mode": {
      general: `.floating-sides.smooth-mode {
--margin-top:calc(var(--header-height) + 5px);
}

.smooth-mode {
--divider-color:var(--in-between-background);
--main-controls-width:8em;
}

.smooth-mode .titlebar-button-container.mod-right {
width:var(--main-controls-width);
border-bottom-left-radius:var(--default-border-radius);
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs, .smooth-mode .workspace-tabs.mod-top.mod-top-right-space {
background-color:var(--in-between-background);
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container {
padding-left:5px;
padding-top:5px;
padding-bottom:3px;
margin-right:5px;
background-color:var(--in-between-background);
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner {
gap:5px;
--tab-divider-color:transparent;
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
border-radius:var(--default-border-radius);
border:1px solid var(--background-secondary);
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header.is-active {
border:1px solid var(--color-accent);
}

.smooth-mode .workspace-split.mod-horizontal.mod-left-split .workspace-tabs .workspace-tab-container .workspace-leaf, .smooth-mode .workspace-split.mod-horizontal.mod-right-split .workspace-tabs .workspace-tab-container .workspace-leaf, .smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-container .workspace-leaf, .smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-new-tab .clickable-icon, .smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-tab-list .clickable-icon {
border-radius:var(--default-border-radius);
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .sidebar-toggle-button.mod-right {
padding-bottom:8px;
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .sidebar-toggle-button.mod-right .clickable-icon {
padding-bottom:5px;
border-radius:var(--default-border-radius);
}

.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-container {
padding:10px 5px;
background-color:var(--in-between-background);
}

.smooth-mode .workspace-split.mod-horizontal.mod-left-split :not(.is-sidedock-collpased), .smooth-mode .workspace-split.mod-horizontal.mod-right-split :not(.is-sidedock-collpased) {
--frame-right-space:0px;
}

.smooth-mode .workspace-split.mod-horizontal.mod-left-split .workspace-tabs .workspace-tab-header-container, .smooth-mode .workspace-split.mod-horizontal.mod-right-split .workspace-tabs .workspace-tab-header-container {
padding:5px 5px 2px;
background-color:var(--in-between-background);
}

.smooth-mode .workspace-split.mod-horizontal.mod-left-split .workspace-tabs .workspace-tab-header-container-inner, .smooth-mode .workspace-split.mod-horizontal.mod-right-split .workspace-tabs .workspace-tab-header-container-inner {
background-color:var(--tab-container-background);
border-radius:var(--default-border-radius);
}

.smooth-mode .workspace-ribbon.side-dock-ribbon.mod-left, .smooth-mode .workspace-split.mod-horizontal.mod-left-split .workspace-tabs .workspace-tab-container, .smooth-mode .workspace-split.mod-horizontal.mod-right-split .workspace-tabs .workspace-tab-container {
padding:10px 5px;
background-color:var(--in-between-background);
}

.smooth-mode .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container {
margin-right:var(--main-controls-width);
}

.smooth-mode .workspace-ribbon.side-dock-ribbon.mod-left .side-dock-actions, .smooth-mode .workspace-ribbon.side-dock-ribbon.mod-left .side-dock-settings {
border-radius:var(--default-border-radius);
background-color:var(--background-secondary);
}

.smooth-mode .workspace-ribbon.side-dock-ribbon.mod-left .sidebar-toggle-button.mod-left .clickable-icon {
border-radius:var(--default-border-radius);
background-color:var(--in-between-background);
}

.smooth-mode .status-bar {
margin-bottom:10px;
margin-right:4px;
border-radius:var(--default-border-radius);
border:0;
}`,
      dark: `.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
background-color:var(--background-primary);
}

.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover, .theme-light .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
background-color:var(--background-secondary);
}

.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover * {
transition:background-color var(--hover-animation-duration) ease-in-out;
background-color:var(--background-secondary);
}

.color-scheme-golden-book:not(.separate-color-scheme).smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:#460c0c;
--tab-text-color-focused-active-current:#460c0c;
}

.separate-color-scheme.dm-color-scheme-golden-book.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:#460c0c;
--tab-text-color-focused-active-current:#460c0c;
}`,
      light: `.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover, .theme-light .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
background-color:var(--background-secondary);
}

.theme-light .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover {
background-color:var(--background-primary);
}

.theme-light .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover * {
transition:background-color var(--hover-animation-duration) ease-in-out;
background-color:var(--background-primary);
}`,
    },
    "minimal-mode": {
      general: `:not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover) .workspace-tab-header {
opacity:0;
}

.floating-sides.sidebar-hide {
--workspace-split-left-offset:0px;
}

.floating-sides.root-tabs-hover .workspace {
--margin-top-animation-delay:0s;
}

.floating-sides.root-tabs-hover .workspace:has(.workspace-tabs.mod-active.mod-top .workspace-tab-header-container:not(:hover)) {
--margin-top:calc(var(--header-height) / 3);
--margin-top-animation-delay:1s;
}

.floating-sides.sidebar-hover .workspace.is-left-sidedock-open:has(.workspace-ribbon.side-dock-ribbon.mod-left:not(:hover)) {
--workspace-split-left-offset:10px;
}

:not(.is-mobile,.smooth-mode).minimal-mode {
--frame-right-space:0px;
}

:not(.is-mobile,.smooth-mode).minimal-mode .titlebar-button-container.mod-right, :not(.is-mobile,.smooth-mode).minimal-mode .workspace-ribbon.side-dock-ribbon.mod-left .sidebar-toggle-button.mod-left, :not(.is-mobile,.smooth-mode).minimal-mode .workspace-ribbon.side-dock-ribbon.mod-left::before, :not(.is-mobile,.smooth-mode).minimal-mode .workspace-tabs.mod-top-right-space .workspace-tab-header-container:after {
display:none;
}

:not(.is-mobile,.smooth-mode).minimal-mode .workspace-ribbon.side-dock-ribbon.mod-left {
margin:0;
}

:not(.is-mobile,.smooth-mode).sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left {
transition:margin-left var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
margin-left:calc(-1*var(--ribbon-width) + 10px);
}

:not(.is-mobile,.smooth-mode).sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left .side-dock-actions, :not(.is-mobile,.smooth-mode).sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left .side-dock-settings {
transition:opacity var(--default-animation-duration) ease-in-out;
opacity:0;
}

:not(.is-mobile,.smooth-mode).sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left:hover {
margin-left:0;
}

:not(.is-mobile,.smooth-mode).sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left:hover .side-dock-actions, :not(.is-mobile,.smooth-mode).sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left:hover .side-dock-settings {
opacity:1;
}

:not(.is-mobile,.smooth-mode).sidebar-hide .workspace-ribbon.side-dock-ribbon.mod-left {
display:none;
}

:not(.is-mobile,.smooth-mode).minimal-mode .nav-folder.mod-root>.nav-folder-title {
display:none!important;
}

:not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container {
transition:margin-top var(--default-animation-duration) ease-in-out,opacity var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover) {
border:0;
margin-top:calc(-1*var(--header-height) + 10px);
background-color:var(--background-secondary);
}

:not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
transition:opacity var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
position:absolute;
width:100%;
z-index:1;
}

:not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
opacity:0;
}

:not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container {
display:none;
}

:not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
transition:opacity var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
background-color:var(--background-secondary);
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header:not(:hover,:focus-within,:active,:has(.has-active-menu)) .view-actions, :not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header:not(:hover,:focus-within,:active,:has(.has-active-menu)) .view-header-nav-buttons, :not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) .workspace-tab-header {
opacity:0;
}

:not(.is-mobile,.smooth-mode).nav-header-hover .workspace-split.mod-horizontal.mod-left-split .nav-header, :not(.is-mobile,.smooth-mode).nav-header-hover .workspace-split.mod-horizontal.mod-right-split .nav-header {
padding-top:2px;
padding-bottom:2px;
transition:opacity var(--default-animation-duration) ease-in-out,height var(--default-animation-duration) ease-in-out;
height:30px;
}

:not(.is-mobile,.smooth-mode).nav-header-hover .workspace-split.mod-horizontal.mod-left-split .nav-header:not(:hover), :not(.is-mobile,.smooth-mode).nav-header-hover .workspace-split.mod-horizontal.mod-right-split .nav-header:not(:hover) {
height:15px;
opacity:0;
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .sidebar-toggle-button {
transition:height var(--default-animation-duration) ease-in-out,opacity var(--default-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container:not(:hover) {
animation-duration:1.25s;
animation-name:slow-fade-out;
height:calc(var(--header-height)/3);
opacity:0;
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container:not(:hover) .sidebar-toggle-button {
animation-duration:1.25s;
animation-name:slow-fade-out;
height:calc(var(--header-height)/3);
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .workspace-tab-header-container-inner {
max-width:90%;
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header {
display:flex;
flex:1 1 auto;
width:100%;
max-width:100%;
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .workspace-tab-header-spacer {
display:block;
width:25px;
height:auto;
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header {
transition:height var(--hover-animation-duration) ease-in-out,opacity var(--hover-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header:not(:hover,:focus-within,:active,:has(.has-active-menu)) {
height:20px;
}`,
      dark: `.color-scheme-golden-book:not(.separate-color-scheme).theme-dark :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover), .separate-color-scheme.dm-color-scheme-golden-book.theme-dark :not(.is-mobile,.smooth-mode).sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
opacity:0;
background-color:var(--background-secondary);
}`,
    },
    "sidebar-hover": {
      general: `.floating-sides.minimal-mode.sidebar-hover .workspace.is-left-sidedock-open:has(.workspace-ribbon.side-dock-ribbon.mod-left:not(:hover)) {
--workspace-split-left-offset:10px;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left {
transition:margin-left var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
margin-left:calc(-1*var(--ribbon-width) + 10px);
}

:not(.is-mobile,.smooth-mode).minimal-mode.sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left .side-dock-actions, :not(.is-mobile,.smooth-mode).minimal-mode.sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left .side-dock-settings {
transition:opacity var(--default-animation-duration) ease-in-out;
opacity:0;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left:hover {
margin-left:0;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left:hover .side-dock-actions, :not(.is-mobile,.smooth-mode).minimal-mode.sidebar-hover .workspace-ribbon.side-dock-ribbon.mod-left:hover .side-dock-settings {
opacity:1;
}`,
    },
    "sidebar-hide": {
      general: `.floating-sides.minimal-mode.sidebar-hide {
--workspace-split-left-offset:0px;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sidebar-hide .workspace-ribbon.side-dock-ribbon.mod-left {
display:none;
}`,
    },
    "sides-tabs-hover": {
      general: `:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover) .workspace-tab-header {
opacity:0;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container {
transition:margin-top var(--default-animation-duration) ease-in-out,opacity var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container:not(:hover) {
border:0;
margin-top:calc(-1*var(--header-height) + 10px);
background-color:var(--background-secondary);
}

:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
transition:opacity var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
position:absolute;
width:100%;
z-index:1;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
opacity:0;
}`,
      dark: `.color-scheme-golden-book:not(.separate-color-scheme).theme-dark :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover), .separate-color-scheme.dm-color-scheme-golden-book.theme-dark :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
opacity:0;
background-color:var(--background-secondary);
}`,
    },
    "sides-tabs-hide": {
      general: `:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-left-space .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs.mod-top.mod-top-right-space .workspace-tab-header-container {
display:none;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
transition:opacity var(--default-animation-duration) ease-in-out,background-color var(--default-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover), :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
background-color:var(--background-secondary);
}

:not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) .workspace-tab-header, :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hide .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) .workspace-tab-header {
opacity:0;
}`,
    },
    "nav-header-hover": {
      general: `:not(.is-mobile,.smooth-mode).minimal-mode.nav-header-hover .workspace-split.mod-horizontal.mod-left-split .nav-header, :not(.is-mobile,.smooth-mode).minimal-mode.nav-header-hover .workspace-split.mod-horizontal.mod-right-split .nav-header {
padding-top:2px;
padding-bottom:2px;
transition:opacity var(--default-animation-duration) ease-in-out,height var(--default-animation-duration) ease-in-out;
height:30px;
}

:not(.is-mobile,.smooth-mode).minimal-mode.nav-header-hover .workspace-split.mod-horizontal.mod-left-split .nav-header:not(:hover), :not(.is-mobile,.smooth-mode).minimal-mode.nav-header-hover .workspace-split.mod-horizontal.mod-right-split .nav-header:not(:hover) {
height:15px;
opacity:0;
}`,
    },
    "root-tabs-hover": {
      general: `.floating-sides.minimal-mode.root-tabs-hover .workspace {
--margin-top-animation-delay:0s;
}

.floating-sides.minimal-mode.root-tabs-hover .workspace:has(.workspace-tabs.mod-active.mod-top .workspace-tab-header-container:not(:hover)) {
--margin-top:calc(var(--header-height) / 3);
--margin-top-animation-delay:1s;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header:not(:hover,:focus-within,:active,:has(.has-active-menu)) .view-actions, :not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header:not(:hover,:focus-within,:active,:has(.has-active-menu)) .view-header-nav-buttons {
opacity:0;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container, :not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .sidebar-toggle-button {
transition:height var(--default-animation-duration) ease-in-out,opacity var(--default-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container:not(:hover) {
animation-duration:1.25s;
animation-name:slow-fade-out;
height:calc(var(--header-height)/3);
opacity:0;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container:not(:hover) .sidebar-toggle-button {
animation-duration:1.25s;
animation-name:slow-fade-out;
height:calc(var(--header-height)/3);
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .workspace-tab-header-container-inner {
max-width:90%;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header {
display:flex;
flex:1 1 auto;
width:100%;
max-width:100%;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-header-container .workspace-tab-header-spacer {
display:block;
width:25px;
height:auto;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header {
transition:height var(--hover-animation-duration) ease-in-out,opacity var(--hover-animation-duration) ease-in-out;
}

:not(.is-mobile,.smooth-mode).minimal-mode.root-tabs-hover .workspace-split.mod-vertical.mod-root .workspace-tab-container .view-header:not(:hover,:focus-within,:active,:has(.has-active-menu)) {
height:20px;
}`,
    },
    "color-scheme-ukiyo": {
      dark: `.color-scheme-ukiyo:not(.separate-color-scheme).theme-dark, .color-scheme-ukiyo:not(.separate-color-scheme).theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.color-scheme-ukiyo:not(.separate-color-scheme).theme-dark {
--color-base-00:#253847;
--color-base-05:var(--color-base-30);
--code-background:#1d2d3a;
--color-base-10:#25333f;
--color-base-20:#233241;
--color-base-25:#284052;
--color-base-30:#2e505a;
--color-base-40:#335a5a;
--color-base-50:#48867d;
--color-base-70:#5fa096;
--color-base-100:#d0d0d0;
--background-modifier-message:#082237;
--color-accent:#2babb5;
--color-accent-1:#2babb5;
--color-accent-2:#35bbc4;
--activeline:#2a3f528f;
--text-selection:#2e4253;
--color-bold:#3ec28b;
--color-italic:#74ccff;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#e04242;
--in-between-background:#192a35;
}`,
      light: `.color-scheme-ukiyo:not(.separate-color-scheme).theme-dark, .color-scheme-ukiyo:not(.separate-color-scheme).theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.color-scheme-ukiyo:not(.separate-color-scheme).theme-light {
--color-base-00:#e6f0ff;
--color-base-05:#d2e1f9;
--color-base-10:#d1e3ff;
--color-base-20:#e1edff;
--color-base-25:#cde1ff;
--color-base-30:#c9d9f1;
--color-base-40:#c9d9f1;
--color-base-50:#4069bf;
--color-base-70:#5079d1;
--color-base-100:#254da1;
--background-modifier-message:#adceff;
--color-accent:#2b9cb8;
--color-accent-1:#2b9cb8;
--color-accent-2:#30b4d4;
--activeline:#d0e3ff68;
--text-selection:#bdd8ff7d;
--color-bold:#42b3a9;
--color-italic:#379eda;
--text-highlight-bg:#ffdec6;
--heading-formatting-color:#e67979;
--in-between-background:#d6e6fd;
}`,
    },
    "color-scheme-golden-coffee": {
      dark: `.color-scheme-golden-coffee:not(.separate-color-scheme).theme-dark, .color-scheme-golden-coffee:not(.separate-color-scheme).theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-message:#2c1e14;
--color-accent-1:var(--color-accent);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.color-scheme-golden-coffee:not(.separate-color-scheme).theme-dark {
--color-base-00:#402e22;
--color-base-05:#5f4c45;
--color-base-10:#4f3626;
--color-base-20:#473224;
--color-base-25:#583f2e;
--color-base-30:#5f4630;
--color-base-40:#644a33;
--color-base-50:#ac8b6e;
--color-base-70:#b9987c;
--color-base-100:#dfc2a0;
--color-accent:#e6bb57;
--color-accent-2:#f5ca6c;
--activeline:#5b3d2895;
--text-selection:#825f4795;
--color-bold:#ce631c;
--color-italic:#da9517;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#e04242;
--in-between-background:#36261b;
}`,
      light: `.color-scheme-golden-coffee:not(.separate-color-scheme).theme-dark, .color-scheme-golden-coffee:not(.separate-color-scheme).theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-message:#2c1e14;
--color-accent-1:var(--color-accent);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.color-scheme-golden-coffee:not(.separate-color-scheme).theme-light {
--color-base-00:#fff3e7;
--color-base-05:#f5dcc3;
--color-base-10:#fcebd9;
--color-base-20:#fae7d2;
--color-base-25:#f3dbc1;
--color-base-30:#e0c1a0;
--color-base-40:#d6b086;
--color-base-50:#c37e30;
--color-base-70:#cf8a3a;
--color-base-100:#97653c;
--color-accent:#d83939;
--color-accent-2:#ec5555;
--activeline:#ffe2c4d1;
--text-selection:#efddcacb;
--color-bold:#b36b29;
--color-italic:#d88405;
--text-highlight-bg:#ffd3a4cb;
--heading-formatting-color:#da7b64;
--in-between-background:#efdac3;
}`,
    },
    "color-scheme-golden-book": {
      dark: `.color-scheme-golden-book:not(.separate-color-scheme).theme-dark {
--color-base-00:#f1ddcd;
--color-base-05:var(--color-base-30);
--color-base-10:#ddc1ab;
--color-base-20:#64514d;
--color-base-25:#7d645f;
--color-base-30:#554441;
--color-base-35:var(--color-base-30);
--color-base-40:#e4cdba;
--color-base-50:#982222;
--color-base-70:#a72a2a;
--color-base-100:#460c0c;
--background-modifier-message:#43312e;
--color-accent:#ce7726;
--color-accent-1:#ce7726;
--color-accent-2:#db791e;
--activeline:#ead2be;
--text-selection:#e8a46474;
--color-bold:#460c0c;
--color-italic:#460c0c;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#962a2a;
--in-between-background:#4d3a37;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
--color-red-rgb:207, 30, 51;
--color-red:#cf1e33;
--color-orange-rgb:193, 109, 24;
--color-orange:#c16d18;
--color-yellow-rgb:151, 116, 0;
--color-yellow:#977400;
--color-green-rgb:1, 144, 59;
--color-green:#01903b;
--color-cyan-rgb:0, 158, 155;
--color-cyan:#009e9b;
--color-blue-rgb:2, 95, 200;
--color-blue:#025fc8;
--color-purple-rgb:95, 56, 214;
--color-purple:#5f38d6;
--color-pink-rgb:191, 32, 109;
--color-pink:#bf206d;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark [class^=markdown-] {
background-color:var(--color-base-00);
--background-secondary:#e4cdba;
--background-secondary-alt:#dec5b1;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark [class^=markdown-] table {
--color-base-40:var(--table-header-border-color);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark :is(.workspace-tab-container,.workspace-tab-header-container,.workspace-ribbon,.suggestion):not(:has([class^=markdown-])) {
--tab-text-color-active:#f7e8cf;
--tab-text-color-focused-active-current:#f7e8cf;
--icon-color:var(--color-base-40);
--icon-color-focused:#f7e8cf;
--icon-color-active:#f7e8cf;
--icon-color-hover:#f7e8cf;
--search-icon-color:var(--icon-color);
--vault-name-color:var(--color-base-40);
--nav-collapse-icon-color:var(--icon-color);
--nav-item-color:var(--color-base-40);
--nav-item-color-active:var(--color-base-40);
--nav-item-color-hover:#f7e8cf;
--text-normal:#dfc9b8;
--text-faint:#a18680;
--text-muted:#b19791;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .workspace-ribbon:hover {
background-color:var(--background-secondary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header.is-active, .color-scheme-golden-book:not(.separate-color-scheme).smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:#460c0c;
--tab-text-color-focused-active-current:#460c0c;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
opacity:0;
background-color:var(--background-secondary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:var(--background-primary);
--tab-text-color-focused-active-current:var(--background-primary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header.is-active:hover * {
color:#460c0c;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover {
color:var(--text-normal)!important;
--tab-text-color-focused-active-current:var(--text-normal)!important;
--tab-text-color-focused:var(--text-normal)!important;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .workspace-split.mod-vertical.mod-root .view-header {
--background-secondary-alt:transparent;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .status-bar {
--status-bar-text-color:var(--background-primary);
--text-normal:var(--background-primary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .suggestion-container.mod-search-suggestion .suggestion {
color:#dfc9b8;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .suggestion-container.mod-search-suggestion .suggestion-item.is-selected {
background-color:var(--background-secondary-alt);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .suggestion-container .suggestion-item.is-selected {
background-color:var(--activeline);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .copy-code-button:hover {
background-color:#dec5b1;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .tree-item-self.search-result-file-title.is-clickable * {
--text-normal:#f7e8cf;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .search-result-file-matched-text {
--text-normal:#554441;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .search-result-file-match {
color:#554441;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .notice, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .titlebar-button-container.mod-right, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .tooltip {
color:#dfc9b8;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .menu {
background-color:var(--background-secondary);
color:var(--color-base-10);
--text-muted:#ff3c5d;
--text-faint:#ff4059;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .prompt {
--background-modifier-hover:#e6cfbd;
--code-background:#d7bca7;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout .vertical-tab-header, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout select.dropdown, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark button {
color:var(--background-primary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark button.mod-warning {
background-color:var(--background-modifier-error);
color:var(--text-on-accent);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian .cm-hmd-frontmatter, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian pre.HyperMD-codeblock, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout select.dropdown option {
color:var(--text-normal);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout .search-input-container {
--search-icon-color:var(--background-primary);
background-color:var(--background-secondary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout .search-input-container * {
color:var(--background-primary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout input, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout input::placeholder {
color:var(--background-primary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .modal.mod-settings.mod-sidebar-layout .setting-hotkey {
background-color:var(--background-secondary);
color:var(--background-primary);
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-atom, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian .cm-math.cm-atom, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-atom {
color:#d87300;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-number, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian .cm-math.cm-number, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-number {
color:#9925ff;
}

.color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-keyword, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian .cm-math.cm-keyword, .color-scheme-golden-book:not(.separate-color-scheme).theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-keyword {
color:#00a7aa;
}`,
    },
    "color-scheme-alchemy": {
      dark: `.color-scheme-alchemy:not(.separate-color-scheme).theme-dark, .color-scheme-alchemy:not(.separate-color-scheme).theme-light {
--color-base-05:var(--color-base-30);
--color-base-35:var(--color-base-30);
--text-highlight-bg:#a0632666;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.color-scheme-alchemy:not(.separate-color-scheme).theme-dark {
--color-base-00:#171717;
--color-base-10:#282523;
--color-base-20:#1a1a1a;
--color-base-25:#232323;
--color-base-30:#292929;
--color-base-40:#373738;
--color-base-50:#8c7c6d;
--color-base-70:#9e9184;
--color-base-100:#c0bcb5;
--background-modifier-message:#000000;
--color-accent:#978159;
--color-accent-1:#978159;
--color-accent-2:#b1996c;
--activeline:#242424bf;
--text-selection:#474747a2;
--color-bold:#7b9cac;
--color-italic:#a07f6c;
--heading-formatting-color:#8f2d2d;
--in-between-background:#101010;
}`,
      light: `.color-scheme-alchemy:not(.separate-color-scheme).theme-dark, .color-scheme-alchemy:not(.separate-color-scheme).theme-light {
--color-base-05:var(--color-base-30);
--color-base-35:var(--color-base-30);
--text-highlight-bg:#a0632666;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.color-scheme-alchemy:not(.separate-color-scheme).theme-light {
--color-base-00:#0f1d1a;
--code-background:#122a25;
--color-base-10:#0b1614;
--color-base-20:#10201d;
--color-base-25:#1e332f;
--color-base-30:#253a35;
--color-base-40:#253a35;
--color-base-50:#a08d57;
--color-base-70:#ad9962;
--color-base-100:#cabbab;
--background-modifier-message:#12312b;
--color-accent:#b49967;
--color-accent-1:#b49967;
--color-accent-2:#c9ab73;
--activeline:#22373270;
--text-selection:#334b45b5;
--color-bold:#359e87;
--color-italic:#1cacb4;
--heading-formatting-color:#a83d3d;
--in-between-background:#0c1815;
}`,
    },
    "color-scheme-rose-shadow": {
      dark: `.color-scheme-rose-shadow:not(.separate-color-scheme).theme-dark {
--color-base-00:#3b252d;
--color-base-05:var(--color-base-30);
--color-base-10:#35242a;
--color-base-20:#412730;
--color-base-25:#4d2d38;
--color-base-30:#773d477e;
--color-base-35:var(--color-base-30);
--color-base-40:#c2937b;
--color-base-50:#b3826a;
--color-base-70:#c2937b;
--color-base-100:#d3a590;
--background-modifier-message:#28171d;
--color-accent:#b884c4;
--color-accent-1:#b884c4;
--color-accent-2:#c693d1;
--activeline:#4e2d3896;
--text-selection:#6e425296;
--color-bold:#fccab1;
--color-italic:#eccfe8;
--text-highlight-bg:#b053bc2e;
--heading-formatting-color:#d12e6d;
--in-between-background:#321e25;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}`,
    },
    "color-scheme-custom": {
      dark: `.color-scheme-custom:not(.separate-color-scheme).theme-dark {
--color-base-00:var(--color-scheme-custom-background-primary, #372d29);
--color-base-05:var(--color-scheme-custom-background-secondary-alt, #413632);
--color-base-10:var(--color-scheme-custom-background-primary-alt, #2b2723);
--color-base-20:var(--color-scheme-custom-background-secondary, #413632);
--color-base-25:var(
    --color-scheme-custom-background-modifier-form-field,
    #2b2723
  );
--color-base-30:var(
    --color-scheme-custom-background-modifier-border,
    #504431
  );
--color-base-35:var(
    --color-scheme-custom-background-modifier-border-hover,
    #645743
  );
--color-base-40:var(
    --color-scheme-custom-background-modifier-border-focus,
    #504431
  );
--color-base-50:var(--color-scheme-custom-text-faint, #868074);
--color-base-70:var(--color-scheme-custom-text-muted, #b2a699);
--color-base-100:var(--color-scheme-custom-text-normal, #ccc2b7);
--background-modifier-message:var(
    --color-scheme-custom-tooltip-notice-background-color,
    #281f1b
  );
--color-accent:var(--color-scheme-custom-color-accent, #ba945f);
--color-accent-1:var(--color-accent);
--color-accent-2:var(--color-scheme-custom-color-accent-hover, #e0ba86);
--titlebar-background-focused:var(--color-base-20);
--activeline:var(--color-scheme-custom-activeline, #51454140);
--text-selection:var(--color-scheme-custom-text-selection, #6154508f);
--color-bold:var(--color-scheme-custom-bold, --accent);
--color-italic:var(--color-scheme-custom-italic, #e77a59);
--text-highlight-bg:var(--color-scheme-custom-highlight-bg, #926b22e6);
--heading-formatting-color:var(
    --color-scheme-custom-heading-formatting-color,
    #c72626
  );
--in-between-background:var(
    --color-scheme-custom-in-between-background,
    #2e2420
  );
}`,
      light: `.color-scheme-custom:not(.separate-color-scheme).theme-light {
--color-base-00:var(--color-scheme-custom-background-primary, #e1c4a6);
--color-base-05:var(--color-scheme-custom-background-secondary-alt, #cbaa87);
--color-base-10:var(--color-scheme-custom-background-primary-alt, #daba97);
--color-base-20:var(--color-scheme-custom-background-secondary, #dabb9a);
--color-base-25:var(
    --color-scheme-custom-background-modifier-form-field,
    #4c4743
  );
--color-base-30:var(
    --color-scheme-custom-background-modifier-border,
    #c6a57f
  );
--color-base-35:var(
    --color-scheme-custom-background-modifier-border-hover,
    #a8865f
  );
--color-base-40:var(
    --color-scheme-custom-background-modifier-border-focus,
    #b4916a
  );
--color-base-50:var(--color-scheme-custom-text-faint, #7a6d68);
--color-base-70:var(--color-scheme-custom-text-muted, #5b4f4a);
--color-base-100:var(--color-scheme-custom-text-normal, #5f4f49);
--background-modifier-message:var(
    --color-scheme-custom-tooltip-notice-background-color,
    #d7b38d
  );
--color-accent:var(--color-scheme-custom-color-accent, #800000);
--color-accent-1:var(--color-accent);
--color-accent-2:var(--color-scheme-custom-color-accent-hover, #a00000);
--titlebar-background-focused:var(--color-base-20);
--activeline:var(--color-scheme-custom-activeline, #d4b4946a);
--text-selection:var(--color-scheme-custom-text-selection, #c7a78683);
--color-bold:var(--color-scheme-custom-bold, #bd5757);
--color-italic:var(--color-scheme-custom-italic, #ae612b);
--text-highlight-bg:var(--color-scheme-custom-highlight-bg, #eac357);
--heading-formatting-color:var(
    --color-scheme-custom-heading-formatting-color,
    #d34747
  );
--in-between-background:var(
    --color-scheme-custom-in-between-background,
    #d4af88
  );
--color-red-rgb:207, 30, 51;
--color-red:#cf1e33;
--color-orange-rgb:193, 109, 24;
--color-orange:#c16d18;
--color-yellow-rgb:151, 116, 0;
--color-yellow:#977400;
--color-green-rgb:1, 144, 59;
--color-green:#01903b;
--color-cyan-rgb:0, 158, 155;
--color-cyan:#009e9b;
--color-blue-rgb:2, 95, 200;
--color-blue:#025fc8;
--color-purple-rgb:95, 56, 214;
--color-purple:#5f38d6;
--color-pink-rgb:191, 32, 109;
--color-pink:#bf206d;
}`,
    },
    "separate-color-scheme": {
      general: `.separate-color-scheme .setting-item[data-id=separate-color-scheme] {
border-top:none;
}

.separate-color-scheme .setting-item[data-id=color-scheme-selector] {
display:none;
}`,
      dark: `.dm-color-scheme-ukiyo.theme-dark, .lm-color-scheme-ukiyo.theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.dm-color-scheme-ukiyo.theme-dark {
--color-base-00:#253847;
--color-base-05:var(--color-base-30);
--code-background:#1d2d3a;
--color-base-10:#25333f;
--color-base-20:#233241;
--color-base-25:#284052;
--color-base-30:#2e505a;
--color-base-40:#335a5a;
--color-base-50:#48867d;
--color-base-70:#5fa096;
--color-base-100:#d0d0d0;
--background-modifier-message:#082237;
--color-accent:#2babb5;
--color-accent-1:#2babb5;
--color-accent-2:#35bbc4;
--activeline:#2a3f528f;
--text-selection:#2e4253;
--color-bold:#3ec28b;
--color-italic:#74ccff;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#e04242;
--in-between-background:#192a35;
}

.dm-color-scheme-golden-coffee.theme-dark, .lm-color-scheme-golden-coffee.theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-message:#2c1e14;
--color-accent-1:var(--color-accent);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.dm-color-scheme-golden-coffee.theme-dark {
--color-base-00:#402e22;
--color-base-05:#5f4c45;
--color-base-10:#4f3626;
--color-base-20:#473224;
--color-base-25:#583f2e;
--color-base-30:#5f4630;
--color-base-40:#644a33;
--color-base-50:#ac8b6e;
--color-base-70:#b9987c;
--color-base-100:#dfc2a0;
--color-accent:#e6bb57;
--color-accent-2:#f5ca6c;
--activeline:#5b3d2895;
--text-selection:#825f4795;
--color-bold:#ce631c;
--color-italic:#da9517;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#e04242;
--in-between-background:#36261b;
}

.dm-color-scheme-golden-book.theme-dark :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
opacity:0;
background-color:var(--background-secondary);
}

.dm-color-scheme-golden-book.theme-dark {
--color-base-00:#f1ddcd;
--color-base-05:var(--color-base-30);
--color-base-10:#ddc1ab;
--color-base-20:#64514d;
--color-base-25:#7d645f;
--color-base-30:#554441;
--color-base-35:var(--color-base-30);
--color-base-40:#e4cdba;
--color-base-50:#982222;
--color-base-70:#a72a2a;
--color-base-100:#460c0c;
--background-modifier-message:#43312e;
--color-accent:#ce7726;
--color-accent-1:#ce7726;
--color-accent-2:#db791e;
--activeline:#ead2be;
--text-selection:#e8a46474;
--color-bold:#460c0c;
--color-italic:#460c0c;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#962a2a;
--in-between-background:#4d3a37;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
--color-red-rgb:207, 30, 51;
--color-red:#cf1e33;
--color-orange-rgb:193, 109, 24;
--color-orange:#c16d18;
--color-yellow-rgb:151, 116, 0;
--color-yellow:#977400;
--color-green-rgb:1, 144, 59;
--color-green:#01903b;
--color-cyan-rgb:0, 158, 155;
--color-cyan:#009e9b;
--color-blue-rgb:2, 95, 200;
--color-blue:#025fc8;
--color-purple-rgb:95, 56, 214;
--color-purple:#5f38d6;
--color-pink-rgb:191, 32, 109;
--color-pink:#bf206d;
}

.dm-color-scheme-golden-book.theme-dark [class^=markdown-] {
background-color:var(--color-base-00);
--background-secondary:#e4cdba;
--background-secondary-alt:#dec5b1;
}

.dm-color-scheme-golden-book.theme-dark [class^=markdown-] table {
--color-base-40:var(--table-header-border-color);
}

.dm-color-scheme-golden-book.theme-dark :is(.workspace-tab-container,.workspace-tab-header-container,.workspace-ribbon,.suggestion):not(:has([class^=markdown-])) {
--tab-text-color-active:#f7e8cf;
--tab-text-color-focused-active-current:#f7e8cf;
--icon-color:var(--color-base-40);
--icon-color-focused:#f7e8cf;
--icon-color-active:#f7e8cf;
--icon-color-hover:#f7e8cf;
--search-icon-color:var(--icon-color);
--vault-name-color:var(--color-base-40);
--nav-collapse-icon-color:var(--icon-color);
--nav-item-color:var(--color-base-40);
--nav-item-color-active:var(--color-base-40);
--nav-item-color-hover:#f7e8cf;
--text-normal:#dfc9b8;
--text-faint:#a18680;
--text-muted:#b19791;
}

.dm-color-scheme-golden-book.theme-dark .workspace-ribbon:hover {
background-color:var(--background-secondary);
}

.dm-color-scheme-golden-book.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header.is-active, .dm-color-scheme-golden-book.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:#460c0c;
--tab-text-color-focused-active-current:#460c0c;
}

.dm-color-scheme-golden-book.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:var(--background-primary);
--tab-text-color-focused-active-current:var(--background-primary);
}

.dm-color-scheme-golden-book.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header.is-active:hover * {
color:#460c0c;
}

.dm-color-scheme-golden-book.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover {
color:var(--text-normal)!important;
--tab-text-color-focused-active-current:var(--text-normal)!important;
--tab-text-color-focused:var(--text-normal)!important;
}

.dm-color-scheme-golden-book.theme-dark .workspace-split.mod-vertical.mod-root .view-header {
--background-secondary-alt:transparent;
}

.dm-color-scheme-golden-book.theme-dark .status-bar {
--status-bar-text-color:var(--background-primary);
--text-normal:var(--background-primary);
}

.dm-color-scheme-golden-book.theme-dark .suggestion-container.mod-search-suggestion .suggestion {
color:#dfc9b8;
}

.dm-color-scheme-golden-book.theme-dark .suggestion-container.mod-search-suggestion .suggestion-item.is-selected {
background-color:var(--background-secondary-alt);
}

.dm-color-scheme-golden-book.theme-dark .suggestion-container .suggestion-item.is-selected {
background-color:var(--activeline);
}

.dm-color-scheme-golden-book.theme-dark .copy-code-button:hover {
background-color:#dec5b1;
}

.dm-color-scheme-golden-book.theme-dark .tree-item-self.search-result-file-title.is-clickable * {
--text-normal:#f7e8cf;
}

.dm-color-scheme-golden-book.theme-dark .search-result-file-matched-text {
--text-normal:#554441;
}

.dm-color-scheme-golden-book.theme-dark .search-result-file-match {
color:#554441;
}

.dm-color-scheme-golden-book.theme-dark .notice, .dm-color-scheme-golden-book.theme-dark .titlebar-button-container.mod-right, .dm-color-scheme-golden-book.theme-dark .tooltip {
color:#dfc9b8;
}

.dm-color-scheme-golden-book.theme-dark .menu {
background-color:var(--background-secondary);
color:var(--color-base-10);
--text-muted:#ff3c5d;
--text-faint:#ff4059;
}

.dm-color-scheme-golden-book.theme-dark .prompt {
--background-modifier-hover:#e6cfbd;
--code-background:#d7bca7;
}

.dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout .vertical-tab-header, .dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout select.dropdown, .dm-color-scheme-golden-book.theme-dark button {
color:var(--background-primary);
}

.dm-color-scheme-golden-book.theme-dark button.mod-warning {
background-color:var(--background-modifier-error);
color:var(--text-on-accent);
}

.dm-color-scheme-golden-book.theme-dark .cm-s-obsidian .cm-hmd-frontmatter, .dm-color-scheme-golden-book.theme-dark .cm-s-obsidian pre.HyperMD-codeblock, .dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout select.dropdown option {
color:var(--text-normal);
}

.dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout .search-input-container {
--search-icon-color:var(--background-primary);
background-color:var(--background-secondary);
}

.dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout .search-input-container * {
color:var(--background-primary);
}

.dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout input, .dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout input::placeholder {
color:var(--background-primary);
}

.dm-color-scheme-golden-book.theme-dark .modal.mod-settings.mod-sidebar-layout .setting-hotkey {
background-color:var(--background-secondary);
color:var(--background-primary);
}

.dm-color-scheme-golden-book.theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-atom, .dm-color-scheme-golden-book.theme-dark .cm-s-obsidian .cm-math.cm-atom, .dm-color-scheme-golden-book.theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-atom {
color:#d87300;
}

.dm-color-scheme-golden-book.theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-number, .dm-color-scheme-golden-book.theme-dark .cm-s-obsidian .cm-math.cm-number, .dm-color-scheme-golden-book.theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-number {
color:#9925ff;
}

.dm-color-scheme-golden-book.theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-keyword, .dm-color-scheme-golden-book.theme-dark .cm-s-obsidian .cm-math.cm-keyword, .dm-color-scheme-golden-book.theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-keyword {
color:#00a7aa;
}

.dm-color-scheme-alchemy.theme-dark, .lm-color-scheme-alchemy.theme-light {
--color-base-05:var(--color-base-30);
--color-base-35:var(--color-base-30);
--text-highlight-bg:#a0632666;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.dm-color-scheme-alchemy.theme-dark {
--color-base-00:#171717;
--color-base-10:#282523;
--color-base-20:#1a1a1a;
--color-base-25:#232323;
--color-base-30:#292929;
--color-base-40:#373738;
--color-base-50:#8c7c6d;
--color-base-70:#9e9184;
--color-base-100:#c0bcb5;
--background-modifier-message:#000000;
--color-accent:#978159;
--color-accent-1:#978159;
--color-accent-2:#b1996c;
--activeline:#242424bf;
--text-selection:#474747a2;
--color-bold:#7b9cac;
--color-italic:#a07f6c;
--heading-formatting-color:#8f2d2d;
--in-between-background:#101010;
}

.dm-color-scheme-rose-shadow.theme-dark {
--color-base-00:#3b252d;
--color-base-05:var(--color-base-30);
--color-base-10:#35242a;
--color-base-20:#412730;
--color-base-25:#4d2d38;
--color-base-30:#773d477e;
--color-base-35:var(--color-base-30);
--color-base-40:#c2937b;
--color-base-50:#b3826a;
--color-base-70:#c2937b;
--color-base-100:#d3a590;
--background-modifier-message:#28171d;
--color-accent:#b884c4;
--color-accent-1:#b884c4;
--color-accent-2:#c693d1;
--activeline:#4e2d3896;
--text-selection:#6e425296;
--color-bold:#fccab1;
--color-italic:#eccfe8;
--text-highlight-bg:#b053bc2e;
--heading-formatting-color:#d12e6d;
--in-between-background:#321e25;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.dm-color-scheme-custom.theme-dark {
--color-base-00:var(--color-scheme-custom-background-primary, #372d29);
--color-base-05:var(--color-scheme-custom-background-secondary-alt, #413632);
--color-base-10:var(--color-scheme-custom-background-primary-alt, #2b2723);
--color-base-20:var(--color-scheme-custom-background-secondary, #413632);
--color-base-25:var(
    --color-scheme-custom-background-modifier-form-field,
    #2b2723
  );
--color-base-30:var(
    --color-scheme-custom-background-modifier-border,
    #504431
  );
--color-base-35:var(
    --color-scheme-custom-background-modifier-border-hover,
    #645743
  );
--color-base-40:var(
    --color-scheme-custom-background-modifier-border-focus,
    #504431
  );
--color-base-50:var(--color-scheme-custom-text-faint, #868074);
--color-base-70:var(--color-scheme-custom-text-muted, #b2a699);
--color-base-100:var(--color-scheme-custom-text-normal, #ccc2b7);
--background-modifier-message:var(
    --color-scheme-custom-tooltip-notice-background-color,
    #281f1b
  );
--color-accent:var(--color-scheme-custom-color-accent, #ba945f);
--color-accent-1:var(--color-accent);
--color-accent-2:var(--color-scheme-custom-color-accent-hover, #e0ba86);
--titlebar-background-focused:var(--color-base-20);
--activeline:var(--color-scheme-custom-activeline, #51454140);
--text-selection:var(--color-scheme-custom-text-selection, #6154508f);
--color-bold:var(--color-scheme-custom-bold, --accent);
--color-italic:var(--color-scheme-custom-italic, #e77a59);
--text-highlight-bg:var(--color-scheme-custom-highlight-bg, #926b22e6);
--heading-formatting-color:var(
    --color-scheme-custom-heading-formatting-color,
    #c72626
  );
--in-between-background:var(
    --color-scheme-custom-in-between-background,
    #2e2420
  );
}`,
      light: `.dm-color-scheme-ukiyo.theme-dark, .lm-color-scheme-ukiyo.theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.lm-color-scheme-ukiyo.theme-light {
--color-base-00:#e6f0ff;
--color-base-05:#d2e1f9;
--color-base-10:#d1e3ff;
--color-base-20:#e1edff;
--color-base-25:#cde1ff;
--color-base-30:#c9d9f1;
--color-base-40:#c9d9f1;
--color-base-50:#4069bf;
--color-base-70:#5079d1;
--color-base-100:#254da1;
--background-modifier-message:#adceff;
--color-accent:#2b9cb8;
--color-accent-1:#2b9cb8;
--color-accent-2:#30b4d4;
--activeline:#d0e3ff68;
--text-selection:#bdd8ff7d;
--color-bold:#42b3a9;
--color-italic:#379eda;
--text-highlight-bg:#ffdec6;
--heading-formatting-color:#e67979;
--in-between-background:#d6e6fd;
}

.dm-color-scheme-golden-coffee.theme-dark, .lm-color-scheme-golden-coffee.theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-message:#2c1e14;
--color-accent-1:var(--color-accent);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.lm-color-scheme-golden-coffee.theme-light {
--color-base-00:#fff3e7;
--color-base-05:#f5dcc3;
--color-base-10:#fcebd9;
--color-base-20:#fae7d2;
--color-base-25:#f3dbc1;
--color-base-30:#e0c1a0;
--color-base-40:#d6b086;
--color-base-50:#c37e30;
--color-base-70:#cf8a3a;
--color-base-100:#97653c;
--color-accent:#d83939;
--color-accent-2:#ec5555;
--activeline:#ffe2c4d1;
--text-selection:#efddcacb;
--color-bold:#b36b29;
--color-italic:#d88405;
--text-highlight-bg:#ffd3a4cb;
--heading-formatting-color:#da7b64;
--in-between-background:#efdac3;
}

.dm-color-scheme-alchemy.theme-dark, .lm-color-scheme-alchemy.theme-light {
--color-base-05:var(--color-base-30);
--color-base-35:var(--color-base-30);
--text-highlight-bg:#a0632666;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.lm-color-scheme-alchemy.theme-light {
--color-base-00:#0f1d1a;
--code-background:#122a25;
--color-base-10:#0b1614;
--color-base-20:#10201d;
--color-base-25:#1e332f;
--color-base-30:#253a35;
--color-base-40:#253a35;
--color-base-50:#a08d57;
--color-base-70:#ad9962;
--color-base-100:#cabbab;
--background-modifier-message:#12312b;
--color-accent:#b49967;
--color-accent-1:#b49967;
--color-accent-2:#c9ab73;
--activeline:#22373270;
--text-selection:#334b45b5;
--color-bold:#359e87;
--color-italic:#1cacb4;
--heading-formatting-color:#a83d3d;
--in-between-background:#0c1815;
}

.lm-color-scheme-custom.theme-light {
--color-base-00:var(--color-scheme-custom-background-primary, #e1c4a6);
--color-base-05:var(--color-scheme-custom-background-secondary-alt, #cbaa87);
--color-base-10:var(--color-scheme-custom-background-primary-alt, #daba97);
--color-base-20:var(--color-scheme-custom-background-secondary, #dabb9a);
--color-base-25:var(
    --color-scheme-custom-background-modifier-form-field,
    #4c4743
  );
--color-base-30:var(
    --color-scheme-custom-background-modifier-border,
    #c6a57f
  );
--color-base-35:var(
    --color-scheme-custom-background-modifier-border-hover,
    #a8865f
  );
--color-base-40:var(
    --color-scheme-custom-background-modifier-border-focus,
    #b4916a
  );
--color-base-50:var(--color-scheme-custom-text-faint, #7a6d68);
--color-base-70:var(--color-scheme-custom-text-muted, #5b4f4a);
--color-base-100:var(--color-scheme-custom-text-normal, #5f4f49);
--background-modifier-message:var(
    --color-scheme-custom-tooltip-notice-background-color,
    #d7b38d
  );
--color-accent:var(--color-scheme-custom-color-accent, #800000);
--color-accent-1:var(--color-accent);
--color-accent-2:var(--color-scheme-custom-color-accent-hover, #a00000);
--titlebar-background-focused:var(--color-base-20);
--activeline:var(--color-scheme-custom-activeline, #d4b4946a);
--text-selection:var(--color-scheme-custom-text-selection, #c7a78683);
--color-bold:var(--color-scheme-custom-bold, #bd5757);
--color-italic:var(--color-scheme-custom-italic, #ae612b);
--text-highlight-bg:var(--color-scheme-custom-highlight-bg, #eac357);
--heading-formatting-color:var(
    --color-scheme-custom-heading-formatting-color,
    #d34747
  );
--in-between-background:var(
    --color-scheme-custom-in-between-background,
    #d4af88
  );
--color-red-rgb:207, 30, 51;
--color-red:#cf1e33;
--color-orange-rgb:193, 109, 24;
--color-orange:#c16d18;
--color-yellow-rgb:151, 116, 0;
--color-yellow:#977400;
--color-green-rgb:1, 144, 59;
--color-green:#01903b;
--color-cyan-rgb:0, 158, 155;
--color-cyan:#009e9b;
--color-blue-rgb:2, 95, 200;
--color-blue:#025fc8;
--color-purple-rgb:95, 56, 214;
--color-purple:#5f38d6;
--color-pink-rgb:191, 32, 109;
--color-pink:#bf206d;
}`,
    },
    "dm-color-scheme-ukiyo": {
      dark: `.separate-color-scheme.theme-dark {
--color-base-35:var(--color-base-30);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.separate-color-scheme.theme-dark {
--color-base-00:#253847;
--color-base-05:var(--color-base-30);
--code-background:#1d2d3a;
--color-base-10:#25333f;
--color-base-20:#233241;
--color-base-25:#284052;
--color-base-30:#2e505a;
--color-base-40:#335a5a;
--color-base-50:#48867d;
--color-base-70:#5fa096;
--color-base-100:#d0d0d0;
--background-modifier-message:#082237;
--color-accent:#2babb5;
--color-accent-1:#2babb5;
--color-accent-2:#35bbc4;
--activeline:#2a3f528f;
--text-selection:#2e4253;
--color-bold:#3ec28b;
--color-italic:#74ccff;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#e04242;
--in-between-background:#192a35;
}`,
    },
    "dm-color-scheme-golden-coffee": {
      dark: `.separate-color-scheme.theme-dark {
--color-base-35:var(--color-base-30);
--background-modifier-message:#2c1e14;
--color-accent-1:var(--color-accent);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.separate-color-scheme.theme-dark {
--color-base-00:#402e22;
--color-base-05:#5f4c45;
--color-base-10:#4f3626;
--color-base-20:#473224;
--color-base-25:#583f2e;
--color-base-30:#5f4630;
--color-base-40:#644a33;
--color-base-50:#ac8b6e;
--color-base-70:#b9987c;
--color-base-100:#dfc2a0;
--color-accent:#e6bb57;
--color-accent-2:#f5ca6c;
--activeline:#5b3d2895;
--text-selection:#825f4795;
--color-bold:#ce631c;
--color-italic:#da9517;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#e04242;
--in-between-background:#36261b;
}`,
    },
    "dm-color-scheme-golden-book": {
      dark: `.separate-color-scheme.theme-dark :not(.is-mobile,.smooth-mode).minimal-mode.sides-tabs-hover .workspace-split.mod-horizontal.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container:not(:hover) {
border:0;
opacity:0;
background-color:var(--background-secondary);
}

.separate-color-scheme.theme-dark {
--color-base-00:#f1ddcd;
--color-base-05:var(--color-base-30);
--color-base-10:#ddc1ab;
--color-base-20:#64514d;
--color-base-25:#7d645f;
--color-base-30:#554441;
--color-base-35:var(--color-base-30);
--color-base-40:#e4cdba;
--color-base-50:#982222;
--color-base-70:#a72a2a;
--color-base-100:#460c0c;
--background-modifier-message:#43312e;
--color-accent:#ce7726;
--color-accent-1:#ce7726;
--color-accent-2:#db791e;
--activeline:#ead2be;
--text-selection:#e8a46474;
--color-bold:#460c0c;
--color-italic:#460c0c;
--text-highlight-bg:#a0632666;
--heading-formatting-color:#962a2a;
--in-between-background:#4d3a37;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
--color-red-rgb:207, 30, 51;
--color-red:#cf1e33;
--color-orange-rgb:193, 109, 24;
--color-orange:#c16d18;
--color-yellow-rgb:151, 116, 0;
--color-yellow:#977400;
--color-green-rgb:1, 144, 59;
--color-green:#01903b;
--color-cyan-rgb:0, 158, 155;
--color-cyan:#009e9b;
--color-blue-rgb:2, 95, 200;
--color-blue:#025fc8;
--color-purple-rgb:95, 56, 214;
--color-purple:#5f38d6;
--color-pink-rgb:191, 32, 109;
--color-pink:#bf206d;
}

.separate-color-scheme.theme-dark [class^=markdown-] {
background-color:var(--color-base-00);
--background-secondary:#e4cdba;
--background-secondary-alt:#dec5b1;
}

.separate-color-scheme.theme-dark [class^=markdown-] table {
--color-base-40:var(--table-header-border-color);
}

.separate-color-scheme.theme-dark :is(.workspace-tab-container,.workspace-tab-header-container,.workspace-ribbon,.suggestion):not(:has([class^=markdown-])) {
--tab-text-color-active:#f7e8cf;
--tab-text-color-focused-active-current:#f7e8cf;
--icon-color:var(--color-base-40);
--icon-color-focused:#f7e8cf;
--icon-color-active:#f7e8cf;
--icon-color-hover:#f7e8cf;
--search-icon-color:var(--icon-color);
--vault-name-color:var(--color-base-40);
--nav-collapse-icon-color:var(--icon-color);
--nav-item-color:var(--color-base-40);
--nav-item-color-active:var(--color-base-40);
--nav-item-color-hover:#f7e8cf;
--text-normal:#dfc9b8;
--text-faint:#a18680;
--text-muted:#b19791;
}

.separate-color-scheme.theme-dark .workspace-ribbon:hover {
background-color:var(--background-secondary);
}

.separate-color-scheme.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header.is-active, .separate-color-scheme.smooth-mode .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:#460c0c;
--tab-text-color-focused-active-current:#460c0c;
}

.separate-color-scheme.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header {
color:var(--background-primary);
--tab-text-color-focused-active-current:var(--background-primary);
}

.separate-color-scheme.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header.is-active:hover * {
color:#460c0c;
}

.separate-color-scheme.theme-dark .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container-inner .workspace-tab-header:hover {
color:var(--text-normal)!important;
--tab-text-color-focused-active-current:var(--text-normal)!important;
--tab-text-color-focused:var(--text-normal)!important;
}

.separate-color-scheme.theme-dark .workspace-split.mod-vertical.mod-root .view-header {
--background-secondary-alt:transparent;
}

.separate-color-scheme.theme-dark .status-bar {
--status-bar-text-color:var(--background-primary);
--text-normal:var(--background-primary);
}

.separate-color-scheme.theme-dark .suggestion-container.mod-search-suggestion .suggestion {
color:#dfc9b8;
}

.separate-color-scheme.theme-dark .suggestion-container.mod-search-suggestion .suggestion-item.is-selected {
background-color:var(--background-secondary-alt);
}

.separate-color-scheme.theme-dark .suggestion-container .suggestion-item.is-selected {
background-color:var(--activeline);
}

.separate-color-scheme.theme-dark .copy-code-button:hover {
background-color:#dec5b1;
}

.separate-color-scheme.theme-dark .tree-item-self.search-result-file-title.is-clickable * {
--text-normal:#f7e8cf;
}

.separate-color-scheme.theme-dark .search-result-file-matched-text {
--text-normal:#554441;
}

.separate-color-scheme.theme-dark .search-result-file-match {
color:#554441;
}

.separate-color-scheme.theme-dark .notice, .separate-color-scheme.theme-dark .titlebar-button-container.mod-right, .separate-color-scheme.theme-dark .tooltip {
color:#dfc9b8;
}

.separate-color-scheme.theme-dark .menu {
background-color:var(--background-secondary);
color:var(--color-base-10);
--text-muted:#ff3c5d;
--text-faint:#ff4059;
}

.separate-color-scheme.theme-dark .prompt {
--background-modifier-hover:#e6cfbd;
--code-background:#d7bca7;
}

.separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout .vertical-tab-header, .separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout select.dropdown, .separate-color-scheme.theme-dark button {
color:var(--background-primary);
}

.separate-color-scheme.theme-dark button.mod-warning {
background-color:var(--background-modifier-error);
color:var(--text-on-accent);
}

.separate-color-scheme.theme-dark .cm-s-obsidian .cm-hmd-frontmatter, .separate-color-scheme.theme-dark .cm-s-obsidian pre.HyperMD-codeblock, .separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout select.dropdown option {
color:var(--text-normal);
}

.separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout .search-input-container {
--search-icon-color:var(--background-primary);
background-color:var(--background-secondary);
}

.separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout .search-input-container * {
color:var(--background-primary);
}

.separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout input, .separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout input::placeholder {
color:var(--background-primary);
}

.separate-color-scheme.theme-dark .modal.mod-settings.mod-sidebar-layout .setting-hotkey {
background-color:var(--background-secondary);
color:var(--background-primary);
}

.separate-color-scheme.theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-atom, .separate-color-scheme.theme-dark .cm-s-obsidian .cm-math.cm-atom, .separate-color-scheme.theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-atom {
color:#d87300;
}

.separate-color-scheme.theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-number, .separate-color-scheme.theme-dark .cm-s-obsidian .cm-math.cm-number, .separate-color-scheme.theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-number {
color:#9925ff;
}

.separate-color-scheme.theme-dark .cm-s-obsidian .cm-hmd-frontmatter.cm-keyword, .separate-color-scheme.theme-dark .cm-s-obsidian .cm-math.cm-keyword, .separate-color-scheme.theme-dark .cm-s-obsidian pre.HyperMD-codeblock .cm-keyword {
color:#00a7aa;
}`,
    },
    "dm-color-scheme-alchemy": {
      dark: `.separate-color-scheme.theme-dark {
--color-base-05:var(--color-base-30);
--color-base-35:var(--color-base-30);
--text-highlight-bg:#a0632666;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.separate-color-scheme.theme-dark {
--color-base-00:#171717;
--color-base-10:#282523;
--color-base-20:#1a1a1a;
--color-base-25:#232323;
--color-base-30:#292929;
--color-base-40:#373738;
--color-base-50:#8c7c6d;
--color-base-70:#9e9184;
--color-base-100:#c0bcb5;
--background-modifier-message:#000000;
--color-accent:#978159;
--color-accent-1:#978159;
--color-accent-2:#b1996c;
--activeline:#242424bf;
--text-selection:#474747a2;
--color-bold:#7b9cac;
--color-italic:#a07f6c;
--heading-formatting-color:#8f2d2d;
--in-between-background:#101010;
}`,
    },
    "dm-color-scheme-rose-shadow": {
      dark: `.separate-color-scheme.theme-dark {
--color-base-00:#3b252d;
--color-base-05:var(--color-base-30);
--color-base-10:#35242a;
--color-base-20:#412730;
--color-base-25:#4d2d38;
--color-base-30:#773d477e;
--color-base-35:var(--color-base-30);
--color-base-40:#c2937b;
--color-base-50:#b3826a;
--color-base-70:#c2937b;
--color-base-100:#d3a590;
--background-modifier-message:#28171d;
--color-accent:#b884c4;
--color-accent-1:#b884c4;
--color-accent-2:#c693d1;
--activeline:#4e2d3896;
--text-selection:#6e425296;
--color-bold:#fccab1;
--color-italic:#eccfe8;
--text-highlight-bg:#b053bc2e;
--heading-formatting-color:#d12e6d;
--in-between-background:#321e25;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}`,
    },
    "dm-color-scheme-custom": {
      dark: `.separate-color-scheme.theme-dark {
--color-base-00:var(--color-scheme-custom-background-primary, #372d29);
--color-base-05:var(--color-scheme-custom-background-secondary-alt, #413632);
--color-base-10:var(--color-scheme-custom-background-primary-alt, #2b2723);
--color-base-20:var(--color-scheme-custom-background-secondary, #413632);
--color-base-25:var(
    --color-scheme-custom-background-modifier-form-field,
    #2b2723
  );
--color-base-30:var(
    --color-scheme-custom-background-modifier-border,
    #504431
  );
--color-base-35:var(
    --color-scheme-custom-background-modifier-border-hover,
    #645743
  );
--color-base-40:var(
    --color-scheme-custom-background-modifier-border-focus,
    #504431
  );
--color-base-50:var(--color-scheme-custom-text-faint, #868074);
--color-base-70:var(--color-scheme-custom-text-muted, #b2a699);
--color-base-100:var(--color-scheme-custom-text-normal, #ccc2b7);
--background-modifier-message:var(
    --color-scheme-custom-tooltip-notice-background-color,
    #281f1b
  );
--color-accent:var(--color-scheme-custom-color-accent, #ba945f);
--color-accent-1:var(--color-accent);
--color-accent-2:var(--color-scheme-custom-color-accent-hover, #e0ba86);
--titlebar-background-focused:var(--color-base-20);
--activeline:var(--color-scheme-custom-activeline, #51454140);
--text-selection:var(--color-scheme-custom-text-selection, #6154508f);
--color-bold:var(--color-scheme-custom-bold, --accent);
--color-italic:var(--color-scheme-custom-italic, #e77a59);
--text-highlight-bg:var(--color-scheme-custom-highlight-bg, #926b22e6);
--heading-formatting-color:var(
    --color-scheme-custom-heading-formatting-color,
    #c72626
  );
--in-between-background:var(
    --color-scheme-custom-in-between-background,
    #2e2420
  );
}`,
    },
    "lm-color-scheme-ukiyo": {
      light: `.separate-color-scheme.theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.separate-color-scheme.theme-light {
--color-base-00:#e6f0ff;
--color-base-05:#d2e1f9;
--color-base-10:#d1e3ff;
--color-base-20:#e1edff;
--color-base-25:#cde1ff;
--color-base-30:#c9d9f1;
--color-base-40:#c9d9f1;
--color-base-50:#4069bf;
--color-base-70:#5079d1;
--color-base-100:#254da1;
--background-modifier-message:#adceff;
--color-accent:#2b9cb8;
--color-accent-1:#2b9cb8;
--color-accent-2:#30b4d4;
--activeline:#d0e3ff68;
--text-selection:#bdd8ff7d;
--color-bold:#42b3a9;
--color-italic:#379eda;
--text-highlight-bg:#ffdec6;
--heading-formatting-color:#e67979;
--in-between-background:#d6e6fd;
}`,
    },
    "lm-color-scheme-golden-coffee": {
      light: `.separate-color-scheme.theme-light {
--color-base-35:var(--color-base-30);
--background-modifier-message:#2c1e14;
--color-accent-1:var(--color-accent);
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.separate-color-scheme.theme-light {
--color-base-00:#fff3e7;
--color-base-05:#f5dcc3;
--color-base-10:#fcebd9;
--color-base-20:#fae7d2;
--color-base-25:#f3dbc1;
--color-base-30:#e0c1a0;
--color-base-40:#d6b086;
--color-base-50:#c37e30;
--color-base-70:#cf8a3a;
--color-base-100:#97653c;
--color-accent:#d83939;
--color-accent-2:#ec5555;
--activeline:#ffe2c4d1;
--text-selection:#efddcacb;
--color-bold:#b36b29;
--color-italic:#d88405;
--text-highlight-bg:#ffd3a4cb;
--heading-formatting-color:#da7b64;
--in-between-background:#efdac3;
}`,
    },
    "lm-color-scheme-alchemy": {
      light: `.separate-color-scheme.theme-light {
--color-base-05:var(--color-base-30);
--color-base-35:var(--color-base-30);
--text-highlight-bg:#a0632666;
--background-modifier-form-field:var(--color-base-25);
--interactive-normal:var(--color-base-30);
--interactive-hover:var(--color-base-35);
--text-highlight-bg-active:var(--text-highlight-bg);
}

.separate-color-scheme.theme-light {
--color-base-00:#0f1d1a;
--code-background:#122a25;
--color-base-10:#0b1614;
--color-base-20:#10201d;
--color-base-25:#1e332f;
--color-base-30:#253a35;
--color-base-40:#253a35;
--color-base-50:#a08d57;
--color-base-70:#ad9962;
--color-base-100:#cabbab;
--background-modifier-message:#12312b;
--color-accent:#b49967;
--color-accent-1:#b49967;
--color-accent-2:#c9ab73;
--activeline:#22373270;
--text-selection:#334b45b5;
--color-bold:#359e87;
--color-italic:#1cacb4;
--heading-formatting-color:#a83d3d;
--in-between-background:#0c1815;
}`,
    },
    "lm-color-scheme-custom": {
      light: `.separate-color-scheme.theme-light {
--color-base-00:var(--color-scheme-custom-background-primary, #e1c4a6);
--color-base-05:var(--color-scheme-custom-background-secondary-alt, #cbaa87);
--color-base-10:var(--color-scheme-custom-background-primary-alt, #daba97);
--color-base-20:var(--color-scheme-custom-background-secondary, #dabb9a);
--color-base-25:var(
    --color-scheme-custom-background-modifier-form-field,
    #4c4743
  );
--color-base-30:var(
    --color-scheme-custom-background-modifier-border,
    #c6a57f
  );
--color-base-35:var(
    --color-scheme-custom-background-modifier-border-hover,
    #a8865f
  );
--color-base-40:var(
    --color-scheme-custom-background-modifier-border-focus,
    #b4916a
  );
--color-base-50:var(--color-scheme-custom-text-faint, #7a6d68);
--color-base-70:var(--color-scheme-custom-text-muted, #5b4f4a);
--color-base-100:var(--color-scheme-custom-text-normal, #5f4f49);
--background-modifier-message:var(
    --color-scheme-custom-tooltip-notice-background-color,
    #d7b38d
  );
--color-accent:var(--color-scheme-custom-color-accent, #800000);
--color-accent-1:var(--color-accent);
--color-accent-2:var(--color-scheme-custom-color-accent-hover, #a00000);
--titlebar-background-focused:var(--color-base-20);
--activeline:var(--color-scheme-custom-activeline, #d4b4946a);
--text-selection:var(--color-scheme-custom-text-selection, #c7a78683);
--color-bold:var(--color-scheme-custom-bold, #bd5757);
--color-italic:var(--color-scheme-custom-italic, #ae612b);
--text-highlight-bg:var(--color-scheme-custom-highlight-bg, #eac357);
--heading-formatting-color:var(
    --color-scheme-custom-heading-formatting-color,
    #d34747
  );
--in-between-background:var(
    --color-scheme-custom-in-between-background,
    #d4af88
  );
--color-red-rgb:207, 30, 51;
--color-red:#cf1e33;
--color-orange-rgb:193, 109, 24;
--color-orange:#c16d18;
--color-yellow-rgb:151, 116, 0;
--color-yellow:#977400;
--color-green-rgb:1, 144, 59;
--color-green:#01903b;
--color-cyan-rgb:0, 158, 155;
--color-cyan:#009e9b;
--color-blue-rgb:2, 95, 200;
--color-blue:#025fc8;
--color-purple-rgb:95, 56, 214;
--color-purple:#5f38d6;
--color-pink-rgb:191, 32, 109;
--color-pink:#bf206d;
}`,
    },
    "floating-sides": {
      general: `.floating-sides {
--floating-sides-animation-duration:0.5s;
--margin-top:calc(var(--header-height));
--workspace-split-left-offset:var(--ribbon-width);
}

.smooth-mode {
--margin-top:calc(var(--header-height) + 5px);
}

.minimal-mode.sidebar-hide {
--workspace-split-left-offset:0px;
}

.floating-sides, .minimal-mode.root-tabs-hover .workspace {
--margin-top-animation-delay:0s;
}

.minimal-mode.root-tabs-hover .workspace:has(.workspace-tabs.mod-active.mod-top .workspace-tab-header-container:not(:hover)) {
--margin-top:calc(var(--header-height) / 3);
--margin-top-animation-delay:1s;
}

.minimal-mode.sidebar-hover .workspace.is-left-sidedock-open:has(.workspace-ribbon.side-dock-ribbon.mod-left:not(:hover)) {
--workspace-split-left-offset:10px;
}

.floating-sides .workspace-ribbon.side-dock-ribbon.mod-left * {
transition:opacity var(--floating-sides-animation-duration) ease-in-out;
}

.floating-sides .workspace-split.mod-horizontal {
position:absolute;
height:calc(100% - var(--margin-top));
margin-top:var(--margin-top);
transition:margin-top var(--default-animation-duration) ease-in-out var(--margin-top-animation-delay);
z-index:10;
}

.floating-sides .workspace-split.mod-horizontal.is-sidedock-collapsed {
display:flex!important;
visibility:visible;
transition:all var(--floating-sides-animation-duration)!important;
}

.floating-sides .workspace-split.mod-horizontal.mod-left-split {
transition:left var(--default-animation-duration) ease-in-out,margin-top var(--default-animation-duration) ease-in-out var(--margin-top-animation-delay);
left:var(--workspace-split-left-offset);
animation:workspace-split-left-slide-in var(--floating-sides-animation-duration);
}

.floating-sides .workspace-split.mod-horizontal.mod-left-split.is-sidedock-collapsed {
animation:workspace-split-left-slide-out var(--floating-sides-animation-duration);
}

.floating-sides .workspace-split.mod-horizontal.mod-right-split {
right:0;
animation:workspace-split-right-slide-in var(--floating-sides-animation-duration);
}

.floating-sides .workspace-split.mod-horizontal.mod-right-split.is-sidedock-collapsed {
animation:workspace-split-right-slide-out var(--floating-sides-animation-duration);
}`,
    },
  },
};
