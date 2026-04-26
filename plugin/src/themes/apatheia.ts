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
  --shiki-active-tab-border-color: hsl(250, 23%, 78%) !important;
  --shiki-code-background: hsl(250, 23%, 10%) !important;
  --shiki-code-comment: hsl(250, 23%, 43%) !important;
  --shiki-code-normal: hsl(250, 23%, 78%) !important;
  --shiki-code-punctuation: hsl(250, 23%, 78%) !important;
  --shiki-gutter-border-color: hsl(249, 33%, 8%) !important;
  --shiki-gutter-text-color: hsl(250, 23%, 43%) !important;
  --shiki-gutter-text-color-highlight: hsl(250, 23%, 78%) !important;
  --shiki-highlight-neutral: hsl(250, 23%, 78%) !important;
  --shiki-terminal-dots-color: hsl(250, 23%, 43%) !important;
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

html body html {
  --ap-aqua: #a8e5e6;
  --ap-base0: hsl(250, 23%, 5%);
  --ap-base0-d: 13%;
  --ap-base0-h: 250;
  --ap-base0-l: 5%;
  --ap-base0-s: 23%;
  --ap-base1: hsl(249, 33%, 8%);
  --ap-base1-d: 10%;
  --ap-base1-h: 249;
  --ap-base1-l: 8%;
  --ap-base1-s: 33%;
  --ap-blue: #A8C5E6;
  --ap-code-aqua: #a8e5e6;
  --ap-code-blue: #A8C5E6;
  --ap-code-gray-1: #5b5c5f;
  --ap-code-gray-2: #45474c;
  --ap-code-green: #AAC5A0;
  --ap-code-orange: #D1A999;
  --ap-code-purple: #DFA7E7;
  --ap-code-red: #E97193;
  --ap-code-yellow: #ece0a8;
  --ap-color-dp0: hsl(249, 33%, 8%);
  --ap-color-dp1: hsl(250, 23%, 5%);
  --ap-color-dp10: hsl(250, 23%, 90%);
  --ap-color-dp11: hsl(250, 23%, 95%);
  --ap-color-dp2: hsl(250, 23%, 10%);
  --ap-color-dp3: hsl(250, 23%, 15%);
  --ap-color-dp4: hsl(250, 23%, 20%);
  --ap-color-dp5: hsl(250, 23%, 45%);
  --ap-color-dp6: hsl(250, 23%, 55%);
  --ap-color-dp7: hsl(250, 23%, 65%);
  --ap-color-dp8: hsl(250, 23%, 75%);
  --ap-color-dp9: hsl(250, 23%, 85%);
  --ap-color-italic: #E97193;
  --ap-color-quote: #E97193;
  --ap-color-strong: #E97193;
  --ap-color-tag-background: #2c2537;
  --ap-color-tag-text: #EEEEEE;
  --ap-container-padding: 8px;
  --ap-font-hashtag: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --ap-font-header: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --ap-font-interface: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --ap-font-monospace: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --ap-font-text: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --ap-font-title: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --ap-frame-left: 10px;
  --ap-green: #AAC5A0;
  --ap-h1: #E97193;
  --ap-h1-size: 2.5em;
  --ap-h2: #DFA7E7;
  --ap-h2-size: 1.9882em;
  --ap-h3: #A8C5E6;
  --ap-h3-size: 1.5811em;
  --ap-h4: #AAC5A0;
  --ap-h4-size: 1.2574em;
  --ap-h5: #D1A999;
  --ap-h5-size: 1em;
  --ap-h6: #ece0a8;
  --ap-h6-size: 0.7953em;
  --ap-orange: #D1A999;
  --ap-primary: hsl(15, 64%, 88%);
  --ap-primary-d: 80%;
  --ap-primary-h: 15;
  --ap-primary-l: 88%;
  --ap-primary-s: 64%;
  --ap-purple: #DFA7E7;
  --ap-radius-l: 10px;
  --ap-radius-m: 8px;
  --ap-radius-s: 4px;
  --ap-radius-xl: 16px;
  --ap-red: #E97193;
  --ap-secondary: hsl(157, 32%, 58%);
  --ap-secondary-d: 70%;
  --ap-secondary-h: 157;
  --ap-secondary-l: 58%;
  --ap-secondary-s: 32%;
  --ap-size-text: 1em;
  --ap-size-text-header: 1em;
  --ap-size-text-item: 1em;
  --ap-yellow: #ece0a8;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(233, 113, 147) none 0px;
  text-decoration-color: rgb(233, 113, 147);
}

html body .markdown-rendered p > em, html em {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration-color: rgb(240, 239, 245);
}

html body .markdown-rendered p > i, html i {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration-color: rgb(240, 239, 245);
}

html body .markdown-rendered p > strong, html strong {
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
    links: `html body a.external-link, html footer a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration-color: rgb(237, 188, 171);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration-color: rgb(237, 188, 171);
}

html body a.internal-link.broken {
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
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html body li.task-list-item[data-task="#"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(93, 84, 135);
}

html li.task-list-item[data-task="body"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="."] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="="] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(93, 84, 135);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(93, 84, 135);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="y"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(93, 84, 135);
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
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 10, 16);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 10, 16);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(123, 114, 167);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(240, 239, 245);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(240, 239, 245);
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

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(44, 37, 55);
  border-bottom-color: rgba(244, 215, 205, 0.15);
  border-left-color: rgba(244, 215, 205, 0.15);
  border-right-color: rgba(244, 215, 205, 0.15);
  border-top-color: rgba(244, 215, 205, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(238, 238, 238);
}

html body h1 {
  color: rgb(233, 113, 147);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

html body h1.article-title {
  color: rgb(233, 113, 147);
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
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html body .canvas-node {
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
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}`,
    properties: `html body .metadata {
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

html body div#quartz-root {
  background-color: rgb(11, 10, 16);
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
}`,
    stacked: `html body .stacked-page {
  background-color: rgb(16, 14, 27);
  border-color: rgb(240, 239, 245);
}

html body .stacked-page-header {
  background-color: rgb(16, 14, 27);
}

html body .stacked-page.active {
  border-color: rgb(240, 239, 245);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
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
