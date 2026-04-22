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
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 9, 10);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 9, 10);
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
  background-color: rgb(102, 102, 102);
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
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(224, 224, 224);
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
