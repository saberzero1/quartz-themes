import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "serenity",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-duo", "ia-writer-mono", "ia-writer-quattro-s"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 238 !important;
  --accent-l: 70% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgba(102, 107, 255, 0.1) !important;
  --background-modifier-border: rgb(61, 61, 61) !important;
  --background-modifier-border-focus: rgb(59, 59, 59) !important;
  --background-modifier-border-hover: rgb(61, 61, 61) !important;
  --background-modifier-form-field: rgb(26, 26, 26) !important;
  --background-modifier-form-field-hover: rgb(26, 26, 26) !important;
  --background-modifier-message: hsl(242, 104%, 76%) !important;
  --background-primary: rgb(13, 13, 13) !important;
  --background-primary-alt: rgb(26, 26, 26) !important;
  --background-secondary: rgb(3, 3, 3) !important;
  --background-secondary-alt: rgb(20, 20, 20) !important;
  --base-c: 15% !important;
  --base-c-m: 5% !important;
  --bases-cards-background: rgb(13, 13, 13) !important;
  --bases-cards-cover-background: rgb(26, 26, 26) !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(61, 61, 61) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(61, 61, 61) !important;
  --bases-embed-border-color: rgb(61, 61, 61) !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: rgb(166, 166, 166) !important;
  --bases-table-border-color: rgb(61, 61, 61) !important;
  --bases-table-cell-background-active: rgb(13, 13, 13) !important;
  --bases-table-cell-background-disabled: rgb(26, 26, 26) !important;
  --bases-table-cell-background-selected: rgba(102, 107, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(59, 59, 59) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(102, 107, 255) !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: rgb(26, 26, 26) !important;
  --bases-table-header-background: rgb(13, 13, 13) !important;
  --bases-table-header-color: rgb(166, 166, 166) !important;
  --bases-table-summary-background: rgb(13, 13, 13) !important;
  --bg-box: rgba(255, 255, 255, 0.14) !important;
  --bg-box-top: hsl(234, 104%, 75%) !important;
  --blockquote-border-color: rgb(61, 61, 61) !important;
  --blockquote-border-thickness: 1.2px !important;
  --blur-background: color-mix(in srgb, rgb(20, 20, 20) 65%, transparent) linear-gradient(rgb(20, 20, 20), color-mix(in srgb, rgb(20, 20, 20) 65%, transparent)) !important;
  --bodyFont: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --c-00: 5% !important;
  --c-05: 6% !important;
  --c-10: 10% !important;
  --c-100: 73% !important;
  --c-20: 1% !important;
  --c-25: 8% !important;
  --c-30: 8% !important;
  --c-35: 24% !important;
  --c-40: 23% !important;
  --c-50: 65% !important;
  --c-60: 69% !important;
  --c-70: 71% !important;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-content-background: rgb(26, 26, 26);
  --callout-content-padding: 10px;
  --callout-padding: 0px;
  --callout-radius: 5px;
  --callout-title-padding: 5px 10px;
  --callout-title-size: 0.98em;
  --canvas-background: rgb(13, 13, 13) !important;
  --canvas-card-label-color: rgb(166, 166, 166) !important;
  --canvas-controls-radius: 5px !important;
  --canvas-dot-pattern: rgb(20, 20, 20) !important;
  --caret-color: rgb(186, 186, 186) !important;
  --checkbox-border-color: rgb(166, 166, 166) !important;
  --checkbox-border-color-hover: rgb(166, 166, 166) !important;
  --checkbox-color: rgb(102, 107, 255) !important;
  --checkbox-color-hover: hsl(242, 104%, 76%) !important;
  --checkbox-marker-color: rgb(13, 13, 13) !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: rgb(166, 166, 166) !important;
  --clickable-icon-radius: 5px !important;
  --code-background: rgb(26, 26, 26) !important;
  --code-border-color: rgb(61, 61, 61) !important;
  --code-comment: rgb(166, 166, 166) !important;
  --code-normal: rgb(186, 186, 186) !important;
  --code-punctuation: rgb(166, 166, 166) !important;
  --code-radius: 5px !important;
  --codeFont: 'iA Writer Mono S' !important;
  --collapse-icon-color: rgb(166, 166, 166) !important;
  --collapse-icon-color-collapsed: hsl(242, 104%, 76%) !important;
  --color-accent: rgb(102, 107, 255) !important;
  --color-accent-1: hsl(242, 104%, 76%) !important;
  --color-accent-2: hsl(234, 104%, 75%) !important;
  --color-accent-hsl: 238, 100%, 70% !important;
  --color-base-00: rgb(13, 13, 13) !important;
  --color-base-05: rgb(15, 15, 15) !important;
  --color-base-10: rgb(26, 26, 26) !important;
  --color-base-100: rgb(186, 186, 186) !important;
  --color-base-20: rgb(3, 3, 3) !important;
  --color-base-25: rgb(20, 20, 20) !important;
  --color-base-30: rgb(20, 20, 20) !important;
  --color-base-35: rgb(61, 61, 61) !important;
  --color-base-40: rgb(59, 59, 59) !important;
  --color-base-50: rgb(166, 166, 166) !important;
  --color-base-60: rgb(176, 176, 176) !important;
  --color-base-70: rgb(181, 181, 181) !important;
  --color-muted: #908caa !important;
  --color-muted-rgb: 144, 140, 170 !important;
  --cursor-color: rgb(102, 107, 255) !important;
  --cursor-width: 2.5px !important;
  --custom-base-c-d: 10% !important;
  --custom-base-c-l: 99% !important;
  --custom-border-c-d: 50% !important;
  --custom-border-c-l: 82% !important;
  --custom-c-20-d: 14% !important;
  --custom-c-20-l: 97% !important;
  --custom-text-c-d: 90% !important;
  --custom-text-c-l: 43% !important;
  --custom-theme-sat-d: 20% !important;
  --custom-theme-sat-l: 100% !important;
  --custom-theme-sat-secondary-d: 25% !important;
  --custom-theme-sat-secondary-l: 77% !important;
  --custom-theme-sat-text-d: 10% !important;
  --custom-theme-sat-text-l: 25% !important;
  --custom-theme-tint-d: 0 !important;
  --custom-theme-tint-l: 15 !important;
  --custom-theme-tint-secondary-d: 0 !important;
  --custom-theme-tint-secondary-l: 15 !important;
  --custom-theme-tint-text-d: 10 !important;
  --custom-theme-tint-text-l: 205 !important;
  --dark: rgb(186, 186, 186) !important;
  --darkgray: rgb(186, 186, 186) !important;
  --divider-color: rgb(61, 61, 61) !important;
  --divider-color-hover: rgb(102, 107, 255) !important;
  --divider-width: 0.2px !important;
  --dropdown-background: rgb(20, 20, 20) !important;
  --dropdown-background-hover: rgba(102, 107, 255, 0.1) !important;
  --dv-table-column-alt-background: transparent !important;
  --dv-table-row-alt-background: transparent !important;
  --dv-table-text-align: left !important;
  --editing-file-line-width: 700px !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(61, 61, 61), inset 0 0 0 1px rgb(61, 61, 61) !important;
  --embed-border-start: 2px solid rgb(102, 107, 255) !important;
  --file-header-background: rgb(13, 13, 13) !important;
  --file-header-background-focused: rgb(13, 13, 13) !important;
  --file-header-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(20, 20, 20) !important;
  --flair-color: rgb(186, 186, 186) !important;
  --font-default-custom: 'iA Writer Quattro S' !important;
  --font-interface: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-mermaid: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: 'iA Writer Mono S' !important;
  --font-monospace-custom: 'iA Writer Mono S' !important;
  --font-preview-view: 'iA Writer Duo S' !important;
  --font-print: '??', '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, 'Arial' !important;
  --font-secondary: 'iA Writer Duo S' !important;
  --font-secondary-custom: 'iA Writer Duo S' !important;
  --font-text: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-weight-default: 400 !important;
  --footnote-divider-color: rgb(61, 61, 61) !important;
  --footnote-id-color: rgb(166, 166, 166) !important;
  --footnote-id-color-no-occurrences: rgb(166, 166, 166) !important;
  --footnote-line-height: 1.75 !important;
  --footnote-radius: 5px !important;
  --graph-line: rgb(61, 61, 61) !important;
  --graph-node: rgb(149, 134, 249) !important;
  --graph-node-focused: rgb(104, 109, 243) !important;
  --graph-node-unresolved: rgb(161, 124, 248) !important;
  --graph-text: rgb(186, 186, 186) !important;
  --gray: rgb(166, 166, 166) !important;
  --h-align-s: left !important;
  --h-weight-s: 600 !important;
  --h1-align: left !important;
  --h1-size: 1.72em !important;
  --h1-weight: 600 !important;
  --h2-align: left !important;
  --h2-size: 1.51em !important;
  --h2-weight: 600 !important;
  --h3-align: left !important;
  --h3-size: 1.35em !important;
  --h3-weight: 600 !important;
  --h4-align: left !important;
  --h4-size: 1.19em !important;
  --h4-weight: 600 !important;
  --h5-align: left !important;
  --h5-line-height: 1.75 !important;
  --h5-size: 1.08em !important;
  --h5-weight: 600 !important;
  --h6-align: left !important;
  --h6-line-height: 1.75 !important;
  --headerFont: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(166, 166, 166) !important;
  --highlight: rgba(102, 107, 255, 0.1) !important;
  --hr-color: rgb(61, 61, 61) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(166, 166, 166) !important;
  --icon-color-active: hsl(242, 104%, 76%) !important;
  --icon-color-focused: rgb(186, 186, 186) !important;
  --icon-color-hover: rgb(166, 166, 166) !important;
  --img-side-margins: auto !important;
  --inactive-line-blur: 0px !important;
  --inactive-line-opacity: 0.4 !important;
  --inactive-pane-blur: 0px !important;
  --inactive-pane-opacity: 0.55 !important;
  --indentation-guide-color-active: rgb(102, 107, 255) !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-field-size: 0.933em !important;
  --inline-title-align: center !important;
  --inline-title-size: 2.22em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(166, 166, 166) !important;
  --input-placeholder-color: rgb(166, 166, 166) !important;
  --input-shadow: rgb(61, 61, 61) 0 0 0 0.8px !important;
  --input-shadow-hover: rgba(102, 107, 255, 0.6) 0 0 0px 1px !important;
  --interactive-accent: rgb(102, 107, 255) !important;
  --interactive-accent-hover: hsl(242, 104%, 76%) !important;
  --interactive-accent-hsl: 238, 100%, 70% !important;
  --interactive-hover: rgba(102, 107, 255, 0.1) !important;
  --interactive-normal: rgb(20, 20, 20) !important;
  --light: rgb(13, 13, 13) !important;
  --lightgray: rgb(3, 3, 3) !important;
  --line-height-normal: 1.75 !important;
  --link-color: hsl(242, 104%, 76%) !important;
  --link-color-hover: hsl(234, 104%, 75%) !important;
  --link-decoration-color: hsl(242, 104%, 76%) !important;
  --link-decoration-color-active: rgba(102, 107, 255, 0.5) !important;
  --link-decoration-thickness: 0.06em !important;
  --link-external-color: hsl(242, 104%, 76%) !important;
  --link-external-color-hover: hsl(234, 104%, 75%) !important;
  --link-font: 'iA Writer Duo S' !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: hsl(242, 104%, 76%) !important;
  --link-unresolved-decoration-color: rgba(102, 107, 255, 0.3) !important;
  --list-bullet-size: 0.25em !important;
  --list-marker-color: rgb(166, 166, 166) !important;
  --list-marker-color-collapsed: hsl(242, 104%, 76%) !important;
  --list-marker-color-hover: rgb(166, 166, 166) !important;
  --menu-background: rgb(3, 3, 3) !important;
  --menu-border-color: rgb(61, 61, 61) !important;
  --menu-radius: 12px !important;
  --metadata-border-color: rgb(61, 61, 61) !important;
  --metadata-divider-color: rgb(61, 61, 61) !important;
  --metadata-input-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(186, 186, 186) !important;
  --metadata-label-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(166, 166, 166) !important;
  --metadata-label-text-color-hover: rgb(166, 166, 166) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(59, 59, 59) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(61, 61, 61) !important;
  --modal-background: rgb(13, 13, 13) !important;
  --modal-border-color: rgb(59, 59, 59) !important;
  --modal-radius: 18px !important;
  --nav-collapse-icon-color: rgb(166, 166, 166) !important;
  --nav-collapse-icon-color-collapsed: rgb(166, 166, 166) !important;
  --nav-heading-color: rgb(186, 186, 186) !important;
  --nav-heading-color-collapsed: rgb(166, 166, 166) !important;
  --nav-heading-color-collapsed-hover: rgb(166, 166, 166) !important;
  --nav-heading-color-hover: rgb(186, 186, 186) !important;
  --nav-item-background-selected: rgba(102, 107, 255, 0.15) !important;
  --nav-item-color: rgb(166, 166, 166) !important;
  --nav-item-color-active: rgb(186, 186, 186) !important;
  --nav-item-color-highlighted: hsl(242, 104%, 76%) !important;
  --nav-item-color-hover: rgb(186, 186, 186) !important;
  --nav-item-color-selected: rgb(186, 186, 186) !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: rgb(166, 166, 166) !important;
  --nav-tag-color-active: rgb(166, 166, 166) !important;
  --nav-tag-color-hover: rgb(166, 166, 166) !important;
  --nav-tag-radius: 5px !important;
  --p-indent: 15px !important;
  --p-margin: 20px !important;
  --pdf-background: rgb(13, 13, 13) !important;
  --pdf-page-background: rgb(13, 13, 13) !important;
  --pdf-shadow: 0 0 0 1px rgb(61, 61, 61) !important;
  --pdf-sidebar-background: rgb(13, 13, 13) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(61, 61, 61) !important;
  --pill-border-color: rgb(61, 61, 61) !important;
  --pill-border-color-hover: rgb(61, 61, 61) !important;
  --pill-color: rgb(166, 166, 166) !important;
  --pill-color-hover: rgb(186, 186, 186) !important;
  --pill-color-remove: rgb(166, 166, 166) !important;
  --pill-color-remove-hover: hsl(242, 104%, 76%) !important;
  --prompt-background: rgb(13, 13, 13) !important;
  --prompt-border-color: rgb(59, 59, 59) !important;
  --prompt-max-height: 40vw !important;
  --prompt-width: 30vw !important;
  --radius-l: 18px !important;
  --radius-m: 12px !important;
  --radius-s: 5px !important;
  --radius-xl: 24px !important;
  --raised-background: color-mix(in srgb, rgb(20, 20, 20) 65%, transparent) linear-gradient(rgb(20, 20, 20), color-mix(in srgb, rgb(20, 20, 20) 65%, transparent)) !important;
  --ribbon-background: rgb(13, 13, 13) !important;
  --ribbon-background-collapsed: rgb(13, 13, 13) !important;
  --scrollbar-radius: 18px !important;
  --search-clear-button-color: rgb(166, 166, 166) !important;
  --search-icon-color: rgb(166, 166, 166) !important;
  --search-result-background: rgb(13, 13, 13) !important;
  --secondary: hsl(242, 104%, 76%) !important;
  --serenity-mode-font-size: 17px !important;
  --setting-group-heading-color: rgb(186, 186, 186) !important;
  --setting-items-background: rgb(26, 26, 26) !important;
  --setting-items-border-color: rgb(61, 61, 61) !important;
  --setting-items-radius: 18px !important;
  --slider-thumb-border-color: rgb(61, 61, 61) !important;
  --slider-track-background: rgb(61, 61, 61) !important;
  --speech-color: rgb(186, 186, 186) !important;
  --speech-opacity: 0.5 !important;
  --status-bar-background: rgb(3, 3, 3) !important;
  --status-bar-border-color: rgb(61, 61, 61) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: rgb(166, 166, 166) !important;
  --suggestion-background: rgb(13, 13, 13) !important;
  --tab-background-active: rgb(13, 13, 13) !important;
  --tab-container-background: rgb(3, 3, 3) !important;
  --tab-divider-color: rgb(20, 20, 20) !important;
  --tab-outline-color: rgb(61, 61, 61) !important;
  --tab-outline-width: 0.7px !important;
  --tab-radius: 5px !important;
  --tab-switcher-background: rgb(3, 3, 3) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(3, 3, 3), transparent) !important;
  --tab-switcher-preview-radius: 24px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(102, 107, 255) !important;
  --tab-text-color: rgb(166, 166, 166) !important;
  --tab-text-color-active: rgb(166, 166, 166) !important;
  --tab-text-color-focused: rgb(166, 166, 166) !important;
  --tab-text-color-focused-active: rgb(166, 166, 166) !important;
  --tab-text-color-focused-active-current: rgb(186, 186, 186) !important;
  --tab-text-color-focused-highlighted: hsl(242, 104%, 76%) !important;
  --table-add-button-border-color: rgb(61, 61, 61) !important;
  --table-border-color: rgb(61, 61, 61) !important;
  --table-drag-handle-background-active: rgb(102, 107, 255) !important;
  --table-drag-handle-color: rgb(166, 166, 166) !important;
  --table-header-background: rgb(3, 3, 3) !important;
  --table-header-background-hover: rgb(3, 3, 3) !important;
  --table-header-border-color: rgb(61, 61, 61) !important;
  --table-header-color: rgb(186, 186, 186) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(102, 107, 255, 0.1) !important;
  --table-selection-border-color: rgb(102, 107, 255) !important;
  --table-text-size: 0.875em !important;
  --tag-background: rgba(102, 107, 255, 0.1) !important;
  --tag-background-hover: rgba(102, 107, 255, 0.2) !important;
  --tag-border-color: rgba(102, 107, 255, 0.15) !important;
  --tag-border-color-hover: rgba(102, 107, 255, 0.15) !important;
  --tag-color: hsl(242, 104%, 76%) !important;
  --tag-color-hover: hsl(242, 104%, 76%) !important;
  --tag-opacity: 0.25 !important;
  --tag-opacity-hover: 0.2 !important;
  --tag-padding-x: 6px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 5px !important;
  --tertiary: hsl(234, 104%, 75%) !important;
  --text-accent: hsl(242, 104%, 76%) !important;
  --text-accent-hover: hsl(234, 104%, 75%) !important;
  --text-faint: rgb(166, 166, 166) !important;
  --text-muted: rgb(166, 166, 166) !important;
  --text-normal: rgb(186, 186, 186) !important;
  --text-selection: rgba(102, 107, 255, 0.33) !important;
  --textHighlight: rgba(102, 107, 255, 0.1) !important;
  --theme-sat: 0% !important;
  --theme-sat-secondary: 0% !important;
  --theme-sat-text: 0% !important;
  --theme-tint: 0 !important;
  --theme-tint-secondary: 0 !important;
  --theme-tint-text: 0 !important;
  --titleFont: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(13, 13, 13) !important;
  --titlebar-background-focused: rgb(3, 3, 3) !important;
  --titlebar-border-color: rgb(61, 61, 61) !important;
  --titlebar-text-color: rgb(166, 166, 166) !important;
  --titlebar-text-color-focused: rgb(186, 186, 186) !important;
  --vault-profile-color: rgb(186, 186, 186) !important;
  --vault-profile-color-hover: rgb(186, 186, 186) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(3, 3, 3);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 13, 13);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(3, 3, 3);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(61, 61, 61);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(3, 3, 3);
  border-left-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 13, 13);
  color: rgb(186, 186, 186);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 206, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(204, 206, 255) none 0px;
  text-decoration: rgb(204, 206, 255);
  text-decoration-color: rgb(204, 206, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body p {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 166, 166) none 0px;
  text-decoration: rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(137, 133, 255) none 0px;
  text-decoration: underline 0.96px rgb(137, 133, 255);
  text-decoration-color: rgb(137, 133, 255);
  text-decoration-thickness: 0.96px;
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(137, 133, 255) none 0px;
  text-decoration: underline 0.96px rgb(137, 133, 255);
  text-decoration-color: rgb(137, 133, 255);
  text-decoration-thickness: 0.96px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(137, 133, 255) none 0px;
  text-decoration: underline 0.96px rgba(102, 107, 255, 0.3);
  text-decoration-color: rgba(102, 107, 255, 0.3);
  text-decoration-thickness: 0.96px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body dt {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(13, 13, 13);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body table {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 222.359px;
  margin-right: 222.359px;
  width: 227.281px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  text-align: center;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(3, 3, 3);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
  font-family: "iA Writer Mono S";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-radius: 5px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  filter: brightness(0.9);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 166, 166);
  text-decoration: line-through rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: underline 1.5px rgb(224, 222, 113);
  text-decoration-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  gap: 15.68px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgb(26, 26, 26);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.17);
  border-bottom-color: rgba(83, 223, 221, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 250, 153, 205;
  background-color: rgba(250, 153, 205, 0.17);
  border-bottom-color: rgba(250, 153, 205, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 153, 205, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(250, 153, 205, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(250, 153, 205, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.17);
  border-bottom-color: rgba(251, 70, 76, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.17);
  border-bottom-color: rgba(168, 130, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(168, 130, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.17);
  border-bottom-color: rgba(251, 70, 76, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.17);
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.17);
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.17);
  border-bottom-color: rgba(233, 151, 63, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgba(158, 158, 158, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.17);
  border-bottom-color: rgba(68, 207, 110, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.17);
  border-bottom-color: rgba(224, 222, 113, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 222, 113, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(224, 222, 113, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(224, 222, 113, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.17);
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.17);
  border-bottom-color: rgba(233, 151, 63, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(59, 59, 59);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(59, 59, 59);
  border-right-color: rgb(59, 59, 59);
  border-top-color: rgb(59, 59, 59);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(59, 59, 59);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(59, 59, 59);
  border-right-color: rgb(59, 59, 59);
  border-top-color: rgb(59, 59, 59);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(3, 3, 3);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(102, 105, 204, 0.25);
  border-bottom-color: rgb(184, 185, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(184, 185, 224);
  border-right-color: rgb(184, 185, 224);
  border-top-color: rgb(184, 185, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(184, 185, 224);
}

html[saved-theme="dark"] body h1 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(166, 166, 166);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 12px;
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(166, 166, 166);
  stroke: rgb(166, 166, 166);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: -15px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(3, 3, 3);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(68, 207, 110);
  text-decoration: underline dashed rgb(68, 207, 110);
  text-decoration-style: dashed;
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
  font-family: "iA Writer Mono S";
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sub {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body summary {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sup {
  color: rgb(186, 186, 186);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 228 !important;
  --accent-s: 70% !important;
  --background-modifier-active-hover: rgba(108, 132, 229, 0.1) !important;
  --background-modifier-border: rgb(219, 215, 215) !important;
  --background-modifier-border-focus: rgb(230, 230, 230) !important;
  --background-modifier-border-hover: rgb(134, 121, 121) !important;
  --background-modifier-error: #f45757 !important;
  --background-modifier-error-hover: #f45757 !important;
  --background-modifier-error-rgb: 244, 87, 87 !important;
  --background-modifier-form-field: hsl(0, 0%, 103.2%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 103.2%) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.05) !important;
  --background-modifier-message: rgb(129, 151, 234) !important;
  --background-primary: hsl(0, 0%, 103.2%) !important;
  --background-primary-alt: rgb(247, 247, 247) !important;
  --background-secondary: rgb(250, 250, 250) !important;
  --background-secondary-alt: hsl(0, 0%, 101.2%) !important;
  --base-c: 100% !important;
  --base-c-bg: 103.2% !important;
  --bases-cards-background: hsl(0, 0%, 103.2%) !important;
  --bases-cards-cover-background: rgb(247, 247, 247) !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(219, 215, 215) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(134, 121, 121) !important;
  --bases-embed-border-color: rgb(219, 215, 215) !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: rgb(69, 69, 69) !important;
  --bases-table-border-color: rgb(219, 215, 215) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 103.2%) !important;
  --bases-table-cell-background-disabled: rgb(247, 247, 247) !important;
  --bases-table-cell-background-selected: rgba(108, 132, 229, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(230, 230, 230) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(129, 151, 234) !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: rgb(247, 247, 247) !important;
  --bases-table-header-background: hsl(0, 0%, 103.2%) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.05) !important;
  --bases-table-header-color: rgb(69, 69, 69) !important;
  --bases-table-summary-background: hsl(0, 0%, 103.2%) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.05) !important;
  --bg-box: rgba(255, 255, 255, 0.14) !important;
  --bg-box-top: rgb(135, 162, 237) !important;
  --blockquote-border-color: rgb(134, 121, 121) !important;
  --blockquote-border-thickness: 1.2px !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent) linear-gradient(hsl(0, 0%, 103.2%), color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent)) !important;
  --bodyFont: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --c-00: 103.2% !important;
  --c-05: 101.2% !important;
  --c-10: 97.2% !important;
  --c-100: 20% !important;
  --c-20: 98.2% !important;
  --c-25: 92% !important;
  --c-30: 30% !important;
  --c-35: 30% !important;
  --c-40: 90% !important;
  --c-50: 35% !important;
  --c-60: 30% !important;
  --c-70: 27% !important;
  --callout-blend-mode: normal;
  --callout-bug: 213, 57, 132;
  --callout-content-background: rgb(247, 247, 247);
  --callout-content-padding: 10px;
  --callout-error: 244, 87, 87;
  --callout-fail: 244, 87, 87;
  --callout-padding: 0px;
  --callout-radius: 5px;
  --callout-title-padding: 5px 10px;
  --callout-title-size: 0.98em;
  --canvas-background: hsl(0, 0%, 103.2%) !important;
  --canvas-card-label-color: rgb(89, 89, 89) !important;
  --canvas-color-1: 244, 87, 87 !important;
  --canvas-controls-radius: 5px !important;
  --canvas-dot-pattern: rgb(219, 215, 215) !important;
  --caret-color: rgb(51, 51, 51) !important;
  --checkbox-border-color: rgb(89, 89, 89) !important;
  --checkbox-border-color-hover: rgb(69, 69, 69) !important;
  --checkbox-color: rgb(129, 151, 234) !important;
  --checkbox-color-hover: rgb(135, 162, 237) !important;
  --checkbox-marker-color: hsl(0, 0%, 103.2%) !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: rgb(69, 69, 69) !important;
  --clickable-icon-radius: 5px !important;
  --code-background: rgb(247, 247, 247) !important;
  --code-border-color: rgb(219, 215, 215) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.05) !important;
  --code-comment: rgb(89, 89, 89) !important;
  --code-normal: rgb(51, 51, 51) !important;
  --code-operator: #f45757 !important;
  --code-punctuation: rgb(69, 69, 69) !important;
  --code-radius: 5px !important;
  --code-tag: #f45757 !important;
  --codeFont: 'iA Writer Mono S' !important;
  --collapse-icon-color: rgb(89, 89, 89) !important;
  --collapse-icon-color-collapsed: rgb(108, 132, 229) !important;
  --color-accent: rgb(108, 132, 229) !important;
  --color-accent-1: rgb(129, 151, 234) !important;
  --color-accent-2: rgb(135, 162, 237) !important;
  --color-accent-hsl: 228, 70%, 66% !important;
  --color-base-00: hsl(0, 0%, 103.2%) !important;
  --color-base-05: hsl(0, 0%, 101.2%) !important;
  --color-base-10: rgb(247, 247, 247) !important;
  --color-base-100: rgb(51, 51, 51) !important;
  --color-base-20: rgb(250, 250, 250) !important;
  --color-base-25: rgb(235, 235, 235) !important;
  --color-base-30: rgb(219, 215, 215) !important;
  --color-base-35: rgb(134, 121, 121) !important;
  --color-base-40: rgb(230, 230, 230) !important;
  --color-base-50: rgb(89, 89, 89) !important;
  --color-base-60: rgb(77, 77, 77) !important;
  --color-base-70: rgb(69, 69, 69) !important;
  --color-muted: #797593 !important;
  --color-muted-rgb: 121, 117, 147 !important;
  --color-red: #f45757 !important;
  --color-red-rgb: 244, 87, 87 !important;
  --cursor-color: rgb(129, 151, 234) !important;
  --cursor-width: 2.5px !important;
  --custom-base-c-d: 10% !important;
  --custom-base-c-l: 99% !important;
  --custom-border-c-d: 50% !important;
  --custom-border-c-l: 82% !important;
  --custom-c-20-d: 14% !important;
  --custom-c-20-l: 97% !important;
  --custom-text-c-d: 90% !important;
  --custom-text-c-l: 43% !important;
  --custom-theme-sat-d: 20% !important;
  --custom-theme-sat-l: 100% !important;
  --custom-theme-sat-secondary-d: 25% !important;
  --custom-theme-sat-secondary-l: 77% !important;
  --custom-theme-sat-text-d: 10% !important;
  --custom-theme-sat-text-l: 25% !important;
  --custom-theme-tint-d: 0 !important;
  --custom-theme-tint-l: 15 !important;
  --custom-theme-tint-secondary-d: 0 !important;
  --custom-theme-tint-secondary-l: 15 !important;
  --custom-theme-tint-text-d: 10 !important;
  --custom-theme-tint-text-l: 205 !important;
  --dark: rgb(51, 51, 51) !important;
  --darkgray: rgb(51, 51, 51) !important;
  --divider-color: rgb(219, 215, 215) !important;
  --divider-color-hover: rgb(129, 151, 234) !important;
  --divider-width: 0.2px !important;
  --dropdown-background: hsl(0, 0%, 101.2%) !important;
  --dropdown-background-hover: rgba(108, 132, 229, 0.1) !important;
  --dv-table-column-alt-background: transparent !important;
  --dv-table-row-alt-background: transparent !important;
  --dv-table-text-align: left !important;
  --editing-file-line-width: 700px !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(219, 215, 215), inset 0 0 0 1px rgb(219, 215, 215) !important;
  --embed-border-start: 2px solid rgb(129, 151, 234) !important;
  --file-header-background: hsl(0, 0%, 103.2%) !important;
  --file-header-background-focused: hsl(0, 0%, 103.2%) !important;
  --file-header-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(0, 0%, 101.2%) !important;
  --flair-color: rgb(51, 51, 51) !important;
  --font-default-custom: 'iA Writer Quattro S' !important;
  --font-interface: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-mermaid: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: 'iA Writer Mono S' !important;
  --font-monospace-custom: 'iA Writer Mono S' !important;
  --font-preview-view: 'iA Writer Duo S' !important;
  --font-print: '??', '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, 'Arial' !important;
  --font-secondary: 'iA Writer Duo S' !important;
  --font-secondary-custom: 'iA Writer Duo S' !important;
  --font-text: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-weight-default: 400 !important;
  --footnote-divider-color: rgb(219, 215, 215) !important;
  --footnote-id-color: rgb(69, 69, 69) !important;
  --footnote-id-color-no-occurrences: rgb(89, 89, 89) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.05) !important;
  --footnote-line-height: 1.75 !important;
  --footnote-radius: 5px !important;
  --graph-line: rgb(134, 121, 121) !important;
  --graph-node: rgb(145, 148, 243) !important;
  --graph-node-focused: rgb(165, 182, 248) !important;
  --graph-node-unresolved: rgb(138, 122, 240) !important;
  --graph-text: rgb(51, 51, 51) !important;
  --gray: rgb(69, 69, 69) !important;
  --h-align-s: left !important;
  --h-weight-s: 600 !important;
  --h1-align: left !important;
  --h1-size: 1.72em !important;
  --h1-weight: 600 !important;
  --h2-align: left !important;
  --h2-size: 1.51em !important;
  --h2-weight: 600 !important;
  --h3-align: left !important;
  --h3-size: 1.35em !important;
  --h3-weight: 600 !important;
  --h4-align: left !important;
  --h4-size: 1.19em !important;
  --h4-weight: 600 !important;
  --h5-align: left !important;
  --h5-line-height: 1.75 !important;
  --h5-size: 1.08em !important;
  --h5-weight: 600 !important;
  --h6-align: left !important;
  --h6-line-height: 1.75 !important;
  --headerFont: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(89, 89, 89) !important;
  --highlight: rgba(0, 0, 0, 0.05) !important;
  --hr-color: rgb(134, 121, 121) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(69, 69, 69) !important;
  --icon-color-active: rgb(108, 132, 229) !important;
  --icon-color-focused: rgb(51, 51, 51) !important;
  --icon-color-hover: rgb(69, 69, 69) !important;
  --img-side-margins: auto !important;
  --inactive-line-blur: 0px !important;
  --inactive-line-opacity: 0.4 !important;
  --inactive-pane-blur: 0px !important;
  --inactive-pane-opacity: 0.55 !important;
  --indentation-guide-color-active: rgb(129, 151, 234) !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-field-size: 0.933em !important;
  --inline-title-align: center !important;
  --inline-title-size: 2.22em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(89, 89, 89) !important;
  --input-placeholder-color: rgb(89, 89, 89) !important;
  --input-shadow: rgb(219, 215, 215) 0 0 0 0.8px !important;
  --input-shadow-hover: rgba(108, 132, 229, 0.6) 0 0 0px 1px !important;
  --interactive-accent: rgb(129, 151, 234) !important;
  --interactive-accent-hover: rgb(135, 162, 237) !important;
  --interactive-accent-hsl: 228, 70%, 66% !important;
  --interactive-hover: rgba(108, 132, 229, 0.1) !important;
  --interactive-normal: hsl(0, 0%, 101.2%) !important;
  --light: hsl(0, 0%, 103.2%) !important;
  --lightgray: rgb(250, 250, 250) !important;
  --line-height-normal: 1.75 !important;
  --link-color: rgb(129, 151, 234) !important;
  --link-color-hover: rgb(135, 162, 237) !important;
  --link-decoration-color: rgb(129, 151, 234) !important;
  --link-decoration-color-active: rgba(108, 132, 229, 0.5) !important;
  --link-decoration-thickness: 0.06em !important;
  --link-external-color: rgb(108, 132, 229) !important;
  --link-external-color-hover: rgb(135, 162, 237) !important;
  --link-font: 'iA Writer Duo S' !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: rgb(108, 132, 229) !important;
  --link-unresolved-decoration-color: rgba(108, 132, 229, 0.3) !important;
  --list-bullet-size: 0.25em !important;
  --list-marker-color: rgb(69, 69, 69) !important;
  --list-marker-color-collapsed: rgb(108, 132, 229) !important;
  --list-marker-color-hover: rgb(69, 69, 69) !important;
  --menu-background: rgb(250, 250, 250) !important;
  --menu-border-color: rgb(134, 121, 121) !important;
  --menu-radius: 12px !important;
  --metadata-border-color: rgb(219, 215, 215) !important;
  --metadata-divider-color: rgb(219, 215, 215) !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-input-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(51, 51, 51) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-label-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(69, 69, 69) !important;
  --metadata-label-text-color-hover: rgb(69, 69, 69) !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(230, 230, 230) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(134, 121, 121) !important;
  --modal-background: hsl(0, 0%, 103.2%) !important;
  --modal-border-color: rgb(230, 230, 230) !important;
  --modal-radius: 18px !important;
  --nav-collapse-icon-color: rgb(89, 89, 89) !important;
  --nav-collapse-icon-color-collapsed: rgb(89, 89, 89) !important;
  --nav-heading-color: rgb(51, 51, 51) !important;
  --nav-heading-color-collapsed: rgb(89, 89, 89) !important;
  --nav-heading-color-collapsed-hover: rgb(69, 69, 69) !important;
  --nav-heading-color-hover: rgb(51, 51, 51) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.05) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.05) !important;
  --nav-item-background-selected: rgba(108, 132, 229, 0.15) !important;
  --nav-item-color: rgb(69, 69, 69) !important;
  --nav-item-color-active: rgb(51, 51, 51) !important;
  --nav-item-color-highlighted: rgb(108, 132, 229) !important;
  --nav-item-color-hover: rgb(51, 51, 51) !important;
  --nav-item-color-selected: rgb(51, 51, 51) !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: rgb(89, 89, 89) !important;
  --nav-tag-color-active: rgb(69, 69, 69) !important;
  --nav-tag-color-hover: rgb(69, 69, 69) !important;
  --nav-tag-radius: 5px !important;
  --p-indent: 15px !important;
  --p-margin: 20px !important;
  --pdf-background: hsl(0, 0%, 103.2%) !important;
  --pdf-page-background: hsl(0, 0%, 103.2%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 103.2%) !important;
  --pill-border-color: rgb(219, 215, 215) !important;
  --pill-border-color-hover: rgb(134, 121, 121) !important;
  --pill-color: rgb(69, 69, 69) !important;
  --pill-color-hover: rgb(51, 51, 51) !important;
  --pill-color-remove: rgb(89, 89, 89) !important;
  --pill-color-remove-hover: rgb(108, 132, 229) !important;
  --prompt-background: hsl(0, 0%, 103.2%) !important;
  --prompt-border-color: rgb(230, 230, 230) !important;
  --prompt-max-height: 40vw !important;
  --prompt-width: 30vw !important;
  --radius-l: 18px !important;
  --radius-m: 12px !important;
  --radius-s: 5px !important;
  --radius-xl: 24px !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent) linear-gradient(hsl(0, 0%, 103.2%), color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent)) !important;
  --ribbon-background: hsl(0, 0%, 103.2%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 103.2%) !important;
  --scrollbar-radius: 18px !important;
  --search-clear-button-color: rgb(69, 69, 69) !important;
  --search-icon-color: rgb(69, 69, 69) !important;
  --search-result-background: hsl(0, 0%, 103.2%) !important;
  --secondary: rgb(108, 132, 229) !important;
  --serenity-mode-font-size: 17px !important;
  --setting-group-heading-color: rgb(51, 51, 51) !important;
  --setting-items-background: rgb(247, 247, 247) !important;
  --setting-items-border-color: rgb(219, 215, 215) !important;
  --setting-items-radius: 18px !important;
  --slider-thumb-border-color: rgb(134, 121, 121) !important;
  --slider-track-background: rgb(219, 215, 215) !important;
  --speech-color: rgb(51, 51, 51) !important;
  --speech-opacity: 0.5 !important;
  --status-bar-background: rgb(250, 250, 250) !important;
  --status-bar-border-color: rgb(219, 215, 215) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: rgb(69, 69, 69) !important;
  --suggestion-background: hsl(0, 0%, 103.2%) !important;
  --sync-avatar-color-1: #f45757 !important;
  --tab-background-active: hsl(0, 0%, 103.2%) !important;
  --tab-container-background: rgb(250, 250, 250) !important;
  --tab-divider-color: rgb(219, 215, 215) !important;
  --tab-outline-color: rgb(219, 215, 215) !important;
  --tab-outline-width: 0.7px !important;
  --tab-radius: 5px !important;
  --tab-switcher-background: rgb(250, 250, 250) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(250, 250, 250), transparent) !important;
  --tab-switcher-preview-radius: 24px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(108, 132, 229) !important;
  --tab-text-color: rgb(89, 89, 89) !important;
  --tab-text-color-active: rgb(69, 69, 69) !important;
  --tab-text-color-focused: rgb(69, 69, 69) !important;
  --tab-text-color-focused-active: rgb(69, 69, 69) !important;
  --tab-text-color-focused-active-current: rgb(51, 51, 51) !important;
  --tab-text-color-focused-highlighted: rgb(108, 132, 229) !important;
  --table-add-button-border-color: rgb(219, 215, 215) !important;
  --table-border-color: rgb(219, 215, 215) !important;
  --table-drag-handle-background-active: rgb(129, 151, 234) !important;
  --table-drag-handle-color: rgb(89, 89, 89) !important;
  --table-header-background: rgb(250, 250, 250) !important;
  --table-header-background-hover: rgb(250, 250, 250) !important;
  --table-header-border-color: rgb(219, 215, 215) !important;
  --table-header-color: rgb(51, 51, 51) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(108, 132, 229, 0.1) !important;
  --table-selection-border-color: rgb(129, 151, 234) !important;
  --table-text-size: 0.875em !important;
  --tag-background: rgba(108, 132, 229, 0.1) !important;
  --tag-background-hover: rgba(108, 132, 229, 0.2) !important;
  --tag-border-color: rgba(108, 132, 229, 0.15) !important;
  --tag-border-color-hover: rgba(108, 132, 229, 0.15) !important;
  --tag-color: rgb(108, 132, 229) !important;
  --tag-color-hover: rgb(108, 132, 229) !important;
  --tag-opacity: 0.25 !important;
  --tag-opacity-hover: 0.2 !important;
  --tag-padding-x: 6px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 5px !important;
  --tertiary: rgb(135, 162, 237) !important;
  --text-accent: rgb(108, 132, 229) !important;
  --text-accent-hover: rgb(135, 162, 237) !important;
  --text-base: 15% !important;
  --text-error: #f45757 !important;
  --text-faint: rgb(89, 89, 89) !important;
  --text-muted: rgb(69, 69, 69) !important;
  --text-normal: rgb(51, 51, 51) !important;
  --text-selection: rgba(108, 132, 229, 0.2) !important;
  --textHighlight: rgba(0, 0, 0, 0.05) !important;
  --theme-sat: 0% !important;
  --theme-sat-secondary: 0% !important;
  --theme-sat-text: 0% !important;
  --theme-tint: 0 !important;
  --theme-tint-secondary: 0 !important;
  --theme-tint-text: 0 !important;
  --titleFont: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(0, 0%, 103.2%) !important;
  --titlebar-background-focused: rgb(250, 250, 250) !important;
  --titlebar-border-color: rgb(219, 215, 215) !important;
  --titlebar-text-color: rgb(69, 69, 69) !important;
  --titlebar-text-color-focused: rgb(51, 51, 51) !important;
  --vault-profile-color: rgb(51, 51, 51) !important;
  --vault-profile-color-hover: rgb(51, 51, 51) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 250, 250);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 250, 250);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(219, 215, 215);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 250, 250);
  border-left-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(51, 51, 51);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(23, 44, 130);
  font-family: "iA Writer Duo S";
  outline: rgb(23, 44, 130) none 0px;
  text-decoration: rgb(23, 44, 130);
  text-decoration-color: rgb(23, 44, 130);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body p {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 69, 69) none 0px;
  text-decoration: rgb(69, 69, 69);
  text-decoration-color: rgb(69, 69, 69);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(108, 132, 229);
  font-family: "iA Writer Duo S";
  outline: rgb(108, 132, 229) none 0px;
  text-decoration: underline 0.96px rgb(129, 151, 233);
  text-decoration-color: rgb(129, 151, 233);
  text-decoration-thickness: 0.96px;
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 151, 233);
  font-family: "iA Writer Duo S";
  outline: rgb(129, 151, 233) none 0px;
  text-decoration: underline 0.96px rgb(129, 151, 233);
  text-decoration-color: rgb(129, 151, 233);
  text-decoration-thickness: 0.96px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(108, 132, 229);
  font-family: "iA Writer Duo S";
  outline: rgb(108, 132, 229) none 0px;
  text-decoration: underline 0.96px rgba(108, 132, 229, 0.3);
  text-decoration-color: rgba(108, 132, 229, 0.3);
  text-decoration-thickness: 0.96px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body dt {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body table {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 222.359px;
  margin-right: 222.359px;
  width: 227.281px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body th {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  text-align: center;
}

html[saved-theme="light"] body tr {
  background-color: rgb(250, 250, 250);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
  font-family: "iA Writer Mono S";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body pre > code, pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-radius: 5px;
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  filter: blur(0px);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(69, 69, 69);
  text-decoration: line-through rgb(69, 69, 69);
  text-decoration-color: rgb(69, 69, 69);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration: underline 1.5px rgb(224, 172, 0);
  text-decoration-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  gap: 15.68px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgb(248, 248, 248);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.17);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 213, 57, 132;
  background-color: rgba(213, 57, 132, 0.17);
  border-bottom-color: rgba(213, 57, 132, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(213, 57, 132, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(213, 57, 132, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(213, 57, 132, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 244, 87, 87;
  background-color: rgba(244, 87, 87, 0.17);
  border-bottom-color: rgba(244, 87, 87, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(244, 87, 87, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(244, 87, 87, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(244, 87, 87, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.17);
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 244, 87, 87;
  background-color: rgba(244, 87, 87, 0.17);
  border-bottom-color: rgba(244, 87, 87, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(244, 87, 87, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(244, 87, 87, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(244, 87, 87, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.17);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.17);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.17);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.17);
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(224, 172, 0, 0.17);
  border-bottom-color: rgba(224, 172, 0, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 172, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(224, 172, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(224, 172, 0, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.17);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.17);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 250, 250);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(102, 122, 204, 0.25);
  border-bottom-color: rgb(31, 49, 122);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(31, 49, 122);
  border-right-color: rgb(31, 49, 122);
  border-top-color: rgb(31, 49, 122);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(31, 49, 122);
}

html[saved-theme="light"] body h1 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(69, 69, 69);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(69, 69, 69);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(69, 69, 69);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(69, 69, 69);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 12px;
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(69, 69, 69);
  text-decoration: rgb(69, 69, 69);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(69, 69, 69);
  text-decoration: rgb(69, 69, 69);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(129, 151, 233);
  font-family: "iA Writer Duo S";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(129, 151, 233);
  font-family: "iA Writer Duo S";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(69, 69, 69);
  text-decoration: rgb(69, 69, 69);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(69, 69, 69);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(69, 69, 69);
  stroke: rgb(69, 69, 69);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(69, 69, 69);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: -15px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(69, 69, 69);
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 185, 78);
  text-decoration: underline dashed rgb(8, 185, 78);
  text-decoration-style: dashed;
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(69, 69, 69);
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
  font-family: "iA Writer Mono S";
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 51, 51);
}`,
  },
};
