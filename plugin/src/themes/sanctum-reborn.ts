import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sanctum-reborn",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 24.4;
  --accent-l: 61.8%;
  --accent-s: 90.8%;
  --active-line-accent: transparent;
  --aside-background: transparent;
  --aside-background-hover: rgba(142, 140, 139, 0.16);
  --aside-border-color: rgb(58, 56, 56);
  --aside-text-color: rgb(199, 197, 194);
  --background: rgb(22, 22, 22);
  --background-active: rgba(142, 140, 139, 0.4);
  --background-hover: rgba(142, 140, 139, 0.16);
  --background-inverse: rgb(244, 244, 240);
  --background-inverse-hover: rgba(226, 224, 220, 0.5);
  --background-modifier-active-hover: rgba(102, 153, 97, 0.15);
  --background-modifier-border: rgb(58, 56, 56);
  --background-modifier-border-focus: rgb(62, 62, 62);
  --background-modifier-border-hover: rgb(58, 56, 56);
  --background-modifier-cover: rgba(142, 140, 139, 0.16);
  --background-modifier-error: rgb(41, 41, 41);
  --background-modifier-error-hover: rgb(41, 41, 41);
  --background-modifier-error-rgb: 197, 65, 40;
  --background-modifier-form-field: rgb(38, 38, 37);
  --background-modifier-form-field-hover: rgb(38, 38, 37);
  --background-modifier-hover: rgba(142, 140, 139, 0.16);
  --background-modifier-message: rgb(38, 38, 37);
  --background-modifier-success: rgb(97, 97, 97);
  --background-modifier-success-rgb: 102, 153, 97;
  --background-primary: rgb(22, 22, 22);
  --background-primary-alt: rgb(38, 38, 37);
  --background-secondary: rgb(22, 22, 22);
  --background-secondary-alt: rgb(22, 22, 22);
  --background-selected: rgba(142, 140, 139, 0.24);
  --background-selected-hover: rgba(142, 140, 139, 0.32);
  --bases-cards-background: rgb(22, 22, 22);
  --bases-cards-cover-background: rgb(38, 38, 37);
  --bases-cards-shadow: 0 0 0 1px rgb(58, 56, 56);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(58, 56, 56);
  --bases-embed-border-color: rgb(58, 56, 56);
  --bases-group-heading-property-color: rgb(199, 197, 194);
  --bases-table-border-color: rgb(58, 56, 56);
  --bases-table-cell-background-active: rgb(22, 22, 22);
  --bases-table-cell-background-disabled: rgb(38, 38, 37);
  --bases-table-cell-background-selected: rgba(246, 142, 70, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(62, 62, 62);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(102, 153, 97);
  --bases-table-group-background: rgb(38, 38, 37);
  --bases-table-header-background: rgb(22, 22, 22);
  --bases-table-header-background-hover: rgba(142, 140, 139, 0.16);
  --bases-table-header-color: rgb(199, 197, 194);
  --bases-table-summary-background: rgb(22, 22, 22);
  --bases-table-summary-background-hover: rgba(142, 140, 139, 0.16);
  --black: 0, 0, 0;
  --blockquote-border-color: rgb(58, 56, 56);
  --blockquote-border-thickness: 0px;
  --blockquote-size: 0.9rem;
  --blue: rgb(84, 84, 84);
  --blue-10: rgb(240, 240, 240);
  --blue-100: rgb(0, 0, 0);
  --blue-20: rgb(217, 217, 217);
  --blue-30: rgb(182, 182, 182);
  --blue-40: rgb(134, 134, 134);
  --blue-50: rgb(105, 105, 105);
  --blue-60: rgb(84, 84, 84);
  --blue-70: rgb(50, 50, 50);
  --blue-80: rgb(26, 26, 26);
  --blue-90: rgb(7, 7, 7);
  --border-inverse: rgb(244, 244, 240);
  --border-strong-1: rgb(112, 110, 109);
  --border-strong-2: rgb(142, 140, 139);
  --border-subtle-0: rgb(58, 56, 56);
  --border-subtle-1: rgb(58, 56, 56);
  --border-subtle-2: rgb(84, 81, 81);
  --border-subtle-selected-1: rgb(84, 81, 81);
  --border-subtle-selected-2: rgb(112, 110, 109);
  --button-radius: 4px;
  --calendar-dot: rgb(70, 70, 70);
  --calendar-dot-hover: rgb(41, 41, 41);
  --callout-border-opacity: 30%;
  --callout-bug: 197, 65, 40;
  --callout-error: 197, 65, 40;
  --callout-fail: 197, 65, 40;
  --callout-padding: 16px 12px 12px 24px;
  --callout-success: 102, 153, 97;
  --callout-title-background: transparent;
  --canvas-background: rgb(22, 22, 22);
  --canvas-card-label-color: rgb(112, 110, 109);
  --canvas-color-1: 197, 65, 40;
  --canvas-color-3: 243, 189, 79;
  --canvas-color-4: 102, 153, 97;
  --canvas-controls-icon-stroke: 1px;
  --caret-color: rgb(244, 244, 240);
  --checkbox-border-color: rgb(112, 110, 109);
  --checkbox-border-color-hover: rgb(102, 153, 97);
  --checkbox-checked-color-hover: rgba(102, 153, 97, 0.9);
  --checkbox-color: rgb(102, 153, 97);
  --checkbox-color-hover: rgb(102, 153, 97 0.5);
  --checkbox-color-rgb: 102, 153, 97;
  --checkbox-marker-color: rgb(22, 22, 22);
  --checkbox-radius: 16px;
  --checklist-done-color: rgb(112, 110, 109);
  --checklist-done-strike-color: rgb(112, 110, 109);
  --code-background: rgb(38, 38, 37);
  --code-border-color: rgb(58, 56, 56);
  --code-bracket-background: rgba(142, 140, 139, 0.16);
  --code-comment: rgb(112, 110, 109);
  --code-function: rgb(113, 113, 113);
  --code-important: rgb(119, 119, 119);
  --code-keyword: rgb(91, 91, 91);
  --code-normal: rgb(199, 197, 194);
  --code-normal-inline: rgb(91, 91, 91);
  --code-property: rgb(99, 99, 99);
  --code-punctuation: rgb(199, 197, 194);
  --code-string: rgb(110, 110, 110);
  --code-tag: rgb(53, 53, 53);
  --code-value: rgb(119, 119, 119);
  --collapse-icon-color: rgb(112, 110, 109);
  --collapse-icon-color-collapsed: rgb(102, 153, 97);
  --color-accent: rgb(102, 153, 97);
  --color-accent-1: rgb(102, 153, 97);
  --color-accent-2: rgb(102, 153, 97);
  --color-accent-hsl: 24.4, 90.8%, 61.8%;
  --color-accent-rgb: 102, 153, 97;
  --color-accent-rgb-d: 102, 153, 97;
  --color-accent-rgb-l: 246, 141, 69;
  --color-green-rgb: 102, 153, 97;
  --color-red-rgb: 197, 65, 40;
  --color-yellow-rgb: 243, 189, 79;
  --custom-accent-color: 102, 153, 97;
  --cyan: rgb(99, 99, 99);
  --cyan-10: rgb(240, 240, 240);
  --cyan-100: rgb(0, 0, 0);
  --cyan-20: rgb(217, 217, 217);
  --cyan-30: rgb(179, 179, 179);
  --cyan-40: rgb(126, 126, 126);
  --cyan-50: rgb(99, 99, 99);
  --cyan-60: rgb(62, 62, 62);
  --cyan-70: rgb(32, 32, 32);
  --cyan-80: rgb(0, 0, 0);
  --cyan-90: rgb(0, 0, 0);
  --divider-color: rgb(58, 56, 56);
  --divider-color-hover: rgb(102, 153, 97);
  --duration-fast-1: 70ms;
  --duration-fast-2: 110ms;
  --duration-moderate-1: 150ms;
  --duration-moderate-2: 240ms;
  --duration-slow-1: 400ms;
  --duration-slow-2: 700ms;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  --embed-block-shadow-hover: 0 0 0 1px rgb(58, 56, 56), inset 0 0 0 1px rgb(58, 56, 56);
  --embed-border-color: rgb(102, 153, 97);
  --embed-border-left: 1px solid rgb(102, 153, 97);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(102, 153, 97);
  --embed-border-width: 1px;
  --field-1: rgb(38, 38, 37);
  --field-hover-1: rgb(58, 56, 56);
  --file-header-background: rgb(22, 22, 22);
  --file-header-background-focused: rgb(22, 22, 22);
  --file-header-font: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 12px;
  --file-line-width: 40rem;
  --flair-color: rgb(244, 244, 240);
  --focus: rgb(62, 62, 62);
  --focus-inset: rgb(22, 22, 22);
  --focus-inverse: rgb(253, 254, 254);
  --font-editor: ??, '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-editor-theme: ??;
  --font-interface: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: inter, sans-serif;
  --font-mermaid: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: menlo, sfmono-regular, consolas, "Roboto Mono", monospace;
  --font-print: '??', '??', inter, sans-serif, 'Arial';
  --font-scale-0: 1rem;
  --font-scale-00: 0.875rem;
  --font-scale-000: 0.75rem;
  --font-scale-1: 1.125rem;
  --font-scale-10: 3.75rem;
  --font-scale-2: 1.25rem;
  --font-scale-3: 1.5rem;
  --font-scale-4: 1.75rem;
  --font-scale-5: 2rem;
  --font-scale-6: 2.25rem;
  --font-scale-7: 2.625rem;
  --font-scale-8: 3rem;
  --font-scale-9: 3.375rem;
  --font-text: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: inter, sans-serif;
  --font-ui-large: 18px;
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --footnote-divider-color: rgb(58, 56, 56);
  --footnote-id-color: rgb(199, 197, 194);
  --footnote-id-color-no-occurrences: rgb(112, 110, 109);
  --footnote-input-background-active: rgba(142, 140, 139, 0.16);
  --graph-line: rgb(58, 56, 56);
  --graph-node: rgb(199, 197, 194);
  --graph-node-attachment: rgb(79, 79, 79);
  --graph-node-focused: rgb(102, 153, 97);
  --graph-node-tag: rgb(41, 41, 41);
  --graph-node-unresolved: rgb(112, 110, 109);
  --graph-text: rgb(244, 244, 240);
  --gray-10: 244, 244, 240;
  --gray-100: 22, 22, 22;
  --gray-20: 226, 224, 220;
  --gray-30: 199, 197, 194;
  --gray-40: 169, 168, 165;
  --gray-50: 142, 140, 139;
  --gray-60: 112, 110, 109;
  --gray-70: 84, 81, 81;
  --gray-80: 58, 56, 56;
  --gray-90: 38, 38, 37;
  --green: rgb(97, 97, 97);
  --green-10: rgb(228, 228, 228);
  --green-100: rgb(0, 0, 0);
  --green-20: rgb(183, 183, 183);
  --green-30: rgb(134, 134, 134);
  --green-40: rgb(110, 110, 110);
  --green-50: rgb(97, 97, 97);
  --green-60: rgb(64, 64, 64);
  --green-70: rgb(29, 29, 29);
  --green-80: rgb(0, 0, 0);
  --green-90: rgb(0, 0, 0);
  --h1-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h1-size: 2em;
  --h1-weight: 600;
  --h2-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-size: 1.75em;
  --h2-weight: 600;
  --h3-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-size: 1.5em;
  --h3-weight: 600;
  --h4-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --heading-counter: " ";
  --heading-formatting: rgb(112, 110, 109);
  --highlight: rgba(102, 153, 97, 0.7);
  --hr-color: rgb(58, 56, 56);
  --hr-thickness: 1.5px;
  --icon-color: rgb(112, 110, 109);
  --icon-color-active: rgb(102, 153, 97);
  --icon-color-focused: rgb(244, 244, 240);
  --icon-color-hover: rgb(199, 197, 194);
  --icon-inverse: rgb(22, 22, 22);
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-on-color: rgb(253, 254, 254);
  --icon-opacity: 1;
  --icon-primary: rgb(244, 244, 240);
  --icon-s-stroke-width: 1px;
  --icon-secondary: rgb(199, 197, 194);
  --icon-size: 16px;
  --icon-stroke: 1.25px;
  --icon-xs: 16px;
  --icon-xs-stroke-width: 1px;
  --indentation-guide: rgb(255, 255, 255 0.15);
  --indentation-guide-active: rgb(255, 255, 255 0.3);
  --inline-title-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --inline-title-size: 2em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(112, 110, 109);
  --input-height: 32px;
  --input-placeholder-color: rgb(112, 110, 109);
  --input-radius: 4px;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0px 0.5px 0.4px rgb(0, 0, 0), 0px 0.8px 0.7px -1px rgb(0, 0, 0), 0px 1.9px 1.7px -2px rgb(0, 0, 0), 0px 4.5px 4px -3px rgb(0, 0, 0), 0.1px 9.4px 8.4px -4.1px rgb(0, 0, 0);
  --input-shadow-hover: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0px 0.5px 0.5px rgb(0, 0, 0), 0px 0.9px 0.8px -1px rgb(0, 0, 0), 0px 1.9px 1.7px -2px rgb(0, 0, 0), 0px 4.5px 4.1px -3px rgb(0, 0, 0), 0.1px 9.4px 8.5px -4px rgb(0, 0, 0);
  --interactive: rgb(102, 153, 97);
  --interactive-accent: rgb(102, 153, 97);
  --interactive-accent-hover: rgb(102, 153, 97);
  --interactive-accent-hsl: 24.4, 90.8%, 61.8%;
  --lavender: rgb(119, 119, 119);
  --lavender-10: rgb(243, 243, 243);
  --lavender-100: rgb(0, 0, 0);
  --lavender-20: rgb(217, 217, 217);
  --lavender-30: rgb(189, 189, 189);
  --lavender-40: rgb(154, 154, 154);
  --lavender-50: rgb(119, 119, 119);
  --lavender-60: rgb(81, 81, 81);
  --lavender-70: rgb(47, 47, 47);
  --lavender-80: rgb(8, 8, 8);
  --lavender-90: rgb(0, 0, 0);
  --layer-1: rgb(38, 38, 37);
  --layer-2: rgb(58, 56, 56);
  --layer-active-1: rgb(84, 81, 81);
  --layer-active-2: rgb(112, 110, 109);
  --layer-hover-1: rgba(58, 56, 56, 0.5);
  --layer-hover-2: rgba(84, 81, 81, 0.5);
  --layer-selected-1: rgb(58, 56, 56);
  --layer-selected-2: rgb(84, 81, 81);
  --layer-selected-hover-1: rgba(84, 81, 81, 0.5);
  --layer-selected-hover-2: rgba(112, 110, 109, 0.5);
  --leading-0: 1em;
  --leading-1: 1.125em;
  --leading-10: 2.75em;
  --leading-2: 1.25em;
  --leading-3: 1.375em;
  --leading-4: 1.5em;
  --leading-5: 1.625em;
  --leading-6: 1.75em;
  --leading-7: 1.875em;
  --leading-8: 2.25em;
  --leading-9: 2.5em;
  --link-color: rgb(102, 153, 97);
  --link-color-hover: rgb(102, 153, 97);
  --link-external-color: rgb(102, 153, 97);
  --link-external-color-hover: rgb(102, 153, 97);
  --link-external-style: normal;
  --link-style: normal;
  --link-text-transform: none;
  --link-unresolved-color: rgb(102, 153, 97);
  --link-unresolved-opacity: 0.6;
  --list-bullet-border-triangle: 3px;
  --list-bullet-height-bullet-operator: 1px;
  --list-bullet-height-em-dash: 1.5px;
  --list-bullet-height-hyphen: 1.5px;
  --list-bullet-height-triangle: 0px;
  --list-bullet-radius: 0;
  --list-bullet-size: 4px;
  --list-bullet-size-ring: 3px;
  --list-bullet-width-bullet-operator: 1px;
  --list-bullet-width-em-dash: 10px;
  --list-bullet-width-hyphen: 5px;
  --list-bullet-width-triangle: 6px;
  --list-indent: 1.5em;
  --list-marker-color: rgb(112, 110, 109);
  --list-marker-color-collapsed: rgb(102, 153, 97);
  --list-marker-color-hover: rgb(199, 197, 194);
  --menu-background: rgb(22, 22, 22);
  --menu-border-color: rgb(58, 56, 56);
  --metadata-border-color: rgb(58, 56, 56);
  --metadata-divider-color: rgb(58, 56, 56);
  --metadata-input-background-active: rgba(142, 140, 139, 0.16);
  --metadata-input-font: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(244, 244, 240);
  --metadata-label-background-active: rgba(142, 140, 139, 0.16);
  --metadata-label-font: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(199, 197, 194);
  --metadata-label-text-color-hover: rgb(199, 197, 194);
  --metadata-property-background-active: rgba(142, 140, 139, 0.16);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(62, 62, 62);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(58, 56, 56);
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 12px;
  --modal-background: rgb(22, 22, 22);
  --modal-border-color: rgb(58, 56, 56);
  --modal-radius: 10px;
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1);
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9);
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1);
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9);
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --nav-collapse-icon-color: rgb(112, 110, 109);
  --nav-collapse-icon-color-collapsed: rgb(112, 110, 109);
  --nav-heading-color: rgb(244, 244, 240);
  --nav-heading-color-collapsed: rgb(112, 110, 109);
  --nav-heading-color-collapsed-hover: rgb(199, 197, 194);
  --nav-heading-color-hover: rgb(244, 244, 240);
  --nav-item-background-active: rgba(142, 140, 139, 0.24);
  --nav-item-background-hover: rgba(142, 140, 139, 0.16);
  --nav-item-background-selected: hsl(24.4, 90.8%, 61.8% 0.2);
  --nav-item-color: rgb(199, 197, 194);
  --nav-item-color-active: rgb(244, 244, 240);
  --nav-item-color-highlighted: rgb(102, 153, 97);
  --nav-item-color-hover: rgb(244, 244, 240);
  --nav-item-color-selected: rgb(244, 244, 240);
  --nav-item-size: 12px;
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(112, 110, 109);
  --nav-tag-color-active: rgb(199, 197, 194);
  --nav-tag-color-hover: rgb(199, 197, 194);
  --orange: rgb(70, 70, 70);
  --orange-10: rgb(231, 231, 231);
  --orange-100: rgb(0, 0, 0);
  --orange-20: rgb(196, 196, 196);
  --orange-30: rgb(113, 113, 113);
  --orange-40: rgb(70, 70, 70);
  --orange-50: rgb(54, 54, 54);
  --orange-60: rgb(46, 46, 46);
  --orange-70: rgb(36, 36, 36);
  --orange-80: rgb(11, 11, 11);
  --orange-90: rgb(0, 0, 0);
  --overlay: rgba(22, 22, 22, 0.7);
  --pdf-background: rgb(22, 22, 22);
  --pdf-page-background: rgb(22, 22, 22);
  --pdf-shadow: 0 0 0 1px rgb(58, 56, 56);
  --pdf-sidebar-background: rgb(22, 22, 22);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(58, 56, 56);
  --pill-border-color: rgb(58, 56, 56);
  --pill-border-color-hover: rgb(58, 56, 56);
  --pill-color: rgb(199, 197, 194);
  --pill-color-hover: rgb(244, 244, 240);
  --pill-color-remove: rgb(112, 110, 109);
  --pill-color-remove-hover: rgb(102, 153, 97);
  --pink: rgb(91, 91, 91);
  --pink-10: rgb(240, 240, 240);
  --pink-100: rgb(0, 0, 0);
  --pink-20: rgb(214, 214, 214);
  --pink-30: rgb(180, 180, 180);
  --pink-40: rgb(136, 136, 136);
  --pink-50: rgb(91, 91, 91);
  --pink-60: rgb(47, 47, 47);
  --pink-70: rgb(26, 26, 26);
  --pink-80: rgb(11, 11, 11);
  --pink-90: rgb(0, 0, 0);
  --pistachio: rgb(25, 25, 25);
  --pistachio-10: rgb(231, 231, 231);
  --pistachio-100: rgb(0, 0, 0);
  --pistachio-20: rgb(192, 192, 192);
  --pistachio-30: rgb(140, 140, 140);
  --pistachio-40: rgb(70, 70, 70);
  --pistachio-50: rgb(25, 25, 25);
  --pistachio-60: rgb(0, 0, 0);
  --pistachio-70: rgb(0, 0, 0);
  --pistachio-80: rgb(0, 0, 0);
  --pistachio-90: rgb(0, 0, 0);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(22, 22, 22);
  --prompt-border-color: rgb(58, 56, 56);
  --radius-l: 10px;
  --red: rgb(41, 41, 41);
  --red-10: rgb(235, 235, 235);
  --red-100: rgb(0, 0, 0);
  --red-20: rgb(204, 204, 204);
  --red-30: rgb(158, 158, 158);
  --red-40: rgb(106, 106, 106);
  --red-50: rgb(53, 53, 53);
  --red-60: rgb(41, 41, 41);
  --red-70: rgb(36, 36, 36);
  --red-80: rgb(11, 11, 11);
  --red-90: rgb(0, 0, 0);
  --ribbon-background: rgb(22, 22, 22);
  --ribbon-background-collapsed: rgb(22, 22, 22);
  --scrollbar-active-thumb-bg: rgb(255, 255, 255 0.2);
  --scrollbar-bg: rgb(255, 255, 255 0.05);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgb(255, 255, 255 0.1);
  --search-clear-button-color: rgb(199, 197, 194);
  --search-icon-color: rgb(199, 197, 194);
  --search-result-background: rgb(22, 22, 22);
  --setting-group-heading-color: rgb(244, 244, 240);
  --setting-group-heading-size: 14px;
  --setting-items-background: rgb(38, 38, 37);
  --setting-items-border-color: rgb(58, 56, 56);
  --setting-items-radius: 10px;
  --shadow-color: 0deg 0% 1%;
  --sidebar-markdown-font-size: 0.933em;
  --size-0: 0px;
  --size-1: 2px;
  --size-10: 64px;
  --size-11: 80px;
  --size-12: 96px;
  --size-13: 160px;
  --size-2: 4px;
  --size-3: 8px;
  --size-4: 12px;
  --size-5: 16px;
  --size-6: 24px;
  --size-7: 32px;
  --size-8: 40px;
  --size-9: 48px;
  --slider-thumb-border-color: rgb(58, 56, 56);
  --slider-thumb-radius: 50%;
  --slider-thumb-y: -7px;
  --slider-track-background: rgb(58, 56, 56);
  --status-bar-background: rgb(22, 22, 22);
  --status-bar-border-color: rgb(58, 56, 56);
  --status-bar-text-color: rgb(199, 197, 194);
  --suggestion-background: rgb(22, 22, 22);
  --tab-background-active: rgb(22, 22, 22);
  --tab-container-background: rgb(22, 22, 22);
  --tab-curve: 0px;
  --tab-divider-color: rgb(58, 56, 56);
  --tab-font-size: 12px;
  --tab-outline-color: rgb(58, 56, 56);
  --tab-stacked-font-size: 12px;
  --tab-switcher-background: rgb(22, 22, 22);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(22, 22, 22), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(102, 153, 97);
  --tab-text-color: rgb(112, 110, 109);
  --tab-text-color-active: rgb(199, 197, 194);
  --tab-text-color-focused: rgb(112, 110, 109);
  --tab-text-color-focused-active: rgb(244, 244, 240);
  --tab-text-color-focused-active-current: rgb(244, 244, 240);
  --tab-text-color-focused-highlighted: rgb(102, 153, 97);
  --table-add-button-border-color: rgb(58, 56, 56);
  --table-border-color: rgb(58, 56, 56);
  --table-drag-handle-background-active: rgb(102, 153, 97);
  --table-drag-handle-color: rgb(112, 110, 109);
  --table-drag-handle-color-active: rgb(253, 254, 254);
  --table-header-border-color: rgb(58, 56, 56);
  --table-header-color: rgb(199, 197, 194);
  --table-header-size: 0.875em;
  --table-header-weight: 600;
  --table-hover-highlight-color: rgb(102, 153, 97 0.15);
  --table-selection: rgba(246, 142, 70, 0.1);
  --table-selection-border-color: rgb(102, 153, 97);
  --table-sticky-height: 600px;
  --tag-background: rgb(102, 153, 97 0.15);
  --tag-background-hover: rgb(102, 153, 97 0.25);
  --tag-border-color: rgb(102, 153, 97 0.15);
  --tag-border-color-hover: rgb(102, 153, 97 0.25);
  --tag-color: rgb(102, 153, 97);
  --tag-color-hover: rgb(102, 153, 97);
  --text-accent: rgb(102, 153, 97);
  --text-accent-hover: rgb(102, 153, 97);
  --text-code: rgb(91, 91, 91);
  --text-error: rgb(41, 41, 41);
  --text-faint: rgb(112, 110, 109);
  --text-highlight-bg: rgba(102, 153, 97, 0.7);
  --text-highlight-bg-active: rgba(102, 153, 97, 0.7);
  --text-muted: rgb(199, 197, 194);
  --text-normal: rgb(244, 244, 240);
  --text-on-accent: rgb(253, 254, 254);
  --text-placeholder: rgb(112, 110, 109);
  --text-primary: rgb(244, 244, 240);
  --text-secondary: rgb(199, 197, 194);
  --text-selection: rgba(102, 153, 97, 0.5);
  --text-success: rgb(97, 97, 97);
  --titlebar-background: rgb(22, 22, 22);
  --titlebar-background-focused: rgb(22, 22, 22);
  --titlebar-border-color: rgb(58, 56, 56);
  --titlebar-text-color: rgb(199, 197, 194);
  --titlebar-text-color-focused: rgb(244, 244, 240);
  --titlebar-text-color-highlighted: rgb(102, 153, 97);
  --toggle-radius: 100vmax;
  --toggle-s-thumb-height: 14px;
  --toggle-s-thumb-width: 14px;
  --toggle-s-width: 32px;
  --toggle-thumb-color: rgb(253, 254, 254);
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 48px;
  --tracking-0: 0px;
  --tracking-1: 0.16px;
  --tracking-2: 0.32px;
  --tracking-3: 0.64px;
  --tracking-4: 0.96px;
  --vault-name-color: rgb(244, 244, 240);
  --vault-name-font-size: 14px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(244, 244, 240);
  --vault-profile-color-hover: rgb(244, 244, 240);
  --vault-profile-font-size: 12px;
  --viridian: rgb(92, 92, 92);
  --viridian-10: rgb(240, 240, 240);
  --viridian-100: rgb(0, 0, 0);
  --viridian-20: rgb(212, 212, 212);
  --viridian-30: rgb(180, 180, 180);
  --viridian-40: rgb(140, 140, 140);
  --viridian-50: rgb(92, 92, 92);
  --viridian-60: rgb(60, 60, 60);
  --viridian-70: rgb(29, 29, 29);
  --viridian-80: rgb(0, 0, 0);
  --viridian-90: rgb(0, 0, 0);
  --white: 253, 254, 254;
  --yellow: rgb(79, 79, 79);
  --yellow-10: rgb(210, 210, 210);
  --yellow-100: rgb(0, 0, 0);
  --yellow-20: rgb(159, 159, 159);
  --yellow-30: rgb(79, 79, 79);
  --yellow-40: rgb(37, 37, 37);
  --yellow-50: rgb(0, 0, 0);
  --yellow-60: rgb(0, 0, 0);
  --yellow-70: rgb(0, 0, 0);
  --yellow-80: rgb(0, 0, 0);
  --yellow-90: rgb(0, 0, 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 56, 56);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 22);
  border-left-color: rgb(58, 56, 56);
  color: rgb(244, 244, 240);
}

body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}`,
    typography: `body .page article p > b, b {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body .page article p > em, em {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body .page article p > i, i {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body .page article p > strong, strong {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
  transition: background-size, 0.4s;
}

body del {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration: line-through rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body p {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(199, 197, 194) none 0px;
  text-decoration: rgb(199, 197, 194);
  text-decoration-color: rgb(199, 197, 194);
}`,
    links: `body a.external, footer a {
  color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 153, 97) none 0px;
  text-decoration: underline rgb(102, 153, 97);
  text-decoration-color: rgb(102, 153, 97);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 153, 97) none 0px;
  text-decoration: underline rgb(102, 153, 97);
  text-decoration-color: rgb(102, 153, 97);
}

body a.internal.broken {
  color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 153, 97) none 0px;
  text-decoration: underline rgb(102, 153, 97);
  text-decoration-color: rgb(102, 153, 97);
}`,
    lists: `body dd {
  color: rgb(244, 244, 240);
}

body dt {
  color: rgb(244, 244, 240);
}

body ol > li {
  color: rgb(244, 244, 240);
}

body ol.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body ul > li {
  color: rgb(244, 244, 240);
}

body ul.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 110, 109);
  text-decoration: rgb(112, 110, 109);
}

body blockquote {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body table {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 602px;
}

body td {
  border-bottom-color: rgb(244, 244, 240);
  border-bottom-width: 0px;
  border-left-color: rgb(244, 244, 240);
  border-left-width: 0px;
  border-right-color: rgb(244, 244, 240);
  border-right-width: 0px;
  border-top-color: rgb(244, 244, 240);
  border-top-width: 0px;
  color: rgb(244, 244, 240);
  padding-left: 16px;
}

body th {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(58, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(58, 56, 56);
  border-top-width: 0px;
  color: rgb(199, 197, 194);
  padding-left: 16px;
}`,
    code: `body code {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: rgb(244, 244, 240);
}

body pre > code > [data-line] {
  border-left-color: rgb(254, 184, 113);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(254, 184, 113);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(254, 184, 113);
  border-left-color: rgb(254, 184, 113);
  border-right-color: rgb(254, 184, 113);
  border-top-color: rgb(254, 184, 113);
}

body pre > code, pre:has(> code) {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
}

body pre:has(> code) {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
}`,
    images: `body audio {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body figcaption {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body img {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body video {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    embeds: `body .file-embed {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
}

body .footnotes {
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

body .transclude {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(102, 153, 97);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body .transclude-inner {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(102, 153, 97);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 110, 109);
  text-decoration: line-through rgb(112, 110, 109);
  text-decoration-color: rgb(112, 110, 109);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 110, 109);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: box-shadow 0.24s cubic-bezier(0, 0, 0.3, 1);
}

body li.task-list-item[data-task='!'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='*'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='-'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='/'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='>'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='?'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='I'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='S'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='b'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='c'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='d'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='f'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='i'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='k'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='l'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='p'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='u'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body li.task-list-item[data-task='w'] {
  color: rgb(244, 244, 240);
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

body .callout > .callout-content {
  padding-left: 24px;
  padding-right: 12px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

body .callout[data-callout="bug"] {
  --callout-color: 236, 90, 118;
  background-color: rgba(236, 90, 118, 0.2);
  border-bottom-color: rgba(236, 90, 118, 0.3);
  border-left-color: rgba(236, 90, 118, 0.3);
  border-right-color: rgba(236, 90, 118, 0.3);
  border-top-color: rgba(236, 90, 118, 0.3);
}

body .callout[data-callout="danger"] {
  --callout-color: 243, 90, 55;
  background-color: rgba(243, 90, 55, 0.2);
  border-bottom-color: rgba(243, 90, 55, 0.3);
  border-left-color: rgba(243, 90, 55, 0.3);
  border-right-color: rgba(243, 90, 55, 0.3);
  border-top-color: rgba(243, 90, 55, 0.3);
}

body .callout[data-callout="example"] {
  --callout-color: 165, 119, 218;
  background-color: rgba(165, 119, 218, 0.2);
  border-bottom-color: rgba(165, 119, 218, 0.3);
  border-left-color: rgba(165, 119, 218, 0.3);
  border-right-color: rgba(165, 119, 218, 0.3);
  border-top-color: rgba(165, 119, 218, 0.3);
}

body .callout[data-callout="failure"] {
  --callout-color: 226, 105, 52;
  background-color: rgba(226, 105, 52, 0.2);
  border-bottom-color: rgba(226, 105, 52, 0.3);
  border-left-color: rgba(226, 105, 52, 0.3);
  border-right-color: rgba(226, 105, 52, 0.3);
  border-top-color: rgba(226, 105, 52, 0.3);
}

body .callout[data-callout="info"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

body .callout[data-callout="note"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

body .callout[data-callout="question"] {
  --callout-color: 141, 147, 25;
  background-color: rgba(141, 147, 25, 0.2);
  border-bottom-color: rgba(141, 147, 25, 0.3);
  border-left-color: rgba(141, 147, 25, 0.3);
  border-right-color: rgba(141, 147, 25, 0.3);
  border-top-color: rgba(141, 147, 25, 0.3);
}

body .callout[data-callout="quote"] {
  --callout-color: 142, 140, 139;
  background-color: rgba(142, 140, 139, 0.2);
  border-bottom-color: rgba(142, 140, 139, 0.3);
  border-left-color: rgba(142, 140, 139, 0.3);
  border-right-color: rgba(142, 140, 139, 0.3);
  border-top-color: rgba(142, 140, 139, 0.3);
}

body .callout[data-callout="success"] {
  --callout-color: 102, 153, 97;
  background-color: rgba(102, 153, 97, 0.2);
  border-bottom-color: rgba(102, 153, 97, 0.3);
  border-left-color: rgba(102, 153, 97, 0.3);
  border-right-color: rgba(102, 153, 97, 0.3);
  border-top-color: rgba(102, 153, 97, 0.3);
}

body .callout[data-callout="tip"] {
  --callout-color: 92, 153, 124;
  background-color: rgba(92, 153, 124, 0.2);
  border-bottom-color: rgba(92, 153, 124, 0.3);
  border-left-color: rgba(92, 153, 124, 0.3);
  border-right-color: rgba(92, 153, 124, 0.3);
  border-top-color: rgba(92, 153, 124, 0.3);
}

body .callout[data-callout="todo"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

body .callout[data-callout="warning"] {
  --callout-color: 184, 131, 0;
  background-color: rgba(184, 131, 0, 0.2);
  border-bottom-color: rgba(184, 131, 0, 0.3);
  border-left-color: rgba(184, 131, 0, 0.3);
  border-right-color: rgba(184, 131, 0, 0.3);
  border-top-color: rgba(184, 131, 0, 0.3);
}`,
    search: `body .search > .search-button {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(112, 110, 109);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(58, 56, 56);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(244, 244, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(244, 244, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.16);
  color: rgb(244, 244, 240);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(58, 56, 56);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(142, 140, 139, 0.16);
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.16);
  color: rgb(244, 244, 240);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(102, 153, 97);
  border-left-color: rgb(102, 153, 97);
  border-right-color: rgb(102, 153, 97);
  border-top-color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(102, 153, 97);
}

body h1 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
}`,
    scrollbars: `body .callout {
  --callout-color: 104, 145, 181;
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  padding-bottom: 16px;
  padding-left: 12px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(199, 197, 194);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(199, 197, 194);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(199, 197, 194);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(142, 140, 139, 0.24);
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  color: rgb(112, 110, 109);
}`,
    footer: `body footer {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(199, 197, 194);
  text-decoration: rgb(199, 197, 194);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(199, 197, 194);
  text-decoration: rgb(199, 197, 194);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body li.section-li > .section .meta {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(199, 197, 194);
  text-decoration: rgb(199, 197, 194);
}

body ul.section-ul {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  color: rgb(112, 110, 109);
}

body .darkmode svg {
  color: rgb(112, 110, 109);
  stroke: rgb(112, 110, 109);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
}

body .breadcrumb-element p {
  color: rgb(112, 110, 109);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

body .metadata {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(22, 22, 22);
}

body .page-header h2.page-title {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(244, 244, 240);
  text-decoration: underline dotted rgb(244, 244, 240);
}

body details {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body input[type=text] {
  border-bottom-color: rgb(112, 110, 109);
  border-bottom-width: 1px;
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

body sub {
  color: rgb(244, 244, 240);
}

body summary {
  color: rgb(244, 244, 240);
}

body sup {
  color: rgb(244, 244, 240);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 24.4;
  --accent-l: 61.8%;
  --accent-s: 90.8%;
  --active-line-accent: transparent;
  --aside-background: transparent;
  --aside-background-hover: rgba(142, 140, 139, 0.12);
  --aside-border-color: rgb(226, 224, 220);
  --aside-text-color: rgb(84, 81, 81);
  --background: rgb(244, 244, 240);
  --background-active: rgba(142, 140, 139, 0.32);
  --background-hover: rgba(142, 140, 139, 0.12);
  --background-inverse: rgb(58, 56, 56);
  --background-inverse-hover: rgba(84, 81, 81, 0.5);
  --background-modifier-active-hover: rgba(246, 141, 69, 0.15);
  --background-modifier-border: rgb(226, 224, 220);
  --background-modifier-border-focus: rgb(62, 62, 62);
  --background-modifier-border-hover: rgb(226, 224, 220);
  --background-modifier-cover: rgba(142, 140, 139, 0.12);
  --background-modifier-error: rgb(41, 41, 41);
  --background-modifier-error-hover: rgb(41, 41, 41);
  --background-modifier-error-rgb: 197, 65, 40;
  --background-modifier-form-field: rgb(253, 254, 254);
  --background-modifier-form-field-hover: rgb(253, 254, 254);
  --background-modifier-hover: rgba(142, 140, 139, 0.12);
  --background-modifier-message: rgb(253, 254, 254);
  --background-modifier-success: rgb(97, 97, 97);
  --background-modifier-success-rgb: 102, 153, 97;
  --background-primary: rgb(244, 244, 240);
  --background-primary-alt: rgb(253, 254, 254);
  --background-secondary: rgb(244, 244, 240);
  --background-secondary-alt: rgb(244, 244, 240);
  --background-selected: rgba(142, 140, 139, 0.2);
  --background-selected-hover: rgba(142, 140, 139, 0.32);
  --bases-cards-background: rgb(244, 244, 240);
  --bases-cards-cover-background: rgb(253, 254, 254);
  --bases-cards-shadow: 0 0 0 1px rgb(226, 224, 220);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(226, 224, 220);
  --bases-embed-border-color: rgb(226, 224, 220);
  --bases-group-heading-property-color: rgb(84, 81, 81);
  --bases-table-border-color: rgb(226, 224, 220);
  --bases-table-cell-background-active: rgb(244, 244, 240);
  --bases-table-cell-background-disabled: rgb(253, 254, 254);
  --bases-table-cell-background-selected: rgba(246, 142, 70, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(62, 62, 62);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(246, 141, 69);
  --bases-table-group-background: rgb(253, 254, 254);
  --bases-table-header-background: rgb(244, 244, 240);
  --bases-table-header-background-hover: rgba(142, 140, 139, 0.12);
  --bases-table-header-color: rgb(84, 81, 81);
  --bases-table-summary-background: rgb(244, 244, 240);
  --bases-table-summary-background-hover: rgba(142, 140, 139, 0.12);
  --black: 0, 0, 0;
  --blockquote-border-color: rgb(226, 224, 220);
  --blockquote-border-thickness: 0px;
  --blockquote-size: 0.9rem;
  --blue: rgb(84, 84, 84);
  --blue-10: rgb(240, 240, 240);
  --blue-100: rgb(0, 0, 0);
  --blue-20: rgb(217, 217, 217);
  --blue-30: rgb(182, 182, 182);
  --blue-40: rgb(134, 134, 134);
  --blue-50: rgb(105, 105, 105);
  --blue-60: rgb(84, 84, 84);
  --blue-70: rgb(50, 50, 50);
  --blue-80: rgb(26, 26, 26);
  --blue-90: rgb(7, 7, 7);
  --blur-background: color-mix(in srgb, rgb(244, 244, 240) 65%, transparent) linear-gradient(rgb(244, 244, 240), color-mix(in srgb, rgb(244, 244, 240) 65%, transparent));
  --border-inverse: rgb(22, 22, 22);
  --border-strong-1: rgb(142, 140, 139);
  --border-strong-2: rgb(142, 140, 139);
  --border-subtle-0: rgb(226, 224, 220);
  --border-subtle-1: rgb(226, 224, 220);
  --border-subtle-2: rgb(226, 224, 220);
  --border-subtle-selected-1: rgb(199, 197, 194);
  --border-subtle-selected-2: rgb(199, 197, 194);
  --button-radius: 4px;
  --calendar-dot: rgb(70, 70, 70);
  --calendar-dot-hover: rgb(41, 41, 41);
  --callout-border-opacity: 30%;
  --callout-bug: 197, 65, 40;
  --callout-error: 197, 65, 40;
  --callout-fail: 197, 65, 40;
  --callout-padding: 16px 12px 12px 24px;
  --callout-success: 102, 153, 97;
  --callout-title-background: transparent;
  --canvas-background: rgb(244, 244, 240);
  --canvas-card-label-color: rgb(169, 168, 165);
  --canvas-color-1: 197, 65, 40;
  --canvas-color-3: 243, 189, 79;
  --canvas-color-4: 102, 153, 97;
  --canvas-controls-icon-stroke: 1px;
  --caret-color: rgb(22, 22, 22);
  --checkbox-border-color: rgb(169, 168, 165);
  --checkbox-border-color-hover: rgb(102, 153, 97);
  --checkbox-checked-color-hover: rgba(102, 153, 97, 0.9);
  --checkbox-color: rgb(102, 153, 97);
  --checkbox-color-hover: rgb(102, 153, 97 0.5);
  --checkbox-color-rgb: 102, 153, 97;
  --checkbox-marker-color: rgb(244, 244, 240);
  --checkbox-radius: 16px;
  --checklist-done-color: rgb(169, 168, 165);
  --checklist-done-strike-color: rgb(169, 168, 165);
  --code-background: rgba(226, 224, 220, 0.5);
  --code-border-color: rgb(226, 224, 220);
  --code-bracket-background: rgba(142, 140, 139, 0.12);
  --code-comment: rgb(169, 168, 165);
  --code-function: rgb(70, 70, 70);
  --code-important: rgb(119, 119, 119);
  --code-keyword: rgb(91, 91, 91);
  --code-normal: rgb(84, 81, 81);
  --code-normal-inline: rgb(91, 91, 91);
  --code-property: rgb(99, 99, 99);
  --code-punctuation: rgb(84, 81, 81);
  --code-string: rgb(97, 97, 97);
  --code-tag: rgb(41, 41, 41);
  --code-value: rgb(119, 119, 119);
  --collapse-icon-color: rgb(169, 168, 165);
  --collapse-icon-color-collapsed: rgb(246, 141, 69);
  --color-accent: rgb(246, 141, 69);
  --color-accent-1: rgb(246, 141, 69);
  --color-accent-2: rgb(246, 141, 69);
  --color-accent-hsl: 24.4, 90.8%, 61.8%;
  --color-accent-rgb: 246, 141, 69;
  --color-accent-rgb-d: 102, 153, 97;
  --color-accent-rgb-l: 246, 141, 69;
  --color-green-rgb: 102, 153, 97;
  --color-red-rgb: 197, 65, 40;
  --color-yellow-rgb: 243, 189, 79;
  --custom-accent-color: 102, 153, 97;
  --cyan: rgb(99, 99, 99);
  --cyan-10: rgb(240, 240, 240);
  --cyan-100: rgb(0, 0, 0);
  --cyan-20: rgb(217, 217, 217);
  --cyan-30: rgb(179, 179, 179);
  --cyan-40: rgb(126, 126, 126);
  --cyan-50: rgb(99, 99, 99);
  --cyan-60: rgb(62, 62, 62);
  --cyan-70: rgb(32, 32, 32);
  --cyan-80: rgb(0, 0, 0);
  --cyan-90: rgb(0, 0, 0);
  --divider-color: rgb(226, 224, 220);
  --divider-color-hover: rgb(246, 141, 69);
  --duration-fast-1: 70ms;
  --duration-fast-2: 110ms;
  --duration-moderate-1: 150ms;
  --duration-moderate-2: 240ms;
  --duration-slow-1: 400ms;
  --duration-slow-2: 700ms;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  --embed-block-shadow-hover: 0 0 0 1px rgb(226, 224, 220), inset 0 0 0 1px rgb(226, 224, 220);
  --embed-border-color: rgb(246, 141, 69);
  --embed-border-left: 1px solid rgb(246, 141, 69);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(246, 141, 69);
  --embed-border-width: 1px;
  --field-1: rgb(253, 254, 254);
  --field-hover-1: rgb(226, 224, 220);
  --file-header-background: rgb(244, 244, 240);
  --file-header-background-focused: rgb(244, 244, 240);
  --file-header-font: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 12px;
  --file-line-width: 40rem;
  --flair-color: rgb(22, 22, 22);
  --focus: rgb(62, 62, 62);
  --focus-inset: rgb(253, 254, 254);
  --focus-inverse: rgb(253, 254, 254);
  --font-editor: ??, '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-editor-theme: ??;
  --font-interface: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: inter, sans-serif;
  --font-mermaid: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: menlo, sfmono-regular, consolas, "Roboto Mono", monospace;
  --font-print: '??', '??', inter, sans-serif, 'Arial';
  --font-scale-0: 1rem;
  --font-scale-00: 0.875rem;
  --font-scale-000: 0.75rem;
  --font-scale-1: 1.125rem;
  --font-scale-10: 3.75rem;
  --font-scale-2: 1.25rem;
  --font-scale-3: 1.5rem;
  --font-scale-4: 1.75rem;
  --font-scale-5: 2rem;
  --font-scale-6: 2.25rem;
  --font-scale-7: 2.625rem;
  --font-scale-8: 3rem;
  --font-scale-9: 3.375rem;
  --font-text: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: inter, sans-serif;
  --font-ui-large: 18px;
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --footnote-divider-color: rgb(226, 224, 220);
  --footnote-id-color: rgb(84, 81, 81);
  --footnote-id-color-no-occurrences: rgb(169, 168, 165);
  --footnote-input-background-active: rgba(142, 140, 139, 0.12);
  --graph-line: rgb(226, 224, 220);
  --graph-node: rgb(84, 81, 81);
  --graph-node-attachment: rgb(79, 79, 79);
  --graph-node-focused: rgb(246, 141, 69);
  --graph-node-tag: rgb(41, 41, 41);
  --graph-node-unresolved: rgb(169, 168, 165);
  --graph-text: rgb(22, 22, 22);
  --gray-10: 244, 244, 240;
  --gray-100: 22, 22, 22;
  --gray-20: 226, 224, 220;
  --gray-30: 199, 197, 194;
  --gray-40: 169, 168, 165;
  --gray-50: 142, 140, 139;
  --gray-60: 112, 110, 109;
  --gray-70: 84, 81, 81;
  --gray-80: 58, 56, 56;
  --gray-90: 38, 38, 37;
  --green: rgb(97, 97, 97);
  --green-10: rgb(228, 228, 228);
  --green-100: rgb(0, 0, 0);
  --green-20: rgb(183, 183, 183);
  --green-30: rgb(134, 134, 134);
  --green-40: rgb(110, 110, 110);
  --green-50: rgb(97, 97, 97);
  --green-60: rgb(64, 64, 64);
  --green-70: rgb(29, 29, 29);
  --green-80: rgb(0, 0, 0);
  --green-90: rgb(0, 0, 0);
  --h1-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h1-size: 2em;
  --h1-weight: 600;
  --h2-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-size: 1.75em;
  --h2-weight: 600;
  --h3-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-size: 1.5em;
  --h3-weight: 600;
  --h4-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --heading-counter: " ";
  --heading-formatting: rgb(169, 168, 165);
  --highlight: rgba(246, 141, 69, 0.7);
  --hr-color: rgb(226, 224, 220);
  --hr-thickness: 1.5px;
  --icon-color: rgb(169, 168, 165);
  --icon-color-active: rgb(246, 141, 69);
  --icon-color-focused: rgb(22, 22, 22);
  --icon-color-hover: rgb(84, 81, 81);
  --icon-inverse: rgb(253, 254, 254);
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-on-color: rgb(253, 254, 254);
  --icon-opacity: 1;
  --icon-primary: rgb(22, 22, 22);
  --icon-s-stroke-width: 1px;
  --icon-secondary: rgb(84, 81, 81);
  --icon-size: 16px;
  --icon-stroke: 1.25px;
  --icon-xs: 16px;
  --icon-xs-stroke-width: 1px;
  --indentation-guide: rgb(0, 0, 0 0.15);
  --indentation-guide-active: rgb(0, 0, 0 0.3);
  --inline-title-font: '??', inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --inline-title-size: 2em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(169, 168, 165);
  --input-height: 32px;
  --input-placeholder-color: rgb(169, 168, 165);
  --input-radius: 4px;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0px 0.5px 0.4px rgb(0, 0, 0), 0px 0.8px 0.7px -1px rgb(0, 0, 0), 0px 1.9px 1.7px -2px rgb(0, 0, 0), 0px 4.5px 4px -3px rgb(0, 0, 0), 0.1px 9.4px 8.4px -4.1px rgb(0, 0, 0);
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0px 0.5px 0.5px rgb(0, 0, 0), 0px 0.9px 0.8px -1px rgb(0, 0, 0), 0px 1.9px 1.7px -2px rgb(0, 0, 0), 0px 4.5px 4.1px -3px rgb(0, 0, 0), 0.1px 9.4px 8.5px -4px rgb(0, 0, 0);
  --interactive: rgb(246, 141, 69);
  --interactive-accent: rgb(246, 141, 69);
  --interactive-accent-hover: rgb(246, 141, 69);
  --interactive-accent-hsl: 24.4, 90.8%, 61.8%;
  --lavender: rgb(119, 119, 119);
  --lavender-10: rgb(243, 243, 243);
  --lavender-100: rgb(0, 0, 0);
  --lavender-20: rgb(217, 217, 217);
  --lavender-30: rgb(189, 189, 189);
  --lavender-40: rgb(154, 154, 154);
  --lavender-50: rgb(119, 119, 119);
  --lavender-60: rgb(81, 81, 81);
  --lavender-70: rgb(47, 47, 47);
  --lavender-80: rgb(8, 8, 8);
  --lavender-90: rgb(0, 0, 0);
  --layer-1: rgb(253, 254, 254);
  --layer-2: rgb(244, 244, 240);
  --layer-active-1: rgb(199, 197, 194);
  --layer-active-2: rgb(199, 197, 194);
  --layer-hover-1: rgb(244, 244, 240);
  --layer-hover-2: rgba(226, 224, 220, 0.5);
  --layer-selected-1: rgb(226, 224, 220);
  --layer-selected-2: rgb(226, 224, 220);
  --layer-selected-hover-1: rgba(199, 197, 194, 0.5);
  --layer-selected-hover-2: rgba(199, 197, 194, 0.5);
  --leading-0: 1em;
  --leading-1: 1.125em;
  --leading-10: 2.75em;
  --leading-2: 1.25em;
  --leading-3: 1.375em;
  --leading-4: 1.5em;
  --leading-5: 1.625em;
  --leading-6: 1.75em;
  --leading-7: 1.875em;
  --leading-8: 2.25em;
  --leading-9: 2.5em;
  --link-color: rgb(246, 141, 69);
  --link-color-hover: rgb(246, 141, 69);
  --link-external-color: rgb(246, 141, 69);
  --link-external-color-hover: rgb(246, 141, 69);
  --link-external-style: normal;
  --link-style: normal;
  --link-text-transform: none;
  --link-unresolved-color: rgb(246, 141, 69);
  --link-unresolved-opacity: 0.6;
  --list-bullet-border-triangle: 3px;
  --list-bullet-height-bullet-operator: 1px;
  --list-bullet-height-em-dash: 1.5px;
  --list-bullet-height-hyphen: 1.5px;
  --list-bullet-height-triangle: 0px;
  --list-bullet-radius: 0;
  --list-bullet-size: 4px;
  --list-bullet-size-ring: 3px;
  --list-bullet-width-bullet-operator: 1px;
  --list-bullet-width-em-dash: 10px;
  --list-bullet-width-hyphen: 5px;
  --list-bullet-width-triangle: 6px;
  --list-indent: 1.5em;
  --list-marker-color: rgb(169, 168, 165);
  --list-marker-color-collapsed: rgb(246, 141, 69);
  --list-marker-color-hover: rgb(84, 81, 81);
  --menu-background: rgb(244, 244, 240);
  --menu-border-color: rgb(226, 224, 220);
  --metadata-border-color: rgb(226, 224, 220);
  --metadata-divider-color: rgb(226, 224, 220);
  --metadata-input-background-active: rgba(142, 140, 139, 0.12);
  --metadata-input-font: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(22, 22, 22);
  --metadata-label-background-active: rgba(142, 140, 139, 0.12);
  --metadata-label-font: '??', inter, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(84, 81, 81);
  --metadata-label-text-color-hover: rgb(84, 81, 81);
  --metadata-property-background-active: rgba(142, 140, 139, 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(62, 62, 62);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(226, 224, 220);
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 12px;
  --modal-background: rgb(244, 244, 240);
  --modal-border-color: rgb(226, 224, 220);
  --modal-radius: 10px;
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1);
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9);
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1);
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9);
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --nav-collapse-icon-color: rgb(169, 168, 165);
  --nav-collapse-icon-color-collapsed: rgb(169, 168, 165);
  --nav-heading-color: rgb(22, 22, 22);
  --nav-heading-color-collapsed: rgb(169, 168, 165);
  --nav-heading-color-collapsed-hover: rgb(84, 81, 81);
  --nav-heading-color-hover: rgb(22, 22, 22);
  --nav-item-background-active: rgba(142, 140, 139, 0.2);
  --nav-item-background-hover: rgba(142, 140, 139, 0.12);
  --nav-item-background-selected: hsl(24.4, 90.8%, 61.8% 0.2);
  --nav-item-color: rgb(84, 81, 81);
  --nav-item-color-active: rgb(22, 22, 22);
  --nav-item-color-highlighted: rgb(246, 141, 69);
  --nav-item-color-hover: rgb(22, 22, 22);
  --nav-item-color-selected: rgb(22, 22, 22);
  --nav-item-size: 12px;
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(169, 168, 165);
  --nav-tag-color-active: rgb(84, 81, 81);
  --nav-tag-color-hover: rgb(84, 81, 81);
  --orange: rgb(70, 70, 70);
  --orange-10: rgb(231, 231, 231);
  --orange-100: rgb(0, 0, 0);
  --orange-20: rgb(196, 196, 196);
  --orange-30: rgb(113, 113, 113);
  --orange-40: rgb(70, 70, 70);
  --orange-50: rgb(54, 54, 54);
  --orange-60: rgb(46, 46, 46);
  --orange-70: rgb(36, 36, 36);
  --orange-80: rgb(11, 11, 11);
  --orange-90: rgb(0, 0, 0);
  --overlay: rgba(22, 22, 22, 0.5);
  --pdf-background: rgb(244, 244, 240);
  --pdf-page-background: rgb(244, 244, 240);
  --pdf-sidebar-background: rgb(244, 244, 240);
  --pill-border-color: rgb(226, 224, 220);
  --pill-border-color-hover: rgb(226, 224, 220);
  --pill-color: rgb(84, 81, 81);
  --pill-color-hover: rgb(22, 22, 22);
  --pill-color-remove: rgb(169, 168, 165);
  --pill-color-remove-hover: rgb(246, 141, 69);
  --pink: rgb(91, 91, 91);
  --pink-10: rgb(240, 240, 240);
  --pink-100: rgb(0, 0, 0);
  --pink-20: rgb(214, 214, 214);
  --pink-30: rgb(180, 180, 180);
  --pink-40: rgb(136, 136, 136);
  --pink-50: rgb(91, 91, 91);
  --pink-60: rgb(47, 47, 47);
  --pink-70: rgb(26, 26, 26);
  --pink-80: rgb(11, 11, 11);
  --pink-90: rgb(0, 0, 0);
  --pistachio: rgb(25, 25, 25);
  --pistachio-10: rgb(231, 231, 231);
  --pistachio-100: rgb(0, 0, 0);
  --pistachio-20: rgb(192, 192, 192);
  --pistachio-30: rgb(140, 140, 140);
  --pistachio-40: rgb(70, 70, 70);
  --pistachio-50: rgb(25, 25, 25);
  --pistachio-60: rgb(0, 0, 0);
  --pistachio-70: rgb(0, 0, 0);
  --pistachio-80: rgb(0, 0, 0);
  --pistachio-90: rgb(0, 0, 0);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(244, 244, 240);
  --prompt-border-color: rgb(226, 224, 220);
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, rgb(244, 244, 240) 65%, transparent) linear-gradient(rgb(244, 244, 240), color-mix(in srgb, rgb(244, 244, 240) 65%, transparent));
  --red: rgb(41, 41, 41);
  --red-10: rgb(235, 235, 235);
  --red-100: rgb(0, 0, 0);
  --red-20: rgb(204, 204, 204);
  --red-30: rgb(158, 158, 158);
  --red-40: rgb(106, 106, 106);
  --red-50: rgb(53, 53, 53);
  --red-60: rgb(41, 41, 41);
  --red-70: rgb(36, 36, 36);
  --red-80: rgb(11, 11, 11);
  --red-90: rgb(0, 0, 0);
  --ribbon-background: rgb(244, 244, 240);
  --ribbon-background-collapsed: rgb(244, 244, 240);
  --scrollbar-active-thumb-bg: rgb(0, 0, 0 0.2);
  --scrollbar-bg: rgb(0, 0, 0 0.05);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgb(0, 0, 0 0.1);
  --search-clear-button-color: rgb(84, 81, 81);
  --search-icon-color: rgb(84, 81, 81);
  --search-result-background: rgb(244, 244, 240);
  --setting-group-heading-color: rgb(22, 22, 22);
  --setting-group-heading-size: 14px;
  --setting-items-background: rgb(253, 254, 254);
  --setting-items-border-color: rgb(226, 224, 220);
  --setting-items-radius: 10px;
  --shadow-color: 0deg 5% 59%;
  --sidebar-markdown-font-size: 0.933em;
  --size-0: 0px;
  --size-1: 2px;
  --size-10: 64px;
  --size-11: 80px;
  --size-12: 96px;
  --size-13: 160px;
  --size-2: 4px;
  --size-3: 8px;
  --size-4: 12px;
  --size-5: 16px;
  --size-6: 24px;
  --size-7: 32px;
  --size-8: 40px;
  --size-9: 48px;
  --slider-thumb-border-color: rgb(226, 224, 220);
  --slider-thumb-radius: 50%;
  --slider-thumb-y: -7px;
  --slider-track-background: rgb(226, 224, 220);
  --status-bar-background: rgb(244, 244, 240);
  --status-bar-border-color: rgb(226, 224, 220);
  --status-bar-text-color: rgb(84, 81, 81);
  --suggestion-background: rgb(244, 244, 240);
  --tab-background-active: rgb(244, 244, 240);
  --tab-container-background: rgb(244, 244, 240);
  --tab-curve: 0px;
  --tab-divider-color: rgb(226, 224, 220);
  --tab-font-size: 12px;
  --tab-outline-color: rgb(226, 224, 220);
  --tab-stacked-font-size: 12px;
  --tab-switcher-background: rgb(244, 244, 240);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(244, 244, 240), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(246, 141, 69);
  --tab-text-color: rgb(169, 168, 165);
  --tab-text-color-active: rgb(84, 81, 81);
  --tab-text-color-focused: rgb(169, 168, 165);
  --tab-text-color-focused-active: rgb(22, 22, 22);
  --tab-text-color-focused-active-current: rgb(22, 22, 22);
  --tab-text-color-focused-highlighted: rgb(246, 141, 69);
  --table-add-button-border-color: rgb(226, 224, 220);
  --table-border-color: rgb(226, 224, 220);
  --table-drag-handle-background-active: rgb(246, 141, 69);
  --table-drag-handle-color: rgb(169, 168, 165);
  --table-drag-handle-color-active: rgb(253, 254, 254);
  --table-header-border-color: rgb(226, 224, 220);
  --table-header-color: rgb(84, 81, 81);
  --table-header-size: 0.875em;
  --table-header-weight: 600;
  --table-hover-highlight-color: rgb(246, 141, 69 0.15);
  --table-selection: rgba(246, 142, 70, 0.1);
  --table-selection-border-color: rgb(246, 141, 69);
  --table-sticky-height: 600px;
  --tag-background: rgb(246, 141, 69 0.15);
  --tag-background-hover: rgb(246, 141, 69 0.25);
  --tag-border-color: rgb(246, 141, 69 0.15);
  --tag-border-color-hover: rgb(246, 141, 69 0.25);
  --tag-color: rgb(246, 141, 69);
  --tag-color-hover: rgb(246, 141, 69);
  --text-accent: rgb(246, 141, 69);
  --text-accent-hover: rgb(246, 141, 69);
  --text-code: rgb(47, 47, 47);
  --text-error: rgb(41, 41, 41);
  --text-faint: rgb(169, 168, 165);
  --text-highlight-bg: rgba(246, 141, 69, 0.7);
  --text-highlight-bg-active: rgba(246, 141, 69, 0.7);
  --text-muted: rgb(84, 81, 81);
  --text-normal: rgb(22, 22, 22);
  --text-on-accent: rgb(253, 254, 254);
  --text-placeholder: rgb(169, 168, 165);
  --text-primary: rgb(22, 22, 22);
  --text-secondary: rgb(84, 81, 81);
  --text-selection: rgba(246, 141, 69, 0.5);
  --text-success: rgb(97, 97, 97);
  --titlebar-background: rgb(244, 244, 240);
  --titlebar-background-focused: rgb(244, 244, 240);
  --titlebar-border-color: rgb(226, 224, 220);
  --titlebar-text-color: rgb(84, 81, 81);
  --titlebar-text-color-focused: rgb(22, 22, 22);
  --titlebar-text-color-highlighted: rgb(246, 141, 69);
  --toggle-radius: 100vmax;
  --toggle-s-thumb-height: 14px;
  --toggle-s-thumb-width: 14px;
  --toggle-s-width: 32px;
  --toggle-thumb-color: rgb(253, 254, 254);
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 48px;
  --tracking-0: 0px;
  --tracking-1: 0.16px;
  --tracking-2: 0.32px;
  --tracking-3: 0.64px;
  --tracking-4: 0.96px;
  --vault-name-color: rgb(22, 22, 22);
  --vault-name-font-size: 14px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(22, 22, 22);
  --vault-profile-color-hover: rgb(22, 22, 22);
  --vault-profile-font-size: 12px;
  --viridian: rgb(92, 92, 92);
  --viridian-10: rgb(240, 240, 240);
  --viridian-100: rgb(0, 0, 0);
  --viridian-20: rgb(212, 212, 212);
  --viridian-30: rgb(180, 180, 180);
  --viridian-40: rgb(140, 140, 140);
  --viridian-50: rgb(92, 92, 92);
  --viridian-60: rgb(60, 60, 60);
  --viridian-70: rgb(29, 29, 29);
  --viridian-80: rgb(0, 0, 0);
  --viridian-90: rgb(0, 0, 0);
  --white: 253, 254, 254;
  --yellow: rgb(79, 79, 79);
  --yellow-10: rgb(210, 210, 210);
  --yellow-100: rgb(0, 0, 0);
  --yellow-20: rgb(159, 159, 159);
  --yellow-30: rgb(79, 79, 79);
  --yellow-40: rgb(37, 37, 37);
  --yellow-50: rgb(0, 0, 0);
  --yellow-60: rgb(0, 0, 0);
  --yellow-70: rgb(0, 0, 0);
  --yellow-80: rgb(0, 0, 0);
  --yellow-90: rgb(0, 0, 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(226, 224, 220);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 244, 240);
  border-left-color: rgb(226, 224, 220);
  color: rgb(22, 22, 22);
}

body div#quartz-root {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}`,
    typography: `body .page article p > b, b {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body .page article p > em, em {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body .page article p > i, i {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body .page article p > strong, strong {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
  transition: background-size, 0.4s;
}

body del {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration: line-through rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body p {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 81, 81) none 0px;
  text-decoration: rgb(84, 81, 81);
  text-decoration-color: rgb(84, 81, 81);
}`,
    links: `body a.external, footer a {
  color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 141, 69) none 0px;
  text-decoration: underline rgb(246, 141, 69);
  text-decoration-color: rgb(246, 141, 69);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 141, 69) none 0px;
  text-decoration: underline rgb(246, 141, 69);
  text-decoration-color: rgb(246, 141, 69);
}

body a.internal.broken {
  color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 141, 69) none 0px;
  text-decoration: underline rgb(246, 141, 69);
  text-decoration-color: rgb(246, 141, 69);
}`,
    lists: `body dd {
  color: rgb(22, 22, 22);
}

body dt {
  color: rgb(22, 22, 22);
}

body ol > li {
  color: rgb(22, 22, 22);
}

body ol.overflow {
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body ul > li {
  color: rgb(22, 22, 22);
}

body ul.overflow {
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(169, 168, 165);
  text-decoration: rgb(169, 168, 165);
}

body blockquote {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body table {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 602px;
}

body td {
  border-bottom-color: rgb(22, 22, 22);
  border-bottom-width: 0px;
  border-left-color: rgb(22, 22, 22);
  border-left-width: 0px;
  border-right-color: rgb(22, 22, 22);
  border-right-width: 0px;
  border-top-color: rgb(22, 22, 22);
  border-top-width: 0px;
  color: rgb(22, 22, 22);
  padding-left: 16px;
}

body th {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-left-width: 0px;
  border-right-color: rgb(226, 224, 220);
  border-right-width: 0px;
  border-top-color: rgb(226, 224, 220);
  border-top-width: 0px;
  color: rgb(84, 81, 81);
  padding-left: 16px;
}`,
    code: `body code {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: rgb(22, 22, 22);
}

body pre > code > [data-line] {
  border-left-color: rgb(246, 141, 69);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(246, 141, 69);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(246, 141, 69);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(246, 141, 69);
  border-top-color: rgb(246, 141, 69);
}

body pre > code, pre:has(> code) {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
}

body pre:has(> code) {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
}`,
    images: `body audio {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body figcaption {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body img {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body video {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    embeds: `body .file-embed {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
}

body .footnotes {
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

body .transclude {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body .transclude-inner {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(169, 168, 165);
  text-decoration: line-through rgb(169, 168, 165);
  text-decoration-color: rgb(169, 168, 165);
}

body input[type=checkbox] {
  border-bottom-color: rgb(169, 168, 165);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: box-shadow 0.24s cubic-bezier(0, 0, 0.3, 1);
}

body li.task-list-item[data-task='!'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='*'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='-'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='/'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='>'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='?'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='I'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='S'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='b'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='c'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='d'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='f'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='i'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='k'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='l'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='p'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='u'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body li.task-list-item[data-task='w'] {
  color: rgb(22, 22, 22);
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

body .callout > .callout-content {
  padding-left: 24px;
  padding-right: 12px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

body .callout[data-callout="bug"] {
  --callout-color: 236, 90, 118;
  background-color: rgba(236, 90, 118, 0.2);
  border-bottom-color: rgba(236, 90, 118, 0.3);
  border-left-color: rgba(236, 90, 118, 0.3);
  border-right-color: rgba(236, 90, 118, 0.3);
  border-top-color: rgba(236, 90, 118, 0.3);
}

body .callout[data-callout="danger"] {
  --callout-color: 243, 90, 55;
  background-color: rgba(243, 90, 55, 0.2);
  border-bottom-color: rgba(243, 90, 55, 0.3);
  border-left-color: rgba(243, 90, 55, 0.3);
  border-right-color: rgba(243, 90, 55, 0.3);
  border-top-color: rgba(243, 90, 55, 0.3);
}

body .callout[data-callout="example"] {
  --callout-color: 165, 119, 218;
  background-color: rgba(165, 119, 218, 0.2);
  border-bottom-color: rgba(165, 119, 218, 0.3);
  border-left-color: rgba(165, 119, 218, 0.3);
  border-right-color: rgba(165, 119, 218, 0.3);
  border-top-color: rgba(165, 119, 218, 0.3);
}

body .callout[data-callout="failure"] {
  --callout-color: 226, 105, 52;
  background-color: rgba(226, 105, 52, 0.2);
  border-bottom-color: rgba(226, 105, 52, 0.3);
  border-left-color: rgba(226, 105, 52, 0.3);
  border-right-color: rgba(226, 105, 52, 0.3);
  border-top-color: rgba(226, 105, 52, 0.3);
}

body .callout[data-callout="info"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

body .callout[data-callout="note"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

body .callout[data-callout="question"] {
  --callout-color: 141, 147, 25;
  background-color: rgba(141, 147, 25, 0.2);
  border-bottom-color: rgba(141, 147, 25, 0.3);
  border-left-color: rgba(141, 147, 25, 0.3);
  border-right-color: rgba(141, 147, 25, 0.3);
  border-top-color: rgba(141, 147, 25, 0.3);
}

body .callout[data-callout="quote"] {
  --callout-color: 142, 140, 139;
  background-color: rgba(142, 140, 139, 0.2);
  border-bottom-color: rgba(142, 140, 139, 0.3);
  border-left-color: rgba(142, 140, 139, 0.3);
  border-right-color: rgba(142, 140, 139, 0.3);
  border-top-color: rgba(142, 140, 139, 0.3);
}

body .callout[data-callout="success"] {
  --callout-color: 102, 153, 97;
  background-color: rgba(102, 153, 97, 0.2);
  border-bottom-color: rgba(102, 153, 97, 0.3);
  border-left-color: rgba(102, 153, 97, 0.3);
  border-right-color: rgba(102, 153, 97, 0.3);
  border-top-color: rgba(102, 153, 97, 0.3);
}

body .callout[data-callout="tip"] {
  --callout-color: 92, 153, 124;
  background-color: rgba(92, 153, 124, 0.2);
  border-bottom-color: rgba(92, 153, 124, 0.3);
  border-left-color: rgba(92, 153, 124, 0.3);
  border-right-color: rgba(92, 153, 124, 0.3);
  border-top-color: rgba(92, 153, 124, 0.3);
}

body .callout[data-callout="todo"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

body .callout[data-callout="warning"] {
  --callout-color: 184, 131, 0;
  background-color: rgba(184, 131, 0, 0.2);
  border-bottom-color: rgba(184, 131, 0, 0.3);
  border-left-color: rgba(184, 131, 0, 0.3);
  border-right-color: rgba(184, 131, 0, 0.3);
  border-top-color: rgba(184, 131, 0, 0.3);
}`,
    search: `body .search > .search-button {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(142, 140, 139);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(226, 224, 220);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.12);
  color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(226, 224, 220);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(142, 140, 139);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(142, 140, 139, 0.12);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.12);
  color: rgb(22, 22, 22);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(246, 141, 69);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(246, 141, 69);
  border-top-color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(246, 141, 69);
}

body h1 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
}`,
    scrollbars: `body .callout {
  --callout-color: 104, 145, 181;
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  padding-bottom: 16px;
  padding-left: 12px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

body ::-webkit-scrollbar-corner {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

body ::-webkit-scrollbar-track {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(84, 81, 81);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(84, 81, 81);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(84, 81, 81);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(142, 140, 139, 0.2);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 168, 165);
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  color: rgb(169, 168, 165);
}`,
    footer: `body footer {
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(84, 81, 81);
  text-decoration: rgb(84, 81, 81);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(84, 81, 81);
  text-decoration: rgb(84, 81, 81);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body li.section-li > .section .meta {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(84, 81, 81);
  text-decoration: rgb(84, 81, 81);
}

body ul.section-ul {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(169, 168, 165);
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  color: rgb(169, 168, 165);
}

body .darkmode svg {
  color: rgb(169, 168, 165);
  stroke: rgb(169, 168, 165);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
}

body .breadcrumb-element p {
  color: rgb(169, 168, 165);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

body .metadata {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(244, 244, 240);
}

body .page-header h2.page-title {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(22, 22, 22);
  text-decoration: underline dotted rgb(22, 22, 22);
}

body details {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body input[type=text] {
  border-bottom-color: rgb(142, 140, 139);
  border-bottom-width: 1px;
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

body sub {
  color: rgb(22, 22, 22);
}

body summary {
  color: rgb(22, 22, 22);
}

body sup {
  color: rgb(22, 22, 22);
}`,
  },
};
