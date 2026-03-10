import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "red-shadow",
    modes: ["dark"],
    variations: [],
    fonts: ["fira-code", "montserrat"],
  },
  dark: {
    base: `:root:root {
  --CG-line-width: 40rem;
  --accent-h: 0;
  --accent-l: 42%;
  --accent-s: 68%;
  --background-modifier-active-hover: rgba(180, 34, 34, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --bases-cards-background: #0b090a;
  --bases-cards-cover-background: #121212;
  --bases-cards-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --bases-embed-border-color: rgba(247, 14, 14, 0.05);
  --bases-table-border-color: rgba(247, 14, 14, 0.15);
  --bases-table-cell-background-active: #0b090a;
  --bases-table-cell-background-disabled: #121212;
  --bases-table-cell-background-selected: rgba(180, 34, 34, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(247, 14, 14, 0.5);
  --bases-table-group-background: #121212;
  --bases-table-header-background: #0b090a;
  --bases-table-summary-background: #0b090a;
  --bg-accent-25: rgba(247, 14, 14, 0.25);
  --bg-accent-55: rgba(247, 14, 14, 0.55);
  --bg-sub-accent-55: rgba(244, 86, 86, 0.55);
  --blockquote-border: #fb4a4a;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --body-font-weight: 400;
  --bodyFont: var(--font-interface);
  --canvas-background: #0b090a;
  --canvas-card-label-color: #bebebe;
  --caret-color: #e0e0e0;
  --checkbox: rgba(247, 14, 14, 0.7);
  --checkbox-border-color: #bebebe;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-comment: #bebebe;
  --code-mono-font: 'Fira Code', 'Operator Mono', 'JetBrains Mono', 'Source Code Pro', 'OperatorMonoSSmLig-Book', monospace;
  --code-normal: #e0e0e0;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: rgb(180, 34, 34);
  --color-accent-1: rgb(207, 38, 46);
  --color-accent-2: rgb(221, 54, 68);
  --color-accent-hsl: 0, 68%, 42%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;
  --default-font-size: 16px;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --editor-border-color: #141010;
  --embed-block-shadow-hover: 0 0 0 1px rgba(247, 14, 14, 0.05), inset 0 0 0 1px rgba(247, 14, 14, 0.05);
  --embed-border-start: 2px solid rgba(247, 14, 14, 0.5);
  --file-header-background: #0b090a;
  --file-header-background-focused: #0b090a;
  --file-header-font: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 40rem;
  --flair-color: #e0e0e0;
  --font-family-editor: 'Oswald';
  --font-family-preview: 'Oswald';
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgba(247, 14, 14, 0.05);
  --footnote-id-color-no-occurrences: #bebebe;
  --graph-node-focused: #b22222;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --gray: var(--text-faint);
  --headerFont: var(--font-interface);
  --heading-formatting: #bebebe;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(247, 14, 14, 0.05);
  --icon-color-active: #b22222;
  --icon-color-focused: #e0e0e0;
  --input-date-separator: #bebebe;
  --input-placeholder-color: #bebebe;
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-accent-rgb: #fb3d3d;
  --interactive-before: #655e5e;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #b22222;
  --link-color-hover: rgb(221, 54, 68);
  --link-external-color: #b22222;
  --link-external-color-hover: rgb(221, 54, 68);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: rgba(180, 34, 34, 0.3);
  --list-marker-color: #bebebe;
  --list-marker-color-collapsed: #b22222;
  --menu-background: #121212;
  --metadata-border-color: rgba(247, 14, 14, 0.05);
  --metadata-divider-color: rgba(247, 14, 14, 0.05);
  --metadata-input-font: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #e0e0e0;
  --metadata-label-font: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #0b090a;
  --nav-collapse-icon-color: #bebebe;
  --nav-collapse-icon-color-collapsed: #bebebe;
  --nav-heading-color: #e0e0e0;
  --nav-heading-color-collapsed: #bebebe;
  --nav-heading-color-hover: #e0e0e0;
  --nav-item-background-selected: rgba(180, 34, 34, 0.15);
  --nav-item-color-active: #e0e0e0;
  --nav-item-color-highlighted: #b22222;
  --nav-item-color-hover: #e0e0e0;
  --nav-item-color-selected: #e0e0e0;
  --nav-tag-color: #bebebe;
  --newoutlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --outlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='15 -3 69 106'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z' stroke='%23000000' stroke-width='4' fill='none'/%3E%3C/svg%3E");
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pill-border-color: rgba(247, 14, 14, 0.05);
  --pill-color-hover: #e0e0e0;
  --pill-color-remove: #bebebe;
  --pill-color-remove-hover: #b22222;
  --prompt-background: #0b090a;
  --ribbon-background: #121212;
  --ribbon-background-collapsed: #0b090a;
  --search-result-background: #0b090a;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #e0e0e0;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --slider-track-background: rgba(247, 14, 14, 0.05);
  --status-bar-background: #121212;
  --status-bar-border-color: rgba(247, 14, 14, 0.05);
  --suggestion-background: #0b090a;
  --tab-background-active: #0b090a;
  --tab-container-background: #121212;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(180, 34, 34);
  --tab-text-color: #bebebe;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-color: #e0e0e0;
  --table-selection: rgba(180, 34, 34, 0.1);
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: rgba(180, 34, 34, 0.2);
  --tag-border-color: rgba(180, 34, 34, 0.15);
  --tag-border-color-hover: rgba(180, 34, 34, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-font-family: 'Fira Sans', 'Operator Mono', 'OperatorMonoSSmLig-Book', 'Montserrat', 'Glow Sans SC', 'PingFang TC', '微软雅黑', 'STXihei', '华文细黑', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  --tertiary: var(--text-accent-hover);
  --test-color: rgb(247, 122, 122);
  --text-a: #fb6b6b;
  --text-a-hover: #fb6b6b;
  --text-accent: #b22222;
  --text-accent-hover: rgb(221, 54, 68);
  --text-border: #1b1b1b;
  --text-dim: #8b0000;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-link: #b4b4b4;
  --text-mark: #922626;
  --text-normal: #e0e0e0;
  --text-selection: rgba(180, 34, 34, 0.33);
  --text-sub-accent: #f45656;
  --text-title-h1: #b22222;
  --text-title-h2: #e5383b;
  --text-title-h3: #e5383b;
  --text-title-h4: #e5383b;
  --text-title-h5: #e5383b;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #121212;
  --titlebar-background-focused: #121212;
  --titlebar-border-color: rgba(247, 14, 14, 0.05);
  --titlebar-text-color-focused: #e0e0e0;
  --vault-profile-color: #e0e0e0;
  --vault-profile-color-hover: #e0e0e0;
  --win-maximize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4.5 3c-.82843 0-1.5.67157-1.5 1.5v7c0 .8284.67157 1.5 1.5 1.5h7c.8284 0 1.5-.6716 1.5-1.5v-7c0-.82843-.6716-1.5-1.5-1.5zm0 1h7c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5h-7c-.27614 0-.5-.2239-.5-.5v-7c0-.27614.22386-.5.5-.5z' fill='%23212121'/%3E%3C/svg%3E");
  --win-minimize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212121'%3E%3Cpath d='m5.08496 4c.20592-.5826.76154-1 1.41465-1h3.5c1.65689 0 2.99999 1.34315 2.99999 3v3.5c0 .6531-.4174 1.2087-1 1.4146v-4.9146c0-1.10457-.8954-2-1.99999-2z'/%3E%3Cpath d='m4.5 5h5c.8284 0 1.5.67157 1.5 1.5v5c0 .8284-.6716 1.5-1.5 1.5h-5c-.82843 0-1.5-.6716-1.5-1.5v-5c0-.82843.67157-1.5 1.5-1.5zm0 1c-.27614 0-.5.22386-.5.5v5c0 .2761.22386.5.5.5h5c.27614 0 .5-.2239.5-.5v-5c0-.27614-.22386-.5-.5-.5z'/%3E%3C/g%3E%3C/svg%3E");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 18, 18);
  color: rgb(224, 224, 224);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(11, 9, 10);
  color: rgb(224, 224, 224);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(18, 18, 18);
  color: rgb(224, 224, 224);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(247, 14, 14, 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 18, 18);
  border-left-color: rgba(247, 14, 14, 0.05);
  color: rgb(224, 224, 224);
}

body div#quartz-root {
  background-color: rgb(11, 9, 10);
  color: rgb(224, 224, 224);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(186, 24, 27);
  color: rgb(224, 224, 224);
  font-weight: 700;
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .page article p > em, em {
  color: rgb(252, 141, 141);
  font-family: OperatorMonoSSmLig-Book, Rubik, Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(252, 141, 141) none 0px;
  text-decoration: rgb(252, 141, 141);
  text-decoration-color: rgb(252, 141, 141);
}

body .page article p > i, i {
  color: rgb(252, 141, 141);
  font-family: OperatorMonoSSmLig-Book, Rubik, Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(252, 141, 141) none 0px;
  text-decoration: rgb(252, 141, 141);
  text-decoration-color: rgb(252, 141, 141);
}

body .page article p > strong, strong {
  background-color: rgb(186, 24, 27);
  color: rgb(224, 224, 224);
  font-weight: 700;
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .text-highlight {
  background-color: rgba(244, 86, 86, 0.25);
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body del {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: line-through rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body p {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(178, 34, 34);
  outline: rgb(178, 34, 34) none 0px;
  text-decoration: rgb(178, 34, 34);
  text-decoration-color: rgb(178, 34, 34);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(178, 34, 34);
  outline: rgb(178, 34, 34) none 0px;
  text-decoration: rgb(178, 34, 34);
  text-decoration-color: rgb(178, 34, 34);
}

body a.internal.broken {
  color: rgb(178, 34, 34);
  outline: rgb(178, 34, 34) none 0px;
  text-decoration: rgb(178, 34, 34);
  text-decoration-color: rgb(178, 34, 34);
}`,
    lists: `body dd {
  color: rgb(224, 224, 224);
}

body dt {
  color: rgb(224, 224, 224);
}

body ol > li {
  color: rgb(224, 224, 224);
}

body ol.overflow {
  background-color: rgb(11, 9, 10);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body ul > li {
  color: rgb(224, 224, 224);
}

body ul.overflow {
  background-color: rgb(11, 9, 10);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
}

body blockquote {
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body table {
  color: rgb(224, 224, 224);
}

body td {
  border-bottom-color: rgba(247, 14, 14, 0.15);
  border-left-color: rgba(247, 14, 14, 0.15);
  border-right-color: rgba(247, 14, 14, 0.15);
  border-top-color: rgba(247, 14, 14, 0.15);
  color: rgb(224, 224, 224);
}

body th {
  border-bottom-color: rgba(247, 14, 14, 0.15);
  border-left-color: rgba(247, 14, 14, 0.15);
  border-right-color: rgba(247, 14, 14, 0.15);
  border-top-color: rgba(247, 14, 14, 0.15);
  color: rgb(224, 224, 224);
}`,
    code: `body code {
  border-bottom-color: rgba(255, 0, 0, 0.9);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgba(255, 0, 0, 0.9);
  border-right-color: rgba(255, 0, 0, 0.9);
  border-top-color: rgba(255, 0, 0, 0.9);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  color: rgba(255, 0, 0, 0.9);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
  color: rgb(204, 204, 204);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 184, 108);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 184, 108);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 184, 108);
  border-left-color: rgb(255, 184, 108);
  border-right-color: rgb(255, 184, 108);
  border-top-color: rgb(255, 184, 108);
}

body pre > code, pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}

body pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body figcaption {
  color: rgb(224, 224, 224);
}

body figure {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body img {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body video {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    embeds: `body .file-embed {
  background-color: rgb(18, 18, 18);
}

body .footnotes {
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgba(247, 14, 14, 0.5);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgba(247, 14, 14, 0.5);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  margin-left: 0px;
  margin-right: 0px;
  width: 20px;
}

body input[type=checkbox]:checked:after {
  background-color: rgba(0, 0, 0, 0);
  content: "";
  display: block;
  position: absolute;
  width: 4px;
}

body li.task-list-item[data-task='!'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='*'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='-'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='/'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='>'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='?'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='I'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='S'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='b'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='c'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='d'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='f'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='i'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='k'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='l'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='p'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='u'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

body li.task-list-item[data-task='w'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through rgba(247, 14, 14, 0.7);
  text-decoration-color: rgba(247, 14, 14, 0.7);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(11, 9, 10);
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 224, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 224, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(18, 18, 18);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(247, 14, 14, 0.15);
  border-bottom-color: rgba(180, 34, 34, 0.15);
  border-left-color: rgba(180, 34, 34, 0.15);
  border-right-color: rgba(180, 34, 34, 0.15);
  border-top-color: rgba(180, 34, 34, 0.15);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(178, 34, 34);
}

body h1 {
  color: rgb(178, 34, 34);
}

body h2 {
  color: rgb(229, 56, 59);
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 224, 224);
}

body h3 {
  color: rgb(229, 56, 59);
}

body h4 {
  color: rgb(229, 56, 59);
}

body h5 {
  color: rgb(229, 56, 59);
}

body h6 {
  color: rgb(229, 56, 59);
}

body hr {
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

body ::-webkit-scrollbar-corner {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

body ::-webkit-scrollbar-track {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(247, 14, 14, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(247, 14, 14, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(247, 14, 14, 0.25);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(178, 34, 34);
}`,
    footer: `body footer {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(20, 16, 16);
  border-left-color: rgb(20, 16, 16);
  border-right-color: rgb(20, 16, 16);
  border-top-color: rgb(20, 16, 16);
  color: rgb(190, 190, 190);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body li.section-li > .section .meta {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(190, 190, 190);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body .metadata {
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}

body .navigation-progress {
  background-color: rgb(18, 18, 18);
}

body .page-header h2.page-title {
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(224, 224, 224);
  text-decoration: underline dotted rgb(224, 224, 224);
}

body details {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body input[type=text] {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body progress {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body sub {
  color: rgb(224, 224, 224);
}

body summary {
  color: rgb(224, 224, 224);
}

body sup {
  color: rgb(224, 224, 224);
}`,
  },
  light: {},
};
