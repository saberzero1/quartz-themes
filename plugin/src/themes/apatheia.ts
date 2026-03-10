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
  --accent-d: 80%;
  --accent-h: 15;
  --accent-l: 88%;
  --accent-s: 64%;
  --ap-aqua: #a8e5e6;
  --ap-base0: rgb(11, 10, 16);
  --ap-base0-d: 13%;
  --ap-base0-h: 250;
  --ap-base0-l: 5%;
  --ap-base0-s: 23%;
  --ap-base1: rgb(16, 14, 27);
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
  --ap-color-dp0: rgb(16, 14, 27);
  --ap-color-dp1: rgb(11, 10, 16);
  --ap-color-dp10: rgb(226, 224, 235);
  --ap-color-dp11: rgb(240, 239, 245);
  --ap-color-dp2: rgb(22, 20, 31);
  --ap-color-dp3: rgb(32, 29, 47);
  --ap-color-dp4: rgb(43, 39, 63);
  --ap-color-dp5: rgb(97, 88, 141);
  --ap-color-dp6: rgb(123, 114, 167);
  --ap-color-dp7: rgb(152, 145, 186);
  --ap-color-dp8: rgb(181, 177, 206);
  --ap-color-dp9: rgb(211, 208, 226);
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
  --ap-primary: rgb(244, 215, 205);
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
  --ap-secondary: rgb(114, 182, 156);
  --ap-secondary-d: 70%;
  --ap-secondary-h: 157;
  --ap-secondary-l: 58%;
  --ap-secondary-s: 32%;
  --ap-size-text: 1em;
  --ap-size-text-header: 1em;
  --ap-size-text-item: 1em;
  --ap-yellow: #ece0a8;
  --background-modifier-active-hover: rgba(244, 215, 205, 0.1);
  --background-modifier-border: rgb(16, 14, 27);
  --background-modifier-border-focus: rgb(16, 14, 27);
  --background-modifier-border-hover: rgb(43, 39, 63);
  --background-modifier-form-field: rgb(16, 14, 27);
  --background-modifier-form-field-hover: rgb(16, 14, 27);
  --background-modifier-hover: rgba(244, 215, 205, 0.5);
  --background-primary: rgb(11, 10, 16);
  --background-primary-alt: rgb(22, 20, 31);
  --background-secondary: rgb(16, 14, 27);
  --background-secondary-alt: rgb(16, 14, 27);
  --base-d: 13%;
  --base-h: 250;
  --base-l: 5%;
  --base-s: 23%;
  --bases-cards-background: rgb(11, 10, 16);
  --bases-cards-cover-background: rgb(22, 20, 31);
  --bases-cards-shadow: 0 0 0 1px rgb(16, 14, 27);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(43, 39, 63);
  --bases-embed-border-color: rgb(16, 14, 27);
  --bases-group-heading-property-color: rgb(190, 186, 212);
  --bases-table-border-color: rgb(16, 14, 27);
  --bases-table-cell-background-active: rgb(11, 10, 16);
  --bases-table-cell-background-disabled: rgb(22, 20, 31);
  --bases-table-cell-background-selected: rgba(244, 215, 205, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(16, 14, 27);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(244, 215, 205);
  --bases-table-group-background: rgb(22, 20, 31);
  --bases-table-header-background: rgb(11, 10, 16);
  --bases-table-header-background-hover: rgba(244, 215, 205, 0.5);
  --bases-table-header-color: rgb(190, 186, 212);
  --bases-table-summary-background: rgb(11, 10, 16);
  --bases-table-summary-background-hover: rgba(244, 215, 205, 0.5);
  --blockquote-border-color: rgb(244, 215, 205);
  --blue: #2e80f2;
  --blur-background: color-mix(in srgb, rgb(16, 14, 27) 65%, transparent) linear-gradient(rgb(16, 14, 27), color-mix(in srgb, rgb(16, 14, 27) 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: rgb(11, 10, 16);
  --canvas-card-label-color: rgb(93, 84, 135);
  --canvas-dot-pattern: rgb(16, 14, 27);
  --caret-color: rgb(240, 239, 245);
  --checkbox-border-color: rgb(93, 84, 135);
  --checkbox-border-color-hover: rgb(190, 186, 212);
  --checkbox-color: rgb(244, 215, 205);
  --checkbox-color-hover: rgb(240, 201, 188);
  --checkbox-marker-color: rgb(11, 10, 16);
  --checkbox-radius: 30%;
  --checklist-done-color: rgb(190, 186, 212);
  --code-background: rgb(22, 20, 31);
  --code-border-color: rgb(16, 14, 27);
  --code-bracket-background: rgba(244, 215, 205, 0.5);
  --code-comment: rgb(93, 84, 135);
  --code-normal: rgb(240, 239, 245);
  --code-punctuation: rgb(190, 186, 212);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(93, 84, 135);
  --collapse-icon-color-collapsed: rgb(237, 188, 171);
  --color-accent: rgb(244, 215, 205);
  --color-accent-1: rgb(240, 201, 188);
  --color-accent-2: rgb(248, 228, 222);
  --color-accent-hsl: 15, 64%, 88%;
  --color-base-00: rgb(11, 10, 16);
  --color-base-10: rgb(22, 20, 31);
  --color-base-100: rgb(240, 239, 245);
  --color-base-20: rgb(16, 14, 27);
  --color-base-25: rgb(16, 14, 27);
  --color-base-30: rgb(16, 14, 27);
  --color-base-35: rgb(43, 39, 63);
  --color-base-40: rgb(16, 14, 27);
  --color-base-50: rgb(123, 114, 167);
  --color-base-60: rgb(152, 145, 186);
  --color-base-70: rgb(226, 224, 235);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(16, 14, 27);
  --divider-color-hover: rgb(244, 215, 205);
  --dropdown-background: rgb(16, 14, 27);
  --dropdown-background-hover: rgb(43, 39, 63);
  --em-color: #E97193;
  --embed-block-shadow-hover: 0 0 0 1px rgb(16, 14, 27), inset 0 0 0 1px rgb(16, 14, 27);
  --embed-border-start: 2px solid rgb(244, 215, 205);
  --file-header-background: rgb(11, 10, 16);
  --file-header-background-focused: rgb(11, 10, 16);
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(16, 14, 27);
  --flair-color: rgb(240, 239, 245);
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --footnote-divider-color: rgb(16, 14, 27);
  --footnote-id-color: rgb(190, 186, 212);
  --footnote-id-color-no-occurrences: rgb(93, 84, 135);
  --footnote-input-background-active: rgba(244, 215, 205, 0.5);
  --graph-line: rgb(43, 39, 63);
  --graph-node: rgb(190, 186, 212);
  --graph-node-focused: rgb(237, 188, 171);
  --graph-node-tag: rgb(114, 182, 156);
  --graph-node-unresolved: rgb(93, 84, 135);
  --graph-text: rgb(240, 239, 245);
  --gray: var(--text-muted);
  --green: #3eb4bf;
  --h1-color: #E97193;
  --h2-color: #DFA7E7;
  --h3-color: #A8C5E6;
  --h4-color: #AAC5A0;
  --h5-color: #D1A999;
  --h6-color: #ece0a8;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(93, 84, 135);
  --highlight: var(--background-modifier-hover);
  --hr-color: rgb(16, 14, 27);
  --icon-color: rgb(190, 186, 212);
  --icon-color-active: rgb(237, 188, 171);
  --icon-color-focused: rgb(244, 215, 205);
  --icon-color-hover: rgb(190, 186, 212);
  --inline-title-color: #E97193;
  --input-date-separator: rgb(93, 84, 135);
  --input-placeholder-color: rgb(93, 84, 135);
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --interactive-accent: rgb(244, 215, 205);
  --interactive-accent-hover: rgb(240, 201, 188);
  --interactive-accent-hsl: 15, 64%, 88%;
  --interactive-hover: rgb(43, 39, 63);
  --interactive-normal: rgb(16, 14, 27);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(237, 188, 171);
  --link-color-hover: rgb(248, 228, 222);
  --link-external-color: rgb(237, 188, 171);
  --link-external-color-hover: rgb(248, 228, 222);
  --link-unresolved-color: rgb(237, 188, 171);
  --link-unresolved-decoration-color: rgba(244, 215, 205, 0.3);
  --list-marker-color: rgb(93, 84, 135);
  --list-marker-color-collapsed: rgb(237, 188, 171);
  --list-marker-color-hover: rgb(190, 186, 212);
  --menu-background: rgb(16, 14, 27);
  --menu-border-color: rgb(43, 39, 63);
  --metadata-border-color: rgb(16, 14, 27);
  --metadata-divider-color: rgb(16, 14, 27);
  --metadata-input-background-active: rgba(244, 215, 205, 0.5);
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(240, 239, 245);
  --metadata-label-background-active: rgba(244, 215, 205, 0.5);
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(190, 186, 212);
  --metadata-label-text-color-hover: rgb(190, 186, 212);
  --metadata-property-background-active: rgba(244, 215, 205, 0.5);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(16, 14, 27);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(43, 39, 63);
  --modal-background: rgb(11, 10, 16);
  --modal-border-color: rgb(16, 14, 27);
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(93, 84, 135);
  --nav-collapse-icon-color-collapsed: rgb(93, 84, 135);
  --nav-heading-color: rgb(240, 239, 245);
  --nav-heading-color-collapsed: rgb(93, 84, 135);
  --nav-heading-color-collapsed-hover: rgb(190, 186, 212);
  --nav-heading-color-hover: rgb(240, 239, 245);
  --nav-item-background-active: rgba(244, 215, 205, 0.5);
  --nav-item-background-hover: rgba(244, 215, 205, 0.5);
  --nav-item-background-selected: rgba(244, 215, 205, 0.15);
  --nav-item-color: rgb(190, 186, 212);
  --nav-item-color-active: rgb(240, 239, 245);
  --nav-item-color-highlighted: rgb(237, 188, 171);
  --nav-item-color-hover: rgb(240, 239, 245);
  --nav-item-color-selected: rgb(240, 239, 245);
  --nav-tag-color: rgb(93, 84, 135);
  --nav-tag-color-active: rgb(190, 186, 212);
  --nav-tag-color-hover: rgb(190, 186, 212);
  --orange: #e87d3e;
  --pdf-background: rgb(11, 10, 16);
  --pdf-page-background: rgb(11, 10, 16);
  --pdf-shadow: 0 0 0 1px rgb(16, 14, 27);
  --pdf-sidebar-background: rgb(11, 10, 16);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(16, 14, 27);
  --pill-border-color: rgb(16, 14, 27);
  --pill-border-color-hover: rgb(43, 39, 63);
  --pill-color: rgb(190, 186, 212);
  --pill-color-hover: rgb(240, 239, 245);
  --pill-color-remove: rgb(93, 84, 135);
  --pill-color-remove-hover: rgb(237, 188, 171);
  --pink: #ff82b2;
  --prompt-background: rgb(11, 10, 16);
  --prompt-border-color: rgb(16, 14, 27);
  --purple: #9e86c8;
  --quote-color: #E97193;
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, rgb(16, 14, 27) 65%, transparent) linear-gradient(rgb(16, 14, 27), color-mix(in srgb, rgb(16, 14, 27) 65%, transparent));
  --red: #e83e3e;
  --ribbon-background: rgb(16, 14, 27);
  --ribbon-background-collapsed: rgb(11, 10, 16);
  --scrollbar-active-thumb-bg: rgba(244, 215, 205, 0.4);
  --scrollbar-bg: rgb(43, 39, 63);
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgb(43, 39, 63);
  --search-clear-button-color: rgb(190, 186, 212);
  --search-icon-color: rgb(190, 186, 212);
  --search-result-background: rgb(11, 10, 16);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(240, 239, 245);
  --setting-items-background: rgb(22, 20, 31);
  --setting-items-border-color: rgb(16, 14, 27);
  --setting-items-radius: 10px;
  --slider-thumb-border-color: rgb(43, 39, 63);
  --slider-track-background: rgb(16, 14, 27);
  --status-bar-background: rgb(16, 14, 27);
  --status-bar-border-color: rgb(16, 14, 27);
  --status-bar-text-color: rgb(190, 186, 212);
  --strong-color: #E97193;
  --suggestion-background: rgb(11, 10, 16);
  --tab-background-active: rgb(11, 10, 16);
  --tab-container-background: rgb(16, 14, 27);
  --tab-divider-color: rgb(22, 20, 31);
  --tab-outline-color: rgb(16, 14, 27);
  --tab-switcher-background: rgb(16, 14, 27);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(16, 14, 27), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(244, 215, 205);
  --tab-text-color: rgb(226, 224, 235);
  --tab-text-color-active: rgb(190, 186, 212);
  --tab-text-color-focused: rgb(190, 186, 212);
  --tab-text-color-focused-active: rgb(190, 186, 212);
  --tab-text-color-focused-active-current: rgb(240, 239, 245);
  --tab-text-color-focused-highlighted: rgb(237, 188, 171);
  --table-add-button-border-color: rgb(16, 14, 27);
  --table-border-color: rgb(16, 14, 27);
  --table-drag-handle-background-active: rgb(244, 215, 205);
  --table-drag-handle-color: rgb(93, 84, 135);
  --table-header-border-color: rgb(16, 14, 27);
  --table-header-color: rgb(240, 239, 245);
  --table-selection: rgba(244, 215, 205, 0.1);
  --table-selection-border-color: rgb(244, 215, 205);
  --tag-background: #2c2537;
  --tag-background-color-d: #b3e1bd;
  --tag-background-color-l: #bde1d3;
  --tag-background-hover: rgba(244, 215, 205, 0.2);
  --tag-border-color: rgba(244, 215, 205, 0.15);
  --tag-border-color-hover: rgba(244, 215, 205, 0.15);
  --tag-color: #EEEEEE;
  --tag-color-hover: rgb(237, 188, 171);
  --tag-font-color-d: #ffffff;
  --tag-font-color-l: #1d694b;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(237, 188, 171);
  --text-accent-hover: rgb(248, 228, 222);
  --text-faint: rgb(93, 84, 135);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: rgb(190, 186, 212);
  --text-normal: rgb(240, 239, 245);
  --text-selection: rgba(244, 215, 205, 0.25);
  --textHighlight: var(--background-modifier-hover);
  --theme-filter: invert(98%) hue-rotate(180deg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(16, 14, 27);
  --titlebar-background-focused: rgb(16, 14, 27);
  --titlebar-border-color: rgb(16, 14, 27);
  --titlebar-text-color: rgb(190, 186, 212);
  --titlebar-text-color-focused: rgb(240, 239, 245);
  --vault-profile-color: rgb(240, 239, 245);
  --vault-profile-color-hover: rgb(240, 239, 245);
  --yellow: #e5b567;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(16, 14, 27);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

body div#quartz-root {
  background-color: rgb(11, 10, 16);
  color: rgb(240, 239, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(233, 113, 147) none 0px;
  text-decoration: rgb(233, 113, 147);
  text-decoration-color: rgb(233, 113, 147);
}

body .page article p > em, em {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

body .page article p > i, i {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

body .page article p > strong, strong {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(233, 113, 147) none 0px;
  text-decoration: rgb(233, 113, 147);
  text-decoration-color: rgb(233, 113, 147);
}

body .text-highlight {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

body del {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: line-through rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

body p {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 186, 212) none 0px;
  text-decoration: rgb(190, 186, 212);
  text-decoration-color: rgb(190, 186, 212);
}`,
    links: `body a.external, footer a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration: underline rgb(237, 188, 171);
  text-decoration-color: rgb(237, 188, 171);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration: underline rgb(237, 188, 171);
  text-decoration-color: rgb(237, 188, 171);
}

body a.internal.broken {
  color: rgb(237, 188, 171);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 188, 171) none 0px;
  text-decoration: underline rgba(244, 215, 205, 0.3);
  text-decoration-color: rgba(244, 215, 205, 0.3);
}`,
    lists: `body dd {
  color: rgb(240, 239, 245);
}

body dt {
  color: rgb(240, 239, 245);
}

body ol > li {
  color: rgb(240, 239, 245);
}

body ol.overflow {
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

body ul > li {
  color: rgb(240, 239, 245);
}

body ul.overflow {
  background-color: rgb(11, 10, 16);
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body table {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

body th {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(233, 113, 147);
  border-left-color: rgb(233, 113, 147);
  border-right-color: rgb(233, 113, 147);
  border-top-color: rgb(233, 113, 147);
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(236, 224, 168);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(236, 224, 168);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(236, 224, 168);
  border-left-color: rgb(236, 224, 168);
  border-right-color: rgb(236, 224, 168);
  border-top-color: rgb(236, 224, 168);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
}

body pre:has(> code) {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
}`,
    images: `body audio {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body figcaption {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body img {
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

body video {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
}

body .footnotes {
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
}

body .transclude {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(244, 215, 205);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(244, 215, 205);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body input[type=checkbox] {
  border-bottom-color: rgb(93, 84, 135);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(93, 84, 135);
  border-right-color: rgb(93, 84, 135);
  border-top-color: rgb(93, 84, 135);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='*'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='-'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='/'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='>'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='?'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='I'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='S'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='b'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='c'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='d'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='f'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='i'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='k'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='l'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='p'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='u'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}

body li.task-list-item[data-task='w'] {
  color: rgb(93, 84, 135);
  text-decoration: rgb(93, 84, 135);
  text-decoration-color: rgb(93, 84, 135);
}`,
    search: `body .search > .search-button {
  background-color: rgb(16, 14, 27);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 239, 245) none 0px;
  text-decoration: rgb(240, 239, 245);
  text-decoration-color: rgb(240, 239, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 239, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(240, 239, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(244, 215, 205, 0.5);
  color: rgb(240, 239, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(16, 14, 27);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(244, 215, 205, 0.5);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(244, 215, 205, 0.5);
  color: rgb(240, 239, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(44, 37, 55);
  border-bottom-color: rgba(244, 215, 205, 0.15);
  border-left-color: rgba(244, 215, 205, 0.15);
  border-right-color: rgba(244, 215, 205, 0.15);
  border-top-color: rgba(244, 215, 205, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(238, 238, 238);
}

body h1 {
  color: rgb(233, 113, 147);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

body h2 {
  color: rgb(223, 167, 231);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(233, 113, 147);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(168, 197, 230);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

body h4 {
  color: rgb(170, 197, 160);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

body h5 {
  color: rgb(209, 169, 153);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

body h6 {
  color: rgb(236, 224, 168);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
}

body hr {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

body ::-webkit-scrollbar-corner {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}

body ::-webkit-scrollbar-track {
  background: rgb(11, 10, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 10, 16);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 186, 212);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 186, 212);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 186, 212);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(244, 215, 205, 0.5);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
}`,
    footer: `body footer {
  background-color: rgb(16, 14, 27);
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(190, 186, 212);
  text-decoration: rgb(190, 186, 212);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 186, 212);
  text-decoration: rgb(190, 186, 212);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
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

body li.section-li > .section .meta {
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 186, 212);
  text-decoration: rgb(190, 186, 212);
}

body ul.section-ul {
  border-bottom-color: rgb(240, 239, 245);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
}

body .darkmode svg {
  color: rgb(190, 186, 212);
  stroke: rgb(190, 186, 212);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
}

body .breadcrumb-element p {
  color: rgb(93, 84, 135);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
}

body .metadata {
  border-bottom-color: rgb(16, 14, 27);
  border-left-color: rgb(16, 14, 27);
  border-right-color: rgb(16, 14, 27);
  border-top-color: rgb(16, 14, 27);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(16, 14, 27);
}

body .page-header h2.page-title {
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(240, 239, 245);
  text-decoration: underline dotted rgb(240, 239, 245);
}

body details {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body input[type=text] {
  border-bottom-color: rgb(190, 186, 212);
  border-left-color: rgb(190, 186, 212);
  border-right-color: rgb(190, 186, 212);
  border-top-color: rgb(190, 186, 212);
  color: rgb(190, 186, 212);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
  color: rgb(240, 239, 245);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(240, 239, 245);
  border-left-color: rgb(240, 239, 245);
  border-right-color: rgb(240, 239, 245);
  border-top-color: rgb(240, 239, 245);
}

body sub {
  color: rgb(240, 239, 245);
}

body summary {
  color: rgb(240, 239, 245);
}

body sup {
  color: rgb(240, 239, 245);
}`,
  },
  light: {},
};
