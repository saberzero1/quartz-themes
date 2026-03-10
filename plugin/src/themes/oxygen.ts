import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "oxygen", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 201;
  --accent-l: 55%;
  --accent-s: 59%;
  --active-line-bg: rgba(255, 255, 255, 0.04);
  --adaptive-list-edit-offset: 0.5em;
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 640ms;
  --anim-duration-superfast: 80ms;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1);
  --anim-motion-playful: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-speed-modifier: 1;
  --ax1: rgb(73, 161, 208);
  --ax2: rgb(49, 141, 191);
  --ax3: rgb(97, 173, 214);
  --background-modifier-accent: rgb(97, 173, 214);
  --background-modifier-active-hover: rgba(145, 150, 161, 0.12);
  --background-modifier-border: #2d3139;
  --background-modifier-border-focus: #4a5058;
  --background-modifier-border-hover: #3a404a;
  --background-modifier-cover: rgba(19, 20, 22, 0.5);
  --background-modifier-error: rgba(255, 20, 20, 0.12);
  --background-modifier-error-hover: rgba(255, 20, 20, 0.18);
  --background-modifier-error-rgb: 208,66,85;
  --background-modifier-form-field: #1c1d1e;
  --background-modifier-form-field-highlighted: #1c1d1e;
  --background-modifier-form-field-hover: #1c1d1e;
  --background-modifier-hover: rgba(145, 150, 161, 0.12);
  --background-modifier-success: #a8c373;
  --background-modifier-success-rgb: 168,195,115;
  --background-primary: #1c1d1e;
  --background-primary-alt: #17191b;
  --background-secondary: #17191b;
  --background-secondary-alt: #1c1d1e;
  --background-table-rows: #17191b;
  --base-h: 220;
  --base-l: 20%;
  --base-s: 8%;
  --bases-cards-background: #1c1d1e;
  --bases-cards-cover-background: #17191b;
  --bases-cards-shadow: 0 0 0 1px #2d3139;
  --bases-cards-shadow-hover: 0 0 0 1px #3a404a;
  --bases-embed-border-color: #2d3139;
  --bases-group-heading-property-color: hsl(220, -12%, 65%);
  --bases-group-heading-property-size: 11px;
  --bases-header-border-width: 0;
  --bases-table-border-color: #2d3139;
  --bases-table-cell-background-active: #1c1d1e;
  --bases-table-cell-background-disabled: #17191b;
  --bases-table-cell-background-selected: rgba(51, 117, 153, 0.3);
  --bases-table-cell-shadow-active: 0 0 0 2px #4a5058;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(97, 173, 214);
  --bases-table-column-border-width: 0px;
  --bases-table-font-size: 14px;
  --bases-table-group-background: #17191b;
  --bases-table-header-background: #1c1d1e;
  --bases-table-header-background-hover: rgba(145, 150, 161, 0.12);
  --bases-table-header-color: hsl(220, -12%, 65%);
  --bases-table-summary-background: #1c1d1e;
  --bases-table-summary-background-hover: rgba(145, 150, 161, 0.12);
  --bg1: #1c1d1e;
  --bg2: #17191b;
  --bg3: rgba(145, 150, 161, 0.12);
  --blockquote-border-color: #3a404a;
  --blockquote-border-thickness: 1px;
  --blockquote-color: hsl(220, -12%, 65%);
  --blockquote-style: normal;
  --blur-background: color-mix(in srgb, rgba(145, 150, 161, 0.12) 65%, transparent) linear-gradient(rgba(145, 150, 161, 0.12), color-mix(in srgb, rgba(145, 150, 161, 0.12) 65%, transparent));
  --bold-weight: 600;
  --btn-shadow-color: rgba(0, 0, 0, 0.2);
  --calendar-dot-active: hsl(220, -2%, 40%);
  --calendar-dot-today: rgb(73, 161, 208);
  --callout-bug: 208,66,85;
  --callout-default: 108,153,187;
  --callout-error: 208,66,85;
  --callout-example: 158,134,200;
  --callout-fail: 208,66,85;
  --callout-important: 115,187,178;
  --callout-info: 108,153,187;
  --callout-question: 213,118,63;
  --callout-success: 168,195,115;
  --callout-summary: 115,187,178;
  --callout-tip: 115,187,178;
  --callout-title-weight: 600;
  --callout-todo: 108,153,187;
  --callout-warning: 213,118,63;
  --canvas-background: #1c1d1e;
  --canvas-card-label-color: hsl(220, -2%, 40%);
  --canvas-color-1: 208,66,85;
  --canvas-color-2: 213,118,63;
  --canvas-color-3: 229,181,103;
  --canvas-color-4: 168,195,115;
  --canvas-color-5: 115,187,178;
  --canvas-color-6: 158,134,200;
  --canvas-dot-pattern: #3a404a;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: hsl(220, -2%, 87%);
  --chart-color-1: #6c99bb;
  --chart-color-2: #d04255;
  --chart-color-3: #e5b567;
  --chart-color-4: #a8c373;
  --chart-color-5: #d5763f;
  --chart-color-6: #9e86c8;
  --chart-color-7: #73bbb2;
  --chart-color-8: #b05279;
  --chart-max-width: none;
  --chart-width: auto;
  --checkbox-border-color: hsl(220, -2%, 40%);
  --checkbox-border-color-hover: hsl(220, -12%, 65%);
  --checkbox-color: rgb(97, 173, 214);
  --checkbox-color-hover: rgb(73, 161, 208);
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-marker-color: #1c1d1e;
  --checkbox-radius: 50%;
  --checkbox-top: 2px;
  --checklist-done-color: hsl(220, -2%, 87%);
  --checklist-done-decoration: none;
  --code-background: #17191b;
  --code-border-color: #2d3139;
  --code-bracket-background: rgba(145, 150, 161, 0.12);
  --code-comment: hsl(220, -2%, 40%);
  --code-function: #e5b567;
  --code-important: #d5763f;
  --code-keyword: #b05279;
  --code-normal: hsl(220, -2%, 87%);
  --code-operator: #d04255;
  --code-property: #73bbb2;
  --code-punctuation: hsl(220, -12%, 65%);
  --code-string: #a8c373;
  --code-tag: #d04255;
  --code-value: #9e86c8;
  --collapse-icon-color: hsl(220, -2%, 40%);
  --collapse-icon-color-collapsed: rgb(73, 161, 208);
  --color-accent: rgb(73, 161, 208);
  --color-accent-1: rgb(104, 183, 217);
  --color-accent-2: rgb(135, 202, 227);
  --color-accent-hsl: 201, 59%, 55%;
  --color-blue: #6c99bb;
  --color-blue-rgb: 108,153,187;
  --color-cyan: #73bbb2;
  --color-cyan-rgb: 115,187,178;
  --color-green: #a8c373;
  --color-green-rgb: 168,195,115;
  --color-orange: #d5763f;
  --color-orange-rgb: 213,118,63;
  --color-pink: #b05279;
  --color-pink-rgb: 176,82,121;
  --color-purple: #9e86c8;
  --color-purple-rgb: 158,134,200;
  --color-red: #d04255;
  --color-red-rgb: 208,66,85;
  --color-yellow: #e5b567;
  --color-yellow-rgb: 229,181,103;
  --container-chart-max-width: 88%;
  --container-chart-width: 40rem;
  --container-dataview-table-width: 40rem;
  --container-iframe-max-width: 88%;
  --container-iframe-width: 40rem;
  --container-img-max-width: 88%;
  --container-img-width: 40rem;
  --container-map-max-width: 88%;
  --container-map-width: 40rem;
  --container-table-margin: calc(max( calc(50% - 40rem/2), calc(50% - 88%/2) ) - 16px);
  --container-table-max-width: 88%;
  --container-table-width: calc(40rem + 32px);
  --content-line-width: min(40rem, 88%);
  --content-margin: auto;
  --content-margin-start: max( calc(50% - 20rem), 6% );
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #2d3139;
  --divider-color-hover: rgb(97, 173, 214);
  --dropdown-background: rgba(145, 150, 161, 0.12);
  --dropdown-background-hover: #2d3139;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(97, 173, 214);
  --embed-decoration-color: #3a404a;
  --embed-decoration-style: solid;
  --embed-max-height: none;
  --file-header-background: #1c1d1e;
  --file-header-background-focused: #1c1d1e;
  --file-margins: 8px 48px;
  --flair-background: rgba(145, 150, 161, 0.12);
  --flair-color: hsl(220, -2%, 87%);
  --focus-animation-duration: 0.1s;
  --folding-offset: 32px;
  --font-adaptive-normal: 16px;
  --font-adaptive-small: 13.91px;
  --font-adaptive-smaller: 13px;
  --font-adaptive-smallest: 11px;
  --font-code: 14.4px;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif;
  --font-ui-smaller: 11px;
  --footnote-divider-color: #2d3139;
  --footnote-id-color: hsl(220, -12%, 65%);
  --footnote-id-color-no-occurrences: hsl(220, -2%, 40%);
  --footnote-input-background-active: rgba(145, 150, 161, 0.12);
  --frame-background: rgb(31, 90, 122);
  --frame-background-h: 201;
  --frame-background-l: 30%;
  --frame-background-s: 59%;
  --frame-divider-color: #2d3139;
  --frame-icon-color: rgb(84, 157, 196);
  --frame-muted-color: rgb(84, 157, 196);
  --frame-outline-color: hsla( 201, 57%, 37%, 1 );
  --graph-node: hsl(220, -12%, 65%);
  --graph-node-attachment: #e5b567;
  --graph-node-focused: rgb(73, 161, 208);
  --graph-node-tag: #a8c373;
  --graph-node-unresolved: hsl(220, -2%, 40%);
  --graph-text: hsl(220, -2%, 87%);
  --gray: var(--text-muted);
  --h1-size: 1.2em;
  --h1-weight: 600;
  --h1l: #2d3139;
  --h2-size: 1.1em;
  --h2-weight: 600;
  --h2l: #2d3139;
  --h3-size: 1.05em;
  --h3-weight: 500;
  --h3l: #2d3139;
  --h4-size: 1em;
  --h4-weight: 500;
  --h4l: #2d3139;
  --h5-size: 0.95em;
  --h5-variant: small-caps;
  --h5-weight: 500;
  --h5l: #2d3139;
  --h6-size: 0.95em;
  --h6-variant: small-caps;
  --h6-weight: 400;
  --h6l: #2d3139;
  --heading-formatting: hsl(220, -2%, 40%);
  --heading-spacing: 2em;
  --hider-ribbon-display: none;
  --highlight: var(--text-highlight-bg);
  --hl1: rgba(51, 117, 153, 0.3);
  --hl2: rgba(255, 177, 80, 0.3);
  --hr-color: #2d3139;
  --icon-color: hsl(220, -12%, 65%);
  --icon-color-active: hsl(220, -2%, 87%);
  --icon-color-focused: hsl(220, -2%, 87%);
  --icon-color-hover: hsl(220, -12%, 65%);
  --icon-hex: black;
  --icon-muted: 0.5;
  --iframe-max-width: none;
  --iframe-width: auto;
  --image-grid-background: transparent;
  --image-grid-fit: cover;
  --image-mix: normal;
  --image-muted: 0.7;
  --image-radius: 4px;
  --img-grid-gap: 0.5rem;
  --img-line-width: min(40rem, 88%);
  --img-margin-start: max( calc(50% - 20rem), 6% );
  --img-max-width: 100%;
  --img-width: auto;
  --indentation-guide-width: 0px;
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: 1.2em;
  --inline-title-weight: 600;
  --input-date-separator: hsl(220, -2%, 40%);
  --input-height: 32px;
  --input-placeholder-color: hsl(220, -2%, 40%);
  --interactive-accent: rgb(97, 173, 214);
  --interactive-accent-hover: rgb(73, 161, 208);
  --interactive-accent-hsl: 201, 59%, 55%;
  --interactive-accent-rgb: 66,66,66;
  --interactive-hover: #2d3139;
  --interactive-normal: rgba(145, 150, 161, 0.12);
  --interactive-success: #a8c373;
  --kanban-border: 0px;
  --leaflet-borders: rgba(255, 255, 255, 0.1);
  --leaflet-buttons: #17191b;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-number-color: hsl(220, -2%, 40%);
  --line-number-color-active: hsl(220, -12%, 65%);
  --line-width: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(73, 161, 208);
  --link-color-hover: rgb(49, 141, 191);
  --link-decoration: none;
  --link-external-color: rgb(73, 161, 208);
  --link-external-color-hover: rgb(49, 141, 191);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(73, 161, 208);
  --link-unresolved-decoration-color: rgba(73, 161, 208, 0.3);
  --list-edit-offset: 0.5em;
  --list-indent: 2em;
  --list-marker-color: hsl(220, -2%, 40%);
  --list-marker-color-collapsed: rgb(73, 161, 208);
  --list-marker-color-hover: hsl(220, -12%, 65%);
  --map-header-padding: 2px;
  --map-max-width: none;
  --map-width: auto;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: #17191b;
  --menu-border-color: #3a404a;
  --metadata-border-color: #2d3139;
  --metadata-divider-color: #2d3139;
  --metadata-input-background-active: rgba(145, 150, 161, 0.12);
  --metadata-input-font-size: 13.91px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: hsl(220, -2%, 87%);
  --metadata-label-background-active: rgba(145, 150, 161, 0.12);
  --metadata-label-font-size: 13.91px;
  --metadata-label-text-color: hsl(220, -12%, 65%);
  --metadata-label-text-color-hover: hsl(220, -12%, 65%);
  --metadata-label-width: 125.19px;
  --metadata-label-width-multiplier: 9;
  --metadata-property-background-active: rgba(145, 150, 161, 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a5058;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3a404a;
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --mobile-sidebar-background: #1c1d1e;
  --modal-background: #1c1d1e;
  --modal-border-color: #3a404a;
  --mono0: black;
  --mono100: white;
  --nav-collapse-icon-color: hsl(220, -12%, 65%);
  --nav-collapse-icon-color-collapsed: hsl(220, -12%, 65%);
  --nav-heading-color: hsl(220, -2%, 87%);
  --nav-heading-color-collapsed: hsl(220, -2%, 40%);
  --nav-heading-color-collapsed-hover: hsl(220, -12%, 65%);
  --nav-heading-color-hover: hsl(220, -2%, 87%);
  --nav-indentation-guide-color: #2d3139;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: rgba(145, 150, 161, 0.12);
  --nav-item-background-hover: rgba(145, 150, 161, 0.12);
  --nav-item-background-selected: rgba(73, 161, 208, 0.15);
  --nav-item-color: hsl(220, -12%, 65%);
  --nav-item-color-active: hsl(220, -2%, 87%);
  --nav-item-color-highlighted: rgb(73, 161, 208);
  --nav-item-color-hover: hsl(220, -2%, 87%);
  --nav-item-color-selected: hsl(220, -2%, 87%);
  --nav-item-white-space: nowrap;
  --nav-tag-color: hsl(220, -2%, 40%);
  --nav-tag-color-active: hsl(220, -12%, 65%);
  --nav-tag-color-hover: hsl(220, -12%, 65%);
  --nested-padding: 1.1em;
  --normal-weight: 400;
  --oxygen-tab-text-color: hsl(220, -12%, 65%);
  --oxygen-tab-text-color-active: hsl(220, -2%, 87%);
  --p-spacing: 1.75rem;
  --pdf-background: #1c1d1e;
  --pdf-dark-opacity: 1;
  --pdf-page-background: #1c1d1e;
  --pdf-shadow: none;
  --pdf-sidebar-background: #1c1d1e;
  --pdf-thumbnail-shadow: none;
  --pill-border-color: #2d3139;
  --pill-border-color-hover: #3a404a;
  --pill-color: hsl(220, -12%, 65%);
  --pill-color-hover: hsl(220, -2%, 87%);
  --pill-color-remove: hsl(220, -2%, 40%);
  --pill-color-remove-hover: rgb(73, 161, 208);
  --progress-complete: rgb(73, 161, 208);
  --progress-outline: #2d3139;
  --prompt-background: #1c1d1e;
  --prompt-border-color: #4a5058;
  --quote-opening-modifier: #3a404a;
  --raised-background: color-mix(in srgb, rgba(145, 150, 161, 0.12) 65%, transparent) linear-gradient(rgba(145, 150, 161, 0.12), color-mix(in srgb, rgba(145, 150, 161, 0.12) 65%, transparent));
  --ribbon-animation-duration: 0.1s;
  --ribbon-background: #1c1d1e;
  --ribbon-background-collapsed: #1c1d1e;
  --scrollbar-active-thumb-bg: #4a5058;
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: #2d3139;
  --search-clear-button-color: hsl(220, -12%, 65%);
  --search-icon-color: hsl(220, -12%, 65%);
  --search-result-background: #1c1d1e;
  --secondary: var(--text-accent);
  --setting-group-heading-color: hsl(220, -2%, 87%);
  --setting-items-background: #17191b;
  --setting-items-border-color: #2d3139;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #3a404a;
  --slider-track-background: #2d3139;
  --sp1: white;
  --status-bar-background: #17191b;
  --status-bar-border-color: #2d3139;
  --status-bar-font-size: 11px;
  --status-bar-text-color: hsl(220, -12%, 65%);
  --suggestion-background: #1c1d1e;
  --sync-avatar-color-1: #d04255;
  --sync-avatar-color-2: #d5763f;
  --sync-avatar-color-3: #e5b567;
  --sync-avatar-color-4: #a8c373;
  --sync-avatar-color-5: #73bbb2;
  --sync-avatar-color-6: #6c99bb;
  --sync-avatar-color-7: #9e86c8;
  --sync-avatar-color-8: #b05279;
  --tab-background-active: #1c1d1e;
  --tab-container-background: #17191b;
  --tab-divider-color: #3a404a;
  --tab-outline-color: #2d3139;
  --tab-outline-width: 0px;
  --tab-switcher-background: #17191b;
  --tab-switcher-menubar-background: linear-gradient(to top, #17191b, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(73, 161, 208);
  --tab-text-color: hsl(220, -2%, 40%);
  --tab-text-color-active: hsl(220, -12%, 65%);
  --tab-text-color-focused: hsl(220, -12%, 65%);
  --tab-text-color-focused-active: hsl(220, -2%, 87%);
  --tab-text-color-focused-active-current: hsl(220, -2%, 87%);
  --tab-text-color-focused-highlighted: rgb(73, 161, 208);
  --table-add-button-border-color: #2d3139;
  --table-add-button-border-width: 0px;
  --table-border-color: #2d3139;
  --table-cell-padding: 4px 10px;
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-background-active: rgba(51, 117, 153, 0.3);
  --table-drag-handle-color: hsl(220, -2%, 40%);
  --table-drag-handle-color-active: rgb(73, 161, 208);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-edge-cell-padding-first: 0;
  --table-edge-cell-padding-last: 0;
  --table-header-border-color: #2d3139;
  --table-header-border-width: 0;
  --table-header-color: hsl(220, -2%, 87%);
  --table-header-size: 14px;
  --table-header-weight: 600;
  --table-max-width: none;
  --table-row-last-border-width: 0;
  --table-selection: rgba(51, 117, 153, 0.3);
  --table-selection-border-color: rgb(73, 161, 208);
  --table-selection-border-radius: 0px;
  --table-selection-border-width: 0px;
  --table-text-size: 14px;
  --table-white-space: normal;
  --table-width: auto;
  --table-wrapper-width: fit-content;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: #2d3139;
  --tag-border-color-hover: #3a404a;
  --tag-border-width: 1px;
  --tag-color: hsl(220, -12%, 65%);
  --tag-color-hover: hsl(220, -2%, 87%);
  --tag-padding-y: 0.2em;
  --tag-size: 0.8em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(73, 161, 208);
  --text-accent-hover: rgb(49, 141, 191);
  --text-blockquote: hsl(220, -12%, 65%);
  --text-bold: hsl(220, -2%, 87%);
  --text-code: hsl(220, -2%, 70%);
  --text-error: #d04255;
  --text-error-hover: #d04255;
  --text-faint: hsl(220, -2%, 40%);
  --text-formatting: hsl(220, -2%, 40%);
  --text-highlight-bg: rgba(255, 177, 80, 0.3);
  --text-highlight-bg-active: rgba(255, 255, 255, 0.1);
  --text-italic: hsl(220, -2%, 87%);
  --text-muted: hsl(220, -12%, 65%);
  --text-normal: hsl(220, -2%, 87%);
  --text-selection: rgba(51, 117, 153, 0.3);
  --text-success: #a8c373;
  --text-warning: #d5763f;
  --textHighlight: var(--text-highlight-bg);
  --title-color: hsl(220, -2%, 87%);
  --title-color-inactive: hsl(220, -12%, 65%);
  --titlebar-background: #1c1d1e;
  --titlebar-background-focused: #17191b;
  --titlebar-border-color: #2d3139;
  --titlebar-text-color: hsl(220, -12%, 65%);
  --titlebar-text-color-focused: hsl(220, -2%, 87%);
  --top-left-padding-y: 0px;
  --tx1: hsl(220, -2%, 87%);
  --tx2: hsl(220, -12%, 65%);
  --tx3: hsl(220, -2%, 40%);
  --tx4: hsl(220, -2%, 70%);
  --ui1: #2d3139;
  --ui2: #3a404a;
  --ui3: #4a5058;
  --vault-profile-color: hsl(220, -2%, 87%);
  --vault-profile-color-hover: hsl(220, -2%, 87%);
  --workspace-background-translucent: rgba(47, 50, 55, 0.7);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 25, 27);
  color: rgb(222, 222, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 29, 30);
  color: rgb(222, 222, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 25, 27);
  color: rgb(222, 222, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 25, 27);
  border-left-color: rgb(128, 128, 128);
  color: rgb(222, 222, 222);
}

body div#quartz-root {
  background-color: rgb(28, 29, 30);
  color: rgb(222, 222, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > em, em {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > i, i {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > strong, strong {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body del {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: line-through rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body p {
  color: rgb(166, 166, 166);
  outline: rgb(166, 166, 166) none 0px;
  text-decoration: rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
}`,
    links: `body a.external, footer a {
  color: rgb(73, 161, 208);
  outline: rgb(73, 161, 208) none 0px;
  text-decoration: rgb(73, 161, 208);
  text-decoration-color: rgb(73, 161, 208);
  transition: opacity 0.16s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(73, 161, 208);
  outline: rgb(73, 161, 208) none 0px;
  text-decoration: rgb(73, 161, 208);
  text-decoration-color: rgb(73, 161, 208);
  transition: opacity 0.16s ease-in-out;
}

body a.internal.broken {
  color: rgb(73, 161, 208);
  outline: rgb(73, 161, 208) none 0px;
  text-decoration: rgba(73, 161, 208, 0.3);
  text-decoration-color: rgba(73, 161, 208, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `body dd {
  color: rgb(222, 222, 222);
}

body dt {
  color: rgb(222, 222, 222);
}

body ol > li {
  color: rgb(222, 222, 222);
}

body ol.overflow {
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body ul > li {
  color: rgb(222, 222, 222);
}

body ul.overflow {
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body table {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  margin-top: 8px;
  width: 187.438px;
}

body td {
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-left-width: 0px;
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(222, 222, 222);
  padding-left: 0px;
  padding-right: 10px;
}

body th {
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-left-width: 0px;
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  border-top-width: 0px;
  color: rgb(222, 222, 222);
  padding-left: 0px;
  padding-right: 10px;
}

body thead {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body tr {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    code: `body code {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(222, 222, 222);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 181, 103);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 181, 103);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 181, 103);
  border-left-color: rgb(229, 181, 103);
  border-right-color: rgb(229, 181, 103);
  border-top-color: rgb(229, 181, 103);
}

body pre > code, pre:has(> code) {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
}

body pre:has(> code) {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
}`,
    images: `body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body figcaption {
  color: rgb(222, 222, 222);
}

body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  margin-left: 0px;
  margin-right: 0px;
}

body img {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-radius: 4px;
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-radius: 4px;
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
}

body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(97, 173, 214);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(97, 173, 214);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

body .callout[data-callout="abstract"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 158,134,200;
  background-color: rgba(158, 134, 200, 0.1);
  border-bottom-color: rgba(158, 134, 200, 0.25);
  border-left-color: rgba(158, 134, 200, 0.25);
  border-right-color: rgba(158, 134, 200, 0.25);
  border-top-color: rgba(158, 134, 200, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 168,195,115;
  background-color: rgba(168, 195, 115, 0.1);
  border-bottom-color: rgba(168, 195, 115, 0.25);
  border-left-color: rgba(168, 195, 115, 0.25);
  border-right-color: rgba(168, 195, 115, 0.25);
  border-top-color: rgba(168, 195, 115, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(74, 80, 88);
  border-left-color: rgb(74, 80, 88);
  border-right-color: rgb(74, 80, 88);
  border-top-color: rgb(74, 80, 88);
}

body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(145, 150, 161, 0.12);
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 80, 88);
  border-left-color: rgb(74, 80, 88);
  border-right-color: rgb(74, 80, 88);
  border-top-color: rgb(74, 80, 88);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(145, 150, 161, 0.12);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(145, 150, 161, 0.12);
  color: rgb(222, 222, 222);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(45, 49, 57);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(45, 49, 57);
  border-left-width: 1px;
  border-right-color: rgb(45, 49, 57);
  border-right-width: 1px;
  border-top-color: rgb(45, 49, 57);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: rgb(166, 166, 166);
}

body h1 {
  color: rgb(222, 222, 222);
}

body h2 {
  color: rgb(222, 222, 222);
}

body h2.page-title, h2.page-title a {
  color: rgb(222, 222, 222);
}

body h3 {
  color: rgb(222, 222, 222);
}

body h4 {
  color: rgb(222, 222, 222);
}

body h5 {
  color: rgb(222, 222, 222);
}

body h6 {
  color: rgb(222, 222, 222);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(145, 150, 161, 0.12);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}`,
    footer: `body footer {
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-left-width: 0px;
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  border-top-width: 0px;
  color: rgb(102, 102, 102);
}

body footer ul li a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(222, 222, 222);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(166, 166, 166);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body li.section-li > .section .meta {
  color: rgb(166, 166, 166);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}

body .darkmode svg {
  color: rgb(166, 166, 166);
  stroke: rgb(166, 166, 166);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .metadata {
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(166, 166, 166);
}

body .metadata-properties {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}

body .navigation-progress {
  background-color: rgb(28, 29, 30);
}

body .page-header h2.page-title {
  color: rgb(222, 222, 222);
}

body abbr {
  color: rgb(222, 222, 222);
  text-decoration: underline dotted rgb(222, 222, 222);
}

body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body input[type=text] {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}

body kbd {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body sub {
  color: rgb(222, 222, 222);
}

body summary {
  color: rgb(222, 222, 222);
}

body sup {
  color: rgb(222, 222, 222);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201;
  --accent-l: 38%;
  --accent-s: 59%;
  --active-line-bg: rgba(0, 0, 0, 0.035);
  --adaptive-list-edit-offset: 0.5em;
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 640ms;
  --anim-duration-superfast: 80ms;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1);
  --anim-motion-playful: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-speed-modifier: 1;
  --ax1: rgb(40, 114, 154);
  --ax2: rgb(31, 90, 122);
  --ax3: rgb(46, 132, 178);
  --background-modifier-accent: rgb(46, 132, 178);
  --background-modifier-active-hover: rgba(0, 0, 0, 0.12);
  --background-modifier-border: #e3e8ef;
  --background-modifier-border-focus: #c4cdd8;
  --background-modifier-border-hover: #d4dce6;
  --background-modifier-box-shadow: #c4cdd8;
  --background-modifier-cover: hsla(210, -55%, 78%, 0.5);
  --background-modifier-error: rgba(255, 0, 0, 0.14);
  --background-modifier-error-hover: rgba(255, 0, 0, 0.08);
  --background-modifier-error-rgb: 208,66,85;
  --background-modifier-form-field-highlighted: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.12);
  --background-modifier-success: #a8c373;
  --background-modifier-success-rgb: 168,195,115;
  --background-primary-alt: #f7f8fa;
  --background-secondary: #f7f8fa;
  --background-secondary-alt: #ffffff;
  --background-table-rows: #f7f8fa;
  --base-h: 210;
  --base-l: 98%;
  --base-s: 15%;
  --bases-cards-cover-background: #f7f8fa;
  --bases-cards-shadow: 0 0 0 1px #e3e8ef;
  --bases-cards-shadow-hover: 0 0 0 1px #d4dce6;
  --bases-embed-border-color: #e3e8ef;
  --bases-group-heading-property-color: #5f6b7a;
  --bases-group-heading-property-size: 11px;
  --bases-header-border-width: 0;
  --bases-table-border-color: #e3e8ef;
  --bases-table-cell-background-disabled: #f7f8fa;
  --bases-table-cell-background-selected: rgba(171, 207, 227, 0.3);
  --bases-table-cell-shadow-active: 0 0 0 2px #c4cdd8;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 132, 178);
  --bases-table-column-border-width: 0px;
  --bases-table-font-size: 14px;
  --bases-table-group-background: #f7f8fa;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.12);
  --bases-table-header-color: #5f6b7a;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.12);
  --bg1: #ffffff;
  --bg2: #f7f8fa;
  --bg3: rgba(0, 0, 0, 0.12);
  --blockquote-border-color: #d4dce6;
  --blockquote-border-thickness: 1px;
  --blockquote-color: #5f6b7a;
  --blockquote-style: normal;
  --bold-weight: 600;
  --btn-shadow-color: rgba(0, 0, 0, 0.05);
  --calendar-dot-active: #a0aab8;
  --calendar-dot-today: rgb(40, 114, 154);
  --callout-bug: 208,66,85;
  --callout-default: 108,153,187;
  --callout-error: 208,66,85;
  --callout-example: 158,134,200;
  --callout-fail: 208,66,85;
  --callout-important: 115,187,178;
  --callout-info: 108,153,187;
  --callout-question: 213,118,63;
  --callout-success: 168,195,115;
  --callout-summary: 115,187,178;
  --callout-tip: 115,187,178;
  --callout-title-weight: 600;
  --callout-todo: 108,153,187;
  --callout-warning: 213,118,63;
  --canvas-card-label-color: #a0aab8;
  --canvas-color-1: 208,66,85;
  --canvas-color-2: 213,118,63;
  --canvas-color-3: 229,181,103;
  --canvas-color-4: 168,195,115;
  --canvas-color-5: 115,187,178;
  --canvas-color-6: 158,134,200;
  --canvas-dot-pattern: #d4dce6;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: #1a1d23;
  --chart-color-1: #6c99bb;
  --chart-color-2: #d04255;
  --chart-color-3: #e5b567;
  --chart-color-4: #a8c373;
  --chart-color-5: #d5763f;
  --chart-color-6: #9e86c8;
  --chart-color-7: #73bbb2;
  --chart-color-8: #b05279;
  --chart-max-width: none;
  --chart-width: auto;
  --checkbox-border-color: #a0aab8;
  --checkbox-border-color-hover: #5f6b7a;
  --checkbox-color: rgb(46, 132, 178);
  --checkbox-color-hover: rgb(40, 114, 154);
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-radius: 50%;
  --checkbox-top: 2px;
  --checklist-done-color: #1a1d23;
  --checklist-done-decoration: none;
  --code-background: #f7f8fa;
  --code-border-color: #e3e8ef;
  --code-bracket-background: rgba(0, 0, 0, 0.12);
  --code-comment: #a0aab8;
  --code-function: #e5b567;
  --code-important: #d5763f;
  --code-keyword: #b05279;
  --code-normal: #1a1d23;
  --code-operator: #d04255;
  --code-property: #73bbb2;
  --code-punctuation: #5f6b7a;
  --code-string: #a8c373;
  --code-tag: #d04255;
  --code-value: #9e86c8;
  --collapse-icon-color: #a0aab8;
  --collapse-icon-color-collapsed: rgb(40, 114, 154);
  --color-accent: rgb(40, 114, 154);
  --color-accent-1: rgb(42, 125, 167);
  --color-accent-2: rgb(45, 139, 180);
  --color-accent-hsl: 201, 59%, 38%;
  --color-blue: #6c99bb;
  --color-blue-rgb: 108,153,187;
  --color-cyan: #73bbb2;
  --color-cyan-rgb: 115,187,178;
  --color-green: #a8c373;
  --color-green-rgb: 168,195,115;
  --color-orange: #d5763f;
  --color-orange-rgb: 213,118,63;
  --color-pink: #b05279;
  --color-pink-rgb: 176,82,121;
  --color-purple: #9e86c8;
  --color-purple-rgb: 158,134,200;
  --color-red: #d04255;
  --color-red-rgb: 208,66,85;
  --color-yellow: #e5b567;
  --color-yellow-rgb: 229,181,103;
  --container-chart-max-width: 88%;
  --container-chart-width: 40rem;
  --container-dataview-table-width: 40rem;
  --container-iframe-max-width: 88%;
  --container-iframe-width: 40rem;
  --container-img-max-width: 88%;
  --container-img-width: 40rem;
  --container-map-max-width: 88%;
  --container-map-width: 40rem;
  --container-table-margin: calc(max( calc(50% - 40rem/2), calc(50% - 88%/2) ) - 16px);
  --container-table-max-width: 88%;
  --container-table-width: calc(40rem + 32px);
  --content-line-width: min(40rem, 88%);
  --content-margin: auto;
  --content-margin-start: max( calc(50% - 20rem), 6% );
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #e3e8ef;
  --divider-color-hover: rgb(46, 132, 178);
  --dropdown-background-hover: #e3e8ef;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(46, 132, 178);
  --embed-decoration-color: #d4dce6;
  --embed-decoration-style: solid;
  --embed-max-height: none;
  --file-margins: 8px 48px;
  --flair-color: #1a1d23;
  --focus-animation-duration: 0.1s;
  --folding-offset: 32px;
  --font-adaptive-normal: 16px;
  --font-adaptive-small: 13.91px;
  --font-adaptive-smaller: 13px;
  --font-adaptive-smallest: 11px;
  --font-code: 14.4px;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif;
  --font-ui-smaller: 11px;
  --footnote-divider-color: #e3e8ef;
  --footnote-id-color: #5f6b7a;
  --footnote-id-color-no-occurrences: #a0aab8;
  --footnote-input-background-active: rgba(0, 0, 0, 0.12);
  --frame-background: rgb(125, 188, 222);
  --frame-background-h: 201;
  --frame-background-l: 68%;
  --frame-background-s: 59%;
  --frame-divider-color: #e3e8ef;
  --frame-icon-color: rgb(43, 97, 125);
  --frame-muted-color: rgb(43, 97, 125);
  --frame-outline-color: hsla( 201, 59%, 62%, 1 );
  --graph-node: #5f6b7a;
  --graph-node-attachment: #e5b567;
  --graph-node-focused: rgb(40, 114, 154);
  --graph-node-tag: #a8c373;
  --graph-node-unresolved: #a0aab8;
  --graph-text: #1a1d23;
  --gray: var(--text-muted);
  --h1-size: 1.2em;
  --h1-weight: 600;
  --h1l: #e3e8ef;
  --h2-size: 1.1em;
  --h2-weight: 600;
  --h2l: #e3e8ef;
  --h3-size: 1.05em;
  --h3-weight: 500;
  --h3l: #e3e8ef;
  --h4-size: 1em;
  --h4-weight: 500;
  --h4l: #e3e8ef;
  --h5-size: 0.95em;
  --h5-variant: small-caps;
  --h5-weight: 500;
  --h5l: #e3e8ef;
  --h6-size: 0.95em;
  --h6-variant: small-caps;
  --h6-weight: 400;
  --h6l: #e3e8ef;
  --heading-formatting: #a0aab8;
  --heading-spacing: 2em;
  --hider-ribbon-display: none;
  --highlight: var(--text-highlight-bg);
  --hl1: rgba(171, 207, 227, 0.3);
  --hl2: rgba(255, 225, 0, 0.5);
  --hr-color: #e3e8ef;
  --icon-color: #5f6b7a;
  --icon-color-active: #1a1d23;
  --icon-color-focused: #1a1d23;
  --icon-color-hover: #5f6b7a;
  --icon-hex: white;
  --icon-muted: 0.5;
  --iframe-max-width: none;
  --iframe-width: auto;
  --image-grid-background: transparent;
  --image-grid-fit: cover;
  --image-mix: normal;
  --image-muted: 0.7;
  --image-radius: 4px;
  --img-grid-gap: 0.5rem;
  --img-line-width: min(40rem, 88%);
  --img-margin-start: max( calc(50% - 20rem), 6% );
  --img-max-width: 100%;
  --img-width: auto;
  --indentation-guide-width: 0px;
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: 1.2em;
  --inline-title-weight: 600;
  --input-date-separator: #a0aab8;
  --input-height: 32px;
  --input-placeholder-color: #a0aab8;
  --interactive-accent: rgb(46, 132, 178);
  --interactive-accent-hover: rgb(40, 114, 154);
  --interactive-accent-hsl: 201, 59%, 38%;
  --interactive-accent-rgb: 220,220,220;
  --interactive-hover: #e3e8ef;
  --interactive-success: #a8c373;
  --leaflet-borders: rgba(0, 0, 0, 0.1);
  --leaflet-buttons: #ffffff;
  --light: var(--background-primary-alt);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-number-color: #a0aab8;
  --line-number-color-active: #5f6b7a;
  --line-width: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(40, 114, 154);
  --link-color-hover: rgb(31, 90, 122);
  --link-decoration: none;
  --link-external-color: rgb(40, 114, 154);
  --link-external-color-hover: rgb(31, 90, 122);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(40, 114, 154);
  --link-unresolved-decoration-color: rgba(40, 114, 154, 0.3);
  --list-edit-offset: 0.5em;
  --list-indent: 2em;
  --list-marker-color: #a0aab8;
  --list-marker-color-collapsed: rgb(40, 114, 154);
  --list-marker-color-hover: #5f6b7a;
  --map-header-padding: 2px;
  --map-max-width: none;
  --map-width: auto;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: #f7f8fa;
  --menu-border-color: #d4dce6;
  --metadata-border-color: #e3e8ef;
  --metadata-divider-color: #e3e8ef;
  --metadata-input-background-active: rgba(0, 0, 0, 0.12);
  --metadata-input-font-size: 13.91px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #1a1d23;
  --metadata-label-background-active: rgba(0, 0, 0, 0.12);
  --metadata-label-font-size: 13.91px;
  --metadata-label-text-color: #5f6b7a;
  --metadata-label-text-color-hover: #5f6b7a;
  --metadata-label-width: 125.19px;
  --metadata-label-width-multiplier: 9;
  --metadata-property-background-active: rgba(0, 0, 0, 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px #c4cdd8;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d4dce6;
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --mobile-sidebar-background: #ffffff;
  --mono0: white;
  --mono100: black;
  --nav-collapse-icon-color: #5f6b7a;
  --nav-collapse-icon-color-collapsed: #5f6b7a;
  --nav-heading-color: #1a1d23;
  --nav-heading-color-collapsed: #a0aab8;
  --nav-heading-color-collapsed-hover: #5f6b7a;
  --nav-heading-color-hover: #1a1d23;
  --nav-indentation-guide-color: #e3e8ef;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: rgba(0, 0, 0, 0.12);
  --nav-item-background-hover: rgba(0, 0, 0, 0.12);
  --nav-item-background-selected: rgba(40, 114, 154, 0.15);
  --nav-item-color: #5f6b7a;
  --nav-item-color-active: #1a1d23;
  --nav-item-color-highlighted: rgb(40, 114, 154);
  --nav-item-color-hover: #1a1d23;
  --nav-item-color-selected: #1a1d23;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #a0aab8;
  --nav-tag-color-active: #5f6b7a;
  --nav-tag-color-hover: #5f6b7a;
  --nested-padding: 1.1em;
  --normal-weight: 400;
  --oxygen-tab-text-color: #5f6b7a;
  --oxygen-tab-text-color-active: #1a1d23;
  --p-spacing: 1.75rem;
  --pdf-dark-opacity: 1;
  --pdf-shadow: none;
  --pdf-thumbnail-shadow: none;
  --pill-border-color: #e3e8ef;
  --pill-border-color-hover: #d4dce6;
  --pill-color: #5f6b7a;
  --pill-color-hover: #1a1d23;
  --pill-color-remove: #a0aab8;
  --pill-color-remove-hover: rgb(40, 114, 154);
  --progress-complete: rgb(40, 114, 154);
  --progress-outline: #e3e8ef;
  --prompt-border-color: #c4cdd8;
  --quote-opening-modifier: #d4dce6;
  --ribbon-animation-duration: 0.1s;
  --ribbon-background: #ffffff;
  --scrollbar-active-thumb-bg: #c4cdd8;
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: #e3e8ef;
  --search-clear-button-color: #5f6b7a;
  --search-icon-color: #5f6b7a;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #1a1d23;
  --setting-items-background: #f7f8fa;
  --setting-items-border-color: #e3e8ef;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #d4dce6;
  --slider-track-background: #e3e8ef;
  --sp1: white;
  --status-bar-background: #f7f8fa;
  --status-bar-border-color: #e3e8ef;
  --status-bar-font-size: 11px;
  --status-bar-text-color: #5f6b7a;
  --sync-avatar-color-1: #d04255;
  --sync-avatar-color-2: #d5763f;
  --sync-avatar-color-3: #e5b567;
  --sync-avatar-color-4: #a8c373;
  --sync-avatar-color-5: #73bbb2;
  --sync-avatar-color-6: #6c99bb;
  --sync-avatar-color-7: #9e86c8;
  --sync-avatar-color-8: #b05279;
  --tab-container-background: #f7f8fa;
  --tab-divider-color: #d4dce6;
  --tab-outline-color: #e3e8ef;
  --tab-outline-width: 0px;
  --tab-switcher-background: #f7f8fa;
  --tab-switcher-menubar-background: linear-gradient(to top, #f7f8fa, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(40, 114, 154);
  --tab-text-color: #a0aab8;
  --tab-text-color-active: #5f6b7a;
  --tab-text-color-focused: #5f6b7a;
  --tab-text-color-focused-active: #1a1d23;
  --tab-text-color-focused-active-current: #1a1d23;
  --tab-text-color-focused-highlighted: rgb(40, 114, 154);
  --table-add-button-border-color: #e3e8ef;
  --table-add-button-border-width: 0px;
  --table-border-color: #e3e8ef;
  --table-cell-padding: 4px 10px;
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-background-active: rgba(171, 207, 227, 0.3);
  --table-drag-handle-color: #a0aab8;
  --table-drag-handle-color-active: rgb(40, 114, 154);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-edge-cell-padding-first: 0;
  --table-edge-cell-padding-last: 0;
  --table-header-border-color: #e3e8ef;
  --table-header-border-width: 0;
  --table-header-color: #1a1d23;
  --table-header-size: 14px;
  --table-header-weight: 600;
  --table-max-width: none;
  --table-row-last-border-width: 0;
  --table-selection: rgba(171, 207, 227, 0.3);
  --table-selection-border-color: rgb(40, 114, 154);
  --table-selection-border-radius: 0px;
  --table-selection-border-width: 0px;
  --table-text-size: 14px;
  --table-white-space: normal;
  --table-width: auto;
  --table-wrapper-width: fit-content;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: #e3e8ef;
  --tag-border-color-hover: #d4dce6;
  --tag-border-width: 1px;
  --tag-color: #5f6b7a;
  --tag-color-hover: #1a1d23;
  --tag-padding-y: 0.2em;
  --tag-size: 0.8em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(40, 114, 154);
  --text-accent-hover: rgb(31, 90, 122);
  --text-blockquote: #5f6b7a;
  --text-bold: #1a1d23;
  --text-code: #495663;
  --text-error: #d04255;
  --text-error-hover: #d04255;
  --text-faint: #a0aab8;
  --text-formatting: #a0aab8;
  --text-highlight-bg: rgba(255, 225, 0, 0.5);
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1);
  --text-italic: #1a1d23;
  --text-muted: #5f6b7a;
  --text-normal: #1a1d23;
  --text-selection: rgba(171, 207, 227, 0.3);
  --text-success: #a8c373;
  --text-warning: #d5763f;
  --textHighlight: var(--text-highlight-bg);
  --title-color: #1a1d23;
  --title-color-inactive: #5f6b7a;
  --titlebar-background: #ffffff;
  --titlebar-background-focused: #f7f8fa;
  --titlebar-border-color: #e3e8ef;
  --titlebar-text-color: #5f6b7a;
  --titlebar-text-color-focused: #1a1d23;
  --top-left-padding-y: 0px;
  --tx1: #1a1d23;
  --tx2: #5f6b7a;
  --tx3: #a0aab8;
  --tx4: #495663;
  --ui1: #e3e8ef;
  --ui2: #d4dce6;
  --ui3: #c4cdd8;
  --vault-profile-color: #1a1d23;
  --vault-profile-color-hover: #1a1d23;
  --workspace-background-translucent: rgba(249, 250, 251, 0.7);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 248, 250);
  color: rgb(26, 29, 35);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(26, 29, 35);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 248, 250);
  color: rgb(26, 29, 35);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 248, 250);
  border-left-color: rgb(128, 128, 128);
  color: rgb(26, 29, 35);
}

body div#quartz-root {
  color: rgb(26, 29, 35);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body .page article p > em, em {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body .page article p > i, i {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body .page article p > strong, strong {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body del {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration: line-through rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body p {
  color: rgb(95, 107, 122);
  outline: rgb(95, 107, 122) none 0px;
  text-decoration: rgb(95, 107, 122);
  text-decoration-color: rgb(95, 107, 122);
}`,
    links: `body a.external, footer a {
  color: rgb(40, 114, 154);
  outline: rgb(40, 114, 154) none 0px;
  text-decoration: rgb(40, 114, 154);
  text-decoration-color: rgb(40, 114, 154);
  transition: opacity 0.16s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 114, 154);
  outline: rgb(40, 114, 154) none 0px;
  text-decoration: rgb(40, 114, 154);
  text-decoration-color: rgb(40, 114, 154);
  transition: opacity 0.16s ease-in-out;
}

body a.internal.broken {
  color: rgb(40, 114, 154);
  outline: rgb(40, 114, 154) none 0px;
  text-decoration: rgba(40, 114, 154, 0.3);
  text-decoration-color: rgba(40, 114, 154, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `body dd {
  color: rgb(26, 29, 35);
}

body dt {
  color: rgb(26, 29, 35);
}

body ol > li {
  color: rgb(26, 29, 35);
}

body ol.overflow {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body ul > li {
  color: rgb(26, 29, 35);
}

body ul.overflow {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(160, 170, 184);
  text-decoration: rgb(160, 170, 184);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body table {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
  margin-top: 8px;
  width: 187.438px;
}

body td {
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-left-width: 0px;
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(26, 29, 35);
  padding-left: 0px;
  padding-right: 10px;
}

body th {
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-left-width: 0px;
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  border-top-width: 0px;
  color: rgb(26, 29, 35);
  padding-left: 0px;
  padding-right: 10px;
}

body thead {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body tr {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(26, 29, 35);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 181, 103);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 181, 103);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 181, 103);
  border-left-color: rgb(229, 181, 103);
  border-right-color: rgb(229, 181, 103);
  border-top-color: rgb(229, 181, 103);
}

body pre > code, pre:has(> code) {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
}

body pre:has(> code) {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body figcaption {
  color: rgb(26, 29, 35);
}

body figure {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  margin-left: 0px;
  margin-right: 0px;
}

body img {
  border-bottom-color: rgb(26, 29, 35);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 29, 35);
  border-radius: 4px;
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(26, 29, 35);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 29, 35);
  border-radius: 4px;
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
}

body .footnotes {
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

body .transclude {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(46, 132, 178);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(46, 132, 178);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body input[type=checkbox] {
  border-bottom-color: rgb(160, 170, 184);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(160, 170, 184);
  border-right-color: rgb(160, 170, 184);
  border-top-color: rgb(160, 170, 184);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='-'] {
  color: rgb(160, 170, 184);
  text-decoration: line-through 1px rgb(160, 170, 184);
  text-decoration-color: rgb(160, 170, 184);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 29, 35);
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

body .callout[data-callout="abstract"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 158,134,200;
  background-color: rgba(158, 134, 200, 0.1);
  border-bottom-color: rgba(158, 134, 200, 0.25);
  border-left-color: rgba(158, 134, 200, 0.25);
  border-right-color: rgba(158, 134, 200, 0.25);
  border-top-color: rgba(158, 134, 200, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 168,195,115;
  background-color: rgba(168, 195, 115, 0.1);
  border-bottom-color: rgba(168, 195, 115, 0.25);
  border-left-color: rgba(168, 195, 115, 0.25);
  border-right-color: rgba(168, 195, 115, 0.25);
  border-top-color: rgba(168, 195, 115, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(26, 29, 35);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(196, 205, 216);
  border-left-color: rgb(196, 205, 216);
  border-right-color: rgb(196, 205, 216);
  border-top-color: rgb(196, 205, 216);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 29, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 29, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgb(26, 29, 35);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(196, 205, 216);
  border-left-color: rgb(196, 205, 216);
  border-right-color: rgb(196, 205, 216);
  border-top-color: rgb(196, 205, 216);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.12);
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgb(26, 29, 35);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(227, 232, 239);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 232, 239);
  border-left-width: 1px;
  border-right-color: rgb(227, 232, 239);
  border-right-width: 1px;
  border-top-color: rgb(227, 232, 239);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: rgb(95, 107, 122);
}

body h1 {
  color: rgb(26, 29, 35);
}

body h2 {
  color: rgb(26, 29, 35);
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 29, 35);
}

body h3 {
  color: rgb(26, 29, 35);
}

body h4 {
  color: rgb(26, 29, 35);
}

body h5 {
  color: rgb(26, 29, 35);
}

body h6 {
  color: rgb(26, 29, 35);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 107, 122);
  text-decoration: rgb(95, 107, 122);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 107, 122);
  text-decoration: rgb(95, 107, 122);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(95, 107, 122);
  text-decoration: rgb(95, 107, 122);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.12);
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-left-width: 0px;
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  border-top-width: 0px;
  color: rgb(160, 170, 184);
}

body footer ul li a {
  color: rgb(160, 170, 184);
  text-decoration: rgb(160, 170, 184);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 29, 35);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 107, 122);
  text-decoration: rgb(95, 107, 122);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 107, 122);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body li.section-li > .section .meta {
  color: rgb(95, 107, 122);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 107, 122);
  text-decoration: rgb(95, 107, 122);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

body .darkmode svg {
  color: rgb(95, 107, 122);
  stroke: rgb(95, 107, 122);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

body .breadcrumb-element p {
  color: rgb(160, 170, 184);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

body .metadata {
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(95, 107, 122);
}

body .metadata-properties {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(26, 29, 35);
}

body abbr {
  color: rgb(26, 29, 35);
  text-decoration: underline dotted rgb(26, 29, 35);
}

body details {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body input[type=text] {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

body kbd {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

body progress {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

body sub {
  color: rgb(26, 29, 35);
}

body summary {
  color: rgb(26, 29, 35);
}

body sup {
  color: rgb(26, 29, 35);
}`,
  },
};
