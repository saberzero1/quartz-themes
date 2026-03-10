import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "feather",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
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
  --background-primary: #333547;
  --background-primary-alt: #282c34;
  --background-secondary: #272835;
  --background-secondary-alt: #35393e;
  --base: #4da2f8;
  --base-d: 13%;
  --base-h: 212;
  --base-l: 97%;
  --base-s: 15%;
  --bases-cards-background: #333547;
  --bases-cards-cover-background: #282c34;
  --bases-cards-shadow: 0 0 0 1px #35393e;
  --bases-embed-border-color: #35393e;
  --bases-group-heading-property-color: rgb(190, 198, 207);
  --bases-table-border-color: #494e6a;
  --bases-table-cell-background-active: #333547;
  --bases-table-cell-background-disabled: #282c34;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #555;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(76, 140, 230);
  --bases-table-group-background: #282c34;
  --bases-table-header-background: #333547;
  --bases-table-header-color: rgb(190, 198, 207);
  --bases-table-summary-background: #333547;
  --blockquote-border-color: rgb(76, 140, 230);
  --blue: #4da2f8;
  --blur-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent));
  --bodyFont: var(--font-text);
  --brown: #ca6419;
  --callout-title-size: 1.2rem;
  --canvas-background: #333547;
  --canvas-card-label-color: rgb(93, 109, 126);
  --canvas-dot-pattern: #35393e;
  --checkbox-border-color: rgb(93, 109, 126);
  --checkbox-border-color-hover: rgb(190, 198, 207);
  --checkbox-color: rgb(76, 140, 230);
  --checkbox-color-hover: #4da2f8;
  --checkbox-marker-color: #333547;
  --checkbox-radius: 30%;
  --checkbox-size: 1.1rem;
  --checklist-done-color: rgb(190, 198, 207);
  --code-background: #1d1c39;
  --code-border-color: #35393e;
  --code-comment: #7b89cf;
  --code-function: #79e3aa;
  --code-important: #f03063;
  --code-keyword: #895ef7;
  --code-operator: #1fcbdc;
  --code-property: #f03063;
  --code-punctuation: #79e3aa;
  --code-size: 1rem;
  --code-string: #79e3aa;
  --code-tag: #f03063;
  --code-value: #ff7641;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(93, 109, 126);
  --collapse-icon-color-collapsed: rgb(121, 169, 236);
  --color-accent: rgb(76, 140, 230);
  --color-accent-1: rgb(59, 129, 227);
  --color-accent-2: rgb(94, 152, 232);
  --color-accent-hsl: 215, 75%, 60%;
  --color-base-00: #333547;
  --color-base-10: #282c34;
  --color-base-20: #272835;
  --color-base-25: #2c313c;
  --color-base-30: #35393e;
  --color-base-40: #555;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --d1: #333547;
  --d2: #272835;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --divider-color: #35393e;
  --divider-color-hover: rgb(76, 140, 230);
  --dropdown-background: #35393e;
  --em-color: #1fcbdc;
  --embed-block-shadow-hover: 0 0 0 1px #35393e, inset 0 0 0 1px #35393e;
  --embed-border-start: 2px solid rgb(76, 140, 230);
  --file-header-background: #333547;
  --file-header-background-focused: #333547;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 1rem;
  --flair-background: #35393e;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif;
  --footnote-divider-color: #35393e;
  --footnote-id-color: rgb(190, 198, 207);
  --footnote-id-color-no-occurrences: rgb(93, 109, 126);
  --graph-node: rgb(190, 198, 207);
  --graph-node-focused: rgb(121, 169, 236);
  --graph-node-unresolved: rgb(93, 109, 126);
  --gray: var(--text-muted);
  --green: #79e3aa;
  --h1-color: #dadada;
  --h1-size: 2rem;
  --h2-color: #dadada;
  --h2-size: 1.8rem;
  --h3-color: #4da2f8;
  --h3-size: 1.6rem;
  --h4-color: #ffc63c;
  --h4-size: 1.4rem;
  --h5-color: #f03063;
  --h5-size: 1.2rem;
  --h6-color: #895ef7;
  --h6-size: 1rem;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(93, 109, 126);
  --highlight: var(--background-modifier-active-hover);
  --hr-color: #494e6a;
  --hr-thickness: 0.0955rem;
  --icon-color: #f4f4f2;
  --icon-color-active: #e8e8e8;
  --icon-color-focused: #f4f4f2;
  --icon-color-hover: #e8e8e8;
  --indigo: #6a84ed;
  --inline-title-color: #dadada;
  --inline-title-line-height: 4rem;
  --inline-title-size: 2rem;
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
  --l1: #f4f4f2;
  --l2: #e8e8e8;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(121, 169, 236);
  --link-color-hover: rgb(175, 203, 244);
  --link-external-color: #79e3aa;
  --link-external-color-hover: rgb(76, 230, 128);
  --link-unresolved-color: rgb(121, 169, 236);
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3);
  --list-marker-color: #7b89cf;
  --list-marker-color-collapsed: rgb(121, 169, 236);
  --list-marker-color-hover: rgb(190, 198, 207);
  --menu-background: #272835;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-border-color: #35393e;
  --metadata-divider-color: #35393e;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(190, 198, 207);
  --metadata-label-text-color-hover: rgb(190, 198, 207);
  --metadata-property-box-shadow-focus: 0 0 0 2px #555;
  --modal-background: #333547;
  --modal-border-color: #555;
  --modal-radius: 1rem;
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
  --orange: #ff7641;
  --pdf-background: #333547;
  --pdf-page-background: #333547;
  --pdf-shadow: 0 0 0 1px #35393e;
  --pdf-sidebar-background: #333547;
  --pdf-thumbnail-shadow: 0 0 0 1px #35393e;
  --pill-border-color: #35393e;
  --pill-color: rgb(190, 198, 207);
  --pill-color-remove: rgb(93, 109, 126);
  --pill-color-remove-hover: rgb(121, 169, 236);
  --pink: #ff22b1;
  --pink-light: #ff82b2;
  --prompt-background: #333547;
  --prompt-border-color: #7b89cf;
  --purple: #895ef7;
  --quotes-color: #dadada;
  --raised-background: color-mix(in srgb, #35393e 65%, transparent) linear-gradient(#35393e, color-mix(in srgb, #35393e 65%, transparent));
  --red: #f03063;
  --ribbon-background: #272835;
  --ribbon-background-collapsed: #333547;
  --search-clear-button-color: rgb(190, 198, 207);
  --search-icon-color: rgb(190, 198, 207);
  --search-result-background: #333547;
  --secondary: var(--text-accent);
  --setting-items-background: #282c34;
  --setting-items-border-color: #35393e;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --slate: #1d1c39;
  --slate-60: #494e6a;
  --slate-blue: #7b89cf;
  --slider-track-background: #35393e;
  --status-bar-background: #272835;
  --status-bar-border-color: #35393e;
  --status-bar-text-color: rgb(190, 198, 207);
  --strong-color: #ff82b2;
  --suggestion-background: #333547;
  --tab-background-active: #333547;
  --tab-container-background: #272835;
  --tab-outline-color: #35393e;
  --tab-switcher-background: #272835;
  --tab-switcher-menubar-background: linear-gradient(to top, #272835, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230);
  --tab-text-color: rgb(93, 109, 126);
  --tab-text-color-active: rgb(190, 198, 207);
  --tab-text-color-focused: rgb(190, 198, 207);
  --tab-text-color-focused-active: rgb(190, 198, 207);
  --tab-text-color-focused-highlighted: rgb(121, 169, 236);
  --table-add-button-border-color: #35393e;
  --table-border-color: #494e6a;
  --table-drag-handle-background-active: rgb(76, 140, 230);
  --table-drag-handle-color: rgb(93, 109, 126);
  --table-header-border-color: #494e6a;
  --table-header-color: #7b89cf;
  --table-header-weight: 900;
  --table-selection: rgba(76, 140, 230, 0.1);
  --table-selection-border-color: rgb(76, 140, 230);
  --table-text-color: #dadada;
  --tag-background: rgba(76, 140, 230, 0.1);
  --tag-background-hover: rgba(76, 140, 230, 0.2);
  --tag-border-color: rgba(76, 140, 230, 0.15);
  --tag-border-color-hover: rgba(76, 140, 230, 0.15);
  --tag-color: #7b89cf;
  --tag-color-hover: rgb(121, 169, 236);
  --tag-size: 1rem;
  --teal: #1fcbdc;
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
  --titlebar-background: #272835;
  --titlebar-background-focused: #272835;
  --titlebar-border-color: #35393e;
  --titlebar-text-color: rgb(190, 198, 207);
  --white: #f8fafc;
  --x: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", monospace;
  --y: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif;
  --yellow: #ffc63c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(39, 40, 53);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(51, 53, 71);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(39, 40, 53);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(53, 57, 62);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(39, 40, 53);
  border-left-color: rgb(53, 57, 62);
}

body div#quartz-root {
  background-color: rgb(51, 53, 71);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > em, em {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
}

body .page article p > i, i {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
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
  color: rgb(121, 227, 170);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 227, 170) none 0px;
  text-decoration: underline rgb(121, 227, 170);
  text-decoration-color: rgb(121, 227, 170);
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
  background-color: rgb(51, 53, 71);
}

body ul.overflow {
  background-color: rgb(51, 53, 71);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(93, 109, 126);
  text-decoration: rgb(93, 109, 126);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 201.656px;
}

body td {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
}

body th {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
  color: rgb(123, 137, 207);
  font-weight: 900;
}`,
    code: `body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

body pre > code > [data-line] {
  border-left-color: rgb(121, 227, 170);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(121, 227, 170);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(121, 227, 170);
  border-left-color: rgb(121, 227, 170);
  border-right-color: rgb(121, 227, 170);
  border-top-color: rgb(121, 227, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
}

body pre:has(> code) {
  background-color: rgb(29, 28, 57);
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
  color: rgb(190, 198, 207);
  text-decoration: line-through rgb(190, 198, 207);
  text-decoration-color: rgb(190, 198, 207);
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
  margin-left: -26.4px;
  width: 17.5938px;
}

body li.task-list-item[data-task='-'] {
  color: rgb(93, 109, 126);
  text-decoration: line-through 1px rgb(240, 48, 99);
  text-decoration-color: rgb(240, 48, 99);
}`,
    search: `body .search > .search-button {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
  border-top-color: rgb(53, 57, 62);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(51, 53, 71);
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(39, 40, 53);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(77, 140, 230, 0.1);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(123, 137, 207);
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
  color: rgb(77, 162, 248);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 198, 60);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(240, 48, 99);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(137, 94, 247);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(53, 57, 62);
  border-left-color: rgb(53, 57, 62);
  border-right-color: rgb(53, 57, 62);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

body ::-webkit-scrollbar-corner {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
}

body ::-webkit-scrollbar-track {
  background: rgb(51, 53, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 53, 71);
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
  border-bottom-color: rgb(244, 244, 242);
  border-left-color: rgb(244, 244, 242);
  border-right-color: rgb(244, 244, 242);
  border-top-color: rgb(244, 244, 242);
  color: rgb(244, 244, 242);
}`,
    footer: `body footer {
  background-color: rgb(39, 40, 53);
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
  border-bottom-color: rgb(244, 244, 242);
  border-left-color: rgb(244, 244, 242);
  border-right-color: rgb(244, 244, 242);
  border-top-color: rgb(244, 244, 242);
  color: rgb(244, 244, 242);
}

body .darkmode svg {
  color: rgb(244, 244, 242);
  stroke: rgb(244, 244, 242);
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
  background-color: rgb(39, 40, 53);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(190, 198, 207);
  border-left-color: rgb(190, 198, 207);
  border-right-color: rgb(190, 198, 207);
  border-top-color: rgb(190, 198, 207);
  color: rgb(190, 198, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(29, 28, 57);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
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
  --background-modifier-form-field: #f4f4f2;
  --background-modifier-form-field-hover: #f4f4f2;
  --background-modifier-hover: #e2e5e9;
  --background-modifier-success: #0cb54f;
  --background-modifier-success-rgb: 12, 181, 79;
  --background-primary: #f4f4f2;
  --background-primary-alt: #f6f7f8;
  --background-secondary: #e8e8e8;
  --base: #4da2f8;
  --base-d: 13%;
  --base-h: 212;
  --base-l: 97%;
  --base-s: 15%;
  --bases-cards-background: #f4f4f2;
  --bases-cards-cover-background: #f6f7f8;
  --bases-cards-shadow: 0 0 0 1px #ebedf0;
  --bases-embed-border-color: #ebedf0;
  --bases-group-heading-property-color: rgb(85, 94, 104);
  --bases-table-border-color: #494e6a;
  --bases-table-cell-background-active: #f4f4f2;
  --bases-table-cell-background-disabled: #f6f7f8;
  --bases-table-cell-background-selected: rgba(76, 140, 230, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(90, 149, 231);
  --bases-table-group-background: #f6f7f8;
  --bases-table-header-background: #f4f4f2;
  --bases-table-header-background-hover: #e2e5e9;
  --bases-table-header-color: rgb(85, 94, 104);
  --bases-table-summary-background: #f4f4f2;
  --bases-table-summary-background-hover: #e2e5e9;
  --blockquote-border-color: rgb(90, 149, 231);
  --blue: #4da2f8;
  --blur-background: color-mix(in srgb, #f4f4f2 65%, transparent) linear-gradient(#f4f4f2, color-mix(in srgb, #f4f4f2 65%, transparent));
  --bodyFont: var(--font-text);
  --brown: #ca6419;
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-success: 12, 181, 79;
  --callout-title-size: 1.2rem;
  --canvas-background: #f4f4f2;
  --canvas-card-label-color: rgb(162, 170, 179);
  --canvas-color-1: 228, 55, 75;
  --canvas-color-4: 12, 181, 79;
  --canvas-dot-pattern: #ebedf0;
  --checkbox-border-color: rgb(162, 170, 179);
  --checkbox-border-color-hover: rgb(85, 94, 104);
  --checkbox-color: rgb(90, 149, 231);
  --checkbox-color-hover: #4da2f8;
  --checkbox-marker-color: #f4f4f2;
  --checkbox-radius: 30%;
  --checkbox-size: 1.1rem;
  --checklist-done-color: rgb(85, 94, 104);
  --code-background: #e8e8e8;
  --code-border-color: #ebedf0;
  --code-bracket-background: #e2e5e9;
  --code-comment: #7b89cf;
  --code-function: #79e3aa;
  --code-important: #f03063;
  --code-keyword: #895ef7;
  --code-operator: #1fcbdc;
  --code-property: #f03063;
  --code-punctuation: #79e3aa;
  --code-size: 1rem;
  --code-string: #79e3aa;
  --code-tag: #f03063;
  --code-value: #ff7641;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(162, 170, 179);
  --collapse-icon-color-collapsed: rgb(76, 140, 230);
  --color-accent: rgb(76, 140, 230);
  --color-accent-1: rgb(90, 149, 231);
  --color-accent-2: rgb(99, 155, 233);
  --color-accent-hsl: 215, 75%, 60%;
  --color-base-00: #f4f4f2;
  --color-base-10: #f6f7f8;
  --color-base-20: #e8e8e8;
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
  --d1: #333547;
  --d2: #272835;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --divider-color: #ebedf0;
  --divider-color-hover: rgb(90, 149, 231);
  --dropdown-background: #f4f4f2;
  --dropdown-background-hover: #f6f7f8;
  --em-color: #1fcbdc;
  --embed-block-shadow-hover: 0 0 0 1px #ebedf0, inset 0 0 0 1px #ebedf0;
  --embed-border-start: 2px solid rgb(90, 149, 231);
  --file-header-background: #f4f4f2;
  --file-header-background-focused: #f4f4f2;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 1rem;
  --flair-background: #f4f4f2;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
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
  --green: #79e3aa;
  --h1-color: #222222;
  --h1-size: 2rem;
  --h2-color: #222222;
  --h2-size: 1.8rem;
  --h3-color: #4da2f8;
  --h3-size: 1.6rem;
  --h4-color: #ffc63c;
  --h4-size: 1.4rem;
  --h5-color: #f03063;
  --h5-size: 1.2rem;
  --h6-color: #895ef7;
  --h6-size: 1rem;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(162, 170, 179);
  --highlight: var(--background-modifier-hover);
  --hr-color: #494e6a;
  --hr-thickness: 0.0955rem;
  --icon-color: #333547;
  --icon-color-active: #272835;
  --icon-color-focused: #333547;
  --icon-color-hover: #272835;
  --indigo: #6a84ed;
  --inline-title-color: #222222;
  --inline-title-line-height: 4rem;
  --inline-title-size: 2rem;
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
  --interactive-normal: #f4f4f2;
  --l1: #f4f4f2;
  --l2: #e8e8e8;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(76, 140, 230);
  --link-color-hover: rgb(32, 112, 223);
  --link-external-color: #79e3aa;
  --link-external-color-hover: rgb(76, 230, 128);
  --link-unresolved-color: rgb(76, 140, 230);
  --link-unresolved-decoration-color: rgba(76, 140, 230, 0.3);
  --list-marker-color: #7b89cf;
  --list-marker-color-collapsed: rgb(76, 140, 230);
  --list-marker-color-hover: rgb(85, 94, 104);
  --menu-background: #e8e8e8;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-border-color: #ebedf0;
  --metadata-divider-color: #ebedf0;
  --metadata-input-background-active: #e2e5e9;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-background-active: #e2e5e9;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(85, 94, 104);
  --metadata-label-text-color-hover: rgb(85, 94, 104);
  --metadata-property-background-active: #e2e5e9;
  --modal-background: #f4f4f2;
  --modal-radius: 1rem;
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
  --orange: #ff7641;
  --pdf-background: #f4f4f2;
  --pdf-page-background: #f4f4f2;
  --pdf-sidebar-background: #f4f4f2;
  --pill-border-color: #ebedf0;
  --pill-color: rgb(85, 94, 104);
  --pill-color-remove: rgb(162, 170, 179);
  --pill-color-remove-hover: rgb(76, 140, 230);
  --pink: #ff22b1;
  --pink-light: #ff82b2;
  --prompt-background: #f4f4f2;
  --prompt-border-color: #7b89cf;
  --purple: #895ef7;
  --quotes-color: #222222;
  --raised-background: color-mix(in srgb, #f4f4f2 65%, transparent) linear-gradient(#f4f4f2, color-mix(in srgb, #f4f4f2 65%, transparent));
  --red: #f03063;
  --ribbon-background: #e8e8e8;
  --ribbon-background-collapsed: #f4f4f2;
  --search-clear-button-color: rgb(85, 94, 104);
  --search-icon-color: rgb(85, 94, 104);
  --search-result-background: #f4f4f2;
  --secondary: var(--text-accent);
  --setting-items-background: #f6f7f8;
  --setting-items-border-color: #ebedf0;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --slate: #1d1c39;
  --slate-60: #494e6a;
  --slate-blue: #7b89cf;
  --slider-track-background: #ebedf0;
  --status-bar-background: #e8e8e8;
  --status-bar-border-color: #ebedf0;
  --status-bar-text-color: rgb(85, 94, 104);
  --strong-color: #ff82b2;
  --suggestion-background: #f4f4f2;
  --sync-avatar-color-1: #e4374b;
  --sync-avatar-color-2: #d96c00;
  --sync-avatar-color-3: #bd8e37;
  --sync-avatar-color-4: #0cb54f;
  --sync-avatar-color-5: #2db7b5;
  --sync-avatar-color-7: #876be0;
  --sync-avatar-color-8: #c32b74;
  --tab-background-active: #f4f4f2;
  --tab-container-background: #e8e8e8;
  --tab-outline-color: #ebedf0;
  --tab-switcher-background: #e8e8e8;
  --tab-switcher-menubar-background: linear-gradient(to top, #e8e8e8, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 140, 230);
  --tab-text-color: rgb(162, 170, 179);
  --tab-text-color-active: rgb(85, 94, 104);
  --tab-text-color-focused: rgb(85, 94, 104);
  --tab-text-color-focused-active: rgb(85, 94, 104);
  --tab-text-color-focused-highlighted: rgb(76, 140, 230);
  --table-add-button-border-color: #ebedf0;
  --table-border-color: #494e6a;
  --table-drag-handle-background-active: rgb(90, 149, 231);
  --table-drag-handle-color: rgb(162, 170, 179);
  --table-header-border-color: #494e6a;
  --table-header-color: #7b89cf;
  --table-header-weight: 900;
  --table-selection: rgba(76, 140, 230, 0.1);
  --table-selection-border-color: rgb(90, 149, 231);
  --table-text-color: #222222;
  --tag-background: rgba(76, 140, 230, 0.1);
  --tag-background-hover: rgba(76, 140, 230, 0.2);
  --tag-border-color: rgba(76, 140, 230, 0.15);
  --tag-border-color-hover: rgba(76, 140, 230, 0.15);
  --tag-color: #7b89cf;
  --tag-color-hover: rgb(76, 140, 230);
  --tag-size: 1rem;
  --teal: #1fcbdc;
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
  --titlebar-background: #e8e8e8;
  --titlebar-background-focused: #e8e8e8;
  --titlebar-border-color: #ebedf0;
  --titlebar-text-color: rgb(85, 94, 104);
  --white: #f8fafc;
  --x: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", monospace;
  --y: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
    sans-serif;
  --yellow: #ffc63c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(232, 232, 232);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(244, 244, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(232, 232, 232);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(235, 237, 240);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(232, 232, 232);
  border-left-color: rgb(235, 237, 240);
}

body div#quartz-root {
  background-color: rgb(244, 244, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 130, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 130, 178) none 0px;
  text-decoration: rgb(255, 130, 178);
  text-decoration-color: rgb(255, 130, 178);
}

body .page article p > em, em {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
}

body .page article p > i, i {
  color: rgb(31, 203, 220);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 203, 220) none 0px;
  text-decoration: rgb(31, 203, 220);
  text-decoration-color: rgb(31, 203, 220);
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
  color: rgb(121, 227, 170);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 227, 170) none 0px;
  text-decoration: underline rgb(121, 227, 170);
  text-decoration-color: rgb(121, 227, 170);
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
    lists: `body ol.overflow {
  background-color: rgb(244, 244, 242);
}

body ul.overflow {
  background-color: rgb(244, 244, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(162, 170, 179);
  text-decoration: rgb(162, 170, 179);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 201.656px;
}

body td {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
}

body th {
  border-bottom-color: rgb(73, 78, 106);
  border-left-color: rgb(73, 78, 106);
  border-right-color: rgb(73, 78, 106);
  border-top-color: rgb(73, 78, 106);
  color: rgb(123, 137, 207);
  font-weight: 900;
}`,
    code: `body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body pre > code > [data-line] {
  border-left-color: rgb(121, 227, 170);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(121, 227, 170);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(121, 227, 170);
  border-left-color: rgb(121, 227, 170);
  border-right-color: rgb(121, 227, 170);
  border-top-color: rgb(121, 227, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(232, 232, 232);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body pre:has(> code) {
  background-color: rgb(232, 232, 232);
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
  color: rgb(85, 94, 104);
  text-decoration: line-through rgb(85, 94, 104);
  text-decoration-color: rgb(85, 94, 104);
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
  margin-left: -26.4px;
  width: 17.5938px;
}

body li.task-list-item[data-task='-'] {
  color: rgb(162, 170, 179);
  text-decoration: line-through 1px rgb(240, 48, 99);
  text-decoration-color: rgb(240, 48, 99);
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
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(244, 244, 242);
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(123, 137, 207);
  border-left-color: rgb(123, 137, 207);
  border-right-color: rgb(123, 137, 207);
  border-top-color: rgb(123, 137, 207);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(232, 232, 232);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(226, 229, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(77, 140, 230, 0.1);
  border-bottom-color: rgba(77, 140, 230, 0.15);
  border-left-color: rgba(77, 140, 230, 0.15);
  border-right-color: rgba(77, 140, 230, 0.15);
  border-top-color: rgba(77, 140, 230, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(123, 137, 207);
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
  color: rgb(77, 162, 248);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 198, 60);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(240, 48, 99);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(137, 94, 247);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

body ::-webkit-scrollbar-corner {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
}

body ::-webkit-scrollbar-track {
  background: rgb(244, 244, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 242);
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
  border-bottom-color: rgb(51, 53, 71);
  border-left-color: rgb(51, 53, 71);
  border-right-color: rgb(51, 53, 71);
  border-top-color: rgb(51, 53, 71);
  color: rgb(51, 53, 71);
}`,
    footer: `body footer {
  background-color: rgb(232, 232, 232);
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
  border-bottom-color: rgb(51, 53, 71);
  border-left-color: rgb(51, 53, 71);
  border-right-color: rgb(51, 53, 71);
  border-top-color: rgb(51, 53, 71);
  color: rgb(51, 53, 71);
}

body .darkmode svg {
  color: rgb(51, 53, 71);
  stroke: rgb(51, 53, 71);
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
  background-color: rgb(232, 232, 232);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  background-color: rgb(38, 40, 53);
  border-bottom-color: rgb(85, 94, 104);
  border-left-color: rgb(85, 94, 104);
  border-right-color: rgb(85, 94, 104);
  border-top-color: rgb(85, 94, 104);
  color: rgb(85, 94, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(232, 232, 232);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}`,
  },
};
