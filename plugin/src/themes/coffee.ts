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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 10, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 10, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 243, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 243, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
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
