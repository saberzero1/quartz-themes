import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ultra-lobster",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["nightingale", "monaspace-neon"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-grad: linear-gradient(
			45deg,
			rgb(0, 0, 0) 0%,
			rgb(0, 0, 0) 11%,
			rgb(0, 0, 0) 22%,
			rgb(0, 0, 0) 33%,
			rgb(0, 0, 0) 44%,
			rgb(0, 0, 0) 56%,
			rgb(0, 0, 0) 67%,
			rgb(0, 0, 0) 78%,
			rgb(0, 0, 0) 89%,
			rgb(0, 0, 0) 100%
		) !important;
  --background-modifier-active-hover: rgba(0, 119, 255, 0.15) !important;
  --background-modifier-border: #282828 !important;
  --background-modifier-border-alt: #303030 !important;
  --background-modifier-border-focus: #555 !important;
  --background-modifier-border-hover: #3F3F3F !important;
  --background-modifier-box-shadow: rgb(0 0 0 / 30%) !important;
  --background-modifier-cover: rgb(10 10 10 / 40%) !important;
  --background-modifier-error: #FB464C !important;
  --background-modifier-error-hover: #FB464C !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: #44CF6E !important;
  --background-secondary-alt: #282828 !important;
  --bases-cards-shadow: 0 0 0 1px #282828 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3F3F3F !important;
  --bases-embed-border-color: #282828 !important;
  --bases-group-heading-property-color: #666 !important;
  --bases-table-border-color: #282828 !important;
  --bases-table-cell-background-selected: rgba(0, 119, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #555 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 119, 255) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #666 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: rgb(0, 119, 255) !important;
  --blur-background: color-mix(in srgb, #262626 65%, transparent) linear-gradient(#262626, color-mix(in srgb, #262626 65%, transparent)) !important;
  --bodyFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --border-conOp: 1px solid rgb(255 255 255 / 10%) !important;
  --border-lowOp: 1px solid rgb(255 255 255 / 10%) !important;
  --border-midOp: 1px solid rgb(255 255 255 / 30%) !important;
  --callout-blend-mode: normal;
  --callout-question: 224, 222, 113;
  --callout-radius: 8px;
  --canvas-card-label-color: #999 !important;
  --canvas-dot-pattern: #282828 !important;
  --caret-color: #bababa !important;
  --checkbox-border-color: #999 !important;
  --checkbox-border-color-hover: #666 !important;
  --checkbox-color: rgb(0, 119, 255) !important;
  --checkbox-color-hover: #FA99CD !important;
  --checklist-done-color: #666 !important;
  --code-border-color: #282828 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #999 !important;
  --code-function: #E0DE71 !important;
  --code-important: #E9973F !important;
  --code-keyword: #FA99CD !important;
  --code-normal: #666 !important;
  --code-operator: #FB464C !important;
  --code-property: #53DFDD !important;
  --code-punctuation: #666 !important;
  --code-string: #44CF6E !important;
  --code-tag: #FB464C !important;
  --code-value: #A882FF !important;
  --codeFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #999 !important;
  --collapse-icon-color-collapsed: rgb(0, 119, 255) !important;
  --color-accent: rgb(0, 119, 255) !important;
  --color-accent-1: #FA99CD !important;
  --color-accent-1-rgb: 250, 153, 205 !important;
  --color-accent-2: rgb(0, 0, 0) !important;
  --color-accent-hover: rgb(0, 0, 0) !important;
  --color-accent-hsl: 212, 100%, 50% !important;
  --color-accent-rgb: 2, 122, 255 !important;
  --color-base-30: #282828 !important;
  --color-base-35: #3F3F3F !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --color-blue: #027AFF !important;
  --color-blue-hsl: 212, 100%, 50% !important;
  --color-cyan: #53DFDD !important;
  --color-cyan-hsl: 179, 69%, 60% !important;
  --color-green: #44CF6E !important;
  --color-green-hsl: 138, 59%, 54% !important;
  --color-orange: #E9973F !important;
  --color-orange-hsl: 31, 79%, 58% !important;
  --color-pink: #FA99CD !important;
  --color-pink-hsl: 328, 91%, 79% !important;
  --color-purple: #A882FF !important;
  --color-purple-hsl: 258, 100%, 75% !important;
  --color-red: #FB464C !important;
  --color-red-hsl: 358, 96%, 63% !important;
  --color-yellow: #E0DE71 !important;
  --color-yellow-hsl: 59, 64%, 66% !important;
  --conOp: rgb(255 255 255 / 10%) !important;
  --dark: #bababa !important;
  --darkgray: #bababa !important;
  --divider-color: #282828 !important;
  --divider-color-hover: rgb(0, 119, 255) !important;
  --dropdown-background: #262626 !important;
  --dropdown-background-hover: #3F3F3F !important;
  --embed-block-shadow-hover: 0 0 0 1px #282828,
        inset 0 0 0 1px #282828 !important;
  --embed-border-left: 2px solid rgb(0, 119, 255) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(0, 119, 255) !important;
  --file-header-font: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 74ch !important;
  --file-margins: 32px !important;
  --flair-background: #262626 !important;
  --flair-color: #bababa !important;
  --floating-toc-header-background: #262626 !important;
  --font-interface: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Satoshi", sans-serif !important;
  --font-mermaid: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono: "Monaspace", monospace !important;
  --font-print: "Satoshi", sans-serif, Arial' !important;
  --font-text: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Satoshi", sans-serif !important;
  --font-title: "Monaspace" !important;
  --footnote-divider-color: #282828 !important;
  --footnote-id-color: #666 !important;
  --footnote-id-color-no-occurrences: #999 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --gradient-bg-primary: linear-gradient(135deg, #262626 1.62%, #1e1e1e 50.72%) !important;
  --gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 1.62%, #262626 50.72%) !important;
  --graph-line: #3F3F3F !important;
  --graph-node: #666 !important;
  --graph-node-attachment: #E0DE71 !important;
  --graph-node-focused: #555 !important;
  --graph-node-tag: rgb(0, 119, 255) !important;
  --graph-node-unresolved: #999 !important;
  --graph-text: #bababa !important;
  --gray: #666 !important;
  --h1-font: "Monaspace" !important;
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem) !important;
  --h1-weight: 500 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.12em !important;
  --headerFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #999 !important;
  --highlight: rgb(255 208 0 / 40%) !important;
  --hr-color: #282828 !important;
  --icon-color: #666 !important;
  --icon-color-active: rgb(0, 119, 255) !important;
  --icon-color-focused: #bababa !important;
  --icon-color-hover: #666 !important;
  --inline-title-color: #dadada !important;
  --inline-title-font: "Monaspace" !important;
  --inline-title-size: clamp(2.5rem, 8vw - 2rem, 3rem) !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #999 !important;
  --input-placeholder-color: #999 !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgb(255 255 255 / 9%), 0 2px 4px 0 rgb(0 0 0 / 15%), 0 1px 1.5px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 20%), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgb(255 255 255 / 16%), 0 2px 3px 0 rgb(0 0 0 / 30%), 0 1px 1.5px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 40%), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(0, 119, 255) !important;
  --interactive-accent-hover: #FA99CD !important;
  --interactive-accent-hsl: 212, 100%, 50% !important;
  --interactive-hover: #3F3F3F !important;
  --interactive-normal: #262626 !important;
  --lbs: rgb(0 0 5 / 15%) 0px 20px 30px !important;
  --lightgray: #282828 !important;
  --link-color: #666 !important;
  --link-color-hover: #bababa !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: 13% !important;
  --link-external-color: rgb(0, 119, 255) !important;
  --link-external-color-hover: rgb(0, 0, 0) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #666 !important;
  --link-unresolved-decoration-color: transparent !important;
  --list-indent: 2em !important;
  --list-marker-color: #999 !important;
  --list-marker-color-collapsed: rgb(0, 119, 255) !important;
  --list-marker-color-hover: #666 !important;
  --lowOp: rgb(255 255 255 / 10%) !important;
  --menu-border-color: #3F3F3F !important;
  --menu-shadow: rgb(0 0 0 / 16%) 0px 1px 4px !important;
  --metadata-border-color: #282828 !important;
  --metadata-divider-color: #282828 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #bababa !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #666 !important;
  --metadata-label-text-color-hover: #666 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3F3F3F !important;
  --midOp: rgb(255 255 255 / 30%) !important;
  --modal-border-color: #555 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #999 !important;
  --nav-collapse-icon-color-collapsed: #999 !important;
  --nav-heading-color: #bababa !important;
  --nav-heading-color-collapsed: #999 !important;
  --nav-heading-color-collapsed-hover: #666 !important;
  --nav-heading-color-hover: #bababa !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: rgba(0, 119, 255, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 8px !important;
  --nav-item-color: #666 !important;
  --nav-item-color-active: #bababa !important;
  --nav-item-color-highlighted: rgb(0, 0, 0) !important;
  --nav-item-color-hover: #bababa !important;
  --nav-item-color-selected: #bababa !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #999 !important;
  --nav-tag-color-active: #666 !important;
  --nav-tag-color-hover: #666 !important;
  --o-border: 1px solid #282828 !important;
  --pdf-shadow: 0 0 0 1px #282828 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #282828 !important;
  --pill-border-color: #282828 !important;
  --pill-border-color-hover: #3F3F3F !important;
  --pill-color: #666 !important;
  --pill-color-hover: #bababa !important;
  --pill-color-remove: #999 !important;
  --pill-color-remove-hover: rgb(0, 119, 255) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-border-color: #555 !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, #262626 65%, transparent) linear-gradient(#262626, color-mix(in srgb, #262626 65%, transparent)) !important;
  --sbs: 24px 24px 84px -4px rgb(0 0 13 / 5%), 0px 16px 64px 6px rgb(0 13 0 / 0.7%) !important;
  --scrollbar-active-thumb-bg: rgb(0, 119, 255) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0.1) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: #666 !important;
  --search-icon-color: #666 !important;
  --secondary: rgb(0, 119, 255) !important;
  --setting-group-heading-color: #bababa !important;
  --setting-items-border-color: #282828 !important;
  --setting-items-radius: 10px !important;
  --shadow-l: rgb(0 0 0 / 20%) 0px 8px 24px !important;
  --shadow-lm-only: none !important;
  --shadow-s: rgb(0 0 0 / 16%) 0px 1px 4px !important;
  --slider-thumb-border-color: #3F3F3F !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #282828 !important;
  --status-bar-border-color: #282828 !important;
  --status-bar-text-color: #666 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #FB464C !important;
  --sync-avatar-color-2: #E9973F !important;
  --sync-avatar-color-3: #E0DE71 !important;
  --sync-avatar-color-4: #44CF6E !important;
  --sync-avatar-color-5: #53DFDD !important;
  --sync-avatar-color-6: #027AFF !important;
  --sync-avatar-color-7: #A882FF !important;
  --sync-avatar-color-8: #FA99CD !important;
  --tab-divider-color: #3F3F3F !important;
  --tab-outline-color: #282828 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 119, 255) !important;
  --tab-text-color: #999 !important;
  --tab-text-color-active: #666 !important;
  --tab-text-color-focused: #666 !important;
  --tab-text-color-focused-active: #666 !important;
  --tab-text-color-focused-active-current: #bababa !important;
  --tab-text-color-focused-highlighted: rgb(0, 119, 255) !important;
  --table-add-button-border-color: #282828 !important;
  --table-border-color: #282828 !important;
  --table-drag-handle-background-active: rgb(0, 119, 255) !important;
  --table-drag-handle-color: #999 !important;
  --table-header-border-color: #282828 !important;
  --table-header-color: #bababa !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(0, 119, 255, 0.1) !important;
  --table-selection-border-color: rgb(0, 119, 255) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(0, 119, 255, 0.1) !important;
  --tag-background-hover: rgba(0, 119, 255, 0.2) !important;
  --tag-border-color: rgba(0, 119, 255, 0.15) !important;
  --tag-border-color-hover: rgba(0, 119, 255, 0.15) !important;
  --tag-color: rgb(0, 119, 255) !important;
  --tag-color-hover: rgb(0, 119, 255) !important;
  --tertiary: rgb(0, 0, 0) !important;
  --test-image: url("https://i.pinimg.com/564x/15/05/3c/15053c066ed66a20595bef2f0b08c37d.jpg") !important;
  --text-accent: rgb(0, 119, 255) !important;
  --text-accent-hover: rgb(0, 0, 0) !important;
  --text-error: #FB464C !important;
  --text-faint: #999 !important;
  --text-highlight-bg: rgb(255 208 0 / 40%) !important;
  --text-highlight-bg-active: rgb(255 128 0 / 40%) !important;
  --text-muted: #666 !important;
  --text-normal: #bababa !important;
  --text-on-button: white !important;
  --text-selection: rgba(0, 119, 255, 0.33) !important;
  --text-success: #44CF6E !important;
  --text-warning: #E9973F !important;
  --textHighlight: rgb(255 208 0 / 40%) !important;
  --titleFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #282828 !important;
  --titlebar-text-color: #666 !important;
  --titlebar-text-color-focused: #bababa !important;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94) !important;
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95) !important;
  --ulu-font-general: "Satoshi", sans-serif !important;
  --ulu-font-title: "Monaspace" !important;
  --vault-name-color: #bababa !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #bababa !important;
  --vault-profile-color-hover: #bababa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(128, 128, 128);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body div#quartz-root {
  color: rgb(186, 186, 186);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(153, 153, 153);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(153, 153, 153);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body p {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 119, 255);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(0, 119, 255) none 0px;
  text-decoration: 13% rgb(0, 119, 255);
  text-decoration-color: rgb(0, 119, 255);
  text-decoration-thickness: 13%;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: 13% rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
  text-decoration-thickness: 13%;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
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
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(30, 30, 30);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body table {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.938px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-right-width: 0px;
  border-top-color: rgb(186, 186, 186);
  border-top-width: 0px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-width: 0px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 0px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 0px;
  border-top-color: rgb(40, 40, 40);
  border-top-width: 0px;
  color: rgb(186, 186, 186);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  transition: 0.3s;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
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
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-right-width: 0px;
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(48, 48, 48);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 48, 48);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 119, 255, 0.1);
  border-bottom-color: rgb(0, 119, 255);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(0, 119, 255);
  border-top-color: rgb(0, 119, 255);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(0, 119, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(186, 186, 186);
  font-family: Monaspace;
}

html[saved-theme="dark"] body h2 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: Monaspace;
}

html[saved-theme="dark"] body h3 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(218, 218, 218);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(48, 48, 48);
  border-bottom-width: 1px;
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-right-width: 1px;
  border-top-color: rgb(48, 48, 48);
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(186, 186, 186);
  text-decoration: underline dotted rgb(186, 186, 186);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 119, 255);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(0, 119, 255);
  border-top-color: rgb(0, 119, 255);
  color: rgb(0, 119, 255);
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
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
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: rgba(8, 108, 221, 0.15) !important;
  --background-modifier-border: #E0E0E0 !important;
  --background-modifier-border-alt: #fff !important;
  --background-modifier-border-focus: #BDBDBD !important;
  --background-modifier-border-hover: #D4D4D4 !important;
  --background-modifier-box-shadow: rgb(0 0 0 / 10%) !important;
  --background-modifier-cover: rgb(220 220 220 / 40%) !important;
  --background-modifier-error: #E93147 !important;
  --background-modifier-error-hover: #E93147 !important;
  --background-modifier-form-field: #FFF !important;
  --background-modifier-form-field-hover: #FFF !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-success: #08B94E !important;
  --background-primary: #FFF !important;
  --background-primary-alt: #FAFAFA !important;
  --background-secondary: #F3F3F3 !important;
  --background-secondary-alt: #FCFCFC !important;
  --bases-cards-background: #FFF !important;
  --bases-cards-cover-background: #FAFAFA !important;
  --bases-cards-shadow: 0 0 0 1px #E0E0E0 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #D4D4D4 !important;
  --bases-embed-border-color: #E0E0E0 !important;
  --bases-group-heading-property-color: #ABABAB !important;
  --bases-table-border-color: #E0E0E0 !important;
  --bases-table-cell-background-active: #FFF !important;
  --bases-table-cell-background-disabled: #FAFAFA !important;
  --bases-table-cell-background-selected: rgba(8, 108, 221, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #BDBDBD !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(8, 108, 221) !important;
  --bases-table-group-background: #FAFAFA !important;
  --bases-table-header-background: #FFF !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: #ABABAB !important;
  --bases-table-summary-background: #FFF !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: rgb(8, 108, 221) !important;
  --blur-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent)) !important;
  --bodyFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --border-conOp: 1px solid rgb(0 0 0 / 30%) !important;
  --border-lowOp: 1px solid rgb(0 0 0 / 10%) !important;
  --border-midOp: 1px solid rgb(0 0 0 / 30%) !important;
  --callout-blend-mode: normal;
  --callout-question: 224, 172, 0;
  --callout-radius: 8px;
  --canvas-background: #FFF !important;
  --canvas-card-label-color: #707070 !important;
  --canvas-color: 10, 10, 10 !important;
  --canvas-dot-pattern: #E0E0E0 !important;
  --caret-color: #5A5A5A !important;
  --cbs: 24px 24px 64px -4px rgb(0 0 0 / 1%), 0px 16px 32px 6px rgb(0 0 0 / 3%) !important;
  --checkbox-border-color: #707070 !important;
  --checkbox-border-color-hover: #ABABAB !important;
  --checkbox-color: rgb(8, 108, 221) !important;
  --checkbox-color-hover: rgb(0, 0, 0) !important;
  --checkbox-marker-color: #FFF !important;
  --checklist-done-color: #ABABAB !important;
  --code-background: #FAFAFA !important;
  --code-border-color: #E0E0E0 !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: #707070 !important;
  --code-function: #E0AC00 !important;
  --code-important: #EC7500 !important;
  --code-keyword: #D53984 !important;
  --code-normal: #ABABAB !important;
  --code-operator: #E93147 !important;
  --code-property: #00BFBC !important;
  --code-punctuation: #ABABAB !important;
  --code-string: #08B94E !important;
  --code-tag: #E93147 !important;
  --code-value: #7852EE !important;
  --codeFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #707070 !important;
  --collapse-icon-color-collapsed: rgb(8, 108, 221) !important;
  --color-accent: rgb(8, 108, 221) !important;
  --color-accent-1: #D53984 !important;
  --color-accent-1-rgb: 213, 57, 132 !important;
  --color-accent-2: rgb(0, 0, 0) !important;
  --color-accent-hover: rgb(0, 0, 0) !important;
  --color-accent-hsl: 212, 93%, 45% !important;
  --color-accent-rgb: 8, 109, 221 !important;
  --color-base-00: #FFF !important;
  --color-base-05: #FCFCFC !important;
  --color-base-10: #FAFAFA !important;
  --color-base-100: #222 !important;
  --color-base-20: #F3F3F3 !important;
  --color-base-25: #E3E3E3 !important;
  --color-base-30: #E0E0E0 !important;
  --color-base-35: #D4D4D4 !important;
  --color-base-40: #BDBDBD !important;
  --color-base-50: #ABABAB !important;
  --color-base-70: #5A5A5A !important;
  --color-blue: #086DDD !important;
  --color-blue-hsl: 212, 93%, 45% !important;
  --color-cyan: #00BFBC !important;
  --color-cyan-hsl: 179, 100%, 37% !important;
  --color-green: #08B94E !important;
  --color-green-hsl: 144, 92%, 38% !important;
  --color-orange: #EC7500 !important;
  --color-orange-hsl: 30, 100%, 46% !important;
  --color-pink: #D53984 !important;
  --color-pink-hsl: 331, 65%, 53% !important;
  --color-purple: #7852EE !important;
  --color-purple-hsl: 255, 82%, 63% !important;
  --color-red: #E93147 !important;
  --color-red-hsl: 353, 81%, 55% !important;
  --color-yellow: #E0AC00 !important;
  --color-yellow-hsl: 46, 100%, 44% !important;
  --conOp: rgb(0 0 0 / 30%) !important;
  --dark: #5A5A5A !important;
  --darkgray: #5A5A5A !important;
  --divider-color: #E0E0E0 !important;
  --divider-color-hover: rgb(8, 108, 221) !important;
  --dropdown-background: #FFF !important;
  --dropdown-background-hover: #FAFAFA !important;
  --embed-block-shadow-hover: 0 0 0 1px #E0E0E0,
        inset 0 0 0 1px #E0E0E0 !important;
  --embed-border-left: 2px solid rgb(8, 108, 221) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(8, 108, 221) !important;
  --file-header-background: #FFF !important;
  --file-header-background-focused: #FFF !important;
  --file-header-font: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 74ch !important;
  --file-margins: 32px !important;
  --flair-background: #FFF !important;
  --flair-color: #5A5A5A !important;
  --floating-toc-header-background: #F3F3F3 !important;
  --font-interface: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Satoshi", sans-serif !important;
  --font-mermaid: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono: "Monaspace", monospace !important;
  --font-print: "Satoshi", sans-serif, Arial' !important;
  --font-text: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Satoshi", sans-serif !important;
  --font-title: "Monaspace" !important;
  --footnote-divider-color: #E0E0E0 !important;
  --footnote-id-color: #ABABAB !important;
  --footnote-id-color-no-occurrences: #707070 !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --gradient-bg-primary: linear-gradient(135deg, #fff 1.62%, #F5F5F5 50.72%) !important;
  --gradient-bg-secondary: linear-gradient(135deg, #F3F3F3 1.62%, #E6E6E6 50.72%) !important;
  --graph-line: #D4D4D4 !important;
  --graph-node: #ABABAB !important;
  --graph-node-attachment: #E0AC00 !important;
  --graph-node-focused: #BDBDBD !important;
  --graph-node-tag: rgb(8, 108, 221) !important;
  --graph-node-unresolved: #707070 !important;
  --graph-text: #5A5A5A !important;
  --gray: #ABABAB !important;
  --h1-font: "Monaspace" !important;
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem) !important;
  --h1-weight: 500 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.12em !important;
  --headerFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #707070 !important;
  --highlight: rgb(255 208 0 / 40%) !important;
  --hr-color: #E0E0E0 !important;
  --icon-color: #ABABAB !important;
  --icon-color-active: rgb(8, 108, 221) !important;
  --icon-color-focused: #5A5A5A !important;
  --icon-color-hover: #ABABAB !important;
  --inline-title-color: #222 !important;
  --inline-title-font: "Monaspace" !important;
  --inline-title-size: clamp(2.5rem, 8vw - 2rem, 3rem) !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #707070 !important;
  --input-placeholder-color: #707070 !important;
  --input-shadow: inset 0 0 0 1px rgb(0 0 0 / 12%), 0 2px 3px 0 rgb(0 0 0 / 5%), 0 1px 1.5px 0 rgb(0 0 0 / 3%), 0 1px 2px 0 rgb(0 0 0 / 4%), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgb(0 0 0 / 17%), 0 2px 3px 0 rgb(0 0 0 / 10%), 0 1px 1.5px 0 rgb(0 0 0 / 3%), 0 1px 2px 0 rgb(0 0 0 / 4%), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(8, 108, 221) !important;
  --interactive-accent-hover: rgb(0, 0, 0) !important;
  --interactive-accent-hsl: 212, 93%, 45% !important;
  --interactive-hover: #FAFAFA !important;
  --interactive-normal: #FFF !important;
  --lbs: rgb(0 5 0 / 3%) 0px 20px 30px !important;
  --light: #FFF !important;
  --lightgray: #F3F3F3 !important;
  --link-color: #ABABAB !important;
  --link-color-hover: #5A5A5A !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: 13% !important;
  --link-external-color: rgb(8, 108, 221) !important;
  --link-external-color-hover: rgb(0, 0, 0) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #ABABAB !important;
  --link-unresolved-decoration-color: transparent !important;
  --list-indent: 2em !important;
  --list-marker-color: #707070 !important;
  --list-marker-color-collapsed: rgb(8, 108, 221) !important;
  --list-marker-color-hover: #ABABAB !important;
  --lowOp: rgb(0 0 0 / 10%) !important;
  --menu-background: #F3F3F3 !important;
  --menu-border-color: #D4D4D4 !important;
  --menu-shadow: rgb(0 0 0 / 4%) 0px 3px 5px !important;
  --metadata-border-color: #E0E0E0 !important;
  --metadata-divider-color: #E0E0E0 !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-font: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #5A5A5A !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-font: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #ABABAB !important;
  --metadata-label-text-color-hover: #ABABAB !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #BDBDBD !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D4D4D4 !important;
  --modal-background: #FFF !important;
  --modal-border-color: #BDBDBD !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #707070 !important;
  --nav-collapse-icon-color-collapsed: #707070 !important;
  --nav-heading-color: #5A5A5A !important;
  --nav-heading-color-collapsed: #707070 !important;
  --nav-heading-color-collapsed-hover: #ABABAB !important;
  --nav-heading-color-hover: #5A5A5A !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: rgba(8, 108, 221, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 8px !important;
  --nav-item-color: #ABABAB !important;
  --nav-item-color-active: #5A5A5A !important;
  --nav-item-color-highlighted: rgb(0, 0, 0) !important;
  --nav-item-color-hover: #5A5A5A !important;
  --nav-item-color-selected: #5A5A5A !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #707070 !important;
  --nav-tag-color-active: #ABABAB !important;
  --nav-tag-color-hover: #ABABAB !important;
  --o-border: 1px solid #E0E0E0 !important;
  --pdf-background: #FFF !important;
  --pdf-page-background: #FFF !important;
  --pdf-sidebar-background: #FFF !important;
  --pill-border-color: #E0E0E0 !important;
  --pill-border-color-hover: #D4D4D4 !important;
  --pill-color: #ABABAB !important;
  --pill-color-hover: #5A5A5A !important;
  --pill-color-remove: #707070 !important;
  --pill-color-remove-hover: rgb(8, 108, 221) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #FFF !important;
  --prompt-border-color: #BDBDBD !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent)) !important;
  --ribbon-background: #F3F3F3 !important;
  --ribbon-background-collapsed: #FFF !important;
  --sbs: 24px 24px 84px -4px rgb(0 0 0 / 5%), 0px 16px 64px 6px rgb(0 0 0 / 0.7%) !important;
  --scrollbar-active-thumb-bg: rgb(8, 108, 221) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0.1) !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: #ABABAB !important;
  --search-icon-color: #ABABAB !important;
  --search-result-background: #FFF !important;
  --secondary: rgb(8, 108, 221) !important;
  --setting-group-heading-color: #5A5A5A !important;
  --setting-items-background: #FAFAFA !important;
  --setting-items-border-color: #E0E0E0 !important;
  --setting-items-radius: 10px !important;
  --shadow-l: rgb(149 157 165 / 20%) 0px 8px 24px !important;
  --shadow-lm-only: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px !important;
  --shadow-s: rgb(0 0 0 / 4%) 0px 3px 5px !important;
  --slider-thumb-border-color: #D4D4D4 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #E0E0E0 !important;
  --status-bar-background: #F3F3F3 !important;
  --status-bar-border-color: #E0E0E0 !important;
  --status-bar-text-color: #ABABAB !important;
  --suggestion-background: #FFF !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #E93147 !important;
  --sync-avatar-color-2: #EC7500 !important;
  --sync-avatar-color-3: #E0AC00 !important;
  --sync-avatar-color-4: #08B94E !important;
  --sync-avatar-color-5: #00BFBC !important;
  --sync-avatar-color-6: #086DDD !important;
  --sync-avatar-color-7: #7852EE !important;
  --sync-avatar-color-8: #D53984 !important;
  --tab-background-active: #FFF !important;
  --tab-container-background: #F3F3F3 !important;
  --tab-divider-color: #D4D4D4 !important;
  --tab-outline-color: #E0E0E0 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #F3F3F3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F3F3F3, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(8, 108, 221) !important;
  --tab-text-color: #707070 !important;
  --tab-text-color-active: #ABABAB !important;
  --tab-text-color-focused: #ABABAB !important;
  --tab-text-color-focused-active: #ABABAB !important;
  --tab-text-color-focused-active-current: #5A5A5A !important;
  --tab-text-color-focused-highlighted: rgb(8, 108, 221) !important;
  --table-add-button-border-color: #E0E0E0 !important;
  --table-border-color: #E0E0E0 !important;
  --table-drag-handle-background-active: rgb(8, 108, 221) !important;
  --table-drag-handle-color: #707070 !important;
  --table-header-border-color: #E0E0E0 !important;
  --table-header-color: #5A5A5A !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(8, 108, 221, 0.1) !important;
  --table-selection-border-color: rgb(8, 108, 221) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(8, 108, 221, 0.1) !important;
  --tag-background-hover: rgba(8, 108, 221, 0.2) !important;
  --tag-border-color: rgba(8, 108, 221, 0.15) !important;
  --tag-border-color-hover: rgba(8, 108, 221, 0.15) !important;
  --tag-color: rgb(8, 108, 221) !important;
  --tag-color-hover: rgb(8, 108, 221) !important;
  --tertiary: rgb(0, 0, 0) !important;
  --text-accent: rgb(8, 108, 221) !important;
  --text-accent-hover: rgb(0, 0, 0) !important;
  --text-error: #E93147 !important;
  --text-faint: #707070 !important;
  --text-highlight-bg: rgb(255 208 0 / 40%) !important;
  --text-highlight-bg-active: rgb(255 128 0 / 40%) !important;
  --text-muted: #ABABAB !important;
  --text-normal: #5A5A5A !important;
  --text-on-button: #5A5A5A !important;
  --text-selection: #E0E0E0 !important;
  --text-success: #08B94E !important;
  --text-warning: #EC7500 !important;
  --textHighlight: rgb(255 208 0 / 40%) !important;
  --titleFont: "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #E0E0E0 !important;
  --titlebar-text-color: #ABABAB !important;
  --titlebar-text-color-focused: #5A5A5A !important;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94) !important;
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95) !important;
  --ulu-font-general: "Satoshi", sans-serif !important;
  --ulu-font-title: "Monaspace" !important;
  --vault-name-color: #5A5A5A !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #5A5A5A !important;
  --vault-profile-color-hover: #5A5A5A !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 243, 243);
  border-left-color: rgb(128, 128, 128);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(90, 90, 90);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(112, 112, 112);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(112, 112, 112);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body del {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: line-through rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body p {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(8, 108, 221);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(8, 108, 221) none 0px;
  text-decoration: 13% rgb(8, 108, 221);
  text-decoration-color: rgb(8, 108, 221);
  text-decoration-thickness: 13%;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: 13% rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
  text-decoration-thickness: 13%;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body dt {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ol > li {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul > li {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(255, 255, 255);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body table {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.938px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 90, 90);
  border-left-width: 0px;
  border-right-color: rgb(90, 90, 90);
  border-right-width: 0px;
  border-top-color: rgb(90, 90, 90);
  border-top-width: 0px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body th {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  color: rgb(90, 90, 90);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(90, 90, 90);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body figcaption {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  transition: 0.3s;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(224, 172, 0, 0.1);
  border-bottom-color: rgba(224, 172, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 172, 0, 0.25);
  border-right-color: rgba(224, 172, 0, 0.25);
  border-top-color: rgba(224, 172, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-left-width: 0px;
  border-right-color: rgb(90, 90, 90);
  border-right-width: 0px;
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(8, 108, 221, 0.1);
  border-bottom-color: rgb(8, 108, 221);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(8, 108, 221);
  border-top-color: rgb(8, 108, 221);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(8, 108, 221);
}

html[saved-theme="light"] body h1 {
  color: rgb(90, 90, 90);
  font-family: Monaspace;
}

html[saved-theme="light"] body h2 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: Monaspace;
}

html[saved-theme="light"] body h3 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(34, 34, 34);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(34, 34, 34);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(171, 171, 171);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(90, 90, 90);
  stroke: rgb(90, 90, 90);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(112, 112, 112);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .metadata {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(90, 90, 90);
  text-decoration: underline dotted rgb(90, 90, 90);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 108, 221);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(8, 108, 221);
  border-top-color: rgb(8, 108, 221);
  color: rgb(8, 108, 221);
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body sub {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body summary {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body sup {
  color: rgb(90, 90, 90);
}`,
  },
};
