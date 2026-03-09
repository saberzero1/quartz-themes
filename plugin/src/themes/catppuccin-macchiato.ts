import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "catppuccin.macchiato",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["nunito-sans", "vollkorn"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgb(139, 108, 239);
  --background-modifier-border: rgb(54, 58, 79);
  --background-modifier-border-focus: rgb(110, 115, 141);
  --background-modifier-border-hover: rgb(91, 96, 120);
  --background-modifier-box-shadow: rgb(24, 25, 38, 30%);
  --background-modifier-cover: rgb(24, 25, 38, 90%);
  --background-modifier-error: rgb(237, 135, 150, 90%);
  --background-modifier-error-hover: rgb(237, 135, 150, 100%);
  --background-modifier-error-rgb: 237, 135, 150;
  --background-modifier-form-field: rgb(24, 25, 38, 30%);
  --background-modifier-form-field-highlighted: rgb(24, 25, 38, 22%);
  --background-modifier-form-field-hover: rgb(24, 25, 38, 30%);
  --background-modifier-hover: rgb(202, 211, 245, 7.5%);
  --background-modifier-message: rgb(0, 0, 0, 90%);
  --background-modifier-success: rgb(166, 218, 149, 90%);
  --background-modifier-success-rgb: 166, 218, 149;
  --background-primary: rgb(36, 39, 58);
  --background-primary-alt: rgb(30, 32, 48);
  --background-primary-rgb: 36, 39, 58;
  --background-secondary: rgb(30, 32, 48);
  --background-secondary-alt: rgb(24, 25, 38);
  --bases-cards-background: rgb(36, 39, 58);
  --bases-cards-cover-background: rgb(30, 32, 48);
  --bases-cards-shadow: 0 0 0 1px rgb(54, 58, 79);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(91, 96, 120);
  --bases-embed-border-color: rgb(54, 58, 79);
  --bases-group-heading-property-color: rgb(165, 173, 203);
  --bases-table-border-color: rgb(54, 58, 79);
  --bases-table-cell-background-active: rgb(36, 39, 58);
  --bases-table-cell-background-disabled: rgb(30, 32, 48);
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(110, 115, 141);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(183, 189, 248);
  --bases-table-group-background: rgb(30, 32, 48);
  --bases-table-header-background: rgb(36, 39, 58);
  --bases-table-header-background-hover: rgb(202, 211, 245, 7.5%);
  --bases-table-header-color: rgb(165, 173, 203);
  --bases-table-summary-background: rgb(36, 39, 58);
  --bases-table-summary-background-hover: rgb(202, 211, 245, 7.5%);
  --blockquote-border-color: rgb(183, 189, 248);
  --blur-background: color-mix(in srgb, rgb(54, 58, 79) 65%, transparent) linear-gradient(rgb(54, 58, 79), color-mix(in srgb, rgb(54, 58, 79) 65%, transparent));
  --bold-weight: 600;
  --callout-border-opacity: 0.2;
  --callout-border-width: 0.25px;
  --callout-bug: 237, 135, 150;
  --callout-default: 138, 173, 244;
  --callout-error: 237, 135, 150;
  --callout-example: 198, 160, 246;
  --callout-fail: 237, 135, 150;
  --callout-important: 125, 196, 228;
  --callout-info: 138, 173, 244;
  --callout-padding: 12px 12px
    12px 24px;
  --callout-question: 238, 212, 159;
  --callout-success: 166, 218, 149;
  --callout-summary: 125, 196, 228;
  --callout-tip: 125, 196, 228;
  --callout-todo: 138, 173, 244;
  --callout-warning: 245, 169, 127;
  --canvas-background: rgb(36, 39, 58);
  --canvas-card-label-color: rgb(73, 77, 100);
  --canvas-color-1: 237, 135, 150;
  --canvas-color-2: 245, 169, 127;
  --canvas-color-3: 238, 212, 159;
  --canvas-color-4: 166, 218, 149;
  --canvas-color-5: 125, 196, 228;
  --canvas-color-6: 198, 160, 246;
  --canvas-dot-pattern: rgb(73, 77, 100);
  --caret-color: rgb(202, 211, 245);
  --checkbox-border-color: rgb(73, 77, 100);
  --checkbox-border-color-hover: rgb(165, 173, 203);
  --checkbox-color: rgb(183, 189, 248);
  --checkbox-color-hover: rgb(183, 189, 248);
  --checkbox-marker-color: rgb(36, 39, 58);
  --checklist-done-color: rgb(166, 218, 149);
  --code-background: rgb(30, 32, 48);
  --code-border-color: rgb(54, 58, 79);
  --code-bracket-background: rgb(202, 211, 245, 7.5%);
  --code-comment: rgb(73, 77, 100);
  --code-function: rgb(238, 212, 159);
  --code-important: rgb(245, 169, 127);
  --code-keyword: rgb(245, 189, 230);
  --code-normal: rgb(165, 173, 203);
  --code-operator: rgb(237, 135, 150);
  --code-property: rgb(145, 215, 227);
  --code-punctuation: rgb(165, 173, 203);
  --code-string: rgb(166, 218, 149);
  --code-tag: rgb(237, 135, 150);
  --code-value: rgb(183, 189, 248);
  --collapse-icon-color: rgb(73, 77, 100);
  --collapse-icon-color-collapsed: rgb(165, 173, 203);
  --color-accent: rgb(183, 189, 248);
  --color-accent-1: rgb(183, 189, 248);
  --color-accent-2: rgb(183, 189, 248, 90%);
  --color-accent-hsl: 254, 80%, 68%;
  --color-base-00: rgb(24, 25, 38);
  --color-base-10: rgb(30, 32, 48);
  --color-base-100: rgb(202, 211, 245);
  --color-base-20: rgb(36, 39, 58);
  --color-base-25: rgb(54, 58, 79);
  --color-base-30: rgb(73, 77, 100);
  --color-base-35: rgb(91, 96, 120);
  --color-base-40: rgb(110, 115, 141);
  --color-base-50: rgb(128, 135, 162);
  --color-base-60: rgb(147, 154, 183);
  --color-base-70: rgb(165, 173, 203);
  --color-blue: rgb(138, 173, 244);
  --color-blue-rgb: 138, 173, 244;
  --color-cyan: rgb(145, 215, 227);
  --color-cyan-rgb: 125, 196, 228;
  --color-green: rgb(166, 218, 149);
  --color-green-rgb: 166, 218, 149;
  --color-orange: rgb(245, 169, 127);
  --color-orange-rgb: 245, 169, 127;
  --color-pink: rgb(245, 189, 230);
  --color-pink-rgb: 245, 189, 230;
  --color-purple: rgb(183, 189, 248);
  --color-purple-rgb: 198, 160, 246;
  --color-red: rgb(237, 135, 150);
  --color-red-rgb: 237, 135, 150;
  --color-yellow: rgb(238, 212, 159);
  --color-yellow-rgb: 238, 212, 159;
  --ctp-accent: 183, 189, 248;
  --ctp-base: 36, 39, 58;
  --ctp-blockquote: 244, 219, 214;
  --ctp-blue: 138, 173, 244;
  --ctp-bold: 125, 196, 228;
  --ctp-crust: 24, 25, 38;
  --ctp-flamingo: 240, 198, 198;
  --ctp-green: 166, 218, 149;
  --ctp-h1: 183, 189, 248;
  --ctp-h2: 183, 189, 248;
  --ctp-h3: 183, 189, 248;
  --ctp-h4: 183, 189, 248;
  --ctp-h5: 183, 189, 248;
  --ctp-h6: 183, 189, 248;
  --ctp-italic: 166, 218, 149;
  --ctp-lavender: 183, 189, 248;
  --ctp-mantle: 30, 32, 48;
  --ctp-maroon: 238, 153, 160;
  --ctp-mauve: 198, 160, 246;
  --ctp-overlay0: 110, 115, 141;
  --ctp-overlay1: 128, 135, 162;
  --ctp-overlay2: 147, 154, 183;
  --ctp-page-title: 202, 211, 245;
  --ctp-peach: 245, 169, 127;
  --ctp-pink: 245, 189, 230;
  --ctp-red: 237, 135, 150;
  --ctp-rosewater: 244, 219, 214;
  --ctp-sapphire: 125, 196, 228;
  --ctp-sky: 145, 215, 227;
  --ctp-strikethrough: 238, 153, 160;
  --ctp-subtext0: 165, 173, 203;
  --ctp-subtext1: 184, 192, 224;
  --ctp-surface0: 54, 58, 79;
  --ctp-surface1: 73, 77, 100;
  --ctp-surface2: 91, 96, 120;
  --ctp-tag-pill-color: 183, 189, 248;
  --ctp-teal: 139, 213, 202;
  --ctp-text: 202, 211, 245;
  --ctp-yellow: 238, 212, 159;
  --divider-color: rgb(54, 58, 79);
  --divider-color-hover: rgb(138, 173, 244);
  --divider-width-hover: 2px;
  --drag-ghost-background: rgb(0, 0, 0, 85%);
  --drag-ghost-text-color: rgb(202, 211, 245);
  --dropdown-background: rgb(54, 58, 79);
  --dropdown-background-hover: rgb(73, 77, 100);
  --embed-block-shadow-hover: 0 0 0 1px
    rgb(54, 58, 79),
    inset 0 0 0 1px rgb(54, 58, 79);
  --embed-border-left: 2px solid rgb(183, 189, 248);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(183, 189, 248);
  --file-header-background: rgb(36, 39, 58);
  --file-header-background-focused: rgb(36, 39, 58);
  --file-header-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 32px;
  --flair-background: rgb(54, 58, 79);
  --flair-color: rgb(202, 211, 245);
  --font-interface: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif;
  --font-mermaid: '??', "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, 'Arial';
  --font-text: '??', "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif;
  --font-ui-medium: 16px;
  --footnote-divider-color: rgb(54, 58, 79);
  --footnote-id-color: rgb(165, 173, 203);
  --footnote-id-color-no-occurrences: rgb(73, 77, 100);
  --footnote-input-background-active: rgb(202, 211, 245, 7.5%);
  --graph-line: rgb(91, 96, 120);
  --graph-node: rgb(165, 173, 203);
  --graph-node-attachment: rgb(238, 212, 159);
  --graph-node-focused: rgb(183, 189, 248);
  --graph-node-tag: rgb(166, 218, 149);
  --graph-node-unresolved: rgb(73, 77, 100);
  --graph-text: rgb(202, 211, 245);
  --h1-line-height: 1.5;
  --h1-size: 2em;
  --h2-line-height: 1.5;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-line-height: 1.5;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-line-height: 1.5;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-size: 1.12em;
  --heading-formatting: rgb(73, 77, 100);
  --hex-blue: #8aadf4;
  --hex-green: #a6da95;
  --hex-lavender: #b7bdf8;
  --hex-mauve: #c6a0f6;
  --hex-peach: #f5a97f;
  --hex-pink: #f5bde6;
  --hex-red: #ed8796;
  --hex-sapphire: #7dc4e4;
  --hex-sky: #91d7e3;
  --hex-teal: #8bd5ca;
  --hex-yellow: #eed49f;
  --hr-color: rgb(138, 173, 244);
  --icon-color: rgb(165, 173, 203);
  --icon-color-active: rgb(183, 189, 248);
  --icon-color-focused: rgb(202, 211, 245);
  --icon-color-hover: rgb(30, 32, 48);
  --icon-opacity: 1;
  --indentation-guide-color: rgb(73, 77, 100);
  --indentation-guide-color-active: rgb(125, 196, 228, 70%);
  --indentation-guide-width: 2px;
  --inline-title-line-height: 1.5;
  --inline-title-size: 2em;
  --input-date-separator: rgb(73, 77, 100);
  --input-placeholder-color: rgb(73, 77, 100);
  --interactive-accent: rgb(183, 189, 248);
  --interactive-accent-hover: rgb(183, 189, 248);
  --interactive-accent-hsl: 254, 80%, 68%;
  --interactive-accent-rgb: 183, 189, 248;
  --interactive-hover: rgb(73, 77, 100);
  --interactive-normal: rgb(54, 58, 79);
  --interactive-success: rgb(166, 218, 149);
  --line-height-tight: 1.25;
  --link-color: rgb(138, 173, 244);
  --link-color-hover: rgb(138, 173, 244);
  --link-decoration: none;
  --link-decoration-thickness: 2px;
  --link-external-color: rgb(139, 213, 202);
  --link-external-color-hover: rgb(139, 213, 202);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(238, 153, 160);
  --link-unresolved-decoration-color: rgb(237, 135, 150);
  --link-unresolved-opacity: 1;
  --list-indent: 2em;
  --list-marker-color: rgb(125, 196, 228);
  --list-marker-color-collapsed: rgb(183, 189, 248);
  --list-marker-color-hover: rgb(165, 173, 203);
  --list-spacing: 0.1em;
  --menu-background: rgb(30, 32, 48);
  --menu-border-color: rgb(91, 96, 120);
  --metadata-border-color: rgb(54, 58, 79);
  --metadata-divider-color: rgb(54, 58, 79);
  --metadata-input-background-active: rgb(202, 211, 245, 7.5%);
  --metadata-input-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(202, 211, 245);
  --metadata-label-background-active: rgb(202, 211, 245, 7.5%);
  --metadata-label-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(165, 173, 203);
  --metadata-label-text-color-hover: rgb(165, 173, 203);
  --metadata-property-background-active: rgb(202, 211, 245, 7.5%);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(110, 115, 141);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(91, 96, 120);
  --modal-background: rgb(36, 39, 58);
  --modal-border-color: rgb(110, 115, 141);
  --modal-radius: 10px;
  --mono-rgb-0: 24, 25, 38;
  --mono-rgb-100: 202, 211, 245;
  --nav-collapse-icon-color: rgb(73, 77, 100);
  --nav-collapse-icon-color-collapsed: rgb(73, 77, 100);
  --nav-heading-color: rgb(202, 211, 245);
  --nav-heading-color-collapsed: rgb(73, 77, 100);
  --nav-heading-color-collapsed-hover: rgb(165, 173, 203);
  --nav-heading-color-hover: rgb(202, 211, 245);
  --nav-indentation-guide-color: rgb(73, 77, 100);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(202, 211, 245, 7.5%);
  --nav-item-background-hover: rgb(202, 211, 245, 7.5%);
  --nav-item-background-selected: rgb(139, 108, 239);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: rgb(165, 173, 203);
  --nav-item-color-active: rgb(30, 32, 48);
  --nav-item-color-highlighted: rgb(183, 189, 248);
  --nav-item-color-hover: rgb(30, 32, 48);
  --nav-item-color-selected: rgb(30, 32, 48);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(73, 77, 100);
  --nav-tag-color-active: rgb(165, 173, 203);
  --nav-tag-color-hover: rgb(165, 173, 203);
  --pdf-background: rgb(36, 39, 58);
  --pdf-page-background: rgb(36, 39, 58);
  --pdf-shadow: 0 0 0 1px rgb(54, 58, 79);
  --pdf-sidebar-background: rgb(36, 39, 58);
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(54, 58, 79);
  --pill-border-color: rgb(54, 58, 79);
  --pill-border-color-hover: rgb(91, 96, 120);
  --pill-color: rgb(165, 173, 203);
  --pill-color-hover: rgb(202, 211, 245);
  --pill-color-remove: rgb(73, 77, 100);
  --pill-color-remove-hover: rgb(183, 189, 248);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(36, 39, 58);
  --prompt-border-color: rgb(110, 115, 141);
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, rgb(54, 58, 79) 65%, transparent) linear-gradient(rgb(54, 58, 79), color-mix(in srgb, rgb(54, 58, 79) 65%, transparent));
  --ribbon-background: rgb(30, 32, 48);
  --ribbon-background-collapsed: rgb(36, 39, 58);
  --ribbon-padding: 8px 4px
    12px;
  --scrollbar-active-thumb-bg: rgb(202, 211, 245, 20%);
  --scrollbar-bg: rgb(202, 211, 245, 5%);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgb(202, 211, 245, 10%);
  --search-clear-button-color: rgb(165, 173, 203);
  --search-icon-color: rgb(165, 173, 203);
  --search-result-background: rgb(36, 39, 58);
  --setting-group-heading-color: rgb(202, 211, 245);
  --setting-group-heading-size: 16px;
  --setting-items-background: rgb(30, 32, 48);
  --setting-items-border-color: rgb(54, 58, 79);
  --setting-items-radius: 10px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: rgb(91, 96, 120);
  --slider-thumb-radius: 50%;
  --slider-track-background: rgb(54, 58, 79);
  --status-bar-background: rgb(30, 32, 48);
  --status-bar-border-color: rgb(54, 58, 79);
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: rgb(165, 173, 203);
  --suggestion-background: rgb(36, 39, 58);
  --swatch-height: 24px;
  --swatch-shadow: inset 0 0 0 1px
    rgb(202, 211, 245, 15%);
  --swatch-width: 24px;
  --sync-avatar-color-1: rgb(237, 135, 150);
  --sync-avatar-color-2: rgb(245, 169, 127);
  --sync-avatar-color-3: rgb(238, 212, 159);
  --sync-avatar-color-4: rgb(166, 218, 149);
  --sync-avatar-color-5: rgb(145, 215, 227);
  --sync-avatar-color-6: rgb(138, 173, 244);
  --sync-avatar-color-7: rgb(183, 189, 248);
  --sync-avatar-color-8: rgb(245, 189, 230);
  --tab-background-active: rgb(36, 39, 58);
  --tab-container-background: rgb(30, 32, 48);
  --tab-divider-color: rgb(91, 96, 120);
  --tab-outline-color: rgb(54, 58, 79);
  --tab-stacked-shadow: -8px 0 8px 0 rgb(0, 0, 0, 5%);
  --tab-stacked-text-align: left;
  --tab-switcher-background: rgb(30, 32, 48);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(30, 32, 48), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(202, 211, 245, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(183, 189, 248);
  --tab-text-color: rgb(73, 77, 100);
  --tab-text-color-active: rgb(165, 173, 203);
  --tab-text-color-focused: rgb(165, 173, 203);
  --tab-text-color-focused-active: rgb(202, 211, 245);
  --tab-text-color-focused-active-current: rgb(202, 211, 245);
  --tab-text-color-focused-highlighted: rgb(183, 189, 248);
  --table-add-button-border-color: rgb(54, 58, 79);
  --table-border-color: rgb(54, 58, 79);
  --table-drag-handle-background-active: rgb(183, 189, 248);
  --table-drag-handle-color: rgb(73, 77, 100);
  --table-drag-handle-color-active: rgb(30, 32, 48);
  --table-header-border-color: rgb(54, 58, 79);
  --table-header-color: rgb(165, 173, 203);
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.25;
  --table-selection: rgba(139, 108, 239, 0.1);
  --table-selection-border-color: rgb(183, 189, 248);
  --table-white-space: normal;
  --tag-background: transparent;
  --tag-background-hover: 0;
  --tag-border-color: rgb(139, 108, 239);
  --tag-border-color-hover: hsl(
      254, 80%, 68%,
      15%
    );
  --tag-border-width: 0;
  --tag-color: rgb(183, 189, 248);
  --tag-color-hover: rgb(183, 189, 248);
  --tag-decoration-hover: underline;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-radius: 0.8em;
  --tag-size: max(16px, 0.933em);
  --text-accent: rgb(183, 189, 248);
  --text-accent-hover: rgb(183, 189, 248);
  --text-error: rgb(237, 135, 150);
  --text-error-hover: rgb(237, 135, 150, 80%);
  --text-faint: rgb(73, 77, 100);
  --text-highlight-bg: rgb(244, 219, 214, 100%);
  --text-highlight-bg-active: rgb(244, 219, 214, 100%);
  --text-muted: rgb(165, 173, 203);
  --text-muted-rgb: 165, 173, 203;
  --text-normal: rgb(202, 211, 245);
  --text-on-accent: rgb(30, 32, 48);
  --text-on-accent-inverted: rgb(30, 32, 48);
  --text-selection: rgb(147, 154, 183, 30%);
  --text-success: rgb(166, 218, 149);
  --text-warning: rgb(245, 169, 127);
  --titlebar-background: rgb(30, 32, 48);
  --titlebar-background-focused: rgb(24, 25, 38);
  --titlebar-border-color: rgb(54, 58, 79);
  --titlebar-border-width: 0;
  --titlebar-text-color: rgb(165, 173, 203);
  --titlebar-text-color-focused: rgb(202, 211, 245);
  --titlebar-text-color-highlighted: rgb(183, 189, 248);
  --toggle-thumb-color: rgb(202, 211, 245);
  --transition-hover-bg: background-color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-box-shadow: box-shadow 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-color: color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-color-fast: color 0.2s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-text-decoration-color: text-decoration-color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --vault-name-color: rgb(202, 211, 245);
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(202, 211, 245);
  --vault-profile-color-hover: rgb(202, 211, 245);
  --workspace-background-translucent: rgb(24, 25, 38, 60%);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 32, 48);
  color: rgb(202, 211, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(36, 39, 58);
  color: rgb(202, 211, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 32, 48);
  color: rgb(202, 211, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 58, 79);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 32, 48);
  border-left-color: rgb(54, 58, 79);
  color: rgb(202, 211, 245);
}

body div#quartz-root {
  background-color: rgb(36, 39, 58);
  color: rgb(202, 211, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(125, 196, 228);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(125, 196, 228) none 0px;
  text-decoration: rgb(125, 196, 228);
  text-decoration-color: rgb(125, 196, 228);
}

body .page article p > em, em {
  color: rgb(166, 218, 149);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 218, 149) none 0px;
  text-decoration: rgb(166, 218, 149);
  text-decoration-color: rgb(166, 218, 149);
}

body .page article p > i, i {
  color: rgb(166, 218, 149);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 218, 149) none 0px;
  text-decoration: rgb(166, 218, 149);
  text-decoration-color: rgb(166, 218, 149);
}

body .page article p > strong, strong {
  color: rgb(125, 196, 228);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(125, 196, 228) none 0px;
  text-decoration: rgb(125, 196, 228);
  text-decoration-color: rgb(125, 196, 228);
}

body .text-highlight {
  background-color: rgb(244, 219, 214);
  color: rgb(30, 32, 48);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 32, 48) none 0px;
  text-decoration: rgb(30, 32, 48);
  text-decoration-color: rgb(30, 32, 48);
}

body del {
  color: rgb(238, 153, 160);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(238, 153, 160) none 0px;
  text-decoration: line-through rgb(238, 153, 160);
  text-decoration-color: rgb(238, 153, 160);
}

body p {
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(165, 173, 203) none 0px;
  text-decoration: rgb(165, 173, 203);
  text-decoration-color: rgb(165, 173, 203);
}`,
    links: `body a.external, footer a {
  color: rgb(139, 213, 202);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(139, 213, 202) none 0px;
  text-decoration: 2px rgb(139, 213, 202);
  text-decoration-color: rgb(139, 213, 202);
  text-decoration-thickness: 2px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 173, 244);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 173, 244) none 0px;
  text-decoration: 2px rgb(138, 173, 244);
  text-decoration-color: rgb(138, 173, 244);
  text-decoration-thickness: 2px;
}

body a.internal.broken {
  color: rgb(238, 153, 160);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(238, 153, 160) none 0px;
  text-decoration: 2px rgb(237, 135, 150);
  text-decoration-color: rgb(237, 135, 150);
  text-decoration-thickness: 2px;
}`,
    lists: `body dd {
  color: rgb(202, 211, 245);
}

body dt {
  color: rgb(202, 211, 245);
}

body ol > li {
  color: rgb(202, 211, 245);
}

body ol.overflow {
  background-color: rgb(36, 39, 58);
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body ul > li {
  color: rgb(202, 211, 245);
}

body ul.overflow {
  background-color: rgb(36, 39, 58);
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(73, 77, 100);
  text-decoration: rgb(73, 77, 100);
}

body blockquote {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body table {
  color: rgb(202, 211, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 163.453px;
}

body td {
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
  color: rgb(202, 211, 245);
}

body th {
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
  color: rgb(165, 173, 203);
  font-weight: 400;
}`,
    code: `body code {
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
  color: rgb(165, 173, 203);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 32, 48);
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 32, 48);
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
  color: rgb(202, 211, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(238, 212, 159);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(238, 212, 159);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(238, 212, 159);
  border-left-color: rgb(238, 212, 159);
  border-right-color: rgb(238, 212, 159);
  border-top-color: rgb(238, 212, 159);
}

body pre > code, pre:has(> code) {
  background-color: rgb(30, 32, 48);
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
}

body pre:has(> code) {
  background-color: rgb(30, 32, 48);
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
}`,
    images: `body audio {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body figcaption {
  color: rgb(202, 211, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body img {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body video {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(30, 32, 48);
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
}

body .footnotes {
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

body .transclude {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(183, 189, 248);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(183, 189, 248);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 218, 149);
  text-decoration: line-through rgb(166, 218, 149);
  text-decoration-color: rgb(166, 218, 149);
}

body input[type=checkbox] {
  border-bottom-color: rgb(238, 153, 160);
  border-left-color: rgb(238, 153, 160);
  border-right-color: rgb(238, 153, 160);
  border-top-color: rgb(238, 153, 160);
}

body li.task-list-item[data-task='!'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(73, 77, 100);
  text-decoration: line-through 1px rgb(73, 77, 100);
  text-decoration-color: rgb(73, 77, 100);
}

body li.task-list-item[data-task='/'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(202, 211, 245);
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(138, 173, 244);
  border-left-color: rgb(138, 173, 244);
  border-right-color: rgb(138, 173, 244);
  border-top-color: rgb(138, 173, 244);
}

body .callout[data-callout="abstract"] {
  --callout-color: 125, 196, 228;
  background-color: rgba(125, 196, 228, 0.1);
  border-bottom-color: rgba(125, 196, 228, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(125, 196, 228, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(125, 196, 228, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(125, 196, 228, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 237, 135, 150;
  background-color: rgba(237, 135, 150, 0.1);
  border-bottom-color: rgba(237, 135, 150, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 135, 150, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(237, 135, 150, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(237, 135, 150, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 237, 135, 150;
  background-color: rgba(237, 135, 150, 0.1);
  border-bottom-color: rgba(237, 135, 150, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 135, 150, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(237, 135, 150, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(237, 135, 150, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 198, 160, 246;
  background-color: rgba(198, 160, 246, 0.1);
  border-bottom-color: rgba(198, 160, 246, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(198, 160, 246, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(198, 160, 246, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(198, 160, 246, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 237, 135, 150;
  background-color: rgba(237, 135, 150, 0.1);
  border-bottom-color: rgba(237, 135, 150, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 135, 150, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(237, 135, 150, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(237, 135, 150, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 138, 173, 244;
  background-color: rgba(138, 173, 244, 0.1);
  border-bottom-color: rgba(138, 173, 244, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 173, 244, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(138, 173, 244, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(138, 173, 244, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 138, 173, 244;
  background-color: rgba(138, 173, 244, 0.1);
  border-bottom-color: rgba(138, 173, 244, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 173, 244, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(138, 173, 244, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(138, 173, 244, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 238, 212, 159;
  background-color: rgba(238, 212, 159, 0.1);
  border-bottom-color: rgba(238, 212, 159, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(238, 212, 159, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(238, 212, 159, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(238, 212, 159, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 166, 218, 149;
  background-color: rgba(166, 218, 149, 0.1);
  border-bottom-color: rgba(166, 218, 149, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(166, 218, 149, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(166, 218, 149, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(166, 218, 149, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 125, 196, 228;
  background-color: rgba(125, 196, 228, 0.1);
  border-bottom-color: rgba(125, 196, 228, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(125, 196, 228, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(125, 196, 228, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(125, 196, 228, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 138, 173, 244;
  background-color: rgba(138, 173, 244, 0.1);
  border-bottom-color: rgba(138, 173, 244, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 173, 244, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(138, 173, 244, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(138, 173, 244, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 245, 169, 127;
  background-color: rgba(245, 169, 127, 0.1);
  border-bottom-color: rgba(245, 169, 127, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(245, 169, 127, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(245, 169, 127, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(245, 169, 127, 0.6);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(24, 25, 38, 0.3);
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
  color: rgb(202, 211, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(36, 39, 58);
  border-bottom-color: rgb(73, 77, 100);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(30, 32, 48);
  color: rgb(202, 211, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(202, 211, 245) none 0px;
  text-decoration: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(30, 32, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(30, 32, 48);
  border-left-color: rgb(30, 32, 48);
  border-right-color: rgb(30, 32, 48);
  border-top-color: rgb(30, 32, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(30, 32, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(183, 189, 248);
  color: rgb(30, 32, 48);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(73, 77, 100);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(202, 211, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(183, 189, 248);
  border-bottom-color: rgb(30, 32, 48);
  border-left-color: rgb(30, 32, 48);
  border-right-color: rgb(30, 32, 48);
  border-top-color: rgb(30, 32, 48);
  color: rgb(30, 32, 48);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(183, 189, 248);
  color: rgb(30, 32, 48);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(139, 108, 239, 0.1);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-left-color: rgba(139, 108, 239, 0.1);
  border-right-color: rgba(139, 108, 239, 0.1);
  border-top-color: rgba(139, 108, 239, 0.1);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(183, 189, 248);
}

body h1 {
  color: rgb(183, 189, 248);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(183, 189, 248);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(202, 211, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(183, 189, 248);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(183, 189, 248);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(183, 189, 248);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(183, 189, 248);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
}`,
    scrollbars: `body .callout {
  --callout-color: 138, 173, 244;
  border-bottom-color: rgba(138, 173, 244, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 173, 244, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(138, 173, 244, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(138, 173, 244, 0.6);
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

body ::-webkit-scrollbar-corner {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

body ::-webkit-scrollbar-track {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 203);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 203);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 203);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(198, 160, 246);
  border-bottom-color: rgb(30, 32, 48);
  border-left-color: rgb(30, 32, 48);
  border-right-color: rgb(30, 32, 48);
  border-top-color: rgb(30, 32, 48);
  color: rgb(30, 32, 48);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
  color: rgb(165, 173, 203);
}`,
    footer: `body footer {
  background-color: rgb(30, 32, 48);
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(165, 173, 203);
  text-decoration: rgb(165, 173, 203);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(202, 211, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(165, 173, 203);
  text-decoration: rgb(165, 173, 203);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body li.section-li > .section .meta {
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(165, 173, 203);
  text-decoration: rgb(165, 173, 203);
}

body ul.section-ul {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
  color: rgb(165, 173, 203);
}

body .darkmode svg {
  color: rgb(165, 173, 203);
  stroke: rgb(165, 173, 203);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
  color: rgb(165, 173, 203);
}

body .breadcrumb-element p {
  color: rgb(73, 77, 100);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

body .metadata {
  border-bottom-color: rgb(54, 58, 79);
  border-left-color: rgb(54, 58, 79);
  border-right-color: rgb(54, 58, 79);
  border-top-color: rgb(54, 58, 79);
  color: rgb(165, 173, 203);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
  color: rgb(165, 173, 203);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(30, 32, 48);
}

body .page-header h2.page-title {
  color: rgb(202, 211, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(202, 211, 245);
  text-decoration: underline dotted rgb(202, 211, 245);
}

body details {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body input[type=text] {
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
  color: rgb(165, 173, 203);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(30, 32, 48);
  border-bottom-color: rgb(165, 173, 203);
  border-left-color: rgb(165, 173, 203);
  border-right-color: rgb(165, 173, 203);
  border-top-color: rgb(165, 173, 203);
  color: rgb(165, 173, 203);
}

body progress {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

body sub {
  color: rgb(202, 211, 245);
}

body summary {
  color: rgb(202, 211, 245);
}

body sup {
  color: rgb(202, 211, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgb(139, 108, 239);
  --background-modifier-border: rgb(204, 208, 218);
  --background-modifier-border-focus: rgb(156, 160, 176);
  --background-modifier-border-hover: rgb(172, 176, 190);
  --background-modifier-box-shadow: rgb(220, 224, 232, 30%);
  --background-modifier-cover: rgb(220, 224, 232, 90%);
  --background-modifier-error: rgb(210, 15, 57, 90%);
  --background-modifier-error-hover: rgb(210, 15, 57, 100%);
  --background-modifier-error-rgb: 210, 15, 57;
  --background-modifier-form-field: rgb(220, 224, 232, 30%);
  --background-modifier-form-field-highlighted: rgb(220, 224, 232, 22%);
  --background-modifier-form-field-hover: rgb(220, 224, 232, 30%);
  --background-modifier-hover: rgb(76, 79, 105, 7.5%);
  --background-modifier-message: rgb(0, 0, 0, 90%);
  --background-modifier-success: rgb(64, 160, 43, 90%);
  --background-modifier-success-rgb: 64, 160, 43;
  --background-primary: rgb(239, 241, 245);
  --background-primary-alt: rgb(230, 233, 239);
  --background-primary-rgb: 239, 241, 245;
  --background-secondary: rgb(230, 233, 239);
  --background-secondary-alt: rgb(220, 224, 232);
  --bases-cards-background: rgb(239, 241, 245);
  --bases-cards-cover-background: rgb(230, 233, 239);
  --bases-cards-shadow: 0 0 0 1px rgb(204, 208, 218);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(172, 176, 190);
  --bases-embed-border-color: rgb(204, 208, 218);
  --bases-group-heading-property-color: rgb(108, 111, 133);
  --bases-table-border-color: rgb(204, 208, 218);
  --bases-table-cell-background-active: rgb(239, 241, 245);
  --bases-table-cell-background-disabled: rgb(230, 233, 239);
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(156, 160, 176);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(114, 135, 253);
  --bases-table-group-background: rgb(230, 233, 239);
  --bases-table-header-background: rgb(239, 241, 245);
  --bases-table-header-background-hover: rgb(76, 79, 105, 7.5%);
  --bases-table-header-color: rgb(108, 111, 133);
  --bases-table-summary-background: rgb(239, 241, 245);
  --bases-table-summary-background-hover: rgb(76, 79, 105, 7.5%);
  --blockquote-border-color: rgb(114, 135, 253);
  --blur-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent));
  --bold-weight: 600;
  --callout-border-opacity: 0.2;
  --callout-border-width: 0.25px;
  --callout-bug: 210, 15, 57;
  --callout-default: 30, 102, 245;
  --callout-error: 210, 15, 57;
  --callout-example: 136, 57, 239;
  --callout-fail: 210, 15, 57;
  --callout-important: 32, 159, 181;
  --callout-info: 30, 102, 245;
  --callout-padding: 12px 12px
    12px 24px;
  --callout-question: 223, 142, 29;
  --callout-success: 64, 160, 43;
  --callout-summary: 32, 159, 181;
  --callout-tip: 32, 159, 181;
  --callout-todo: 30, 102, 245;
  --callout-warning: 254, 100, 11;
  --canvas-background: rgb(239, 241, 245);
  --canvas-card-label-color: rgb(188, 192, 204);
  --canvas-color-1: 210, 15, 57;
  --canvas-color-2: 254, 100, 11;
  --canvas-color-3: 223, 142, 29;
  --canvas-color-4: 64, 160, 43;
  --canvas-color-5: 32, 159, 181;
  --canvas-color-6: 136, 57, 239;
  --canvas-dot-pattern: rgb(188, 192, 204);
  --caret-color: rgb(76, 79, 105);
  --checkbox-border-color: rgb(188, 192, 204);
  --checkbox-border-color-hover: rgb(108, 111, 133);
  --checkbox-color: rgb(114, 135, 253);
  --checkbox-color-hover: rgb(114, 135, 253);
  --checkbox-marker-color: rgb(239, 241, 245);
  --checklist-done-color: rgb(64, 160, 43);
  --code-background: rgb(230, 233, 239);
  --code-border-color: rgb(204, 208, 218);
  --code-bracket-background: rgb(76, 79, 105, 7.5%);
  --code-comment: rgb(188, 192, 204);
  --code-function: rgb(223, 142, 29);
  --code-important: rgb(254, 100, 11);
  --code-keyword: rgb(234, 118, 203);
  --code-normal: rgb(108, 111, 133);
  --code-operator: rgb(210, 15, 57);
  --code-property: rgb(4, 165, 229);
  --code-punctuation: rgb(108, 111, 133);
  --code-string: rgb(64, 160, 43);
  --code-tag: rgb(210, 15, 57);
  --code-value: rgb(114, 135, 253);
  --collapse-icon-color: rgb(188, 192, 204);
  --collapse-icon-color-collapsed: rgb(108, 111, 133);
  --color-accent: rgb(114, 135, 253);
  --color-accent-1: rgb(114, 135, 253);
  --color-accent-2: rgb(114, 135, 253, 90%);
  --color-accent-hsl: 254, 80%, 68%;
  --color-base-00: rgb(220, 224, 232);
  --color-base-10: rgb(230, 233, 239);
  --color-base-100: rgb(76, 79, 105);
  --color-base-20: rgb(239, 241, 245);
  --color-base-25: rgb(204, 208, 218);
  --color-base-30: rgb(188, 192, 204);
  --color-base-35: rgb(172, 176, 190);
  --color-base-40: rgb(156, 160, 176);
  --color-base-50: rgb(140, 143, 161);
  --color-base-60: rgb(124, 127, 147);
  --color-base-70: rgb(108, 111, 133);
  --color-blue: rgb(30, 102, 245);
  --color-blue-rgb: 30, 102, 245;
  --color-cyan: rgb(4, 165, 229);
  --color-cyan-rgb: 32, 159, 181;
  --color-green: rgb(64, 160, 43);
  --color-green-rgb: 64, 160, 43;
  --color-orange: rgb(254, 100, 11);
  --color-orange-rgb: 254, 100, 11;
  --color-pink: rgb(234, 118, 203);
  --color-pink-rgb: 234, 118, 203;
  --color-purple: rgb(114, 135, 253);
  --color-purple-rgb: 136, 57, 239;
  --color-red: rgb(210, 15, 57);
  --color-red-rgb: 210, 15, 57;
  --color-yellow: rgb(223, 142, 29);
  --color-yellow-rgb: 223, 142, 29;
  --ctp-accent: 114, 135, 253;
  --ctp-base: 239, 241, 245;
  --ctp-blockquote: 220, 138, 120;
  --ctp-blue: 30, 102, 245;
  --ctp-bold: 32, 159, 181;
  --ctp-crust: 220, 224, 232;
  --ctp-flamingo: 221, 120, 120;
  --ctp-green: 64, 160, 43;
  --ctp-h1: 114, 135, 253;
  --ctp-h2: 114, 135, 253;
  --ctp-h3: 114, 135, 253;
  --ctp-h4: 114, 135, 253;
  --ctp-h5: 114, 135, 253;
  --ctp-h6: 114, 135, 253;
  --ctp-italic: 64, 160, 43;
  --ctp-lavender: 114, 135, 253;
  --ctp-mantle: 230, 233, 239;
  --ctp-maroon: 230, 69, 83;
  --ctp-mauve: 136, 57, 239;
  --ctp-overlay0: 156, 160, 176;
  --ctp-overlay1: 140, 143, 161;
  --ctp-overlay2: 124, 127, 147;
  --ctp-page-title: 76, 79, 105;
  --ctp-peach: 254, 100, 11;
  --ctp-pink: 234, 118, 203;
  --ctp-red: 210, 15, 57;
  --ctp-rosewater: 220, 138, 120;
  --ctp-sapphire: 32, 159, 181;
  --ctp-sky: 4, 165, 229;
  --ctp-strikethrough: 230, 69, 83;
  --ctp-subtext0: 108, 111, 133;
  --ctp-subtext1: 92, 95, 119;
  --ctp-surface0: 204, 208, 218;
  --ctp-surface1: 188, 192, 204;
  --ctp-surface2: 172, 176, 190;
  --ctp-tag-pill-color: 114, 135, 253;
  --ctp-teal: 23, 146, 153;
  --ctp-text: 76, 79, 105;
  --ctp-yellow: 223, 142, 29;
  --divider-color: rgb(204, 208, 218);
  --divider-color-hover: rgb(30, 102, 245);
  --divider-width-hover: 2px;
  --drag-ghost-background: rgb(0, 0, 0, 85%);
  --drag-ghost-text-color: rgb(76, 79, 105);
  --dropdown-background: rgb(204, 208, 218);
  --dropdown-background-hover: rgb(188, 192, 204);
  --embed-block-shadow-hover: 0 0 0 1px
    rgb(204, 208, 218),
    inset 0 0 0 1px rgb(204, 208, 218);
  --embed-border-left: 2px solid rgb(114, 135, 253);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(114, 135, 253);
  --file-header-background: rgb(239, 241, 245);
  --file-header-background-focused: rgb(239, 241, 245);
  --file-header-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 32px;
  --flair-background: rgb(204, 208, 218);
  --flair-color: rgb(76, 79, 105);
  --font-interface: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif;
  --font-mermaid: '??', "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, 'Arial';
  --font-text: '??', "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif;
  --font-ui-medium: 16px;
  --footnote-divider-color: rgb(204, 208, 218);
  --footnote-id-color: rgb(108, 111, 133);
  --footnote-id-color-no-occurrences: rgb(188, 192, 204);
  --footnote-input-background-active: rgb(76, 79, 105, 7.5%);
  --graph-line: rgb(172, 176, 190);
  --graph-node: rgb(108, 111, 133);
  --graph-node-attachment: rgb(223, 142, 29);
  --graph-node-focused: rgb(114, 135, 253);
  --graph-node-tag: rgb(64, 160, 43);
  --graph-node-unresolved: rgb(188, 192, 204);
  --graph-text: rgb(76, 79, 105);
  --h1-line-height: 1.5;
  --h1-size: 2em;
  --h2-line-height: 1.5;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-line-height: 1.5;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-line-height: 1.5;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-size: 1.12em;
  --heading-formatting: rgb(188, 192, 204);
  --hex-blue: #1e66f5;
  --hex-green: #40a02b;
  --hex-lavender: #7287fd;
  --hex-mauve: #8839ef;
  --hex-peach: #fe640b;
  --hex-pink: #ea76cb;
  --hex-red: #d20f39;
  --hex-sapphire: #209fb5;
  --hex-sky: #04a5e5;
  --hex-teal: #179299;
  --hex-yellow: #df8e1d;
  --hr-color: rgb(30, 102, 245);
  --icon-color: rgb(108, 111, 133);
  --icon-color-active: rgb(114, 135, 253);
  --icon-color-focused: rgb(76, 79, 105);
  --icon-color-hover: rgb(230, 233, 239);
  --icon-opacity: 1;
  --indentation-guide-color: rgb(188, 192, 204);
  --indentation-guide-color-active: rgb(32, 159, 181, 70%);
  --indentation-guide-width: 2px;
  --inline-title-line-height: 1.5;
  --inline-title-size: 2em;
  --input-date-separator: rgb(188, 192, 204);
  --input-placeholder-color: rgb(188, 192, 204);
  --interactive-accent: rgb(114, 135, 253);
  --interactive-accent-hover: rgb(114, 135, 253);
  --interactive-accent-hsl: 254, 80%, 68%;
  --interactive-accent-rgb: 114, 135, 253;
  --interactive-hover: rgb(188, 192, 204);
  --interactive-normal: rgb(204, 208, 218);
  --interactive-success: rgb(64, 160, 43);
  --line-height-tight: 1.25;
  --link-color: rgb(30, 102, 245);
  --link-color-hover: rgb(30, 102, 245);
  --link-decoration: none;
  --link-decoration-thickness: 2px;
  --link-external-color: rgb(23, 146, 153);
  --link-external-color-hover: rgb(23, 146, 153);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(230, 69, 83);
  --link-unresolved-decoration-color: rgb(210, 15, 57);
  --link-unresolved-opacity: 1;
  --list-indent: 2em;
  --list-marker-color: rgb(32, 159, 181);
  --list-marker-color-collapsed: rgb(114, 135, 253);
  --list-marker-color-hover: rgb(108, 111, 133);
  --list-spacing: 0.1em;
  --menu-background: rgb(230, 233, 239);
  --menu-border-color: rgb(172, 176, 190);
  --metadata-border-color: rgb(204, 208, 218);
  --metadata-divider-color: rgb(204, 208, 218);
  --metadata-input-background-active: rgb(76, 79, 105, 7.5%);
  --metadata-input-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(76, 79, 105);
  --metadata-label-background-active: rgb(76, 79, 105, 7.5%);
  --metadata-label-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(108, 111, 133);
  --metadata-label-text-color-hover: rgb(108, 111, 133);
  --metadata-property-background-active: rgb(76, 79, 105, 7.5%);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(156, 160, 176);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(172, 176, 190);
  --modal-background: rgb(239, 241, 245);
  --modal-border-color: rgb(156, 160, 176);
  --modal-radius: 10px;
  --mono-rgb-0: 220, 224, 232;
  --mono-rgb-100: 76, 79, 105;
  --nav-collapse-icon-color: rgb(188, 192, 204);
  --nav-collapse-icon-color-collapsed: rgb(188, 192, 204);
  --nav-heading-color: rgb(76, 79, 105);
  --nav-heading-color-collapsed: rgb(188, 192, 204);
  --nav-heading-color-collapsed-hover: rgb(108, 111, 133);
  --nav-heading-color-hover: rgb(76, 79, 105);
  --nav-indentation-guide-color: rgb(188, 192, 204);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(76, 79, 105, 7.5%);
  --nav-item-background-hover: rgb(76, 79, 105, 7.5%);
  --nav-item-background-selected: rgb(139, 108, 239);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: rgb(108, 111, 133);
  --nav-item-color-active: rgb(230, 233, 239);
  --nav-item-color-highlighted: rgb(114, 135, 253);
  --nav-item-color-hover: rgb(230, 233, 239);
  --nav-item-color-selected: rgb(230, 233, 239);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(188, 192, 204);
  --nav-tag-color-active: rgb(108, 111, 133);
  --nav-tag-color-hover: rgb(108, 111, 133);
  --pdf-background: rgb(239, 241, 245);
  --pdf-page-background: rgb(239, 241, 245);
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.1);
  --pdf-sidebar-background: rgb(239, 241, 245);
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2);
  --pill-border-color: rgb(204, 208, 218);
  --pill-border-color-hover: rgb(172, 176, 190);
  --pill-color: rgb(108, 111, 133);
  --pill-color-hover: rgb(76, 79, 105);
  --pill-color-remove: rgb(188, 192, 204);
  --pill-color-remove-hover: rgb(114, 135, 253);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(239, 241, 245);
  --prompt-border-color: rgb(156, 160, 176);
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent));
  --ribbon-background: rgb(230, 233, 239);
  --ribbon-background-collapsed: rgb(239, 241, 245);
  --ribbon-padding: 8px 4px
    12px;
  --scrollbar-active-thumb-bg: rgb(76, 79, 105, 20%);
  --scrollbar-bg: rgb(76, 79, 105, 5%);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgb(76, 79, 105, 10%);
  --search-clear-button-color: rgb(108, 111, 133);
  --search-icon-color: rgb(108, 111, 133);
  --search-result-background: rgb(239, 241, 245);
  --setting-group-heading-color: rgb(76, 79, 105);
  --setting-group-heading-size: 16px;
  --setting-items-background: rgb(230, 233, 239);
  --setting-items-border-color: rgb(204, 208, 218);
  --setting-items-radius: 10px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: rgb(172, 176, 190);
  --slider-thumb-radius: 50%;
  --slider-track-background: rgb(204, 208, 218);
  --status-bar-background: rgb(230, 233, 239);
  --status-bar-border-color: rgb(204, 208, 218);
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: rgb(108, 111, 133);
  --suggestion-background: rgb(239, 241, 245);
  --swatch-height: 24px;
  --swatch-shadow: inset 0 0 0 1px
    rgb(76, 79, 105, 15%);
  --swatch-width: 24px;
  --sync-avatar-color-1: rgb(210, 15, 57);
  --sync-avatar-color-2: rgb(254, 100, 11);
  --sync-avatar-color-3: rgb(223, 142, 29);
  --sync-avatar-color-4: rgb(64, 160, 43);
  --sync-avatar-color-5: rgb(4, 165, 229);
  --sync-avatar-color-6: rgb(30, 102, 245);
  --sync-avatar-color-7: rgb(114, 135, 253);
  --sync-avatar-color-8: rgb(234, 118, 203);
  --tab-background-active: rgb(239, 241, 245);
  --tab-container-background: rgb(230, 233, 239);
  --tab-divider-color: rgb(172, 176, 190);
  --tab-outline-color: rgb(204, 208, 218);
  --tab-stacked-shadow: -8px 0 8px 0 rgb(0, 0, 0, 5%);
  --tab-stacked-text-align: left;
  --tab-switcher-background: rgb(230, 233, 239);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(230, 233, 239), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(114, 135, 253);
  --tab-text-color: rgb(188, 192, 204);
  --tab-text-color-active: rgb(108, 111, 133);
  --tab-text-color-focused: rgb(108, 111, 133);
  --tab-text-color-focused-active: rgb(76, 79, 105);
  --tab-text-color-focused-active-current: rgb(76, 79, 105);
  --tab-text-color-focused-highlighted: rgb(114, 135, 253);
  --table-add-button-border-color: rgb(204, 208, 218);
  --table-border-color: rgb(204, 208, 218);
  --table-drag-handle-background-active: rgb(114, 135, 253);
  --table-drag-handle-color: rgb(188, 192, 204);
  --table-drag-handle-color-active: rgb(230, 233, 239);
  --table-header-border-color: rgb(204, 208, 218);
  --table-header-color: rgb(108, 111, 133);
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.25;
  --table-selection: rgba(139, 108, 239, 0.1);
  --table-selection-border-color: rgb(114, 135, 253);
  --table-white-space: normal;
  --tag-background: transparent;
  --tag-background-hover: 0;
  --tag-border-color: rgb(139, 108, 239);
  --tag-border-color-hover: hsl(
      254, 80%, 68%,
      15%
    );
  --tag-border-width: 0;
  --tag-color: rgb(114, 135, 253);
  --tag-color-hover: rgb(114, 135, 253);
  --tag-decoration-hover: underline;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-radius: 0.8em;
  --tag-size: max(16px, 0.933em);
  --text-accent: rgb(114, 135, 253);
  --text-accent-hover: rgb(114, 135, 253);
  --text-error: rgb(210, 15, 57);
  --text-error-hover: rgb(210, 15, 57, 80%);
  --text-faint: rgb(188, 192, 204);
  --text-highlight-bg: rgb(220, 138, 120, 100%);
  --text-highlight-bg-active: rgb(220, 138, 120, 100%);
  --text-muted: rgb(108, 111, 133);
  --text-muted-rgb: 108, 111, 133;
  --text-normal: rgb(76, 79, 105);
  --text-on-accent: rgb(230, 233, 239);
  --text-on-accent-inverted: rgb(230, 233, 239);
  --text-selection: rgb(124, 127, 147, 30%);
  --text-success: rgb(64, 160, 43);
  --text-warning: rgb(254, 100, 11);
  --titlebar-background: rgb(230, 233, 239);
  --titlebar-background-focused: rgb(220, 224, 232);
  --titlebar-border-color: rgb(204, 208, 218);
  --titlebar-border-width: 0;
  --titlebar-text-color: rgb(108, 111, 133);
  --titlebar-text-color-focused: rgb(76, 79, 105);
  --titlebar-text-color-highlighted: rgb(114, 135, 253);
  --toggle-thumb-color: rgb(76, 79, 105);
  --transition-hover-bg: background-color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-box-shadow: box-shadow 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-color: color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-color-fast: color 0.2s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-text-decoration-color: text-decoration-color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --vault-name-color: rgb(76, 79, 105);
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(76, 79, 105);
  --vault-profile-color-hover: rgb(76, 79, 105);
  --workspace-background-translucent: rgb(220, 224, 232, 60%);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(204, 208, 218);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 233, 239);
  border-left-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

body div#quartz-root {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}`,
    typography: `body .page article p > b, b {
  color: rgb(32, 159, 181);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(32, 159, 181) none 0px;
  text-decoration: rgb(32, 159, 181);
  text-decoration-color: rgb(32, 159, 181);
}

body .page article p > em, em {
  color: rgb(64, 160, 43);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 160, 43) none 0px;
  text-decoration: rgb(64, 160, 43);
  text-decoration-color: rgb(64, 160, 43);
}

body .page article p > i, i {
  color: rgb(64, 160, 43);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 160, 43) none 0px;
  text-decoration: rgb(64, 160, 43);
  text-decoration-color: rgb(64, 160, 43);
}

body .page article p > strong, strong {
  color: rgb(32, 159, 181);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(32, 159, 181) none 0px;
  text-decoration: rgb(32, 159, 181);
  text-decoration-color: rgb(32, 159, 181);
}

body .text-highlight {
  background-color: rgb(220, 138, 120);
  color: rgb(230, 233, 239);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 233, 239) none 0px;
  text-decoration: rgb(230, 233, 239);
  text-decoration-color: rgb(230, 233, 239);
}

body del {
  color: rgb(230, 69, 83);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 69, 83) none 0px;
  text-decoration: line-through rgb(230, 69, 83);
  text-decoration-color: rgb(230, 69, 83);
}

body p {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(108, 111, 133) none 0px;
  text-decoration: rgb(108, 111, 133);
  text-decoration-color: rgb(108, 111, 133);
}`,
    links: `body a.external, footer a {
  color: rgb(23, 146, 153);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(23, 146, 153) none 0px;
  text-decoration: 2px rgb(23, 146, 153);
  text-decoration-color: rgb(23, 146, 153);
  text-decoration-thickness: 2px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(30, 102, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 102, 245) none 0px;
  text-decoration: 2px rgb(30, 102, 245);
  text-decoration-color: rgb(30, 102, 245);
  text-decoration-thickness: 2px;
}

body a.internal.broken {
  color: rgb(230, 69, 83);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 69, 83) none 0px;
  text-decoration: 2px rgb(210, 15, 57);
  text-decoration-color: rgb(210, 15, 57);
  text-decoration-thickness: 2px;
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
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body ul > li {
  color: rgb(76, 79, 105);
}

body ul.overflow {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(188, 192, 204);
  text-decoration: rgb(188, 192, 204);
}

body blockquote {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body table {
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 163.453px;
}

body td {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

body th {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(108, 111, 133);
  font-weight: 400;
}`,
    code: `body code {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

body pre > code > [data-line] {
  border-left-color: rgb(223, 142, 29);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(223, 142, 29);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(223, 142, 29);
  border-left-color: rgb(223, 142, 29);
  border-right-color: rgb(223, 142, 29);
  border-top-color: rgb(223, 142, 29);
}

body pre > code, pre:has(> code) {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

body pre:has(> code) {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}`,
    images: `body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body figcaption {
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body img {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `body .file-embed {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(114, 135, 253);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(114, 135, 253);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(64, 160, 43);
  text-decoration: line-through rgb(64, 160, 43);
  text-decoration-color: rgb(64, 160, 43);
}

body input[type=checkbox] {
  border-bottom-color: rgb(230, 69, 83);
  border-left-color: rgb(230, 69, 83);
  border-right-color: rgb(230, 69, 83);
  border-top-color: rgb(230, 69, 83);
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
  color: rgb(188, 192, 204);
  text-decoration: line-through 1px rgb(188, 192, 204);
  text-decoration-color: rgb(188, 192, 204);
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
  border-bottom-color: rgb(30, 102, 245);
  border-left-color: rgb(30, 102, 245);
  border-right-color: rgb(30, 102, 245);
  border-top-color: rgb(30, 102, 245);
}

body .callout[data-callout="abstract"] {
  --callout-color: 32, 159, 181;
  background-color: rgba(32, 159, 181, 0.1);
  border-bottom-color: rgba(32, 159, 181, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(32, 159, 181, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(32, 159, 181, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(32, 159, 181, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(210, 15, 57, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(210, 15, 57, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(210, 15, 57, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(210, 15, 57, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(210, 15, 57, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(210, 15, 57, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 136, 57, 239;
  background-color: rgba(136, 57, 239, 0.1);
  border-bottom-color: rgba(136, 57, 239, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(136, 57, 239, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(136, 57, 239, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(136, 57, 239, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(210, 15, 57, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(210, 15, 57, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(210, 15, 57, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 30, 102, 245;
  background-color: rgba(30, 102, 245, 0.1);
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 30, 102, 245;
  background-color: rgba(30, 102, 245, 0.1);
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 223, 142, 29;
  background-color: rgba(223, 142, 29, 0.1);
  border-bottom-color: rgba(223, 142, 29, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(223, 142, 29, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(223, 142, 29, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(223, 142, 29, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 64, 160, 43;
  background-color: rgba(64, 160, 43, 0.1);
  border-bottom-color: rgba(64, 160, 43, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(64, 160, 43, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(64, 160, 43, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(64, 160, 43, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 32, 159, 181;
  background-color: rgba(32, 159, 181, 0.1);
  border-bottom-color: rgba(32, 159, 181, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(32, 159, 181, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(32, 159, 181, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(32, 159, 181, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 30, 102, 245;
  background-color: rgba(30, 102, 245, 0.1);
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 254, 100, 11;
  background-color: rgba(254, 100, 11, 0.1);
  border-bottom-color: rgba(254, 100, 11, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(254, 100, 11, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(254, 100, 11, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(254, 100, 11, 0.6);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(220, 224, 232, 0.3);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(188, 192, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 233, 239);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(230, 233, 239);
  border-right-color: rgb(230, 233, 239);
  border-top-color: rgb(230, 233, 239);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(230, 233, 239);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(114, 135, 253);
  color: rgb(230, 233, 239);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(188, 192, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-width: 0px;
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(114, 135, 253);
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(230, 233, 239);
  border-right-color: rgb(230, 233, 239);
  border-top-color: rgb(230, 233, 239);
  color: rgb(230, 233, 239);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(114, 135, 253);
  color: rgb(230, 233, 239);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(139, 108, 239, 0.1);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-left-color: rgba(139, 108, 239, 0.1);
  border-right-color: rgba(139, 108, 239, 0.1);
  border-top-color: rgba(139, 108, 239, 0.1);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(114, 135, 253);
}

body h1 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
}`,
    scrollbars: `body .callout {
  --callout-color: 30, 102, 245;
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 111, 133);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 111, 133);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 111, 133);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(136, 57, 239);
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(230, 233, 239);
  border-right-color: rgb(230, 233, 239);
  border-top-color: rgb(230, 233, 239);
  color: rgb(230, 233, 239);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}`,
    footer: `body footer {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(76, 79, 105);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body li.section-li > .section .meta {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}

body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}

body .darkmode svg {
  color: rgb(108, 111, 133);
  stroke: rgb(108, 111, 133);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}

body .breadcrumb-element p {
  color: rgb(188, 192, 204);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .metadata {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(108, 111, 133);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(230, 233, 239);
}

body .page-header h2.page-title {
  color: rgb(76, 79, 105);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
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
