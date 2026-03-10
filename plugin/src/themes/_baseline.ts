import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "_baseline",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 258;
  --accent-l: 66%;
  --accent-s: 88%;
  --anim-duration-fast: 140ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-none: 0;
  --anim-duration-slow: 560ms;
  --anim-duration-superfast: 70ms;
  --anim-motion-delay: cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-motion-jumpy: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --anim-motion-smooth: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-motion-swing: cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(10, 10, 10, 0.4);
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-message: rgba(0, 0, 0, 0.9);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1e1e1e;
  --background-primary-alt: #242424;
  --background-secondary: #262626;
  --background-secondary-alt: #363636;
  --bases-cards-background: #1e1e1e;
  --bases-cards-border-width: 1px;
  --bases-cards-container-background: transparent;
  --bases-cards-corner-shape: round;
  --bases-cards-cover-background: #242424;
  --bases-cards-font-size: 0.875em;
  --bases-cards-line-height: 24px;
  --bases-cards-radius: 8px;
  --bases-cards-scale: 1;
  --bases-cards-shadow: 0 0 0 1px #363636;
  --bases-cards-shadow-hover: 0 0 0 1px #3f3f3f;
  --bases-embed-border-color: #363636;
  --bases-embed-border-radius: 4px;
  --bases-embed-border-width: 0px;
  --bases-filter-menu-width: 520px;
  --bases-group-heading-property-color: #b3b3b3;
  --bases-group-heading-property-display: block;
  --bases-group-heading-property-size: 12px;
  --bases-group-heading-property-weight: 400;
  --bases-group-heading-value-size: 0.875em;
  --bases-group-heading-value-weight: 600;
  --bases-header-border-width: 0 0 1px 0;
  --bases-header-height: 40px;
  --bases-header-padding-end: 2px;
  --bases-header-padding-start: 2px;
  --bases-table-border-color: #363636;
  --bases-table-cell-background-active: #1e1e1e;
  --bases-table-cell-background-disabled: #242424;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-radius-active: 2px;
  --bases-table-cell-radius-focus: 2px;
  --bases-table-cell-shadow-active: 0 0 0 2px #555555;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-column-border-width: 1px;
  --bases-table-column-max-width: 300;
  --bases-table-column-min-width: 40;
  --bases-table-container-border-radius: 4px;
  --bases-table-container-border-width: 1px;
  --bases-table-font-size: 0.875em;
  --bases-table-group-background: #242424;
  --bases-table-group-gap: 10px;
  --bases-table-header-background: #1e1e1e;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.067);
  --bases-table-header-color: #b3b3b3;
  --bases-table-header-icon-display: flex;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 24px, black 24px);
  --bases-table-header-weight: 400;
  --bases-table-row-background-hover: transparent;
  --bases-table-row-border-width: 1px;
  --bases-table-row-height: 30px;
  --bases-table-summary-background: #1e1e1e;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.067);
  --bases-toolbar-badge-display: none;
  --bases-toolbar-label-display: block;
  --blockquote-background-color: transparent;
  --blockquote-border-color: rgb(138, 92, 245);
  --blockquote-border-thickness: 2px;
  --blockquote-font-style: normal;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-brightness: 1.15;
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-opacity-m: 90%;
  --blur-opacity-s: 65%;
  --blur-radius-l: 16px;
  --blur-radius-m: 10px;
  --blur-radius-s: 6px;
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --blur-saturation: 1.5;
  --bodyFont: var(--font-text);
  --bold-modifier: 200;
  --bold-weight: 600;
  --border-width: 1px;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-border-opacity: 0.25;
  --callout-border-width: 0px;
  --callout-bug: 251, 70, 76;
  --callout-content-background: transparent;
  --callout-content-padding: 0;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-quote: 158, 158, 158;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-padding: 0;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #1e1e1e;
  --canvas-card-label-color: #666666;
  --canvas-color: 126, 126, 126;
  --canvas-color-1: 251, 70, 76;
  --canvas-color-2: 233, 151, 63;
  --canvas-color-3: 224, 222, 113;
  --canvas-color-4: 68, 207, 110;
  --canvas-color-5: 83, 223, 221;
  --canvas-color-6: 168, 130, 255;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-margin-inline-start: 0.85em;
  --checkbox-marker-color: #1e1e1e;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --checklist-done-decoration: line-through;
  --clickable-icon-radius: 4px;
  --code-background: #242424;
  --code-border-color: #363636;
  --code-border-width: 0px;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --code-white-space: pre-wrap;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-00: #1e1e1e;
  --color-base-05: #212121;
  --color-base-10: #242424;
  --color-base-100: #dadada;
  --color-base-20: #262626;
  --color-base-25: #2a2a2a;
  --color-base-30: #363636;
  --color-base-35: #3f3f3f;
  --color-base-40: #555555;
  --color-base-50: #666666;
  --color-base-60: #999999;
  --color-base-70: #b3b3b3;
  --color-blue: #027aff;
  --color-blue-rgb: 2, 122, 255;
  --color-cyan: #53dfdd;
  --color-cyan-rgb: 83, 223, 221;
  --color-green: #44cf6e;
  --color-green-rgb: 68, 207, 110;
  --color-orange: #e9973f;
  --color-orange-rgb: 233, 151, 63;
  --color-pink: #fa99cd;
  --color-pink-rgb: 250, 153, 205;
  --color-purple: #a882ff;
  --color-purple-rgb: 168, 130, 255;
  --color-red: #fb464c;
  --color-red-rgb: 251, 70, 76;
  --color-yellow: #e0de71;
  --color-yellow-rgb: 224, 222, 113;
  --corner-shape: round;
  --cursor: default;
  --cursor-link: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dialog-max-height: 85vh;
  --dialog-max-width: 80vw;
  --dialog-width: 560px;
  --direction: 1;
  --divider-color: #363636;
  --divider-color-hover: rgb(138, 92, 245);
  --divider-vertical-height: 100%;
  --divider-width: 1px;
  --divider-width-hover: 3px;
  --drag-ghost-background: rgba(0, 0, 0, 0.85);
  --drag-ghost-text-color: #fff;
  --dropdown-background: #363636;
  --dropdown-background-blend-mode: hard-light;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-icon-inset: 0.5em;
  --dropdown-icon-width: 1em;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --dropdown-padding-end: 1.9em;
  --dropdown-padding-start: 0.8em;
  --embed-block-shadow-hover: 0 0 0 1px #363636, inset 0 0 0 1px #363636;
  --embed-border-bottom: none;
  --embed-border-end: none;
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --embed-border-top: none;
  --embed-canvas-max-height: 400px;
  --embed-max-height: 4000px;
  --embed-padding: 0 0 0 24px;
  --file-folding-offset: 24px;
  --file-header-background: #1e1e1e;
  --file-header-background-focused: #1e1e1e;
  --file-header-border: 1px solid transparent;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 13px;
  --file-header-font-weight: 400;
  --file-header-justify: center;
  --file-line-width: 700px;
  --file-margins: 32px 32px;
  --file-margins-x: 32px;
  --file-margins-y: 32px;
  --flair-background: #363636;
  --flair-color: #dadada;
  --focus-ring-color: #0df;
  --focus-ring-outline: 2px solid light-dark(#0060df, #0df);
  --font-black: 900;
  --font-bold: 700;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-extrabold: 800;
  --font-extralight: 200;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-override: '??';
  --font-interface-theme: '??';
  --font-light: 300;
  --font-medium: 500;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-default: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-override: '??';
  --font-monospace-theme: '??';
  --font-normal: 400;
  --font-print: '??', '??', '??', 'Arial';
  --font-print-override: '??';
  --font-semibold: 600;
  --font-small: 0.933em;
  --font-smaller: 0.875em;
  --font-smallest: 0.8em;
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-override: '??';
  --font-text-size: 16px;
  --font-text-theme: '??';
  --font-thin: 100;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: 400;
  --footnote-divider-color: #363636;
  --footnote-divider-color-active: transparent;
  --footnote-divider-width: 1px;
  --footnote-gap: 4px;
  --footnote-id-color: #b3b3b3;
  --footnote-id-color-no-occurrences: #666666;
  --footnote-id-delimiter: ".";
  --footnote-input-background: transparent;
  --footnote-input-background-active: rgba(255, 255, 255, 0.067);
  --footnote-line-height: 1.5;
  --footnote-padding-block: 6px;
  --footnote-padding-inline: 6px;
  --footnote-radius: 4px;
  --footnote-size: 0.875em;
  --frame-left-space: 0px;
  --frame-right-space: 126px;
  --graph-controls-width: 240px;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: rgb(166, 139, 249);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --gray: var(--text-muted);
  --h1-letter-spacing: -0.015em;
  --h1-line-height: 1.2;
  --h1-size: 1.618em;
  --h1-style: normal;
  --h1-variant: normal;
  --h1-weight: 700;
  --h2-letter-spacing: -0.011em;
  --h2-line-height: 1.2;
  --h2-size: 1.462em;
  --h2-style: normal;
  --h2-variant: normal;
  --h2-weight: 680;
  --h3-letter-spacing: -0.008em;
  --h3-line-height: 1.3;
  --h3-size: 1.318em;
  --h3-style: normal;
  --h3-variant: normal;
  --h3-weight: 660;
  --h4-letter-spacing: -0.005em;
  --h4-line-height: 1.4;
  --h4-size: 1.188em;
  --h4-style: normal;
  --h4-variant: normal;
  --h4-weight: 640;
  --h5-letter-spacing: -0.002em;
  --h5-line-height: 1.5;
  --h5-size: 1.076em;
  --h5-style: normal;
  --h5-variant: normal;
  --h5-weight: 620;
  --h6-letter-spacing: 0em;
  --h6-line-height: 1.5;
  --h6-size: 1em;
  --h6-style: normal;
  --h6-variant: normal;
  --h6-weight: 600;
  --header-height: 40px;
  --headerFont: var(--font-text);
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --highlight: var(--text-highlight-bg);
  --highlight-mix-blend-mode: lighten;
  --hr-color: #363636;
  --hr-thickness: 2px;
  --icon-color: #b3b3b3;
  --icon-color-active: rgb(166, 139, 249);
  --icon-color-focused: #dadada;
  --icon-color-hover: #b3b3b3;
  --icon-l: 18px;
  --icon-l-stroke-width: 1.75px;
  --icon-m: 18px;
  --icon-m-stroke-width: 1.75px;
  --icon-opacity: 0.85;
  --icon-opacity-active: 1;
  --icon-opacity-hover: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: 18px;
  --icon-stroke: 1.75px;
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2px;
  --indent-size: 4;
  --indent-unit: 0.5625em;
  --indentation-guide-color: rgba(255, 255, 255, 0.12);
  --indentation-guide-color-active: rgba(255, 255, 255, 0.3);
  --indentation-guide-editing-indent: 0.85em;
  --indentation-guide-reading-indent: -0.85em;
  --indentation-guide-source-indent: 0.25em;
  --indentation-guide-width: 1px;
  --indentation-guide-width-active: 1px;
  --inline-title-line-height: 1.2;
  --inline-title-margin-bottom: 0.5em;
  --inline-title-size: 1.618em;
  --inline-title-style: normal;
  --inline-title-variant: normal;
  --inline-title-weight: 700;
  --input-border-width: 1px;
  --input-border-width-focus: 2px;
  --input-corner-shape: round;
  --input-date-separator: #666666;
  --input-font-weight: 400;
  --input-height: 30px;
  --input-icon-inset: 4px;
  --input-padding: 4px 8px;
  --input-placeholder-color: #666666;
  --input-radius: 5px;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16), 0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --inset-end: right;
  --inset-start: left;
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --keyboard-height: 0px;
  --layer-cover: 5;
  --layer-dragged-item: 80;
  --layer-menu: 65;
  --layer-modal: 50;
  --layer-notice: 60;
  --layer-popover: 30;
  --layer-sidedock: 10;
  --layer-slides: 45;
  --layer-status-bar: 15;
  --layer-tooltip: 70;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.5;
  --line-height-tight: 1.3;
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-decoration: underline;
  --link-decoration-hover: underline;
  --link-decoration-thickness: auto;
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-external-decoration: underline;
  --link-external-decoration-hover: underline;
  --link-external-filter: none;
  --link-unresolved-color: rgb(166, 139, 249);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-unresolved-decoration-style: solid;
  --link-unresolved-filter: none;
  --link-unresolved-opacity: 0.7;
  --link-weight: 400;
  --list-bullet-border: none;
  --list-bullet-end-padding: 1.3rem;
  --list-bullet-radius: 50%;
  --list-bullet-size: 0.3em;
  --list-bullet-transform: none;
  --list-indent: 2.25em;
  --list-indent-editing: 0.75em;
  --list-indent-source: 0;
  --list-marker-color: #666666;
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --list-marker-color-hover: #b3b3b3;
  --list-numbered-style: decimal;
  --list-spacing: 0.075em;
  --loading-icon-delay: 400ms;
  --menu-backdrop-filter: none;
  --menu-background: #262626;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-scroll-mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 48px);
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-background: transparent;
  --metadata-border-color: #363636;
  --metadata-border-radius: 0;
  --metadata-border-width: 0;
  --metadata-display-editing: block;
  --metadata-display-reading: block;
  --metadata-divider-color: #363636;
  --metadata-divider-color-focus: transparent;
  --metadata-divider-color-hover: transparent;
  --metadata-divider-width: 0;
  --metadata-gap: 3px;
  --metadata-input-background: transparent;
  --metadata-input-background-active: rgba(255, 255, 255, 0.067);
  --metadata-input-background-hover: transparent;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.875em;
  --metadata-input-height: 28px;
  --metadata-input-longtext-lines: 3;
  --metadata-input-padding: 4px 8px;
  --metadata-input-text-color: #dadada;
  --metadata-label-background: transparent;
  --metadata-label-background-active: rgba(255, 255, 255, 0.067);
  --metadata-label-background-hover: transparent;
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.875em;
  --metadata-label-text-color: #b3b3b3;
  --metadata-label-text-color-hover: #b3b3b3;
  --metadata-label-width: 9em;
  --metadata-max-width: none;
  --metadata-padding: 8px 0;
  --metadata-property-background: transparent;
  --metadata-property-background-active: rgba(255, 255, 255, 0.067);
  --metadata-property-background-hover: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555555;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3f3f3f;
  --metadata-property-corner-shape: round;
  --metadata-property-corner-shape-focus: round;
  --metadata-property-corner-shape-hover: round;
  --metadata-property-padding: 0;
  --metadata-property-radius: 6px;
  --metadata-property-radius-focus: 6px;
  --metadata-property-radius-hover: 6px;
  --metadata-sidebar-input-font-size: 13px;
  --metadata-sidebar-label-font-size: 13px;
  --modal-background: #1e1e1e;
  --modal-border-color: #555555;
  --modal-border-width: 1px;
  --modal-community-sidebar-width: 280px;
  --modal-header-height: auto;
  --modal-height: 85vh;
  --modal-max-height: 1000px;
  --modal-max-width: 1100px;
  --modal-max-width-narrow: 800px;
  --modal-radius: 12px;
  --modal-shadow: none;
  --modal-width: 90vw;
  --mono-rgb-0: 0, 0, 0;
  --mono-rgb-100: 255, 255, 255;
  --nav-collapse-icon-color: #666666;
  --nav-collapse-icon-color-collapsed: #666666;
  --nav-heading-color: #dadada;
  --nav-heading-color-collapsed: #666666;
  --nav-heading-color-collapsed-hover: #b3b3b3;
  --nav-heading-color-hover: #dadada;
  --nav-heading-weight: 500;
  --nav-heading-weight-hover: 500;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.12);
  --nav-indentation-guide-width: 1px;
  --nav-item-background-active: rgba(255, 255, 255, 0.067);
  --nav-item-background-hover: rgba(255, 255, 255, 0.067);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-children-margin-start: 12px;
  --nav-item-children-padding-start: 4px;
  --nav-item-color: #b3b3b3;
  --nav-item-color-active: #dadada;
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --nav-item-color-hover: #dadada;
  --nav-item-color-selected: #dadada;
  --nav-item-margin-bottom: 2px;
  --nav-item-padding: 4px 8px 4px 24px;
  --nav-item-parent-padding: 4px 8px 4px 24px;
  --nav-item-radius: 4px;
  --nav-item-size: 13px;
  --nav-item-white-space: pre;
  --nav-tag-background: transparent;
  --nav-tag-color: #666666;
  --nav-tag-color-active: #b3b3b3;
  --nav-tag-color-hover: #b3b3b3;
  --nav-tag-radius: 4px;
  --nav-tag-weight: 600;
  --p-spacing: 1rem;
  --p-spacing-empty: 0rem;
  --page-border: 9px solid transparent;
  --page-margin: 1px auto -8px;
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --pdfViewer-padding-bottom: 0;
  --pill-background: transparent;
  --pill-background-hover: transparent;
  --pill-border-color: #363636;
  --pill-border-color-hover: #3f3f3f;
  --pill-border-width: 1px;
  --pill-color: #b3b3b3;
  --pill-color-hover: #dadada;
  --pill-color-remove: #666666;
  --pill-color-remove-hover: rgb(166, 139, 249);
  --pill-decoration: none;
  --pill-decoration-hover: none;
  --pill-focus-left-adjust: -4px;
  --pill-focus-width: calc(100% + 6px);
  --pill-padding-x: 0.65em;
  --pill-padding-y: 0.25em;
  --pill-radius: 2em;
  --popover-font-size: 16px;
  --popover-height: 400px;
  --popover-max-height: 95vh;
  --popover-pdf-height: 400px;
  --popover-pdf-width: 450px;
  --popover-width: 450px;
  --preferred-text-scale: 1;
  --prompt-backdrop-filter: none;
  --prompt-background: #1e1e1e;
  --prompt-border-color: #555555;
  --prompt-border-width: 1px;
  --prompt-input-height: 40px;
  --prompt-max-height: 70vh;
  --prompt-max-width: 80vw;
  --prompt-width: 700px;
  --radius-l: 12px;
  --radius-m: 8px;
  --radius-s: 4px;
  --radius-xl: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --raised-mask: linear-gradient(white, white) padding-box, linear-gradient(white, white) border-box;
  --raised-mask-background: transparent;
  --raised-mask-border-width: 0;
  --raised-mask-composite: exclude, add;
  --raised-mask-display: block;
  --ribbon-background: #262626;
  --ribbon-background-collapsed: #1e1e1e;
  --ribbon-padding: 8px 4px 12px;
  --ribbon-width: 44px;
  --safe-area-inset-bottom: 0px;
  --safe-area-inset-left: 0px;
  --safe-area-inset-right: 0px;
  --safe-area-inset-top: 0px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-border-width: 3px 3px 3px 2px;
  --scrollbar-height: 12px;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --scrollbar-width: 12px;
  --search-clear-button-color: #b3b3b3;
  --search-clear-button-size: 13px;
  --search-icon-color: #b3b3b3;
  --search-icon-size: 18px;
  --search-result-background: #1e1e1e;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: #363636;
  --setting-items-border-width: 0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --sidebar-left-toggle-inner-width: 8.33%;
  --sidebar-left-toggle-inner-width-open: 24%;
  --sidebar-markdown-font-size: 14.4px;
  --sidebar-right-toggle-inner-width: 8.33%;
  --sidebar-right-toggle-inner-width-open: 24%;
  --sidebar-tab-text-display: none;
  --size-2-1: 2px;
  --size-2-2: 4px;
  --size-2-3: 6px;
  --size-4-1: 4px;
  --size-4-10: 40px;
  --size-4-12: 48px;
  --size-4-16: 64px;
  --size-4-18: 72px;
  --size-4-2: 8px;
  --size-4-3: 12px;
  --size-4-4: 16px;
  --size-4-5: 20px;
  --size-4-6: 24px;
  --size-4-8: 32px;
  --size-4-9: 36px;
  --slider-s-thumb-position: -5px;
  --slider-s-thumb-size: 15px;
  --slider-thumb-border-color: #3f3f3f;
  --slider-thumb-border-width: 1px;
  --slider-thumb-height: 18px;
  --slider-thumb-radius: 18px;
  --slider-thumb-width: 18px;
  --slider-thumb-y: -6px;
  --slider-track-background: #363636;
  --slider-track-height: 3px;
  --spreadHorizontalWrapped-margin-LR: -3.5px;
  --status-bar-background: #262626;
  --status-bar-border-color: #363636;
  --status-bar-border-width: 1px 0 0 1px;
  --status-bar-font-size: 12px;
  --status-bar-position: fixed;
  --status-bar-radius: 8px 0 0 0;
  --status-bar-text-color: #b3b3b3;
  --suggestion-backdrop-filter: none;
  --suggestion-background: #1e1e1e;
  --swatch-height: 22px;
  --swatch-radius: 14px;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --swatch-width: 22px;
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --sync-avatar-color-current-user: transparent;
  --tab-background-active: #1e1e1e;
  --tab-container-background: #262626;
  --tab-curve: 6px;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-max-width: 320px;
  --tab-outline-color: #363636;
  --tab-outline-width: 1px;
  --tab-radius: 4px;
  --tab-radius-active: 6px 6px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 400;
  --tab-stacked-header-width: 40px;
  --tab-stacked-pane-width: 700px;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.05);
  --tab-stacked-text-align: start;
  --tab-stacked-text-transform: rotate(0deg);
  --tab-stacked-text-writing-mode: vertical-lr;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-background-shadow: 0 4px 30px 2px rgba(0, 0, 0, 0.2);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --tab-width: 200px;
  --table-add-button-background: transparent;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-background: transparent;
  --table-border-color: #363636;
  --table-border-width: 1px;
  --table-cell-vertical-alignment: top;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-column-max-width: none;
  --table-column-min-width: 6ch;
  --table-drag-handle-background: transparent;
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-drop-indicator-half-width: 2px;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgb(138, 92, 245);
  --table-selection-border-radius: 4px;
  --table-selection-border-width: 2px;
  --table-text-size: 16px;
  --table-white-space: break-spaces;
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-border-width: 0px;
  --tag-color: rgb(166, 139, 249);
  --tag-color-hover: rgb(166, 139, 249);
  --tag-corner-shape: round;
  --tag-decoration: none;
  --tag-decoration-hover: none;
  --tag-padding-x: 0.65em;
  --tag-padding-y: 0.25em;
  --tag-radius: 2em;
  --tag-size: 0.875em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-highlight-bg-rgb: 255, 208, 0;
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-on-accent: white;
  --text-on-accent-inverted: black;
  --text-selection: rgba(138, 92, 245, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #262626;
  --titlebar-background-focused: #363636;
  --titlebar-border-color: #363636;
  --titlebar-border-width: 0px;
  --titlebar-height: 30px;
  --titlebar-text-color: #b3b3b3;
  --titlebar-text-color-focused: #dadada;
  --titlebar-text-weight: 700;
  --toggle-border-width: 2px;
  --toggle-radius: 18px;
  --toggle-s-border-width: 2px;
  --toggle-s-thumb-height: 15px;
  --toggle-s-thumb-width: 15px;
  --toggle-s-width: 34px;
  --toggle-thumb-color: white;
  --toggle-thumb-height: 18px;
  --toggle-thumb-radius: 18px;
  --toggle-thumb-width: 18px;
  --toggle-width: 40px;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --touch-size-l: 52px;
  --touch-size-m: 44px;
  --touch-size-s: 40px;
  --touch-size-xl: 60px;
  --touch-size-xs: 30px;
  --touch-size-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --vault-profile-actions-display: flex;
  --vault-profile-color: #dadada;
  --vault-profile-color-hover: #dadada;
  --vault-profile-display: flex;
  --vault-profile-font-size: 13px;
  --vault-profile-font-weight: 500;
  --vault-profile-order: 2;
  --viewer-container-height: 0;
  --workspace-background-translucent: rgba(0, 0, 0, 0.6);
  --xfa-focus-outline: auto;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --zoom-factor: 1;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 38, 38);
  color: rgb(218, 218, 218);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(30, 30, 30);
  color: rgb(218, 218, 218);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 38, 38);
  color: rgb(218, 218, 218);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 38, 38);
  border-left-color: rgb(54, 54, 54);
  border-left-width: 0px;
  color: rgb(218, 218, 218);
}

body div#quartz-root {
  background-color: rgb(30, 30, 30);
  color: rgb(218, 218, 218);
}`,
    typography: `body .page article p > b, b {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .page article p > em, em {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .page article p > i, i {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .page article p > strong, strong {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .text-highlight {
  background-color: rgba(255, 208, 0, 0.4);
  color: rgb(218, 218, 218);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body del {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: line-through rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-line: line-through;
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body p {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
  text-decoration-style: solid;
  transition: all;
}`,
    links: `body a.external, footer a {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(166, 138, 249);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: underline rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(166, 138, 249);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: underline rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

body a.internal.broken {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(166, 138, 249);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: underline rgba(138, 92, 245, 0.3);
  text-decoration-color: rgba(138, 92, 245, 0.3);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}`,
    lists: `body dd {
  color: rgb(218, 218, 218);
  margin-bottom: 0px;
  margin-left: 40px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body dl {
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
}

body dt {
  color: rgb(218, 218, 218);
  font-weight: 400;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

body ol > li {
  color: rgb(218, 218, 218);
  text-align: start;
}

body ol.overflow {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body ul > li {
  color: rgb(218, 218, 218);
  text-align: start;
}

body ul.overflow {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body blockquote {
  background-color: rgba(0, 0, 0, 0);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}`,
    tables: `body .spacer {
  background-color: rgba(0, 0, 0, 0);
}

body .table-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body table {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  width: 225.219px;
}

body tbody {
  background-color: rgba(0, 0, 0, 0);
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0);
}

body td {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-weight: 400;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

body th {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-weight: 600;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

body thead {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body tr {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    code: `body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: monospace;
}

body pre > code > [data-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 222, 113);
  border-left-width: 0px;
}

body pre > code > [data-line][data-highlighted-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 222, 113);
}

body pre > code [data-highlighted-chars] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 222, 113);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 222, 113);
  border-left-width: 0px;
  border-right-color: rgb(224, 222, 113);
  border-right-width: 0px;
  border-top-color: rgb(224, 222, 113);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

body pre:has(> code) {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}`,
    images: `body audio {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body figcaption {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

body figure {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 16px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

body img {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

body video {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .footnotes {
  background-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

body .transclude {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .transclude-inner {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    checkboxes: `body .katex > .katex-html {
  font-family: MJXZERO, MJXTEX;
}

body .katex-display > .katex {
  display: block;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: center;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(179, 179, 179);
  text-decoration: line-through rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body input[type=checkbox] {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-bottom: 0px;
  margin-left: -24px;
  margin-right: 8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  transition: box-shadow 0.15s ease-in-out;
  width: 16px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='*'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='-'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='/'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='>'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='?'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='I'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='S'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='b'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='c'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='d'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='f'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='i'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='k'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='l'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='p'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='u'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body li.task-list-item[data-task='w'] {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body ul > li.task-list-item {
  display: list-item;
  text-align: start;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  gap: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 600;
}

body .callout > .callout-content {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(83, 223, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(83, 223, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(83, 223, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(251, 70, 76, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(251, 70, 76, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(251, 70, 76, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(251, 70, 76, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(251, 70, 76, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(251, 70, 76, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.1);
  border-bottom-color: rgba(168, 130, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(168, 130, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(168, 130, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(168, 130, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(251, 70, 76, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(251, 70, 76, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(251, 70, 76, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 151, 63, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 151, 63, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 151, 63, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(68, 207, 110, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(68, 207, 110, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(68, 207, 110, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(83, 223, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(83, 223, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(83, 223, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 151, 63, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 151, 63, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 151, 63, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(218, 218, 218);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(218, 218, 218);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.067);
  color: rgb(218, 218, 218);
  font-weight: 400;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search > .search-container > .search-space > input {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.067);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.067);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(218, 218, 218);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-style: solid;
  border-top-width: 0px;
  display: flex;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

body a.internal.tag-link::before {
  color: rgb(166, 138, 249);
}

body h1 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(179, 179, 179);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  text-decoration: rgb(179, 179, 179);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(179, 179, 179);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  text-decoration: rgb(179, 179, 179);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(179, 179, 179);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  text-decoration: rgb(179, 179, 179);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.067);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  cursor: default;
}`,
    toc: `body li.depth-0 {
  font-weight: 400;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  cursor: default;
}`,
    footer: `body footer {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 8px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

body .recent-notes > ul.recent-ul > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body li.section-li > .section .meta {
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
}

body ul.section-ul {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    darkmode: `body .darkmode {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  cursor: default;
}

body .darkmode svg {
  color: rgb(179, 179, 179);
  stroke: rgb(179, 179, 179);
}`,
    breadcrumbs: `body .breadcrumb-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
}

body .breadcrumb-element p {
  color: rgb(102, 102, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

body .metadata {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 32px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

body .metadata-properties {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .navigation-progress {
  background-color: rgb(38, 38, 38);
}

body .page-header h2.page-title {
  color: rgb(218, 218, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(218, 218, 218);
  text-decoration: underline dotted rgb(218, 218, 218);
  text-decoration-style: dotted;
}

body details {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body input[type=text] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

body kbd {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 14px;
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

body progress {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body sub {
  color: rgb(218, 218, 218);
  font-size: 13.3333px;
  vertical-align: sub;
}

body summary {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  font-weight: 400;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body sup {
  color: rgb(218, 218, 218);
  font-size: 13.3333px;
  vertical-align: super;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 258;
  --accent-l: 66%;
  --accent-s: 88%;
  --anim-duration-fast: 140ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-none: 0;
  --anim-duration-slow: 560ms;
  --anim-duration-superfast: 70ms;
  --anim-motion-delay: cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-motion-jumpy: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --anim-motion-smooth: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-motion-swing: cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(220, 220, 220, 0.4);
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-message: rgba(0, 0, 0, 0.9);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-cards-background: #ffffff;
  --bases-cards-border-width: 1px;
  --bases-cards-container-background: transparent;
  --bases-cards-corner-shape: round;
  --bases-cards-cover-background: #fafafa;
  --bases-cards-font-size: 0.875em;
  --bases-cards-line-height: 24px;
  --bases-cards-radius: 8px;
  --bases-cards-scale: 1;
  --bases-cards-shadow: 0 0 0 1px #e0e0e0;
  --bases-cards-shadow-hover: 0 0 0 1px #d4d4d4;
  --bases-embed-border-color: #e0e0e0;
  --bases-embed-border-radius: 4px;
  --bases-embed-border-width: 0px;
  --bases-filter-menu-width: 520px;
  --bases-group-heading-property-color: #5c5c5c;
  --bases-group-heading-property-display: block;
  --bases-group-heading-property-size: 12px;
  --bases-group-heading-property-weight: 400;
  --bases-group-heading-value-size: 0.875em;
  --bases-group-heading-value-weight: 600;
  --bases-header-border-width: 0 0 1px 0;
  --bases-header-height: 40px;
  --bases-header-padding-end: 2px;
  --bases-header-padding-start: 2px;
  --bases-table-border-color: #e0e0e0;
  --bases-table-cell-background-active: #ffffff;
  --bases-table-cell-background-disabled: #fafafa;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-radius-active: 2px;
  --bases-table-cell-radius-focus: 2px;
  --bases-table-cell-shadow-active: 0 0 0 2px #bdbdbd;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --bases-table-column-border-width: 1px;
  --bases-table-column-max-width: 300;
  --bases-table-column-min-width: 40;
  --bases-table-container-border-radius: 4px;
  --bases-table-container-border-width: 1px;
  --bases-table-font-size: 0.875em;
  --bases-table-group-background: #fafafa;
  --bases-table-group-gap: 10px;
  --bases-table-header-background: #ffffff;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.067);
  --bases-table-header-color: #5c5c5c;
  --bases-table-header-icon-display: flex;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 24px, black 24px);
  --bases-table-header-weight: 400;
  --bases-table-row-background-hover: transparent;
  --bases-table-row-border-width: 1px;
  --bases-table-row-height: 30px;
  --bases-table-summary-background: #ffffff;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.067);
  --bases-toolbar-badge-display: none;
  --bases-toolbar-label-display: block;
  --blockquote-background-color: transparent;
  --blockquote-border-color: rgb(153, 115, 247);
  --blockquote-border-thickness: 2px;
  --blockquote-font-style: normal;
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-brightness: 1.15;
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-opacity-m: 90%;
  --blur-opacity-s: 65%;
  --blur-radius-l: 16px;
  --blur-radius-m: 10px;
  --blur-radius-s: 6px;
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --blur-saturation: 1.5;
  --bodyFont: var(--font-text);
  --bold-modifier: 200;
  --bold-weight: 600;
  --border-width: 1px;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-border-opacity: 0.25;
  --callout-border-width: 0px;
  --callout-bug: 233, 49, 71;
  --callout-content-background: transparent;
  --callout-content-padding: 0;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-quote: 158, 158, 158;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-padding: 0;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-card-label-color: #ababab;
  --canvas-color: 192, 192, 192;
  --canvas-color-1: 233, 49, 71;
  --canvas-color-2: 236, 117, 0;
  --canvas-color-3: 224, 172, 0;
  --canvas-color-4: 8, 185, 78;
  --canvas-color-5: 0, 191, 188;
  --canvas-color-6: 120, 82, 238;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-margin-inline-start: 0.85em;
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --checklist-done-decoration: line-through;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-border-width: 0px;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --code-white-space: pre-wrap;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-00: #ffffff;
  --color-base-05: #fcfcfc;
  --color-base-10: #fafafa;
  --color-base-100: #222222;
  --color-base-20: #f6f6f6;
  --color-base-25: #e3e3e3;
  --color-base-30: #e0e0e0;
  --color-base-35: #d4d4d4;
  --color-base-40: #bdbdbd;
  --color-base-50: #ababab;
  --color-base-60: #707070;
  --color-base-70: #5c5c5c;
  --color-blue: #086ddd;
  --color-blue-rgb: 8, 109, 221;
  --color-cyan: #00bfbc;
  --color-cyan-rgb: 0, 191, 188;
  --color-green: #08b94e;
  --color-green-rgb: 8, 185, 78;
  --color-orange: #ec7500;
  --color-orange-rgb: 236, 117, 0;
  --color-pink: #d53984;
  --color-pink-rgb: 213, 57, 132;
  --color-purple: #7852ee;
  --color-purple-rgb: 120, 82, 238;
  --color-red: #e93147;
  --color-red-rgb: 233, 49, 71;
  --color-yellow: #e0ac00;
  --color-yellow-rgb: 224, 172, 0;
  --corner-shape: round;
  --cursor: default;
  --cursor-link: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dialog-max-height: 85vh;
  --dialog-max-width: 80vw;
  --dialog-width: 560px;
  --direction: 1;
  --divider-color: #e0e0e0;
  --divider-color-hover: rgb(153, 115, 247);
  --divider-vertical-height: 100%;
  --divider-width: 1px;
  --divider-width-hover: 3px;
  --drag-ghost-background: rgba(0, 0, 0, 0.85);
  --drag-ghost-text-color: #fff;
  --dropdown-background: #ffffff;
  --dropdown-background-blend-mode: hard-light;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-icon-inset: 0.5em;
  --dropdown-icon-width: 1em;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --dropdown-padding-end: 1.9em;
  --dropdown-padding-start: 0.8em;
  --embed-block-shadow-hover: 0 0 0 1px #e0e0e0, inset 0 0 0 1px #e0e0e0;
  --embed-border-bottom: none;
  --embed-border-end: none;
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --embed-border-top: none;
  --embed-canvas-max-height: 400px;
  --embed-max-height: 4000px;
  --embed-padding: 0 0 0 24px;
  --file-folding-offset: 24px;
  --file-header-background: #ffffff;
  --file-header-background-focused: #ffffff;
  --file-header-border: 1px solid transparent;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 13px;
  --file-header-font-weight: 400;
  --file-header-justify: center;
  --file-line-width: 700px;
  --file-margins: 32px 32px;
  --file-margins-x: 32px;
  --file-margins-y: 32px;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --focus-ring-color: #0df;
  --focus-ring-outline: 2px solid light-dark(#0060df, #0df);
  --font-black: 900;
  --font-bold: 700;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-extrabold: 800;
  --font-extralight: 200;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-override: '??';
  --font-interface-theme: '??';
  --font-light: 300;
  --font-medium: 500;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-default: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-override: '??';
  --font-monospace-theme: '??';
  --font-normal: 400;
  --font-print: '??', '??', '??', 'Arial';
  --font-print-override: '??';
  --font-semibold: 600;
  --font-small: 0.933em;
  --font-smaller: 0.875em;
  --font-smallest: 0.8em;
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-override: '??';
  --font-text-size: 16px;
  --font-text-theme: '??';
  --font-thin: 100;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: 400;
  --footnote-divider-color: #e0e0e0;
  --footnote-divider-color-active: transparent;
  --footnote-divider-width: 1px;
  --footnote-gap: 4px;
  --footnote-id-color: #5c5c5c;
  --footnote-id-color-no-occurrences: #ababab;
  --footnote-id-delimiter: ".";
  --footnote-input-background: transparent;
  --footnote-input-background-active: rgba(0, 0, 0, 0.067);
  --footnote-line-height: 1.5;
  --footnote-padding-block: 6px;
  --footnote-padding-inline: 6px;
  --footnote-radius: 4px;
  --footnote-size: 0.875em;
  --frame-left-space: 0px;
  --frame-right-space: 126px;
  --graph-controls-width: 240px;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --gray: var(--text-muted);
  --h1-letter-spacing: -0.015em;
  --h1-line-height: 1.2;
  --h1-size: 1.618em;
  --h1-style: normal;
  --h1-variant: normal;
  --h1-weight: 700;
  --h2-letter-spacing: -0.011em;
  --h2-line-height: 1.2;
  --h2-size: 1.462em;
  --h2-style: normal;
  --h2-variant: normal;
  --h2-weight: 680;
  --h3-letter-spacing: -0.008em;
  --h3-line-height: 1.3;
  --h3-size: 1.318em;
  --h3-style: normal;
  --h3-variant: normal;
  --h3-weight: 660;
  --h4-letter-spacing: -0.005em;
  --h4-line-height: 1.4;
  --h4-size: 1.188em;
  --h4-style: normal;
  --h4-variant: normal;
  --h4-weight: 640;
  --h5-letter-spacing: -0.002em;
  --h5-line-height: 1.5;
  --h5-size: 1.076em;
  --h5-style: normal;
  --h5-variant: normal;
  --h5-weight: 620;
  --h6-letter-spacing: 0em;
  --h6-line-height: 1.5;
  --h6-size: 1em;
  --h6-style: normal;
  --h6-variant: normal;
  --h6-weight: 600;
  --header-height: 40px;
  --headerFont: var(--font-text);
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --highlight: var(--text-highlight-bg);
  --highlight-mix-blend-mode: darken;
  --hr-color: #e0e0e0;
  --hr-thickness: 2px;
  --icon-color: #5c5c5c;
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-focused: #222222;
  --icon-color-hover: #5c5c5c;
  --icon-l: 18px;
  --icon-l-stroke-width: 1.75px;
  --icon-m: 18px;
  --icon-m-stroke-width: 1.75px;
  --icon-opacity: 0.85;
  --icon-opacity-active: 1;
  --icon-opacity-hover: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: 18px;
  --icon-stroke: 1.75px;
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2px;
  --indent-size: 4;
  --indent-unit: 0.5625em;
  --indentation-guide-color: rgba(0, 0, 0, 0.12);
  --indentation-guide-color-active: rgba(0, 0, 0, 0.3);
  --indentation-guide-editing-indent: 0.85em;
  --indentation-guide-reading-indent: -0.85em;
  --indentation-guide-source-indent: 0.25em;
  --indentation-guide-width: 1px;
  --indentation-guide-width-active: 1px;
  --inline-title-line-height: 1.2;
  --inline-title-margin-bottom: 0.5em;
  --inline-title-size: 1.618em;
  --inline-title-style: normal;
  --inline-title-variant: normal;
  --inline-title-weight: 700;
  --input-border-width: 1px;
  --input-border-width-focus: 2px;
  --input-corner-shape: round;
  --input-date-separator: #ababab;
  --input-font-weight: 400;
  --input-height: 30px;
  --input-icon-inset: 4px;
  --input-padding: 4px 8px;
  --input-placeholder-color: #ababab;
  --input-radius: 5px;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --inset-end: right;
  --inset-start: left;
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --keyboard-height: 0px;
  --layer-cover: 5;
  --layer-dragged-item: 80;
  --layer-menu: 65;
  --layer-modal: 50;
  --layer-notice: 60;
  --layer-popover: 30;
  --layer-sidedock: 10;
  --layer-slides: 45;
  --layer-status-bar: 15;
  --layer-tooltip: 70;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.5;
  --line-height-tight: 1.3;
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-decoration: underline;
  --link-decoration-hover: underline;
  --link-decoration-thickness: auto;
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-external-decoration: underline;
  --link-external-decoration-hover: underline;
  --link-external-filter: none;
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-unresolved-decoration-style: solid;
  --link-unresolved-filter: none;
  --link-unresolved-opacity: 0.7;
  --link-weight: 400;
  --list-bullet-border: none;
  --list-bullet-end-padding: 1.3rem;
  --list-bullet-radius: 50%;
  --list-bullet-size: 0.3em;
  --list-bullet-transform: none;
  --list-indent: 2.25em;
  --list-indent-editing: 0.75em;
  --list-indent-source: 0;
  --list-marker-color: #ababab;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --list-marker-color-hover: #5c5c5c;
  --list-numbered-style: decimal;
  --list-spacing: 0.075em;
  --loading-icon-delay: 400ms;
  --menu-backdrop-filter: none;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-scroll-mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 48px);
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-background: transparent;
  --metadata-border-color: #e0e0e0;
  --metadata-border-radius: 0;
  --metadata-border-width: 0;
  --metadata-display-editing: block;
  --metadata-display-reading: block;
  --metadata-divider-color: #e0e0e0;
  --metadata-divider-color-focus: transparent;
  --metadata-divider-color-hover: transparent;
  --metadata-divider-width: 0;
  --metadata-gap: 3px;
  --metadata-input-background: transparent;
  --metadata-input-background-active: rgba(0, 0, 0, 0.067);
  --metadata-input-background-hover: transparent;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.875em;
  --metadata-input-height: 28px;
  --metadata-input-longtext-lines: 3;
  --metadata-input-padding: 4px 8px;
  --metadata-input-text-color: #222222;
  --metadata-label-background: transparent;
  --metadata-label-background-active: rgba(0, 0, 0, 0.067);
  --metadata-label-background-hover: transparent;
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.875em;
  --metadata-label-text-color: #5c5c5c;
  --metadata-label-text-color-hover: #5c5c5c;
  --metadata-label-width: 9em;
  --metadata-max-width: none;
  --metadata-padding: 8px 0;
  --metadata-property-background: transparent;
  --metadata-property-background-active: rgba(0, 0, 0, 0.067);
  --metadata-property-background-hover: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px #bdbdbd;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d4d4d4;
  --metadata-property-corner-shape: round;
  --metadata-property-corner-shape-focus: round;
  --metadata-property-corner-shape-hover: round;
  --metadata-property-padding: 0;
  --metadata-property-radius: 6px;
  --metadata-property-radius-focus: 6px;
  --metadata-property-radius-hover: 6px;
  --metadata-sidebar-input-font-size: 13px;
  --metadata-sidebar-label-font-size: 13px;
  --modal-background: #ffffff;
  --modal-border-color: #bdbdbd;
  --modal-border-width: 1px;
  --modal-community-sidebar-width: 280px;
  --modal-header-height: auto;
  --modal-height: 85vh;
  --modal-max-height: 1000px;
  --modal-max-width: 1100px;
  --modal-max-width-narrow: 800px;
  --modal-radius: 12px;
  --modal-shadow: none;
  --modal-width: 90vw;
  --mono-rgb-0: 255, 255, 255;
  --mono-rgb-100: 0, 0, 0;
  --nav-collapse-icon-color: #ababab;
  --nav-collapse-icon-color-collapsed: #ababab;
  --nav-heading-color: #222222;
  --nav-heading-color-collapsed: #ababab;
  --nav-heading-color-collapsed-hover: #5c5c5c;
  --nav-heading-color-hover: #222222;
  --nav-heading-weight: 500;
  --nav-heading-weight-hover: 500;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.12);
  --nav-indentation-guide-width: 1px;
  --nav-item-background-active: rgba(0, 0, 0, 0.067);
  --nav-item-background-hover: rgba(0, 0, 0, 0.067);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-children-margin-start: 12px;
  --nav-item-children-padding-start: 4px;
  --nav-item-color: #5c5c5c;
  --nav-item-color-active: #222222;
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-item-color-hover: #222222;
  --nav-item-color-selected: #222222;
  --nav-item-margin-bottom: 2px;
  --nav-item-padding: 4px 8px 4px 24px;
  --nav-item-parent-padding: 4px 8px 4px 24px;
  --nav-item-radius: 4px;
  --nav-item-size: 13px;
  --nav-item-white-space: pre;
  --nav-tag-background: transparent;
  --nav-tag-color: #ababab;
  --nav-tag-color-active: #5c5c5c;
  --nav-tag-color-hover: #5c5c5c;
  --nav-tag-radius: 4px;
  --nav-tag-weight: 600;
  --p-spacing: 1rem;
  --p-spacing-empty: 0rem;
  --page-border: 9px solid transparent;
  --page-margin: 1px auto -8px;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.1);
  --pdf-sidebar-background: #ffffff;
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2);
  --pdfViewer-padding-bottom: 0;
  --pill-background: transparent;
  --pill-background-hover: transparent;
  --pill-border-color: #e0e0e0;
  --pill-border-color-hover: #d4d4d4;
  --pill-border-width: 1px;
  --pill-color: #5c5c5c;
  --pill-color-hover: #222222;
  --pill-color-remove: #ababab;
  --pill-color-remove-hover: rgb(138, 92, 245);
  --pill-decoration: none;
  --pill-decoration-hover: none;
  --pill-focus-left-adjust: -4px;
  --pill-focus-width: calc(100% + 6px);
  --pill-padding-x: 0.65em;
  --pill-padding-y: 0.25em;
  --pill-radius: 2em;
  --popover-font-size: 16px;
  --popover-height: 400px;
  --popover-max-height: 95vh;
  --popover-pdf-height: 400px;
  --popover-pdf-width: 450px;
  --popover-width: 450px;
  --preferred-text-scale: 1;
  --prompt-backdrop-filter: none;
  --prompt-background: #ffffff;
  --prompt-border-color: #bdbdbd;
  --prompt-border-width: 1px;
  --prompt-input-height: 40px;
  --prompt-max-height: 70vh;
  --prompt-max-width: 80vw;
  --prompt-width: 700px;
  --radius-l: 12px;
  --radius-m: 8px;
  --radius-s: 4px;
  --radius-xl: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --raised-mask: linear-gradient(white, white) padding-box, linear-gradient(white, white) border-box;
  --raised-mask-background: linear-gradient(to bottom left, white, transparent, white) border-box no-repeat;
  --raised-mask-border-width: 0;
  --raised-mask-composite: exclude, add;
  --raised-mask-display: block;
  --raised-shadow: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --ribbon-background: #f6f6f6;
  --ribbon-background-collapsed: #ffffff;
  --ribbon-padding: 8px 4px 12px;
  --ribbon-width: 44px;
  --safe-area-inset-bottom: 0px;
  --safe-area-inset-left: 0px;
  --safe-area-inset-right: 0px;
  --safe-area-inset-top: 0px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-border-width: 3px 3px 3px 2px;
  --scrollbar-height: 12px;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-width: 12px;
  --search-clear-button-color: #5c5c5c;
  --search-clear-button-size: 13px;
  --search-icon-color: #5c5c5c;
  --search-icon-size: 18px;
  --search-result-background: #ffffff;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-border-width: 0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-edges: 0 0 transparent;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 15px 30px rgba(0, 0, 0, 0.1);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --shadow-xs: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --sidebar-left-toggle-inner-width: 8.33%;
  --sidebar-left-toggle-inner-width-open: 24%;
  --sidebar-markdown-font-size: 14.4px;
  --sidebar-right-toggle-inner-width: 8.33%;
  --sidebar-right-toggle-inner-width-open: 24%;
  --sidebar-tab-text-display: none;
  --size-2-1: 2px;
  --size-2-2: 4px;
  --size-2-3: 6px;
  --size-4-1: 4px;
  --size-4-10: 40px;
  --size-4-12: 48px;
  --size-4-16: 64px;
  --size-4-18: 72px;
  --size-4-2: 8px;
  --size-4-3: 12px;
  --size-4-4: 16px;
  --size-4-5: 20px;
  --size-4-6: 24px;
  --size-4-8: 32px;
  --size-4-9: 36px;
  --slider-s-thumb-position: -5px;
  --slider-s-thumb-size: 15px;
  --slider-thumb-border-color: #d4d4d4;
  --slider-thumb-border-width: 1px;
  --slider-thumb-height: 18px;
  --slider-thumb-radius: 18px;
  --slider-thumb-width: 18px;
  --slider-thumb-y: -6px;
  --slider-track-background: #e0e0e0;
  --slider-track-height: 3px;
  --spreadHorizontalWrapped-margin-LR: -3.5px;
  --status-bar-background: #f6f6f6;
  --status-bar-border-color: #e0e0e0;
  --status-bar-border-width: 1px 0 0 1px;
  --status-bar-font-size: 12px;
  --status-bar-position: fixed;
  --status-bar-radius: 8px 0 0 0;
  --status-bar-text-color: #5c5c5c;
  --suggestion-backdrop-filter: none;
  --suggestion-background: #ffffff;
  --swatch-height: 22px;
  --swatch-radius: 14px;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --swatch-width: 22px;
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --sync-avatar-color-current-user: transparent;
  --tab-background-active: #ffffff;
  --tab-container-background: #f6f6f6;
  --tab-curve: 6px;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-max-width: 320px;
  --tab-outline-color: #e0e0e0;
  --tab-outline-width: 1px;
  --tab-radius: 4px;
  --tab-radius-active: 6px 6px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 400;
  --tab-stacked-header-width: 40px;
  --tab-stacked-pane-width: 700px;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.05);
  --tab-stacked-text-align: start;
  --tab-stacked-text-transform: rotate(0deg);
  --tab-stacked-text-writing-mode: vertical-lr;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-background-shadow: 0 4px 30px 2px rgba(0, 0, 0, 0.2);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --tab-width: 200px;
  --table-add-button-background: transparent;
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-background: transparent;
  --table-border-color: #e0e0e0;
  --table-border-width: 1px;
  --table-cell-vertical-alignment: top;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-column-max-width: none;
  --table-column-min-width: 6ch;
  --table-drag-handle-background: transparent;
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-drop-indicator-half-width: 2px;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: rgb(153, 115, 247);
  --table-selection-border-radius: 4px;
  --table-selection-border-width: 2px;
  --table-text-size: 16px;
  --table-white-space: break-spaces;
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-border-width: 0px;
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tag-corner-shape: round;
  --tag-decoration: none;
  --tag-decoration-hover: none;
  --tag-padding-x: 0.65em;
  --tag-padding-y: 0.25em;
  --tag-radius: 2em;
  --tag-size: 0.875em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-highlight-bg-rgb: 255, 208, 0;
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-on-accent: white;
  --text-on-accent-inverted: black;
  --text-selection: rgba(138, 92, 245, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #f6f6f6;
  --titlebar-background-focused: #fcfcfc;
  --titlebar-border-color: #e0e0e0;
  --titlebar-border-width: 0px;
  --titlebar-height: 30px;
  --titlebar-text-color: #5c5c5c;
  --titlebar-text-color-focused: #222222;
  --titlebar-text-weight: 700;
  --toggle-border-width: 2px;
  --toggle-radius: 18px;
  --toggle-s-border-width: 2px;
  --toggle-s-thumb-height: 15px;
  --toggle-s-thumb-width: 15px;
  --toggle-s-width: 34px;
  --toggle-thumb-color: white;
  --toggle-thumb-height: 18px;
  --toggle-thumb-radius: 18px;
  --toggle-thumb-width: 18px;
  --toggle-width: 40px;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --touch-size-l: 52px;
  --touch-size-m: 44px;
  --touch-size-s: 40px;
  --touch-size-xl: 60px;
  --touch-size-xs: 30px;
  --touch-size-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --vault-profile-actions-display: flex;
  --vault-profile-color: #222222;
  --vault-profile-color-hover: #222222;
  --vault-profile-display: flex;
  --vault-profile-font-size: 13px;
  --vault-profile-font-weight: 500;
  --vault-profile-order: 2;
  --viewer-container-height: 0;
  --workspace-background-translucent: rgba(255, 255, 255, 0.6);
  --xfa-focus-outline: auto;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --zoom-factor: 1;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 246, 246);
  color: rgb(34, 34, 34);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 246, 246);
  color: rgb(34, 34, 34);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 246, 246);
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  color: rgb(34, 34, 34);
}

body div#quartz-root {
  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
}`,
    typography: `body .page article p > b, b {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .page article p > em, em {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .page article p > i, i {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .page article p > strong, strong {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .text-highlight {
  background-color: rgba(255, 208, 0, 0.4);
  color: rgb(34, 34, 34);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body del {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: text;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: line-through rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-line: line-through;
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body p {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(92, 92, 92) none 0px;
  text-decoration: rgb(92, 92, 92);
  text-decoration-color: rgb(92, 92, 92);
  text-decoration-style: solid;
  transition: all;
}`,
    links: `body a.external, footer a {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(138, 92, 245);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(138, 92, 245);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

body a.internal.broken {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(138, 92, 245);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgba(138, 92, 245, 0.3);
  text-decoration-color: rgba(138, 92, 245, 0.3);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}`,
    lists: `body dd {
  color: rgb(34, 34, 34);
  margin-bottom: 0px;
  margin-left: 40px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body dl {
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
}

body dt {
  color: rgb(34, 34, 34);
  font-weight: 400;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

body ol > li {
  color: rgb(34, 34, 34);
  text-align: start;
}

body ol.overflow {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body ul > li {
  color: rgb(34, 34, 34);
  text-align: start;
}

body ul.overflow {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
}

body blockquote {
  background-color: rgba(0, 0, 0, 0);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}`,
    tables: `body .spacer {
  background-color: rgba(0, 0, 0, 0);
}

body .table-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body table {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  width: 225.219px;
}

body tbody {
  background-color: rgba(0, 0, 0, 0);
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0);
}

body td {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-weight: 400;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

body th {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

body thead {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body tr {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    code: `body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: monospace;
}

body pre > code > [data-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 172, 0);
  border-left-width: 0px;
}

body pre > code > [data-line][data-highlighted-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 172, 0);
}

body pre > code [data-highlighted-chars] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 172, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 172, 0);
  border-left-width: 0px;
  border-right-color: rgb(224, 172, 0);
  border-right-width: 0px;
  border-top-color: rgb(224, 172, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

body pre:has(> code) {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}`,
    images: `body audio {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body figcaption {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

body figure {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 16px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

body img {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

body video {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .footnotes {
  background-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

body .transclude {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(152, 115, 247);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .transclude-inner {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(152, 115, 247);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    checkboxes: `body .katex > .katex-html {
  font-family: MJXZERO, MJXTEX;
}

body .katex-display > .katex {
  display: block;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: center;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(92, 92, 92);
  text-decoration: line-through rgb(92, 92, 92);
  text-decoration-color: rgb(92, 92, 92);
}

body input[type=checkbox] {
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(171, 171, 171);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(171, 171, 171);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(171, 171, 171);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-bottom: 0px;
  margin-left: -24px;
  margin-right: 8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  transition: box-shadow 0.15s ease-in-out;
  width: 16px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='*'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='-'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='/'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='>'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='?'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='I'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='S'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='b'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='c'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='d'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='f'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='i'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='k'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='l'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='p'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='u'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body li.task-list-item[data-task='w'] {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body ul > li.task-list-item {
  display: list-item;
  text-align: start;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 0px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 0px;
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  gap: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 600;
}

body .callout > .callout-content {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(0, 191, 188, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 49, 71, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 49, 71, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 49, 71, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 49, 71, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 49, 71, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 49, 71, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.1);
  border-bottom-color: rgba(120, 82, 238, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(120, 82, 238, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(120, 82, 238, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(120, 82, 238, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 49, 71, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 49, 71, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 49, 71, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(236, 117, 0, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(236, 117, 0, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(236, 117, 0, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 185, 78, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 185, 78, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 185, 78, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(0, 191, 188, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(236, 117, 0, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(236, 117, 0, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(236, 117, 0, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(189, 189, 189);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(189, 189, 189);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(189, 189, 189);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.1) 0px 15px 30px 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(34, 34, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(34, 34, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.067);
  color: rgb(34, 34, 34);
  font-weight: 400;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(189, 189, 189);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(189, 189, 189);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(189, 189, 189);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search > .search-container > .search-space > input {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(246, 246, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.067);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.067);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(34, 34, 34);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-style: solid;
  border-top-width: 0px;
  display: flex;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

body a.internal.tag-link::before {
  color: rgb(138, 92, 245);
}

body h1 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  text-decoration: rgb(92, 92, 92);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  text-decoration: rgb(92, 92, 92);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  text-decoration: rgb(92, 92, 92);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.067);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  cursor: default;
}`,
    toc: `body li.depth-0 {
  font-weight: 400;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  cursor: default;
}`,
    footer: `body footer {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(92, 92, 92);
  text-decoration: rgb(92, 92, 92);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

body .recent-notes > ul.recent-ul > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(92, 92, 92);
  text-decoration: rgb(92, 92, 92);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body li.section-li > .section .meta {
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(92, 92, 92);
  text-decoration: rgb(92, 92, 92);
}

body ul.section-ul {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    darkmode: `body .darkmode {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  cursor: default;
}

body .darkmode svg {
  color: rgb(92, 92, 92);
  stroke: rgb(92, 92, 92);
}`,
    breadcrumbs: `body .breadcrumb-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
}

body .breadcrumb-element p {
  color: rgb(171, 171, 171);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

body .metadata {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 32px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

body .metadata-properties {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body .navigation-progress {
  background-color: rgb(246, 246, 246);
}

body .page-header h2.page-title {
  color: rgb(34, 34, 34);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(34, 34, 34);
  text-decoration: underline dotted rgb(34, 34, 34);
  text-decoration-style: dotted;
}

body details {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body input[type=text] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

body kbd {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 14px;
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

body progress {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body sub {
  color: rgb(34, 34, 34);
  font-size: 13.3333px;
  vertical-align: sub;
}

body summary {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  font-weight: 400;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body sup {
  color: rgb(34, 34, 34);
  font-size: 13.3333px;
  vertical-align: super;
}`,
  },
};
