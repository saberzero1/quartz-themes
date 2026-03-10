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
  --ap-base0: rgb(11, 10, 16) !important;
  --ap-base0-d: 13% !important;
  --ap-base0-h: 250 !important;
  --ap-base0-l: 5% !important;
  --ap-base0-s: 23% !important;
  --ap-base1: rgb(16, 14, 27) !important;
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
  --ap-color-dp0: rgb(16, 14, 27) !important;
  --ap-color-dp1: rgb(11, 10, 16) !important;
  --ap-color-dp10: rgb(226, 224, 235) !important;
  --ap-color-dp11: rgb(240, 239, 245) !important;
  --ap-color-dp2: rgb(22, 20, 31) !important;
  --ap-color-dp3: rgb(32, 29, 47) !important;
  --ap-color-dp4: rgb(43, 39, 63) !important;
  --ap-color-dp5: rgb(97, 88, 141) !important;
  --ap-color-dp6: rgb(123, 114, 167) !important;
  --ap-color-dp7: rgb(152, 145, 186) !important;
  --ap-color-dp8: rgb(181, 177, 206) !important;
  --ap-color-dp9: rgb(211, 208, 226) !important;
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
  --ap-primary: rgb(244, 215, 205) !important;
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
  --ap-secondary: rgb(114, 182, 156) !important;
  --ap-secondary-d: 70% !important;
  --ap-secondary-h: 157 !important;
  --ap-secondary-l: 58% !important;
  --ap-secondary-s: 32% !important;
  --ap-size-text: 1em !important;
  --ap-size-text-header: 1em !important;
  --ap-size-text-item: 1em !important;
  --ap-yellow: #ece0a8 !important;
  --background-modifier-active-hover: rgba(244, 215, 205, 0.1) !important;
  --background-modifier-border: rgb(16, 14, 27) !important;
  --background-modifier-border-focus: rgb(16, 14, 27) !important;
  --background-modifier-border-hover: rgb(43, 39, 63) !important;
  --background-modifier-form-field: rgb(16, 14, 27) !important;
  --background-modifier-form-field-hover: rgb(16, 14, 27) !important;
  --background-modifier-hover: rgba(244, 215, 205, 0.5) !important;
  --background-primary: rgb(11, 10, 16) !important;
  --background-primary-alt: rgb(22, 20, 31) !important;
  --background-secondary: rgb(16, 14, 27) !important;
  --background-secondary-alt: rgb(16, 14, 27) !important;
  --base-d: 13% !important;
  --base-h: 250 !important;
  --base-l: 5% !important;
  --base-s: 23% !important;
  --bases-cards-background: rgb(11, 10, 16) !important;
  --bases-cards-cover-background: rgb(22, 20, 31) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(16, 14, 27) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(43, 39, 63) !important;
  --bases-embed-border-color: rgb(16, 14, 27) !important;
  --bases-group-heading-property-color: rgb(190, 186, 212) !important;
  --bases-table-border-color: rgb(16, 14, 27) !important;
  --bases-table-cell-background-active: rgb(11, 10, 16) !important;
  --bases-table-cell-background-disabled: rgb(22, 20, 31) !important;
  --bases-table-cell-background-selected: rgba(244, 215, 205, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(16, 14, 27) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(244, 215, 205) !important;
  --bases-table-group-background: rgb(22, 20, 31) !important;
  --bases-table-header-background: rgb(11, 10, 16) !important;
  --bases-table-header-background-hover: rgba(244, 215, 205, 0.5) !important;
  --bases-table-header-color: rgb(190, 186, 212) !important;
  --bases-table-summary-background: rgb(11, 10, 16) !important;
  --bases-table-summary-background-hover: rgba(244, 215, 205, 0.5) !important;
  --blockquote-border-color: rgb(244, 215, 205) !important;
  --blue: #2e80f2 !important;
  --blur-background: color-mix(in srgb, rgb(16, 14, 27) 65%, transparent) linear-gradient(rgb(16, 14, 27), color-mix(in srgb, rgb(16, 14, 27) 65%, transparent)) !important;
  --bodyFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(11, 10, 16) !important;
  --canvas-card-label-color: rgb(93, 84, 135) !important;
  --canvas-dot-pattern: rgb(16, 14, 27) !important;
  --caret-color: rgb(240, 239, 245) !important;
  --checkbox-border-color: rgb(93, 84, 135) !important;
  --checkbox-border-color-hover: rgb(190, 186, 212) !important;
  --checkbox-color: rgb(244, 215, 205) !important;
  --checkbox-color-hover: rgb(240, 201, 188) !important;
  --checkbox-marker-color: rgb(11, 10, 16) !important;
  --checkbox-radius: 30% !important;
  --checklist-done-color: rgb(190, 186, 212) !important;
  --code-background: rgb(22, 20, 31) !important;
  --code-border-color: rgb(16, 14, 27) !important;
  --code-bracket-background: rgba(244, 215, 205, 0.5) !important;
  --code-comment: rgb(93, 84, 135) !important;
  --code-normal: rgb(240, 239, 245) !important;
  --code-punctuation: rgb(190, 186, 212) !important;
  --codeFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(93, 84, 135) !important;
  --collapse-icon-color-collapsed: rgb(237, 188, 171) !important;
  --color-accent: rgb(244, 215, 205) !important;
  --color-accent-1: rgb(240, 201, 188) !important;
  --color-accent-2: rgb(248, 228, 222) !important;
  --color-accent-hsl: 15, 64%, 88% !important;
  --color-base-00: rgb(11, 10, 16) !important;
  --color-base-10: rgb(22, 20, 31) !important;
  --color-base-100: rgb(240, 239, 245) !important;
  --color-base-20: rgb(16, 14, 27) !important;
  --color-base-25: rgb(16, 14, 27) !important;
  --color-base-30: rgb(16, 14, 27) !important;
  --color-base-35: rgb(43, 39, 63) !important;
  --color-base-40: rgb(16, 14, 27) !important;
  --color-base-50: rgb(123, 114, 167) !important;
  --color-base-60: rgb(152, 145, 186) !important;
  --color-base-70: rgb(226, 224, 235) !important;
  --dark: rgb(240, 239, 245) !important;
  --darkgray: rgb(240, 239, 245) !important;
  --divider-color: rgb(16, 14, 27) !important;
  --divider-color-hover: rgb(244, 215, 205) !important;
  --dropdown-background: rgb(16, 14, 27) !important;
  --dropdown-background-hover: rgb(43, 39, 63) !important;
  --em-color: #E97193 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(16, 14, 27), inset 0 0 0 1px rgb(16, 14, 27) !important;
  --embed-border-start: 2px solid rgb(244, 215, 205) !important;
  --file-header-background: rgb(11, 10, 16) !important;
  --file-header-background-focused: rgb(11, 10, 16) !important;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(16, 14, 27) !important;
  --flair-color: rgb(240, 239, 245) !important;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, 'Arial' !important;
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: rgb(16, 14, 27) !important;
  --footnote-id-color: rgb(190, 186, 212) !important;
  --footnote-id-color-no-occurrences: rgb(93, 84, 135) !important;
  --footnote-input-background-active: rgba(244, 215, 205, 0.5) !important;
  --graph-line: rgb(43, 39, 63) !important;
  --graph-node: rgb(190, 186, 212) !important;
  --graph-node-focused: rgb(237, 188, 171) !important;
  --graph-node-tag: rgb(114, 182, 156) !important;
  --graph-node-unresolved: rgb(93, 84, 135) !important;
  --graph-text: rgb(240, 239, 245) !important;
  --gray: rgb(190, 186, 212) !important;
  --green: #3eb4bf !important;
  --h1-color: #E97193 !important;
  --h2-color: #DFA7E7 !important;
  --h3-color: #A8C5E6 !important;
  --h4-color: #AAC5A0 !important;
  --h5-color: #D1A999 !important;
  --h6-color: #ece0a8 !important;
  --headerFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(93, 84, 135) !important;
  --highlight: rgba(244, 215, 205, 0.5) !important;
  --hr-color: rgb(16, 14, 27) !important;
  --icon-color: rgb(190, 186, 212) !important;
  --icon-color-active: rgb(237, 188, 171) !important;
  --icon-color-focused: rgb(244, 215, 205) !important;
  --icon-color-hover: rgb(190, 186, 212) !important;
  --inline-title-color: #E97193 !important;
  --input-date-separator: rgb(93, 84, 135) !important;
  --input-placeholder-color: rgb(93, 84, 135) !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(244, 215, 205) !important;
  --interactive-accent-hover: rgb(240, 201, 188) !important;
  --interactive-accent-hsl: 15, 64%, 88% !important;
  --interactive-hover: rgb(43, 39, 63) !important;
  --interactive-normal: rgb(16, 14, 27) !important;
  --light: rgb(11, 10, 16) !important;
  --lightgray: rgb(16, 14, 27) !important;
  --link-color: rgb(237, 188, 171) !important;
  --link-color-hover: rgb(248, 228, 222) !important;
  --link-external-color: rgb(237, 188, 171) !important;
  --link-external-color-hover: rgb(248, 228, 222) !important;
  --link-unresolved-color: rgb(237, 188, 171) !important;
  --link-unresolved-decoration-color: rgba(244, 215, 205, 0.3) !important;
  --list-marker-color: rgb(93, 84, 135) !important;
  --list-marker-color-collapsed: rgb(237, 188, 171) !important;
  --list-marker-color-hover: rgb(190, 186, 212) !important;
  --menu-background: rgb(16, 14, 27) !important;
  --menu-border-color: rgb(43, 39, 63) !important;
  --metadata-border-color: rgb(16, 14, 27) !important;
  --metadata-divider-color: rgb(16, 14, 27) !important;
  --metadata-input-background-active: rgba(244, 215, 205, 0.5) !important;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(240, 239, 245) !important;
  --metadata-label-background-active: rgba(244, 215, 205, 0.5) !important;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(190, 186, 212) !important;
  --metadata-label-text-color-hover: rgb(190, 186, 212) !important;
  --metadata-property-background-active: rgba(244, 215, 205, 0.5) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(16, 14, 27) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(43, 39, 63) !important;
  --modal-background: rgb(11, 10, 16) !important;
  --modal-border-color: rgb(16, 14, 27) !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(93, 84, 135) !important;
  --nav-collapse-icon-color-collapsed: rgb(93, 84, 135) !important;
  --nav-heading-color: rgb(240, 239, 245) !important;
  --nav-heading-color-collapsed: rgb(93, 84, 135) !important;
  --nav-heading-color-collapsed-hover: rgb(190, 186, 212) !important;
  --nav-heading-color-hover: rgb(240, 239, 245) !important;
  --nav-item-background-active: rgba(244, 215, 205, 0.5) !important;
  --nav-item-background-hover: rgba(244, 215, 205, 0.5) !important;
  --nav-item-background-selected: rgba(244, 215, 205, 0.15) !important;
  --nav-item-color: rgb(190, 186, 212) !important;
  --nav-item-color-active: rgb(240, 239, 245) !important;
  --nav-item-color-highlighted: rgb(237, 188, 171) !important;
  --nav-item-color-hover: rgb(240, 239, 245) !important;
  --nav-item-color-selected: rgb(240, 239, 245) !important;
  --nav-tag-color: rgb(93, 84, 135) !important;
  --nav-tag-color-active: rgb(190, 186, 212) !important;
  --nav-tag-color-hover: rgb(190, 186, 212) !important;
  --orange: #e87d3e !important;
  --pdf-background: rgb(11, 10, 16) !important;
  --pdf-page-background: rgb(11, 10, 16) !important;
  --pdf-shadow: 0 0 0 1px rgb(16, 14, 27) !important;
  --pdf-sidebar-background: rgb(11, 10, 16) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(16, 14, 27) !important;
  --pill-border-color: rgb(16, 14, 27) !important;
  --pill-border-color-hover: rgb(43, 39, 63) !important;
  --pill-color: rgb(190, 186, 212) !important;
  --pill-color-hover: rgb(240, 239, 245) !important;
  --pill-color-remove: rgb(93, 84, 135) !important;
  --pill-color-remove-hover: rgb(237, 188, 171) !important;
  --pink: #ff82b2 !important;
  --prompt-background: rgb(11, 10, 16) !important;
  --prompt-border-color: rgb(16, 14, 27) !important;
  --purple: #9e86c8 !important;
  --quote-color: #E97193 !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, rgb(16, 14, 27) 65%, transparent) linear-gradient(rgb(16, 14, 27), color-mix(in srgb, rgb(16, 14, 27) 65%, transparent)) !important;
  --red: #e83e3e !important;
  --ribbon-background: rgb(16, 14, 27) !important;
  --ribbon-background-collapsed: rgb(11, 10, 16) !important;
  --scrollbar-active-thumb-bg: rgba(244, 215, 205, 0.4) !important;
  --scrollbar-bg: rgb(43, 39, 63) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgb(43, 39, 63) !important;
  --search-clear-button-color: rgb(190, 186, 212) !important;
  --search-icon-color: rgb(190, 186, 212) !important;
  --search-result-background: rgb(11, 10, 16) !important;
  --secondary: rgb(237, 188, 171) !important;
  --setting-group-heading-color: rgb(240, 239, 245) !important;
  --setting-items-background: rgb(22, 20, 31) !important;
  --setting-items-border-color: rgb(16, 14, 27) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: rgb(43, 39, 63) !important;
  --slider-track-background: rgb(16, 14, 27) !important;
  --status-bar-background: rgb(16, 14, 27) !important;
  --status-bar-border-color: rgb(16, 14, 27) !important;
  --status-bar-text-color: rgb(190, 186, 212) !important;
  --strong-color: #E97193 !important;
  --suggestion-background: rgb(11, 10, 16) !important;
  --tab-background-active: rgb(11, 10, 16) !important;
  --tab-container-background: rgb(16, 14, 27) !important;
  --tab-divider-color: rgb(22, 20, 31) !important;
  --tab-outline-color: rgb(16, 14, 27) !important;
  --tab-switcher-background: rgb(16, 14, 27) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(16, 14, 27), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(244, 215, 205) !important;
  --tab-text-color: rgb(226, 224, 235) !important;
  --tab-text-color-active: rgb(190, 186, 212) !important;
  --tab-text-color-focused: rgb(190, 186, 212) !important;
  --tab-text-color-focused-active: rgb(190, 186, 212) !important;
  --tab-text-color-focused-active-current: rgb(240, 239, 245) !important;
  --tab-text-color-focused-highlighted: rgb(237, 188, 171) !important;
  --table-add-button-border-color: rgb(16, 14, 27) !important;
  --table-border-color: rgb(16, 14, 27) !important;
  --table-drag-handle-background-active: rgb(244, 215, 205) !important;
  --table-drag-handle-color: rgb(93, 84, 135) !important;
  --table-header-border-color: rgb(16, 14, 27) !important;
  --table-header-color: rgb(240, 239, 245) !important;
  --table-selection: rgba(244, 215, 205, 0.1) !important;
  --table-selection-border-color: rgb(244, 215, 205) !important;
  --tag-background: #2c2537 !important;
  --tag-background-color-d: #b3e1bd !important;
  --tag-background-color-l: #bde1d3 !important;
  --tag-background-hover: rgba(244, 215, 205, 0.2) !important;
  --tag-border-color: rgba(244, 215, 205, 0.15) !important;
  --tag-border-color-hover: rgba(244, 215, 205, 0.15) !important;
  --tag-color: #EEEEEE !important;
  --tag-color-hover: rgb(237, 188, 171) !important;
  --tag-font-color-d: #ffffff !important;
  --tag-font-color-l: #1d694b !important;
  --tertiary: rgb(248, 228, 222) !important;
  --text-accent: rgb(237, 188, 171) !important;
  --text-accent-hover: rgb(248, 228, 222) !important;
  --text-faint: rgb(93, 84, 135) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: rgb(190, 186, 212) !important;
  --text-normal: rgb(240, 239, 245) !important;
  --text-selection: rgba(244, 215, 205, 0.25) !important;
  --textHighlight: rgba(244, 215, 205, 0.5) !important;
  --theme-filter: invert(98%) hue-rotate(180deg) !important;
  --titleFont: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(16, 14, 27) !important;
  --titlebar-background-focused: rgb(16, 14, 27) !important;
  --titlebar-border-color: rgb(16, 14, 27) !important;
  --titlebar-text-color: rgb(190, 186, 212) !important;
  --titlebar-text-color-focused: rgb(240, 239, 245) !important;
  --vault-profile-color: rgb(240, 239, 245) !important;
  --vault-profile-color-hover: rgb(240, 239, 245) !important;
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

html body div#quartz-root {
  background-color: rgb(11, 10, 16);
  color: rgb(240, 239, 245);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(233, 113, 147) none 0px;
  text-decoration: rgb(233, 113, 147);
  text-decoration-color: rgb(233, 113, 147);
}

html body .page article p > em, html em {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

html body .page article p > i, html i {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

html body .page article p > strong, html strong {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(233, 113, 147) none 0px;
  text-decoration: rgb(233, 113, 147);
  text-decoration-color: rgb(233, 113, 147);
}

html body .text-highlight {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

html body del {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: line-through rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

html body p {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 186, 212) none 0px;
  text-decoration: rgb(190, 186, 212);
  text-decoration-color: rgb(190, 186, 212);
}`,
    links: `html body a.external, html footer a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration: underline rgb(237, 188, 171);
  text-decoration-color: rgb(237, 188, 171);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration: underline rgb(237, 188, 171);
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
  text-decoration: rgb(93, 84, 135);
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
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-radius: 10px;
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
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
  border-left-color: rgb(244, 215, 205);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
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
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
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
  text-decoration: rgb(240, 239, 245);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
  text-decoration: rgb(190, 186, 212);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 186, 212);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 186, 212);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(244, 215, 205, 0.5);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
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
  text-decoration: rgb(190, 186, 212);
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
  text-decoration: rgb(190, 186, 212);
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
  text-decoration: rgb(190, 186, 212);
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
  text-decoration: underline dotted rgb(240, 239, 245);
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
}`,
  },
  light: {},
};
