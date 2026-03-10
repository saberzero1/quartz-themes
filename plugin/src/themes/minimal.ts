import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 201;
  --accent-l: 60%;
  --accent-s: 17%;
  --active-line-bg: rgba(255, 255, 255, 0.04);
  --adaptive-list-edit-offset: 0.5em;
  --ax1: rgb(136, 158, 170);
  --ax2: rgb(160, 178, 187);
  --ax3: rgb(121, 146, 160);
  --background-modifier-accent: rgb(121, 146, 160);
  --background-modifier-active-hover: hsla( 0, 0%, 55%, 0.12 );
  --background-modifier-border: rgb(54, 54, 54);
  --background-modifier-border-focus: rgb(89, 89, 89);
  --background-modifier-border-hover: rgb(69, 69, 69);
  --background-modifier-cover: rgba(8, 8, 8, 0.5);
  --background-modifier-error: rgba(255, 20, 20, 0.12);
  --background-modifier-error-hover: rgba(255, 20, 20, 0.18);
  --background-modifier-error-rgb: 208,66,85;
  --background-modifier-form-field: rgb(38, 38, 38);
  --background-modifier-form-field-highlighted: rgb(38, 38, 38);
  --background-modifier-form-field-hover: rgb(38, 38, 38);
  --background-modifier-hover: hsla( 0, 0%, 55%, 0.12 );
  --background-modifier-success: #a8c373;
  --background-modifier-success-rgb: 168,195,115;
  --background-primary: rgb(38, 38, 38);
  --background-primary-alt: rgb(33, 33, 33);
  --background-secondary: rgb(33, 33, 33);
  --background-secondary-alt: rgb(38, 38, 38);
  --background-table-rows: rgb(33, 33, 33);
  --base-h: 0;
  --base-l: 15%;
  --base-s: 0%;
  --bases-cards-background: rgb(38, 38, 38);
  --bases-cards-cover-background: rgb(33, 33, 33);
  --bases-cards-shadow: 0 0 0 1px rgb(54, 54, 54);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(69, 69, 69);
  --bases-embed-border-color: rgb(54, 54, 54);
  --bases-group-heading-property-color: hsl( 0, -20%, 60% );
  --bases-group-heading-property-size: 11px;
  --bases-header-border-width: 0;
  --bases-table-border-color: rgb(54, 54, 54);
  --bases-table-cell-background-active: rgb(38, 38, 38);
  --bases-table-cell-background-disabled: rgb(33, 33, 33);
  --bases-table-cell-background-selected: hsla( 201, 50%, 40%, 30% );
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 89, 89);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(121, 146, 160);
  --bases-table-column-border-width: 0px;
  --bases-table-font-size: 14px;
  --bases-table-group-background: rgb(33, 33, 33);
  --bases-table-header-background: rgb(38, 38, 38);
  --bases-table-header-background-hover: hsla( 0, 0%, 55%, 0.12 );
  --bases-table-header-color: hsl( 0, -20%, 60% );
  --bases-table-summary-background: rgb(38, 38, 38);
  --bases-table-summary-background-hover: hsla( 0, 0%, 55%, 0.12 );
  --bg1: rgb(38, 38, 38);
  --bg2: rgb(33, 33, 33);
  --bg3: hsla( 0, 0%, 55%, 0.12 );
  --blockquote-border-color: rgb(69, 69, 69);
  --blockquote-border-thickness: 1px;
  --blockquote-color: hsl( 0, -20%, 60% );
  --blockquote-style: normal;
  --blur-background: color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent) linear-gradient(hsla( 0, 0%, 55%, 0.12 ), color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent));
  --bold-weight: 600;
  --btn-shadow-color: rgba(0, 0, 0, 0.2);
  --calendar-dot-active: hsl( 0, -10%, 35% );
  --calendar-dot-today: rgb(136, 158, 170);
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
  --canvas-background: rgb(38, 38, 38);
  --canvas-card-label-color: hsl( 0, -10%, 35% );
  --canvas-color-1: 208,66,85;
  --canvas-color-2: 213,118,63;
  --canvas-color-3: 229,181,103;
  --canvas-color-4: 168,195,115;
  --canvas-color-5: 115,187,178;
  --canvas-color-6: 158,134,200;
  --canvas-dot-pattern: rgb(69, 69, 69);
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
  --caret-color: hsl( 0, -10%, 82% );
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
  --checkbox-border-color: hsl( 0, -10%, 35% );
  --checkbox-border-color-hover: hsl( 0, -20%, 60% );
  --checkbox-color: rgb(121, 146, 160);
  --checkbox-color-hover: rgb(136, 158, 170);
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-marker-color: rgb(38, 38, 38);
  --checkbox-radius: 50%;
  --checkbox-top: 2px;
  --checklist-done-color: hsl( 0, -10%, 82% );
  --checklist-done-decoration: none;
  --code-background: rgb(33, 33, 33);
  --code-border-color: rgb(54, 54, 54);
  --code-bracket-background: hsla( 0, 0%, 55%, 0.12 );
  --code-comment: hsl( 0, -10%, 35% );
  --code-function: #e5b567;
  --code-important: #d5763f;
  --code-keyword: #b05279;
  --code-normal: hsl( 0, -10%, 82% );
  --code-operator: #d04255;
  --code-property: #73bbb2;
  --code-punctuation: hsl( 0, -20%, 60% );
  --code-string: #a8c373;
  --code-tag: #d04255;
  --code-value: #9e86c8;
  --collapse-icon-color: hsl( 0, -10%, 35% );
  --collapse-icon-color-collapsed: rgb(136, 158, 170);
  --color-accent: rgb(136, 158, 170);
  --color-accent-1: rgb(163, 181, 189);
  --color-accent-2: rgb(186, 201, 207);
  --color-accent-hsl: 201, 17%, 60%;
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
  --divider-color: rgb(54, 54, 54);
  --divider-color-hover: rgb(121, 146, 160);
  --dropdown-background: hsla( 0, 0%, 55%, 0.12 );
  --dropdown-background-hover: rgb(54, 54, 54);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(121, 146, 160);
  --embed-decoration-color: rgb(69, 69, 69);
  --embed-decoration-style: solid;
  --embed-max-height: none;
  --file-header-background: rgb(38, 38, 38);
  --file-header-background-focused: rgb(38, 38, 38);
  --file-margins: 8px 32px;
  --file-margins-y: 8px;
  --flair-background: hsla( 0, 0%, 55%, 0.12 );
  --flair-color: hsl( 0, -10%, 82% );
  --focus-animation-duration: 0.1s;
  --folding-offset: 32px;
  --font-adaptive-normal: 16px;
  --font-adaptive-small: 13.91px;
  --font-adaptive-smaller: 13px;
  --font-adaptive-smallest: 11px;
  --font-code: 14.4px;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif;
  --font-ui-smaller: 11px;
  --footnote-divider-color: rgb(54, 54, 54);
  --footnote-id-color: hsl( 0, -20%, 60% );
  --footnote-id-color-no-occurrences: hsl( 0, -10%, 35% );
  --footnote-input-background-active: hsla( 0, 0%, 55%, 0.12 );
  --frame-background: rgb(74, 94, 104);
  --frame-background-h: 201;
  --frame-background-l: 35%;
  --frame-background-s: 17%;
  --frame-divider-color: rgb(54, 54, 54);
  --frame-icon-color: rgb(146, 155, 160);
  --frame-muted-color: rgb(146, 155, 160);
  --frame-outline-color: hsla( 201, 15%, 42%, 1 );
  --graph-node: hsl( 0, -20%, 60% );
  --graph-node-attachment: #e5b567;
  --graph-node-focused: rgb(136, 158, 170);
  --graph-node-tag: #a8c373;
  --graph-node-unresolved: hsl( 0, -10%, 35% );
  --graph-text: hsl( 0, -10%, 82% );
  --gray: var(--text-muted);
  --h1-size: 1.125em;
  --h1-weight: 600;
  --h1l: rgb(54, 54, 54);
  --h2-size: 1.05em;
  --h2-weight: 600;
  --h2l: rgb(54, 54, 54);
  --h3-size: 1em;
  --h3-weight: 500;
  --h3l: rgb(54, 54, 54);
  --h4-size: 0.90em;
  --h4-weight: 500;
  --h4l: rgb(54, 54, 54);
  --h5-size: 0.85em;
  --h5-variant: small-caps;
  --h5-weight: 500;
  --h5l: rgb(54, 54, 54);
  --h6-size: 0.85em;
  --h6-variant: small-caps;
  --h6-weight: 400;
  --h6l: rgb(54, 54, 54);
  --heading-formatting: hsl( 0, -10%, 35% );
  --heading-spacing: 2em;
  --hider-ribbon-display: none;
  --highlight: var(--text-highlight-bg);
  --hl1: hsla( 201, 50%, 40%, 30% );
  --hl2: rgba(255, 177, 80, 0.3);
  --hr-color: rgb(54, 54, 54);
  --icon-color: hsl( 0, -20%, 60% );
  --icon-color-active: hsl( 0, -10%, 82% );
  --icon-color-focused: hsl( 0, -10%, 82% );
  --icon-color-hover: hsl( 0, -20%, 60% );
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
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: 1.125em;
  --inline-title-weight: 600;
  --input-date-separator: hsl( 0, -10%, 35% );
  --input-height: 32px;
  --input-placeholder-color: hsl( 0, -10%, 35% );
  --interactive-accent: rgb(121, 146, 160);
  --interactive-accent-hover: rgb(136, 158, 170);
  --interactive-accent-hsl: 201, 17%, 60%;
  --interactive-accent-rgb: 66,66,66;
  --interactive-hover: rgb(54, 54, 54);
  --interactive-normal: hsla( 0, 0%, 55%, 0.12 );
  --kanban-border: 0px;
  --leaflet-borders: rgba(255, 255, 255, 0.1);
  --leaflet-buttons: rgb(33, 33, 33);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-number-color: hsl( 0, -10%, 35% );
  --line-number-color-active: hsl( 0, -20%, 60% );
  --line-width: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(136, 158, 170);
  --link-color-hover: rgb(160, 178, 187);
  --link-decoration: none;
  --link-external-color: rgb(136, 158, 170);
  --link-external-color-hover: rgb(160, 178, 187);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(136, 158, 170);
  --link-unresolved-decoration-color: rgba(136, 158, 170, 0.3);
  --list-edit-offset: 0.5em;
  --list-indent: 2em;
  --list-marker-color: hsl( 0, -10%, 35% );
  --list-marker-color-collapsed: rgb(136, 158, 170);
  --list-marker-color-hover: hsl( 0, -20%, 60% );
  --map-header-padding: 2px;
  --map-max-width: none;
  --map-width: auto;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: rgb(33, 33, 33);
  --menu-border-color: rgb(69, 69, 69);
  --metadata-border-color: rgb(54, 54, 54);
  --metadata-divider-color: rgb(54, 54, 54);
  --metadata-input-background-active: hsla( 0, 0%, 55%, 0.12 );
  --metadata-input-font-size: 13.91px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: hsl( 0, -10%, 82% );
  --metadata-label-background-active: hsla( 0, 0%, 55%, 0.12 );
  --metadata-label-font-size: 13.91px;
  --metadata-label-text-color: hsl( 0, -20%, 60% );
  --metadata-label-text-color-hover: hsl( 0, -20%, 60% );
  --metadata-label-width: 125.19px;
  --metadata-label-width-multiplier: 9;
  --metadata-property-background-active: hsla( 0, 0%, 55%, 0.12 );
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 89, 89);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(69, 69, 69);
  --minimal-tab-text-color: hsl( 0, -20%, 60% );
  --minimal-tab-text-color-active: hsl( 0, -10%, 82% );
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --mobile-sidebar-background: rgb(38, 38, 38);
  --modal-background: rgb(38, 38, 38);
  --modal-border-color: rgb(69, 69, 69);
  --mono0: black;
  --mono100: white;
  --nav-collapse-icon-color: hsl( 0, -20%, 60% );
  --nav-collapse-icon-color-collapsed: hsl( 0, -20%, 60% );
  --nav-heading-color: hsl( 0, -10%, 82% );
  --nav-heading-color-collapsed: hsl( 0, -10%, 35% );
  --nav-heading-color-collapsed-hover: hsl( 0, -20%, 60% );
  --nav-heading-color-hover: hsl( 0, -10%, 82% );
  --nav-indentation-guide-color: rgb(54, 54, 54);
  --nav-item-background-active: hsla( 0, 0%, 55%, 0.12 );
  --nav-item-background-hover: hsla( 0, 0%, 55%, 0.12 );
  --nav-item-background-selected: rgba(136, 158, 170, 0.15);
  --nav-item-color: hsl( 0, -20%, 60% );
  --nav-item-color-active: hsl( 0, -10%, 82% );
  --nav-item-color-highlighted: rgb(136, 158, 170);
  --nav-item-color-hover: hsl( 0, -10%, 82% );
  --nav-item-color-selected: hsl( 0, -10%, 82% );
  --nav-item-white-space: nowrap;
  --nav-tag-color: hsl( 0, -10%, 35% );
  --nav-tag-color-active: hsl( 0, -20%, 60% );
  --nav-tag-color-hover: hsl( 0, -20%, 60% );
  --nested-padding: 1.1em;
  --normal-weight: 400;
  --p-spacing: 1.75rem;
  --pdf-background: rgb(38, 38, 38);
  --pdf-dark-opacity: 1;
  --pdf-page-background: rgb(38, 38, 38);
  --pdf-shadow: none;
  --pdf-sidebar-background: rgb(38, 38, 38);
  --pdf-thumbnail-shadow: none;
  --pill-border-color: rgb(54, 54, 54);
  --pill-border-color-hover: rgb(69, 69, 69);
  --pill-color: hsl( 0, -20%, 60% );
  --pill-color-hover: hsl( 0, -10%, 82% );
  --pill-color-remove: hsl( 0, -10%, 35% );
  --pill-color-remove-hover: rgb(136, 158, 170);
  --progress-complete: rgb(136, 158, 170);
  --progress-outline: rgb(54, 54, 54);
  --prompt-background: rgb(38, 38, 38);
  --prompt-border-color: rgb(89, 89, 89);
  --quote-opening-modifier: rgb(69, 69, 69);
  --raised-background: color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent) linear-gradient(hsla( 0, 0%, 55%, 0.12 ), color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent));
  --ribbon-animation-duration: 0.1s;
  --ribbon-background: rgb(33, 33, 33);
  --ribbon-background-collapsed: rgb(38, 38, 38);
  --scrollbar-active-thumb-bg: rgb(89, 89, 89);
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: rgb(54, 54, 54);
  --search-clear-button-color: hsl( 0, -20%, 60% );
  --search-icon-color: hsl( 0, -20%, 60% );
  --search-result-background: rgb(38, 38, 38);
  --secondary: var(--text-accent);
  --setting-group-heading-color: hsl( 0, -10%, 82% );
  --setting-items-background: rgb(33, 33, 33);
  --setting-items-border-color: rgb(54, 54, 54);
  --shadow-color: rgba(0, 0, 0, 0.3);
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: rgb(69, 69, 69);
  --slider-track-background: rgb(54, 54, 54);
  --sp1: white;
  --status-bar-background: rgb(33, 33, 33);
  --status-bar-border-color: rgb(54, 54, 54);
  --status-bar-font-size: 11px;
  --status-bar-text-color: hsl( 0, -20%, 60% );
  --suggestion-background: rgb(38, 38, 38);
  --sync-avatar-color-1: #d04255;
  --sync-avatar-color-2: #d5763f;
  --sync-avatar-color-3: #e5b567;
  --sync-avatar-color-4: #a8c373;
  --sync-avatar-color-5: #73bbb2;
  --sync-avatar-color-6: #6c99bb;
  --sync-avatar-color-7: #9e86c8;
  --sync-avatar-color-8: #b05279;
  --tab-background-active: rgb(38, 38, 38);
  --tab-container-background: rgb(33, 33, 33);
  --tab-divider-color: rgb(69, 69, 69);
  --tab-outline-color: rgb(54, 54, 54);
  --tab-switcher-background: rgb(33, 33, 33);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 33, 33), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(136, 158, 170);
  --tab-text-color: hsl( 0, -10%, 35% );
  --tab-text-color-active: hsl( 0, -20%, 60% );
  --tab-text-color-focused: hsl( 0, -20%, 60% );
  --tab-text-color-focused-active: hsl( 0, -10%, 82% );
  --tab-text-color-focused-active-current: hsl( 0, -10%, 82% );
  --tab-text-color-focused-highlighted: rgb(136, 158, 170);
  --table-add-button-border-color: rgb(54, 54, 54);
  --table-add-button-border-width: 0px;
  --table-border-color: rgb(54, 54, 54);
  --table-cell-padding: 4px 10px;
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-background-active: hsla( 201, 50%, 40%, 30% );
  --table-drag-handle-color: hsl( 0, -10%, 35% );
  --table-drag-handle-color-active: rgb(136, 158, 170);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-edge-cell-padding-first: 0;
  --table-edge-cell-padding-last: 0;
  --table-header-border-color: rgb(54, 54, 54);
  --table-header-border-width: 0;
  --table-header-color: hsl( 0, -10%, 82% );
  --table-header-size: 14px;
  --table-header-weight: 600;
  --table-max-width: none;
  --table-row-last-border-width: 0;
  --table-selection: hsla( 201, 50%, 40%, 30% );
  --table-selection-border-color: rgb(136, 158, 170);
  --table-selection-border-radius: 0px;
  --table-selection-border-width: 0px;
  --table-text-size: 14px;
  --table-white-space: normal;
  --table-width: auto;
  --table-wrapper-width: fit-content;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: rgb(54, 54, 54);
  --tag-border-color-hover: rgb(69, 69, 69);
  --tag-border-width: 1px;
  --tag-color: hsl( 0, -20%, 60% );
  --tag-color-hover: hsl( 0, -10%, 82% );
  --tag-padding-y: 0.2em;
  --tag-size: 0.8em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(136, 158, 170);
  --text-accent-hover: rgb(160, 178, 187);
  --text-blockquote: hsl( 0, -20%, 60% );
  --text-bold: hsl( 0, -10%, 82% );
  --text-code: hsl( 0, -10%, 65% );
  --text-error: #d04255;
  --text-faint: hsl( 0, -10%, 35% );
  --text-formatting: hsl( 0, -10%, 35% );
  --text-highlight-bg: rgba(255, 177, 80, 0.3);
  --text-highlight-bg-active: rgba(255, 255, 255, 0.1);
  --text-italic: hsl( 0, -10%, 82% );
  --text-muted: hsl( 0, -20%, 60% );
  --text-normal: hsl( 0, -10%, 82% );
  --text-selection: hsla( 201, 50%, 40%, 30% );
  --text-success: #a8c373;
  --text-warning: #d5763f;
  --textHighlight: var(--text-highlight-bg);
  --title-color: hsl( 0, -10%, 82% );
  --title-color-inactive: hsl( 0, -20%, 60% );
  --titlebar-background: rgb(38, 38, 38);
  --titlebar-background-focused: rgb(33, 33, 33);
  --titlebar-border-color: rgb(54, 54, 54);
  --titlebar-text-color: hsl( 0, -20%, 60% );
  --titlebar-text-color-focused: hsl( 0, -10%, 82% );
  --top-left-padding-y: 0px;
  --tx1: hsl( 0, -10%, 82% );
  --tx2: hsl( 0, -20%, 60% );
  --tx3: hsl( 0, -10%, 35% );
  --tx4: hsl( 0, -10%, 65% );
  --ui1: rgb(54, 54, 54);
  --ui2: rgb(69, 69, 69);
  --ui3: rgb(89, 89, 89);
  --vault-profile-color: hsl( 0, -10%, 82% );
  --vault-profile-color-hover: hsl( 0, -10%, 82% );
  --workspace-background-translucent: rgba(38, 38, 38, 0.7);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
  color: rgb(209, 209, 209);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
}

body div#quartz-root {
  background-color: rgb(38, 38, 38);
  color: rgb(209, 209, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .page article p > em, em {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .page article p > i, i {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .page article p > strong, strong {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body del {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: line-through rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body p {
  color: rgb(153, 153, 153);
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration: rgb(136, 158, 170);
  text-decoration-color: rgb(136, 158, 170);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration: rgb(136, 158, 170);
  text-decoration-color: rgb(136, 158, 170);
}

body a.internal.broken {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration: rgba(136, 158, 170, 0.3);
  text-decoration-color: rgba(136, 158, 170, 0.3);
}`,
    lists: `body dd {
  color: rgb(209, 209, 209);
}

body dt {
  color: rgb(209, 209, 209);
}

body ol > li {
  color: rgb(209, 209, 209);
}

body ol.overflow {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body ul > li {
  color: rgb(209, 209, 209);
}

body ul.overflow {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body table {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
  margin-top: 8px;
  width: 187.438px;
}

body td {
  border-left-width: 0px;
  color: rgb(209, 209, 209);
  padding-left: 0px;
  padding-right: 10px;
}

body th {
  border-left-width: 0px;
  border-top-width: 0px;
  color: rgb(209, 209, 209);
  padding-left: 0px;
  padding-right: 10px;
}

body thead {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body tr {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    code: `body code {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 33, 33);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
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
  background-color: rgb(33, 33, 33);
}

body pre:has(> code) {
  background-color: rgb(33, 33, 33);
}`,
    images: `body audio {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body figcaption {
  color: rgb(209, 209, 209);
}

body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  margin-left: 0px;
  margin-right: 0px;
}

body img {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(209, 209, 209);
  border-radius: 4px;
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(209, 209, 209);
  border-radius: 4px;
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(121, 146, 160);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(121, 146, 160);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body input[type=checkbox] {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(89, 89, 89);
  text-decoration: line-through 1px rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
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
  background-color: rgb(38, 38, 38);
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(140, 140, 140, 0.12);
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(140, 140, 140, 0.12);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(140, 140, 140, 0.12);
  color: rgb(209, 209, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: rgb(153, 153, 153);
}

body h1 {
  color: rgb(209, 209, 209);
}

body h2 {
  color: rgb(209, 209, 209);
}

body h2.page-title, h2.page-title a {
  color: rgb(209, 209, 209);
}

body h3 {
  color: rgb(209, 209, 209);
}

body h4 {
  color: rgb(209, 209, 209);
}

body h5 {
  color: rgb(209, 209, 209);
}

body h6 {
  color: rgb(209, 209, 209);
}`,
    scrollbars: `body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(140, 140, 140, 0.12);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `body footer {
  border-left-width: 0px;
  border-top-width: 0px;
  color: rgb(89, 89, 89);
}

body footer ul li a {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(209, 209, 209);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .breadcrumb-element p {
  color: rgb(89, 89, 89);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .metadata {
  color: rgb(153, 153, 153);
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .page-header h2.page-title {
  color: rgb(209, 209, 209);
}

body abbr {
  color: rgb(209, 209, 209);
  text-decoration: underline dotted rgb(209, 209, 209);
}

body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body kbd {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body sub {
  color: rgb(209, 209, 209);
}

body summary {
  color: rgb(209, 209, 209);
}

body sup {
  color: rgb(209, 209, 209);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201;
  --accent-l: 50%;
  --accent-s: 17%;
  --active-line-bg: rgba(0, 0, 0, 0.035);
  --adaptive-list-edit-offset: 0.5em;
  --ax1: rgb(106, 134, 149);
  --ax2: rgb(89, 113, 125);
  --ax3: rgb(124, 149, 162);
  --background-modifier-accent: rgb(124, 149, 162);
  --background-modifier-active-hover: hsla( 0, 0%, 46%, 0.12 );
  --background-modifier-border: rgb(230, 230, 230);
  --background-modifier-border-focus: rgb(194, 194, 194);
  --background-modifier-border-hover: rgb(214, 214, 214);
  --background-modifier-cover: hsla(0,-70%,76%,0.5);
  --background-modifier-error: rgba(255, 0, 0, 0.14);
  --background-modifier-error-hover: rgba(255, 0, 0, 0.08);
  --background-modifier-error-rgb: 208,66,85;
  --background-modifier-form-field: white;
  --background-modifier-form-field-highlighted: white;
  --background-modifier-form-field-hover: white;
  --background-modifier-hover: hsla( 0, 0%, 46%, 0.12 );
  --background-modifier-success: #a8c373;
  --background-modifier-success-rgb: 168,195,115;
  --background-primary: white;
  --background-primary-alt: rgb(245, 245, 245);
  --background-secondary: rgb(245, 245, 245);
  --background-secondary-alt: white;
  --background-table-rows: rgb(245, 245, 245);
  --base-h: 0;
  --base-l: 96%;
  --base-s: 0%;
  --bases-cards-background: white;
  --bases-cards-cover-background: rgb(245, 245, 245);
  --bases-cards-shadow: 0 0 0 1px rgb(230, 230, 230);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(214, 214, 214);
  --bases-embed-border-color: rgb(230, 230, 230);
  --bases-group-heading-property-color: hsl( 0, -20%, 46% );
  --bases-group-heading-property-size: 11px;
  --bases-header-border-width: 0;
  --bases-table-border-color: rgb(230, 230, 230);
  --bases-table-cell-background-active: white;
  --bases-table-cell-background-disabled: rgb(245, 245, 245);
  --bases-table-cell-background-selected: hsla( 201, 50%, 76%, 30% );
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(194, 194, 194);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(124, 149, 162);
  --bases-table-column-border-width: 0px;
  --bases-table-font-size: 14px;
  --bases-table-group-background: rgb(245, 245, 245);
  --bases-table-header-background: white;
  --bases-table-header-background-hover: hsla( 0, 0%, 46%, 0.12 );
  --bases-table-header-color: hsl( 0, -20%, 46% );
  --bases-table-summary-background: white;
  --bases-table-summary-background-hover: hsla( 0, 0%, 46%, 0.12 );
  --bg1: white;
  --bg2: rgb(245, 245, 245);
  --bg3: hsla( 0, 0%, 46%, 0.12 );
  --blockquote-border-color: rgb(214, 214, 214);
  --blockquote-border-thickness: 1px;
  --blockquote-color: hsl( 0, -20%, 46% );
  --blockquote-style: normal;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --bold-weight: 600;
  --btn-shadow-color: rgba(0, 0, 0, 0.05);
  --calendar-dot-active: hsl( 0, -10%, 71% );
  --calendar-dot-today: rgb(106, 134, 149);
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
  --canvas-background: white;
  --canvas-card-label-color: hsl( 0, -10%, 71% );
  --canvas-color-1: 208,66,85;
  --canvas-color-2: 213,118,63;
  --canvas-color-3: 229,181,103;
  --canvas-color-4: 168,195,115;
  --canvas-color-5: 115,187,178;
  --canvas-color-6: 158,134,200;
  --canvas-dot-pattern: rgb(214, 214, 214);
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
  --caret-color: rgb(15, 15, 15);
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
  --checkbox-border-color: hsl( 0, -10%, 71% );
  --checkbox-border-color-hover: hsl( 0, -20%, 46% );
  --checkbox-color: rgb(124, 149, 162);
  --checkbox-color-hover: rgb(106, 134, 149);
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-top: 2px;
  --checklist-done-color: rgb(15, 15, 15);
  --checklist-done-decoration: none;
  --code-background: rgb(245, 245, 245);
  --code-border-color: rgb(230, 230, 230);
  --code-bracket-background: hsla( 0, 0%, 46%, 0.12 );
  --code-comment: hsl( 0, -10%, 71% );
  --code-function: #e5b567;
  --code-important: #d5763f;
  --code-keyword: #b05279;
  --code-normal: rgb(15, 15, 15);
  --code-operator: #d04255;
  --code-property: #73bbb2;
  --code-punctuation: hsl( 0, -20%, 46% );
  --code-string: #a8c373;
  --code-tag: #d04255;
  --code-value: #9e86c8;
  --collapse-icon-color: hsl( 0, -10%, 71% );
  --collapse-icon-color-collapsed: rgb(106, 134, 149);
  --color-accent: rgb(106, 134, 149);
  --color-accent-1: rgb(118, 144, 158);
  --color-accent-2: rgb(130, 155, 166);
  --color-accent-hsl: 201, 17%, 50%;
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
  --divider-color: rgb(230, 230, 230);
  --divider-color-hover: rgb(124, 149, 162);
  --dropdown-background: white;
  --dropdown-background-hover: rgb(230, 230, 230);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(124, 149, 162);
  --embed-decoration-color: rgb(214, 214, 214);
  --embed-decoration-style: solid;
  --embed-max-height: none;
  --file-header-background: white;
  --file-header-background-focused: white;
  --file-margins: 8px 32px;
  --file-margins-y: 8px;
  --flair-background: white;
  --flair-color: rgb(15, 15, 15);
  --focus-animation-duration: 0.1s;
  --folding-offset: 32px;
  --font-adaptive-normal: 16px;
  --font-adaptive-small: 13.91px;
  --font-adaptive-smaller: 13px;
  --font-adaptive-smallest: 11px;
  --font-code: 14.4px;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif;
  --font-ui-smaller: 11px;
  --footnote-divider-color: rgb(230, 230, 230);
  --footnote-id-color: hsl( 0, -20%, 46% );
  --footnote-id-color-no-occurrences: hsl( 0, -10%, 71% );
  --footnote-input-background-active: hsla( 0, 0%, 46%, 0.12 );
  --frame-background: rgb(195, 207, 213);
  --frame-background-h: 201;
  --frame-background-l: 80%;
  --frame-background-s: 17%;
  --frame-divider-color: rgb(230, 230, 230);
  --frame-icon-color: rgb(107, 117, 123);
  --frame-muted-color: rgb(107, 117, 123);
  --frame-outline-color: hsla( 201, 17%, 74%, 1 );
  --graph-node: hsl( 0, -20%, 46% );
  --graph-node-attachment: #e5b567;
  --graph-node-focused: rgb(106, 134, 149);
  --graph-node-tag: #a8c373;
  --graph-node-unresolved: hsl( 0, -10%, 71% );
  --graph-text: rgb(15, 15, 15);
  --gray: var(--text-muted);
  --h1-size: 1.125em;
  --h1-weight: 600;
  --h1l: rgb(230, 230, 230);
  --h2-size: 1.05em;
  --h2-weight: 600;
  --h2l: rgb(230, 230, 230);
  --h3-size: 1em;
  --h3-weight: 500;
  --h3l: rgb(230, 230, 230);
  --h4-size: 0.90em;
  --h4-weight: 500;
  --h4l: rgb(230, 230, 230);
  --h5-size: 0.85em;
  --h5-variant: small-caps;
  --h5-weight: 500;
  --h5l: rgb(230, 230, 230);
  --h6-size: 0.85em;
  --h6-variant: small-caps;
  --h6-weight: 400;
  --h6l: rgb(230, 230, 230);
  --heading-formatting: hsl( 0, -10%, 71% );
  --heading-spacing: 2em;
  --hider-ribbon-display: none;
  --highlight: var(--text-highlight-bg);
  --hl1: hsla( 201, 50%, 76%, 30% );
  --hl2: rgba(255, 225, 0, 0.5);
  --hr-color: rgb(230, 230, 230);
  --icon-color: hsl( 0, -20%, 46% );
  --icon-color-active: rgb(15, 15, 15);
  --icon-color-focused: rgb(15, 15, 15);
  --icon-color-hover: hsl( 0, -20%, 46% );
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
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: 1.125em;
  --inline-title-weight: 600;
  --input-date-separator: hsl( 0, -10%, 71% );
  --input-height: 32px;
  --input-placeholder-color: hsl( 0, -10%, 71% );
  --interactive-accent: rgb(124, 149, 162);
  --interactive-accent-hover: rgb(106, 134, 149);
  --interactive-accent-hsl: 201, 17%, 50%;
  --interactive-accent-rgb: 220,220,220;
  --interactive-hover: rgb(230, 230, 230);
  --interactive-normal: white;
  --leaflet-borders: rgba(0, 0, 0, 0.1);
  --leaflet-buttons: white;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-number-color: hsl( 0, -10%, 71% );
  --line-number-color-active: hsl( 0, -20%, 46% );
  --line-width: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(106, 134, 149);
  --link-color-hover: rgb(89, 113, 125);
  --link-decoration: none;
  --link-external-color: rgb(106, 134, 149);
  --link-external-color-hover: rgb(89, 113, 125);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(106, 134, 149);
  --link-unresolved-decoration-color: rgba(106, 134, 149, 0.3);
  --list-edit-offset: 0.5em;
  --list-indent: 2em;
  --list-marker-color: hsl( 0, -10%, 71% );
  --list-marker-color-collapsed: rgb(106, 134, 149);
  --list-marker-color-hover: hsl( 0, -20%, 46% );
  --map-header-padding: 2px;
  --map-max-width: none;
  --map-width: auto;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: rgb(245, 245, 245);
  --menu-border-color: rgb(214, 214, 214);
  --metadata-border-color: rgb(230, 230, 230);
  --metadata-divider-color: rgb(230, 230, 230);
  --metadata-input-background-active: hsla( 0, 0%, 46%, 0.12 );
  --metadata-input-font-size: 13.91px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: rgb(15, 15, 15);
  --metadata-label-background-active: hsla( 0, 0%, 46%, 0.12 );
  --metadata-label-font-size: 13.91px;
  --metadata-label-text-color: hsl( 0, -20%, 46% );
  --metadata-label-text-color-hover: hsl( 0, -20%, 46% );
  --metadata-label-width: 125.19px;
  --metadata-label-width-multiplier: 9;
  --metadata-property-background-active: hsla( 0, 0%, 46%, 0.12 );
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(194, 194, 194);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(214, 214, 214);
  --minimal-tab-text-color: hsl( 0, -20%, 46% );
  --minimal-tab-text-color-active: rgb(15, 15, 15);
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --mobile-sidebar-background: white;
  --modal-background: white;
  --mono0: white;
  --mono100: black;
  --nav-collapse-icon-color: hsl( 0, -20%, 46% );
  --nav-collapse-icon-color-collapsed: hsl( 0, -20%, 46% );
  --nav-heading-color: rgb(15, 15, 15);
  --nav-heading-color-collapsed: hsl( 0, -10%, 71% );
  --nav-heading-color-collapsed-hover: hsl( 0, -20%, 46% );
  --nav-heading-color-hover: rgb(15, 15, 15);
  --nav-indentation-guide-color: rgb(230, 230, 230);
  --nav-item-background-active: hsla( 0, 0%, 46%, 0.12 );
  --nav-item-background-hover: hsla( 0, 0%, 46%, 0.12 );
  --nav-item-background-selected: rgba(106, 134, 149, 0.15);
  --nav-item-color: hsl( 0, -20%, 46% );
  --nav-item-color-active: rgb(15, 15, 15);
  --nav-item-color-highlighted: rgb(106, 134, 149);
  --nav-item-color-hover: rgb(15, 15, 15);
  --nav-item-color-selected: rgb(15, 15, 15);
  --nav-item-white-space: nowrap;
  --nav-tag-color: hsl( 0, -10%, 71% );
  --nav-tag-color-active: hsl( 0, -20%, 46% );
  --nav-tag-color-hover: hsl( 0, -20%, 46% );
  --nested-padding: 1.1em;
  --normal-weight: 400;
  --p-spacing: 1.75rem;
  --pdf-background: white;
  --pdf-dark-opacity: 1;
  --pdf-page-background: white;
  --pdf-shadow: none;
  --pdf-sidebar-background: white;
  --pdf-thumbnail-shadow: none;
  --pill-border-color: rgb(230, 230, 230);
  --pill-border-color-hover: rgb(214, 214, 214);
  --pill-color: hsl( 0, -20%, 46% );
  --pill-color-hover: rgb(15, 15, 15);
  --pill-color-remove: hsl( 0, -10%, 71% );
  --pill-color-remove-hover: rgb(106, 134, 149);
  --progress-complete: rgb(106, 134, 149);
  --progress-outline: rgb(230, 230, 230);
  --prompt-background: white;
  --prompt-border-color: rgb(194, 194, 194);
  --quote-opening-modifier: rgb(214, 214, 214);
  --raised-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --ribbon-animation-duration: 0.1s;
  --ribbon-background: rgb(245, 245, 245);
  --ribbon-background-collapsed: white;
  --scrollbar-active-thumb-bg: rgb(194, 194, 194);
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: rgb(230, 230, 230);
  --search-clear-button-color: hsl( 0, -20%, 46% );
  --search-icon-color: hsl( 0, -20%, 46% );
  --search-result-background: white;
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(15, 15, 15);
  --setting-items-background: rgb(245, 245, 245);
  --setting-items-border-color: rgb(230, 230, 230);
  --shadow-color: rgba(0, 0, 0, 0.1);
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: rgb(214, 214, 214);
  --slider-track-background: rgb(230, 230, 230);
  --sp1: white;
  --status-bar-background: rgb(245, 245, 245);
  --status-bar-border-color: rgb(230, 230, 230);
  --status-bar-font-size: 11px;
  --status-bar-text-color: hsl( 0, -20%, 46% );
  --suggestion-background: white;
  --sync-avatar-color-1: #d04255;
  --sync-avatar-color-2: #d5763f;
  --sync-avatar-color-3: #e5b567;
  --sync-avatar-color-4: #a8c373;
  --sync-avatar-color-5: #73bbb2;
  --sync-avatar-color-6: #6c99bb;
  --sync-avatar-color-7: #9e86c8;
  --sync-avatar-color-8: #b05279;
  --tab-background-active: white;
  --tab-container-background: rgb(245, 245, 245);
  --tab-divider-color: rgb(214, 214, 214);
  --tab-outline-color: rgb(230, 230, 230);
  --tab-switcher-background: rgb(245, 245, 245);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 245, 245), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(106, 134, 149);
  --tab-text-color: hsl( 0, -10%, 71% );
  --tab-text-color-active: hsl( 0, -20%, 46% );
  --tab-text-color-focused: hsl( 0, -20%, 46% );
  --tab-text-color-focused-active: rgb(15, 15, 15);
  --tab-text-color-focused-active-current: rgb(15, 15, 15);
  --tab-text-color-focused-highlighted: rgb(106, 134, 149);
  --table-add-button-border-color: rgb(230, 230, 230);
  --table-add-button-border-width: 0px;
  --table-border-color: rgb(230, 230, 230);
  --table-cell-padding: 4px 10px;
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-background-active: hsla( 201, 50%, 76%, 30% );
  --table-drag-handle-color: hsl( 0, -10%, 71% );
  --table-drag-handle-color-active: rgb(106, 134, 149);
  --table-drag-padding: 16px;
  --table-drag-space: 16px;
  --table-edge-cell-padding-first: 0;
  --table-edge-cell-padding-last: 0;
  --table-header-border-color: rgb(230, 230, 230);
  --table-header-border-width: 0;
  --table-header-color: rgb(15, 15, 15);
  --table-header-size: 14px;
  --table-header-weight: 600;
  --table-max-width: none;
  --table-row-last-border-width: 0;
  --table-selection: hsla( 201, 50%, 76%, 30% );
  --table-selection-border-color: rgb(106, 134, 149);
  --table-selection-border-radius: 0px;
  --table-selection-border-width: 0px;
  --table-text-size: 14px;
  --table-white-space: normal;
  --table-width: auto;
  --table-wrapper-width: fit-content;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: rgb(230, 230, 230);
  --tag-border-color-hover: rgb(214, 214, 214);
  --tag-border-width: 1px;
  --tag-color: hsl( 0, -20%, 46% );
  --tag-color-hover: rgb(15, 15, 15);
  --tag-padding-y: 0.2em;
  --tag-size: 0.8em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(106, 134, 149);
  --text-accent-hover: rgb(89, 113, 125);
  --text-blockquote: hsl( 0, -20%, 46% );
  --text-bold: rgb(15, 15, 15);
  --text-code: hsl( 0, -10%, 36% );
  --text-error: #d04255;
  --text-faint: hsl( 0, -10%, 71% );
  --text-formatting: hsl( 0, -10%, 71% );
  --text-highlight-bg: rgba(255, 225, 0, 0.5);
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1);
  --text-italic: rgb(15, 15, 15);
  --text-muted: hsl( 0, -20%, 46% );
  --text-normal: rgb(15, 15, 15);
  --text-selection: hsla( 201, 50%, 76%, 30% );
  --text-success: #a8c373;
  --text-warning: #d5763f;
  --textHighlight: var(--text-highlight-bg);
  --title-color: rgb(15, 15, 15);
  --title-color-inactive: hsl( 0, -20%, 46% );
  --titlebar-background: white;
  --titlebar-background-focused: rgb(245, 245, 245);
  --titlebar-border-color: rgb(230, 230, 230);
  --titlebar-text-color: hsl( 0, -20%, 46% );
  --titlebar-text-color-focused: rgb(15, 15, 15);
  --top-left-padding-y: 0px;
  --tx1: rgb(15, 15, 15);
  --tx2: hsl( 0, -20%, 46% );
  --tx3: hsl( 0, -10%, 71% );
  --tx4: hsl( 0, -10%, 36% );
  --ui1: rgb(230, 230, 230);
  --ui2: rgb(214, 214, 214);
  --ui3: rgb(194, 194, 194);
  --vault-profile-color: rgb(15, 15, 15);
  --vault-profile-color-hover: rgb(15, 15, 15);
  --workspace-background-translucent: rgba(245, 245, 245, 0.7);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(15, 15, 15);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(15, 15, 15);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(15, 15, 15);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
}

body div#quartz-root {
  color: rgb(15, 15, 15);
}`,
    typography: `body .page article p > b, b {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body .page article p > em, em {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body .page article p > i, i {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body .page article p > strong, strong {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body del {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: line-through rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body p {
  color: rgb(117, 117, 117);
  outline: rgb(117, 117, 117) none 0px;
  text-decoration: rgb(117, 117, 117);
  text-decoration-color: rgb(117, 117, 117);
}`,
    links: `body a.external, footer a {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration: rgb(106, 134, 149);
  text-decoration-color: rgb(106, 134, 149);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration: rgb(106, 134, 149);
  text-decoration-color: rgb(106, 134, 149);
}

body a.internal.broken {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration: rgba(106, 134, 149, 0.3);
  text-decoration-color: rgba(106, 134, 149, 0.3);
}`,
    lists: `body dd {
  color: rgb(15, 15, 15);
}

body dt {
  color: rgb(15, 15, 15);
}

body ol > li {
  color: rgb(15, 15, 15);
}

body ol.overflow {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body ul > li {
  color: rgb(15, 15, 15);
}

body ul.overflow {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(181, 181, 181);
  text-decoration: rgb(181, 181, 181);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body table {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
  margin-top: 8px;
  width: 187.438px;
}

body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
  padding-left: 0px;
  padding-right: 10px;
}

body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-width: 0px;
  color: rgb(15, 15, 15);
  padding-left: 0px;
  padding-right: 10px;
}

body thead {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body tr {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    code: `body code {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
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
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    images: `body audio {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body figcaption {
  color: rgb(15, 15, 15);
}

body figure {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  margin-left: 0px;
  margin-right: 0px;
}

body img {
  border-bottom-color: rgb(15, 15, 15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(15, 15, 15);
  border-radius: 4px;
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(15, 15, 15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(15, 15, 15);
  border-radius: 4px;
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
}

body .footnotes {
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

body .transclude {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(124, 149, 162);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body .transclude-inner {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(124, 149, 162);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body input[type=checkbox] {
  border-bottom-color: rgb(181, 181, 181);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(181, 181, 181);
  border-right-color: rgb(181, 181, 181);
  border-top-color: rgb(181, 181, 181);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='*'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='-'] {
  color: rgb(181, 181, 181);
  text-decoration: line-through 1px rgb(181, 181, 181);
  text-decoration-color: rgb(181, 181, 181);
}

body li.task-list-item[data-task='/'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='>'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='?'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='I'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='S'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='b'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='c'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='d'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='f'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='i'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='k'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='l'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='p'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='u'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body li.task-list-item[data-task='w'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
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
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body .search > .search-container > .search-space > * {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(15, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(15, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(117, 117, 117, 0.12);
  color: rgb(15, 15, 15);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(117, 117, 117, 0.12);
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(117, 117, 117, 0.12);
  color: rgb(15, 15, 15);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: rgb(117, 117, 117);
}

body h1 {
  color: rgb(15, 15, 15);
}

body h2 {
  color: rgb(15, 15, 15);
}

body h2.page-title, h2.page-title a {
  color: rgb(15, 15, 15);
}

body h3 {
  color: rgb(15, 15, 15);
}

body h4 {
  color: rgb(15, 15, 15);
}

body h5 {
  color: rgb(15, 15, 15);
}

body h6 {
  color: rgb(15, 15, 15);
}

body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
}`,
    scrollbars: `body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(117, 117, 117, 0.12);
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-width: 0px;
  color: rgb(181, 181, 181);
}

body footer ul li a {
  color: rgb(181, 181, 181);
  text-decoration: rgb(181, 181, 181);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(15, 15, 15);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 117, 117);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body li.section-li > .section .meta {
  color: rgb(117, 117, 117);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

body ul.section-ul {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

body .darkmode svg {
  color: rgb(117, 117, 117);
  stroke: rgb(117, 117, 117);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

body .breadcrumb-element p {
  color: rgb(181, 181, 181);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(117, 117, 117);
}

body .metadata-properties {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(15, 15, 15);
}

body abbr {
  color: rgb(15, 15, 15);
  text-decoration: underline dotted rgb(15, 15, 15);
}

body details {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body input[type=text] {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

body progress {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

body sub {
  color: rgb(15, 15, 15);
}

body summary {
  color: rgb(15, 15, 15);
}

body sup {
  color: rgb(15, 15, 15);
}`,
  },
};
