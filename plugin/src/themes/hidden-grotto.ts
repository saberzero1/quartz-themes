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
  --accent-h: 16;
  --accent-l: 60%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgba(235, 115, 71, 0.1);
  --background-modifier-box-shadow: none;
  --background-modifier-cover: rgba(0, 0, 0, 0.5);
  --background-modifier-error: rgb(191, 64, 64);
  --background-modifier-error-hover: rgb(191, 64, 64);
  --background-modifier-success: rgb(106, 191, 64);
  --background-primary: rgb(50, 50, 72);
  --background-primary-alt: rgb(50, 50, 72);
  --background-secondary: rgb(42, 42, 60);
  --background-secondary-alt: rgb(42, 42, 60);
  --bases-cards-background: rgb(50, 50, 72);
  --bases-cards-cover-background: rgb(50, 50, 72);
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: rgb(231, 220, 208);
  --bases-table-border-color: rgb(245, 240, 235);
  --bases-table-cell-background-active: rgb(50, 50, 72);
  --bases-table-cell-background-disabled: rgb(50, 50, 72);
  --bases-table-cell-background-selected: rgba(235, 115, 71, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 115, 71);
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: rgb(50, 50, 72);
  --bases-table-header-background: rgb(50, 50, 72);
  --bases-table-header-color: rgb(231, 220, 208);
  --bases-table-summary-background: rgb(50, 50, 72);
  --blockquote-border-color: rgb(235, 115, 71);
  --blockquote-color: rgb(245, 240, 235);
  --blur-background: none;
  --bold-weight: 600;
  --callout-default: rgb(245, 240, 235);
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: rgb(50, 50, 72);
  --canvas-card-label-color: rgb(231, 220, 208);
  --canvas-controls-radius: 0px;
  --caret-color: rgb(245, 240, 235);
  --checkbox-border-color: rgb(231, 220, 208);
  --checkbox-border-color-hover: rgb(231, 220, 208);
  --checkbox-color: rgb(235, 115, 71);
  --checkbox-color-hover: rgb(235, 115, 71);
  --checkbox-marker-color: transparent;
  --checkbox-radius: 0px;
  --checklist-done-color: rgb(231, 220, 208);
  --clickable-icon-radius: 0px;
  --code-background: rgb(50, 50, 72);
  --code-border-color: rgb(245, 240, 235);
  --code-border-width: 1px;
  --code-comment: rgb(231, 220, 208);
  --code-function: rgb(149, 138, 80);
  --code-important: rgb(184, 153, 122);
  --code-keyword: rgb(184, 122, 153);
  --code-normal: rgb(245, 240, 235);
  --code-operator: rgb(184, 122, 122);
  --code-property: rgb(89, 166, 153);
  --code-punctuation: rgb(231, 220, 208);
  --code-string: rgb(89, 166, 89);
  --code-tag: rgb(184, 122, 122);
  --code-value: rgb(153, 122, 184);
  --collapse-icon-color: rgb(231, 220, 208);
  --collapse-icon-color-collapsed: rgb(235, 115, 71);
  --color-accent: rgb(235, 115, 71);
  --color-accent-1: rgb(235, 115, 71);
  --color-accent-2: rgb(235, 115, 71);
  --color-accent-hsl: 16, 80%, 60%;
  --divider-color-hover: rgb(235, 115, 71);
  --divider-width: 0px;
  --divider-width-hover: 2px;
  --embed-border-start: 2px solid rgb(235, 115, 71);
  --file-header-background: rgb(50, 50, 72);
  --file-header-background-focused: rgb(50, 50, 72);
  --file-header-font: '??';
  --flair-color: rgb(245, 240, 235);
  --font-interface: '??';
  --font-mermaid: '??';
  --font-monospace: '??';
  --font-print: '??';
  --font-text: '??';
  --footnote-id-color: rgb(231, 220, 208);
  --footnote-id-color-no-occurrences: rgb(231, 220, 208);
  --footnote-radius: 0px;
  --graph-node: rgb(245, 240, 235);
  --graph-node-attachment: rgb(106, 191, 64);
  --graph-node-focused: rgb(235, 115, 71);
  --graph-node-tag: rgb(235, 115, 71);
  --graph-node-unresolved: rgb(231, 220, 208);
  --graph-text: rgb(245, 240, 235);
  --grotto-accent: rgb(235, 115, 71);
  --grotto-accent-h: 16;
  --grotto-accent-l: 60%;
  --grotto-accent-s: 80%;
  --grotto-background-tertiary: rgb(75, 75, 108);
  --grotto-backlink-border-color: rgb(245, 240, 235);
  --grotto-bases-background-color: rgb(50, 50, 72);
  --grotto-bases-border-color: rgb(245, 240, 235);
  --grotto-bases-border-radius: 0rem;
  --grotto-bases-color: rgb(245, 240, 235);
  --grotto-bases-header-background-color: rgb(75, 75, 108);
  --grotto-blockquote-background-color: transparent;
  --grotto-blockquote-border-color: rgb(235, 115, 71);
  --grotto-blockquote-color: rgb(245, 240, 235);
  --grotto-blur: 0px;
  --grotto-bold-color: rgb(235, 115, 71);
  --grotto-bold-weight: 800;
  --grotto-button-background-color: rgb(235, 115, 71);
  --grotto-button-border-color: rgb(245, 240, 235);
  --grotto-button-border-radius: 0rem;
  --grotto-button-color: rgb(245, 240, 235);
  --grotto-calendar-background-color: transparent;
  --grotto-calendar-border-color: rgb(245, 240, 235);
  --grotto-calendar-border-radius: 0rem;
  --grotto-calendar-border-width: 1px;
  --grotto-calendar-color: rgb(245, 240, 235);
  --grotto-calendar-day-active-color: rgb(245, 240, 235);
  --grotto-calendar-day-border-color: transparent;
  --grotto-calendar-day-border-radius: 0rem;
  --grotto-calendar-day-color: rgb(245, 240, 235);
  --grotto-calendar-dayofweek-background-color: transparent;
  --grotto-calendar-dayofweek-border-color: rgb(245, 240, 235);
  --grotto-calendar-dayofweek-border-radius: 0rem;
  --grotto-calendar-dayofweek-color: rgb(245, 240, 235);
  --grotto-calendar-dayofweek-outline-color: transparent;
  --grotto-calendar-month-color: rgb(245, 240, 235);
  --grotto-calendar-pointer-events: auto;
  --grotto-calendar-today-background-color: rgb(235, 115, 71);
  --grotto-calendar-today-border-color: rgb(245, 240, 235);
  --grotto-calendar-today-color: rgb(245, 240, 235);
  --grotto-calendar-view-height: 0vh;
  --grotto-calendar-weekend-border-color: rgb(245, 240, 235);
  --grotto-calendar-weekend-border-width: 1px;
  --grotto-calendar-year-color: rgb(235, 115, 71);
  --grotto-callout-background-color: rgb(50, 50, 72);
  --grotto-callout-border-color: rgb(245, 240, 235);
  --grotto-callout-color: rgb(245, 240, 235);
  --grotto-callout-icon: none;
  --grotto-callout-padding: 8px 16px;
  --grotto-callout-radius: 0rem;
  --grotto-callout-title-size: 1.5rem;
  --grotto-canvas-background-color: rgb(50, 50, 72);
  --grotto-canvas-border-color: rgb(245, 240, 235);
  --grotto-canvas-border-radius: 0rem;
  --grotto-canvas-color: rgb(245, 240, 235);
  --grotto-canvas-controls-background-color: rgb(75, 75, 108);
  --grotto-canvas-controls-color: rgb(245, 240, 235);
  --grotto-canvas-path-color: rgb(245, 240, 235);
  --grotto-canvas-path-node-color: rgb(235, 115, 71);
  --grotto-checkbox-border-color: rgb(245, 240, 235);
  --grotto-checkbox-border-radius: 0rem;
  --grotto-code-background-color: rgb(75, 75, 108);
  --grotto-code-border-color: rgb(245, 240, 235);
  --grotto-code-border-radius: 0rem;
  --grotto-code-color: rgb(245, 240, 235);
  --grotto-code-weight: 500;
  --grotto-comment-color: rgb(245, 240, 235);
  --grotto-comment-weight: 500;
  --grotto-dark-0: rgb(42, 42, 60);
  --grotto-dark-1: rgb(50, 50, 72);
  --grotto-dark-2: rgb(75, 75, 108);
  --grotto-dragging-background-color: rgb(235, 115, 71);
  --grotto-dragging-border-color: rgb(245, 240, 235);
  --grotto-dragging-border-radius: 0rem;
  --grotto-dragging-color: rgb(245, 240, 235);
  --grotto-drawer-background-color: rgb(235, 115, 71);
  --grotto-drawer-border-color: rgb(245, 240, 235);
  --grotto-drawer-border-radius: 0rem;
  --grotto-drawer-color: rgb(245, 240, 235);
  --grotto-dropdown-background-color: rgb(235, 115, 71);
  --grotto-dropdown-border-color: rgb(245, 240, 235);
  --grotto-dropdown-border-radius: 0rem;
  --grotto-dropdown-color: rgb(245, 240, 235);
  --grotto-dropdown-option-background-color: rgb(50, 50, 72);
  --grotto-dropdown-option-color: rgb(245, 240, 235);
  --grotto-embed-background-color: transparent;
  --grotto-embed-border-color: rgb(245, 240, 235);
  --grotto-embed-border-radius: 0rem;
  --grotto-embed-color: rgb(245, 240, 235);
  --grotto-embed-title-color: rgb(245, 240, 235);
  --grotto-embed-title-size: 1.5rem;
  --grotto-embed-title-visibility: block;
  --grotto-filenav-active-background-color: rgb(235, 115, 71);
  --grotto-filenav-active-color: rgb(245, 240, 235);
  --grotto-filenav-background-color: rgb(42, 42, 60);
  --grotto-filenav-border-color: rgb(245, 240, 235);
  --grotto-filenav-border-radius: 0rem;
  --grotto-filenav-button-background-color: rgb(75, 75, 108);
  --grotto-filenav-color: rgb(245, 240, 235);
  --grotto-filenav-tag-background-color: rgb(245, 240, 235);
  --grotto-filenav-tag-color: rgb(42, 42, 60);
  --grotto-font-weight: 500;
  --grotto-graph-controls-background-color: rgb(75, 75, 108);
  --grotto-graph-controls-border-color: rgb(245, 240, 235);
  --grotto-graph-controls-border-radius: 0rem;
  --grotto-graph-controls-color: rgb(245, 240, 235);
  --grotto-graph-line-color: rgb(245, 240, 235);
  --grotto-graph-node-color: rgb(245, 240, 235);
  --grotto-graph-sidebar-controls-background-color: rgb(75, 75, 108);
  --grotto-graph-sidebar-controls-border-color: rgb(245, 240, 235);
  --grotto-graph-sidebar-controls-color: rgb(245, 240, 235);
  --grotto-header-1-background-color: rgb(235, 115, 71);
  --grotto-header-1-border-color: rgb(245, 240, 235);
  --grotto-header-1-border-radius: 0rem;
  --grotto-header-1-color: rgb(245, 240, 235);
  --grotto-header-1-size: 1.5rem;
  --grotto-header-2-background-color: rgb(245, 240, 235);
  --grotto-header-2-border-color: rgb(245, 240, 235);
  --grotto-header-2-border-radius: 0rem;
  --grotto-header-2-color: rgb(50, 50, 72);
  --grotto-header-2-size: 1.5rem;
  --grotto-header-3-background-color: transparent;
  --grotto-header-3-border-color: rgb(245, 240, 235);
  --grotto-header-3-border-radius: 0rem;
  --grotto-header-3-color: rgb(245, 240, 235);
  --grotto-header-3-size: 1.5rem;
  --grotto-header-4-background-color: transparent;
  --grotto-header-4-border-color: rgb(245, 240, 235);
  --grotto-header-4-border-radius: 0rem;
  --grotto-header-4-color: rgb(245, 240, 235);
  --grotto-header-4-size: 1.5rem;
  --grotto-header-5-background-color: transparent;
  --grotto-header-5-border-color: rgb(235, 115, 71);
  --grotto-header-5-border-radius: 0rem;
  --grotto-header-5-color: rgb(245, 240, 235);
  --grotto-header-5-size: 1.5rem;
  --grotto-header-6-background-color: transparent;
  --grotto-header-6-border-color: transparent;
  --grotto-header-6-border-radius: 0rem;
  --grotto-header-6-color: rgb(245, 240, 235);
  --grotto-header-6-size: 1.5rem;
  --grotto-header-border-radius: 0rem;
  --grotto-header-line-height: 2rem;
  --grotto-header-size: 1.5rem;
  --grotto-header-weight: 500;
  --grotto-icon-color: rgb(245, 240, 235);
  --grotto-input-radius: 0rem;
  --grotto-italic-color: rgb(235, 115, 71);
  --grotto-italic-weight: 500;
  --grotto-light-0: rgb(238, 230, 221);
  --grotto-light-1: rgb(245, 240, 235);
  --grotto-light-2: rgb(231, 220, 208);
  --grotto-link-color: rgb(235, 115, 71);
  --grotto-link-weight: 500;
  --grotto-list-marker-color: rgb(245, 240, 235);
  --grotto-menu-background-color: rgb(42, 42, 60);
  --grotto-menu-border-color: rgb(245, 240, 235);
  --grotto-menu-border-radius: 0rem;
  --grotto-menu-color: rgb(245, 240, 235);
  --grotto-mobile-toolbar-background-color: rgb(75, 75, 108);
  --grotto-mobile-toolbar-border-color: rgb(245, 240, 235);
  --grotto-mobile-toolbar-border-radius: 0rem;
  --grotto-mobile-toolbar-color: rgb(245, 240, 235);
  --grotto-modal-background-color: rgb(50, 50, 72);
  --grotto-modal-border-color: rgb(245, 240, 235);
  --grotto-modal-border-radius: 0rem;
  --grotto-modal-color: rgb(245, 240, 235);
  --grotto-navbar-background-color: rgb(75, 75, 108);
  --grotto-navbar-border-color: rgb(245, 240, 235);
  --grotto-navbar-border-radius: 0rem;
  --grotto-navbar-color: rgb(245, 240, 235);
  --grotto-navbar-new-tab-display: auto;
  --grotto-navbar-position-offset: 16px;
  --grotto-notice-background-color: rgb(235, 115, 71);
  --grotto-notice-border-color: rgb(245, 240, 235);
  --grotto-notice-border-radius: 0rem;
  --grotto-notice-color: rgb(245, 240, 235);
  --grotto-progress-background-color: rgb(245, 240, 235);
  --grotto-progress-border-color: rgb(245, 240, 235);
  --grotto-progress-color: rgb(235, 115, 71);
  --grotto-progress-radius: 0rem;
  --grotto-prompt-background-color: rgb(50, 50, 72);
  --grotto-prompt-border-color: rgb(245, 240, 235);
  --grotto-prompt-border-radius: 0rem;
  --grotto-prompt-color: rgb(245, 240, 235);
  --grotto-properties-background-color: rgb(50, 50, 72);
  --grotto-properties-border-color: rgb(245, 240, 235);
  --grotto-properties-border-radius: 0rem;
  --grotto-properties-color: rgb(245, 240, 235);
  --grotto-pull-background-color: rgb(235, 115, 71);
  --grotto-pull-border-color: rgb(245, 240, 235);
  --grotto-pull-border-radius: 0rem;
  --grotto-pull-color: rgb(245, 240, 235);
  --grotto-redacted: 'Flow Circular';
  --grotto-resize-handle-border-color: transparent;
  --grotto-resize-handle-border-width: 1px;
  --grotto-resize-handle-color: rgb(245, 240, 235);
  --grotto-ribbon-border-color: transparent;
  --grotto-ribbon-border-radius: 0rem;
  --grotto-ribbon-border-width: 1px;
  --grotto-scrollbar-border-color: rgb(245, 240, 235);
  --grotto-settings-background-color: rgb(42, 42, 60);
  --grotto-settings-border-color: rgb(245, 240, 235);
  --grotto-settings-border-radius: 0rem;
  --grotto-settings-color: rgb(245, 240, 235);
  --grotto-slider-background-color: rgb(245, 240, 235);
  --grotto-slider-border-color: rgb(50, 50, 72);
  --grotto-statusbar-background-color: rgb(75, 75, 108);
  --grotto-statusbar-border-color: rgb(245, 240, 235);
  --grotto-statusbar-border-radius: 0rem;
  --grotto-statusbar-color: rgb(245, 240, 235);
  --grotto-strikethrough-color: rgb(245, 240, 235);
  --grotto-strikethrough-opacity: 0.5;
  --grotto-strikethrough-weight: 500;
  --grotto-suggestion-background-color: rgb(75, 75, 108);
  --grotto-suggestion-border-color: rgb(245, 240, 235);
  --grotto-suggestion-border-radius: 0rem;
  --grotto-suggestion-color: rgb(245, 240, 235);
  --grotto-suggestion-selected-background-color: rgb(235, 115, 71);
  --grotto-suggestion-selected-color: rgb(245, 240, 235);
  --grotto-tab-switcher-background-color: rgb(50, 50, 72);
  --grotto-tab-switcher-border-color: rgb(245, 240, 235);
  --grotto-tab-switcher-border-radius: 0rem;
  --grotto-tab-switcher-color: rgb(245, 240, 235);
  --grotto-tab-switcher-menu-background-color: rgb(75, 75, 108);
  --grotto-tab-switcher-selected-tab-background-color: rgb(235, 115, 71);
  --grotto-tab-switcher-tab-height: 200px;
  --grotto-table-background-color: transparent;
  --grotto-table-border-color: rgb(245, 240, 235);
  --grotto-table-border-radius: 0rem;
  --grotto-table-border-style: separate;
  --grotto-table-border-width: 1px;
  --grotto-table-cell-width: fit-content;
  --grotto-table-cell-width-reading: wrap;
  --grotto-table-color: rgb(245, 240, 235);
  --grotto-tag-background-color: rgb(245, 240, 235);
  --grotto-tag-border-color: rgb(245, 240, 235);
  --grotto-tag-border-radius: 0rem;
  --grotto-tag-border-width: 1.5px;
  --grotto-tag-color: rgb(50, 50, 72);
  --grotto-tag-pointer-events: none;
  --grotto-tag-size: 0.8rem;
  --grotto-tag-weight: 600;
  --grotto-titlebar-border-radius: 0rem;
  --grotto-titlebar-color: rgb(245, 240, 235);
  --grotto-toggle-background-color: rgb(42, 42, 60);
  --grotto-toggle-border-color: rgb(245, 240, 235);
  --grotto-tooltip-background-color: rgb(75, 75, 108);
  --grotto-tooltip-border-color: rgb(245, 240, 235);
  --grotto-tooltip-border-radius: 0rem;
  --grotto-tooltip-color: rgb(245, 240, 235);
  --grotto-ui-border-radius: 0rem;
  --grotto-ui-border-width: 1px;
  --grotto-view-header-background-color: rgb(75, 75, 108);
  --grotto-view-header-border-radius: 0rem;
  --grotto-view-header-color: rgb(245, 240, 235);
  --grotto-view-header-sidebar-toggle-display: none;
  --heading-formatting: rgb(231, 220, 208);
  --heading-spacing: 0rem;
  --icon-color: rgb(231, 220, 208);
  --icon-color-active: rgb(235, 115, 71);
  --icon-color-focused: rgb(245, 240, 235);
  --icon-color-hover: rgb(231, 220, 208);
  --input-date-separator: rgb(231, 220, 208);
  --input-placeholder-color: rgb(231, 220, 208);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(235, 115, 71);
  --interactive-accent-hover: rgb(235, 115, 71);
  --interactive-accent-hsl: 16, 80%, 60%;
  --link-color: rgb(235, 115, 71);
  --link-color-hover: rgb(235, 115, 71);
  --link-external-color: rgb(235, 115, 71);
  --link-external-color-hover: rgb(235, 115, 71);
  --link-unresolved-color: rgb(235, 115, 71);
  --link-unresolved-decoration-color: rgba(235, 115, 71, 0.3);
  --list-bullet-radius: 0rem;
  --list-indent: 2.25em;
  --list-marker-color: rgb(245, 240, 235);
  --list-marker-color-collapsed: rgb(245, 240, 235);
  --list-marker-color-hover: rgb(245, 240, 235);
  --menu-background: rgb(42, 42, 60);
  --menu-radius: 0px;
  --menu-shadow: none;
  --metadata-input-font: '??';
  --metadata-input-height: 28px;
  --metadata-input-text-color: rgb(245, 240, 235);
  --metadata-label-font: '??';
  --metadata-label-text-color: rgb(231, 220, 208);
  --metadata-label-text-color-hover: rgb(231, 220, 208);
  --modal-background: rgb(50, 50, 72);
  --modal-radius: 0px;
  --nav-collapse-icon-color: rgb(231, 220, 208);
  --nav-collapse-icon-color-collapsed: rgb(231, 220, 208);
  --nav-heading-color: rgb(245, 240, 235);
  --nav-heading-color-collapsed: rgb(231, 220, 208);
  --nav-heading-color-collapsed-hover: rgb(231, 220, 208);
  --nav-heading-color-hover: rgb(245, 240, 235);
  --nav-item-background-selected: rgba(235, 115, 71, 0.15);
  --nav-item-color: rgb(231, 220, 208);
  --nav-item-color-active: rgb(245, 240, 235);
  --nav-item-color-highlighted: rgb(235, 115, 71);
  --nav-item-color-hover: rgb(245, 240, 235);
  --nav-item-color-selected: rgb(245, 240, 235);
  --nav-item-radius: 0px;
  --nav-tag-color: rgb(231, 220, 208);
  --nav-tag-color-active: rgb(231, 220, 208);
  --nav-tag-color-hover: rgb(231, 220, 208);
  --nav-tag-radius: 0px;
  --p-spacing: 0rem;
  --pdf-background: rgb(50, 50, 72);
  --pdf-page-background: rgb(50, 50, 72);
  --pdf-shadow: none;
  --pdf-sidebar-background: rgb(50, 50, 72);
  --pdf-thumbnail-shadow: none;
  --pill-color: rgb(231, 220, 208);
  --pill-color-hover: rgb(245, 240, 235);
  --pill-color-remove: rgb(231, 220, 208);
  --pill-color-remove-hover: rgb(235, 115, 71);
  --prompt-background: rgb(50, 50, 72);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --raised-background: none;
  --raised-shadow: none;
  --ribbon-background: rgb(42, 42, 60);
  --ribbon-background-collapsed: rgb(50, 50, 72);
  --scrollbar-active-thumb-bg: rgb(235, 115, 71);
  --scrollbar-bg: rgb(235, 115, 71);
  --scrollbar-border-width: 3px;
  --scrollbar-radius: 0rem;
  --scrollbar-thumb-bg: rgb(235, 115, 71);
  --search-clear-button-color: rgb(231, 220, 208);
  --search-icon-color: rgb(231, 220, 208);
  --search-result-background: rgb(50, 50, 72);
  --setting-group-heading-color: rgb(245, 240, 235);
  --setting-items-background: rgb(50, 50, 72);
  --setting-items-radius: 0px;
  --shadow-edges: none;
  --shadow-l: none;
  --shadow-s: none;
  --shadow-xs: none;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-y: -7px;
  --status-bar-background: rgb(42, 42, 60);
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: rgb(231, 220, 208);
  --suggestion-background: rgb(50, 50, 72);
  --tab-background-active: rgb(50, 50, 72);
  --tab-container-background: rgb(42, 42, 60);
  --tab-curve: 0rem;
  --tab-radius: 0px;
  --tab-switcher-background: rgb(42, 42, 60);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 60), transparent);
  --tab-switcher-preview-background-shadow: none;
  --tab-switcher-preview-radius: 0px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 115, 71);
  --tab-text-color: rgb(231, 220, 208);
  --tab-text-color-active: rgb(231, 220, 208);
  --tab-text-color-focused: rgb(231, 220, 208);
  --tab-text-color-focused-active: rgb(231, 220, 208);
  --tab-text-color-focused-active-current: rgb(245, 240, 235);
  --tab-text-color-focused-highlighted: rgb(235, 115, 71);
  --table-add-button-border-color: rgb(245, 240, 235);
  --table-border-color: rgb(245, 240, 235);
  --table-drag-handle-background-active: rgb(235, 115, 71);
  --table-drag-handle-color: rgb(231, 220, 208);
  --table-header-background-hover: transparent;
  --table-header-border-color: rgb(245, 240, 235);
  --table-header-color: rgb(245, 240, 235);
  --table-header-weight: 600;
  --table-selection: rgba(235, 115, 71, 0.1);
  --table-selection-border-color: rgb(235, 115, 71);
  --table-text-color: rgb(245, 240, 235);
  --tag-background: rgba(235, 115, 71, 0.1);
  --tag-background-hover: rgba(235, 115, 71, 0.2);
  --tag-border-color: rgb(245, 240, 235);
  --tag-border-color-hover: rgba(235, 115, 71, 0.15);
  --tag-border-width: 1.5px;
  --tag-color: rgb(235, 115, 71);
  --tag-color-hover: rgb(235, 115, 71);
  --tag-padding-x: 0.4rem;
  --tag-padding-y: 0.1rem;
  --tag-radius: 0rem;
  --text-accent: rgb(235, 115, 71);
  --text-accent-hover: rgb(235, 115, 71);
  --text-error: rgb(191, 64, 64);
  --text-faint: rgb(231, 220, 208);
  --text-highlight-bg: rgb(75, 75, 108);
  --text-muted: rgb(231, 220, 208);
  --text-normal: rgb(245, 240, 235);
  --text-selection: rgb(235, 115, 71);
  --text-success: rgb(106, 191, 64);
  --text-warning: rgb(191, 128, 64);
  --titlebar-background: rgb(42, 42, 60);
  --titlebar-background-focused: rgb(42, 42, 60);
  --titlebar-text-color: rgb(231, 220, 208);
  --titlebar-text-color-focused: rgb(245, 240, 235);
  --touch-radius-l: 0px;
  --touch-radius-m: 0px;
  --touch-radius-s: 0px;
  --touch-radius-xl: 0px;
  --touch-radius-xs: 0px;
  --touch-radius-xxs: 0px;
  --vault-profile-color: rgb(245, 240, 235);
  --vault-profile-color-hover: rgb(245, 240, 235);
  --workspace-background-translucent: transparent;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(42, 42, 60);
  color: rgb(245, 240, 235);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(50, 50, 72);
  color: rgb(245, 240, 235);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 42, 60);
  color: rgb(245, 240, 235);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(42, 42, 60);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(245, 240, 235);
}

body div#quartz-root {
  background-color: rgb(50, 50, 72);
  color: rgb(245, 240, 235);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .page article p > em, em {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .page article p > i, i {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .page article p > strong, strong {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .text-highlight {
  background-color: rgb(75, 75, 108);
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  outline: rgb(245, 240, 235) none 0px;
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body del {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  outline: rgb(245, 240, 235) none 0px;
  text-decoration: line-through rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body p {
  color: rgb(231, 220, 208);
  font-family: "??";
  font-weight: 500;
  outline: rgb(231, 220, 208) none 0px;
  text-decoration: rgb(231, 220, 208);
  text-decoration-color: rgb(231, 220, 208);
}`,
    links: `body a.external, footer a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body a.internal.broken {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgba(235, 115, 71, 0.3);
  text-decoration-color: rgba(235, 115, 71, 0.3);
}`,
    lists: `body dd {
  color: rgb(245, 240, 235);
}

body dt {
  color: rgb(245, 240, 235);
  font-weight: 500;
}

body ol > li {
  color: rgb(245, 240, 235);
}

body ol.overflow {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body ul > li {
  color: rgb(245, 240, 235);
}

body ul.overflow {
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(231, 220, 208);
  text-decoration: rgb(231, 220, 208);
}

body blockquote {
  font-family: "??";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body table {
  color: rgb(245, 240, 235);
  font-family: "??";
  margin-top: 0px;
  width: 187.766px;
}

body td {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
  font-weight: 500;
}

body th {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(149, 138, 80);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(149, 138, 80);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(149, 138, 80);
  border-left-color: rgb(149, 138, 80);
  border-right-color: rgb(149, 138, 80);
  border-top-color: rgb(149, 138, 80);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body figcaption {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body figure {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body img {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body video {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "??";
}

body .katex-display > .katex > .katex-html {
  font-family: "??";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(231, 220, 208);
  text-decoration: line-through rgb(231, 220, 208);
  text-decoration-color: rgb(231, 220, 208);
}

body input[type=checkbox] {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='*'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='-'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='>'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='?'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='I'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='S'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='b'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='c'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='d'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='f'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='i'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='k'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='l'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='p'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='u'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body li.task-list-item[data-task='w'] {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  gap: 2px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  outline: rgb(245, 240, 235) none 0px;
  text-decoration: rgb(245, 240, 235);
  text-decoration-color: rgb(245, 240, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 240, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(245, 240, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  color: rgb(245, 240, 235);
  font-weight: 500;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(245, 240, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(50, 50, 72);
}

body h1 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body h2 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body h2.page-title, h2.page-title a {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body h3 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body h4 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body h5 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body h6 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

body ::-webkit-scrollbar-corner {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}

body ::-webkit-scrollbar-track {
  background: rgb(50, 50, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 72);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(245, 240, 235);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(245, 240, 235);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(245, 240, 235);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
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

body footer ul li a {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(245, 240, 235);
  font-family: "??";
  font-weight: 500;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(245, 240, 235);
  font-family: "??";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body li.section-li > .section .meta {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(245, 240, 235);
  text-decoration: rgb(245, 240, 235);
}

body ul.section-ul {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(245, 240, 235);
  stroke: rgb(245, 240, 235);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(231, 220, 208);
  font-family: "??";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
  color: rgb(245, 240, 235);
}

body .metadata {
  color: rgb(231, 220, 208);
  font-family: "??";
}

body .metadata-properties {
  border-bottom-color: rgb(231, 220, 208);
  border-left-color: rgb(231, 220, 208);
  border-right-color: rgb(231, 220, 208);
  border-top-color: rgb(231, 220, 208);
  color: rgb(231, 220, 208);
  font-family: "??";
}

body .navigation-progress {
  background-color: rgb(75, 75, 108);
}

body .page-header h2.page-title {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body abbr {
  color: rgb(245, 240, 235);
  text-decoration: underline dotted rgb(245, 240, 235);
}

body details {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body input[type=text] {
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

body kbd {
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

body progress {
  border-bottom-color: rgb(245, 240, 235);
  border-left-color: rgb(245, 240, 235);
  border-right-color: rgb(245, 240, 235);
  border-top-color: rgb(245, 240, 235);
}

body sub {
  color: rgb(245, 240, 235);
}

body summary {
  color: rgb(245, 240, 235);
  font-weight: 500;
}

body sup {
  color: rgb(245, 240, 235);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 16;
  --accent-l: 60%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgba(235, 115, 71, 0.1);
  --background-modifier-box-shadow: none;
  --background-modifier-cover: rgba(0, 0, 0, 0.5);
  --background-modifier-error: rgb(191, 64, 64);
  --background-modifier-error-hover: rgb(191, 64, 64);
  --background-modifier-success: rgb(106, 191, 64);
  --background-primary: rgb(245, 240, 235);
  --background-primary-alt: rgb(245, 240, 235);
  --background-secondary: rgb(238, 230, 221);
  --background-secondary-alt: rgb(238, 230, 221);
  --bases-cards-background: rgb(245, 240, 235);
  --bases-cards-cover-background: rgb(245, 240, 235);
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: rgb(75, 75, 108);
  --bases-table-border-color: rgb(50, 50, 72);
  --bases-table-cell-background-active: rgb(245, 240, 235);
  --bases-table-cell-background-disabled: rgb(245, 240, 235);
  --bases-table-cell-background-selected: rgba(235, 115, 71, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 115, 71);
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: rgb(245, 240, 235);
  --bases-table-header-background: rgb(245, 240, 235);
  --bases-table-header-color: rgb(75, 75, 108);
  --bases-table-summary-background: rgb(245, 240, 235);
  --blockquote-border-color: rgb(235, 115, 71);
  --blockquote-color: rgb(50, 50, 72);
  --blur-background: none;
  --bold-weight: 600;
  --callout-default: rgb(50, 50, 72);
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: rgb(245, 240, 235);
  --canvas-card-label-color: rgb(75, 75, 108);
  --canvas-controls-radius: 0px;
  --caret-color: rgb(50, 50, 72);
  --checkbox-border-color: rgb(75, 75, 108);
  --checkbox-border-color-hover: rgb(75, 75, 108);
  --checkbox-color: rgb(235, 115, 71);
  --checkbox-color-hover: rgb(235, 115, 71);
  --checkbox-marker-color: transparent;
  --checkbox-radius: 0px;
  --checklist-done-color: rgb(75, 75, 108);
  --clickable-icon-radius: 0px;
  --code-background: rgb(245, 240, 235);
  --code-border-color: rgb(50, 50, 72);
  --code-border-width: 1px;
  --code-comment: rgb(75, 75, 108);
  --code-function: rgb(149, 138, 80);
  --code-important: rgb(184, 153, 122);
  --code-keyword: rgb(184, 122, 153);
  --code-normal: rgb(50, 50, 72);
  --code-operator: rgb(184, 122, 122);
  --code-property: rgb(89, 166, 153);
  --code-punctuation: rgb(75, 75, 108);
  --code-string: rgb(89, 166, 89);
  --code-tag: rgb(184, 122, 122);
  --code-value: rgb(153, 122, 184);
  --collapse-icon-color: rgb(75, 75, 108);
  --collapse-icon-color-collapsed: rgb(235, 115, 71);
  --color-accent: rgb(235, 115, 71);
  --color-accent-1: rgb(235, 115, 71);
  --color-accent-2: rgb(235, 115, 71);
  --color-accent-hsl: 16, 80%, 60%;
  --divider-color-hover: rgb(235, 115, 71);
  --divider-width: 0px;
  --divider-width-hover: 2px;
  --embed-border-start: 2px solid rgb(235, 115, 71);
  --file-header-background: rgb(245, 240, 235);
  --file-header-background-focused: rgb(245, 240, 235);
  --file-header-font: '??';
  --flair-color: rgb(50, 50, 72);
  --font-interface: '??';
  --font-mermaid: '??';
  --font-monospace: '??';
  --font-print: '??';
  --font-text: '??';
  --footnote-id-color: rgb(75, 75, 108);
  --footnote-id-color-no-occurrences: rgb(75, 75, 108);
  --footnote-radius: 0px;
  --graph-node: rgb(50, 50, 72);
  --graph-node-attachment: rgb(106, 191, 64);
  --graph-node-focused: rgb(235, 115, 71);
  --graph-node-tag: rgb(235, 115, 71);
  --graph-node-unresolved: rgb(75, 75, 108);
  --graph-text: rgb(50, 50, 72);
  --grotto-accent: rgb(235, 115, 71);
  --grotto-accent-h: 16;
  --grotto-accent-l: 60%;
  --grotto-accent-s: 80%;
  --grotto-background-tertiary: rgb(231, 220, 208);
  --grotto-backlink-border-color: rgb(50, 50, 72);
  --grotto-bases-background-color: rgb(245, 240, 235);
  --grotto-bases-border-color: rgb(50, 50, 72);
  --grotto-bases-border-radius: 0rem;
  --grotto-bases-color: rgb(50, 50, 72);
  --grotto-bases-header-background-color: rgb(231, 220, 208);
  --grotto-blockquote-background-color: transparent;
  --grotto-blockquote-border-color: rgb(235, 115, 71);
  --grotto-blockquote-color: rgb(50, 50, 72);
  --grotto-blur: 0px;
  --grotto-bold-color: rgb(235, 115, 71);
  --grotto-bold-weight: 800;
  --grotto-button-background-color: rgb(235, 115, 71);
  --grotto-button-border-color: rgb(50, 50, 72);
  --grotto-button-border-radius: 0rem;
  --grotto-button-color: rgb(245, 240, 235);
  --grotto-calendar-background-color: transparent;
  --grotto-calendar-border-color: rgb(50, 50, 72);
  --grotto-calendar-border-radius: 0rem;
  --grotto-calendar-border-width: 1px;
  --grotto-calendar-color: rgb(50, 50, 72);
  --grotto-calendar-day-active-color: rgb(50, 50, 72);
  --grotto-calendar-day-border-color: transparent;
  --grotto-calendar-day-border-radius: 0rem;
  --grotto-calendar-day-color: rgb(50, 50, 72);
  --grotto-calendar-dayofweek-background-color: transparent;
  --grotto-calendar-dayofweek-border-color: rgb(50, 50, 72);
  --grotto-calendar-dayofweek-border-radius: 0rem;
  --grotto-calendar-dayofweek-color: rgb(50, 50, 72);
  --grotto-calendar-dayofweek-outline-color: transparent;
  --grotto-calendar-month-color: rgb(50, 50, 72);
  --grotto-calendar-pointer-events: auto;
  --grotto-calendar-today-background-color: rgb(235, 115, 71);
  --grotto-calendar-today-border-color: rgb(50, 50, 72);
  --grotto-calendar-today-color: rgb(245, 240, 235);
  --grotto-calendar-view-height: 0vh;
  --grotto-calendar-weekend-border-color: rgb(50, 50, 72);
  --grotto-calendar-weekend-border-width: 1px;
  --grotto-calendar-year-color: rgb(235, 115, 71);
  --grotto-callout-background-color: rgb(245, 240, 235);
  --grotto-callout-border-color: rgb(50, 50, 72);
  --grotto-callout-color: rgb(50, 50, 72);
  --grotto-callout-icon: none;
  --grotto-callout-padding: 8px 16px;
  --grotto-callout-radius: 0rem;
  --grotto-callout-title-size: 1.5rem;
  --grotto-canvas-background-color: rgb(245, 240, 235);
  --grotto-canvas-border-color: rgb(50, 50, 72);
  --grotto-canvas-border-radius: 0rem;
  --grotto-canvas-color: rgb(50, 50, 72);
  --grotto-canvas-controls-background-color: rgb(231, 220, 208);
  --grotto-canvas-controls-color: rgb(50, 50, 72);
  --grotto-canvas-path-color: rgb(50, 50, 72);
  --grotto-canvas-path-node-color: rgb(235, 115, 71);
  --grotto-checkbox-border-color: rgb(50, 50, 72);
  --grotto-checkbox-border-radius: 0rem;
  --grotto-code-background-color: rgb(231, 220, 208);
  --grotto-code-border-color: rgb(50, 50, 72);
  --grotto-code-border-radius: 0rem;
  --grotto-code-color: rgb(50, 50, 72);
  --grotto-code-weight: 500;
  --grotto-comment-color: rgb(50, 50, 72);
  --grotto-comment-weight: 500;
  --grotto-dark-0: rgb(42, 42, 60);
  --grotto-dark-1: rgb(50, 50, 72);
  --grotto-dark-2: rgb(75, 75, 108);
  --grotto-dragging-background-color: rgb(235, 115, 71);
  --grotto-dragging-border-color: rgb(50, 50, 72);
  --grotto-dragging-border-radius: 0rem;
  --grotto-dragging-color: rgb(245, 240, 235);
  --grotto-drawer-background-color: rgb(235, 115, 71);
  --grotto-drawer-border-color: rgb(50, 50, 72);
  --grotto-drawer-border-radius: 0rem;
  --grotto-drawer-color: rgb(245, 240, 235);
  --grotto-dropdown-background-color: rgb(235, 115, 71);
  --grotto-dropdown-border-color: rgb(50, 50, 72);
  --grotto-dropdown-border-radius: 0rem;
  --grotto-dropdown-color: rgb(245, 240, 235);
  --grotto-dropdown-option-background-color: rgb(245, 240, 235);
  --grotto-dropdown-option-color: rgb(50, 50, 72);
  --grotto-embed-background-color: transparent;
  --grotto-embed-border-color: rgb(50, 50, 72);
  --grotto-embed-border-radius: 0rem;
  --grotto-embed-color: rgb(50, 50, 72);
  --grotto-embed-title-color: rgb(50, 50, 72);
  --grotto-embed-title-size: 1.5rem;
  --grotto-embed-title-visibility: block;
  --grotto-filenav-active-background-color: rgb(235, 115, 71);
  --grotto-filenav-active-color: rgb(245, 240, 235);
  --grotto-filenav-background-color: rgb(238, 230, 221);
  --grotto-filenav-border-color: rgb(50, 50, 72);
  --grotto-filenav-border-radius: 0rem;
  --grotto-filenav-button-background-color: rgb(231, 220, 208);
  --grotto-filenav-color: rgb(50, 50, 72);
  --grotto-filenav-tag-background-color: rgb(50, 50, 72);
  --grotto-filenav-tag-color: rgb(238, 230, 221);
  --grotto-font-weight: 500;
  --grotto-graph-controls-background-color: rgb(231, 220, 208);
  --grotto-graph-controls-border-color: rgb(50, 50, 72);
  --grotto-graph-controls-border-radius: 0rem;
  --grotto-graph-controls-color: rgb(50, 50, 72);
  --grotto-graph-line-color: rgb(50, 50, 72);
  --grotto-graph-node-color: rgb(50, 50, 72);
  --grotto-graph-sidebar-controls-background-color: rgb(231, 220, 208);
  --grotto-graph-sidebar-controls-border-color: rgb(50, 50, 72);
  --grotto-graph-sidebar-controls-color: rgb(50, 50, 72);
  --grotto-header-1-background-color: rgb(235, 115, 71);
  --grotto-header-1-border-color: rgb(50, 50, 72);
  --grotto-header-1-border-radius: 0rem;
  --grotto-header-1-color: rgb(245, 240, 235);
  --grotto-header-1-size: 1.5rem;
  --grotto-header-2-background-color: rgb(50, 50, 72);
  --grotto-header-2-border-color: rgb(50, 50, 72);
  --grotto-header-2-border-radius: 0rem;
  --grotto-header-2-color: rgb(245, 240, 235);
  --grotto-header-2-size: 1.5rem;
  --grotto-header-3-background-color: transparent;
  --grotto-header-3-border-color: rgb(50, 50, 72);
  --grotto-header-3-border-radius: 0rem;
  --grotto-header-3-color: rgb(50, 50, 72);
  --grotto-header-3-size: 1.5rem;
  --grotto-header-4-background-color: transparent;
  --grotto-header-4-border-color: rgb(50, 50, 72);
  --grotto-header-4-border-radius: 0rem;
  --grotto-header-4-color: rgb(50, 50, 72);
  --grotto-header-4-size: 1.5rem;
  --grotto-header-5-background-color: transparent;
  --grotto-header-5-border-color: rgb(235, 115, 71);
  --grotto-header-5-border-radius: 0rem;
  --grotto-header-5-color: rgb(50, 50, 72);
  --grotto-header-5-size: 1.5rem;
  --grotto-header-6-background-color: transparent;
  --grotto-header-6-border-color: transparent;
  --grotto-header-6-border-radius: 0rem;
  --grotto-header-6-color: rgb(50, 50, 72);
  --grotto-header-6-size: 1.5rem;
  --grotto-header-border-radius: 0rem;
  --grotto-header-line-height: 2rem;
  --grotto-header-size: 1.5rem;
  --grotto-header-weight: 500;
  --grotto-icon-color: rgb(50, 50, 72);
  --grotto-input-radius: 0rem;
  --grotto-italic-color: rgb(235, 115, 71);
  --grotto-italic-weight: 500;
  --grotto-light-0: rgb(238, 230, 221);
  --grotto-light-1: rgb(245, 240, 235);
  --grotto-light-2: rgb(231, 220, 208);
  --grotto-link-color: rgb(235, 115, 71);
  --grotto-link-weight: 500;
  --grotto-list-marker-color: rgb(50, 50, 72);
  --grotto-menu-background-color: rgb(238, 230, 221);
  --grotto-menu-border-color: rgb(50, 50, 72);
  --grotto-menu-border-radius: 0rem;
  --grotto-menu-color: rgb(50, 50, 72);
  --grotto-mobile-toolbar-background-color: rgb(231, 220, 208);
  --grotto-mobile-toolbar-border-color: rgb(50, 50, 72);
  --grotto-mobile-toolbar-border-radius: 0rem;
  --grotto-mobile-toolbar-color: rgb(50, 50, 72);
  --grotto-modal-background-color: rgb(245, 240, 235);
  --grotto-modal-border-color: rgb(50, 50, 72);
  --grotto-modal-border-radius: 0rem;
  --grotto-modal-color: rgb(50, 50, 72);
  --grotto-navbar-background-color: rgb(231, 220, 208);
  --grotto-navbar-border-color: rgb(50, 50, 72);
  --grotto-navbar-border-radius: 0rem;
  --grotto-navbar-color: rgb(50, 50, 72);
  --grotto-navbar-new-tab-display: auto;
  --grotto-navbar-position-offset: 16px;
  --grotto-notice-background-color: rgb(235, 115, 71);
  --grotto-notice-border-color: rgb(50, 50, 72);
  --grotto-notice-border-radius: 0rem;
  --grotto-notice-color: rgb(245, 240, 235);
  --grotto-progress-background-color: rgb(50, 50, 72);
  --grotto-progress-border-color: rgb(50, 50, 72);
  --grotto-progress-color: rgb(235, 115, 71);
  --grotto-progress-radius: 0rem;
  --grotto-prompt-background-color: rgb(245, 240, 235);
  --grotto-prompt-border-color: rgb(50, 50, 72);
  --grotto-prompt-border-radius: 0rem;
  --grotto-prompt-color: rgb(50, 50, 72);
  --grotto-properties-background-color: rgb(245, 240, 235);
  --grotto-properties-border-color: rgb(50, 50, 72);
  --grotto-properties-border-radius: 0rem;
  --grotto-properties-color: rgb(50, 50, 72);
  --grotto-pull-background-color: rgb(235, 115, 71);
  --grotto-pull-border-color: rgb(50, 50, 72);
  --grotto-pull-border-radius: 0rem;
  --grotto-pull-color: rgb(245, 240, 235);
  --grotto-redacted: 'Flow Circular';
  --grotto-resize-handle-border-color: transparent;
  --grotto-resize-handle-border-width: 1px;
  --grotto-resize-handle-color: rgb(50, 50, 72);
  --grotto-ribbon-border-color: transparent;
  --grotto-ribbon-border-radius: 0rem;
  --grotto-ribbon-border-width: 1px;
  --grotto-scrollbar-border-color: rgb(50, 50, 72);
  --grotto-settings-background-color: rgb(238, 230, 221);
  --grotto-settings-border-color: rgb(50, 50, 72);
  --grotto-settings-border-radius: 0rem;
  --grotto-settings-color: rgb(50, 50, 72);
  --grotto-slider-background-color: rgb(50, 50, 72);
  --grotto-slider-border-color: rgb(245, 240, 235);
  --grotto-statusbar-background-color: rgb(231, 220, 208);
  --grotto-statusbar-border-color: rgb(50, 50, 72);
  --grotto-statusbar-border-radius: 0rem;
  --grotto-statusbar-color: rgb(50, 50, 72);
  --grotto-strikethrough-color: rgb(50, 50, 72);
  --grotto-strikethrough-opacity: 0.5;
  --grotto-strikethrough-weight: 500;
  --grotto-suggestion-background-color: rgb(231, 220, 208);
  --grotto-suggestion-border-color: rgb(50, 50, 72);
  --grotto-suggestion-border-radius: 0rem;
  --grotto-suggestion-color: rgb(50, 50, 72);
  --grotto-suggestion-selected-background-color: rgb(235, 115, 71);
  --grotto-suggestion-selected-color: rgb(245, 240, 235);
  --grotto-tab-switcher-background-color: rgb(245, 240, 235);
  --grotto-tab-switcher-border-color: rgb(50, 50, 72);
  --grotto-tab-switcher-border-radius: 0rem;
  --grotto-tab-switcher-color: rgb(50, 50, 72);
  --grotto-tab-switcher-menu-background-color: rgb(231, 220, 208);
  --grotto-tab-switcher-selected-tab-background-color: rgb(235, 115, 71);
  --grotto-tab-switcher-tab-height: 200px;
  --grotto-table-background-color: transparent;
  --grotto-table-border-color: rgb(50, 50, 72);
  --grotto-table-border-radius: 0rem;
  --grotto-table-border-style: separate;
  --grotto-table-border-width: 1px;
  --grotto-table-cell-width: fit-content;
  --grotto-table-cell-width-reading: wrap;
  --grotto-table-color: rgb(50, 50, 72);
  --grotto-tag-background-color: rgb(50, 50, 72);
  --grotto-tag-border-color: rgb(50, 50, 72);
  --grotto-tag-border-radius: 0rem;
  --grotto-tag-border-width: 1.5px;
  --grotto-tag-color: rgb(245, 240, 235);
  --grotto-tag-pointer-events: none;
  --grotto-tag-size: 0.8rem;
  --grotto-tag-weight: 600;
  --grotto-titlebar-border-radius: 0rem;
  --grotto-titlebar-color: rgb(50, 50, 72);
  --grotto-toggle-background-color: rgb(238, 230, 221);
  --grotto-toggle-border-color: rgb(50, 50, 72);
  --grotto-tooltip-background-color: rgb(231, 220, 208);
  --grotto-tooltip-border-color: rgb(50, 50, 72);
  --grotto-tooltip-border-radius: 0rem;
  --grotto-tooltip-color: rgb(50, 50, 72);
  --grotto-ui-border-radius: 0rem;
  --grotto-ui-border-width: 1px;
  --grotto-view-header-background-color: rgb(231, 220, 208);
  --grotto-view-header-border-radius: 0rem;
  --grotto-view-header-color: rgb(50, 50, 72);
  --grotto-view-header-sidebar-toggle-display: none;
  --heading-formatting: rgb(75, 75, 108);
  --heading-spacing: 0rem;
  --icon-color: rgb(75, 75, 108);
  --icon-color-active: rgb(235, 115, 71);
  --icon-color-focused: rgb(50, 50, 72);
  --icon-color-hover: rgb(75, 75, 108);
  --input-date-separator: rgb(75, 75, 108);
  --input-placeholder-color: rgb(75, 75, 108);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(235, 115, 71);
  --interactive-accent-hover: rgb(235, 115, 71);
  --interactive-accent-hsl: 16, 80%, 60%;
  --link-color: rgb(235, 115, 71);
  --link-color-hover: rgb(235, 115, 71);
  --link-external-color: rgb(235, 115, 71);
  --link-external-color-hover: rgb(235, 115, 71);
  --link-unresolved-color: rgb(235, 115, 71);
  --link-unresolved-decoration-color: rgba(235, 115, 71, 0.3);
  --list-bullet-radius: 0rem;
  --list-indent: 2.25em;
  --list-marker-color: rgb(50, 50, 72);
  --list-marker-color-collapsed: rgb(50, 50, 72);
  --list-marker-color-hover: rgb(50, 50, 72);
  --menu-background: rgb(238, 230, 221);
  --menu-radius: 0px;
  --menu-shadow: none;
  --metadata-input-font: '??';
  --metadata-input-height: 28px;
  --metadata-input-text-color: rgb(50, 50, 72);
  --metadata-label-font: '??';
  --metadata-label-text-color: rgb(75, 75, 108);
  --metadata-label-text-color-hover: rgb(75, 75, 108);
  --modal-background: rgb(245, 240, 235);
  --modal-radius: 0px;
  --nav-collapse-icon-color: rgb(75, 75, 108);
  --nav-collapse-icon-color-collapsed: rgb(75, 75, 108);
  --nav-heading-color: rgb(50, 50, 72);
  --nav-heading-color-collapsed: rgb(75, 75, 108);
  --nav-heading-color-collapsed-hover: rgb(75, 75, 108);
  --nav-heading-color-hover: rgb(50, 50, 72);
  --nav-item-background-selected: rgba(235, 115, 71, 0.15);
  --nav-item-color: rgb(75, 75, 108);
  --nav-item-color-active: rgb(50, 50, 72);
  --nav-item-color-highlighted: rgb(235, 115, 71);
  --nav-item-color-hover: rgb(50, 50, 72);
  --nav-item-color-selected: rgb(50, 50, 72);
  --nav-item-radius: 0px;
  --nav-tag-color: rgb(75, 75, 108);
  --nav-tag-color-active: rgb(75, 75, 108);
  --nav-tag-color-hover: rgb(75, 75, 108);
  --nav-tag-radius: 0px;
  --p-spacing: 0rem;
  --pdf-background: rgb(245, 240, 235);
  --pdf-page-background: rgb(245, 240, 235);
  --pdf-shadow: none;
  --pdf-sidebar-background: rgb(245, 240, 235);
  --pdf-thumbnail-shadow: none;
  --pill-color: rgb(75, 75, 108);
  --pill-color-hover: rgb(50, 50, 72);
  --pill-color-remove: rgb(75, 75, 108);
  --pill-color-remove-hover: rgb(235, 115, 71);
  --prompt-background: rgb(245, 240, 235);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --raised-background: none;
  --raised-shadow: none;
  --ribbon-background: rgb(238, 230, 221);
  --ribbon-background-collapsed: rgb(245, 240, 235);
  --scrollbar-active-thumb-bg: rgb(235, 115, 71);
  --scrollbar-bg: rgb(235, 115, 71);
  --scrollbar-border-width: 3px;
  --scrollbar-radius: 0rem;
  --scrollbar-thumb-bg: rgb(235, 115, 71);
  --search-clear-button-color: rgb(75, 75, 108);
  --search-icon-color: rgb(75, 75, 108);
  --search-result-background: rgb(245, 240, 235);
  --setting-group-heading-color: rgb(50, 50, 72);
  --setting-items-background: rgb(245, 240, 235);
  --setting-items-radius: 0px;
  --shadow-edges: none;
  --shadow-l: none;
  --shadow-s: none;
  --shadow-xs: none;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-y: -7px;
  --status-bar-background: rgb(238, 230, 221);
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: rgb(75, 75, 108);
  --suggestion-background: rgb(245, 240, 235);
  --tab-background-active: rgb(245, 240, 235);
  --tab-container-background: rgb(238, 230, 221);
  --tab-curve: 0rem;
  --tab-radius: 0px;
  --tab-switcher-background: rgb(238, 230, 221);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(238, 230, 221), transparent);
  --tab-switcher-preview-background-shadow: none;
  --tab-switcher-preview-radius: 0px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 115, 71);
  --tab-text-color: rgb(75, 75, 108);
  --tab-text-color-active: rgb(75, 75, 108);
  --tab-text-color-focused: rgb(75, 75, 108);
  --tab-text-color-focused-active: rgb(75, 75, 108);
  --tab-text-color-focused-active-current: rgb(50, 50, 72);
  --tab-text-color-focused-highlighted: rgb(235, 115, 71);
  --table-add-button-border-color: rgb(50, 50, 72);
  --table-border-color: rgb(50, 50, 72);
  --table-drag-handle-background-active: rgb(235, 115, 71);
  --table-drag-handle-color: rgb(75, 75, 108);
  --table-header-background-hover: transparent;
  --table-header-border-color: rgb(50, 50, 72);
  --table-header-color: rgb(50, 50, 72);
  --table-header-weight: 600;
  --table-selection: rgba(235, 115, 71, 0.1);
  --table-selection-border-color: rgb(235, 115, 71);
  --table-text-color: rgb(50, 50, 72);
  --tag-background: rgba(235, 115, 71, 0.1);
  --tag-background-hover: rgba(235, 115, 71, 0.2);
  --tag-border-color: rgb(50, 50, 72);
  --tag-border-color-hover: rgba(235, 115, 71, 0.15);
  --tag-border-width: 1.5px;
  --tag-color: rgb(235, 115, 71);
  --tag-color-hover: rgb(235, 115, 71);
  --tag-padding-x: 0.4rem;
  --tag-padding-y: 0.1rem;
  --tag-radius: 0rem;
  --text-accent: rgb(235, 115, 71);
  --text-accent-hover: rgb(235, 115, 71);
  --text-error: rgb(191, 64, 64);
  --text-faint: rgb(75, 75, 108);
  --text-highlight-bg: rgb(231, 220, 208);
  --text-muted: rgb(75, 75, 108);
  --text-normal: rgb(50, 50, 72);
  --text-selection: rgb(235, 115, 71);
  --text-success: rgb(106, 191, 64);
  --text-warning: rgb(191, 128, 64);
  --titlebar-background: rgb(238, 230, 221);
  --titlebar-background-focused: rgb(238, 230, 221);
  --titlebar-text-color: rgb(75, 75, 108);
  --titlebar-text-color-focused: rgb(50, 50, 72);
  --touch-radius-l: 0px;
  --touch-radius-m: 0px;
  --touch-radius-s: 0px;
  --touch-radius-xl: 0px;
  --touch-radius-xs: 0px;
  --touch-radius-xxs: 0px;
  --vault-profile-color: rgb(50, 50, 72);
  --vault-profile-color-hover: rgb(50, 50, 72);
  --workspace-background-translucent: transparent;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 230, 221);
  color: rgb(50, 50, 72);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 240, 235);
  color: rgb(50, 50, 72);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 230, 221);
  color: rgb(50, 50, 72);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 230, 221);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(50, 50, 72);
}

body div#quartz-root {
  background-color: rgb(245, 240, 235);
  color: rgb(50, 50, 72);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .page article p > em, em {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .page article p > i, i {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .page article p > strong, strong {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 800;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body .text-highlight {
  background-color: rgb(231, 220, 208);
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  outline: rgb(50, 50, 72) none 0px;
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body del {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  outline: rgb(50, 50, 72) none 0px;
  text-decoration: line-through rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body p {
  color: rgb(75, 75, 108);
  font-family: "??";
  font-weight: 500;
  outline: rgb(75, 75, 108) none 0px;
  text-decoration: rgb(75, 75, 108);
  text-decoration-color: rgb(75, 75, 108);
}`,
    links: `body a.external, footer a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgb(235, 115, 71);
  text-decoration-color: rgb(235, 115, 71);
}

body a.internal.broken {
  color: rgb(235, 115, 71);
  font-family: "??";
  font-weight: 500;
  outline: rgb(235, 115, 71) none 0px;
  text-decoration: underline rgba(235, 115, 71, 0.3);
  text-decoration-color: rgba(235, 115, 71, 0.3);
}`,
    lists: `body dd {
  color: rgb(50, 50, 72);
}

body dt {
  color: rgb(50, 50, 72);
  font-weight: 500;
}

body ol > li {
  color: rgb(50, 50, 72);
}

body ol.overflow {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body ul > li {
  color: rgb(50, 50, 72);
}

body ul.overflow {
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(75, 75, 108);
  text-decoration: rgb(75, 75, 108);
}

body blockquote {
  font-family: "??";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body table {
  color: rgb(50, 50, 72);
  font-family: "??";
  margin-top: 0px;
  width: 187.766px;
}

body td {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
  font-weight: 500;
}

body th {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(149, 138, 80);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(149, 138, 80);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(149, 138, 80);
  border-left-color: rgb(149, 138, 80);
  border-right-color: rgb(149, 138, 80);
  border-top-color: rgb(149, 138, 80);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body figcaption {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body figure {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body img {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body video {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "??";
}

body .katex-display > .katex > .katex-html {
  font-family: "??";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(75, 75, 108);
  text-decoration: line-through rgb(75, 75, 108);
  text-decoration-color: rgb(75, 75, 108);
}

body input[type=checkbox] {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='*'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='-'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='/'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='>'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='?'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='I'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='S'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='b'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='c'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='d'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='f'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='i'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='k'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='l'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='p'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='u'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body li.task-list-item[data-task='w'] {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  gap: 2px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  outline: rgb(50, 50, 72) none 0px;
  text-decoration: rgb(50, 50, 72);
  text-decoration-color: rgb(50, 50, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 240, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(245, 240, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  color: rgb(245, 240, 235);
  font-weight: 500;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(50, 50, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(235, 115, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(245, 240, 235);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(245, 240, 235);
}

body h1 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body h2 {
  color: rgb(245, 240, 235);
  font-family: "??";
}

body h2.page-title, h2.page-title a {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body h3 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body h4 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body h5 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body h6 {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 240, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 240, 235);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(50, 50, 72);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(50, 50, 72);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(50, 50, 72);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
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

body footer ul li a {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(50, 50, 72);
  font-family: "??";
  font-weight: 500;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(50, 50, 72);
  font-family: "??";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body li.section-li > .section .meta {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(50, 50, 72);
  text-decoration: rgb(50, 50, 72);
}

body ul.section-ul {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(50, 50, 72);
  stroke: rgb(50, 50, 72);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(75, 75, 108);
  font-family: "??";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
  color: rgb(50, 50, 72);
}

body .metadata {
  color: rgb(75, 75, 108);
  font-family: "??";
}

body .metadata-properties {
  border-bottom-color: rgb(75, 75, 108);
  border-left-color: rgb(75, 75, 108);
  border-right-color: rgb(75, 75, 108);
  border-top-color: rgb(75, 75, 108);
  color: rgb(75, 75, 108);
  font-family: "??";
}

body .navigation-progress {
  background-color: rgb(231, 220, 208);
}

body .page-header h2.page-title {
  color: rgb(50, 50, 72);
  font-family: "??";
}

body abbr {
  color: rgb(50, 50, 72);
  text-decoration: underline dotted rgb(50, 50, 72);
}

body details {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body input[type=text] {
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

body kbd {
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

body progress {
  border-bottom-color: rgb(50, 50, 72);
  border-left-color: rgb(50, 50, 72);
  border-right-color: rgb(50, 50, 72);
  border-top-color: rgb(50, 50, 72);
}

body sub {
  color: rgb(50, 50, 72);
}

body summary {
  color: rgb(50, 50, 72);
  font-weight: 500;
}

body sup {
  color: rgb(50, 50, 72);
}`,
  },
};
