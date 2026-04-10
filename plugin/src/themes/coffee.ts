import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "coffee", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --CG-line-width: 50rem !important;
  --New-Obsidiantoggle: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='30' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --accent-h: 35 !important;
  --accent-l: 25% !important;
  --accent-s: 50% !important;
  --americano: #0F0A00 !important;
  --background-modifier-active-hover: hsla(35, 50%, 25%, 0.1) !important;
  --background-modifier-border: #504010 !important;
  --background-modifier-box-shadow: #504010 !important;
  --background-modifier-cover: #00000088 !important;
  --background-modifier-error: #FF3000 !important;
  --background-modifier-error-hover: #FF3000 !important;
  --background-modifier-form-field: #0F0A00 !important;
  --background-modifier-form-field-highlighted: #504010 !important;
  --background-modifier-form-field-hover: #0F0A00 !important;
  --background-modifier-success: #00FF55 !important;
  --background-primary: #0F0A00 !important;
  --background-primary-alt: #0F0B00 !important;
  --background-secondary: #1F1500 !important;
  --background-secondary-alt: #1F1500 !important;
  --bases-cards-background: #0F0A00 !important;
  --bases-cards-cover-background: #0F0B00 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #504010 !important;
  --bases-embed-border-color: #504010 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #E0D080 !important;
  --bases-table-border-color: #504010 !important;
  --bases-table-cell-background-active: #0F0A00 !important;
  --bases-table-cell-background-disabled: #0F0B00 !important;
  --bases-table-cell-background-selected: #553F00 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #AA7500 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #0F0B00 !important;
  --bases-table-header-background: #0F0A00 !important;
  --bases-table-header-color: #E0D080 !important;
  --bases-table-row-background-hover: #504010 !important;
  --bases-table-summary-background: #0F0A00 !important;
  --blockquote-border-color: #AA7500 !important;
  --blockquote-color: #DDAA00 !important;
  --blur-background: color-mix(in srgb, #906000 65%, transparent) linear-gradient(#906000, color-mix(in srgb, #906000 65%, transparent)) !important;
  --bodyFont: "Times New Roman" !important;
  --burnt-roast: #0F0B00 !important;
  --cafe-au-lait: #CCAA55 !important;
  --callout-radius: 0px;
  --canvas-background: #0F0A00 !important;
  --canvas-card-label-color: #B0A050 !important;
  --canvas-controls-radius: 0px !important;
  --cappucino: #885500 !important;
  --caramel: #AA7500 !important;
  --caret-color: #ECDFAA !important;
  --checkbox-border-color: #B0A050 !important;
  --checkbox-border-color-hover: #E0D080 !important;
  --checkbox-color: #AA7500 !important;
  --checkbox-color-hover: #553F00 !important;
  --checkbox-marker-color: #0F0A00 !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #E0D080 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #1F1500 !important;
  --code-border-color: #504010 !important;
  --code-comment: #B0A050 !important;
  --code-normal: #00FF55 !important;
  --code-punctuation: #E0D080 !important;
  --code-radius: 0px !important;
  --codeFont: "Cascadia Mono" !important;
  --collapse-icon-color: #B0A050 !important;
  --collapse-icon-color-collapsed: #B0A050 !important;
  --color-accent: hsl(35, 50%, 25%) !important;
  --color-accent-1: hsl(32, 51%, 28.75%) !important;
  --color-accent-2: hsl(30, 52.5%, 32.25%) !important;
  --color-accent-hsl: 35, 50%, 25% !important;
  --crema: #DDAA00 !important;
  --dark: #ECDFAA !important;
  --dark-beans: #1F1500 !important;
  --dark-green-beans: #005500 !important;
  --dark-roast: #603020 !important;
  --darkgray: #ECDFAA !important;
  --divider-color: #504010 !important;
  --divider-color-hover: #AA7500 !important;
  --drag-ghost-background: #AA7500 !important;
  --dropdown-background: #906000 !important;
  --dropdown-background-hover: #906000 !important;
  --embed-block-shadow-hover: 0 0 0 1px #504010, inset 0 0 0 1px #504010 !important;
  --embed-border-start: 2px solid #AA7500 !important;
  --expresso: #502000 !important;
  --file-header-background: #0F0A00 !important;
  --file-header-background-focused: #0F0A00 !important;
  --file-header-font: "Times New Roman" !important;
  --file-line-width: 50rem !important;
  --flair-background: #906000 !important;
  --flair-color: #ECDFAA !important;
  --font-default: "Times New Roman" !important;
  --font-interface: "Times New Roman" !important;
  --font-mermaid: "Times New Roman" !important;
  --font-monospace: "Cascadia Mono" !important;
  --font-monospace-default: "Cascadia Mono" !important;
  --font-print: Arial' !important;
  --font-size-default: 20px !important;
  --font-text: "Times New Roman" !important;
  --footnote-divider-color: #504010 !important;
  --footnote-id-color: #E0D080 !important;
  --footnote-id-color-no-occurrences: #B0A050 !important;
  --footnote-radius: 0px !important;
  --golden-brew: #906000 !important;
  --graph-node: #E0D080 !important;
  --graph-node-focused: #B0A050 !important;
  --graph-node-unresolved: #B0A050 !important;
  --graph-text: #ECDFAA !important;
  --gray: #E0D080 !important;
  --green-beans: #00FF55 !important;
  --h1-color: #B0A050 !important;
  --h2-color: #DDAA00 !important;
  --h3-color: #AA7500 !important;
  --h4-color: #AA7500 !important;
  --h5-color: #AA7500 !important;
  --h6-color: #AA7500 !important;
  --hazelnut: #B0A050 !important;
  --headerFont: "Times New Roman" !important;
  --heading-formatting: #B0A050 !important;
  --highlight: #553F00 !important;
  --hr-color: #906000 !important;
  --hr-text-color: #DDAA00 !important;
  --hr-text-offset: 0ch !important;
  --hr-thickness: 7px !important;
  --icon-color: #B0A050 !important;
  --icon-color-active: #B0A050 !important;
  --icon-color-focused: #ECDFAA !important;
  --icon-color-hover: #ECDFAA !important;
  --icon-opacity: 100% !important;
  --inline-title-color: #B0A050 !important;
  --input-date-separator: #B0A050 !important;
  --input-placeholder-color: #B0A050 !important;
  --interactive-accent: #AA7500 !important;
  --interactive-accent-hover: #553F00 !important;
  --interactive-accent-hsl: 35, 50%, 25% !important;
  --interactive-hover: #906000 !important;
  --interactive-normal: #906000 !important;
  --interactive-success: #00FF55 !important;
  --latte: #E0D080 !important;
  --light: #0F0A00 !important;
  --light-beans: #504010 !important;
  --lightgray: #1F1500 !important;
  --line-active: #ECDFAA !important;
  --link-color: #B0A050 !important;
  --link-color-hover: #DDAA00 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #005555 !important;
  --link-external-color-hover: #00FFFF !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #B0A050 !important;
  --link-unresolved-decoration-color: hsla(35, 50%, 25%, 0.3) !important;
  --link-unresolved-opacity: 50% !important;
  --list-marker-color: #B0A050 !important;
  --list-marker-color-collapsed: #B0A050 !important;
  --list-marker-color-hover: #E0D080 !important;
  --menu-background: #1F1500 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #504010 !important;
  --metadata-divider-color: #504010 !important;
  --metadata-input-font: "Times New Roman" !important;
  --metadata-input-text-color: #ECDFAA !important;
  --metadata-label-font: "Times New Roman" !important;
  --metadata-label-text-color: #E0D080 !important;
  --metadata-label-text-color-hover: #E0D080 !important;
  --milk-foam: #ECDFAA !important;
  --moccacino: #553F00 !important;
  --modal-background: #0F0A00 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #906000 !important;
  --nav-collapse-icon-color-collapsed: #DDAA00 !important;
  --nav-heading-color: #ECDFAA !important;
  --nav-heading-color-collapsed: #B0A050 !important;
  --nav-heading-color-collapsed-hover: #E0D080 !important;
  --nav-heading-color-hover: #ECDFAA !important;
  --nav-indetation-guide-color: #DDAA00 !important;
  --nav-item-background-active: #1F1500 !important;
  --nav-item-background-hover: #504010 !important;
  --nav-item-background-selected: #FF3000 !important;
  --nav-item-color: #B0A050 !important;
  --nav-item-color-active: #AA7500 !important;
  --nav-item-color-highlighted: #FF3000 !important;
  --nav-item-color-hover: #ECDFAA !important;
  --nav-item-color-selected: #AA7500 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #B0A050 !important;
  --nav-tag-color-active: #E0D080 !important;
  --nav-tag-color-hover: #E0D080 !important;
  --nav-tag-radius: 0px !important;
  --newoutlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --outlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='15 -3 69 106'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z' stroke='%23000000' stroke-width='4' fill='none'/%3E%3C/svg%3E") !important;
  --pdf-background: #0F0A00 !important;
  --pdf-page-background: #0F0A00 !important;
  --pdf-shadow: 0 0 0 1px #504010 !important;
  --pdf-sidebar-background: #0F0A00 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #504010 !important;
  --pill-border-color: #504010 !important;
  --pill-color: #E0D080 !important;
  --pill-color-hover: #ECDFAA !important;
  --pill-color-remove: #B0A050 !important;
  --pill-color-remove-hover: #B0A050 !important;
  --prompt-background: #0F0A00 !important;
  --prompt-border-color: #AA7500 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #906000 65%, transparent) linear-gradient(#906000, color-mix(in srgb, #906000 65%, transparent)) !important;
  --red-robusta-beans: #FF3000 !important;
  --ribbon-background: #1F1500 !important;
  --ribbon-background-collapsed: #0F0A00 !important;
  --scrollbar-active-thumb-bg: #AA7500 !important;
  --scrollbar-bg: #B0A050 !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: #504010 !important;
  --search-clear-button-color: #E0D080 !important;
  --search-icon-color: #E0D080 !important;
  --search-result-background: #0F0A00 !important;
  --secondary: #B0A050 !important;
  --setting-group-heading-color: #ECDFAA !important;
  --setting-items-background: #0F0B00 !important;
  --setting-items-border-color: #504010 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #504010 !important;
  --status-bar-background: #1F1500 !important;
  --status-bar-border-color: #504010 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #E0D080 !important;
  --suggestion-background: #0F0A00 !important;
  --tab-background-active: #0F0A00 !important;
  --tab-container-background: #0F0A00 !important;
  --tab-divider-color: #0F0A00 !important;
  --tab-outline-color: #504010 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #1F1500 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1F1500, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(35, 50%, 25%) !important;
  --tab-text-color: #B0A050 !important;
  --tab-text-color-active: #B0A050 !important;
  --tab-text-color-focused: #B0A050 !important;
  --tab-text-color-focused-active: #AA7500 !important;
  --tab-text-color-focused-active-current: #AA7500 !important;
  --tab-text-color-focused-highlighted: #ECDFAA !important;
  --table-add-button-border-color: #504010 !important;
  --table-border-color: #504010 !important;
  --table-drag-handle-background: #DDAA00 !important;
  --table-drag-handle-background-active: #00000000 !important;
  --table-drag-handle-color: #0F0A00 !important;
  --table-drag-handle-color-active: #0F0A00 !important;
  --table-header-background: #553F00 !important;
  --table-header-background-hover: #1F1500 !important;
  --table-header-border-color: #B0A050 !important;
  --table-header-color: #B0A050 !important;
  --table-header-font: #F3F3C3 !important;
  --table-header-weight: bold !important;
  --table-row-alt-background: #0F0B00 !important;
  --table-row-background: #1F1500 !important;
  --table-row-background-hover: #504010 !important;
  --table-selection: #553F00 !important;
  --table-selection-blend-mode: soft-light !important;
  --table-selection-border-color: #DDAA00 !important;
  --table-text-color: #ECDFAA !important;
  --tag-background: #0F0A00 !important;
  --tag-background-hover: #0F0A00 !important;
  --tag-border-color: #0F0A00 !important;
  --tag-border-color-hover: #0F0A00 !important;
  --tag-color: #B0A050 !important;
  --tag-color-hover: #AA7500 !important;
  --tertiary: #DDAA00 !important;
  --text-accent: #B0A050 !important;
  --text-accent-hover: #DDAA00 !important;
  --text-error: #FF3000 !important;
  --text-error-hover: #FF3000 !important;
  --text-faint: #B0A050 !important;
  --text-highlight-bg: #553F00 !important;
  --text-highlight-bg-active: #906000 !important;
  --text-muted: #E0D080 !important;
  --text-normal: #ECDFAA !important;
  --text-on-accent: #0F0A00 !important;
  --text-on-accent-hover: #E0D080 !important;
  --text-selection: #553F00 !important;
  --textHighlight: #553F00 !important;
  --titleFont: "Times New Roman" !important;
  --titlebar-background: #0F0A00 !important;
  --titlebar-background-focused: #1F1500 !important;
  --titlebar-border-color: #504010 !important;
  --titlebar-icon-color: #ECDFAA !important;
  --titlebar-text-color: #DDAA00 !important;
  --titlebar-text-color-focused: #ECDFAA !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #ECDFAA !important;
  --vault-profile-color-hover: #ECDFAA !important;
  --white-luwak: #F3F3C3 !important;
  --win-maximize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4.5 3c-.82843 0-1.5.67157-1.5 1.5v7c0 .8284.67157 1.5 1.5 1.5h7c.8284 0 1.5-.6716 1.5-1.5v-7c0-.82843-.6716-1.5-1.5-1.5zm0 1h7c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5h-7c-.27614 0-.5-.2239-.5-.5v-7c0-.27614.22386-.5.5-.5z' fill='%23212121'/%3E%3C/svg%3E") !important;
  --win-minimize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212121'%3E%3Cpath d='m5.08496 4c.20592-.5826.76154-1 1.41465-1h3.5c1.65689 0 2.99999 1.34315 2.99999 3v3.5c0 .6531-.4174 1.2087-1 1.4146v-4.9146c0-1.10457-.8954-2-1.99999-2z'/%3E%3Cpath d='m4.5 5h5c.8284 0 1.5.67157 1.5 1.5v5c0 .8284-.6716 1.5-1.5 1.5h-5c-.82843 0-1.5-.6716-1.5-1.5v-5c0-.82843.67157-1.5 1.5-1.5zm0 1c-.27614 0-.5.22386-.5.5v5c0 .2761.22386.5.5.5h5c.27614 0 .5-.2239.5-.5v-5c0-.27614-.22386-.5-.5-.5z'/%3E%3C/g%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 10, 0);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(15, 10, 0);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(15, 11, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(176, 160, 80);
  color: rgb(176, 160, 80);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(31, 21, 0);
  border-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(80, 64, 16);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(224, 208, 128);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(224, 208, 128);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(15, 10, 0);
  color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(224, 208, 128);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 21, 0);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 64, 16);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 10, 0);
  border-left-color: rgb(80, 64, 16);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(15, 10, 0);
  color: rgb(236, 223, 170);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(221, 170, 0);
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(176, 160, 80);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(170, 117, 0);
  border-color: rgb(170, 117, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(224, 208, 128);
  font-family: "??", "??", "??", "Times New Roman";
  outline: rgb(224, 208, 128) none 0px;
  text-decoration-color: rgb(224, 208, 128);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 85, 85);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(0, 85, 85) none 0px;
  text-decoration-color: rgb(0, 85, 85);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(176, 160, 80) none 0px;
  text-decoration-color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(176, 160, 80) none 0px;
  text-decoration: rgba(96, 69, 32, 0.3);
  text-decoration-color: rgba(96, 69, 32, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body dt {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(236, 223, 170);
  text-align: justify;
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(236, 223, 170);
  text-align: justify;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body blockquote {
  font-family: "Times New Roman", Times, serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  width: 180.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(15, 11, 0);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  color: rgb(176, 160, 80);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(85, 63, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(0, 255, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 255, 85);
  border-right-color: rgb(0, 255, 85);
  border-top-color: rgb(0, 255, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 255, 85);
  font-family: "??", "??", "Cascadia Mono";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(15, 11, 0);
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(236, 223, 170);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(176, 160, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body ul > li.task-list-item {
  text-align: justify;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
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
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  color: rgb(236, 223, 170);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(170, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(170, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(80, 64, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(31, 21, 0);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(170, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(170, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 21, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(31, 21, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body h1 {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(176, 160, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(176, 160, 80);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  color: rgb(224, 208, 128);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(224, 208, 128);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(176, 160, 80);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: rgb(176, 160, 80);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 208, 128);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(176, 160, 80);
  font-family: "??", "??", "??", "Times New Roman";
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  color: rgb(224, 208, 128);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(224, 208, 128);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(31, 21, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(236, 223, 170);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="dark"] body abbr {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(224, 208, 128);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(0, 255, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 255, 85);
  border-right-color: rgb(0, 255, 85);
  border-top-color: rgb(0, 255, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 255, 85);
  font-family: "??", "??", "Cascadia Mono";
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body summary {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(236, 223, 170);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  color: rgb(176, 160, 80);
}`,
  },
  light: {
    base: `:root:root {
  --CG-line-width: 50rem !important;
  --New-Obsidiantoggle: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='30' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --accent-h: 35 !important;
  --accent-l: 25% !important;
  --accent-s: 50% !important;
  --americano: #0F0A00 !important;
  --background-modifier-active-hover: hsla(35, 50%, 25%, 0.1) !important;
  --background-modifier-border: #E0D080 !important;
  --background-modifier-box-shadow: #502000 !important;
  --background-modifier-cover: rgba(224, 208, 128, 0) !important;
  --background-modifier-error: #FF3000 !important;
  --background-modifier-error-hover: #FF3000 !important;
  --background-modifier-form-field: #E0D080 !important;
  --background-modifier-form-field-highlighted: #502000 !important;
  --background-modifier-form-field-hover: #E0D080 !important;
  --background-modifier-success: #00FF55 !important;
  --background-primary: #F3F3C3 !important;
  --background-primary-alt: #E0D080 !important;
  --background-secondary: #ECDFAA !important;
  --background-secondary-alt: #B0A050 !important;
  --bases-cards-background: #F3F3C3 !important;
  --bases-cards-cover-background: #E0D080 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #E0D080 !important;
  --bases-embed-border-color: #E0D080 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #553F00 !important;
  --bases-table-border-color: #B0A050 !important;
  --bases-table-cell-background-active: #F3F3C3 !important;
  --bases-table-cell-background-disabled: #E0D080 !important;
  --bases-table-cell-background-selected: #885500 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #AA7500 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #E0D080 !important;
  --bases-table-header-background: #F3F3C3 !important;
  --bases-table-header-color: #553F00 !important;
  --bases-table-row-background-hover: #B0A050 !important;
  --bases-table-summary-background: #F3F3C3 !important;
  --blockquote-border-color: #AA7500 !important;
  --blur-background: color-mix(in srgb, #F3F3C3 65%, transparent) linear-gradient(#F3F3C3, color-mix(in srgb, #F3F3C3 65%, transparent)) !important;
  --bodyFont: "Times New Roman" !important;
  --burnt-roast: #0F0B00 !important;
  --cafe-au-lait: #CCAA55 !important;
  --callout-radius: 0px;
  --canvas-background: #F3F3C3 !important;
  --canvas-card-label-color: #553F00 !important;
  --canvas-controls-radius: 0px !important;
  --cappucino: #885500 !important;
  --caramel: #AA7500 !important;
  --caret-color: #0F0A00 !important;
  --checkbox-border-color: #553F00 !important;
  --checkbox-border-color-hover: #553F00 !important;
  --checkbox-color: #AA7500 !important;
  --checkbox-color-hover: #B0A050 !important;
  --checkbox-marker-color: #F3F3C3 !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #553F00 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #E0D080 !important;
  --code-background-hver: #0F0A00 !important;
  --code-border-color: #E0D080 !important;
  --code-comment: #553F00 !important;
  --code-normal: #005500 !important;
  --code-punctuation: #553F00 !important;
  --code-radius: 0px !important;
  --codeFont: "Cascadia Mono" !important;
  --collapse-icon-color: #553F00 !important;
  --collapse-icon-color-collapsed: #885500 !important;
  --color-accent: hsl(35, 50%, 25%) !important;
  --color-accent-1: hsl(34, 50.5%, 26.875%) !important;
  --color-accent-2: hsl(32, 51%, 28.75%) !important;
  --color-accent-hsl: 35, 50%, 25% !important;
  --crema: #DDAA00 !important;
  --dark: #0F0A00 !important;
  --dark-beans: #1F1500 !important;
  --dark-green-beans: #005500 !important;
  --dark-roast: #603020 !important;
  --darkgray: #0F0A00 !important;
  --divider-color: #E0D080 !important;
  --divider-color-hover: #AA7500 !important;
  --dropdown-background: #ECDFAA !important;
  --dropdown-background-hover: #B0A050 !important;
  --embed-block-shadow-hover: 0 0 0 1px #E0D080, inset 0 0 0 1px #E0D080 !important;
  --embed-border-start: 2px solid #AA7500 !important;
  --expresso: #502000 !important;
  --file-header-background: #F3F3C3 !important;
  --file-header-background-focused: #F3F3C3 !important;
  --file-header-font: "Times New Roman" !important;
  --file-line-width: 50rem !important;
  --flair-background: #ECDFAA !important;
  --flair-color: #0F0A00 !important;
  --font-default: "Times New Roman" !important;
  --font-interface: "Times New Roman" !important;
  --font-mermaid: "Times New Roman" !important;
  --font-monospace: "Cascadia Mono" !important;
  --font-monospace-default: "Cascadia Mono" !important;
  --font-print: Arial' !important;
  --font-size-default: 20px !important;
  --font-text: "Times New Roman" !important;
  --footnote-divider-color: #E0D080 !important;
  --footnote-id-color: #553F00 !important;
  --footnote-id-color-no-occurrences: #553F00 !important;
  --footnote-radius: 0px !important;
  --golden-brew: #906000 !important;
  --graph-node: #553F00 !important;
  --graph-node-focused: #885500 !important;
  --graph-node-unresolved: #553F00 !important;
  --graph-text: #0F0A00 !important;
  --gray: #553F00 !important;
  --green-beans: #00FF55 !important;
  --h1-color: #553F00 !important;
  --h2-color: #AA7500 !important;
  --h3-color: #DDAA00 !important;
  --h4-color: #DDAA00 !important;
  --h5-color: #DDAA00 !important;
  --h6-color: #DDAA00 !important;
  --hazelnut: #B0A050 !important;
  --headerFont: "Times New Roman" !important;
  --heading-formatting: #553F00 !important;
  --highlight: #ECDFAA !important;
  --hr-color: #E0D080 !important;
  --icon-color: #553F00 !important;
  --icon-color-active: #885500 !important;
  --icon-color-focused: #0F0A00 !important;
  --icon-color-hover: #553F00 !important;
  --inline-title-color: #553F00 !important;
  --input-date-separator: #553F00 !important;
  --input-placeholder-color: #553F00 !important;
  --interactive-accent: #AA7500 !important;
  --interactive-accent-hover: #B0A050 !important;
  --interactive-accent-hsl: 35, 50%, 25% !important;
  --interactive-hover: #B0A050 !important;
  --interactive-normal: #ECDFAA !important;
  --interactive-success: #FF3000 !important;
  --latte: #E0D080 !important;
  --light: #F3F3C3 !important;
  --light-beans: #504010 !important;
  --lightgray: #ECDFAA !important;
  --link-color: #553F00 !important;
  --link-color-hover: #DDAA00 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #005555 !important;
  --link-external-color-hover: #00FFFF !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #553F00 !important;
  --link-unresolved-decoration-color: hsla(35, 50%, 25%, 0.3) !important;
  --link-unresolved-opacity: 80% !important;
  --list-marker-color: #553F00 !important;
  --list-marker-color-collapsed: #885500 !important;
  --list-marker-color-hover: #553F00 !important;
  --menu-background: #ECDFAA !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #E0D080 !important;
  --metadata-divider-color: #E0D080 !important;
  --metadata-input-font: "Times New Roman" !important;
  --metadata-input-text-color: #0F0A00 !important;
  --metadata-label-font: "Times New Roman" !important;
  --metadata-label-text-color: #553F00 !important;
  --metadata-label-text-color-hover: #553F00 !important;
  --milk-foam: #ECDFAA !important;
  --moccacino: #553F00 !important;
  --modal-background: #F3F3C3 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #DDAA00 !important;
  --nav-collapse-icon-color-collapsed: #553F00 !important;
  --nav-header-color: #0F0A00 !important;
  --nav-heading-color: #0F0A00 !important;
  --nav-heading-color-collapsed: #553F00 !important;
  --nav-heading-color-collapsed-hover: #553F00 !important;
  --nav-heading-color-hover: #0F0A00 !important;
  --nav-indetation-guide-color: #1F1500 !important;
  --nav-item-background-active: #B0A050 !important;
  --nav-item-background-hover: #B0A050 !important;
  --nav-item-background-selected: #B0A050 !important;
  --nav-item-color: #0F0A00 !important;
  --nav-item-color-active: #504010 !important;
  --nav-item-color-highlighted: #FF3000 !important;
  --nav-item-color-hover: #F3F3C3 !important;
  --nav-item-color-selected: #885500 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #553F00 !important;
  --nav-tag-color-active: #553F00 !important;
  --nav-tag-color-hover: #553F00 !important;
  --nav-tag-radius: 0px !important;
  --newoutlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --outlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='15 -3 69 106'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z' stroke='%23000000' stroke-width='4' fill='none'/%3E%3C/svg%3E") !important;
  --pdf-background: #F3F3C3 !important;
  --pdf-page-background: #F3F3C3 !important;
  --pdf-sidebar-background: #F3F3C3 !important;
  --pill-border-color: #E0D080 !important;
  --pill-color: #553F00 !important;
  --pill-color-hover: #0F0A00 !important;
  --pill-color-remove: #553F00 !important;
  --pill-color-remove-hover: #885500 !important;
  --prompt-background: #F3F3C3 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #F3F3C3 65%, transparent) linear-gradient(#F3F3C3, color-mix(in srgb, #F3F3C3 65%, transparent)) !important;
  --red-robusta-beans: #FF3000 !important;
  --ribbon-background: #ECDFAA !important;
  --ribbon-background-collapsed: #F3F3C3 !important;
  --scrollbar-active-thumb-bg: #AA7500 !important;
  --scrollbar-bg: #DDAA00 !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: #B0A050 !important;
  --search-clear-button-color: #553F00 !important;
  --search-icon-color: #553F00 !important;
  --search-result-background: #F3F3C3 !important;
  --secondary: #885500 !important;
  --setting-group-heading-color: #0F0A00 !important;
  --setting-items-background: #E0D080 !important;
  --setting-items-border-color: #E0D080 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #E0D080 !important;
  --status-bar-background: #ECDFAA !important;
  --status-bar-border-color: #E0D080 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #553F00 !important;
  --suggestion-background: #F3F3C3 !important;
  --tab-background-active: #F3F3C3 !important;
  --tab-container-background: #ECDFAA !important;
  --tab-outline-color: #E0D080 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #ECDFAA !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECDFAA, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(35, 50%, 25%) !important;
  --tab-text-color: #553F00 !important;
  --tab-text-color-active: #553F00 !important;
  --tab-text-color-focused: #553F00 !important;
  --tab-text-color-focused-active: #553F00 !important;
  --tab-text-color-focused-active-current: #0F0A00 !important;
  --tab-text-color-focused-highlighted: #885500 !important;
  --table-add-button-border-color: #E0D080 !important;
  --table-border-color: #B0A050 !important;
  --table-drag-handle-background: #885500 !important;
  --table-drag-handle-color-active: #0F0A00 !important;
  --table-header-background: #B0A050 !important;
  --table-header-background-hover: #ECDFAA !important;
  --table-header-border-color: #B0A050 !important;
  --table-header-color: #885500 !important;
  --table-header-font: #ECDFAA !important;
  --table-header-weight: bold !important;
  --table-row-alt-background: #B0A050 !important;
  --table-row-background-hover: #B0A050 !important;
  --table-selection: #885500 !important;
  --table-selection-blend-mode: soft-light !important;
  --table-selection-border-color: #885500 !important;
  --table-text-color: #0F0A00 !important;
  --tag-background: #0F0A00 !important;
  --tag-background-hover: #0F0A00 !important;
  --tag-border-color: #0F0A00 !important;
  --tag-border-color-hover: #0F0A00 !important;
  --tag-color: #553F00 !important;
  --tag-color-hover: #DDAA00 !important;
  --tertiary: #AA7500 !important;
  --text-accent: #885500 !important;
  --text-accent-hover: #AA7500 !important;
  --text-error: #FF3000 !important;
  --text-error-hover: #FF3000 !important;
  --text-faint: #553F00 !important;
  --text-highlight-bg: #ECDFAA !important;
  --text-highlight-bg-active: #B0A050 !important;
  --text-muted: #553F00 !important;
  --text-normal: #0F0A00 !important;
  --text-on-accent: #0F0A00 !important;
  --text-on-accent-hover: #0F0A00 !important;
  --text-selection: #B0A050 !important;
  --textHighlight: #ECDFAA !important;
  --titleFont: "Times New Roman" !important;
  --titlebar-background: #F3F3C3 !important;
  --titlebar-background-focused: #ECDFAA !important;
  --titlebar-border-color: #E0D080 !important;
  --titlebar-text-color: #0F0A00 !important;
  --titlebar-text-color-focused: #0F0A00 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #0F0A00 !important;
  --vault-profile-color-hover: #0F0A00 !important;
  --white-luwak: #F3F3C3 !important;
  --win-maximize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4.5 3c-.82843 0-1.5.67157-1.5 1.5v7c0 .8284.67157 1.5 1.5 1.5h7c.8284 0 1.5-.6716 1.5-1.5v-7c0-.82843-.6716-1.5-1.5-1.5zm0 1h7c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5h-7c-.27614 0-.5-.2239-.5-.5v-7c0-.27614.22386-.5.5-.5z' fill='%23212121'/%3E%3C/svg%3E") !important;
  --win-minimize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212121'%3E%3Cpath d='m5.08496 4c.20592-.5826.76154-1 1.41465-1h3.5c1.65689 0 2.99999 1.34315 2.99999 3v3.5c0 .6531-.4174 1.2087-1 1.4146v-4.9146c0-1.10457-.8954-2-1.99999-2z'/%3E%3Cpath d='m4.5 5h5c.8284 0 1.5.67157 1.5 1.5v5c0 .8284-.6716 1.5-1.5 1.5h-5c-.82843 0-1.5-.6716-1.5-1.5v-5c0-.82843.67157-1.5 1.5-1.5zm0 1c-.27614 0-.5.22386-.5.5v5c0 .2761.22386.5.5.5h5c.27614 0 .5-.2239.5-.5v-5c0-.27614-.22386-.5-.5-.5z'/%3E%3C/g%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 223, 170);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(243, 243, 195);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(176, 160, 80);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(176, 160, 80);
  color: rgb(136, 85, 0);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(243, 243, 195);
  border-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(224, 208, 128);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(85, 63, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(15, 10, 0);
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 223, 170);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 208, 128);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 223, 170);
  border-left-color: rgb(224, 208, 128);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(243, 243, 195);
  color: rgb(15, 10, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(221, 170, 0);
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body del {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(85, 63, 0);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(170, 117, 0);
  border-color: rgb(170, 117, 0);
}

html[saved-theme="light"] body p {
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
  outline: rgb(85, 63, 0) none 0px;
  text-decoration-color: rgb(85, 63, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 85, 85);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(0, 85, 85) none 0px;
  text-decoration-color: rgb(0, 85, 85);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(85, 63, 0) none 0px;
  text-decoration-color: rgb(85, 63, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(85, 63, 0) none 0px;
  text-decoration: rgba(96, 69, 32, 0.3);
  text-decoration-color: rgba(96, 69, 32, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(15, 10, 0);
  text-align: justify;
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(15, 10, 0);
  text-align: justify;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body blockquote {
  font-family: "Times New Roman", Times, serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body table {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  width: 180.766px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(176, 160, 80);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  color: rgb(136, 85, 0);
  font-weight: 700;
}

html[saved-theme="light"] body tr {
  background-color: rgb(176, 160, 80);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 85, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 85, 0);
  border-right-color: rgb(0, 85, 0);
  border-top-color: rgb(0, 85, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 85, 0);
  font-family: "??", "??", "Cascadia Mono";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(85, 63, 0);
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(85, 63, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(15, 10, 0);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(85, 63, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body ul > li.task-list-item {
  text-align: justify;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(85, 63, 0);
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
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
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right-color: rgb(15, 10, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(236, 223, 170);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right-color: rgb(15, 10, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 223, 170);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(224, 208, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(236, 223, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(221, 170, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(221, 170, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(221, 170, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(221, 170, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 63, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 63, 0);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(85, 63, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 85, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 85, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: rgb(176, 160, 80);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 63, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 63, 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 63, 0);
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(236, 223, 170);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="light"] body abbr {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(85, 63, 0);
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

html[saved-theme="light"] body kbd {
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(0, 85, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 85, 0);
  border-right-color: rgb(0, 85, 0);
  border-top-color: rgb(0, 85, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 85, 0);
  font-family: "??", "??", "Cascadia Mono";
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(15, 10, 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  color: rgb(85, 63, 0);
}`,
  },
};
