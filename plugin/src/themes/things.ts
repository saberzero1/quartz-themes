import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "things",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-d: 70%;
  --accent-h: 215;
  --accent-l: 60%;
  --accent-s: 75%;
  --atom-aqua: #56b6c2;
  --atom-blue: #61afef;
  --atom-gray-1: #5c6370;
  --atom-gray-2: #abb2bf;
  --atom-green: #98c379;
  --atom-orange: #d19a66;
  --atom-purple: #c678dd;
  --atom-red: #e06c75;
  --atom-yellow: #e5c07b;
  --background-modifier-active-hover: rgba(76, 140, 230, 0.1);
  --background-modifier-border: #35393e;
  --background-modifier-border-focus: #555;
  --background-modifier-form-field: #2c313c;
  --background-modifier-form-field-hover: #2c313c;
  --background-primary: #1c2127;
  --background-primary-alt: #282c34;
  --background-secondary: #181c20;
  --background-secondary-alt: #35393e;
  --base-d: 13%;
  --base-h: 212;
  --base-l: 97%;
  --base-s: 15%;
  --bases-cards-background: #1c2127;
  --bases-cards-cover-background: #282c34;
  --bases-cards-shadow: 0 0 0 1px #35393e;
  --bases-embed-border-color: #35393e;
  --bases-group-heading-property-color: rgb(190, 198, 207);
  --bases-table-border-color: #35393e;
  --bases-table-cell-background-active: #1c2127;
  --bases-table-cell-background-disabled: #282c34;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #555;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(76, 140, 230);
  --bases-table-group-background: #282c34;
  --bases-table-header-background: #1c2127;
  --bases-table-header-color: rgb(190, 198, 207);
  --bases-table-summary-background: #1c2127;
  --blockquote-border-color: rgb(76, 140, 230);
  --blue: #2e80f2;
  --blur-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: #1c2127;
  --canvas-card-label-color: rgb(93, 109, 126);
  --canvas-dot-pattern: #35393e;
  --checkbox-border-color: rgb(93, 109, 126);
  --checkbox-border-color-hover: rgb(190, 198, 207);
  --checkbox-color: rgb(76, 140, 230);
  --checkbox-color-hover: rgb(59, 129, 227);
  --checkbox-marker-color: #1c2127;
  --checkbox-radius: 30%;
  --checklist-done-color: rgb(190, 198, 207);
  --code-background: #282c34;
  --code-border-color: #35393e;
  --code-comment: rgb(93, 109, 126);
  --code-punctuation: rgb(190, 198, 207);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(93, 109, 126);
  --collapse-icon-color-collapsed: rgb(121, 169, 236);
  --color-accent: rgb(76, 140, 230);
  --color-accent-1: rgb(59, 129, 227);
  --color-accent-2: rgb(94, 152, 232);
  --color-accent-hsl: 215, 75%, 60%;
  --color-base-00: #1c2127;
  --color-base-10: #282c34;
  --color-base-20: #181c20;
  --color-base-25: #2c313c;
  --color-base-30: #35393e;
  --color-base-40: #555;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --divider-color: #35393e;
  --divider-color-hover: rgb(76, 140, 230);
  --dropdown-background: #35393e;
  --em-color: #ff82b2;
  --embed-block-shadow-hover: 0 0 0 1px #35393e, inset 0 0 0 1px #35393e;
  --embed-border-start: 2px solid rgb(76, 140, 230);
  --file-header-background: #1c2127;
  --file-header-background-focused: #1c2127;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #35393e;
  --folding-offset: 10px;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --footnote-divider-color: #35393e;
  --footnote-id-color: rgb(190, 198, 207);
  --footnote-id-color-no-occurrences: rgb(93, 109, 126);
  --graph-node: rgb(190, 198, 207);
  --graph-node-focused: rgb(121, 169, 236);
  --graph-node-unresolved: rgb(93, 109, 126);
  --gray: var(--text-muted);
  --green: #3eb4bf;
  --h1-color: #dadada;
  --h1-size: 1.7rem;
  --h2-color: #dadada;
  --h2-size: 1.5rem;
  --h3-color: #2e80f2;
  --h3-size: 1.2rem;
  --h4-color: #e5b567;
  --h4-size: 1.1rem;
  --h5-color: #e83e3e;
  --h5-size: 1rem;
  --h6-color: rgb(190, 198, 207);
  --h6-size: 0.9rem;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(93, 109, 126);
  --highlight: var(--background-modifier-active-hover);
  --highlight-background-color--active: rgb(0, 0, 0);
  --highlight-background-color--normal: rgb(0, 0, 0);
  --highlight-background-color-underline: rgb(0, 0, 0);
  --hr-color: #35393e;
  --icon-color: rgb(190, 198, 207);
  --icon-color-active: rgb(121, 169, 236);
  --icon-color-hover: rgb(190, 198, 207);
  --icon-muted: 0.5;
  --inline-title-color: #dadada;
  --inline-title-size: 1.7rem;
  --input-date-separator: rgb(93, 109, 126);
  --input-placeholder-color: rgb(93, 109, 126);
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
    0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --interactive-accent: rgb(76, 140, 230);
  --interactive-accent-hover: rgb(59, 129, 227);
  --interactive-accent-hsl: 215, 75%, 60%;
  --interactive-normal: #35393e;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-width: 40rem;
  --line-width-adaptive: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(121, 169, 236);
  --link-color-hover: rgb(175, 203, 244);
  --link-external-color: rgb(121, 169, 236);
  --link-external-color-hover: rgb(175, 203, 244);
  --link-unresolved-color: rgb(121, 169, 236);
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3);
  --list-marker-color: rgb(93, 109, 126);
  --list-marker-color-collapsed: rgb(121, 169, 236);
  --list-marker-color-hover: rgb(190, 198, 207);
  --max-col-width: 18em;
  --max-width: 90%;
  --menu-background: #181c20;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-border-color: #35393e;
  --metadata-divider-color: #35393e;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(190, 198, 207);
  --metadata-label-text-color-hover: rgb(190, 198, 207);
  --metadata-property-box-shadow-focus: 0 0 0 2px #555;
  --modal-background: #1c2127;
  --modal-border-color: #555;
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(93, 109, 126);
  --nav-collapse-icon-color-collapsed: rgb(93, 109, 126);
  --nav-heading-color-collapsed: rgb(93, 109, 126);
  --nav-heading-color-collapsed-hover: rgb(190, 198, 207);
  --nav-item-background-selected: rgba(76, 140, 230, 0.15);
  --nav-item-color: rgb(190, 198, 207);
  --nav-item-color-highlighted: rgb(121, 169, 236);
  --nav-tag-color: rgb(93, 109, 126);
  --nav-tag-color-active: rgb(190, 198, 207);
  --nav-tag-color-hover: rgb(190, 198, 207);
  --nested-padding: 1.1em;
  --orange: #e87d3e;
  --pdf-background: #1c2127;
  --pdf-page-background: #1c2127;
  --pdf-shadow: 0 0 0 1px #35393e;
  --pdf-sidebar-background: #1c2127;
  --pdf-thumbnail-shadow: 0 0 0 1px #35393e;
  --pill-border-color: #35393e;
  --pill-color: rgb(190, 198, 207);
  --pill-color-remove: rgb(93, 109, 126);
  --pill-color-remove-hover: rgb(121, 169, 236);
  --pink: #ff82b2;
  --progress-color-1: #ad5758;
  --progress-color-2: #b87f4c;
  --progress-color-3: #d2b874;
  --progress-color-4: #b0c07e;
  --progress-color-5: #768399;
  --prompt-background: #1c2127;
  --prompt-border-color: #555;
  --purple: #9e86c8;
  --quote-color: #3eb4bf;
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent));
  --red: #e83e3e;
  --ribbon-background: #181c20;
  --ribbon-background-collapsed: #1c2127;
  --scrollbar-radius: 10px;
  --search-clear-button-color: rgb(190, 198, 207);
  --search-icon-color: rgb(190, 198, 207);
  --search-result-background: #1c2127;
  --secondary: var(--text-accent);
  --setting-items-background: #282c34;
  --setting-items-border-color: #35393e;
  --setting-items-radius: 10px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --slider-track-background: #35393e;
  --status-bar-background: #181c20;
  --status-bar-border-color: #35393e;
  --status-bar-text-color: rgb(190, 198, 207);
  --strong-color: #ff82b2;
  --suggestion-background: #1c2127;
  --tab-background-active: #1c2127;
  --tab-container-background: #181c20;
  --tab-outline-color: #35393e;
  --tab-switcher-background: #181c20;
  --tab-switcher-menubar-background: linear-gradient(to top, #181c20, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230);
  --tab-text-color: rgb(93, 109, 126);
  --tab-text-color-active: rgb(190, 198, 207);
  --tab-text-color-focused: rgb(190, 198, 207);
  --tab-text-color-focused-active: rgb(190, 198, 207);
  --tab-text-color-focused-highlighted: rgb(121, 169, 236);
  --table-add-button-border-color: #35393e;
  --table-border-color: #35393e;
  --table-drag-handle-background-active: rgb(76, 140, 230);
  --table-drag-handle-color: rgb(93, 109, 126);
  --table-header-border-color: #35393e;
  --table-selection: rgba(76, 140, 230, 0.1);
  --table-selection-border-color: rgb(76, 140, 230);
  --tag-background: #1d694b;
  --tag-background-color-d: #1d694b;
  --tag-background-color-l: #bde1d3;
  --tag-background-hover: rgba(76, 140, 230, 0.2);
  --tag-border-color: rgba(76, 140, 230, 0.15);
  --tag-border-color-hover: rgba(76, 140, 230, 0.15);
  --tag-color: #ffffff;
  --tag-color-hover: rgb(121, 169, 236);
  --tag-font-color-d: #ffffff;
  --tag-font-color-l: #1d694b;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(121, 169, 236);
  --text-accent-hover: rgb(175, 203, 244);
  --text-faint: rgb(93, 109, 126);
  --text-formatted: rgb(146, 160, 175);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-highlight-bg-d: rgba(255, 208, 0, 0.4);
  --text-muted: rgb(190, 198, 207);
  --text-selection: rgba(76, 140, 230, 0.25);
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #181c20;
  --titlebar-background-focused: #282c34;
  --titlebar-border-color: #35393e;
  --titlebar-text-color: rgb(190, 198, 207);
  --yellow: #e5b567;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 28, 32);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 33, 39);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 28, 32);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(53, 57, 62);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 28, 32);
  border-left-color: rgb(53, 57, 62);
}

body div#quartz-root {
  background-color: rgb(28, 33, 39);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > em, em {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > i, i {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > strong, strong {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .text-highlight {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 198, 207) none 0px;
  text-decoration: rgb(190, 198, 207);
  text-decoration-color: rgb(190, 198, 207);
}`,
    links: `body a.external, footer a {
  color: rgb(121, 169, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 169, 236) none 0px;
  text-decoration: underline rgb(121, 169, 236);
  text-decoration-color: rgb(121, 169, 236);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(121, 169, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 169, 236) none 0px;
  text-decoration: underline rgb(121, 169, 236);
  text-decoration-color: rgb(121, 169, 236);
}

body a.internal.broken {
  color: rgb(121, 169, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 169, 236) none 0px;
  text-decoration: underline rgba(77, 140, 230, 0.3);
  text-decoration-color: rgba(77, 140, 230, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(28, 33, 39);
}

body ul.overflow {
  background-color: rgb(28, 33, 39);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(93, 109, 126);
  text-decoration: rgb(93, 109, 126);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

body th {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}`,
    code: `body code {
  border-bottom-color: rgb(224, 108, 117);
  border-left-color: rgb(224, 108, 117);
  border-right-color: rgb(224, 108, 117);
  border-top-color: rgb(224, 108, 117);
  color: rgb(224, 108, 117);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

body pre:has(> code) {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}`,
    images: `body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 44, 52);
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
}

body .transclude {
  border-left-color: rgb(77, 140, 230);
}

body .transclude-inner {
  border-left-color: rgb(77, 140, 230);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 109, 126);
  text-decoration: rgb(93, 109, 126);
  text-decoration-color: rgb(93, 109, 126);
}

body input[type=checkbox] {
  border-bottom-color: rgb(93, 109, 126);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(93, 109, 126);
  border-right-color: rgb(93, 109, 126);
  border-top-color: rgb(93, 109, 126);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(93, 109, 126);
  text-decoration: line-through 1px rgb(93, 109, 126);
  text-decoration-color: rgb(93, 109, 126);
}`,
    search: `body .search > .search-button {
  background-color: rgb(44, 49, 60);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 33, 39);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 28, 32);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(29, 105, 75);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(46, 128, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(229, 181, 103);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(232, 62, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 33, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 33, 39);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 198, 207);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 198, 207);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 198, 207);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
}`,
    footer: `body footer {
  background-color: rgb(24, 28, 32);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(190, 198, 207);
  text-decoration: rgb(190, 198, 207);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 198, 207);
  text-decoration: rgb(190, 198, 207);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 198, 207);
  text-decoration: rgb(190, 198, 207);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
}

body .darkmode svg {
  color: rgb(190, 198, 207);
  stroke: rgb(190, 198, 207);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
}

body .breadcrumb-element p {
  color: rgb(93, 109, 126);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(24, 28, 32);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(40, 44, 52);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 70%;
  --accent-h: 215;
  --accent-l: 60%;
  --accent-s: 75%;
  --atom-aqua: #0084bc;
  --atom-blue: #3d74f6;
  --atom-gray-1: #383a42;
  --atom-gray-2: #383a42;
  --atom-green: #4ea24c;
  --atom-orange: #986800;
  --atom-purple: #a625a4;
  --atom-red: #e75545;
  --atom-yellow: #e35649;
  --background-modifier-active-hover: rgba(76, 140, 230, 0.1);
  --background-modifier-border: #ebedf0;
  --background-modifier-error: #e4374b;
  --background-modifier-error-hover: #e4374b;
  --background-modifier-error-rgb: 228, 55, 75;
  --background-modifier-hover: #e2e5e9;
  --background-modifier-success: #0cb54f;
  --background-modifier-success-rgb: 12, 181, 79;
  --background-primary-alt: #f6f7f8;
  --background-secondary: #f6f7f8;
  --base-d: 13%;
  --base-h: 212;
  --base-l: 97%;
  --base-s: 15%;
  --bases-cards-cover-background: #f6f7f8;
  --bases-cards-shadow: 0 0 0 1px #ebedf0;
  --bases-embed-border-color: #ebedf0;
  --bases-group-heading-property-color: rgb(85, 94, 104);
  --bases-table-border-color: #ebedf0;
  --bases-table-cell-background-disabled: #f6f7f8;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(90, 149, 231);
  --bases-table-group-background: #f6f7f8;
  --bases-table-header-background-hover: #e2e5e9;
  --bases-table-header-color: rgb(85, 94, 104);
  --bases-table-summary-background-hover: #e2e5e9;
  --blockquote-border-color: rgb(90, 149, 231);
  --blue: #2e80f2;
  --bodyFont: var(--font-text);
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-success: 12, 181, 79;
  --canvas-card-label-color: rgb(162, 170, 179);
  --canvas-color-1: 228, 55, 75;
  --canvas-color-4: 12, 181, 79;
  --canvas-dot-pattern: #ebedf0;
  --checkbox-border-color: rgb(162, 170, 179);
  --checkbox-border-color-hover: rgb(85, 94, 104);
  --checkbox-color: rgb(90, 149, 231);
  --checkbox-color-hover: rgb(99, 155, 233);
  --checkbox-radius: 30%;
  --checklist-done-color: rgb(85, 94, 104);
  --code-background: #f6f7f8;
  --code-border-color: #ebedf0;
  --code-bracket-background: #e2e5e9;
  --code-comment: rgb(162, 170, 179);
  --code-function: #bd8e37;
  --code-important: #d96c00;
  --code-keyword: #c32b74;
  --code-operator: #e4374b;
  --code-property: #2db7b5;
  --code-punctuation: rgb(85, 94, 104);
  --code-string: #0cb54f;
  --code-tag: #e4374b;
  --code-value: #876be0;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(162, 170, 179);
  --collapse-icon-color-collapsed: rgb(76, 140, 230);
  --color-accent: rgb(76, 140, 230);
  --color-accent-1: rgb(90, 149, 231);
  --color-accent-2: rgb(99, 155, 233);
  --color-accent-hsl: 215, 75%, 60%;
  --color-base-10: #f6f7f8;
  --color-base-20: #f6f7f8;
  --color-base-25: #f0f0f0;
  --color-base-30: #ebedf0;
  --color-base-70: #5a5a5a;
  --color-cyan: #2db7b5;
  --color-green: #0cb54f;
  --color-green-rgb: 12, 181, 79;
  --color-orange: #d96c00;
  --color-pink: #c32b74;
  --color-purple: #876be0;
  --color-red: #e4374b;
  --color-red-rgb: 228, 55, 75;
  --color-yellow: #bd8e37;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --divider-color: #ebedf0;
  --divider-color-hover: rgb(90, 149, 231);
  --dropdown-background-hover: #f6f7f8;
  --em-color: #ff82b2;
  --embed-block-shadow-hover: 0 0 0 1px #ebedf0, inset 0 0 0 1px #ebedf0;
  --embed-border-start: 2px solid rgb(90, 149, 231);
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --folding-offset: 10px;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --footnote-divider-color: #ebedf0;
  --footnote-id-color: rgb(85, 94, 104);
  --footnote-id-color-no-occurrences: rgb(162, 170, 179);
  --footnote-input-background-active: #e2e5e9;
  --graph-node: rgb(85, 94, 104);
  --graph-node-attachment: #bd8e37;
  --graph-node-focused: rgb(76, 140, 230);
  --graph-node-tag: #0cb54f;
  --graph-node-unresolved: rgb(162, 170, 179);
  --gray: var(--text-muted);
  --green: #3eb4bf;
  --h1-color: #222222;
  --h1-size: 1.7rem;
  --h2-color: #222222;
  --h2-size: 1.5rem;
  --h3-color: #2e80f2;
  --h3-size: 1.2rem;
  --h4-color: #e5b567;
  --h4-size: 1.1rem;
  --h5-color: #e83e3e;
  --h5-size: 1rem;
  --h6-color: rgb(85, 94, 104);
  --h6-size: 0.9rem;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(162, 170, 179);
  --highlight: var(--background-modifier-hover);
  --highlight-background-color--active: rgb(0, 0, 0);
  --highlight-background-color--normal: rgb(0, 0, 0);
  --highlight-background-color-underline: rgb(0, 0, 0);
  --hr-color: #ebedf0;
  --icon-color: rgb(85, 94, 104);
  --icon-color-active: rgb(76, 140, 230);
  --icon-color-hover: rgb(85, 94, 104);
  --icon-muted: 0.5;
  --inline-title-color: #222222;
  --inline-title-size: 1.7rem;
  --input-date-separator: rgb(162, 170, 179);
  --input-placeholder-color: rgb(162, 170, 179);
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
    0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
    0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --interactive-accent: rgb(90, 149, 231);
  --interactive-accent-hover: rgb(99, 155, 233);
  --interactive-accent-hsl: 215, 75%, 60%;
  --interactive-hover: #f6f7f8;
  --light: var(--background-primary-alt);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-width: 40rem;
  --line-width-adaptive: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(76, 140, 230);
  --link-color-hover: rgb(32, 112, 223);
  --link-external-color: rgb(76, 140, 230);
  --link-external-color-hover: rgb(32, 112, 223);
  --link-unresolved-color: rgb(76, 140, 230);
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3);
  --list-marker-color: rgb(162, 170, 179);
  --list-marker-color-collapsed: rgb(76, 140, 230);
  --list-marker-color-hover: rgb(85, 94, 104);
  --max-col-width: 18em;
  --max-width: 90%;
  --menu-background: #f6f7f8;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-border-color: #ebedf0;
  --metadata-divider-color: #ebedf0;
  --metadata-input-background-active: #e2e5e9;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-background-active: #e2e5e9;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(85, 94, 104);
  --metadata-label-text-color-hover: rgb(85, 94, 104);
  --metadata-property-background-active: #e2e5e9;
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(162, 170, 179);
  --nav-collapse-icon-color-collapsed: rgb(162, 170, 179);
  --nav-heading-color-collapsed: rgb(162, 170, 179);
  --nav-heading-color-collapsed-hover: rgb(85, 94, 104);
  --nav-item-background-active: #e2e5e9;
  --nav-item-background-hover: #e2e5e9;
  --nav-item-background-selected: rgba(76, 140, 230, 0.15);
  --nav-item-color: rgb(85, 94, 104);
  --nav-item-color-highlighted: rgb(76, 140, 230);
  --nav-tag-color: rgb(162, 170, 179);
  --nav-tag-color-active: rgb(85, 94, 104);
  --nav-tag-color-hover: rgb(85, 94, 104);
  --nested-padding: 1.1em;
  --orange: #e87d3e;
  --pill-border-color: #ebedf0;
  --pill-color: rgb(85, 94, 104);
  --pill-color-remove: rgb(162, 170, 179);
  --pill-color-remove-hover: rgb(76, 140, 230);
  --pink: #ff82b2;
  --progress-color-1: #ad5758;
  --progress-color-2: #b87f4c;
  --progress-color-3: #d2b874;
  --progress-color-4: #b0c07e;
  --progress-color-5: #768399;
  --purple: #9e86c8;
  --quote-color: #3eb4bf;
  --radius-l: 10px;
  --red: #e83e3e;
  --ribbon-background: #f6f7f8;
  --scrollbar-radius: 10px;
  --search-clear-button-color: rgb(85, 94, 104);
  --search-icon-color: rgb(85, 94, 104);
  --secondary: var(--text-accent);
  --setting-items-background: #f6f7f8;
  --setting-items-border-color: #ebedf0;
  --setting-items-radius: 10px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --slider-track-background: #ebedf0;
  --status-bar-background: #f6f7f8;
  --status-bar-border-color: #ebedf0;
  --status-bar-text-color: rgb(85, 94, 104);
  --strong-color: #ff82b2;
  --sync-avatar-color-1: #e4374b;
  --sync-avatar-color-2: #d96c00;
  --sync-avatar-color-3: #bd8e37;
  --sync-avatar-color-4: #0cb54f;
  --sync-avatar-color-5: #2db7b5;
  --sync-avatar-color-7: #876be0;
  --sync-avatar-color-8: #c32b74;
  --tab-container-background: #f6f7f8;
  --tab-outline-color: #ebedf0;
  --tab-switcher-background: #f6f7f8;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f7f8, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230);
  --tab-text-color: rgb(162, 170, 179);
  --tab-text-color-active: rgb(85, 94, 104);
  --tab-text-color-focused: rgb(85, 94, 104);
  --tab-text-color-focused-active: rgb(85, 94, 104);
  --tab-text-color-focused-highlighted: rgb(76, 140, 230);
  --table-add-button-border-color: #ebedf0;
  --table-border-color: #ebedf0;
  --table-drag-handle-background-active: rgb(90, 149, 231);
  --table-drag-handle-color: rgb(162, 170, 179);
  --table-header-border-color: #ebedf0;
  --table-selection: rgba(76, 140, 230, 0.1);
  --table-selection-border-color: rgb(90, 149, 231);
  --tag-background: #bde1d3;
  --tag-background-color-d: #1d694b;
  --tag-background-color-l: #bde1d3;
  --tag-background-hover: rgba(76, 140, 230, 0.2);
  --tag-border-color: rgba(76, 140, 230, 0.15);
  --tag-border-color-hover: rgba(76, 140, 230, 0.15);
  --tag-color: #1d694b;
  --tag-color-hover: rgb(76, 140, 230);
  --tag-font-color-d: #ffffff;
  --tag-font-color-l: #1d694b;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(76, 140, 230);
  --text-accent-hover: rgb(32, 112, 223);
  --text-error: #e4374b;
  --text-faint: rgb(162, 170, 179);
  --text-formatted: rgb(148, 157, 168);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-highlight-bg-l: rgba(255, 208, 0, 0.4);
  --text-muted: rgb(85, 94, 104);
  --text-selection: rgba(76, 140, 230, 0.2);
  --text-success: #0cb54f;
  --text-warning: #d96c00;
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #f6f7f8;
  --titlebar-border-color: #ebedf0;
  --titlebar-text-color: rgb(85, 94, 104);
  --yellow: #e5b567;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 247, 248);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 247, 248);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(235, 237, 240);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 247, 248);
  border-left-color: rgb(235, 237, 240);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > em, em {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > i, i {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > strong, strong {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .text-highlight {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(85, 94, 104) none 0px;
  text-decoration: rgb(85, 94, 104);
  text-decoration-color: rgb(85, 94, 104);
}`,
    links: `body a.external, footer a {
  color: rgb(77, 140, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 140, 230) none 0px;
  text-decoration: underline rgb(77, 140, 230);
  text-decoration-color: rgb(77, 140, 230);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 140, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 140, 230) none 0px;
  text-decoration: underline rgb(77, 140, 230);
  text-decoration-color: rgb(77, 140, 230);
}

body a.internal.broken {
  color: rgb(77, 140, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 140, 230) none 0px;
  text-decoration: underline rgba(77, 140, 230, 0.3);
  text-decoration-color: rgba(77, 140, 230, 0.3);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(162, 170, 179);
  text-decoration: rgb(162, 170, 179);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body th {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}`,
    code: `body code {
  border-bottom-color: rgb(231, 85, 69);
  border-left-color: rgb(231, 85, 69);
  border-right-color: rgb(231, 85, 69);
  border-top-color: rgb(231, 85, 69);
  color: rgb(231, 85, 69);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body pre > code > [data-line] {
  border-left-color: rgb(227, 86, 73);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(227, 86, 73);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(227, 86, 73);
  border-left-color: rgb(227, 86, 73);
  border-right-color: rgb(227, 86, 73);
  border-top-color: rgb(227, 86, 73);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}`,
    images: `body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
}

body .transclude {
  border-left-color: rgb(88, 147, 231);
}

body .transclude-inner {
  border-left-color: rgb(88, 147, 231);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(162, 170, 179);
  text-decoration: rgb(162, 170, 179);
  text-decoration-color: rgb(162, 170, 179);
}

body input[type=checkbox] {
  border-bottom-color: rgb(162, 170, 179);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(162, 170, 179);
  border-right-color: rgb(162, 170, 179);
  border-top-color: rgb(162, 170, 179);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(162, 170, 179);
  text-decoration: line-through 1px rgb(162, 170, 179);
  text-decoration-color: rgb(162, 170, 179);
}`,
    callouts: `body .callout[data-callout="bug"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 12, 181, 79;
  background-color: rgba(12, 181, 79, 0.1);
  border-bottom-color: rgba(12, 181, 79, 0.25);
  border-left-color: rgba(12, 181, 79, 0.25);
  border-right-color: rgba(12, 181, 79, 0.25);
  border-top-color: rgba(12, 181, 79, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 247, 248);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(226, 229, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(189, 225, 211);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(29, 105, 75);
}

body h1 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(46, 128, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(229, 181, 103);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(232, 62, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(85, 94, 104);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(85, 94, 104);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(85, 94, 104);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(226, 229, 233);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
}`,
    footer: `body footer {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(85, 94, 104);
  text-decoration: rgb(85, 94, 104);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 94, 104);
  text-decoration: rgb(85, 94, 104);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 94, 104);
  text-decoration: rgb(85, 94, 104);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
}

body .darkmode svg {
  color: rgb(85, 94, 104);
  stroke: rgb(85, 94, 104);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
}

body .breadcrumb-element p {
  color: rgb(162, 170, 179);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(246, 247, 248);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(246, 247, 248);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
