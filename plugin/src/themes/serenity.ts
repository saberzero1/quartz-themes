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
  --bold-weight: 600 !important;
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
  --callout-title-weight: 600;
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
  --heading-spacing: 2.5rem !important;
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
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(0, 0%, 65%) !important;
  --list-marker-color-collapsed: hsl(242, 104%, 76%) !important;
  --list-marker-color-hover: hsl(0, 0%, 65%) !important;
  --menu-background: hsl(0, 0%, 1%) !important;
  --menu-border-color: hsl(0, 0%, 24%) !important;
  --menu-radius: 12px !important;
  --metadata-border-color: hsl(0, 0%, 24%) !important;
  --metadata-divider-color: hsl(0, 0%, 24%) !important;
  --metadata-input-font: iA Writer Quattro S, Nanum Gothic Coding, "MS PGothic", PingFang SC, '蘋方, '蘋方 SC, "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
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
  --sidebar-markdown-font-size: 14.4px !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
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
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
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
  --bold-weight: 600 !important;
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
  --callout-title-weight: 600;
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
  --heading-spacing: 2.5rem !important;
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
  --list-indent: 2.25em !important;
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
  --metadata-input-height: 28px !important;
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
  --sidebar-markdown-font-size: 14.4px !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
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
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
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
