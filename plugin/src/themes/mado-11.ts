import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mado-11",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "mado-11",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 210;
  --accent-l: 62%;
  --accent-s: 93%;
  --background-fifth: hsla(215, 10%, 10%, 0.1);
  --background-fourth: hsla(215, 17%, 22%, 0.9);
  --background-modifier-active-hover: hsla(210, 93%, 62%, 0.1);
  --background-modifier-border: hsla(215, 22%, 13%, 1);
  --background-modifier-border-hover: hsla(210, 15%, 33%, 1);
  --background-modifier-error: hsla(365, 90%, 65%, 1);
  --background-modifier-error-hover: hsla(365, 90%, 65%, 1);
  --background-modifier-hover: hsla(207, 17%, 10%, 0.5);
  --background-primary: hsla(215, 17%, 19%, 1);
  --background-primary-alt: hsla(214, 24%, 15%, 1);
  --background-secondary: hsla(214, 24%, 15%, 1);
  --background-secondary-alt: hsla(215, 22%, 13%, 1);
  --bases-cards-background: hsla(215, 17%, 19%, 1);
  --bases-cards-cover-background: hsla(214, 24%, 15%, 1);
  --bases-cards-shadow: 0 0 0 1px hsla(215, 22%, 13%, 1);
  --bases-cards-shadow-hover: 0 0 0 1px hsla(210, 15%, 33%, 1);
  --bases-embed-border-color: hsla(215, 22%, 13%, 1);
  --bases-group-heading-property-color: hsl(218, 17%, 58%);
  --bases-table-border-color: hsla(215, 22%, 13%, 1);
  --bases-table-cell-background-active: hsla(215, 17%, 19%, 1);
  --bases-table-cell-background-disabled: hsla(214, 24%, 15%, 1);
  --bases-table-cell-background-selected: hsla(210, 93%, 62%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(210, 106%, 65%);
  --bases-table-group-background: hsla(214, 24%, 15%, 1);
  --bases-table-header-background: hsla(215, 17%, 19%, 1);
  --bases-table-header-background-hover: hsla(207, 17%, 10%, 0.5);
  --bases-table-header-color: hsl(218, 17%, 58%);
  --bases-table-summary-background: hsla(215, 17%, 19%, 1);
  --bases-table-summary-background-hover: hsla(207, 17%, 10%, 0.5);
  --bgcolor-h: 215;
  --bgcolor-l: 19%;
  --bgcolor-s: 17%;
  --blockquote-border-color: hsl(210, 106%, 65%);
  --blockquote-color: hsl(218, 17%, 62%);
  --blur-background: color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent) linear-gradient(hsla(215, 22%, 13%, 1), color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent));
  --bold-weight: 700;
  --border: 1px solid hsla(215, 22%, 13%, 1);
  --button-padding-icon: 7px;
  --button-padding-long: 11px 15px;
  --button-radius: 4px;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: hsla(215, 17%, 19%, 1);
  --canvas-card-label-color: hsla(217, 18%, 50%, 0.7);
  --canvas-dot-pattern: hsla(215, 22%, 13%, 1);
  --caret-color: hsla(0, 0%, 73%, 1);
  --checkbox-border-color: hsla(217, 18%, 50%, 0.7);
  --checkbox-border-color-hover: hsl(218, 17%, 58%);
  --checkbox-color: hsl(210, 106%, 65%);
  --checkbox-color-hover: hsl(207, 80%, 59%);
  --checkbox-marker-color: hsla(215, 17%, 19%, 1);
  --checklist-done-color: hsla(217, 18%, 50%, 0.7);
  --code-background: hsla(214, 24%, 15%, 1);
  --code-border-color: hsla(215, 22%, 13%, 1);
  --code-bracket-background: hsla(207, 17%, 10%, 0.5);
  --code-comment: hsla(217, 18%, 50%, 0.7);
  --code-normal: hsl(218, 17%, 58%);
  --code-operator: hsla(365, 90%, 65%, 1);
  --code-punctuation: hsl(218, 17%, 58%);
  --code-tag: hsla(365, 90%, 65%, 1);
  --collapse-icon-color: hsla(217, 18%, 50%, 0.7);
  --collapse-icon-color-collapsed: hsl(207, 80%, 59%);
  --color-accent: hsl(210, 106%, 65%);
  --color-accent-1: hsl(207, 80%, 59%);
  --color-accent-2: hsl(210, 100%, 64%);
  --color-accent-hsl: 210, 93%, 62%;
  --color-base-00: hsla(215, 17%, 19%, 1);
  --color-base-00-0: hsla(215, 17%, 22%, 0.9);
  --color-base-00-0-trans: hsla(215, 17%, 22%, 0.5);
  --color-base-00-trans: hsla(215, 17%, 19%, 0.5);
  --color-base-00-trans-alt: hsla(215, 17%, 13%, 0.8);
  --color-base-05: hsla(207, 17%, 10%, 0.5);
  --color-base-10: hsla(214, 24%, 15%, 1);
  --color-base-100: hsla(0, 0%, 73%, 1);
  --color-base-20: hsla(214, 24%, 15%, 1);
  --color-base-20-0: hsla(215, 10%, 10%, 0.1);
  --color-base-20-trans: hsla(214, 24%, 15%, 0.5);
  --color-base-30: hsla(215, 22%, 13%, 1);
  --color-base-35: hsla(210, 15%, 33%, 1);
  --color-base-50: hsla(217, 18%, 50%, 0.7);
  --color-base-70: hsl(218, 17%, 58%);
  --color-base-hover: hsla(207, 17%, 10%, 0.5);
  --color-base-shadow: hsla(207, 10%, 10%, 0.1);
  --color-base-shadow-hover: hsla(212, 17%, 0%, 0.3);
  --color-highlight: hsla(45, 63%, 63%, 1);
  --color-italic: hsla(215, 33%, 60%, 1);
  --color-muted: hsl(218, 17%, 62%);
  --color-red: hsla(365, 90%, 65%, 1);
  --color-strikethrough: hsla(217, 18%, 50%, 0.7);
  --dark: var(--text-normal, hsla(0, 0%, 73%, 1));
  --darkgray: var(--text-normal, hsla(0, 0%, 73%, 1));
  --divider-color: hsla(215, 22%, 13%, 1);
  --divider-color-hover: hsl(210, 106%, 65%);
  --divider-width: 4px;
  --dropdown-background: hsla(215, 22%, 13%, 1);
  --dropdown-background-hover: hsla(210, 15%, 33%, 1);
  --embed-block-shadow-hover: 0 0 0 1px hsla(215, 22%, 13%, 1), inset 0 0 0 1px hsla(215, 22%, 13%, 1);
  --embed-border-start: 2px solid hsl(210, 106%, 65%);
  --embed-padding: 13px 23px;
  --file-header-background: hsla(215, 17%, 19%, 1);
  --file-header-background-focused: hsla(215, 17%, 19%, 1);
  --flair-background: hsla(215, 22%, 13%, 1);
  --flair-color: hsla(0, 0%, 73%, 1);
  --footnote-divider-color: hsla(215, 22%, 13%, 1);
  --footnote-id-color: hsl(218, 17%, 58%);
  --footnote-id-color-no-occurrences: hsla(217, 18%, 50%, 0.7);
  --footnote-input-background-active: hsla(207, 17%, 10%, 0.5);
  --graph-line: hsla(210, 15%, 33%, 1);
  --graph-node: hsl(218, 17%, 58%);
  --graph-node-focused: hsl(207, 80%, 59%);
  --graph-node-unresolved: hsla(217, 18%, 50%, 0.7);
  --graph-text: hsla(0, 0%, 73%, 1);
  --gray: var(--text-muted, hsl(218, 17%, 58%));
  --header-height: 43px;
  --heading-formatting: hsla(217, 18%, 50%, 0.7);
  --highlight: var(--text-highlight-bg, hsla(45, 53%, 53%, 1));
  --hovering-trigger-size: 13px;
  --hr-color: hsla(215, 22%, 13%, 1);
  --icon-color: hsl(218, 17%, 58%);
  --icon-color-active: hsl(207, 80%, 59%);
  --icon-color-focused: hsla(0, 0%, 73%, 1);
  --icon-color-hover: hsl(218, 17%, 58%);
  --icon-l: 20px;
  --icon-m: 20px;
  --icon-size: 20px;
  --inline-code-color: hsla(365, 90%, 65%, 1);
  --input-date-separator: hsla(217, 18%, 50%, 0.7);
  --input-placeholder-color: hsla(217, 18%, 50%, 0.7);
  --interactive-accent: hsl(210, 106%, 65%);
  --interactive-accent-hover: hsl(207, 80%, 59%);
  --interactive-accent-hsl: 210, 93%, 62%;
  --interactive-hover: hsla(210, 15%, 33%, 1);
  --interactive-normal: hsla(215, 22%, 13%, 1);
  --italic-color: hsla(215, 33%, 60%, 1);
  --light: var(--background-primary, hsla(215, 17%, 19%, 1));
  --lightgray: var(--background-secondary, hsla(214, 24%, 15%, 1));
  --link-color: hsl(207, 80%, 59%);
  --link-color-hover: hsl(210, 100%, 64%);
  --link-external-color: hsl(207, 80%, 59%);
  --link-external-color-hover: hsl(210, 100%, 64%);
  --link-unresolved-color: hsl(207, 80%, 59%);
  --link-unresolved-decoration-color: hsla(210, 93%, 62%, 0.3);
  --list-indent: 37px;
  --list-marker-color: hsla(217, 18%, 50%, 0.7);
  --list-marker-color-collapsed: hsl(207, 80%, 59%);
  --list-marker-color-hover: hsl(218, 17%, 58%);
  --menu-background: hsla(214, 24%, 15%, 1);
  --menu-border-color: hsla(210, 15%, 33%, 1);
  --metadata-border-color: hsla(215, 22%, 13%, 1);
  --metadata-divider-color: hsla(215, 22%, 13%, 1);
  --metadata-input-background-active: hsla(207, 17%, 10%, 0.5);
  --metadata-input-text-color: hsla(0, 0%, 73%, 1);
  --metadata-label-background-active: hsla(207, 17%, 10%, 0.5);
  --metadata-label-text-color: hsl(218, 17%, 58%);
  --metadata-label-text-color-hover: hsl(218, 17%, 58%);
  --metadata-property-background-active: hsla(207, 17%, 10%, 0.5);
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(210, 15%, 33%, 1);
  --modal-background: hsla(215, 17%, 19%, 1);
  --nav-collapse-icon-color: hsla(217, 18%, 50%, 0.7);
  --nav-collapse-icon-color-collapsed: hsla(217, 18%, 50%, 0.7);
  --nav-heading-color: hsla(0, 0%, 73%, 1);
  --nav-heading-color-collapsed: hsla(217, 18%, 50%, 0.7);
  --nav-heading-color-collapsed-hover: hsl(218, 17%, 58%);
  --nav-heading-color-hover: hsla(0, 0%, 73%, 1);
  --nav-item-background-active: hsla(207, 17%, 10%, 0.5);
  --nav-item-background-hover: hsla(207, 17%, 10%, 0.5);
  --nav-item-background-selected: hsla(210, 93%, 62%, 0.15);
  --nav-item-color: hsl(218, 17%, 58%);
  --nav-item-color-active: hsla(0, 0%, 73%, 1);
  --nav-item-color-highlighted: hsl(207, 80%, 59%);
  --nav-item-color-hover: hsla(0, 0%, 73%, 1);
  --nav-item-color-selected: hsla(0, 0%, 73%, 1);
  --nav-tag-color: hsla(217, 18%, 50%, 0.7);
  --nav-tag-color-active: hsl(218, 17%, 58%);
  --nav-tag-color-hover: hsl(218, 17%, 58%);
  --panel-radius: 8px;
  --panel-shadow: 0 1px 3px hsla(207, 10%, 10%, 0.1);
  --panel-shadow-hover: 0 3px 5px hsla(212, 17%, 0%, 0.3);
  --pdf-background: hsla(215, 17%, 19%, 1);
  --pdf-page-background: hsla(215, 17%, 19%, 1);
  --pdf-shadow: 0 0 0 1px hsla(215, 22%, 13%, 1);
  --pdf-sidebar-background: hsla(215, 17%, 19%, 1);
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(215, 22%, 13%, 1);
  --pill-border-color: hsla(215, 22%, 13%, 1);
  --pill-border-color-hover: hsla(210, 15%, 33%, 1);
  --pill-color: hsl(218, 17%, 58%);
  --pill-color-hover: hsla(0, 0%, 73%, 1);
  --pill-color-remove: hsla(217, 18%, 50%, 0.7);
  --pill-color-remove-hover: hsl(207, 80%, 59%);
  --prompt-background: hsla(215, 17%, 19%, 1);
  --raised-background: color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent) linear-gradient(hsla(215, 22%, 13%, 1), color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent));
  --ribbon-background: hsla(214, 24%, 15%, 1);
  --ribbon-background-collapsed: hsla(215, 17%, 19%, 1);
  --search-clear-button-color: hsl(218, 17%, 58%);
  --search-icon-color: hsl(218, 17%, 58%);
  --search-result-background: hsla(215, 17%, 19%, 1);
  --secondary: var(--text-accent, hsl(207, 80%, 59%));
  --setting-group-heading-color: hsla(0, 0%, 73%, 1);
  --setting-items-background: hsla(214, 24%, 15%, 1);
  --setting-items-border-color: hsla(215, 22%, 13%, 1);
  --shiki-active-tab-border-color: hsl(218, 17%, 58%);
  --shiki-code-background: hsla(214, 24%, 15%, 1);
  --shiki-code-comment: hsla(217, 18%, 50%, 0.7);
  --shiki-code-normal: hsl(218, 17%, 58%);
  --shiki-code-punctuation: hsl(218, 17%, 58%);
  --shiki-gutter-border-color: hsla(215, 22%, 13%, 1);
  --shiki-gutter-text-color: hsla(217, 18%, 50%, 0.7);
  --shiki-gutter-text-color-highlight: hsl(218, 17%, 58%);
  --shiki-highlight-neutral: hsl(218, 17%, 58%);
  --shiki-terminal-dots-color: hsla(217, 18%, 50%, 0.7);
  --sidebar-size-left: 270px;
  --sidebar-size-right: 270px;
  --slider-thumb-border-color: hsla(210, 15%, 33%, 1);
  --slider-track-background: hsla(215, 22%, 13%, 1);
  --status-bar-background: hsla(214, 24%, 15%, 1);
  --status-bar-border-color: hsla(215, 22%, 13%, 1);
  --status-bar-text-color: hsl(218, 17%, 58%);
  --suggestion-background: hsla(215, 17%, 19%, 1);
  --sync-avatar-color-1: hsla(365, 90%, 65%, 1);
  --tab-background-active: hsla(215, 17%, 19%, 1);
  --tab-container-background: hsla(214, 24%, 15%, 1);
  --tab-divider-color: hsla(210, 15%, 33%, 1);
  --tab-outline-color: hsla(215, 22%, 13%, 1);
  --tab-stacked-header-width: 53px;
  --tab-switcher-background: hsla(214, 24%, 15%, 1);
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(214, 24%, 15%, 1), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 106%, 65%);
  --tab-text-color: hsla(217, 18%, 50%, 0.7);
  --tab-text-color-active: hsl(218, 17%, 58%);
  --tab-text-color-focused: hsl(218, 17%, 58%);
  --tab-text-color-focused-active: hsl(218, 17%, 58%);
  --tab-text-color-focused-active-current: hsla(0, 0%, 73%, 1);
  --tab-text-color-focused-highlighted: hsl(207, 80%, 59%);
  --table-add-button-border-color: hsla(215, 22%, 13%, 1);
  --table-border-color: hsla(215, 22%, 13%, 1);
  --table-drag-handle-background-active: hsl(210, 106%, 65%);
  --table-drag-handle-color: hsla(217, 18%, 50%, 0.7);
  --table-header-border-color: hsla(215, 22%, 13%, 1);
  --table-header-color: hsla(0, 0%, 73%, 1);
  --table-selection: hsla(210, 93%, 62%, 0.1);
  --table-selection-border-color: hsl(210, 106%, 65%);
  --tag-background: hsla(210, 93%, 62%, 0.1);
  --tag-background-hover: hsla(210, 93%, 62%, 0.2);
  --tag-border-color: hsla(210, 93%, 62%, 0.15);
  --tag-border-color-hover: hsla(210, 93%, 62%, 0.15);
  --tag-color: hsl(207, 80%, 59%);
  --tag-color-hover: hsl(207, 80%, 59%);
  --tertiary: var(--text-accent-hover, hsl(210, 100%, 64%));
  --text-accent: hsl(207, 80%, 59%);
  --text-accent-hover: hsl(210, 100%, 64%);
  --text-error: hsla(365, 90%, 65%, 1);
  --text-faint: hsla(217, 18%, 50%, 0.7);
  --text-highlight-bg: hsla(45, 53%, 53%, 1);
  --text-muted: hsl(218, 17%, 58%);
  --text-normal: hsla(0, 0%, 73%, 1);
  --text-selection: hsla(210, 93%, 62%, 0.33);
  --textHighlight: var(--text-highlight-bg, hsla(45, 53%, 53%, 1));
  --titlebar-background: hsla(214, 24%, 15%, 1);
  --titlebar-background-focused: hsla(214, 24%, 15%, 1);
  --titlebar-border-color: hsla(215, 22%, 13%, 1);
  --titlebar-text-color: hsl(218, 17%, 58%);
  --titlebar-text-color-focused: hsla(0, 0%, 73%, 1);
  --traffic-lights-offset-x: 43px;
  --traffic-lights-offset-y: 43px;
  --vault-name-font-size: 14px;
  --vault-profile-color: hsla(0, 0%, 73%, 1);
  --vault-profile-color-hover: hsla(0, 0%, 73%, 1);
  --window-radius: 23px;
  --window-shadow: 0 0 9px hsla(212, 17%, 0%, 0.3);
  --window-shadow-left: -4px 0 5px hsla(212, 17%, 0%, 0.3);
  --window-shadow-right: 4px 0 5px hsla(212, 17%, 0%, 0.3);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 47, 57);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration-color: rgb(119, 147, 187);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration-color: rgb(119, 147, 187);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(220, 190, 101);
  outline: rgb(220, 190, 101) none 0px;
  text-decoration-color: rgb(220, 190, 101);
}

html[saved-theme="dark"] body del {
  color: rgba(105, 122, 150, 0.7);
  outline: rgba(105, 122, 150, 0.7) none 0px;
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(77, 166, 255);
  border-color: rgb(77, 166, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(130, 143, 166);
  outline: rgb(130, 143, 166) none 0px;
  text-decoration-color: rgb(130, 143, 166);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(67, 159, 234);
  outline: rgb(67, 159, 234) none 0px;
  text-decoration-color: rgb(67, 159, 234);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 159, 234);
  outline: rgb(67, 159, 234) none 0px;
  text-decoration-color: rgb(67, 159, 234);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(67, 159, 234);
  outline: rgb(67, 159, 234) none 0px;
  text-decoration: underline rgba(68, 158, 248, 0.3);
  text-decoration-color: rgba(68, 158, 248, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body dt {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(29, 37, 47);
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body table {
  color: rgb(186, 186, 186);
  margin-left: 7px;
  margin-right: 7px;
  width: 245.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="dark"] body thead {
  border-top-color: rgb(77, 166, 255);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-top-color: rgb(77, 166, 255);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(130, 143, 166);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(130, 143, 166);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(29, 37, 47);
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
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(186, 186, 186);
  border-radius: 8px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(26, 32, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 32, 40);
  border-left-width: 1px;
  border-right-color: rgb(26, 32, 40);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(26, 32, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-style: solid;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-right-style: solid;
  border-top-color: rgb(186, 186, 186);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(105, 122, 150, 0.7);
  border-left-color: rgba(105, 122, 150, 0.7);
  border-right-color: rgba(105, 122, 150, 0.7);
  border-top-color: rgba(105, 122, 150, 0.7);
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  width: 24px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(105, 122, 150, 0.7);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 99, 85);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 99, 85);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 99, 85);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 99, 85);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 99, 85);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgba(83, 223, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 223, 221, 0.07);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgba(251, 70, 76, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgba(251, 70, 76, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgba(168, 130, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(168, 130, 255, 0.07);
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgba(251, 70, 76, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="mado-list2table"] {
  --callout-color: 2, 122, 255;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsla(215, 17%, 19%, 1) 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-right-width: 0px;
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(186, 186, 186);
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgba(233, 151, 63, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 151, 63, 0.07);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(158, 158, 158, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 158, 158, 0.07);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgba(68, 207, 110, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 207, 110, 0.07);
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgba(83, 223, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 223, 221, 0.07);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgba(233, 151, 63, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 151, 63, 0.07);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(186, 186, 186);
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

html[saved-theme="dark"] body .callout[data-callout="mado-list2table"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 47, 57);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(21, 26, 30, 0.5);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 37, 47);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(21, 26, 30, 0.5);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(21, 26, 30, 0.5);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(68, 158, 248, 0.1);
  border-bottom-color: rgba(68, 158, 248, 0.15);
  border-left-color: rgba(68, 158, 248, 0.15);
  border-right-color: rgba(68, 158, 248, 0.15);
  border-top-color: rgba(68, 158, 248, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(67, 159, 234);
}

html[saved-theme="dark"] body h1 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h2 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h3 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h4 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h5 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h6 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(71, 163, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(71, 163, 255);
  font-weight: 500;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(130, 143, 166);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 143, 166);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(130, 143, 166);
  stroke: rgb(130, 143, 166);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(105, 122, 150, 0.7);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 37, 47);
  border-color: rgb(186, 186, 186);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(26, 32, 40);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(68, 158, 248, 0.1);
  color: rgb(67, 159, 234);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(29, 37, 47);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(29, 37, 47);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(186, 186, 186);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 37, 47);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body abbr {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sub {
  color: rgb(186, 186, 186);
  font-size: 13.6px;
}

html[saved-theme="dark"] body summary {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sup {
  color: rgb(186, 186, 186);
  font-size: 13.6px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(68, 158, 248, 0.1);
  border-bottom-color: rgba(68, 158, 248, 0.15);
  border-left-color: rgba(68, 158, 248, 0.15);
  border-right-color: rgba(68, 158, 248, 0.15);
  border-top-color: rgba(68, 158, 248, 0.15);
  color: rgb(67, 159, 234);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 210;
  --accent-l: 62%;
  --accent-s: 93%;
  --background-fifth: hsla(207, 18%, 90%, 0.1);
  --background-fourth: hsla(177, 33%, 99%, 1);
  --background-modifier-active-hover: hsla(210, 93%, 62%, 0.1);
  --background-modifier-border-hover: hsla(210, 15%, 73%, 1);
  --background-modifier-error: hsla(365, 85%, 55%, 1);
  --background-modifier-error-hover: hsla(365, 85%, 55%, 1);
  --background-modifier-form-field: hsla(204, 45%, 97%, 1);
  --background-modifier-form-field-hover: hsla(204, 45%, 97%, 1);
  --background-modifier-hover: hsla(212, 17%, 80%, 0.3);
  --background-primary: hsla(204, 45%, 97%, 1);
  --background-primary-alt: hsla(210, 39%, 93%, 1);
  --background-secondary: hsla(213, 45%, 95%, 1);
  --background-secondary-alt: hsla(207, 17%, 90%, 1);
  --bases-cards-background: hsla(204, 45%, 97%, 1);
  --bases-cards-cover-background: hsla(210, 39%, 93%, 1);
  --bases-cards-shadow-hover: 0 0 0 1px hsla(210, 15%, 73%, 1);
  --bases-group-heading-property-color: hsla(218, 19%, 39%, 1);
  --bases-table-cell-background-active: hsla(204, 45%, 97%, 1);
  --bases-table-cell-background-disabled: hsla(210, 39%, 93%, 1);
  --bases-table-cell-background-selected: hsla(210, 93%, 62%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(210, 93%, 72%);
  --bases-table-group-background: hsla(210, 39%, 93%, 1);
  --bases-table-header-background: hsla(204, 45%, 97%, 1);
  --bases-table-header-background-hover: hsla(212, 17%, 80%, 0.3);
  --bases-table-header-color: hsla(218, 19%, 39%, 1);
  --bases-table-summary-background: hsla(204, 45%, 97%, 1);
  --bases-table-summary-background-hover: hsla(212, 17%, 80%, 0.3);
  --bgcolor-h: 204;
  --bgcolor-l: 97%;
  --bgcolor-s: 45%;
  --blockquote-border-color: hsl(210, 93%, 72%);
  --blockquote-color: hsla(218, 19%, 39%, 1);
  --blur-background: color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent) linear-gradient(hsla(204, 45%, 97%, 1), color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent));
  --bold-weight: 700;
  --border: 1px solid #e0e0e0;
  --button-padding-icon: 7px;
  --button-padding-long: 11px 15px;
  --button-radius: 4px;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: hsla(204, 45%, 97%, 1);
  --canvas-card-label-color: hsla(217, 15%, 73%, 1);
  --caret-color: hsla(0, 0%, 13%, 1);
  --checkbox-border-color: hsla(217, 15%, 73%, 1);
  --checkbox-border-color-hover: hsla(218, 19%, 39%, 1);
  --checkbox-color: hsl(210, 93%, 72%);
  --checkbox-color-hover: hsl(210, 93%, 57%);
  --checkbox-marker-color: hsla(204, 45%, 97%, 1);
  --checklist-done-color: hsla(217, 15%, 73%, 1);
  --code-background: hsla(210, 39%, 93%, 1);
  --code-bracket-background: hsla(212, 17%, 80%, 0.3);
  --code-comment: hsla(217, 15%, 73%, 1);
  --code-normal: hsla(218, 19%, 39%, 1);
  --code-operator: hsla(365, 85%, 55%, 1);
  --code-punctuation: hsla(218, 19%, 39%, 1);
  --code-tag: hsla(365, 85%, 55%, 1);
  --collapse-icon-color: hsla(217, 15%, 73%, 1);
  --collapse-icon-color-collapsed: hsl(210, 93%, 62%);
  --color-accent: hsl(210, 93%, 62%);
  --color-accent-1: hsl(210, 93%, 72%);
  --color-accent-2: hsl(210, 93%, 57%);
  --color-accent-hsl: 210, 93%, 62%;
  --color-base-00: hsla(204, 45%, 97%, 1);
  --color-base-00-0: hsla(177, 33%, 99%, 1);
  --color-base-00-0-trans: hsla(184, 33%, 99%, 0.5);
  --color-base-00-trans: hsla(204, 45%, 97%, 0.5);
  --color-base-00-trans-alt: hsla(204, 10%, 90%, 0.8);
  --color-base-05: hsla(207, 17%, 90%, 1);
  --color-base-10: hsla(210, 39%, 93%, 1);
  --color-base-100: hsla(0, 0%, 13%, 1);
  --color-base-20: hsla(213, 45%, 95%, 1);
  --color-base-20-0: hsla(207, 18%, 90%, 0.1);
  --color-base-20-trans: hsla(210, 37%, 95%, 0.5);
  --color-base-35: hsla(210, 15%, 73%, 1);
  --color-base-50: hsla(217, 15%, 73%, 1);
  --color-base-70: hsla(218, 19%, 39%, 1);
  --color-base-hover: hsla(212, 17%, 80%, 0.3);
  --color-base-shadow: hsla(212, 17%, 80%, 0.2);
  --color-base-shadow-hover: hsla(212, 17%, 80%, 0.3);
  --color-highlight: hsla(0, 0%, 13%, 1);
  --color-italic: hsla(215, 43%, 63%, 1);
  --color-muted: hsla(218, 19%, 39%, 1);
  --color-red: hsla(365, 85%, 55%, 1);
  --color-strikethrough: hsla(217, 15%, 73%, 1);
  --dark: var(--text-normal, hsla(0, 0%, 13%, 1));
  --darkgray: var(--text-normal, hsla(0, 0%, 13%, 1));
  --divider-color-hover: hsl(210, 93%, 72%);
  --divider-width: 4px;
  --dropdown-background: hsla(204, 45%, 97%, 1);
  --dropdown-background-hover: hsla(210, 39%, 93%, 1);
  --embed-border-start: 2px solid hsl(210, 93%, 72%);
  --embed-padding: 13px 23px;
  --file-header-background: hsla(204, 45%, 97%, 1);
  --file-header-background-focused: hsla(204, 45%, 97%, 1);
  --flair-background: hsla(204, 45%, 97%, 1);
  --flair-color: hsla(0, 0%, 13%, 1);
  --footnote-id-color: hsla(218, 19%, 39%, 1);
  --footnote-id-color-no-occurrences: hsla(217, 15%, 73%, 1);
  --footnote-input-background-active: hsla(212, 17%, 80%, 0.3);
  --graph-line: hsla(210, 15%, 73%, 1);
  --graph-node: hsla(218, 19%, 39%, 1);
  --graph-node-focused: hsl(210, 93%, 62%);
  --graph-node-unresolved: hsla(217, 15%, 73%, 1);
  --graph-text: hsla(0, 0%, 13%, 1);
  --gray: var(--text-muted, hsla(218, 19%, 39%, 1));
  --header-height: 43px;
  --heading-formatting: hsla(217, 15%, 73%, 1);
  --highlight: var(--background-modifier-hover, hsla(212, 17%, 80%, 0.3));
  --hovering-trigger-size: 13px;
  --icon-color: hsla(218, 19%, 39%, 1);
  --icon-color-active: hsl(210, 93%, 62%);
  --icon-color-focused: hsla(0, 0%, 13%, 1);
  --icon-color-hover: hsla(218, 19%, 39%, 1);
  --icon-l: 20px;
  --icon-m: 20px;
  --icon-size: 20px;
  --inline-code-color: hsla(365, 85%, 55%, 1);
  --input-date-separator: hsla(217, 15%, 73%, 1);
  --input-placeholder-color: hsla(217, 15%, 73%, 1);
  --interactive-accent: hsl(210, 93%, 72%);
  --interactive-accent-hover: hsl(210, 93%, 57%);
  --interactive-accent-hsl: 210, 93%, 62%;
  --interactive-hover: hsla(210, 39%, 93%, 1);
  --interactive-normal: hsla(204, 45%, 97%, 1);
  --italic-color: hsla(215, 43%, 63%, 1);
  --light: var(--background-primary, hsla(204, 45%, 97%, 1));
  --lightgray: var(--background-secondary, hsla(213, 45%, 95%, 1));
  --link-color: hsl(210, 93%, 62%);
  --link-color-hover: hsl(210, 93%, 57%);
  --link-external-color: hsl(210, 93%, 62%);
  --link-external-color-hover: hsl(210, 93%, 57%);
  --link-unresolved-color: hsl(210, 93%, 62%);
  --link-unresolved-decoration-color: hsla(210, 93%, 62%, 0.3);
  --list-indent: 37px;
  --list-marker-color: hsla(217, 15%, 73%, 1);
  --list-marker-color-collapsed: hsl(210, 93%, 62%);
  --list-marker-color-hover: hsla(218, 19%, 39%, 1);
  --menu-background: hsla(213, 45%, 95%, 1);
  --menu-border-color: hsla(210, 15%, 73%, 1);
  --metadata-input-background-active: hsla(212, 17%, 80%, 0.3);
  --metadata-input-text-color: hsla(0, 0%, 13%, 1);
  --metadata-label-background-active: hsla(212, 17%, 80%, 0.3);
  --metadata-label-text-color: hsla(218, 19%, 39%, 1);
  --metadata-label-text-color-hover: hsla(218, 19%, 39%, 1);
  --metadata-property-background-active: hsla(212, 17%, 80%, 0.3);
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(210, 15%, 73%, 1);
  --modal-background: hsla(204, 45%, 97%, 1);
  --nav-collapse-icon-color: hsla(217, 15%, 73%, 1);
  --nav-collapse-icon-color-collapsed: hsla(217, 15%, 73%, 1);
  --nav-heading-color: hsla(0, 0%, 13%, 1);
  --nav-heading-color-collapsed: hsla(217, 15%, 73%, 1);
  --nav-heading-color-collapsed-hover: hsla(218, 19%, 39%, 1);
  --nav-heading-color-hover: hsla(0, 0%, 13%, 1);
  --nav-item-background-active: hsla(212, 17%, 80%, 0.3);
  --nav-item-background-hover: hsla(212, 17%, 80%, 0.3);
  --nav-item-background-selected: hsla(210, 93%, 62%, 0.15);
  --nav-item-color: hsla(218, 19%, 39%, 1);
  --nav-item-color-active: hsla(0, 0%, 13%, 1);
  --nav-item-color-highlighted: hsl(210, 93%, 62%);
  --nav-item-color-hover: hsla(0, 0%, 13%, 1);
  --nav-item-color-selected: hsla(0, 0%, 13%, 1);
  --nav-tag-color: hsla(217, 15%, 73%, 1);
  --nav-tag-color-active: hsla(218, 19%, 39%, 1);
  --nav-tag-color-hover: hsla(218, 19%, 39%, 1);
  --panel-radius: 8px;
  --panel-shadow: 0 1px 3px hsla(212, 17%, 80%, 0.2);
  --panel-shadow-hover: 0 3px 5px hsla(212, 17%, 80%, 0.3);
  --pdf-background: hsla(204, 45%, 97%, 1);
  --pdf-page-background: hsla(204, 45%, 97%, 1);
  --pdf-sidebar-background: hsla(204, 45%, 97%, 1);
  --pill-border-color-hover: hsla(210, 15%, 73%, 1);
  --pill-color: hsla(218, 19%, 39%, 1);
  --pill-color-hover: hsla(0, 0%, 13%, 1);
  --pill-color-remove: hsla(217, 15%, 73%, 1);
  --pill-color-remove-hover: hsl(210, 93%, 62%);
  --prompt-background: hsla(204, 45%, 97%, 1);
  --raised-background: color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent) linear-gradient(hsla(204, 45%, 97%, 1), color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent));
  --ribbon-background: hsla(213, 45%, 95%, 1);
  --ribbon-background-collapsed: hsla(204, 45%, 97%, 1);
  --search-clear-button-color: hsla(218, 19%, 39%, 1);
  --search-icon-color: hsla(218, 19%, 39%, 1);
  --search-result-background: hsla(204, 45%, 97%, 1);
  --secondary: var(--text-accent, hsl(210, 93%, 62%));
  --setting-group-heading-color: hsla(0, 0%, 13%, 1);
  --setting-items-background: hsla(210, 39%, 93%, 1);
  --shiki-active-tab-border-color: hsla(218, 19%, 39%, 1);
  --shiki-code-background: hsla(210, 39%, 93%, 1);
  --shiki-code-comment: hsla(217, 15%, 73%, 1);
  --shiki-code-normal: hsla(218, 19%, 39%, 1);
  --shiki-code-punctuation: hsla(218, 19%, 39%, 1);
  --shiki-gutter-text-color: hsla(217, 15%, 73%, 1);
  --shiki-gutter-text-color-highlight: hsla(218, 19%, 39%, 1);
  --shiki-highlight-neutral: hsla(218, 19%, 39%, 1);
  --shiki-terminal-dots-color: hsla(217, 15%, 73%, 1);
  --sidebar-size-left: 270px;
  --sidebar-size-right: 270px;
  --slider-thumb-border-color: hsla(210, 15%, 73%, 1);
  --status-bar-background: hsla(213, 45%, 95%, 1);
  --status-bar-text-color: hsla(218, 19%, 39%, 1);
  --suggestion-background: hsla(204, 45%, 97%, 1);
  --sync-avatar-color-1: hsla(365, 85%, 55%, 1);
  --tab-background-active: hsla(204, 45%, 97%, 1);
  --tab-container-background: hsla(213, 45%, 95%, 1);
  --tab-divider-color: hsla(210, 15%, 73%, 1);
  --tab-stacked-header-width: 53px;
  --tab-switcher-background: hsla(213, 45%, 95%, 1);
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(213, 45%, 95%, 1), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 93%, 62%);
  --tab-text-color: hsla(217, 15%, 73%, 1);
  --tab-text-color-active: hsla(218, 19%, 39%, 1);
  --tab-text-color-focused: hsla(218, 19%, 39%, 1);
  --tab-text-color-focused-active: hsla(218, 19%, 39%, 1);
  --tab-text-color-focused-active-current: hsla(0, 0%, 13%, 1);
  --tab-text-color-focused-highlighted: hsl(210, 93%, 62%);
  --table-drag-handle-background-active: hsl(210, 93%, 72%);
  --table-drag-handle-color: hsla(217, 15%, 73%, 1);
  --table-header-color: hsla(0, 0%, 13%, 1);
  --table-selection: hsla(210, 93%, 62%, 0.1);
  --table-selection-border-color: hsl(210, 93%, 72%);
  --tag-background: hsla(210, 93%, 62%, 0.1);
  --tag-background-hover: hsla(210, 93%, 62%, 0.2);
  --tag-border-color: hsla(210, 93%, 62%, 0.15);
  --tag-border-color-hover: hsla(210, 93%, 62%, 0.15);
  --tag-color: hsl(210, 93%, 62%);
  --tag-color-hover: hsl(210, 93%, 62%);
  --tertiary: var(--text-accent-hover, hsl(210, 93%, 57%));
  --text-accent: hsl(210, 93%, 62%);
  --text-accent-hover: hsl(210, 93%, 57%);
  --text-error: hsla(365, 85%, 55%, 1);
  --text-faint: hsla(217, 15%, 73%, 1);
  --text-muted: hsla(218, 19%, 39%, 1);
  --text-normal: hsla(0, 0%, 13%, 1);
  --text-selection: hsla(210, 93%, 62%, 0.2);
  --textHighlight: var(--background-modifier-hover, hsla(212, 17%, 80%, 0.3));
  --titlebar-background: hsla(213, 45%, 95%, 1);
  --titlebar-background-focused: hsla(213, 45%, 95%, 1);
  --titlebar-text-color: hsla(218, 19%, 39%, 1);
  --titlebar-text-color-focused: hsla(0, 0%, 13%, 1);
  --traffic-lights-offset-x: 43px;
  --traffic-lights-offset-y: 43px;
  --vault-name-font-size: 14px;
  --vault-profile-color: hsla(0, 0%, 13%, 1);
  --vault-profile-color-hover: hsla(0, 0%, 13%, 1);
  --window-radius: 23px;
  --window-shadow: 0 0 9px hsla(212, 17%, 80%, 0.3);
  --window-shadow-left: -4px 0 5px hsla(212, 17%, 80%, 0.3);
  --window-shadow-right: 4px 0 5px hsla(212, 17%, 80%, 0.3);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 248, 251);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration-color: rgb(120, 154, 201);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration-color: rgb(120, 154, 201);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body del {
  color: rgb(176, 184, 196);
  outline: rgb(176, 184, 196) none 0px;
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(117, 184, 250);
  border-color: rgb(117, 184, 250);
}

html[saved-theme="light"] body p {
  color: rgb(81, 94, 118);
  outline: rgb(81, 94, 118) none 0px;
  text-decoration-color: rgb(81, 94, 118);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(68, 158, 248);
  outline: rgb(68, 158, 248) none 0px;
  text-decoration-color: rgb(68, 158, 248);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(68, 158, 248);
  outline: rgb(68, 158, 248) none 0px;
  text-decoration-color: rgb(68, 158, 248);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(68, 158, 248);
  outline: rgb(68, 158, 248) none 0px;
  text-decoration: underline rgba(68, 158, 248, 0.3);
  text-decoration-color: rgba(68, 158, 248, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body dt {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ol > li {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(237, 242, 248);
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body table {
  color: rgb(33, 33, 33);
  margin-left: 7px;
  margin-right: 7px;
  width: 245.219px;
}

html[saved-theme="light"] body td {
  color: rgb(33, 33, 33);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="light"] body th {
  color: rgb(33, 33, 33);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="light"] body thead {
  border-top-color: rgb(68, 158, 248);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body tr {
  border-top-color: rgb(68, 158, 248);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(81, 94, 118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(81, 94, 118);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 237, 244);
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
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body figcaption {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(33, 33, 33);
  border-radius: 8px;
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(230, 237, 244);
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-style: solid;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-right-style: solid;
  border-top-color: rgb(33, 33, 33);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(176, 184, 196);
  border-left-color: rgb(176, 184, 196);
  border-right-color: rgb(176, 184, 196);
  border-top-color: rgb(176, 184, 196);
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  width: 24px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(176, 184, 196);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 59, 43);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 59, 43);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 59, 43);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 59, 43);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 59, 43);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 191, 188, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 191, 188, 0.07);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgba(120, 82, 238, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(120, 82, 238, 0.07);
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="mado-list2table"] {
  --callout-color: 8, 109, 221;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsla(204, 45%, 97%, 1) 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(33, 33, 33);
  border-left-width: 0px;
  border-right-color: rgb(33, 33, 33);
  border-right-width: 0px;
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(33, 33, 33);
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgba(236, 117, 0, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 117, 0, 0.07);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(158, 158, 158, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 158, 158, 0.07);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgba(8, 185, 78, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 185, 78, 0.07);
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 191, 188, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 191, 188, 0.07);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgba(236, 117, 0, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 117, 0, 0.07);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(33, 33, 33);
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

html[saved-theme="light"] body .callout[data-callout="mado-list2table"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(244, 248, 251);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 248, 251);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(195, 203, 213, 0.3);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 242, 248);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(195, 203, 213, 0.3);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(195, 203, 213, 0.3);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(68, 158, 248, 0.1);
  border-bottom-color: rgba(68, 158, 248, 0.15);
  border-left-color: rgba(68, 158, 248, 0.15);
  border-right-color: rgba(68, 158, 248, 0.15);
  border-top-color: rgba(68, 158, 248, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(68, 158, 248);
}

html[saved-theme="light"] body h1 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h2 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h3 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h4 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h5 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h6 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(33, 33, 33);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(43, 145, 247);
  font-weight: 500;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(43, 145, 247);
  font-weight: 500;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(237, 242, 248);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(81, 94, 118);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(81, 94, 118);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(81, 94, 118);
  stroke: rgb(81, 94, 118);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(176, 184, 196);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(244, 248, 251);
  border-color: rgb(33, 33, 33);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  color: rgb(33, 33, 33);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(68, 158, 248, 0.1);
  color: rgb(68, 158, 248);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(237, 242, 248);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(237, 242, 248);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(33, 33, 33);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(237, 242, 248);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body abbr {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 237, 244);
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body sub {
  color: rgb(33, 33, 33);
  font-size: 13.6px;
}

html[saved-theme="light"] body summary {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body sup {
  color: rgb(33, 33, 33);
  font-size: 13.6px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(68, 158, 248, 0.1);
  border-bottom-color: rgba(68, 158, 248, 0.15);
  border-left-color: rgba(68, 158, 248, 0.15);
  border-right-color: rgba(68, 158, 248, 0.15);
  border-top-color: rgba(68, 158, 248, 0.15);
  color: rgb(68, 158, 248);
}`,
  },
};
