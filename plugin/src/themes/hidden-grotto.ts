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
  --background-modifier-active-hover: rgba(235, 115, 71, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-error: rgb(191, 64, 64) !important;
  --background-modifier-error-hover: rgb(191, 64, 64) !important;
  --background-modifier-success: rgb(106, 191, 64) !important;
  --background-primary: rgb(50, 50, 72) !important;
  --background-primary-alt: rgb(50, 50, 72) !important;
  --background-secondary: rgb(42, 42, 60) !important;
  --background-secondary-alt: rgb(42, 42, 60) !important;
  --bases-cards-background: rgb(50, 50, 72) !important;
  --bases-cards-cover-background: rgb(50, 50, 72) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: rgb(231, 220, 208) !important;
  --bases-table-border-color: rgb(245, 240, 235) !important;
  --bases-table-cell-background-active: rgb(50, 50, 72) !important;
  --bases-table-cell-background-disabled: rgb(50, 50, 72) !important;
  --bases-table-cell-background-selected: rgba(235, 115, 71, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 115, 71) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: rgb(50, 50, 72) !important;
  --bases-table-header-background: rgb(50, 50, 72) !important;
  --bases-table-header-color: rgb(231, 220, 208) !important;
  --bases-table-summary-background: rgb(50, 50, 72) !important;
  --blockquote-border-color: rgb(235, 115, 71) !important;
  --blockquote-color: rgb(245, 240, 235) !important;
  --blur-background: none !important;
  --bodyFont: '??' !important;
  --bold-weight: 600 !important;
  --callout-default: rgb(245, 240, 235);
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: rgb(50, 50, 72) !important;
  --canvas-card-label-color: rgb(231, 220, 208) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: rgb(245, 240, 235) !important;
  --checkbox-border-color: rgb(231, 220, 208) !important;
  --checkbox-border-color-hover: rgb(231, 220, 208) !important;
  --checkbox-color: rgb(235, 115, 71) !important;
  --checkbox-color-hover: rgb(235, 115, 71) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: rgb(231, 220, 208) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: rgb(50, 50, 72) !important;
  --code-border-color: rgb(245, 240, 235) !important;
  --code-border-width: 1px !important;
  --code-comment: rgb(231, 220, 208) !important;
  --code-function: rgb(149, 138, 80) !important;
  --code-important: rgb(184, 153, 122) !important;
  --code-keyword: rgb(184, 122, 153) !important;
  --code-normal: rgb(245, 240, 235) !important;
  --code-operator: rgb(184, 122, 122) !important;
  --code-property: rgb(89, 166, 153) !important;
  --code-punctuation: rgb(231, 220, 208) !important;
  --code-string: rgb(89, 166, 89) !important;
  --code-tag: rgb(184, 122, 122) !important;
  --code-value: rgb(153, 122, 184) !important;
  --codeFont: '??' !important;
  --collapse-icon-color: rgb(231, 220, 208) !important;
  --collapse-icon-color-collapsed: rgb(235, 115, 71) !important;
  --color-accent: rgb(235, 115, 71) !important;
  --color-accent-1: rgb(235, 115, 71) !important;
  --color-accent-2: rgb(235, 115, 71) !important;
  --color-accent-hsl: 16, 80%, 60% !important;
  --dark: rgb(245, 240, 235) !important;
  --darkgray: rgb(245, 240, 235) !important;
  --divider-color-hover: rgb(235, 115, 71) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid rgb(235, 115, 71) !important;
  --file-header-background: rgb(50, 50, 72) !important;
  --file-header-background-focused: rgb(50, 50, 72) !important;
  --file-header-font: '??' !important;
  --flair-color: rgb(245, 240, 235) !important;
  --font-interface: '??' !important;
  --font-mermaid: '??' !important;
  --font-monospace: '??' !important;
  --font-print: '??' !important;
  --font-text: '??' !important;
  --footnote-id-color: rgb(231, 220, 208) !important;
  --footnote-id-color-no-occurrences: rgb(231, 220, 208) !important;
  --footnote-radius: 0px !important;
  --graph-node: rgb(245, 240, 235) !important;
  --graph-node-attachment: rgb(106, 191, 64) !important;
  --graph-node-focused: rgb(235, 115, 71) !important;
  --graph-node-tag: rgb(235, 115, 71) !important;
  --graph-node-unresolved: rgb(231, 220, 208) !important;
  --graph-text: rgb(245, 240, 235) !important;
  --gray: rgb(231, 220, 208) !important;
  --grotto-accent: rgb(235, 115, 71) !important;
  --grotto-accent-h: 16 !important;
  --grotto-accent-l: 60% !important;
  --grotto-accent-s: 80% !important;
  --grotto-background-tertiary: rgb(75, 75, 108) !important;
  --grotto-backlink-border-color: rgb(245, 240, 235) !important;
  --grotto-bases-background-color: rgb(50, 50, 72) !important;
  --grotto-bases-border-color: rgb(245, 240, 235) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: rgb(245, 240, 235) !important;
  --grotto-bases-header-background-color: rgb(75, 75, 108) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-border-color: rgb(235, 115, 71) !important;
  --grotto-blockquote-color: rgb(245, 240, 235) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: rgb(235, 115, 71) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: rgb(235, 115, 71) !important;
  --grotto-button-border-color: rgb(245, 240, 235) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-color: rgb(245, 240, 235) !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: rgb(245, 240, 235) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: rgb(245, 240, 235) !important;
  --grotto-calendar-day-active-color: rgb(245, 240, 235) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: rgb(245, 240, 235) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: rgb(245, 240, 235) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: rgb(245, 240, 235) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: rgb(245, 240, 235) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: rgb(235, 115, 71) !important;
  --grotto-calendar-today-border-color: rgb(245, 240, 235) !important;
  --grotto-calendar-today-color: rgb(245, 240, 235) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: rgb(245, 240, 235) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: rgb(235, 115, 71) !important;
  --grotto-callout-background-color: rgb(50, 50, 72) !important;
  --grotto-callout-border-color: rgb(245, 240, 235) !important;
  --grotto-callout-color: rgb(245, 240, 235) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: rgb(50, 50, 72) !important;
  --grotto-canvas-border-color: rgb(245, 240, 235) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: rgb(245, 240, 235) !important;
  --grotto-canvas-controls-background-color: rgb(75, 75, 108) !important;
  --grotto-canvas-controls-color: rgb(245, 240, 235) !important;
  --grotto-canvas-path-color: rgb(245, 240, 235) !important;
  --grotto-canvas-path-node-color: rgb(235, 115, 71) !important;
  --grotto-checkbox-border-color: rgb(245, 240, 235) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: rgb(75, 75, 108) !important;
  --grotto-code-border-color: rgb(245, 240, 235) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: rgb(245, 240, 235) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: rgb(245, 240, 235) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: rgb(42, 42, 60) !important;
  --grotto-dark-1: rgb(50, 50, 72) !important;
  --grotto-dark-2: rgb(75, 75, 108) !important;
  --grotto-dragging-background-color: rgb(235, 115, 71) !important;
  --grotto-dragging-border-color: rgb(245, 240, 235) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: rgb(245, 240, 235) !important;
  --grotto-drawer-background-color: rgb(235, 115, 71) !important;
  --grotto-drawer-border-color: rgb(245, 240, 235) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: rgb(245, 240, 235) !important;
  --grotto-dropdown-background-color: rgb(235, 115, 71) !important;
  --grotto-dropdown-border-color: rgb(245, 240, 235) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-color: rgb(245, 240, 235) !important;
  --grotto-dropdown-option-background-color: rgb(50, 50, 72) !important;
  --grotto-dropdown-option-color: rgb(245, 240, 235) !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: rgb(245, 240, 235) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: rgb(245, 240, 235) !important;
  --grotto-embed-title-color: rgb(245, 240, 235) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: rgb(235, 115, 71) !important;
  --grotto-filenav-active-color: rgb(245, 240, 235) !important;
  --grotto-filenav-background-color: rgb(42, 42, 60) !important;
  --grotto-filenav-border-color: rgb(245, 240, 235) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: rgb(75, 75, 108) !important;
  --grotto-filenav-color: rgb(245, 240, 235) !important;
  --grotto-filenav-tag-background-color: rgb(245, 240, 235) !important;
  --grotto-filenav-tag-color: rgb(42, 42, 60) !important;
  --grotto-font-weight: 500 !important;
  --grotto-graph-controls-background-color: rgb(75, 75, 108) !important;
  --grotto-graph-controls-border-color: rgb(245, 240, 235) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: rgb(245, 240, 235) !important;
  --grotto-graph-line-color: rgb(245, 240, 235) !important;
  --grotto-graph-node-color: rgb(245, 240, 235) !important;
  --grotto-graph-sidebar-controls-background-color: rgb(75, 75, 108) !important;
  --grotto-graph-sidebar-controls-border-color: rgb(245, 240, 235) !important;
  --grotto-graph-sidebar-controls-color: rgb(245, 240, 235) !important;
  --grotto-header-1-background-color: rgb(235, 115, 71) !important;
  --grotto-header-1-border-color: rgb(245, 240, 235) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: rgb(245, 240, 235) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: rgb(245, 240, 235) !important;
  --grotto-header-2-border-color: rgb(245, 240, 235) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: rgb(50, 50, 72) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: rgb(245, 240, 235) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: rgb(245, 240, 235) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: rgb(245, 240, 235) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: rgb(245, 240, 235) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: rgb(235, 115, 71) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: rgb(245, 240, 235) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: rgb(245, 240, 235) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: rgb(245, 240, 235) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: rgb(235, 115, 71) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: rgb(238, 230, 221) !important;
  --grotto-light-1: rgb(245, 240, 235) !important;
  --grotto-light-2: rgb(231, 220, 208) !important;
  --grotto-link-color: rgb(235, 115, 71) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: rgb(245, 240, 235) !important;
  --grotto-menu-background-color: rgb(42, 42, 60) !important;
  --grotto-menu-border-color: rgb(245, 240, 235) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: rgb(245, 240, 235) !important;
  --grotto-mobile-toolbar-background-color: rgb(75, 75, 108) !important;
  --grotto-mobile-toolbar-border-color: rgb(245, 240, 235) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: rgb(245, 240, 235) !important;
  --grotto-modal-background-color: rgb(50, 50, 72) !important;
  --grotto-modal-border-color: rgb(245, 240, 235) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: rgb(245, 240, 235) !important;
  --grotto-navbar-background-color: rgb(75, 75, 108) !important;
  --grotto-navbar-border-color: rgb(245, 240, 235) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: rgb(245, 240, 235) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: rgb(235, 115, 71) !important;
  --grotto-notice-border-color: rgb(245, 240, 235) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-color: rgb(245, 240, 235) !important;
  --grotto-progress-background-color: rgb(245, 240, 235) !important;
  --grotto-progress-border-color: rgb(245, 240, 235) !important;
  --grotto-progress-color: rgb(235, 115, 71) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: rgb(50, 50, 72) !important;
  --grotto-prompt-border-color: rgb(245, 240, 235) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-color: rgb(245, 240, 235) !important;
  --grotto-properties-background-color: rgb(50, 50, 72) !important;
  --grotto-properties-border-color: rgb(245, 240, 235) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: rgb(245, 240, 235) !important;
  --grotto-pull-background-color: rgb(235, 115, 71) !important;
  --grotto-pull-border-color: rgb(245, 240, 235) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: rgb(245, 240, 235) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: rgb(245, 240, 235) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: rgb(245, 240, 235) !important;
  --grotto-settings-background-color: rgb(42, 42, 60) !important;
  --grotto-settings-border-color: rgb(245, 240, 235) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: rgb(245, 240, 235) !important;
  --grotto-slider-background-color: rgb(245, 240, 235) !important;
  --grotto-slider-border-color: rgb(50, 50, 72) !important;
  --grotto-statusbar-background-color: rgb(75, 75, 108) !important;
  --grotto-statusbar-border-color: rgb(245, 240, 235) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: rgb(245, 240, 235) !important;
  --grotto-strikethrough-color: rgb(245, 240, 235) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: rgb(75, 75, 108) !important;
  --grotto-suggestion-border-color: rgb(245, 240, 235) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: rgb(245, 240, 235) !important;
  --grotto-suggestion-selected-background-color: rgb(235, 115, 71) !important;
  --grotto-suggestion-selected-color: rgb(245, 240, 235) !important;
  --grotto-tab-switcher-background-color: rgb(50, 50, 72) !important;
  --grotto-tab-switcher-border-color: rgb(245, 240, 235) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: rgb(245, 240, 235) !important;
  --grotto-tab-switcher-menu-background-color: rgb(75, 75, 108) !important;
  --grotto-tab-switcher-selected-tab-background-color: rgb(235, 115, 71) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: rgb(245, 240, 235) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: rgb(245, 240, 235) !important;
  --grotto-tag-background-color: rgb(245, 240, 235) !important;
  --grotto-tag-border-color: rgb(245, 240, 235) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: rgb(50, 50, 72) !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: rgb(245, 240, 235) !important;
  --grotto-toggle-background-color: rgb(42, 42, 60) !important;
  --grotto-toggle-border-color: rgb(245, 240, 235) !important;
  --grotto-tooltip-background-color: rgb(75, 75, 108) !important;
  --grotto-tooltip-border-color: rgb(245, 240, 235) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-color: rgb(245, 240, 235) !important;
  --grotto-ui-border-radius: 0rem !important;
  --grotto-ui-border-width: 1px !important;
  --grotto-view-header-background-color: rgb(75, 75, 108) !important;
  --grotto-view-header-border-radius: 0rem !important;
  --grotto-view-header-color: rgb(245, 240, 235) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --headerFont: '??' !important;
  --heading-formatting: rgb(231, 220, 208) !important;
  --heading-spacing: 0rem !important;
  --highlight: rgb(75, 75, 108) !important;
  --icon-color: rgb(231, 220, 208) !important;
  --icon-color-active: rgb(235, 115, 71) !important;
  --icon-color-focused: rgb(245, 240, 235) !important;
  --icon-color-hover: rgb(231, 220, 208) !important;
  --input-date-separator: rgb(231, 220, 208) !important;
  --input-placeholder-color: rgb(231, 220, 208) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: rgb(235, 115, 71) !important;
  --interactive-accent-hover: rgb(235, 115, 71) !important;
  --interactive-accent-hsl: 16, 80%, 60% !important;
  --light: rgb(50, 50, 72) !important;
  --lightgray: rgb(42, 42, 60) !important;
  --link-color: rgb(235, 115, 71) !important;
  --link-color-hover: rgb(235, 115, 71) !important;
  --link-external-color: rgb(235, 115, 71) !important;
  --link-external-color-hover: rgb(235, 115, 71) !important;
  --link-unresolved-color: rgb(235, 115, 71) !important;
  --link-unresolved-decoration-color: rgba(235, 115, 71, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(245, 240, 235) !important;
  --list-marker-color-collapsed: rgb(245, 240, 235) !important;
  --list-marker-color-hover: rgb(245, 240, 235) !important;
  --menu-background: rgb(42, 42, 60) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-font: '??' !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: rgb(245, 240, 235) !important;
  --metadata-label-font: '??' !important;
  --metadata-label-text-color: rgb(231, 220, 208) !important;
  --metadata-label-text-color-hover: rgb(231, 220, 208) !important;
  --modal-background: rgb(50, 50, 72) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: rgb(231, 220, 208) !important;
  --nav-collapse-icon-color-collapsed: rgb(231, 220, 208) !important;
  --nav-heading-color: rgb(245, 240, 235) !important;
  --nav-heading-color-collapsed: rgb(231, 220, 208) !important;
  --nav-heading-color-collapsed-hover: rgb(231, 220, 208) !important;
  --nav-heading-color-hover: rgb(245, 240, 235) !important;
  --nav-item-background-selected: rgba(235, 115, 71, 0.15) !important;
  --nav-item-color: rgb(231, 220, 208) !important;
  --nav-item-color-active: rgb(245, 240, 235) !important;
  --nav-item-color-highlighted: rgb(235, 115, 71) !important;
  --nav-item-color-hover: rgb(245, 240, 235) !important;
  --nav-item-color-selected: rgb(245, 240, 235) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: rgb(231, 220, 208) !important;
  --nav-tag-color-active: rgb(231, 220, 208) !important;
  --nav-tag-color-hover: rgb(231, 220, 208) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: rgb(50, 50, 72) !important;
  --pdf-page-background: rgb(50, 50, 72) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: rgb(50, 50, 72) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: rgb(231, 220, 208) !important;
  --pill-color-hover: rgb(245, 240, 235) !important;
  --pill-color-remove: rgb(231, 220, 208) !important;
  --pill-color-remove-hover: rgb(235, 115, 71) !important;
  --prompt-background: rgb(50, 50, 72) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: rgb(42, 42, 60) !important;
  --ribbon-background-collapsed: rgb(50, 50, 72) !important;
  --scrollbar-active-thumb-bg: rgb(235, 115, 71) !important;
  --scrollbar-bg: rgb(235, 115, 71) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: rgb(235, 115, 71) !important;
  --search-clear-button-color: rgb(231, 220, 208) !important;
  --search-icon-color: rgb(231, 220, 208) !important;
  --search-result-background: rgb(50, 50, 72) !important;
  --secondary: rgb(235, 115, 71) !important;
  --setting-group-heading-color: rgb(245, 240, 235) !important;
  --setting-items-background: rgb(50, 50, 72) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: rgb(42, 42, 60) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: rgb(231, 220, 208) !important;
  --suggestion-background: rgb(50, 50, 72) !important;
  --tab-background-active: rgb(50, 50, 72) !important;
  --tab-container-background: rgb(42, 42, 60) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: rgb(42, 42, 60) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 60), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 115, 71) !important;
  --tab-text-color: rgb(231, 220, 208) !important;
  --tab-text-color-active: rgb(231, 220, 208) !important;
  --tab-text-color-focused: rgb(231, 220, 208) !important;
  --tab-text-color-focused-active: rgb(231, 220, 208) !important;
  --tab-text-color-focused-active-current: rgb(245, 240, 235) !important;
  --tab-text-color-focused-highlighted: rgb(235, 115, 71) !important;
  --table-add-button-border-color: rgb(245, 240, 235) !important;
  --table-border-color: rgb(245, 240, 235) !important;
  --table-drag-handle-background-active: rgb(235, 115, 71) !important;
  --table-drag-handle-color: rgb(231, 220, 208) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: rgb(245, 240, 235) !important;
  --table-header-color: rgb(245, 240, 235) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(235, 115, 71, 0.1) !important;
  --table-selection-border-color: rgb(235, 115, 71) !important;
  --table-text-color: rgb(245, 240, 235) !important;
  --tag-background: rgba(235, 115, 71, 0.1) !important;
  --tag-background-hover: rgba(235, 115, 71, 0.2) !important;
  --tag-border-color: rgb(245, 240, 235) !important;
  --tag-border-color-hover: rgba(235, 115, 71, 0.15) !important;
  --tag-border-width: 1.5px !important;
  --tag-color: rgb(235, 115, 71) !important;
  --tag-color-hover: rgb(235, 115, 71) !important;
  --tag-padding-x: 0.4rem !important;
  --tag-padding-y: 0.1rem !important;
  --tag-radius: 0rem !important;
  --tertiary: rgb(235, 115, 71) !important;
  --text-accent: rgb(235, 115, 71) !important;
  --text-accent-hover: rgb(235, 115, 71) !important;
  --text-error: rgb(191, 64, 64) !important;
  --text-faint: rgb(231, 220, 208) !important;
  --text-highlight-bg: rgb(75, 75, 108) !important;
  --text-muted: rgb(231, 220, 208) !important;
  --text-normal: rgb(245, 240, 235) !important;
  --text-selection: rgb(235, 115, 71) !important;
  --text-success: rgb(106, 191, 64) !important;
  --text-warning: rgb(191, 128, 64) !important;
  --textHighlight: rgb(75, 75, 108) !important;
  --titleFont: '??' !important;
  --titlebar-background: rgb(42, 42, 60) !important;
  --titlebar-background-focused: rgb(42, 42, 60) !important;
  --titlebar-text-color: rgb(231, 220, 208) !important;
  --titlebar-text-color-focused: rgb(245, 240, 235) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: rgb(245, 240, 235) !important;
  --vault-profile-color-hover: rgb(245, 240, 235) !important;
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
  --callout-color: rgb(245, 240, 235);
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
  --callout-color: rgb(245, 240, 235);
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
  --background-modifier-active-hover: rgba(235, 115, 71, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-error: rgb(191, 64, 64) !important;
  --background-modifier-error-hover: rgb(191, 64, 64) !important;
  --background-modifier-success: rgb(106, 191, 64) !important;
  --background-primary: rgb(245, 240, 235) !important;
  --background-primary-alt: rgb(245, 240, 235) !important;
  --background-secondary: rgb(238, 230, 221) !important;
  --background-secondary-alt: rgb(238, 230, 221) !important;
  --bases-cards-background: rgb(245, 240, 235) !important;
  --bases-cards-cover-background: rgb(245, 240, 235) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: rgb(75, 75, 108) !important;
  --bases-table-border-color: rgb(50, 50, 72) !important;
  --bases-table-cell-background-active: rgb(245, 240, 235) !important;
  --bases-table-cell-background-disabled: rgb(245, 240, 235) !important;
  --bases-table-cell-background-selected: rgba(235, 115, 71, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 115, 71) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: rgb(245, 240, 235) !important;
  --bases-table-header-background: rgb(245, 240, 235) !important;
  --bases-table-header-color: rgb(75, 75, 108) !important;
  --bases-table-summary-background: rgb(245, 240, 235) !important;
  --blockquote-border-color: rgb(235, 115, 71) !important;
  --blockquote-color: rgb(50, 50, 72) !important;
  --blur-background: none !important;
  --bodyFont: '??' !important;
  --bold-weight: 600 !important;
  --callout-default: rgb(50, 50, 72);
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: rgb(245, 240, 235) !important;
  --canvas-card-label-color: rgb(75, 75, 108) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: rgb(50, 50, 72) !important;
  --checkbox-border-color: rgb(75, 75, 108) !important;
  --checkbox-border-color-hover: rgb(75, 75, 108) !important;
  --checkbox-color: rgb(235, 115, 71) !important;
  --checkbox-color-hover: rgb(235, 115, 71) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: rgb(75, 75, 108) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: rgb(245, 240, 235) !important;
  --code-border-color: rgb(50, 50, 72) !important;
  --code-border-width: 1px !important;
  --code-comment: rgb(75, 75, 108) !important;
  --code-function: rgb(149, 138, 80) !important;
  --code-important: rgb(184, 153, 122) !important;
  --code-keyword: rgb(184, 122, 153) !important;
  --code-normal: rgb(50, 50, 72) !important;
  --code-operator: rgb(184, 122, 122) !important;
  --code-property: rgb(89, 166, 153) !important;
  --code-punctuation: rgb(75, 75, 108) !important;
  --code-string: rgb(89, 166, 89) !important;
  --code-tag: rgb(184, 122, 122) !important;
  --code-value: rgb(153, 122, 184) !important;
  --codeFont: '??' !important;
  --collapse-icon-color: rgb(75, 75, 108) !important;
  --collapse-icon-color-collapsed: rgb(235, 115, 71) !important;
  --color-accent: rgb(235, 115, 71) !important;
  --color-accent-1: rgb(235, 115, 71) !important;
  --color-accent-2: rgb(235, 115, 71) !important;
  --color-accent-hsl: 16, 80%, 60% !important;
  --dark: rgb(50, 50, 72) !important;
  --darkgray: rgb(50, 50, 72) !important;
  --divider-color-hover: rgb(235, 115, 71) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid rgb(235, 115, 71) !important;
  --file-header-background: rgb(245, 240, 235) !important;
  --file-header-background-focused: rgb(245, 240, 235) !important;
  --file-header-font: '??' !important;
  --flair-color: rgb(50, 50, 72) !important;
  --font-interface: '??' !important;
  --font-mermaid: '??' !important;
  --font-monospace: '??' !important;
  --font-print: '??' !important;
  --font-text: '??' !important;
  --footnote-id-color: rgb(75, 75, 108) !important;
  --footnote-id-color-no-occurrences: rgb(75, 75, 108) !important;
  --footnote-radius: 0px !important;
  --graph-node: rgb(50, 50, 72) !important;
  --graph-node-attachment: rgb(106, 191, 64) !important;
  --graph-node-focused: rgb(235, 115, 71) !important;
  --graph-node-tag: rgb(235, 115, 71) !important;
  --graph-node-unresolved: rgb(75, 75, 108) !important;
  --graph-text: rgb(50, 50, 72) !important;
  --gray: rgb(75, 75, 108) !important;
  --grotto-accent: rgb(235, 115, 71) !important;
  --grotto-accent-h: 16 !important;
  --grotto-accent-l: 60% !important;
  --grotto-accent-s: 80% !important;
  --grotto-background-tertiary: rgb(231, 220, 208) !important;
  --grotto-backlink-border-color: rgb(50, 50, 72) !important;
  --grotto-bases-background-color: rgb(245, 240, 235) !important;
  --grotto-bases-border-color: rgb(50, 50, 72) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: rgb(50, 50, 72) !important;
  --grotto-bases-header-background-color: rgb(231, 220, 208) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-border-color: rgb(235, 115, 71) !important;
  --grotto-blockquote-color: rgb(50, 50, 72) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: rgb(235, 115, 71) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: rgb(235, 115, 71) !important;
  --grotto-button-border-color: rgb(50, 50, 72) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-color: rgb(245, 240, 235) !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: rgb(50, 50, 72) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: rgb(50, 50, 72) !important;
  --grotto-calendar-day-active-color: rgb(50, 50, 72) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: rgb(50, 50, 72) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: rgb(50, 50, 72) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: rgb(50, 50, 72) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: rgb(50, 50, 72) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: rgb(235, 115, 71) !important;
  --grotto-calendar-today-border-color: rgb(50, 50, 72) !important;
  --grotto-calendar-today-color: rgb(245, 240, 235) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: rgb(50, 50, 72) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: rgb(235, 115, 71) !important;
  --grotto-callout-background-color: rgb(245, 240, 235) !important;
  --grotto-callout-border-color: rgb(50, 50, 72) !important;
  --grotto-callout-color: rgb(50, 50, 72) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: rgb(245, 240, 235) !important;
  --grotto-canvas-border-color: rgb(50, 50, 72) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: rgb(50, 50, 72) !important;
  --grotto-canvas-controls-background-color: rgb(231, 220, 208) !important;
  --grotto-canvas-controls-color: rgb(50, 50, 72) !important;
  --grotto-canvas-path-color: rgb(50, 50, 72) !important;
  --grotto-canvas-path-node-color: rgb(235, 115, 71) !important;
  --grotto-checkbox-border-color: rgb(50, 50, 72) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: rgb(231, 220, 208) !important;
  --grotto-code-border-color: rgb(50, 50, 72) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: rgb(50, 50, 72) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: rgb(50, 50, 72) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: rgb(42, 42, 60) !important;
  --grotto-dark-1: rgb(50, 50, 72) !important;
  --grotto-dark-2: rgb(75, 75, 108) !important;
  --grotto-dragging-background-color: rgb(235, 115, 71) !important;
  --grotto-dragging-border-color: rgb(50, 50, 72) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: rgb(245, 240, 235) !important;
  --grotto-drawer-background-color: rgb(235, 115, 71) !important;
  --grotto-drawer-border-color: rgb(50, 50, 72) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: rgb(245, 240, 235) !important;
  --grotto-dropdown-background-color: rgb(235, 115, 71) !important;
  --grotto-dropdown-border-color: rgb(50, 50, 72) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-color: rgb(245, 240, 235) !important;
  --grotto-dropdown-option-background-color: rgb(245, 240, 235) !important;
  --grotto-dropdown-option-color: rgb(50, 50, 72) !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: rgb(50, 50, 72) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: rgb(50, 50, 72) !important;
  --grotto-embed-title-color: rgb(50, 50, 72) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: rgb(235, 115, 71) !important;
  --grotto-filenav-active-color: rgb(245, 240, 235) !important;
  --grotto-filenav-background-color: rgb(238, 230, 221) !important;
  --grotto-filenav-border-color: rgb(50, 50, 72) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: rgb(231, 220, 208) !important;
  --grotto-filenav-color: rgb(50, 50, 72) !important;
  --grotto-filenav-tag-background-color: rgb(50, 50, 72) !important;
  --grotto-filenav-tag-color: rgb(238, 230, 221) !important;
  --grotto-font-weight: 500 !important;
  --grotto-graph-controls-background-color: rgb(231, 220, 208) !important;
  --grotto-graph-controls-border-color: rgb(50, 50, 72) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: rgb(50, 50, 72) !important;
  --grotto-graph-line-color: rgb(50, 50, 72) !important;
  --grotto-graph-node-color: rgb(50, 50, 72) !important;
  --grotto-graph-sidebar-controls-background-color: rgb(231, 220, 208) !important;
  --grotto-graph-sidebar-controls-border-color: rgb(50, 50, 72) !important;
  --grotto-graph-sidebar-controls-color: rgb(50, 50, 72) !important;
  --grotto-header-1-background-color: rgb(235, 115, 71) !important;
  --grotto-header-1-border-color: rgb(50, 50, 72) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: rgb(245, 240, 235) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: rgb(50, 50, 72) !important;
  --grotto-header-2-border-color: rgb(50, 50, 72) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: rgb(245, 240, 235) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: rgb(50, 50, 72) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: rgb(50, 50, 72) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: rgb(50, 50, 72) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: rgb(50, 50, 72) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: rgb(235, 115, 71) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: rgb(50, 50, 72) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: rgb(50, 50, 72) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: rgb(50, 50, 72) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: rgb(235, 115, 71) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: rgb(238, 230, 221) !important;
  --grotto-light-1: rgb(245, 240, 235) !important;
  --grotto-light-2: rgb(231, 220, 208) !important;
  --grotto-link-color: rgb(235, 115, 71) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: rgb(50, 50, 72) !important;
  --grotto-menu-background-color: rgb(238, 230, 221) !important;
  --grotto-menu-border-color: rgb(50, 50, 72) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: rgb(50, 50, 72) !important;
  --grotto-mobile-toolbar-background-color: rgb(231, 220, 208) !important;
  --grotto-mobile-toolbar-border-color: rgb(50, 50, 72) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: rgb(50, 50, 72) !important;
  --grotto-modal-background-color: rgb(245, 240, 235) !important;
  --grotto-modal-border-color: rgb(50, 50, 72) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: rgb(50, 50, 72) !important;
  --grotto-navbar-background-color: rgb(231, 220, 208) !important;
  --grotto-navbar-border-color: rgb(50, 50, 72) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: rgb(50, 50, 72) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: rgb(235, 115, 71) !important;
  --grotto-notice-border-color: rgb(50, 50, 72) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-color: rgb(245, 240, 235) !important;
  --grotto-progress-background-color: rgb(50, 50, 72) !important;
  --grotto-progress-border-color: rgb(50, 50, 72) !important;
  --grotto-progress-color: rgb(235, 115, 71) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: rgb(245, 240, 235) !important;
  --grotto-prompt-border-color: rgb(50, 50, 72) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-color: rgb(50, 50, 72) !important;
  --grotto-properties-background-color: rgb(245, 240, 235) !important;
  --grotto-properties-border-color: rgb(50, 50, 72) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: rgb(50, 50, 72) !important;
  --grotto-pull-background-color: rgb(235, 115, 71) !important;
  --grotto-pull-border-color: rgb(50, 50, 72) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: rgb(245, 240, 235) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: rgb(50, 50, 72) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: rgb(50, 50, 72) !important;
  --grotto-settings-background-color: rgb(238, 230, 221) !important;
  --grotto-settings-border-color: rgb(50, 50, 72) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: rgb(50, 50, 72) !important;
  --grotto-slider-background-color: rgb(50, 50, 72) !important;
  --grotto-slider-border-color: rgb(245, 240, 235) !important;
  --grotto-statusbar-background-color: rgb(231, 220, 208) !important;
  --grotto-statusbar-border-color: rgb(50, 50, 72) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: rgb(50, 50, 72) !important;
  --grotto-strikethrough-color: rgb(50, 50, 72) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: rgb(231, 220, 208) !important;
  --grotto-suggestion-border-color: rgb(50, 50, 72) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: rgb(50, 50, 72) !important;
  --grotto-suggestion-selected-background-color: rgb(235, 115, 71) !important;
  --grotto-suggestion-selected-color: rgb(245, 240, 235) !important;
  --grotto-tab-switcher-background-color: rgb(245, 240, 235) !important;
  --grotto-tab-switcher-border-color: rgb(50, 50, 72) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: rgb(50, 50, 72) !important;
  --grotto-tab-switcher-menu-background-color: rgb(231, 220, 208) !important;
  --grotto-tab-switcher-selected-tab-background-color: rgb(235, 115, 71) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: rgb(50, 50, 72) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: rgb(50, 50, 72) !important;
  --grotto-tag-background-color: rgb(50, 50, 72) !important;
  --grotto-tag-border-color: rgb(50, 50, 72) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: rgb(245, 240, 235) !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: rgb(50, 50, 72) !important;
  --grotto-toggle-background-color: rgb(238, 230, 221) !important;
  --grotto-toggle-border-color: rgb(50, 50, 72) !important;
  --grotto-tooltip-background-color: rgb(231, 220, 208) !important;
  --grotto-tooltip-border-color: rgb(50, 50, 72) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-color: rgb(50, 50, 72) !important;
  --grotto-ui-border-radius: 0rem !important;
  --grotto-ui-border-width: 1px !important;
  --grotto-view-header-background-color: rgb(231, 220, 208) !important;
  --grotto-view-header-border-radius: 0rem !important;
  --grotto-view-header-color: rgb(50, 50, 72) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --headerFont: '??' !important;
  --heading-formatting: rgb(75, 75, 108) !important;
  --heading-spacing: 0rem !important;
  --highlight: rgb(231, 220, 208) !important;
  --icon-color: rgb(75, 75, 108) !important;
  --icon-color-active: rgb(235, 115, 71) !important;
  --icon-color-focused: rgb(50, 50, 72) !important;
  --icon-color-hover: rgb(75, 75, 108) !important;
  --input-date-separator: rgb(75, 75, 108) !important;
  --input-placeholder-color: rgb(75, 75, 108) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: rgb(235, 115, 71) !important;
  --interactive-accent-hover: rgb(235, 115, 71) !important;
  --interactive-accent-hsl: 16, 80%, 60% !important;
  --light: rgb(245, 240, 235) !important;
  --lightgray: rgb(238, 230, 221) !important;
  --link-color: rgb(235, 115, 71) !important;
  --link-color-hover: rgb(235, 115, 71) !important;
  --link-external-color: rgb(235, 115, 71) !important;
  --link-external-color-hover: rgb(235, 115, 71) !important;
  --link-unresolved-color: rgb(235, 115, 71) !important;
  --link-unresolved-decoration-color: rgba(235, 115, 71, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(50, 50, 72) !important;
  --list-marker-color-collapsed: rgb(50, 50, 72) !important;
  --list-marker-color-hover: rgb(50, 50, 72) !important;
  --menu-background: rgb(238, 230, 221) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-font: '??' !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: rgb(50, 50, 72) !important;
  --metadata-label-font: '??' !important;
  --metadata-label-text-color: rgb(75, 75, 108) !important;
  --metadata-label-text-color-hover: rgb(75, 75, 108) !important;
  --modal-background: rgb(245, 240, 235) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: rgb(75, 75, 108) !important;
  --nav-collapse-icon-color-collapsed: rgb(75, 75, 108) !important;
  --nav-heading-color: rgb(50, 50, 72) !important;
  --nav-heading-color-collapsed: rgb(75, 75, 108) !important;
  --nav-heading-color-collapsed-hover: rgb(75, 75, 108) !important;
  --nav-heading-color-hover: rgb(50, 50, 72) !important;
  --nav-item-background-selected: rgba(235, 115, 71, 0.15) !important;
  --nav-item-color: rgb(75, 75, 108) !important;
  --nav-item-color-active: rgb(50, 50, 72) !important;
  --nav-item-color-highlighted: rgb(235, 115, 71) !important;
  --nav-item-color-hover: rgb(50, 50, 72) !important;
  --nav-item-color-selected: rgb(50, 50, 72) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: rgb(75, 75, 108) !important;
  --nav-tag-color-active: rgb(75, 75, 108) !important;
  --nav-tag-color-hover: rgb(75, 75, 108) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: rgb(245, 240, 235) !important;
  --pdf-page-background: rgb(245, 240, 235) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: rgb(245, 240, 235) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: rgb(75, 75, 108) !important;
  --pill-color-hover: rgb(50, 50, 72) !important;
  --pill-color-remove: rgb(75, 75, 108) !important;
  --pill-color-remove-hover: rgb(235, 115, 71) !important;
  --prompt-background: rgb(245, 240, 235) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: rgb(238, 230, 221) !important;
  --ribbon-background-collapsed: rgb(245, 240, 235) !important;
  --scrollbar-active-thumb-bg: rgb(235, 115, 71) !important;
  --scrollbar-bg: rgb(235, 115, 71) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: rgb(235, 115, 71) !important;
  --search-clear-button-color: rgb(75, 75, 108) !important;
  --search-icon-color: rgb(75, 75, 108) !important;
  --search-result-background: rgb(245, 240, 235) !important;
  --secondary: rgb(235, 115, 71) !important;
  --setting-group-heading-color: rgb(50, 50, 72) !important;
  --setting-items-background: rgb(245, 240, 235) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: rgb(238, 230, 221) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: rgb(75, 75, 108) !important;
  --suggestion-background: rgb(245, 240, 235) !important;
  --tab-background-active: rgb(245, 240, 235) !important;
  --tab-container-background: rgb(238, 230, 221) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: rgb(238, 230, 221) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(238, 230, 221), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 115, 71) !important;
  --tab-text-color: rgb(75, 75, 108) !important;
  --tab-text-color-active: rgb(75, 75, 108) !important;
  --tab-text-color-focused: rgb(75, 75, 108) !important;
  --tab-text-color-focused-active: rgb(75, 75, 108) !important;
  --tab-text-color-focused-active-current: rgb(50, 50, 72) !important;
  --tab-text-color-focused-highlighted: rgb(235, 115, 71) !important;
  --table-add-button-border-color: rgb(50, 50, 72) !important;
  --table-border-color: rgb(50, 50, 72) !important;
  --table-drag-handle-background-active: rgb(235, 115, 71) !important;
  --table-drag-handle-color: rgb(75, 75, 108) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: rgb(50, 50, 72) !important;
  --table-header-color: rgb(50, 50, 72) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(235, 115, 71, 0.1) !important;
  --table-selection-border-color: rgb(235, 115, 71) !important;
  --table-text-color: rgb(50, 50, 72) !important;
  --tag-background: rgba(235, 115, 71, 0.1) !important;
  --tag-background-hover: rgba(235, 115, 71, 0.2) !important;
  --tag-border-color: rgb(50, 50, 72) !important;
  --tag-border-color-hover: rgba(235, 115, 71, 0.15) !important;
  --tag-border-width: 1.5px !important;
  --tag-color: rgb(235, 115, 71) !important;
  --tag-color-hover: rgb(235, 115, 71) !important;
  --tag-padding-x: 0.4rem !important;
  --tag-padding-y: 0.1rem !important;
  --tag-radius: 0rem !important;
  --tertiary: rgb(235, 115, 71) !important;
  --text-accent: rgb(235, 115, 71) !important;
  --text-accent-hover: rgb(235, 115, 71) !important;
  --text-error: rgb(191, 64, 64) !important;
  --text-faint: rgb(75, 75, 108) !important;
  --text-highlight-bg: rgb(231, 220, 208) !important;
  --text-muted: rgb(75, 75, 108) !important;
  --text-normal: rgb(50, 50, 72) !important;
  --text-selection: rgb(235, 115, 71) !important;
  --text-success: rgb(106, 191, 64) !important;
  --text-warning: rgb(191, 128, 64) !important;
  --textHighlight: rgb(231, 220, 208) !important;
  --titleFont: '??' !important;
  --titlebar-background: rgb(238, 230, 221) !important;
  --titlebar-background-focused: rgb(238, 230, 221) !important;
  --titlebar-text-color: rgb(75, 75, 108) !important;
  --titlebar-text-color-focused: rgb(50, 50, 72) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: rgb(50, 50, 72) !important;
  --vault-profile-color-hover: rgb(50, 50, 72) !important;
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
  --callout-color: rgb(50, 50, 72);
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
  --callout-color: rgb(50, 50, 72);
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
