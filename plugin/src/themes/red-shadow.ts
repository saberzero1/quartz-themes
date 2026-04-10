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
  --CG-line-width: 40rem !important;
  --accent-h: 0 !important;
  --accent-l: 42% !important;
  --accent-s: 68% !important;
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1) !important;
  --background-modifier-border: rgba(247, 14, 14, 0.05) !important;
  --background-primary: #0b090a !important;
  --background-primary-alt: #121212 !important;
  --background-secondary: #121212 !important;
  --background-secondary-alt: #121212 !important;
  --bases-cards-background: #0b090a !important;
  --bases-cards-cover-background: #121212 !important;
  --bases-cards-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05) !important;
  --bases-embed-border-color: rgba(247, 14, 14, 0.05) !important;
  --bases-table-border-color: rgba(247, 14, 14, 0.15) !important;
  --bases-table-cell-background-active: #0b090a !important;
  --bases-table-cell-background-disabled: #121212 !important;
  --bases-table-cell-background-selected: hsla(0, 68%, 42%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(247, 14, 14, 0.5) !important;
  --bases-table-group-background: #121212 !important;
  --bases-table-header-background: #0b090a !important;
  --bases-table-summary-background: #0b090a !important;
  --bg-accent-25: rgba(247, 14, 14, 0.25) !important;
  --bg-accent-55: rgba(247, 14, 14, 0.55) !important;
  --bg-sub-accent-55: rgba(244, 86, 86, 0.55) !important;
  --blockquote-border: #fb4a4a !important;
  --blockquote-border-color: rgba(247, 14, 14, 0.5) !important;
  --body-font-weight: 400 !important;
  --bodyFont: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #0b090a !important;
  --canvas-card-label-color: #bebebe !important;
  --caret-color: #e0e0e0 !important;
  --checkbox: rgba(247, 14, 14, 0.7) !important;
  --checkbox-border-color: #bebebe !important;
  --checkbox-color: rgba(247, 14, 14, 0.5) !important;
  --checkbox-color-hover: rgba(247, 14, 14, 0.8) !important;
  --checkbox-marker-color: #0b090a !important;
  --code-background: #121212 !important;
  --code-border-color: rgba(247, 14, 14, 0.05) !important;
  --code-comment: #bebebe !important;
  --code-mono-font: 'Fira Code', 'Operator Mono', 'JetBrains Mono', 'Source Code Pro', 'OperatorMonoSSmLig-Book', monospace !important;
  --code-normal: #e0e0e0 !important;
  --codeFont: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #bebebe !important;
  --collapse-icon-color-collapsed: #b22222 !important;
  --color-accent: hsl(0, 68%, 42%) !important;
  --color-accent-1: hsl(-3, 69.36%, 48.3%) !important;
  --color-accent-2: hsl(-5, 71.4%, 54.18%) !important;
  --color-accent-hsl: 0, 68%, 42% !important;
  --dark: #e0e0e0 !important;
  --darkgray: #e0e0e0 !important;
  --default-font: 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif !important;
  --default-font-size: 16px !important;
  --divider-color: rgba(247, 14, 14, 0.05) !important;
  --divider-color-hover: rgba(247, 14, 14, 0.5) !important;
  --editor-border-color: #141010 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(247, 14, 14, 0.05), inset 0 0 0 1px rgba(247, 14, 14, 0.05) !important;
  --embed-border-start: 2px solid rgba(247, 14, 14, 0.5) !important;
  --file-header-background: #0b090a !important;
  --file-header-background-focused: #0b090a !important;
  --file-header-font: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 40rem !important;
  --flair-color: #e0e0e0 !important;
  --font-family-editor: 'Oswald' !important;
  --font-family-preview: 'Oswald' !important;
  --font-interface: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgba(247, 14, 14, 0.05) !important;
  --footnote-id-color-no-occurrences: #bebebe !important;
  --graph-node-focused: #b22222 !important;
  --graph-node-unresolved: #bebebe !important;
  --graph-text: #e0e0e0 !important;
  --gray: #bebebe !important;
  --headerFont: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #bebebe !important;
  --highlight: rgba(244, 86, 86, 0.25) !important;
  --hr-color: rgba(247, 14, 14, 0.05) !important;
  --icon-color-active: #b22222 !important;
  --icon-color-focused: #e0e0e0 !important;
  --input-date-separator: #bebebe !important;
  --input-placeholder-color: #bebebe !important;
  --interactive-accent: rgba(247, 14, 14, 0.5) !important;
  --interactive-accent-hover: rgba(247, 14, 14, 0.8) !important;
  --interactive-accent-hsl: 0, 68%, 42% !important;
  --interactive-accent-rgb: #fb3d3d !important;
  --interactive-before: #655e5e !important;
  --light: #0b090a !important;
  --lightgray: #121212 !important;
  --link-color: #b22222 !important;
  --link-color-hover: hsl(-5, 71.4%, 54.18%) !important;
  --link-external-color: #b22222 !important;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%) !important;
  --link-unresolved-color: #b22222 !important;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3) !important;
  --list-marker-color: #bebebe !important;
  --list-marker-color-collapsed: #b22222 !important;
  --menu-background: #121212 !important;
  --metadata-border-color: rgba(247, 14, 14, 0.05) !important;
  --metadata-divider-color: rgba(247, 14, 14, 0.05) !important;
  --metadata-input-font: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #e0e0e0 !important;
  --metadata-label-font: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #0b090a !important;
  --nav-collapse-icon-color: #bebebe !important;
  --nav-collapse-icon-color-collapsed: #bebebe !important;
  --nav-heading-color: #e0e0e0 !important;
  --nav-heading-color-collapsed: #bebebe !important;
  --nav-heading-color-hover: #e0e0e0 !important;
  --nav-item-background-selected: hsla(0, 68%, 42%, 0.15) !important;
  --nav-item-color-active: #e0e0e0 !important;
  --nav-item-color-highlighted: #b22222 !important;
  --nav-item-color-hover: #e0e0e0 !important;
  --nav-item-color-selected: #e0e0e0 !important;
  --nav-tag-color: #bebebe !important;
  --newoutlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --outlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='15 -3 69 106'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z' stroke='%23000000' stroke-width='4' fill='none'/%3E%3C/svg%3E") !important;
  --pdf-background: #0b090a !important;
  --pdf-page-background: #0b090a !important;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05) !important;
  --pdf-sidebar-background: #0b090a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05) !important;
  --pill-border-color: rgba(247, 14, 14, 0.05) !important;
  --pill-color-hover: #e0e0e0 !important;
  --pill-color-remove: #bebebe !important;
  --pill-color-remove-hover: #b22222 !important;
  --prompt-background: #0b090a !important;
  --ribbon-background: #121212 !important;
  --ribbon-background-collapsed: #0b090a !important;
  --search-result-background: #0b090a !important;
  --secondary: #b22222 !important;
  --setting-group-heading-color: #e0e0e0 !important;
  --setting-items-background: #121212 !important;
  --setting-items-border-color: rgba(247, 14, 14, 0.05) !important;
  --slider-track-background: rgba(247, 14, 14, 0.05) !important;
  --status-bar-background: #121212 !important;
  --status-bar-border-color: rgba(247, 14, 14, 0.05) !important;
  --suggestion-background: #0b090a !important;
  --tab-background-active: #0b090a !important;
  --tab-container-background: #121212 !important;
  --tab-outline-color: rgba(247, 14, 14, 0.05) !important;
  --tab-switcher-background: #121212 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%) !important;
  --tab-text-color: #bebebe !important;
  --tab-text-color-focused-active-current: #e0e0e0 !important;
  --tab-text-color-focused-highlighted: #b22222 !important;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05) !important;
  --table-border-color: rgba(247, 14, 14, 0.15) !important;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5) !important;
  --table-drag-handle-color: #bebebe !important;
  --table-header-border-color: rgba(247, 14, 14, 0.15) !important;
  --table-header-color: #e0e0e0 !important;
  --table-selection: hsla(0, 68%, 42%, 0.1) !important;
  --table-selection-border-color: rgba(247, 14, 14, 0.5) !important;
  --tag-background: rgba(247, 14, 14, 0.15) !important;
  --tag-background-hover: hsla(0, 68%, 42%, 0.2) !important;
  --tag-border-color: hsla(0, 68%, 42%, 0.15) !important;
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15) !important;
  --tag-color: #b22222 !important;
  --tag-color-hover: #b22222 !important;
  --tag-font-family: 'Fira Sans', 'Operator Mono', 'OperatorMonoSSmLig-Book', 'Montserrat', 'Glow Sans SC', 'PingFang TC', '微软雅黑', 'STXihei', '华文细黑', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', Arial, sans-serif !important;
  --tertiary: hsl(-5, 71.4%, 54.18%) !important;
  --test-color: rgb(247, 122, 122) !important;
  --text-a: #fb6b6b !important;
  --text-a-hover: #fb6b6b !important;
  --text-accent: #b22222 !important;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%) !important;
  --text-border: #1b1b1b !important;
  --text-dim: #8b0000 !important;
  --text-faint: #bebebe !important;
  --text-highlight-bg: rgba(244, 86, 86, 0.25) !important;
  --text-link: #b4b4b4 !important;
  --text-mark: #922626 !important;
  --text-normal: #e0e0e0 !important;
  --text-selection: hsla(0, 68%, 42%, 0.33) !important;
  --text-sub-accent: #f45656 !important;
  --text-title-h1: #b22222 !important;
  --text-title-h2: #e5383b !important;
  --text-title-h3: #e5383b !important;
  --text-title-h4: #e5383b !important;
  --text-title-h5: #e5383b !important;
  --textHighlight: rgba(244, 86, 86, 0.25) !important;
  --titleFont: Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #121212 !important;
  --titlebar-background-focused: #121212 !important;
  --titlebar-border-color: rgba(247, 14, 14, 0.05) !important;
  --titlebar-text-color-focused: #e0e0e0 !important;
  --vault-profile-color: #e0e0e0 !important;
  --vault-profile-color-hover: #e0e0e0 !important;
  --win-maximize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4.5 3c-.82843 0-1.5.67157-1.5 1.5v7c0 .8284.67157 1.5 1.5 1.5h7c.8284 0 1.5-.6716 1.5-1.5v-7c0-.82843-.6716-1.5-1.5-1.5zm0 1h7c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5h-7c-.27614 0-.5-.2239-.5-.5v-7c0-.27614.22386-.5.5-.5z' fill='%23212121'/%3E%3C/svg%3E") !important;
  --win-minimize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212121'%3E%3Cpath d='m5.08496 4c.20592-.5826.76154-1 1.41465-1h3.5c1.65689 0 2.99999 1.34315 2.99999 3v3.5c0 .6531-.4174 1.2087-1 1.4146v-4.9146c0-1.10457-.8954-2-1.99999-2z'/%3E%3Cpath d='m4.5 5h5c.8284 0 1.5.67157 1.5 1.5v5c0 .8284-.6716 1.5-1.5 1.5h-5c-.82843 0-1.5-.6716-1.5-1.5v-5c0-.82843.67157-1.5 1.5-1.5zm0 1c-.27614 0-.5.22386-.5.5v5c0 .2761.22386.5.5.5h5c.27614 0 .5-.2239.5-.5v-5c0-.27614-.22386-.5-.5-.5z'/%3E%3C/g%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 18, 18);
  color: rgb(224, 224, 224);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(11, 9, 10);
  color: rgb(224, 224, 224);
}

html body .bases-table thead th {
  border-color: rgba(247, 14, 14, 0.15);
  color: rgb(224, 224, 224);
}

html body .canvas-node {
  border-color: rgb(224, 224, 224);
}

html body .canvas-node-content {
  color: rgb(224, 224, 224);
}

html body .canvas-node-file {
  color: rgb(224, 224, 224);
}

html body .canvas-node-group {
  border-color: rgb(224, 224, 224);
}

html body .canvas-sidebar {
  background-color: rgb(18, 18, 18);
  border-color: rgb(224, 224, 224);
}

html body .note-properties {
  border-color: rgba(247, 14, 14, 0.05);
}

html body .note-properties-tags {
  background-color: rgba(247, 14, 14, 0.15);
  color: rgb(178, 34, 34);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(18, 18, 18);
  color: rgb(224, 224, 224);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(247, 14, 14, 0.05);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 18, 18);
  border-left-color: rgba(247, 14, 14, 0.05);
  color: rgb(224, 224, 224);
}

html body div#quartz-root {
  background-color: rgb(11, 9, 10);
  color: rgb(224, 224, 224);
}`,
    typography: `html body .page article p > b, html b {
  background-color: rgb(186, 24, 27);
  color: rgb(224, 224, 224);
  font-weight: 700;
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body .page article p > em, html em {
  color: rgb(252, 141, 141);
  font-family: OperatorMonoSSmLig-Book, Rubik, Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(252, 141, 141) none 0px;
  text-decoration-color: rgb(252, 141, 141);
}

html body .page article p > i, html i {
  color: rgb(252, 141, 141);
  font-family: OperatorMonoSSmLig-Book, Rubik, Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(252, 141, 141) none 0px;
  text-decoration-color: rgb(252, 141, 141);
}

html body .page article p > strong, html strong {
  background-color: rgb(186, 24, 27);
  color: rgb(224, 224, 224);
  font-weight: 700;
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body .text-highlight {
  background-color: rgba(244, 86, 86, 0.25);
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body del {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body footer {
  opacity: 0.4;
}

html body h1.article-title {
  color: rgb(224, 224, 224);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(190, 190, 190);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(247, 14, 14, 0.5);
  border-color: rgba(247, 14, 14, 0.5);
}

html body p {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgb(178, 34, 34);
  outline: rgb(178, 34, 34) none 0px;
  text-decoration-color: rgb(178, 34, 34);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(178, 34, 34);
  outline: rgb(178, 34, 34) none 0px;
  text-decoration-color: rgb(178, 34, 34);
}

html body a.internal.broken {
  color: rgb(178, 34, 34);
  outline: rgb(178, 34, 34) none 0px;
  text-decoration-color: rgb(178, 34, 34);
}`,
    lists: `html body dd {
  color: rgb(224, 224, 224);
}

html body dt {
  color: rgb(224, 224, 224);
}

html body ol > li {
  color: rgb(224, 224, 224);
}

html body ol.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body ul > li {
  color: rgb(224, 224, 224);
}

html body ul.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(190, 190, 190);
}

html body blockquote {
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body table {
  color: rgb(224, 224, 224);
}

html body td {
  border-bottom-color: rgba(247, 14, 14, 0.15);
  border-left-color: rgba(247, 14, 14, 0.15);
  border-right-color: rgba(247, 14, 14, 0.15);
  border-top-color: rgba(247, 14, 14, 0.15);
  color: rgb(224, 224, 224);
}

html body th {
  border-bottom-color: rgba(247, 14, 14, 0.15);
  border-left-color: rgba(247, 14, 14, 0.15);
  border-right-color: rgba(247, 14, 14, 0.15);
  border-top-color: rgba(247, 14, 14, 0.15);
  color: rgb(224, 224, 224);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
  color: rgb(204, 204, 204);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 184, 108);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 184, 108);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 184, 108);
  border-left-color: rgb(255, 184, 108);
  border-right-color: rgb(255, 184, 108);
  border-top-color: rgb(255, 184, 108);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}

html body pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}`,
    images: `html body audio {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body figcaption {
  color: rgb(224, 224, 224);
}

html body figure {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body img {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body video {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(18, 18, 18);
}

html body .footnotes {
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgba(247, 14, 14, 0.5);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  margin-left: 0px;
  margin-right: 0px;
  width: 20px;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
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
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(11, 9, 10);
}

html body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(18, 18, 18);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(247, 14, 14, 0.15);
  border-bottom-color: rgba(180, 34, 34, 0.15);
  border-left-color: rgba(180, 34, 34, 0.15);
  border-right-color: rgba(180, 34, 34, 0.15);
  border-top-color: rgba(180, 34, 34, 0.15);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(178, 34, 34);
}

html body h1 {
  color: rgb(178, 34, 34);
}

html body h2 {
  color: rgb(229, 56, 59);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(224, 224, 224);
}

html body h3 {
  color: rgb(229, 56, 59);
}

html body h4 {
  color: rgb(229, 56, 59);
}

html body h5 {
  color: rgb(229, 56, 59);
}

html body h6 {
  color: rgb(229, 56, 59);
}

html body hr {
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}

html body ::-webkit-scrollbar-track {
  background: rgb(11, 9, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 9, 10);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(224, 224, 224);
}`,
    footer: `html body footer {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(20, 16, 16);
  border-left-color: rgb(20, 16, 16);
  border-right-color: rgb(20, 16, 16);
  border-top-color: rgb(20, 16, 16);
  color: rgb(190, 190, 190);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(190, 190, 190);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body li.section-li > .section .meta {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(190, 190, 190);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html body .metadata {
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-left-color: rgba(247, 14, 14, 0.05);
  border-right-color: rgba(247, 14, 14, 0.05);
  border-top-color: rgba(247, 14, 14, 0.05);
}

html body .navigation-progress {
  background-color: rgb(18, 18, 18);
}

html body .page-header h2.page-title {
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(224, 224, 224);
}

html body details {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body input[type=text] {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html body progress {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html body sub {
  color: rgb(224, 224, 224);
}

html body summary {
  color: rgb(224, 224, 224);
}

html body sup {
  color: rgb(224, 224, 224);
}

html body ul.tags > li {
  background-color: rgba(247, 14, 14, 0.15);
  border-bottom-color: rgba(180, 34, 34, 0.15);
  border-bottom-left-radius: 27.52px;
  border-bottom-right-radius: 27.52px;
  border-left-color: rgba(180, 34, 34, 0.15);
  border-right-color: rgba(180, 34, 34, 0.15);
  border-top-color: rgba(180, 34, 34, 0.15);
  border-top-left-radius: 27.52px;
  border-top-right-radius: 27.52px;
  color: rgb(178, 34, 34);
}`,
  },
  light: {},
};
