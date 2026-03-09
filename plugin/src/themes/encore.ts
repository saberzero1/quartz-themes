import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "encore", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 262;
  --accent-l: 69%;
  --accent-s: 83%;
  --background-modifier-active-hover: rgba(158, 110, 242, 0.1);
  --background-modifier-border: rgb(45, 45, 45);
  --background-modifier-border-focus: rgb(125, 125, 125);
  --background-modifier-border-hover: rgb(75, 75, 75);
  --background-modifier-form-field: rgb(38, 38, 38);
  --background-modifier-form-field-hover: rgb(38, 38, 38);
  --background-primary: rgb(15, 15, 15);
  --background-primary-alt: rgb(27, 27, 27);
  --background-secondary: rgb(34, 34, 34);
  --background-secondary-alt: rgb(45, 45, 45);
  --bases-cards-background: rgb(15, 15, 15);
  --bases-cards-cover-background: rgb(27, 27, 27);
  --bases-cards-shadow: 0 0 0 1px rgb(45, 45, 45);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(75, 75, 75);
  --bases-embed-border-color: rgb(45, 45, 45);
  --bases-group-heading-property-color: rgb(200, 200, 200);
  --bases-table-border-color: rgb(45, 45, 45);
  --bases-table-cell-background-active: rgb(15, 15, 15);
  --bases-table-cell-background-disabled: rgb(27, 27, 27);
  --bases-table-cell-background-selected: rgba(158, 110, 242, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(125, 125, 125);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(158, 110, 242);
  --bases-table-group-background: rgb(27, 27, 27);
  --bases-table-header-background: rgb(15, 15, 15);
  --bases-table-header-color: rgb(200, 200, 200);
  --bases-table-summary-background: rgb(15, 15, 15);
  --blockquote-border-color: rgb(158, 110, 242);
  --blur-background: color-mix(in srgb, rgb(45, 45, 45) 65%, transparent) linear-gradient(rgb(45, 45, 45), color-mix(in srgb, rgb(45, 45, 45) 65%, transparent));
  --bold-weight: 800;
  --canvas-background: rgb(15, 15, 15);
  --canvas-card-label-color: rgb(135, 135, 135);
  --canvas-dot-pattern: rgb(45, 45, 45);
  --caret-color: rgb(245, 245, 245);
  --checkbox-border-color: rgb(135, 135, 135);
  --checkbox-border-color-hover: rgb(200, 200, 200);
  --checkbox-color: rgb(158, 110, 242);
  --checkbox-color-hover: rgb(185, 156, 247);
  --checkbox-marker-color: rgb(15, 15, 15);
  --checklist-done-color: rgb(135, 135, 135);
  --checklist-done-decoration: none;
  --code-background: rgb(27, 27, 27);
  --code-border-color: rgb(45, 45, 45);
  --code-comment: rgb(135, 135, 135);
  --code-normal: rgb(245, 245, 245);
  --code-punctuation: rgb(200, 200, 200);
  --collapse-icon-color: rgb(135, 135, 135);
  --collapse-icon-color-collapsed: rgb(185, 156, 247);
  --color-accent: rgb(158, 110, 242);
  --color-accent-1: rgb(185, 156, 247);
  --color-accent-2: rgb(216, 203, 251);
  --color-accent-hsl: 262, 83%, 69%;
  --color-base-00: rgb(15, 15, 15);
  --color-base-05: rgb(22, 22, 22);
  --color-base-10: rgb(27, 27, 27);
  --color-base-100: rgb(245, 245, 245);
  --color-base-20: rgb(34, 34, 34);
  --color-base-25: rgb(38, 38, 38);
  --color-base-30: rgb(45, 45, 45);
  --color-base-35: rgb(75, 75, 75);
  --color-base-40: rgb(125, 125, 125);
  --color-base-50: rgb(135, 135, 135);
  --color-base-60: rgb(180, 180, 180);
  --color-base-70: rgb(200, 200, 200);
  --divider-color: rgb(45, 45, 45);
  --divider-color-hover: rgb(158, 110, 242);
  --dropdown-background: rgb(45, 45, 45);
  --dropdown-background-hover: rgb(75, 75, 75);
  --embed-block-shadow-hover: 0 0 0 1px rgb(45, 45, 45), inset 0 0 0 1px rgb(45, 45, 45);
  --embed-border-start: 2px solid rgb(158, 110, 242);
  --en-acrylic: blur(8px);
  --en-acrylic-opacity: 0.66;
  --en-modal-backdrop: blur(25px);
  --en-opacity: 1;
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --encore-translucency-strength: 0.25;
  --file-header-background: rgb(15, 15, 15);
  --file-header-background-focused: rgb(15, 15, 15);
  --flair-background: rgb(45, 45, 45);
  --flair-color: rgb(245, 245, 245);
  --footnote-divider-color: rgb(45, 45, 45);
  --footnote-id-color: rgb(200, 200, 200);
  --footnote-id-color-no-occurrences: rgb(135, 135, 135);
  --footnote-line-height: 1.65;
  --grain: url("data:image/pngbase64,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");
  --graph-line: rgb(75, 75, 75);
  --graph-node: rgb(200, 200, 200);
  --graph-node-focused: rgb(185, 156, 247);
  --graph-node-unresolved: rgb(135, 135, 135);
  --graph-text: rgb(245, 245, 245);
  --grey-100-rgb: 245, 245, 245;
  --grey-200-rgb: 200, 200, 200;
  --grey-300-rgb: 180, 180, 180;
  --grey-350-rgb: 135, 135, 135;
  --grey-400-rgb: 125, 125, 125;
  --grey-50-rgb: 250, 250, 250;
  --grey-500-rgb: 75, 75, 75;
  --grey-600-rgb: 45, 45, 45;
  --grey-700-rgb: 38, 38, 38;
  --grey-800-rgb: 34, 34, 34;
  --grey-850-rgb: 27, 27, 27;
  --grey-875-rgb: 22, 22, 22;
  --grey-900-rgb: 15, 15, 15;
  --h1-color: rgba(245, 245, 245, 0.9);
  --h1-line-height: 1.111;
  --h1-size: 2.25rem;
  --h1-weight: 800;
  --h2-color: rgba(245, 245, 245, 0.925);
  --h2-line-height: 1.333;
  --h2-size: 1.5rem;
  --h2-weight: 700;
  --h3-color: rgba(245, 245, 245, 0.95);
  --h3-line-height: 1.6;
  --h3-size: 1.25rem;
  --h3-weight: 600;
  --h4-color: rgba(245, 245, 245, 0.975);
  --h4-line-height: 1.5;
  --h4-size: 1rem;
  --h4-weight: 600;
  --h5-line-height: 1.6;
  --h5-size: 0.95rem;
  --h5-weight: 600;
  --h6-line-height: 1.7;
  --h6-size: 0.85rem;
  --header-height: 44px;
  --heading-formatting: rgb(135, 135, 135);
  --highlight-hue: 37;
  --hr-color: #ffffff90;
  --hr-thickness: 1px;
  --icon-color: rgb(200, 200, 200);
  --icon-color-active: rgb(185, 156, 247);
  --icon-color-focused: rgb(245, 245, 245);
  --icon-color-hover: rgb(200, 200, 200);
  --inline-title-color: rgb(216, 203, 251);
  --inline-title-line-height: 1.111;
  --inline-title-size: 2.25rem;
  --inline-title-weight: 800;
  --input-date-separator: rgb(135, 135, 135);
  --input-placeholder-color: rgb(135, 135, 135);
  --interactive-accent: rgb(158, 110, 242);
  --interactive-accent-hover: rgb(185, 156, 247);
  --interactive-accent-hsl: 262, 83%, 69%;
  --interactive-hover: rgb(75, 75, 75);
  --interactive-normal: rgb(45, 45, 45);
  --line-height-normal: 1.65;
  --link-color: rgb(216, 203, 251);
  --link-color-hover: rgb(216, 203, 251);
  --link-decoration: none;
  --link-external-color: rgb(185, 156, 247);
  --link-external-color-hover: rgb(216, 203, 251);
  --link-unresolved-color: rgb(185, 156, 247);
  --link-unresolved-decoration-color: rgba(158, 110, 242, 0.3);
  --link-unresolved-filter: contrast(0.3) brightness(120%);
  --link-unresolved-opacity: 1;
  --list-marker-color: rgb(125, 125, 125);
  --list-marker-color-collapsed: rgb(185, 156, 247);
  --list-marker-color-hover: rgb(200, 200, 200);
  --lucide-maximize: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E");
  --lucide-minimize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minimize'%3E%3Cpath d='M8 3v3a2 2 0 0 1-2 2H3'/%3E%3Cpath d='M21 8h-3a2 2 0 0 1-2-2V3'/%3E%3Cpath d='M3 16h3a2 2 0 0 1 2 2v3'/%3E%3Cpath d='M16 21v-3a2 2 0 0 1 2-2h3'/%3E%3C/svg%3E");
  --lucide-minus: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --lucide-x: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --menu-background: rgb(34, 34, 34);
  --menu-border-color: rgb(75, 75, 75);
  --metadata-border-color: rgb(45, 45, 45);
  --metadata-divider-color: rgb(45, 45, 45);
  --metadata-input-text-color: rgb(245, 245, 245);
  --metadata-label-text-color: rgb(200, 200, 200);
  --metadata-label-text-color-hover: rgb(200, 200, 200);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(125, 125, 125);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(75, 75, 75);
  --modal-background: rgb(15, 15, 15);
  --modal-border-color: rgb(125, 125, 125);
  --nav-collapse-icon-color: rgb(135, 135, 135);
  --nav-collapse-icon-color-collapsed: rgb(135, 135, 135);
  --nav-heading-color: rgb(245, 245, 245);
  --nav-heading-color-collapsed: rgb(135, 135, 135);
  --nav-heading-color-collapsed-hover: rgb(200, 200, 200);
  --nav-heading-color-hover: rgb(245, 245, 245);
  --nav-item-background-selected: rgba(158, 110, 242, 0.15);
  --nav-item-color: rgb(200, 200, 200);
  --nav-item-color-active: rgb(245, 245, 245);
  --nav-item-color-highlighted: rgb(185, 156, 247);
  --nav-item-color-hover: rgb(245, 245, 245);
  --nav-item-color-selected: rgb(245, 245, 245);
  --nav-tag-color: rgb(135, 135, 135);
  --nav-tag-color-active: rgb(200, 200, 200);
  --nav-tag-color-hover: rgb(200, 200, 200);
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%23ffffff90' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%2300000090' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --pdf-background: rgb(15, 15, 15);
  --pdf-page-background: rgb(15, 15, 15);
  --pdf-shadow: 0 0 0 1px rgb(45, 45, 45);
  --pdf-sidebar-background: rgb(15, 15, 15);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(45, 45, 45);
  --pill-border-color: rgb(45, 45, 45);
  --pill-border-color-hover: rgb(75, 75, 75);
  --pill-color: rgb(200, 200, 200);
  --pill-color-hover: rgb(245, 245, 245);
  --pill-color-remove: rgb(135, 135, 135);
  --pill-color-remove-hover: rgb(185, 156, 247);
  --prompt-background: rgb(15, 15, 15);
  --prompt-border-color: rgb(125, 125, 125);
  --raised-background: color-mix(in srgb, rgb(45, 45, 45) 65%, transparent) linear-gradient(rgb(45, 45, 45), color-mix(in srgb, rgb(45, 45, 45) 65%, transparent));
  --ribbon-background: rgb(34, 34, 34);
  --ribbon-background-collapsed: rgb(15, 15, 15);
  --search-clear-button-color: rgb(200, 200, 200);
  --search-icon-color: rgb(200, 200, 200);
  --search-result-background: rgb(15, 15, 15);
  --setting-group-heading-color: rgb(245, 245, 245);
  --setting-items-background: rgb(27, 27, 27);
  --setting-items-border-color: rgb(45, 45, 45);
  --slider-thumb-border-color: rgb(75, 75, 75);
  --slider-track-background: rgb(45, 45, 45);
  --status-bar-background: rgb(34, 34, 34);
  --status-bar-border-color: rgb(45, 45, 45);
  --status-bar-text-color: rgb(200, 200, 200);
  --suggestion-background: rgb(15, 15, 15);
  --tab-background-active: rgb(15, 15, 15);
  --tab-container-background: transparent;
  --tab-divider-color: rgb(75, 75, 75);
  --tab-height: 38px;
  --tab-outline-color: rgb(45, 45, 45);
  --tab-radius: 6px;
  --tab-stacked-header-width: 44px;
  --tab-switcher-background: rgb(34, 34, 34);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(34, 34, 34), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(158, 110, 242);
  --tab-text-color: rgb(135, 135, 135);
  --tab-text-color-active: rgb(200, 200, 200);
  --tab-text-color-focused: rgb(200, 200, 200);
  --tab-text-color-focused-active: rgb(200, 200, 200);
  --tab-text-color-focused-active-current: rgb(245, 245, 245);
  --tab-text-color-focused-highlighted: rgb(185, 156, 247);
  --table-add-button-border-color: rgb(45, 45, 45);
  --table-border-color: rgb(45, 45, 45);
  --table-drag-handle-background-active: rgb(158, 110, 242);
  --table-drag-handle-color: rgb(135, 135, 135);
  --table-header-border-color: rgb(45, 45, 45);
  --table-header-color: rgb(245, 245, 245);
  --table-selection: rgba(158, 110, 242, 0.1);
  --table-selection-border-color: rgb(158, 110, 242);
  --tag-background: rgba(158, 110, 242, 0.1);
  --tag-background-hover: rgba(158, 110, 242, 0.2);
  --tag-border-color: rgba(158, 110, 242, 0.15);
  --tag-border-color-hover: rgba(158, 110, 242, 0.15);
  --tag-color: rgb(185, 156, 247);
  --tag-color-hover: rgb(185, 156, 247);
  --text-accent: rgb(185, 156, 247);
  --text-accent-hover: rgb(216, 203, 251);
  --text-faint: rgb(135, 135, 135);
  --text-muted: rgb(200, 200, 200);
  --text-normal: rgb(245, 245, 245);
  --text-selection: rgba(158, 110, 242, 0.33);
  --titlebar-background: rgb(34, 34, 34);
  --titlebar-background-focused: rgb(45, 45, 45);
  --titlebar-border-color: rgb(45, 45, 45);
  --titlebar-text-color: rgb(200, 200, 200);
  --titlebar-text-color-focused: rgb(245, 245, 245);
  --traffic-lights-offset-x: 44px;
  --traffic-lights-offset-y: 44px;
  --vault-profile-color: rgb(245, 245, 245);
  --vault-profile-color-hover: rgb(245, 245, 245);
  --workspace-background-translucent: rgba(15, 15, 15, 0.2);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(245, 245, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
  color: rgb(245, 245, 245);
}

body div#quartz-root {
  background-color: rgb(15, 15, 15);
  color: rgb(245, 245, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body .page article p > em, em {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body .page article p > i, i {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body .page article p > strong, strong {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body .text-highlight {
  background-color: rgba(153, 94, 0, 0.5);
  color: rgb(255, 239, 214);
  outline: rgb(255, 239, 214) none 0px;
  text-decoration: rgb(255, 239, 214);
  text-decoration-color: rgb(255, 239, 214);
}

body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: line-through rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body p {
  color: rgb(200, 200, 200);
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}`,
    links: `body a.external, footer a {
  color: rgb(186, 158, 247);
  outline: rgb(186, 158, 247) none 0px;
  text-decoration: underline rgb(186, 158, 247);
  text-decoration-color: rgb(186, 158, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(216, 203, 251);
  outline: rgb(216, 203, 251) none 0px;
  text-decoration: rgb(216, 203, 251);
  text-decoration-color: rgb(216, 203, 251);
}

body a.internal.broken {
  color: rgb(186, 158, 247);
  filter: contrast(0.3) brightness(1.2);
  outline: rgb(186, 158, 247) none 0px;
  text-decoration: rgba(158, 110, 242, 0.3);
  text-decoration-color: rgba(158, 110, 242, 0.3);
}`,
    lists: `body dd {
  color: rgb(245, 245, 245);
}

body dt {
  color: rgb(245, 245, 245);
}

body ol > li {
  color: rgb(245, 245, 245);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body ul > li {
  color: rgb(245, 245, 245);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(135, 135, 135);
  text-decoration: rgb(135, 135, 135);
}

body blockquote {
  background-color: rgb(27, 27, 27);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body table {
  color: rgb(245, 245, 245);
}

body td {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}

body th {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}

body pre > code, pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    images: `body audio {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body figcaption {
  color: rgb(245, 245, 245);
}

body figure {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body img {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body video {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 38, 38);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(45, 45, 45);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 14px;
  padding-right: 14px;
}

body .footnotes {
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .transclude {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 38, 38);
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(45, 45, 45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .transclude-inner {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 38, 38);
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(45, 45, 45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(135, 135, 135);
  text-decoration: rgb(135, 135, 135);
  text-decoration-color: rgb(135, 135, 135);
}

body input[type=checkbox] {
  border-bottom-color: rgb(135, 135, 135);
  border-left-color: rgb(135, 135, 135);
  border-right-color: rgb(135, 135, 135);
  border-top-color: rgb(135, 135, 135);
}

body li.task-list-item[data-task='!'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}`,
    search: `body .search > .search-button {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 245, 245);
  border-left-width: 0px;
  border-right-color: rgb(245, 245, 245);
  border-right-width: 0px;
  border-top-color: rgb(245, 245, 245);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(180, 180, 180);
  outline: rgb(180, 180, 180) none 0px;
  text-decoration: rgb(180, 180, 180);
  text-decoration-color: rgb(180, 180, 180);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 245, 245);
  border-left-width: 0px;
  border-right-color: rgb(245, 245, 245);
  border-right-width: 0px;
  border-top-color: rgb(245, 245, 245);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(158, 110, 242, 0.1);
  border-bottom-color: rgba(158, 110, 242, 0.15);
  border-left-color: rgba(158, 110, 242, 0.15);
  border-right-color: rgba(158, 110, 242, 0.15);
  border-top-color: rgba(158, 110, 242, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(186, 158, 247);
}

body h1 {
  color: rgba(245, 245, 245, 0.9);
}

body h2 {
  color: rgba(245, 245, 245, 0.925);
}

body h2.page-title, h2.page-title a {
  color: rgb(216, 203, 251);
}

body h3 {
  color: rgba(245, 245, 245, 0.95);
}

body h4 {
  color: rgba(245, 245, 245, 0.976);
}

body h5 {
  color: rgb(245, 245, 245);
}

body h6 {
  color: rgb(245, 245, 245);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(200, 200, 200);
  text-decoration: rgb(200, 200, 200);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(200, 200, 200);
  text-decoration: rgb(200, 200, 200);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(200, 200, 200);
  text-decoration: rgb(200, 200, 200);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}`,
    footer: `body footer {
  background-color: rgba(45, 45, 45, 0.5);
  border-bottom-color: rgb(200, 200, 200);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(200, 200, 200);
  border-left-width: 0px;
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: rgb(200, 200, 200);
}

body footer ul li a {
  color: rgb(200, 200, 200);
  text-decoration: rgb(200, 200, 200);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(245, 245, 245);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(200, 200, 200);
  text-decoration: rgb(200, 200, 200);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(200, 200, 200);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body li.section-li > .section .meta {
  color: rgb(200, 200, 200);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(200, 200, 200);
  text-decoration: rgb(200, 200, 200);
}

body ul.section-ul {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(158, 110, 242);
  border-left-color: rgb(158, 110, 242);
  border-right-color: rgb(158, 110, 242);
  border-top-color: rgb(158, 110, 242);
  color: rgb(158, 110, 242);
}

body .darkmode svg {
  color: rgb(158, 110, 242);
  stroke: rgb(158, 110, 242);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

body .breadcrumb-element p {
  color: rgb(135, 135, 135);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .metadata {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(200, 200, 200);
}

body .metadata-properties {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

body .navigation-progress {
  background-color: rgba(45, 45, 45, 0.5);
}

body .page-header h2.page-title {
  color: rgb(245, 245, 245);
}

body abbr {
  color: rgb(245, 245, 245);
  text-decoration: underline dotted rgb(245, 245, 245);
}

body details {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body input[type=text] {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

body kbd {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body progress {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body sub {
  color: rgb(245, 245, 245);
}

body summary {
  color: rgb(245, 245, 245);
}

body sup {
  color: rgb(245, 245, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254;
  --accent-l: 40%;
  --accent-s: 40%;
  --background-modifier-active-hover: rgba(80, 61, 143, 0.1);
  --background-modifier-border: rgb(209, 213, 219);
  --background-modifier-border-focus: rgb(107, 114, 128);
  --background-modifier-border-hover: rgb(156, 163, 175);
  --background-modifier-form-field: rgb(255, 255, 255);
  --background-modifier-form-field-hover: rgb(255, 255, 255);
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(250, 250, 250);
  --background-secondary: rgb(243, 244, 246);
  --background-secondary-alt: rgb(250, 250, 250);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(250, 250, 250);
  --bases-cards-shadow: 0 0 0 1px rgb(209, 213, 219);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(156, 163, 175);
  --bases-embed-border-color: rgb(209, 213, 219);
  --bases-group-heading-property-color: rgb(55, 65, 81);
  --bases-table-border-color: rgb(209, 213, 219);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(250, 250, 250);
  --bases-table-cell-background-selected: rgba(80, 61, 143, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(107, 114, 128);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(85, 66, 154);
  --bases-table-group-background: rgb(250, 250, 250);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-color: rgb(55, 65, 81);
  --bases-table-summary-background: rgb(255, 255, 255);
  --blockquote-border-color: rgb(85, 66, 154);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --bold-weight: 800;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgb(90, 90, 90);
  --canvas-dot-pattern: rgb(209, 213, 219);
  --caret-color: rgb(31, 41, 55);
  --checkbox-border-color: rgb(90, 90, 90);
  --checkbox-border-color-hover: rgb(55, 65, 81);
  --checkbox-color: rgb(85, 66, 154);
  --checkbox-color-hover: rgb(87, 69, 165);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checklist-done-color: rgb(90, 90, 90);
  --checklist-done-decoration: none;
  --code-background: rgb(250, 250, 250);
  --code-border-color: rgb(209, 213, 219);
  --code-comment: rgb(90, 90, 90);
  --code-normal: rgb(31, 41, 55);
  --code-punctuation: rgb(55, 65, 81);
  --collapse-icon-color: rgb(90, 90, 90);
  --collapse-icon-color-collapsed: rgb(80, 61, 143);
  --color-accent: rgb(80, 61, 143);
  --color-accent-1: rgb(85, 66, 154);
  --color-accent-2: rgb(87, 69, 165);
  --color-accent-hsl: 254, 40%, 40%;
  --color-base-00: rgb(255, 255, 255);
  --color-base-05: rgb(250, 250, 250);
  --color-base-10: rgb(250, 250, 250);
  --color-base-100: rgb(31, 41, 55);
  --color-base-20: rgb(243, 244, 246);
  --color-base-25: rgb(228, 228, 231);
  --color-base-30: rgb(209, 213, 219);
  --color-base-35: rgb(156, 163, 175);
  --color-base-40: rgb(107, 114, 128);
  --color-base-50: rgb(90, 90, 90);
  --color-base-60: rgb(75, 85, 99);
  --color-base-70: rgb(55, 65, 81);
  --divider-color: rgb(209, 213, 219);
  --divider-color-hover: rgb(85, 66, 154);
  --dropdown-background: rgb(255, 255, 255);
  --dropdown-background-hover: rgb(250, 250, 250);
  --embed-block-shadow-hover: 0 0 0 1px rgb(209, 213, 219), inset 0 0 0 1px rgb(209, 213, 219);
  --embed-border-start: 2px solid rgb(85, 66, 154);
  --en-acrylic: blur(8px);
  --en-acrylic-opacity: 0.66;
  --en-modal-backdrop: blur(25px);
  --en-opacity: 1;
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --encore-translucency-strength: 0.25;
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --flair-background: rgb(255, 255, 255);
  --flair-color: rgb(31, 41, 55);
  --footnote-divider-color: rgb(209, 213, 219);
  --footnote-id-color: rgb(55, 65, 81);
  --footnote-id-color-no-occurrences: rgb(90, 90, 90);
  --footnote-line-height: 1.65;
  --grain: url("data:image/pngbase64,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");
  --graph-line: rgb(156, 163, 175);
  --graph-node: rgb(55, 65, 81);
  --graph-node-focused: rgb(80, 61, 143);
  --graph-node-unresolved: rgb(90, 90, 90);
  --graph-text: rgb(31, 41, 55);
  --grey-100-rgb: 31, 41, 55;
  --grey-200-rgb: 55, 65, 81;
  --grey-300-rgb: 75, 85, 99;
  --grey-350-rgb: 90, 90, 90;
  --grey-400-rgb: 107, 114, 128;
  --grey-50-rgb: 17, 24, 39;
  --grey-500-rgb: 156, 163, 175;
  --grey-600-rgb: 209, 213, 219;
  --grey-700-rgb: 228, 228, 231;
  --grey-800-rgb: 243, 244, 246;
  --grey-850-rgb: 250, 250, 250;
  --grey-875-rgb: 250, 250, 250;
  --grey-900-rgb: 255, 255, 255;
  --h1-color: rgba(31, 41, 55, 0.9);
  --h1-line-height: 1.111;
  --h1-size: 2.25rem;
  --h1-weight: 800;
  --h2-color: rgba(31, 41, 55, 0.925);
  --h2-line-height: 1.333;
  --h2-size: 1.5rem;
  --h2-weight: 700;
  --h3-color: rgba(31, 41, 55, 0.95);
  --h3-line-height: 1.6;
  --h3-size: 1.25rem;
  --h3-weight: 600;
  --h4-color: rgba(31, 41, 55, 0.975);
  --h4-line-height: 1.5;
  --h4-size: 1rem;
  --h4-weight: 600;
  --h5-line-height: 1.6;
  --h5-size: 0.95rem;
  --h5-weight: 600;
  --h6-line-height: 1.7;
  --h6-size: 0.85rem;
  --header-height: 44px;
  --heading-formatting: rgb(90, 90, 90);
  --highlight-hue: 37;
  --hr-color: #00000090;
  --hr-thickness: 1px;
  --icon-color: rgb(55, 65, 81);
  --icon-color-active: rgb(80, 61, 143);
  --icon-color-focused: rgb(31, 41, 55);
  --icon-color-hover: rgb(55, 65, 81);
  --inline-title-color: rgb(87, 69, 165);
  --inline-title-line-height: 1.111;
  --inline-title-size: 2.25rem;
  --inline-title-weight: 800;
  --input-date-separator: rgb(90, 90, 90);
  --input-placeholder-color: rgb(90, 90, 90);
  --interactive-accent: rgb(85, 66, 154);
  --interactive-accent-hover: rgb(87, 69, 165);
  --interactive-accent-hsl: 254, 40%, 40%;
  --interactive-hover: rgb(250, 250, 250);
  --interactive-normal: rgb(255, 255, 255);
  --line-height-normal: 1.65;
  --link-color: rgb(87, 69, 165);
  --link-color-hover: rgb(87, 69, 165);
  --link-decoration: none;
  --link-external-color: rgb(80, 61, 143);
  --link-external-color-hover: rgb(87, 69, 165);
  --link-unresolved-color: rgb(80, 61, 143);
  --link-unresolved-decoration-color: rgba(80, 61, 143, 0.3);
  --link-unresolved-filter: contrast(0.3) brightness(120%);
  --link-unresolved-opacity: 1;
  --list-marker-color: rgb(107, 114, 128);
  --list-marker-color-collapsed: rgb(80, 61, 143);
  --list-marker-color-hover: rgb(55, 65, 81);
  --lucide-maximize: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E");
  --lucide-minimize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minimize'%3E%3Cpath d='M8 3v3a2 2 0 0 1-2 2H3'/%3E%3Cpath d='M21 8h-3a2 2 0 0 1-2-2V3'/%3E%3Cpath d='M3 16h3a2 2 0 0 1 2 2v3'/%3E%3Cpath d='M16 21v-3a2 2 0 0 1 2-2h3'/%3E%3C/svg%3E");
  --lucide-minus: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --lucide-x: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --menu-background: rgb(243, 244, 246);
  --menu-border-color: rgb(156, 163, 175);
  --metadata-border-color: rgb(209, 213, 219);
  --metadata-divider-color: rgb(209, 213, 219);
  --metadata-input-text-color: rgb(31, 41, 55);
  --metadata-label-text-color: rgb(55, 65, 81);
  --metadata-label-text-color-hover: rgb(55, 65, 81);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(107, 114, 128);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(156, 163, 175);
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: rgb(107, 114, 128);
  --nav-collapse-icon-color: rgb(90, 90, 90);
  --nav-collapse-icon-color-collapsed: rgb(90, 90, 90);
  --nav-heading-color: rgb(31, 41, 55);
  --nav-heading-color-collapsed: rgb(90, 90, 90);
  --nav-heading-color-collapsed-hover: rgb(55, 65, 81);
  --nav-heading-color-hover: rgb(31, 41, 55);
  --nav-item-background-selected: rgba(80, 61, 143, 0.15);
  --nav-item-color: rgb(55, 65, 81);
  --nav-item-color-active: rgb(31, 41, 55);
  --nav-item-color-highlighted: rgb(80, 61, 143);
  --nav-item-color-hover: rgb(31, 41, 55);
  --nav-item-color-selected: rgb(31, 41, 55);
  --nav-tag-color: rgb(90, 90, 90);
  --nav-tag-color-active: rgb(55, 65, 81);
  --nav-tag-color-hover: rgb(55, 65, 81);
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%23ffffff90' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%2300000090' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: rgb(209, 213, 219);
  --pill-border-color-hover: rgb(156, 163, 175);
  --pill-color: rgb(55, 65, 81);
  --pill-color-hover: rgb(31, 41, 55);
  --pill-color-remove: rgb(90, 90, 90);
  --pill-color-remove-hover: rgb(80, 61, 143);
  --prompt-background: rgb(255, 255, 255);
  --prompt-border-color: rgb(107, 114, 128);
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(243, 244, 246);
  --ribbon-background-collapsed: rgb(255, 255, 255);
  --search-clear-button-color: rgb(55, 65, 81);
  --search-icon-color: rgb(55, 65, 81);
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: rgb(31, 41, 55);
  --setting-items-background: rgb(250, 250, 250);
  --setting-items-border-color: rgb(209, 213, 219);
  --slider-thumb-border-color: rgb(156, 163, 175);
  --slider-track-background: rgb(209, 213, 219);
  --status-bar-background: rgb(243, 244, 246);
  --status-bar-border-color: rgb(209, 213, 219);
  --status-bar-text-color: rgb(55, 65, 81);
  --suggestion-background: rgb(255, 255, 255);
  --tab-background-active: rgb(255, 255, 255);
  --tab-container-background: transparent;
  --tab-divider-color: rgb(156, 163, 175);
  --tab-height: 38px;
  --tab-outline-color: rgb(209, 213, 219);
  --tab-radius: 6px;
  --tab-stacked-header-width: 44px;
  --tab-switcher-background: rgb(243, 244, 246);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(243, 244, 246), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(80, 61, 143);
  --tab-text-color: rgb(90, 90, 90);
  --tab-text-color-active: rgb(55, 65, 81);
  --tab-text-color-focused: rgb(55, 65, 81);
  --tab-text-color-focused-active: rgb(55, 65, 81);
  --tab-text-color-focused-active-current: rgb(31, 41, 55);
  --tab-text-color-focused-highlighted: rgb(80, 61, 143);
  --table-add-button-border-color: rgb(209, 213, 219);
  --table-border-color: rgb(209, 213, 219);
  --table-drag-handle-background-active: rgb(85, 66, 154);
  --table-drag-handle-color: rgb(90, 90, 90);
  --table-header-border-color: rgb(209, 213, 219);
  --table-header-color: rgb(31, 41, 55);
  --table-selection: rgba(80, 61, 143, 0.1);
  --table-selection-border-color: rgb(85, 66, 154);
  --tag-background: rgba(80, 61, 143, 0.1);
  --tag-background-hover: rgba(80, 61, 143, 0.2);
  --tag-border-color: rgba(80, 61, 143, 0.15);
  --tag-border-color-hover: rgba(80, 61, 143, 0.15);
  --tag-color: rgb(80, 61, 143);
  --tag-color-hover: rgb(80, 61, 143);
  --text-accent: rgb(80, 61, 143);
  --text-accent-hover: rgb(87, 69, 165);
  --text-faint: rgb(90, 90, 90);
  --text-muted: rgb(55, 65, 81);
  --text-normal: rgb(31, 41, 55);
  --text-selection: rgba(80, 61, 143, 0.2);
  --titlebar-background: rgb(243, 244, 246);
  --titlebar-background-focused: rgb(250, 250, 250);
  --titlebar-border-color: rgb(209, 213, 219);
  --titlebar-text-color: rgb(55, 65, 81);
  --titlebar-text-color-focused: rgb(31, 41, 55);
  --traffic-lights-offset-x: 44px;
  --traffic-lights-offset-y: 44px;
  --vault-profile-color: rgb(31, 41, 55);
  --vault-profile-color-hover: rgb(31, 41, 55);
  --workspace-background-translucent: rgba(228, 228, 231, 0.7);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(31, 41, 55);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(31, 41, 55);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(31, 41, 55);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
  color: rgb(31, 41, 55);
}

body div#quartz-root {
  background-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}`,
    typography: `body .page article p > b, b {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body .page article p > em, em {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body .page article p > i, i {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body .page article p > strong, strong {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body .text-highlight {
  background-color: rgba(153, 94, 0, 0.5);
  color: rgb(255, 239, 214);
  outline: rgb(255, 239, 214) none 0px;
  text-decoration: rgb(255, 239, 214);
  text-decoration-color: rgb(255, 239, 214);
}

body del {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration: line-through rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body p {
  color: rgb(55, 65, 81);
  outline: rgb(55, 65, 81) none 0px;
  text-decoration: rgb(55, 65, 81);
  text-decoration-color: rgb(55, 65, 81);
}`,
    links: `body a.external, footer a {
  color: rgb(80, 61, 143);
  outline: rgb(80, 61, 143) none 0px;
  text-decoration: underline rgb(80, 61, 143);
  text-decoration-color: rgb(80, 61, 143);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(87, 69, 165);
  outline: rgb(87, 69, 165) none 0px;
  text-decoration: rgb(87, 69, 165);
  text-decoration-color: rgb(87, 69, 165);
}

body a.internal.broken {
  color: rgb(80, 61, 143);
  filter: contrast(0.3) brightness(1.2);
  outline: rgb(80, 61, 143) none 0px;
  text-decoration: rgba(80, 61, 143, 0.3);
  text-decoration-color: rgba(80, 61, 143, 0.3);
}`,
    lists: `body dd {
  color: rgb(31, 41, 55);
}

body dt {
  color: rgb(31, 41, 55);
}

body ol > li {
  color: rgb(31, 41, 55);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body ul > li {
  color: rgb(31, 41, 55);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}

body blockquote {
  background-color: rgb(250, 250, 250);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body table {
  color: rgb(31, 41, 55);
}

body td {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}

body th {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}`,
    code: `body code {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body pre:has(> code) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    images: `body audio {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body figcaption {
  color: rgb(31, 41, 55);
}

body figure {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body img {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body video {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(228, 228, 231);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(228, 228, 231);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(228, 228, 231);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(209, 213, 219);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 14px;
  padding-right: 14px;
}

body .footnotes {
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

body .transclude {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(228, 228, 231);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(228, 228, 231);
  border-left-width: 1px;
  border-right-color: rgb(228, 228, 231);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(209, 213, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .transclude-inner {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(228, 228, 231);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(228, 228, 231);
  border-left-width: 1px;
  border-right-color: rgb(228, 228, 231);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(209, 213, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body input[type=checkbox] {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='!'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='*'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='-'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='/'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='>'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='?'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='I'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='S'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='b'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='c'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='d'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='f'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='i'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='k'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='l'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='p'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='u'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

body li.task-list-item[data-task='w'] {
  color: rgb(31, 41, 55);
  text-decoration: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(31, 41, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(31, 41, 55);
  border-left-width: 0px;
  border-right-color: rgb(31, 41, 55);
  border-right-width: 0px;
  border-top-color: rgb(31, 41, 55);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(75, 85, 99);
  outline: rgb(75, 85, 99) none 0px;
  text-decoration: rgb(75, 85, 99);
  text-decoration-color: rgb(75, 85, 99);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(31, 41, 55);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(31, 41, 55);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 41, 55);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(31, 41, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(31, 41, 55);
  border-left-width: 0px;
  border-right-color: rgb(31, 41, 55);
  border-right-width: 0px;
  border-top-color: rgb(31, 41, 55);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 41, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 41, 55);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(80, 61, 143, 0.1);
  border-bottom-color: rgba(80, 61, 143, 0.15);
  border-left-color: rgba(80, 61, 143, 0.15);
  border-right-color: rgba(80, 61, 143, 0.15);
  border-top-color: rgba(80, 61, 143, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(80, 61, 143);
}

body h1 {
  color: rgba(31, 41, 55, 0.9);
}

body h2 {
  color: rgba(31, 41, 55, 0.925);
}

body h2.page-title, h2.page-title a {
  color: rgb(87, 69, 165);
}

body h3 {
  color: rgba(31, 41, 55, 0.95);
}

body h4 {
  color: rgba(31, 41, 55, 0.976);
}

body h5 {
  color: rgb(31, 41, 55);
}

body h6 {
  color: rgb(31, 41, 55);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

body ::-webkit-scrollbar-corner {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

body ::-webkit-scrollbar-track {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(55, 65, 81);
  text-decoration: rgb(55, 65, 81);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(55, 65, 81);
  text-decoration: rgb(55, 65, 81);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(55, 65, 81);
  text-decoration: rgb(55, 65, 81);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}`,
    footer: `body footer {
  background-color: rgba(209, 213, 219, 0.5);
  border-bottom-color: rgb(55, 65, 81);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(55, 65, 81);
  border-left-width: 0px;
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: rgb(55, 65, 81);
}

body footer ul li a {
  color: rgb(55, 65, 81);
  text-decoration: rgb(55, 65, 81);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(31, 41, 55);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(55, 65, 81);
  text-decoration: rgb(55, 65, 81);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(55, 65, 81);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body li.section-li > .section .meta {
  color: rgb(55, 65, 81);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(55, 65, 81);
  text-decoration: rgb(55, 65, 81);
}

body ul.section-ul {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(85, 65, 154);
  border-left-color: rgb(85, 65, 154);
  border-right-color: rgb(85, 65, 154);
  border-top-color: rgb(85, 65, 154);
  color: rgb(85, 65, 154);
}

body .darkmode svg {
  color: rgb(85, 65, 154);
  stroke: rgb(85, 65, 154);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}

body .breadcrumb-element p {
  color: rgb(90, 90, 90);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

body .metadata {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(55, 65, 81);
}

body .metadata-properties {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}

body .navigation-progress {
  background-color: rgba(209, 213, 219, 0.5);
}

body .page-header h2.page-title {
  color: rgb(31, 41, 55);
}

body abbr {
  color: rgb(31, 41, 55);
  text-decoration: underline dotted rgb(31, 41, 55);
}

body details {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body input[type=text] {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}

body kbd {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

body progress {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

body sub {
  color: rgb(31, 41, 55);
}

body summary {
  color: rgb(31, 41, 55);
}

body sup {
  color: rgb(31, 41, 55);
}`,
  },
};
