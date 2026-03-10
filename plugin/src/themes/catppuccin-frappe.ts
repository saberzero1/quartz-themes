import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "catppuccin.frappe",
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
  --background-modifier-border: rgb(65, 69, 89);
  --background-modifier-border-focus: rgb(115, 121, 148);
  --background-modifier-border-hover: rgb(98, 104, 128);
  --background-modifier-box-shadow: rgb(35, 38, 52, 30%);
  --background-modifier-cover: rgb(35, 38, 52, 90%);
  --background-modifier-error: rgb(231, 130, 132, 90%);
  --background-modifier-error-hover: rgb(231, 130, 132, 100%);
  --background-modifier-error-rgb: 231, 130, 132;
  --background-modifier-form-field: rgb(35, 38, 52, 30%);
  --background-modifier-form-field-highlighted: rgb(35, 38, 52, 22%);
  --background-modifier-form-field-hover: rgb(35, 38, 52, 30%);
  --background-modifier-hover: rgb(198, 208, 245, 7.5%);
  --background-modifier-message: rgb(0, 0, 0, 90%);
  --background-modifier-success: rgb(166, 209, 137, 90%);
  --background-modifier-success-rgb: 166, 209, 137;
  --background-primary: rgb(48, 52, 70);
  --background-primary-alt: rgb(41, 44, 60);
  --background-primary-rgb: 48, 52, 70;
  --background-secondary: rgb(41, 44, 60);
  --background-secondary-alt: rgb(35, 38, 52);
  --bases-cards-background: rgb(48, 52, 70);
  --bases-cards-cover-background: rgb(41, 44, 60);
  --bases-cards-shadow: 0 0 0 1px rgb(65, 69, 89);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(98, 104, 128);
  --bases-embed-border-color: rgb(65, 69, 89);
  --bases-group-heading-property-color: rgb(165, 173, 206);
  --bases-table-border-color: rgb(65, 69, 89);
  --bases-table-cell-background-active: rgb(48, 52, 70);
  --bases-table-cell-background-disabled: rgb(41, 44, 60);
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(115, 121, 148);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(186, 187, 241);
  --bases-table-group-background: rgb(41, 44, 60);
  --bases-table-header-background: rgb(48, 52, 70);
  --bases-table-header-background-hover: rgb(198, 208, 245, 7.5%);
  --bases-table-header-color: rgb(165, 173, 206);
  --bases-table-summary-background: rgb(48, 52, 70);
  --bases-table-summary-background-hover: rgb(198, 208, 245, 7.5%);
  --blockquote-border-color: rgb(186, 187, 241);
  --blur-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-weight: 600;
  --callout-border-opacity: 0.2;
  --callout-border-width: 0.25px;
  --callout-bug: 231, 130, 132;
  --callout-default: 140, 170, 238;
  --callout-error: 231, 130, 132;
  --callout-example: 202, 158, 230;
  --callout-fail: 231, 130, 132;
  --callout-important: 133, 193, 220;
  --callout-info: 140, 170, 238;
  --callout-padding: 12px 12px
    12px 24px;
  --callout-question: 229, 200, 144;
  --callout-success: 166, 209, 137;
  --callout-summary: 133, 193, 220;
  --callout-tip: 133, 193, 220;
  --callout-todo: 140, 170, 238;
  --callout-warning: 239, 159, 118;
  --canvas-background: rgb(48, 52, 70);
  --canvas-card-label-color: rgb(81, 87, 109);
  --canvas-color-1: 231, 130, 132;
  --canvas-color-2: 239, 159, 118;
  --canvas-color-3: 229, 200, 144;
  --canvas-color-4: 166, 209, 137;
  --canvas-color-5: 133, 193, 220;
  --canvas-color-6: 202, 158, 230;
  --canvas-dot-pattern: rgb(81, 87, 109);
  --caret-color: rgb(198, 208, 245);
  --checkbox-border-color: rgb(81, 87, 109);
  --checkbox-border-color-hover: rgb(165, 173, 206);
  --checkbox-color: rgb(186, 187, 241);
  --checkbox-color-hover: rgb(186, 187, 241);
  --checkbox-marker-color: rgb(48, 52, 70);
  --checklist-done-color: rgb(166, 209, 137);
  --code-background: rgb(41, 44, 60);
  --code-border-color: rgb(65, 69, 89);
  --code-bracket-background: rgb(198, 208, 245, 7.5%);
  --code-comment: rgb(81, 87, 109);
  --code-function: rgb(229, 200, 144);
  --code-important: rgb(239, 159, 118);
  --code-keyword: rgb(244, 184, 228);
  --code-normal: rgb(165, 173, 206);
  --code-operator: rgb(231, 130, 132);
  --code-property: rgb(153, 209, 219);
  --code-punctuation: rgb(165, 173, 206);
  --code-string: rgb(166, 209, 137);
  --code-tag: rgb(231, 130, 132);
  --code-value: rgb(186, 187, 241);
  --codeFont: var(--font-text);
  --collapse-icon-color: rgb(81, 87, 109);
  --collapse-icon-color-collapsed: rgb(165, 173, 206);
  --color-accent: rgb(186, 187, 241);
  --color-accent-1: rgb(186, 187, 241);
  --color-accent-2: rgb(186, 187, 241, 90%);
  --color-accent-hsl: 254, 80%, 68%;
  --color-base-00: rgb(35, 38, 52);
  --color-base-10: rgb(41, 44, 60);
  --color-base-100: rgb(198, 208, 245);
  --color-base-20: rgb(48, 52, 70);
  --color-base-25: rgb(65, 69, 89);
  --color-base-30: rgb(81, 87, 109);
  --color-base-35: rgb(98, 104, 128);
  --color-base-40: rgb(115, 121, 148);
  --color-base-50: rgb(131, 139, 167);
  --color-base-60: rgb(148, 156, 187);
  --color-base-70: rgb(165, 173, 206);
  --color-blue: rgb(140, 170, 238);
  --color-blue-rgb: 140, 170, 238;
  --color-cyan: rgb(153, 209, 219);
  --color-cyan-rgb: 133, 193, 220;
  --color-green: rgb(166, 209, 137);
  --color-green-rgb: 166, 209, 137;
  --color-orange: rgb(239, 159, 118);
  --color-orange-rgb: 239, 159, 118;
  --color-pink: rgb(244, 184, 228);
  --color-pink-rgb: 244, 184, 228;
  --color-purple: rgb(186, 187, 241);
  --color-purple-rgb: 202, 158, 230;
  --color-red: rgb(231, 130, 132);
  --color-red-rgb: 231, 130, 132;
  --color-yellow: rgb(229, 200, 144);
  --color-yellow-rgb: 229, 200, 144;
  --ctp-accent: 186, 187, 241;
  --ctp-base: 48, 52, 70;
  --ctp-blockquote: 242, 213, 207;
  --ctp-blue: 140, 170, 238;
  --ctp-bold: 133, 193, 220;
  --ctp-crust: 35, 38, 52;
  --ctp-flamingo: 238, 190, 190;
  --ctp-green: 166, 209, 137;
  --ctp-h1: 186, 187, 241;
  --ctp-h2: 186, 187, 241;
  --ctp-h3: 186, 187, 241;
  --ctp-h4: 186, 187, 241;
  --ctp-h5: 186, 187, 241;
  --ctp-h6: 186, 187, 241;
  --ctp-italic: 166, 209, 137;
  --ctp-lavender: 186, 187, 241;
  --ctp-mantle: 41, 44, 60;
  --ctp-maroon: 234, 153, 156;
  --ctp-mauve: 202, 158, 230;
  --ctp-overlay0: 115, 121, 148;
  --ctp-overlay1: 131, 139, 167;
  --ctp-overlay2: 148, 156, 187;
  --ctp-page-title: 198, 208, 245;
  --ctp-peach: 239, 159, 118;
  --ctp-pink: 244, 184, 228;
  --ctp-red: 231, 130, 132;
  --ctp-rosewater: 242, 213, 207;
  --ctp-sapphire: 133, 193, 220;
  --ctp-sky: 153, 209, 219;
  --ctp-strikethrough: 234, 153, 156;
  --ctp-subtext0: 165, 173, 206;
  --ctp-subtext1: 181, 191, 226;
  --ctp-surface0: 65, 69, 89;
  --ctp-surface1: 81, 87, 109;
  --ctp-surface2: 98, 104, 128;
  --ctp-tag-pill-color: 186, 187, 241;
  --ctp-teal: 129, 200, 190;
  --ctp-text: 198, 208, 245;
  --ctp-yellow: 229, 200, 144;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(65, 69, 89);
  --divider-color-hover: rgb(140, 170, 238);
  --divider-width-hover: 2px;
  --drag-ghost-background: rgb(0, 0, 0, 85%);
  --drag-ghost-text-color: rgb(198, 208, 245);
  --dropdown-background: rgb(65, 69, 89);
  --dropdown-background-hover: rgb(81, 87, 109);
  --embed-block-shadow-hover: 0 0 0 1px
    rgb(65, 69, 89),
    inset 0 0 0 1px rgb(65, 69, 89);
  --embed-border-left: 2px solid rgb(186, 187, 241);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(186, 187, 241);
  --file-header-background: rgb(48, 52, 70);
  --file-header-background-focused: rgb(48, 52, 70);
  --file-header-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 32px;
  --flair-background: rgb(65, 69, 89);
  --flair-color: rgb(198, 208, 245);
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
  --footnote-divider-color: rgb(65, 69, 89);
  --footnote-id-color: rgb(165, 173, 206);
  --footnote-id-color-no-occurrences: rgb(81, 87, 109);
  --footnote-input-background-active: rgb(198, 208, 245, 7.5%);
  --graph-line: rgb(98, 104, 128);
  --graph-node: rgb(165, 173, 206);
  --graph-node-attachment: rgb(229, 200, 144);
  --graph-node-focused: rgb(186, 187, 241);
  --graph-node-tag: rgb(166, 209, 137);
  --graph-node-unresolved: rgb(81, 87, 109);
  --graph-text: rgb(198, 208, 245);
  --gray: var(--text-muted);
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
  --headerFont: var(--font-text);
  --heading-formatting: rgb(81, 87, 109);
  --hex-blue: #8caaee;
  --hex-green: #a6d189;
  --hex-lavender: #babbf1;
  --hex-mauve: #ca9ee6;
  --hex-peach: #ef9f76;
  --hex-pink: #f4b8e4;
  --hex-red: #e78284;
  --hex-sapphire: #85c1dc;
  --hex-sky: #99d1db;
  --hex-teal: #81c8be;
  --hex-yellow: #e5c890;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(140, 170, 238);
  --icon-color: rgb(165, 173, 206);
  --icon-color-active: rgb(186, 187, 241);
  --icon-color-focused: rgb(198, 208, 245);
  --icon-color-hover: rgb(41, 44, 60);
  --icon-opacity: 1;
  --indentation-guide-color: rgb(81, 87, 109);
  --indentation-guide-color-active: rgb(133, 193, 220, 70%);
  --indentation-guide-width: 2px;
  --inline-title-line-height: 1.5;
  --inline-title-size: 2em;
  --input-date-separator: rgb(81, 87, 109);
  --input-placeholder-color: rgb(81, 87, 109);
  --interactive-accent: rgb(186, 187, 241);
  --interactive-accent-hover: rgb(186, 187, 241);
  --interactive-accent-hsl: 254, 80%, 68%;
  --interactive-accent-rgb: 186, 187, 241;
  --interactive-hover: rgb(81, 87, 109);
  --interactive-normal: rgb(65, 69, 89);
  --interactive-success: rgb(166, 209, 137);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.25;
  --link-color: rgb(140, 170, 238);
  --link-color-hover: rgb(140, 170, 238);
  --link-decoration: none;
  --link-decoration-thickness: 2px;
  --link-external-color: rgb(129, 200, 190);
  --link-external-color-hover: rgb(129, 200, 190);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(234, 153, 156);
  --link-unresolved-decoration-color: rgb(231, 130, 132);
  --link-unresolved-opacity: 1;
  --list-indent: 2em;
  --list-marker-color: rgb(133, 193, 220);
  --list-marker-color-collapsed: rgb(186, 187, 241);
  --list-marker-color-hover: rgb(165, 173, 206);
  --list-spacing: 0.1em;
  --menu-background: rgb(41, 44, 60);
  --menu-border-color: rgb(98, 104, 128);
  --metadata-border-color: rgb(65, 69, 89);
  --metadata-divider-color: rgb(65, 69, 89);
  --metadata-input-background-active: rgb(198, 208, 245, 7.5%);
  --metadata-input-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(198, 208, 245);
  --metadata-label-background-active: rgb(198, 208, 245, 7.5%);
  --metadata-label-font: '??', "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(165, 173, 206);
  --metadata-label-text-color-hover: rgb(165, 173, 206);
  --metadata-property-background-active: rgb(198, 208, 245, 7.5%);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(115, 121, 148);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(98, 104, 128);
  --modal-background: rgb(48, 52, 70);
  --modal-border-color: rgb(115, 121, 148);
  --modal-radius: 10px;
  --mono-rgb-0: 35, 38, 52;
  --mono-rgb-100: 198, 208, 245;
  --nav-collapse-icon-color: rgb(81, 87, 109);
  --nav-collapse-icon-color-collapsed: rgb(81, 87, 109);
  --nav-heading-color: rgb(198, 208, 245);
  --nav-heading-color-collapsed: rgb(81, 87, 109);
  --nav-heading-color-collapsed-hover: rgb(165, 173, 206);
  --nav-heading-color-hover: rgb(198, 208, 245);
  --nav-indentation-guide-color: rgb(81, 87, 109);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(198, 208, 245, 7.5%);
  --nav-item-background-hover: rgb(198, 208, 245, 7.5%);
  --nav-item-background-selected: rgb(139, 108, 239);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: rgb(165, 173, 206);
  --nav-item-color-active: rgb(41, 44, 60);
  --nav-item-color-highlighted: rgb(186, 187, 241);
  --nav-item-color-hover: rgb(41, 44, 60);
  --nav-item-color-selected: rgb(41, 44, 60);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(81, 87, 109);
  --nav-tag-color-active: rgb(165, 173, 206);
  --nav-tag-color-hover: rgb(165, 173, 206);
  --pdf-background: rgb(48, 52, 70);
  --pdf-page-background: rgb(48, 52, 70);
  --pdf-shadow: 0 0 0 1px rgb(65, 69, 89);
  --pdf-sidebar-background: rgb(48, 52, 70);
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 69, 89);
  --pill-border-color: rgb(65, 69, 89);
  --pill-border-color-hover: rgb(98, 104, 128);
  --pill-color: rgb(165, 173, 206);
  --pill-color-hover: rgb(198, 208, 245);
  --pill-color-remove: rgb(81, 87, 109);
  --pill-color-remove-hover: rgb(186, 187, 241);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(48, 52, 70);
  --prompt-border-color: rgb(115, 121, 148);
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent));
  --ribbon-background: rgb(41, 44, 60);
  --ribbon-background-collapsed: rgb(48, 52, 70);
  --ribbon-padding: 8px 4px
    12px;
  --scrollbar-active-thumb-bg: rgb(198, 208, 245, 20%);
  --scrollbar-bg: rgb(198, 208, 245, 5%);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgb(198, 208, 245, 10%);
  --search-clear-button-color: rgb(165, 173, 206);
  --search-icon-color: rgb(165, 173, 206);
  --search-result-background: rgb(48, 52, 70);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(198, 208, 245);
  --setting-group-heading-size: 16px;
  --setting-items-background: rgb(41, 44, 60);
  --setting-items-border-color: rgb(65, 69, 89);
  --setting-items-radius: 10px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: rgb(98, 104, 128);
  --slider-thumb-radius: 50%;
  --slider-track-background: rgb(65, 69, 89);
  --status-bar-background: rgb(41, 44, 60);
  --status-bar-border-color: rgb(65, 69, 89);
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: rgb(165, 173, 206);
  --suggestion-background: rgb(48, 52, 70);
  --swatch-height: 24px;
  --swatch-shadow: inset 0 0 0 1px
    rgb(198, 208, 245, 15%);
  --swatch-width: 24px;
  --sync-avatar-color-1: rgb(231, 130, 132);
  --sync-avatar-color-2: rgb(239, 159, 118);
  --sync-avatar-color-3: rgb(229, 200, 144);
  --sync-avatar-color-4: rgb(166, 209, 137);
  --sync-avatar-color-5: rgb(153, 209, 219);
  --sync-avatar-color-6: rgb(140, 170, 238);
  --sync-avatar-color-7: rgb(186, 187, 241);
  --sync-avatar-color-8: rgb(244, 184, 228);
  --tab-background-active: rgb(48, 52, 70);
  --tab-container-background: rgb(41, 44, 60);
  --tab-divider-color: rgb(98, 104, 128);
  --tab-outline-color: rgb(65, 69, 89);
  --tab-stacked-shadow: -8px 0 8px 0 rgb(0, 0, 0, 5%);
  --tab-stacked-text-align: left;
  --tab-switcher-background: rgb(41, 44, 60);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(41, 44, 60), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 208, 245, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(186, 187, 241);
  --tab-text-color: rgb(81, 87, 109);
  --tab-text-color-active: rgb(165, 173, 206);
  --tab-text-color-focused: rgb(165, 173, 206);
  --tab-text-color-focused-active: rgb(198, 208, 245);
  --tab-text-color-focused-active-current: rgb(198, 208, 245);
  --tab-text-color-focused-highlighted: rgb(186, 187, 241);
  --table-add-button-border-color: rgb(65, 69, 89);
  --table-border-color: rgb(65, 69, 89);
  --table-drag-handle-background-active: rgb(186, 187, 241);
  --table-drag-handle-color: rgb(81, 87, 109);
  --table-drag-handle-color-active: rgb(41, 44, 60);
  --table-header-border-color: rgb(65, 69, 89);
  --table-header-color: rgb(165, 173, 206);
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.25;
  --table-selection: rgba(139, 108, 239, 0.1);
  --table-selection-border-color: rgb(186, 187, 241);
  --table-white-space: normal;
  --tag-background: transparent;
  --tag-background-hover: 0;
  --tag-border-color: rgb(139, 108, 239);
  --tag-border-color-hover: hsl(
      254, 80%, 68%,
      15%
    );
  --tag-border-width: 0;
  --tag-color: rgb(186, 187, 241);
  --tag-color-hover: rgb(186, 187, 241);
  --tag-decoration-hover: underline;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-radius: 0.8em;
  --tag-size: max(16px, 0.933em);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(186, 187, 241);
  --text-accent-hover: rgb(186, 187, 241);
  --text-error: rgb(231, 130, 132);
  --text-error-hover: rgb(231, 130, 132, 80%);
  --text-faint: rgb(81, 87, 109);
  --text-highlight-bg: rgb(242, 213, 207, 100%);
  --text-highlight-bg-active: rgb(242, 213, 207, 100%);
  --text-muted: rgb(165, 173, 206);
  --text-muted-rgb: 165, 173, 206;
  --text-normal: rgb(198, 208, 245);
  --text-on-accent: rgb(41, 44, 60);
  --text-on-accent-inverted: rgb(41, 44, 60);
  --text-selection: rgb(148, 156, 187, 30%);
  --text-success: rgb(166, 209, 137);
  --text-warning: rgb(239, 159, 118);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(41, 44, 60);
  --titlebar-background-focused: rgb(35, 38, 52);
  --titlebar-border-color: rgb(65, 69, 89);
  --titlebar-border-width: 0;
  --titlebar-text-color: rgb(165, 173, 206);
  --titlebar-text-color-focused: rgb(198, 208, 245);
  --titlebar-text-color-highlighted: rgb(186, 187, 241);
  --toggle-thumb-color: rgb(198, 208, 245);
  --transition-hover-bg: background-color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-box-shadow: box-shadow 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-color: color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-hover-color-fast: color 0.2s cubic-bezier(0.44, 0.21, 0, 1);
  --transition-text-decoration-color: text-decoration-color 0.3s cubic-bezier(0.44, 0.21, 0, 1);
  --vault-name-color: rgb(198, 208, 245);
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(198, 208, 245);
  --vault-profile-color-hover: rgb(198, 208, 245);
  --workspace-background-translucent: rgb(35, 38, 52, 60%);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 44, 60);
  color: rgb(198, 208, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(48, 52, 70);
  color: rgb(198, 208, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 44, 60);
  color: rgb(198, 208, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 69, 89);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 44, 60);
  border-left-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
}

body div#quartz-root {
  background-color: rgb(48, 52, 70);
  color: rgb(198, 208, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(133, 193, 220);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 193, 220) none 0px;
  text-decoration: rgb(133, 193, 220);
  text-decoration-color: rgb(133, 193, 220);
}

body .page article p > em, em {
  color: rgb(166, 209, 137);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 209, 137) none 0px;
  text-decoration: rgb(166, 209, 137);
  text-decoration-color: rgb(166, 209, 137);
}

body .page article p > i, i {
  color: rgb(166, 209, 137);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 209, 137) none 0px;
  text-decoration: rgb(166, 209, 137);
  text-decoration-color: rgb(166, 209, 137);
}

body .page article p > strong, strong {
  color: rgb(133, 193, 220);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 193, 220) none 0px;
  text-decoration: rgb(133, 193, 220);
  text-decoration-color: rgb(133, 193, 220);
}

body .text-highlight {
  background-color: rgb(242, 213, 207);
  color: rgb(41, 44, 60);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 60) none 0px;
  text-decoration: rgb(41, 44, 60);
  text-decoration-color: rgb(41, 44, 60);
}

body del {
  color: rgb(234, 153, 156);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(234, 153, 156) none 0px;
  text-decoration: line-through rgb(234, 153, 156);
  text-decoration-color: rgb(234, 153, 156);
}

body p {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(165, 173, 206) none 0px;
  text-decoration: rgb(165, 173, 206);
  text-decoration-color: rgb(165, 173, 206);
}`,
    links: `body a.external, footer a {
  color: rgb(129, 200, 190);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 200, 190) none 0px;
  text-decoration: 2px rgb(129, 200, 190);
  text-decoration-color: rgb(129, 200, 190);
  text-decoration-thickness: 2px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(140, 170, 238);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(140, 170, 238) none 0px;
  text-decoration: 2px rgb(140, 170, 238);
  text-decoration-color: rgb(140, 170, 238);
  text-decoration-thickness: 2px;
}

body a.internal.broken {
  color: rgb(234, 153, 156);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(234, 153, 156) none 0px;
  text-decoration: 2px rgb(231, 130, 132);
  text-decoration-color: rgb(231, 130, 132);
  text-decoration-thickness: 2px;
}`,
    lists: `body dd {
  color: rgb(198, 208, 245);
}

body dt {
  color: rgb(198, 208, 245);
}

body ol > li {
  color: rgb(198, 208, 245);
}

body ol.overflow {
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body ul > li {
  color: rgb(198, 208, 245);
}

body ul.overflow {
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(81, 87, 109);
  text-decoration: rgb(81, 87, 109);
}

body blockquote {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body table {
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 163.453px;
}

body td {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
}

body th {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(165, 173, 206);
  font-weight: 400;
}`,
    code: `body code {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 200, 144);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 200, 144);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 200, 144);
  border-left-color: rgb(229, 200, 144);
  border-right-color: rgb(229, 200, 144);
  border-top-color: rgb(229, 200, 144);
}

body pre > code, pre:has(> code) {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

body pre:has(> code) {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}`,
    images: `body audio {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body figcaption {
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body img {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body video {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
}

body .footnotes {
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body .transclude {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(186, 187, 241);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(186, 187, 241);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 209, 137);
  text-decoration: line-through rgb(166, 209, 137);
  text-decoration-color: rgb(166, 209, 137);
}

body input[type=checkbox] {
  border-bottom-color: rgb(234, 153, 156);
  border-left-color: rgb(234, 153, 156);
  border-right-color: rgb(234, 153, 156);
  border-top-color: rgb(234, 153, 156);
}

body li.task-list-item[data-task='!'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(81, 87, 109);
  text-decoration: line-through 1px rgb(81, 87, 109);
  text-decoration-color: rgb(81, 87, 109);
}

body li.task-list-item[data-task='/'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(140, 170, 238);
  border-left-color: rgb(140, 170, 238);
  border-right-color: rgb(140, 170, 238);
  border-top-color: rgb(140, 170, 238);
}

body .callout[data-callout="abstract"] {
  --callout-color: 133, 193, 220;
  background-color: rgba(133, 193, 220, 0.1);
  border-bottom-color: rgba(133, 193, 220, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(133, 193, 220, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(133, 193, 220, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(133, 193, 220, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 231, 130, 132;
  background-color: rgba(231, 130, 132, 0.1);
  border-bottom-color: rgba(231, 130, 132, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(231, 130, 132, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(231, 130, 132, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(231, 130, 132, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 231, 130, 132;
  background-color: rgba(231, 130, 132, 0.1);
  border-bottom-color: rgba(231, 130, 132, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(231, 130, 132, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(231, 130, 132, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(231, 130, 132, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 202, 158, 230;
  background-color: rgba(202, 158, 230, 0.1);
  border-bottom-color: rgba(202, 158, 230, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(202, 158, 230, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(202, 158, 230, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(202, 158, 230, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 231, 130, 132;
  background-color: rgba(231, 130, 132, 0.1);
  border-bottom-color: rgba(231, 130, 132, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(231, 130, 132, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(231, 130, 132, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(231, 130, 132, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 140, 170, 238;
  background-color: rgba(140, 170, 238, 0.1);
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 140, 170, 238;
  background-color: rgba(140, 170, 238, 0.1);
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 229, 200, 144;
  background-color: rgba(229, 200, 144, 0.1);
  border-bottom-color: rgba(229, 200, 144, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(229, 200, 144, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(229, 200, 144, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(229, 200, 144, 0.6);
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
  --callout-color: 166, 209, 137;
  background-color: rgba(166, 209, 137, 0.1);
  border-bottom-color: rgba(166, 209, 137, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(166, 209, 137, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(166, 209, 137, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(166, 209, 137, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 133, 193, 220;
  background-color: rgba(133, 193, 220, 0.1);
  border-bottom-color: rgba(133, 193, 220, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(133, 193, 220, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(133, 193, 220, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(133, 193, 220, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 140, 170, 238;
  background-color: rgba(140, 170, 238, 0.1);
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 239, 159, 118;
  background-color: rgba(239, 159, 118, 0.1);
  border-bottom-color: rgba(239, 159, 118, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(239, 159, 118, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(239, 159, 118, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(239, 159, 118, 0.6);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(35, 38, 52, 0.3);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(81, 87, 109);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(41, 44, 60);
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(41, 44, 60);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(41, 44, 60);
  border-left-color: rgb(41, 44, 60);
  border-right-color: rgb(41, 44, 60);
  border-top-color: rgb(41, 44, 60);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(41, 44, 60);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(186, 187, 241);
  color: rgb(41, 44, 60);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(81, 87, 109);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(198, 208, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(186, 187, 241);
  border-bottom-color: rgb(41, 44, 60);
  border-left-color: rgb(41, 44, 60);
  border-right-color: rgb(41, 44, 60);
  border-top-color: rgb(41, 44, 60);
  color: rgb(41, 44, 60);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(186, 187, 241);
  color: rgb(41, 44, 60);
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
  color: rgb(186, 187, 241);
}

body h1 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
}`,
    scrollbars: `body .callout {
  --callout-color: 140, 170, 238;
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

body ::-webkit-scrollbar-corner {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

body ::-webkit-scrollbar-track {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 206);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 206);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 206);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(202, 158, 230);
  border-bottom-color: rgb(41, 44, 60);
  border-left-color: rgb(41, 44, 60);
  border-right-color: rgb(41, 44, 60);
  border-top-color: rgb(41, 44, 60);
  color: rgb(41, 44, 60);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}`,
    footer: `body footer {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(165, 173, 206);
  text-decoration: rgb(165, 173, 206);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(198, 208, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(165, 173, 206);
  text-decoration: rgb(165, 173, 206);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body li.section-li > .section .meta {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(165, 173, 206);
  text-decoration: rgb(165, 173, 206);
}

body ul.section-ul {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

body .darkmode svg {
  color: rgb(165, 173, 206);
  stroke: rgb(165, 173, 206);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

body .breadcrumb-element p {
  color: rgb(81, 87, 109);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body .metadata {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(165, 173, 206);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(41, 44, 60);
}

body .page-header h2.page-title {
  color: rgb(198, 208, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(198, 208, 245);
  text-decoration: underline dotted rgb(198, 208, 245);
}

body details {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body input[type=text] {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

body progress {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body sub {
  color: rgb(198, 208, 245);
}

body summary {
  color: rgb(198, 208, 245);
}

body sup {
  color: rgb(198, 208, 245);
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
  --bodyFont: var(--font-text);
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
  --codeFont: var(--font-text);
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
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
  --gray: var(--text-muted);
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
  --headerFont: var(--font-text);
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
  --highlight: var(--text-highlight-bg);
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
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
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
  --secondary: var(--text-accent);
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
  --tertiary: var(--text-accent-hover);
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
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
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
