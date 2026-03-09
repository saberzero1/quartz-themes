import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shiba-inu",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: 235, 188, 186;
  --background-modifier-active-hover: rgba(235, 188, 186, 0.15);
  --background-modifier-border: rgb(65, 69, 89);
  --background-modifier-border-focus: rgb(98, 103, 126);
  --background-modifier-border-hover: rgb(81, 86, 108);
  --background-modifier-cover: rgba(38, 42, 58, 0.4);
  --background-modifier-error: rgb(255, 98, 107);
  --background-modifier-error-hover: rgba(255, 98, 107, 0.9);
  --background-modifier-error-rgb: 255, 98, 107;
  --background-modifier-form-field: rgba(36, 39, 52, 0.3);
  --background-modifier-form-field-hover: rgba(36, 39, 52, 0.3);
  --background-modifier-hover: rgba(198, 206, 239, 0.075);
  --background-modifier-message: rgba(36, 39, 52, 0.9);
  --background-modifier-success: rgb(56, 198, 141);
  --background-modifier-success-hover: rgba(56, 198, 141, 0.9);
  --background-modifier-success-rgb: 56, 198, 141;
  --background-primary: rgb(42, 45, 61);
  --background-primary-alt: rgb(38, 42, 58);
  --background-secondary: rgb(38, 42, 58);
  --background-secondary-alt: rgb(36, 39, 52);
  --background-secondary-translucent: rgba(42, 45, 61, 0.1);
  --background-secondary-translucent-1: rgba(42, 45, 61, 0.1);
  --base: 42, 45, 61;
  --bases-cards-background: rgb(42, 45, 61);
  --bases-cards-cover-background: rgb(38, 42, 58);
  --bases-cards-shadow: 0 0 0 1px rgb(65, 69, 89);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(81, 86, 108);
  --bases-embed-border-color: rgb(65, 69, 89);
  --bases-group-heading-property-color: rgb(148, 155, 183);
  --bases-table-border-color: rgb(65, 69, 89);
  --bases-table-cell-background-active: rgb(42, 45, 61);
  --bases-table-cell-background-disabled: rgb(38, 42, 58);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(98, 103, 126);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 188, 186);
  --bases-table-group-background: rgb(38, 42, 58);
  --bases-table-header-background: rgb(42, 45, 61);
  --bases-table-header-background-hover: rgba(198, 206, 239, 0.075);
  --bases-table-header-color: rgb(148, 155, 183);
  --bases-table-summary-background: rgb(42, 45, 61);
  --bases-table-summary-background-hover: rgba(198, 206, 239, 0.075);
  --bg-color-settings-0: #07070747;
  --bg-color-settings-0-1: #ffffff00;
  --bg-color-settings-1: rgba(42, 45, 61, 0.15);
  --bg-color-settings-2: rgba(42, 45, 61, 0.3);
  --bg-color-settings-3: rgba(42, 45, 61, 0.8);
  --bg-color-settings-4: rgba(42, 45, 61, 0.7);
  --bg-color-settings-5: #424242aa;
  --bg-color-settings-6: #191919c7;
  --blockquote-background-color: rgba(36, 39, 52, 0.5);
  --blockquote-border-color: rgb(235, 188, 186);
  --blue: 147, 183, 245;
  --blur-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent));
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --bold-color: rgb(255, 98, 107);
  --callout-blend-mode: none;
  --callout-bug: 255, 98, 107;
  --callout-default: 147, 183, 245;
  --callout-error: 255, 98, 107;
  --callout-example: 196, 167, 231;
  --callout-fail: 255, 98, 107;
  --callout-gallery-gap: 5px;
  --callout-important: 104, 188, 204;
  --callout-info: 147, 183, 245;
  --callout-question: 247, 157, 124;
  --callout-success: 56, 198, 141;
  --callout-summary: 104, 188, 204;
  --callout-tip: 104, 188, 204;
  --callout-title-padding: 8px;
  --callout-todo: 147, 183, 245;
  --callout-warning: 247, 157, 124;
  --canvas-background: rgb(42, 45, 61);
  --canvas-card-label-color: rgb(165, 172, 201);
  --canvas-color: 115, 120, 145;
  --canvas-color-1: 255, 98, 107;
  --canvas-color-2: 247, 157, 124;
  --canvas-color-3: 249, 226, 175;
  --canvas-color-4: 56, 198, 141;
  --canvas-color-5: 104, 188, 204;
  --canvas-color-6: 196, 167, 231;
  --canvas-dot-pattern: rgb(81, 86, 108);
  --card-background-color: rgb(36, 39, 52);
  --card-foreground-color: rgb(42, 45, 61);
  --cards-aspect-ratio: auto;
  --cards-background: rgb(38, 42, 58);
  --cards-background-modifier-border: rgb(65, 69, 89);
  --cards-border-width: 1px;
  --cards-columns: repeat;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: rgb(198, 206, 239);
  --checkbox-border-color: rgb(165, 172, 201);
  --checkbox-border-color-hover: rgb(148, 155, 183);
  --checkbox-color: rgb(235, 188, 186);
  --checkbox-color-hover: rgb(235, 188, 186);
  --checkbox-marker-color: rgb(42, 45, 61);
  --checklist-done-color: rgb(148, 155, 183);
  --code-background: rgb(38, 42, 58);
  --code-border-color: rgb(65, 69, 89);
  --code-bracket-background: rgba(198, 206, 239, 0.075);
  --code-comment: rgb(165, 172, 201);
  --code-function: rgb(249, 226, 175);
  --code-important: rgb(247, 157, 124);
  --code-keyword: rgb(243, 137, 143);
  --code-normal: rgb(198, 206, 239);
  --code-operator: rgb(255, 98, 107);
  --code-property: rgb(104, 188, 204);
  --code-punctuation: rgb(148, 155, 183);
  --code-string: rgb(56, 198, 141);
  --code-tag: rgb(255, 98, 107);
  --code-value: rgb(196, 167, 231);
  --collapse-icon-color: rgb(165, 172, 201);
  --collapse-icon-color-collapsed: rgb(235, 188, 186);
  --color-accent: rgb(235, 188, 186);
  --color-accent-1: rgb(235, 188, 186);
  --color-accent-2: rgba(235, 188, 186, 0.9);
  --color-accent-translucent-001: rgba(138, 92, 245, 0.01);
  --color-accent-translucent-005: rgba(138, 92, 245, 0.05);
  --color-accent-translucent-01: rgba(138, 92, 245, 0.1);
  --color-accent-translucent-015: rgba(138, 92, 245, 0.15);
  --color-accent-translucent-02: rgba(138, 92, 245, 0.2);
  --color-accent-translucent-04: rgba(138, 92, 245, 0.4);
  --color-accent-translucent-06: rgba(138, 92, 245, 0.6);
  --color-base-00: rgb(36, 39, 52);
  --color-base-10: rgb(38, 42, 58);
  --color-base-100: rgb(198, 206, 239);
  --color-base-20: rgb(42, 45, 61);
  --color-base-25: rgb(65, 69, 89);
  --color-base-30: rgb(81, 86, 108);
  --color-base-35: rgb(98, 103, 126);
  --color-base-40: rgb(115, 120, 145);
  --color-base-50: rgb(131, 138, 164);
  --color-base-60: rgb(148, 155, 183);
  --color-base-70: rgb(165, 172, 201);
  --color-black: rgb(35, 30, 26);
  --color-blue: rgb(147, 183, 245);
  --color-blue-rgb: 147, 183, 245;
  --color-cyan: rgb(104, 188, 204);
  --color-cyan-rgb: 104, 188, 204;
  --color-green: rgb(56, 198, 141);
  --color-green-rgb: 56, 198, 141;
  --color-lightorange: rgb(246, 193, 119);
  --color-lightorange-rgb: 246, 193, 119;
  --color-lightpink: rgb(235, 188, 186);
  --color-lightpink-rgb: 235, 188, 186;
  --color-orange: rgb(247, 157, 124);
  --color-orange-rgb: 247, 157, 124;
  --color-pink: rgb(243, 137, 143);
  --color-pink-rgb: 243, 137, 143;
  --color-purple: rgb(196, 167, 231);
  --color-purple-rgb: 196, 167, 231;
  --color-red: rgb(255, 98, 107);
  --color-red-rgb: 255, 98, 107;
  --color-white: rgb(250, 248, 245);
  --color-yellow: rgb(249, 226, 175);
  --color-yellow-rgb: 249, 226, 175;
  --cyan: 137, 199, 223;
  --divider-color: rgb(65, 69, 89);
  --divider-color-hover: rgb(235, 188, 186);
  --dropdown-background: rgb(65, 69, 89);
  --dropdown-background-hover: rgb(81, 86, 108);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(235, 188, 186);
  --exterior: 36, 39, 52;
  --external-link-color: rgba(235, 188, 186, 0.8);
  --file-header-background: rgb(42, 45, 61);
  --file-header-background-focused: rgb(42, 45, 61);
  --flair-background: rgb(65, 69, 89);
  --flair-color: rgb(198, 206, 239);
  --font-family-folder-file-title: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-inline-code: monospace;
  --font-family-tag: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vault: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vertical-bar: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: monospace;
  --font-print: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-size-code: 1em;
  --font-size-file-header-title: 0.93em;
  --font-size-folder-and-file: 0.95em;
  --font-size-vault-name: 0.95em;
  --font-text: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgb(65, 69, 89);
  --footnote-id-color: rgb(148, 155, 183);
  --footnote-id-color-no-occurrences: rgb(165, 172, 201);
  --footnote-input-background-active: rgba(198, 206, 239, 0.075);
  --graph-arrow: rgb(243, 137, 143);
  --graph-circle-fill: rgb(147, 183, 245);
  --graph-circle-fill-highlight: rgb(147, 183, 245);
  --graph-circle-fill-unresolved: #ffa6e5;
  --graph-circle-outline: rgb(243, 137, 143);
  --graph-fill-attachment: rgb(147, 183, 245);
  --graph-fill-tag: rgb(247, 157, 124);
  --graph-line: rgb(65, 69, 89);
  --graph-line-highlight: rgb(235, 188, 186);
  --graph-node: rgb(148, 155, 183);
  --graph-node-attachment: rgb(249, 226, 175);
  --graph-node-focused: rgb(235, 188, 186);
  --graph-node-tag: rgb(56, 198, 141);
  --graph-node-unresolved: rgb(165, 172, 201);
  --graph-text: rgb(198, 206, 239);
  --green: 56, 198, 141;
  --h1-color: rgb(255, 98, 107);
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-color: rgb(235, 188, 186);
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-color: rgb(104, 188, 204);
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-color: rgb(137, 199, 223);
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-color: rgb(147, 183, 245);
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-color: rgb(128, 216, 220);
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --heading-formatting: rgb(235, 188, 186);
  --highlight-mix-blend-mode: none;
  --hr-color: rgb(65, 69, 89);
  --hr-outline-color: rgb(65, 69, 89);
  --icon-color: rgb(148, 155, 183);
  --icon-color-active: rgb(235, 188, 186);
  --icon-color-focused: rgb(235, 188, 186);
  --icon-color-hover: rgb(148, 155, 183);
  --img-border-radius: 15px;
  --img-max-height: 300px;
  --img-max-height-list: 270px;
  --img-max-width: 350px;
  --img-max-width-list: 300px;
  --indentation-guide-color: rgba(198, 206, 239, 0.12);
  --indentation-guide-color-active: rgba(198, 206, 239, 0.3);
  --inline-title-color: rgb(255, 98, 107);
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --input-date-separator: rgb(165, 172, 201);
  --input-placeholder-color: rgb(165, 172, 201);
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(198, 206, 239, 0.09), 0 2px 4px 0 rgba(36, 39, 52, 0.15),
    0 1px 1.5px 0 rgba(36, 39, 52, 0.1), 0 1px 2px 0 rgba(36, 39, 52, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(198, 206, 239, 0.16), 0 2px 3px 0 rgba(36, 39, 52, 0.3),
    0 1px 1.5px 0 rgba(36, 39, 52, 0.2), 0 1px 2px 0 rgba(36, 39, 52, 0.4), 0 0 0 0 transparent;
  --interactive-accent: rgb(235, 188, 186);
  --interactive-accent-hover: rgb(235, 188, 186);
  --interactive-accent-rgb: 235, 188, 186;
  --interactive-hover: rgb(81, 86, 108);
  --interactive-normal: rgb(65, 69, 89);
  --interactive-success: rgb(56, 198, 141);
  --internal-link-color: rgba(235, 188, 186, 0.9);
  --italic-color: rgb(56, 198, 141);
  --lemon: 246, 193, 119;
  --lily: 235, 188, 186;
  --link-color: rgb(235, 188, 186);
  --link-color-hover: rgb(235, 188, 186);
  --link-external-color: rgb(235, 188, 186);
  --link-external-color-hover: rgb(235, 188, 186);
  --link-unresolved-color: rgb(235, 188, 186);
  --list-marker-color: rgb(165, 172, 201);
  --list-marker-color-collapsed: rgb(235, 188, 186);
  --list-marker-color-hover: rgb(148, 155, 183);
  --max-width-image: 90%;
  --menu-background: rgb(38, 42, 58);
  --menu-border-color: rgb(81, 86, 108);
  --menu-shadow: 0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179),
    0px 15px 30px rgba(36, 39, 52, 0.3);
  --metadata-border-color: rgb(65, 69, 89);
  --metadata-divider-color: rgb(65, 69, 89);
  --metadata-input-background-active: rgba(198, 206, 239, 0.075);
  --metadata-input-text-color: rgb(198, 206, 239);
  --metadata-label-background-active: rgba(198, 206, 239, 0.075);
  --metadata-label-text-color: rgb(148, 155, 183);
  --metadata-label-text-color-hover: rgb(148, 155, 183);
  --metadata-property-background-active: rgba(198, 206, 239, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(98, 103, 126);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(81, 86, 108);
  --min-width-image: 50%;
  --modal-background: rgb(42, 45, 61);
  --modal-border-color: rgb(65, 69, 89);
  --mono-rgb-100: 198, 206, 239;
  --nav-collapse-icon-color: rgb(165, 172, 201);
  --nav-collapse-icon-color-collapsed: rgb(165, 172, 201);
  --nav-folder-title-color: rgba(42, 45, 61);
  --nav-heading-color: rgb(198, 206, 239);
  --nav-heading-color-collapsed: rgb(165, 172, 201);
  --nav-heading-color-collapsed-hover: rgb(148, 155, 183);
  --nav-heading-color-hover: rgb(198, 206, 239);
  --nav-indentation-guide-color: rgba(36, 39, 52, 0.4);
  --nav-item-background-active: rgba(198, 206, 239, 0.075);
  --nav-item-background-hover: rgba(198, 206, 239, 0.075);
  --nav-item-background-selected: rgba(235, 188, 186, 0.2);
  --nav-item-color: rgb(148, 155, 183);
  --nav-item-color-active: rgb(198, 206, 239);
  --nav-item-color-highlighted: rgb(235, 188, 186);
  --nav-item-color-hover: rgb(198, 206, 239);
  --nav-item-color-selected: rgb(198, 206, 239);
  --nav-tag-color: rgb(165, 172, 201);
  --nav-tag-color-active: rgb(148, 155, 183);
  --nav-tag-color-hover: rgb(148, 155, 183);
  --orange: 247, 157, 124;
  --outline-border: 2px;
  --overlay0: 115, 120, 145;
  --overlay1: 131, 138, 164;
  --overlay2: 148, 155, 183;
  --panel-page-opacity: 0.25;
  --pdf-background: rgb(42, 45, 61);
  --pdf-page-background: rgb(42, 45, 61);
  --pdf-shadow: 0 0 0 1px rgb(65, 69, 89);
  --pdf-sidebar-background: rgb(42, 45, 61);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 69, 89);
  --pill-border-color: rgb(65, 69, 89);
  --pill-border-color-hover: rgb(81, 86, 108);
  --pill-color: rgb(148, 155, 183);
  --pill-color-hover: rgb(198, 206, 239);
  --pill-color-remove: rgb(165, 172, 201);
  --pill-color-remove-hover: rgb(235, 188, 186);
  --prompt-background: rgb(42, 45, 61);
  --prompt-border-color: rgb(115, 120, 145);
  --raised-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent));
  --red: 255, 98, 107;
  --ribbon-background: rgb(38, 42, 58);
  --ribbon-background-collapsed: rgb(42, 45, 61);
  --rose: 243, 137, 143;
  --scrollbar-active-thumb-bg: rgba(198, 206, 239, 0.2);
  --scrollbar-bg: rgba(198, 206, 239, 0.05);
  --scrollbar-thumb-bg: rgba(198, 206, 239, 0.1);
  --sea: 104, 188, 204;
  --search-clear-button-color: rgb(148, 155, 183);
  --search-icon-color: rgb(148, 155, 183);
  --search-result-background: rgb(42, 45, 61);
  --setting-group-heading-color: rgb(198, 206, 239);
  --setting-items-background: rgb(38, 42, 58);
  --setting-items-border-color: rgb(65, 69, 89);
  --shadow-l: 0px 1.8px 7.3px rgba(36, 39, 52, 0.071), 0px 6.3px 24.7px rgba(36, 39, 52, 0.112),
    0px 30px 90px rgba(36, 39, 52, 0.2);
  --shadow-s: 0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179),
    0px 15px 30px rgba(36, 39, 52, 0.3);
  --shib-bold-color: 255, 98, 107;
  --shib-callout-fold-position: 1;
  --shib-italic-color: 56, 198, 141;
  --shib-speech-bubble-opacity: 0.9;
  --side: 38, 42, 58;
  --slider-thumb-border-color: rgb(81, 86, 108);
  --slider-track-background: rgb(65, 69, 89);
  --status-bar-background: rgb(38, 42, 58);
  --status-bar-border-color: rgb(65, 69, 89);
  --status-bar-text-color: rgb(148, 155, 183);
  --subtext0: 165, 172, 201;
  --subtext1: 181, 189, 220;
  --suggestion-background: rgb(42, 45, 61);
  --surface0: 65, 69, 89;
  --surface1: 81, 86, 108;
  --surface2: 98, 103, 126;
  --swatch-shadow: inset 0 0 0 1px rgba(198, 206, 239, 0.15);
  --sync-avatar-color-1: rgb(255, 98, 107);
  --sync-avatar-color-2: rgb(247, 157, 124);
  --sync-avatar-color-3: rgb(249, 226, 175);
  --sync-avatar-color-4: rgb(56, 198, 141);
  --sync-avatar-color-5: rgb(104, 188, 204);
  --sync-avatar-color-6: rgb(147, 183, 245);
  --sync-avatar-color-7: rgb(196, 167, 231);
  --sync-avatar-color-8: rgb(243, 137, 143);
  --tab-background-active: rgb(42, 45, 61);
  --tab-container-background: rgb(38, 42, 58);
  --tab-divider-color: rgb(81, 86, 108);
  --tab-inactive-color: rgb(38, 42, 58);
  --tab-outline-color: rgb(65, 69, 89);
  --tab-radius: 0px;
  --tab-switcher-background: rgb(38, 42, 58);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 42, 58), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 206, 239, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 188, 186);
  --tab-text-color: rgb(165, 172, 201);
  --tab-text-color-active: rgb(148, 155, 183);
  --tab-text-color-focused: rgb(148, 155, 183);
  --tab-text-color-focused-active: rgb(148, 155, 183);
  --tab-text-color-focused-active-current: rgb(198, 206, 239);
  --tab-text-color-focused-highlighted: rgb(235, 188, 186);
  --table-add-button-border-color: rgb(65, 69, 89);
  --table-border-color: rgb(65, 69, 89);
  --table-drag-handle-background-active: rgb(235, 188, 186);
  --table-drag-handle-color: rgb(165, 172, 201);
  --table-drag-handle-color-active: rgb(42, 45, 61);
  --table-header-border-color: rgb(65, 69, 89);
  --table-header-color: rgb(198, 206, 239);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(235, 188, 186);
  --tag-background: rgba(235, 188, 186, 0.1);
  --tag-background-hover: rgba(235, 188, 186, 0.2);
  --tag-border-color: rgba(235, 188, 186, 0.15);
  --tag-border-color-hover: rgba(235, 188, 186, 0.15);
  --tag-color: rgb(235, 188, 186);
  --tag-color-hover: rgb(235, 188, 186);
  --text: 198, 206, 239;
  --text-accent: rgb(235, 188, 186);
  --text-accent-hover: rgb(235, 188, 186);
  --text-error: rgb(255, 98, 107);
  --text-error-hover: rgba(255, 98, 107, 0.8);
  --text-faint: rgb(165, 172, 201);
  --text-highlight-bg: rgba(247, 157, 124, 0.2);
  --text-highlight-bg-active: rgba(247, 157, 124, 0.4);
  --text-muted: rgb(148, 155, 183);
  --text-muted-rgb: 148, 155, 183;
  --text-normal: rgb(198, 206, 239);
  --text-on-accent: rgb(42, 45, 61);
  --text-selection: rgba(147, 183, 245, 0.15);
  --text-success: rgb(56, 198, 141);
  --text-warning: rgb(247, 157, 124);
  --titlebar-background: rgb(38, 42, 58);
  --titlebar-background-focused: rgb(36, 39, 52);
  --titlebar-border-color: rgb(65, 69, 89);
  --titlebar-text-color: rgb(148, 155, 183);
  --titlebar-text-color-focused: rgb(235, 188, 186);
  --turquoise: 128, 216, 220;
  --unresolved-link-color: rgba(235, 188, 186, 0.8);
  --vault-profile-color: rgb(198, 206, 239);
  --vault-profile-color-hover: rgb(198, 206, 239);
  --violet: 196, 167, 231;
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(36, 39, 52, 0.6);
  --yellow: 249, 226, 175;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 42, 58);
  color: rgb(198, 206, 239);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(42, 45, 61);
  color: rgb(198, 206, 239);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 42, 58);
  color: rgb(198, 206, 239);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 69, 89);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 42, 58);
  border-left-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}

body div#quartz-root {
  background-color: rgb(42, 45, 61);
  color: rgb(198, 206, 239);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 98, 107);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 98, 107) none 0px;
  text-decoration: rgb(255, 98, 107);
  text-decoration-color: rgb(255, 98, 107);
}

body .page article p > em, em {
  color: rgb(56, 198, 141);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration: rgb(56, 198, 141);
  text-decoration-color: rgb(56, 198, 141);
}

body .page article p > i, i {
  color: rgb(56, 198, 141);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration: rgb(56, 198, 141);
  text-decoration-color: rgb(56, 198, 141);
}

body .page article p > strong, strong {
  color: rgb(255, 98, 107);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 98, 107) none 0px;
  text-decoration: rgb(255, 98, 107);
  text-decoration-color: rgb(255, 98, 107);
}

body .text-highlight {
  background-color: rgba(247, 157, 124, 0.2);
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body del {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration: line-through rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body p {
  color: rgb(148, 155, 183);
  outline: rgb(148, 155, 183) none 0px;
  text-decoration: rgb(148, 155, 183);
  text-decoration-color: rgb(148, 155, 183);
}`,
    links: `body a.external, footer a {
  color: rgba(235, 188, 186, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.8) none 0px;
  text-decoration: underline rgba(235, 188, 186, 0.8);
  text-decoration-color: rgba(235, 188, 186, 0.8);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(235, 188, 186, 0.9);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.9) none 0px;
  text-decoration: rgba(235, 188, 186, 0.9);
  text-decoration-color: rgba(235, 188, 186, 0.9);
}

body a.internal.broken {
  color: rgba(235, 188, 186, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.8) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(198, 206, 239);
}

body dt {
  color: rgb(198, 206, 239);
}

body ol > li {
  color: rgb(198, 206, 239);
}

body ol.overflow {
  background-color: rgb(42, 45, 61);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body ul > li {
  color: rgb(198, 206, 239);
}

body ul.overflow {
  background-color: rgb(42, 45, 61);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(165, 172, 201);
  text-decoration: rgb(165, 172, 201);
}

body blockquote {
  background-color: rgba(36, 39, 52, 0.5);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body table {
  border-bottom-color: rgb(65, 69, 89);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(65, 69, 89);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(65, 69, 89);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(65, 69, 89);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 20px;
  width: 661px;
}

body td {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
  text-align: center;
}

body th {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
  text-align: center;
}

body thead {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

body tr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}`,
    code: `body code {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}

body pre > code > [data-line] {
  border-left-color: rgb(249, 226, 175);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(249, 226, 175);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(249, 226, 175);
  border-left-color: rgb(249, 226, 175);
  border-right-color: rgb(249, 226, 175);
  border-top-color: rgb(249, 226, 175);
}

body pre > code, pre:has(> code) {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

body pre:has(> code) {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}`,
    images: `body audio {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body figcaption {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body img {
  border-bottom-color: rgb(198, 206, 239);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(198, 206, 239);
  border-radius: 15px;
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

body video {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    embeds: `body .file-embed {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
}

body .footnotes {
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

body .transclude {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body .transclude-inner {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(148, 155, 183);
  text-decoration: line-through rgb(148, 155, 183);
  text-decoration-color: rgb(148, 155, 183);
}

body input[type=checkbox] {
  border-bottom-color: rgb(165, 172, 201);
  border-left-color: rgb(165, 172, 201);
  border-right-color: rgb(165, 172, 201);
  border-top-color: rgb(165, 172, 201);
}

body li.task-list-item[data-task='!'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='*'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='-'] {
  color: rgb(148, 155, 183);
  text-decoration: line-through rgb(148, 155, 183);
  text-decoration-color: rgb(148, 155, 183);
}

body li.task-list-item[data-task='/'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='>'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='?'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='I'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='S'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='b'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='c'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='d'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='f'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='i'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='k'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='l'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='p'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='u'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body li.task-list-item[data-task='w'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 104, 188, 204;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(104, 188, 204, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 188, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 188, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 188, 204, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 98, 107;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 98, 107;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 196, 167, 231;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(196, 167, 231, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(196, 167, 231, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(196, 167, 231, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(196, 167, 231, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 98, 107;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 147, 183, 245;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 147, 183, 245;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 247, 157, 124;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(247, 157, 124, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(247, 157, 124, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(247, 157, 124, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(247, 157, 124, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(158, 158, 158, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 56, 198, 141;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(56, 198, 141, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(56, 198, 141, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(56, 198, 141, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(56, 198, 141, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 104, 188, 204;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(104, 188, 204, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 188, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 188, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 188, 204, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 147, 183, 245;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 247, 157, 124;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(247, 157, 124, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(247, 157, 124, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(247, 157, 124, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(247, 157, 124, 0.4);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(36, 39, 52, 0.3);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}

body .search > .search-container > .search-space {
  background-color: rgb(42, 45, 61);
  border-bottom-color: rgb(115, 120, 145);
  border-left-color: rgb(115, 120, 145);
  border-right-color: rgb(115, 120, 145);
  border-top-color: rgb(115, 120, 145);
  box-shadow: rgba(36, 39, 52, 0.07) 0px 1.8px 7.3px 0px, rgba(36, 39, 52, 0.114) 0px 6.3px 24.7px 0px, rgba(36, 39, 52, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 206, 239);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(198, 206, 239);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(198, 206, 239, 0.075);
  color: rgb(198, 206, 239);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(115, 120, 145);
  border-left-color: rgb(115, 120, 145);
  border-right-color: rgb(115, 120, 145);
  border-top-color: rgb(115, 120, 145);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 42, 58);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(198, 206, 239, 0.075);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(198, 206, 239, 0.075);
  color: rgb(198, 206, 239);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.15);
  border-left-color: rgba(235, 188, 186, 0.15);
  border-right-color: rgba(235, 188, 186, 0.15);
  border-top-color: rgba(235, 188, 186, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(235, 188, 186);
}

body h1 {
  color: rgb(255, 98, 107);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(235, 188, 186);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 98, 107);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(104, 188, 204);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(137, 199, 223);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(147, 183, 245);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(128, 216, 220);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
}`,
    scrollbars: `body .callout {
  --callout-color: 147, 183, 245;
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

body ::-webkit-scrollbar-corner {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

body ::-webkit-scrollbar-track {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(148, 155, 183);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(148, 155, 183);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(148, 155, 183);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(198, 206, 239, 0.075);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}`,
    footer: `body footer {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(148, 155, 183);
}

body footer ul li a {
  color: rgb(148, 155, 183);
  text-decoration: rgb(148, 155, 183);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(198, 206, 239);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(148, 155, 183);
  text-decoration: rgb(148, 155, 183);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body li.section-li > .section .meta {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(148, 155, 183);
  text-decoration: rgb(148, 155, 183);
}

body ul.section-ul {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}

body .darkmode svg {
  color: rgb(148, 155, 183);
  stroke: rgb(148, 155, 183);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}

body .breadcrumb-element p {
  color: rgb(165, 172, 201);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

body .metadata {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(148, 155, 183);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(38, 42, 58);
}

body .page-header h2.page-title {
  color: rgb(198, 206, 239);
}

body abbr {
  color: rgb(198, 206, 239);
  text-decoration: underline dotted rgb(198, 206, 239);
}

body details {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body input[type=text] {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}

body kbd {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

body sub {
  color: rgb(198, 206, 239);
}

body summary {
  color: rgb(198, 206, 239);
}

body sup {
  color: rgb(198, 206, 239);
}`,
  },
  light: {
    base: `:root:root {
  --accent: 222, 149, 132;
  --background-modifier-active-hover: rgba(222, 149, 132, 0.15);
  --background-modifier-border: rgb(188, 192, 204);
  --background-modifier-border-focus: rgb(156, 160, 176);
  --background-modifier-border-hover: rgb(221, 225, 238);
  --background-modifier-cover: #00000022;
  --background-modifier-error: rgb(240, 68, 114);
  --background-modifier-error-hover: rgba(240, 68, 114, 0.9);
  --background-modifier-error-rgb: 240, 68, 114;
  --background-modifier-form-field: rgba(254, 241, 241, 0.3);
  --background-modifier-form-field-hover: rgba(254, 241, 241, 0.3);
  --background-modifier-hover: rgba(76, 79, 105, 0.075);
  --background-modifier-message: rgba(254, 241, 241, 0.9);
  --background-modifier-success: rgb(64, 155, 40);
  --background-modifier-success-hover: rgba(64, 155, 40, 0.9);
  --background-modifier-success-rgb: 64, 155, 40;
  --background-primary: rgb(252, 252, 252);
  --background-primary-alt: rgb(243, 236, 243);
  --background-secondary: rgb(243, 236, 243);
  --background-secondary-alt: rgb(254, 241, 241);
  --background-secondary-translucent: rgba(252, 252, 252, 0.1);
  --background-secondary-translucent-1: rgba(252, 252, 252, 0.1);
  --base: 252, 252, 252;
  --bases-cards-background: rgb(252, 252, 252);
  --bases-cards-cover-background: rgb(243, 236, 243);
  --bases-cards-shadow: 0 0 0 1px rgb(188, 192, 204);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(221, 225, 238);
  --bases-embed-border-color: rgb(188, 192, 204);
  --bases-group-heading-property-color: rgb(76, 79, 105);
  --bases-table-border-color: rgb(188, 192, 204);
  --bases-table-cell-background-active: rgb(252, 252, 252);
  --bases-table-cell-background-disabled: rgb(243, 236, 243);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(156, 160, 176);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(222, 149, 132);
  --bases-table-group-background: rgb(243, 236, 243);
  --bases-table-header-background: rgb(252, 252, 252);
  --bases-table-header-background-hover: rgba(76, 79, 105, 0.075);
  --bases-table-header-color: rgb(76, 79, 105);
  --bases-table-summary-background: rgb(252, 252, 252);
  --bases-table-summary-background-hover: rgba(76, 79, 105, 0.075);
  --bg-color-settings-0: #7d7d7d6b;
  --bg-color-settings-0-1: #ffffff77;
  --bg-color-settings-1: rgba(252, 252, 252, 0.15);
  --bg-color-settings-2: rgba(252, 252, 252, 0.3);
  --bg-color-settings-3: rgba(252, 252, 252, 0.8);
  --bg-color-settings-4: rgba(252, 252, 252, 0.7);
  --bg-color-settings-5: #d4d4d464;
  --bg-color-settings-6: #ffffff85;
  --blockquote-background-color: rgba(254, 241, 241, 0.5);
  --blockquote-border-color: rgb(222, 149, 132);
  --blue: 71, 143, 238;
  --blur-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent));
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --bold-color: rgb(240, 68, 114);
  --callout-blend-mode: none;
  --callout-bug: 240, 68, 114;
  --callout-default: 71, 143, 238;
  --callout-error: 240, 68, 114;
  --callout-example: 176, 110, 201;
  --callout-fail: 240, 68, 114;
  --callout-gallery-gap: 5px;
  --callout-important: 23, 146, 153;
  --callout-info: 71, 143, 238;
  --callout-question: 249, 102, 50;
  --callout-success: 64, 155, 40;
  --callout-summary: 23, 146, 153;
  --callout-tip: 23, 146, 153;
  --callout-title-padding: 8px;
  --callout-todo: 71, 143, 238;
  --callout-warning: 249, 102, 50;
  --canvas-background: rgb(252, 252, 252);
  --canvas-card-label-color: rgb(108, 111, 133);
  --canvas-color: 156, 160, 176;
  --canvas-color-1: 240, 68, 114;
  --canvas-color-2: 249, 102, 50;
  --canvas-color-3: 228, 147, 32;
  --canvas-color-4: 64, 155, 40;
  --canvas-color-5: 23, 146, 153;
  --canvas-color-6: 176, 110, 201;
  --canvas-dot-pattern: rgb(188, 192, 204);
  --card-background-color: rgb(254, 241, 241);
  --card-foreground-color: rgb(252, 252, 252);
  --cards-aspect-ratio: auto;
  --cards-background: rgb(243, 236, 243);
  --cards-background-modifier-border: rgb(188, 192, 204);
  --cards-border-width: 1px;
  --cards-columns: repeat;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: rgb(76, 79, 105);
  --checkbox-border-color: rgb(108, 111, 133);
  --checkbox-border-color-hover: rgb(76, 79, 105);
  --checkbox-color: rgb(222, 149, 132);
  --checkbox-color-hover: rgb(222, 149, 132);
  --checkbox-marker-color: rgb(252, 252, 252);
  --checklist-done-color: rgb(76, 79, 105);
  --code-background: rgb(243, 236, 243);
  --code-border-color: rgb(188, 192, 204);
  --code-bracket-background: rgba(76, 79, 105, 0.075);
  --code-comment: rgb(108, 111, 133);
  --code-function: rgb(228, 147, 32);
  --code-important: rgb(249, 102, 50);
  --code-keyword: rgb(215, 125, 146);
  --code-normal: rgb(76, 79, 105);
  --code-operator: rgb(240, 68, 114);
  --code-property: rgb(23, 146, 153);
  --code-punctuation: rgb(76, 79, 105);
  --code-string: rgb(64, 155, 40);
  --code-tag: rgb(240, 68, 114);
  --code-value: rgb(176, 110, 201);
  --collapse-icon-color: rgb(108, 111, 133);
  --collapse-icon-color-collapsed: rgb(222, 149, 132);
  --color-accent: rgb(222, 149, 132);
  --color-accent-1: rgb(222, 149, 132);
  --color-accent-2: rgba(222, 149, 132, 0.9);
  --color-accent-translucent-001: rgba(138, 92, 245, 0.01);
  --color-accent-translucent-005: rgba(138, 92, 245, 0.05);
  --color-accent-translucent-01: rgba(138, 92, 245, 0.1);
  --color-accent-translucent-015: rgba(138, 92, 245, 0.15);
  --color-accent-translucent-02: rgba(138, 92, 245, 0.2);
  --color-accent-translucent-04: rgba(138, 92, 245, 0.4);
  --color-accent-translucent-06: rgba(138, 92, 245, 0.6);
  --color-base-00: rgb(254, 241, 241);
  --color-base-10: rgb(243, 236, 243);
  --color-base-100: rgb(76, 79, 105);
  --color-base-20: rgb(252, 252, 252);
  --color-base-25: rgb(221, 225, 238);
  --color-base-30: rgb(188, 192, 204);
  --color-base-35: rgb(221, 225, 238);
  --color-base-40: rgb(156, 160, 176);
  --color-base-50: rgb(140, 143, 161);
  --color-base-60: rgb(76, 79, 105);
  --color-base-70: rgb(108, 111, 133);
  --color-black: rgb(35, 30, 26);
  --color-blue: rgb(71, 143, 238);
  --color-blue-rgb: 71, 143, 238;
  --color-cyan: rgb(23, 146, 153);
  --color-cyan-rgb: 23, 146, 153;
  --color-green: rgb(64, 155, 40);
  --color-green-rgb: 64, 155, 40;
  --color-lightorange: rgb(195, 173, 87);
  --color-lightorange-rgb: 195, 173, 87;
  --color-lightpink: rgb(222, 149, 132);
  --color-lightpink-rgb: 222, 149, 132;
  --color-orange: rgb(249, 102, 50);
  --color-orange-rgb: 249, 102, 50;
  --color-pink: rgb(215, 125, 146);
  --color-pink-rgb: 215, 125, 146;
  --color-purple: rgb(176, 110, 201);
  --color-purple-rgb: 176, 110, 201;
  --color-red: rgb(240, 68, 114);
  --color-red-rgb: 240, 68, 114;
  --color-white: rgb(250, 248, 245);
  --color-yellow: rgb(228, 147, 32);
  --color-yellow-rgb: 228, 147, 32;
  --cyan: 37, 189, 209;
  --divider-color: rgb(188, 192, 204);
  --divider-color-hover: rgb(222, 149, 132);
  --dropdown-background: rgb(221, 225, 238);
  --dropdown-background-hover: rgb(188, 192, 204);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(222, 149, 132);
  --exterior: 254, 241, 241;
  --external-link-color: rgba(222, 149, 132, 0.8);
  --file-header-background: rgb(252, 252, 252);
  --file-header-background-focused: rgb(252, 252, 252);
  --flair-background: rgb(221, 225, 238);
  --flair-color: rgb(76, 79, 105);
  --font-family-folder-file-title: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-inline-code: monospace;
  --font-family-tag: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vault: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vertical-bar: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: monospace;
  --font-print: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-size-code: 1em;
  --font-size-file-header-title: 0.93em;
  --font-size-folder-and-file: 0.95em;
  --font-size-vault-name: 0.95em;
  --font-text: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgb(188, 192, 204);
  --footnote-id-color: rgb(76, 79, 105);
  --footnote-id-color-no-occurrences: rgb(108, 111, 133);
  --footnote-input-background-active: rgba(76, 79, 105, 0.075);
  --graph-arrow: rgb(176, 110, 201);
  --graph-circle-fill: rgb(71, 143, 238);
  --graph-circle-fill-highlight: rgb(71, 143, 238);
  --graph-circle-fill-unresolved: rgb(240, 68, 114);
  --graph-circle-outline: rgb(215, 125, 146);
  --graph-fill-attachment: rgb(23, 146, 153);
  --graph-fill-tag: rgb(249, 102, 50);
  --graph-line: rgb(76, 79, 105);
  --graph-line-highlight: rgb(222, 149, 132);
  --graph-node: rgb(76, 79, 105);
  --graph-node-attachment: rgb(228, 147, 32);
  --graph-node-focused: rgb(222, 149, 132);
  --graph-node-tag: rgb(64, 155, 40);
  --graph-node-unresolved: rgb(108, 111, 133);
  --graph-text: rgb(76, 79, 105);
  --green: 64, 155, 40;
  --h1-color: rgb(240, 68, 114);
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-color: rgb(222, 149, 132);
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-color: rgb(23, 146, 153);
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-color: rgb(37, 189, 209);
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-color: rgb(71, 143, 238);
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-color: rgb(58, 161, 182);
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --heading-formatting: rgb(222, 149, 132);
  --highlight-mix-blend-mode: none;
  --hr-color: rgb(188, 192, 204);
  --hr-outline-color: rgb(188, 192, 204);
  --icon-color: rgb(76, 79, 105);
  --icon-color-active: rgb(222, 149, 132);
  --icon-color-focused: rgb(222, 149, 132);
  --icon-color-hover: rgb(76, 79, 105);
  --img-border-radius: 15px;
  --img-max-height: 300px;
  --img-max-height-list: 270px;
  --img-max-width: 350px;
  --img-max-width-list: 300px;
  --indentation-guide-color: rgba(76, 79, 105, 0.12);
  --indentation-guide-color-active: rgba(76, 79, 105, 0.3);
  --inline-title-color: rgb(240, 68, 114);
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --input-date-separator: rgb(108, 111, 133);
  --input-placeholder-color: rgb(108, 111, 133);
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(76, 79, 105, 0.09), 0 2px 4px 0 rgba(254, 241, 241, 0.15),
    0 1px 1.5px 0 rgba(254, 241, 241, 0.1), 0 1px 2px 0 rgba(254, 241, 241, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(76, 79, 105, 0.16), 0 2px 3px 0 rgba(254, 241, 241, 0.3),
    0 1px 1.5px 0 rgba(254, 241, 241, 0.2), 0 1px 2px 0 rgba(254, 241, 241, 0.4), 0 0 0 0 transparent;
  --interactive-accent: rgb(222, 149, 132);
  --interactive-accent-hover: rgb(222, 149, 132);
  --interactive-accent-rgb: 222, 149, 132;
  --interactive-hover: rgb(188, 192, 204);
  --interactive-normal: rgb(221, 225, 238);
  --interactive-success: rgb(64, 155, 40);
  --internal-link-color: rgba(222, 149, 132, 0.9);
  --italic-color: rgb(64, 155, 40);
  --lemon: 195, 173, 87;
  --lily: 222, 149, 132;
  --link-color: rgb(222, 149, 132);
  --link-color-hover: rgb(222, 149, 132);
  --link-external-color: rgb(222, 149, 132);
  --link-external-color-hover: rgb(222, 149, 132);
  --link-unresolved-color: rgb(222, 149, 132);
  --list-marker-color: rgb(108, 111, 133);
  --list-marker-color-collapsed: rgb(222, 149, 132);
  --list-marker-color-hover: rgb(76, 79, 105);
  --max-width-image: 90%;
  --menu-background: rgb(243, 236, 243);
  --menu-border-color: rgb(221, 225, 238);
  --menu-shadow: 0px 1px 2px rgba(254, 241, 241, 0.121), 0px 3.4px 6.7px rgba(254, 241, 241, 0.179),
    0px 15px 30px rgba(254, 241, 241, 0.3);
  --metadata-border-color: rgb(188, 192, 204);
  --metadata-divider-color: rgb(188, 192, 204);
  --metadata-input-background-active: rgba(76, 79, 105, 0.075);
  --metadata-input-text-color: rgb(76, 79, 105);
  --metadata-label-background-active: rgba(76, 79, 105, 0.075);
  --metadata-label-text-color: rgb(76, 79, 105);
  --metadata-label-text-color-hover: rgb(76, 79, 105);
  --metadata-property-background-active: rgba(76, 79, 105, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(156, 160, 176);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(221, 225, 238);
  --min-width-image: 50%;
  --modal-background: rgb(252, 252, 252);
  --modal-border-color: rgb(221, 225, 238);
  --mono-rgb-100: 76, 79, 105;
  --nav-collapse-icon-color: rgb(108, 111, 133);
  --nav-collapse-icon-color-collapsed: rgb(108, 111, 133);
  --nav-folder-title-color: rgba(252, 252, 252);
  --nav-heading-color: rgb(76, 79, 105);
  --nav-heading-color-collapsed: rgb(108, 111, 133);
  --nav-heading-color-collapsed-hover: rgb(76, 79, 105);
  --nav-heading-color-hover: rgb(76, 79, 105);
  --nav-indentation-guide-color: rgba(254, 241, 241, 0.4);
  --nav-item-background-active: rgba(76, 79, 105, 0.075);
  --nav-item-background-hover: rgba(76, 79, 105, 0.075);
  --nav-item-background-selected: rgba(222, 149, 132, 0.2);
  --nav-item-color: rgb(76, 79, 105);
  --nav-item-color-active: rgb(76, 79, 105);
  --nav-item-color-highlighted: rgb(222, 149, 132);
  --nav-item-color-hover: rgb(76, 79, 105);
  --nav-item-color-selected: rgb(76, 79, 105);
  --nav-tag-color: rgb(108, 111, 133);
  --nav-tag-color-active: rgb(76, 79, 105);
  --nav-tag-color-hover: rgb(76, 79, 105);
  --orange: 249, 102, 50;
  --outline-border: 2px;
  --overlay0: 156, 160, 176;
  --overlay1: 140, 143, 161;
  --overlay2: 76, 79, 105;
  --panel-page-opacity: 0.25;
  --pdf-background: rgb(252, 252, 252);
  --pdf-page-background: rgb(252, 252, 252);
  --pdf-sidebar-background: rgb(252, 252, 252);
  --pill-border-color: rgb(188, 192, 204);
  --pill-border-color-hover: rgb(221, 225, 238);
  --pill-color: rgb(76, 79, 105);
  --pill-color-hover: rgb(76, 79, 105);
  --pill-color-remove: rgb(108, 111, 133);
  --pill-color-remove-hover: rgb(222, 149, 132);
  --prompt-background: rgb(252, 252, 252);
  --prompt-border-color: rgb(156, 160, 176);
  --raised-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent));
  --red: 240, 68, 114;
  --ribbon-background: rgb(243, 236, 243);
  --ribbon-background-collapsed: rgb(252, 252, 252);
  --rose: 215, 125, 146;
  --scrollbar-active-thumb-bg: rgba(76, 79, 105, 0.2);
  --scrollbar-bg: rgba(76, 79, 105, 0.05);
  --scrollbar-thumb-bg: rgba(76, 79, 105, 0.1);
  --sea: 23, 146, 153;
  --search-clear-button-color: rgb(76, 79, 105);
  --search-icon-color: rgb(76, 79, 105);
  --search-result-background: rgb(252, 252, 252);
  --setting-group-heading-color: rgb(76, 79, 105);
  --setting-items-background: rgb(243, 236, 243);
  --setting-items-border-color: rgb(188, 192, 204);
  --shadow-l: 0px 1.8px 7.3px rgba(254, 241, 241, 0.071), 0px 6.3px 24.7px rgba(254, 241, 241, 0.112),
    0px 30px 90px rgba(254, 241, 241, 0.2);
  --shadow-s: 0px 1px 2px rgba(254, 241, 241, 0.121), 0px 3.4px 6.7px rgba(254, 241, 241, 0.179),
    0px 15px 30px rgba(254, 241, 241, 0.3);
  --shib-bold-color: 240, 68, 114;
  --shib-callout-fold-position: 1;
  --shib-italic-color: 64, 155, 40;
  --shib-speech-bubble-opacity: 0.5;
  --side: 243, 236, 243;
  --slider-thumb-border-color: rgb(221, 225, 238);
  --slider-track-background: rgb(188, 192, 204);
  --status-bar-background: rgb(243, 236, 243);
  --status-bar-border-color: rgb(188, 192, 204);
  --status-bar-text-color: rgb(76, 79, 105);
  --subtext0: 108, 111, 133;
  --subtext1: 92, 95, 119;
  --suggestion-background: rgb(252, 252, 252);
  --surface0: 221, 225, 238;
  --surface1: 188, 192, 204;
  --surface2: 221, 225, 238;
  --swatch-shadow: inset 0 0 0 1px rgba(76, 79, 105, 0.15);
  --sync-avatar-color-1: rgb(240, 68, 114);
  --sync-avatar-color-2: rgb(249, 102, 50);
  --sync-avatar-color-3: rgb(228, 147, 32);
  --sync-avatar-color-4: rgb(64, 155, 40);
  --sync-avatar-color-5: rgb(23, 146, 153);
  --sync-avatar-color-6: rgb(71, 143, 238);
  --sync-avatar-color-7: rgb(176, 110, 201);
  --sync-avatar-color-8: rgb(215, 125, 146);
  --tab-background-active: rgb(252, 252, 252);
  --tab-container-background: rgb(243, 236, 243);
  --tab-divider-color: rgb(221, 225, 238);
  --tab-inactive-color: rgb(243, 236, 243);
  --tab-outline-color: rgb(188, 192, 204);
  --tab-radius: 0px;
  --tab-switcher-background: rgb(243, 236, 243);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(243, 236, 243), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(222, 149, 132);
  --tab-text-color: rgb(108, 111, 133);
  --tab-text-color-active: rgb(76, 79, 105);
  --tab-text-color-focused: rgb(76, 79, 105);
  --tab-text-color-focused-active: rgb(76, 79, 105);
  --tab-text-color-focused-active-current: rgb(76, 79, 105);
  --tab-text-color-focused-highlighted: rgb(222, 149, 132);
  --table-add-button-border-color: rgb(188, 192, 204);
  --table-border-color: rgb(188, 192, 204);
  --table-drag-handle-background-active: rgb(222, 149, 132);
  --table-drag-handle-color: rgb(108, 111, 133);
  --table-drag-handle-color-active: rgb(252, 252, 252);
  --table-header-border-color: rgb(188, 192, 204);
  --table-header-color: rgb(76, 79, 105);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(222, 149, 132);
  --tag-background: rgba(222, 149, 132, 0.1);
  --tag-background-hover: rgba(222, 149, 132, 0.2);
  --tag-border-color: rgba(222, 149, 132, 0.15);
  --tag-border-color-hover: rgba(222, 149, 132, 0.15);
  --tag-color: rgb(222, 149, 132);
  --tag-color-hover: rgb(222, 149, 132);
  --text: 76, 79, 105;
  --text-accent: rgb(222, 149, 132);
  --text-accent-hover: rgb(222, 149, 132);
  --text-error: rgb(240, 68, 114);
  --text-error-hover: rgba(240, 68, 114, 0.8);
  --text-faint: rgb(108, 111, 133);
  --text-highlight-bg: rgba(249, 102, 50, 0.2);
  --text-highlight-bg-active: rgba(249, 102, 50, 0.4);
  --text-muted: rgb(76, 79, 105);
  --text-muted-rgb: 76, 79, 105;
  --text-normal: rgb(76, 79, 105);
  --text-on-accent: rgb(252, 252, 252);
  --text-selection: rgba(71, 143, 238, 0.15);
  --text-success: rgb(64, 155, 40);
  --text-warning: rgb(249, 102, 50);
  --titlebar-background: rgb(243, 236, 243);
  --titlebar-background-focused: rgb(254, 241, 241);
  --titlebar-border-color: rgb(188, 192, 204);
  --titlebar-text-color: rgb(76, 79, 105);
  --titlebar-text-color-focused: rgb(222, 149, 132);
  --turquoise: 58, 161, 182;
  --unresolved-link-color: rgba(222, 149, 132, 0.8);
  --vault-profile-color: rgb(76, 79, 105);
  --vault-profile-color-hover: rgb(76, 79, 105);
  --violet: 176, 110, 201;
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(254, 241, 241, 0.6);
  --yellow: 228, 147, 32;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(243, 236, 243);
  color: rgb(76, 79, 105);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(76, 79, 105);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(243, 236, 243);
  color: rgb(76, 79, 105);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(188, 192, 204);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 236, 243);
  border-left-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(76, 79, 105);
}`,
    typography: `body .page article p > b, b {
  color: rgb(240, 68, 114);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 68, 114) none 0px;
  text-decoration: rgb(240, 68, 114);
  text-decoration-color: rgb(240, 68, 114);
}

body .page article p > em, em {
  color: rgb(64, 155, 40);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration: rgb(64, 155, 40);
  text-decoration-color: rgb(64, 155, 40);
}

body .page article p > i, i {
  color: rgb(64, 155, 40);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration: rgb(64, 155, 40);
  text-decoration-color: rgb(64, 155, 40);
}

body .page article p > strong, strong {
  color: rgb(240, 68, 114);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 68, 114) none 0px;
  text-decoration: rgb(240, 68, 114);
  text-decoration-color: rgb(240, 68, 114);
}

body .text-highlight {
  background-color: rgba(249, 102, 50, 0.2);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body del {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: line-through rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body p {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}`,
    links: `body a.external, footer a {
  color: rgba(222, 149, 132, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.8) none 0px;
  text-decoration: underline rgba(222, 149, 132, 0.8);
  text-decoration-color: rgba(222, 149, 132, 0.8);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(222, 149, 132, 0.9);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.9) none 0px;
  text-decoration: rgba(222, 149, 132, 0.9);
  text-decoration-color: rgba(222, 149, 132, 0.9);
}

body a.internal.broken {
  color: rgba(222, 149, 132, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.8) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(76, 79, 105);
}

body dt {
  color: rgb(76, 79, 105);
}

body ol > li {
  color: rgb(76, 79, 105);
}

body ol.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body ul > li {
  color: rgb(76, 79, 105);
}

body ul.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}

body blockquote {
  background-color: rgba(254, 241, 241, 0.5);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body table {
  border-bottom-color: rgb(188, 192, 204);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(188, 192, 204);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(188, 192, 204);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(188, 192, 204);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 20px;
  width: 661px;
}

body td {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
  text-align: center;
}

body th {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
  text-align: center;
}

body thead {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

body tr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    code: `body code {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body pre > code > [data-line] {
  border-left-color: rgb(228, 147, 32);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(228, 147, 32);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(228, 147, 32);
  border-left-color: rgb(228, 147, 32);
  border-right-color: rgb(228, 147, 32);
  border-top-color: rgb(228, 147, 32);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

body pre:has(> code) {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    images: `body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body figcaption {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body img {
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(76, 79, 105);
  border-radius: 15px;
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `body .file-embed {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(76, 79, 105);
  text-decoration: line-through rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='-'] {
  color: rgb(76, 79, 105);
  text-decoration: line-through rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 23, 146, 153;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(23, 146, 153, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(23, 146, 153, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(23, 146, 153, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(23, 146, 153, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 240, 68, 114;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 240, 68, 114;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 176, 110, 201;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(176, 110, 201, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(176, 110, 201, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(176, 110, 201, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(176, 110, 201, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 240, 68, 114;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 71, 143, 238;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 71, 143, 238;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 249, 102, 50;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(249, 102, 50, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(249, 102, 50, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(249, 102, 50, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(249, 102, 50, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(158, 158, 158, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 64, 155, 40;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(64, 155, 40, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(64, 155, 40, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(64, 155, 40, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(64, 155, 40, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 23, 146, 153;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(23, 146, 153, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(23, 146, 153, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(23, 146, 153, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(23, 146, 153, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 71, 143, 238;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 249, 102, 50;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(249, 102, 50, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(249, 102, 50, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(249, 102, 50, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(249, 102, 50, 0.4);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(254, 241, 241, 0.3);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
  box-shadow: rgba(254, 241, 241, 0.07) 0px 1.8px 7.3px 0px, rgba(254, 241, 241, 0.114) 0px 6.3px 24.7px 0px, rgba(254, 241, 241, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(243, 236, 243);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(76, 79, 105, 0.075);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(222, 149, 132, 0.1);
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(222, 149, 132);
}

body h1 {
  color: rgb(240, 68, 114);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(222, 149, 132);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(240, 68, 114);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(23, 146, 153);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(37, 189, 209);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(71, 143, 238);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(58, 161, 182);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
}`,
    scrollbars: `body .callout {
  --callout-color: 71, 143, 238;
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(76, 79, 105);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(76, 79, 105);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(76, 79, 105);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(76, 79, 105, 0.075);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}`,
    footer: `body footer {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body footer ul li a {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body li.section-li > .section .meta {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
}

body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .darkmode svg {
  color: rgb(76, 79, 105);
  stroke: rgb(76, 79, 105);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .breadcrumb-element p {
  color: rgb(108, 111, 133);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .metadata {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(243, 236, 243);
}

body .page-header h2.page-title {
  color: rgb(76, 79, 105);
}

body abbr {
  color: rgb(76, 79, 105);
  text-decoration: underline dotted rgb(76, 79, 105);
}

body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body input[type=text] {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body kbd {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body sub {
  color: rgb(76, 79, 105);
}

body summary {
  color: rgb(76, 79, 105);
}

body sup {
  color: rgb(76, 79, 105);
}`,
  },
};
