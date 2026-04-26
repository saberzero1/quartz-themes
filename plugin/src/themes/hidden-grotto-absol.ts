import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hidden-grotto.absol",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 200 !important;
  --accent-l: 60% !important;
  --accent-s: 16% !important;
  --background-modifier-active-hover: hsla(200, 16%, 60%, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5) !important;
  --background-modifier-error: hsl(0, 50%, 50%) !important;
  --background-modifier-error-hover: hsl(0, 50%, 50%) !important;
  --background-modifier-success: hsl(100, 50%, 50%) !important;
  --background-primary: hsl(200, 5%, 18%) !important;
  --background-primary-alt: hsl(200, 5%, 18%) !important;
  --background-secondary: hsl(200, 5%, 12%) !important;
  --background-secondary-alt: hsl(200, 5%, 12%) !important;
  --bases-cards-background: hsl(200, 5%, 18%) !important;
  --bases-cards-cover-background: hsl(200, 5%, 18%) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 80%) !important;
  --bases-table-border-color: hsl(0, 0%, 90%) !important;
  --bases-table-cell-background-active: hsl(200, 5%, 18%) !important;
  --bases-table-cell-background-disabled: hsl(200, 5%, 18%) !important;
  --bases-table-cell-background-selected: hsla(200, 16%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(200, 16%, 60%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(200, 5%, 18%) !important;
  --bases-table-header-background: hsl(200, 5%, 18%) !important;
  --bases-table-header-color: hsl(0, 0%, 80%) !important;
  --bases-table-summary-background: hsl(200, 5%, 18%) !important;
  --blockquote-border-color: hsl(200, 16%, 60%) !important;
  --blur-background: none !important;
  --bodyFont: 'Quicksand' !important;
  --callout-default: hsl(0, 0%, 90%);
  --callout-radius: 0px;
  --canvas-background: hsl(200, 5%, 18%) !important;
  --canvas-card-label-color: hsl(0, 0%, 80%) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: hsl(0, 0%, 90%) !important;
  --checkbox-border-color: hsl(0, 0%, 80%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 80%) !important;
  --checkbox-color: hsl(200, 16%, 60%) !important;
  --checkbox-color-hover: hsl(200, 16%, 60%) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: hsl(0, 0%, 80%) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: hsl(200, 5%, 18%) !important;
  --code-border-color: hsl(0, 0%, 90%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(0, 0%, 80%) !important;
  --code-function: hsl(50, 30%, 45%) !important;
  --code-important: hsl(30, 30%, 60%) !important;
  --code-keyword: hsl(330, 30%, 60%) !important;
  --code-normal: hsl(0, 0%, 90%) !important;
  --code-operator: hsl(0, 30%, 60%) !important;
  --code-property: hsl(170, 30%, 50%) !important;
  --code-punctuation: hsl(0, 0%, 80%) !important;
  --code-string: hsl(120, 30%, 50%) !important;
  --code-tag: hsl(0, 30%, 60%) !important;
  --code-value: hsl(270, 30%, 60%) !important;
  --codeFont: 'Quicksand' !important;
  --collapse-icon-color: hsl(0, 0%, 80%) !important;
  --collapse-icon-color-collapsed: hsl(200, 16%, 60%) !important;
  --color-accent: hsl(200, 16%, 60%) !important;
  --color-accent-1: hsl(200, 16%, 60%) !important;
  --color-accent-2: hsl(200, 16%, 60%) !important;
  --color-accent-hsl: 200, 16%, 60% !important;
  --dark: hsl(0, 0%, 90%) !important;
  --darkgray: hsl(0, 0%, 90%) !important;
  --divider-color-hover: hsl(200, 16%, 60%) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid hsl(200, 16%, 60%) !important;
  --file-header-background: hsl(200, 5%, 18%) !important;
  --file-header-background-focused: hsl(200, 5%, 18%) !important;
  --file-header-font: 'Quicksand' !important;
  --flair-color: hsl(0, 0%, 90%) !important;
  --font-interface: 'Quicksand' !important;
  --font-interface-override: 'Quicksand' !important;
  --font-mermaid: 'Quicksand' !important;
  --font-monospace: 'Quicksand' !important;
  --font-monospace-override: 'Quicksand' !important;
  --font-print: 'Quicksand' !important;
  --font-print-override: 'Quicksand' !important;
  --font-text: 'Quicksand' !important;
  --font-text-override: 'Quicksand' !important;
  --footnote-id-color: hsl(0, 0%, 80%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 80%) !important;
  --footnote-radius: 0px !important;
  --graph-node: hsl(0, 0%, 90%) !important;
  --graph-node-attachment: hsl(100, 50%, 50%) !important;
  --graph-node-focused: hsl(200, 16%, 60%) !important;
  --graph-node-tag: hsl(200, 16%, 60%) !important;
  --graph-node-unresolved: hsl(0, 0%, 80%) !important;
  --graph-text: hsl(0, 0%, 90%) !important;
  --gray: hsl(0, 0%, 80%) !important;
  --grotto-accent: hsl(200, 16%, 60%) !important;
  --grotto-accent-h: 200 !important;
  --grotto-accent-l: 60% !important;
  --grotto-accent-s: 16% !important;
  --grotto-background-tertiary: hsl(200, 5%, 24%) !important;
  --grotto-backlink-border-color: hsl(0, 0%, 90%) !important;
  --grotto-bases-background-color: hsl(200, 5%, 18%) !important;
  --grotto-bases-border-color: hsl(0, 0%, 90%) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: hsl(0, 0%, 90%) !important;
  --grotto-bases-header-background-color: hsl(200, 5%, 24%) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-color: hsl(0, 0%, 90%) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: hsl(200, 16%, 60%) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: hsl(200, 16%, 60%) !important;
  --grotto-button-border-color: hsl(0, 0%, 90%) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-border-width: 1px !important;
  --grotto-button-color: hsl(0, 0%, 90%) !important;
  --grotto-button-outline-width: 1px !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-day-active-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: hsl(200, 16%, 60%) !important;
  --grotto-calendar-today-border-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-today-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: hsl(200, 16%, 60%) !important;
  --grotto-callout-background-color: hsl(200, 5%, 18%) !important;
  --grotto-callout-border-color: hsl(0, 0%, 90%) !important;
  --grotto-callout-color: hsl(0, 0%, 90%) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: hsl(200, 5%, 18%) !important;
  --grotto-canvas-border-color: hsl(0, 0%, 90%) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: hsl(0, 0%, 90%) !important;
  --grotto-canvas-controls-background-color: hsl(200, 5%, 24%) !important;
  --grotto-canvas-controls-color: hsl(0, 0%, 90%) !important;
  --grotto-canvas-path-color: hsl(0, 0%, 90%) !important;
  --grotto-canvas-path-node-color: hsl(200, 16%, 60%) !important;
  --grotto-checkbox-border-color: hsl(0, 0%, 90%) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: hsl(200, 5%, 24%) !important;
  --grotto-code-border-color: hsl(0, 0%, 90%) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: hsl(0, 0%, 90%) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: hsl(0, 0%, 90%) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: hsl(200, 5%, 12%) !important;
  --grotto-dark-1: hsl(200, 5%, 18%) !important;
  --grotto-dark-2: hsl(200, 5%, 24%) !important;
  --grotto-dragging-background-color: hsl(200, 16%, 60%) !important;
  --grotto-dragging-border-color: hsl(0, 0%, 90%) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: hsl(0, 0%, 90%) !important;
  --grotto-drawer-background-color: hsl(200, 16%, 60%) !important;
  --grotto-drawer-border-color: hsl(0, 0%, 90%) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: hsl(0, 0%, 90%) !important;
  --grotto-dropdown-background-color: hsl(200, 16%, 60%) !important;
  --grotto-dropdown-border-color: hsl(0, 0%, 90%) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-border-width: 1px !important;
  --grotto-dropdown-color: hsl(0, 0%, 90%) !important;
  --grotto-dropdown-option-background-color: hsl(200, 5%, 18%) !important;
  --grotto-dropdown-option-color: hsl(0, 0%, 90%) !important;
  --grotto-dropdown-outline-width: 1px !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: hsl(0, 0%, 90%) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: hsl(0, 0%, 90%) !important;
  --grotto-embed-title-color: hsl(0, 0%, 90%) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: hsl(200, 16%, 60%) !important;
  --grotto-filenav-active-color: hsl(0, 0%, 90%) !important;
  --grotto-filenav-background-color: hsl(200, 5%, 12%) !important;
  --grotto-filenav-border-color: hsl(0, 0%, 90%) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: hsl(200, 5%, 24%) !important;
  --grotto-filenav-color: hsl(0, 0%, 90%) !important;
  --grotto-filenav-tag-background-color: hsl(0, 0%, 90%) !important;
  --grotto-filenav-tag-color: hsl(200, 5%, 12%) !important;
  --grotto-font-main: 'Quicksand' !important;
  --grotto-font-weight: 500 !important;
  --grotto-global-border-radius: 0rem !important;
  --grotto-global-border-width: 1px !important;
  --grotto-graph-controls-background-color: hsl(200, 5%, 24%) !important;
  --grotto-graph-controls-border-color: hsl(0, 0%, 90%) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: hsl(0, 0%, 90%) !important;
  --grotto-graph-line-color: hsl(0, 0%, 90%) !important;
  --grotto-graph-node-color: hsl(0, 0%, 90%) !important;
  --grotto-graph-sidebar-controls-background-color: hsl(200, 5%, 24%) !important;
  --grotto-graph-sidebar-controls-border-color: hsl(0, 0%, 90%) !important;
  --grotto-graph-sidebar-controls-color: hsl(0, 0%, 90%) !important;
  --grotto-header-1-background-color: hsl(200, 16%, 60%) !important;
  --grotto-header-1-border-color: hsl(0, 0%, 90%) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: hsl(0, 0%, 90%) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: hsl(0, 0%, 90%) !important;
  --grotto-header-2-border-color: hsl(0, 0%, 90%) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: hsl(200, 5%, 18%) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: hsl(0, 0%, 90%) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: hsl(0, 0%, 90%) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: hsl(0, 0%, 90%) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: hsl(0, 0%, 90%) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: hsl(200, 16%, 60%) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: hsl(0, 0%, 90%) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: hsl(0, 0%, 90%) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: hsl(0, 0%, 90%) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: hsl(200, 16%, 60%) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: hsl(0, 0%, 84%) !important;
  --grotto-light-1: hsl(0, 0%, 90%) !important;
  --grotto-light-2: hsl(0, 0%, 80%) !important;
  --grotto-link-color: hsl(200, 16%, 60%) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: hsl(0, 0%, 90%) !important;
  --grotto-menu-background-color: hsl(200, 5%, 12%) !important;
  --grotto-menu-border-color: hsl(0, 0%, 90%) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: hsl(0, 0%, 90%) !important;
  --grotto-mobile-toolbar-background-color: hsl(200, 5%, 24%) !important;
  --grotto-mobile-toolbar-border-color: hsl(0, 0%, 90%) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: hsl(0, 0%, 90%) !important;
  --grotto-modal-background-color: hsl(200, 5%, 18%) !important;
  --grotto-modal-border-color: hsl(0, 0%, 90%) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: hsl(0, 0%, 90%) !important;
  --grotto-navbar-background-color: hsl(200, 5%, 24%) !important;
  --grotto-navbar-border-color: hsl(0, 0%, 90%) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: hsl(0, 0%, 90%) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: hsl(200, 16%, 60%) !important;
  --grotto-notice-border-color: hsl(0, 0%, 90%) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-border-width: 1px !important;
  --grotto-notice-color: hsl(0, 0%, 90%) !important;
  --grotto-progress-background-color: hsl(0, 0%, 90%) !important;
  --grotto-progress-border-color: hsl(0, 0%, 90%) !important;
  --grotto-progress-color: hsl(200, 16%, 60%) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: hsl(200, 5%, 18%) !important;
  --grotto-prompt-border-color: hsl(0, 0%, 90%) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-border-width: 1px !important;
  --grotto-prompt-color: hsl(0, 0%, 90%) !important;
  --grotto-properties-background-color: hsl(200, 5%, 18%) !important;
  --grotto-properties-border-color: hsl(0, 0%, 90%) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: hsl(0, 0%, 90%) !important;
  --grotto-pull-background-color: hsl(200, 16%, 60%) !important;
  --grotto-pull-border-color: hsl(0, 0%, 90%) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: hsl(0, 0%, 90%) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: hsl(0, 0%, 90%) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: hsl(0, 0%, 90%) !important;
  --grotto-settings-background-color: hsl(200, 5%, 12%) !important;
  --grotto-settings-border-color: hsl(0, 0%, 90%) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: hsl(0, 0%, 90%) !important;
  --grotto-slider-background-color: hsl(0, 0%, 90%) !important;
  --grotto-slider-border-color: hsl(200, 5%, 18%) !important;
  --grotto-statusbar-background-color: hsl(200, 5%, 12%) !important;
  --grotto-statusbar-border-color: hsl(0, 0%, 90%) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: hsl(0, 0%, 90%) !important;
  --grotto-strikethrough-color: hsl(0, 0%, 90%) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: hsl(200, 5%, 24%) !important;
  --grotto-suggestion-border-color: hsl(0, 0%, 90%) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: hsl(0, 0%, 90%) !important;
  --grotto-suggestion-selected-background-color: hsl(200, 16%, 60%) !important;
  --grotto-suggestion-selected-color: hsl(0, 0%, 90%) !important;
  --grotto-tab-switcher-background-color: hsl(200, 5%, 18%) !important;
  --grotto-tab-switcher-border-color: hsl(0, 0%, 90%) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: hsl(0, 0%, 90%) !important;
  --grotto-tab-switcher-menu-background-color: hsl(200, 5%, 24%) !important;
  --grotto-tab-switcher-selected-tab-background-color: hsl(200, 16%, 60%) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: hsl(0, 0%, 90%) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: hsl(0, 0%, 90%) !important;
  --grotto-tag-background-color: hsl(0, 0%, 90%) !important;
  --grotto-tag-border-color: hsl(0, 0%, 90%) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: hsl(200, 5%, 18%) !important;
  --grotto-tag-padding-x: 0.4rem !important;
  --grotto-tag-padding-y: 0.1rem !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-text-color-on-accent: hsl(0, 0%, 90%) !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: hsl(0, 0%, 90%) !important;
  --grotto-toggle-background-color: hsl(200, 5%, 18%) !important;
  --grotto-toggle-border-color: hsl(0, 0%, 90%) !important;
  --grotto-toggle-border-width: 1px !important;
  --grotto-toggle-enabled-background-color: hsl(200, 16%, 60%) !important;
  --grotto-tooltip-background-color: hsl(200, 5%, 24%) !important;
  --grotto-tooltip-border-color: hsl(0, 0%, 90%) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-border-width: 1px !important;
  --grotto-tooltip-color: hsl(0, 0%, 90%) !important;
  --grotto-view-header-background-color: hsl(200, 5%, 24%) !important;
  --grotto-view-header-color: hsl(0, 0%, 90%) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --headerFont: 'Quicksand' !important;
  --heading-formatting: hsl(0, 0%, 80%) !important;
  --heading-spacing: 0rem !important;
  --highlight: hsl(200, 5%, 24%) !important;
  --icon-color: hsl(0, 0%, 80%) !important;
  --icon-color-active: hsl(200, 16%, 60%) !important;
  --icon-color-focused: hsl(0, 0%, 90%) !important;
  --icon-color-hover: hsl(0, 0%, 80%) !important;
  --input-date-separator: hsl(0, 0%, 80%) !important;
  --input-placeholder-color: hsl(0, 0%, 80%) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(200, 16%, 60%) !important;
  --interactive-accent-hover: hsl(200, 16%, 60%) !important;
  --interactive-accent-hsl: 200, 16%, 60% !important;
  --light: hsl(200, 5%, 18%) !important;
  --lightgray: hsl(200, 5%, 12%) !important;
  --link-color: hsl(200, 16%, 60%) !important;
  --link-color-hover: hsl(200, 16%, 60%) !important;
  --link-external-color: hsl(200, 16%, 60%) !important;
  --link-external-color-hover: hsl(200, 16%, 60%) !important;
  --link-unresolved-color: hsl(200, 16%, 60%) !important;
  --link-unresolved-decoration-color: hsla(200, 16%, 60%, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-marker-color: hsl(0, 0%, 90%) !important;
  --list-marker-color-collapsed: hsl(0, 0%, 90%) !important;
  --list-marker-color-hover: hsl(0, 0%, 90%) !important;
  --menu-background: hsl(200, 5%, 12%) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-font: 'Quicksand' !important;
  --metadata-input-text-color: hsl(0, 0%, 90%) !important;
  --metadata-label-font: 'Quicksand' !important;
  --metadata-label-text-color: hsl(0, 0%, 80%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 80%) !important;
  --modal-background: hsl(200, 5%, 18%) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 80%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 80%) !important;
  --nav-heading-color: hsl(0, 0%, 90%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 80%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 80%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 90%) !important;
  --nav-item-background-selected: hsla(200, 16%, 60%, 0.15) !important;
  --nav-item-color: hsl(0, 0%, 80%) !important;
  --nav-item-color-active: hsl(0, 0%, 90%) !important;
  --nav-item-color-highlighted: hsl(200, 16%, 60%) !important;
  --nav-item-color-hover: hsl(0, 0%, 90%) !important;
  --nav-item-color-selected: hsl(0, 0%, 90%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: hsl(0, 0%, 80%) !important;
  --nav-tag-color-active: hsl(0, 0%, 80%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 80%) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: hsl(200, 5%, 18%) !important;
  --pdf-page-background: hsl(200, 5%, 18%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(200, 5%, 18%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: hsl(0, 0%, 80%) !important;
  --pill-color-hover: hsl(0, 0%, 90%) !important;
  --pill-color-remove: hsl(0, 0%, 80%) !important;
  --pill-color-remove-hover: hsl(200, 16%, 60%) !important;
  --prompt-background: hsl(200, 5%, 18%) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: hsl(200, 5%, 12%) !important;
  --ribbon-background-collapsed: hsl(200, 5%, 18%) !important;
  --scrollbar-active-thumb-bg: hsl(200, 16%, 60%) !important;
  --scrollbar-bg: hsl(200, 16%, 60%) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: hsl(200, 16%, 60%) !important;
  --search-clear-button-color: hsl(0, 0%, 80%) !important;
  --search-icon-color: hsl(0, 0%, 80%) !important;
  --search-result-background: hsl(200, 5%, 18%) !important;
  --secondary: hsl(200, 16%, 60%) !important;
  --setting-group-heading-color: hsl(0, 0%, 90%) !important;
  --setting-items-background: hsl(200, 5%, 18%) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --shiki-active-tab-border-color: hsl(0, 0%, 80%) !important;
  --shiki-code-background: hsl(200, 5%, 18%) !important;
  --shiki-code-block-spacing: 0rem !important;
  --shiki-code-comment: hsl(0, 0%, 80%) !important;
  --shiki-code-normal: hsl(0, 0%, 80%) !important;
  --shiki-code-punctuation: hsl(0, 0%, 80%) !important;
  --shiki-gutter-text-color: hsl(0, 0%, 80%) !important;
  --shiki-gutter-text-color-highlight: hsl(0, 0%, 80%) !important;
  --shiki-highlight-neutral: hsl(0, 0%, 80%) !important;
  --shiki-terminal-dots-color: hsl(0, 0%, 80%) !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: hsl(200, 5%, 12%) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: hsl(0, 0%, 80%) !important;
  --suggestion-background: hsl(200, 5%, 18%) !important;
  --tab-background-active: hsl(200, 5%, 18%) !important;
  --tab-container-background: hsl(200, 5%, 12%) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: hsl(200, 5%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(200, 5%, 12%), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(200, 16%, 60%) !important;
  --tab-text-color: hsl(0, 0%, 80%) !important;
  --tab-text-color-active: hsl(0, 0%, 80%) !important;
  --tab-text-color-focused: hsl(0, 0%, 80%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 80%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 90%) !important;
  --tab-text-color-focused-highlighted: hsl(200, 16%, 60%) !important;
  --table-add-button-border-color: hsl(0, 0%, 90%) !important;
  --table-border-color: hsl(0, 0%, 90%) !important;
  --table-drag-handle-background-active: hsl(200, 16%, 60%) !important;
  --table-drag-handle-color: hsl(0, 0%, 80%) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: hsl(0, 0%, 90%) !important;
  --table-header-color: hsl(0, 0%, 90%) !important;
  --table-selection: hsla(200, 16%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(200, 16%, 60%) !important;
  --table-text-color: hsl(0, 0%, 90%) !important;
  --tag-background: hsla(200, 16%, 60%, 0.1) !important;
  --tag-background-hover: hsla(200, 16%, 60%, 0.2) !important;
  --tag-border-color: hsla(200, 16%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(200, 16%, 60%, 0.15) !important;
  --tag-color: hsl(200, 16%, 60%) !important;
  --tag-color-hover: hsl(200, 16%, 60%) !important;
  --tertiary: hsl(200, 16%, 60%) !important;
  --text-accent: hsl(200, 16%, 60%) !important;
  --text-accent-hover: hsl(200, 16%, 60%) !important;
  --text-error: hsl(0, 50%, 50%) !important;
  --text-faint: hsl(0, 0%, 80%) !important;
  --text-highlight-bg: hsl(200, 5%, 24%) !important;
  --text-muted: hsl(0, 0%, 80%) !important;
  --text-normal: hsl(0, 0%, 90%) !important;
  --text-selection: hsla(200, 16%, 60%, 1) !important;
  --text-success: hsl(100, 50%, 50%) !important;
  --text-warning: hsl(30, 50%, 50%) !important;
  --textHighlight: hsl(200, 5%, 24%) !important;
  --titleFont: 'Quicksand' !important;
  --titlebar-background: hsl(200, 5%, 12%) !important;
  --titlebar-background-focused: hsl(200, 5%, 12%) !important;
  --titlebar-text-color: hsl(0, 0%, 80%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 90%) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: hsl(0, 0%, 90%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 90%) !important;
  --workspace-background-translucent: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 31, 32);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(44, 47, 48);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 31, 32);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 31, 32);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(230, 230, 230);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(58, 62, 64);
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body del {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(230, 230, 230);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(137, 158, 169);
  border-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body p {
  color: rgb(204, 204, 204);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration: underline rgba(137, 158, 169, 0.3);
  text-decoration-color: rgba(137, 158, 169, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body dt {
  color: rgb(230, 230, 230);
  font-weight: 500;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body blockquote {
  font-family: Quicksand;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body table {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  margin-top: 0px;
  width: 187.766px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  font-weight: 500;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(58, 62, 64);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(58, 62, 64);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-top-color: rgb(230, 230, 230);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Quicksand;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Quicksand;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
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
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: hsl(0, 0%, 90%);
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgb(44, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(230, 230, 230);
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
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(137, 158, 169);
  color: rgb(230, 230, 230);
  font-weight: 500;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 230);
  border-left-style: solid;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-top-color: rgb(230, 230, 230);
  border-top-style: solid;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(137, 158, 169);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(137, 158, 169);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(44, 47, 48);
}

html[saved-theme="dark"] body h1 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body h2 {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h3 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h4 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h5 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h6 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: hsl(0, 0%, 90%);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  font-weight: 500;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(230, 230, 230);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(29, 31, 32);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(230, 230, 230);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(230, 230, 230);
  stroke: rgb(230, 230, 230);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(204, 204, 204);
  font-family: Quicksand;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 31, 32);
  border-color: rgb(230, 230, 230);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: rgb(204, 204, 204);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(204, 204, 204);
  font-weight: 500;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(230, 230, 230);
  border-radius: 0px;
  color: rgb(44, 47, 48);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(44, 47, 48);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(29, 31, 32);
  border-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(29, 31, 32);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(230, 230, 230);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 31, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body abbr {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-width: 1px;
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body sub {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body summary {
  color: rgb(230, 230, 230);
  font-weight: 500;
}

html[saved-theme="dark"] body sup {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 200 !important;
  --accent-l: 60% !important;
  --accent-s: 16% !important;
  --background-modifier-active-hover: hsla(200, 16%, 60%, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5) !important;
  --background-modifier-error: hsl(0, 50%, 50%) !important;
  --background-modifier-error-hover: hsl(0, 50%, 50%) !important;
  --background-modifier-success: hsl(100, 50%, 50%) !important;
  --background-primary: hsl(0, 0%, 90%) !important;
  --background-primary-alt: hsl(0, 0%, 90%) !important;
  --background-secondary: hsl(0, 0%, 84%) !important;
  --background-secondary-alt: hsl(0, 0%, 84%) !important;
  --bases-cards-background: hsl(0, 0%, 90%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 90%) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(200, 5%, 24%) !important;
  --bases-table-border-color: hsl(200, 5%, 18%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 90%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 90%) !important;
  --bases-table-cell-background-selected: hsla(200, 16%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(200, 16%, 60%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(0, 0%, 90%) !important;
  --bases-table-header-background: hsl(0, 0%, 90%) !important;
  --bases-table-header-color: hsl(200, 5%, 24%) !important;
  --bases-table-summary-background: hsl(0, 0%, 90%) !important;
  --blockquote-border-color: hsl(200, 16%, 60%) !important;
  --blur-background: none !important;
  --bodyFont: 'Quicksand' !important;
  --callout-default: hsl(200, 5%, 18%);
  --callout-radius: 0px;
  --canvas-background: hsl(0, 0%, 90%) !important;
  --canvas-card-label-color: hsl(200, 5%, 24%) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: hsl(200, 5%, 18%) !important;
  --checkbox-border-color: hsl(200, 5%, 24%) !important;
  --checkbox-border-color-hover: hsl(200, 5%, 24%) !important;
  --checkbox-color: hsl(200, 16%, 60%) !important;
  --checkbox-color-hover: hsl(200, 16%, 60%) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: hsl(200, 5%, 24%) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: hsl(0, 0%, 90%) !important;
  --code-border-color: hsl(200, 5%, 18%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(200, 5%, 24%) !important;
  --code-function: hsl(50, 30%, 45%) !important;
  --code-important: hsl(30, 30%, 60%) !important;
  --code-keyword: hsl(330, 30%, 60%) !important;
  --code-normal: hsl(200, 5%, 18%) !important;
  --code-operator: hsl(0, 30%, 60%) !important;
  --code-property: hsl(170, 30%, 50%) !important;
  --code-punctuation: hsl(200, 5%, 24%) !important;
  --code-string: hsl(120, 30%, 50%) !important;
  --code-tag: hsl(0, 30%, 60%) !important;
  --code-value: hsl(270, 30%, 60%) !important;
  --codeFont: 'Quicksand' !important;
  --collapse-icon-color: hsl(200, 5%, 24%) !important;
  --collapse-icon-color-collapsed: hsl(200, 16%, 60%) !important;
  --color-accent: hsl(200, 16%, 60%) !important;
  --color-accent-1: hsl(200, 16%, 60%) !important;
  --color-accent-2: hsl(200, 16%, 60%) !important;
  --color-accent-hsl: 200, 16%, 60% !important;
  --dark: hsl(200, 5%, 18%) !important;
  --darkgray: hsl(200, 5%, 18%) !important;
  --divider-color-hover: hsl(200, 16%, 60%) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid hsl(200, 16%, 60%) !important;
  --file-header-background: hsl(0, 0%, 90%) !important;
  --file-header-background-focused: hsl(0, 0%, 90%) !important;
  --file-header-font: 'Quicksand' !important;
  --flair-color: hsl(200, 5%, 18%) !important;
  --font-interface: 'Quicksand' !important;
  --font-interface-override: 'Quicksand' !important;
  --font-mermaid: 'Quicksand' !important;
  --font-monospace: 'Quicksand' !important;
  --font-monospace-override: 'Quicksand' !important;
  --font-print: 'Quicksand' !important;
  --font-print-override: 'Quicksand' !important;
  --font-text: 'Quicksand' !important;
  --font-text-override: 'Quicksand' !important;
  --footnote-id-color: hsl(200, 5%, 24%) !important;
  --footnote-id-color-no-occurrences: hsl(200, 5%, 24%) !important;
  --footnote-radius: 0px !important;
  --graph-node: hsl(200, 5%, 18%) !important;
  --graph-node-attachment: hsl(100, 50%, 50%) !important;
  --graph-node-focused: hsl(200, 16%, 60%) !important;
  --graph-node-tag: hsl(200, 16%, 60%) !important;
  --graph-node-unresolved: hsl(200, 5%, 24%) !important;
  --graph-text: hsl(200, 5%, 18%) !important;
  --gray: hsl(200, 5%, 24%) !important;
  --grotto-accent: hsl(200, 16%, 60%) !important;
  --grotto-accent-h: 200 !important;
  --grotto-accent-l: 60% !important;
  --grotto-accent-s: 16% !important;
  --grotto-background-tertiary: hsl(0, 0%, 80%) !important;
  --grotto-backlink-border-color: hsl(200, 5%, 18%) !important;
  --grotto-bases-background-color: hsl(0, 0%, 90%) !important;
  --grotto-bases-border-color: hsl(200, 5%, 18%) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: hsl(200, 5%, 18%) !important;
  --grotto-bases-header-background-color: hsl(0, 0%, 80%) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-color: hsl(200, 5%, 18%) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: hsl(200, 16%, 60%) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: hsl(200, 16%, 60%) !important;
  --grotto-button-border-color: hsl(200, 5%, 18%) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-border-width: 1px !important;
  --grotto-button-color: hsl(0, 0%, 90%) !important;
  --grotto-button-outline-width: 1px !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-day-active-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: hsl(200, 16%, 60%) !important;
  --grotto-calendar-today-border-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-today-color: hsl(0, 0%, 90%) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: hsl(200, 5%, 18%) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: hsl(200, 16%, 60%) !important;
  --grotto-callout-background-color: hsl(0, 0%, 90%) !important;
  --grotto-callout-border-color: hsl(200, 5%, 18%) !important;
  --grotto-callout-color: hsl(200, 5%, 18%) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: hsl(0, 0%, 90%) !important;
  --grotto-canvas-border-color: hsl(200, 5%, 18%) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: hsl(200, 5%, 18%) !important;
  --grotto-canvas-controls-background-color: hsl(0, 0%, 80%) !important;
  --grotto-canvas-controls-color: hsl(200, 5%, 18%) !important;
  --grotto-canvas-path-color: hsl(200, 5%, 18%) !important;
  --grotto-canvas-path-node-color: hsl(200, 16%, 60%) !important;
  --grotto-checkbox-border-color: hsl(200, 5%, 18%) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: hsl(0, 0%, 80%) !important;
  --grotto-code-border-color: hsl(200, 5%, 18%) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: hsl(200, 5%, 18%) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: hsl(200, 5%, 18%) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: hsl(200, 5%, 12%) !important;
  --grotto-dark-1: hsl(200, 5%, 18%) !important;
  --grotto-dark-2: hsl(200, 5%, 24%) !important;
  --grotto-dragging-background-color: hsl(200, 16%, 60%) !important;
  --grotto-dragging-border-color: hsl(200, 5%, 18%) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: hsl(0, 0%, 90%) !important;
  --grotto-drawer-background-color: hsl(200, 16%, 60%) !important;
  --grotto-drawer-border-color: hsl(200, 5%, 18%) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: hsl(0, 0%, 90%) !important;
  --grotto-dropdown-background-color: hsl(200, 16%, 60%) !important;
  --grotto-dropdown-border-color: hsl(200, 5%, 18%) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-border-width: 1px !important;
  --grotto-dropdown-color: hsl(0, 0%, 90%) !important;
  --grotto-dropdown-option-background-color: hsl(0, 0%, 90%) !important;
  --grotto-dropdown-option-color: hsl(200, 5%, 18%) !important;
  --grotto-dropdown-outline-width: 1px !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: hsl(200, 5%, 18%) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: hsl(200, 5%, 18%) !important;
  --grotto-embed-title-color: hsl(200, 5%, 18%) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: hsl(200, 16%, 60%) !important;
  --grotto-filenav-active-color: hsl(0, 0%, 90%) !important;
  --grotto-filenav-background-color: hsl(0, 0%, 84%) !important;
  --grotto-filenav-border-color: hsl(200, 5%, 18%) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: hsl(0, 0%, 80%) !important;
  --grotto-filenav-color: hsl(200, 5%, 18%) !important;
  --grotto-filenav-tag-background-color: hsl(200, 5%, 18%) !important;
  --grotto-filenav-tag-color: hsl(0, 0%, 84%) !important;
  --grotto-font-main: 'Quicksand' !important;
  --grotto-font-weight: 500 !important;
  --grotto-global-border-radius: 0rem !important;
  --grotto-global-border-width: 1px !important;
  --grotto-graph-controls-background-color: hsl(0, 0%, 80%) !important;
  --grotto-graph-controls-border-color: hsl(200, 5%, 18%) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: hsl(200, 5%, 18%) !important;
  --grotto-graph-line-color: hsl(200, 5%, 18%) !important;
  --grotto-graph-node-color: hsl(200, 5%, 18%) !important;
  --grotto-graph-sidebar-controls-background-color: hsl(0, 0%, 80%) !important;
  --grotto-graph-sidebar-controls-border-color: hsl(200, 5%, 18%) !important;
  --grotto-graph-sidebar-controls-color: hsl(200, 5%, 18%) !important;
  --grotto-header-1-background-color: hsl(200, 16%, 60%) !important;
  --grotto-header-1-border-color: hsl(200, 5%, 18%) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: hsl(0, 0%, 90%) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: hsl(200, 5%, 18%) !important;
  --grotto-header-2-border-color: hsl(200, 5%, 18%) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: hsl(0, 0%, 90%) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: hsl(200, 5%, 18%) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: hsl(200, 5%, 18%) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: hsl(200, 5%, 18%) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: hsl(200, 5%, 18%) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: hsl(200, 16%, 60%) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: hsl(200, 5%, 18%) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: hsl(200, 5%, 18%) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: hsl(200, 5%, 18%) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: hsl(200, 16%, 60%) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: hsl(0, 0%, 84%) !important;
  --grotto-light-1: hsl(0, 0%, 90%) !important;
  --grotto-light-2: hsl(0, 0%, 80%) !important;
  --grotto-link-color: hsl(200, 16%, 60%) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: hsl(200, 5%, 18%) !important;
  --grotto-menu-background-color: hsl(0, 0%, 84%) !important;
  --grotto-menu-border-color: hsl(200, 5%, 18%) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: hsl(200, 5%, 18%) !important;
  --grotto-mobile-toolbar-background-color: hsl(0, 0%, 80%) !important;
  --grotto-mobile-toolbar-border-color: hsl(200, 5%, 18%) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: hsl(200, 5%, 18%) !important;
  --grotto-modal-background-color: hsl(0, 0%, 90%) !important;
  --grotto-modal-border-color: hsl(200, 5%, 18%) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: hsl(200, 5%, 18%) !important;
  --grotto-navbar-background-color: hsl(0, 0%, 80%) !important;
  --grotto-navbar-border-color: hsl(200, 5%, 18%) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: hsl(200, 5%, 18%) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: hsl(200, 16%, 60%) !important;
  --grotto-notice-border-color: hsl(200, 5%, 18%) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-border-width: 1px !important;
  --grotto-notice-color: hsl(0, 0%, 90%) !important;
  --grotto-progress-background-color: hsl(200, 5%, 18%) !important;
  --grotto-progress-border-color: hsl(200, 5%, 18%) !important;
  --grotto-progress-color: hsl(200, 16%, 60%) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: hsl(0, 0%, 90%) !important;
  --grotto-prompt-border-color: hsl(200, 5%, 18%) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-border-width: 1px !important;
  --grotto-prompt-color: hsl(200, 5%, 18%) !important;
  --grotto-properties-background-color: hsl(0, 0%, 90%) !important;
  --grotto-properties-border-color: hsl(200, 5%, 18%) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: hsl(200, 5%, 18%) !important;
  --grotto-pull-background-color: hsl(200, 16%, 60%) !important;
  --grotto-pull-border-color: hsl(200, 5%, 18%) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: hsl(0, 0%, 90%) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: hsl(200, 5%, 18%) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: hsl(200, 5%, 18%) !important;
  --grotto-settings-background-color: hsl(0, 0%, 84%) !important;
  --grotto-settings-border-color: hsl(200, 5%, 18%) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: hsl(200, 5%, 18%) !important;
  --grotto-slider-background-color: hsl(200, 5%, 18%) !important;
  --grotto-slider-border-color: hsl(0, 0%, 90%) !important;
  --grotto-statusbar-background-color: hsl(0, 0%, 84%) !important;
  --grotto-statusbar-border-color: hsl(200, 5%, 18%) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: hsl(200, 5%, 18%) !important;
  --grotto-strikethrough-color: hsl(200, 5%, 18%) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: hsl(0, 0%, 80%) !important;
  --grotto-suggestion-border-color: hsl(200, 5%, 18%) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: hsl(200, 5%, 18%) !important;
  --grotto-suggestion-selected-background-color: hsl(200, 16%, 60%) !important;
  --grotto-suggestion-selected-color: hsl(0, 0%, 90%) !important;
  --grotto-tab-switcher-background-color: hsl(0, 0%, 90%) !important;
  --grotto-tab-switcher-border-color: hsl(200, 5%, 18%) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: hsl(200, 5%, 18%) !important;
  --grotto-tab-switcher-menu-background-color: hsl(0, 0%, 80%) !important;
  --grotto-tab-switcher-selected-tab-background-color: hsl(200, 16%, 60%) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: hsl(200, 5%, 18%) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: hsl(200, 5%, 18%) !important;
  --grotto-tag-background-color: hsl(200, 5%, 18%) !important;
  --grotto-tag-border-color: hsl(200, 5%, 18%) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: hsl(0, 0%, 90%) !important;
  --grotto-tag-padding-x: 0.4rem !important;
  --grotto-tag-padding-y: 0.1rem !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-text-color-on-accent: hsl(0, 0%, 90%) !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: hsl(200, 5%, 18%) !important;
  --grotto-toggle-background-color: hsl(0, 0%, 90%) !important;
  --grotto-toggle-border-color: hsl(200, 5%, 18%) !important;
  --grotto-toggle-border-width: 1px !important;
  --grotto-toggle-enabled-background-color: hsl(200, 16%, 60%) !important;
  --grotto-tooltip-background-color: hsl(0, 0%, 80%) !important;
  --grotto-tooltip-border-color: hsl(200, 5%, 18%) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-border-width: 1px !important;
  --grotto-tooltip-color: hsl(200, 5%, 18%) !important;
  --grotto-view-header-background-color: hsl(0, 0%, 80%) !important;
  --grotto-view-header-color: hsl(200, 5%, 18%) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --headerFont: 'Quicksand' !important;
  --heading-formatting: hsl(200, 5%, 24%) !important;
  --heading-spacing: 0rem !important;
  --highlight: hsl(0, 0%, 80%) !important;
  --icon-color: hsl(200, 5%, 24%) !important;
  --icon-color-active: hsl(200, 16%, 60%) !important;
  --icon-color-focused: hsl(200, 5%, 18%) !important;
  --icon-color-hover: hsl(200, 5%, 24%) !important;
  --input-date-separator: hsl(200, 5%, 24%) !important;
  --input-placeholder-color: hsl(200, 5%, 24%) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(200, 16%, 60%) !important;
  --interactive-accent-hover: hsl(200, 16%, 60%) !important;
  --interactive-accent-hsl: 200, 16%, 60% !important;
  --light: hsl(0, 0%, 90%) !important;
  --lightgray: hsl(0, 0%, 84%) !important;
  --link-color: hsl(200, 16%, 60%) !important;
  --link-color-hover: hsl(200, 16%, 60%) !important;
  --link-external-color: hsl(200, 16%, 60%) !important;
  --link-external-color-hover: hsl(200, 16%, 60%) !important;
  --link-unresolved-color: hsl(200, 16%, 60%) !important;
  --link-unresolved-decoration-color: hsla(200, 16%, 60%, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-marker-color: hsl(200, 5%, 18%) !important;
  --list-marker-color-collapsed: hsl(200, 5%, 18%) !important;
  --list-marker-color-hover: hsl(200, 5%, 18%) !important;
  --menu-background: hsl(0, 0%, 84%) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-font: 'Quicksand' !important;
  --metadata-input-text-color: hsl(200, 5%, 18%) !important;
  --metadata-label-font: 'Quicksand' !important;
  --metadata-label-text-color: hsl(200, 5%, 24%) !important;
  --metadata-label-text-color-hover: hsl(200, 5%, 24%) !important;
  --modal-background: hsl(0, 0%, 90%) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: hsl(200, 5%, 24%) !important;
  --nav-collapse-icon-color-collapsed: hsl(200, 5%, 24%) !important;
  --nav-heading-color: hsl(200, 5%, 18%) !important;
  --nav-heading-color-collapsed: hsl(200, 5%, 24%) !important;
  --nav-heading-color-collapsed-hover: hsl(200, 5%, 24%) !important;
  --nav-heading-color-hover: hsl(200, 5%, 18%) !important;
  --nav-item-background-selected: hsla(200, 16%, 60%, 0.15) !important;
  --nav-item-color: hsl(200, 5%, 24%) !important;
  --nav-item-color-active: hsl(200, 5%, 18%) !important;
  --nav-item-color-highlighted: hsl(200, 16%, 60%) !important;
  --nav-item-color-hover: hsl(200, 5%, 18%) !important;
  --nav-item-color-selected: hsl(200, 5%, 18%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: hsl(200, 5%, 24%) !important;
  --nav-tag-color-active: hsl(200, 5%, 24%) !important;
  --nav-tag-color-hover: hsl(200, 5%, 24%) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: hsl(0, 0%, 90%) !important;
  --pdf-page-background: hsl(0, 0%, 90%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(0, 0%, 90%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: hsl(200, 5%, 24%) !important;
  --pill-color-hover: hsl(200, 5%, 18%) !important;
  --pill-color-remove: hsl(200, 5%, 24%) !important;
  --pill-color-remove-hover: hsl(200, 16%, 60%) !important;
  --prompt-background: hsl(0, 0%, 90%) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: hsl(0, 0%, 84%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 90%) !important;
  --scrollbar-active-thumb-bg: hsl(200, 16%, 60%) !important;
  --scrollbar-bg: hsl(200, 16%, 60%) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: hsl(200, 16%, 60%) !important;
  --search-clear-button-color: hsl(200, 5%, 24%) !important;
  --search-icon-color: hsl(200, 5%, 24%) !important;
  --search-result-background: hsl(0, 0%, 90%) !important;
  --secondary: hsl(200, 16%, 60%) !important;
  --setting-group-heading-color: hsl(200, 5%, 18%) !important;
  --setting-items-background: hsl(0, 0%, 90%) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --shiki-active-tab-border-color: hsl(200, 5%, 24%) !important;
  --shiki-code-background: hsl(0, 0%, 90%) !important;
  --shiki-code-block-spacing: 0rem !important;
  --shiki-code-comment: hsl(200, 5%, 24%) !important;
  --shiki-code-normal: hsl(200, 5%, 24%) !important;
  --shiki-code-punctuation: hsl(200, 5%, 24%) !important;
  --shiki-gutter-text-color: hsl(200, 5%, 24%) !important;
  --shiki-gutter-text-color-highlight: hsl(200, 5%, 24%) !important;
  --shiki-highlight-neutral: hsl(200, 5%, 24%) !important;
  --shiki-terminal-dots-color: hsl(200, 5%, 24%) !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: hsl(0, 0%, 84%) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: hsl(200, 5%, 24%) !important;
  --suggestion-background: hsl(0, 0%, 90%) !important;
  --tab-background-active: hsl(0, 0%, 90%) !important;
  --tab-container-background: hsl(0, 0%, 84%) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: hsl(0, 0%, 84%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 84%), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(200, 16%, 60%) !important;
  --tab-text-color: hsl(200, 5%, 24%) !important;
  --tab-text-color-active: hsl(200, 5%, 24%) !important;
  --tab-text-color-focused: hsl(200, 5%, 24%) !important;
  --tab-text-color-focused-active: hsl(200, 5%, 24%) !important;
  --tab-text-color-focused-active-current: hsl(200, 5%, 18%) !important;
  --tab-text-color-focused-highlighted: hsl(200, 16%, 60%) !important;
  --table-add-button-border-color: hsl(200, 5%, 18%) !important;
  --table-border-color: hsl(200, 5%, 18%) !important;
  --table-drag-handle-background-active: hsl(200, 16%, 60%) !important;
  --table-drag-handle-color: hsl(200, 5%, 24%) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: hsl(200, 5%, 18%) !important;
  --table-header-color: hsl(200, 5%, 18%) !important;
  --table-selection: hsla(200, 16%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(200, 16%, 60%) !important;
  --table-text-color: hsl(200, 5%, 18%) !important;
  --tag-background: hsla(200, 16%, 60%, 0.1) !important;
  --tag-background-hover: hsla(200, 16%, 60%, 0.2) !important;
  --tag-border-color: hsla(200, 16%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(200, 16%, 60%, 0.15) !important;
  --tag-color: hsl(200, 16%, 60%) !important;
  --tag-color-hover: hsl(200, 16%, 60%) !important;
  --tertiary: hsl(200, 16%, 60%) !important;
  --text-accent: hsl(200, 16%, 60%) !important;
  --text-accent-hover: hsl(200, 16%, 60%) !important;
  --text-error: hsl(0, 50%, 50%) !important;
  --text-faint: hsl(200, 5%, 24%) !important;
  --text-highlight-bg: hsl(0, 0%, 80%) !important;
  --text-muted: hsl(200, 5%, 24%) !important;
  --text-normal: hsl(200, 5%, 18%) !important;
  --text-selection: hsla(200, 16%, 60%, 1) !important;
  --text-success: hsl(100, 50%, 50%) !important;
  --text-warning: hsl(30, 50%, 50%) !important;
  --textHighlight: hsl(0, 0%, 80%) !important;
  --titleFont: 'Quicksand' !important;
  --titlebar-background: hsl(0, 0%, 84%) !important;
  --titlebar-background-focused: hsl(0, 0%, 84%) !important;
  --titlebar-text-color: hsl(200, 5%, 24%) !important;
  --titlebar-text-color-focused: hsl(200, 5%, 18%) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: hsl(200, 5%, 18%) !important;
  --vault-profile-color-hover: hsl(200, 5%, 18%) !important;
  --workspace-background-translucent: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(214, 214, 214);
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(230, 230, 230);
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(214, 214, 214);
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(214, 214, 214);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(44, 47, 48);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(204, 204, 204);
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(44, 47, 48) none 0px;
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body del {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(44, 47, 48) none 0px;
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(44, 47, 48);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(137, 158, 169);
  border-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body p {
  color: rgb(58, 62, 64);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(58, 62, 64) none 0px;
  text-decoration-color: rgb(58, 62, 64);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration-color: rgb(137, 158, 169);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(137, 158, 169);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(137, 158, 169) none 0px;
  text-decoration: underline rgba(137, 158, 169, 0.3);
  text-decoration-color: rgba(137, 158, 169, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body dt {
  color: rgb(44, 47, 48);
  font-weight: 500;
}

html[saved-theme="light"] body ol > li {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body ul > li {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(58, 62, 64);
}

html[saved-theme="light"] body blockquote {
  font-family: Quicksand;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body table {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  margin-top: 0px;
  width: 187.766px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  font-weight: 500;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(204, 204, 204);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(204, 204, 204);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body figcaption {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(58, 62, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(58, 62, 64);
  border-right-color: rgb(58, 62, 64);
  border-top-color: rgb(58, 62, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-right-style: solid;
  border-top-color: rgb(44, 47, 48);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Quicksand;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Quicksand;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(58, 62, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(58, 62, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(44, 47, 48);
  text-decoration-color: rgb(44, 47, 48);
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
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: hsl(200, 5%, 18%);
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(44, 47, 48);
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
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(44, 47, 48) none 0px;
  text-decoration-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(137, 158, 169);
  color: rgb(230, 230, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-width: 0px;
  border-left-color: rgb(44, 47, 48);
  border-left-style: solid;
  border-right-color: rgb(44, 47, 48);
  border-right-style: solid;
  border-top-color: rgb(44, 47, 48);
  border-top-style: solid;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(137, 158, 169);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(137, 158, 169);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(230, 230, 230);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(230, 230, 230);
}

html[saved-theme="light"] body h1 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body h2 {
  color: rgb(230, 230, 230);
  font-family: Quicksand;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body h3 {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body h4 {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body h5 {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body h6 {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: hsl(200, 5%, 18%);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  font-weight: 500;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(44, 47, 48);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(214, 214, 214);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(44, 47, 48);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(44, 47, 48);
  stroke: rgb(44, 47, 48);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(58, 62, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(58, 62, 64);
  border-right-color: rgb(58, 62, 64);
  border-top-color: rgb(58, 62, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(58, 62, 64);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(58, 62, 64);
  font-family: Quicksand;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(230, 230, 230);
  border-color: rgb(44, 47, 48);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: rgb(58, 62, 64);
  font-family: Quicksand;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(58, 62, 64);
  border-left-color: rgb(58, 62, 64);
  border-right-color: rgb(58, 62, 64);
  border-top-color: rgb(58, 62, 64);
  color: rgb(58, 62, 64);
  font-family: Quicksand;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(58, 62, 64);
  font-weight: 500;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(58, 62, 64);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(44, 47, 48);
  border-radius: 0px;
  color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(58, 62, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(230, 230, 230);
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(214, 214, 214);
  border-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(44, 47, 48);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body abbr {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-width: 1px;
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(44, 47, 48);
  font-family: Quicksand;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(44, 47, 48);
  border-left-color: rgb(44, 47, 48);
  border-right-color: rgb(44, 47, 48);
  border-top-color: rgb(44, 47, 48);
}

html[saved-theme="light"] body sub {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body summary {
  color: rgb(44, 47, 48);
  font-weight: 500;
}

html[saved-theme="light"] body sup {
  color: rgb(44, 47, 48);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(44, 47, 48);
  border-bottom-color: rgb(44, 47, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 47, 48);
  border-left-width: 1px;
  border-right-color: rgb(44, 47, 48);
  border-right-width: 1px;
  border-top-color: rgb(44, 47, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(230, 230, 230);
}`,
  },
};
