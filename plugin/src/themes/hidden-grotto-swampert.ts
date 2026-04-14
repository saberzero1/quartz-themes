import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hidden-grotto.swampert",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 24 !important;
  --accent-l: 56% !important;
  --accent-s: 64% !important;
  --background-modifier-active-hover: hsla(24, 64%, 56%, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5) !important;
  --background-modifier-error: hsl(0, 50%, 50%) !important;
  --background-modifier-error-hover: hsl(0, 50%, 50%) !important;
  --background-modifier-success: hsl(100, 50%, 50%) !important;
  --background-primary: hsl(210, 30%, 30%) !important;
  --background-primary-alt: hsl(210, 30%, 30%) !important;
  --background-secondary: hsl(210, 20%, 20%) !important;
  --background-secondary-alt: hsl(210, 20%, 20%) !important;
  --bases-cards-background: hsl(210, 30%, 30%) !important;
  --bases-cards-cover-background: hsl(210, 30%, 30%) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(40, 14%, 76%) !important;
  --bases-table-border-color: hsl(40, 14%, 86%) !important;
  --bases-table-cell-background-active: hsl(210, 30%, 30%) !important;
  --bases-table-cell-background-disabled: hsl(210, 30%, 30%) !important;
  --bases-table-cell-background-selected: hsla(24, 64%, 56%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(24, 64%, 56%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(210, 30%, 30%) !important;
  --bases-table-header-background: hsl(210, 30%, 30%) !important;
  --bases-table-header-color: hsl(40, 14%, 76%) !important;
  --bases-table-summary-background: hsl(210, 30%, 30%) !important;
  --blockquote-border-color: hsl(24, 64%, 56%) !important;
  --blur-background: none !important;
  --bodyFont: 'Quicksand' !important;
  --callout-default: hsl(40, 14%, 86%);
  --callout-radius: 0px;
  --canvas-background: hsl(210, 30%, 30%) !important;
  --canvas-card-label-color: hsl(40, 14%, 76%) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: hsl(40, 14%, 86%) !important;
  --checkbox-border-color: hsl(40, 14%, 76%) !important;
  --checkbox-border-color-hover: hsl(40, 14%, 76%) !important;
  --checkbox-color: hsl(24, 64%, 56%) !important;
  --checkbox-color-hover: hsl(24, 64%, 56%) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: hsl(40, 14%, 76%) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: hsl(210, 30%, 30%) !important;
  --code-border-color: hsl(40, 14%, 86%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(40, 14%, 76%) !important;
  --code-function: hsl(50, 30%, 45%) !important;
  --code-important: hsl(30, 30%, 60%) !important;
  --code-keyword: hsl(330, 30%, 60%) !important;
  --code-normal: hsl(40, 14%, 86%) !important;
  --code-operator: hsl(0, 30%, 60%) !important;
  --code-property: hsl(170, 30%, 50%) !important;
  --code-punctuation: hsl(40, 14%, 76%) !important;
  --code-string: hsl(120, 30%, 50%) !important;
  --code-tag: hsl(0, 30%, 60%) !important;
  --code-value: hsl(270, 30%, 60%) !important;
  --codeFont: 'Quicksand' !important;
  --collapse-icon-color: hsl(40, 14%, 76%) !important;
  --collapse-icon-color-collapsed: hsl(24, 64%, 56%) !important;
  --color-accent: hsl(24, 64%, 56%) !important;
  --color-accent-1: hsl(24, 64%, 56%) !important;
  --color-accent-2: hsl(24, 64%, 56%) !important;
  --color-accent-hsl: 24, 64%, 56% !important;
  --dark: hsl(40, 14%, 86%) !important;
  --darkgray: hsl(40, 14%, 86%) !important;
  --divider-color-hover: hsl(24, 64%, 56%) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid hsl(24, 64%, 56%) !important;
  --file-header-background: hsl(210, 30%, 30%) !important;
  --file-header-background-focused: hsl(210, 30%, 30%) !important;
  --file-header-font: 'Quicksand' !important;
  --flair-color: hsl(40, 14%, 86%) !important;
  --font-interface: 'Quicksand' !important;
  --font-interface-override: 'Quicksand' !important;
  --font-mermaid: 'Quicksand' !important;
  --font-monospace: 'Quicksand' !important;
  --font-monospace-override: 'Quicksand' !important;
  --font-print: 'Quicksand' !important;
  --font-print-override: 'Quicksand' !important;
  --font-text: 'Quicksand' !important;
  --font-text-override: 'Quicksand' !important;
  --footnote-id-color: hsl(40, 14%, 76%) !important;
  --footnote-id-color-no-occurrences: hsl(40, 14%, 76%) !important;
  --footnote-radius: 0px !important;
  --graph-node: hsl(40, 14%, 86%) !important;
  --graph-node-attachment: hsl(100, 50%, 50%) !important;
  --graph-node-focused: hsl(24, 64%, 56%) !important;
  --graph-node-tag: hsl(24, 64%, 56%) !important;
  --graph-node-unresolved: hsl(40, 14%, 76%) !important;
  --graph-text: hsl(40, 14%, 86%) !important;
  --gray: hsl(40, 14%, 76%) !important;
  --grotto-accent: hsl(24, 64%, 56%) !important;
  --grotto-accent-h: 24 !important;
  --grotto-accent-l: 56% !important;
  --grotto-accent-s: 64% !important;
  --grotto-background-tertiary: hsl(210, 30%, 36%) !important;
  --grotto-backlink-border-color: hsl(40, 14%, 86%) !important;
  --grotto-bases-background-color: hsl(210, 30%, 30%) !important;
  --grotto-bases-border-color: hsl(40, 14%, 86%) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: hsl(40, 14%, 86%) !important;
  --grotto-bases-header-background-color: hsl(210, 30%, 36%) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-color: hsl(40, 14%, 86%) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: hsl(24, 64%, 56%) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: hsl(24, 64%, 56%) !important;
  --grotto-button-border-color: hsl(40, 14%, 86%) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-border-width: 1px !important;
  --grotto-button-color: hsl(40, 14%, 86%) !important;
  --grotto-button-outline-width: 1px !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-day-active-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: hsl(24, 64%, 56%) !important;
  --grotto-calendar-today-border-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-today-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: hsl(24, 64%, 56%) !important;
  --grotto-callout-background-color: hsl(210, 30%, 30%) !important;
  --grotto-callout-border-color: hsl(40, 14%, 86%) !important;
  --grotto-callout-color: hsl(40, 14%, 86%) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: hsl(210, 30%, 30%) !important;
  --grotto-canvas-border-color: hsl(40, 14%, 86%) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: hsl(40, 14%, 86%) !important;
  --grotto-canvas-controls-background-color: hsl(210, 30%, 36%) !important;
  --grotto-canvas-controls-color: hsl(40, 14%, 86%) !important;
  --grotto-canvas-path-color: hsl(40, 14%, 86%) !important;
  --grotto-canvas-path-node-color: hsl(24, 64%, 56%) !important;
  --grotto-checkbox-border-color: hsl(40, 14%, 86%) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: hsl(210, 30%, 36%) !important;
  --grotto-code-border-color: hsl(40, 14%, 86%) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: hsl(40, 14%, 86%) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: hsl(40, 14%, 86%) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: hsl(210, 20%, 20%) !important;
  --grotto-dark-1: hsl(210, 30%, 30%) !important;
  --grotto-dark-2: hsl(210, 30%, 36%) !important;
  --grotto-dragging-background-color: hsl(24, 64%, 56%) !important;
  --grotto-dragging-border-color: hsl(40, 14%, 86%) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: hsl(40, 14%, 86%) !important;
  --grotto-drawer-background-color: hsl(24, 64%, 56%) !important;
  --grotto-drawer-border-color: hsl(40, 14%, 86%) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: hsl(40, 14%, 86%) !important;
  --grotto-dropdown-background-color: hsl(24, 64%, 56%) !important;
  --grotto-dropdown-border-color: hsl(40, 14%, 86%) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-border-width: 1px !important;
  --grotto-dropdown-color: hsl(40, 14%, 86%) !important;
  --grotto-dropdown-option-background-color: hsl(210, 30%, 30%) !important;
  --grotto-dropdown-option-color: hsl(40, 14%, 86%) !important;
  --grotto-dropdown-outline-width: 1px !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: hsl(40, 14%, 86%) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: hsl(40, 14%, 86%) !important;
  --grotto-embed-title-color: hsl(40, 14%, 86%) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: hsl(24, 64%, 56%) !important;
  --grotto-filenav-active-color: hsl(40, 14%, 86%) !important;
  --grotto-filenav-background-color: hsl(210, 20%, 20%) !important;
  --grotto-filenav-border-color: hsl(40, 14%, 86%) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: hsl(210, 30%, 36%) !important;
  --grotto-filenav-color: hsl(40, 14%, 86%) !important;
  --grotto-filenav-tag-background-color: hsl(40, 14%, 86%) !important;
  --grotto-filenav-tag-color: hsl(210, 20%, 20%) !important;
  --grotto-font-main: 'Quicksand' !important;
  --grotto-font-weight: 500 !important;
  --grotto-global-border-radius: 0rem !important;
  --grotto-global-border-width: 1px !important;
  --grotto-graph-controls-background-color: hsl(210, 30%, 36%) !important;
  --grotto-graph-controls-border-color: hsl(40, 14%, 86%) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: hsl(40, 14%, 86%) !important;
  --grotto-graph-line-color: hsl(40, 14%, 86%) !important;
  --grotto-graph-node-color: hsl(40, 14%, 86%) !important;
  --grotto-graph-sidebar-controls-background-color: hsl(210, 30%, 36%) !important;
  --grotto-graph-sidebar-controls-border-color: hsl(40, 14%, 86%) !important;
  --grotto-graph-sidebar-controls-color: hsl(40, 14%, 86%) !important;
  --grotto-header-1-background-color: hsl(24, 64%, 56%) !important;
  --grotto-header-1-border-color: hsl(40, 14%, 86%) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: hsl(40, 14%, 86%) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: hsl(40, 14%, 86%) !important;
  --grotto-header-2-border-color: hsl(40, 14%, 86%) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: hsl(210, 30%, 30%) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: hsl(40, 14%, 86%) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: hsl(40, 14%, 86%) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: hsl(40, 14%, 86%) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: hsl(40, 14%, 86%) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: hsl(24, 64%, 56%) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: hsl(40, 14%, 86%) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: hsl(40, 14%, 86%) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: hsl(40, 14%, 86%) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: hsl(24, 64%, 56%) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: hsl(40, 14%, 82%) !important;
  --grotto-light-1: hsl(40, 14%, 86%) !important;
  --grotto-light-2: hsl(40, 14%, 76%) !important;
  --grotto-link-color: hsl(24, 64%, 56%) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: hsl(40, 14%, 86%) !important;
  --grotto-menu-background-color: hsl(210, 20%, 20%) !important;
  --grotto-menu-border-color: hsl(40, 14%, 86%) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: hsl(40, 14%, 86%) !important;
  --grotto-mobile-toolbar-background-color: hsl(210, 30%, 36%) !important;
  --grotto-mobile-toolbar-border-color: hsl(40, 14%, 86%) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: hsl(40, 14%, 86%) !important;
  --grotto-modal-background-color: hsl(210, 30%, 30%) !important;
  --grotto-modal-border-color: hsl(40, 14%, 86%) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: hsl(40, 14%, 86%) !important;
  --grotto-navbar-background-color: hsl(210, 30%, 36%) !important;
  --grotto-navbar-border-color: hsl(40, 14%, 86%) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: hsl(40, 14%, 86%) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: hsl(24, 64%, 56%) !important;
  --grotto-notice-border-color: hsl(40, 14%, 86%) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-border-width: 1px !important;
  --grotto-notice-color: hsl(40, 14%, 86%) !important;
  --grotto-progress-background-color: hsl(40, 14%, 86%) !important;
  --grotto-progress-border-color: hsl(40, 14%, 86%) !important;
  --grotto-progress-color: hsl(24, 64%, 56%) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: hsl(210, 30%, 30%) !important;
  --grotto-prompt-border-color: hsl(40, 14%, 86%) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-border-width: 1px !important;
  --grotto-prompt-color: hsl(40, 14%, 86%) !important;
  --grotto-properties-background-color: hsl(210, 30%, 30%) !important;
  --grotto-properties-border-color: hsl(40, 14%, 86%) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: hsl(40, 14%, 86%) !important;
  --grotto-pull-background-color: hsl(24, 64%, 56%) !important;
  --grotto-pull-border-color: hsl(40, 14%, 86%) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: hsl(40, 14%, 86%) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: hsl(40, 14%, 86%) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: hsl(40, 14%, 86%) !important;
  --grotto-settings-background-color: hsl(210, 20%, 20%) !important;
  --grotto-settings-border-color: hsl(40, 14%, 86%) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: hsl(40, 14%, 86%) !important;
  --grotto-slider-background-color: hsl(40, 14%, 86%) !important;
  --grotto-slider-border-color: hsl(210, 30%, 30%) !important;
  --grotto-statusbar-background-color: hsl(210, 20%, 20%) !important;
  --grotto-statusbar-border-color: hsl(40, 14%, 86%) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: hsl(40, 14%, 86%) !important;
  --grotto-strikethrough-color: hsl(40, 14%, 86%) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: hsl(210, 30%, 36%) !important;
  --grotto-suggestion-border-color: hsl(40, 14%, 86%) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: hsl(40, 14%, 86%) !important;
  --grotto-suggestion-selected-background-color: hsl(24, 64%, 56%) !important;
  --grotto-suggestion-selected-color: hsl(40, 14%, 86%) !important;
  --grotto-tab-switcher-background-color: hsl(210, 30%, 30%) !important;
  --grotto-tab-switcher-border-color: hsl(40, 14%, 86%) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: hsl(40, 14%, 86%) !important;
  --grotto-tab-switcher-menu-background-color: hsl(210, 30%, 36%) !important;
  --grotto-tab-switcher-selected-tab-background-color: hsl(24, 64%, 56%) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: hsl(40, 14%, 86%) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: hsl(40, 14%, 86%) !important;
  --grotto-tag-background-color: hsl(40, 14%, 86%) !important;
  --grotto-tag-border-color: hsl(40, 14%, 86%) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: hsl(210, 30%, 30%) !important;
  --grotto-tag-padding-x: 0.4rem !important;
  --grotto-tag-padding-y: 0.1rem !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-text-color-on-accent: hsl(40, 14%, 86%) !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: hsl(40, 14%, 86%) !important;
  --grotto-toggle-background-color: hsl(210, 30%, 30%) !important;
  --grotto-toggle-border-color: hsl(40, 14%, 86%) !important;
  --grotto-toggle-border-width: 1px !important;
  --grotto-toggle-enabled-background-color: hsl(24, 64%, 56%) !important;
  --grotto-tooltip-background-color: hsl(210, 30%, 36%) !important;
  --grotto-tooltip-border-color: hsl(40, 14%, 86%) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-border-width: 1px !important;
  --grotto-tooltip-color: hsl(40, 14%, 86%) !important;
  --grotto-view-header-background-color: hsl(210, 30%, 36%) !important;
  --grotto-view-header-color: hsl(40, 14%, 86%) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --headerFont: 'Quicksand' !important;
  --heading-formatting: hsl(40, 14%, 76%) !important;
  --heading-spacing: 0rem !important;
  --highlight: hsl(210, 30%, 36%) !important;
  --icon-color: hsl(40, 14%, 76%) !important;
  --icon-color-active: hsl(24, 64%, 56%) !important;
  --icon-color-focused: hsl(40, 14%, 86%) !important;
  --icon-color-hover: hsl(40, 14%, 76%) !important;
  --input-date-separator: hsl(40, 14%, 76%) !important;
  --input-placeholder-color: hsl(40, 14%, 76%) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(24, 64%, 56%) !important;
  --interactive-accent-hover: hsl(24, 64%, 56%) !important;
  --interactive-accent-hsl: 24, 64%, 56% !important;
  --light: hsl(210, 30%, 30%) !important;
  --lightgray: hsl(210, 20%, 20%) !important;
  --link-color: hsl(24, 64%, 56%) !important;
  --link-color-hover: hsl(24, 64%, 56%) !important;
  --link-external-color: hsl(24, 64%, 56%) !important;
  --link-external-color-hover: hsl(24, 64%, 56%) !important;
  --link-unresolved-color: hsl(24, 64%, 56%) !important;
  --link-unresolved-decoration-color: hsla(24, 64%, 56%, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-marker-color: hsl(40, 14%, 86%) !important;
  --list-marker-color-collapsed: hsl(40, 14%, 86%) !important;
  --list-marker-color-hover: hsl(40, 14%, 86%) !important;
  --menu-background: hsl(210, 20%, 20%) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-font: 'Quicksand' !important;
  --metadata-input-text-color: hsl(40, 14%, 86%) !important;
  --metadata-label-font: 'Quicksand' !important;
  --metadata-label-text-color: hsl(40, 14%, 76%) !important;
  --metadata-label-text-color-hover: hsl(40, 14%, 76%) !important;
  --modal-background: hsl(210, 30%, 30%) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: hsl(40, 14%, 76%) !important;
  --nav-collapse-icon-color-collapsed: hsl(40, 14%, 76%) !important;
  --nav-heading-color: hsl(40, 14%, 86%) !important;
  --nav-heading-color-collapsed: hsl(40, 14%, 76%) !important;
  --nav-heading-color-collapsed-hover: hsl(40, 14%, 76%) !important;
  --nav-heading-color-hover: hsl(40, 14%, 86%) !important;
  --nav-item-background-selected: hsla(24, 64%, 56%, 0.15) !important;
  --nav-item-color: hsl(40, 14%, 76%) !important;
  --nav-item-color-active: hsl(40, 14%, 86%) !important;
  --nav-item-color-highlighted: hsl(24, 64%, 56%) !important;
  --nav-item-color-hover: hsl(40, 14%, 86%) !important;
  --nav-item-color-selected: hsl(40, 14%, 86%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: hsl(40, 14%, 76%) !important;
  --nav-tag-color-active: hsl(40, 14%, 76%) !important;
  --nav-tag-color-hover: hsl(40, 14%, 76%) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: hsl(210, 30%, 30%) !important;
  --pdf-page-background: hsl(210, 30%, 30%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(210, 30%, 30%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: hsl(40, 14%, 76%) !important;
  --pill-color-hover: hsl(40, 14%, 86%) !important;
  --pill-color-remove: hsl(40, 14%, 76%) !important;
  --pill-color-remove-hover: hsl(24, 64%, 56%) !important;
  --prompt-background: hsl(210, 30%, 30%) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: hsl(210, 20%, 20%) !important;
  --ribbon-background-collapsed: hsl(210, 30%, 30%) !important;
  --scrollbar-active-thumb-bg: hsl(24, 64%, 56%) !important;
  --scrollbar-bg: hsl(24, 64%, 56%) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: hsl(24, 64%, 56%) !important;
  --search-clear-button-color: hsl(40, 14%, 76%) !important;
  --search-icon-color: hsl(40, 14%, 76%) !important;
  --search-result-background: hsl(210, 30%, 30%) !important;
  --secondary: hsl(24, 64%, 56%) !important;
  --setting-group-heading-color: hsl(40, 14%, 86%) !important;
  --setting-items-background: hsl(210, 30%, 30%) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: hsl(210, 20%, 20%) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: hsl(40, 14%, 76%) !important;
  --suggestion-background: hsl(210, 30%, 30%) !important;
  --tab-background-active: hsl(210, 30%, 30%) !important;
  --tab-container-background: hsl(210, 20%, 20%) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: hsl(210, 20%, 20%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(210, 20%, 20%), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(24, 64%, 56%) !important;
  --tab-text-color: hsl(40, 14%, 76%) !important;
  --tab-text-color-active: hsl(40, 14%, 76%) !important;
  --tab-text-color-focused: hsl(40, 14%, 76%) !important;
  --tab-text-color-focused-active: hsl(40, 14%, 76%) !important;
  --tab-text-color-focused-active-current: hsl(40, 14%, 86%) !important;
  --tab-text-color-focused-highlighted: hsl(24, 64%, 56%) !important;
  --table-add-button-border-color: hsl(40, 14%, 86%) !important;
  --table-border-color: hsl(40, 14%, 86%) !important;
  --table-drag-handle-background-active: hsl(24, 64%, 56%) !important;
  --table-drag-handle-color: hsl(40, 14%, 76%) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: hsl(40, 14%, 86%) !important;
  --table-header-color: hsl(40, 14%, 86%) !important;
  --table-selection: hsla(24, 64%, 56%, 0.1) !important;
  --table-selection-border-color: hsl(24, 64%, 56%) !important;
  --table-text-color: hsl(40, 14%, 86%) !important;
  --tag-background: hsla(24, 64%, 56%, 0.1) !important;
  --tag-background-hover: hsla(24, 64%, 56%, 0.2) !important;
  --tag-border-color: hsla(24, 64%, 56%, 0.15) !important;
  --tag-border-color-hover: hsla(24, 64%, 56%, 0.15) !important;
  --tag-color: hsl(24, 64%, 56%) !important;
  --tag-color-hover: hsl(24, 64%, 56%) !important;
  --tertiary: hsl(24, 64%, 56%) !important;
  --text-accent: hsl(24, 64%, 56%) !important;
  --text-accent-hover: hsl(24, 64%, 56%) !important;
  --text-error: hsl(0, 50%, 50%) !important;
  --text-faint: hsl(40, 14%, 76%) !important;
  --text-highlight-bg: hsl(210, 30%, 36%) !important;
  --text-muted: hsl(40, 14%, 76%) !important;
  --text-normal: hsl(40, 14%, 86%) !important;
  --text-selection: hsla(24, 64%, 56%, 1) !important;
  --text-success: hsl(100, 50%, 50%) !important;
  --text-warning: hsl(30, 50%, 50%) !important;
  --textHighlight: hsl(210, 30%, 36%) !important;
  --titleFont: 'Quicksand' !important;
  --titlebar-background: hsl(210, 20%, 20%) !important;
  --titlebar-background-focused: hsl(210, 20%, 20%) !important;
  --titlebar-text-color: hsl(40, 14%, 76%) !important;
  --titlebar-text-color-focused: hsl(40, 14%, 86%) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: hsl(40, 14%, 86%) !important;
  --vault-profile-color-hover: hsl(40, 14%, 86%) !important;
  --workspace-background-translucent: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 51, 61);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(54, 77, 99);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(224, 221, 214);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(41, 51, 61);
  border-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(202, 197, 185);
  font-weight: 500;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(202, 197, 185);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(224, 221, 214);
  border-radius: 0px;
  color: rgb(54, 77, 99);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(202, 197, 185);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 51, 61);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 51, 61);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(54, 77, 99);
  color: rgb(224, 221, 214);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(64, 92, 119);
  color: rgb(224, 221, 214);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(224, 221, 214) none 0px;
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(224, 221, 214) none 0px;
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(224, 221, 214);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(215, 128, 71);
  border-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body p {
  color: rgb(202, 197, 185);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(202, 197, 185) none 0px;
  text-decoration-color: rgb(202, 197, 185);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration: underline rgba(215, 128, 71, 0.3);
  text-decoration-color: rgba(215, 128, 71, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 221, 214);
  font-weight: 500;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(202, 197, 185);
}

html[saved-theme="dark"] body blockquote {
  font-family: Quicksand;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
  margin-top: 0px;
  width: 187.766px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  color: rgb(224, 221, 214);
  font-weight: 500;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  color: rgb(224, 221, 214);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(64, 92, 119);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(64, 92, 119);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(224, 221, 214);
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
  background-color: rgb(64, 92, 119);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(64, 92, 119);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(202, 197, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(202, 197, 185);
  border-right-color: rgb(202, 197, 185);
  border-top-color: rgb(202, 197, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 221, 214);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-style: solid;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-right-style: solid;
  border-top-color: rgb(224, 221, 214);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Quicksand;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Quicksand;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 221, 214);
  text-decoration-color: rgb(224, 221, 214);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  color: rgb(224, 221, 214);
  gap: 2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: hsl(40, 14%, 86%);
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
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
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(224, 221, 214) none 0px;
  text-decoration-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(215, 128, 71);
  color: rgb(224, 221, 214);
  font-weight: 500;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 221, 214);
  border-left-style: solid;
  border-right-color: rgb(224, 221, 214);
  border-right-style: solid;
  border-top-color: rgb(224, 221, 214);
  border-top-style: solid;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(215, 128, 71);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(215, 128, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(54, 77, 99);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h2 {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h3 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: hsl(40, 14%, 86%);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(54, 77, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 77, 99);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(54, 77, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 77, 99);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(54, 77, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(54, 77, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 77, 99);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(54, 77, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 77, 99);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(54, 77, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 77, 99);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
  font-weight: 500;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 221, 214);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(41, 51, 61);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(224, 221, 214);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 221, 214);
  stroke: rgb(224, 221, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(202, 197, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(202, 197, 185);
  border-right-color: rgb(202, 197, 185);
  border-top-color: rgb(202, 197, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(202, 197, 185);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(202, 197, 185);
  font-family: Quicksand;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(202, 197, 185);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(202, 197, 185);
  border-left-color: rgb(202, 197, 185);
  border-right-color: rgb(202, 197, 185);
  border-top-color: rgb(202, 197, 185);
  color: rgb(202, 197, 185);
  font-family: Quicksand;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(41, 51, 61);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-width: 1px;
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 221, 214);
  font-weight: 500;
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 221, 214);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(224, 221, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 221, 214);
  border-left-width: 1px;
  border-right-color: rgb(224, 221, 214);
  border-right-width: 1px;
  border-top-color: rgb(224, 221, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(54, 77, 99);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 24 !important;
  --accent-l: 56% !important;
  --accent-s: 64% !important;
  --background-modifier-active-hover: hsla(24, 64%, 56%, 0.1) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: hsla(0, 0%, 0%, 0.5) !important;
  --background-modifier-error: hsl(0, 50%, 50%) !important;
  --background-modifier-error-hover: hsl(0, 50%, 50%) !important;
  --background-modifier-success: hsl(100, 50%, 50%) !important;
  --background-primary: hsl(40, 14%, 86%) !important;
  --background-primary-alt: hsl(40, 14%, 86%) !important;
  --background-secondary: hsl(40, 14%, 82%) !important;
  --background-secondary-alt: hsl(40, 14%, 82%) !important;
  --bases-cards-background: hsl(40, 14%, 86%) !important;
  --bases-cards-cover-background: hsl(40, 14%, 86%) !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(210, 30%, 36%) !important;
  --bases-table-border-color: hsl(210, 30%, 30%) !important;
  --bases-table-cell-background-active: hsl(40, 14%, 86%) !important;
  --bases-table-cell-background-disabled: hsl(40, 14%, 86%) !important;
  --bases-table-cell-background-selected: hsla(24, 64%, 56%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(24, 64%, 56%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(40, 14%, 86%) !important;
  --bases-table-header-background: hsl(40, 14%, 86%) !important;
  --bases-table-header-color: hsl(210, 30%, 36%) !important;
  --bases-table-summary-background: hsl(40, 14%, 86%) !important;
  --blockquote-border-color: hsl(24, 64%, 56%) !important;
  --blur-background: none !important;
  --bodyFont: 'Quicksand' !important;
  --callout-default: hsl(210, 30%, 30%);
  --callout-radius: 0px;
  --canvas-background: hsl(40, 14%, 86%) !important;
  --canvas-card-label-color: hsl(210, 30%, 36%) !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: hsl(210, 30%, 30%) !important;
  --checkbox-border-color: hsl(210, 30%, 36%) !important;
  --checkbox-border-color-hover: hsl(210, 30%, 36%) !important;
  --checkbox-color: hsl(24, 64%, 56%) !important;
  --checkbox-color-hover: hsl(24, 64%, 56%) !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: hsl(210, 30%, 36%) !important;
  --clickable-icon-radius: 0px !important;
  --code-background: hsl(40, 14%, 86%) !important;
  --code-border-color: hsl(210, 30%, 30%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(210, 30%, 36%) !important;
  --code-function: hsl(50, 30%, 45%) !important;
  --code-important: hsl(30, 30%, 60%) !important;
  --code-keyword: hsl(330, 30%, 60%) !important;
  --code-normal: hsl(210, 30%, 30%) !important;
  --code-operator: hsl(0, 30%, 60%) !important;
  --code-property: hsl(170, 30%, 50%) !important;
  --code-punctuation: hsl(210, 30%, 36%) !important;
  --code-string: hsl(120, 30%, 50%) !important;
  --code-tag: hsl(0, 30%, 60%) !important;
  --code-value: hsl(270, 30%, 60%) !important;
  --codeFont: 'Quicksand' !important;
  --collapse-icon-color: hsl(210, 30%, 36%) !important;
  --collapse-icon-color-collapsed: hsl(24, 64%, 56%) !important;
  --color-accent: hsl(24, 64%, 56%) !important;
  --color-accent-1: hsl(24, 64%, 56%) !important;
  --color-accent-2: hsl(24, 64%, 56%) !important;
  --color-accent-hsl: 24, 64%, 56% !important;
  --dark: hsl(210, 30%, 30%) !important;
  --darkgray: hsl(210, 30%, 30%) !important;
  --divider-color-hover: hsl(24, 64%, 56%) !important;
  --divider-width: 0px !important;
  --divider-width-hover: 2px !important;
  --embed-border-start: 2px solid hsl(24, 64%, 56%) !important;
  --file-header-background: hsl(40, 14%, 86%) !important;
  --file-header-background-focused: hsl(40, 14%, 86%) !important;
  --file-header-font: 'Quicksand' !important;
  --flair-color: hsl(210, 30%, 30%) !important;
  --font-interface: 'Quicksand' !important;
  --font-interface-override: 'Quicksand' !important;
  --font-mermaid: 'Quicksand' !important;
  --font-monospace: 'Quicksand' !important;
  --font-monospace-override: 'Quicksand' !important;
  --font-print: 'Quicksand' !important;
  --font-print-override: 'Quicksand' !important;
  --font-text: 'Quicksand' !important;
  --font-text-override: 'Quicksand' !important;
  --footnote-id-color: hsl(210, 30%, 36%) !important;
  --footnote-id-color-no-occurrences: hsl(210, 30%, 36%) !important;
  --footnote-radius: 0px !important;
  --graph-node: hsl(210, 30%, 30%) !important;
  --graph-node-attachment: hsl(100, 50%, 50%) !important;
  --graph-node-focused: hsl(24, 64%, 56%) !important;
  --graph-node-tag: hsl(24, 64%, 56%) !important;
  --graph-node-unresolved: hsl(210, 30%, 36%) !important;
  --graph-text: hsl(210, 30%, 30%) !important;
  --gray: hsl(210, 30%, 36%) !important;
  --grotto-accent: hsl(24, 64%, 56%) !important;
  --grotto-accent-h: 24 !important;
  --grotto-accent-l: 56% !important;
  --grotto-accent-s: 64% !important;
  --grotto-background-tertiary: hsl(40, 14%, 76%) !important;
  --grotto-backlink-border-color: hsl(210, 30%, 30%) !important;
  --grotto-bases-background-color: hsl(40, 14%, 86%) !important;
  --grotto-bases-border-color: hsl(210, 30%, 30%) !important;
  --grotto-bases-border-radius: 0rem !important;
  --grotto-bases-color: hsl(210, 30%, 30%) !important;
  --grotto-bases-header-background-color: hsl(40, 14%, 76%) !important;
  --grotto-blockquote-background-color: transparent !important;
  --grotto-blockquote-color: hsl(210, 30%, 30%) !important;
  --grotto-blur: 0px !important;
  --grotto-bold-color: hsl(24, 64%, 56%) !important;
  --grotto-bold-weight: 800 !important;
  --grotto-button-background-color: hsl(24, 64%, 56%) !important;
  --grotto-button-border-color: hsl(210, 30%, 30%) !important;
  --grotto-button-border-radius: 0rem !important;
  --grotto-button-border-width: 1px !important;
  --grotto-button-color: hsl(40, 14%, 86%) !important;
  --grotto-button-outline-width: 1px !important;
  --grotto-calendar-background-color: transparent !important;
  --grotto-calendar-border-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-border-radius: 0rem !important;
  --grotto-calendar-border-width: 1px !important;
  --grotto-calendar-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-day-active-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-day-border-color: transparent !important;
  --grotto-calendar-day-border-radius: 0rem !important;
  --grotto-calendar-day-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-dayofweek-background-color: transparent !important;
  --grotto-calendar-dayofweek-border-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-dayofweek-border-radius: 0rem !important;
  --grotto-calendar-dayofweek-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-dayofweek-outline-color: transparent !important;
  --grotto-calendar-month-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-pointer-events: auto !important;
  --grotto-calendar-today-background-color: hsl(24, 64%, 56%) !important;
  --grotto-calendar-today-border-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-today-color: hsl(40, 14%, 86%) !important;
  --grotto-calendar-view-height: 0vh !important;
  --grotto-calendar-weekend-border-color: hsl(210, 30%, 30%) !important;
  --grotto-calendar-weekend-border-width: 1px !important;
  --grotto-calendar-year-color: hsl(24, 64%, 56%) !important;
  --grotto-callout-background-color: hsl(40, 14%, 86%) !important;
  --grotto-callout-border-color: hsl(210, 30%, 30%) !important;
  --grotto-callout-color: hsl(210, 30%, 30%) !important;
  --grotto-callout-icon: none !important;
  --grotto-callout-padding: 8px 16px !important;
  --grotto-callout-radius: 0rem !important;
  --grotto-callout-title-size: 1.5rem !important;
  --grotto-canvas-background-color: hsl(40, 14%, 86%) !important;
  --grotto-canvas-border-color: hsl(210, 30%, 30%) !important;
  --grotto-canvas-border-radius: 0rem !important;
  --grotto-canvas-color: hsl(210, 30%, 30%) !important;
  --grotto-canvas-controls-background-color: hsl(40, 14%, 76%) !important;
  --grotto-canvas-controls-color: hsl(210, 30%, 30%) !important;
  --grotto-canvas-path-color: hsl(210, 30%, 30%) !important;
  --grotto-canvas-path-node-color: hsl(24, 64%, 56%) !important;
  --grotto-checkbox-border-color: hsl(210, 30%, 30%) !important;
  --grotto-checkbox-border-radius: 0rem !important;
  --grotto-code-background-color: hsl(40, 14%, 76%) !important;
  --grotto-code-border-color: hsl(210, 30%, 30%) !important;
  --grotto-code-border-radius: 0rem !important;
  --grotto-code-color: hsl(210, 30%, 30%) !important;
  --grotto-code-weight: 500 !important;
  --grotto-comment-color: hsl(210, 30%, 30%) !important;
  --grotto-comment-weight: 500 !important;
  --grotto-dark-0: hsl(210, 20%, 20%) !important;
  --grotto-dark-1: hsl(210, 30%, 30%) !important;
  --grotto-dark-2: hsl(210, 30%, 36%) !important;
  --grotto-dragging-background-color: hsl(24, 64%, 56%) !important;
  --grotto-dragging-border-color: hsl(210, 30%, 30%) !important;
  --grotto-dragging-border-radius: 0rem !important;
  --grotto-dragging-color: hsl(40, 14%, 86%) !important;
  --grotto-drawer-background-color: hsl(24, 64%, 56%) !important;
  --grotto-drawer-border-color: hsl(210, 30%, 30%) !important;
  --grotto-drawer-border-radius: 0rem !important;
  --grotto-drawer-color: hsl(40, 14%, 86%) !important;
  --grotto-dropdown-background-color: hsl(24, 64%, 56%) !important;
  --grotto-dropdown-border-color: hsl(210, 30%, 30%) !important;
  --grotto-dropdown-border-radius: 0rem !important;
  --grotto-dropdown-border-width: 1px !important;
  --grotto-dropdown-color: hsl(40, 14%, 86%) !important;
  --grotto-dropdown-option-background-color: hsl(40, 14%, 86%) !important;
  --grotto-dropdown-option-color: hsl(210, 30%, 30%) !important;
  --grotto-dropdown-outline-width: 1px !important;
  --grotto-embed-background-color: transparent !important;
  --grotto-embed-border-color: hsl(210, 30%, 30%) !important;
  --grotto-embed-border-radius: 0rem !important;
  --grotto-embed-color: hsl(210, 30%, 30%) !important;
  --grotto-embed-title-color: hsl(210, 30%, 30%) !important;
  --grotto-embed-title-size: 1.5rem !important;
  --grotto-embed-title-visibility: block !important;
  --grotto-filenav-active-background-color: hsl(24, 64%, 56%) !important;
  --grotto-filenav-active-color: hsl(40, 14%, 86%) !important;
  --grotto-filenav-background-color: hsl(40, 14%, 82%) !important;
  --grotto-filenav-border-color: hsl(210, 30%, 30%) !important;
  --grotto-filenav-border-radius: 0rem !important;
  --grotto-filenav-button-background-color: hsl(40, 14%, 76%) !important;
  --grotto-filenav-color: hsl(210, 30%, 30%) !important;
  --grotto-filenav-tag-background-color: hsl(210, 30%, 30%) !important;
  --grotto-filenav-tag-color: hsl(40, 14%, 82%) !important;
  --grotto-font-main: 'Quicksand' !important;
  --grotto-font-weight: 500 !important;
  --grotto-global-border-radius: 0rem !important;
  --grotto-global-border-width: 1px !important;
  --grotto-graph-controls-background-color: hsl(40, 14%, 76%) !important;
  --grotto-graph-controls-border-color: hsl(210, 30%, 30%) !important;
  --grotto-graph-controls-border-radius: 0rem !important;
  --grotto-graph-controls-color: hsl(210, 30%, 30%) !important;
  --grotto-graph-line-color: hsl(210, 30%, 30%) !important;
  --grotto-graph-node-color: hsl(210, 30%, 30%) !important;
  --grotto-graph-sidebar-controls-background-color: hsl(40, 14%, 76%) !important;
  --grotto-graph-sidebar-controls-border-color: hsl(210, 30%, 30%) !important;
  --grotto-graph-sidebar-controls-color: hsl(210, 30%, 30%) !important;
  --grotto-header-1-background-color: hsl(24, 64%, 56%) !important;
  --grotto-header-1-border-color: hsl(210, 30%, 30%) !important;
  --grotto-header-1-border-radius: 0rem !important;
  --grotto-header-1-color: hsl(40, 14%, 86%) !important;
  --grotto-header-1-size: 1.5rem !important;
  --grotto-header-2-background-color: hsl(210, 30%, 30%) !important;
  --grotto-header-2-border-color: hsl(210, 30%, 30%) !important;
  --grotto-header-2-border-radius: 0rem !important;
  --grotto-header-2-color: hsl(40, 14%, 86%) !important;
  --grotto-header-2-size: 1.5rem !important;
  --grotto-header-3-background-color: transparent !important;
  --grotto-header-3-border-color: hsl(210, 30%, 30%) !important;
  --grotto-header-3-border-radius: 0rem !important;
  --grotto-header-3-color: hsl(210, 30%, 30%) !important;
  --grotto-header-3-size: 1.5rem !important;
  --grotto-header-4-background-color: transparent !important;
  --grotto-header-4-border-color: hsl(210, 30%, 30%) !important;
  --grotto-header-4-border-radius: 0rem !important;
  --grotto-header-4-color: hsl(210, 30%, 30%) !important;
  --grotto-header-4-size: 1.5rem !important;
  --grotto-header-5-background-color: transparent !important;
  --grotto-header-5-border-color: hsl(24, 64%, 56%) !important;
  --grotto-header-5-border-radius: 0rem !important;
  --grotto-header-5-color: hsl(210, 30%, 30%) !important;
  --grotto-header-5-size: 1.5rem !important;
  --grotto-header-6-background-color: transparent !important;
  --grotto-header-6-border-color: transparent !important;
  --grotto-header-6-border-radius: 0rem !important;
  --grotto-header-6-color: hsl(210, 30%, 30%) !important;
  --grotto-header-6-size: 1.5rem !important;
  --grotto-header-border-radius: 0rem !important;
  --grotto-header-line-height: 2rem !important;
  --grotto-header-size: 1.5rem !important;
  --grotto-header-weight: 500 !important;
  --grotto-icon-color: hsl(210, 30%, 30%) !important;
  --grotto-input-radius: 0rem !important;
  --grotto-italic-color: hsl(24, 64%, 56%) !important;
  --grotto-italic-weight: 500 !important;
  --grotto-light-0: hsl(40, 14%, 82%) !important;
  --grotto-light-1: hsl(40, 14%, 86%) !important;
  --grotto-light-2: hsl(40, 14%, 76%) !important;
  --grotto-link-color: hsl(24, 64%, 56%) !important;
  --grotto-link-weight: 500 !important;
  --grotto-list-marker-color: hsl(210, 30%, 30%) !important;
  --grotto-menu-background-color: hsl(40, 14%, 82%) !important;
  --grotto-menu-border-color: hsl(210, 30%, 30%) !important;
  --grotto-menu-border-radius: 0rem !important;
  --grotto-menu-color: hsl(210, 30%, 30%) !important;
  --grotto-mobile-toolbar-background-color: hsl(40, 14%, 76%) !important;
  --grotto-mobile-toolbar-border-color: hsl(210, 30%, 30%) !important;
  --grotto-mobile-toolbar-border-radius: 0rem !important;
  --grotto-mobile-toolbar-color: hsl(210, 30%, 30%) !important;
  --grotto-modal-background-color: hsl(40, 14%, 86%) !important;
  --grotto-modal-border-color: hsl(210, 30%, 30%) !important;
  --grotto-modal-border-radius: 0rem !important;
  --grotto-modal-color: hsl(210, 30%, 30%) !important;
  --grotto-navbar-background-color: hsl(40, 14%, 76%) !important;
  --grotto-navbar-border-color: hsl(210, 30%, 30%) !important;
  --grotto-navbar-border-radius: 0rem !important;
  --grotto-navbar-color: hsl(210, 30%, 30%) !important;
  --grotto-navbar-new-tab-display: auto !important;
  --grotto-navbar-position-offset: 16px !important;
  --grotto-notice-background-color: hsl(24, 64%, 56%) !important;
  --grotto-notice-border-color: hsl(210, 30%, 30%) !important;
  --grotto-notice-border-radius: 0rem !important;
  --grotto-notice-border-width: 1px !important;
  --grotto-notice-color: hsl(40, 14%, 86%) !important;
  --grotto-progress-background-color: hsl(210, 30%, 30%) !important;
  --grotto-progress-border-color: hsl(210, 30%, 30%) !important;
  --grotto-progress-color: hsl(24, 64%, 56%) !important;
  --grotto-progress-radius: 0rem !important;
  --grotto-prompt-background-color: hsl(40, 14%, 86%) !important;
  --grotto-prompt-border-color: hsl(210, 30%, 30%) !important;
  --grotto-prompt-border-radius: 0rem !important;
  --grotto-prompt-border-width: 1px !important;
  --grotto-prompt-color: hsl(210, 30%, 30%) !important;
  --grotto-properties-background-color: hsl(40, 14%, 86%) !important;
  --grotto-properties-border-color: hsl(210, 30%, 30%) !important;
  --grotto-properties-border-radius: 0rem !important;
  --grotto-properties-color: hsl(210, 30%, 30%) !important;
  --grotto-pull-background-color: hsl(24, 64%, 56%) !important;
  --grotto-pull-border-color: hsl(210, 30%, 30%) !important;
  --grotto-pull-border-radius: 0rem !important;
  --grotto-pull-color: hsl(40, 14%, 86%) !important;
  --grotto-redacted: 'Flow Circular' !important;
  --grotto-resize-handle-border-color: transparent !important;
  --grotto-resize-handle-border-width: 1px !important;
  --grotto-resize-handle-color: hsl(210, 30%, 30%) !important;
  --grotto-ribbon-border-color: transparent !important;
  --grotto-ribbon-border-radius: 0rem !important;
  --grotto-ribbon-border-width: 1px !important;
  --grotto-scrollbar-border-color: hsl(210, 30%, 30%) !important;
  --grotto-settings-background-color: hsl(40, 14%, 82%) !important;
  --grotto-settings-border-color: hsl(210, 30%, 30%) !important;
  --grotto-settings-border-radius: 0rem !important;
  --grotto-settings-color: hsl(210, 30%, 30%) !important;
  --grotto-slider-background-color: hsl(210, 30%, 30%) !important;
  --grotto-slider-border-color: hsl(40, 14%, 86%) !important;
  --grotto-statusbar-background-color: hsl(40, 14%, 82%) !important;
  --grotto-statusbar-border-color: hsl(210, 30%, 30%) !important;
  --grotto-statusbar-border-radius: 0rem !important;
  --grotto-statusbar-color: hsl(210, 30%, 30%) !important;
  --grotto-strikethrough-color: hsl(210, 30%, 30%) !important;
  --grotto-strikethrough-opacity: 0.5 !important;
  --grotto-strikethrough-weight: 500 !important;
  --grotto-suggestion-background-color: hsl(40, 14%, 76%) !important;
  --grotto-suggestion-border-color: hsl(210, 30%, 30%) !important;
  --grotto-suggestion-border-radius: 0rem !important;
  --grotto-suggestion-color: hsl(210, 30%, 30%) !important;
  --grotto-suggestion-selected-background-color: hsl(24, 64%, 56%) !important;
  --grotto-suggestion-selected-color: hsl(40, 14%, 86%) !important;
  --grotto-tab-switcher-background-color: hsl(40, 14%, 86%) !important;
  --grotto-tab-switcher-border-color: hsl(210, 30%, 30%) !important;
  --grotto-tab-switcher-border-radius: 0rem !important;
  --grotto-tab-switcher-color: hsl(210, 30%, 30%) !important;
  --grotto-tab-switcher-menu-background-color: hsl(40, 14%, 76%) !important;
  --grotto-tab-switcher-selected-tab-background-color: hsl(24, 64%, 56%) !important;
  --grotto-tab-switcher-tab-height: 200px !important;
  --grotto-table-background-color: transparent !important;
  --grotto-table-border-color: hsl(210, 30%, 30%) !important;
  --grotto-table-border-radius: 0rem !important;
  --grotto-table-border-style: separate !important;
  --grotto-table-border-width: 1px !important;
  --grotto-table-cell-width: fit-content !important;
  --grotto-table-cell-width-reading: wrap !important;
  --grotto-table-color: hsl(210, 30%, 30%) !important;
  --grotto-tag-background-color: hsl(210, 30%, 30%) !important;
  --grotto-tag-border-color: hsl(210, 30%, 30%) !important;
  --grotto-tag-border-radius: 0rem !important;
  --grotto-tag-border-width: 1.5px !important;
  --grotto-tag-color: hsl(40, 14%, 86%) !important;
  --grotto-tag-padding-x: 0.4rem !important;
  --grotto-tag-padding-y: 0.1rem !important;
  --grotto-tag-pointer-events: none !important;
  --grotto-tag-size: 0.8rem !important;
  --grotto-tag-weight: 600 !important;
  --grotto-text-color-on-accent: hsl(40, 14%, 86%) !important;
  --grotto-titlebar-border-radius: 0rem !important;
  --grotto-titlebar-color: hsl(210, 30%, 30%) !important;
  --grotto-toggle-background-color: hsl(40, 14%, 86%) !important;
  --grotto-toggle-border-color: hsl(210, 30%, 30%) !important;
  --grotto-toggle-border-width: 1px !important;
  --grotto-toggle-enabled-background-color: hsl(24, 64%, 56%) !important;
  --grotto-tooltip-background-color: hsl(40, 14%, 76%) !important;
  --grotto-tooltip-border-color: hsl(210, 30%, 30%) !important;
  --grotto-tooltip-border-radius: 0rem !important;
  --grotto-tooltip-border-width: 1px !important;
  --grotto-tooltip-color: hsl(210, 30%, 30%) !important;
  --grotto-view-header-background-color: hsl(40, 14%, 76%) !important;
  --grotto-view-header-color: hsl(210, 30%, 30%) !important;
  --grotto-view-header-sidebar-toggle-display: none !important;
  --headerFont: 'Quicksand' !important;
  --heading-formatting: hsl(210, 30%, 36%) !important;
  --heading-spacing: 0rem !important;
  --highlight: hsl(40, 14%, 76%) !important;
  --icon-color: hsl(210, 30%, 36%) !important;
  --icon-color-active: hsl(24, 64%, 56%) !important;
  --icon-color-focused: hsl(210, 30%, 30%) !important;
  --icon-color-hover: hsl(210, 30%, 36%) !important;
  --input-date-separator: hsl(210, 30%, 36%) !important;
  --input-placeholder-color: hsl(210, 30%, 36%) !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(24, 64%, 56%) !important;
  --interactive-accent-hover: hsl(24, 64%, 56%) !important;
  --interactive-accent-hsl: 24, 64%, 56% !important;
  --light: hsl(40, 14%, 86%) !important;
  --lightgray: hsl(40, 14%, 82%) !important;
  --link-color: hsl(24, 64%, 56%) !important;
  --link-color-hover: hsl(24, 64%, 56%) !important;
  --link-external-color: hsl(24, 64%, 56%) !important;
  --link-external-color-hover: hsl(24, 64%, 56%) !important;
  --link-unresolved-color: hsl(24, 64%, 56%) !important;
  --link-unresolved-decoration-color: hsla(24, 64%, 56%, 0.3) !important;
  --list-bullet-radius: 0rem !important;
  --list-marker-color: hsl(210, 30%, 30%) !important;
  --list-marker-color-collapsed: hsl(210, 30%, 30%) !important;
  --list-marker-color-hover: hsl(210, 30%, 30%) !important;
  --menu-background: hsl(40, 14%, 82%) !important;
  --menu-radius: 0px !important;
  --menu-shadow: none !important;
  --metadata-input-font: 'Quicksand' !important;
  --metadata-input-text-color: hsl(210, 30%, 30%) !important;
  --metadata-label-font: 'Quicksand' !important;
  --metadata-label-text-color: hsl(210, 30%, 36%) !important;
  --metadata-label-text-color-hover: hsl(210, 30%, 36%) !important;
  --modal-background: hsl(40, 14%, 86%) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: hsl(210, 30%, 36%) !important;
  --nav-collapse-icon-color-collapsed: hsl(210, 30%, 36%) !important;
  --nav-heading-color: hsl(210, 30%, 30%) !important;
  --nav-heading-color-collapsed: hsl(210, 30%, 36%) !important;
  --nav-heading-color-collapsed-hover: hsl(210, 30%, 36%) !important;
  --nav-heading-color-hover: hsl(210, 30%, 30%) !important;
  --nav-item-background-selected: hsla(24, 64%, 56%, 0.15) !important;
  --nav-item-color: hsl(210, 30%, 36%) !important;
  --nav-item-color-active: hsl(210, 30%, 30%) !important;
  --nav-item-color-highlighted: hsl(24, 64%, 56%) !important;
  --nav-item-color-hover: hsl(210, 30%, 30%) !important;
  --nav-item-color-selected: hsl(210, 30%, 30%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: hsl(210, 30%, 36%) !important;
  --nav-tag-color-active: hsl(210, 30%, 36%) !important;
  --nav-tag-color-hover: hsl(210, 30%, 36%) !important;
  --nav-tag-radius: 0px !important;
  --p-spacing: 0rem !important;
  --pdf-background: hsl(40, 14%, 86%) !important;
  --pdf-page-background: hsl(40, 14%, 86%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(40, 14%, 86%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-color: hsl(210, 30%, 36%) !important;
  --pill-color-hover: hsl(210, 30%, 30%) !important;
  --pill-color-remove: hsl(210, 30%, 36%) !important;
  --pill-color-remove-hover: hsl(24, 64%, 56%) !important;
  --prompt-background: hsl(40, 14%, 86%) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: none !important;
  --raised-shadow: none !important;
  --ribbon-background: hsl(40, 14%, 82%) !important;
  --ribbon-background-collapsed: hsl(40, 14%, 86%) !important;
  --scrollbar-active-thumb-bg: hsl(24, 64%, 56%) !important;
  --scrollbar-bg: hsl(24, 64%, 56%) !important;
  --scrollbar-border-width: 3px !important;
  --scrollbar-radius: 0rem !important;
  --scrollbar-thumb-bg: hsl(24, 64%, 56%) !important;
  --search-clear-button-color: hsl(210, 30%, 36%) !important;
  --search-icon-color: hsl(210, 30%, 36%) !important;
  --search-result-background: hsl(40, 14%, 86%) !important;
  --secondary: hsl(24, 64%, 56%) !important;
  --setting-group-heading-color: hsl(210, 30%, 30%) !important;
  --setting-items-background: hsl(40, 14%, 86%) !important;
  --setting-items-radius: 0px !important;
  --shadow-edges: none !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shadow-xs: none !important;
  --slider-thumb-y: -7px !important;
  --status-bar-background: hsl(40, 14%, 82%) !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: hsl(210, 30%, 36%) !important;
  --suggestion-background: hsl(40, 14%, 86%) !important;
  --tab-background-active: hsl(40, 14%, 86%) !important;
  --tab-container-background: hsl(40, 14%, 82%) !important;
  --tab-curve: 0rem !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: hsl(40, 14%, 82%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(40, 14%, 82%), transparent) !important;
  --tab-switcher-preview-background-shadow: none !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(24, 64%, 56%) !important;
  --tab-text-color: hsl(210, 30%, 36%) !important;
  --tab-text-color-active: hsl(210, 30%, 36%) !important;
  --tab-text-color-focused: hsl(210, 30%, 36%) !important;
  --tab-text-color-focused-active: hsl(210, 30%, 36%) !important;
  --tab-text-color-focused-active-current: hsl(210, 30%, 30%) !important;
  --tab-text-color-focused-highlighted: hsl(24, 64%, 56%) !important;
  --table-add-button-border-color: hsl(210, 30%, 30%) !important;
  --table-border-color: hsl(210, 30%, 30%) !important;
  --table-drag-handle-background-active: hsl(24, 64%, 56%) !important;
  --table-drag-handle-color: hsl(210, 30%, 36%) !important;
  --table-header-background-hover: transparent !important;
  --table-header-border-color: hsl(210, 30%, 30%) !important;
  --table-header-color: hsl(210, 30%, 30%) !important;
  --table-selection: hsla(24, 64%, 56%, 0.1) !important;
  --table-selection-border-color: hsl(24, 64%, 56%) !important;
  --table-text-color: hsl(210, 30%, 30%) !important;
  --tag-background: hsla(24, 64%, 56%, 0.1) !important;
  --tag-background-hover: hsla(24, 64%, 56%, 0.2) !important;
  --tag-border-color: hsla(24, 64%, 56%, 0.15) !important;
  --tag-border-color-hover: hsla(24, 64%, 56%, 0.15) !important;
  --tag-color: hsl(24, 64%, 56%) !important;
  --tag-color-hover: hsl(24, 64%, 56%) !important;
  --tertiary: hsl(24, 64%, 56%) !important;
  --text-accent: hsl(24, 64%, 56%) !important;
  --text-accent-hover: hsl(24, 64%, 56%) !important;
  --text-error: hsl(0, 50%, 50%) !important;
  --text-faint: hsl(210, 30%, 36%) !important;
  --text-highlight-bg: hsl(40, 14%, 76%) !important;
  --text-muted: hsl(210, 30%, 36%) !important;
  --text-normal: hsl(210, 30%, 30%) !important;
  --text-selection: hsla(24, 64%, 56%, 1) !important;
  --text-success: hsl(100, 50%, 50%) !important;
  --text-warning: hsl(30, 50%, 50%) !important;
  --textHighlight: hsl(40, 14%, 76%) !important;
  --titleFont: 'Quicksand' !important;
  --titlebar-background: hsl(40, 14%, 82%) !important;
  --titlebar-background-focused: hsl(40, 14%, 82%) !important;
  --titlebar-text-color: hsl(210, 30%, 36%) !important;
  --titlebar-text-color-focused: hsl(210, 30%, 30%) !important;
  --touch-radius-l: 0px !important;
  --touch-radius-m: 0px !important;
  --touch-radius-s: 0px !important;
  --touch-radius-xl: 0px !important;
  --touch-radius-xs: 0px !important;
  --touch-radius-xxs: 0px !important;
  --vault-profile-color: hsl(210, 30%, 30%) !important;
  --vault-profile-color-hover: hsl(210, 30%, 30%) !important;
  --workspace-background-translucent: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(216, 211, 203);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(224, 221, 214);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(54, 77, 99);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(224, 221, 214);
  border-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(64, 92, 119);
  font-weight: 500;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(64, 92, 119);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(54, 77, 99);
  border-radius: 0px;
  color: rgb(224, 221, 214);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(64, 92, 119);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(216, 211, 203);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(216, 211, 203);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(224, 221, 214);
  color: rgb(54, 77, 99);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 800;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(202, 197, 185);
  color: rgb(54, 77, 99);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(54, 77, 99) none 0px;
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body del {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(54, 77, 99) none 0px;
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(54, 77, 99);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(215, 128, 71);
  border-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body p {
  color: rgb(64, 92, 119);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(64, 92, 119) none 0px;
  text-decoration-color: rgb(64, 92, 119);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration-color: rgb(215, 128, 71);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(215, 128, 71);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(215, 128, 71) none 0px;
  text-decoration: underline rgba(215, 128, 71, 0.3);
  text-decoration-color: rgba(215, 128, 71, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body dt {
  color: rgb(54, 77, 99);
  font-weight: 500;
}

html[saved-theme="light"] body ol > li {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body ul > li {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(64, 92, 119);
}

html[saved-theme="light"] body blockquote {
  font-family: Quicksand;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body table {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
  margin-top: 0px;
  width: 187.766px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  color: rgb(54, 77, 99);
  font-weight: 500;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  color: rgb(54, 77, 99);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(202, 197, 185);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(202, 197, 185);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(54, 77, 99);
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
  background-color: rgb(202, 197, 185);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(202, 197, 185);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 1.6px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.6px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body figcaption {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(224, 221, 214);
  border-left-color: rgb(224, 221, 214);
  border-right-color: rgb(224, 221, 214);
  border-top-color: rgb(224, 221, 214);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(64, 92, 119);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 92, 119);
  border-right-color: rgb(64, 92, 119);
  border-top-color: rgb(64, 92, 119);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(54, 77, 99);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-style: solid;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-right-style: solid;
  border-top-color: rgb(54, 77, 99);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Quicksand;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Quicksand;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(54, 77, 99);
  text-decoration-color: rgb(54, 77, 99);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  color: rgb(54, 77, 99);
  gap: 2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: hsl(210, 30%, 30%);
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
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
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
  font-weight: 500;
  outline: rgb(54, 77, 99) none 0px;
  text-decoration-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 221, 214);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 221, 214);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(215, 128, 71);
  color: rgb(224, 221, 214);
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-width: 0px;
  border-left-color: rgb(54, 77, 99);
  border-left-style: solid;
  border-right-color: rgb(54, 77, 99);
  border-right-style: solid;
  border-top-color: rgb(54, 77, 99);
  border-top-style: solid;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(215, 128, 71);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 221, 214);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(215, 128, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 221, 214);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(224, 221, 214);
}

html[saved-theme="light"] body h1 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="light"] body h2 {
  color: rgb(224, 221, 214);
  font-family: Quicksand;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body h3 {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body h4 {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body h5 {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body h6 {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: hsl(210, 30%, 30%);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(224, 221, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 221, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(224, 221, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 221, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(224, 221, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(224, 221, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 221, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(224, 221, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 221, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(224, 221, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 221, 214);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
  font-weight: 500;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(54, 77, 99);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(216, 211, 203);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(54, 77, 99);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
  font-weight: 500;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(54, 77, 99);
  stroke: rgb(54, 77, 99);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(64, 92, 119);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 92, 119);
  border-right-color: rgb(64, 92, 119);
  border-top-color: rgb(64, 92, 119);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(64, 92, 119);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(64, 92, 119);
  font-family: Quicksand;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body .metadata {
  color: rgb(64, 92, 119);
  font-family: Quicksand;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(64, 92, 119);
  border-left-color: rgb(64, 92, 119);
  border-right-color: rgb(64, 92, 119);
  border-top-color: rgb(64, 92, 119);
  color: rgb(64, 92, 119);
  font-family: Quicksand;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(216, 211, 203);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body abbr {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-width: 1px;
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(224, 221, 214);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(54, 77, 99);
  font-family: Quicksand;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(54, 77, 99);
  border-left-color: rgb(54, 77, 99);
  border-right-color: rgb(54, 77, 99);
  border-top-color: rgb(54, 77, 99);
}

html[saved-theme="light"] body sub {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body summary {
  color: rgb(54, 77, 99);
  font-weight: 500;
}

html[saved-theme="light"] body sup {
  color: rgb(54, 77, 99);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(54, 77, 99);
  border-bottom-color: rgb(54, 77, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 77, 99);
  border-left-width: 1px;
  border-right-color: rgb(54, 77, 99);
  border-right-width: 1px;
  border-top-color: rgb(54, 77, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(224, 221, 214);
}`,
  },
};
