import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hidden-grotto.aromatisse",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: var(--grotto-accent-h, 0);
  --accent-l: var(--grotto-accent-l, 60%);
  --accent-s: var(--grotto-accent-s, 50%);
  --background-modifier-box-shadow: none;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5);
  --background-modifier-error: var(--text-error, hsl(0, 50%, 50%));
  --background-modifier-error-hover: var(--text-error, hsl(0, 50%, 50%));
  --background-modifier-success: var(--text-success, hsl(100, 50%, 50%));
  --background-primary: var(--grotto-dark-1, hsl(300, 20%, 28%));
  --background-primary-alt: var(--background-primary, hsl(300, 20%, 28%));
  --background-secondary: var(--grotto-dark-0, hsl(300, 20%, 20%));
  --background-secondary-alt: var(--background-secondary, hsl(300, 20%, 20%));
  --bases-cards-background: var(--background-primary, hsl(300, 20%, 28%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(300, 20%, 28%));
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, hsl(40, 0%, 76%));
  --bases-table-border-color: var(--table-border-color, hsl(40, 0%, 86%));
  --bases-table-cell-background-active: var(--background-primary, hsl(300, 20%, 28%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(300, 20%, 28%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 50%, 60%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, hsl(300, 20%, 28%));
  --bases-table-header-background: var(--background-primary, hsl(300, 20%, 28%));
  --bases-table-header-color: var(--text-muted, hsl(40, 0%, 76%));
  --bases-table-summary-background: var(--background-primary, hsl(300, 20%, 28%));
  --blockquote-border-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --bodyFont: var(--font-text, var(--grotto-font-main, 'Quicksand'));
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--grotto-callout-color, hsl(40, 0%, 86%));
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 0px);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, hsl(300, 20%, 28%));
  --canvas-card-label-color: var(--text-faint, hsl(40, 0%, 76%));
  --canvas-controls-radius: var(--radius-s, 0px);
  --caret-color: var(--text-normal, hsl(40, 0%, 86%));
  --checkbox-border-color: var(--text-faint, hsl(40, 0%, 76%));
  --checkbox-border-color-hover: var(--text-muted, hsl(40, 0%, 76%));
  --checkbox-color: var(--interactive-accent, hsl(0, 50%, 60%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(0, 50%, 60%));
  --checkbox-marker-color: var(--background-primary, transparent);
  --checkbox-radius: var(--radius-s, 0px);
  --checklist-done-color: var(--text-muted, hsl(40, 0%, 76%));
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-primary-alt, hsl(300, 20%, 28%));
  --code-border-color: var(--grotto-code-border-color, hsl(40, 0%, 86%));
  --code-border-width: var(--grotto-global-border-width, 1px);
  --code-comment: var(--text-faint, hsl(40, 0%, 76%));
  --code-function: var(--color-yellow, hsl(50, 30%, 45%));
  --code-important: var(--color-orange, hsl(30, 30%, 60%));
  --code-keyword: var(--color-pink, hsl(330, 30%, 60%));
  --code-normal: var(--text-normal, hsl(40, 0%, 86%));
  --code-operator: var(--color-red, hsl(0, 30%, 60%));
  --code-property: var(--color-cyan, hsl(170, 30%, 50%));
  --code-punctuation: var(--text-muted, hsl(40, 0%, 76%));
  --code-string: var(--color-green, hsl(120, 30%, 50%));
  --code-tag: var(--color-red, hsl(0, 30%, 60%));
  --code-value: var(--color-purple, hsl(270, 30%, 60%));
  --codeFont: var(--font-monospace, var(--grotto-font-main, 'Quicksand'));
  --collapse-icon-color: var(--text-faint, hsl(40, 0%, 76%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(0, 50%, 60%));
  --color-accent: hsl(var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l));
  --color-accent-1: hsl(var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l));
  --color-accent-2: hsl(var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l));
  --color-accent-hsl: var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l);
  --dark: var(--text-normal, var(--grotto-light-1, hsl(40, 0%, 86%)));
  --darkgray: var(--text-normal, var(--grotto-light-1, hsl(40, 0%, 86%)));
  --divider-color-hover: var(--interactive-accent, hsl(0, 50%, 60%));
  --divider-width: 0px;
  --divider-width-hover: 2px;
  --file-header-background: var(--background-primary, hsl(300, 20%, 28%));
  --file-header-background-focused: var(--background-primary, hsl(300, 20%, 28%));
  --file-header-font: var(--font-interface, 'Quicksand');
  --flair-color: var(--text-normal, hsl(40, 0%, 86%));
  --font-interface: var(--grotto-font-main, 'Quicksand');
  --font-interface-override: var(--grotto-font-main, 'Quicksand');
  --font-mermaid: var(--font-text, 'Quicksand');
  --font-monospace: var(--grotto-font-main, 'Quicksand');
  --font-monospace-override: var(--grotto-font-main, 'Quicksand');
  --font-print: var(--grotto-font-main, 'Quicksand');
  --font-print-override: var(--grotto-font-main, 'Quicksand');
  --font-text: var(--grotto-font-main, 'Quicksand');
  --font-text-override: var(--grotto-font-main, 'Quicksand');
  --footnote-id-color: var(--text-muted, hsl(40, 0%, 76%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(40, 0%, 76%));
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--grotto-graph-node-color, hsl(40, 0%, 86%));
  --graph-node-attachment: var(--text-success, hsl(100, 50%, 50%));
  --graph-node-focused: var(--grotto-accent, hsl(0, 50%, 60%));
  --graph-node-tag: var(--grotto-accent, hsl(0, 50%, 60%));
  --graph-node-unresolved: var(--text-faint, hsl(40, 0%, 76%));
  --graph-text: var(--text-normal, hsl(40, 0%, 86%));
  --gray: var(--text-muted, var(--grotto-light-2, hsl(40, 0%, 76%)));
  --grotto-accent: hsl(0, 50%, 60%);
  --grotto-accent-h: 0;
  --grotto-accent-l: 60%;
  --grotto-accent-s: 50%;
  --grotto-background-tertiary: var(--grotto-dark-2, hsl(300, 20%, 36%));
  --grotto-backlink-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-bases-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-bases-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-bases-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-bases-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-bases-header-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-blockquote-background-color: transparent;
  --grotto-blockquote-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-blur: 0px;
  --grotto-bold-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-bold-weight: 800;
  --grotto-button-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-button-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-button-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-button-border-width: var(--grotto-global-border-width, 1px);
  --grotto-button-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-button-outline-width: 1px;
  --grotto-calendar-background-color: transparent;
  --grotto-calendar-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-calendar-border-width: var(--grotto-global-border-width, 1px);
  --grotto-calendar-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-day-active-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-day-border-color: transparent;
  --grotto-calendar-day-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-calendar-day-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-dayofweek-background-color: transparent;
  --grotto-calendar-dayofweek-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-dayofweek-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-calendar-dayofweek-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-dayofweek-outline-color: transparent;
  --grotto-calendar-month-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-pointer-events: auto;
  --grotto-calendar-today-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-calendar-today-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-today-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-calendar-view-height: 0vh;
  --grotto-calendar-weekend-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-calendar-weekend-border-width: 1px;
  --grotto-calendar-year-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-callout-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-callout-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-callout-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-callout-icon: none;
  --grotto-callout-padding: 8px 16px;
  --grotto-callout-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-callout-title-size: var(--grotto-header-size, 1.5rem);
  --grotto-canvas-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-canvas-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-canvas-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-canvas-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-canvas-controls-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-canvas-controls-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-canvas-path-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-canvas-path-node-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-checkbox-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-checkbox-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-code-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-code-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-code-border-radius: 0rem;
  --grotto-code-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-code-weight: 500;
  --grotto-comment-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-comment-weight: 500;
  --grotto-dark-0: hsl(300, 20%, 20%);
  --grotto-dark-1: hsl(300, 20%, 28%);
  --grotto-dark-2: hsl(300, 20%, 36%);
  --grotto-dragging-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-dragging-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-dragging-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-dragging-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-drawer-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-drawer-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-drawer-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-drawer-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-dropdown-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-dropdown-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-dropdown-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-dropdown-border-width: var(--grotto-global-border-width, 1px);
  --grotto-dropdown-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-dropdown-option-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-dropdown-option-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-dropdown-outline-width: 1px;
  --grotto-embed-background-color: transparent;
  --grotto-embed-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-embed-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-embed-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-embed-title-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-embed-title-size: 1.5rem;
  --grotto-embed-title-visibility: block;
  --grotto-filenav-active-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-filenav-active-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-filenav-background-color: var(--background-secondary, hsl(300, 20%, 20%));
  --grotto-filenav-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-filenav-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-filenav-button-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-filenav-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-filenav-tag-background-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-filenav-tag-color: var(--background-secondary, hsl(300, 20%, 20%));
  --grotto-font-main: 'Quicksand';
  --grotto-font-weight: 500;
  --grotto-global-border-radius: 0rem;
  --grotto-global-border-width: 1px;
  --grotto-graph-controls-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-graph-controls-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-graph-controls-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-graph-controls-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-graph-line-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-graph-node-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-graph-sidebar-controls-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-graph-sidebar-controls-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-graph-sidebar-controls-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-1-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-header-1-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-1-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-1-color: var(--grotto-light-1, hsl(40, 0%, 86%));
  --grotto-header-1-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-2-background-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-2-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-2-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-2-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-header-2-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-3-background-color: transparent;
  --grotto-header-3-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-3-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-3-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-3-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-4-background-color: transparent;
  --grotto-header-4-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-4-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-4-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-4-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-5-background-color: transparent;
  --grotto-header-5-border-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-header-5-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-5-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-5-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-6-background-color: transparent;
  --grotto-header-6-border-color: transparent;
  --grotto-header-6-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-6-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-header-6-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-border-radius: 0rem;
  --grotto-header-line-height: 2rem;
  --grotto-header-size: 1.5rem;
  --grotto-header-weight: 500;
  --grotto-icon-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-input-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-italic-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-italic-weight: 500;
  --grotto-light-0: hsl(40, 0%, 82%);
  --grotto-light-1: hsl(40, 0%, 86%);
  --grotto-light-2: hsl(40, 0%, 76%);
  --grotto-link-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-link-weight: 500;
  --grotto-list-marker-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-menu-background-color: var(--background-secondary, hsl(300, 20%, 20%));
  --grotto-menu-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-menu-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-menu-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-mobile-toolbar-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-mobile-toolbar-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-mobile-toolbar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-mobile-toolbar-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-modal-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-modal-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-modal-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-modal-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-navbar-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-navbar-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-navbar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-navbar-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-navbar-new-tab-display: auto;
  --grotto-navbar-position-offset: 16px;
  --grotto-notice-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-notice-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-notice-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-notice-border-width: var(--grotto-global-border-width, 1px);
  --grotto-notice-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-progress-background-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-progress-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-progress-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-progress-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-prompt-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-prompt-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-prompt-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-prompt-border-width: var(--grotto-global-border-width, 1px);
  --grotto-prompt-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-properties-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-properties-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-properties-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-properties-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-pull-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-pull-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-pull-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-pull-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-redacted: 'Flow Circular';
  --grotto-resize-handle-border-color: transparent;
  --grotto-resize-handle-border-width: var(--grotto-global-border-width, 1px);
  --grotto-resize-handle-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-ribbon-border-color: transparent;
  --grotto-ribbon-border-radius: 0rem;
  --grotto-ribbon-border-width: var(--grotto-global-border-width, 1px);
  --grotto-scrollbar-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-settings-background-color: var(--background-secondary, hsl(300, 20%, 20%));
  --grotto-settings-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-settings-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-settings-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-slider-background-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-slider-border-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-statusbar-background-color: var(--background-secondary, hsl(300, 20%, 20%));
  --grotto-statusbar-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-statusbar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-statusbar-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-strikethrough-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-strikethrough-opacity: 0.5;
  --grotto-strikethrough-weight: 500;
  --grotto-suggestion-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-suggestion-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-suggestion-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-suggestion-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-suggestion-selected-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-suggestion-selected-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-tab-switcher-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-tab-switcher-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-tab-switcher-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-tab-switcher-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-tab-switcher-menu-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-tab-switcher-selected-tab-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-tab-switcher-tab-height: 200px;
  --grotto-table-background-color: transparent;
  --grotto-table-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-table-border-radius: 0rem;
  --grotto-table-border-style: separate;
  --grotto-table-border-width: var(--grotto-global-border-width, 1px);
  --grotto-table-cell-width: fit-content;
  --grotto-table-cell-width-reading: wrap;
  --grotto-table-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-tag-background-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-tag-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-tag-border-radius: 0rem;
  --grotto-tag-border-width: 1.5px;
  --grotto-tag-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-tag-padding-x: 0.4rem;
  --grotto-tag-padding-y: 0.1rem;
  --grotto-tag-pointer-events: none;
  --grotto-tag-size: 0.8rem;
  --grotto-tag-weight: 600;
  --grotto-text-color-on-accent: var(--grotto-light-1, hsl(40, 0%, 86%));
  --grotto-titlebar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-titlebar-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-toggle-background-color: var(--background-primary, hsl(300, 20%, 28%));
  --grotto-toggle-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-toggle-border-width: var(--grotto-global-border-width, 1px);
  --grotto-toggle-enabled-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-tooltip-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-tooltip-border-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-tooltip-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-tooltip-border-width: var(--grotto-global-border-width, 1px);
  --grotto-tooltip-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-view-header-background-color: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --grotto-view-header-color: var(--text-normal, hsl(40, 0%, 86%));
  --grotto-view-header-sidebar-toggle-display: none;
  --headerFont: var(--font-text, var(--grotto-font-main, 'Quicksand'));
  --heading-formatting: var(--text-faint, hsl(40, 0%, 76%));
  --highlight: var(--text-highlight-bg, var(--grotto-background-tertiary, hsl(300, 20%, 36%)));
  --icon-color: var(--text-muted, hsl(40, 0%, 76%));
  --icon-color-active: var(--text-accent, hsl(0, 50%, 60%));
  --icon-color-focused: var(--text-normal, hsl(40, 0%, 86%));
  --icon-color-hover: var(--text-muted, hsl(40, 0%, 76%));
  --input-date-separator: var(--text-faint, hsl(40, 0%, 76%));
  --input-placeholder-color: var(--text-faint, hsl(40, 0%, 76%));
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: var(--color-accent, hsl(0, 50%, 60%));
  --interactive-accent-hover: var(--color-accent-1, hsl(0, 50%, 60%));
  --interactive-accent-hsl: var(--color-accent-hsl, 0, 50%, 60%);
  --light: var(--background-primary, var(--grotto-dark-1, hsl(300, 20%, 28%)));
  --lightgray: var(--background-secondary, var(--grotto-dark-0, hsl(300, 20%, 20%)));
  --link-color: var(--text-accent, hsl(0, 50%, 60%));
  --link-color-hover: var(--text-accent-hover, hsl(0, 50%, 60%));
  --link-external-color: var(--text-accent, hsl(0, 50%, 60%));
  --link-external-color-hover: var(--text-accent-hover, hsl(0, 50%, 60%));
  --link-unresolved-color: var(--text-accent, hsl(0, 50%, 60%));
  --list-bullet-radius: var(--grotto-global-border-radius, 0rem);
  --list-marker-color: var(--grotto-list-marker-color, hsl(40, 0%, 86%));
  --list-marker-color-collapsed: var(--grotto-list-marker-color, hsl(40, 0%, 86%));
  --list-marker-color-hover: var(--grotto-list-marker-color, hsl(40, 0%, 86%));
  --menu-background: var(--background-secondary, hsl(300, 20%, 20%));
  --menu-radius: var(--radius-m, 0px);
  --menu-shadow: var(--shadow-s, none);
  --metadata-input-font: var(--font-interface, 'Quicksand');
  --metadata-input-text-color: var(--text-normal, hsl(40, 0%, 86%));
  --metadata-label-font: var(--font-interface, 'Quicksand');
  --metadata-label-text-color: var(--text-muted, hsl(40, 0%, 76%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(40, 0%, 76%));
  --modal-background: var(--background-primary, hsl(300, 20%, 28%));
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(40, 0%, 76%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(40, 0%, 76%));
  --nav-heading-color: var(--text-normal, hsl(40, 0%, 86%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(40, 0%, 76%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(40, 0%, 76%));
  --nav-heading-color-hover: var(--text-normal, hsl(40, 0%, 86%));
  --nav-item-color: var(--text-muted, hsl(40, 0%, 76%));
  --nav-item-color-active: var(--text-normal, hsl(40, 0%, 86%));
  --nav-item-color-highlighted: var(--text-accent, hsl(0, 50%, 60%));
  --nav-item-color-hover: var(--text-normal, hsl(40, 0%, 86%));
  --nav-item-color-selected: var(--text-normal, hsl(40, 0%, 86%));
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, hsl(40, 0%, 76%));
  --nav-tag-color-active: var(--text-muted, hsl(40, 0%, 76%));
  --nav-tag-color-hover: var(--text-muted, hsl(40, 0%, 76%));
  --nav-tag-radius: var(--radius-s, 0px);
  --p-spacing: 0rem;
  --pdf-background: var(--background-primary, hsl(300, 20%, 28%));
  --pdf-page-background: var(--background-primary, hsl(300, 20%, 28%));
  --pdf-sidebar-background: var(--background-primary, hsl(300, 20%, 28%));
  --pill-color: var(--text-muted, hsl(40, 0%, 76%));
  --pill-color-hover: var(--text-normal, hsl(40, 0%, 86%));
  --pill-color-remove: var(--text-faint, hsl(40, 0%, 76%));
  --pill-color-remove-hover: var(--text-accent, hsl(0, 50%, 60%));
  --prompt-background: var(--background-primary, hsl(300, 20%, 28%));
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --raised-background: var(--blur-background, none);
  --raised-shadow: var(--shadow-xs, none);
  --ribbon-background: var(--background-secondary, hsl(300, 20%, 20%));
  --ribbon-background-collapsed: var(--background-primary, hsl(300, 20%, 28%));
  --scrollbar-active-thumb-bg: var(--grotto-accent, hsl(0, 50%, 60%));
  --scrollbar-bg: var(--grotto-accent, hsl(0, 50%, 60%));
  --scrollbar-border-width: 3px;
  --scrollbar-radius: var(--grotto-global-border-radius, 0rem);
  --scrollbar-thumb-bg: var(--grotto-accent, hsl(0, 50%, 60%));
  --search-clear-button-color: var(--text-muted, hsl(40, 0%, 76%));
  --search-icon-color: var(--text-muted, hsl(40, 0%, 76%));
  --search-result-background: var(--background-primary, hsl(300, 20%, 28%));
  --secondary: var(--text-accent, var(--color-accent-1, hsl(0, 50%, 60%)));
  --setting-group-heading-color: var(--text-normal, hsl(40, 0%, 86%));
  --setting-items-background: var(--background-primary-alt, hsl(300, 20%, 28%));
  --setting-items-radius: var(--radius-l, 0px);
  --shadow-edges: none;
  --shadow-l: none;
  --shadow-s: none;
  --shadow-xs: 0 1px 6px rgba(0, 0, 0, 0.045), 0 4px 24px rgba(0, 0, 0, 0.195), var(--shadow-edges);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(40, 0%, 76%));
  --shiki-code-background: var(--code-background, hsl(300, 20%, 28%));
  --shiki-code-block-spacing: var(--p-spacing, 0rem);
  --shiki-code-comment: var(--text-faint, hsl(40, 0%, 76%));
  --shiki-code-normal: var(--text-muted, hsl(40, 0%, 76%));
  --shiki-code-punctuation: var(--text-muted, hsl(40, 0%, 76%));
  --shiki-gutter-text-color: var(--text-faint, hsl(40, 0%, 76%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(40, 0%, 76%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(40, 0%, 76%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(40, 0%, 76%));
  --slider-thumb-y: -7px;
  --status-bar-background: var(--background-secondary, hsl(300, 20%, 20%));
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(40, 0%, 76%));
  --suggestion-background: var(--background-primary, hsl(300, 20%, 28%));
  --tab-background-active: var(--background-primary, hsl(300, 20%, 28%));
  --tab-container-background: var(--background-secondary, hsl(300, 20%, 20%));
  --tab-curve: 0rem;
  --tab-radius: var(--radius-s, 0px);
  --tab-switcher-background: var(--background-secondary, hsl(300, 20%, 20%));
  --tab-switcher-preview-background-shadow: none;
  --tab-switcher-preview-radius: var(--radius-xl, 0px);
  --tab-text-color: var(--text-faint, hsl(40, 0%, 76%));
  --tab-text-color-active: var(--text-muted, hsl(40, 0%, 76%));
  --tab-text-color-focused: var(--text-muted, hsl(40, 0%, 76%));
  --tab-text-color-focused-active: var(--text-muted, hsl(40, 0%, 76%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(40, 0%, 86%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(0, 50%, 60%));
  --table-add-button-border-color: var(--table-border-color, hsl(40, 0%, 86%));
  --table-background: var(--grotto-table-background-color, transparent);
  --table-border-color: var(--grotto-table-border-color, hsl(40, 0%, 86%));
  --table-border-width: var(--grotto-table-border-width, 1px);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(0, 50%, 60%));
  --table-drag-handle-color: var(--text-faint, hsl(40, 0%, 76%));
  --table-header-background-hover: var(--table-background, transparent);
  --table-header-border-color: var(--table-border-color, hsl(40, 0%, 86%));
  --table-header-color: var(--text-normal, hsl(40, 0%, 86%));
  --table-selection-border-color: var(--interactive-accent, hsl(0, 50%, 60%));
  --table-text-color: var(--grotto-table-color, hsl(40, 0%, 86%));
  --tag-color: var(--text-accent, hsl(0, 50%, 60%));
  --tag-color-hover: var(--text-accent, hsl(0, 50%, 60%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(0, 50%, 60%)));
  --text-accent: var(--color-accent-1, hsl(0, 50%, 60%));
  --text-accent-hover: var(--color-accent-2, hsl(0, 50%, 60%));
  --text-error: var(--color-red, hsl(0, 50%, 50%));
  --text-faint: var(--grotto-light-2, hsl(40, 0%, 76%));
  --text-highlight-bg: var(--grotto-background-tertiary, hsl(300, 20%, 36%));
  --text-muted: var(--grotto-light-2, hsl(40, 0%, 76%));
  --text-normal: var(--grotto-light-1, hsl(40, 0%, 86%));
  --text-selection: hsla(var(--color-accent-hsl), 1);
  --text-success: var(--color-green, hsl(100, 50%, 50%));
  --text-warning: var(--color-orange, hsl(30, 50%, 50%));
  --textHighlight: var(--text-highlight-bg, var(--grotto-background-tertiary, hsl(300, 20%, 36%)));
  --titleFont: var(--font-text, var(--grotto-font-main, 'Quicksand'));
  --titlebar-background: var(--background-secondary, hsl(300, 20%, 20%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(300, 20%, 20%));
  --titlebar-text-color: var(--text-muted, hsl(40, 0%, 76%));
  --titlebar-text-color-focused: var(--text-normal, hsl(40, 0%, 86%));
  --touch-radius-l: var(--touch-size-l, 0px);
  --touch-radius-m: var(--touch-size-m, 0px);
  --touch-radius-s: var(--touch-size-s, 0px);
  --touch-radius-xl: var(--touch-size-xl, 0px);
  --touch-radius-xs: var(--touch-size-xs, 0px);
  --touch-radius-xxs: var(--touch-size-xxs, 0px);
  --vault-profile-color: var(--text-normal, hsl(40, 0%, 86%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(40, 0%, 86%));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(300, 20%, 20%));
  background-color: var(--tab-container-background, rgb(61, 41, 61));
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(86, 57, 86));
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(61, 41, 61));
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(300, 20%, 20%));
  background-color: var(--tab-container-background, rgb(61, 41, 61));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  color: rgb(219, 219, 219);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--grotto-bold-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-bold-weight, 800);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--grotto-italic-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-italic-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--grotto-italic-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-italic-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--grotto-italic-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-italic-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--grotto-bold-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-bold-weight, 800);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(110, 73, 110));
  color: var(--text-normal, rgb(219, 219, 219));
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body del {
  color: rgb(219, 219, 219);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(219, 219, 219);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(204, 102, 102));
  border-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(194, 194, 194));
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(194, 194, 194) none 0px;
  text-decoration-color: rgb(194, 194, 194);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--grotto-link-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-link-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--grotto-link-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-link-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-link-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration: underline rgba(204, 102, 102, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(204, 102, 102, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: rgb(219, 219, 219);
  font-family: Quicksand;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: rgb(219, 219, 219);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(219, 219, 219);
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(219, 219, 219);
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(194, 194, 194));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--grotto-blockquote-background-color, rgba(0, 0, 0, 0));
  color: var(--grotto-blockquote-color, rgb(219, 219, 219));
  font-family: Quicksand;
  font-weight: 500;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(219, 219, 219);
  font-family: Quicksand;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(219, 219, 219));
  font-weight: 500;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(219, 219, 219));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--grotto-code-background-color, rgb(110, 73, 110));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-code-color, rgb(219, 219, 219));
  font-family: var(--font-monospace, Quicksand);
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--grotto-code-background-color, rgb(110, 73, 110));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(219, 219, 219);
  font-family: Quicksand;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(300, 20%, 28%));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(86, 57, 86));
  border-bottom-color: rgb(194, 194, 194);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(194, 194, 194);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(194, 194, 194);
  border-right-width: 0px;
  border-top-color: rgb(194, 194, 194);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(194, 194, 194));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--grotto-embed-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--grotto-embed-color, rgb(219, 219, 219));
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--grotto-embed-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--grotto-embed-color, rgb(219, 219, 219));
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Quicksand;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Quicksand;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, hsl(40, 0%, 86%));
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgb(86, 57, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: hsl(40, 0%, 86%);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(219, 219, 219));
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(219, 219, 219);
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(219, 219, 219));
  font-family: Quicksand;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--grotto-prompt-background-color, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(219, 219, 219);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--grotto-accent, rgb(204, 102, 102));
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
  font-weight: 500;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--text-normal, rgb(219, 219, 219));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--grotto-accent, rgb(204, 102, 102));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--grotto-accent, rgb(204, 102, 102));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(0, 50%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 50%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 50%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 50%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  --pill-color-remove: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  background-color: var(--grotto-properties-color, rgb(219, 219, 219));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--background-primary, rgb(86, 57, 86));
  font-family: Quicksand;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(86, 57, 86);
}

html[saved-theme="dark"] body h1 {
  background: rgb(204, 102, 102) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-header-1-background-color, rgb(204, 102, 102));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(219, 219, 219);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(219, 219, 219);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-1-color, rgb(219, 219, 219));
  font-family: var(--h1-font, Quicksand);
  font-size: var(--grotto-header-1-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body h2 {
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-header-2-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(219, 219, 219);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(219, 219, 219);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-2-color, rgb(86, 57, 86));
  font-family: var(--h2-font, Quicksand);
  font-size: var(--grotto-header-2-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(219, 219, 219));
  font-family: var(--inline-title-font, Quicksand);
}

html[saved-theme="dark"] body h3 {
  background-color: var(--grotto-header-3-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(219, 219, 219);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(219, 219, 219);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(219, 219, 219);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-3-color, rgb(219, 219, 219));
  font-family: var(--h3-font, Quicksand);
  font-size: var(--grotto-header-3-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  background-color: var(--grotto-header-4-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-style: solid;
  border-bottom-width: 6px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--grotto-header-4-color, rgb(219, 219, 219));
  font-family: var(--h4-font, Quicksand);
  font-size: var(--grotto-header-4-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
  text-decoration: underline 2px rgb(86, 57, 86);
}

html[saved-theme="dark"] body h5 {
  background-color: var(--grotto-header-5-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-5-color, rgb(219, 219, 219));
  font-family: var(--h5-font, Quicksand);
  font-size: var(--grotto-header-5-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
  text-decoration: underline 2px rgb(204, 102, 102);
}

html[saved-theme="dark"] body h6 {
  background-color: var(--grotto-header-6-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-6-color, rgb(219, 219, 219));
  font-family: var(--h6-font, Quicksand);
  font-size: var(--grotto-header-6-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, hsl(40, 0%, 86%));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--grotto-filenav-color, rgb(219, 219, 219));
  font-family: Quicksand;
  font-weight: var(--nav-item-weight, 500);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--grotto-filenav-color, rgb(219, 219, 219));
  font-family: Quicksand;
  font-weight: var(--nav-item-weight, 500);
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

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 500);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--grotto-icon-color, rgb(219, 219, 219));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--grotto-statusbar-background-color, rgb(61, 41, 61));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: var(--grotto-statusbar-color, rgb(219, 219, 219));
  font-family: Quicksand;
}

html[saved-theme="dark"] body footer ul li a {
  color: var(--grotto-statusbar-color, rgb(219, 219, 219));
  font-weight: 500;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(219, 219, 219);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--grotto-filenav-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(219, 219, 219);
  font-family: Quicksand;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(219, 219, 219);
  font-family: Quicksand;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--grotto-filenav-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--grotto-icon-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(219, 219, 219);
  stroke: rgb(219, 219, 219);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(194, 194, 194);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(194, 194, 194);
  border-left-width: 0px;
  border-right-color: rgb(194, 194, 194);
  border-right-width: 0px;
  border-top-color: rgb(194, 194, 194);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(194, 194, 194));
  font-family: Quicksand;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: var(--grotto-embed-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(61, 41, 61));
  border-color: rgb(219, 219, 219);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(219, 219, 219);
  color: var(--table-header-color, rgb(219, 219, 219));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: var(--text-muted, rgb(194, 194, 194));
  font-family: Quicksand;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(194, 194, 194);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(194, 194, 194);
  border-left-width: 0px;
  border-right-color: rgb(194, 194, 194);
  border-right-width: 0px;
  border-top-color: rgb(194, 194, 194);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(194, 194, 194);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(194, 194, 194);
  border-bottom-width: 0px;
  border-left-color: rgb(194, 194, 194);
  border-left-width: 0px;
  border-right-color: rgb(194, 194, 194);
  border-right-width: 0px;
  border-top-color: rgb(194, 194, 194);
  border-top-width: 0px;
  color: rgb(194, 194, 194);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(194, 194, 194);
  font-family: var(--metadata-label-font, Quicksand);
  font-weight: 500;
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(194, 194, 194);
  font-family: var(--metadata-input-font, Quicksand);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(194, 194, 194);
  font-weight: 500;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(0, 50%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 50%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 50%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 50%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  --pill-color-remove: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  background-color: var(--grotto-properties-color, rgb(219, 219, 219));
  border-radius: 0px;
  color: var(--background-primary, rgb(86, 57, 86));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(86, 57, 86));
  color: var(--text-normal, rgb(219, 219, 219));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(61, 41, 61));
  border-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(61, 41, 61));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(219, 219, 219);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--grotto-statusbar-background-color, rgb(61, 41, 61));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
  color: var(--text-normal, rgb(219, 219, 219));
  font-family: Quicksand;
}

html[saved-theme="dark"] body abbr {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 1px;
  color: var(--text-normal, rgb(219, 219, 219));
  font-family: Quicksand;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(86, 57, 86));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(219, 219, 219));
  font-family: var(--font-monospace, Quicksand);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body summary {
  color: rgb(219, 219, 219);
  font-weight: 500;
}

html[saved-theme="dark"] body sup {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--grotto-tag-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 1px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-tag-color, rgb(86, 57, 86));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: var(--grotto-accent-h, 0);
  --accent-l: var(--grotto-accent-l, 60%);
  --accent-s: var(--grotto-accent-s, 50%);
  --background-modifier-box-shadow: none;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5);
  --background-modifier-error: var(--text-error, hsl(0, 50%, 50%));
  --background-modifier-error-hover: var(--text-error, hsl(0, 50%, 50%));
  --background-modifier-success: var(--text-success, hsl(100, 50%, 50%));
  --background-primary: var(--grotto-light-1, hsl(40, 0%, 86%));
  --background-primary-alt: var(--background-primary, hsl(40, 0%, 86%));
  --background-secondary: var(--grotto-light-0, hsl(40, 0%, 82%));
  --background-secondary-alt: var(--background-secondary, hsl(40, 0%, 82%));
  --bases-cards-background: var(--background-primary, hsl(40, 0%, 86%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(40, 0%, 86%));
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, hsl(300, 20%, 32%));
  --bases-table-border-color: var(--table-border-color, hsl(300, 20%, 20%));
  --bases-table-cell-background-active: var(--background-primary, hsl(40, 0%, 86%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(40, 0%, 86%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 50%, 60%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, hsl(40, 0%, 86%));
  --bases-table-header-background: var(--background-primary, hsl(40, 0%, 86%));
  --bases-table-header-color: var(--text-muted, hsl(300, 20%, 32%));
  --bases-table-summary-background: var(--background-primary, hsl(40, 0%, 86%));
  --blockquote-border-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --bodyFont: var(--font-text, var(--grotto-font-main, 'Quicksand'));
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--grotto-callout-color, hsl(300, 20%, 20%));
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 0px);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, hsl(40, 0%, 86%));
  --canvas-card-label-color: var(--text-faint, hsl(300, 20%, 32%));
  --canvas-controls-radius: var(--radius-s, 0px);
  --caret-color: var(--text-normal, hsl(300, 20%, 20%));
  --checkbox-border-color: var(--text-faint, hsl(300, 20%, 32%));
  --checkbox-border-color-hover: var(--text-muted, hsl(300, 20%, 32%));
  --checkbox-color: var(--interactive-accent, hsl(0, 50%, 60%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(0, 50%, 60%));
  --checkbox-marker-color: var(--background-primary, transparent);
  --checkbox-radius: var(--radius-s, 0px);
  --checklist-done-color: var(--text-muted, hsl(300, 20%, 32%));
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-primary-alt, hsl(40, 0%, 86%));
  --code-border-color: var(--grotto-code-border-color, hsl(300, 20%, 20%));
  --code-border-width: var(--grotto-global-border-width, 1px);
  --code-comment: var(--text-faint, hsl(300, 20%, 32%));
  --code-function: var(--color-yellow, hsl(50, 30%, 45%));
  --code-important: var(--color-orange, hsl(30, 30%, 60%));
  --code-keyword: var(--color-pink, hsl(330, 30%, 60%));
  --code-normal: var(--text-normal, hsl(300, 20%, 20%));
  --code-operator: var(--color-red, hsl(0, 30%, 60%));
  --code-property: var(--color-cyan, hsl(170, 30%, 50%));
  --code-punctuation: var(--text-muted, hsl(300, 20%, 32%));
  --code-string: var(--color-green, hsl(120, 30%, 50%));
  --code-tag: var(--color-red, hsl(0, 30%, 60%));
  --code-value: var(--color-purple, hsl(270, 30%, 60%));
  --codeFont: var(--font-monospace, var(--grotto-font-main, 'Quicksand'));
  --collapse-icon-color: var(--text-faint, hsl(300, 20%, 32%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(0, 50%, 60%));
  --color-accent: hsl(var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l));
  --color-accent-1: hsl(var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l));
  --color-accent-2: hsl(var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l));
  --color-accent-hsl: var(--grotto-accent-h), var(--grotto-accent-s), var(--grotto-accent-l);
  --dark: var(--text-normal, var(--grotto-dark-1, hsl(300, 20%, 20%)));
  --darkgray: var(--text-normal, var(--grotto-dark-1, hsl(300, 20%, 20%)));
  --divider-color-hover: var(--interactive-accent, hsl(0, 50%, 60%));
  --divider-width: 0px;
  --divider-width-hover: 2px;
  --file-header-background: var(--background-primary, hsl(40, 0%, 86%));
  --file-header-background-focused: var(--background-primary, hsl(40, 0%, 86%));
  --file-header-font: var(--font-interface, 'Quicksand');
  --flair-color: var(--text-normal, hsl(300, 20%, 20%));
  --font-interface: var(--grotto-font-main, 'Quicksand');
  --font-interface-override: var(--grotto-font-main, 'Quicksand');
  --font-mermaid: var(--font-text, 'Quicksand');
  --font-monospace: var(--grotto-font-main, 'Quicksand');
  --font-monospace-override: var(--grotto-font-main, 'Quicksand');
  --font-print: var(--grotto-font-main, 'Quicksand');
  --font-print-override: var(--grotto-font-main, 'Quicksand');
  --font-text: var(--grotto-font-main, 'Quicksand');
  --font-text-override: var(--grotto-font-main, 'Quicksand');
  --footnote-id-color: var(--text-muted, hsl(300, 20%, 32%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(300, 20%, 32%));
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--grotto-graph-node-color, hsl(300, 20%, 20%));
  --graph-node-attachment: var(--text-success, hsl(100, 50%, 50%));
  --graph-node-focused: var(--grotto-accent, hsl(0, 50%, 60%));
  --graph-node-tag: var(--grotto-accent, hsl(0, 50%, 60%));
  --graph-node-unresolved: var(--text-faint, hsl(300, 20%, 32%));
  --graph-text: var(--text-normal, hsl(300, 20%, 20%));
  --gray: var(--text-muted, var(--grotto-dark-2, hsl(300, 20%, 32%)));
  --grotto-accent: hsl(0, 50%, 60%);
  --grotto-accent-h: 0;
  --grotto-accent-l: 60%;
  --grotto-accent-s: 50%;
  --grotto-background-tertiary: var(--grotto-light-2, hsl(40, 0%, 76%));
  --grotto-backlink-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-bases-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-bases-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-bases-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-bases-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-bases-header-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-blockquote-background-color: transparent;
  --grotto-blockquote-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-blur: 0px;
  --grotto-bold-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-bold-weight: 800;
  --grotto-button-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-button-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-button-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-button-border-width: var(--grotto-global-border-width, 1px);
  --grotto-button-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-button-outline-width: 1px;
  --grotto-calendar-background-color: transparent;
  --grotto-calendar-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-calendar-border-width: var(--grotto-global-border-width, 1px);
  --grotto-calendar-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-day-active-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-day-border-color: transparent;
  --grotto-calendar-day-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-calendar-day-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-dayofweek-background-color: transparent;
  --grotto-calendar-dayofweek-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-dayofweek-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-calendar-dayofweek-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-dayofweek-outline-color: transparent;
  --grotto-calendar-month-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-pointer-events: auto;
  --grotto-calendar-today-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-calendar-today-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-today-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-calendar-view-height: 0vh;
  --grotto-calendar-weekend-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-calendar-weekend-border-width: 1px;
  --grotto-calendar-year-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-callout-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-callout-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-callout-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-callout-icon: none;
  --grotto-callout-padding: 8px 16px;
  --grotto-callout-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-callout-title-size: var(--grotto-header-size, 1.5rem);
  --grotto-canvas-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-canvas-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-canvas-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-canvas-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-canvas-controls-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-canvas-controls-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-canvas-path-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-canvas-path-node-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-checkbox-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-checkbox-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-code-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-code-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-code-border-radius: 0rem;
  --grotto-code-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-code-weight: 500;
  --grotto-comment-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-comment-weight: 500;
  --grotto-dark-0: hsl(300, 20%, 12%);
  --grotto-dark-1: hsl(300, 20%, 20%);
  --grotto-dark-2: hsl(300, 20%, 32%);
  --grotto-dragging-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-dragging-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-dragging-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-dragging-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-drawer-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-drawer-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-drawer-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-drawer-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-dropdown-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-dropdown-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-dropdown-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-dropdown-border-width: var(--grotto-global-border-width, 1px);
  --grotto-dropdown-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-dropdown-option-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-dropdown-option-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-dropdown-outline-width: 1px;
  --grotto-embed-background-color: transparent;
  --grotto-embed-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-embed-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-embed-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-embed-title-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-embed-title-size: 1.5rem;
  --grotto-embed-title-visibility: block;
  --grotto-filenav-active-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-filenav-active-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-filenav-background-color: var(--background-secondary, hsl(40, 0%, 82%));
  --grotto-filenav-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-filenav-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-filenav-button-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-filenav-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-filenav-tag-background-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-filenav-tag-color: var(--background-secondary, hsl(40, 0%, 82%));
  --grotto-font-main: 'Quicksand';
  --grotto-font-weight: 500;
  --grotto-global-border-radius: 0rem;
  --grotto-global-border-width: 1px;
  --grotto-graph-controls-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-graph-controls-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-graph-controls-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-graph-controls-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-graph-line-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-graph-node-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-graph-sidebar-controls-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-graph-sidebar-controls-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-graph-sidebar-controls-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-1-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-header-1-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-1-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-1-color: var(--grotto-light-1, hsl(40, 0%, 86%));
  --grotto-header-1-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-2-background-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-2-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-2-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-2-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-header-2-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-3-background-color: transparent;
  --grotto-header-3-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-3-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-3-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-3-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-4-background-color: transparent;
  --grotto-header-4-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-4-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-4-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-4-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-5-background-color: transparent;
  --grotto-header-5-border-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-header-5-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-5-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-5-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-6-background-color: transparent;
  --grotto-header-6-border-color: transparent;
  --grotto-header-6-border-radius: var(--grotto-header-border-radius, 0rem);
  --grotto-header-6-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-header-6-size: var(--grotto-header-size, 1.5rem);
  --grotto-header-border-radius: 0rem;
  --grotto-header-line-height: 2rem;
  --grotto-header-size: 1.5rem;
  --grotto-header-weight: 500;
  --grotto-icon-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-input-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-italic-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-italic-weight: 500;
  --grotto-light-0: hsl(40, 0%, 82%);
  --grotto-light-1: hsl(40, 0%, 86%);
  --grotto-light-2: hsl(40, 0%, 76%);
  --grotto-link-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-link-weight: 500;
  --grotto-list-marker-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-menu-background-color: var(--background-secondary, hsl(40, 0%, 82%));
  --grotto-menu-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-menu-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-menu-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-mobile-toolbar-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-mobile-toolbar-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-mobile-toolbar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-mobile-toolbar-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-modal-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-modal-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-modal-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-modal-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-navbar-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-navbar-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-navbar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-navbar-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-navbar-new-tab-display: auto;
  --grotto-navbar-position-offset: 16px;
  --grotto-notice-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-notice-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-notice-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-notice-border-width: var(--grotto-global-border-width, 1px);
  --grotto-notice-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-progress-background-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-progress-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-progress-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-progress-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-prompt-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-prompt-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-prompt-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-prompt-border-width: var(--grotto-global-border-width, 1px);
  --grotto-prompt-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-properties-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-properties-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-properties-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-properties-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-pull-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-pull-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-pull-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-pull-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-redacted: 'Flow Circular';
  --grotto-resize-handle-border-color: transparent;
  --grotto-resize-handle-border-width: var(--grotto-global-border-width, 1px);
  --grotto-resize-handle-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-ribbon-border-color: transparent;
  --grotto-ribbon-border-radius: 0rem;
  --grotto-ribbon-border-width: var(--grotto-global-border-width, 1px);
  --grotto-scrollbar-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-settings-background-color: var(--background-secondary, hsl(40, 0%, 82%));
  --grotto-settings-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-settings-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-settings-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-slider-background-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-slider-border-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-statusbar-background-color: var(--background-secondary, hsl(40, 0%, 82%));
  --grotto-statusbar-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-statusbar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-statusbar-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-strikethrough-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-strikethrough-opacity: 0.5;
  --grotto-strikethrough-weight: 500;
  --grotto-suggestion-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-suggestion-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-suggestion-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-suggestion-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-suggestion-selected-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-suggestion-selected-color: var(--grotto-text-color-on-accent, hsl(40, 0%, 86%));
  --grotto-tab-switcher-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-tab-switcher-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-tab-switcher-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-tab-switcher-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-tab-switcher-menu-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-tab-switcher-selected-tab-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-tab-switcher-tab-height: 200px;
  --grotto-table-background-color: transparent;
  --grotto-table-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-table-border-radius: 0rem;
  --grotto-table-border-style: separate;
  --grotto-table-border-width: var(--grotto-global-border-width, 1px);
  --grotto-table-cell-width: fit-content;
  --grotto-table-cell-width-reading: wrap;
  --grotto-table-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-tag-background-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-tag-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-tag-border-radius: 0rem;
  --grotto-tag-border-width: 1.5px;
  --grotto-tag-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-tag-padding-x: 0.4rem;
  --grotto-tag-padding-y: 0.1rem;
  --grotto-tag-pointer-events: none;
  --grotto-tag-size: 0.8rem;
  --grotto-tag-weight: 600;
  --grotto-text-color-on-accent: var(--grotto-light-1, hsl(40, 0%, 86%));
  --grotto-titlebar-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-titlebar-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-toggle-background-color: var(--background-primary, hsl(40, 0%, 86%));
  --grotto-toggle-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-toggle-border-width: var(--grotto-global-border-width, 1px);
  --grotto-toggle-enabled-background-color: var(--grotto-accent, hsl(0, 50%, 60%));
  --grotto-tooltip-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-tooltip-border-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-tooltip-border-radius: var(--grotto-global-border-radius, 0rem);
  --grotto-tooltip-border-width: var(--grotto-global-border-width, 1px);
  --grotto-tooltip-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-view-header-background-color: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --grotto-view-header-color: var(--text-normal, hsl(300, 20%, 20%));
  --grotto-view-header-sidebar-toggle-display: none;
  --headerFont: var(--font-text, var(--grotto-font-main, 'Quicksand'));
  --heading-formatting: var(--text-faint, hsl(300, 20%, 32%));
  --highlight: var(--text-highlight-bg, var(--grotto-background-tertiary, hsl(40, 0%, 76%)));
  --icon-color: var(--text-muted, hsl(300, 20%, 32%));
  --icon-color-active: var(--text-accent, hsl(0, 50%, 60%));
  --icon-color-focused: var(--text-normal, hsl(300, 20%, 20%));
  --icon-color-hover: var(--text-muted, hsl(300, 20%, 32%));
  --input-date-separator: var(--text-faint, hsl(300, 20%, 32%));
  --input-placeholder-color: var(--text-faint, hsl(300, 20%, 32%));
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: var(--color-accent-1, hsl(0, 50%, 60%));
  --interactive-accent-hover: var(--color-accent-2, hsl(0, 50%, 60%));
  --interactive-accent-hsl: var(--color-accent-hsl, 0, 50%, 60%);
  --light: var(--background-primary, var(--grotto-light-1, hsl(40, 0%, 86%)));
  --lightgray: var(--background-secondary, var(--grotto-light-0, hsl(40, 0%, 82%)));
  --link-color: var(--text-accent, hsl(0, 50%, 60%));
  --link-color-hover: var(--text-accent-hover, hsl(0, 50%, 60%));
  --link-external-color: var(--text-accent, hsl(0, 50%, 60%));
  --link-external-color-hover: var(--text-accent-hover, hsl(0, 50%, 60%));
  --link-unresolved-color: var(--text-accent, hsl(0, 50%, 60%));
  --list-bullet-radius: var(--grotto-global-border-radius, 0rem);
  --list-marker-color: var(--grotto-list-marker-color, hsl(300, 20%, 20%));
  --list-marker-color-collapsed: var(--grotto-list-marker-color, hsl(300, 20%, 20%));
  --list-marker-color-hover: var(--grotto-list-marker-color, hsl(300, 20%, 20%));
  --menu-background: var(--background-secondary, hsl(40, 0%, 82%));
  --menu-radius: var(--radius-m, 0px);
  --menu-shadow: var(--shadow-s, none);
  --metadata-input-font: var(--font-interface, 'Quicksand');
  --metadata-input-text-color: var(--text-normal, hsl(300, 20%, 20%));
  --metadata-label-font: var(--font-interface, 'Quicksand');
  --metadata-label-text-color: var(--text-muted, hsl(300, 20%, 32%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(300, 20%, 32%));
  --modal-background: var(--background-primary, hsl(40, 0%, 86%));
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(300, 20%, 32%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(300, 20%, 32%));
  --nav-heading-color: var(--text-normal, hsl(300, 20%, 20%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(300, 20%, 32%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(300, 20%, 32%));
  --nav-heading-color-hover: var(--text-normal, hsl(300, 20%, 20%));
  --nav-item-color: var(--text-muted, hsl(300, 20%, 32%));
  --nav-item-color-active: var(--text-normal, hsl(300, 20%, 20%));
  --nav-item-color-highlighted: var(--text-accent, hsl(0, 50%, 60%));
  --nav-item-color-hover: var(--text-normal, hsl(300, 20%, 20%));
  --nav-item-color-selected: var(--text-normal, hsl(300, 20%, 20%));
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, hsl(300, 20%, 32%));
  --nav-tag-color-active: var(--text-muted, hsl(300, 20%, 32%));
  --nav-tag-color-hover: var(--text-muted, hsl(300, 20%, 32%));
  --nav-tag-radius: var(--radius-s, 0px);
  --p-spacing: 0rem;
  --pdf-background: var(--background-primary, hsl(40, 0%, 86%));
  --pdf-page-background: var(--background-primary, hsl(40, 0%, 86%));
  --pdf-shadow: none;
  --pdf-sidebar-background: var(--background-primary, hsl(40, 0%, 86%));
  --pdf-thumbnail-shadow: none;
  --pill-color: var(--text-muted, hsl(300, 20%, 32%));
  --pill-color-hover: var(--text-normal, hsl(300, 20%, 20%));
  --pill-color-remove: var(--text-faint, hsl(300, 20%, 32%));
  --pill-color-remove-hover: var(--text-accent, hsl(0, 50%, 60%));
  --prompt-background: var(--background-primary, hsl(40, 0%, 86%));
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --raised-background: var(--blur-background, none);
  --raised-shadow: var(--shadow-xs, none);
  --ribbon-background: var(--background-secondary, hsl(40, 0%, 82%));
  --ribbon-background-collapsed: var(--background-primary, hsl(40, 0%, 86%));
  --scrollbar-active-thumb-bg: var(--grotto-accent, hsl(0, 50%, 60%));
  --scrollbar-bg: var(--grotto-accent, hsl(0, 50%, 60%));
  --scrollbar-border-width: 3px;
  --scrollbar-radius: var(--grotto-global-border-radius, 0rem);
  --scrollbar-thumb-bg: var(--grotto-accent, hsl(0, 50%, 60%));
  --search-clear-button-color: var(--text-muted, hsl(300, 20%, 32%));
  --search-icon-color: var(--text-muted, hsl(300, 20%, 32%));
  --search-result-background: var(--background-primary, hsl(40, 0%, 86%));
  --secondary: var(--text-accent, var(--color-accent, hsl(0, 50%, 60%)));
  --setting-group-heading-color: var(--text-normal, hsl(300, 20%, 20%));
  --setting-items-background: var(--background-primary-alt, hsl(40, 0%, 86%));
  --setting-items-radius: var(--radius-l, 0px);
  --shadow-edges: none;
  --shadow-l: none;
  --shadow-s: none;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(300, 20%, 32%));
  --shiki-code-background: var(--code-background, hsl(40, 0%, 86%));
  --shiki-code-block-spacing: var(--p-spacing, 0rem);
  --shiki-code-comment: var(--text-faint, hsl(300, 20%, 32%));
  --shiki-code-normal: var(--text-muted, hsl(300, 20%, 32%));
  --shiki-code-punctuation: var(--text-muted, hsl(300, 20%, 32%));
  --shiki-gutter-text-color: var(--text-faint, hsl(300, 20%, 32%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(300, 20%, 32%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(300, 20%, 32%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(300, 20%, 32%));
  --slider-thumb-y: -7px;
  --status-bar-background: var(--background-secondary, hsl(40, 0%, 82%));
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(300, 20%, 32%));
  --suggestion-background: var(--background-primary, hsl(40, 0%, 86%));
  --tab-background-active: var(--background-primary, hsl(40, 0%, 86%));
  --tab-container-background: var(--background-secondary, hsl(40, 0%, 82%));
  --tab-curve: 0rem;
  --tab-radius: var(--radius-s, 0px);
  --tab-switcher-background: var(--background-secondary, hsl(40, 0%, 82%));
  --tab-switcher-preview-background-shadow: none;
  --tab-switcher-preview-radius: var(--radius-xl, 0px);
  --tab-text-color: var(--text-faint, hsl(300, 20%, 32%));
  --tab-text-color-active: var(--text-muted, hsl(300, 20%, 32%));
  --tab-text-color-focused: var(--text-muted, hsl(300, 20%, 32%));
  --tab-text-color-focused-active: var(--text-muted, hsl(300, 20%, 32%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(300, 20%, 20%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(0, 50%, 60%));
  --table-add-button-border-color: var(--table-border-color, hsl(300, 20%, 20%));
  --table-background: var(--grotto-table-background-color, transparent);
  --table-border-color: var(--grotto-table-border-color, hsl(300, 20%, 20%));
  --table-border-width: var(--grotto-table-border-width, 1px);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(0, 50%, 60%));
  --table-drag-handle-color: var(--text-faint, hsl(300, 20%, 32%));
  --table-header-background-hover: var(--table-background, transparent);
  --table-header-border-color: var(--table-border-color, hsl(300, 20%, 20%));
  --table-header-color: var(--text-normal, hsl(300, 20%, 20%));
  --table-selection-border-color: var(--interactive-accent, hsl(0, 50%, 60%));
  --table-text-color: var(--grotto-table-color, hsl(300, 20%, 20%));
  --tag-color: var(--text-accent, hsl(0, 50%, 60%));
  --tag-color-hover: var(--text-accent, hsl(0, 50%, 60%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(0, 50%, 60%)));
  --text-accent: var(--color-accent, hsl(0, 50%, 60%));
  --text-accent-hover: var(--color-accent-2, hsl(0, 50%, 60%));
  --text-error: var(--color-red, hsl(0, 50%, 50%));
  --text-faint: var(--grotto-dark-2, hsl(300, 20%, 32%));
  --text-highlight-bg: var(--grotto-background-tertiary, hsl(40, 0%, 76%));
  --text-muted: var(--grotto-dark-2, hsl(300, 20%, 32%));
  --text-normal: var(--grotto-dark-1, hsl(300, 20%, 20%));
  --text-selection: hsla(var(--color-accent-hsl), 1);
  --text-success: var(--color-green, hsl(100, 50%, 50%));
  --text-warning: var(--color-orange, hsl(30, 50%, 50%));
  --textHighlight: var(--text-highlight-bg, var(--grotto-background-tertiary, hsl(40, 0%, 76%)));
  --titleFont: var(--font-text, var(--grotto-font-main, 'Quicksand'));
  --titlebar-background: var(--background-secondary, hsl(40, 0%, 82%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(40, 0%, 82%));
  --titlebar-text-color: var(--text-muted, hsl(300, 20%, 32%));
  --titlebar-text-color-focused: var(--text-normal, hsl(300, 20%, 20%));
  --touch-radius-l: var(--touch-size-l, 0px);
  --touch-radius-m: var(--touch-size-m, 0px);
  --touch-radius-s: var(--touch-size-s, 0px);
  --touch-radius-xl: var(--touch-size-xl, 0px);
  --touch-radius-xs: var(--touch-size-xs, 0px);
  --touch-radius-xxs: var(--touch-size-xxs, 0px);
  --vault-profile-color: var(--text-normal, hsl(300, 20%, 20%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(300, 20%, 20%));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(40, 0%, 82%));
  background-color: var(--tab-container-background, rgb(209, 209, 209));
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(219, 219, 219));
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(209, 209, 209));
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(40, 0%, 82%));
  background-color: var(--tab-container-background, rgb(209, 209, 209));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  color: rgb(61, 41, 61);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--grotto-bold-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-bold-weight, 800);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--grotto-italic-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-italic-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--grotto-italic-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-italic-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--grotto-italic-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-italic-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--grotto-bold-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-bold-weight, 800);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(194, 194, 194));
  color: var(--text-normal, rgb(61, 41, 61));
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(61, 41, 61) none 0px;
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body del {
  color: rgb(61, 41, 61);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(61, 41, 61) none 0px;
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(61, 41, 61);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(204, 102, 102));
  border-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(98, 65, 98));
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(98, 65, 98) none 0px;
  text-decoration-color: rgb(98, 65, 98);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--grotto-link-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-link-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--grotto-link-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-link-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration-color: rgb(204, 102, 102);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(204, 102, 102));
  font-family: Quicksand;
  font-weight: var(--grotto-link-weight, 500);
  outline: rgb(204, 102, 102) none 0px;
  text-decoration: underline rgba(204, 102, 102, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(204, 102, 102, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: rgb(61, 41, 61);
  font-family: Quicksand;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: rgb(61, 41, 61);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body ol > li {
  color: rgb(61, 41, 61);
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(61, 41, 61);
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(98, 65, 98));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--grotto-blockquote-background-color, rgba(0, 0, 0, 0));
  color: var(--grotto-blockquote-color, rgb(61, 41, 61));
  font-family: Quicksand;
  font-weight: 500;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(61, 41, 61);
  font-family: Quicksand;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(61, 41, 61));
  font-weight: 500;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(61, 41, 61));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--grotto-code-background-color, rgb(194, 194, 194));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-code-color, rgb(61, 41, 61));
  font-family: var(--font-monospace, Quicksand);
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--grotto-code-background-color, rgb(194, 194, 194));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(61, 41, 61);
  font-family: Quicksand;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(40, 0%, 86%));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(219, 219, 219);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 219);
  border-right-width: 0px;
  border-top-color: rgb(219, 219, 219);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(219, 219, 219));
  border-bottom-color: rgb(98, 65, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(98, 65, 98);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(98, 65, 98);
  border-right-width: 0px;
  border-top-color: rgb(98, 65, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(98, 65, 98));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--grotto-embed-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--grotto-embed-color, rgb(61, 41, 61));
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--grotto-embed-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--grotto-embed-color, rgb(61, 41, 61));
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Quicksand;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Quicksand;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(98, 65, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(98, 65, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(61, 41, 61);
  text-decoration-color: rgb(61, 41, 61);
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
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, hsl(300, 20%, 20%));
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-callout-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: hsl(300, 20%, 20%);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-callout-color, rgb(61, 41, 61));
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(61, 41, 61);
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(61, 41, 61));
  font-family: Quicksand;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--grotto-prompt-background-color, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(61, 41, 61);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(61, 41, 61) none 0px;
  text-decoration-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--grotto-accent, rgb(204, 102, 102));
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--text-normal, rgb(61, 41, 61));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--grotto-accent, rgb(204, 102, 102));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--grotto-accent, rgb(204, 102, 102));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--grotto-text-color-on-accent, rgb(219, 219, 219));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(0, 50%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 50%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 50%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 50%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  --pill-color-remove: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  background-color: var(--grotto-properties-color, rgb(61, 41, 61));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--background-primary, rgb(219, 219, 219));
  font-family: Quicksand;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(219, 219, 219);
}

html[saved-theme="light"] body h1 {
  background: rgb(204, 102, 102) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-header-1-background-color, rgb(204, 102, 102));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(61, 41, 61);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(61, 41, 61);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-1-color, rgb(219, 219, 219));
  font-family: var(--h1-font, Quicksand);
  font-size: var(--grotto-header-1-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body h2 {
  background: rgb(61, 41, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--grotto-header-2-background-color, rgb(61, 41, 61));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(61, 41, 61);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(61, 41, 61);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-2-color, rgb(219, 219, 219));
  font-family: var(--h2-font, Quicksand);
  font-size: var(--grotto-header-2-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(61, 41, 61));
  font-family: var(--inline-title-font, Quicksand);
}

html[saved-theme="light"] body h3 {
  background-color: var(--grotto-header-3-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(61, 41, 61);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(61, 41, 61);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(61, 41, 61);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-3-color, rgb(61, 41, 61));
  font-family: var(--h3-font, Quicksand);
  font-size: var(--grotto-header-3-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  background-color: var(--grotto-header-4-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-style: solid;
  border-bottom-width: 6px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--grotto-header-4-color, rgb(61, 41, 61));
  font-family: var(--h4-font, Quicksand);
  font-size: var(--grotto-header-4-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
  text-decoration: underline 2px rgb(219, 219, 219);
}

html[saved-theme="light"] body h5 {
  background-color: var(--grotto-header-5-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-5-color, rgb(61, 41, 61));
  font-family: var(--h5-font, Quicksand);
  font-size: var(--grotto-header-5-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
  text-decoration: underline 2px rgb(204, 102, 102);
}

html[saved-theme="light"] body h6 {
  background-color: var(--grotto-header-6-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--grotto-header-6-color, rgb(61, 41, 61));
  font-family: var(--h6-font, Quicksand);
  font-size: var(--grotto-header-6-size, 24px);
  font-weight: var(--grotto-header-weight, 500);
  line-height: var(--grotto-header-line-height, 32px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 0px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, hsl(300, 20%, 20%));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--grotto-filenav-color, rgb(61, 41, 61));
  font-family: Quicksand;
  font-weight: var(--nav-item-weight, 500);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--grotto-filenav-color, rgb(61, 41, 61));
  font-family: Quicksand;
  font-weight: var(--nav-item-weight, 500);
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

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 500);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--grotto-icon-color, rgb(61, 41, 61));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--grotto-statusbar-background-color, rgb(209, 209, 209));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: var(--grotto-statusbar-color, rgb(61, 41, 61));
  font-family: Quicksand;
}

html[saved-theme="light"] body footer ul li a {
  color: var(--grotto-statusbar-color, rgb(61, 41, 61));
  font-weight: 500;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(61, 41, 61);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--grotto-filenav-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(61, 41, 61);
  font-family: Quicksand;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(61, 41, 61);
  font-family: Quicksand;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--grotto-filenav-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--grotto-icon-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(61, 41, 61);
  stroke: rgb(61, 41, 61);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(98, 65, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(98, 65, 98);
  border-left-width: 0px;
  border-right-color: rgb(98, 65, 98);
  border-right-width: 0px;
  border-top-color: rgb(98, 65, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(98, 65, 98);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(98, 65, 98));
  font-family: Quicksand;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .canvas-node-content {
  color: var(--grotto-embed-color, rgb(61, 41, 61));
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(61, 41, 61));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(219, 219, 219));
  border-color: rgb(61, 41, 61);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(61, 41, 61);
  color: var(--table-header-color, rgb(61, 41, 61));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: var(--text-muted, rgb(98, 65, 98));
  font-family: Quicksand;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(98, 65, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(98, 65, 98);
  border-left-width: 0px;
  border-right-color: rgb(98, 65, 98);
  border-right-width: 0px;
  border-top-color: rgb(98, 65, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(98, 65, 98);
  font-family: Quicksand;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(98, 65, 98);
  border-bottom-width: 0px;
  border-left-color: rgb(98, 65, 98);
  border-left-width: 0px;
  border-right-color: rgb(98, 65, 98);
  border-right-width: 0px;
  border-top-color: rgb(98, 65, 98);
  border-top-width: 0px;
  color: rgb(98, 65, 98);
  font-family: Quicksand;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(98, 65, 98);
  font-family: var(--metadata-label-font, Quicksand);
  font-weight: 500;
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(98, 65, 98);
  font-family: var(--metadata-input-font, Quicksand);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(98, 65, 98);
  font-weight: 500;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(98, 65, 98);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(0, 50%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 50%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 50%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 50%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  --pill-color-remove: var(--tag-color, hsl(0, 50%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0, 50%, 60%));
  background-color: var(--grotto-properties-color, rgb(61, 41, 61));
  border-radius: 0px;
  color: var(--background-primary, rgb(219, 219, 219));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(98, 65, 98);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(219, 219, 219));
  color: var(--text-normal, rgb(61, 41, 61));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(209, 209, 209));
  border-color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(209, 209, 209));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(61, 41, 61);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--grotto-statusbar-background-color, rgb(209, 209, 209));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
  color: var(--text-normal, rgb(61, 41, 61));
  font-family: Quicksand;
}

html[saved-theme="light"] body abbr {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 1px;
  color: var(--text-normal, rgb(61, 41, 61));
  font-family: Quicksand;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(219, 219, 219));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(61, 41, 61));
  font-family: var(--font-monospace, Quicksand);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-width: 0px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 0px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 0px;
  border-top-color: rgb(61, 41, 61);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body summary {
  color: rgb(61, 41, 61);
  font-weight: 500;
}

html[saved-theme="light"] body sup {
  color: rgb(61, 41, 61);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--grotto-tag-background-color, rgb(61, 41, 61));
  border-bottom-color: rgb(61, 41, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(61, 41, 61);
  border-left-width: 1px;
  border-right-color: rgb(61, 41, 61);
  border-right-width: 1px;
  border-top-color: rgb(61, 41, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--grotto-tag-color, rgb(219, 219, 219));
}`,
  },
};
