import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "notation-2",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lyons-serif", "ia-writer-duospace"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --L0: 0%;
  --L1: 20%;
  --L2: 23%;
  --L3: 26%;
  --accent-h: 210;
  --accent-l: 51%;
  --accent-s: 77%;
  --background-accent: rgb(0, 0, 0);
  --background-modifier-active-hover: rgba(34, 130, 226, 0.1);
  --background-modifier-border: rgba(255, 255, 255, 0.14);
  --background-modifier-border-focus: #535353;
  --background-modifier-border-hover: #363636;
  --background-modifier-error: rgb(255, 115, 105);
  --background-modifier-error-hover: rgb(255, 115, 105);
  --background-modifier-error-rgb: 89, 65, 65;
  --background-modifier-form-field: #21201e;
  --background-modifier-form-field-hover: #21201e;
  --background-modifier-hover: rgba(255, 255, 255, 0.04);
  --background-modifier-success: rgb(77, 171, 154);
  --background-modifier-success-rgb: 53, 76, 75;
  --background-primary: rgb(47, 52, 55);
  --background-primary-alt: rgb(61, 68, 72);
  --background-secondary: rgb(54, 60, 63);
  --background-secondary-alt: rgb(61, 68, 72);
  --banner-size: 220px;
  --bases-cards-background: rgb(47, 52, 55);
  --bases-cards-cover-background: rgb(61, 68, 72);
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --bases-cards-shadow-hover: 0 0 0 1px #363636;
  --bases-embed-border-color: rgba(255, 255, 255, 0.14);
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.7);
  --bases-group-heading-property-size: 0.9em;
  --bases-table-border-color: rgba(255, 255, 255, 0.14);
  --bases-table-cell-background-active: rgb(47, 52, 55);
  --bases-table-cell-background-disabled: rgb(61, 68, 72);
  --bases-table-cell-background-selected: rgba(34, 130, 226, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #535353;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: rgb(61, 68, 72);
  --bases-table-header-background: rgb(47, 52, 55);
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.04);
  --bases-table-header-color: rgba(255, 255, 255, 0.7);
  --bases-table-summary-background: rgb(47, 52, 55);
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.04);
  --blockquote-border-color: rgba(255, 255, 255, 0.9);
  --blockquote-border-thickness: 3px;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --callout-bug: 89, 65, 65;
  --callout-default: 54, 73, 84;
  --callout-error: 89, 65, 65;
  --callout-example: 68, 63, 87;
  --callout-fail: 89, 65, 65;
  --callout-important: 29, 40, 46;
  --callout-info: 54, 73, 84;
  --callout-question: 89, 74, 58;
  --callout-radius: 3px;
  --callout-success: 53, 76, 75;
  --callout-summary: 29, 40, 46;
  --callout-tip: 29, 40, 46;
  --callout-todo: 54, 73, 84;
  --callout-warning: 89, 74, 58;
  --canvas-background: rgb(47, 52, 55);
  --canvas-card-label-color: rgba(255, 255, 255, 0.55);
  --canvas-color-1: 89, 65, 65;
  --canvas-color-2: 89, 74, 58;
  --canvas-color-3: 89, 86, 59;
  --canvas-color-4: 53, 76, 75;
  --canvas-color-5: 29, 40, 46;
  --canvas-color-6: 68, 63, 87;
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: #21201e;
  --caret-color: rgba(255, 255, 255, 0.9);
  --checkbox-border-color: rgba(255, 255, 255, 0.55);
  --checkbox-border-color-hover: rgba(255, 255, 255, 0.7);
  --checkbox-color: rgb(46, 170, 220);
  --checkbox-color-hover: rgba(46, 170, 220, 0.8);
  --checkbox-marker-color: rgb(47, 52, 55);
  --checkbox-radius: 3px;
  --checklist-done-color: rgba(255, 255, 255, 0.7);
  --clickable-icon-radius: 3px;
  --code: #EB5757;
  --code-background: rgb(179, 178, 178);
  --code-border-color: rgba(255, 255, 255, 0.14);
  --code-bracket-background: rgba(255, 255, 255, 0.04);
  --code-comment: rgba(255, 255, 255, 0.55);
  --code-function: rgb(255, 220, 73);
  --code-important: rgb(255, 163, 68);
  --code-keyword: rgb(226, 85, 161);
  --code-normal: rgba(255, 255, 255, 0.9);
  --code-operator: rgb(255, 115, 105);
  --code-property: rgb(51, 126, 169);
  --code-punctuation: rgba(255, 255, 255, 0.7);
  --code-radius: 3px;
  --code-string: rgb(77, 171, 154);
  --code-tag: rgb(255, 115, 105);
  --code-value: rgb(154, 109, 215);
  --collapse-icon-color: rgba(255, 255, 255, 0.55);
  --collapse-icon-color-collapsed: rgba(255, 255, 255, 0.45);
  --color-accent: rgb(34, 130, 226);
  --color-accent-1: rgb(68, 159, 233);
  --color-accent-2: rgb(98, 180, 239);
  --color-accent-hsl: 210, 77%, 51%;
  --color-base-00: #191919;
  --color-base-10: rgb(32, 32, 32);
  --color-base-20: rgb(32, 32, 32);
  --color-base-25: #21201e;
  --color-base-30: #21201e;
  --color-base-35: #363636;
  --color-base-40: #535353;
  --color-base-50: #707070;
  --color-base-60: #5d5d5d;
  --color-base-70: #a0a0a0;
  --color-blue: rgb(82, 156, 202);
  --color-blue-rgb: 54, 73, 84;
  --color-brown: rgb(147, 114, 100);
  --color-brown-rgb: 67, 64, 64;
  --color-cyan: rgb(51, 126, 169);
  --color-cyan-rgb: 29, 40, 46;
  --color-gray: rgba(255, 255, 255, 0.6);
  --color-gray-rgb: 69, 75, 78;
  --color-green: rgb(77, 171, 154);
  --color-green-rgb: 53, 76, 75;
  --color-orange: rgb(255, 163, 68);
  --color-orange-rgb: 89, 74, 58;
  --color-pink: rgb(226, 85, 161);
  --color-pink-rgb: 83, 59, 76;
  --color-purple: rgb(154, 109, 215);
  --color-purple-rgb: 68, 63, 87;
  --color-red: rgb(255, 115, 105);
  --color-red-rgb: 89, 65, 65;
  --color-yellow: rgb(255, 220, 73);
  --color-yellow-rgb: 89, 86, 59;
  --custom-line-height: 1.5em;
  --divider-color: rgba(255, 255, 255, 0.14);
  --divider-color-hover: rgb(46, 170, 220);
  --divider-width: 0.05em;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  --embed-border-start: 2px solid rgb(46, 170, 220);
  --file-header-background: rgb(47, 52, 55);
  --file-header-background-focused: rgb(47, 52, 55);
  --file-header-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --file-header-font-size: 0.95em;
  --flair-background: #2a2a2a;
  --flair-color: rgba(255, 255, 255, 0.9);
  --font-bold: 500;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-interface: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-monospace: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-monospace-default: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-ui-large: 1.15em;
  --font-ui-medium: 0.97em;
  --font-ui-small: 0.95em;
  --font-ui-smaller: 0.9em;
  --footnote-divider-color: rgba(255, 255, 255, 0.14);
  --footnote-id-color: rgba(255, 255, 255, 0.7);
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.55);
  --footnote-input-background-active: rgba(255, 255, 255, 0.04);
  --footnote-radius: 3px;
  --graph-line: rgba(255, 255, 255, 0.14);
  --graph-node: rgb(82, 156, 202);
  --graph-node-attachment: rgb(255, 220, 73);
  --graph-node-focused: rgb(46, 170, 220);
  --graph-node-tag: rgb(77, 171, 154);
  --graph-node-unresolved: rgb(51, 126, 169);
  --graph-text: rgba(255, 255, 255, 0.9);
  --h-bg: transparent;
  --h-color: rgba(255, 255, 255, 0.9);
  --h1-bg: transparent;
  --h1-color: rgba(255, 255, 255, 0.9);
  --h1-size: 1.875em;
  --h1-weight: 600;
  --h2-bg: transparent;
  --h2-color: rgba(255, 255, 255, 0.9);
  --h2-size: 1.5em;
  --h2-weight: 600;
  --h3-bg: transparent;
  --h3-color: rgba(255, 255, 255, 0.9);
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-bg: transparent;
  --h4-color: rgba(255, 255, 255, 0.9);
  --h4-weight: 600;
  --h5-bg: transparent;
  --h5-color: rgba(255, 255, 255, 0.9);
  --h5-weight: 600;
  --h6-bg: transparent;
  --h6-color: rgba(255, 255, 255, 0.9);
  --heading-formatting: rgba(255, 255, 255, 0.55);
  --hr-color: rgba(255, 255, 255, 0.14);
  --hue: 203;
  --icon-color: rgba(255, 255, 255, 0.7);
  --icon-color-active: rgba(255, 255, 255, 0.45);
  --icon-color-focused: rgba(255, 255, 255, 0.9);
  --icon-color-hover: rgba(255, 255, 255, 0.7);
  --indentation-guide-color: transparent;
  --inline-title-color: rgba(255, 255, 255, 0.9);
  --inline-title-size: 1.875em;
  --inline-title-weight: 600;
  --input-date-separator: rgba(255, 255, 255, 0.55);
  --input-placeholder-color: rgba(255, 255, 255, 0.55);
  --interactive-accent: rgb(46, 170, 220);
  --interactive-accent-hover: rgba(46, 170, 220, 0.8);
  --interactive-accent-hsl: 210, 77%, 51%;
  --interactive-accent-rgb: 46, 170, 220;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --link-color: rgba(255, 255, 255, 0.45);
  --link-color-hover: rgba(255, 255, 255, 0.7);
  --link-external-color: rgba(255, 255, 255, 0.45);
  --link-external-color-hover: rgba(255, 255, 255, 0.45);
  --link-unresolved-color: rgba(255, 255, 255, 0.45);
  --link-unresolved-decoration-color: rgba(34, 130, 226, 0.3);
  --list-bullet-size: 0.37em;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-indent: 1.5em;
  --list-marker-color: rgba(255, 255, 255, 0.9);
  --list-marker-color-collapsed: rgba(255, 255, 255, 0.45);
  --list-marker-color-hover: rgba(255, 255, 255, 0.9);
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-spacing: 0.3em;
  --menu-background: rgb(54, 60, 63);
  --menu-border-color: #363636;
  --metadata-border-color: rgba(255, 255, 255, 0.14);
  --metadata-divider-color: rgba(255, 255, 255, 0.14);
  --metadata-input-background-active: rgba(255, 255, 255, 0.04);
  --metadata-input-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-input-text-color: rgba(255, 255, 255, 0.9);
  --metadata-label-background-active: rgba(255, 255, 255, 0.04);
  --metadata-label-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-label-text-color: rgba(255, 255, 255, 0.7);
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.7);
  --metadata-property-background-active: rgba(255, 255, 255, 0.04);
  --metadata-property-box-shadow-focus: 0 0 0 2px #535353;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636;
  --metadata-sidebar-input-font-size: 0.95em;
  --metadata-sidebar-label-font-size: 0.95em;
  --modal-background: rgb(47, 52, 55);
  --modal-border-color: #535353;
  --modal-height: calc(100vh - 100px);
  --modal-max-height: 715px;
  --modal-max-width: calc(100vw - 100px);
  --nav-collapse-icon-color: rgba(255, 255, 255, 0.55);
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.55);
  --nav-heading-color: rgba(255, 255, 255, 0.9);
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.55);
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.7);
  --nav-heading-color-hover: rgba(255, 255, 255, 0.9);
  --nav-indentation-guide-color: transparent;
  --nav-item-background-active: rgba(255, 255, 255, 0.04);
  --nav-item-background-hover: rgba(255, 255, 255, 0.04);
  --nav-item-background-selected: rgba(34, 130, 226, 0.15);
  --nav-item-color: rgba(255, 255, 255, 0.7);
  --nav-item-color-active: rgba(255, 255, 255, 0.9);
  --nav-item-color-highlighted: rgba(255, 255, 255, 0.45);
  --nav-item-color-hover: rgba(255, 255, 255, 0.9);
  --nav-item-color-selected: rgba(255, 255, 255, 0.9);
  --nav-item-radius: 3px;
  --nav-item-size: 0.95em;
  --nav-tag-color: rgba(255, 255, 255, 0.55);
  --nav-tag-color-active: rgba(255, 255, 255, 0.7);
  --nav-tag-color-hover: rgba(255, 255, 255, 0.7);
  --nav-tag-radius: 3px;
  --number-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='9' x2='20' y2='9'%3E%3C/line%3E%3Cline x1='4' y1='15' x2='20' y2='15'%3E%3C/line%3E%3Cline x1='10' y1='3' x2='8' y2='21'%3E%3C/line%3E%3Cline x1='16' y1='3' x2='14' y2='21'%3E%3C/line%3E%3C/svg%3E");
  --opacity-translucency: 0.7;
  --pdf-background: rgb(47, 52, 55);
  --pdf-page-background: rgb(47, 52, 55);
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --pdf-sidebar-background: rgb(47, 52, 55);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --pill-border-color: rgba(255, 255, 255, 0.14);
  --pill-border-color-hover: #363636;
  --pill-color: rgba(255, 255, 255, 0.7);
  --pill-color-hover: rgba(255, 255, 255, 0.9);
  --pill-color-remove: rgba(255, 255, 255, 0.55);
  --pill-color-remove-hover: rgba(255, 255, 255, 0.45);
  --prompt-background: rgb(47, 52, 55);
  --prompt-border-color: #535353;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: rgb(54, 60, 63);
  --ribbon-background-collapsed: rgb(47, 52, 55);
  --sat: 8%;
  --search-clear-button-color: rgba(255, 255, 255, 0.7);
  --search-icon-color: rgba(255, 255, 255, 0.7);
  --search-result-background: rgb(47, 52, 55);
  --setting-group-heading-color: rgba(255, 255, 255, 0.9);
  --setting-group-heading-size: 0.97em;
  --setting-items-background: rgb(61, 68, 72);
  --setting-items-border-color: rgba(255, 255, 255, 0.14);
  --slider-thumb-border-color: #363636;
  --slider-track-background: rgba(255, 255, 255, 0.14);
  --status-bar-background: rgb(54, 60, 63);
  --status-bar-border-color: rgba(255, 255, 255, 0.14);
  --status-bar-font-size: 0.9em;
  --status-bar-text-color: rgba(255, 255, 255, 0.7);
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E");
  --suggestion-background: rgb(47, 52, 55);
  --sync-avatar-color-1: rgb(255, 115, 105);
  --sync-avatar-color-2: rgb(255, 163, 68);
  --sync-avatar-color-3: rgb(255, 220, 73);
  --sync-avatar-color-4: rgb(77, 171, 154);
  --sync-avatar-color-5: rgb(51, 126, 169);
  --sync-avatar-color-6: rgb(82, 156, 202);
  --sync-avatar-color-7: rgb(154, 109, 215);
  --sync-avatar-color-8: rgb(226, 85, 161);
  --tab-background-active: transparent;
  --tab-container-background: rgb(54, 60, 63);
  --tab-curve: 0px;
  --tab-divider-color: #363636;
  --tab-font-size: 0.95em;
  --tab-outline-color: transparent;
  --tab-radius: 3px;
  --tab-stacked-font-size: 0.95em;
  --tab-switcher-background: rgb(54, 60, 63);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(54, 60, 63), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(34, 130, 226);
  --tab-text-color: rgba(255, 255, 255, 0.55);
  --tab-text-color-active: rgba(255, 255, 255, 0.7);
  --tab-text-color-focused: rgba(255, 255, 255, 0.7);
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.7);
  --tab-text-color-focused-active-current: rgba(255, 255, 255, 0.9);
  --tab-text-color-focused-highlighted: rgba(255, 255, 255, 0.45);
  --table-add-button-border-color: rgba(255, 255, 255, 0.14);
  --table-border-color: rgba(255, 255, 255, 0.14);
  --table-drag-handle-background-active: rgb(46, 170, 220);
  --table-drag-handle-color: rgba(255, 255, 255, 0.55);
  --table-drag-handle-color-active: rgba(255, 255, 255, 0.9);
  --table-header-background: rgba(69, 75, 78, 0.5);
  --table-header-background-hover: rgba(69, 75, 78, 0.5);
  --table-header-border-color: rgba(255, 255, 255, 0.14);
  --table-header-color: rgba(255, 255, 255, 0.9);
  --table-selection: rgba(34, 130, 226, 0.1);
  --table-selection-border-color: rgb(46, 170, 220);
  --tag-1-default: rgb(137, 99, 42);
  --tag-10-default: rgb(55, 55, 55);
  --tag-2-default: rgb(43, 89, 63);
  --tag-3-default: rgb(40, 69, 108);
  --tag-4-default: rgb(73, 47, 100);
  --tag-5-default: rgb(105, 49, 76);
  --tag-6-default: rgb(110, 54, 48);
  --tag-7-default: rgb(133, 76, 29);
  --tag-8-default: rgb(90, 90, 90);
  --tag-9-default: rgb(96, 59, 44);
  --tag-background: rgba(34, 130, 226, 0.1);
  --tag-background-hover: rgba(34, 130, 226, 0.2);
  --tag-border-color: rgba(34, 130, 226, 0.15);
  --tag-border-color-hover: rgba(34, 130, 226, 0.15);
  --tag-color: rgba(255, 255, 255, 0.9);
  --tag-color-hover: rgba(255, 255, 255, 0.45);
  --tag-radius: 3px;
  --text-accent: rgba(255, 255, 255, 0.45);
  --text-accent-hover: rgba(255, 255, 255, 0.45);
  --text-error: rgb(255, 115, 105);
  --text-faint: rgba(255, 255, 255, 0.55);
  --text-highlight-bg: rgb(89, 86, 59);
  --text-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='21' y1='6' x2='3' y2='6'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='3' y2='12'%3E%3C/line%3E%3Cline x1='17' y1='18' x2='3' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --text-muted: rgba(255, 255, 255, 0.7);
  --text-normal: rgba(255, 255, 255, 0.9);
  --text-on-accent: rgba(255, 255, 255, 0.9);
  --text-rgb: 255, 255, 255;
  --text-selection: rgba(0, 123, 255, 0.2);
  --text-success: rgb(77, 171, 154);
  --text-warning: rgb(255, 163, 68);
  --titlebar-background: rgb(54, 60, 63);
  --titlebar-background-focused: rgb(61, 68, 72);
  --titlebar-border-color: rgba(255, 255, 255, 0.14);
  --titlebar-text-color: rgba(255, 255, 255, 0.7);
  --titlebar-text-color-focused: rgba(255, 255, 255, 0.9);
  --titlebar-text-weight: 500;
  --vault-profile-color: rgba(255, 255, 255, 0.9);
  --vault-profile-color-hover: rgba(255, 255, 255, 0.9);
  --vault-profile-font-size: 0.95em;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.14);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

body div#quartz-root {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}`,
    typography: `body .page article p > b, b {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .page article p > em, em {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .page article p > i, i {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .page article p > strong, strong {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .text-highlight {
  background-color: rgb(89, 86, 59);
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body del {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: line-through rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body p {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.7) none 0px;
  text-decoration: rgba(255, 255, 255, 0.7);
  text-decoration-color: rgba(255, 255, 255, 0.7);
}`,
    links: `body a.external, footer a {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: underline 1px rgba(255, 255, 255, 0.14);
  text-decoration-color: rgba(255, 255, 255, 0.14);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.7) none 0px;
  text-decoration: underline 1px rgba(255, 255, 255, 0.14);
  text-decoration-color: rgba(255, 255, 255, 0.14);
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgba(255, 255, 255, 0.9);
}

body dt {
  color: rgba(255, 255, 255, 0.9);
}

body ol > li {
  color: rgba(255, 255, 255, 0.9);
}

body ol.overflow {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body ul > li {
  color: rgba(255, 255, 255, 0.9);
}

body ul.overflow {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: rgba(255, 255, 255, 0.55);
}

body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body table {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  width: 195.062px;
}

body td {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

body th {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

body tr {
  background-color: rgba(69, 75, 78, 0.5);
}`,
    code: `body code {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 220, 73);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 220, 73);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 220, 73);
  border-left-color: rgb(255, 220, 73);
  border-right-color: rgb(255, 220, 73);
  border-top-color: rgb(255, 220, 73);
}

body pre > code, pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body figcaption {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body figure {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body img {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body video {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    embeds: `body .file-embed {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
}

body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: line-through rgba(255, 255, 255, 0.7);
  text-decoration-color: rgba(255, 255, 255, 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body .callout > .callout-content {
  padding-left: 36.8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 29, 40, 46;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 89, 65, 65;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 89, 65, 65;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 68, 63, 87;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 89, 65, 65;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 54, 73, 84;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 54, 73, 84;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 89, 74, 58;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 53, 76, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 29, 40, 46;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 54, 73, 84;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 89, 74, 58;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(33, 32, 30);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgb(83, 83, 83);
  border-left-color: rgb(83, 83, 83);
  border-right-color: rgb(83, 83, 83);
  border-top-color: rgb(83, 83, 83);
}

body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(83, 83, 83);
  border-left-color: rgb(83, 83, 83);
  border-right-color: rgb(83, 83, 83);
  border-top-color: rgb(83, 83, 83);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(137, 99, 42);
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body a.internal.tag-link::before {
  color: rgba(255, 255, 255, 0.9);
}

body h1 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2.page-title, h2.page-title a {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h3 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h4 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h5 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h6 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body hr {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
}`,
    scrollbars: `body .callout {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(255, 255, 255, 0.7);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(255, 255, 255, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(255, 255, 255, 0.7);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.7);
}`,
    footer: `body footer {
  background-color: rgb(54, 60, 63);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body footer ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: rgba(255, 255, 255, 0.7);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: rgba(255, 255, 255, 0.7);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: rgba(255, 255, 255, 0.7);
}

body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.7);
}

body .darkmode svg {
  color: rgba(255, 255, 255, 0.7);
  stroke: rgba(255, 255, 255, 0.7);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.55);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.55);
  border-right-color: rgba(255, 255, 255, 0.55);
  border-top-color: rgba(255, 255, 255, 0.55);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.55);
}

body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.55);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .navigation-progress {
  background-color: rgb(54, 60, 63);
}

body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body abbr {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: underline dotted rgba(255, 255, 255, 0.9);
}

body details {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body input[type=text] {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body kbd {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
}

body progress {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body sub {
  color: rgba(255, 255, 255, 0.9);
}

body summary {
  color: rgba(255, 255, 255, 0.9);
}

body sup {
  color: rgba(255, 255, 255, 0.9);
}`,
  },
  light: {
    base: `:root:root {
  --L0: 0%;
  --L1: 100%;
  --L2: 96%;
  --L3: 90%;
  --accent-h: 210;
  --accent-l: 51%;
  --accent-s: 77%;
  --background-accent: rgb(0, 0, 0);
  --background-modifier-active-hover: rgba(34, 130, 226, 0.1);
  --background-modifier-border: rgba(55, 53, 47, 0.14);
  --background-modifier-border-focus: #afafaf;
  --background-modifier-border-hover: #f1f1f0;
  --background-modifier-error: rgb(224, 62, 62);
  --background-modifier-error-hover: rgb(224, 62, 62);
  --background-modifier-error-rgb: 251, 228, 228;
  --background-modifier-form-field: rgb(255, 255, 255);
  --background-modifier-form-field-hover: rgb(255, 255, 255);
  --background-modifier-hover: rgb(0, 0, 0);
  --background-modifier-success: rgb(15, 123, 108);
  --background-modifier-success-rgb: 221, 237, 234;
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(227, 230, 232);
  --background-secondary: rgb(244, 245, 246);
  --background-secondary-alt: rgb(227, 230, 232);
  --banner-size: 220px;
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(227, 230, 232);
  --bases-cards-shadow: 0 0 0 1px rgba(55, 53, 47, 0.14);
  --bases-cards-shadow-hover: 0 0 0 1px #f1f1f0;
  --bases-embed-border-color: rgba(55, 53, 47, 0.14);
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: rgba(55, 53, 47, 0.7);
  --bases-group-heading-property-size: 0.9em;
  --bases-table-border-color: rgba(55, 53, 47, 0.14);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(227, 230, 232);
  --bases-table-cell-background-selected: rgba(34, 130, 226, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #afafaf;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: rgb(227, 230, 232);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-background-hover: rgb(0, 0, 0);
  --bases-table-header-color: rgba(55, 53, 47, 0.7);
  --bases-table-summary-background: rgb(255, 255, 255);
  --bases-table-summary-background-hover: rgb(0, 0, 0);
  --blockquote-border-color: rgba(55, 53, 47, 0.9);
  --blockquote-border-thickness: 3px;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --callout-bug: 251, 228, 228;
  --callout-default: 221, 235, 241;
  --callout-error: 251, 228, 228;
  --callout-example: 234, 228, 242;
  --callout-fail: 251, 228, 228;
  --callout-important: 231, 243, 248;
  --callout-info: 221, 235, 241;
  --callout-question: 250, 235, 221;
  --callout-radius: 3px;
  --callout-success: 221, 237, 234;
  --callout-summary: 231, 243, 248;
  --callout-tip: 231, 243, 248;
  --callout-todo: 221, 235, 241;
  --callout-warning: 250, 235, 221;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgba(55, 53, 47, 0.55);
  --canvas-color-1: 251, 228, 228;
  --canvas-color-2: 250, 235, 221;
  --canvas-color-3: 251, 243, 219;
  --canvas-color-4: 221, 237, 234;
  --canvas-color-5: 231, 243, 248;
  --canvas-color-6: 234, 228, 242;
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: #dfdfdf;
  --caret-color: rgba(55, 53, 47, 0.9);
  --checkbox-border-color: rgba(55, 53, 47, 0.55);
  --checkbox-border-color-hover: rgba(55, 53, 47, 0.7);
  --checkbox-color: rgb(46, 170, 220);
  --checkbox-color-hover: rgba(46, 170, 220, 0.8);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checkbox-radius: 3px;
  --checklist-done-color: rgba(55, 53, 47, 0.7);
  --clickable-icon-radius: 3px;
  --code: #EB5757;
  --code-background: rgb(179, 178, 178);
  --code-border-color: rgba(55, 53, 47, 0.14);
  --code-bracket-background: rgb(0, 0, 0);
  --code-comment: rgba(55, 53, 47, 0.55);
  --code-function: rgb(223, 171, 1);
  --code-important: rgb(217, 115, 13);
  --code-keyword: rgb(173, 26, 114);
  --code-normal: rgba(55, 53, 47, 0.9);
  --code-operator: rgb(224, 62, 62);
  --code-property: rgb(51, 126, 169);
  --code-punctuation: rgba(55, 53, 47, 0.7);
  --code-radius: 3px;
  --code-string: rgb(15, 123, 108);
  --code-tag: rgb(224, 62, 62);
  --code-value: rgb(105, 64, 165);
  --collapse-icon-color: rgba(55, 53, 47, 0.55);
  --collapse-icon-color-collapsed: rgba(55, 53, 47, 0.45);
  --color-accent: rgb(34, 130, 226);
  --color-accent-1: rgb(51, 143, 230);
  --color-accent-2: rgb(68, 159, 233);
  --color-accent-hsl: 210, 77%, 51%;
  --color-base-00: rgb(255, 255, 255);
  --color-base-05: #fbfbfa;
  --color-base-10: #fbfbfa;
  --color-base-100: #37352f;
  --color-base-20: #fbfbfa;
  --color-base-25: #e1e1e1;
  --color-base-30: #dfdfdf;
  --color-base-35: #f1f1f0;
  --color-base-40: #afafaf;
  --color-base-50: #a3a29e;
  --color-base-60: #7b7b7b;
  --color-base-70: #737272;
  --color-blue: rgb(11, 110, 153);
  --color-blue-rgb: 221, 235, 241;
  --color-brown: rgb(100, 71, 58);
  --color-brown-rgb: 233, 229, 227;
  --color-cyan: rgb(51, 126, 169);
  --color-cyan-rgb: 231, 243, 248;
  --color-gray: rgba(55, 53, 47, 0.6);
  --color-gray-rgb: 235, 236, 237;
  --color-green: rgb(15, 123, 108);
  --color-green-rgb: 221, 237, 234;
  --color-orange: rgb(217, 115, 13);
  --color-orange-rgb: 250, 235, 221;
  --color-pink: rgb(173, 26, 114);
  --color-pink-rgb: 244, 223, 235;
  --color-purple: rgb(105, 64, 165);
  --color-purple-rgb: 234, 228, 242;
  --color-red: rgb(224, 62, 62);
  --color-red-rgb: 251, 228, 228;
  --color-yellow: rgb(223, 171, 1);
  --color-yellow-rgb: 251, 243, 219;
  --custom-line-height: 1.5em;
  --divider-color: rgba(55, 53, 47, 0.14);
  --divider-color-hover: rgb(46, 170, 220);
  --divider-width: 0.05em;
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px rgba(55, 53, 47, 0.14), inset 0 0 0 1px rgba(55, 53, 47, 0.14);
  --embed-border-start: 2px solid rgb(46, 170, 220);
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --file-header-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --file-header-font-size: 0.95em;
  --flair-background: #f2f3f5;
  --flair-color: rgba(55, 53, 47, 0.9);
  --font-bold: 500;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-interface: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-monospace: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-monospace-default: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-ui-large: 1.15em;
  --font-ui-medium: 0.97em;
  --font-ui-small: 0.95em;
  --font-ui-smaller: 0.9em;
  --footnote-divider-color: rgba(55, 53, 47, 0.14);
  --footnote-id-color: rgba(55, 53, 47, 0.7);
  --footnote-id-color-no-occurrences: rgba(55, 53, 47, 0.55);
  --footnote-input-background-active: rgb(0, 0, 0);
  --footnote-radius: 3px;
  --graph-line: rgba(55, 53, 47, 0.14);
  --graph-node: rgb(11, 110, 153);
  --graph-node-attachment: rgb(223, 171, 1);
  --graph-node-focused: rgb(46, 170, 220);
  --graph-node-tag: rgb(15, 123, 108);
  --graph-node-unresolved: rgb(51, 126, 169);
  --graph-text: rgba(55, 53, 47, 0.9);
  --h-bg: transparent;
  --h-color: rgba(55, 53, 47, 0.9);
  --h1-bg: transparent;
  --h1-color: rgba(55, 53, 47, 0.9);
  --h1-size: 1.875em;
  --h1-weight: 600;
  --h2-bg: transparent;
  --h2-color: rgba(55, 53, 47, 0.9);
  --h2-size: 1.5em;
  --h2-weight: 600;
  --h3-bg: transparent;
  --h3-color: rgba(55, 53, 47, 0.9);
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-bg: transparent;
  --h4-color: rgba(55, 53, 47, 0.9);
  --h4-weight: 600;
  --h5-bg: transparent;
  --h5-color: rgba(55, 53, 47, 0.9);
  --h5-weight: 600;
  --h6-bg: transparent;
  --h6-color: rgba(55, 53, 47, 0.9);
  --heading-formatting: rgba(55, 53, 47, 0.55);
  --hr-color: rgba(55, 53, 47, 0.14);
  --hue: 203;
  --icon-color: rgba(55, 53, 47, 0.7);
  --icon-color-active: rgba(55, 53, 47, 0.45);
  --icon-color-focused: rgba(55, 53, 47, 0.9);
  --icon-color-hover: rgba(55, 53, 47, 0.7);
  --indentation-guide-color: transparent;
  --inline-title-color: rgba(55, 53, 47, 0.9);
  --inline-title-size: 1.875em;
  --inline-title-weight: 600;
  --input-date-separator: rgba(55, 53, 47, 0.55);
  --input-placeholder-color: rgba(55, 53, 47, 0.55);
  --interactive-accent: rgb(46, 170, 220);
  --interactive-accent-hover: rgba(46, 170, 220, 0.8);
  --interactive-accent-hsl: 210, 77%, 51%;
  --interactive-accent-rgb: 46, 170, 220;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --link-color: rgba(55, 53, 47, 0.45);
  --link-color-hover: rgba(55, 53, 47, 0.7);
  --link-external-color: rgba(55, 53, 47, 0.45);
  --link-external-color-hover: rgba(55, 53, 47, 0.45);
  --link-unresolved-color: rgba(55, 53, 47, 0.45);
  --link-unresolved-decoration-color: rgba(34, 130, 226, 0.3);
  --list-bullet-size: 0.37em;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-indent: 1.5em;
  --list-marker-color: rgba(55, 53, 47, 0.9);
  --list-marker-color-collapsed: rgba(55, 53, 47, 0.45);
  --list-marker-color-hover: rgba(55, 53, 47, 0.9);
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-spacing: 0.3em;
  --menu-background: rgb(244, 245, 246);
  --menu-border-color: #f1f1f0;
  --metadata-border-color: rgba(55, 53, 47, 0.14);
  --metadata-divider-color: rgba(55, 53, 47, 0.14);
  --metadata-input-background-active: rgb(0, 0, 0);
  --metadata-input-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-input-text-color: rgba(55, 53, 47, 0.9);
  --metadata-label-background-active: rgb(0, 0, 0);
  --metadata-label-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-label-text-color: rgba(55, 53, 47, 0.7);
  --metadata-label-text-color-hover: rgba(55, 53, 47, 0.7);
  --metadata-property-background-active: rgb(0, 0, 0);
  --metadata-property-box-shadow-focus: 0 0 0 2px #afafaf;
  --metadata-property-box-shadow-hover: 0 0 0 1px #f1f1f0;
  --metadata-sidebar-input-font-size: 0.95em;
  --metadata-sidebar-label-font-size: 0.95em;
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: #afafaf;
  --modal-height: calc(100vh - 100px);
  --modal-max-height: 715px;
  --modal-max-width: calc(100vw - 100px);
  --nav-collapse-icon-color: rgba(55, 53, 47, 0.55);
  --nav-collapse-icon-color-collapsed: rgba(55, 53, 47, 0.55);
  --nav-heading-color: rgba(55, 53, 47, 0.9);
  --nav-heading-color-collapsed: rgba(55, 53, 47, 0.55);
  --nav-heading-color-collapsed-hover: rgba(55, 53, 47, 0.7);
  --nav-heading-color-hover: rgba(55, 53, 47, 0.9);
  --nav-indentation-guide-color: transparent;
  --nav-item-background-active: rgb(0, 0, 0);
  --nav-item-background-hover: rgb(0, 0, 0);
  --nav-item-background-selected: rgba(34, 130, 226, 0.15);
  --nav-item-color: rgba(55, 53, 47, 0.7);
  --nav-item-color-active: rgba(55, 53, 47, 0.9);
  --nav-item-color-highlighted: rgba(55, 53, 47, 0.45);
  --nav-item-color-hover: rgba(55, 53, 47, 0.9);
  --nav-item-color-selected: rgba(55, 53, 47, 0.9);
  --nav-item-radius: 3px;
  --nav-item-size: 0.95em;
  --nav-tag-color: rgba(55, 53, 47, 0.55);
  --nav-tag-color-active: rgba(55, 53, 47, 0.7);
  --nav-tag-color-hover: rgba(55, 53, 47, 0.7);
  --nav-tag-radius: 3px;
  --number-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='9' x2='20' y2='9'%3E%3C/line%3E%3Cline x1='4' y1='15' x2='20' y2='15'%3E%3C/line%3E%3Cline x1='10' y1='3' x2='8' y2='21'%3E%3C/line%3E%3Cline x1='16' y1='3' x2='14' y2='21'%3E%3C/line%3E%3C/svg%3E");
  --opacity-translucency: 0.7;
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: rgba(55, 53, 47, 0.14);
  --pill-border-color-hover: #f1f1f0;
  --pill-color: rgba(55, 53, 47, 0.7);
  --pill-color-hover: rgba(55, 53, 47, 0.9);
  --pill-color-remove: rgba(55, 53, 47, 0.55);
  --pill-color-remove-hover: rgba(55, 53, 47, 0.45);
  --prompt-background: rgb(255, 255, 255);
  --prompt-border-color: #afafaf;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(244, 245, 246);
  --ribbon-background-collapsed: rgb(255, 255, 255);
  --sat: 8%;
  --search-clear-button-color: rgba(55, 53, 47, 0.7);
  --search-icon-color: rgba(55, 53, 47, 0.7);
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: rgba(55, 53, 47, 0.9);
  --setting-group-heading-size: 0.97em;
  --setting-items-background: rgb(227, 230, 232);
  --setting-items-border-color: rgba(55, 53, 47, 0.14);
  --slider-thumb-border-color: #f1f1f0;
  --slider-track-background: rgba(55, 53, 47, 0.14);
  --status-bar-background: rgb(244, 245, 246);
  --status-bar-border-color: rgba(55, 53, 47, 0.14);
  --status-bar-font-size: 0.9em;
  --status-bar-text-color: rgba(55, 53, 47, 0.7);
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E");
  --suggestion-background: rgb(255, 255, 255);
  --sync-avatar-color-1: rgb(224, 62, 62);
  --sync-avatar-color-2: rgb(217, 115, 13);
  --sync-avatar-color-3: rgb(223, 171, 1);
  --sync-avatar-color-4: rgb(15, 123, 108);
  --sync-avatar-color-5: rgb(51, 126, 169);
  --sync-avatar-color-6: rgb(11, 110, 153);
  --sync-avatar-color-7: rgb(105, 64, 165);
  --sync-avatar-color-8: rgb(173, 26, 114);
  --tab-background-active: transparent;
  --tab-container-background: rgb(244, 245, 246);
  --tab-curve: 0px;
  --tab-divider-color: #f1f1f0;
  --tab-font-size: 0.95em;
  --tab-outline-color: transparent;
  --tab-radius: 3px;
  --tab-stacked-font-size: 0.95em;
  --tab-switcher-background: rgb(244, 245, 246);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(244, 245, 246), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(34, 130, 226);
  --tab-text-color: rgba(55, 53, 47, 0.55);
  --tab-text-color-active: rgba(55, 53, 47, 0.7);
  --tab-text-color-focused: rgba(55, 53, 47, 0.7);
  --tab-text-color-focused-active: rgba(55, 53, 47, 0.7);
  --tab-text-color-focused-active-current: rgba(55, 53, 47, 0.9);
  --tab-text-color-focused-highlighted: rgba(55, 53, 47, 0.45);
  --table-add-button-border-color: rgba(55, 53, 47, 0.14);
  --table-border-color: rgba(55, 53, 47, 0.14);
  --table-drag-handle-background-active: rgb(46, 170, 220);
  --table-drag-handle-color: rgba(55, 53, 47, 0.55);
  --table-drag-handle-color-active: rgba(55, 53, 47, 0.9);
  --table-header-background: rgba(235, 236, 237, 0.5);
  --table-header-background-hover: rgba(235, 236, 237, 0.5);
  --table-header-border-color: rgba(55, 53, 47, 0.14);
  --table-header-color: rgba(55, 53, 47, 0.9);
  --table-selection: rgba(34, 130, 226, 0.1);
  --table-selection-border-color: rgb(46, 170, 220);
  --tag-1-default: rgb(253, 236, 200);
  --tag-10-default: rgb(227, 226, 224, 0.5);
  --tag-2-default: rgb(219, 237, 219);
  --tag-3-default: rgb(211, 229, 239);
  --tag-4-default: rgb(232, 222, 238);
  --tag-5-default: rgb(245, 224, 233);
  --tag-6-default: rgb(255, 226, 221);
  --tag-7-default: rgb(250, 222, 201);
  --tag-8-default: rgb(238, 224, 218);
  --tag-9-default: rgb(227, 226, 224);
  --tag-background: rgba(34, 130, 226, 0.1);
  --tag-background-hover: rgba(34, 130, 226, 0.2);
  --tag-border-color: rgba(34, 130, 226, 0.15);
  --tag-border-color-hover: rgba(34, 130, 226, 0.15);
  --tag-color: rgba(55, 53, 47, 0.9);
  --tag-color-hover: rgba(55, 53, 47, 0.45);
  --tag-radius: 3px;
  --text-accent: rgba(55, 53, 47, 0.45);
  --text-accent-hover: rgba(55, 53, 47, 0.45);
  --text-error: rgb(224, 62, 62);
  --text-faint: rgba(55, 53, 47, 0.55);
  --text-highlight-bg: rgb(251, 243, 219);
  --text-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='21' y1='6' x2='3' y2='6'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='3' y2='12'%3E%3C/line%3E%3Cline x1='17' y1='18' x2='3' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --text-muted: rgba(55, 53, 47, 0.7);
  --text-normal: rgba(55, 53, 47, 0.9);
  --text-on-accent: rgba(55, 53, 47, 0.9);
  --text-rgb: 55, 53, 47;
  --text-selection: rgba(0, 122, 255, 0.15);
  --text-success: rgb(15, 123, 108);
  --text-warning: rgb(217, 115, 13);
  --titlebar-background: rgb(244, 245, 246);
  --titlebar-background-focused: rgb(227, 230, 232);
  --titlebar-border-color: rgba(55, 53, 47, 0.14);
  --titlebar-text-color: rgba(55, 53, 47, 0.7);
  --titlebar-text-color-focused: rgba(55, 53, 47, 0.9);
  --titlebar-text-weight: 500;
  --vault-profile-color: rgba(55, 53, 47, 0.9);
  --vault-profile-color-hover: rgba(55, 53, 47, 0.9);
  --vault-profile-font-size: 0.95em;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgba(55, 53, 47, 0.9);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(55, 53, 47, 0.14);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

body div#quartz-root {
  color: rgba(55, 53, 47, 0.9);
}`,
    typography: `body .page article p > b, b {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .page article p > em, em {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .page article p > i, i {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .page article p > strong, strong {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .text-highlight {
  background-color: rgb(251, 243, 219);
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body del {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: line-through rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body p {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.7) none 0px;
  text-decoration: rgba(55, 53, 47, 0.7);
  text-decoration-color: rgba(55, 53, 47, 0.7);
}`,
    links: `body a.external, footer a {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: underline rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: underline 1px rgba(55, 53, 47, 0.14);
  text-decoration-color: rgba(55, 53, 47, 0.14);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.7) none 0px;
  text-decoration: underline 1px rgba(55, 53, 47, 0.14);
  text-decoration-color: rgba(55, 53, 47, 0.14);
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgba(55, 53, 47, 0.9);
}

body dt {
  color: rgba(55, 53, 47, 0.9);
}

body ol > li {
  color: rgba(55, 53, 47, 0.9);
}

body ol.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body ul > li {
  color: rgba(55, 53, 47, 0.9);
}

body ul.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(55, 53, 47, 0.55);
  text-decoration: rgba(55, 53, 47, 0.55);
}

body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body table {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  width: 195.062px;
}

body td {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

body th {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

body tr {
  background-color: rgba(235, 236, 237, 0.5);
}`,
    code: `body code {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

body pre > code > [data-line] {
  border-left-color: rgb(223, 171, 1);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(223, 171, 1);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(223, 171, 1);
  border-left-color: rgb(223, 171, 1);
  border-right-color: rgb(223, 171, 1);
  border-top-color: rgb(223, 171, 1);
}

body pre > code, pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body figcaption {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body figure {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body img {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body video {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    embeds: `body .file-embed {
  background-color: rgb(227, 230, 232);
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
}

body .footnotes {
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

body .transclude {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body .transclude-inner {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(55, 53, 47, 0.7);
  text-decoration: line-through rgba(55, 53, 47, 0.7);
  text-decoration-color: rgba(55, 53, 47, 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='*'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='-'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='/'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='>'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='?'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='I'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='S'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='b'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='c'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='d'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='f'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='i'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='k'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='l'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='p'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='u'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body li.task-list-item[data-task='w'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body .callout > .callout-content {
  padding-left: 36.8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 231, 243, 248;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 251, 228, 228;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 251, 228, 228;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 234, 228, 242;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 251, 228, 228;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 221, 235, 241;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 221, 235, 241;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 250, 235, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 221, 237, 234;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 231, 243, 248;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 221, 235, 241;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 250, 235, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body .search > .search-container > .search-space > * {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.04);
  color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(253, 236, 200);
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body a.internal.tag-link::before {
  color: rgba(55, 53, 47, 0.9);
}

body h1 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2.page-title, h2.page-title a {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h3 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h4 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h5 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body h6 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body hr {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
}`,
    scrollbars: `body .callout {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(55, 53, 47, 0.7);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(55, 53, 47, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(55, 53, 47, 0.7);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.7);
}`,
    footer: `body footer {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body footer ul li a {
  color: rgba(55, 53, 47, 0.7);
  text-decoration: rgba(55, 53, 47, 0.7);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.7);
  text-decoration: rgba(55, 53, 47, 0.7);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body li.section-li > .section .meta {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.7);
  text-decoration: rgba(55, 53, 47, 0.7);
}

body ul.section-ul {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.7);
}

body .darkmode svg {
  color: rgba(55, 53, 47, 0.7);
  stroke: rgba(55, 53, 47, 0.7);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(55, 53, 47, 0.55);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.55);
  border-right-color: rgba(55, 53, 47, 0.55);
  border-top-color: rgba(55, 53, 47, 0.55);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.55);
}

body .breadcrumb-element p {
  color: rgba(55, 53, 47, 0.55);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

body .metadata {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .metadata-properties {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .navigation-progress {
  background-color: rgb(244, 245, 246);
}

body .page-header h2.page-title {
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body abbr {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: underline dotted rgba(55, 53, 47, 0.9);
}

body details {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body input[type=text] {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body kbd {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
}

body progress {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body sub {
  color: rgba(55, 53, 47, 0.9);
}

body summary {
  color: rgba(55, 53, 47, 0.9);
}

body sup {
  color: rgba(55, 53, 47, 0.9);
}`,
  },
};
