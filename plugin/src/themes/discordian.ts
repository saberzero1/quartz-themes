import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "discordian",
    modes: ["dark"],
    variations: [],
    fonts: ["catamaran"],
  },
  dark: {
    base: `:root:root {
  --background-accent: hsla(217, 8%, 34%, 1);
  --background-code: hsla(204, 6%, 17%, 1);
  --background-code-border: hsla(0, 0%, 16%, 1);
  --background-code-preview: hsla(204, 6%, 17%, 1);
  --background-modifier-accent: hsla(0, 0%, 100%, 0.06);
  --background-modifier-active: hsla(217, 8%, 34%, 0.24);
  --background-modifier-border: var(--background-secondary-alt, hsla(216, 7%, 14%, 1));
  --background-modifier-cover: hsla(220, 8%, 23%, 1);
  --background-modifier-error: var(--discord-red, hsla(0, 85%, 61%, 1));
  --background-modifier-error-hover: var(--discord-red-hover, hsla(0, 66%, 55%, 1));
  --background-modifier-form-field: var(--color-base-25, hsla(0, 0%, 0%, 0.2));
  --background-modifier-form-field-highlighted: hsla(0, 0%, 0%, 0.2);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsla(0, 0%, 0%, 0.2));
  --background-modifier-selected: hsla(217, 8%, 34%, 0.32);
  --background-primary: var(--color-base-00, #2E3035);
  --background-primary-alt: var(--color-base-10, hsla(232, 14%, 31%, 1));
  --background-secondary: var(--color-base-20, #2B2D31);
  --background-secondary-alt: var(--color-base-30, hsla(216, 7%, 14%, 1));
  --background-tertiary: #1E1F22;
  --bases-cards-background: var(--background-primary, #2E3035);
  --bases-cards-cover-background: var(--background-primary-alt, hsla(232, 14%, 31%, 1));
  --bases-embed-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --bases-group-heading-property-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --bases-table-border-color: var(--table-border-color, hsla(216, 7%, 14%, 1));
  --bases-table-cell-background-active: var(--background-primary, #2E3035);
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsla(232, 14%, 31%, 1));
  --bases-table-group-background: var(--background-primary-alt, hsla(232, 14%, 31%, 1));
  --bases-table-header-background: var(--background-primary, #2E3035);
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --bases-table-header-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --bases-table-summary-background: var(--background-primary, #2E3035);
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --blockquote-bg: hsla(240, 11%, 2%, 0.07);
  --blockquote-border: hsla(286, 22%, 66%, 1);
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #2E3035);
  --canvas-card-label-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --caret-color: var(--text-normal, hsla(213, 3%, 82%, 1));
  --checkbox-border-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --checkbox-border-color-hover: var(--text-muted, hsla(213, 4%, 57%, 1));
  --checkbox-marker-color: var(--background-primary, #2E3035);
  --checklist-done-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --code-background: var(--background-primary-alt, hsla(232, 14%, 31%, 1));
  --code-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --code-bracket-background: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --code-comment: var(--text-faint, hsla(0, 0%, 61%, 1));
  --code-normal: var(--text-normal, hsla(213, 3%, 82%, 1));
  --code-punctuation: var(--text-muted, hsla(213, 4%, 57%, 1));
  --collapse-icon-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --collapse-icon-color-collapsed: var(--text-accent, hsla(265, 66%, 72%, 1));
  --dark: var(--text-normal, var(--color-base-100, hsla(213, 3%, 82%, 1)));
  --darkgray: var(--text-normal, var(--color-base-100, hsla(213, 3%, 82%, 1)));
  --default-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif;
  --discord-blue: hsla(227, 58%, 65%, 1);
  --discord-blue-hover: hsla(227, 44%, 59%, 1);
  --discord-dark: hsla(216, 7%, 14%, 1);
  --discord-dark-hover: hsla(216, 7%, 14%, 0.7);
  --discord-green: hsla(153, 46%, 49%, 1);
  --discord-grey: hsla(214, 10%, 50%, 1);
  --discord-grey-hover: hsla(214, 10%, 45%, 1);
  --discord-grey-toggle: hsla(218, 5%, 47%, 1);
  --discord-orange: hsla(20, 84%, 52%, 1);
  --discord-orange-light: hsla(24, 90%, 61%, 1);
  --discord-red: hsla(0, 85%, 61%, 1);
  --discord-red-hover: hsla(0, 66%, 55%, 1);
  --discord-yellow: hsla(38, 96%, 54%, 1);
  --discord-yellow-alt: hsla(37, 65%, 63%, 1);
  --discord-yellow-bg: hsla(38, 96%, 54%, 0.1);
  --discord-yellow-light: hsla(50, 42%, 48%, 1);
  --divider-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --elevation-high: 0 8px 16px hsla(0, 0%, 0%, 0.24);
  --elevation-low: 0 1px 0 hsla(240, 11%, 2%, 0.2), 0 1.5px 0 hsla(240, 8%, 3%, 0.05), 0 2px 0 hsla(240, 11%, 2%, 0.05);
  --elevation-medium: 0 4px 4px hsla(0, 0%, 0%, 0.16);
  --elevation-stroke: 0 1px 0 1px hsla(240, 11%, 2%, 0.1);
  --file-header-background: var(--background-primary, #2E3035);
  --file-header-background-focused: var(--background-primary, #2E3035);
  --file-header-font: var(--font-interface, Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-color: var(--text-normal, hsla(213, 3%, 82%, 1));
  --font-editor: Catamaran SSm, Helvetica Neue, Helvetica, Arial, sans-serif;
  --font-size-file-explorer: 0.875rem;
  --font-size-notes: 1rem;
  --footnote-divider-color: var(--metadata-divider-color, hsla(216, 7%, 14%, 1));
  --footnote-id-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --footnote-id-color-no-occurrences: var(--text-faint, hsla(0, 0%, 61%, 1));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(217, 8%, 34%, 0.16));
  --graph-arrow: hsla(314, 57%, 63%, 1);
  --graph-circle-fill: hsla(59, 99%, 50%, 1);
  --graph-circle-fill-highlight: hsla(59, 99%, 50%, 1);
  --graph-circle-fill-unresolved: hsla(206, 89%, 71%, 1);
  --graph-circle-outline: transparent;
  --graph-fill-attachment: hsla(314, 57%, 63%, 1);
  --graph-fill-tag: hsla(250, 100%, 77%, 1);
  --graph-line-highlight: hsla(191, 57%, 59%, 1);
  --graph-node: var(--text-muted, hsla(213, 4%, 57%, 1));
  --graph-node-focused: var(--text-accent, hsla(265, 66%, 72%, 1));
  --graph-node-unresolved: var(--text-faint, hsla(0, 0%, 61%, 1));
  --graph-text: var(--text-normal, hsla(213, 3%, 82%, 1));
  --gray: var(--text-muted, var(--color-base-70, hsla(213, 4%, 57%, 1)));
  --heading-formatting: var(--text-faint, hsla(0, 0%, 61%, 1));
  --hr-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --icon-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --icon-color-active: var(--text-accent, hsla(265, 66%, 72%, 1));
  --icon-color-focused: var(--text-normal, hsla(213, 3%, 82%, 1));
  --icon-color-hover: var(--text-muted, hsla(213, 4%, 57%, 1));
  --input-date-separator: var(--text-faint, hsla(0, 0%, 61%, 1));
  --input-placeholder-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --letter-spacing-notes: -0.2px;
  --light: var(--background-primary, var(--color-base-00, #2E3035));
  --lightgray: var(--background-secondary, var(--color-base-20, #2B2D31));
  --link-color: var(--text-accent, hsla(265, 66%, 72%, 1));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsla(265, 66%, 72%, 1));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsla(265, 66%, 72%, 1));
  --list-marker-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --list-marker-color-collapsed: var(--text-accent, hsla(265, 66%, 72%, 1));
  --list-marker-color-hover: var(--text-muted, hsla(213, 4%, 57%, 1));
  --markup-code: hsla(34, 89%, 61%, 1);
  --menu-background: var(--background-secondary, #2B2D31);
  --metadata-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --metadata-divider-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --metadata-input-font: var(--font-interface, Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsla(213, 3%, 82%, 1));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --metadata-label-font: var(--font-interface, Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --metadata-label-text-color-hover: var(--text-muted, hsla(213, 4%, 57%, 1));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --modal-background: var(--background-primary, #2E3035);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsla(0, 0%, 61%, 1));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsla(0, 0%, 61%, 1));
  --nav-heading-color: var(--text-normal, hsla(213, 3%, 82%, 1));
  --nav-heading-color-collapsed: var(--text-faint, hsla(0, 0%, 61%, 1));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsla(213, 4%, 57%, 1));
  --nav-heading-color-hover: var(--text-normal, hsla(213, 3%, 82%, 1));
  --nav-item-background-active: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(217, 8%, 34%, 0.16));
  --nav-item-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --nav-item-color-active: var(--text-normal, hsla(213, 3%, 82%, 1));
  --nav-item-color-highlighted: var(--text-accent, hsla(265, 66%, 72%, 1));
  --nav-item-color-hover: var(--text-normal, hsla(213, 3%, 82%, 1));
  --nav-item-color-selected: var(--text-normal, hsla(213, 3%, 82%, 1));
  --nav-tag-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --nav-tag-color-active: var(--text-muted, hsla(213, 4%, 57%, 1));
  --nav-tag-color-hover: var(--text-muted, hsla(213, 4%, 57%, 1));
  --opacity-translucency: 1;
  --pdf-background: var(--background-primary, #2E3035);
  --pdf-page-background: var(--background-primary, #2E3035);
  --pdf-sidebar-background: var(--background-primary, #2E3035);
  --pill-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --pill-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --pill-color-hover: var(--text-normal, hsla(213, 3%, 82%, 1));
  --pill-color-remove: var(--text-faint, hsla(0, 0%, 61%, 1));
  --pill-color-remove-hover: var(--text-accent, hsla(265, 66%, 72%, 1));
  --prompt-background: var(--background-primary, #2E3035);
  --readable-line-length: 45rem;
  --ribbon-background: var(--background-secondary, #2B2D31);
  --ribbon-background-collapsed: var(--background-primary, #2E3035);
  --scrollbar-auto-scrollbar-color-thumb: hsla(216, 7%, 14%, 1);
  --scrollbar-auto-scrollbar-color-track: hsla(223, 7%, 20%, 1);
  --scrollbar-auto-thumb: hsla(216, 7%, 14%, 1);
  --scrollbar-auto-track: hsla(210, 10%, 20%, 1);
  --scrollbar-thin-thumb: hsla(216, 7%, 14%, 1);
  --scrollbar-thin-track: transparent;
  --search-clear-button-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --search-icon-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --search-result-background: var(--background-primary, #2E3035);
  --secondary: var(--text-accent, var(--color-accent-1, hsla(265, 66%, 72%, 1)));
  --setting-group-heading-color: var(--text-normal, hsla(213, 3%, 82%, 1));
  --setting-items-background: var(--background-primary-alt, hsla(232, 14%, 31%, 1));
  --setting-items-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsla(213, 4%, 57%, 1));
  --shiki-code-background: var(--code-background, hsla(232, 14%, 31%, 1));
  --shiki-code-comment: var(--text-faint, hsla(0, 0%, 61%, 1));
  --shiki-code-normal: var(--text-muted, hsla(213, 4%, 57%, 1));
  --shiki-code-punctuation: var(--text-muted, hsla(213, 4%, 57%, 1));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --shiki-gutter-text-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsla(213, 4%, 57%, 1));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsla(213, 4%, 57%, 1));
  --shiki-terminal-dots-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --slider-track-background: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --status-bar-background: var(--background-secondary, #2B2D31);
  --status-bar-border-color: var(--divider-color, hsla(216, 7%, 14%, 1));
  --status-bar-text-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --suggestion-background: var(--background-primary, #2E3035);
  --tab-background-active: var(--background-primary, #2E3035);
  --tab-container-background: var(--background-secondary, #2B2D31);
  --tab-outline-color: var(--divider-color, hsla(216, 7%, 14%, 1));
  --tab-switcher-background: var(--background-secondary, #2B2D31);
  --tab-text-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --tab-text-color-active: var(--text-muted, hsla(213, 4%, 57%, 1));
  --tab-text-color-focused: var(--text-muted, hsla(213, 4%, 57%, 1));
  --tab-text-color-focused-active: var(--text-muted, hsla(213, 4%, 57%, 1));
  --tab-text-color-focused-active-current: var(--text-normal, hsla(213, 3%, 82%, 1));
  --tab-text-color-focused-highlighted: var(--text-accent, hsla(265, 66%, 72%, 1));
  --table-add-button-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --table-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --table-drag-handle-color: var(--text-faint, hsla(0, 0%, 61%, 1));
  --table-drag-handle-color-active: var(--text-on-accent, hsla(210, 3%, 87%, 1));
  --table-header-border-color: var(--table-border-color, hsla(216, 7%, 14%, 1));
  --table-header-color: var(--text-normal, hsla(213, 3%, 82%, 1));
  --tag-color: var(--text-accent, hsla(265, 66%, 72%, 1));
  --tag-color-hover: var(--text-accent, hsla(265, 66%, 72%, 1));
  --tertiary: var(--text-accent, var(--color-accent-1, hsla(265, 66%, 72%, 1)));
  --text-a: hsla(322, 65%, 70%, 1);
  --text-a-hover: hsla(327, 100%, 77%, 1);
  --text-accent: var(--color-accent-1, hsla(265, 66%, 72%, 1));
  --text-em: hsla(62, 31%, 61%, 1);
  --text-faint: var(--color-base-50, hsla(0, 0%, 61%, 1));
  --text-header: hsla(233, 45%, 69%, 1);
  --text-linenumber: hsla(216, 3%, 32%, 0.85);
  --text-linenumber-active: hsla(0, 0%, 61%, 0.85);
  --text-link: hsla(197, 100%, 48%, 1);
  --text-mark: hsla(37, 82%, 74%, 1);
  --text-muted: var(--color-base-70, hsla(213, 4%, 57%, 1));
  --text-normal: var(--color-base-100, hsla(213, 3%, 82%, 1));
  --text-on-accent: hsla(210, 3%, 87%, 1);
  --text-strong: var(--discord-yellow-alt, hsla(37, 65%, 63%, 1));
  --text-tag: hsla(27, 100%, 63%, 0.73);
  --text-title-h1: hsla(243, 35%, 65%, 1);
  --text-title-h2: var(--text-header, hsla(233, 45%, 69%, 1));
  --text-title-h3: var(--text-header, hsla(233, 45%, 69%, 1));
  --text-title-h4: var(--text-header, hsla(233, 45%, 69%, 1));
  --text-title-h5: var(--text-header, hsla(233, 45%, 69%, 1));
  --text-title-h6: hsla(192, 13%, 53%, 1);
  --titlebar-background: var(--background-secondary, #2B2D31);
  --titlebar-background-focused: var(--background-secondary-alt, hsla(216, 7%, 14%, 1));
  --titlebar-border-color: var(--background-modifier-border, hsla(216, 7%, 14%, 1));
  --titlebar-text-color: var(--text-muted, hsla(213, 4%, 57%, 1));
  --titlebar-text-color-focused: var(--text-normal, hsla(213, 3%, 82%, 1));
  --vault-profile-color: var(--text-normal, hsla(213, 3%, 82%, 1));
  --vault-profile-color-hover: var(--vault-profile-color, hsla(213, 3%, 82%, 1));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #2B2D31);
  background-color: var(--tab-container-background, rgb(43, 45, 49));
  color: rgb(208, 209, 210);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(46, 48, 53));
  color: rgb(208, 209, 210);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(43, 45, 49));
  color: rgb(208, 209, 210);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #2B2D31);
  background-color: var(--tab-container-background, rgb(43, 45, 49));
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  color: rgb(208, 209, 210);
}

html body html {
  --default-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif;
  --discord-blue: hsla(227, 58%, 65%, 1);
  --discord-blue-hover: hsla(227, 44%, 59%, 1);
  --discord-dark: hsla(216, 7%, 14%, 1);
  --discord-dark-hover: hsla(216, 7%, 14%, 0.7);
  --discord-green: hsla(153, 46%, 49%, 1);
  --discord-grey: hsla(214, 10%, 50%, 1);
  --discord-grey-hover: hsla(214, 10%, 45%, 1);
  --discord-grey-toggle: hsla(218, 5%, 47%, 1);
  --discord-orange: hsla(20, 84%, 52%, 1);
  --discord-orange-light: hsla(24, 90%, 61%, 1);
  --discord-red: hsla(0, 85%, 61%, 1);
  --discord-red-hover: hsla(0, 66%, 55%, 1);
  --discord-yellow: hsla(38, 96%, 54%, 1);
  --discord-yellow-alt: hsla(37, 65%, 63%, 1);
  --discord-yellow-bg: hsla(38, 96%, 54%, 0.1);
  --discord-yellow-light: hsla(50, 42%, 48%, 1);
  --elevation-high: 0 8px 16px hsla(0, 0%, 0%, 0.24);
  --elevation-low: 0 1px 0 hsla(240, 11%, 2%, 0.2), 0 1.5px 0 hsla(240, 8%, 3%, 0.05), 0 2px 0 hsla(240, 11%, 2%, 0.05);
  --elevation-medium: 0 4px 4px hsla(0, 0%, 0%, 0.16);
  --elevation-stroke: 0 1px 0 1px hsla(240, 11%, 2%, 0.1);
  --font-editor: Catamaran SSm, Helvetica Neue, Helvetica, Arial, sans-serif;
  --font-monospace: Consolas, Andale Mono, Lucida Console, Source Code Pro, iA Writer Mono S, Jetbrains Mono, Menlo, SFMono-Regular, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace;
  --font-size-file-explorer: 0.875rem;
  --font-size-notes: 1rem;
  --letter-spacing-notes: -0.2px;
  --readable-line-length: 45rem;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--discord-yellow-alt, rgb(222, 175, 99));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(222, 175, 99) none 0px;
  text-decoration-color: rgb(222, 175, 99);
}

html body .markdown-rendered p > em, html em {
  color: var(--text-em, rgb(184, 186, 125));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(184, 186, 125) none 0px;
  text-decoration-color: rgb(184, 186, 125);
}

html body .markdown-rendered p > i, html i {
  color: var(--text-em, rgb(184, 186, 125));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(184, 186, 125) none 0px;
  text-decoration-color: rgb(184, 186, 125);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--text-em, rgb(184, 186, 125));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(184, 186, 125) none 0px;
  text-decoration-color: rgb(184, 186, 125);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--discord-yellow-alt, rgb(222, 175, 99));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(222, 175, 99) none 0px;
  text-decoration-color: rgb(222, 175, 99);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(0, 0, 0, 0));
  box-shadow: inset 0 -2px var(--discord-yellow-alt);
  color: var(--text-normal, rgb(208, 209, 210));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(208, 209, 210) none 0px;
  text-decoration-color: rgb(208, 209, 210);
}

html body del {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(208, 209, 210) none 0px;
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: var(--background-primary, rgb(46, 48, 53));
  border-color: rgb(156, 156, 156);
  border-radius: 3px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--discord-blue, rgb(114, 136, 218));
  border-color: rgb(114, 136, 218);
}

html body p {
  color: var(--text-muted, rgb(141, 145, 150));
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(141, 145, 150) none 0px;
  text-decoration-color: rgb(141, 145, 150);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--text-link, rgb(0, 175, 245));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(0, 175, 245) none 0px;
  text-decoration-color: rgb(0, 175, 245);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(228, 129, 192));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration-color: rgb(228, 129, 192);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(228, 129, 192));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(228, 129, 192));
}`,
    lists: `html body dd {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body dt {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body ol > li {
  color: rgb(208, 209, 210);
  margin-bottom: 4px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 4px;
}

html body ul > li {
  color: rgb(208, 209, 210);
  margin-bottom: 4px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 4px;
}

html body ul.overflow {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-a, rgb(228, 129, 192));
}

html body blockquote {
  color: var(--blockquote-color, rgb(208, 209, 210));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: -0.2px;
  line-height: 26.4px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}

html body table {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 32px);
}

html body td {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(208, 209, 210));
}

html body th {
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(208, 209, 210));
  font-weight: var(--table-header-weight, 700);
  letter-spacing: -0.2px;
}

html body thead {
  border-top-color: rgb(222, 175, 99);
  border-top-style: solid;
  border-top-width: 2px;
}

html body tr {
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}`,
    code: `html body code {
  background-color: var(--discord-yellow-bg, rgba(250, 168, 25, 0.1));
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-width: 0px;
  color: var(--markup-code, rgb(244, 167, 67));
  padding-bottom: 1px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 4px;
}

html body pre:has(> code) {
  background-color: var(--background-code-preview, rgb(41, 44, 46));
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-width: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}

html body figcaption {
  color: rgb(208, 209, 210);
  font-family: "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  --code-background: var(--ec-frm-edBg, hsla(232, 14%, 31%, 1));
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}

html body img {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}

html body video {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(68, 71, 90));
  border-bottom-color: rgb(141, 145, 150);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 145, 150);
  border-left-width: 0px;
  border-right-color: rgb(141, 145, 150);
  border-right-width: 0px;
  border-top-color: rgb(141, 145, 150);
  border-top-width: 0px;
  color: var(--text-muted, rgb(141, 145, 150));
}

html body .footnotes {
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
}

html body .transclude {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
  padding-bottom: 0px;
  padding-left: 8px;
  padding-right: 4px;
  padding-top: 0px;
}

html body .transclude-inner {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
  margin-bottom: 0px;
  margin-left: 8px;
  margin-right: 4px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 8px;
  padding-right: 4px;
  padding-top: 0px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(156, 156, 156);
  border-left-width: 0px;
  border-right-color: rgb(156, 156, 156);
  border-right-width: 0px;
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  width: var(--checkbox-size, 22px);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(208, 209, 210);
}

html li.task-list-item[data-task="body"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="."] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="="] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(141, 145, 150);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(141, 145, 150);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(46, 48, 53);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(46, 48, 53);
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
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(208, 209, 210);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(208, 209, 210);
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
  background-color: var(--discord-dark, rgb(33, 35, 38));
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(141, 145, 150));
  font-family: var(--default-font, Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif);
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(46, 48, 53));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(208, 209, 210) none 0px;
  text-decoration-color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: hsla(var(--interactive-accent-hsl), 0.8);
  color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > input {
  background-color: var(--discord-dark, rgb(33, 35, 38));
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: hsla(var(--interactive-accent-hsl), 0.8);
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: rgb(208, 209, 210);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: hsla(var(--interactive-accent-hsl), 0.8);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(208, 209, 210);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, hsla(265, 66%, 72%, 1));
  --pill-color-hover: var(--tag-color-hover, hsla(265, 66%, 72%, 1));
  --pill-color-remove: var(--tag-color, hsla(265, 66%, 72%, 1));
  --pill-color-remove-hover: var(--tag-color-hover, hsla(265, 66%, 72%, 1));
  color: var(--pill-color, rgb(176, 136, 231));
  font-family: "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(176, 136, 231);
}

html body h1 {
  border-bottom-color: rgb(138, 135, 197);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 135, 197);
  border-left-width: 0px;
  border-right-color: rgb(138, 135, 197);
  border-right-width: 0px;
  border-top-color: rgb(138, 135, 197);
  border-top-width: 0px;
  color: var(--text-title-h1, rgb(138, 135, 197));
  font-family: var(--h1-font, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
  font-size: var(--h1-size, 32px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h1-letter-spacing, -0.48px);
  line-height: var(--h1-line-height, 40px);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(208, 209, 210));
}

html body h2 {
  border-bottom-color: rgb(140, 149, 212);
  border-bottom-width: 0px;
  border-left-color: rgb(140, 149, 212);
  border-left-width: 0px;
  border-right-color: rgb(140, 149, 212);
  border-right-width: 0px;
  border-top-color: rgb(140, 149, 212);
  border-top-width: 0px;
  color: var(--text-title-h2, rgb(140, 149, 212));
  font-family: var(--h2-font, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
  font-size: var(--h2-size, 26px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.286px);
  line-height: var(--h2-line-height, 32.5px);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(208, 209, 210));
  font-family: var(--inline-title-font, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
}

html body h3 {
  border-bottom-color: rgb(140, 149, 212);
  border-bottom-width: 0px;
  border-left-color: rgb(140, 149, 212);
  border-left-width: 0px;
  border-right-color: rgb(140, 149, 212);
  border-right-width: 0px;
  border-top-color: rgb(140, 149, 212);
  border-top-width: 0px;
  color: var(--text-title-h3, rgb(140, 149, 212));
  font-family: var(--h3-font, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
  font-size: var(--h3-size, 22px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.176px);
  line-height: var(--h3-line-height, 27.5px);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html body h4 {
  border-bottom-color: rgb(140, 149, 212);
  border-bottom-width: 0px;
  border-left-color: rgb(140, 149, 212);
  border-left-width: 0px;
  border-right-color: rgb(140, 149, 212);
  border-right-width: 0px;
  border-top-color: rgb(140, 149, 212);
  border-top-width: 0px;
  color: var(--text-title-h4, rgb(140, 149, 212));
  font-family: var(--h4-font, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
  font-size: var(--h4-size, 18px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.09px);
  line-height: var(--h4-line-height, 22.5px);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html body h5 {
  border-bottom-color: rgb(140, 149, 212);
  border-bottom-width: 0px;
  border-left-color: rgb(140, 149, 212);
  border-left-width: 0px;
  border-right-color: rgb(140, 149, 212);
  border-right-width: 0px;
  border-top-color: rgb(140, 149, 212);
  border-top-width: 0px;
  color: var(--text-title-h5, rgb(140, 149, 212));
  font-family: var(--h5-font, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
  font-size: var(--h5-size, 18px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.036px);
  line-height: var(--h5-line-height, 22.5px);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html body h6 {
  border-bottom-color: rgb(120, 144, 151);
  border-bottom-width: 0px;
  border-left-color: rgb(120, 144, 151);
  border-left-width: 0px;
  border-right-color: rgb(120, 144, 151);
  border-right-width: 0px;
  border-top-color: rgb(120, 144, 151);
  border-top-width: 0px;
  color: var(--text-title-h6, rgb(120, 144, 151));
  font-family: var(--h6-font, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
  line-height: var(--h6-line-height, 20px);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
}

html body hr {
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--interactive-active, rgb(208, 209, 210));
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--interactive-active, rgb(208, 209, 210));
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(208, 209, 210);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 145, 150);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 145, 150);
  border-left-width: 0px;
  border-right-color: rgb(141, 145, 150);
  border-right-width: 0px;
  border-top-color: rgb(141, 145, 150);
  border-top-width: 0px;
  color: var(--icon-color, rgb(141, 145, 150));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(43, 45, 49));
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(141, 145, 150));
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body footer ul li a {
  color: rgb(141, 145, 150);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-muted, rgb(141, 145, 150));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}

html body li.section-li > .section .meta {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--text-muted, rgb(141, 145, 150));
}

html body ul.section-ul {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(141, 145, 150);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 145, 150);
  border-left-width: 0px;
  border-right-color: rgb(141, 145, 150);
  border-right-width: 0px;
  border-top-color: rgb(141, 145, 150);
  border-top-width: 0px;
  color: var(--icon-color, rgb(141, 145, 150));
}

html body .darkmode svg {
  color: rgb(141, 145, 150);
  stroke: rgb(141, 145, 150);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(141, 145, 150);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 145, 150);
  border-left-width: 0px;
  border-right-color: rgb(141, 145, 150);
  border-right-width: 0px;
  border-top-color: rgb(141, 145, 150);
  border-top-width: 0px;
  color: rgb(141, 145, 150);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(156, 156, 156));
  font-family: "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(208, 209, 210);
}

html body .canvas-node-content {
  color: rgb(208, 209, 210);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(208, 209, 210));
}

html body .canvas-node-group {
  border-color: rgb(208, 209, 210);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(43, 45, 49));
  border-color: rgb(208, 209, 210);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(33, 35, 38);
  color: var(--table-header-color, rgb(208, 209, 210));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-width: 0px;
  color: var(--text-muted, rgb(141, 145, 150));
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .metadata-container .metadata-property {
  border-bottom-color: rgb(141, 145, 150);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 145, 150);
  border-left-width: 0px;
  border-right-color: rgb(141, 145, 150);
  border-right-width: 0px;
  border-top-color: rgb(141, 145, 150);
  border-top-width: 0px;
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(141, 145, 150);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 145, 150);
  border-left-width: 0px;
  border-right-color: rgb(141, 145, 150);
  border-right-width: 0px;
  border-top-color: rgb(141, 145, 150);
  border-top-width: 0px;
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .metadata-property-key {
  color: rgb(141, 145, 150);
  font-family: var(--metadata-label-font, "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body .metadata-property-value {
  color: rgb(141, 145, 150);
  font-family: var(--metadata-input-font, "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body .note-properties {
  border-color: rgb(33, 35, 38);
}

html body .note-properties-key {
  color: rgb(141, 145, 150);
}

html body .note-properties-row {
  border-color: rgb(141, 145, 150);
}

html body .note-properties-tags {
  --pill-color: var(--tag-color, hsla(265, 66%, 72%, 1));
  --pill-color-hover: var(--tag-color-hover, hsla(265, 66%, 72%, 1));
  --pill-color-remove: var(--tag-color, hsla(265, 66%, 72%, 1));
  --pill-color-remove-hover: var(--tag-color-hover, hsla(265, 66%, 72%, 1));
  color: var(--pill-color, rgb(176, 136, 231));
}

html body .note-properties-value {
  color: rgb(141, 145, 150);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(46, 48, 53));
  color: var(--text-normal, rgb(208, 209, 210));
}

html body ol.overflow {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(43, 45, 49));
  border-color: rgb(208, 209, 210);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(33, 35, 38));
}

html body .stacked-page.active {
  border-color: rgb(208, 209, 210);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(43, 45, 49));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: var(--text-normal, rgb(208, 209, 210));
  font-family: var(--font-editor, "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif);
  line-height: 32px;
}

html body abbr {
  color: rgb(208, 209, 210);
}

html body details {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}

html body input[type=text] {
  background-color: var(--discord-dark, rgb(33, 35, 38));
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(141, 145, 150));
  font-family: var(--default-font, Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif);
}

html body kbd {
  background-color: var(--code-background, rgb(68, 71, 90));
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: var(--code-normal, rgb(208, 209, 210));
}

html body progress {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
}

html body sub {
  color: rgb(208, 209, 210);
}

html body summary {
  color: rgb(208, 209, 210);
}

html body sup {
  color: rgb(208, 209, 210);
}

html body ul.tags > li {
  color: var(--tag-color, rgb(176, 136, 231));
}`,
  },
  light: {},
};
