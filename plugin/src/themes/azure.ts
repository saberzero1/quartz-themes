import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "azure", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 217;
  --accent-l: 61%;
  --accent-s: 100%;
  --actions-border-radius: 0.5rem;
  --background-modifier-accent: rgb(56, 132, 255);
  --background-modifier-active-hover: rgba(56, 132, 255, 0.1);
  --background-modifier-border: rgb(19, 22, 27);
  --background-modifier-border-focus: rgb(42, 42, 42);
  --background-modifier-border-hover: rgb(48, 48, 48);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #F64A8A;
  --background-modifier-error-hover: #F64A8A;
  --background-modifier-error-rgb: #F64A8A;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #57A773;
  --background-primary: rgb(19, 22, 27);
  --background-primary-alt: rgb(28, 32, 39);
  --background-secondary: rgb(28, 32, 39);
  --background-secondary-alt: rgb(19, 22, 27);
  --bases-cards-background: rgb(19, 22, 27);
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: rgb(28, 32, 39);
  --bases-cards-font-size: 14px;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px rgb(19, 22, 27);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(48, 48, 48);
  --bases-embed-border-color: rgb(19, 22, 27);
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: rgb(158, 158, 158);
  --bases-group-heading-value-size: 14px;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(19, 22, 27);
  --bases-table-cell-background-active: rgb(19, 22, 27);
  --bases-table-cell-background-disabled: rgb(28, 32, 39);
  --bases-table-cell-background-selected: rgba(56, 132, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(42, 42, 42);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(56, 132, 255);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-radius: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-font-size: 14px;
  --bases-table-group-background: rgb(28, 32, 39);
  --bases-table-header-background: rgb(19, 22, 27);
  --bases-table-header-color: rgb(158, 158, 158);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(19, 22, 27);
  --blockquote-border-color: rgb(56, 132, 255);
  --blue: #3884FF;
  --blue-transparent: rgba(56, 132, 255, 0.5);
  --blur-background: color-mix(in srgb, rgb(42, 42, 42) 65%, transparent) linear-gradient(rgb(42, 42, 42), color-mix(in srgb, rgb(42, 42, 42) 65%, transparent));
  --bold-weight: 800;
  --border-width: 2px;
  --border-width-alt: 2px;
  --callout-important: 233, 151, 63;
  --callout-info: 84, 93, 204;
  --callout-question: 224, 222, 113;
  --callout-radius: 2px;
  --callout-summary: 250, 153, 205;
  --callout-todo: 83, 223, 221;
  --canvas-background: rgb(19, 22, 27);
  --canvas-card-label-color: rgb(158, 158, 158);
  --canvas-controls-radius: 2px;
  --caret-color: rgb(238, 238, 238);
  --checkbox-border-color: rgb(158, 158, 158);
  --checkbox-border-color-hover: rgb(56, 132, 255);
  --checkbox-color: rgb(56, 132, 255);
  --checkbox-color-hover: hsl(214, 102%, 70.15%);
  --checkbox-marker-color: rgb(19, 22, 27);
  --checkbox-radius: 2px;
  --checklist-done-color: rgb(158, 158, 158);
  --checklist-done-decoration: none;
  --clickable-icon-radius: 2px;
  --code-background: rgb(28, 32, 39);
  --code-border-color: rgb(19, 22, 27);
  --code-comment: #8963EA;
  --code-normal: "Consolas", monospace;
  --code-punctuation: rgb(158, 158, 158);
  --code-radius: 2px;
  --code-size: 16px;
  --code-string: rgb(238, 238, 238);
  --collapse-icon-color: rgb(158, 158, 158);
  --collapse-icon-color-collapsed: hsl(214, 102%, 70.15%);
  --color-accent: rgb(56, 132, 255);
  --color-accent-1: hsl(214, 102%, 70.15%);
  --color-accent-2: hsl(212, 105%, 78.69%);
  --color-accent-faint: rgba(56, 132, 255, 0.25);
  --color-accent-hsl: 217, 100%, 61%;
  --color-gray-rgb: 158, 158, 158;
  --color-indigo-rgb: 84, 93, 204;
  --color-transparent: rgba(0, 0, 0, 0);
  --cyan: #36A2EB;
  --cyan-transparent: rgba(54, 162, 235, 0.5);
  --divider-color: rgba(0, 0, 0, 0);
  --divider-color-hover: rgb(56, 132, 255);
  --dropdown-background: rgb(42, 42, 42);
  --dropdown-background-hover: rgb(48, 48, 48);
  --embed-block-shadow-hover: 0 0 0 1px rgb(19, 22, 27), inset 0 0 0 1px rgb(19, 22, 27);
  --embed-border-bottom: 0;
  --embed-border-left: 0;
  --embed-border-right: 0;
  --embed-border-start: 2px solid rgb(56, 132, 255);
  --embed-border-top: 0;
  --embed-padding: 0 0 0 1rem;
  --file-header-background: rgb(19, 22, 27);
  --file-header-background-focused: rgb(19, 22, 27);
  --file-header-border: 2px solid transparent;
  --file-header-font: "Consolas", monospace;
  --flair-background: rgb(42, 42, 42);
  --flair-color: rgb(238, 238, 238);
  --font-accent-theme: "Consolas", monospace;
  --font-editor-theme: "Consolas", monospace;
  --font-interface: "Consolas", monospace;
  --font-interface-theme: "Consolas", monospace;
  --font-mermaid: "Consolas", monospace;
  --font-monospace: '??', "Consolas", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Consolas", monospace;
  --font-print: '??', "Consolas", monospace, "Consolas", monospace, 'Arial';
  --font-small: 16px;
  --font-smaller: 14px;
  --font-smallest: 12px;
  --font-text: "Consolas", monospace;
  --font-text-override: "Consolas", monospace;
  --font-text-theme: "Consolas", monospace;
  --footnote-divider-color: rgb(19, 22, 27);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(158, 158, 158);
  --footnote-id-color-no-occurrences: rgb(158, 158, 158);
  --footnote-radius: 2px;
  --footnote-size: 14px;
  --graph-node: rgb(158, 158, 158);
  --graph-node-focused: hsl(214, 102%, 70.15%);
  --graph-node-unresolved: rgb(158, 158, 158);
  --graph-text: rgb(238, 238, 238);
  --gray: rgb(158, 158, 158);
  --gray-transparent: rgba(158, 158, 158, 0.1);
  --green: #57A773;
  --green-transparent: rgba(87, 167, 115, 0.5);
  --h1-color: rgb(56, 132, 255);
  --h1-line-height: 1.5;
  --h1-size: 1.0em;
  --h1-weight: 600;
  --h2-color: rgb(97, 116, 245);
  --h2-line-height: 1.5;
  --h2-size: 1.0em;
  --h2-weight: 600;
  --h3-color: rgb(137, 99, 234);
  --h3-line-height: 1.5;
  --h3-size: 1.0em;
  --h3-weight: 600;
  --h4-color: rgb(173, 91, 202);
  --h4-line-height: 1.5;
  --h4-size: 1.0em;
  --h4-weight: 600;
  --h5-color: rgb(210, 82, 170);
  --h5-size: 1.0em;
  --h5-weight: 600;
  --h6-color: rgb(246, 74, 138);
  --h6-size: 1.0em;
  --heading-formatting: rgb(158, 158, 158);
  --heading-spacing: 0;
  --hr-color: rgb(56, 132, 255);
  --icon-color: rgb(158, 158, 158);
  --icon-color-active: hsl(214, 102%, 70.15%);
  --icon-color-focused: rgb(56, 132, 255);
  --icon-color-hover: rgb(56, 132, 255);
  --icon-hex: 000;
  --icon-muted: 0.5;
  --icon-opacity: 0.75;
  --indentation-guide-color: rgb(28, 32, 39);
  --indentation-guide-color-active: rgb(28, 32, 39);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --indigo: #545DCC;
  --indigo-transparent: rgba(84, 93, 204, 0.5);
  --inline-title-color: rgb(56, 132, 255);
  --inline-title-line-height: 1.5;
  --inline-title-size: 1.0em;
  --inline-title-weight: 600;
  --input-border-width: 2px;
  --input-date-separator: rgb(158, 158, 158);
  --input-height: 32px;
  --input-placeholder-color: rgb(158, 158, 158);
  --interactive-accent: rgb(56, 132, 255);
  --interactive-accent-2: hsl(214, 102%, 70.15%);
  --interactive-accent-hover: hsl(214, 102%, 70.15%);
  --interactive-accent-hsl: 217, 100%, 61%;
  --interactive-accent-rgb: 56, 132, 255;
  --interactive-hover: rgb(48, 48, 48);
  --interactive-normal: rgb(42, 42, 42);
  --interactive-success: #57A773;
  --light-blue: #5F9CFF;
  --light-cyan: #5EB4EF;
  --light-green: #78B88F;
  --light-indigo: #767DD6;
  --light-orange: #F28B6C;
  --light-pink: #F76EA1;
  --light-purple: #A082EE;
  --light-red: #E35774;
  --light-yellow: #FFD777;
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color: hsl(214, 102%, 70.15%);
  --link-color-hover: rgb(56, 132, 255);
  --link-external-color: hsl(214, 102%, 70.15%);
  --link-external-color-hover: rgb(56, 132, 255);
  --link-unresolved-color: hsl(214, 102%, 70.15%);
  --link-unresolved-decoration-color: rgba(56, 132, 255, 0.3);
  --list-marker-color: rgb(158, 158, 158);
  --list-marker-color-collapsed: hsl(214, 102%, 70.15%);
  --list-marker-color-hover: rgb(158, 158, 158);
  --max-width: 87%;
  --menu-background: rgb(28, 32, 39);
  --menu-border-color: rgb(48, 48, 48);
  --menu-border-width: 2px;
  --menu-radius: 5px;
  --metadata-border-color: rgb(19, 22, 27);
  --metadata-divider-color: rgb(19, 22, 27);
  --metadata-input-font: "Consolas", monospace;
  --metadata-input-font-size: 14px;
  --metadata-input-text-color: rgb(238, 238, 238);
  --metadata-label-font: "Consolas", monospace;
  --metadata-label-font-size: 14px;
  --metadata-label-text-color: rgb(158, 158, 158);
  --metadata-label-text-color-hover: rgb(158, 158, 158);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(42, 42, 42);
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(48, 48, 48);
  --modal-background: rgb(19, 22, 27);
  --modal-border-color: rgb(19, 22, 27);
  --modal-border-width: 2px;
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(158, 158, 158);
  --nav-collapse-icon-color-collapsed: rgb(158, 158, 158);
  --nav-heading-color: rgb(238, 238, 238);
  --nav-heading-color-collapsed: rgb(158, 158, 158);
  --nav-heading-color-collapsed-hover: rgb(158, 158, 158);
  --nav-heading-color-hover: rgb(238, 238, 238);
  --nav-indentation-guide-color: rgb(28, 32, 39);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-selected: rgba(56, 132, 255, 0.15);
  --nav-item-color: rgb(158, 158, 158);
  --nav-item-color-active: rgb(238, 238, 238);
  --nav-item-color-highlighted: hsl(214, 102%, 70.15%);
  --nav-item-color-hover: rgb(238, 238, 238);
  --nav-item-color-selected: rgb(238, 238, 238);
  --nav-item-radius: 2px;
  --nav-tag-color: rgb(158, 158, 158);
  --nav-tag-color-active: rgb(158, 158, 158);
  --nav-tag-color-hover: rgb(158, 158, 158);
  --nav-tag-radius: 2px;
  --normal-weight: 400;
  --orange: #EF6F48;
  --orange-transparent: rgba(239, 111, 72, 0.5);
  --p-spacing: 1.5rem;
  --panel-border-color: rgb(19, 22, 27);
  --pdf-background: rgb(19, 22, 27);
  --pdf-page-background: rgb(19, 22, 27);
  --pdf-shadow: 0 0 0 1px rgb(19, 22, 27);
  --pdf-sidebar-background: rgb(19, 22, 27);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(19, 22, 27);
  --pill-border-color: rgb(19, 22, 27);
  --pill-border-color-hover: rgb(48, 48, 48);
  --pill-border-width: 2px;
  --pill-color: rgb(158, 158, 158);
  --pill-color-hover: rgb(238, 238, 238);
  --pill-color-remove: rgb(158, 158, 158);
  --pill-color-remove-hover: hsl(214, 102%, 70.15%);
  --pink: #F64A8A;
  --pink-transparent: rgba(246, 74, 138, 0.5);
  --prompt-background: rgb(19, 22, 27);
  --prompt-border-color: rgb(19, 22, 27);
  --prompt-border-width: 2px;
  --purple: #8963EA;
  --purple-transparent: rgba(137, 99, 234, 0.5);
  --radius-l: 10px;
  --radius-m: 5px;
  --radius-s: 2px;
  --raised-background: rgb(28, 32, 39);
  --red: #DD2E52;
  --red-transparent: rgba(221, 46, 82, 0.5);
  --ribbon-background: rgb(28, 32, 39);
  --ribbon-background-collapsed: rgb(19, 22, 27);
  --scrollbar-active-thumb-bg: rgb(56, 132, 255);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: hsl(214, 102%, 70.15%);
  --search-clear-button-color: rgb(158, 158, 158);
  --search-icon-color: rgb(158, 158, 158);
  --search-result-background: rgb(19, 22, 27);
  --setting-group-heading-color: rgb(238, 238, 238);
  --setting-items-background: rgb(28, 32, 39);
  --setting-items-border-color: rgb(19, 22, 27);
  --setting-items-radius: 10px;
  --slider-thumb-border-color: rgb(48, 48, 48);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgb(56, 132, 255);
  --status-bar-background: rgb(28, 32, 39);
  --status-bar-border-color: rgba(0, 0, 0, 0);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: rgb(158, 158, 158);
  --suggestion-background: rgb(19, 22, 27);
  --tab-background-active: rgb(19, 22, 27);
  --tab-container-background: rgb(28, 32, 39);
  --tab-divider-color: rgb(48, 48, 48);
  --tab-outline-color: rgba(0, 0, 0, 0);
  --tab-radius: 2px;
  --tab-switcher-background: rgb(28, 32, 39);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(28, 32, 39), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(56, 132, 255);
  --tab-text-color: rgb(158, 158, 158);
  --tab-text-color-active: rgb(158, 158, 158);
  --tab-text-color-focused: rgb(158, 158, 158);
  --tab-text-color-focused-active: rgb(158, 158, 158);
  --tab-text-color-focused-active-current: hsl(214, 102%, 70.15%);
  --tab-text-color-focused-highlighted: hsl(214, 102%, 70.15%);
  --table-add-button-border-color: rgb(19, 22, 27);
  --table-border-color: rgb(19, 22, 27);
  --table-drag-handle-background-active: rgb(56, 132, 255);
  --table-drag-handle-color: rgb(158, 158, 158);
  --table-drag-handle-color-active: rgb(220, 221, 222);
  --table-header-border-color: rgb(19, 22, 27);
  --table-header-color: rgb(238, 238, 238);
  --table-selection: rgba(56, 132, 255, 0.1);
  --table-selection-border-color: rgb(56, 132, 255);
  --tag-background: rgba(56, 132, 255, 0.1);
  --tag-background-hover: rgba(56, 132, 255, 0.2);
  --tag-border-color: rgba(56, 132, 255, 0.15);
  --tag-border-color-hover: rgba(56, 132, 255, 0.15);
  --tag-color: rgb(56, 132, 255);
  --tag-color-hover: hsl(214, 102%, 70.15%);
  --tag-size: 14px;
  --text-accent: hsl(214, 102%, 70.15%);
  --text-accent-hover: rgb(56, 132, 255);
  --text-error: #DD2E52;
  --text-error-hover: #DD2E52;
  --text-faint: rgb(158, 158, 158);
  --text-highlight-bg: rgba(56, 132, 255, 0.25);
  --text-highlight-bg-active: rgba(56, 132, 255, 0.25);
  --text-muted: rgb(158, 158, 158);
  --text-normal: rgb(238, 238, 238);
  --text-on-accent: rgb(220, 221, 222);
  --text-on-light-accent: rgb(38, 38, 38);
  --text-selection: rgba(56, 132, 255, 0.33);
  --titlebar-background: rgb(28, 32, 39);
  --titlebar-background-focused: rgb(19, 22, 27);
  --titlebar-border-color: rgb(19, 22, 27);
  --titlebar-text-color: rgb(158, 158, 158);
  --titlebar-text-color-focused: rgb(238, 238, 238);
  --vault-profile-color: rgb(238, 238, 238);
  --vault-profile-color-hover: rgb(238, 238, 238);
  --vim-cursor: rgb(56, 132, 255);
  --webkit-tap-highlight-color: rgb(19, 22, 27);
  --yellow: #FFCE56;
  --yellow-transparent: rgba(255, 206, 86, 0.5);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 32, 39);
  color: rgb(238, 238, 238);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 32, 39);
  color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 32, 39);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(238, 238, 238);
}

body div#quartz-root {
  background-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .page article p > em, em {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .page article p > i, i {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .page article p > strong, strong {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .text-highlight {
  background-color: rgba(56, 132, 255, 0.25);
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body del {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: line-through rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body p {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
  outline: rgb(158, 158, 158) none 0px;
  text-decoration: rgb(158, 158, 158);
  text-decoration-color: rgb(158, 158, 158);
}`,
    links: `body a.external, footer a {
  color: rgb(103, 169, 255);
  font-family: Consolas, monospace;
  outline: rgb(103, 169, 255) none 0px;
  text-decoration: underline rgb(103, 169, 255);
  text-decoration-color: rgb(103, 169, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: underline rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body a.internal.broken {
  color: rgb(103, 169, 255);
  font-family: Consolas, monospace;
  outline: rgb(103, 169, 255) none 0px;
  text-decoration: underline rgba(56, 132, 255, 0.3);
  text-decoration-color: rgba(56, 132, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(238, 238, 238);
}

body dt {
  color: rgb(238, 238, 238);
}

body ol > li {
  color: rgb(238, 238, 238);
}

body ol.overflow {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body ul > li {
  color: rgb(238, 238, 238);
}

body ul.overflow {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}

body blockquote {
  background-color: rgba(158, 158, 158, 0.1);
  font-family: Consolas, monospace;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body table {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  margin-top: 24px;
  width: 223.484px;
}

body td {
  border-bottom-color: rgb(19, 22, 27);
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}

body th {
  border-bottom-color: rgb(19, 22, 27);
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}`,
    code: `body code {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
}

body pre > code, pre:has(> code) {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body figcaption {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body figure {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body img {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body video {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .transclude {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body .transclude-inner {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Consolas, monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: Consolas, monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
  text-decoration-color: rgb(158, 158, 158);
}

body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='*'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='-'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='/'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='>'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='?'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='I'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='S'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='b'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='c'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='f'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='i'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='k'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='l'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='p'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='u'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='w'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  --callout-color: 250, 153, 205;
  background-color: rgba(250, 153, 205, 0.1);
  border-bottom-color: rgba(250, 153, 205, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(250, 153, 205, 0.25);
  border-right-color: rgba(250, 153, 205, 0.25);
  border-top-color: rgba(250, 153, 205, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="info"] {
  --callout-color: 84, 93, 204;
  background-color: rgba(84, 93, 204, 0.1);
  border-bottom-color: rgba(84, 93, 204, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(84, 93, 204, 0.25);
  border-right-color: rgba(84, 93, 204, 0.25);
  border-top-color: rgba(84, 93, 204, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="todo"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(83, 223, 221, 0.25);
  border-right-color: rgba(83, 223, 221, 0.25);
  border-top-color: rgba(83, 223, 221, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-width: 2px;
  border-left-color: rgb(19, 22, 27);
  border-left-width: 2px;
  border-right-color: rgb(19, 22, 27);
  border-right-width: 2px;
  border-top-color: rgb(19, 22, 27);
  border-top-width: 2px;
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(19, 22, 27);
  border-left-width: 2px;
  border-right-color: rgb(19, 22, 27);
  border-right-width: 2px;
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(19, 22, 27);
  border-left-width: 2px;
  border-right-color: rgb(19, 22, 27);
  border-right-width: 2px;
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 32, 39);
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(56, 132, 255, 0.1);
  border-bottom-color: rgba(56, 132, 255, 0.15);
  border-left-color: rgba(56, 132, 255, 0.15);
  border-right-color: rgba(56, 132, 255, 0.15);
  border-top-color: rgba(56, 132, 255, 0.15);
  font-family: Consolas, monospace;
}

body a.internal.tag-link::before {
  color: rgb(56, 132, 255);
}

body h1 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body h2 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body h2.page-title, h2.page-title a {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

body h3 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body h4 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body h5 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body h6 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(103, 169, 255);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
  text-decoration: rgb(158, 158, 158);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
  text-decoration: rgb(158, 158, 158);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
  text-decoration: rgb(158, 158, 158);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(103, 169, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(103, 169, 255);
  border-right-color: rgb(103, 169, 255);
  border-top-color: rgb(103, 169, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(103, 169, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(158, 158, 158);
}`,
    footer: `body footer {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-width: 2px;
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

body footer ul li a {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body li.section-li > .section .meta {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(158, 158, 158);
}

body .darkmode svg {
  color: rgb(158, 158, 158);
  stroke: rgb(158, 158, 158);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(158, 158, 158);
}

body .breadcrumb-element p {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .metadata {
  border-bottom-color: rgb(19, 22, 27);
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(158, 158, 158);
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

body .navigation-progress {
  background-color: rgb(28, 32, 39);
}

body .page-header h2.page-title {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

body abbr {
  color: rgb(238, 238, 238);
  text-decoration: underline dotted rgb(238, 238, 238);
}

body details {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body input[type=text] {
  border-bottom-color: rgb(158, 158, 158);
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

body kbd {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body sub {
  color: rgb(238, 238, 238);
}

body summary {
  color: rgb(238, 238, 238);
}

body sup {
  color: rgb(238, 238, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 217;
  --accent-l: 61%;
  --accent-s: 100%;
  --actions-border-radius: 0.5rem;
  --background-modifier-accent: rgb(56, 132, 255);
  --background-modifier-active-hover: rgba(56, 132, 255, 0.1);
  --background-modifier-border: rgb(238, 238, 238);
  --background-modifier-border-focus: rgb(247, 248, 250);
  --background-modifier-border-hover: rgb(232, 232, 232);
  --background-modifier-error: #F64A8A;
  --background-modifier-error-hover: #F64A8A;
  --background-modifier-error-rgb: #F64A8A;
  --background-modifier-form-field: hsl(0, 0, 96%);
  --background-modifier-form-field-highlighted: hsl(0, 0, 98%);
  --background-modifier-form-field-hover: hsl(0, 0, 96%);
  --background-modifier-success: #57A773;
  --background-primary: rgb(238, 238, 238);
  --background-primary-alt: rgb(245, 247, 249);
  --background-secondary: rgb(245, 247, 249);
  --background-secondary-alt: rgb(238, 238, 238);
  --background-translucent: rgba(255, 255, 255, 0.85);
  --bases-cards-background: rgb(238, 238, 238);
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: rgb(245, 247, 249);
  --bases-cards-font-size: 14px;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px rgb(238, 238, 238);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(232, 232, 232);
  --bases-embed-border-color: rgb(238, 238, 238);
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: rgb(99, 99, 99);
  --bases-group-heading-value-size: 14px;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(238, 238, 238);
  --bases-table-cell-background-active: rgb(238, 238, 238);
  --bases-table-cell-background-disabled: rgb(245, 247, 249);
  --bases-table-cell-background-selected: rgba(56, 132, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(247, 248, 250);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(56, 132, 255);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-radius: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-font-size: 14px;
  --bases-table-group-background: rgb(245, 247, 249);
  --bases-table-header-background: rgb(238, 238, 238);
  --bases-table-header-color: rgb(99, 99, 99);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(238, 238, 238);
  --blockquote-border-color: rgb(56, 132, 255);
  --blue: #3884FF;
  --blue-transparent: rgba(56, 132, 255, 0.5);
  --blur-background: color-mix(in srgb, rgb(238, 238, 238) 65%, transparent) linear-gradient(rgb(238, 238, 238), color-mix(in srgb, rgb(238, 238, 238) 65%, transparent));
  --bold-weight: 800;
  --border-width: 2px;
  --border-width-alt: 2px;
  --callout-important: 236, 117, 0;
  --callout-info: 84, 93, 204;
  --callout-question: 224, 172, 0;
  --callout-quote: 99, 99, 99;
  --callout-radius: 2px;
  --callout-summary: 213, 57, 132;
  --callout-todo: 0, 191, 188;
  --canvas-background: rgb(238, 238, 238);
  --canvas-card-label-color: rgb(99, 99, 99);
  --canvas-controls-radius: 2px;
  --caret-color: rgb(38, 38, 38);
  --checkbox-border-color: rgb(99, 99, 99);
  --checkbox-border-color-hover: rgb(56, 132, 255);
  --checkbox-color: rgb(56, 132, 255);
  --checkbox-color-hover: rgb(56, 132, 255);
  --checkbox-marker-color: rgb(238, 238, 238);
  --checkbox-radius: 2px;
  --checklist-done-color: rgb(99, 99, 99);
  --checklist-done-decoration: none;
  --clickable-icon-radius: 2px;
  --code-background: rgb(245, 247, 249);
  --code-border-color: rgb(238, 238, 238);
  --code-comment: #8963EA;
  --code-normal: "Consolas", monospace;
  --code-punctuation: rgb(99, 99, 99);
  --code-radius: 2px;
  --code-size: 16px;
  --code-string: rgb(38, 38, 38);
  --collapse-icon-color: rgb(99, 99, 99);
  --collapse-icon-color-collapsed: rgb(56, 132, 255);
  --color-accent: rgb(56, 132, 255);
  --color-accent-1: hsl(216, 101%, 65.575%);
  --color-accent-2: hsl(214, 102%, 70.15%);
  --color-accent-faint: rgba(56, 132, 255, 0.25);
  --color-accent-hsl: 217, 100%, 61%;
  --color-gray-rgb: 99, 99, 99;
  --color-indigo-rgb: 84, 93, 204;
  --color-transparent: rgba(0, 0, 0, 0);
  --cyan: #36A2EB;
  --cyan-transparent: rgba(54, 162, 235, 0.5);
  --divider-color: rgba(0, 0, 0, 0);
  --divider-color-hover: rgb(56, 132, 255);
  --dropdown-background: rgb(247, 248, 250);
  --dropdown-background-hover: rgb(232, 232, 232);
  --embed-block-shadow-hover: 0 0 0 1px rgb(238, 238, 238), inset 0 0 0 1px rgb(238, 238, 238);
  --embed-border-bottom: 0;
  --embed-border-left: 0;
  --embed-border-right: 0;
  --embed-border-start: 2px solid rgb(56, 132, 255);
  --embed-border-top: 0;
  --embed-padding: 0 0 0 1rem;
  --file-header-background: rgb(238, 238, 238);
  --file-header-background-focused: rgb(238, 238, 238);
  --file-header-border: 2px solid transparent;
  --file-header-font: "Consolas", monospace;
  --flair-background: rgb(247, 248, 250);
  --flair-color: rgb(38, 38, 38);
  --font-accent-theme: "Consolas", monospace;
  --font-editor-theme: "Consolas", monospace;
  --font-interface: "Consolas", monospace;
  --font-interface-theme: "Consolas", monospace;
  --font-mermaid: "Consolas", monospace;
  --font-monospace: '??', "Consolas", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Consolas", monospace;
  --font-print: '??', "Consolas", monospace, "Consolas", monospace, 'Arial';
  --font-small: 16px;
  --font-smaller: 14px;
  --font-smallest: 12px;
  --font-text: "Consolas", monospace;
  --font-text-override: "Consolas", monospace;
  --font-text-theme: "Consolas", monospace;
  --footnote-divider-color: rgb(238, 238, 238);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(99, 99, 99);
  --footnote-id-color-no-occurrences: rgb(99, 99, 99);
  --footnote-radius: 2px;
  --footnote-size: 14px;
  --graph-node: rgb(99, 99, 99);
  --graph-node-focused: rgb(56, 132, 255);
  --graph-node-unresolved: rgb(99, 99, 99);
  --graph-text: rgb(38, 38, 38);
  --gray: rgb(99, 99, 99);
  --gray-transparent: rgba(99, 99, 99, 0.1);
  --green: #57A773;
  --green-transparent: rgba(87, 167, 115, 0.5);
  --h1-color: rgb(56, 132, 255);
  --h1-line-height: 1.5;
  --h1-size: 1.0em;
  --h1-weight: 600;
  --h2-color: rgb(97, 116, 245);
  --h2-line-height: 1.5;
  --h2-size: 1.0em;
  --h2-weight: 600;
  --h3-color: rgb(137, 99, 234);
  --h3-line-height: 1.5;
  --h3-size: 1.0em;
  --h3-weight: 600;
  --h4-color: rgb(173, 91, 202);
  --h4-line-height: 1.5;
  --h4-size: 1.0em;
  --h4-weight: 600;
  --h5-color: rgb(210, 82, 170);
  --h5-size: 1.0em;
  --h5-weight: 600;
  --h6-color: rgb(246, 74, 138);
  --h6-size: 1.0em;
  --heading-formatting: rgb(99, 99, 99);
  --heading-spacing: 0;
  --hr-color: rgb(56, 132, 255);
  --icon-color: rgb(99, 99, 99);
  --icon-color-active: rgb(56, 132, 255);
  --icon-color-focused: rgb(56, 132, 255);
  --icon-color-hover: rgb(56, 132, 255);
  --icon-hex: 000;
  --icon-muted: 0.5;
  --icon-opacity: 0.75;
  --indentation-guide-color: rgb(245, 247, 249);
  --indentation-guide-color-active: rgb(245, 247, 249);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --indigo: #545DCC;
  --indigo-transparent: rgba(84, 93, 204, 0.5);
  --inline-title-color: rgb(56, 132, 255);
  --inline-title-line-height: 1.5;
  --inline-title-size: 1.0em;
  --inline-title-weight: 600;
  --input-border-width: 2px;
  --input-date-separator: rgb(99, 99, 99);
  --input-height: 32px;
  --input-placeholder-color: rgb(99, 99, 99);
  --interactive-accent: rgb(56, 132, 255);
  --interactive-accent-2: rgb(56, 132, 255);
  --interactive-accent-hover: rgb(56, 132, 255);
  --interactive-accent-hsl: 217, 100%, 61%;
  --interactive-accent-rgb: 56, 132, 255;
  --interactive-hover: rgb(232, 232, 232);
  --interactive-normal: rgb(247, 248, 250);
  --interactive-success: #57A773;
  --light-blue: #5F9CFF;
  --light-cyan: #5EB4EF;
  --light-green: #78B88F;
  --light-indigo: #767DD6;
  --light-orange: #F28B6C;
  --light-pink: #F76EA1;
  --light-purple: #A082EE;
  --light-red: #E35774;
  --light-yellow: #FFD777;
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color: rgb(56, 132, 255);
  --link-color-hover: rgb(56, 132, 255);
  --link-external-color: rgb(56, 132, 255);
  --link-external-color-hover: rgb(56, 132, 255);
  --link-unresolved-color: rgb(56, 132, 255);
  --link-unresolved-decoration-color: rgba(56, 132, 255, 0.3);
  --list-marker-color: rgb(99, 99, 99);
  --list-marker-color-collapsed: rgb(56, 132, 255);
  --list-marker-color-hover: rgb(99, 99, 99);
  --max-width: 87%;
  --menu-background: rgb(245, 247, 249);
  --menu-border-color: rgb(232, 232, 232);
  --menu-border-width: 2px;
  --menu-radius: 5px;
  --metadata-border-color: rgb(238, 238, 238);
  --metadata-divider-color: rgb(238, 238, 238);
  --metadata-input-font: "Consolas", monospace;
  --metadata-input-font-size: 14px;
  --metadata-input-text-color: rgb(38, 38, 38);
  --metadata-label-font: "Consolas", monospace;
  --metadata-label-font-size: 14px;
  --metadata-label-text-color: rgb(99, 99, 99);
  --metadata-label-text-color-hover: rgb(99, 99, 99);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(247, 248, 250);
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(232, 232, 232);
  --modal-background: rgb(238, 238, 238);
  --modal-border-color: rgb(238, 238, 238);
  --modal-border-width: 2px;
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(99, 99, 99);
  --nav-collapse-icon-color-collapsed: rgb(99, 99, 99);
  --nav-heading-color: rgb(38, 38, 38);
  --nav-heading-color-collapsed: rgb(99, 99, 99);
  --nav-heading-color-collapsed-hover: rgb(99, 99, 99);
  --nav-heading-color-hover: rgb(38, 38, 38);
  --nav-indentation-guide-color: rgb(245, 247, 249);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-selected: rgba(56, 132, 255, 0.15);
  --nav-item-color: rgb(99, 99, 99);
  --nav-item-color-active: rgb(38, 38, 38);
  --nav-item-color-highlighted: rgb(56, 132, 255);
  --nav-item-color-hover: rgb(38, 38, 38);
  --nav-item-color-selected: rgb(38, 38, 38);
  --nav-item-radius: 2px;
  --nav-tag-color: rgb(99, 99, 99);
  --nav-tag-color-active: rgb(99, 99, 99);
  --nav-tag-color-hover: rgb(99, 99, 99);
  --nav-tag-radius: 2px;
  --normal-weight: 400;
  --orange: #EF6F48;
  --orange-transparent: rgba(239, 111, 72, 0.5);
  --p-spacing: 1.5rem;
  --panel-border-color: rgb(238, 238, 238);
  --pdf-background: rgb(238, 238, 238);
  --pdf-page-background: rgb(238, 238, 238);
  --pdf-sidebar-background: rgb(238, 238, 238);
  --pill-border-color: rgb(238, 238, 238);
  --pill-border-color-hover: rgb(232, 232, 232);
  --pill-border-width: 2px;
  --pill-color: rgb(99, 99, 99);
  --pill-color-hover: rgb(38, 38, 38);
  --pill-color-remove: rgb(99, 99, 99);
  --pill-color-remove-hover: rgb(56, 132, 255);
  --pink: #F64A8A;
  --pink-transparent: rgba(246, 74, 138, 0.5);
  --prompt-background: rgb(238, 238, 238);
  --prompt-border-color: rgb(238, 238, 238);
  --prompt-border-width: 2px;
  --purple: #8963EA;
  --purple-transparent: rgba(137, 99, 234, 0.5);
  --radius-l: 10px;
  --radius-m: 5px;
  --radius-s: 2px;
  --raised-background: rgb(245, 247, 249);
  --red: #DD2E52;
  --red-transparent: rgba(221, 46, 82, 0.5);
  --ribbon-background: rgb(245, 247, 249);
  --ribbon-background-collapsed: rgb(238, 238, 238);
  --scrollbar-active-thumb-bg: rgb(56, 132, 255);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgb(245, 247, 249);
  --search-clear-button-color: rgb(99, 99, 99);
  --search-icon-color: rgb(99, 99, 99);
  --search-result-background: rgb(238, 238, 238);
  --setting-group-heading-color: rgb(38, 38, 38);
  --setting-items-background: rgb(245, 247, 249);
  --setting-items-border-color: rgb(238, 238, 238);
  --setting-items-radius: 10px;
  --slider-thumb-border-color: rgb(232, 232, 232);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgb(56, 132, 255);
  --status-bar-background: rgb(245, 247, 249);
  --status-bar-border-color: rgba(0, 0, 0, 0);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: rgb(99, 99, 99);
  --suggestion-background: rgb(238, 238, 238);
  --tab-background-active: rgb(238, 238, 238);
  --tab-container-background: rgb(245, 247, 249);
  --tab-divider-color: rgb(232, 232, 232);
  --tab-outline-color: rgba(0, 0, 0, 0);
  --tab-radius: 2px;
  --tab-switcher-background: rgb(245, 247, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 247, 249), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(56, 132, 255);
  --tab-text-color: rgb(99, 99, 99);
  --tab-text-color-active: rgb(99, 99, 99);
  --tab-text-color-focused: rgb(99, 99, 99);
  --tab-text-color-focused-active: rgb(99, 99, 99);
  --tab-text-color-focused-active-current: rgb(56, 132, 255);
  --tab-text-color-focused-highlighted: rgb(56, 132, 255);
  --table-add-button-border-color: rgb(238, 238, 238);
  --table-border-color: rgb(238, 238, 238);
  --table-drag-handle-background-active: rgb(56, 132, 255);
  --table-drag-handle-color: rgb(99, 99, 99);
  --table-drag-handle-color-active: rgb(242, 242, 242);
  --table-header-border-color: rgb(238, 238, 238);
  --table-header-color: rgb(38, 38, 38);
  --table-selection: rgba(56, 132, 255, 0.1);
  --table-selection-border-color: rgb(56, 132, 255);
  --tag-background: rgba(56, 132, 255, 0.1);
  --tag-background-hover: rgba(56, 132, 255, 0.2);
  --tag-border-color: rgba(56, 132, 255, 0.15);
  --tag-border-color-hover: rgba(56, 132, 255, 0.15);
  --tag-color: rgb(56, 132, 255);
  --tag-color-hover: rgb(56, 132, 255);
  --tag-size: 14px;
  --text-accent: rgb(56, 132, 255);
  --text-accent-hover: rgb(56, 132, 255);
  --text-error: #DD2E52;
  --text-error-hover: #DD2E52;
  --text-faint: rgb(99, 99, 99);
  --text-highlight-bg: rgba(56, 132, 255, 0.25);
  --text-highlight-bg-active: rgba(56, 132, 255, 0.25);
  --text-muted: rgb(99, 99, 99);
  --text-normal: rgb(38, 38, 38);
  --text-on-accent: rgb(242, 242, 242);
  --text-on-light-accent: rgb(38, 38, 38);
  --text-selection: rgba(56, 132, 255, 0.25);
  --titlebar-background: rgb(245, 247, 249);
  --titlebar-background-focused: rgb(238, 238, 238);
  --titlebar-border-color: rgb(238, 238, 238);
  --titlebar-text-color: rgb(99, 99, 99);
  --titlebar-text-color-focused: rgb(38, 38, 38);
  --vault-profile-color: rgb(38, 38, 38);
  --vault-profile-color-hover: rgb(38, 38, 38);
  --vim-cursor: rgb(56, 132, 255);
  --webkit-tap-highlight-color: rgb(238, 238, 238);
  --yellow: #FFCE56;
  --yellow-transparent: rgba(255, 206, 86, 0.5);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 247, 249);
  color: rgb(38, 38, 38);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 247, 249);
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 247, 249);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(38, 38, 38);
}

body div#quartz-root {
  background-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > em, em {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > i, i {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > strong, strong {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .text-highlight {
  background-color: rgba(56, 132, 255, 0.25);
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body del {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: line-through rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body p {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
  outline: rgb(99, 99, 99) none 0px;
  text-decoration: rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}`,
    links: `body a.external, footer a {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
  outline: rgb(56, 132, 255) none 0px;
  text-decoration: underline rgb(56, 132, 255);
  text-decoration-color: rgb(56, 132, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: underline rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body a.internal.broken {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
  outline: rgb(56, 132, 255) none 0px;
  text-decoration: underline rgba(56, 132, 255, 0.3);
  text-decoration-color: rgba(56, 132, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(38, 38, 38);
}

body dt {
  color: rgb(38, 38, 38);
}

body ol > li {
  color: rgb(38, 38, 38);
}

body ol.overflow {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body ul > li {
  color: rgb(38, 38, 38);
}

body ul.overflow {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(99, 99, 99);
  text-decoration: rgb(99, 99, 99);
}

body blockquote {
  background-color: rgba(99, 99, 99, 0.1);
  font-family: Consolas, monospace;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body table {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  margin-top: 24px;
  width: 223.484px;
}

body td {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}

body th {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}`,
    code: `body code {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body figcaption {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Consolas, monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: Consolas, monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(99, 99, 99);
  text-decoration: rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

body input[type=checkbox] {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  --callout-color: 213, 57, 132;
  background-color: rgba(213, 57, 132, 0.1);
  border-bottom-color: rgba(213, 57, 132, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(213, 57, 132, 0.25);
  border-right-color: rgba(213, 57, 132, 0.25);
  border-top-color: rgba(213, 57, 132, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="info"] {
  --callout-color: 84, 93, 204;
  background-color: rgba(84, 93, 204, 0.1);
  border-bottom-color: rgba(84, 93, 204, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(84, 93, 204, 0.25);
  border-right-color: rgba(84, 93, 204, 0.25);
  border-top-color: rgba(84, 93, 204, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(224, 172, 0, 0.1);
  border-bottom-color: rgba(224, 172, 0, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(224, 172, 0, 0.25);
  border-right-color: rgba(224, 172, 0, 0.25);
  border-top-color: rgba(224, 172, 0, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="quote"] {
  --callout-color: 99, 99, 99;
  background-color: rgba(99, 99, 99, 0.1);
  border-bottom-color: rgba(99, 99, 99, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(99, 99, 99, 0.25);
  border-right-color: rgba(99, 99, 99, 0.25);
  border-top-color: rgba(99, 99, 99, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-left-width: 2px;
  border-right-color: rgb(238, 238, 238);
  border-right-width: 2px;
  border-top-color: rgb(238, 238, 238);
  border-top-width: 2px;
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-left-width: 2px;
  border-right-color: rgb(238, 238, 238);
  border-right-width: 2px;
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-left-width: 2px;
  border-right-color: rgb(238, 238, 238);
  border-right-width: 2px;
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 247, 249);
  border-bottom-width: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(56, 132, 255, 0.1);
  border-bottom-color: rgba(56, 132, 255, 0.15);
  border-left-color: rgba(56, 132, 255, 0.15);
  border-right-color: rgba(56, 132, 255, 0.15);
  border-top-color: rgba(56, 132, 255, 0.15);
  font-family: Consolas, monospace;
}

body a.internal.tag-link::before {
  color: rgb(56, 132, 255);
}

body h1 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body h2 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body h2.page-title, h2.page-title a {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

body h3 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body h4 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body h5 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body h6 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(56, 132, 255);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

body ::-webkit-scrollbar-corner {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

body ::-webkit-scrollbar-track {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
  text-decoration: rgb(99, 99, 99);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
  text-decoration: rgb(99, 99, 99);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
  text-decoration: rgb(99, 99, 99);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(56, 132, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(56, 132, 255);
  border-top-color: rgb(56, 132, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(56, 132, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(99, 99, 99);
}`,
    footer: `body footer {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-width: 2px;
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

body footer ul li a {
  color: rgb(99, 99, 99);
  text-decoration: rgb(99, 99, 99);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(99, 99, 99);
  text-decoration: rgb(99, 99, 99);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body li.section-li > .section .meta {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(99, 99, 99);
  text-decoration: rgb(99, 99, 99);
}

body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(99, 99, 99);
}

body .darkmode svg {
  color: rgb(99, 99, 99);
  stroke: rgb(99, 99, 99);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(99, 99, 99);
}

body .breadcrumb-element p {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .metadata {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

body .navigation-progress {
  background-color: rgb(245, 247, 249);
}

body .page-header h2.page-title {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body input[type=text] {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

body kbd {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body sub {
  color: rgb(38, 38, 38);
}

body summary {
  color: rgb(38, 38, 38);
}

body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
