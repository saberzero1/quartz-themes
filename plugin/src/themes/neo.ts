import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neo",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 250 !important;
  --accent-l: 75% !important;
  --accent-s: 80% !important;
  --anim-duration-moderate: 250ms !important;
  --anim-duration-slow: 400ms !important;
  --background-modifier-active-hover: hsla(250, 80%, 70%, 0.1) !important;
  --background-modifier-border: hsl(230, 10%, 19%) !important;
  --background-modifier-border-focus: hsl(230, 7%, 35%) !important;
  --background-modifier-border-hover: hsl(230, 8%, 25%) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: rgb(219 75 75) !important;
  --background-modifier-error-hover: rgb(219 75 75) !important;
  --background-modifier-error-rgb: 219, 75, 75 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-hover: hsla(230, 50%, 80%, 0.05) !important;
  --background-modifier-success: rgb(34 208 162) !important;
  --background-modifier-success-rgb: 34, 208, 162 !important;
  --background-primary: hsl(230, 16%, 9%) !important;
  --background-primary-alt: hsl(230, 12%, 12%) !important;
  --background-secondary: hsl(230, 12%, 12%) !important;
  --background-secondary-alt: hsl(230, 12%, 12%) !important;
  --base-05: hsl(230, 2%, 93%) !important;
  --base-10: hsl(230, 3%, 82%) !important;
  --base-15: hsl(230, 4%, 75%) !important;
  --base-20: hsl(230, 5%, 65%) !important;
  --base-25: hsl(230, 6%, 56%) !important;
  --base-30: hsl(230, 6%, 46%) !important;
  --base-35: hsl(230, 7%, 35%) !important;
  --base-40: hsl(230, 8%, 25%) !important;
  --base-45: hsl(230, 10%, 19%) !important;
  --base-50: hsl(230, 11%, 15%) !important;
  --base-55: hsl(230, 12%, 12%) !important;
  --base-60: hsl(230, 16%, 9%) !important;
  --base-hue: 230 !important;
  --bases-cards-background: hsl(230, 16%, 9%) !important;
  --bases-cards-cover-background: hsl(230, 12%, 12%) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(230, 10%, 19%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(230, 8%, 25%) !important;
  --bases-embed-border-color: hsl(230, 10%, 19%) !important;
  --bases-group-heading-property-color: hsl(230, 5%, 65%) !important;
  --bases-table-border-color: hsl(230, 10%, 19%) !important;
  --bases-table-cell-background-active: hsl(230, 16%, 9%) !important;
  --bases-table-cell-background-disabled: hsl(230, 12%, 12%) !important;
  --bases-table-cell-background-selected: hsla(250, 80%, 70%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(230, 7%, 35%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(250, 80%, 70%) !important;
  --bases-table-group-background: hsl(230, 12%, 12%) !important;
  --bases-table-header-background: hsl(230, 16%, 9%) !important;
  --bases-table-header-background-hover: hsla(230, 50%, 80%, 0.05) !important;
  --bases-table-header-color: hsl(230, 5%, 65%) !important;
  --bases-table-summary-background: hsl(230, 16%, 9%) !important;
  --bases-table-summary-background-hover: hsla(230, 50%, 80%, 0.05) !important;
  --blockquote-border-color: hsl(250, 80%, 70%) !important;
  --blur-background: color-mix(in srgb, hsl(230, 10%, 19%) 65%, transparent) linear-gradient(hsl(230, 10%, 19%), color-mix(in srgb, hsl(230, 10%, 19%) 65%, transparent)) !important;
  --bodyFont: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(230, 3%, 82%) !important;
  --callout-border-opacity: 0.15;
  --callout-border-width: 1px;
  --callout-bug: 219, 75, 75;
  --callout-default: 149, 128, 255;
  --callout-error: 219, 75, 75;
  --callout-example: 149, 128, 255;
  --callout-fail: 219, 75, 75;
  --callout-important: 82, 183, 213;
  --callout-info: 122, 162, 247;
  --callout-padding: 16px 16px 16px 24px;
  --callout-question: 224, 222, 113;
  --callout-quote: 139, 148, 158;
  --callout-success: 34, 208, 162;
  --callout-summary: 82, 183, 213;
  --callout-tip: 82, 183, 213;
  --callout-todo: 122, 162, 247;
  --callout-warning: 237, 139, 79;
  --canvas-background: hsl(230, 16%, 9%) !important;
  --canvas-card-label-color: hsl(230, 7%, 35%) !important;
  --canvas-color-1: 219, 75, 75 !important;
  --canvas-color-2: 237, 139, 79 !important;
  --canvas-color-4: 34, 208, 162 !important;
  --canvas-color-5: 82, 183, 213 !important;
  --canvas-color-6: 149, 128, 255 !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 150px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: hsl(230, 4%, 75%) !important;
  --checkbox-border-color: hsl(230, 7%, 35%) !important;
  --checkbox-border-color-hover: hsl(230, 5%, 65%) !important;
  --checkbox-color: hsl(250, 80%, 70%) !important;
  --checkbox-color-hover: hsl(250, 80%, 75%) !important;
  --checkbox-marker-color: hsl(230, 16%, 9%) !important;
  --checkbox-progress-width: 32px !important;
  --checklist-done-color: hsl(230, 7%, 35%) !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 6px !important;
  --code-background: hsl(230, 12%, 12%) !important;
  --code-border-color: hsl(230, 10%, 19%) !important;
  --code-bracket-background: hsla(230, 50%, 80%, 0.05) !important;
  --code-comment: hsl(230, 7%, 35%) !important;
  --code-function: rgb(82 183 213) !important;
  --code-important: rgb(219 75 75) !important;
  --code-keyword: rgb(149, 128, 255) !important;
  --code-normal: hsl(230, 4%, 75%) !important;
  --code-operator: rgb(237 139 79) !important;
  --code-property: rgb(122 176 247) !important;
  --code-punctuation: rgb(255 151 207) !important;
  --code-string: rgb(34 208 162) !important;
  --code-tag: rgb(230 232 118) !important;
  --code-value: rgb(82 183 213) !important;
  --codeFont: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(230, 7%, 35%) !important;
  --collapse-icon-color-collapsed: hsl(250, 85%, 75%) !important;
  --color-accent: hsl(250, 80%, 70%) !important;
  --color-accent-1: hsl(250, 80%, 70%) !important;
  --color-accent-2: hsl(250, 80%, 75%) !important;
  --color-accent-hsl: 250, 80%, 70% !important;
  --color-black: rgb(14 19 25) !important;
  --color-black-rgb: 14, 19, 25 !important;
  --color-blue: rgb(122 176 247) !important;
  --color-blue-rgb: 122, 162, 247 !important;
  --color-cyan: rgb(82 183 213) !important;
  --color-cyan-rgb: 82, 183, 213 !important;
  --color-green: rgb(34 208 162) !important;
  --color-green-rgb: 34, 208, 162 !important;
  --color-muted: rgb(139 148 158) !important;
  --color-muted-rgb: 139, 148, 158 !important;
  --color-orange: rgb(237 139 79) !important;
  --color-orange-rgb: 237, 139, 79 !important;
  --color-pink: rgb(255 151 207) !important;
  --color-purple: rgb(149, 128, 255) !important;
  --color-purple-rgb: 149, 128, 255 !important;
  --color-red: rgb(219 75 75) !important;
  --color-red-rgb: 219, 75, 75 !important;
  --color-teal: rgb(62 180 191) !important;
  --color-teal-rgb: 62, 180, 191 !important;
  --color-white: rgb(230 230 230) !important;
  --color-white-rgb: 230, 230, 230 !important;
  --color-yellow: rgb(230 232 118) !important;
  --cursor: pointer !important;
  --dark: hsl(230, 4%, 75%) !important;
  --darkgray: hsl(230, 4%, 75%) !important;
  --divider-color: hsl(230, 10%, 19%) !important;
  --divider-color-hover: hsl(250, 80%, 70%) !important;
  --dropdown-background: hsl(230, 10%, 19%) !important;
  --dropdown-background-hover: hsl(230, 8%, 25%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(230, 10%, 19%), inset 0 0 0 1px hsl(230, 10%, 19%) !important;
  --embed-border-start: 2px solid hsl(250, 80%, 70%) !important;
  --file-header-background: hsl(230, 16%, 9%) !important;
  --file-header-background-focused: hsl(230, 16%, 9%) !important;
  --file-header-font: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(230, 10%, 19%) !important;
  --flair-color: hsl(230, 4%, 75%) !important;
  --font-editor-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  --font-interface: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  --font-mermaid: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace !important;
  --font-print: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, Arial' !important;
  --font-text: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  --footnote-divider-color: hsl(230, 10%, 19%) !important;
  --footnote-id-color: hsl(230, 5%, 65%) !important;
  --footnote-id-color-no-occurrences: hsl(230, 7%, 35%) !important;
  --footnote-input-background-active: hsla(230, 50%, 80%, 0.05) !important;
  --footnote-line-height: 1.6 !important;
  --frame-left-space: 6px !important;
  --frame-right-space: 132px !important;
  --graph-node: hsl(230, 5%, 65%) !important;
  --graph-node-attachment: rgb(230 232 118) !important;
  --graph-node-focused: hsl(250, 85%, 75%) !important;
  --graph-node-tag: rgb(34 208 162) !important;
  --graph-node-unresolved: hsl(230, 7%, 35%) !important;
  --graph-text: hsl(230, 4%, 75%) !important;
  --gray: hsl(230, 5%, 65%) !important;
  --h1-color: hsl(250, 52%, 72%) !important;
  --h1-size: 1.8rem !important;
  --h2-color: hsl(250, 52%, 68%) !important;
  --h2-size: 1.5rem !important;
  --h2-weight: 600 !important;
  --h3-color: hsl(250, 52%, 64%) !important;
  --h3-size: 1.45rem !important;
  --h3-weight: 600 !important;
  --h4-color: hsl(250, 50%, 60%) !important;
  --h4-size: 1.25rem !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(250, 40%, 52%) !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.125rem !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(250, 38%, 46%) !important;
  --h6-line-height: 1.6 !important;
  --h6-size: 1rem !important;
  --headerFont: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(230, 7%, 35%) !important;
  --highlight: hsl(230, 8%, 25%) !important;
  --hr-color: hsla(250, 50%, 75%, 0.1) !important;
  --icon-color: hsl(230, 5%, 65%) !important;
  --icon-color-active: hsl(250, 85%, 75%) !important;
  --icon-color-focused: hsl(230, 4%, 75%) !important;
  --icon-color-hover: hsl(230, 5%, 65%) !important;
  --indentation-guide-color: hsl(230, 10%, 19%) !important;
  --indentation-guide-color-active: hsl(230, 7%, 35%) !important;
  --inline-title-color: hsl(230, 2%, 93%) !important;
  --inline-title-size: 2rem !important;
  --input-date-separator: hsl(230, 7%, 35%) !important;
  --input-placeholder-color: hsl(230, 7%, 35%) !important;
  --interactive-accent: hsl(250, 80%, 70%) !important;
  --interactive-accent-hover: hsl(250, 80%, 75%) !important;
  --interactive-accent-hsl: 250, 80%, 70% !important;
  --interactive-hover: hsl(230, 8%, 25%) !important;
  --interactive-normal: hsl(230, 10%, 19%) !important;
  --light: hsl(230, 16%, 9%) !important;
  --lightgray: hsl(230, 12%, 12%) !important;
  --line-height-normal: 1.6 !important;
  --link-color: hsl(250, 85%, 75%) !important;
  --link-color-hover: hsl(250, 90%, 84%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(250, 85%, 75%) !important;
  --link-external-color-hover: hsl(250, 90%, 84%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsl(250, 85%, 75%) !important;
  --link-unresolved-decoration-color: hsla(250, 80%, 70%, 0.3) !important;
  --list-marker-color: hsl(230, 6%, 46%) !important;
  --list-marker-color-collapsed: hsl(250, 85%, 75%) !important;
  --list-marker-color-hover: hsl(230, 5%, 65%) !important;
  --menu-background: hsl(230, 12%, 12%) !important;
  --menu-border-color: hsl(230, 8%, 25%) !important;
  --menu-radius: 6px !important;
  --metadata-border-color: hsl(230, 10%, 19%) !important;
  --metadata-divider-color: hsl(230, 10%, 19%) !important;
  --metadata-input-background-active: hsla(230, 50%, 80%, 0.05) !important;
  --metadata-input-font: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(230, 4%, 75%) !important;
  --metadata-label-background-active: hsla(230, 50%, 80%, 0.05) !important;
  --metadata-label-font: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(230, 5%, 65%) !important;
  --metadata-label-text-color-hover: hsl(230, 5%, 65%) !important;
  --metadata-property-background-active: hsla(230, 50%, 80%, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(230, 7%, 35%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(230, 8%, 25%) !important;
  --modal-background: hsl(230, 16%, 9%) !important;
  --modal-border-color: hsl(230, 10%, 19%) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: hsl(230, 7%, 35%) !important;
  --nav-collapse-icon-color-collapsed: hsl(230, 7%, 35%) !important;
  --nav-heading-color: hsl(230, 4%, 75%) !important;
  --nav-heading-color-collapsed: hsl(230, 7%, 35%) !important;
  --nav-heading-color-collapsed-hover: hsl(230, 5%, 65%) !important;
  --nav-heading-color-hover: hsl(230, 4%, 75%) !important;
  --nav-indentation-guide-color: hsl(230, 10%, 19%) !important;
  --nav-item-background-active: hsla(230, 50%, 80%, 0.05) !important;
  --nav-item-background-hover: hsla(230, 50%, 80%, 0.05) !important;
  --nav-item-background-selected: hsla(250, 80%, 70%, 0.15) !important;
  --nav-item-color: hsl(230, 5%, 65%) !important;
  --nav-item-color-active: hsl(230, 4%, 75%) !important;
  --nav-item-color-highlighted: hsl(250, 85%, 75%) !important;
  --nav-item-color-hover: hsl(230, 4%, 75%) !important;
  --nav-item-color-selected: hsl(230, 4%, 75%) !important;
  --nav-tag-color: hsl(230, 7%, 35%) !important;
  --nav-tag-color-active: hsl(230, 5%, 65%) !important;
  --nav-tag-color-hover: hsl(230, 5%, 65%) !important;
  --pdf-background: hsl(230, 16%, 9%) !important;
  --pdf-page-background: hsl(230, 16%, 9%) !important;
  --pdf-shadow: 0 0 0 1px hsl(230, 10%, 19%) !important;
  --pdf-sidebar-background: hsl(230, 16%, 9%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(230, 10%, 19%) !important;
  --pill-border-color: hsl(230, 10%, 19%) !important;
  --pill-border-color-hover: hsl(230, 8%, 25%) !important;
  --pill-color: hsl(230, 5%, 65%) !important;
  --pill-color-hover: hsl(230, 4%, 75%) !important;
  --pill-color-remove: hsl(230, 7%, 35%) !important;
  --pill-color-remove-hover: hsl(250, 85%, 75%) !important;
  --prompt-background: hsl(230, 16%, 9%) !important;
  --prompt-border-color: hsl(230, 11%, 15%) !important;
  --radius-l: 10px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, hsl(230, 10%, 19%) 65%, transparent) linear-gradient(hsl(230, 10%, 19%), color-mix(in srgb, hsl(230, 10%, 19%) 65%, transparent)) !important;
  --ribbon-background: hsl(230, 12%, 12%) !important;
  --ribbon-background-collapsed: hsl(230, 12%, 12%) !important;
  --ribbon-padding: 8px 0px !important;
  --ribbon-width: 40px !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --scrollbar-opacity: 0 !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.08) !important;
  --search-clear-button-color: hsl(230, 5%, 65%) !important;
  --search-icon-color: hsl(230, 5%, 65%) !important;
  --search-result-background: hsl(230, 16%, 9%) !important;
  --secondary: hsl(250, 85%, 75%) !important;
  --setting-group-heading-color: hsl(230, 4%, 75%) !important;
  --setting-items-background: hsl(230, 12%, 12%) !important;
  --setting-items-border-color: hsl(230, 10%, 19%) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: hsl(230, 8%, 25%) !important;
  --slider-track-background: hsl(230, 10%, 19%) !important;
  --status-bar-background: hsl(230, 12%, 12%) !important;
  --status-bar-border-color: hsl(230, 10%, 19%) !important;
  --status-bar-border-width: 1px 0 0 0px !important;
  --status-bar-height: 24px !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: hsl(230, 5%, 65%) !important;
  --suggestion-background: hsl(230, 16%, 9%) !important;
  --sync-avatar-color-1: rgb(219 75 75) !important;
  --sync-avatar-color-2: rgb(237 139 79) !important;
  --sync-avatar-color-3: rgb(230 232 118) !important;
  --sync-avatar-color-4: rgb(34 208 162) !important;
  --sync-avatar-color-5: rgb(82 183 213) !important;
  --sync-avatar-color-6: rgb(122 176 247) !important;
  --sync-avatar-color-7: rgb(149, 128, 255) !important;
  --sync-avatar-color-8: rgb(255 151 207) !important;
  --tab-active-color: hsl(230, 10%, 19%) !important;
  --tab-background-active: hsl(230, 16%, 9%) !important;
  --tab-container-background: hsl(230, 12%, 12%) !important;
  --tab-divider-color: transparent !important;
  --tab-min-width: 92px !important;
  --tab-outline-color: hsl(230, 10%, 19%) !important;
  --tab-switcher-background: hsl(230, 12%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 12%, 12%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(250, 80%, 70%) !important;
  --tab-text-color: hsl(230, 7%, 35%) !important;
  --tab-text-color-active: hsl(230, 5%, 65%) !important;
  --tab-text-color-focused: hsl(230, 5%, 65%) !important;
  --tab-text-color-focused-active: hsl(230, 5%, 65%) !important;
  --tab-text-color-focused-active-current: hsl(230, 4%, 75%) !important;
  --tab-text-color-focused-highlighted: hsl(250, 85%, 75%) !important;
  --table-add-button-border-color: hsl(230, 10%, 19%) !important;
  --table-border-color: hsl(230, 10%, 19%) !important;
  --table-drag-handle-background-active: hsl(250, 80%, 70%) !important;
  --table-drag-handle-color: hsl(230, 7%, 35%) !important;
  --table-header-background: hsl(230, 12%, 12%) !important;
  --table-header-background-hover: hsl(230, 12%, 12%) !important;
  --table-header-border-color: hsl(230, 10%, 19%) !important;
  --table-header-color: hsl(230, 4%, 75%) !important;
  --table-selection: hsla(250, 80%, 70%, 0.1) !important;
  --table-selection-border-color: hsl(250, 80%, 70%) !important;
  --tag-background: hsla(250, 80%, 70%, 0.1) !important;
  --tag-background-hover: hsla(250, 80%, 70%, 0.2) !important;
  --tag-border-color: hsla(250, 80%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(250, 80%, 70%, 0.15) !important;
  --tag-color: hsl(250, 85%, 75%) !important;
  --tag-color-hover: hsl(250, 85%, 75%) !important;
  --tag-radius: 6px !important;
  --tertiary: hsl(250, 90%, 84%) !important;
  --text-accent: hsl(250, 85%, 75%) !important;
  --text-accent-hover: hsl(250, 90%, 84%) !important;
  --text-error: rgb(219 75 75) !important;
  --text-faint: hsl(230, 7%, 35%) !important;
  --text-highlight-bg: hsl(230, 8%, 25%) !important;
  --text-muted: hsl(230, 5%, 65%) !important;
  --text-normal: hsl(230, 4%, 75%) !important;
  --text-selection: hsl(230, 11%, 15%) !important;
  --text-success: rgb(34 208 162) !important;
  --text-warning: rgb(237 139 79) !important;
  --textHighlight: hsl(230, 8%, 25%) !important;
  --titleFont: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(230, 12%, 12%) !important;
  --titlebar-background-focused: hsl(230, 12%, 12%) !important;
  --titlebar-border-color: hsl(230, 10%, 19%) !important;
  --titlebar-text-color: hsl(230, 5%, 65%) !important;
  --titlebar-text-color-focused: hsl(230, 4%, 75%) !important;
  --vault-profile-color: hsl(230, 4%, 75%) !important;
  --vault-profile-color-hover: hsl(230, 4%, 75%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 28, 34);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(19, 21, 27);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(27, 28, 34);
  border-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(44, 45, 53);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(138, 117, 240, 0.1);
  border-radius: 6px;
  color: rgb(155, 137, 245);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 28, 34);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 45, 53);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 28, 34);
  border-left-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(19, 21, 27);
  color: rgb(189, 190, 194);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(208, 208, 210);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 210) none 0px;
  text-decoration-color: rgb(208, 208, 210);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(208, 208, 210);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 210) none 0px;
  text-decoration-color: rgb(208, 208, 210);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(59, 60, 69);
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body del {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 117, 240);
  border-color: rgb(138, 117, 240);
}

html[saved-theme="dark"] body p {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(161, 163, 170) none 0px;
  text-decoration-color: rgb(161, 163, 170);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(155, 137, 245);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration-color: rgb(155, 137, 245);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(155, 137, 245);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration-color: rgb(155, 137, 245);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(155, 137, 245);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration: rgba(138, 117, 240, 0.3);
  text-decoration-color: rgba(138, 117, 240, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body dt {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body table {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 216.406px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(27, 28, 34);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(82, 183, 213);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(82, 183, 213);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(82, 183, 213);
  border-left-color: rgb(82, 183, 213);
  border-right-color: rgb(82, 183, 213);
  border-top-color: rgb(82, 183, 213);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(159, 146, 221);
  border-left-color: rgb(159, 146, 221);
  border-right-color: rgb(159, 146, 221);
  border-top-color: rgb(159, 146, 221);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(138, 117, 240);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(83, 85, 95);
  border-left-color: rgb(83, 85, 95);
  border-right-color: rgb(83, 85, 95);
  border-top-color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(83, 85, 95);
  text-decoration: line-through 1px rgb(83, 85, 95);
  text-decoration-color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(237, 139, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  color: rgba(0, 0, 0, 0);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(122, 176, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(237, 139, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(237, 139, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(82, 183, 213);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(122, 176, 247);
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
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(122, 176, 247);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(149, 128, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 82, 183, 213;
  background-color: rgba(82, 183, 213, 0.07);
  border-bottom-color: rgba(82, 183, 213, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(82, 183, 213, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(82, 183, 213, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(82, 183, 213, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 149, 128, 255;
  background-color: rgba(149, 128, 255, 0.07);
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.07);
  border-bottom-color: rgba(122, 162, 247, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(122, 162, 247, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(122, 162, 247, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(122, 162, 247, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 149, 128, 255;
  background-color: rgba(149, 128, 255, 0.07);
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.07);
  border-bottom-color: rgba(224, 222, 113, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(224, 222, 113, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(224, 222, 113, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(224, 222, 113, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 139, 148, 158;
  background-color: rgba(139, 148, 158, 0.07);
  border-bottom-color: rgba(139, 148, 158, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(139, 148, 158, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(139, 148, 158, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(139, 148, 158, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 34, 208, 162;
  background-color: rgba(34, 208, 162, 0.07);
  border-bottom-color: rgba(34, 208, 162, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(34, 208, 162, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(34, 208, 162, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(34, 208, 162, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 82, 183, 213;
  background-color: rgba(82, 183, 213, 0.07);
  border-bottom-color: rgba(82, 183, 213, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(82, 183, 213, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(82, 183, 213, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(82, 183, 213, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.07);
  border-bottom-color: rgba(122, 162, 247, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(122, 162, 247, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(122, 162, 247, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(122, 162, 247, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 237, 139, 79;
  background-color: rgba(237, 139, 79, 0.07);
  border-bottom-color: rgba(237, 139, 79, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 139, 79, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(237, 139, 79, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(237, 139, 79, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(34, 35, 42);
  border-bottom-color: rgb(34, 35, 42);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(179, 187, 230, 0.05);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(34, 35, 42);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 28, 34);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(179, 187, 230, 0.05);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(179, 187, 230, 0.05);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 117, 240, 0.1);
  border-bottom-color: rgba(138, 117, 240, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(138, 117, 240, 0.15);
  border-right-color: rgba(138, 117, 240, 0.15);
  border-top-color: rgba(138, 117, 240, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(155, 137, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(159, 146, 221);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(145, 131, 216);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(237, 237, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(131, 115, 211);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(119, 102, 204);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(100, 84, 182);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(88, 73, 162);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(161, 163, 170);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(161, 163, 170);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(44, 45, 53);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(189, 190, 194);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(161, 163, 170);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-left-width: 0px;
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 0px;
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(161, 163, 170);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(161, 163, 170);
  cursor: pointer;
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(161, 163, 170);
  stroke: rgb(161, 163, 170);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(83, 85, 95);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(27, 28, 34);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body sub {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body summary {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body sup {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(138, 117, 240, 0.1);
  border-bottom-color: rgba(138, 117, 240, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(138, 117, 240, 0.15);
  border-right-color: rgba(138, 117, 240, 0.15);
  border-top-color: rgba(138, 117, 240, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(155, 137, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 250 !important;
  --accent-l: 75% !important;
  --accent-s: 80% !important;
  --anim-duration-moderate: 250ms !important;
  --anim-duration-slow: 400ms !important;
  --background-modifier-active-hover: hsla(250, 80%, 75%, 0.1) !important;
  --background-modifier-border: hsl(230, 20%, 86%) !important;
  --background-modifier-border-focus: hsl(230, 10%, 62%) !important;
  --background-modifier-border-hover: hsl(230, 15%, 78%) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-error: rgb(250, 55, 62) !important;
  --background-modifier-error-hover: rgb(250, 55, 62) !important;
  --background-modifier-error-rgb: 250, 55, 62 !important;
  --background-modifier-form-field: rgba(255, 255, 255, 0.5) !important;
  --background-modifier-form-field-hover: rgba(255, 255, 255, 0.5) !important;
  --background-modifier-hover: hsla(230, 40%, 90%, 0.8) !important;
  --background-modifier-success: rgb(14, 192, 67) !important;
  --background-modifier-success-rgb: 14, 192, 67 !important;
  --background-primary: hsl(230, 15%, 98%) !important;
  --background-primary-alt: hsl(230, 25%, 96%) !important;
  --background-secondary: hsl(230, 25%, 96%) !important;
  --background-secondary-alt: hsl(230, 25%, 96%) !important;
  --base-05: hsl(230, 14%, 8%) !important;
  --base-10: hsl(230, 12%, 12%) !important;
  --base-15: hsl(230, 11%, 15%) !important;
  --base-20: hsl(230, 10%, 19%) !important;
  --base-25: hsl(230, 10%, 25%) !important;
  --base-30: hsl(230, 10%, 35%) !important;
  --base-35: hsl(230, 10%, 62%) !important;
  --base-40: hsl(230, 15%, 78%) !important;
  --base-45: hsl(230, 20%, 86%) !important;
  --base-50: hsl(230, 30%, 92%) !important;
  --base-55: hsl(230, 25%, 96%) !important;
  --base-60: hsl(230, 15%, 98%) !important;
  --base-hue: 230 !important;
  --bases-cards-background: hsl(230, 15%, 98%) !important;
  --bases-cards-cover-background: hsl(230, 25%, 96%) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(230, 20%, 86%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(230, 15%, 78%) !important;
  --bases-embed-border-color: hsl(230, 20%, 86%) !important;
  --bases-group-heading-property-color: hsl(230, 10%, 19%) !important;
  --bases-table-border-color: hsl(230, 20%, 86%) !important;
  --bases-table-cell-background-active: hsl(230, 15%, 98%) !important;
  --bases-table-cell-background-disabled: hsl(230, 25%, 96%) !important;
  --bases-table-cell-background-selected: hsla(250, 80%, 75%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(230, 10%, 62%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(250, 80%, 75%) !important;
  --bases-table-group-background: hsl(230, 25%, 96%) !important;
  --bases-table-header-background: hsl(230, 15%, 98%) !important;
  --bases-table-header-background-hover: hsla(230, 40%, 90%, 0.8) !important;
  --bases-table-header-color: hsl(230, 10%, 19%) !important;
  --bases-table-summary-background: hsl(230, 15%, 98%) !important;
  --bases-table-summary-background-hover: hsla(230, 40%, 90%, 0.8) !important;
  --blockquote-border-color: hsl(250, 80%, 75%) !important;
  --blur-background: color-mix(in srgb, hsl(230, 15%, 98%) 65%, transparent) linear-gradient(hsl(230, 15%, 98%), color-mix(in srgb, hsl(230, 15%, 98%) 65%, transparent)) !important;
  --bodyFont: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(230, 12%, 12%) !important;
  --callout-border-opacity: 0.15;
  --callout-border-width: 1px;
  --callout-bug: 250, 55, 62;
  --callout-default: 111, 85, 241;
  --callout-error: 250, 55, 62;
  --callout-example: 111, 85, 241;
  --callout-fail: 250, 55, 62;
  --callout-important: 61, 155, 184;
  --callout-info: 86, 128, 219;
  --callout-padding: 16px 16px 16px 24px;
  --callout-question: 229, 199, 0;
  --callout-quote: 138, 147, 158;
  --callout-success: 14, 192, 67;
  --callout-summary: 61, 155, 184;
  --callout-tip: 61, 155, 184;
  --callout-todo: 86, 128, 219;
  --callout-warning: 248, 119, 33;
  --canvas-background: hsl(230, 15%, 98%) !important;
  --canvas-card-label-color: hsl(230, 10%, 62%) !important;
  --canvas-color-1: 250, 55, 62 !important;
  --canvas-color-2: 248, 119, 33 !important;
  --canvas-color-3: 229, 199, 0 !important;
  --canvas-color-4: 14, 192, 67 !important;
  --canvas-color-5: 61, 155, 184 !important;
  --canvas-color-6: 111, 85, 241 !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 150px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: hsl(230, 11%, 15%) !important;
  --checkbox-border-color: hsl(230, 10%, 62%) !important;
  --checkbox-border-color-hover: hsl(230, 10%, 19%) !important;
  --checkbox-color: hsl(250, 80%, 75%) !important;
  --checkbox-color-hover: hsl(250, 80%, 70%) !important;
  --checkbox-marker-color: hsl(230, 15%, 98%) !important;
  --checkbox-progress-width: 32px !important;
  --checklist-done-color: hsl(230, 10%, 62%) !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 6px !important;
  --code-background: hsl(230, 25%, 96%) !important;
  --code-border-color: hsl(230, 20%, 86%) !important;
  --code-bracket-background: hsla(230, 40%, 90%, 0.8) !important;
  --code-comment: hsl(230, 10%, 62%) !important;
  --code-function: rgb(61 155 184) !important;
  --code-important: rgb(250, 55, 62) !important;
  --code-keyword: rgb(111, 85, 241) !important;
  --code-normal: hsl(230, 11%, 15%) !important;
  --code-operator: rgb(248, 119, 33) !important;
  --code-property: rgb(86 128 219) !important;
  --code-punctuation: rgb(212, 73, 147) !important;
  --code-string: rgb(14, 192, 67) !important;
  --code-tag: rgb(229, 199, 0) !important;
  --code-value: rgb(61 155 184) !important;
  --codeFont: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(230, 10%, 62%) !important;
  --collapse-icon-color-collapsed: hsl(250, 85%, 65%) !important;
  --color-accent: hsl(250, 80%, 75%) !important;
  --color-accent-1: hsl(250, 80%, 75%) !important;
  --color-accent-2: hsl(250, 80%, 70%) !important;
  --color-accent-hsl: 250, 80%, 75% !important;
  --color-black: rgb(15, 20, 26) !important;
  --color-black-rgb: 15, 20, 26 !important;
  --color-blue: rgb(86 128 219) !important;
  --color-blue-rgb: 86, 128, 219 !important;
  --color-cyan: rgb(61 155 184) !important;
  --color-cyan-rgb: 61, 155, 184 !important;
  --color-green: rgb(14, 192, 67) !important;
  --color-green-rgb: 14, 192, 67 !important;
  --color-muted: rgb(138, 147, 158) !important;
  --color-muted-rgb: 138, 147, 158 !important;
  --color-orange: rgb(248, 119, 33) !important;
  --color-orange-rgb: 248, 119, 33 !important;
  --color-pink: rgb(212, 73, 147) !important;
  --color-pink-rgb: 212, 73, 147 !important;
  --color-purple: rgb(111, 85, 241) !important;
  --color-purple-rgb: 111, 85, 241 !important;
  --color-red: rgb(250, 55, 62) !important;
  --color-red-rgb: 250, 55, 62 !important;
  --color-teal: rgb(44, 174, 186) !important;
  --color-teal-rgb: 44, 174, 186 !important;
  --color-white: rgb(222, 222, 222) !important;
  --color-white-rgb: 222, 222, 222 !important;
  --color-yellow: rgb(229, 199, 0) !important;
  --color-yellow-rgb: 229, 199, 0 !important;
  --cursor: pointer !important;
  --dark: hsl(230, 11%, 15%) !important;
  --darkgray: hsl(230, 11%, 15%) !important;
  --divider-color: hsl(230, 20%, 86%) !important;
  --divider-color-hover: hsl(250, 80%, 75%) !important;
  --dropdown-background: hsl(230, 25%, 96%) !important;
  --dropdown-background-hover: hsl(230, 30%, 92%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(230, 20%, 86%), inset 0 0 0 1px hsl(230, 20%, 86%) !important;
  --embed-border-start: 2px solid hsl(250, 80%, 75%) !important;
  --file-header-background: hsl(230, 15%, 98%) !important;
  --file-header-background-focused: hsl(230, 15%, 98%) !important;
  --file-header-font: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(230, 25%, 96%) !important;
  --flair-color: hsl(230, 11%, 15%) !important;
  --font-editor-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  --font-interface: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  --font-mermaid: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace !important;
  --font-print: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, Arial' !important;
  --font-text: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  --footnote-divider-color: hsl(230, 20%, 86%) !important;
  --footnote-id-color: hsl(230, 10%, 19%) !important;
  --footnote-id-color-no-occurrences: hsl(230, 10%, 62%) !important;
  --footnote-input-background-active: hsla(230, 40%, 90%, 0.8) !important;
  --footnote-line-height: 1.6 !important;
  --frame-left-space: 6px !important;
  --frame-right-space: 132px !important;
  --graph-node: hsl(230, 10%, 19%) !important;
  --graph-node-attachment: rgb(229, 199, 0) !important;
  --graph-node-focused: hsl(250, 85%, 65%) !important;
  --graph-node-tag: rgb(14, 192, 67) !important;
  --graph-node-unresolved: hsl(230, 10%, 62%) !important;
  --graph-text: hsl(230, 11%, 15%) !important;
  --gray: hsl(230, 10%, 19%) !important;
  --h1-color: hsl(250, 52%, 72%) !important;
  --h1-size: 1.8rem !important;
  --h2-color: hsl(250, 52%, 68%) !important;
  --h2-size: 1.5rem !important;
  --h2-weight: 600 !important;
  --h3-color: hsl(250, 52%, 64%) !important;
  --h3-size: 1.45rem !important;
  --h3-weight: 600 !important;
  --h4-color: hsl(250, 50%, 60%) !important;
  --h4-size: 1.25rem !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(250, 40%, 52%) !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.125rem !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(250, 38%, 46%) !important;
  --h6-line-height: 1.6 !important;
  --h6-size: 1rem !important;
  --headerFont: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(230, 10%, 62%) !important;
  --highlight: hsl(230, 20%, 86%) !important;
  --hr-color: hsla(250, 50%, 75%, 0.1) !important;
  --icon-color: hsl(230, 10%, 19%) !important;
  --icon-color-active: hsl(250, 85%, 65%) !important;
  --icon-color-focused: hsl(230, 11%, 15%) !important;
  --icon-color-hover: hsl(230, 10%, 19%) !important;
  --indentation-guide-color: hsl(230, 20%, 86%) !important;
  --indentation-guide-color-active: hsl(230, 10%, 62%) !important;
  --inline-title-color: hsl(230, 14%, 8%) !important;
  --inline-title-size: 2rem !important;
  --input-date-separator: hsl(230, 10%, 62%) !important;
  --input-placeholder-color: hsl(230, 10%, 62%) !important;
  --interactive-accent: hsl(250, 80%, 75%) !important;
  --interactive-accent-hover: hsl(250, 80%, 70%) !important;
  --interactive-accent-hsl: 250, 80%, 75% !important;
  --interactive-hover: hsl(230, 30%, 92%) !important;
  --interactive-normal: hsl(230, 25%, 96%) !important;
  --light: hsl(230, 15%, 98%) !important;
  --lightgray: hsl(230, 25%, 96%) !important;
  --line-height-normal: 1.6 !important;
  --link-color: hsl(250, 85%, 65%) !important;
  --link-color-hover: hsl(250, 60%, 45%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(250, 85%, 65%) !important;
  --link-external-color-hover: hsl(250, 60%, 45%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsl(250, 85%, 65%) !important;
  --link-unresolved-decoration-color: hsla(250, 80%, 75%, 0.3) !important;
  --list-marker-color: hsl(230, 10%, 35%) !important;
  --list-marker-color-collapsed: hsl(250, 85%, 65%) !important;
  --list-marker-color-hover: hsl(230, 10%, 19%) !important;
  --menu-background: hsl(230, 25%, 96%) !important;
  --menu-border-color: hsl(230, 15%, 78%) !important;
  --menu-radius: 6px !important;
  --metadata-border-color: hsl(230, 20%, 86%) !important;
  --metadata-divider-color: hsl(230, 20%, 86%) !important;
  --metadata-input-background-active: hsla(230, 40%, 90%, 0.8) !important;
  --metadata-input-font: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(230, 11%, 15%) !important;
  --metadata-label-background-active: hsla(230, 40%, 90%, 0.8) !important;
  --metadata-label-font: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(230, 10%, 19%) !important;
  --metadata-label-text-color-hover: hsl(230, 10%, 19%) !important;
  --metadata-property-background-active: hsla(230, 40%, 90%, 0.8) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(230, 10%, 62%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(230, 15%, 78%) !important;
  --modal-background: hsl(230, 15%, 98%) !important;
  --modal-border-color: hsl(230, 20%, 86%) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: hsl(230, 10%, 62%) !important;
  --nav-collapse-icon-color-collapsed: hsl(230, 10%, 62%) !important;
  --nav-heading-color: hsl(230, 11%, 15%) !important;
  --nav-heading-color-collapsed: hsl(230, 10%, 62%) !important;
  --nav-heading-color-collapsed-hover: hsl(230, 10%, 19%) !important;
  --nav-heading-color-hover: hsl(230, 11%, 15%) !important;
  --nav-indentation-guide-color: hsl(230, 20%, 86%) !important;
  --nav-item-background-active: hsla(230, 40%, 90%, 0.8) !important;
  --nav-item-background-hover: hsla(230, 40%, 90%, 0.8) !important;
  --nav-item-background-selected: hsla(250, 80%, 75%, 0.15) !important;
  --nav-item-color: hsl(230, 10%, 19%) !important;
  --nav-item-color-active: hsl(230, 11%, 15%) !important;
  --nav-item-color-highlighted: hsl(250, 85%, 65%) !important;
  --nav-item-color-hover: hsl(230, 11%, 15%) !important;
  --nav-item-color-selected: hsl(230, 11%, 15%) !important;
  --nav-tag-color: hsl(230, 10%, 62%) !important;
  --nav-tag-color-active: hsl(230, 10%, 19%) !important;
  --nav-tag-color-hover: hsl(230, 10%, 19%) !important;
  --pdf-background: hsl(230, 15%, 98%) !important;
  --pdf-page-background: hsl(230, 15%, 98%) !important;
  --pdf-sidebar-background: hsl(230, 15%, 98%) !important;
  --pill-border-color: hsl(230, 20%, 86%) !important;
  --pill-border-color-hover: hsl(230, 15%, 78%) !important;
  --pill-color: hsl(230, 10%, 19%) !important;
  --pill-color-hover: hsl(230, 11%, 15%) !important;
  --pill-color-remove: hsl(230, 10%, 62%) !important;
  --pill-color-remove-hover: hsl(250, 85%, 65%) !important;
  --prompt-background: hsl(230, 15%, 98%) !important;
  --prompt-border-color: hsl(230, 30%, 92%) !important;
  --radius-l: 10px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, hsl(230, 15%, 98%) 65%, transparent) linear-gradient(hsl(230, 15%, 98%), color-mix(in srgb, hsl(230, 15%, 98%) 65%, transparent)) !important;
  --ribbon-background: hsl(230, 25%, 96%) !important;
  --ribbon-background-collapsed: hsl(230, 25%, 96%) !important;
  --ribbon-padding: 8px 0px !important;
  --ribbon-width: 40px !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-opacity: 0 !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08) !important;
  --search-clear-button-color: hsl(230, 10%, 19%) !important;
  --search-icon-color: hsl(230, 10%, 19%) !important;
  --search-result-background: hsl(230, 15%, 98%) !important;
  --secondary: hsl(250, 85%, 65%) !important;
  --setting-group-heading-color: hsl(230, 11%, 15%) !important;
  --setting-items-background: hsl(230, 25%, 96%) !important;
  --setting-items-border-color: hsl(230, 20%, 86%) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: hsl(230, 15%, 78%) !important;
  --slider-track-background: hsl(230, 20%, 86%) !important;
  --status-bar-background: hsl(230, 25%, 96%) !important;
  --status-bar-border-color: hsl(230, 20%, 86%) !important;
  --status-bar-border-width: 1px 0 0 0px !important;
  --status-bar-height: 24px !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: hsl(230, 10%, 19%) !important;
  --suggestion-background: hsl(230, 15%, 98%) !important;
  --sync-avatar-color-1: rgb(250, 55, 62) !important;
  --sync-avatar-color-2: rgb(248, 119, 33) !important;
  --sync-avatar-color-3: rgb(229, 199, 0) !important;
  --sync-avatar-color-4: rgb(14, 192, 67) !important;
  --sync-avatar-color-5: rgb(61 155 184) !important;
  --sync-avatar-color-6: rgb(86 128 219) !important;
  --sync-avatar-color-7: rgb(111, 85, 241) !important;
  --sync-avatar-color-8: rgb(212, 73, 147) !important;
  --tab-active-color: hsl(230, 15%, 98%) !important;
  --tab-active-shadow: inset 0 0 0 1px hsl(230, 20%, 86%) !important;
  --tab-background-active: hsl(230, 15%, 98%) !important;
  --tab-container-background: hsl(230, 25%, 96%) !important;
  --tab-divider-color: transparent !important;
  --tab-min-width: 92px !important;
  --tab-outline-color: hsl(230, 20%, 86%) !important;
  --tab-switcher-background: hsl(230, 25%, 96%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 25%, 96%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(250, 80%, 75%) !important;
  --tab-text-color: hsl(230, 10%, 62%) !important;
  --tab-text-color-active: hsl(230, 10%, 19%) !important;
  --tab-text-color-focused: hsl(230, 10%, 19%) !important;
  --tab-text-color-focused-active: hsl(230, 10%, 19%) !important;
  --tab-text-color-focused-active-current: hsl(230, 11%, 15%) !important;
  --tab-text-color-focused-highlighted: hsl(250, 85%, 65%) !important;
  --table-add-button-border-color: hsl(230, 20%, 86%) !important;
  --table-border-color: hsl(230, 20%, 86%) !important;
  --table-drag-handle-background-active: hsl(250, 80%, 75%) !important;
  --table-drag-handle-color: hsl(230, 10%, 62%) !important;
  --table-header-background: hsl(230, 25%, 96%) !important;
  --table-header-background-hover: hsl(230, 25%, 96%) !important;
  --table-header-border-color: hsl(230, 20%, 86%) !important;
  --table-header-color: hsl(230, 11%, 15%) !important;
  --table-selection: hsla(250, 80%, 75%, 0.1) !important;
  --table-selection-border-color: hsl(250, 80%, 75%) !important;
  --tag-background: hsla(250, 80%, 75%, 0.1) !important;
  --tag-background-hover: hsla(250, 80%, 75%, 0.2) !important;
  --tag-border-color: hsla(250, 80%, 75%, 0.15) !important;
  --tag-border-color-hover: hsla(250, 80%, 75%, 0.15) !important;
  --tag-color: hsl(250, 85%, 65%) !important;
  --tag-color-hover: hsl(250, 85%, 65%) !important;
  --tag-radius: 6px !important;
  --tertiary: hsl(250, 60%, 45%) !important;
  --text-accent: hsl(250, 85%, 65%) !important;
  --text-accent-hover: hsl(250, 60%, 45%) !important;
  --text-error: rgb(250, 55, 62) !important;
  --text-faint: hsl(230, 10%, 62%) !important;
  --text-highlight-bg: hsl(230, 20%, 86%) !important;
  --text-muted: hsl(230, 10%, 19%) !important;
  --text-normal: hsl(230, 11%, 15%) !important;
  --text-selection: hsl(230, 30%, 92%) !important;
  --text-success: rgb(14, 192, 67) !important;
  --text-warning: rgb(248, 119, 33) !important;
  --textHighlight: hsl(230, 20%, 86%) !important;
  --titleFont: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(230, 25%, 96%) !important;
  --titlebar-background-focused: hsl(230, 25%, 96%) !important;
  --titlebar-border-color: hsl(230, 20%, 86%) !important;
  --titlebar-text-color: hsl(230, 10%, 19%) !important;
  --titlebar-text-color-focused: hsl(230, 11%, 15%) !important;
  --vault-profile-color: hsl(230, 11%, 15%) !important;
  --vault-profile-color-hover: hsl(230, 11%, 15%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 247);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(249, 249, 251);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(249, 249, 251);
  border-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(212, 215, 226);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(157, 140, 242, 0.1);
  border-radius: 6px;
  color: rgb(115, 90, 242);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 247);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(212, 215, 226);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 247);
  border-left-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(249, 249, 251);
  color: rgb(34, 35, 42);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(27, 28, 34);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(27, 28, 34) none 0px;
  text-decoration-color: rgb(27, 28, 34);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(27, 28, 34);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(27, 28, 34) none 0px;
  text-decoration-color: rgb(27, 28, 34);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body del {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(157, 140, 242);
  border-color: rgb(157, 140, 242);
}

html[saved-theme="light"] body p {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(44, 45, 53) none 0px;
  text-decoration-color: rgb(44, 45, 53);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(115, 90, 242);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration-color: rgb(115, 90, 242);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(115, 90, 242);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration-color: rgb(115, 90, 242);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(115, 90, 242);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration: rgba(157, 140, 242, 0.3);
  text-decoration-color: rgba(157, 140, 242, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body dt {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ol > li {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ul > li {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(148, 152, 168);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body table {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 216.406px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(242, 243, 247);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(61, 155, 184);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(61, 155, 184);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(61, 155, 184);
  border-left-color: rgb(61, 155, 184);
  border-right-color: rgb(61, 155, 184);
  border-top-color: rgb(61, 155, 184);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body figcaption {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(159, 146, 221);
  border-left-color: rgb(159, 146, 221);
  border-right-color: rgb(159, 146, 221);
  border-top-color: rgb(159, 146, 221);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(157, 140, 242);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(148, 152, 168);
  border-left-color: rgb(148, 152, 168);
  border-right-color: rgb(148, 152, 168);
  border-top-color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(148, 152, 168);
  text-decoration: line-through 1px rgb(148, 152, 168);
  text-decoration-color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(248, 119, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  color: rgba(0, 0, 0, 0);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(86, 128, 219);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(248, 119, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(248, 119, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(250, 55, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(250, 55, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(61, 155, 184);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(250, 55, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(86, 128, 219);
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
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(86, 128, 219);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(111, 85, 241);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 61, 155, 184;
  background-color: rgba(61, 155, 184, 0.07);
  border-bottom-color: rgba(61, 155, 184, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(61, 155, 184, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(61, 155, 184, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(61, 155, 184, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 250, 55, 62;
  background-color: rgba(250, 55, 62, 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 250, 55, 62;
  background-color: rgba(250, 55, 62, 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 111, 85, 241;
  background-color: rgba(111, 85, 241, 0.07);
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 250, 55, 62;
  background-color: rgba(250, 55, 62, 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 86, 128, 219;
  background-color: rgba(86, 128, 219, 0.07);
  border-bottom-color: rgba(86, 128, 219, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(86, 128, 219, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(86, 128, 219, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(86, 128, 219, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 111, 85, 241;
  background-color: rgba(111, 85, 241, 0.07);
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 229, 199, 0;
  background-color: rgba(229, 199, 0, 0.07);
  border-bottom-color: rgba(229, 199, 0, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(229, 199, 0, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(229, 199, 0, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(229, 199, 0, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 138, 147, 158;
  background-color: rgba(138, 147, 158, 0.07);
  border-bottom-color: rgba(138, 147, 158, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 147, 158, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(138, 147, 158, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(138, 147, 158, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 14, 192, 67;
  background-color: rgba(14, 192, 67, 0.07);
  border-bottom-color: rgba(14, 192, 67, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(14, 192, 67, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(14, 192, 67, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(14, 192, 67, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 61, 155, 184;
  background-color: rgba(61, 155, 184, 0.07);
  border-bottom-color: rgba(61, 155, 184, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(61, 155, 184, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(61, 155, 184, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(61, 155, 184, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 86, 128, 219;
  background-color: rgba(86, 128, 219, 0.07);
  border-bottom-color: rgba(86, 128, 219, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(86, 128, 219, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(86, 128, 219, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(86, 128, 219, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 248, 119, 33;
  background-color: rgba(248, 119, 33, 0.07);
  border-bottom-color: rgba(248, 119, 33, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(248, 119, 33, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(248, 119, 33, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(248, 119, 33, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(228, 231, 241);
  border-bottom-color: rgb(228, 231, 241);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(228, 231, 241);
  border-right-color: rgb(228, 231, 241);
  border-top-color: rgb(228, 231, 241);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(219, 223, 240, 0.8);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(228, 231, 241);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(228, 231, 241);
  border-right-color: rgb(228, 231, 241);
  border-top-color: rgb(228, 231, 241);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 247);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(219, 223, 240, 0.8);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(219, 223, 240, 0.8);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(157, 140, 242, 0.1);
  border-bottom-color: rgba(157, 140, 242, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(157, 140, 242, 0.15);
  border-right-color: rgba(157, 140, 242, 0.15);
  border-top-color: rgba(157, 140, 242, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(115, 90, 242);
}

html[saved-theme="light"] body h1 {
  color: rgb(159, 146, 221);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(145, 131, 216);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(18, 18, 23);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(131, 115, 211);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(119, 102, 204);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(100, 84, 182);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(88, 73, 162);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(44, 45, 53);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(44, 45, 53);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(212, 215, 226);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(34, 35, 42);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 45, 53);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-left-width: 0px;
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  border-top-left-radius: 0px;
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(44, 45, 53);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 45, 53);
  cursor: pointer;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(44, 45, 53);
  stroke: rgb(44, 45, 53);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(148, 152, 168);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 243, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body sub {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body summary {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body sup {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(157, 140, 242, 0.1);
  border-bottom-color: rgba(157, 140, 242, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(157, 140, 242, 0.15);
  border-right-color: rgba(157, 140, 242, 0.15);
  border-top-color: rgba(157, 140, 242, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(115, 90, 242);
}`,
  },
};
