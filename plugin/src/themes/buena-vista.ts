import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "buena-vista",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "buenavista",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-i-h: calc(var(--accent-h) + 180);
  --accent-l-alt: max(var(--accent-l), 75%);
  --accent-s-alt: max(calc(var(--accent-s)*0.75), 75%);
  --background-blurred: var(--background-primary, hsl(0, 0%, 10.0%));
  --background-blurred-alt: var(--background-primary-alt, hsl(0, 0%, 13.6%));
  --background-modifier-border: var(--color-base-30, hsl(0, 0%, 26.7%));
  --background-modifier-border-focus: var(--color-base-40, hsl(0, 0%, 34.9%));
  --background-modifier-border-hover: var(--color-base-35, hsl(0, 0%, 30.7%));
  --background-modifier-form-field: var(--color-base-15, hsl(0, 0%, 16.3%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(0, 0%, 16.3%));
  --background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
  --background-primary: var(--color-base-00, hsl(0, 0%, 10.0%));
  --background-primary-alt: var(--color-base-10, hsl(0, 0%, 13.6%));
  --background-secondary: var(--color-base-30, hsl(0, 0%, 26.7%));
  --background-secondary-alt: var(--color-base-50, hsl(0, 0%, 26.7%));
  --background-semitransp: hsla(0, 0%, var(--color-00-l), 85%);
  --background-semitransp-alt: hsla(0, 0%, var(--color-10-l), 85%);
  --bases-cards-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(0, 0%, 13.6%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --bases-table-border-color: var(--table-border-color, hsl(0, 0%, 26.7%));
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 0%, 10.0%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(0, 0%, 13.6%));
  --bases-table-group-background: var(--background-primary-alt, hsl(0, 0%, 13.6%));
  --bases-table-header-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(258, 88%, 44.1%, 25%));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(258, 88%, 44.1%, 25%));
  --blockquote-border-thickness: 0;
  --blur-size: 4;
  --bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
  --bold-h: var(--accent-i-h, 438);
  --button-alt-h: var(--accent-h, 258);
  --button-h: var(--accent-h, 258);
  --callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
  --callout-h: var(--accent-h, 258);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3, 12px 12px 12px 24px) 24px;
  --canvas-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --canvas-dot-pattern: var(--color-base-30, hsl(0, 0%, 26.7%));
  --caret-color: var(--text-normal, hsl(0, 0%, 100%));
  --checkbox-border-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --checkbox-border-color-hover: var(--text-muted, hsl(0, 0%, 64.6%));
  --checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s)*0.8), var(--color-70-l));
  --checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
  --checkbox-marker-color: var(--background-primary, hsl(0, 0%, 10.0%));
  --checklist-done-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --code-background: var(--background-primary-alt, hsl(0, 0%, 13.6%));
  --code-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --code-bracket-background: var(--background-modifier-hover, hsl(258, 88%, 44.1%, 25%));
  --code-comment: var(--text-faint, hsl(0, 0%, 44.1%));
  --code-normal: var(--text-normal, hsl(0, 0%, 100%));
  --code-punctuation: var(--text-muted, hsl(0, 0%, 64.6%));
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --color-00-l: 10.0%;
  --color-05-l: 11.4%;
  --color-10-l: 13.6%;
  --color-100-l: 100%;
  --color-15-l: 16.3%;
  --color-20-l: 19.5%;
  --color-25-l: 22.9%;
  --color-30-l: 26.7%;
  --color-35-l: 30.7%;
  --color-40-l: 34.9%;
  --color-50-l: 44.1%;
  --color-60-l: 54.0%;
  --color-70-l: 64.6%;
  --color-80-l: 75.9%;
  --color-90-l: 87.7%;
  --color-base-00: hsl(0, 0%, var(--color-00-l));
  --color-base-00-transp: #1e1e1e80;
  --color-base-05: hsl(0, 0%, var(--color-05-l));
  --color-base-10: hsl(0, 0%, var(--color-10-l));
  --color-base-10-transp: #24242480;
  --color-base-100: hsl(0, 0%, var(--color-100-l));
  --color-base-15: hsl(0, 0%, var(--color-15-l));
  --color-base-20: hsl(0, 0%, var(--color-20-l));
  --color-base-20-transp: #26262680;
  --color-base-25: hsl(0, 0%, var(--color-25-l));
  --color-base-30: hsl(0, 0%, var(--color-30-l));
  --color-base-30-transp: #36363680;
  --color-base-35: hsl(0, 0%, var(--color-35-l));
  --color-base-40: hsl(0, 0%, var(--color-40-l));
  --color-base-50: hsl(0, 0%, var(--color-50-l));
  --color-base-60: hsl(0, 0%, var(--color-60-l));
  --color-base-70: hsl(0, 0%, var(--color-70-l));
  --color-base-80: hsl(0, 0%, var(--color-80-l));
  --color-base-90: hsl(0, 0%, var(--color-90-l));
  --dark: var(--text-normal, var(--color-base-100, hsl(0, 0%, 100%)));
  --darkgray: var(--text-normal, var(--color-base-100, hsl(0, 0%, 100%)));
  --divider-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --dropdown-background: var(--interactive-normal, hsl(0, 0%, 26.7%));
  --dropdown-background-hover: var(--interactive-hover, hsl(0, 0%, 30.7%));
  --embed-border-left: 1px solid var(--interactive-accent);
  --embed-border-right: dashed white 1px;
  --embed-max-height: 80vh;
  --file-header-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%, 10.0%));
  --file-header-font-weight: 600;
  --flair-background: var(--interactive-normal, hsl(0, 0%, 26.7%));
  --flair-color: var(--text-normal, hsl(0, 0%, 100%));
  --footnote-divider-color: var(--metadata-divider-color, hsl(0, 0%, 26.7%));
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 44.1%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(258, 88%, 44.1%, 25%));
  --graph-node: var(--text-muted, hsl(0, 0%, 64.6%));
  --graph-node-unresolved: var(--text-faint, hsl(0, 0%, 44.1%));
  --graph-text: var(--text-normal, hsl(0, 0%, 100%));
  --gray: var(--text-muted, var(--color-base-70, hsl(0, 0%, 64.6%)));
  --heading-formatting: var(--text-faint, hsl(0, 0%, 44.1%));
  --highlight: var(--text-highlight-bg, hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%));
  --hr-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --icon-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --icon-color-focused: var(--text-normal, hsl(0, 0%, 100%));
  --icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
  --input-date-separator: var(--text-faint, hsl(0, 0%, 44.1%));
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --interactive-hover: var(--color-base-35, hsl(0, 0%, 30.7%));
  --interactive-normal: var(--color-base-30, hsl(0, 0%, 26.7%));
  --italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
  --italic-h: var(--accent-h, 258);
  --light: var(--background-primary, var(--color-base-00, hsl(0, 0%, 10.0%)));
  --lightgray: var(--background-secondary, var(--color-base-30, hsl(0, 0%, 26.7%)));
  --list-marker-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 64.6%));
  --max-highlight: 45%;
  --menu-background: var(--background-secondary, hsl(0, 0%, 26.7%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(0, 0%, 30.7%));
  --metadata-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --metadata-divider-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --metadata-input-background-active: var(--background-modifier-hover, hsl(258, 88%, 44.1%, 25%));
  --metadata-input-text-color: var(--text-normal, hsl(0, 0%, 100%));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(258, 88%, 44.1%, 25%));
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 64.6%));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(258, 88%, 44.1%, 25%));
  --min-highlight: 35%;
  --modal-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --modal-border-width: var(--border-width, 0);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 44.1%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 44.1%));
  --nav-heading-color: var(--text-normal, hsl(0, 0%, 100%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 44.1%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 64.6%));
  --nav-heading-color-hover: var(--text-normal, hsl(0, 0%, 100%));
  --nav-item-background-active: var(--interactive-accent, hsl(258, 88%, 66%));
  --nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
  --nav-item-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --nav-item-color-active: var(--text-on-accent, white);
  --nav-item-color-hover: var(--icon-color-hover, hsl(258,  88%, 87.7%));
  --nav-item-color-selected: var(--text-normal, hsl(0, 0%, 100%));
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 64.6%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 64.6%));
  --pdf-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --pdf-page-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --pill-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(0, 0%, 30.7%));
  --pill-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --pill-color-hover: var(--text-normal, hsl(0, 0%, 100%));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 44.1%));
  --prompt-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --prompt-border-width: var(--border-width, 0);
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 0%, 26.7%) 65%, transparent) linear-gradient(hsl(0, 0%, 26.7%), color-mix(in srgb, hsl(0, 0%, 26.7%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 26.7%));
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 0%, 10.0%));
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --search-result-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --setting-group-heading-color: var(--text-normal, hsl(0, 0%, 100%));
  --setting-items-background: var(--background-primary-alt, hsl(0, 0%, 13.6%));
  --setting-items-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 64.6%));
  --shiki-code-background: var(--code-background, hsl(0, 0%, 13.6%));
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 44.1%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 64.6%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 64.6%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 64.6%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 64.6%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(0, 0%, 30.7%));
  --slider-track-background: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 26.7%));
  --status-bar-border-color: var(--divider-color, hsl(0, 0%, 26.7%));
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --suggestion-background: var(--background-primary, hsl(0, 0%, 10.0%));
  --tab-background-active: var(--background-primary, hsl(0, 0%, 10.0%));
  --tab-container-background: var(--color-base-20, hsl(0, 0%, 19.5%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(0, 0%, 30.7%));
  --tab-outline-color: var(--divider-color, hsl(0, 0%, 26.7%));
  --tab-outline-width: 0;
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 26.7%));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 64.6%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 64.6%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 64.6%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0, 0%, 100%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --table-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 44.1%));
  --table-header-border-color: var(--table-border-color, hsl(0, 0%, 26.7%));
  --table-header-color: var(--text-normal, hsl(0, 0%, 100%));
  --text-faint: var(--color-base-50, hsl(0, 0%, 44.1%));
  --text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
  --text-highlight-h: var(--accent-i-h, 438);
  --text-muted: var(--color-base-70, hsl(0, 0%, 64.6%));
  --text-normal: var(--color-base-100, hsl(0, 0%, 100%));
  --textHighlight: var(--text-highlight-bg, hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%));
  --titlebar-background: var(--color-base-20, hsl(0, 0%, 19.5%));
  --titlebar-background-focused: var(--color-base-30-transp, #36363680);
  --titlebar-border-color: var(--background-modifier-border, hsl(0, 0%, 26.7%));
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 64.6%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0, 0%, 100%));
  --vault-profile-color: var(--text-normal, hsl(0, 0%, 100%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0, 0%, 100%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 26.7%));
  background-color: var(--background-secondary, rgb(68, 68, 68));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(26, 26, 26));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary-alt, rgb(35, 35, 35));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 68, 68);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 26.7%));
  background-color: var(--background-secondary, rgb(68, 68, 68));
  border-left-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(215, 248, 139));
  outline: rgb(215, 248, 139) none 0px;
  text-decoration-color: rgb(215, 248, 139);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(172, 139, 248));
  outline: rgb(172, 139, 248) none 0px;
  text-decoration-color: rgb(172, 139, 248);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(172, 139, 248));
  outline: rgb(172, 139, 248) none 0px;
  text-decoration-color: rgb(172, 139, 248);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(215, 248, 139));
  outline: rgb(215, 248, 139) none 0px;
  text-decoration-color: rgb(215, 248, 139);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(199, 245, 92, 0.5));
  color: var(--text-normal, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(255, 255, 255));
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(139, 101, 228));
  border-color: rgb(139, 101, 228);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(165, 165, 165));
  outline: rgb(165, 165, 165) none 0px;
  text-decoration-color: rgb(165, 165, 165);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--interactive-accent, rgb(138, 92, 245));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--background-semitransp-alt, rgba(35, 35, 35, 0.85));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: var(--table-text-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: var(--table-header-color, rgb(255, 255, 255));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(35, 35, 35));
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: var(--code-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(35, 35, 35));
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(0, 0%, 13.6%));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(35, 35, 35));
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  --embed-title-size: calc(var(--font-text-size)*0.85);
  background-color: var(--background-semitransp-alt, rgba(35, 35, 35, 0.85));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .transclude-inner {
  --embed-title-size: calc(var(--font-text-size)*0.85);
  background-color: var(--background-semitransp-alt, rgba(35, 35, 35, 0.85));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 26, 26);
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
  background-color: rgb(112, 112, 112);
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 255, 255);
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
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-blurred, rgb(26, 26, 26));
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-width: 0px;
  border-left-color: rgb(89, 89, 89);
  border-left-width: 0px;
  border-right-color: rgb(89, 89, 89);
  border-right-width: 0px;
  border-top-color: rgb(89, 89, 89);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(73, 13, 211, 0.25));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-width: 0px;
  border-left-color: rgb(89, 89, 89);
  border-left-width: 0px;
  border-right-color: rgb(89, 89, 89);
  border-right-width: 0px;
  border-top-color: rgb(89, 89, 89);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(73, 13, 211, 0.25));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(73, 13, 211, 0.25));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  padding-bottom: var(--size-4-2, 8px);
  padding-top: var(--size-4-2, 8px);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(165, 165, 165));
  cursor: var(--cursor, pointer);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(165, 165, 165));
  cursor: var(--cursor, pointer);
  font-weight: var(--nav-item-weight, 600);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: var(--icon-color, rgb(165, 165, 165));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(68, 68, 68));
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: var(--status-bar-text-color, rgb(165, 165, 165));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(165, 165, 165);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(165, 165, 165));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(165, 165, 165);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(165, 165, 165));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: var(--icon-color, rgb(165, 165, 165));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(165, 165, 165);
  stroke: rgb(165, 165, 165);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(112, 112, 112));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  --embed-title-size: calc(var(--font-text-size)*0.85);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(68, 68, 68));
  border-color: rgb(255, 255, 255);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(68, 68, 68);
  color: var(--table-header-color, rgb(255, 255, 255));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: var(--text-muted, rgb(165, 165, 165));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(68, 68, 68);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(26, 26, 26));
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-primary-alt, rgb(35, 35, 35));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(54, 54, 54, 0.5));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(68, 68, 68));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: var(--text-normal, rgb(165, 165, 165));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(35, 35, 35));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--code-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent-i-h: calc(var(--accent-h) + 180);
  --accent-l-alt: min(var(--accent-l), 40%);
  --accent-s-alt: min(calc(var(--accent-s)*1.25), 75%);
  --background-blurred: var(--background-primary, hsl(0, 0%, 100%));
  --background-blurred-alt: var(--background-primary-alt, hsl(0, 0%, 95.5%));
  --background-modifier-border: var(--color-base-30, hsl(0, 0%, 81.2%));
  --background-modifier-border-focus: var(--color-base-40, hsl(0, 0%, 72.7%));
  --background-modifier-border-hover: var(--color-base-35, hsl(0, 0%, 77.0%));
  --background-modifier-form-field: var(--color-base-15, hsl(0, 0%, 92.4%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(0, 0%, 92.4%));
  --background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
  --background-primary: var(--color-base-00, hsl(0, 0%, 100%));
  --background-primary-alt: var(--color-base-10, hsl(0, 0%, 95.5%));
  --background-secondary: var(--color-base-30, hsl(0, 0%, 81.2%));
  --background-secondary-alt: var(--color-base-50, hsl(0, 0%, 98.2%));
  --background-semitransp: hsla(0, 0%, var(--color-00-l), 85%);
  --background-semitransp-alt: hsla(0, 0%, var(--color-10-l), 85%);
  --bases-cards-background: var(--background-primary, hsl(0, 0%, 100%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(0, 0%, 95.5%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --bases-table-border-color: var(--table-border-color, hsl(0, 0%, 81.2%));
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 0%, 100%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(0, 0%, 95.5%));
  --bases-table-group-background: var(--background-primary-alt, hsl(0, 0%, 95.5%));
  --bases-table-header-background: var(--background-primary, hsl(0, 0%, 100%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(258, 88%, 63.4%, 25%));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%, 100%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(258, 88%, 63.4%, 25%));
  --blockquote-border-thickness: 0;
  --blur-size: 4;
  --bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
  --bold-h: var(--accent-i-h, 438);
  --button-alt-h: var(--accent-h, 258);
  --button-h: var(--accent-h, 258);
  --callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
  --callout-h: var(--accent-h, 258);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3, 12px 12px 12px 24px) 24px;
  --canvas-background: var(--background-primary, hsl(0, 0%, 100%));
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --canvas-dot-pattern: var(--color-base-30, hsl(0, 0%, 81.2%));
  --caret-color: var(--text-normal, hsl(0, 0%, 10%));
  --checkbox-border-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --checkbox-border-color-hover: var(--text-muted, hsl(0, 0%, 43.4%));
  --checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s)*0.8), var(--color-70-l));
  --checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
  --checkbox-marker-color: var(--background-primary, hsl(0, 0%, 100%));
  --checklist-done-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --code-background: var(--background-primary-alt, hsl(0, 0%, 95.5%));
  --code-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --code-bracket-background: var(--background-modifier-hover, hsl(258, 88%, 63.4%, 25%));
  --code-comment: var(--text-faint, hsl(0, 0%, 63.4%));
  --code-normal: var(--text-normal, hsl(0, 0%, 10%));
  --code-punctuation: var(--text-muted, hsl(0, 0%, 43.4%));
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --color-00-l: 100%;
  --color-05-l: 98.2%;
  --color-10-l: 95.5%;
  --color-100-l: 10%;
  --color-15-l: 92.4%;
  --color-20-l: 88.9%;
  --color-25-l: 85.2%;
  --color-30-l: 81.2%;
  --color-35-l: 77.0%;
  --color-40-l: 72.7%;
  --color-50-l: 63.4%;
  --color-60-l: 53.7%;
  --color-70-l: 43.4%;
  --color-80-l: 32.7%;
  --color-90-l: 21.5%;
  --color-base-00: hsl(0, 0%, var(--color-00-l));
  --color-base-00-transp: #ffffff80;
  --color-base-05: hsl(0, 0%, var(--color-05-l));
  --color-base-10: hsl(0, 0%, var(--color-10-l));
  --color-base-10-transp: #fafafa80;
  --color-base-100: hsl(0, 0%, var(--color-100-l));
  --color-base-15: hsl(0, 0%, var(--color-15-l));
  --color-base-20: hsl(0, 0%, var(--color-20-l));
  --color-base-20-transp: #f6f6f680;
  --color-base-25: hsl(0, 0%, var(--color-25-l));
  --color-base-30: hsl(0, 0%, var(--color-30-l));
  --color-base-30-transp: #e0e0e080;
  --color-base-35: hsl(0, 0%, var(--color-35-l));
  --color-base-40: hsl(0, 0%, var(--color-40-l));
  --color-base-50: hsl(0, 0%, var(--color-50-l));
  --color-base-60: hsl(0, 0%, var(--color-60-l));
  --color-base-70: hsl(0, 0%, var(--color-70-l));
  --color-base-80: hsl(0, 0%, var(--color-80-l));
  --color-base-90: hsl(0, 0%, var(--color-90-l));
  --dark: var(--text-normal, var(--color-base-100, hsl(0, 0%, 10%)));
  --darkgray: var(--text-normal, var(--color-base-100, hsl(0, 0%, 10%)));
  --divider-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --dropdown-background: var(--interactive-normal, hsl(0, 0%, 100%));
  --dropdown-background-hover: var(--interactive-hover, hsl(0, 0%, 95.5%));
  --embed-border-left: 1px solid var(--interactive-accent);
  --embed-border-right: dashed white 1px;
  --embed-max-height: 80vh;
  --file-header-background: var(--background-primary, hsl(0, 0%, 100%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%, 100%));
  --file-header-font-weight: 600;
  --flair-background: var(--interactive-normal, hsl(0, 0%, 100%));
  --flair-color: var(--text-normal, hsl(0, 0%, 10%));
  --footnote-divider-color: var(--metadata-divider-color, hsl(0, 0%, 81.2%));
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 63.4%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(258, 88%, 63.4%, 25%));
  --graph-node: var(--text-muted, hsl(0, 0%, 43.4%));
  --graph-node-unresolved: var(--text-faint, hsl(0, 0%, 63.4%));
  --graph-text: var(--text-normal, hsl(0, 0%, 10%));
  --gray: var(--text-muted, var(--color-base-70, hsl(0, 0%, 43.4%)));
  --heading-formatting: var(--text-faint, hsl(0, 0%, 63.4%));
  --highlight: var(--text-highlight-bg, hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%));
  --hr-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --icon-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --icon-color-focused: var(--text-normal, hsl(0, 0%, 10%));
  --icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
  --input-date-separator: var(--text-faint, hsl(0, 0%, 63.4%));
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --interactive-hover: var(--color-base-10, hsl(0, 0%, 95.5%));
  --interactive-normal: var(--color-base-00, hsl(0, 0%, 100%));
  --italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
  --italic-h: var(--accent-h, 258);
  --light: var(--background-primary, var(--color-base-00, hsl(0, 0%, 100%)));
  --lightgray: var(--background-secondary, var(--color-base-30, hsl(0, 0%, 81.2%)));
  --list-marker-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 43.4%));
  --max-highlight: 65%;
  --menu-background: var(--background-secondary, hsl(0, 0%, 81.2%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(0, 0%, 77.0%));
  --metadata-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --metadata-divider-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --metadata-input-background-active: var(--background-modifier-hover, hsl(258, 88%, 63.4%, 25%));
  --metadata-input-text-color: var(--text-normal, hsl(0, 0%, 10%));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(258, 88%, 63.4%, 25%));
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 43.4%));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(258, 88%, 63.4%, 25%));
  --min-highlight: 45%;
  --modal-background: var(--background-primary, hsl(0, 0%, 100%));
  --modal-border-width: var(--border-width, 0);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 63.4%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 63.4%));
  --nav-heading-color: var(--text-normal, hsl(0, 0%, 10%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 63.4%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 43.4%));
  --nav-heading-color-hover: var(--text-normal, hsl(0, 0%, 10%));
  --nav-item-background-active: var(--interactive-accent, hsl(257, 88.88%, 70.95%));
  --nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
  --nav-item-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --nav-item-color-active: var(--text-on-accent, white);
  --nav-item-color-hover: var(--icon-color-hover, hsl(258,  88%, 21.5%));
  --nav-item-color-selected: var(--text-normal, hsl(0, 0%, 10%));
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 43.4%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 43.4%));
  --pdf-background: var(--background-primary, hsl(0, 0%, 100%));
  --pdf-page-background: var(--background-primary, hsl(0, 0%, 100%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 0%, 100%));
  --pill-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(0, 0%, 77.0%));
  --pill-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --pill-color-hover: var(--text-normal, hsl(0, 0%, 10%));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 63.4%));
  --prompt-background: var(--background-primary, hsl(0, 0%, 100%));
  --prompt-border-width: var(--border-width, 0);
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 81.2%));
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 0%, 100%));
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --search-result-background: var(--background-primary, hsl(0, 0%, 100%));
  --setting-group-heading-color: var(--text-normal, hsl(0, 0%, 10%));
  --setting-items-background: var(--background-primary-alt, hsl(0, 0%, 95.5%));
  --setting-items-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 43.4%));
  --shiki-code-background: var(--code-background, hsl(0, 0%, 95.5%));
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 63.4%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 43.4%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 43.4%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 43.4%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 43.4%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(0, 0%, 77.0%));
  --slider-track-background: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 81.2%));
  --status-bar-border-color: var(--divider-color, hsl(0, 0%, 81.2%));
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --suggestion-background: var(--background-primary, hsl(0, 0%, 100%));
  --tab-background-active: var(--background-primary, hsl(0, 0%, 100%));
  --tab-container-background: var(--color-base-20, hsl(0, 0%, 88.9%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(0, 0%, 77.0%));
  --tab-outline-color: var(--divider-color, hsl(0, 0%, 81.2%));
  --tab-outline-width: 0;
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 81.2%));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 43.4%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 43.4%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 43.4%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0, 0%, 10%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --table-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 63.4%));
  --table-header-border-color: var(--table-border-color, hsl(0, 0%, 81.2%));
  --table-header-color: var(--text-normal, hsl(0, 0%, 10%));
  --text-faint: var(--color-base-50, hsl(0, 0%, 63.4%));
  --text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
  --text-highlight-h: var(--accent-i-h, 438);
  --text-muted: var(--color-base-70, hsl(0, 0%, 43.4%));
  --text-normal: var(--color-base-100, hsl(0, 0%, 10%));
  --textHighlight: var(--text-highlight-bg, hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%));
  --titlebar-background: var(--color-base-20, hsl(0, 0%, 88.9%));
  --titlebar-background-focused: var(--color-base-30-transp, #e0e0e080);
  --titlebar-border-color: var(--background-modifier-border, hsl(0, 0%, 81.2%));
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 43.4%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0, 0%, 10%));
  --vault-profile-color: var(--text-normal, hsl(0, 0%, 10%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0, 0%, 10%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 81.2%));
  background-color: var(--background-secondary, rgb(207, 207, 207));
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary-alt, rgb(244, 244, 244));
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 81.2%));
  background-color: var(--background-secondary, rgb(207, 207, 207));
  border-left-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(113, 157, 10));
  outline: rgb(113, 157, 10) none 0px;
  text-decoration-color: rgb(113, 157, 10);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(54, 10, 157));
  outline: rgb(54, 10, 157) none 0px;
  text-decoration-color: rgb(54, 10, 157);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(54, 10, 157));
  outline: rgb(54, 10, 157) none 0px;
  text-decoration-color: rgb(54, 10, 157);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(113, 157, 10));
  outline: rgb(113, 157, 10) none 0px;
  text-decoration-color: rgb(113, 157, 10);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(199, 245, 92, 0.5));
  color: var(--text-normal, rgb(26, 26, 26));
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body del {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(26, 26, 26));
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(162, 162, 162);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(80, 33, 189));
  border-color: rgb(80, 33, 189);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(111, 111, 111));
  outline: rgb(111, 111, 111) none 0px;
  text-decoration-color: rgb(111, 111, 111);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--interactive-accent, rgb(152, 115, 247));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--background-semitransp-alt, rgba(244, 244, 244, 0.85));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body table {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: var(--table-text-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(207, 207, 207);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: var(--table-header-color, rgb(26, 26, 26));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(244, 244, 244));
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: var(--code-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(244, 244, 244));
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
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(0, 0%, 95.5%));
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(244, 244, 244));
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude {
  --embed-title-size: calc(var(--font-text-size)*0.85);
  background-color: var(--background-semitransp-alt, rgba(244, 244, 244, 0.85));
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 0px;
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .transclude-inner {
  --embed-title-size: calc(var(--font-text-size)*0.85);
  background-color: var(--background-semitransp-alt, rgba(244, 244, 244, 0.85));
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 162, 162);
  border-left-color: rgb(162, 162, 162);
  border-right-color: rgb(162, 162, 162);
  border-top-color: rgb(162, 162, 162);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
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
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(162, 162, 162);
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(26, 26, 26);
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
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-blurred, rgb(255, 255, 255));
  border-bottom-color: rgb(185, 185, 185);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 185, 185);
  border-left-width: 0px;
  border-right-color: rgb(185, 185, 185);
  border-right-width: 0px;
  border-top-color: rgb(185, 185, 185);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(129, 80, 244, 0.25));
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(185, 185, 185);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 185, 185);
  border-left-width: 0px;
  border-right-color: rgb(185, 185, 185);
  border-right-width: 0px;
  border-top-color: rgb(185, 185, 185);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(129, 80, 244, 0.25));
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(129, 80, 244, 0.25));
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  --h1-color: rgba(var(--callout-color), 75%);
  --h2-color: rgb(var(--callout-color));
  --link-color: rgb(var(--callout-color));
  --link-color-hover: rgba(var(--callout-color), 85%);
  --link-decoration-color: rgba(var(--callout-color), 50%);
  --link-unresolved-color: rgb(var(--callout-color));
  --link-unresolved-color-hover: rgba(var(--callout-color), 45%);
  --link-unresolved-decoration-color: rgba(var(--callout-color), 50%);
  padding-bottom: var(--size-4-2, 8px);
  padding-top: var(--size-4-2, 8px);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(111, 111, 111));
  cursor: var(--cursor, pointer);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(111, 111, 111));
  cursor: var(--cursor, pointer);
  font-weight: var(--nav-item-weight, 600);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: var(--icon-color, rgb(111, 111, 111));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(207, 207, 207));
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: var(--status-bar-text-color, rgb(111, 111, 111));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(111, 111, 111);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(111, 111, 111));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 111, 111);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(111, 111, 111));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: var(--icon-color, rgb(111, 111, 111));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(111, 111, 111);
  stroke: rgb(111, 111, 111);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(162, 162, 162));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  --embed-title-size: calc(var(--font-text-size)*0.85);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(26, 26, 26);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(207, 207, 207);
  color: var(--table-header-color, rgb(26, 26, 26));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: var(--text-muted, rgb(111, 111, 111));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-primary-alt, rgb(244, 244, 244));
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(224, 224, 224, 0.5));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(26, 26, 26);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(207, 207, 207));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: var(--text-normal, rgb(111, 111, 111));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(244, 244, 244));
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: var(--code-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 26, 26);
}`,
  },
  classSettings: {
    "color-scheme-monochrome": {
      general: `.color-scheme-monochrome {
--text-highlight-h: var(--accent-h);
--italic-h: var(--accent-h);
--bold-h: var(--accent-h);
--callout-h: var(--accent-h);
--button-h: var(--accent-h);
--button-alt-h: var(--accent-h);
}

.color-scheme-monochrome {
--italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
--bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
--text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
--callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
--background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
/*Titlebar and ribbon*/
--icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
--nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
--nav-item-background-active: var(--interactive-accent);
--nav-item-color-hover: var(--icon-color-hover);
--nav-item-color-active: var(--text-on-accent);
--checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s) * 0.8), var(--color-70-l));
--checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
--background-modifier-form-field: var(--color-base-15);
--color-base-00:   hsl(0, 0%, var(--color-00-l));
--color-base-05:   hsl(0, 0%, var(--color-05-l));
--color-base-10:   hsl(0, 0%, var(--color-10-l));
--color-base-15:   hsl(0, 0%, var(--color-15-l));
--color-base-20:   hsl(0, 0%, var(--color-20-l));
--color-base-25:   hsl(0, 0%, var(--color-25-l));
--color-base-30:   hsl(0, 0%, var(--color-30-l));
--color-base-35:   hsl(0, 0%, var(--color-35-l));
--color-base-40:   hsl(0, 0%, var(--color-40-l));
--color-base-50:   hsl(0, 0%, var(--color-50-l));
--color-base-60:   hsl(0, 0%, var(--color-60-l));
--color-base-70:   hsl(0, 0%, var(--color-70-l));
--color-base-80:   hsl(0, 0%, var(--color-80-l));
--color-base-90:   hsl(0, 0%, var(--color-90-l));
--color-base-100:  hsl(0, 0%, var(--color-100-l));
}`,
    },
    "color-scheme-complementary": {
      general: `.color-scheme-complementary {
--accent-i-h: calc(var(--accent-h) + 180);
--text-highlight-h: var(--accent-i-h);
--italic-h: var(--accent-h);
--bold-h: var(--accent-i-h);
--callout-h: var(--accent-h);
--button-h: var(--accent-h);
--button-alt-h: var(--accent-h);
}

.color-scheme-complementary {
--italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
--bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
--text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
--callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
--background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
/*Titlebar and ribbon*/
--icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
--nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
--nav-item-background-active: var(--interactive-accent);
--nav-item-color-hover: var(--icon-color-hover);
--nav-item-color-active: var(--text-on-accent);
--checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s) * 0.8), var(--color-70-l));
--checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
--background-modifier-form-field: var(--color-base-15);
--color-base-00:   hsl(0, 0%, var(--color-00-l));
--color-base-05:   hsl(0, 0%, var(--color-05-l));
--color-base-10:   hsl(0, 0%, var(--color-10-l));
--color-base-15:   hsl(0, 0%, var(--color-15-l));
--color-base-20:   hsl(0, 0%, var(--color-20-l));
--color-base-25:   hsl(0, 0%, var(--color-25-l));
--color-base-30:   hsl(0, 0%, var(--color-30-l));
--color-base-35:   hsl(0, 0%, var(--color-35-l));
--color-base-40:   hsl(0, 0%, var(--color-40-l));
--color-base-50:   hsl(0, 0%, var(--color-50-l));
--color-base-60:   hsl(0, 0%, var(--color-60-l));
--color-base-70:   hsl(0, 0%, var(--color-70-l));
--color-base-80:   hsl(0, 0%, var(--color-80-l));
--color-base-90:   hsl(0, 0%, var(--color-90-l));
--color-base-100:  hsl(0, 0%, var(--color-100-l));
}`,
    },
    "color-scheme-even-triad": {
      general: `.color-scheme-even-triad {
--accent-even-2-h: calc(var(--accent-h) - 120);
--accent-even-3-h: calc(var(--accent-h) + 120);
--text-highlight-h: var(--accent-even-3-h);
--italic-h: var(--accent-even-2-h);
--bold-h: var(--accent-even-3-h);
--callout-h: var(--accent-h);
--button-h: var(--accent-h);
--button-alt-h: var(--accent-h);
}

.color-scheme-even-triad {
--italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
--bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
--text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
--callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
--background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
/*Titlebar and ribbon*/
--icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
--nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
--nav-item-background-active: var(--interactive-accent);
--nav-item-color-hover: var(--icon-color-hover);
--nav-item-color-active: var(--text-on-accent);
--checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s) * 0.8), var(--color-70-l));
--checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
--background-modifier-form-field: var(--color-base-15);
--color-base-00:   hsl(0, 0%, var(--color-00-l));
--color-base-05:   hsl(0, 0%, var(--color-05-l));
--color-base-10:   hsl(0, 0%, var(--color-10-l));
--color-base-15:   hsl(0, 0%, var(--color-15-l));
--color-base-20:   hsl(0, 0%, var(--color-20-l));
--color-base-25:   hsl(0, 0%, var(--color-25-l));
--color-base-30:   hsl(0, 0%, var(--color-30-l));
--color-base-35:   hsl(0, 0%, var(--color-35-l));
--color-base-40:   hsl(0, 0%, var(--color-40-l));
--color-base-50:   hsl(0, 0%, var(--color-50-l));
--color-base-60:   hsl(0, 0%, var(--color-60-l));
--color-base-70:   hsl(0, 0%, var(--color-70-l));
--color-base-80:   hsl(0, 0%, var(--color-80-l));
--color-base-90:   hsl(0, 0%, var(--color-90-l));
--color-base-100:  hsl(0, 0%, var(--color-100-l));
}`,
    },
    "color-scheme-comp-triad": {
      general: `.color-scheme-comp-triad {
--accent-comp-2-h: calc(var(--accent-h) - 165);
--accent-comp-3-h: calc(var(--accent-h) + 165);
--text-highlight-h: var(--accent-comp-3-h);
--italic-h: var(--accent-comp-2-h);
--bold-h: var(--accent-comp-3-h);
--callout-h: var(--accent-h);
--button-h: var(--accent-h);
--button-alt-h: var(--accent-h);
}

.color-scheme-comp-triad {
--italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
--bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
--text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
--callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
--background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
/*Titlebar and ribbon*/
--icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
--nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
--nav-item-background-active: var(--interactive-accent);
--nav-item-color-hover: var(--icon-color-hover);
--nav-item-color-active: var(--text-on-accent);
--checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s) * 0.8), var(--color-70-l));
--checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
--background-modifier-form-field: var(--color-base-15);
--color-base-00:   hsl(0, 0%, var(--color-00-l));
--color-base-05:   hsl(0, 0%, var(--color-05-l));
--color-base-10:   hsl(0, 0%, var(--color-10-l));
--color-base-15:   hsl(0, 0%, var(--color-15-l));
--color-base-20:   hsl(0, 0%, var(--color-20-l));
--color-base-25:   hsl(0, 0%, var(--color-25-l));
--color-base-30:   hsl(0, 0%, var(--color-30-l));
--color-base-35:   hsl(0, 0%, var(--color-35-l));
--color-base-40:   hsl(0, 0%, var(--color-40-l));
--color-base-50:   hsl(0, 0%, var(--color-50-l));
--color-base-60:   hsl(0, 0%, var(--color-60-l));
--color-base-70:   hsl(0, 0%, var(--color-70-l));
--color-base-80:   hsl(0, 0%, var(--color-80-l));
--color-base-90:   hsl(0, 0%, var(--color-90-l));
--color-base-100:  hsl(0, 0%, var(--color-100-l));
}`,
    },
    "color-scheme-analogous": {
      general: `.color-scheme-analogous {
--accent-ana-2-h: calc(var(--accent-h) - 30);
--accent-ana-3-h: calc(var(--accent-h) + 30);
--text-highlight-h: var(--accent-ana-3-h);
--italic-h: var(--accent-ana-2-h);
--bold-h: var(--accent-ana-3-h);
--callout-h: var(--accent-h);
--button-h: var(--accent-h);
--button-alt-h: var(--accent-h);
}

.color-scheme-analogous {
--italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
--bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
--text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
--callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
--background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
/*Titlebar and ribbon*/
--icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
--nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
--nav-item-background-active: var(--interactive-accent);
--nav-item-color-hover: var(--icon-color-hover);
--nav-item-color-active: var(--text-on-accent);
--checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s) * 0.8), var(--color-70-l));
--checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
--background-modifier-form-field: var(--color-base-15);
--color-base-00:   hsl(0, 0%, var(--color-00-l));
--color-base-05:   hsl(0, 0%, var(--color-05-l));
--color-base-10:   hsl(0, 0%, var(--color-10-l));
--color-base-15:   hsl(0, 0%, var(--color-15-l));
--color-base-20:   hsl(0, 0%, var(--color-20-l));
--color-base-25:   hsl(0, 0%, var(--color-25-l));
--color-base-30:   hsl(0, 0%, var(--color-30-l));
--color-base-35:   hsl(0, 0%, var(--color-35-l));
--color-base-40:   hsl(0, 0%, var(--color-40-l));
--color-base-50:   hsl(0, 0%, var(--color-50-l));
--color-base-60:   hsl(0, 0%, var(--color-60-l));
--color-base-70:   hsl(0, 0%, var(--color-70-l));
--color-base-80:   hsl(0, 0%, var(--color-80-l));
--color-base-90:   hsl(0, 0%, var(--color-90-l));
--color-base-100:  hsl(0, 0%, var(--color-100-l));
}`,
    },
    "color-scheme-tetradic": {
      general: `.color-scheme-tetradic {
--accent-tetra-2-h: calc(var(--accent-h) - 90);
--accent-tetra-3-h: calc(var(--accent-h) + 180);
--accent-tetra-4-h: calc(var(--accent-h) + 90);
--text-highlight-h: var(--accent-tetra-2-h);
--italic-h: var(--accent-tetra-4-h);
--bold-h: var(--accent-tetra-3-h);
--callout-h: var(--accent-h);
--button-h: var(--accent-h);
--button-alt-h: var(--accent-tetra-3-h);
}

.color-scheme-tetradic {
--italic-color: hsl(var(--italic-h), var(--accent-s), var(--color-80-l));
--bold-color: hsl(var(--bold-h),  var(--accent-s), var(--color-80-l));
--text-highlight-bg: hsla( var(--text-highlight-h), var(--accent-s), var(--accent-l), 50%);
--callout-background-hsla: var(--callout-h), var(--accent-s), var(--accent-l), 20%;
--background-modifier-hover: hsl(var(--button-h), var(--accent-s), var(--color-50-l), 25%);
/*Titlebar and ribbon*/
--icon-color-hover: hsl(var(--button-h),  var(--accent-s), var(--color-90-l));
--nav-item-background-hover: hsla(var(--button-h), var(--accent-s), var(--color-40-l), 33%);
--nav-item-background-active: var(--interactive-accent);
--nav-item-color-hover: var(--icon-color-hover);
--nav-item-color-active: var(--text-on-accent);
--checkbox-color: hsl(var(--button-alt-h),  calc(var(--accent-s) * 0.8), var(--color-70-l));
--checkbox-color-hover: hsl(var(--button-alt-h),  var(--accent-s), var(--color-80-l));
--background-modifier-form-field: var(--color-base-15);
--color-base-00:   hsl(0, 0%, var(--color-00-l));
--color-base-05:   hsl(0, 0%, var(--color-05-l));
--color-base-10:   hsl(0, 0%, var(--color-10-l));
--color-base-15:   hsl(0, 0%, var(--color-15-l));
--color-base-20:   hsl(0, 0%, var(--color-20-l));
--color-base-25:   hsl(0, 0%, var(--color-25-l));
--color-base-30:   hsl(0, 0%, var(--color-30-l));
--color-base-35:   hsl(0, 0%, var(--color-35-l));
--color-base-40:   hsl(0, 0%, var(--color-40-l));
--color-base-50:   hsl(0, 0%, var(--color-50-l));
--color-base-60:   hsl(0, 0%, var(--color-60-l));
--color-base-70:   hsl(0, 0%, var(--color-70-l));
--color-base-80:   hsl(0, 0%, var(--color-80-l));
--color-base-90:   hsl(0, 0%, var(--color-90-l));
--color-base-100:  hsl(0, 0%, var(--color-100-l));
}`,
    },
    "blur-enabled": {
      general: `.blur-enabled {
--blur-effect: blur(calc(var(--blur-size) * var(--blur-size) * 1px));
--background-blurred: var(--background-semitransp);
--background-blurred-alt: var(--background-semitransp-alt);
}`,
    },
  },
};
