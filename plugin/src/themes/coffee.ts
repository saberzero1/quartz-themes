import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "coffee", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --CG-line-width: 50rem;
  --New-Obsidiantoggle: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='30' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --accent-h: 35;
  --accent-l: 25%;
  --accent-s: 50%;
  --americano: #0F0A00;
  --background-modifier-active-hover: rgba(96, 69, 32, 0.1);
  --background-modifier-border: #504010;
  --background-modifier-box-shadow: #504010;
  --background-modifier-cover: #00000088;
  --background-modifier-error: #FF3000;
  --background-modifier-error-hover: #FF3000;
  --background-modifier-form-field: #0F0A00;
  --background-modifier-form-field-highlighted: #504010;
  --background-modifier-form-field-hover: #0F0A00;
  --background-modifier-success: #00FF55;
  --background-primary: #0F0A00;
  --background-primary-alt: #0F0B00;
  --background-secondary: #1F1500;
  --background-secondary-alt: #1F1500;
  --bases-cards-background: #0F0A00;
  --bases-cards-cover-background: #0F0B00;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #504010;
  --bases-embed-border-color: #504010;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #E0D080;
  --bases-table-border-color: #504010;
  --bases-table-cell-background-active: #0F0A00;
  --bases-table-cell-background-disabled: #0F0B00;
  --bases-table-cell-background-selected: #553F00;
  --bases-table-cell-shadow-focus: 0 0 0 2px #AA7500;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #0F0B00;
  --bases-table-header-background: #0F0A00;
  --bases-table-header-color: #E0D080;
  --bases-table-row-background-hover: #504010;
  --bases-table-summary-background: #0F0A00;
  --blockquote-border-color: #AA7500;
  --blockquote-color: #DDAA00;
  --blur-background: color-mix(in srgb, #906000 65%, transparent) linear-gradient(#906000, color-mix(in srgb, #906000 65%, transparent));
  --burnt-roast: #0F0B00;
  --cafe-au-lait: #CCAA55;
  --callout-radius: 0px;
  --canvas-background: #0F0A00;
  --canvas-card-label-color: #B0A050;
  --canvas-controls-radius: 0px;
  --cappucino: #885500;
  --caramel: #AA7500;
  --caret-color: #ECDFAA;
  --checkbox-border-color: #B0A050;
  --checkbox-border-color-hover: #E0D080;
  --checkbox-color: #AA7500;
  --checkbox-color-hover: #553F00;
  --checkbox-marker-color: #0F0A00;
  --checkbox-radius: 0px;
  --checklist-done-color: #E0D080;
  --clickable-icon-radius: 0px;
  --code-background: #1F1500;
  --code-border-color: #504010;
  --code-comment: #B0A050;
  --code-normal: #00FF55;
  --code-punctuation: #E0D080;
  --code-radius: 0px;
  --collapse-icon-color: #B0A050;
  --collapse-icon-color-collapsed: #B0A050;
  --color-accent: rgb(96, 69, 32);
  --color-accent-1: rgb(112, 76, 36);
  --color-accent-2: rgb(125, 82, 38);
  --color-accent-hsl: 35, 50%, 25%;
  --crema: #DDAA00;
  --dark-beans: #1F1500;
  --dark-green-beans: #005500;
  --dark-roast: #603020;
  --divider-color: #504010;
  --divider-color-hover: #AA7500;
  --drag-ghost-background: #AA7500;
  --dropdown-background: #906000;
  --dropdown-background-hover: #906000;
  --embed-block-shadow-hover: 0 0 0 1px #504010, inset 0 0 0 1px #504010;
  --embed-border-start: 2px solid #AA7500;
  --expresso: #502000;
  --file-header-background: #0F0A00;
  --file-header-background-focused: #0F0A00;
  --file-header-font: '??', '??', '??', "Times New Roman";
  --file-line-width: 50rem;
  --flair-background: #906000;
  --flair-color: #ECDFAA;
  --font-default: "Times New Roman";
  --font-interface: '??', '??', '??', "Times New Roman";
  --font-mermaid: '??', , "Times New Roman";
  --font-monospace: '??', '??', "Cascadia Mono";
  --font-monospace-default: "Cascadia Mono";
  --font-print: '??', '??', , 'Arial';
  --font-size-default: 20px;
  --font-text: '??', , "Times New Roman";
  --footnote-divider-color: #504010;
  --footnote-id-color: #E0D080;
  --footnote-id-color-no-occurrences: #B0A050;
  --footnote-radius: 0px;
  --golden-brew: #906000;
  --graph-node: #E0D080;
  --graph-node-focused: #B0A050;
  --graph-node-unresolved: #B0A050;
  --graph-text: #ECDFAA;
  --green-beans: #00FF55;
  --h1-color: #B0A050;
  --h2-color: #DDAA00;
  --h3-color: #AA7500;
  --h4-color: #AA7500;
  --h5-color: #AA7500;
  --h6-color: #AA7500;
  --hazelnut: #B0A050;
  --heading-formatting: #B0A050;
  --hr-color: #906000;
  --hr-text-color: #DDAA00;
  --hr-text-offset: 0ch;
  --hr-thickness: 7px;
  --icon-color: #B0A050;
  --icon-color-active: #B0A050;
  --icon-color-focused: #ECDFAA;
  --icon-color-hover: #ECDFAA;
  --icon-opacity: 100%;
  --inline-title-color: #B0A050;
  --input-date-separator: #B0A050;
  --input-placeholder-color: #B0A050;
  --interactive-accent: #AA7500;
  --interactive-accent-hover: #553F00;
  --interactive-accent-hsl: 35, 50%, 25%;
  --interactive-hover: #906000;
  --interactive-normal: #906000;
  --interactive-success: #00FF55;
  --latte: #E0D080;
  --light-beans: #504010;
  --line-active: #ECDFAA;
  --link-color: #B0A050;
  --link-color-hover: #DDAA00;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #005555;
  --link-external-color-hover: #00FFFF;
  --link-external-decoration: none;
  --link-unresolved-color: #B0A050;
  --link-unresolved-decoration-color: rgba(96, 69, 32, 0.3);
  --link-unresolved-opacity: 50%;
  --list-marker-color: #B0A050;
  --list-marker-color-collapsed: #B0A050;
  --list-marker-color-hover: #E0D080;
  --menu-background: #1F1500;
  --menu-radius: 0px;
  --metadata-border-color: #504010;
  --metadata-divider-color: #504010;
  --metadata-input-font: '??', '??', '??', "Times New Roman";
  --metadata-input-text-color: #ECDFAA;
  --metadata-label-font: '??', '??', '??', "Times New Roman";
  --metadata-label-text-color: #E0D080;
  --metadata-label-text-color-hover: #E0D080;
  --milk-foam: #ECDFAA;
  --moccacino: #553F00;
  --modal-background: #0F0A00;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #906000;
  --nav-collapse-icon-color-collapsed: #DDAA00;
  --nav-heading-color: #ECDFAA;
  --nav-heading-color-collapsed: #B0A050;
  --nav-heading-color-collapsed-hover: #E0D080;
  --nav-heading-color-hover: #ECDFAA;
  --nav-indetation-guide-color: #DDAA00;
  --nav-item-background-active: #1F1500;
  --nav-item-background-hover: #504010;
  --nav-item-background-selected: #FF3000;
  --nav-item-color: #B0A050;
  --nav-item-color-active: #AA7500;
  --nav-item-color-highlighted: #FF3000;
  --nav-item-color-hover: #ECDFAA;
  --nav-item-color-selected: #AA7500;
  --nav-item-radius: 0px;
  --nav-tag-color: #B0A050;
  --nav-tag-color-active: #E0D080;
  --nav-tag-color-hover: #E0D080;
  --nav-tag-radius: 0px;
  --newoutlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --outlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='15 -3 69 106'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z' stroke='%23000000' stroke-width='4' fill='none'/%3E%3C/svg%3E");
  --pdf-background: #0F0A00;
  --pdf-page-background: #0F0A00;
  --pdf-shadow: 0 0 0 1px #504010;
  --pdf-sidebar-background: #0F0A00;
  --pdf-thumbnail-shadow: 0 0 0 1px #504010;
  --pill-border-color: #504010;
  --pill-color: #E0D080;
  --pill-color-hover: #ECDFAA;
  --pill-color-remove: #B0A050;
  --pill-color-remove-hover: #B0A050;
  --prompt-background: #0F0A00;
  --prompt-border-color: #AA7500;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #906000 65%, transparent) linear-gradient(#906000, color-mix(in srgb, #906000 65%, transparent));
  --red-robusta-beans: #FF3000;
  --ribbon-background: #1F1500;
  --ribbon-background-collapsed: #0F0A00;
  --scrollbar-active-thumb-bg: #AA7500;
  --scrollbar-bg: #B0A050;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: #504010;
  --search-clear-button-color: #E0D080;
  --search-icon-color: #E0D080;
  --search-result-background: #0F0A00;
  --setting-group-heading-color: #ECDFAA;
  --setting-items-background: #0F0B00;
  --setting-items-border-color: #504010;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --slider-track-background: #504010;
  --status-bar-background: #1F1500;
  --status-bar-border-color: #504010;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #E0D080;
  --suggestion-background: #0F0A00;
  --tab-background-active: #0F0A00;
  --tab-container-background: #0F0A00;
  --tab-divider-color: #0F0A00;
  --tab-outline-color: #504010;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #1F1500;
  --tab-switcher-menubar-background: linear-gradient(to top, #1F1500, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(96, 69, 32);
  --tab-text-color: #B0A050;
  --tab-text-color-active: #B0A050;
  --tab-text-color-focused: #B0A050;
  --tab-text-color-focused-active: #AA7500;
  --tab-text-color-focused-active-current: #AA7500;
  --tab-text-color-focused-highlighted: #ECDFAA;
  --table-add-button-border-color: #504010;
  --table-border-color: #504010;
  --table-drag-handle-background: #DDAA00;
  --table-drag-handle-background-active: #00000000;
  --table-drag-handle-color: #0F0A00;
  --table-drag-handle-color-active: #0F0A00;
  --table-header-background: #553F00;
  --table-header-background-hover: #1F1500;
  --table-header-border-color: #B0A050;
  --table-header-color: #B0A050;
  --table-header-font: #F3F3C3;
  --table-header-weight: bold;
  --table-row-alt-background: #0F0B00;
  --table-row-background: #1F1500;
  --table-row-background-hover: #504010;
  --table-selection: #553F00;
  --table-selection-blend-mode: soft-light;
  --table-selection-border-color: #DDAA00;
  --table-text-color: #ECDFAA;
  --tag-background: #0F0A00;
  --tag-background-hover: #0F0A00;
  --tag-border-color: #0F0A00;
  --tag-border-color-hover: #0F0A00;
  --tag-color: #B0A050;
  --tag-color-hover: #AA7500;
  --text-accent: #B0A050;
  --text-accent-hover: #DDAA00;
  --text-error: #FF3000;
  --text-error-hover: #FF3000;
  --text-faint: #B0A050;
  --text-highlight-bg: #553F00;
  --text-highlight-bg-active: #906000;
  --text-muted: #E0D080;
  --text-normal: #ECDFAA;
  --text-on-accent: #0F0A00;
  --text-on-accent-hover: #E0D080;
  --text-selection: #553F00;
  --titlebar-background: #0F0A00;
  --titlebar-background-focused: #1F1500;
  --titlebar-border-color: #504010;
  --titlebar-icon-color: #ECDFAA;
  --titlebar-text-color: #DDAA00;
  --titlebar-text-color-focused: #ECDFAA;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #ECDFAA;
  --vault-profile-color-hover: #ECDFAA;
  --white-luwak: #F3F3C3;
  --win-maximize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4.5 3c-.82843 0-1.5.67157-1.5 1.5v7c0 .8284.67157 1.5 1.5 1.5h7c.8284 0 1.5-.6716 1.5-1.5v-7c0-.82843-.6716-1.5-1.5-1.5zm0 1h7c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5h-7c-.27614 0-.5-.2239-.5-.5v-7c0-.27614.22386-.5.5-.5z' fill='%23212121'/%3E%3C/svg%3E");
  --win-minimize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212121'%3E%3Cpath d='m5.08496 4c.20592-.5826.76154-1 1.41465-1h3.5c1.65689 0 2.99999 1.34315 2.99999 3v3.5c0 .6531-.4174 1.2087-1 1.4146v-4.9146c0-1.10457-.8954-2-1.99999-2z'/%3E%3Cpath d='m4.5 5h5c.8284 0 1.5.67157 1.5 1.5v5c0 .8284-.6716 1.5-1.5 1.5h-5c-.82843 0-1.5-.6716-1.5-1.5v-5c0-.82843.67157-1.5 1.5-1.5zm0 1c-.27614 0-.5.22386-.5.5v5c0 .2761.22386.5.5.5h5c.27614 0 .5-.2239.5-.5v-5c0-.27614-.22386-.5-.5-.5z'/%3E%3C/g%3E%3C/svg%3E");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 10, 0);
  color: rgb(236, 223, 170);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 10, 0);
  color: rgb(236, 223, 170);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 21, 0);
  color: rgb(236, 223, 170);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 64, 16);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 10, 0);
  border-left-color: rgb(80, 64, 16);
  color: rgb(236, 223, 170);
}

body div#quartz-root {
  background-color: rgb(15, 10, 0);
  color: rgb(236, 223, 170);
}`,
    typography: `body .page article p > b, b {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body .page article p > em, em {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body .page article p > i, i {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body .page article p > strong, strong {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body .text-highlight {
  background-color: rgb(221, 170, 0);
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body del {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration: line-through rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body p {
  color: rgb(224, 208, 128);
  font-family: "??", "??", "??", "Times New Roman";
  outline: rgb(224, 208, 128) none 0px;
  text-decoration: rgb(224, 208, 128);
  text-decoration-color: rgb(224, 208, 128);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 85, 85);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(0, 85, 85) none 0px;
  text-decoration: rgb(0, 85, 85);
  text-decoration-color: rgb(0, 85, 85);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(176, 160, 80) none 0px;
  text-decoration: rgb(176, 160, 80);
  text-decoration-color: rgb(176, 160, 80);
}

body a.internal.broken {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(176, 160, 80) none 0px;
  text-decoration: rgba(96, 69, 32, 0.3);
  text-decoration-color: rgba(96, 69, 32, 0.3);
}`,
    lists: `body dd {
  color: rgb(236, 223, 170);
}

body dt {
  color: rgb(236, 223, 170);
}

body ol > li {
  color: rgb(236, 223, 170);
  text-align: justify;
}

body ol.overflow {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body ul > li {
  color: rgb(236, 223, 170);
  text-align: justify;
}

body ul.overflow {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(176, 160, 80);
  text-decoration: rgb(176, 160, 80);
}

body blockquote {
  font-family: "Times New Roman", Times, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body table {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  width: 180.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgb(15, 11, 0);
}

body td {
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  color: rgb(236, 223, 170);
}

body th {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  color: rgb(176, 160, 80);
  font-weight: 700;
}

body tr {
  background-color: rgb(85, 63, 0);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body figcaption {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
}

body figure {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body img {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body video {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(236, 223, 170);
  color: rgb(236, 223, 170);
}

body .transclude {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body .transclude-inner {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Times New Roman", Times, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Times New Roman", Times, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(224, 208, 128);
  text-decoration: line-through rgb(224, 208, 128);
  text-decoration-color: rgb(224, 208, 128);
}

body input[type=checkbox] {
  border-bottom-color: rgb(176, 160, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='*'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='-'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='/'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='>'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='?'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='I'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='S'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='b'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='c'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='d'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='f'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='i'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='k'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='l'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='p'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='u'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body li.task-list-item[data-task='w'] {
  color: rgb(236, 223, 170);
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body ul > li.task-list-item {
  text-align: justify;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  color: rgb(236, 223, 170);
  font-family: "??", "??", "??", "Times New Roman";
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(236, 223, 170);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(236, 223, 170) none 0px;
  text-decoration: rgb(236, 223, 170);
  text-decoration-color: rgb(236, 223, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 223, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(236, 223, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(31, 21, 0);
  color: rgb(236, 223, 170);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(170, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(170, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 21, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(31, 21, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 223, 170);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

body a.internal.tag-link::before {
  color: rgb(176, 160, 80);
}

body h1 {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
}

body h2 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(176, 160, 80);
  font-family: "Times New Roman", Times, serif;
}

body h3 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

body h4 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

body h5 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

body h6 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

body hr {
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 10, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
  text-decoration: rgb(176, 160, 80);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
  text-decoration: rgb(176, 160, 80);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
  text-decoration: rgb(176, 160, 80);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(236, 223, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  color: rgb(236, 223, 170);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(31, 21, 0);
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  border-top-left-radius: 0px;
  color: rgb(224, 208, 128);
  font-family: "??", "??", "??", "Times New Roman";
}

body footer ul li a {
  color: rgb(224, 208, 128);
  text-decoration: rgb(224, 208, 128);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
  color: rgb(236, 223, 170);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(176, 160, 80);
  text-decoration: rgb(176, 160, 80);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body li.section-li > .section .meta {
  color: rgb(176, 160, 80);
  font-family: "Arial Black", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(176, 160, 80);
  text-decoration: rgb(176, 160, 80);
}

body ul.section-ul {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(176, 160, 80);
  font-family: "??", "??", "??", "Times New Roman";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
  color: rgb(236, 223, 170);
}

body .metadata {
  border-bottom-color: rgb(80, 64, 16);
  border-left-color: rgb(80, 64, 16);
  border-right-color: rgb(80, 64, 16);
  border-top-color: rgb(80, 64, 16);
  color: rgb(224, 208, 128);
  font-family: "Times New Roman", Times, serif;
}

body .metadata-properties {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(224, 208, 128);
  font-family: "Times New Roman", Times, serif;
}

body .navigation-progress {
  background-color: rgb(31, 21, 0);
}

body .page-header h2.page-title {
  color: rgb(236, 223, 170);
  font-family: "??", "??", "??", "Times New Roman";
}

body abbr {
  color: rgb(236, 223, 170);
  text-decoration: underline dotted rgb(236, 223, 170);
}

body details {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body input[type=text] {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(224, 208, 128);
  font-family: "??", "??", "??", "Times New Roman";
}

body kbd {
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

body progress {
  border-bottom-color: rgb(236, 223, 170);
  border-left-color: rgb(236, 223, 170);
  border-right-color: rgb(236, 223, 170);
  border-top-color: rgb(236, 223, 170);
}

body sub {
  color: rgb(236, 223, 170);
}

body summary {
  color: rgb(236, 223, 170);
}

body sup {
  color: rgb(236, 223, 170);
}`,
  },
  light: {
    base: `:root:root {
  --CG-line-width: 50rem;
  --New-Obsidiantoggle: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='30' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --accent-h: 35;
  --accent-l: 25%;
  --accent-s: 50%;
  --americano: #0F0A00;
  --background-modifier-active-hover: rgba(96, 69, 32, 0.1);
  --background-modifier-border: #E0D080;
  --background-modifier-box-shadow: #502000;
  --background-modifier-cover: rgba(224, 208, 128, 0);
  --background-modifier-error: #FF3000;
  --background-modifier-error-hover: #FF3000;
  --background-modifier-form-field: #E0D080;
  --background-modifier-form-field-highlighted: #502000;
  --background-modifier-form-field-hover: #E0D080;
  --background-modifier-success: #00FF55;
  --background-primary: #F3F3C3;
  --background-primary-alt: #E0D080;
  --background-secondary: #ECDFAA;
  --background-secondary-alt: #B0A050;
  --bases-cards-background: #F3F3C3;
  --bases-cards-cover-background: #E0D080;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #E0D080;
  --bases-embed-border-color: #E0D080;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #553F00;
  --bases-table-border-color: #B0A050;
  --bases-table-cell-background-active: #F3F3C3;
  --bases-table-cell-background-disabled: #E0D080;
  --bases-table-cell-background-selected: #885500;
  --bases-table-cell-shadow-focus: 0 0 0 2px #AA7500;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #E0D080;
  --bases-table-header-background: #F3F3C3;
  --bases-table-header-color: #553F00;
  --bases-table-row-background-hover: #B0A050;
  --bases-table-summary-background: #F3F3C3;
  --blockquote-border-color: #AA7500;
  --blur-background: color-mix(in srgb, #F3F3C3 65%, transparent) linear-gradient(#F3F3C3, color-mix(in srgb, #F3F3C3 65%, transparent));
  --burnt-roast: #0F0B00;
  --cafe-au-lait: #CCAA55;
  --callout-radius: 0px;
  --canvas-background: #F3F3C3;
  --canvas-card-label-color: #553F00;
  --canvas-controls-radius: 0px;
  --cappucino: #885500;
  --caramel: #AA7500;
  --caret-color: #0F0A00;
  --checkbox-border-color: #553F00;
  --checkbox-border-color-hover: #553F00;
  --checkbox-color: #AA7500;
  --checkbox-color-hover: #B0A050;
  --checkbox-marker-color: #F3F3C3;
  --checkbox-radius: 0px;
  --checklist-done-color: #553F00;
  --clickable-icon-radius: 0px;
  --code-background: #E0D080;
  --code-background-hver: #0F0A00;
  --code-border-color: #E0D080;
  --code-comment: #553F00;
  --code-normal: #005500;
  --code-punctuation: #553F00;
  --code-radius: 0px;
  --collapse-icon-color: #553F00;
  --collapse-icon-color-collapsed: #885500;
  --color-accent: rgb(96, 69, 32);
  --color-accent-1: rgb(104, 74, 34);
  --color-accent-2: rgb(112, 76, 36);
  --color-accent-hsl: 35, 50%, 25%;
  --crema: #DDAA00;
  --dark-beans: #1F1500;
  --dark-green-beans: #005500;
  --dark-roast: #603020;
  --divider-color: #E0D080;
  --divider-color-hover: #AA7500;
  --dropdown-background: #ECDFAA;
  --dropdown-background-hover: #B0A050;
  --embed-block-shadow-hover: 0 0 0 1px #E0D080, inset 0 0 0 1px #E0D080;
  --embed-border-start: 2px solid #AA7500;
  --expresso: #502000;
  --file-header-background: #F3F3C3;
  --file-header-background-focused: #F3F3C3;
  --file-header-font: '??', '??', '??', "Times New Roman";
  --file-line-width: 50rem;
  --flair-background: #ECDFAA;
  --flair-color: #0F0A00;
  --font-default: "Times New Roman";
  --font-interface: '??', '??', '??', "Times New Roman";
  --font-mermaid: '??', , "Times New Roman";
  --font-monospace: '??', '??', "Cascadia Mono";
  --font-monospace-default: "Cascadia Mono";
  --font-print: '??', '??', , 'Arial';
  --font-size-default: 20px;
  --font-text: '??', , "Times New Roman";
  --footnote-divider-color: #E0D080;
  --footnote-id-color: #553F00;
  --footnote-id-color-no-occurrences: #553F00;
  --footnote-radius: 0px;
  --golden-brew: #906000;
  --graph-node: #553F00;
  --graph-node-focused: #885500;
  --graph-node-unresolved: #553F00;
  --graph-text: #0F0A00;
  --green-beans: #00FF55;
  --h1-color: #553F00;
  --h2-color: #AA7500;
  --h3-color: #DDAA00;
  --h4-color: #DDAA00;
  --h5-color: #DDAA00;
  --h6-color: #DDAA00;
  --hazelnut: #B0A050;
  --heading-formatting: #553F00;
  --hr-color: #E0D080;
  --icon-color: #553F00;
  --icon-color-active: #885500;
  --icon-color-focused: #0F0A00;
  --icon-color-hover: #553F00;
  --inline-title-color: #553F00;
  --input-date-separator: #553F00;
  --input-placeholder-color: #553F00;
  --interactive-accent: #AA7500;
  --interactive-accent-hover: #B0A050;
  --interactive-accent-hsl: 35, 50%, 25%;
  --interactive-hover: #B0A050;
  --interactive-normal: #ECDFAA;
  --interactive-success: #FF3000;
  --latte: #E0D080;
  --light-beans: #504010;
  --link-color: #553F00;
  --link-color-hover: #DDAA00;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #005555;
  --link-external-color-hover: #00FFFF;
  --link-external-decoration: none;
  --link-unresolved-color: #553F00;
  --link-unresolved-decoration-color: rgba(96, 69, 32, 0.3);
  --link-unresolved-opacity: 80%;
  --list-marker-color: #553F00;
  --list-marker-color-collapsed: #885500;
  --list-marker-color-hover: #553F00;
  --menu-background: #ECDFAA;
  --menu-radius: 0px;
  --metadata-border-color: #E0D080;
  --metadata-divider-color: #E0D080;
  --metadata-input-font: '??', '??', '??', "Times New Roman";
  --metadata-input-text-color: #0F0A00;
  --metadata-label-font: '??', '??', '??', "Times New Roman";
  --metadata-label-text-color: #553F00;
  --metadata-label-text-color-hover: #553F00;
  --milk-foam: #ECDFAA;
  --moccacino: #553F00;
  --modal-background: #F3F3C3;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #DDAA00;
  --nav-collapse-icon-color-collapsed: #553F00;
  --nav-header-color: #0F0A00;
  --nav-heading-color: #0F0A00;
  --nav-heading-color-collapsed: #553F00;
  --nav-heading-color-collapsed-hover: #553F00;
  --nav-heading-color-hover: #0F0A00;
  --nav-indetation-guide-color: #1F1500;
  --nav-item-background-active: #B0A050;
  --nav-item-background-hover: #B0A050;
  --nav-item-background-selected: #B0A050;
  --nav-item-color: #0F0A00;
  --nav-item-color-active: #504010;
  --nav-item-color-highlighted: #FF3000;
  --nav-item-color-hover: #F3F3C3;
  --nav-item-color-selected: #885500;
  --nav-item-radius: 0px;
  --nav-tag-color: #553F00;
  --nav-tag-color-active: #553F00;
  --nav-tag-color-hover: #553F00;
  --nav-tag-radius: 0px;
  --newoutlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --outlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='15 -3 69 106'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z' stroke='%23000000' stroke-width='4' fill='none'/%3E%3C/svg%3E");
  --pdf-background: #F3F3C3;
  --pdf-page-background: #F3F3C3;
  --pdf-sidebar-background: #F3F3C3;
  --pill-border-color: #E0D080;
  --pill-color: #553F00;
  --pill-color-hover: #0F0A00;
  --pill-color-remove: #553F00;
  --pill-color-remove-hover: #885500;
  --prompt-background: #F3F3C3;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #F3F3C3 65%, transparent) linear-gradient(#F3F3C3, color-mix(in srgb, #F3F3C3 65%, transparent));
  --red-robusta-beans: #FF3000;
  --ribbon-background: #ECDFAA;
  --ribbon-background-collapsed: #F3F3C3;
  --scrollbar-active-thumb-bg: #AA7500;
  --scrollbar-bg: #DDAA00;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: #B0A050;
  --search-clear-button-color: #553F00;
  --search-icon-color: #553F00;
  --search-result-background: #F3F3C3;
  --setting-group-heading-color: #0F0A00;
  --setting-items-background: #E0D080;
  --setting-items-border-color: #E0D080;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --slider-track-background: #E0D080;
  --status-bar-background: #ECDFAA;
  --status-bar-border-color: #E0D080;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #553F00;
  --suggestion-background: #F3F3C3;
  --tab-background-active: #F3F3C3;
  --tab-container-background: #ECDFAA;
  --tab-outline-color: #E0D080;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #ECDFAA;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECDFAA, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(96, 69, 32);
  --tab-text-color: #553F00;
  --tab-text-color-active: #553F00;
  --tab-text-color-focused: #553F00;
  --tab-text-color-focused-active: #553F00;
  --tab-text-color-focused-active-current: #0F0A00;
  --tab-text-color-focused-highlighted: #885500;
  --table-add-button-border-color: #E0D080;
  --table-border-color: #B0A050;
  --table-drag-handle-background: #885500;
  --table-drag-handle-color-active: #0F0A00;
  --table-header-background: #B0A050;
  --table-header-background-hover: #ECDFAA;
  --table-header-border-color: #B0A050;
  --table-header-color: #885500;
  --table-header-font: #ECDFAA;
  --table-header-weight: bold;
  --table-row-alt-background: #B0A050;
  --table-row-background-hover: #B0A050;
  --table-selection: #885500;
  --table-selection-blend-mode: soft-light;
  --table-selection-border-color: #885500;
  --table-text-color: #0F0A00;
  --tag-background: #0F0A00;
  --tag-background-hover: #0F0A00;
  --tag-border-color: #0F0A00;
  --tag-border-color-hover: #0F0A00;
  --tag-color: #553F00;
  --tag-color-hover: #DDAA00;
  --text-accent: #885500;
  --text-accent-hover: #AA7500;
  --text-error: #FF3000;
  --text-error-hover: #FF3000;
  --text-faint: #553F00;
  --text-highlight-bg: #ECDFAA;
  --text-highlight-bg-active: #B0A050;
  --text-muted: #553F00;
  --text-normal: #0F0A00;
  --text-on-accent: #0F0A00;
  --text-on-accent-hover: #0F0A00;
  --text-selection: #B0A050;
  --titlebar-background: #F3F3C3;
  --titlebar-background-focused: #ECDFAA;
  --titlebar-border-color: #E0D080;
  --titlebar-text-color: #0F0A00;
  --titlebar-text-color-focused: #0F0A00;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #0F0A00;
  --vault-profile-color-hover: #0F0A00;
  --white-luwak: #F3F3C3;
  --win-maximize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4.5 3c-.82843 0-1.5.67157-1.5 1.5v7c0 .8284.67157 1.5 1.5 1.5h7c.8284 0 1.5-.6716 1.5-1.5v-7c0-.82843-.6716-1.5-1.5-1.5zm0 1h7c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5h-7c-.27614 0-.5-.2239-.5-.5v-7c0-.27614.22386-.5.5-.5z' fill='%23212121'/%3E%3C/svg%3E");
  --win-minimize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212121'%3E%3Cpath d='m5.08496 4c.20592-.5826.76154-1 1.41465-1h3.5c1.65689 0 2.99999 1.34315 2.99999 3v3.5c0 .6531-.4174 1.2087-1 1.4146v-4.9146c0-1.10457-.8954-2-1.99999-2z'/%3E%3Cpath d='m4.5 5h5c.8284 0 1.5.67157 1.5 1.5v5c0 .8284-.6716 1.5-1.5 1.5h-5c-.82843 0-1.5-.6716-1.5-1.5v-5c0-.82843.67157-1.5 1.5-1.5zm0 1c-.27614 0-.5.22386-.5.5v5c0 .2761.22386.5.5.5h5c.27614 0 .5-.2239.5-.5v-5c0-.27614-.22386-.5-.5-.5z'/%3E%3C/g%3E%3C/svg%3E");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 223, 170);
  color: rgb(15, 10, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(243, 243, 195);
  color: rgb(15, 10, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 223, 170);
  color: rgb(15, 10, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 208, 128);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 223, 170);
  border-left-color: rgb(224, 208, 128);
  color: rgb(15, 10, 0);
}

body div#quartz-root {
  background-color: rgb(243, 243, 195);
  color: rgb(15, 10, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body .page article p > em, em {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body .page article p > i, i {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body .page article p > strong, strong {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body .text-highlight {
  background-color: rgb(221, 170, 0);
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body del {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: line-through rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body p {
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
  outline: rgb(85, 63, 0) none 0px;
  text-decoration: rgb(85, 63, 0);
  text-decoration-color: rgb(85, 63, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 85, 85);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(0, 85, 85) none 0px;
  text-decoration: rgb(0, 85, 85);
  text-decoration-color: rgb(0, 85, 85);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(85, 63, 0) none 0px;
  text-decoration: rgb(85, 63, 0);
  text-decoration-color: rgb(85, 63, 0);
}

body a.internal.broken {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(85, 63, 0) none 0px;
  text-decoration: rgba(96, 69, 32, 0.3);
  text-decoration-color: rgba(96, 69, 32, 0.3);
}`,
    lists: `body dd {
  color: rgb(15, 10, 0);
}

body dt {
  color: rgb(15, 10, 0);
}

body ol > li {
  color: rgb(15, 10, 0);
  text-align: justify;
}

body ol.overflow {
  background-color: rgb(243, 243, 195);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body ul > li {
  color: rgb(15, 10, 0);
  text-align: justify;
}

body ul.overflow {
  background-color: rgb(243, 243, 195);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(85, 63, 0);
  text-decoration: rgb(85, 63, 0);
}

body blockquote {
  font-family: "Times New Roman", Times, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body table {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  width: 180.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgb(176, 160, 80);
}

body td {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  color: rgb(15, 10, 0);
}

body th {
  border-bottom-color: rgb(176, 160, 80);
  border-left-color: rgb(176, 160, 80);
  border-right-color: rgb(176, 160, 80);
  border-top-color: rgb(176, 160, 80);
  color: rgb(136, 85, 0);
  font-weight: 700;
}

body tr {
  background-color: rgb(176, 160, 80);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body figcaption {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
}

body figure {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body img {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body video {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(15, 10, 0);
  color: rgb(15, 10, 0);
}

body .transclude {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(170, 117, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Times New Roman", Times, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Times New Roman", Times, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 63, 0);
  text-decoration: line-through rgb(85, 63, 0);
  text-decoration-color: rgb(85, 63, 0);
}

body input[type=checkbox] {
  border-bottom-color: rgb(85, 63, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(15, 10, 0);
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body ul > li.task-list-item {
  text-align: justify;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(85, 63, 0);
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(224, 208, 128);
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right-color: rgb(15, 10, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(15, 10, 0);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(15, 10, 0) none 0px;
  text-decoration: rgb(15, 10, 0);
  text-decoration-color: rgb(15, 10, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(15, 10, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(15, 10, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(236, 223, 170);
  color: rgb(15, 10, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right-color: rgb(15, 10, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 223, 170);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(236, 223, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(15, 10, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(15, 10, 0);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

body a.internal.tag-link::before {
  color: rgb(85, 63, 0);
}

body h1 {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

body h2 {
  color: rgb(170, 117, 0);
  font-family: "Times New Roman", Times, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

body h3 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

body h4 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

body h5 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

body h6 {
  color: rgb(221, 170, 0);
  font-family: "Times New Roman", Times, serif;
}

body hr {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

body ::-webkit-scrollbar-corner {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}

body ::-webkit-scrollbar-track {
  background: rgb(243, 243, 195) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 243, 195);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
  text-decoration: rgb(136, 85, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
  text-decoration: rgb(136, 85, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
  text-decoration: rgb(136, 85, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(243, 243, 195);
  border-bottom-color: rgb(15, 10, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  color: rgb(15, 10, 0);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(236, 223, 170);
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  border-top-left-radius: 0px;
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

body footer ul li a {
  color: rgb(85, 63, 0);
  text-decoration: rgb(85, 63, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
  font-weight: 700;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  color: rgb(15, 10, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 85, 0);
  text-decoration: rgb(136, 85, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body li.section-li > .section .meta {
  color: rgb(136, 85, 0);
  font-family: "Arial Black", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 85, 0);
  text-decoration: rgb(136, 85, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
  color: rgb(15, 10, 0);
}

body .metadata {
  border-bottom-color: rgb(224, 208, 128);
  border-left-color: rgb(224, 208, 128);
  border-right-color: rgb(224, 208, 128);
  border-top-color: rgb(224, 208, 128);
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

body .metadata-properties {
  border-bottom-color: rgb(85, 63, 0);
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  color: rgb(85, 63, 0);
  font-family: "Times New Roman", Times, serif;
}

body .navigation-progress {
  background-color: rgb(236, 223, 170);
}

body .page-header h2.page-title {
  color: rgb(15, 10, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

body abbr {
  color: rgb(15, 10, 0);
  text-decoration: underline dotted rgb(15, 10, 0);
}

body details {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body input[type=text] {
  border-bottom-color: rgb(85, 63, 0);
  border-left-color: rgb(85, 63, 0);
  border-right-color: rgb(85, 63, 0);
  border-top-color: rgb(85, 63, 0);
  color: rgb(85, 63, 0);
  font-family: "??", "??", "??", "Times New Roman";
}

body kbd {
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

body progress {
  border-bottom-color: rgb(15, 10, 0);
  border-left-color: rgb(15, 10, 0);
  border-right-color: rgb(15, 10, 0);
  border-top-color: rgb(15, 10, 0);
}

body sub {
  color: rgb(15, 10, 0);
}

body summary {
  color: rgb(15, 10, 0);
}

body sup {
  color: rgb(15, 10, 0);
}`,
  },
};
