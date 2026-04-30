import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "golden-coffee",
    modes: ["dark"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "MADE Kenfolg v2",
        style: "normal",
        weight: "normal",
        file: "made-kenfolg-v2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "JetBrains Mono",
        style: "normal",
        weight: "normal",
        file: "jetbrains-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "FA5FS",
        style: "normal",
        weight: "normal",
        file: "fa5fs.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "GCSS",
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: var(--coffee, #885938);
  --background-modifier-cover: var(--dark-coffee, rgb(27, 16, 9));
  --background-modifier-error: var(--lighter-borgonia, #a01c1c);
  --background-modifier-error-hover: var(--clear-borgonioa, #c43131);
  --background-modifier-form-field: var(--dark, black);
  --background-modifier-form-field-highlighted: var(--grey-coffee, #5c381e);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, black);
  --background-modifier-success: var(--color-green, #00ff00);
  --background-primary: var(--black-coffee, #331000);
  --background-primary-alt: var(--dark-coffee, #220b00);
  --background-secondary: var(--dark-coffee, #220b00);
  --background-secondary-alt: var(--dark-coffee, #331000);
  --bases-cards-background: var(--background-primary, #331000);
  --bases-cards-cover-background: var(--background-primary-alt, #220b00);
  --bases-embed-border-color: var(--background-modifier-border, #885938);
  --bases-group-heading-property-color: var(--text-muted, #c28d67);
  --bases-table-border-color: var(--table-border-color, #885938);
  --bases-table-cell-background-active: var(--background-primary, #331000);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #220b00);
  --bases-table-group-background: var(--background-primary-alt, #220b00);
  --bases-table-header-background: var(--background-primary, #331000);
  --bases-table-header-color: var(--text-muted, #c28d67);
  --bases-table-summary-background: var(--background-primary, #331000);
  --black-coffee: #291a12;
  --blockquote-border-color: var(--interactive-accent, #885938);
  --borgonia: #800000;
  --c-Hn-headings: var(--clear-borgonioa, #c43131);
  --c-active-line-background: var(--greier-coffee, #491700);
  --c-active-line-cursor: var(--light-coffee, #e7ba9a);
  --c-active-line-gutter-number: var(--lighter-borgonia, #a01c1c);
  --c-blockquote-background: #693f208f;
  --c-blockquote-border: var(--coffee, #885938);
  --c-bold: #f3ab78;
  --c-border-img: #c58000;
  --c-code: #ff8800;
  --c-code-background: #63371a;
  --c-community-theme-background-color: var(--black-coffee, #291a12);
  --c-dark-graph-view-attachment: #a01c1c;
  --c-dark-graph-view-tag: #f0b200;
  --c-dataview-table-backgroundcolor-even: black;
  --c-external-link: #e1a600;
  --c-external-link-hover: #ffbf00;
  --c-hover-element: var(--lighter-coffee, #ffd8bc);
  --c-hover-header-icon-actions: var(--clear-coffee, #c28d67);
  --c-internal-link: #ffbf00;
  --c-internal-link-hover: #ffe642;
  --c-italic: #f09a39;
  --c-languaje-tool-background-add: var(--dark-coffee, rgb(27, 16, 9));
  --c-languaje-tool-background-color-suggestion: var(--light-coffee, #e7ba9a);
  --c-languaje-tool-background-color-suggestion-add: var(--light-coffee, #e7ba9a);
  --c-languaje-tool-color-suggestion: var(--coffee, #885938);
  --c-latex-ComdsCancs: #ff4463;
  --c-latex-chars: #ff9956;
  --c-latex-numbers: #37c343;
  --c-list-border: var(--coffee, #885938);
  --c-nav-file-background-color-hover: var(--warm-coffee, #a37554);
  --c-nav-file-tab-active-text-color-hover: var(--borgonia, #800000);
  --c-nav-file-tab-text-color: var(--dark-coffee, rgb(27, 16, 9));
  --c-nav-file-tab-text-color-hover: var(--black-coffee, #291a12);
  --c-nav-file-tag-background-color: var(--warm-coffee, #a37554);
  --c-nav-file-tag-background-color-hover: var(--light-coffee, #e7ba9a);
  --c-nav-vault-title: #ffe642;
  --c-navs-boder: #8A5A02;
  --c-notice-background-color: var(--grey-coffee, #5c381e);
  --c-notice-color: var(--light-coffee, #e7ba9a);
  --c-settings-checkbox: var(--grey-coffee, #5c381e);
  --c-settings-checkbox-hover: var(--light-coffee, #e7ba9a);
  --c-settings-hotkey-background: var(--greier-coffee, #442c1c);
  --c-settings-nav-item-hover: var(--greier-coffee, #442c1c);
  --c-settings-nav-item-selected-background: var(--greier-coffee, #442c1c);
  --c-settings-nav-item-selected-text: var(--even-lighter-coffee, #ffe3ce);
  --c-settings-plugin-button-background-color: var(--greier-coffee, #442c1c);
  --c-settings-plugin-button-background-color-hover: var(--coffee, #885938);
  --c-side-dock-elements: var(--grey-coffee, #5c381e);
  --c-side-dock-hover-elements: var(--coffee, #885938);
  --c-side-dock-hover-elements-hover: var(--light-coffee, #e7ba9a);
  --c-slider-background: var(--grey-coffee, #5c381e);
  --c-table-td-background-even: #8b4a1594;
  --c-table-td-background-odd: #a35c2194;
  --c-table-th-background: #5c2f0b;
  --c-table-th-border-bottom: #ffa600;
  --c-table-th-border-left: #ffa600;
  --c-table-th-border-right: #ffa600;
  --c-transparent-actions: var(--grey-coffee, #5c381e);
  --c-transparent-header-icon: var(--grey-coffee, #5c381e);
  --canvas-background: var(--background-primary, #331000);
  --canvas-card-label-color: var(--text-faint, #a37554);
  --caret-color: var(--text-normal, #e7ba9a);
  --checkbox-border-color: var(--text-faint, #a37554);
  --checkbox-border-color-hover: var(--text-muted, #c28d67);
  --checkbox-color: var(--interactive-accent, #885938);
  --checkbox-color-hover: var(--interactive-accent-hover, #ffd8bc);
  --checkbox-marker-color: var(--background-primary, #331000);
  --checklist-done-color: var(--text-muted, #c28d67);
  --clear-borgonioa: #c43131;
  --clear-coffee: #c28d67;
  --code-background: var(--background-primary-alt, #220b00);
  --code-border-color: var(--background-modifier-border, #885938);
  --code-comment: var(--text-faint, #a37554);
  --code-normal: var(--text-normal, #e7ba9a);
  --code-punctuation: var(--text-muted, #c28d67);
  --coffee: #885938;
  --collapse-icon-color: var(--text-faint, #a37554);
  --collapse-icon-color-collapsed: var(--text-accent, #e7ba9a);
  --dark: black;
  --dark-borgonia: #700000;
  --dark-coffee: rgb(27, 16, 9);
  --dark-transparent: #00000080;
  --darkgray: var(--text-normal, var(--light-coffee, #e7ba9a));
  --default-font: "MADE Kenfolg v2";
  --divider-color: var(--background-modifier-border, #885938);
  --divider-color-hover: var(--interactive-accent, #885938);
  --dropdown-background-hover: var(--interactive-hover, #c28d67);
  --editor-font: "MADE Kenfolg v2";
  --even-lighter-coffee: #ffe3ce;
  --even-more-lighter-coffee: #ffeada;
  --file-header-background: var(--background-primary, #331000);
  --file-header-background-focused: var(--background-primary, #331000);
  --file-header-font: var(--font-interface, "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-color: var(--text-normal, #e7ba9a);
  --footnote-divider-color: var(--metadata-divider-color, #885938);
  --footnote-id-color: var(--text-muted, #c28d67);
  --footnote-id-color-no-occurrences: var(--text-faint, #a37554);
  --graph-node: var(--text-muted, #c28d67);
  --graph-node-focused: var(--text-accent, #e7ba9a);
  --graph-node-unresolved: var(--text-faint, #a37554);
  --graph-text: var(--text-normal, #e7ba9a);
  --gray: var(--text-muted, var(--clear-coffee, #c28d67));
  --greier-coffee: #442c1c;
  --grey-coffee: #5c381e;
  --header-font-pre: "MADE Kenfolg v2";
  --heading-1: #ffe642;
  --heading-2: #f0cc2e;
  --heading-3: #f3c11e;
  --heading-4: #ffbf00;
  --heading-5: #f0b200;
  --heading-6: #e1a600;
  --heading-formatting: var(--text-faint, #a37554);
  --hr-color: var(--background-modifier-border, #885938);
  --icon-color: var(--text-muted, #c28d67);
  --icon-color-active: var(--text-accent, #e7ba9a);
  --icon-color-focused: var(--text-normal, #e7ba9a);
  --icon-color-hover: var(--text-muted, #c28d67);
  --input-date-separator: var(--text-faint, #a37554);
  --input-placeholder-color: var(--text-faint, #a37554);
  --interactive-accent: var(--coffee, #885938);
  --interactive-accent-hover: var(--lighter-coffee, #ffd8bc);
  --interactive-hover: var(--clear-coffee, #c28d67);
  --interactive-success: #00ff00;
  --light: white;
  --light-coffee: #e7ba9a;
  --lighter-borgonia: #a01c1c;
  --lighter-coffee: #ffd8bc;
  --lightgray: var(--background-secondary, var(--dark-coffee, #220b00));
  --link-color: var(--text-accent, #e7ba9a);
  --link-color-hover: var(--text-accent-hover, #ffd8bc);
  --link-external-color: var(--text-accent, #e7ba9a);
  --link-external-color-hover: var(--text-accent-hover, #ffd8bc);
  --link-unresolved-color: var(--text-accent, #e7ba9a);
  --list-marker-color: var(--text-faint, #a37554);
  --list-marker-color-collapsed: var(--text-accent, #e7ba9a);
  --list-marker-color-hover: var(--text-muted, #c28d67);
  --menu-background: var(--background-secondary, #220b00);
  --metadata-border-color: var(--background-modifier-border, #885938);
  --metadata-divider-color: var(--background-modifier-border, #885938);
  --metadata-input-font: var(--font-interface, "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #e7ba9a);
  --metadata-label-font: var(--font-interface, "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #c28d67);
  --metadata-label-text-color-hover: var(--text-muted, #c28d67);
  --modal-background: var(--background-primary, #331000);
  --nav-collapse-icon-color: var(--collapse-icon-color, #a37554);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #a37554);
  --nav-heading-color: var(--text-normal, #e7ba9a);
  --nav-heading-color-collapsed: var(--text-faint, #a37554);
  --nav-heading-color-collapsed-hover: var(--text-muted, #c28d67);
  --nav-heading-color-hover: var(--text-normal, #e7ba9a);
  --nav-item-color: var(--text-muted, #c28d67);
  --nav-item-color-active: var(--text-normal, #e7ba9a);
  --nav-item-color-highlighted: var(--text-accent, #e7ba9a);
  --nav-item-color-hover: var(--text-normal, #e7ba9a);
  --nav-item-color-selected: var(--text-normal, #e7ba9a);
  --nav-tag-color: var(--text-faint, #a37554);
  --nav-tag-color-active: var(--text-muted, #c28d67);
  --nav-tag-color-hover: var(--text-muted, #c28d67);
  --not-so-grey-coffee: #6d4426;
  --pdf-background: var(--background-primary, #331000);
  --pdf-page-background: var(--background-primary, #331000);
  --pdf-sidebar-background: var(--background-primary, #331000);
  --pill-border-color: var(--background-modifier-border, #885938);
  --pill-color: var(--text-muted, #c28d67);
  --pill-color-hover: var(--text-normal, #e7ba9a);
  --pill-color-remove: var(--text-faint, #a37554);
  --pill-color-remove-hover: var(--text-accent, #e7ba9a);
  --preview-font: "MADE Kenfolg v2";
  --prompt-background: var(--background-primary, #331000);
  --ribbon-background: var(--background-secondary, #220b00);
  --ribbon-background-collapsed: var(--background-primary, #331000);
  --scrollbar-bg: var(--greier-coffee, #421500);
  --scrollbar-thumb-bg: var(--not-so-grey-coffee, #5c1d00);
  --search-clear-button-color: var(--text-muted, #c28d67);
  --search-icon-color: var(--text-muted, #c28d67);
  --search-result-background: var(--background-primary, #331000);
  --secondary: var(--text-accent, var(--light-coffee, #e7ba9a));
  --setting-group-heading-color: var(--text-normal, #e7ba9a);
  --setting-items-background: var(--background-primary-alt, #220b00);
  --setting-items-border-color: var(--background-modifier-border, #885938);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #c28d67);
  --shiki-code-background: var(--code-background, #220b00);
  --shiki-code-comment: var(--text-faint, #a37554);
  --shiki-code-normal: var(--text-muted, #c28d67);
  --shiki-code-punctuation: var(--text-muted, #c28d67);
  --shiki-gutter-border-color: var(--background-modifier-border, #885938);
  --shiki-gutter-text-color: var(--text-faint, #a37554);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #c28d67);
  --shiki-highlight-neutral: var(--shiki-code-normal, #c28d67);
  --shiki-terminal-dots-color: var(--text-faint, #a37554);
  --slider-track-background: var(--background-modifier-border, #885938);
  --status-bar-background: var(--background-secondary, #220b00);
  --status-bar-border-color: var(--divider-color, #885938);
  --status-bar-text-color: var(--text-muted, #c28d67);
  --stop: red;
  --suggestion-background: var(--background-primary, #331000);
  --tab-background-active: var(--background-primary, #331000);
  --tab-container-background: var(--background-secondary, #220b00);
  --tab-outline-color: var(--divider-color, #885938);
  --tab-switcher-background: var(--background-secondary, #220b00);
  --tab-text-color: var(--text-faint, #a37554);
  --tab-text-color-active: var(--text-muted, #c28d67);
  --tab-text-color-focused: var(--text-muted, #c28d67);
  --tab-text-color-focused-active: var(--text-muted, #c28d67);
  --tab-text-color-focused-active-current: var(--text-normal, #e7ba9a);
  --tab-text-color-focused-highlighted: var(--text-accent, #e7ba9a);
  --table-add-button-border-color: var(--background-modifier-border, #885938);
  --table-border-color: var(--background-modifier-border, #885938);
  --table-drag-handle-background-active: var(--table-selection-border-color, #885938);
  --table-drag-handle-color: var(--text-faint, #a37554);
  --table-drag-handle-color-active: var(--text-on-accent, #c28d67);
  --table-header-border-color: var(--table-border-color, #885938);
  --table-header-color: var(--text-normal, #e7ba9a);
  --table-selection-border-color: var(--interactive-accent, #885938);
  --tag-color: var(--text-accent, #e7ba9a);
  --tag-color-hover: var(--text-accent, #e7ba9a);
  --tertiary: var(--text-accent-hover, var(--lighter-coffee, #ffd8bc));
  --text-accent: var(--light-coffee, #e7ba9a);
  --text-accent-hover: var(--lighter-coffee, #ffd8bc);
  --text-error: var(--lighter-borgonia, #a01c1c);
  --text-error-hover: var(--clear-borgonioa, #c43131);
  --text-faint: var(--warm-coffee, #a37554);
  --text-highlight-bg-active: var(--coffee, #885938);
  --text-muted: var(--clear-coffee, #c28d67);
  --text-normal: var(--light-coffee, #e7ba9a);
  --text-on-accent: var(--clear-coffee, #c28d67);
  --text-selection: var(--greier-coffee, #491700);
  --titlebar-background: var(--background-secondary, #220b00);
  --titlebar-background-focused: var(--background-secondary-alt, #331000);
  --titlebar-border-color: var(--background-modifier-border, #885938);
  --titlebar-text-color: var(--text-muted, #c28d67);
  --titlebar-text-color-focused: var(--text-normal, #e7ba9a);
  --vault-profile-color: var(--text-normal, #e7ba9a);
  --vault-profile-color-hover: var(--vault-profile-color, #e7ba9a);
  --warm-coffee: #a37554;
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(34, 11, 0));
  color: rgb(231, 186, 154);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0.06));
  color: rgb(231, 186, 154);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(19, 6, 0, 0.357));
  color: rgb(231, 186, 154);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(136, 89, 56);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(34, 11, 0));
  border-left-color: rgb(136, 89, 56);
  color: rgb(231, 186, 154);
}

html body html {
  --black-coffee: #291a12;
  --borgonia: #800000;
  --clear-borgonioa: #c43131;
  --clear-coffee: #c28d67;
  --coffee: #885938;
  --dark: black;
  --dark-borgonia: #700000;
  --dark-coffee: rgb(27, 16, 9);
  --dark-transparent: #00000080;
  --default-font: "MADE Kenfolg v2";
  --editor-font: var(--default-font, "MADE Kenfolg v2");
  --even-lighter-coffee: #ffe3ce;
  --even-more-lighter-coffee: #ffeada;
  --font-monospace: 'JetBrains Mono';
  --greier-coffee: #442c1c;
  --grey-coffee: #5c381e;
  --header-font-pre: var(--preview-font, "MADE Kenfolg v2");
  --light: white;
  --light-coffee: #e7ba9a;
  --lighter-borgonia: #a01c1c;
  --lighter-coffee: #ffd8bc;
  --not-so-grey-coffee: #6d4426;
  --preview-font: var(--default-font, "MADE Kenfolg v2");
  --stop: red;
  --warm-coffee: #a37554;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--c-bold, rgb(243, 171, 120));
  outline: rgb(243, 171, 120) none 0px;
  text-decoration-color: rgb(243, 171, 120);
}

html body .markdown-rendered p > em, html em {
  color: var(--c-italic, rgb(240, 154, 57));
  outline: rgb(240, 154, 57) none 0px;
  text-decoration-color: rgb(240, 154, 57);
}

html body .markdown-rendered p > i, html i {
  color: var(--c-italic, rgb(240, 154, 57));
  outline: rgb(240, 154, 57) none 0px;
  text-decoration-color: rgb(240, 154, 57);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--c-bold, rgb(243, 171, 120));
  outline: rgb(243, 171, 120) none 0px;
  text-decoration-color: rgb(243, 171, 120);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(144, 78, 30));
  color: var(--text-normal, rgb(231, 186, 154));
  outline: rgb(231, 186, 154) none 0px;
  text-decoration-color: rgb(231, 186, 154);
}

html body del {
  color: var(--text-faint, rgb(163, 117, 84));
  outline: rgb(163, 117, 84) none 0px;
  text-decoration-color: rgb(163, 117, 84);
}

html body footer {
  opacity: 0.6;
}

html body h1.article-title {
  color: var(--text-normal, rgb(231, 186, 154));
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(163, 117, 84);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(136, 89, 56));
  border-color: rgb(136, 89, 56);
}

html body p {
  color: var(--text-muted, rgb(194, 141, 103));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(194, 141, 103) none 0px;
  text-decoration-color: rgb(194, 141, 103);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--c-external-link, rgb(225, 166, 0));
  outline: rgb(225, 166, 0) none 0px;
  text-decoration-color: rgb(225, 166, 0);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--c-internal-link, rgb(255, 191, 0));
  outline: rgb(255, 191, 0) none 0px;
  text-decoration-color: rgb(255, 191, 0);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(231, 186, 154));
  outline: rgb(231, 186, 154) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(231, 186, 154);
}

html body dt {
  color: rgb(231, 186, 154);
}

html body ol > li {
  color: rgb(231, 186, 154);
}

html body ul > li {
  color: rgb(231, 186, 154);
}

html body ul.overflow {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(163, 117, 84));
}

html body blockquote {
  background-color: var(--c-blockquote-background, rgba(105, 63, 32, 0.56));
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body table {
  border-bottom-color: rgb(197, 128, 0);
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-left-color: rgb(197, 128, 0);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(197, 128, 0);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(197, 128, 0);
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(231, 186, 154);
  margin-left: 234.391px;
  margin-right: 234.391px;
  width: 231.219px;
}

html body td {
  background-color: var(--c-table-td-background-odd, rgba(163, 92, 33, 0.58));
  border-bottom-color: rgb(255, 166, 0);
  border-left-color: rgb(231, 186, 154);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(255, 166, 0);
  border-top-color: rgb(231, 186, 154);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(231, 186, 154));
}

html body th {
  background-color: var(--c-table-th-background, rgb(92, 47, 11));
  border-bottom-color: rgb(136, 89, 56);
  border-left-color: rgb(136, 89, 56);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(255, 166, 0);
  border-top-color: rgb(136, 89, 56);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(231, 186, 154));
}

html body thead {
  border-bottom-color: rgb(197, 128, 0);
  border-left-color: rgb(197, 128, 0);
  border-right-color: rgb(197, 128, 0);
  border-top-color: rgb(197, 128, 0);
}

html body tr {
  border-bottom-color: rgb(197, 128, 0);
  border-left-color: rgb(197, 128, 0);
  border-right-color: rgb(197, 128, 0);
  border-top-color: rgb(197, 128, 0);
}`,
    code: `html body code {
  background-color: var(--c-code-background, rgb(99, 55, 26));
  border-bottom-color: rgb(136, 89, 56);
  border-left-color: rgb(136, 89, 56);
  border-right-color: rgb(136, 89, 56);
  border-top-color: rgb(136, 89, 56);
  color: var(--c-code, rgb(255, 136, 0));
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(34, 11, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body figcaption {
  color: rgb(231, 186, 154);
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body img {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body video {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgba(19, 6, 0, 0.314));
  border-bottom-color: rgb(194, 141, 103);
  border-left-color: rgb(194, 141, 103);
  border-right-color: rgb(194, 141, 103);
  border-top-color: rgb(194, 141, 103);
}

html body .footnotes {
  border-top-color: rgb(231, 186, 154);
  color: rgb(231, 186, 154);
}

html body .transclude {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(136, 89, 56);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body .transclude-inner {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(163, 117, 84);
  border-left-color: rgb(163, 117, 84);
  border-right-color: rgb(163, 117, 84);
  border-top-color: rgb(163, 117, 84);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(231, 186, 154);
}

html li.task-list-item[data-task="body"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="."] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="="] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(194, 141, 103);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(194, 141, 103);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(231, 186, 154);
  text-decoration-color: rgb(231, 186, 154);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 16, 0);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 16, 0);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(231, 186, 154);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgba(19, 6, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--text-normal, rgb(231, 186, 154));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(51, 16, 0));
}

html body .search > .search-container > .search-space > * {
  color: rgb(231, 186, 154);
  outline: rgb(231, 186, 154) none 0px;
  text-decoration-color: rgb(231, 186, 154);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(231, 186, 154);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(231, 186, 154);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(231, 186, 154);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(19, 6, 0, 0.357);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
  color: rgb(231, 186, 154);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(231, 186, 154);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(231, 186, 154);
}

html body h1 {
  color: var(--h1-color, rgb(231, 186, 154));
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(231, 186, 154));
}

html body h2 {
  color: var(--h2-color, rgb(231, 186, 154));
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgb(231, 186, 154));
}

html body h3 {
  color: var(--h3-color, rgb(231, 186, 154));
}

html body h4 {
  color: var(--h4-color, rgb(231, 186, 154));
}

html body h5 {
  color: var(--h5-color, rgb(231, 186, 154));
}

html body h6 {
  color: var(--heading-6, rgb(225, 166, 0));
}

html body hr {
  border-bottom-color: rgb(136, 89, 56);
  border-left-color: rgb(136, 89, 56);
  border-right-color: rgb(136, 89, 56);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(194, 141, 103));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(194, 141, 103));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(231, 186, 154);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(194, 141, 103);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(194, 141, 103);
  border-right-color: rgb(194, 141, 103);
  border-top-color: rgb(194, 141, 103);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--icon-color, rgb(194, 141, 103));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(136, 89, 56);
  border-left-color: rgb(136, 89, 56);
  border-right-color: rgb(136, 89, 56);
  border-top-color: rgb(136, 89, 56);
  border-top-left-radius: 30px;
  color: var(--status-bar-text-color, rgb(194, 141, 103));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(194, 141, 103);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(231, 186, 154);
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(138, 90, 2);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
  color: rgb(231, 186, 154);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(194, 141, 103));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(194, 141, 103);
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(138, 90, 2);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body li.section-li > .section .meta {
  color: rgb(194, 141, 103);
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(194, 141, 103));
}

html body ul.section-ul {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(194, 141, 103);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(194, 141, 103);
  border-right-color: rgb(194, 141, 103);
  border-top-color: rgb(194, 141, 103);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--icon-color, rgb(194, 141, 103));
}

html body .darkmode svg {
  color: rgb(194, 141, 103);
  stroke: rgb(194, 141, 103);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(194, 141, 103);
  border-left-color: rgb(194, 141, 103);
  border-right-color: rgb(194, 141, 103);
  border-top-color: rgb(194, 141, 103);
  color: rgb(194, 141, 103);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(163, 117, 84));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(231, 186, 154);
}

html body .canvas-node-content {
  color: rgb(231, 186, 154);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(231, 186, 154));
}

html body .canvas-node-group {
  border-color: rgb(231, 186, 154);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgba(19, 6, 0, 0.357));
  border-color: rgb(231, 186, 154);
}`,
    bases: `html body .bases-table {
  border-color: rgb(197, 128, 0);
}

html body .bases-table thead th {
  background-color: var(--c-table-th-background, rgb(92, 47, 11));
  border-color: rgb(136, 89, 56) rgb(255, 166, 0) rgb(136, 89, 56) rgb(136, 89, 56);
  color: var(--table-header-color, rgb(231, 186, 154));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(136, 89, 56);
  border-left-color: rgb(136, 89, 56);
  border-right-color: rgb(136, 89, 56);
  border-top-color: rgb(136, 89, 56);
  color: var(--text-muted, rgb(194, 141, 103));
}

html body .metadata-properties {
  border-bottom-color: rgb(194, 141, 103);
  border-left-color: rgb(194, 141, 103);
  border-right-color: rgb(194, 141, 103);
  border-top-color: rgb(194, 141, 103);
  color: rgb(194, 141, 103);
}

html body .note-properties {
  border-color: rgb(136, 89, 56);
}

html body .note-properties-key {
  color: rgb(194, 141, 103);
}

html body .note-properties-row {
  border-color: rgb(194, 141, 103);
}

html body .note-properties-tags {
  color: var(--pill-color, rgb(231, 186, 154));
}

html body .note-properties-value {
  color: rgb(194, 141, 103);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(51, 16, 0));
  color: var(--text-normal, rgb(231, 186, 154));
}

html body ol.overflow {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgba(19, 6, 0, 0.357));
  border-color: rgb(231, 186, 154);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(51, 16, 0));
}

html body .stacked-page.active {
  border-color: rgb(231, 186, 154);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
  color: rgb(231, 186, 154);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgb(231, 186, 154));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(231, 186, 154);
}

html body details {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body input[type=text] {
  border-bottom-color: rgb(194, 141, 103);
  border-left-color: rgb(194, 141, 103);
  border-right-color: rgb(194, 141, 103);
  border-top-color: rgb(194, 141, 103);
  color: var(--text-normal, rgb(194, 141, 103));
  font-family: "??", "??", "MADE Kenfolg v2", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: var(--code-background, rgb(34, 11, 0));
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
  color: var(--code-normal, rgb(231, 186, 154));
}

html body progress {
  border-bottom-color: rgb(231, 186, 154);
  border-left-color: rgb(231, 186, 154);
  border-right-color: rgb(231, 186, 154);
  border-top-color: rgb(231, 186, 154);
}

html body sub {
  color: rgb(231, 186, 154);
}

html body summary {
  color: rgb(231, 186, 154);
}

html body sup {
  color: rgb(231, 186, 154);
}

html body ul.tags > li {
  color: var(--tag-color, rgb(231, 186, 154));
}`,
  },
  light: {},
  classSettings: {
    hvn: {
      general: `.hvn .titlebar-text {
display: none;
}`,
    },
    como: {
      general: `.como .CodeMirror-gutter.CodeMirror-linenumbers, .como .CodeMirror-gutter.CodeMirror-foldgutter, .como .nav-action-button.is-active, .como .workspace-tab-header.is-active, .como .workspace-tab-header, .como .workspace-tab-header-inner, .como .workspace-tab-container-before.is-before-active .workspace-tab-header-inner, .como .workspace-tab-header.is-before-active .workspace-tab-header-inner {
background-color: transparent !important;
}

.como .workspace-tab-container-before.is-before-active, .como .workspace-tab-container-after.is-after-active {
visibility: hidden;
}`,
      dark: `body.theme-dark {
background-size: cover;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:fi='http://pattern.flaticon.com/' x='0' y='0' width='3000' height='1500' viewBox='0 0 5250 2625'%3E%3Crect x='0px' y='0px' width='100%25' height='100%25' opacity='1' fill='%233a1301'/%3E%3Cdefs%3E%3Cg transform='matrix(0.12703206601482037 0.12703206601482037 -0.12703206601482037 0.12703206601482037 165.4477408311932 61.385661646754954)' id='L1_0'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.15403747063085035 0.05501338174516969 -0.05501338174516969 0.15403747063085035 217.2545782852056 -27.55495988487568)' id='L1_2'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3Cpath d='M301.504,24.592h-23.538v-8.393c0-8.946-7.253-16.199-16.2-16.199H103.642c-8.947,0-16.2,7.253-16.2,16.199v8.393H63.904 c-8.947,0-16.2,7.253-16.2,16.2v20.341c0,8.946,7.253,16.199,16.2,16.199l13.067,0.087l23.739,273.192 c0.728,8.373,7.735,14.797,16.139,14.797h131.708c8.404,0,15.412-6.424,16.141-14.797l23.747-273.279h13.06 c8.947,0,16.2-7.253,16.2-16.199V40.792C317.704,31.845,310.451,24.592,301.504,24.592z M144.815,249.102 c-15.104-15.104-10.385-44.31,10.541-65.235c19.297-19.296,45.641-24.81,61.467-13.704c-4.594,8.493-10.935,16.342-19.621,23.031 c-5.592,4.288-11.362,7.502-16.446,10.337c-3.459,1.928-6.726,3.746-9.469,5.637c-13.339,9.17-22.634,24.146-25.934,40.451 C145.171,249.448,144.994,249.275,144.815,249.102z M210.052,238.561c-18.755,18.757-44.159,24.486-60.1,14.604 c18.662-26.765,36.955-35.026,36.955-35.026c19.124-9.528,29.176-26.157,33.395-45.094c0.095,0.098,0.192,0.188,0.291,0.282 C235.696,188.428,230.978,217.637,210.052,238.561z' transform='matrix(0.20704366266727448 0 0 0.20704366266727448 122.1722825641408 256.1810357272625)' id='L1_3'/%3E%3Cg transform='matrix(3.8171021938323975 0 0 3.8171021938323975 301.99958634376526 59.74760114706464)' id='L1_4'%3E%3Cpath d='M2.756,20.725h2.95c0.041,0.257,0.254,0.458,0.523,0.458h6.707c0.27,0,0.482-0.2,0.523-0.458h2.95 c0.499,0,0.903-0.404,0.903-0.903H1.854C1.854,20.321,2.258,20.725,2.756,20.725z'/%3E%3Cpath d='M20.865,11.444c-0.752-0.609-1.811-0.619-2.508-0.542c0.02-0.486,0.031-0.983,0.031-1.5H0c0,4.97,0.752,8.556,5.511,9.894 h7.366c1.885-0.529,3.135-1.418,3.964-2.6c1.806-0.035,4.711-0.746,4.82-3.24C21.708,12.364,21.254,11.758,20.865,11.444z M17.598,15.27c0.346-0.889,0.551-1.889,0.664-2.988c0.488-0.08,1.329-0.131,1.754,0.215c0.078,0.064,0.321,0.262,0.293,0.901 C20.252,14.69,18.648,15.124,17.598,15.27z'/%3E%3Cpath d='M7.491,8.704c0,0,3.5-0.257,1.896-3.208c-1.288-2.369-0.994-3.759,0.654-5.015c0,0-5.398,1.375-2.25,5.63 C8.946,7.965,7.491,8.704,7.491,8.704z'/%3E%3Cpath d='M9.85,8.468c0,0,2.804-0.591,1.278-2.846c-0.554-0.978,0.21-1.327,0.21-1.327s-1.805,0.057-1.043,1.608 C10.905,7.15,10.724,7.858,9.85,8.468z'/%3E%3C/g%3E%3Cg transform='matrix(-0.12943158093095472 -0.12943158093095472 -0.12943158093095472 0.12943158093095472 401.90349704176356 291.64648757721693)' id='L1_5'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.17410221695899963 0 0 0.17410221695899963 207.4298324584961 166.4298324584961)' id='L1_8'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z' fill='%23000000'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z' fill='%23000000'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z' fill='%23000000'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z' fill='%23000000'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z' fill='%23000000'/%3E%3C/g%3E%3Cg transform='matrix(-0.16020387411117554 0 0 0.16020387411117554 119.01219177246094 167.98780822753906)' id='L1_9'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z'/%3E%3C/g%3E%3Cg transform='matrix(-0.13455920619959974 0.04333262729730996 0.04333262729730996 0.13455920619959974 102.061080903045 -16.788214506890498)' id='L1_10'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/defs%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_2' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_2' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_2)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_0' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_0' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_0)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_3' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_3' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_3)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_4' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_4' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_4)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_5' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_5' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_5)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_8' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_8' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_8)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_9' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_9' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_9)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_10' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_10' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_10)'/%3E%3C/g%3E%3C/svg%3E");
}

.theme-dark .titlebar {
background-color: #0000001f;
}

.theme-dark .status-bar {
background-color: transparent;
}

.theme-dark .workspace {
--background-primary: #0000000f;
--background-primary-alt: #13060050;
--background-secondary: #1306005b;
--background-secondary-alt: #1306001a;
--background-modifier-border: #00000000;
--background-modifier-form-field: var(--background-secondary-alt);
--svg-faint: var(--text-faint);
}

.theme-dark {
--c-active-line-background: #491700;
--text-selection: #491700;
--background-primary: #331000;
--background-primary-alt: #220b00;
--background-secondary: #220b00;
--background-secondary-alt: #331000;
--scrollbar-bg: #421500;
--scrollbar-thumb-bg: #5c1d00;
}

body.theme-dark .kanban-plugin__scroll-container.kanban-plugin__horizontal {
background-size: cover;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:fi='http://pattern.flaticon.com/' x='0' y='0' width='3000' height='1500' viewBox='0 0 5250 2625'%3E%3Crect x='0px' y='0px' width='100%25' height='100%25' opacity='1' fill='%233a1301'/%3E%3Cdefs%3E%3Cg transform='matrix(0.12703206601482037 0.12703206601482037 -0.12703206601482037 0.12703206601482037 165.4477408311932 61.385661646754954)' id='L1_0'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.15403747063085035 0.05501338174516969 -0.05501338174516969 0.15403747063085035 217.2545782852056 -27.55495988487568)' id='L1_2'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3Cpath d='M301.504,24.592h-23.538v-8.393c0-8.946-7.253-16.199-16.2-16.199H103.642c-8.947,0-16.2,7.253-16.2,16.199v8.393H63.904 c-8.947,0-16.2,7.253-16.2,16.2v20.341c0,8.946,7.253,16.199,16.2,16.199l13.067,0.087l23.739,273.192 c0.728,8.373,7.735,14.797,16.139,14.797h131.708c8.404,0,15.412-6.424,16.141-14.797l23.747-273.279h13.06 c8.947,0,16.2-7.253,16.2-16.199V40.792C317.704,31.845,310.451,24.592,301.504,24.592z M144.815,249.102 c-15.104-15.104-10.385-44.31,10.541-65.235c19.297-19.296,45.641-24.81,61.467-13.704c-4.594,8.493-10.935,16.342-19.621,23.031 c-5.592,4.288-11.362,7.502-16.446,10.337c-3.459,1.928-6.726,3.746-9.469,5.637c-13.339,9.17-22.634,24.146-25.934,40.451 C145.171,249.448,144.994,249.275,144.815,249.102z M210.052,238.561c-18.755,18.757-44.159,24.486-60.1,14.604 c18.662-26.765,36.955-35.026,36.955-35.026c19.124-9.528,29.176-26.157,33.395-45.094c0.095,0.098,0.192,0.188,0.291,0.282 C235.696,188.428,230.978,217.637,210.052,238.561z' transform='matrix(0.20704366266727448 0 0 0.20704366266727448 122.1722825641408 256.1810357272625)' id='L1_3'/%3E%3Cg transform='matrix(3.8171021938323975 0 0 3.8171021938323975 301.99958634376526 59.74760114706464)' id='L1_4'%3E%3Cpath d='M2.756,20.725h2.95c0.041,0.257,0.254,0.458,0.523,0.458h6.707c0.27,0,0.482-0.2,0.523-0.458h2.95 c0.499,0,0.903-0.404,0.903-0.903H1.854C1.854,20.321,2.258,20.725,2.756,20.725z'/%3E%3Cpath d='M20.865,11.444c-0.752-0.609-1.811-0.619-2.508-0.542c0.02-0.486,0.031-0.983,0.031-1.5H0c0,4.97,0.752,8.556,5.511,9.894 h7.366c1.885-0.529,3.135-1.418,3.964-2.6c1.806-0.035,4.711-0.746,4.82-3.24C21.708,12.364,21.254,11.758,20.865,11.444z M17.598,15.27c0.346-0.889,0.551-1.889,0.664-2.988c0.488-0.08,1.329-0.131,1.754,0.215c0.078,0.064,0.321,0.262,0.293,0.901 C20.252,14.69,18.648,15.124,17.598,15.27z'/%3E%3Cpath d='M7.491,8.704c0,0,3.5-0.257,1.896-3.208c-1.288-2.369-0.994-3.759,0.654-5.015c0,0-5.398,1.375-2.25,5.63 C8.946,7.965,7.491,8.704,7.491,8.704z'/%3E%3Cpath d='M9.85,8.468c0,0,2.804-0.591,1.278-2.846c-0.554-0.978,0.21-1.327,0.21-1.327s-1.805,0.057-1.043,1.608 C10.905,7.15,10.724,7.858,9.85,8.468z'/%3E%3C/g%3E%3Cg transform='matrix(-0.12943158093095472 -0.12943158093095472 -0.12943158093095472 0.12943158093095472 401.90349704176356 291.64648757721693)' id='L1_5'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.17410221695899963 0 0 0.17410221695899963 207.4298324584961 166.4298324584961)' id='L1_8'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z' fill='%23000000'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z' fill='%23000000'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z' fill='%23000000'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z' fill='%23000000'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z' fill='%23000000'/%3E%3C/g%3E%3Cg transform='matrix(-0.16020387411117554 0 0 0.16020387411117554 119.01219177246094 167.98780822753906)' id='L1_9'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z'/%3E%3C/g%3E%3Cg transform='matrix(-0.13455920619959974 0.04333262729730996 0.04333262729730996 0.13455920619959974 102.061080903045 -16.788214506890498)' id='L1_10'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/defs%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_2' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_2' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_2)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_0' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_0' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_0)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_3' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_3' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_3)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_4' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_4' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_4)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_5' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_5' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_5)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_8' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_8' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_8)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_9' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_9' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_9)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.25'%3E%3Cpattern id='pattern_L1_10' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_10' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_10)'/%3E%3C/g%3E%3C/svg%3E");
}`,
      light: `body.theme-light {
background-size: cover;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:fi='http://pattern.flaticon.com/' x='0' y='0' width='3000' height='1500' viewBox='0 0 5250 2625'%3E%3Crect x='0px' y='0px' width='100%25' height='100%25' opacity='1' fill='%23ffeada'/%3E%3Cdefs%3E%3Cg transform='matrix(0.12703206601482037 0.12703206601482037 -0.12703206601482037 0.12703206601482037 165.4477408311932 61.385661646754954)' id='L1_0'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.15403747063085035 0.05501338174516969 -0.05501338174516969 0.15403747063085035 217.2545782852056 -27.55495988487568)' id='L1_2'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3Cpath d='M301.504,24.592h-23.538v-8.393c0-8.946-7.253-16.199-16.2-16.199H103.642c-8.947,0-16.2,7.253-16.2,16.199v8.393H63.904 c-8.947,0-16.2,7.253-16.2,16.2v20.341c0,8.946,7.253,16.199,16.2,16.199l13.067,0.087l23.739,273.192 c0.728,8.373,7.735,14.797,16.139,14.797h131.708c8.404,0,15.412-6.424,16.141-14.797l23.747-273.279h13.06 c8.947,0,16.2-7.253,16.2-16.199V40.792C317.704,31.845,310.451,24.592,301.504,24.592z M144.815,249.102 c-15.104-15.104-10.385-44.31,10.541-65.235c19.297-19.296,45.641-24.81,61.467-13.704c-4.594,8.493-10.935,16.342-19.621,23.031 c-5.592,4.288-11.362,7.502-16.446,10.337c-3.459,1.928-6.726,3.746-9.469,5.637c-13.339,9.17-22.634,24.146-25.934,40.451 C145.171,249.448,144.994,249.275,144.815,249.102z M210.052,238.561c-18.755,18.757-44.159,24.486-60.1,14.604 c18.662-26.765,36.955-35.026,36.955-35.026c19.124-9.528,29.176-26.157,33.395-45.094c0.095,0.098,0.192,0.188,0.291,0.282 C235.696,188.428,230.978,217.637,210.052,238.561z' transform='matrix(0.20704366266727448 0 0 0.20704366266727448 121.17228185647207 260.1810357272625)' id='L1_3'/%3E%3Cg transform='matrix(3.8171021938323975 0 0 3.8171021938323975 296.99958634376526 56.747602865273166)' id='L1_4'%3E%3Cpath d='M2.756,20.725h2.95c0.041,0.257,0.254,0.458,0.523,0.458h6.707c0.27,0,0.482-0.2,0.523-0.458h2.95 c0.499,0,0.903-0.404,0.903-0.903H1.854C1.854,20.321,2.258,20.725,2.756,20.725z'/%3E%3Cpath d='M20.865,11.444c-0.752-0.609-1.811-0.619-2.508-0.542c0.02-0.486,0.031-0.983,0.031-1.5H0c0,4.97,0.752,8.556,5.511,9.894 h7.366c1.885-0.529,3.135-1.418,3.964-2.6c1.806-0.035,4.711-0.746,4.82-3.24C21.708,12.364,21.254,11.758,20.865,11.444z M17.598,15.27c0.346-0.889,0.551-1.889,0.664-2.988c0.488-0.08,1.329-0.131,1.754,0.215c0.078,0.064,0.321,0.262,0.293,0.901 C20.252,14.69,18.648,15.124,17.598,15.27z'/%3E%3Cpath d='M7.491,8.704c0,0,3.5-0.257,1.896-3.208c-1.288-2.369-0.994-3.759,0.654-5.015c0,0-5.398,1.375-2.25,5.63 C8.946,7.965,7.491,8.704,7.491,8.704z'/%3E%3Cpath d='M9.85,8.468c0,0,2.804-0.591,1.278-2.846c-0.554-0.978,0.21-1.327,0.21-1.327s-1.805,0.057-1.043,1.608 C10.905,7.15,10.724,7.858,9.85,8.468z'/%3E%3C/g%3E%3Cg transform='matrix(0.12943158093095472 0.12943158093095472 -0.12943158093095472 0.12943158093095472 344.5132307340683 234.25622130187958)' id='L1_5'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.17410221695899963 0 0 0.17410221695899963 199.4298324584961 163.4298324584961)' id='L1_8'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z' fill='%23000000'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z' fill='%23000000'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z' fill='%23000000'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z' fill='%23000000'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z' fill='%23000000'/%3E%3C/g%3E%3Cg transform='matrix(-0.16020387411117554 0 0 0.16020387411117554 120.01219177246094 167.98780822753906)' id='L1_9'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z'/%3E%3C/g%3E%3Cg transform='matrix(-0.15439044230171725 -0.04860439598711596 -0.04860439598711596 0.15439044230171725 127.28786318687936 -1.895110412880534)' id='L1_10'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/defs%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_2' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_2' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_2)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_0' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_0' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_0)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_3' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_3' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_3)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_4' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_4' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_4)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_5' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_5' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_5)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_8' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_8' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_8)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_9' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_9' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_9)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_10' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_10' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_10)'/%3E%3C/g%3E%3C/svg%3E");
}

.theme-light .titlebar {
background-color: #00000002;
}

.theme-light .status-bar {
background-color: transparent;
}

.theme-light .workspace {
background-size: cover;
--background-primary: #ffdfc50f;
--background-primary-alt: #ffd3c15e;
--background-secondary: #ffd3c15e;
--background-secondary-alt: #ffcdb71a;
--background-modifier-border: #ffdfc50f;
--background-modifier-form-field: var(--background-secondary-alt);
--svg-faint: var(--text-faint);
}

body.theme-light .kanban-plugin__scroll-container.kanban-plugin__horizontal {
background-size: cover;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:fi='http://pattern.flaticon.com/' x='0' y='0' width='3000' height='1500' viewBox='0 0 5250 2625'%3E%3Crect x='0px' y='0px' width='100%25' height='100%25' opacity='1' fill='%23ffeada'/%3E%3Cdefs%3E%3Cg transform='matrix(0.12703206601482037 0.12703206601482037 -0.12703206601482037 0.12703206601482037 165.4477408311932 61.385661646754954)' id='L1_0'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.15403747063085035 0.05501338174516969 -0.05501338174516969 0.15403747063085035 217.2545782852056 -27.55495988487568)' id='L1_2'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3Cpath d='M301.504,24.592h-23.538v-8.393c0-8.946-7.253-16.199-16.2-16.199H103.642c-8.947,0-16.2,7.253-16.2,16.199v8.393H63.904 c-8.947,0-16.2,7.253-16.2,16.2v20.341c0,8.946,7.253,16.199,16.2,16.199l13.067,0.087l23.739,273.192 c0.728,8.373,7.735,14.797,16.139,14.797h131.708c8.404,0,15.412-6.424,16.141-14.797l23.747-273.279h13.06 c8.947,0,16.2-7.253,16.2-16.199V40.792C317.704,31.845,310.451,24.592,301.504,24.592z M144.815,249.102 c-15.104-15.104-10.385-44.31,10.541-65.235c19.297-19.296,45.641-24.81,61.467-13.704c-4.594,8.493-10.935,16.342-19.621,23.031 c-5.592,4.288-11.362,7.502-16.446,10.337c-3.459,1.928-6.726,3.746-9.469,5.637c-13.339,9.17-22.634,24.146-25.934,40.451 C145.171,249.448,144.994,249.275,144.815,249.102z M210.052,238.561c-18.755,18.757-44.159,24.486-60.1,14.604 c18.662-26.765,36.955-35.026,36.955-35.026c19.124-9.528,29.176-26.157,33.395-45.094c0.095,0.098,0.192,0.188,0.291,0.282 C235.696,188.428,230.978,217.637,210.052,238.561z' transform='matrix(0.20704366266727448 0 0 0.20704366266727448 121.17228185647207 260.1810357272625)' id='L1_3'/%3E%3Cg transform='matrix(3.8171021938323975 0 0 3.8171021938323975 296.99958634376526 56.747602865273166)' id='L1_4'%3E%3Cpath d='M2.756,20.725h2.95c0.041,0.257,0.254,0.458,0.523,0.458h6.707c0.27,0,0.482-0.2,0.523-0.458h2.95 c0.499,0,0.903-0.404,0.903-0.903H1.854C1.854,20.321,2.258,20.725,2.756,20.725z'/%3E%3Cpath d='M20.865,11.444c-0.752-0.609-1.811-0.619-2.508-0.542c0.02-0.486,0.031-0.983,0.031-1.5H0c0,4.97,0.752,8.556,5.511,9.894 h7.366c1.885-0.529,3.135-1.418,3.964-2.6c1.806-0.035,4.711-0.746,4.82-3.24C21.708,12.364,21.254,11.758,20.865,11.444z M17.598,15.27c0.346-0.889,0.551-1.889,0.664-2.988c0.488-0.08,1.329-0.131,1.754,0.215c0.078,0.064,0.321,0.262,0.293,0.901 C20.252,14.69,18.648,15.124,17.598,15.27z'/%3E%3Cpath d='M7.491,8.704c0,0,3.5-0.257,1.896-3.208c-1.288-2.369-0.994-3.759,0.654-5.015c0,0-5.398,1.375-2.25,5.63 C8.946,7.965,7.491,8.704,7.491,8.704z'/%3E%3Cpath d='M9.85,8.468c0,0,2.804-0.591,1.278-2.846c-0.554-0.978,0.21-1.327,0.21-1.327s-1.805,0.057-1.043,1.608 C10.905,7.15,10.724,7.858,9.85,8.468z'/%3E%3C/g%3E%3Cg transform='matrix(0.12943158093095472 0.12943158093095472 -0.12943158093095472 0.12943158093095472 344.5132307340683 234.25622130187958)' id='L1_5'%3E%3Cpath d='m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0'/%3E%3Cpath d='m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0'/%3E%3C/g%3E%3Cg transform='matrix(0.17410221695899963 0 0 0.17410221695899963 199.4298324584961 163.4298324584961)' id='L1_8'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z' fill='%23000000'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z' fill='%23000000'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z' fill='%23000000'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z' fill='%23000000'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z' fill='%23000000'/%3E%3C/g%3E%3Cg transform='matrix(-0.16020387411117554 0 0 0.16020387411117554 120.01219177246094 167.98780822753906)' id='L1_9'%3E%3Cpath d='m171.961 488.7a103.659 103.659 0 0 0 16.835-1.374c1.786-.289 3.622-.641 5.442-1.045a103.262 103.262 0 0 0 29.062-11.235c27.053-15.451 48.362-43.658 60-79.425a203.035 203.035 0 0 0 8.271-37.188c3.857.377 7.749.587 11.679.587 23.832 0 48.867-6.891 73.462-20.345 31.792-17.391 59.943-44.268 81.409-77.725 48.517-75.59 49.844-165.336 3.163-213.389a102.388 102.388 0 0 0 -27.647-20.271c-30.955-15.531-69.063-15.041-107.3 1.377-37.676 16.175-72.165 46.5-97.116 85.382a248.086 248.086 0 0 0 -19.182 36.1c-21.863-16.077-46.4-25.332-71.548-25.649a103.012 103.012 0 0 0 -23.426 2.4 99.866 99.866 0 0 0 -10.449 2.9c-32.844 10.973-59.388 38.318-74.741 77-15.13 38.1-17.984 83.936-8.039 129.051 19.678 89.315 83.6 152.849 150.125 152.849zm283.166-423.988c16.139 19.931 24.679 47.725 24.189 79.247-.556 35.916-12.866 74.4-34.66 108.351-20.024 31.209-46.174 56.22-75.622 72.329-25.084 13.721-51.387 19.966-75 17.955a239.052 239.052 0 0 0 87.91-147.286 223.685 223.685 0 0 1 64.1-121.724zm-36.019-8.412 12.308-12.017c1 .589 2.006 1.194 3 1.827a86.547 86.547 0 0 1 9.568 7.122l-9.118 8.9a239.671 239.671 0 0 0 -68.688 130.438 223.059 223.059 0 0 1 -72.97 129.923q-.324-9.708-1.457-19.543a239.189 239.189 0 0 0 63.261-124.921 222.3 222.3 0 0 1 64.096-121.729zm-176.424 66.39c44.258-68.972 118.056-104.59 173.164-85.564l-7.917 7.73a238.192 238.192 0 0 0 -68.683 130.435 223.076 223.076 0 0 1 -50.677 107.374c-.353-1.778-.718-3.557-1.11-5.336-10.605-48.132-34.258-89.2-64.513-116.609a231.16 231.16 0 0 1 19.736-38.03zm-96.5 30.979.126-12.7c25.508 2.634 51.226 16.2 73.215 38.786 25.055 25.741 43.634 61.617 52.316 101.018 8.334 37.836 7 76.866-3.749 109.9-8.229 25.281-21.66 46.215-38.582 60.535a239.064 239.064 0 0 0 -42.32-166.226 222.415 222.415 0 0 1 -41.021-129.062c0-.746 0-1.483.01-2.251zm-31.25 6.887.163-17.2c1.129-.3 2.263-.579 3.405-.83a86.949 86.949 0 0 1 11.809-1.755l-.126 12.722c-.011.814-.011 1.616-.011 2.43a238.328 238.328 0 0 0 43.956 138.3 223.134 223.134 0 0 1 39.247 157.239l-1.463 11.561a87.312 87.312 0 0 1 -15.017 6.057l1.1-8.719a240.977 240.977 0 0 0 1.9-30.155 238.346 238.346 0 0 0 -43.957-138.334 222.252 222.252 0 0 1 -41.011-131.316zm-15.9-11.219-.105 11.063a238.158 238.158 0 0 0 43.947 140.71 222.434 222.434 0 0 1 41.024 129.09 224.921 224.921 0 0 1 -1.776 28.146l-1.764 13.947c-28.477 2.7-58.094-8.694-84.035-32.5-28.455-26.115-49.359-64.251-58.862-107.384-17.643-80.027 9.193-157.444 61.571-183.072z'/%3E%3Cpath d='m290.149 115.721a7.973 7.973 0 0 0 5.447-2.142c3.356-3.122 6.884-6.14 10.486-8.97a8 8 0 1 0 -9.887-12.58c-3.948 3.1-7.816 6.411-11.5 9.834a8 8 0 0 0 5.45 13.858z'/%3E%3Cpath d='m249.27 164.845a7.994 7.994 0 0 0 10.724-3.6 166.483 166.483 0 0 1 18.325-28.927 8 8 0 1 0 -12.56-9.91 182.321 182.321 0 0 0 -20.091 31.714 8 8 0 0 0 3.602 10.723z'/%3E%3Cpath d='m94.5 413.242a8 8 0 0 0 12.162-10.4c-2.979-3.485-5.849-7.136-8.525-10.852a8 8 0 0 0 -12.983 9.352c2.939 4.076 6.083 8.079 9.346 11.9z'/%3E%3Cpath d='m114.237 433.024a182.34 182.34 0 0 0 30.847 21.4 8 8 0 1 0 7.715-14.017 166.344 166.344 0 0 1 -28.136-19.517 8 8 0 0 0 -10.426 12.136z'/%3E%3C/g%3E%3Cg transform='matrix(-0.15439044230171725 -0.04860439598711596 -0.04860439598711596 0.15439044230171725 127.28786318687936 -1.895110412880534)' id='L1_10'%3E%3Cpath d='m182.218 364.34c-.051-.051-.099-.103-.15-.153-16.693-16.693-36.898-23.216-58.424-18.863-18.014 3.642-37.038 15.07-55.017 33.049s-29.407 37.003-33.049 55.017c-4.335 21.444 2.122 41.57 18.668 58.225.021.023.044.044.065.067.044.044.085.089.129.133 13.331 13.331 28.899 20.175 45.595 20.175 4.21 0 8.494-.436 12.83-1.312 18.014-3.642 37.038-15.07 55.017-33.049s29.407-37.003 33.049-55.017c4.334-21.437-2.119-41.558-18.654-58.21-.019-.021-.039-.041-.059-.062zm-127.036 73.013c2.859-14.145 12.399-29.65 27.587-44.837 15.188-15.188 30.693-24.728 44.838-27.588 3.078-.622 6.077-.934 9.004-.934 6.338 0 12.337 1.469 18.065 4.417-25.234 13.056-36.79 35.871-47.185 56.427-10.823 21.403-20.289 40.095-42.911 48.443-8.998-10.865-12.079-22.669-9.398-35.928zm126.146-18.705c-2.86 14.145-12.399 29.65-27.588 44.837-15.188 15.188-30.693 24.728-44.838 27.588-9.82 1.985-18.839.792-27.274-3.607 22.905-12.469 33.847-34.096 43.712-53.605 11.401-22.548 21.359-42.223 46.559-51.174 9.022 10.874 12.112 22.688 9.429 35.961z'/%3E%3Cpath d='m318.662 301.994c-19.669-9.777-40.872-8.704-61.315 3.1-.061.035-.12.072-.182.108-.026.016-.052.03-.078.046-20.281 11.804-31.721 29.569-33.083 51.396-1.145 18.342 4.97 39.676 17.683 61.696s28.131 37.982 44.588 46.162c8.885 4.416 18.081 6.619 27.38 6.618 11.251 0 22.652-3.227 33.827-9.656.022-.012.044-.024.065-.037.015-.009.03-.016.044-.025 20.444-11.803 31.974-29.629 33.342-51.551 1.145-18.342-4.971-39.676-17.684-61.696s-28.13-37.981-44.587-46.161zm-23.485 144.599c-12.923-6.423-25.43-19.651-36.17-38.252-10.739-18.602-15.941-36.047-15.042-50.45.844-13.515 6.887-24.127 18.415-32.295 22.024 15.169 26.551 36.751 31.727 61.481 4.48 21.397 9.452 45.12 28.349 63.092-9.285 2.065-18.305.883-27.279-3.576zm65.794-37.987c-.842 13.502-6.873 24.106-18.377 32.271-19.69-13.918-23.996-34.423-28.911-57.899-4.72-22.545-9.977-47.571-30.969-66.713 2.856-.619 5.688-.938 8.501-.938 6.25 0 12.408 1.527 18.544 4.577 12.923 6.423 25.43 19.651 36.17 38.252 10.739 18.602 15.942 36.047 15.042 50.45z'/%3E%3Cpath d='m258.085 262.306c9.735-19.585 8.71-40.691-2.953-61.054-.013-.025-.028-.049-.042-.074-.036-.062-.069-.125-.105-.187-11.803-20.444-29.629-31.974-51.551-33.342-18.344-1.141-39.676 4.971-61.696 17.684s-37.982 28.131-46.162 44.588c-9.734 19.584-8.709 40.69 2.953 61.054.013.025.028.049.042.074.036.062.069.125.105.187 11.803 20.444 29.629 31.974 51.551 33.342 1.452.09 2.92.136 4.409.136 17.313-.001 37.011-6.112 57.287-17.819 22.02-12.714 37.983-28.132 46.162-44.589zm-56.161 27.268c-18.601 10.739-36.048 15.94-50.45 15.042-9.995-.624-18.394-4.107-25.4-10.531 7.957-1.912 15.477-5.106 22.699-9.635 4.679-2.935 6.093-9.106 3.159-13.785-2.934-4.678-9.106-6.092-13.785-3.159-7.824 4.906-15.848 7.649-24.872 8.465-5.886-12.828-5.809-25.031.214-37.148 6.423-12.923 19.651-25.43 38.252-36.17 17.227-9.946 33.462-15.142 47.208-15.142 1.097 0 2.178.033 3.243.1 9.907.618 18.246 4.044 25.215 10.36-7.865 1.726-15.293 4.59-22.424 8.631-4.805 2.723-6.493 8.826-3.77 13.63 1.841 3.248 5.225 5.072 8.709 5.072 1.67 0 3.364-.419 4.921-1.302 7.863-4.456 16.266-7.013 25.538-7.768 5.897 12.836 5.824 25.046-.203 37.171-6.425 12.922-19.653 25.429-38.254 36.169z'/%3E%3Cpath d='m477.718 216.867c-.001-.074-.003-.147-.006-.221-.104-23.429-9.762-42.193-27.964-54.273-15.313-10.162-36.847-15.534-62.272-15.534s-46.959 5.372-62.271 15.534c-18.301 12.145-27.974 31.043-27.974 54.65 0 .053.004.104.004.157.001.074.003.147.006.221.104 23.429 9.762 42.193 27.964 54.272 15.312 10.162 36.846 15.534 62.271 15.534s46.959-5.372 62.272-15.534c18.301-12.145 27.974-31.043 27.974-54.65 0-.052-.004-.103-.004-.156zm-141.454-37.829c12.024-7.98 29.733-12.198 51.212-12.198s39.188 4.218 51.213 12.198c11.272 7.48 17.44 18.005 18.759 32.051-21.899 10.093-41.81 3.57-64.597-3.912-21.882-7.185-46.18-15.144-73.249-6.541 2.875-8.963 8.386-16.106 16.662-21.598zm102.425 75.972c-12.024 7.98-29.733 12.198-51.213 12.198-21.479 0-39.188-4.218-51.212-12.198-11.283-7.488-17.452-18.028-18.762-32.095 24.147-11.488 45.101-4.619 69.108 3.264 14.715 4.831 30.561 10.035 47.446 10.034 6.948 0 14.073-.882 21.367-3.034-2.853 9.072-8.387 16.292-16.734 21.831z'/%3E%3Cpath d='m152.753 94.793c8.18 16.457 24.142 31.875 46.162 44.588 20.278 11.708 39.974 17.819 57.288 17.819 1.488 0 2.958-.045 4.409-.135 21.921-1.368 39.747-12.897 51.551-33.342.037-.064.071-.128.108-.193.012-.022.025-.044.037-.066 11.664-20.365 12.689-41.472 2.955-61.058-8.18-16.457-24.143-31.875-46.162-44.588-22.021-12.712-43.36-18.829-61.698-17.682-21.921 1.368-39.748 12.897-51.551 33.342-.036.062-.069.125-.105.187-.014.025-.028.049-.042.074-11.662 20.364-12.687 41.47-2.952 61.054zm106.612 42.311c-14.396.899-31.848-4.303-50.45-15.042-18.601-10.74-31.829-23.247-38.252-36.17-6.027-12.126-6.1-24.338-.201-37.176 26.658 2.124 41.369 18.552 58.218 37.381 14.578 16.291 30.745 34.35 56.097 40.465-7.008 6.431-15.412 9.918-25.412 10.542zm-50.716-117.007c14.402-.898 31.849 4.303 50.45 15.042s31.829 23.247 38.252 36.17c6.021 12.114 6.101 24.313.22 37.137-24.011-2.208-37.993-17.814-53.987-35.686-15.358-17.162-32.421-36.204-60.165-42.289 6.972-6.324 15.316-9.755 25.23-10.374z'/%3E%3Cpath d='m176.276 235.188h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/defs%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_2' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_2' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_2' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_2' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_2)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_0' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_0' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_0' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_0' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_0)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_3' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_3' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_3' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_3' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_3)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_4' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_4' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_4' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_4' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_4)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_5' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_5' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_5' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_5' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_5)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_8' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_8' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_8' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_8' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_8)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_9' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_9' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_9' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_9' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_9)'/%3E%3C/g%3E%3Cg fi:class='KUsePattern' opacity='0.07'%3E%3Cpattern id='pattern_L1_10' width='350' height='350' patternUnits='userSpaceOnUse'%3E%3Cuse xlink:href='%23L1_10' x='-350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='-350'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='0'/%3E%3Cuse xlink:href='%23L1_10' x='-350' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='0' y='350'/%3E%3Cuse xlink:href='%23L1_10' x='350' y='350'/%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern_L1_10)'/%3E%3C/g%3E%3C/svg%3E");
}`,
    },
    nmhn: {
      general: `.nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-1, .nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-2, .nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-3, .nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-4, .nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-5, .nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-6 {
font-size: 1px;
}

.nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-1::before {
content: "H1 ";
color: var(--c-Hn-headings);
font-size: calc(35px - calc(16px - var(--editor-font-size))*2.5);
}

.nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-2::before {
content: "H2 ";
color: var(--c-Hn-headings);
font-size: calc(30px - calc(16px - var(--editor-font-size))*2.5);
}

.nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-3::before {
content: "H3 ";
color: var(--c-Hn-headings);
font-size: calc(25px - calc(16px - var(--editor-font-size))*2.5);
}

.nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-4::before {
content: "H4 ";
color: var(--c-Hn-headings);
font-size: calc(20px - calc(16px - var(--editor-font-size))*2.5);
}

.nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-5::before {
content: "H5 ";
color: var(--c-Hn-headings);
font-size: calc(20px - calc(16px - var(--editor-font-size))*2.5);
}

.nmhn .cm-formatting.cm-formatting-header.cm-formatting-header-6::before {
content: "H6 ";
color: var(--c-Hn-headings);
font-size: calc(20px - calc(16px - var(--editor-font-size))*2.5);
}`,
    },
    dcH: {
      general: `.dcH .markdown-preview-view h1, .dcH .markdown-preview-view h2, .dcH .markdown-preview-view h3, .dcH .markdown-preview-view h4, .dcH .markdown-preview-view h5, .dcH .markdown-preview-view h6 {
text-align: center;
}`,
    },
    dcfw: {
      general: `.dcfw .dataview.table-view-table > thead > tr > th::first-letter {
text-transform: capitalize;
}`,
    },
    pkkg: {
      general: `.pkkg .kanban-plugin__board.kanban-plugin__board > div {
display: grid;
grid-template-columns: repeat(auto-fit, var(--lane-width));
width: 100%;
gap: 10px;
overflow-y: auto;
}`,
    },
    pacat: {
      general: `.pacat .admonition-title-content {
justify-content: center;
}`,
    },
    pacac: {
      general: `.pacac .admonition-content {
text-align: center;
}`,
    },
  },
};
