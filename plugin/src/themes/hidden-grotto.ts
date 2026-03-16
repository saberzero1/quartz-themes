import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hidden-grotto",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 16 !important;
  --accent-l: 60% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: hsla(16, 80%, 60%, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5) !important;
  --background-modifier-error: hsl(0, 50%, 50%) !important;
  --background-modifier-error-hover: hsl(0, 50%, 50%) !important;
  --background-modifier-success: hsl(100, 50%, 50%) !important;
  --background-primary: hsl(240, 18%, 24%) !important;
  --background-primary-alt: hsl(240, 18%, 24%) !important;
  --background-secondary: hsl(240, 18%, 20%) !important;
  --background-secondary-alt: hsl(240, 18%, 20%) !important;
  --bases-cards-background: hsl(240, 18%, 24%) !important;
  --bases-cards-cover-background: hsl(240, 18%, 24%) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(33, 33%, 86%) !important;
  --bases-table-border-color: hsl(33, 33%, 94%) !important;
  --bases-table-cell-background-active: hsl(240, 18%, 24%) !important;
  --bases-table-cell-background-disabled: hsl(240, 18%, 24%) !important;
  --bases-table-cell-background-selected: hsla(16, 80%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(16, 80%, 60%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(240, 18%, 24%) !important;
  --bases-table-header-background: hsl(240, 18%, 24%) !important;
  --bases-table-header-color: hsl(33, 33%, 86%) !important;
  --bases-table-summary-background: hsl(240, 18%, 24%) !important;
  --blockquote-border-color: hsl(16, 80%, 60%) !important;
  --blockquote-color: hsl(33, 33%, 94%) !important;
  --blur-background: none !important;
  --bold-weight: 600 !important;
  --callout-default: hsl(33, 33%, 94%);
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: hsl(240, 18%, 24%) !important;
  --canvas-card-label-color: hsl(33, 33%, 86%) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: hsl(33, 33%, 94%) !important;
  --checkbox-border-color: hsl(33, 33%, 86%) !important;
  --checkbox-border-color-hover: hsl(33, 33%, 86%) !important;
  --checkbox-color: hsl(16, 80%, 60%) !important;
  --checkbox-color-hover: hsl(16, 80%, 60%) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: hsl(33, 33%, 86%) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: hsl(240, 18%, 24%) !important;
  --code-border-color: hsl(33, 33%, 94%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(33, 33%, 86%) !important;
  --code-function: hsl(50, 30%, 45%) !important;
  --code-important: hsl(30, 30%, 60%) !important;
  --code-keyword: hsl(330, 30%, 60%) !important;
  --code-normal: hsl(33, 33%, 94%) !important;
  --code-operator: hsl(0, 30%, 60%) !important;
  --code-property: hsl(170, 30%, 50%) !important;
  --code-punctuation: hsl(33, 33%, 86%) !important;
  --code-string: hsl(120, 30%, 50%) !important;
  --code-tag: hsl(0, 30%, 60%) !important;
  --code-value: hsl(270, 30%, 60%) !important;
  --collapse-icon-color: hsl(33, 33%, 86%) !important;
  --collapse-icon-color-collapsed: hsl(16, 80%, 60%) !important;
  --color-accent: hsl(16, 80%, 60%) !important;
  --color-accent-1: hsl(16, 80%, 60%) !important;
  --color-accent-2: hsl(16, 80%, 60%) !important;
  --color-accent-hsl: 16, 80%, 60% !important;
  --dark: hsl(33, 33%, 94%) !important;
  --darkgray: hsl(33, 33%, 94%) !important;
  --divider-color-hover: hsl(16, 80%, 60%) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid hsl(16, 80%, 60%) !important;
  --file-header-background: hsl(240, 18%, 24%) !important;
  --file-header-background-focused: hsl(240, 18%, 24%) !important;
  --flair-color: hsl(33, 33%, 94%) !important;
  --footnote-id-color: hsl(33, 33%, 86%) !important;
  --footnote-id-color-no-occurrences: hsl(33, 33%, 86%) !important;
  --footnote-radius: 0px !important;
  --graph-node: hsl(33, 33%, 94%) !important;
  --graph-node-attachment: hsl(100, 50%, 50%) !important;
  --graph-node-focused: hsl(16, 80%, 60%) !important;
  --graph-node-tag: hsl(16, 80%, 60%) !important;
  --graph-node-unresolved: hsl(33, 33%, 86%) !important;
  --graph-text: hsl(33, 33%, 94%) !important;
  --gray: hsl(33, 33%, 86%) !important;
  --grotto-accent: hsl(16, 80%, 60%) !important;
  --grotto-accent-h: 16 !important;
  --grotto-accent-l: 60% !important;
  --grotto-accent-s: 80% !important;
  --grotto-background-tertiary: hsl(240, 18%, 36%) !important;
  --grotto-backlink-border-color: hsl(33, 33%, 94%) !important;
  --grotto-bases-background-color: hsl(240, 18%, 24%) !important;
  --grotto-bases-border-color: hsl(33, 33%, 94%) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: hsl(33, 33%, 94%) !important;
  --grotto-bases-header-background-color: hsl(240, 18%, 36%) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-border-color: hsl(16, 80%, 60%) !important;
  --grotto-blockquote-color: hsl(33, 33%, 94%) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: hsl(16, 80%, 60%) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: hsl(16, 80%, 60%) !important;
  --grotto-button-border-color: hsl(33, 33%, 94%) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-day-active-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: hsl(16, 80%, 60%) !important;
  --grotto-calendar-today-border-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-today-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: hsl(16, 80%, 60%) !important;
  --grotto-callout-background-color: hsl(240, 18%, 24%) !important;
  --grotto-callout-border-color: hsl(33, 33%, 94%) !important;
  --grotto-callout-color: hsl(33, 33%, 94%) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: hsl(240, 18%, 24%) !important;
  --grotto-canvas-border-color: hsl(33, 33%, 94%) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: hsl(33, 33%, 94%) !important;
  --grotto-canvas-controls-background-color: hsl(240, 18%, 36%) !important;
  --grotto-canvas-controls-color: hsl(33, 33%, 94%) !important;
  --grotto-canvas-path-color: hsl(33, 33%, 94%) !important;
  --grotto-canvas-path-node-color: hsl(16, 80%, 60%) !important;
  --grotto-checkbox-border-color: hsl(33, 33%, 94%) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: hsl(240, 18%, 36%) !important;
  --grotto-code-border-color: hsl(33, 33%, 94%) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: hsl(33, 33%, 94%) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: hsl(33, 33%, 94%) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: hsl(240, 18%, 20%) !important;
  --grotto-dark-1: hsl(240, 18%, 24%) !important;
  --grotto-dark-2: hsl(240, 18%, 36%) !important;
  --grotto-dragging-background-color: hsl(16, 80%, 60%) !important;
  --grotto-dragging-border-color: hsl(33, 33%, 94%) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: hsl(33, 33%, 94%) !important;
  --grotto-drawer-background-color: hsl(16, 80%, 60%) !important;
  --grotto-drawer-border-color: hsl(33, 33%, 94%) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: hsl(33, 33%, 94%) !important;
  --grotto-dropdown-background-color: hsl(16, 80%, 60%) !important;
  --grotto-dropdown-border-color: hsl(33, 33%, 94%) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-color: hsl(33, 33%, 94%) !important;
  --grotto-dropdown-option-background-color: hsl(240, 18%, 24%) !important;
  --grotto-dropdown-option-color: hsl(33, 33%, 94%) !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: hsl(33, 33%, 94%) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: hsl(33, 33%, 94%) !important;
  --grotto-embed-title-color: hsl(33, 33%, 94%) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: hsl(16, 80%, 60%) !important;
  --grotto-filenav-active-color: hsl(33, 33%, 94%) !important;
  --grotto-filenav-background-color: hsl(240, 18%, 20%) !important;
  --grotto-filenav-border-color: hsl(33, 33%, 94%) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: hsl(240, 18%, 36%) !important;
  --grotto-filenav-color: hsl(33, 33%, 94%) !important;
  --grotto-filenav-tag-background-color: hsl(33, 33%, 94%) !important;
  --grotto-filenav-tag-color: hsl(240, 18%, 20%) !important;
  --grotto-font-weight: 500 !important;
  --grotto-graph-controls-background-color: hsl(240, 18%, 36%) !important;
  --grotto-graph-controls-border-color: hsl(33, 33%, 94%) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: hsl(33, 33%, 94%) !important;
  --grotto-graph-line-color: hsl(33, 33%, 94%) !important;
  --grotto-graph-node-color: hsl(33, 33%, 94%) !important;
  --grotto-graph-sidebar-controls-background-color: hsl(240, 18%, 36%) !important;
  --grotto-graph-sidebar-controls-border-color: hsl(33, 33%, 94%) !important;
  --grotto-graph-sidebar-controls-color: hsl(33, 33%, 94%) !important;
  --grotto-header-1-background-color: hsl(16, 80%, 60%) !important;
  --grotto-header-1-border-color: hsl(33, 33%, 94%) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: hsl(33, 33%, 94%) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: hsl(33, 33%, 94%) !important;
  --grotto-header-2-border-color: hsl(33, 33%, 94%) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: hsl(240, 18%, 24%) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: hsl(33, 33%, 94%) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: hsl(33, 33%, 94%) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: hsl(33, 33%, 94%) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: hsl(33, 33%, 94%) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: hsl(16, 80%, 60%) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: hsl(33, 33%, 94%) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: hsl(33, 33%, 94%) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: hsl(33, 33%, 94%) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: hsl(16, 80%, 60%) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: hsl(33, 33%, 90%) !important;
  --grotto-light-1: hsl(33, 33%, 94%) !important;
  --grotto-light-2: hsl(33, 33%, 86%) !important;
  --grotto-link-color: hsl(16, 80%, 60%) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: hsl(33, 33%, 94%) !important;
  --grotto-menu-background-color: hsl(240, 18%, 20%) !important;
  --grotto-menu-border-color: hsl(33, 33%, 94%) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: hsl(33, 33%, 94%) !important;
  --grotto-mobile-toolbar-background-color: hsl(240, 18%, 36%) !important;
  --grotto-mobile-toolbar-border-color: hsl(33, 33%, 94%) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: hsl(33, 33%, 94%) !important;
  --grotto-modal-background-color: hsl(240, 18%, 24%) !important;
  --grotto-modal-border-color: hsl(33, 33%, 94%) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: hsl(33, 33%, 94%) !important;
  --grotto-navbar-background-color: hsl(240, 18%, 36%) !important;
  --grotto-navbar-border-color: hsl(33, 33%, 94%) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: hsl(33, 33%, 94%) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: hsl(16, 80%, 60%) !important;
  --grotto-notice-border-color: hsl(33, 33%, 94%) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-color: hsl(33, 33%, 94%) !important;
  --grotto-progress-background-color: hsl(33, 33%, 94%) !important;
  --grotto-progress-border-color: hsl(33, 33%, 94%) !important;
  --grotto-progress-color: hsl(16, 80%, 60%) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: hsl(240, 18%, 24%) !important;
  --grotto-prompt-border-color: hsl(33, 33%, 94%) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-color: hsl(33, 33%, 94%) !important;
  --grotto-properties-background-color: hsl(240, 18%, 24%) !important;
  --grotto-properties-border-color: hsl(33, 33%, 94%) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: hsl(33, 33%, 94%) !important;
  --grotto-pull-background-color: hsl(16, 80%, 60%) !important;
  --grotto-pull-border-color: hsl(33, 33%, 94%) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: hsl(33, 33%, 94%) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: hsl(33, 33%, 94%) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: hsl(33, 33%, 94%) !important;
  --grotto-settings-background-color: hsl(240, 18%, 20%) !important;
  --grotto-settings-border-color: hsl(33, 33%, 94%) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: hsl(33, 33%, 94%) !important;
  --grotto-slider-background-color: hsl(33, 33%, 94%) !important;
  --grotto-slider-border-color: hsl(240, 18%, 24%) !important;
  --grotto-statusbar-background-color: hsl(240, 18%, 36%) !important;
  --grotto-statusbar-border-color: hsl(33, 33%, 94%) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: hsl(33, 33%, 94%) !important;
  --grotto-strikethrough-color: hsl(33, 33%, 94%) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: hsl(240, 18%, 36%) !important;
  --grotto-suggestion-border-color: hsl(33, 33%, 94%) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: hsl(33, 33%, 94%) !important;
  --grotto-suggestion-selected-background-color: hsl(16, 80%, 60%) !important;
  --grotto-suggestion-selected-color: hsl(33, 33%, 94%) !important;
  --grotto-tab-switcher-background-color: hsl(240, 18%, 24%) !important;
  --grotto-tab-switcher-border-color: hsl(33, 33%, 94%) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: hsl(33, 33%, 94%) !important;
  --grotto-tab-switcher-menu-background-color: hsl(240, 18%, 36%) !important;
  --grotto-tab-switcher-selected-tab-background-color: hsl(16, 80%, 60%) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: hsl(33, 33%, 94%) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: hsl(33, 33%, 94%) !important;
  --grotto-tag-background-color: hsl(33, 33%, 94%) !important;
  --grotto-tag-border-color: hsl(33, 33%, 94%) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: hsl(240, 18%, 24%) !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: hsl(33, 33%, 94%) !important;
  --grotto-toggle-background-color: hsl(240, 18%, 20%) !important;
  --grotto-toggle-border-color: hsl(33, 33%, 94%) !important;
  --grotto-tooltip-background-color: hsl(240, 18%, 36%) !important;
  --grotto-tooltip-border-color: hsl(33, 33%, 94%) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-color: hsl(33, 33%, 94%) !important;
  --grotto-ui-border-radius: 0rem !important;
  --grotto-ui-border-width: 1px !important;
  --grotto-view-header-background-color: hsl(240, 18%, 36%) !important;
  --grotto-view-header-border-radius: 0rem !important;
  --grotto-view-header-color: hsl(33, 33%, 94%) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --heading-formatting: hsl(33, 33%, 86%) !important;
  --heading-spacing: 0rem !important;
  --highlight: hsl(240, 18%, 36%) !important;
  --icon-color: hsl(33, 33%, 86%) !important;
  --icon-color-active: hsl(16, 80%, 60%) !important;
  --icon-color-focused: hsl(33, 33%, 94%) !important;
  --icon-color-hover: hsl(33, 33%, 86%) !important;
  --input-date-separator: hsl(33, 33%, 86%) !important;
  --input-placeholder-color: hsl(33, 33%, 86%) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(16, 80%, 60%) !important;
  --interactive-accent-hover: hsl(16, 80%, 60%) !important;
  --interactive-accent-hsl: 16, 80%, 60% !important;
  --light: hsl(240, 18%, 24%) !important;
  --lightgray: hsl(240, 18%, 20%) !important;
  --link-color: hsl(16, 80%, 60%) !important;
  --link-color-hover: hsl(16, 80%, 60%) !important;
  --link-external-color: hsl(16, 80%, 60%) !important;
  --link-external-color-hover: hsl(16, 80%, 60%) !important;
  --link-unresolved-color: hsl(16, 80%, 60%) !important;
  --link-unresolved-decoration-color: hsla(16, 80%, 60%, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(33, 33%, 94%) !important;
  --list-marker-color-collapsed: hsl(33, 33%, 94%) !important;
  --list-marker-color-hover: hsl(33, 33%, 94%) !important;
  --menu-background: hsl(240, 18%, 20%) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: hsl(33, 33%, 94%) !important;
  --metadata-label-text-color: hsl(33, 33%, 86%) !important;
  --metadata-label-text-color-hover: hsl(33, 33%, 86%) !important;
  --modal-background: hsl(240, 18%, 24%) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: hsl(33, 33%, 86%) !important;
  --nav-collapse-icon-color-collapsed: hsl(33, 33%, 86%) !important;
  --nav-heading-color: hsl(33, 33%, 94%) !important;
  --nav-heading-color-collapsed: hsl(33, 33%, 86%) !important;
  --nav-heading-color-collapsed-hover: hsl(33, 33%, 86%) !important;
  --nav-heading-color-hover: hsl(33, 33%, 94%) !important;
  --nav-item-background-selected: hsla(16, 80%, 60%, 0.15) !important;
  --nav-item-color: hsl(33, 33%, 86%) !important;
  --nav-item-color-active: hsl(33, 33%, 94%) !important;
  --nav-item-color-highlighted: hsl(16, 80%, 60%) !important;
  --nav-item-color-hover: hsl(33, 33%, 94%) !important;
  --nav-item-color-selected: hsl(33, 33%, 94%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: hsl(33, 33%, 86%) !important;
  --nav-tag-color-active: hsl(33, 33%, 86%) !important;
  --nav-tag-color-hover: hsl(33, 33%, 86%) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: hsl(240, 18%, 24%) !important;
  --pdf-page-background: hsl(240, 18%, 24%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(240, 18%, 24%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: hsl(33, 33%, 86%) !important;
  --pill-color-hover: hsl(33, 33%, 94%) !important;
  --pill-color-remove: hsl(33, 33%, 86%) !important;
  --pill-color-remove-hover: hsl(16, 80%, 60%) !important;
  --prompt-background: hsl(240, 18%, 24%) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: hsl(240, 18%, 20%) !important;
  --ribbon-background-collapsed: hsl(240, 18%, 24%) !important;
  --scrollbar-active-thumb-bg: hsl(16, 80%, 60%) !important;
  --scrollbar-bg: hsl(16, 80%, 60%) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: hsl(16, 80%, 60%) !important;
  --search-clear-button-color: hsl(33, 33%, 86%) !important;
  --search-icon-color: hsl(33, 33%, 86%) !important;
  --search-result-background: hsl(240, 18%, 24%) !important;
  --secondary: hsl(16, 80%, 60%) !important;
  --setting-group-heading-color: hsl(33, 33%, 94%) !important;
  --setting-items-background: hsl(240, 18%, 24%) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: hsl(240, 18%, 20%) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: hsl(33, 33%, 86%) !important;
  --suggestion-background: hsl(240, 18%, 24%) !important;
  --tab-background-active: hsl(240, 18%, 24%) !important;
  --tab-container-background: hsl(240, 18%, 20%) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: hsl(240, 18%, 20%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(240, 18%, 20%), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(16, 80%, 60%) !important;
  --tab-text-color: hsl(33, 33%, 86%) !important;
  --tab-text-color-active: hsl(33, 33%, 86%) !important;
  --tab-text-color-focused: hsl(33, 33%, 86%) !important;
  --tab-text-color-focused-active: hsl(33, 33%, 86%) !important;
  --tab-text-color-focused-active-current: hsl(33, 33%, 94%) !important;
  --tab-text-color-focused-highlighted: hsl(16, 80%, 60%) !important;
  --table-add-button-border-color: hsl(33, 33%, 94%) !important;
  --table-border-color: hsl(33, 33%, 94%) !important;
  --table-drag-handle-background-active: hsl(16, 80%, 60%) !important;
  --table-drag-handle-color: hsl(33, 33%, 86%) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: hsl(33, 33%, 94%) !important;
  --table-header-color: hsl(33, 33%, 94%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(16, 80%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(16, 80%, 60%) !important;
  --table-text-color: hsl(33, 33%, 94%) !important;
  --tag-background: hsla(16, 80%, 60%, 0.1) !important;
  --tag-background-hover: hsla(16, 80%, 60%, 0.2) !important;
  --tag-border-color: hsl(33, 33%, 94%) !important;
  --tag-border-color-hover: hsla(16, 80%, 60%, 0.15) !important;
  --tag-border-width: 1.5px !important;
  --tag-color: hsl(16, 80%, 60%) !important;
  --tag-color-hover: hsl(16, 80%, 60%) !important;
  --tag-padding-x: 0.4rem !important;
  --tag-padding-y: 0.1rem !important;
  --tag-radius: 0rem !important;
  --tertiary: hsl(16, 80%, 60%) !important;
  --text-accent: hsl(16, 80%, 60%) !important;
  --text-accent-hover: hsl(16, 80%, 60%) !important;
  --text-error: hsl(0, 50%, 50%) !important;
  --text-faint: hsl(33, 33%, 86%) !important;
  --text-highlight-bg: hsl(240, 18%, 36%) !important;
  --text-muted: hsl(33, 33%, 86%) !important;
  --text-normal: hsl(33, 33%, 94%) !important;
  --text-selection: hsla(16, 80%, 60%, 1) !important;
  --text-success: hsl(100, 50%, 50%) !important;
  --text-warning: hsl(30, 50%, 50%) !important;
  --textHighlight: hsl(240, 18%, 36%) !important;
  --titlebar-background: hsl(240, 18%, 20%) !important;
  --titlebar-background-focused: hsl(240, 18%, 20%) !important;
  --titlebar-text-color: hsl(33, 33%, 86%) !important;
  --titlebar-text-color-focused: hsl(33, 33%, 94%) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: hsl(33, 33%, 94%) !important;
  --vault-profile-color-hover: hsl(33, 33%, 94%) !important;
  --workspace-background-translucent: transparent !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(42, 42, 60);
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(50, 50, 72);
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 42, 60);
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(42, 42, 60);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(50, 50, 72);
  color: rgb(245, 240, 235);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(75, 75, 108);
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  outline: rgb(245, 240, 235) none 0px;
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  outline: rgb(245, 240, 235) none 0px;
  text-decoration: line-through rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body p {
  color: rgb(231, 220, 208);
  font-family: "??";
  font-weight: 500;
  outline: rgb(231, 220, 208) none 0px;
  text-decoration: rgb(231, 220, 208);
  text-decoration-color: rgb(231, 220, 208);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgba(235, 115, 71, 0.3);
  text-decoration-color: rgba(235, 115, 71, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 240, 235);
  font-weight: 500;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(231, 220, 208);
  text-decoration: rgb(231, 220, 208);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 240, 235);
  font-family: "??";
  margin-top: 0px;
  width: 187.766px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
  font-weight: 500;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(75, 75, 108);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(75, 75, 108);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(149, 138, 80);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(149, 138, 80);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(149, 138, 80);
  border-left-color: rgb(149, 138, 80);
  border-right-color: rgb(149, 138, 80);
  border-top-color: rgb(149, 138, 80);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(75, 75, 108);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(75, 75, 108);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(231, 220, 208);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(231, 220, 208);
  border-right-color: rgb(231, 220, 208);
  border-top-color: rgb(231, 220, 208);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??";
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(231, 220, 208);
  text-decoration: line-through rgb(231, 220, 208);
  text-decoration-color: rgb(231, 220, 208);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  gap: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: hsl(33, 33%, 94%);
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  outline: rgb(245, 240, 235) none 0px;
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  color: rgb(245, 240, 235);
  font-weight: 500;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 240, 235);
  border-left-style: solid;
  border-right-color: rgb(245, 240, 235);
  border-right-style: solid;
  border-top-color: rgb(245, 240, 235);
  border-top-style: solid;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(235, 115, 71);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: "??";
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(50, 50, 72);
}

html[saved-theme="dark"] body h1 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body h2 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body h3 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body h4 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body h5 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body h6 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: hsl(33, 33%, 94%);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(235, 115, 71);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 240, 235);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(75, 75, 108);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(245, 240, 235);
  font-family: "??";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(245, 240, 235);
  stroke: rgb(245, 240, 235);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(231, 220, 208);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(231, 220, 208);
  border-right-color: rgb(231, 220, 208);
  border-top-color: rgb(231, 220, 208);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(231, 220, 208);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(231, 220, 208);
  font-family: "??";
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(231, 220, 208);
  font-family: "??";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(231, 220, 208);
  border-left-color: rgb(231, 220, 208);
  border-right-color: rgb(231, 220, 208);
  border-top-color: rgb(231, 220, 208);
  color: rgb(231, 220, 208);
  font-family: "??";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(75, 75, 108);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 240, 235);
  text-decoration: underline dotted rgb(245, 240, 235);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-left-width: 1px;
  border-right-color: rgb(245, 240, 235);
  border-right-width: 1px;
  border-top-color: rgb(245, 240, 235);
  border-top-width: 1px;
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 240, 235);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 240, 235);
  font-weight: 500;
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 240, 235);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 16 !important;
  --accent-l: 60% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: hsla(16, 80%, 60%, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5) !important;
  --background-modifier-error: hsl(0, 50%, 50%) !important;
  --background-modifier-error-hover: hsl(0, 50%, 50%) !important;
  --background-modifier-success: hsl(100, 50%, 50%) !important;
  --background-primary: hsl(33, 33%, 94%) !important;
  --background-primary-alt: hsl(33, 33%, 94%) !important;
  --background-secondary: hsl(33, 33%, 90%) !important;
  --background-secondary-alt: hsl(33, 33%, 90%) !important;
  --bases-cards-background: hsl(33, 33%, 94%) !important;
  --bases-cards-cover-background: hsl(33, 33%, 94%) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(240, 18%, 36%) !important;
  --bases-table-border-color: hsl(240, 18%, 24%) !important;
  --bases-table-cell-background-active: hsl(33, 33%, 94%) !important;
  --bases-table-cell-background-disabled: hsl(33, 33%, 94%) !important;
  --bases-table-cell-background-selected: hsla(16, 80%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(16, 80%, 60%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(33, 33%, 94%) !important;
  --bases-table-header-background: hsl(33, 33%, 94%) !important;
  --bases-table-header-color: hsl(240, 18%, 36%) !important;
  --bases-table-summary-background: hsl(33, 33%, 94%) !important;
  --blockquote-border-color: hsl(16, 80%, 60%) !important;
  --blockquote-color: hsl(240, 18%, 24%) !important;
  --blur-background: none !important;
  --bold-weight: 600 !important;
  --callout-default: hsl(240, 18%, 24%);
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: hsl(33, 33%, 94%) !important;
  --canvas-card-label-color: hsl(240, 18%, 36%) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: hsl(240, 18%, 24%) !important;
  --checkbox-border-color: hsl(240, 18%, 36%) !important;
  --checkbox-border-color-hover: hsl(240, 18%, 36%) !important;
  --checkbox-color: hsl(16, 80%, 60%) !important;
  --checkbox-color-hover: hsl(16, 80%, 60%) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: hsl(240, 18%, 36%) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: hsl(33, 33%, 94%) !important;
  --code-border-color: hsl(240, 18%, 24%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(240, 18%, 36%) !important;
  --code-function: hsl(50, 30%, 45%) !important;
  --code-important: hsl(30, 30%, 60%) !important;
  --code-keyword: hsl(330, 30%, 60%) !important;
  --code-normal: hsl(240, 18%, 24%) !important;
  --code-operator: hsl(0, 30%, 60%) !important;
  --code-property: hsl(170, 30%, 50%) !important;
  --code-punctuation: hsl(240, 18%, 36%) !important;
  --code-string: hsl(120, 30%, 50%) !important;
  --code-tag: hsl(0, 30%, 60%) !important;
  --code-value: hsl(270, 30%, 60%) !important;
  --collapse-icon-color: hsl(240, 18%, 36%) !important;
  --collapse-icon-color-collapsed: hsl(16, 80%, 60%) !important;
  --color-accent: hsl(16, 80%, 60%) !important;
  --color-accent-1: hsl(16, 80%, 60%) !important;
  --color-accent-2: hsl(16, 80%, 60%) !important;
  --color-accent-hsl: 16, 80%, 60% !important;
  --dark: hsl(240, 18%, 24%) !important;
  --darkgray: hsl(240, 18%, 24%) !important;
  --divider-color-hover: hsl(16, 80%, 60%) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid hsl(16, 80%, 60%) !important;
  --file-header-background: hsl(33, 33%, 94%) !important;
  --file-header-background-focused: hsl(33, 33%, 94%) !important;
  --flair-color: hsl(240, 18%, 24%) !important;
  --footnote-id-color: hsl(240, 18%, 36%) !important;
  --footnote-id-color-no-occurrences: hsl(240, 18%, 36%) !important;
  --footnote-radius: 0px !important;
  --graph-node: hsl(240, 18%, 24%) !important;
  --graph-node-attachment: hsl(100, 50%, 50%) !important;
  --graph-node-focused: hsl(16, 80%, 60%) !important;
  --graph-node-tag: hsl(16, 80%, 60%) !important;
  --graph-node-unresolved: hsl(240, 18%, 36%) !important;
  --graph-text: hsl(240, 18%, 24%) !important;
  --gray: hsl(240, 18%, 36%) !important;
  --grotto-accent: hsl(16, 80%, 60%) !important;
  --grotto-accent-h: 16 !important;
  --grotto-accent-l: 60% !important;
  --grotto-accent-s: 80% !important;
  --grotto-background-tertiary: hsl(33, 33%, 86%) !important;
  --grotto-backlink-border-color: hsl(240, 18%, 24%) !important;
  --grotto-bases-background-color: hsl(33, 33%, 94%) !important;
  --grotto-bases-border-color: hsl(240, 18%, 24%) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: hsl(240, 18%, 24%) !important;
  --grotto-bases-header-background-color: hsl(33, 33%, 86%) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-border-color: hsl(16, 80%, 60%) !important;
  --grotto-blockquote-color: hsl(240, 18%, 24%) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: hsl(16, 80%, 60%) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: hsl(16, 80%, 60%) !important;
  --grotto-button-border-color: hsl(240, 18%, 24%) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-day-active-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: hsl(16, 80%, 60%) !important;
  --grotto-calendar-today-border-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-today-color: hsl(33, 33%, 94%) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: hsl(240, 18%, 24%) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: hsl(16, 80%, 60%) !important;
  --grotto-callout-background-color: hsl(33, 33%, 94%) !important;
  --grotto-callout-border-color: hsl(240, 18%, 24%) !important;
  --grotto-callout-color: hsl(240, 18%, 24%) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: hsl(33, 33%, 94%) !important;
  --grotto-canvas-border-color: hsl(240, 18%, 24%) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: hsl(240, 18%, 24%) !important;
  --grotto-canvas-controls-background-color: hsl(33, 33%, 86%) !important;
  --grotto-canvas-controls-color: hsl(240, 18%, 24%) !important;
  --grotto-canvas-path-color: hsl(240, 18%, 24%) !important;
  --grotto-canvas-path-node-color: hsl(16, 80%, 60%) !important;
  --grotto-checkbox-border-color: hsl(240, 18%, 24%) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: hsl(33, 33%, 86%) !important;
  --grotto-code-border-color: hsl(240, 18%, 24%) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: hsl(240, 18%, 24%) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: hsl(240, 18%, 24%) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: hsl(240, 18%, 20%) !important;
  --grotto-dark-1: hsl(240, 18%, 24%) !important;
  --grotto-dark-2: hsl(240, 18%, 36%) !important;
  --grotto-dragging-background-color: hsl(16, 80%, 60%) !important;
  --grotto-dragging-border-color: hsl(240, 18%, 24%) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: hsl(33, 33%, 94%) !important;
  --grotto-drawer-background-color: hsl(16, 80%, 60%) !important;
  --grotto-drawer-border-color: hsl(240, 18%, 24%) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: hsl(33, 33%, 94%) !important;
  --grotto-dropdown-background-color: hsl(16, 80%, 60%) !important;
  --grotto-dropdown-border-color: hsl(240, 18%, 24%) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-color: hsl(33, 33%, 94%) !important;
  --grotto-dropdown-option-background-color: hsl(33, 33%, 94%) !important;
  --grotto-dropdown-option-color: hsl(240, 18%, 24%) !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: hsl(240, 18%, 24%) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: hsl(240, 18%, 24%) !important;
  --grotto-embed-title-color: hsl(240, 18%, 24%) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: hsl(16, 80%, 60%) !important;
  --grotto-filenav-active-color: hsl(33, 33%, 94%) !important;
  --grotto-filenav-background-color: hsl(33, 33%, 90%) !important;
  --grotto-filenav-border-color: hsl(240, 18%, 24%) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: hsl(33, 33%, 86%) !important;
  --grotto-filenav-color: hsl(240, 18%, 24%) !important;
  --grotto-filenav-tag-background-color: hsl(240, 18%, 24%) !important;
  --grotto-filenav-tag-color: hsl(33, 33%, 90%) !important;
  --grotto-font-weight: 500 !important;
  --grotto-graph-controls-background-color: hsl(33, 33%, 86%) !important;
  --grotto-graph-controls-border-color: hsl(240, 18%, 24%) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: hsl(240, 18%, 24%) !important;
  --grotto-graph-line-color: hsl(240, 18%, 24%) !important;
  --grotto-graph-node-color: hsl(240, 18%, 24%) !important;
  --grotto-graph-sidebar-controls-background-color: hsl(33, 33%, 86%) !important;
  --grotto-graph-sidebar-controls-border-color: hsl(240, 18%, 24%) !important;
  --grotto-graph-sidebar-controls-color: hsl(240, 18%, 24%) !important;
  --grotto-header-1-background-color: hsl(16, 80%, 60%) !important;
  --grotto-header-1-border-color: hsl(240, 18%, 24%) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: hsl(33, 33%, 94%) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: hsl(240, 18%, 24%) !important;
  --grotto-header-2-border-color: hsl(240, 18%, 24%) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: hsl(33, 33%, 94%) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: hsl(240, 18%, 24%) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: hsl(240, 18%, 24%) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: hsl(240, 18%, 24%) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: hsl(240, 18%, 24%) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: hsl(16, 80%, 60%) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: hsl(240, 18%, 24%) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: hsl(240, 18%, 24%) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: hsl(240, 18%, 24%) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: hsl(16, 80%, 60%) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: hsl(33, 33%, 90%) !important;
  --grotto-light-1: hsl(33, 33%, 94%) !important;
  --grotto-light-2: hsl(33, 33%, 86%) !important;
  --grotto-link-color: hsl(16, 80%, 60%) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: hsl(240, 18%, 24%) !important;
  --grotto-menu-background-color: hsl(33, 33%, 90%) !important;
  --grotto-menu-border-color: hsl(240, 18%, 24%) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: hsl(240, 18%, 24%) !important;
  --grotto-mobile-toolbar-background-color: hsl(33, 33%, 86%) !important;
  --grotto-mobile-toolbar-border-color: hsl(240, 18%, 24%) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: hsl(240, 18%, 24%) !important;
  --grotto-modal-background-color: hsl(33, 33%, 94%) !important;
  --grotto-modal-border-color: hsl(240, 18%, 24%) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: hsl(240, 18%, 24%) !important;
  --grotto-navbar-background-color: hsl(33, 33%, 86%) !important;
  --grotto-navbar-border-color: hsl(240, 18%, 24%) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: hsl(240, 18%, 24%) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: hsl(16, 80%, 60%) !important;
  --grotto-notice-border-color: hsl(240, 18%, 24%) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-color: hsl(33, 33%, 94%) !important;
  --grotto-progress-background-color: hsl(240, 18%, 24%) !important;
  --grotto-progress-border-color: hsl(240, 18%, 24%) !important;
  --grotto-progress-color: hsl(16, 80%, 60%) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: hsl(33, 33%, 94%) !important;
  --grotto-prompt-border-color: hsl(240, 18%, 24%) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-color: hsl(240, 18%, 24%) !important;
  --grotto-properties-background-color: hsl(33, 33%, 94%) !important;
  --grotto-properties-border-color: hsl(240, 18%, 24%) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: hsl(240, 18%, 24%) !important;
  --grotto-pull-background-color: hsl(16, 80%, 60%) !important;
  --grotto-pull-border-color: hsl(240, 18%, 24%) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: hsl(33, 33%, 94%) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: hsl(240, 18%, 24%) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: hsl(240, 18%, 24%) !important;
  --grotto-settings-background-color: hsl(33, 33%, 90%) !important;
  --grotto-settings-border-color: hsl(240, 18%, 24%) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: hsl(240, 18%, 24%) !important;
  --grotto-slider-background-color: hsl(240, 18%, 24%) !important;
  --grotto-slider-border-color: hsl(33, 33%, 94%) !important;
  --grotto-statusbar-background-color: hsl(33, 33%, 86%) !important;
  --grotto-statusbar-border-color: hsl(240, 18%, 24%) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: hsl(240, 18%, 24%) !important;
  --grotto-strikethrough-color: hsl(240, 18%, 24%) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: hsl(33, 33%, 86%) !important;
  --grotto-suggestion-border-color: hsl(240, 18%, 24%) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: hsl(240, 18%, 24%) !important;
  --grotto-suggestion-selected-background-color: hsl(16, 80%, 60%) !important;
  --grotto-suggestion-selected-color: hsl(33, 33%, 94%) !important;
  --grotto-tab-switcher-background-color: hsl(33, 33%, 94%) !important;
  --grotto-tab-switcher-border-color: hsl(240, 18%, 24%) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: hsl(240, 18%, 24%) !important;
  --grotto-tab-switcher-menu-background-color: hsl(33, 33%, 86%) !important;
  --grotto-tab-switcher-selected-tab-background-color: hsl(16, 80%, 60%) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: hsl(240, 18%, 24%) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: hsl(240, 18%, 24%) !important;
  --grotto-tag-background-color: hsl(240, 18%, 24%) !important;
  --grotto-tag-border-color: hsl(240, 18%, 24%) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: hsl(33, 33%, 94%) !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: hsl(240, 18%, 24%) !important;
  --grotto-toggle-background-color: hsl(33, 33%, 90%) !important;
  --grotto-toggle-border-color: hsl(240, 18%, 24%) !important;
  --grotto-tooltip-background-color: hsl(33, 33%, 86%) !important;
  --grotto-tooltip-border-color: hsl(240, 18%, 24%) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-color: hsl(240, 18%, 24%) !important;
  --grotto-ui-border-radius: 0rem !important;
  --grotto-ui-border-width: 1px !important;
  --grotto-view-header-background-color: hsl(33, 33%, 86%) !important;
  --grotto-view-header-border-radius: 0rem !important;
  --grotto-view-header-color: hsl(240, 18%, 24%) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --heading-formatting: hsl(240, 18%, 36%) !important;
  --heading-spacing: 0rem !important;
  --highlight: hsl(33, 33%, 86%) !important;
  --icon-color: hsl(240, 18%, 36%) !important;
  --icon-color-active: hsl(16, 80%, 60%) !important;
  --icon-color-focused: hsl(240, 18%, 24%) !important;
  --icon-color-hover: hsl(240, 18%, 36%) !important;
  --input-date-separator: hsl(240, 18%, 36%) !important;
  --input-placeholder-color: hsl(240, 18%, 36%) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(16, 80%, 60%) !important;
  --interactive-accent-hover: hsl(16, 80%, 60%) !important;
  --interactive-accent-hsl: 16, 80%, 60% !important;
  --light: hsl(33, 33%, 94%) !important;
  --lightgray: hsl(33, 33%, 90%) !important;
  --link-color: hsl(16, 80%, 60%) !important;
  --link-color-hover: hsl(16, 80%, 60%) !important;
  --link-external-color: hsl(16, 80%, 60%) !important;
  --link-external-color-hover: hsl(16, 80%, 60%) !important;
  --link-unresolved-color: hsl(16, 80%, 60%) !important;
  --link-unresolved-decoration-color: hsla(16, 80%, 60%, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(240, 18%, 24%) !important;
  --list-marker-color-collapsed: hsl(240, 18%, 24%) !important;
  --list-marker-color-hover: hsl(240, 18%, 24%) !important;
  --menu-background: hsl(33, 33%, 90%) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: hsl(240, 18%, 24%) !important;
  --metadata-label-text-color: hsl(240, 18%, 36%) !important;
  --metadata-label-text-color-hover: hsl(240, 18%, 36%) !important;
  --modal-background: hsl(33, 33%, 94%) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: hsl(240, 18%, 36%) !important;
  --nav-collapse-icon-color-collapsed: hsl(240, 18%, 36%) !important;
  --nav-heading-color: hsl(240, 18%, 24%) !important;
  --nav-heading-color-collapsed: hsl(240, 18%, 36%) !important;
  --nav-heading-color-collapsed-hover: hsl(240, 18%, 36%) !important;
  --nav-heading-color-hover: hsl(240, 18%, 24%) !important;
  --nav-item-background-selected: hsla(16, 80%, 60%, 0.15) !important;
  --nav-item-color: hsl(240, 18%, 36%) !important;
  --nav-item-color-active: hsl(240, 18%, 24%) !important;
  --nav-item-color-highlighted: hsl(16, 80%, 60%) !important;
  --nav-item-color-hover: hsl(240, 18%, 24%) !important;
  --nav-item-color-selected: hsl(240, 18%, 24%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: hsl(240, 18%, 36%) !important;
  --nav-tag-color-active: hsl(240, 18%, 36%) !important;
  --nav-tag-color-hover: hsl(240, 18%, 36%) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: hsl(33, 33%, 94%) !important;
  --pdf-page-background: hsl(33, 33%, 94%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(33, 33%, 94%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: hsl(240, 18%, 36%) !important;
  --pill-color-hover: hsl(240, 18%, 24%) !important;
  --pill-color-remove: hsl(240, 18%, 36%) !important;
  --pill-color-remove-hover: hsl(16, 80%, 60%) !important;
  --prompt-background: hsl(33, 33%, 94%) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: hsl(33, 33%, 90%) !important;
  --ribbon-background-collapsed: hsl(33, 33%, 94%) !important;
  --scrollbar-active-thumb-bg: hsl(16, 80%, 60%) !important;
  --scrollbar-bg: hsl(16, 80%, 60%) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: hsl(16, 80%, 60%) !important;
  --search-clear-button-color: hsl(240, 18%, 36%) !important;
  --search-icon-color: hsl(240, 18%, 36%) !important;
  --search-result-background: hsl(33, 33%, 94%) !important;
  --secondary: hsl(16, 80%, 60%) !important;
  --setting-group-heading-color: hsl(240, 18%, 24%) !important;
  --setting-items-background: hsl(33, 33%, 94%) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: hsl(33, 33%, 90%) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: hsl(240, 18%, 36%) !important;
  --suggestion-background: hsl(33, 33%, 94%) !important;
  --tab-background-active: hsl(33, 33%, 94%) !important;
  --tab-container-background: hsl(33, 33%, 90%) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: hsl(33, 33%, 90%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(33, 33%, 90%), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(16, 80%, 60%) !important;
  --tab-text-color: hsl(240, 18%, 36%) !important;
  --tab-text-color-active: hsl(240, 18%, 36%) !important;
  --tab-text-color-focused: hsl(240, 18%, 36%) !important;
  --tab-text-color-focused-active: hsl(240, 18%, 36%) !important;
  --tab-text-color-focused-active-current: hsl(240, 18%, 24%) !important;
  --tab-text-color-focused-highlighted: hsl(16, 80%, 60%) !important;
  --table-add-button-border-color: hsl(240, 18%, 24%) !important;
  --table-border-color: hsl(240, 18%, 24%) !important;
  --table-drag-handle-background-active: hsl(16, 80%, 60%) !important;
  --table-drag-handle-color: hsl(240, 18%, 36%) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: hsl(240, 18%, 24%) !important;
  --table-header-color: hsl(240, 18%, 24%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(16, 80%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(16, 80%, 60%) !important;
  --table-text-color: hsl(240, 18%, 24%) !important;
  --tag-background: hsla(16, 80%, 60%, 0.1) !important;
  --tag-background-hover: hsla(16, 80%, 60%, 0.2) !important;
  --tag-border-color: hsl(240, 18%, 24%) !important;
  --tag-border-color-hover: hsla(16, 80%, 60%, 0.15) !important;
  --tag-border-width: 1.5px !important;
  --tag-color: hsl(16, 80%, 60%) !important;
  --tag-color-hover: hsl(16, 80%, 60%) !important;
  --tag-padding-x: 0.4rem !important;
  --tag-padding-y: 0.1rem !important;
  --tag-radius: 0rem !important;
  --tertiary: hsl(16, 80%, 60%) !important;
  --text-accent: hsl(16, 80%, 60%) !important;
  --text-accent-hover: hsl(16, 80%, 60%) !important;
  --text-error: hsl(0, 50%, 50%) !important;
  --text-faint: hsl(240, 18%, 36%) !important;
  --text-highlight-bg: hsl(33, 33%, 86%) !important;
  --text-muted: hsl(240, 18%, 36%) !important;
  --text-normal: hsl(240, 18%, 24%) !important;
  --text-selection: hsla(16, 80%, 60%, 1) !important;
  --text-success: hsl(100, 50%, 50%) !important;
  --text-warning: hsl(30, 50%, 50%) !important;
  --textHighlight: hsl(33, 33%, 86%) !important;
  --titlebar-background: hsl(33, 33%, 90%) !important;
  --titlebar-background-focused: hsl(33, 33%, 90%) !important;
  --titlebar-text-color: hsl(240, 18%, 36%) !important;
  --titlebar-text-color-focused: hsl(240, 18%, 24%) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: hsl(240, 18%, 24%) !important;
  --vault-profile-color-hover: hsl(240, 18%, 24%) !important;
  --workspace-background-translucent: transparent !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 230, 221);
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 240, 235);
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 230, 221);
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 230, 221);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 240, 235);
  color: rgb(50, 50, 72);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(231, 220, 208);
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  outline: rgb(50, 50, 72) none 0px;
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body del {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  outline: rgb(50, 50, 72) none 0px;
  text-decoration: line-through rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body p {
  color: rgb(75, 75, 108);
  font-family: "??";
  font-weight: 500;
  outline: rgb(75, 75, 108) none 0px;
  text-decoration: rgb(75, 75, 108);
  text-decoration-color: rgb(75, 75, 108);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgba(235, 115, 71, 0.3);
  text-decoration-color: rgba(235, 115, 71, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body dt {
  color: rgb(50, 50, 72);
  font-weight: 500;
}

html[saved-theme="light"] body ol > li {
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body ul > li {
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(75, 75, 108);
  text-decoration: rgb(75, 75, 108);
}

html[saved-theme="light"] body blockquote {
  font-family: "??";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body table {
  color: rgb(50, 50, 72);
  font-family: "??";
  margin-top: 0px;
  width: 187.766px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
  font-weight: 500;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(231, 220, 208);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(231, 220, 208);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(149, 138, 80);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(149, 138, 80);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(149, 138, 80);
  border-left-color: rgb(149, 138, 80);
  border-right-color: rgb(149, 138, 80);
  border-top-color: rgb(149, 138, 80);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(231, 220, 208);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(231, 220, 208);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body figcaption {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(75, 75, 108);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 75, 108);
  border-right-color: rgb(75, 75, 108);
  border-top-color: rgb(75, 75, 108);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??";
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(75, 75, 108);
  text-decoration: line-through rgb(75, 75, 108);
  text-decoration-color: rgb(75, 75, 108);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  gap: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: hsl(240, 18%, 24%);
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  outline: rgb(50, 50, 72) none 0px;
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 240, 235);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 240, 235);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  color: rgb(245, 240, 235);
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-width: 0px;
  border-left-color: rgb(50, 50, 72);
  border-left-style: solid;
  border-right-color: rgb(50, 50, 72);
  border-right-style: solid;
  border-top-color: rgb(50, 50, 72);
  border-top-style: solid;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(235, 115, 71);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 240, 235);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: "??";
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(245, 240, 235);
}

html[saved-theme="light"] body h1 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="light"] body h2 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body h3 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body h4 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body h5 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body h6 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: hsl(240, 18%, 24%);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(50, 50, 72);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(50, 50, 72);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(50, 50, 72);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(235, 115, 71);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 240, 235);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 50, 72);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(231, 220, 208);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(50, 50, 72);
  font-family: "??";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(50, 50, 72);
  stroke: rgb(50, 50, 72);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(75, 75, 108);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 75, 108);
  border-right-color: rgb(75, 75, 108);
  border-top-color: rgb(75, 75, 108);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(75, 75, 108);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(75, 75, 108);
  font-family: "??";
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body .metadata {
  color: rgb(75, 75, 108);
  font-family: "??";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(75, 75, 108);
  border-left-color: rgb(75, 75, 108);
  border-right-color: rgb(75, 75, 108);
  border-top-color: rgb(75, 75, 108);
  color: rgb(75, 75, 108);
  font-family: "??";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(231, 220, 208);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body abbr {
  color: rgb(50, 50, 72);
  text-decoration: underline dotted rgb(50, 50, 72);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-left-width: 1px;
  border-right-color: rgb(50, 50, 72);
  border-right-width: 1px;
  border-top-color: rgb(50, 50, 72);
  border-top-width: 1px;
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 50, 72);
  font-family: "??";
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

html[saved-theme="light"] body sub {
  color: rgb(50, 50, 72);
}

html[saved-theme="light"] body summary {
  color: rgb(50, 50, 72);
  font-weight: 500;
}

html[saved-theme="light"] body sup {
  color: rgb(50, 50, 72);
}`,
  },
};
