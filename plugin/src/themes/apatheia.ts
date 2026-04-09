import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "apatheia",
    modes: ["dark"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root {
  --accent-d: 80% !important;
  --accent-h: 15 !important;
  --accent-l: 88% !important;
  --accent-s: 64% !important;
  --ap-aqua: #a8e5e6 !important;
  --ap-base0: hsl(250, 23%, 5%) !important;
  --ap-base0-d: 13% !important;
  --ap-base0-h: 250 !important;
  --ap-base0-l: 5% !important;
  --ap-base0-s: 23% !important;
  --ap-base1: hsl(249, 33%, 8%) !important;
  --ap-base1-d: 10% !important;
  --ap-base1-h: 249 !important;
  --ap-base1-l: 8% !important;
  --ap-base1-s: 33% !important;
  --ap-blue: #A8C5E6 !important;
  --ap-code-aqua: #a8e5e6 !important;
  --ap-code-blue: #A8C5E6 !important;
  --ap-code-gray-1: #5b5c5f !important;
  --ap-code-gray-2: #45474c !important;
  --ap-code-green: #AAC5A0 !important;
  --ap-code-orange: #D1A999 !important;
  --ap-code-purple: #DFA7E7 !important;
  --ap-code-red: #E97193 !important;
  --ap-code-yellow: #ece0a8 !important;
  --ap-color-dp0: hsl(249, 33%, 8%) !important;
  --ap-color-dp1: hsl(250, 23%, 5%) !important;
  --ap-color-dp10: hsl(250, 23%, 90%) !important;
  --ap-color-dp11: hsl(250, 23%, 95%) !important;
  --ap-color-dp2: hsl(250, 23%, 10%) !important;
  --ap-color-dp3: hsl(250, 23%, 15%) !important;
  --ap-color-dp4: hsl(250, 23%, 20%) !important;
  --ap-color-dp5: hsl(250, 23%, 45%) !important;
  --ap-color-dp6: hsl(250, 23%, 55%) !important;
  --ap-color-dp7: hsl(250, 23%, 65%) !important;
  --ap-color-dp8: hsl(250, 23%, 75%) !important;
  --ap-color-dp9: hsl(250, 23%, 85%) !important;
  --ap-color-italic: #E97193 !important;
  --ap-color-quote: #E97193 !important;
  --ap-color-strong: #E97193 !important;
  --ap-color-tag-background: #2c2537 !important;
  --ap-color-tag-text: #EEEEEE !important;
  --ap-container-padding: 8px !important;
  --ap-font-hashtag: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --ap-font-header: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --ap-font-interface: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --ap-font-monospace: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --ap-font-text: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --ap-font-title: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --ap-frame-left: 10px !important;
  --ap-green: #AAC5A0 !important;
  --ap-h1: #E97193 !important;
  --ap-h1-size: 2.5em !important;
  --ap-h2: #DFA7E7 !important;
  --ap-h2-size: 1.9882em !important;
  --ap-h3: #A8C5E6 !important;
  --ap-h3-size: 1.5811em !important;
  --ap-h4: #AAC5A0 !important;
  --ap-h4-size: 1.2574em !important;
  --ap-h5: #D1A999 !important;
  --ap-h5-size: 1em !important;
  --ap-h6: #ece0a8 !important;
  --ap-h6-size: 0.7953em !important;
  --ap-orange: #D1A999 !important;
  --ap-primary: hsl(15, 64%, 88%) !important;
  --ap-primary-d: 80% !important;
  --ap-primary-h: 15 !important;
  --ap-primary-l: 88% !important;
  --ap-primary-s: 64% !important;
  --ap-purple: #DFA7E7 !important;
  --ap-radius-l: 10px !important;
  --ap-radius-m: 8px !important;
  --ap-radius-s: 4px !important;
  --ap-radius-xl: 16px !important;
  --ap-red: #E97193 !important;
  --ap-secondary: hsl(157, 32%, 58%) !important;
  --ap-secondary-d: 70% !important;
  --ap-secondary-h: 157 !important;
  --ap-secondary-l: 58% !important;
  --ap-secondary-s: 32% !important;
  --ap-size-text: 1em !important;
  --ap-size-text-header: 1em !important;
  --ap-size-text-item: 1em !important;
  --ap-yellow: #ece0a8 !important;
  --background-modifier-active-hover: hsla(15, 64%, 88%, 0.1) !important;
  --background-modifier-border: hsl(249, 33%, 8%) !important;
  --background-modifier-border-focus: hsl(249, 33%, 8%) !important;
  --background-modifier-border-hover: hsl(250, 23%, 20%) !important;
  --background-modifier-form-field: hsl(249, 33%, 8%) !important;
  --background-modifier-form-field-hover: hsl(249, 33%, 8%) !important;
  --background-modifier-hover: hsla(15, 64%, 88%, 0.5) !important;
  --background-primary: hsl(250, 23%, 5%) !important;
  --background-primary-alt: hsl(250, 23%, 10%) !important;
  --background-secondary: hsl(249, 33%, 8%) !important;
  --background-secondary-alt: hsl(249, 33%, 8%) !important;
  --base-d: 13% !important;
  --base-h: 250 !important;
  --base-l: 5% !important;
  --base-s: 23% !important;
  --bases-cards-background: hsl(250, 23%, 5%) !important;
  --bases-cards-cover-background: hsl(250, 23%, 10%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(249, 33%, 8%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(250, 23%, 20%) !important;
  --bases-embed-border-color: hsl(249, 33%, 8%) !important;
  --bases-group-heading-property-color: hsl(250, 23%, 78%) !important;
  --bases-table-border-color: hsl(249, 33%, 8%) !important;
  --bases-table-cell-background-active: hsl(250, 23%, 5%) !important;
  --bases-table-cell-background-disabled: hsl(250, 23%, 10%) !important;
  --bases-table-cell-background-selected: hsla(15, 64%, 88%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(249, 33%, 8%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(15, 64%, 88%) !important;
  --bases-table-group-background: hsl(250, 23%, 10%) !important;
  --bases-table-header-background: hsl(250, 23%, 5%) !important;
  --bases-table-header-background-hover: hsla(15, 64%, 88%, 0.5) !important;
  --bases-table-header-color: hsl(250, 23%, 78%) !important;
  --bases-table-summary-background: hsl(250, 23%, 5%) !important;
  --bases-table-summary-background-hover: hsla(15, 64%, 88%, 0.5) !important;
  --blockquote-border-color: hsl(15, 64%, 88%) !important;
  --blue: #2e80f2 !important;
  --blur-background: color-mix(in srgb, hsl(249, 33%, 8%) 65%, transparent) linear-gradient(hsl(249, 33%, 8%), color-mix(in srgb, hsl(249, 33%, 8%) 65%, transparent)) !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(250, 23%, 5%) !important;
  --canvas-card-label-color: hsl(250, 23%, 43%) !important;
  --canvas-dot-pattern: hsl(249, 33%, 8%) !important;
  --caret-color: hsl(250, 23%, 95%) !important;
  --checkbox-border-color: hsl(250, 23%, 43%) !important;
  --checkbox-border-color-hover: hsl(250, 23%, 78%) !important;
  --checkbox-color: hsl(15, 64%, 88%) !important;
  --checkbox-color-hover: hsl(15, 64%, 84.2%) !important;
  --checkbox-marker-color: hsl(250, 23%, 5%) !important;
  --checkbox-radius: 30% !important;
  --checklist-done-color: hsl(250, 23%, 78%) !important;
  --code-background: hsl(250, 23%, 10%) !important;
  --code-border-color: hsl(249, 33%, 8%) !important;
  --code-bracket-background: hsla(15, 64%, 88%, 0.5) !important;
  --code-comment: hsl(250, 23%, 43%) !important;
  --code-normal: hsl(250, 23%, 95%) !important;
  --code-punctuation: hsl(250, 23%, 78%) !important;
  --codeFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(250, 23%, 43%) !important;
  --collapse-icon-color-collapsed: hsl(15, 64%, 80%) !important;
  --color-accent: hsl(15, 64%, 88%) !important;
  --color-accent-1: hsl(15, 64%, 84.2%) !important;
  --color-accent-2: hsl(15, 64%, 91.8%) !important;
  --color-accent-hsl: 15, 64%, 88% !important;
  --color-base-00: hsl(250, 23%, 5%) !important;
  --color-base-10: hsl(250, 23%, 10%) !important;
  --color-base-100: hsl(250, 23%, 95%) !important;
  --color-base-20: hsl(249, 33%, 8%) !important;
  --color-base-25: hsl(249, 33%, 8%) !important;
  --color-base-30: hsl(249, 33%, 8%) !important;
  --color-base-35: hsl(250, 23%, 20%) !important;
  --color-base-40: hsl(249, 33%, 8%) !important;
  --color-base-50: hsl(250, 23%, 55%) !important;
  --color-base-60: hsl(250, 23%, 65%) !important;
  --color-base-70: hsl(250, 23%, 90%) !important;
  --dark: hsl(250, 23%, 95%) !important;
  --darkgray: hsl(250, 23%, 95%) !important;
  --divider-color: hsl(249, 33%, 8%) !important;
  --divider-color-hover: hsl(15, 64%, 88%) !important;
  --dropdown-background: hsl(249, 33%, 8%) !important;
  --dropdown-background-hover: hsl(250, 23%, 20%) !important;
  --em-color: #E97193 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(249, 33%, 8%), inset 0 0 0 1px hsl(249, 33%, 8%) !important;
  --embed-border-start: 2px solid hsl(15, 64%, 88%) !important;
  --file-header-background: hsl(250, 23%, 5%) !important;
  --file-header-background-focused: hsl(250, 23%, 5%) !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(249, 33%, 8%) !important;
  --flair-color: hsl(250, 23%, 95%) !important;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --font-interface: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: hsl(249, 33%, 8%) !important;
  --footnote-id-color: hsl(250, 23%, 78%) !important;
  --footnote-id-color-no-occurrences: hsl(250, 23%, 43%) !important;
  --footnote-input-background-active: hsla(15, 64%, 88%, 0.5) !important;
  --graph-line: hsl(250, 23%, 20%) !important;
  --graph-node: hsl(250, 23%, 78%) !important;
  --graph-node-focused: hsl(15, 64%, 80%) !important;
  --graph-node-tag: hsl(157, 32%, 58%) !important;
  --graph-node-unresolved: hsl(250, 23%, 43%) !important;
  --graph-text: hsl(250, 23%, 95%) !important;
  --gray: hsl(250, 23%, 78%) !important;
  --green: #3eb4bf !important;
  --h1-color: #E97193 !important;
  --h2-color: #DFA7E7 !important;
  --h3-color: #A8C5E6 !important;
  --h4-color: #AAC5A0 !important;
  --h5-color: #D1A999 !important;
  --h6-color: #ece0a8 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(250, 23%, 43%) !important;
  --highlight: hsla(15, 64%, 88%, 0.5) !important;
  --hr-color: hsl(249, 33%, 8%) !important;
  --icon-color: hsl(250, 23%, 78%) !important;
  --icon-color-active: hsl(15, 64%, 80%) !important;
  --icon-color-focused: hsl(15, 64%, 88%) !important;
  --icon-color-hover: hsl(250, 23%, 78%) !important;
  --inline-title-color: #E97193 !important;
  --input-date-separator: hsl(250, 23%, 43%) !important;
  --input-placeholder-color: hsl(250, 23%, 43%) !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: hsl(15, 64%, 88%) !important;
  --interactive-accent-hover: hsl(15, 64%, 84.2%) !important;
  --interactive-accent-hsl: 15, 64%, 88% !important;
  --interactive-hover: hsl(250, 23%, 20%) !important;
  --interactive-normal: hsl(249, 33%, 8%) !important;
  --light: hsl(250, 23%, 5%) !important;
  --lightgray: hsl(249, 33%, 8%) !important;
  --link-color: hsl(15, 64%, 80%) !important;
  --link-color-hover: hsl(15, 64%, 92%) !important;
  --link-external-color: hsl(15, 64%, 80%) !important;
  --link-external-color-hover: hsl(15, 64%, 92%) !important;
  --link-unresolved-color: hsl(15, 64%, 80%) !important;
  --link-unresolved-decoration-color: hsla(15, 64%, 88%, 0.3) !important;
  --list-marker-color: hsl(250, 23%, 43%) !important;
  --list-marker-color-collapsed: hsl(15, 64%, 80%) !important;
  --list-marker-color-hover: hsl(250, 23%, 78%) !important;
  --menu-background: hsl(249, 33%, 8%) !important;
  --menu-border-color: hsl(250, 23%, 20%) !important;
  --metadata-border-color: hsl(249, 33%, 8%) !important;
  --metadata-divider-color: hsl(249, 33%, 8%) !important;
  --metadata-input-background-active: hsla(15, 64%, 88%, 0.5) !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(250, 23%, 95%) !important;
  --metadata-label-background-active: hsla(15, 64%, 88%, 0.5) !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(250, 23%, 78%) !important;
  --metadata-label-text-color-hover: hsl(250, 23%, 78%) !important;
  --metadata-property-background-active: hsla(15, 64%, 88%, 0.5) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(249, 33%, 8%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(250, 23%, 20%) !important;
  --modal-background: hsl(250, 23%, 5%) !important;
  --modal-border-color: hsl(249, 33%, 8%) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: hsl(250, 23%, 43%) !important;
  --nav-collapse-icon-color-collapsed: hsl(250, 23%, 43%) !important;
  --nav-heading-color: hsl(250, 23%, 95%) !important;
  --nav-heading-color-collapsed: hsl(250, 23%, 43%) !important;
  --nav-heading-color-collapsed-hover: hsl(250, 23%, 78%) !important;
  --nav-heading-color-hover: hsl(250, 23%, 95%) !important;
  --nav-item-background-active: hsla(15, 64%, 88%, 0.5) !important;
  --nav-item-background-hover: hsla(15, 64%, 88%, 0.5) !important;
  --nav-item-background-selected: hsla(15, 64%, 88%, 0.15) !important;
  --nav-item-color: hsl(250, 23%, 78%) !important;
  --nav-item-color-active: hsl(250, 23%, 95%) !important;
  --nav-item-color-highlighted: hsl(15, 64%, 80%) !important;
  --nav-item-color-hover: hsl(250, 23%, 95%) !important;
  --nav-item-color-selected: hsl(250, 23%, 95%) !important;
  --nav-tag-color: hsl(250, 23%, 43%) !important;
  --nav-tag-color-active: hsl(250, 23%, 78%) !important;
  --nav-tag-color-hover: hsl(250, 23%, 78%) !important;
  --orange: #e87d3e !important;
  --pdf-background: hsl(250, 23%, 5%) !important;
  --pdf-page-background: hsl(250, 23%, 5%) !important;
  --pdf-shadow: 0 0 0 1px hsl(249, 33%, 8%) !important;
  --pdf-sidebar-background: hsl(250, 23%, 5%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(249, 33%, 8%) !important;
  --pill-border-color: hsl(249, 33%, 8%) !important;
  --pill-border-color-hover: hsl(250, 23%, 20%) !important;
  --pill-color: hsl(250, 23%, 78%) !important;
  --pill-color-hover: hsl(250, 23%, 95%) !important;
  --pill-color-remove: hsl(250, 23%, 43%) !important;
  --pill-color-remove-hover: hsl(15, 64%, 80%) !important;
  --pink: #ff82b2 !important;
  --prompt-background: hsl(250, 23%, 5%) !important;
  --prompt-border-color: hsl(249, 33%, 8%) !important;
  --purple: #9e86c8 !important;
  --quote-color: #E97193 !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, hsl(249, 33%, 8%) 65%, transparent) linear-gradient(hsl(249, 33%, 8%), color-mix(in srgb, hsl(249, 33%, 8%) 65%, transparent)) !important;
  --red: #e83e3e !important;
  --ribbon-background: hsl(249, 33%, 8%) !important;
  --ribbon-background-collapsed: hsl(250, 23%, 5%) !important;
  --scrollbar-active-thumb-bg: hsla(15, 64%, 88%, 0.4) !important;
  --scrollbar-bg: hsla(250, 23%, 20%, 1) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: hsla(250, 23%, 20%, 1) !important;
  --search-clear-button-color: hsl(250, 23%, 78%) !important;
  --search-icon-color: hsl(250, 23%, 78%) !important;
  --search-result-background: hsl(250, 23%, 5%) !important;
  --secondary: hsl(15, 64%, 80%) !important;
  --setting-group-heading-color: hsl(250, 23%, 95%) !important;
  --setting-items-background: hsl(250, 23%, 10%) !important;
  --setting-items-border-color: hsl(249, 33%, 8%) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: hsl(250, 23%, 20%) !important;
  --slider-track-background: hsl(249, 33%, 8%) !important;
  --status-bar-background: hsl(249, 33%, 8%) !important;
  --status-bar-border-color: hsl(249, 33%, 8%) !important;
  --status-bar-text-color: hsl(250, 23%, 78%) !important;
  --strong-color: #E97193 !important;
  --suggestion-background: hsl(250, 23%, 5%) !important;
  --tab-background-active: hsl(250, 23%, 5%) !important;
  --tab-container-background: hsl(249, 33%, 8%) !important;
  --tab-divider-color: hsl(250, 23%, 10%) !important;
  --tab-outline-color: hsl(249, 33%, 8%) !important;
  --tab-switcher-background: hsl(249, 33%, 8%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(249, 33%, 8%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(15, 64%, 88%) !important;
  --tab-text-color: hsl(250, 23%, 90%) !important;
  --tab-text-color-active: hsl(250, 23%, 78%) !important;
  --tab-text-color-focused: hsl(250, 23%, 78%) !important;
  --tab-text-color-focused-active: hsl(250, 23%, 78%) !important;
  --tab-text-color-focused-active-current: hsl(250, 23%, 95%) !important;
  --tab-text-color-focused-highlighted: hsl(15, 64%, 80%) !important;
  --table-add-button-border-color: hsl(249, 33%, 8%) !important;
  --table-border-color: hsl(249, 33%, 8%) !important;
  --table-drag-handle-background-active: hsl(15, 64%, 88%) !important;
  --table-drag-handle-color: hsl(250, 23%, 43%) !important;
  --table-header-border-color: hsl(249, 33%, 8%) !important;
  --table-header-color: hsl(250, 23%, 95%) !important;
  --table-selection: hsla(15, 64%, 88%, 0.1) !important;
  --table-selection-border-color: hsl(15, 64%, 88%) !important;
  --tag-background: #2c2537 !important;
  --tag-background-color-d: #b3e1bd !important;
  --tag-background-color-l: #bde1d3 !important;
  --tag-background-hover: hsla(15, 64%, 88%, 0.2) !important;
  --tag-border-color: hsla(15, 64%, 88%, 0.15) !important;
  --tag-border-color-hover: hsla(15, 64%, 88%, 0.15) !important;
  --tag-color: #EEEEEE !important;
  --tag-color-hover: hsl(15, 64%, 80%) !important;
  --tag-font-color-d: #ffffff !important;
  --tag-font-color-l: #1d694b !important;
  --tertiary: hsl(15, 64%, 92%) !important;
  --text-accent: hsl(15, 64%, 80%) !important;
  --text-accent-hover: hsl(15, 64%, 92%) !important;
  --text-faint: hsl(250, 23%, 43%) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(250, 23%, 78%) !important;
  --text-normal: hsl(250, 23%, 95%) !important;
  --text-selection: hsla(15, 64%, 88%, 0.25) !important;
  --textHighlight: hsla(15, 64%, 88%, 0.5) !important;
  --theme-filter: invert(98%) hue-rotate(180deg) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(249, 33%, 8%) !important;
  --titlebar-background-focused: hsl(249, 33%, 8%) !important;
  --titlebar-border-color: hsl(249, 33%, 8%) !important;
  --titlebar-text-color: hsl(250, 23%, 78%) !important;
  --titlebar-text-color-focused: hsl(250, 23%, 95%) !important;
  --vault-profile-color: hsl(250, 23%, 95%) !important;
  --vault-profile-color-hover: hsl(250, 23%, 95%) !important;
  --yellow: #e5b567 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

html body .bases-table thead th {
  border-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

html body .canvas-node {
  border-color: rgb(240, 239, 245);
}

html body .canvas-node-content {
  color: rgb(240, 239, 245);
}

html body .canvas-node-file {
  color: rgb(240, 239, 245);
}

html body .canvas-node-group {
  border-color: rgb(240, 239, 245);
}

html body .canvas-sidebar {
  background-color: rgb(16, 14, 27);
  border-color: rgb(240, 239, 245);
}

html body .note-properties {
  border-color: rgb(16, 14, 27);
}

html body .note-properties-key {
  color: rgb(190, 186, 212);
}

html body .note-properties-row {
  border-color: rgb(190, 186, 212);
}

html body .note-properties-tags {
  background-color: rgb(44, 37, 55);
  color: rgb(238, 238, 238);
}

html body .note-properties-value {
  color: rgb(190, 186, 212);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(16, 14, 27);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

html body div#quartz-root {
  background-color: rgb(11, 10, 16);
  color: rgb(240, 239, 245);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(233, 113, 147) none 0px;
  text-decoration-color: rgb(233, 113, 147);
}

html body .page article p > em, html em {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration-color: rgb(240, 239, 245);
}

html body .page article p > i, html i {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration-color: rgb(240, 239, 245);
}

html body .page article p > strong, html strong {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(233, 113, 147) none 0px;
  text-decoration-color: rgb(233, 113, 147);
}

html body .text-highlight {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration-color: rgb(240, 239, 245);
}

html body del {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration-color: rgb(240, 239, 245);
}

html body h1.article-title {
  color: rgb(240, 239, 245);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(93, 84, 135);
  border-radius: 30%;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(244, 215, 205);
  border-color: rgb(244, 215, 205);
}

html body p {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 186, 212) none 0px;
  text-decoration-color: rgb(190, 186, 212);
}`,
    links: `html body a.external, html footer a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration-color: rgb(237, 188, 171);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration-color: rgb(237, 188, 171);
}

html body a.internal.broken {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration: underline rgba(244, 215, 205, 0.3);
  text-decoration-color: rgba(244, 215, 205, 0.3);
}`,
    lists: `html body dd {
  color: rgb(240, 239, 245);
}

html body dt {
  color: rgb(240, 239, 245);
}

html body ol > li {
  color: rgb(240, 239, 245);
}

html body ol.overflow {
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body ul > li {
  color: rgb(240, 239, 245);
}

html body ul.overflow {
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(93, 84, 135);
}

html body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body table {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

html body td {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

html body th {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}`,
    code: `html body code {
  border-bottom-color: rgb(233, 113, 147);
  border-left-color: rgb(233, 113, 147);
  border-right-color: rgb(233, 113, 147);
  border-top-color: rgb(233, 113, 147);
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

html body pre > code > [data-line] {
  border-left-color: rgb(236, 224, 168);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(236, 224, 168);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(236, 224, 168);
  border-left-color: rgb(236, 224, 168);
  border-right-color: rgb(236, 224, 168);
  border-top-color: rgb(236, 224, 168);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
}

html body pre:has(> code) {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
}`,
    images: `html body audio {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body figcaption {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body img {
  border-bottom-color: rgb(233, 113, 147);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(233, 113, 147);
  border-radius: 10px;
  border-right-color: rgb(233, 113, 147);
  border-top-color: rgb(233, 113, 147);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}

html body video {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
}

html body .footnotes {
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
}

html body .transclude {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(244, 215, 205);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body .transclude-inner {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(93, 84, 135);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(93, 84, 135);
  border-right-color: rgb(93, 84, 135);
  border-top-color: rgb(93, 84, 135);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(16, 14, 27);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(11, 10, 16);
  border-bottom-color: rgb(16, 14, 27);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration-color: rgb(240, 239, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 239, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(240, 239, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(244, 215, 205, 0.5);
  color: rgb(240, 239, 245);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(16, 14, 27);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(244, 215, 205, 0.5);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(244, 215, 205, 0.5);
  color: rgb(240, 239, 245);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(44, 37, 55);
  border-bottom-color: rgba(244, 215, 205, 0.15);
  border-left-color: rgba(244, 215, 205, 0.15);
  border-right-color: rgba(244, 215, 205, 0.15);
  border-top-color: rgba(244, 215, 205, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(238, 238, 238);
}

html body h1 {
  color: rgb(233, 113, 147);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

html body h2 {
  color: rgb(223, 167, 231);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(168, 197, 230);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

html body h4 {
  color: rgb(170, 197, 160);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

html body h5 {
  color: rgb(209, 169, 153);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

html body h6 {
  color: rgb(236, 224, 168);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

html body hr {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

html body ::-webkit-scrollbar-track {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(240, 239, 245);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
}`,
    footer: `html body footer {
  background-color: rgb(16, 14, 27);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(190, 186, 212);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  background-color: rgb(11, 10, 16);
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(240, 239, 245);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 186, 212);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  background-color: rgb(11, 10, 16);
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body li.section-li > .section .meta {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 186, 212);
}

html body ul.section-ul {
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
}

html body .darkmode svg {
  color: rgb(190, 186, 212);
  stroke: rgb(190, 186, 212);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
}

html body .breadcrumb-element p {
  color: rgb(93, 84, 135);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
}

html body .metadata {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(16, 14, 27);
}

html body .page-header h2.page-title {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(240, 239, 245);
}

html body details {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body input[type=text] {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

html body sub {
  color: rgb(240, 239, 245);
}

html body summary {
  color: rgb(240, 239, 245);
}

html body sup {
  color: rgb(240, 239, 245);
}

html body ul.tags > li {
  background-color: rgb(44, 37, 55);
  border-bottom-color: rgba(244, 215, 205, 0.15);
  border-left-color: rgba(244, 215, 205, 0.15);
  border-right-color: rgba(244, 215, 205, 0.15);
  border-top-color: rgba(244, 215, 205, 0.15);
  color: rgb(238, 238, 238);
}`,
  },
  light: {},
};
