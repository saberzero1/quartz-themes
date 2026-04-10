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
  --background-modifier-active-hover: hsla(238, 100%, 70%, 0.1) !important;
  --background-modifier-border: hsl(0, 0%, 24%) !important;
  --background-modifier-border-focus: hsl(0, 0%, 23%) !important;
  --background-modifier-border-hover: hsl(0, 0%, 24%) !important;
  --background-modifier-form-field: hsl(0, 0%, 10%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 10%) !important;
  --background-modifier-message: hsl(242, 104%, 76%) !important;
  --background-primary: hsl(0, 0%, 5%) !important;
  --background-primary-alt: hsl(0, 0%, 10%) !important;
  --background-secondary: hsl(0, 0%, 1%) !important;
  --background-secondary-alt: hsl(0, 0%, 8%) !important;
  --base-c: 15% !important;
  --base-c-m: 5% !important;
  --bases-cards-background: hsl(0, 0%, 5%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 10%) !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 24%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0, 0%, 24%) !important;
  --bases-embed-border-color: hsl(0, 0%, 24%) !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 65%) !important;
  --bases-table-border-color: hsl(0, 0%, 24%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 5%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 10%) !important;
  --bases-table-cell-background-selected: hsla(238, 100%, 70%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0, 0%, 23%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(238, 100%, 70%) !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: hsl(0, 0%, 10%) !important;
  --bases-table-header-background: hsl(0, 0%, 5%) !important;
  --bases-table-header-color: hsl(0, 0%, 65%) !important;
  --bases-table-summary-background: hsl(0, 0%, 5%) !important;
  --bg-box: rgba(255, 255, 255, 0.14) !important;
  --bg-box-top: hsl(234, 104%, 75%) !important;
  --blockquote-border-color: hsl(0, 0%, 24%) !important;
  --blockquote-border-thickness: 1.2px !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 8%) 65%, transparent) linear-gradient(hsl(0, 0%, 8%), color-mix(in srgb, hsl(0, 0%, 8%) 65%, transparent)) !important;
  --bodyFont: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --callout-content-background: hsl(0, 0%, 10%);
  --callout-content-padding: 10px;
  --callout-padding: 0px;
  --callout-radius: 5px;
  --callout-title-padding: 5px 10px;
  --callout-title-size: 0.98em;
  --canvas-background: hsl(0, 0%, 5%) !important;
  --canvas-card-label-color: hsl(0, 0%, 65%) !important;
  --canvas-controls-radius: 5px !important;
  --canvas-dot-pattern: hsl(0, 0%, 8%) !important;
  --caret-color: hsl(0, 0%, 73%) !important;
  --checkbox-border-color: hsl(0, 0%, 65%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 65%) !important;
  --checkbox-color: hsl(238, 100%, 70%) !important;
  --checkbox-color-hover: hsl(242, 104%, 76%) !important;
  --checkbox-marker-color: hsl(0, 0%, 5%) !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: hsl(0, 0%, 65%) !important;
  --clickable-icon-radius: 5px !important;
  --code-background: hsl(0, 0%, 10%) !important;
  --code-border-color: hsl(0, 0%, 24%) !important;
  --code-comment: hsl(0, 0%, 65%) !important;
  --code-normal: hsl(0, 0%, 73%) !important;
  --code-punctuation: hsl(0, 0%, 65%) !important;
  --code-radius: 5px !important;
  --codeFont: 'iA Writer Mono S' !important;
  --collapse-icon-color: hsl(0, 0%, 65%) !important;
  --collapse-icon-color-collapsed: hsl(242, 104%, 76%) !important;
  --color-accent: hsl(238, 100%, 70%) !important;
  --color-accent-1: hsl(242, 104%, 76%) !important;
  --color-accent-2: hsl(234, 104%, 75%) !important;
  --color-accent-hsl: 238, 100%, 70% !important;
  --color-base-00: hsl(0, 0%, 5%) !important;
  --color-base-05: hsl(0, 0%, 6%) !important;
  --color-base-10: hsl(0, 0%, 10%) !important;
  --color-base-100: hsl(0, 0%, 73%) !important;
  --color-base-20: hsl(0, 0%, 1%) !important;
  --color-base-25: hsl(0, 0%, 8%) !important;
  --color-base-30: hsl(0, 0%, 8%) !important;
  --color-base-35: hsl(0, 0%, 24%) !important;
  --color-base-40: hsl(0, 0%, 23%) !important;
  --color-base-50: hsl(0, 0%, 65%) !important;
  --color-base-60: hsl(0, 0%, 69%) !important;
  --color-base-70: hsl(0, 0%, 71%) !important;
  --color-muted: #908caa !important;
  --color-muted-rgb: 144, 140, 170 !important;
  --cursor-color: hsl(238, 100%, 70%) !important;
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
  --dark: hsl(0, 0%, 73%) !important;
  --darkgray: hsl(0, 0%, 73%) !important;
  --divider-color: hsl(0, 0%, 24%) !important;
  --divider-color-hover: hsl(238, 100%, 70%) !important;
  --divider-width: 0.2px !important;
  --dropdown-background: hsl(0, 0%, 8%) !important;
  --dropdown-background-hover: hsla(238, 100%, 70%, 0.1) !important;
  --dv-table-column-alt-background: transparent !important;
  --dv-table-row-alt-background: transparent !important;
  --dv-table-text-align: left !important;
  --editing-file-line-width: 700px !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0, 0%, 24%), inset 0 0 0 1px hsl(0, 0%, 24%) !important;
  --embed-border-start: 2px solid hsl(238, 100%, 70%) !important;
  --file-header-background: hsl(0, 0%, 5%) !important;
  --file-header-background-focused: hsl(0, 0%, 5%) !important;
  --file-header-font: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(0, 0%, 8%) !important;
  --flair-color: hsl(0, 0%, 73%) !important;
  --font-default-custom: 'iA Writer Quattro S' !important;
  --font-interface: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-mermaid: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: 'iA Writer Mono S' !important;
  --font-monospace-custom: 'iA Writer Mono S' !important;
  --font-preview-view: 'iA Writer Duo S' !important;
  --font-print: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, Arial' !important;
  --font-secondary: 'iA Writer Duo S' !important;
  --font-secondary-custom: 'iA Writer Duo S' !important;
  --font-text: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-weight-default: 400 !important;
  --footnote-divider-color: hsl(0, 0%, 24%) !important;
  --footnote-id-color: hsl(0, 0%, 65%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 65%) !important;
  --footnote-line-height: 1.75 !important;
  --footnote-radius: 5px !important;
  --graph-line: hsl(0, 0%, 24%) !important;
  --graph-node: hsl(248, 90%, 75%) !important;
  --graph-node-focused: hsl(238, 85%, 68%) !important;
  --graph-node-unresolved: hsl(258, 90%, 73%) !important;
  --graph-text: hsl(0, 0%, 73%) !important;
  --gray: hsl(0, 0%, 65%) !important;
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
  --headerFont: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, 0%, 65%) !important;
  --highlight: hsla(238, 100%, 70%, 0.1) !important;
  --hr-color: hsl(0, 0%, 24%) !important;
  --hr-thickness: 1px !important;
  --icon-color: hsl(0, 0%, 65%) !important;
  --icon-color-active: hsl(242, 104%, 76%) !important;
  --icon-color-focused: hsl(0, 0%, 73%) !important;
  --icon-color-hover: hsl(0, 0%, 65%) !important;
  --img-side-margins: auto !important;
  --inactive-line-blur: 0px !important;
  --inactive-line-opacity: 0.4 !important;
  --inactive-pane-blur: 0px !important;
  --inactive-pane-opacity: 0.55 !important;
  --indentation-guide-color-active: hsl(238, 100%, 70%) !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-field-size: 0.933em !important;
  --inline-title-align: center !important;
  --inline-title-size: 2.22em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(0, 0%, 65%) !important;
  --input-placeholder-color: hsl(0, 0%, 65%) !important;
  --input-shadow: hsl(0, 0%, 24%) 0 0 0 0.8px !important;
  --input-shadow-hover: hsla(238, 100%, 70%, 0.6) 0 0 0px 1px !important;
  --interactive-accent: hsl(238, 100%, 70%) !important;
  --interactive-accent-hover: hsl(242, 104%, 76%) !important;
  --interactive-accent-hsl: 238, 100%, 70% !important;
  --interactive-hover: hsla(238, 100%, 70%, 0.1) !important;
  --interactive-normal: hsl(0, 0%, 8%) !important;
  --light: hsl(0, 0%, 5%) !important;
  --lightgray: hsl(0, 0%, 1%) !important;
  --line-height-normal: 1.75 !important;
  --link-color: hsl(242, 104%, 76%) !important;
  --link-color-hover: hsl(234, 104%, 75%) !important;
  --link-decoration-color: hsl(242, 104%, 76%) !important;
  --link-decoration-color-active: hsla(238, 100%, 70%, 0.5) !important;
  --link-decoration-thickness: 0.06em !important;
  --link-external-color: hsl(242, 104%, 76%) !important;
  --link-external-color-hover: hsl(234, 104%, 75%) !important;
  --link-font: 'iA Writer Duo S' !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: hsl(242, 104%, 76%) !important;
  --link-unresolved-decoration-color: hsla(238, 100%, 70%, 0.3) !important;
  --list-bullet-size: 0.25em !important;
  --list-marker-color: hsl(0, 0%, 65%) !important;
  --list-marker-color-collapsed: hsl(242, 104%, 76%) !important;
  --list-marker-color-hover: hsl(0, 0%, 65%) !important;
  --menu-background: hsl(0, 0%, 1%) !important;
  --menu-border-color: hsl(0, 0%, 24%) !important;
  --menu-radius: 12px !important;
  --metadata-border-color: hsl(0, 0%, 24%) !important;
  --metadata-divider-color: hsl(0, 0%, 24%) !important;
  --metadata-input-font: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(0, 0%, 73%) !important;
  --metadata-label-font: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(0, 0%, 65%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 65%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0, 0%, 23%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0, 0%, 24%) !important;
  --modal-background: hsl(0, 0%, 5%) !important;
  --modal-border-color: hsl(0, 0%, 23%) !important;
  --modal-radius: 18px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 65%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 65%) !important;
  --nav-heading-color: hsl(0, 0%, 73%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 65%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 65%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 73%) !important;
  --nav-item-background-selected: hsla(238, 100%, 70%, 0.15) !important;
  --nav-item-color: hsl(0, 0%, 65%) !important;
  --nav-item-color-active: hsl(0, 0%, 73%) !important;
  --nav-item-color-highlighted: hsl(242, 104%, 76%) !important;
  --nav-item-color-hover: hsl(0, 0%, 73%) !important;
  --nav-item-color-selected: hsl(0, 0%, 73%) !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: hsl(0, 0%, 65%) !important;
  --nav-tag-color-active: hsl(0, 0%, 65%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 65%) !important;
  --nav-tag-radius: 5px !important;
  --p-indent: 15px !important;
  --p-margin: 20px !important;
  --pdf-background: hsl(0, 0%, 5%) !important;
  --pdf-page-background: hsl(0, 0%, 5%) !important;
  --pdf-shadow: 0 0 0 1px hsl(0, 0%, 24%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 5%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(0, 0%, 24%) !important;
  --pill-border-color: hsl(0, 0%, 24%) !important;
  --pill-border-color-hover: hsl(0, 0%, 24%) !important;
  --pill-color: hsl(0, 0%, 65%) !important;
  --pill-color-hover: hsl(0, 0%, 73%) !important;
  --pill-color-remove: hsl(0, 0%, 65%) !important;
  --pill-color-remove-hover: hsl(242, 104%, 76%) !important;
  --prompt-background: hsl(0, 0%, 5%) !important;
  --prompt-border-color: hsl(0, 0%, 23%) !important;
  --prompt-max-height: 40vw !important;
  --prompt-width: 30vw !important;
  --radius-l: 18px !important;
  --radius-m: 12px !important;
  --radius-s: 5px !important;
  --radius-xl: 24px !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 8%) 65%, transparent) linear-gradient(hsl(0, 0%, 8%), color-mix(in srgb, hsl(0, 0%, 8%) 65%, transparent)) !important;
  --ribbon-background: hsl(0, 0%, 5%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 5%) !important;
  --scrollbar-radius: 18px !important;
  --search-clear-button-color: hsl(0, 0%, 65%) !important;
  --search-icon-color: hsl(0, 0%, 65%) !important;
  --search-result-background: hsl(0, 0%, 5%) !important;
  --secondary: hsl(242, 104%, 76%) !important;
  --serenity-mode-font-size: 17px !important;
  --setting-group-heading-color: hsl(0, 0%, 73%) !important;
  --setting-items-background: hsl(0, 0%, 10%) !important;
  --setting-items-border-color: hsl(0, 0%, 24%) !important;
  --setting-items-radius: 18px !important;
  --slider-thumb-border-color: hsl(0, 0%, 24%) !important;
  --slider-track-background: hsl(0, 0%, 24%) !important;
  --speech-color: hsl(0, 0%, 73%) !important;
  --speech-opacity: 0.5 !important;
  --status-bar-background: hsl(0, 0%, 1%) !important;
  --status-bar-border-color: hsl(0, 0%, 24%) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: hsl(0, 0%, 65%) !important;
  --suggestion-background: hsl(0, 0%, 5%) !important;
  --tab-background-active: hsl(0, 0%, 5%) !important;
  --tab-container-background: hsl(0, 0%, 1%) !important;
  --tab-divider-color: hsl(0, 0%, 8%) !important;
  --tab-outline-color: hsl(0, 0%, 24%) !important;
  --tab-outline-width: 0.7px !important;
  --tab-radius: 5px !important;
  --tab-switcher-background: hsl(0, 0%, 1%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 1%), transparent) !important;
  --tab-switcher-preview-radius: 24px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(238, 100%, 70%) !important;
  --tab-text-color: hsl(0, 0%, 65%) !important;
  --tab-text-color-active: hsl(0, 0%, 65%) !important;
  --tab-text-color-focused: hsl(0, 0%, 65%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 65%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 73%) !important;
  --tab-text-color-focused-highlighted: hsl(242, 104%, 76%) !important;
  --table-add-button-border-color: hsl(0, 0%, 24%) !important;
  --table-border-color: hsl(0, 0%, 24%) !important;
  --table-drag-handle-background-active: hsl(238, 100%, 70%) !important;
  --table-drag-handle-color: hsl(0, 0%, 65%) !important;
  --table-header-background: hsl(0, 0%, 1%) !important;
  --table-header-background-hover: hsl(0, 0%, 1%) !important;
  --table-header-border-color: hsl(0, 0%, 24%) !important;
  --table-header-color: hsl(0, 0%, 73%) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(238, 100%, 70%, 0.1) !important;
  --table-selection-border-color: hsl(238, 100%, 70%) !important;
  --table-text-size: 0.875em !important;
  --tag-background: hsla(238, 100%, 70%, 0.1) !important;
  --tag-background-hover: hsla(238, 100%, 70%, 0.2) !important;
  --tag-border-color: hsla(238, 100%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(238, 100%, 70%, 0.15) !important;
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
  --text-faint: hsl(0, 0%, 65%) !important;
  --text-muted: hsl(0, 0%, 65%) !important;
  --text-normal: hsl(0, 0%, 73%) !important;
  --text-selection: hsla(238, 100%, 70%, 0.33) !important;
  --textHighlight: hsla(238, 100%, 70%, 0.1) !important;
  --theme-sat: 0% !important;
  --theme-sat-secondary: 0% !important;
  --theme-sat-text: 0% !important;
  --theme-tint: 0 !important;
  --theme-tint-secondary: 0 !important;
  --theme-tint-text: 0 !important;
  --titleFont: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(0, 0%, 5%) !important;
  --titlebar-background-focused: hsl(0, 0%, 1%) !important;
  --titlebar-border-color: hsl(0, 0%, 24%) !important;
  --titlebar-text-color: hsl(0, 0%, 65%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 73%) !important;
  --vault-profile-color: hsl(0, 0%, 73%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 73%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(3, 3, 3);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 13, 13);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(3, 3, 3);
  border-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(3, 3, 3);
  border-color: rgb(186, 186, 186);
  box-shadow: rgb(61, 61, 61) 0px 0px 0px 0.8px;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(102, 105, 204, 0.25);
  border-radius: 5px;
  color: rgb(184, 185, 224);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(166, 166, 166);
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
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 206, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(204, 206, 255) none 0px;
  text-decoration-color: rgb(204, 206, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body footer {
  opacity: 0;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(166, 166, 166);
  border-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(102, 107, 255);
  border-color: rgb(102, 107, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 166, 166) none 0px;
  text-decoration-color: rgb(166, 166, 166);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(137, 133, 255) none 0px;
  text-decoration: underline 0.96px rgb(137, 133, 255);
  text-decoration-color: rgb(137, 133, 255);
  text-decoration-thickness: 0.96px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
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
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(166, 166, 166);
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: underline 1.5px rgb(224, 222, 113);
  text-decoration-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(102, 107, 255);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M4 21.3q-.6.2-1.05-.25T2.7 20l3.225-9.025q.375-1.05 1.45-1.288t1.85.538l4.55 4.55q.775.775.538 1.85t-1.288 1.45L4 21.3Zm10.025-9.275Q13.8 11.8 13.8 11.5t.225-.525L19.1 5.9q.8-.8 1.925-.8t1.925.8l.1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L21.9 6.95q-.35-.35-.875-.35t-.875.35l-5.1 5.1q-.2.2-.5.2t-.525-.225Zm-4-4Q9.8 7.8 9.8 7.5t.225-.525L10.1 6.9q.35-.35.35-.85t-.35-.85l-.15-.15q-.2-.2-.2-.5t.225-.525Q10.2 3.8 10.5 3.8t.525.225l.125.125q.8.8.8 1.9t-.8 1.9l-.1.1q-.2.2-.5.2t-.525-.225Zm2 2Q11.8 9.8 11.8 9.5t.225-.525L15.1 5.9q.35-.35.35-.875t-.35-.875L14 3.05q-.2-.2-.2-.5t.225-.525q.225-.225.525-.225t.525.225L16.15 3.1q.8.8.8 1.925t-.8 1.925l-3.1 3.1q-.2.2-.5.2t-.525-.225Zm4 4Q15.8 13.8 15.8 13.5t.225-.525L17.1 11.9q.8-.8 1.925-.8t1.925.8l1.1 1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L19.9 12.95q-.35-.35-.875-.35t-.875.35l-1.1 1.1q-.2.2-.5.2t-.525-.225Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M4 21.3q-.6.2-1.05-.25T2.7 20l3.225-9.025q.375-1.05 1.45-1.288t1.85.538l4.55 4.55q.775.775.538 1.85t-1.288 1.45L4 21.3Zm10.025-9.275Q13.8 11.8 13.8 11.5t.225-.525L19.1 5.9q.8-.8 1.925-.8t1.925.8l.1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L21.9 6.95q-.35-.35-.875-.35t-.875.35l-5.1 5.1q-.2.2-.5.2t-.525-.225Zm-4-4Q9.8 7.8 9.8 7.5t.225-.525L10.1 6.9q.35-.35.35-.85t-.35-.85l-.15-.15q-.2-.2-.2-.5t.225-.525Q10.2 3.8 10.5 3.8t.525.225l.125.125q.8.8.8 1.9t-.8 1.9l-.1.1q-.2.2-.5.2t-.525-.225Zm2 2Q11.8 9.8 11.8 9.5t.225-.525L15.1 5.9q.35-.35.35-.875t-.35-.875L14 3.05q-.2-.2-.2-.5t.225-.525q.225-.225.525-.225t.525.225L16.15 3.1q.8.8.8 1.925t-.8 1.925l-3.1 3.1q-.2.2-.5.2t-.525-.225Zm4 4Q15.8 13.8 15.8 13.5t.225-.525L17.1 11.9q.8-.8 1.925-.8t1.925.8l1.1 1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L19.9 12.95q-.35-.35-.875-.35t-.875.35l-1.1 1.1q-.2.2-.5.2t-.525-.225Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 500 500\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37ZM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32Zm84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Zm0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 500 500\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37ZM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32Zm84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Zm0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 21q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4v-7h-4v7H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 21q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4v-7h-4v7H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4c-16.6 15.6-16.3 40.5-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7c.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1c6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4c-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2l17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6l5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4c-16.6 15.6-16.3 40.5-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7c.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1c6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4c-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2l17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6l5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m22 10l-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10Zm-3-4l-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-4-3v-2h8v2H5Zm.25-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m22 10l-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10Zm-3-4l-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-4-3v-2h8v2H5Zm.25-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 256 256\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 256 256\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.2q.325-.9 1.088-1.45T12 1q.95 0 1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm7-16.75q.325 0 .537-.213t.213-.537q0-.325-.213-.537T12 2.75q-.325 0-.537.213t-.213.537q0 .325.213.537T12 4.25ZM7.5 17h1.2q.2 0 .388-.088T9.4 16.7l5.7-5.65l-2.15-2.15l-5.65 5.65q-.15.15-.225.337T7 15.275V16.5q0 .2.15.35t.35.15Zm8.3-6.65l1.05-1.1Q17 9.1 17 8.9t-.15-.35l-1.4-1.4Q15.3 7 15.1 7t-.35.15l-1.1 1.05l2.15 2.15Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.2q.325-.9 1.088-1.45T12 1q.95 0 1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm7-16.75q.325 0 .537-.213t.213-.537q0-.325-.213-.537T12 2.75q-.325 0-.537.213t-.213.537q0 .325.213.537T12 4.25ZM7.5 17h1.2q.2 0 .388-.088T9.4 16.7l5.7-5.65l-2.15-2.15l-5.65 5.65q-.15.15-.225.337T7 15.275V16.5q0 .2.15.35t.35.15Zm8.3-6.65l1.05-1.1Q17 9.1 17 8.9t-.15-.35l-1.4-1.4Q15.3 7 15.1 7t-.35.15l-1.1 1.05l2.15 2.15Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 32 32\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16Zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z\\%22%2F%3E%3Cpath fill=\\%22none\\%22 d=\\%22m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 32 32\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16Zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z\\%22%2F%3E%3Cpath fill=\\%22none\\%22 d=\\%22m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M15 5.1L9 3L3 5.02v16.2l6-2.33l6 2.1l6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M15 5.1L9 3L3 5.02v16.2l6-2.33l6 2.1l6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 17q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-6 5q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h7V6q0-2.075 1.463-3.538T18 1q2.075 0 3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3q-1.25 0-2.125.875T15 6v2h3q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 17q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-6 5q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h7V6q0-2.075 1.463-3.538T18 1q2.075 0 3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3q-1.25 0-2.125.875T15 6v2h3q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 13.46h2.17l3.33-6.38l.94 6.97l2.49-3.19l2.6 2.6H19V15h-3.11l-1.82-1.79l-3.69 4.71l-.76-5.77L8.11 15H5v-1.54Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 13.46h2.17l3.33-6.38l.94 6.97l2.49-3.19l2.6 2.6H19V15h-3.11l-1.82-1.79l-3.69 4.71l-.76-5.77L8.11 15H5v-1.54Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.54 12l-3.5-3.5l1.41-1.42l2.09 2.09L15.64 6l1.41 1.41L10.46 14Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.54 12l-3.5-3.5l1.41-1.42l2.09 2.09L15.64 6l1.41 1.41L10.46 14Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(168, 130, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(144, 140, 170);
  gap: 15.68px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(144, 140, 170);
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
  --callout-color: 83, 223, 221;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 168, 130, 255;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 68, 207, 110;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="a"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 17H7A5 5 0 0 1 7 7h2'/%3E%3Cpath d='M15 7h2a5 5 0 1 1 0 10h-2'/%3E%3Cline x1='8' x2='16' y1='12' y2='12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="activity"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="add"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='M12 5v14'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="arrow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='m12 5 7 7-7 7'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="b"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="beats"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='18' r='4'/%3E%3Cpath d='M12 18V2l7 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bookmark"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cake"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8'/%3E%3Cpath d='M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1'/%3E%3Cpath d='M2 21h20'/%3E%3Cpath d='M7 8v3'/%3E%3Cpath d='M12 8v3'/%3E%3Cpath d='M17 8v3'/%3E%3Cpath d='M7 4h.01'/%3E%3Cpath d='M12 4h.01'/%3E%3Cpath d='M17 4h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="calendar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cancel"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cancelled"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="close"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="comment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cons"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="d"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 17h6v-6'/%3E%3Cpath d='m22 17-8.5-8.5-5 5L2 7'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="down"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 17h6v-6'/%3E%3Cpath d='m22 17-8.5-8.5-5 5L2 7'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="download"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 15V3'/%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/%3E%3Cpath d='m7 10 5 5 5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="e"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5.8 11.3 2 22l10.7-3.79'/%3E%3Cpath d='M4 3h.01'/%3E%3Cpath d='M22 8h.01'/%3E%3Cpath d='M15 2h.01'/%3E%3Cpath d='M22 20h.01'/%3E%3Cpath d='m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10'/%3E%3Cpath d='m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17'/%3E%3Cpath d='m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7'/%3E%3Cpath d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="event"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5.8 11.3 2 22l10.7-3.79'/%3E%3Cpath d='M4 3h.01'/%3E%3Cpath d='M22 8h.01'/%3E%3Cpath d='M15 2h.01'/%3E%3Cpath d='M22 20h.01'/%3E%3Cpath d='m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10'/%3E%3Cpath d='m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17'/%3E%3Cpath d='m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7'/%3E%3Cpath d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="eye"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="forwarded"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'/%3E%3Cpath d='m21.854 2.147-10.94 10.939'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="g"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='6' x2='10' y1='11' y2='11'/%3E%3Cline x1='8' x2='8' y1='9' y2='13'/%3E%3Cline x1='15' x2='15.01' y1='12' y2='12'/%3E%3Cline x1='18' x2='18.01' y1='10' y2='10'/%3E%3Cpath d='M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="game"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='6' x2='10' y1='11' y2='11'/%3E%3Cline x1='8' x2='8' y1='9' y2='13'/%3E%3Cline x1='15' x2='15.01' y1='12' y2='12'/%3E%3Cline x1='18' x2='18.01' y1='10' y2='10'/%3E%3Cpath d='M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="h"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'/%3E%3Cpath d='M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="handshake"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="heart"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="home"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'/%3E%3Cpath d='M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="i"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
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
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(102, 105, 204, 0.25);
  border-bottom-color: rgba(102, 107, 255, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(102, 107, 255, 0.15);
  border-right-color: rgba(102, 107, 255, 0.15);
  border-top-color: rgba(102, 107, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(184, 185, 224);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 228 !important;
  --accent-s: 70% !important;
  --background-modifier-active-hover: hsla(228, 70%, 66%, 0.1) !important;
  --background-modifier-border: hsl(0, 5%, 85%) !important;
  --background-modifier-border-focus: hsl(0, 0%, 90%) !important;
  --background-modifier-border-hover: hsl(0, 5%, 50%, 0.28) !important;
  --background-modifier-error: #f45757 !important;
  --background-modifier-error-hover: #f45757 !important;
  --background-modifier-error-rgb: 244, 87, 87 !important;
  --background-modifier-form-field: hsl(0, 0%, 103.2%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 103.2%) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.05) !important;
  --background-modifier-message: hsl(227, 70.7%, 70.95%) !important;
  --background-primary: hsl(0, 0%, 103.2%) !important;
  --background-primary-alt: hsl(0, 0%, 97.2%) !important;
  --background-secondary: hsl(0, 0%, 98.2%) !important;
  --background-secondary-alt: hsl(0, 0%, 101.2%) !important;
  --base-c: 100% !important;
  --base-c-bg: 103.2% !important;
  --bases-cards-background: hsl(0, 0%, 103.2%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 97.2%) !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 5%, 85%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0, 5%, 50%, 0.28) !important;
  --bases-embed-border-color: hsl(0, 5%, 85%) !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 27%) !important;
  --bases-table-border-color: hsl(0, 5%, 85%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 103.2%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 97.2%) !important;
  --bases-table-cell-background-selected: hsla(228, 70%, 66%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0, 0%, 90%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(227, 70.7%, 70.95%) !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: hsl(0, 0%, 97.2%) !important;
  --bases-table-header-background: hsl(0, 0%, 103.2%) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.05) !important;
  --bases-table-header-color: hsl(0, 0%, 27%) !important;
  --bases-table-summary-background: hsl(0, 0%, 103.2%) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.05) !important;
  --bg-box: rgba(255, 255, 255, 0.14) !important;
  --bg-box-top: hsl(224, 74%, 73%) !important;
  --blockquote-border-color: hsl(0, 5%, 50%, 0.28) !important;
  --blockquote-border-thickness: 1.2px !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent) linear-gradient(hsl(0, 0%, 103.2%), color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent)) !important;
  --bodyFont: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --callout-content-background: hsl(0, 0%, 97.2%);
  --callout-content-padding: 10px;
  --callout-error: 244, 87, 87;
  --callout-fail: 244, 87, 87;
  --callout-padding: 0px;
  --callout-radius: 5px;
  --callout-title-padding: 5px 10px;
  --callout-title-size: 0.98em;
  --canvas-background: hsl(0, 0%, 103.2%) !important;
  --canvas-card-label-color: hsl(0, 0%, 35%) !important;
  --canvas-color-1: 244, 87, 87 !important;
  --canvas-controls-radius: 5px !important;
  --canvas-dot-pattern: hsl(0, 5%, 85%) !important;
  --caret-color: hsl(0, 0%, 20%) !important;
  --checkbox-border-color: hsl(0, 0%, 35%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 27%) !important;
  --checkbox-color: hsl(227, 70.7%, 70.95%) !important;
  --checkbox-color-hover: hsl(224, 74%, 73%) !important;
  --checkbox-marker-color: hsl(0, 0%, 103.2%) !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: hsl(0, 0%, 27%) !important;
  --clickable-icon-radius: 5px !important;
  --code-background: hsl(0, 0%, 97.2%) !important;
  --code-border-color: hsl(0, 5%, 85%) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.05) !important;
  --code-comment: hsl(0, 0%, 35%) !important;
  --code-normal: hsl(0, 0%, 20%) !important;
  --code-operator: #f45757 !important;
  --code-punctuation: hsl(0, 0%, 27%) !important;
  --code-radius: 5px !important;
  --code-tag: #f45757 !important;
  --codeFont: 'iA Writer Mono S' !important;
  --collapse-icon-color: hsl(0, 0%, 35%) !important;
  --collapse-icon-color-collapsed: hsl(228, 70%, 66%) !important;
  --color-accent: hsl(228, 70%, 66%) !important;
  --color-accent-1: hsl(227, 70.7%, 70.95%) !important;
  --color-accent-2: hsl(224, 74%, 73%) !important;
  --color-accent-hsl: 228, 70%, 66% !important;
  --color-base-00: hsl(0, 0%, 103.2%) !important;
  --color-base-05: hsl(0, 0%, 101.2%) !important;
  --color-base-10: hsl(0, 0%, 97.2%) !important;
  --color-base-100: hsl(0, 0%, 20%) !important;
  --color-base-20: hsl(0, 0%, 98.2%) !important;
  --color-base-25: hsl(0, 0%, 92%) !important;
  --color-base-30: hsl(0, 5%, 85%) !important;
  --color-base-35: hsl(0, 5%, 50%, 0.28) !important;
  --color-base-40: hsl(0, 0%, 90%) !important;
  --color-base-50: hsl(0, 0%, 35%) !important;
  --color-base-60: hsl(0, 0%, 30%) !important;
  --color-base-70: hsl(0, 0%, 27%) !important;
  --color-muted: #797593 !important;
  --color-muted-rgb: 121, 117, 147 !important;
  --color-red: #f45757 !important;
  --color-red-rgb: 244, 87, 87 !important;
  --cursor-color: hsl(227, 70.7%, 70.95%) !important;
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
  --dark: hsl(0, 0%, 20%) !important;
  --darkgray: hsl(0, 0%, 20%) !important;
  --divider-color: hsl(0, 5%, 85%) !important;
  --divider-color-hover: hsl(227, 70.7%, 70.95%) !important;
  --divider-width: 0.2px !important;
  --dropdown-background: hsl(0, 0%, 101.2%) !important;
  --dropdown-background-hover: hsla(228, 70%, 66%, 0.1) !important;
  --dv-table-column-alt-background: transparent !important;
  --dv-table-row-alt-background: transparent !important;
  --dv-table-text-align: left !important;
  --editing-file-line-width: 700px !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0, 5%, 85%), inset 0 0 0 1px hsl(0, 5%, 85%) !important;
  --embed-border-start: 2px solid hsl(227, 70.7%, 70.95%) !important;
  --file-header-background: hsl(0, 0%, 103.2%) !important;
  --file-header-background-focused: hsl(0, 0%, 103.2%) !important;
  --file-header-font: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(0, 0%, 101.2%) !important;
  --flair-color: hsl(0, 0%, 20%) !important;
  --font-default-custom: 'iA Writer Quattro S' !important;
  --font-interface: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-mermaid: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: 'iA Writer Mono S' !important;
  --font-monospace-custom: 'iA Writer Mono S' !important;
  --font-preview-view: 'iA Writer Duo S' !important;
  --font-print: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, Arial' !important;
  --font-secondary: 'iA Writer Duo S' !important;
  --font-secondary-custom: 'iA Writer Duo S' !important;
  --font-text: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif !important;
  --font-weight-default: 400 !important;
  --footnote-divider-color: hsl(0, 5%, 85%) !important;
  --footnote-id-color: hsl(0, 0%, 27%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 35%) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.05) !important;
  --footnote-line-height: 1.75 !important;
  --footnote-radius: 5px !important;
  --graph-line: hsl(0, 5%, 50%, 0.28) !important;
  --graph-node: hsl(238, 80%, 76%) !important;
  --graph-node-focused: hsl(228, 85%, 81%) !important;
  --graph-node-unresolved: hsl(248, 80%, 71%) !important;
  --graph-text: hsl(0, 0%, 20%) !important;
  --gray: hsl(0, 0%, 27%) !important;
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
  --headerFont: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, 0%, 35%) !important;
  --highlight: rgba(0, 0, 0, 0.05) !important;
  --hr-color: hsl(0, 5%, 50%, 0.28) !important;
  --hr-thickness: 1px !important;
  --icon-color: hsl(0, 0%, 27%) !important;
  --icon-color-active: hsl(228, 70%, 66%) !important;
  --icon-color-focused: hsl(0, 0%, 20%) !important;
  --icon-color-hover: hsl(0, 0%, 27%) !important;
  --img-side-margins: auto !important;
  --inactive-line-blur: 0px !important;
  --inactive-line-opacity: 0.4 !important;
  --inactive-pane-blur: 0px !important;
  --inactive-pane-opacity: 0.55 !important;
  --indentation-guide-color-active: hsl(227, 70.7%, 70.95%) !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-field-size: 0.933em !important;
  --inline-title-align: center !important;
  --inline-title-size: 2.22em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(0, 0%, 35%) !important;
  --input-placeholder-color: hsl(0, 0%, 35%) !important;
  --input-shadow: hsl(0, 5%, 85%) 0 0 0 0.8px !important;
  --input-shadow-hover: hsla(228, 70%, 66%, 0.6) 0 0 0px 1px !important;
  --interactive-accent: hsl(227, 70.7%, 70.95%) !important;
  --interactive-accent-hover: hsl(224, 74%, 73%) !important;
  --interactive-accent-hsl: 228, 70%, 66% !important;
  --interactive-hover: hsla(228, 70%, 66%, 0.1) !important;
  --interactive-normal: hsl(0, 0%, 101.2%) !important;
  --light: hsl(0, 0%, 103.2%) !important;
  --lightgray: hsl(0, 0%, 98.2%) !important;
  --line-height-normal: 1.75 !important;
  --link-color: hsl(227, 70.7%, 70.95%) !important;
  --link-color-hover: hsl(224, 74%, 73%) !important;
  --link-decoration-color: hsl(227, 70.7%, 70.95%) !important;
  --link-decoration-color-active: hsla(228, 70%, 66%, 0.5) !important;
  --link-decoration-thickness: 0.06em !important;
  --link-external-color: hsl(228, 70%, 66%) !important;
  --link-external-color-hover: hsl(224, 74%, 73%) !important;
  --link-font: 'iA Writer Duo S' !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: hsl(228, 70%, 66%) !important;
  --link-unresolved-decoration-color: hsla(228, 70%, 66%, 0.3) !important;
  --list-bullet-size: 0.25em !important;
  --list-marker-color: hsl(0, 0%, 27%) !important;
  --list-marker-color-collapsed: hsl(228, 70%, 66%) !important;
  --list-marker-color-hover: hsl(0, 0%, 27%) !important;
  --menu-background: hsl(0, 0%, 98.2%) !important;
  --menu-border-color: hsl(0, 5%, 50%, 0.28) !important;
  --menu-radius: 12px !important;
  --metadata-border-color: hsl(0, 5%, 85%) !important;
  --metadata-divider-color: hsl(0, 5%, 85%) !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-input-font: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(0, 0%, 20%) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-label-font: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(0, 0%, 27%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 27%) !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0, 0%, 90%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0, 5%, 50%, 0.28) !important;
  --modal-background: hsl(0, 0%, 103.2%) !important;
  --modal-border-color: hsl(0, 0%, 90%) !important;
  --modal-radius: 18px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 35%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 35%) !important;
  --nav-heading-color: hsl(0, 0%, 20%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 35%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 27%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 20%) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.05) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.05) !important;
  --nav-item-background-selected: hsla(228, 70%, 66%, 0.15) !important;
  --nav-item-color: hsl(0, 0%, 27%) !important;
  --nav-item-color-active: hsl(0, 0%, 20%) !important;
  --nav-item-color-highlighted: hsl(228, 70%, 66%) !important;
  --nav-item-color-hover: hsl(0, 0%, 20%) !important;
  --nav-item-color-selected: hsl(0, 0%, 20%) !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: hsl(0, 0%, 35%) !important;
  --nav-tag-color-active: hsl(0, 0%, 27%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 27%) !important;
  --nav-tag-radius: 5px !important;
  --p-indent: 15px !important;
  --p-margin: 20px !important;
  --pdf-background: hsl(0, 0%, 103.2%) !important;
  --pdf-page-background: hsl(0, 0%, 103.2%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 103.2%) !important;
  --pill-border-color: hsl(0, 5%, 85%) !important;
  --pill-border-color-hover: hsl(0, 5%, 50%, 0.28) !important;
  --pill-color: hsl(0, 0%, 27%) !important;
  --pill-color-hover: hsl(0, 0%, 20%) !important;
  --pill-color-remove: hsl(0, 0%, 35%) !important;
  --pill-color-remove-hover: hsl(228, 70%, 66%) !important;
  --prompt-background: hsl(0, 0%, 103.2%) !important;
  --prompt-border-color: hsl(0, 0%, 90%) !important;
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
  --search-clear-button-color: hsl(0, 0%, 27%) !important;
  --search-icon-color: hsl(0, 0%, 27%) !important;
  --search-result-background: hsl(0, 0%, 103.2%) !important;
  --secondary: hsl(228, 70%, 66%) !important;
  --serenity-mode-font-size: 17px !important;
  --setting-group-heading-color: hsl(0, 0%, 20%) !important;
  --setting-items-background: hsl(0, 0%, 97.2%) !important;
  --setting-items-border-color: hsl(0, 5%, 85%) !important;
  --setting-items-radius: 18px !important;
  --slider-thumb-border-color: hsl(0, 5%, 50%, 0.28) !important;
  --slider-track-background: hsl(0, 5%, 85%) !important;
  --speech-color: hsl(0, 0%, 20%) !important;
  --speech-opacity: 0.5 !important;
  --status-bar-background: hsl(0, 0%, 98.2%) !important;
  --status-bar-border-color: hsl(0, 5%, 85%) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: hsl(0, 0%, 27%) !important;
  --suggestion-background: hsl(0, 0%, 103.2%) !important;
  --sync-avatar-color-1: #f45757 !important;
  --tab-background-active: hsl(0, 0%, 103.2%) !important;
  --tab-container-background: hsl(0, 0%, 98.2%) !important;
  --tab-divider-color: hsl(0, 5%, 85%) !important;
  --tab-outline-color: hsl(0, 5%, 85%) !important;
  --tab-outline-width: 0.7px !important;
  --tab-radius: 5px !important;
  --tab-switcher-background: hsl(0, 0%, 98.2%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 98.2%), transparent) !important;
  --tab-switcher-preview-radius: 24px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(228, 70%, 66%) !important;
  --tab-text-color: hsl(0, 0%, 35%) !important;
  --tab-text-color-active: hsl(0, 0%, 27%) !important;
  --tab-text-color-focused: hsl(0, 0%, 27%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 27%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 20%) !important;
  --tab-text-color-focused-highlighted: hsl(228, 70%, 66%) !important;
  --table-add-button-border-color: hsl(0, 5%, 85%) !important;
  --table-border-color: hsl(0, 5%, 85%) !important;
  --table-drag-handle-background-active: hsl(227, 70.7%, 70.95%) !important;
  --table-drag-handle-color: hsl(0, 0%, 35%) !important;
  --table-header-background: hsl(0, 0%, 98.2%) !important;
  --table-header-background-hover: hsl(0, 0%, 98.2%) !important;
  --table-header-border-color: hsl(0, 5%, 85%) !important;
  --table-header-color: hsl(0, 0%, 20%) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(228, 70%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(227, 70.7%, 70.95%) !important;
  --table-text-size: 0.875em !important;
  --tag-background: hsla(228, 70%, 66%, 0.1) !important;
  --tag-background-hover: hsla(228, 70%, 66%, 0.2) !important;
  --tag-border-color: hsla(228, 70%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(228, 70%, 66%, 0.15) !important;
  --tag-color: hsl(228, 70%, 66%) !important;
  --tag-color-hover: hsl(228, 70%, 66%) !important;
  --tag-opacity: 0.25 !important;
  --tag-opacity-hover: 0.2 !important;
  --tag-padding-x: 6px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 5px !important;
  --tertiary: hsl(224, 74%, 73%) !important;
  --text-accent: hsl(228, 70%, 66%) !important;
  --text-accent-hover: hsl(224, 74%, 73%) !important;
  --text-base: 15% !important;
  --text-error: #f45757 !important;
  --text-faint: hsl(0, 0%, 35%) !important;
  --text-muted: hsl(0, 0%, 27%) !important;
  --text-normal: hsl(0, 0%, 20%) !important;
  --text-selection: hsla(228, 70%, 66%, 0.2) !important;
  --textHighlight: rgba(0, 0, 0, 0.05) !important;
  --theme-sat: 0% !important;
  --theme-sat-secondary: 0% !important;
  --theme-sat-text: 0% !important;
  --theme-tint: 0 !important;
  --theme-tint-secondary: 0 !important;
  --theme-tint-text: 0 !important;
  --titleFont: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(0, 0%, 103.2%) !important;
  --titlebar-background-focused: hsl(0, 0%, 98.2%) !important;
  --titlebar-border-color: hsl(0, 5%, 85%) !important;
  --titlebar-text-color: hsl(0, 0%, 27%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 20%) !important;
  --vault-profile-color: hsl(0, 0%, 20%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 20%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 250, 250);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(250, 250, 250);
  border-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(51, 51, 51);
  box-shadow: rgb(219, 215, 215) 0px 0px 0px 0.8px;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(69, 69, 69);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(69, 69, 69);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(102, 122, 204, 0.25);
  border-radius: 5px;
  color: rgb(31, 49, 122);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(69, 69, 69);
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
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(23, 44, 130);
  font-family: "iA Writer Duo S";
  outline: rgb(23, 44, 130) none 0px;
  text-decoration-color: rgb(23, 44, 130);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body footer {
  opacity: 0;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(89, 89, 89);
  border-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(129, 151, 233);
  border-color: rgb(129, 151, 233);
}

html[saved-theme="light"] body p {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 69, 69) none 0px;
  text-decoration-color: rgb(69, 69, 69);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(108, 132, 229);
  font-family: "iA Writer Duo S";
  outline: rgb(108, 132, 229) none 0px;
  text-decoration: underline 0.96px rgb(129, 151, 233);
  text-decoration-color: rgb(129, 151, 233);
  text-decoration-thickness: 0.96px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
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

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration: underline 1.5px rgb(224, 172, 0);
  text-decoration-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(244, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(129, 151, 233);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(244, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M4 21.3q-.6.2-1.05-.25T2.7 20l3.225-9.025q.375-1.05 1.45-1.288t1.85.538l4.55 4.55q.775.775.538 1.85t-1.288 1.45L4 21.3Zm10.025-9.275Q13.8 11.8 13.8 11.5t.225-.525L19.1 5.9q.8-.8 1.925-.8t1.925.8l.1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L21.9 6.95q-.35-.35-.875-.35t-.875.35l-5.1 5.1q-.2.2-.5.2t-.525-.225Zm-4-4Q9.8 7.8 9.8 7.5t.225-.525L10.1 6.9q.35-.35.35-.85t-.35-.85l-.15-.15q-.2-.2-.2-.5t.225-.525Q10.2 3.8 10.5 3.8t.525.225l.125.125q.8.8.8 1.9t-.8 1.9l-.1.1q-.2.2-.5.2t-.525-.225Zm2 2Q11.8 9.8 11.8 9.5t.225-.525L15.1 5.9q.35-.35.35-.875t-.35-.875L14 3.05q-.2-.2-.2-.5t.225-.525q.225-.225.525-.225t.525.225L16.15 3.1q.8.8.8 1.925t-.8 1.925l-3.1 3.1q-.2.2-.5.2t-.525-.225Zm4 4Q15.8 13.8 15.8 13.5t.225-.525L17.1 11.9q.8-.8 1.925-.8t1.925.8l1.1 1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L19.9 12.95q-.35-.35-.875-.35t-.875.35l-1.1 1.1q-.2.2-.5.2t-.525-.225Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M4 21.3q-.6.2-1.05-.25T2.7 20l3.225-9.025q.375-1.05 1.45-1.288t1.85.538l4.55 4.55q.775.775.538 1.85t-1.288 1.45L4 21.3Zm10.025-9.275Q13.8 11.8 13.8 11.5t.225-.525L19.1 5.9q.8-.8 1.925-.8t1.925.8l.1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L21.9 6.95q-.35-.35-.875-.35t-.875.35l-5.1 5.1q-.2.2-.5.2t-.525-.225Zm-4-4Q9.8 7.8 9.8 7.5t.225-.525L10.1 6.9q.35-.35.35-.85t-.35-.85l-.15-.15q-.2-.2-.2-.5t.225-.525Q10.2 3.8 10.5 3.8t.525.225l.125.125q.8.8.8 1.9t-.8 1.9l-.1.1q-.2.2-.5.2t-.525-.225Zm2 2Q11.8 9.8 11.8 9.5t.225-.525L15.1 5.9q.35-.35.35-.875t-.35-.875L14 3.05q-.2-.2-.2-.5t.225-.525q.225-.225.525-.225t.525.225L16.15 3.1q.8.8.8 1.925t-.8 1.925l-3.1 3.1q-.2.2-.5.2t-.525-.225Zm4 4Q15.8 13.8 15.8 13.5t.225-.525L17.1 11.9q.8-.8 1.925-.8t1.925.8l1.1 1.1q.2.2.2.5t-.225.525q-.225.225-.525.225t-.525-.225L19.9 12.95q-.35-.35-.875-.35t-.875.35l-1.1 1.1q-.2.2-.5.2t-.525-.225Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(244, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 500 500\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37ZM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32Zm84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Zm0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 500 500\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37ZM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32Zm84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Zm0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 21q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4v-7h-4v7H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 21q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4v-7h-4v7H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4c-16.6 15.6-16.3 40.5-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7c.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1c6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4c-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2l17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6l5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4c-16.6 15.6-16.3 40.5-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7c.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1c6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4c-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2l17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6l5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m22 10l-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10Zm-3-4l-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-4-3v-2h8v2H5Zm.25-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m22 10l-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10Zm-3-4l-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-4-3v-2h8v2H5Zm.25-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 256 256\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 256 256\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(244, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.2q.325-.9 1.088-1.45T12 1q.95 0 1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm7-16.75q.325 0 .537-.213t.213-.537q0-.325-.213-.537T12 2.75q-.325 0-.537.213t-.213.537q0 .325.213.537T12 4.25ZM7.5 17h1.2q.2 0 .388-.088T9.4 16.7l5.7-5.65l-2.15-2.15l-5.65 5.65q-.15.15-.225.337T7 15.275V16.5q0 .2.15.35t.35.15Zm8.3-6.65l1.05-1.1Q17 9.1 17 8.9t-.15-.35l-1.4-1.4Q15.3 7 15.1 7t-.35.15l-1.1 1.05l2.15 2.15Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.2q.325-.9 1.088-1.45T12 1q.95 0 1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm7-16.75q.325 0 .537-.213t.213-.537q0-.325-.213-.537T12 2.75q-.325 0-.537.213t-.213.537q0 .325.213.537T12 4.25ZM7.5 17h1.2q.2 0 .388-.088T9.4 16.7l5.7-5.65l-2.15-2.15l-5.65 5.65q-.15.15-.225.337T7 15.275V16.5q0 .2.15.35t.35.15Zm8.3-6.65l1.05-1.1Q17 9.1 17 8.9t-.15-.35l-1.4-1.4Q15.3 7 15.1 7t-.35.15l-1.1 1.05l2.15 2.15Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 32 32\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16Zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z\\%22%2F%3E%3Cpath fill=\\%22none\\%22 d=\\%22m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 32 32\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16Zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z\\%22%2F%3E%3Cpath fill=\\%22none\\%22 d=\\%22m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M15 5.1L9 3L3 5.02v16.2l6-2.33l6 2.1l6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M15 5.1L9 3L3 5.02v16.2l6-2.33l6 2.1l6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 17q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-6 5q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h7V6q0-2.075 1.463-3.538T18 1q2.075 0 3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3q-1.25 0-2.125.875T15 6v2h3q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 17q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-6 5q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h7V6q0-2.075 1.463-3.538T18 1q2.075 0 3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3q-1.25 0-2.125.875T15 6v2h3q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 13.46h2.17l3.33-6.38l.94 6.97l2.49-3.19l2.6 2.6H19V15h-3.11l-1.82-1.79l-3.69 4.71l-.76-5.77L8.11 15H5v-1.54Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 23 23\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 13.46h2.17l3.33-6.38l.94 6.97l2.49-3.19l2.6 2.6H19V15h-3.11l-1.82-1.79l-3.69 4.71l-.76-5.77L8.11 15H5v-1.54Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 22 22\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.54 12l-3.5-3.5l1.41-1.42l2.09 2.09L15.64 6l1.41 1.41L10.46 14Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.54 12l-3.5-3.5l1.41-1.42l2.09 2.09L15.64 6l1.41 1.41L10.46 14Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22  viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(120, 82, 238);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(121, 117, 147);
  gap: 15.68px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(121, 117, 147);
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
  --callout-color: 0, 191, 188;
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
  --callout-color: 120, 82, 238;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 8, 185, 78;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="a"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 17H7A5 5 0 0 1 7 7h2'/%3E%3Cpath d='M15 7h2a5 5 0 1 1 0 10h-2'/%3E%3Cline x1='8' x2='16' y1='12' y2='12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="activity"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="add"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='M12 5v14'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="arrow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='m12 5 7 7-7 7'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="b"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="beats"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='18' r='4'/%3E%3Cpath d='M12 18V2l7 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bookmark"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cake"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8'/%3E%3Cpath d='M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1'/%3E%3Cpath d='M2 21h20'/%3E%3Cpath d='M7 8v3'/%3E%3Cpath d='M12 8v3'/%3E%3Cpath d='M17 8v3'/%3E%3Cpath d='M7 4h.01'/%3E%3Cpath d='M12 4h.01'/%3E%3Cpath d='M17 4h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="calendar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cancel"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cancelled"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="close"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="comment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cons"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="d"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 17h6v-6'/%3E%3Cpath d='m22 17-8.5-8.5-5 5L2 7'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="down"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 17h6v-6'/%3E%3Cpath d='m22 17-8.5-8.5-5 5L2 7'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="download"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 15V3'/%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/%3E%3Cpath d='m7 10 5 5 5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="e"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5.8 11.3 2 22l10.7-3.79'/%3E%3Cpath d='M4 3h.01'/%3E%3Cpath d='M22 8h.01'/%3E%3Cpath d='M15 2h.01'/%3E%3Cpath d='M22 20h.01'/%3E%3Cpath d='m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10'/%3E%3Cpath d='m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17'/%3E%3Cpath d='m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7'/%3E%3Cpath d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="event"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5.8 11.3 2 22l10.7-3.79'/%3E%3Cpath d='M4 3h.01'/%3E%3Cpath d='M22 8h.01'/%3E%3Cpath d='M15 2h.01'/%3E%3Cpath d='M22 20h.01'/%3E%3Cpath d='m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10'/%3E%3Cpath d='m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17'/%3E%3Cpath d='m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7'/%3E%3Cpath d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="eye"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="forwarded"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'/%3E%3Cpath d='m21.854 2.147-10.94 10.939'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="g"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='6' x2='10' y1='11' y2='11'/%3E%3Cline x1='8' x2='8' y1='9' y2='13'/%3E%3Cline x1='15' x2='15.01' y1='12' y2='12'/%3E%3Cline x1='18' x2='18.01' y1='10' y2='10'/%3E%3Cpath d='M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="game"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='6' x2='10' y1='11' y2='11'/%3E%3Cline x1='8' x2='8' y1='9' y2='13'/%3E%3Cline x1='15' x2='15.01' y1='12' y2='12'/%3E%3Cline x1='18' x2='18.01' y1='10' y2='10'/%3E%3Cpath d='M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="h"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'/%3E%3Cpath d='M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="handshake"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="heart"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="home"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'/%3E%3Cpath d='M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="i"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
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
  --callout-color: 8, 109, 221;
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(51, 51, 51);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(102, 122, 204, 0.25);
  border-bottom-color: rgba(108, 132, 229, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(108, 132, 229, 0.15);
  border-right-color: rgba(108, 132, 229, 0.15);
  border-top-color: rgba(108, 132, 229, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(31, 49, 122);
}`,
  },
};
