import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "encore", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 262 !important;
  --accent-l: 69% !important;
  --accent-s: 83% !important;
  --background-modifier-active-hover: hsla(262, 83%, 69%, 0.1) !important;
  --background-modifier-border: rgb(45, 45, 45) !important;
  --background-modifier-border-focus: rgb(125, 125, 125) !important;
  --background-modifier-border-hover: rgb(75, 75, 75) !important;
  --background-modifier-form-field: rgb(38, 38, 38) !important;
  --background-modifier-form-field-hover: rgb(38, 38, 38) !important;
  --background-primary: rgb(15, 15, 15) !important;
  --background-primary-alt: rgb(27, 27, 27) !important;
  --background-secondary: rgb(34, 34, 34) !important;
  --background-secondary-alt: rgb(45, 45, 45) !important;
  --bases-cards-background: rgb(15, 15, 15) !important;
  --bases-cards-cover-background: rgb(27, 27, 27) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(45, 45, 45) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(75, 75, 75) !important;
  --bases-embed-border-color: rgb(45, 45, 45) !important;
  --bases-group-heading-property-color: rgb(200, 200, 200) !important;
  --bases-table-border-color: rgb(45, 45, 45) !important;
  --bases-table-cell-background-active: rgb(15, 15, 15) !important;
  --bases-table-cell-background-disabled: rgb(27, 27, 27) !important;
  --bases-table-cell-background-selected: hsla(262, 83%, 69%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(125, 125, 125) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(262, 83%, 69%) !important;
  --bases-table-group-background: rgb(27, 27, 27) !important;
  --bases-table-header-background: rgb(15, 15, 15) !important;
  --bases-table-header-color: rgb(200, 200, 200) !important;
  --bases-table-summary-background: rgb(15, 15, 15) !important;
  --blockquote-border-color: hsl(262, 83%, 69%) !important;
  --blur-background: color-mix(in srgb, rgb(45, 45, 45) 65%, transparent) linear-gradient(rgb(45, 45, 45), color-mix(in srgb, rgb(45, 45, 45) 65%, transparent)) !important;
  --bold-weight: 800 !important;
  --canvas-background: rgb(15, 15, 15) !important;
  --canvas-card-label-color: rgb(135, 135, 135) !important;
  --canvas-dot-pattern: rgb(45, 45, 45) !important;
  --caret-color: rgb(245, 245, 245) !important;
  --checkbox-border-color: rgb(135, 135, 135) !important;
  --checkbox-border-color-hover: rgb(200, 200, 200) !important;
  --checkbox-color: hsl(262, 83%, 69%) !important;
  --checkbox-color-hover: hsl(259, 84.66%, 79.35%) !important;
  --checkbox-marker-color: rgb(15, 15, 15) !important;
  --checklist-done-color: rgb(135, 135, 135) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(27, 27, 27) !important;
  --code-border-color: rgb(45, 45, 45) !important;
  --code-comment: rgb(135, 135, 135) !important;
  --code-normal: rgb(245, 245, 245) !important;
  --code-punctuation: rgb(200, 200, 200) !important;
  --collapse-icon-color: rgb(135, 135, 135) !important;
  --collapse-icon-color-collapsed: hsl(259, 84.66%, 79.35%) !important;
  --color-accent: hsl(262, 83%, 69%) !important;
  --color-accent-1: hsl(259, 84.66%, 79.35%) !important;
  --color-accent-2: hsl(257, 87.15%, 89.01%) !important;
  --color-accent-hsl: 262, 83%, 69% !important;
  --color-base-00: rgb(15, 15, 15) !important;
  --color-base-05: rgb(22, 22, 22) !important;
  --color-base-10: rgb(27, 27, 27) !important;
  --color-base-100: rgb(245, 245, 245) !important;
  --color-base-20: rgb(34, 34, 34) !important;
  --color-base-25: rgb(38, 38, 38) !important;
  --color-base-30: rgb(45, 45, 45) !important;
  --color-base-35: rgb(75, 75, 75) !important;
  --color-base-40: rgb(125, 125, 125) !important;
  --color-base-50: rgb(135, 135, 135) !important;
  --color-base-60: rgb(180, 180, 180) !important;
  --color-base-70: rgb(200, 200, 200) !important;
  --dark: rgb(245, 245, 245) !important;
  --darkgray: rgb(245, 245, 245) !important;
  --divider-color: rgb(45, 45, 45) !important;
  --divider-color-hover: hsl(262, 83%, 69%) !important;
  --dropdown-background: rgb(45, 45, 45) !important;
  --dropdown-background-hover: rgb(75, 75, 75) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(45, 45, 45), inset 0 0 0 1px rgb(45, 45, 45) !important;
  --embed-border-start: 2px solid hsl(262, 83%, 69%) !important;
  --en-acrylic: blur(8px) !important;
  --en-acrylic-opacity: 0.66 !important;
  --en-modal-backdrop: blur(25px) !important;
  --en-opacity: 1 !important;
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") !important;
  --encore-translucency-strength: 0.25 !important;
  --file-header-background: rgb(15, 15, 15) !important;
  --file-header-background-focused: rgb(15, 15, 15) !important;
  --flair-background: rgb(45, 45, 45) !important;
  --flair-color: rgb(245, 245, 245) !important;
  --footnote-divider-color: rgb(45, 45, 45) !important;
  --footnote-id-color: rgb(200, 200, 200) !important;
  --footnote-id-color-no-occurrences: rgb(135, 135, 135) !important;
  --footnote-line-height: 1.65 !important;
  --grain: url("data:image/pngbase64,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") !important;
  --graph-line: rgb(75, 75, 75) !important;
  --graph-node: rgb(200, 200, 200) !important;
  --graph-node-focused: hsl(259, 84.66%, 79.35%) !important;
  --graph-node-unresolved: rgb(135, 135, 135) !important;
  --graph-text: rgb(245, 245, 245) !important;
  --gray: rgb(200, 200, 200) !important;
  --grey-100-rgb: 245, 245, 245 !important;
  --grey-200-rgb: 200, 200, 200 !important;
  --grey-300-rgb: 180, 180, 180 !important;
  --grey-350-rgb: 135, 135, 135 !important;
  --grey-400-rgb: 125, 125, 125 !important;
  --grey-50-rgb: 250, 250, 250 !important;
  --grey-500-rgb: 75, 75, 75 !important;
  --grey-600-rgb: 45, 45, 45 !important;
  --grey-700-rgb: 38, 38, 38 !important;
  --grey-800-rgb: 34, 34, 34 !important;
  --grey-850-rgb: 27, 27, 27 !important;
  --grey-875-rgb: 22, 22, 22 !important;
  --grey-900-rgb: 15, 15, 15 !important;
  --h1-color: rgba(245, 245, 245, 0.9) !important;
  --h1-line-height: 1.111 !important;
  --h1-size: 2.25rem !important;
  --h1-weight: 800 !important;
  --h2-color: rgba(245, 245, 245, 0.925) !important;
  --h2-line-height: 1.333 !important;
  --h2-size: 1.5rem !important;
  --h2-weight: 700 !important;
  --h3-color: rgba(245, 245, 245, 0.95) !important;
  --h3-line-height: 1.6 !important;
  --h3-size: 1.25rem !important;
  --h3-weight: 600 !important;
  --h4-color: rgba(245, 245, 245, 0.975) !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1rem !important;
  --h4-weight: 600 !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 0.95rem !important;
  --h5-weight: 600 !important;
  --h6-line-height: 1.7 !important;
  --h6-size: 0.85rem !important;
  --header-height: 44px !important;
  --heading-formatting: rgb(135, 135, 135) !important;
  --highlight: hsla(262, 83%, 69%, 0.1) !important;
  --highlight-hue: 37 !important;
  --hr-color: #ffffff90 !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(200, 200, 200) !important;
  --icon-color-active: hsl(259, 84.66%, 79.35%) !important;
  --icon-color-focused: rgb(245, 245, 245) !important;
  --icon-color-hover: rgb(200, 200, 200) !important;
  --inline-title-color: hsl(257, 87.15%, 89.01%) !important;
  --inline-title-line-height: 1.111 !important;
  --inline-title-size: 2.25rem !important;
  --inline-title-weight: 800 !important;
  --input-date-separator: rgb(135, 135, 135) !important;
  --input-placeholder-color: rgb(135, 135, 135) !important;
  --interactive-accent: hsl(262, 83%, 69%) !important;
  --interactive-accent-hover: hsl(259, 84.66%, 79.35%) !important;
  --interactive-accent-hsl: 262, 83%, 69% !important;
  --interactive-hover: rgb(75, 75, 75) !important;
  --interactive-normal: rgb(45, 45, 45) !important;
  --light: rgb(15, 15, 15) !important;
  --lightgray: rgb(34, 34, 34) !important;
  --line-height-normal: 1.65 !important;
  --link-color: hsl(257, 87.15%, 89.01%) !important;
  --link-color-hover: hsl(257, 87.15%, 89.01%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(259, 84.66%, 79.35%) !important;
  --link-external-color-hover: hsl(257, 87.15%, 89.01%) !important;
  --link-unresolved-color: hsl(259, 84.66%, 79.35%) !important;
  --link-unresolved-decoration-color: hsla(262, 83%, 69%, 0.3) !important;
  --link-unresolved-filter: contrast(0.3) brightness(120%) !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: rgb(125, 125, 125) !important;
  --list-marker-color-collapsed: hsl(259, 84.66%, 79.35%) !important;
  --list-marker-color-hover: rgb(200, 200, 200) !important;
  --lucide-maximize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E") !important;
  --lucide-minimize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minimize'%3E%3Cpath d='M8 3v3a2 2 0 0 1-2 2H3'/%3E%3Cpath d='M21 8h-3a2 2 0 0 1-2-2V3'/%3E%3Cpath d='M3 16h3a2 2 0 0 1 2 2v3'/%3E%3Cpath d='M16 21v-3a2 2 0 0 1 2-2h3'/%3E%3C/svg%3E") !important;
  --lucide-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E") !important;
  --lucide-x: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --menu-background: rgb(34, 34, 34) !important;
  --menu-border-color: rgb(75, 75, 75) !important;
  --metadata-border-color: rgb(45, 45, 45) !important;
  --metadata-divider-color: rgb(45, 45, 45) !important;
  --metadata-input-text-color: rgb(245, 245, 245) !important;
  --metadata-label-text-color: rgb(200, 200, 200) !important;
  --metadata-label-text-color-hover: rgb(200, 200, 200) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(125, 125, 125) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(75, 75, 75) !important;
  --modal-background: rgb(15, 15, 15) !important;
  --modal-border-color: rgb(125, 125, 125) !important;
  --nav-collapse-icon-color: rgb(135, 135, 135) !important;
  --nav-collapse-icon-color-collapsed: rgb(135, 135, 135) !important;
  --nav-heading-color: rgb(245, 245, 245) !important;
  --nav-heading-color-collapsed: rgb(135, 135, 135) !important;
  --nav-heading-color-collapsed-hover: rgb(200, 200, 200) !important;
  --nav-heading-color-hover: rgb(245, 245, 245) !important;
  --nav-item-background-selected: hsla(262, 83%, 69%, 0.15) !important;
  --nav-item-color: rgb(200, 200, 200) !important;
  --nav-item-color-active: rgb(245, 245, 245) !important;
  --nav-item-color-highlighted: hsl(259, 84.66%, 79.35%) !important;
  --nav-item-color-hover: rgb(245, 245, 245) !important;
  --nav-item-color-selected: rgb(245, 245, 245) !important;
  --nav-tag-color: rgb(135, 135, 135) !important;
  --nav-tag-color-active: rgb(200, 200, 200) !important;
  --nav-tag-color-hover: rgb(200, 200, 200) !important;
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%23ffffff90' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%2300000090' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --pdf-background: rgb(15, 15, 15) !important;
  --pdf-page-background: rgb(15, 15, 15) !important;
  --pdf-shadow: 0 0 0 1px rgb(45, 45, 45) !important;
  --pdf-sidebar-background: rgb(15, 15, 15) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(45, 45, 45) !important;
  --pill-border-color: rgb(45, 45, 45) !important;
  --pill-border-color-hover: rgb(75, 75, 75) !important;
  --pill-color: rgb(200, 200, 200) !important;
  --pill-color-hover: rgb(245, 245, 245) !important;
  --pill-color-remove: rgb(135, 135, 135) !important;
  --pill-color-remove-hover: hsl(259, 84.66%, 79.35%) !important;
  --prompt-background: rgb(15, 15, 15) !important;
  --prompt-border-color: rgb(125, 125, 125) !important;
  --raised-background: color-mix(in srgb, rgb(45, 45, 45) 65%, transparent) linear-gradient(rgb(45, 45, 45), color-mix(in srgb, rgb(45, 45, 45) 65%, transparent)) !important;
  --ribbon-background: rgb(34, 34, 34) !important;
  --ribbon-background-collapsed: rgb(15, 15, 15) !important;
  --search-clear-button-color: rgb(200, 200, 200) !important;
  --search-icon-color: rgb(200, 200, 200) !important;
  --search-result-background: rgb(15, 15, 15) !important;
  --secondary: hsl(259, 84.66%, 79.35%) !important;
  --setting-group-heading-color: rgb(245, 245, 245) !important;
  --setting-items-background: rgb(27, 27, 27) !important;
  --setting-items-border-color: rgb(45, 45, 45) !important;
  --slider-thumb-border-color: rgb(75, 75, 75) !important;
  --slider-track-background: rgb(45, 45, 45) !important;
  --status-bar-background: rgb(34, 34, 34) !important;
  --status-bar-border-color: rgb(45, 45, 45) !important;
  --status-bar-text-color: rgb(200, 200, 200) !important;
  --suggestion-background: rgb(15, 15, 15) !important;
  --tab-background-active: rgb(15, 15, 15) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: rgb(75, 75, 75) !important;
  --tab-height: 38px !important;
  --tab-outline-color: rgb(45, 45, 45) !important;
  --tab-radius: 6px !important;
  --tab-stacked-header-width: 44px !important;
  --tab-switcher-background: rgb(34, 34, 34) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(34, 34, 34), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(262, 83%, 69%) !important;
  --tab-text-color: rgb(135, 135, 135) !important;
  --tab-text-color-active: rgb(200, 200, 200) !important;
  --tab-text-color-focused: rgb(200, 200, 200) !important;
  --tab-text-color-focused-active: rgb(200, 200, 200) !important;
  --tab-text-color-focused-active-current: rgb(245, 245, 245) !important;
  --tab-text-color-focused-highlighted: hsl(259, 84.66%, 79.35%) !important;
  --table-add-button-border-color: rgb(45, 45, 45) !important;
  --table-border-color: rgb(45, 45, 45) !important;
  --table-drag-handle-background-active: hsl(262, 83%, 69%) !important;
  --table-drag-handle-color: rgb(135, 135, 135) !important;
  --table-header-border-color: rgb(45, 45, 45) !important;
  --table-header-color: rgb(245, 245, 245) !important;
  --table-selection: hsla(262, 83%, 69%, 0.1) !important;
  --table-selection-border-color: hsl(262, 83%, 69%) !important;
  --tag-background: hsla(262, 83%, 69%, 0.1) !important;
  --tag-background-hover: hsla(262, 83%, 69%, 0.2) !important;
  --tag-border-color: hsla(262, 83%, 69%, 0.15) !important;
  --tag-border-color-hover: hsla(262, 83%, 69%, 0.15) !important;
  --tag-color: hsl(259, 84.66%, 79.35%) !important;
  --tag-color-hover: hsl(259, 84.66%, 79.35%) !important;
  --tertiary: hsl(257, 87.15%, 89.01%) !important;
  --text-accent: hsl(259, 84.66%, 79.35%) !important;
  --text-accent-hover: hsl(257, 87.15%, 89.01%) !important;
  --text-faint: rgb(135, 135, 135) !important;
  --text-muted: rgb(200, 200, 200) !important;
  --text-normal: rgb(245, 245, 245) !important;
  --text-selection: hsla(262, 83%, 69%, 0.33) !important;
  --textHighlight: hsla(262, 83%, 69%, 0.1) !important;
  --titlebar-background: rgb(34, 34, 34) !important;
  --titlebar-background-focused: rgb(45, 45, 45) !important;
  --titlebar-border-color: rgb(45, 45, 45) !important;
  --titlebar-text-color: rgb(200, 200, 200) !important;
  --titlebar-text-color-focused: rgb(245, 245, 245) !important;
  --traffic-lights-offset-x: 44px !important;
  --traffic-lights-offset-y: 44px !important;
  --vault-profile-color: rgb(245, 245, 245) !important;
  --vault-profile-color-hover: rgb(245, 245, 245) !important;
  --workspace-background-translucent: rgba(15, 15, 15, 0.2) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(34, 34, 34);
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(45, 45, 45);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(158, 110, 242, 0.1);
  color: rgb(186, 158, 247);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(15, 15, 15);
  color: rgb(245, 245, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(153, 94, 0, 0.5);
  color: rgb(255, 239, 214);
  outline: rgb(255, 239, 214) none 0px;
  text-decoration-color: rgb(255, 239, 214);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(135, 135, 135);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(158, 110, 242);
  border-color: rgb(158, 110, 242);
}

html[saved-theme="dark"] body p {
  color: rgb(200, 200, 200);
  outline: rgb(200, 200, 200) none 0px;
  text-decoration-color: rgb(200, 200, 200);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(186, 158, 247);
  outline: rgb(186, 158, 247) none 0px;
  text-decoration-color: rgb(186, 158, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(216, 203, 251);
  outline: rgb(216, 203, 251) none 0px;
  text-decoration-color: rgb(216, 203, 251);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(186, 158, 247);
  filter: contrast(0.3) brightness(1.2);
  outline: rgb(186, 158, 247) none 0px;
  text-decoration: rgba(158, 110, 242, 0.3);
  text-decoration-color: rgba(158, 110, 242, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(135, 135, 135);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(27, 27, 27);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgba(245, 245, 245, 0.9);
  border-left-color: rgba(245, 245, 245, 0.9);
  border-right-color: rgba(245, 245, 245, 0.9);
  border-top-color: rgba(245, 245, 245, 0.9);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-style: solid;
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-right-style: solid;
  border-top-color: rgb(245, 245, 245);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(135, 135, 135);
  border-left-color: rgb(135, 135, 135);
  border-right-color: rgb(135, 135, 135);
  border-top-color: rgb(135, 135, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(180, 180, 180);
  outline: rgb(180, 180, 180) none 0px;
  text-decoration-color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 245, 245);
  border-left-width: 0px;
  border-right-color: rgb(245, 245, 245);
  border-right-width: 0px;
  border-top-color: rgb(245, 245, 245);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(158, 110, 242, 0.1);
  border-bottom-color: rgba(158, 110, 242, 0.15);
  border-left-color: rgba(158, 110, 242, 0.15);
  border-right-color: rgba(158, 110, 242, 0.15);
  border-top-color: rgba(158, 110, 242, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(186, 158, 247);
}

html[saved-theme="dark"] body h1 {
  color: rgba(245, 245, 245, 0.9);
}

html[saved-theme="dark"] body h2 {
  color: rgba(245, 245, 245, 0.925);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(216, 203, 251);
}

html[saved-theme="dark"] body h3 {
  color: rgba(245, 245, 245, 0.95);
}

html[saved-theme="dark"] body h4 {
  color: rgba(245, 245, 245, 0.976);
}

html[saved-theme="dark"] body h5 {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body h6 {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(200, 200, 200);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 245, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(200, 200, 200);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(200, 200, 200);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(158, 110, 242);
  border-left-color: rgb(158, 110, 242);
  border-right-color: rgb(158, 110, 242);
  border-top-color: rgb(158, 110, 242);
  color: rgb(158, 110, 242);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(158, 110, 242);
  stroke: rgb(158, 110, 242);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(135, 135, 135);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(45, 45, 45, 0.5);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(158, 110, 242, 0.1);
  border-bottom-color: rgba(158, 110, 242, 0.15);
  border-left-color: rgba(158, 110, 242, 0.15);
  border-right-color: rgba(158, 110, 242, 0.15);
  border-top-color: rgba(158, 110, 242, 0.15);
  color: rgb(186, 158, 247);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 40% !important;
  --accent-s: 40% !important;
  --background-modifier-active-hover: hsla(254, 40%, 40%, 0.1) !important;
  --background-modifier-border: rgb(209, 213, 219) !important;
  --background-modifier-border-focus: rgb(107, 114, 128) !important;
  --background-modifier-border-hover: rgb(156, 163, 175) !important;
  --background-modifier-form-field: rgb(255, 255, 255) !important;
  --background-modifier-form-field-hover: rgb(255, 255, 255) !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-primary-alt: rgb(250, 250, 250) !important;
  --background-secondary: rgb(243, 244, 246) !important;
  --background-secondary-alt: rgb(250, 250, 250) !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-cover-background: rgb(250, 250, 250) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(209, 213, 219) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(156, 163, 175) !important;
  --bases-embed-border-color: rgb(209, 213, 219) !important;
  --bases-group-heading-property-color: rgb(55, 65, 81) !important;
  --bases-table-border-color: rgb(209, 213, 219) !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-disabled: rgb(250, 250, 250) !important;
  --bases-table-cell-background-selected: hsla(254, 40%, 40%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(107, 114, 128) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(253, 40.4%, 43%) !important;
  --bases-table-group-background: rgb(250, 250, 250) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-color: rgb(55, 65, 81) !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --blockquote-border-color: hsl(253, 40.4%, 43%) !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --bold-weight: 800 !important;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: rgb(90, 90, 90) !important;
  --canvas-dot-pattern: rgb(209, 213, 219) !important;
  --caret-color: rgb(31, 41, 55) !important;
  --checkbox-border-color: rgb(90, 90, 90) !important;
  --checkbox-border-color-hover: rgb(55, 65, 81) !important;
  --checkbox-color: hsl(253, 40.4%, 43%) !important;
  --checkbox-color-hover: hsl(251, 40.8%, 46%) !important;
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checklist-done-color: rgb(90, 90, 90) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(250, 250, 250) !important;
  --code-border-color: rgb(209, 213, 219) !important;
  --code-comment: rgb(90, 90, 90) !important;
  --code-normal: rgb(31, 41, 55) !important;
  --code-punctuation: rgb(55, 65, 81) !important;
  --collapse-icon-color: rgb(90, 90, 90) !important;
  --collapse-icon-color-collapsed: hsl(254, 40%, 40%) !important;
  --color-accent: hsl(254, 40%, 40%) !important;
  --color-accent-1: hsl(253, 40.4%, 43%) !important;
  --color-accent-2: hsl(251, 40.8%, 46%) !important;
  --color-accent-hsl: 254, 40%, 40% !important;
  --color-base-00: rgb(255, 255, 255) !important;
  --color-base-05: rgb(250, 250, 250) !important;
  --color-base-10: rgb(250, 250, 250) !important;
  --color-base-100: rgb(31, 41, 55) !important;
  --color-base-20: rgb(243, 244, 246) !important;
  --color-base-25: rgb(228, 228, 231) !important;
  --color-base-30: rgb(209, 213, 219) !important;
  --color-base-35: rgb(156, 163, 175) !important;
  --color-base-40: rgb(107, 114, 128) !important;
  --color-base-50: rgb(90, 90, 90) !important;
  --color-base-60: rgb(75, 85, 99) !important;
  --color-base-70: rgb(55, 65, 81) !important;
  --dark: rgb(31, 41, 55) !important;
  --darkgray: rgb(31, 41, 55) !important;
  --divider-color: rgb(209, 213, 219) !important;
  --divider-color-hover: hsl(253, 40.4%, 43%) !important;
  --dropdown-background: rgb(255, 255, 255) !important;
  --dropdown-background-hover: rgb(250, 250, 250) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(209, 213, 219), inset 0 0 0 1px rgb(209, 213, 219) !important;
  --embed-border-start: 2px solid hsl(253, 40.4%, 43%) !important;
  --en-acrylic: blur(8px) !important;
  --en-acrylic-opacity: 0.66 !important;
  --en-modal-backdrop: blur(25px) !important;
  --en-opacity: 1 !important;
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") !important;
  --encore-translucency-strength: 0.25 !important;
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --flair-background: rgb(255, 255, 255) !important;
  --flair-color: rgb(31, 41, 55) !important;
  --footnote-divider-color: rgb(209, 213, 219) !important;
  --footnote-id-color: rgb(55, 65, 81) !important;
  --footnote-id-color-no-occurrences: rgb(90, 90, 90) !important;
  --footnote-line-height: 1.65 !important;
  --grain: url("data:image/pngbase64,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") !important;
  --graph-line: rgb(156, 163, 175) !important;
  --graph-node: rgb(55, 65, 81) !important;
  --graph-node-focused: hsl(254, 40%, 40%) !important;
  --graph-node-unresolved: rgb(90, 90, 90) !important;
  --graph-text: rgb(31, 41, 55) !important;
  --gray: rgb(55, 65, 81) !important;
  --grey-100-rgb: 31, 41, 55 !important;
  --grey-200-rgb: 55, 65, 81 !important;
  --grey-300-rgb: 75, 85, 99 !important;
  --grey-350-rgb: 90, 90, 90 !important;
  --grey-400-rgb: 107, 114, 128 !important;
  --grey-50-rgb: 17, 24, 39 !important;
  --grey-500-rgb: 156, 163, 175 !important;
  --grey-600-rgb: 209, 213, 219 !important;
  --grey-700-rgb: 228, 228, 231 !important;
  --grey-800-rgb: 243, 244, 246 !important;
  --grey-850-rgb: 250, 250, 250 !important;
  --grey-875-rgb: 250, 250, 250 !important;
  --grey-900-rgb: 255, 255, 255 !important;
  --h1-color: rgba(31, 41, 55, 0.9) !important;
  --h1-line-height: 1.111 !important;
  --h1-size: 2.25rem !important;
  --h1-weight: 800 !important;
  --h2-color: rgba(31, 41, 55, 0.925) !important;
  --h2-line-height: 1.333 !important;
  --h2-size: 1.5rem !important;
  --h2-weight: 700 !important;
  --h3-color: rgba(31, 41, 55, 0.95) !important;
  --h3-line-height: 1.6 !important;
  --h3-size: 1.25rem !important;
  --h3-weight: 600 !important;
  --h4-color: rgba(31, 41, 55, 0.975) !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1rem !important;
  --h4-weight: 600 !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 0.95rem !important;
  --h5-weight: 600 !important;
  --h6-line-height: 1.7 !important;
  --h6-size: 0.85rem !important;
  --header-height: 44px !important;
  --heading-formatting: rgb(90, 90, 90) !important;
  --highlight: hsla(254, 40%, 40%, 0.1) !important;
  --highlight-hue: 37 !important;
  --hr-color: #00000090 !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(55, 65, 81) !important;
  --icon-color-active: hsl(254, 40%, 40%) !important;
  --icon-color-focused: rgb(31, 41, 55) !important;
  --icon-color-hover: rgb(55, 65, 81) !important;
  --inline-title-color: hsl(251, 40.8%, 46%) !important;
  --inline-title-line-height: 1.111 !important;
  --inline-title-size: 2.25rem !important;
  --inline-title-weight: 800 !important;
  --input-date-separator: rgb(90, 90, 90) !important;
  --input-placeholder-color: rgb(90, 90, 90) !important;
  --interactive-accent: hsl(253, 40.4%, 43%) !important;
  --interactive-accent-hover: hsl(251, 40.8%, 46%) !important;
  --interactive-accent-hsl: 254, 40%, 40% !important;
  --interactive-hover: rgb(250, 250, 250) !important;
  --interactive-normal: rgb(255, 255, 255) !important;
  --light: rgb(255, 255, 255) !important;
  --lightgray: rgb(243, 244, 246) !important;
  --line-height-normal: 1.65 !important;
  --link-color: hsl(251, 40.8%, 46%) !important;
  --link-color-hover: hsl(251, 40.8%, 46%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(254, 40%, 40%) !important;
  --link-external-color-hover: hsl(251, 40.8%, 46%) !important;
  --link-unresolved-color: hsl(254, 40%, 40%) !important;
  --link-unresolved-decoration-color: hsla(254, 40%, 40%, 0.3) !important;
  --link-unresolved-filter: contrast(0.3) brightness(120%) !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: rgb(107, 114, 128) !important;
  --list-marker-color-collapsed: hsl(254, 40%, 40%) !important;
  --list-marker-color-hover: rgb(55, 65, 81) !important;
  --lucide-maximize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E") !important;
  --lucide-minimize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minimize'%3E%3Cpath d='M8 3v3a2 2 0 0 1-2 2H3'/%3E%3Cpath d='M21 8h-3a2 2 0 0 1-2-2V3'/%3E%3Cpath d='M3 16h3a2 2 0 0 1 2 2v3'/%3E%3Cpath d='M16 21v-3a2 2 0 0 1 2-2h3'/%3E%3C/svg%3E") !important;
  --lucide-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E") !important;
  --lucide-x: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --menu-background: rgb(243, 244, 246) !important;
  --menu-border-color: rgb(156, 163, 175) !important;
  --metadata-border-color: rgb(209, 213, 219) !important;
  --metadata-divider-color: rgb(209, 213, 219) !important;
  --metadata-input-text-color: rgb(31, 41, 55) !important;
  --metadata-label-text-color: rgb(55, 65, 81) !important;
  --metadata-label-text-color-hover: rgb(55, 65, 81) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(107, 114, 128) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(156, 163, 175) !important;
  --modal-background: rgb(255, 255, 255) !important;
  --modal-border-color: rgb(107, 114, 128) !important;
  --nav-collapse-icon-color: rgb(90, 90, 90) !important;
  --nav-collapse-icon-color-collapsed: rgb(90, 90, 90) !important;
  --nav-heading-color: rgb(31, 41, 55) !important;
  --nav-heading-color-collapsed: rgb(90, 90, 90) !important;
  --nav-heading-color-collapsed-hover: rgb(55, 65, 81) !important;
  --nav-heading-color-hover: rgb(31, 41, 55) !important;
  --nav-item-background-selected: hsla(254, 40%, 40%, 0.15) !important;
  --nav-item-color: rgb(55, 65, 81) !important;
  --nav-item-color-active: rgb(31, 41, 55) !important;
  --nav-item-color-highlighted: hsl(254, 40%, 40%) !important;
  --nav-item-color-hover: rgb(31, 41, 55) !important;
  --nav-item-color-selected: rgb(31, 41, 55) !important;
  --nav-tag-color: rgb(90, 90, 90) !important;
  --nav-tag-color-active: rgb(55, 65, 81) !important;
  --nav-tag-color-hover: rgb(55, 65, 81) !important;
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%23ffffff90' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%2300000090' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-border-color: rgb(209, 213, 219) !important;
  --pill-border-color-hover: rgb(156, 163, 175) !important;
  --pill-color: rgb(55, 65, 81) !important;
  --pill-color-hover: rgb(31, 41, 55) !important;
  --pill-color-remove: rgb(90, 90, 90) !important;
  --pill-color-remove-hover: hsl(254, 40%, 40%) !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --prompt-border-color: rgb(107, 114, 128) !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: rgb(243, 244, 246) !important;
  --ribbon-background-collapsed: rgb(255, 255, 255) !important;
  --search-clear-button-color: rgb(55, 65, 81) !important;
  --search-icon-color: rgb(55, 65, 81) !important;
  --search-result-background: rgb(255, 255, 255) !important;
  --secondary: hsl(254, 40%, 40%) !important;
  --setting-group-heading-color: rgb(31, 41, 55) !important;
  --setting-items-background: rgb(250, 250, 250) !important;
  --setting-items-border-color: rgb(209, 213, 219) !important;
  --slider-thumb-border-color: rgb(156, 163, 175) !important;
  --slider-track-background: rgb(209, 213, 219) !important;
  --status-bar-background: rgb(243, 244, 246) !important;
  --status-bar-border-color: rgb(209, 213, 219) !important;
  --status-bar-text-color: rgb(55, 65, 81) !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --tab-background-active: rgb(255, 255, 255) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: rgb(156, 163, 175) !important;
  --tab-height: 38px !important;
  --tab-outline-color: rgb(209, 213, 219) !important;
  --tab-radius: 6px !important;
  --tab-stacked-header-width: 44px !important;
  --tab-switcher-background: rgb(243, 244, 246) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(243, 244, 246), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(254, 40%, 40%) !important;
  --tab-text-color: rgb(90, 90, 90) !important;
  --tab-text-color-active: rgb(55, 65, 81) !important;
  --tab-text-color-focused: rgb(55, 65, 81) !important;
  --tab-text-color-focused-active: rgb(55, 65, 81) !important;
  --tab-text-color-focused-active-current: rgb(31, 41, 55) !important;
  --tab-text-color-focused-highlighted: hsl(254, 40%, 40%) !important;
  --table-add-button-border-color: rgb(209, 213, 219) !important;
  --table-border-color: rgb(209, 213, 219) !important;
  --table-drag-handle-background-active: hsl(253, 40.4%, 43%) !important;
  --table-drag-handle-color: rgb(90, 90, 90) !important;
  --table-header-border-color: rgb(209, 213, 219) !important;
  --table-header-color: rgb(31, 41, 55) !important;
  --table-selection: hsla(254, 40%, 40%, 0.1) !important;
  --table-selection-border-color: hsl(253, 40.4%, 43%) !important;
  --tag-background: hsla(254, 40%, 40%, 0.1) !important;
  --tag-background-hover: hsla(254, 40%, 40%, 0.2) !important;
  --tag-border-color: hsla(254, 40%, 40%, 0.15) !important;
  --tag-border-color-hover: hsla(254, 40%, 40%, 0.15) !important;
  --tag-color: hsl(254, 40%, 40%) !important;
  --tag-color-hover: hsl(254, 40%, 40%) !important;
  --tertiary: hsl(251, 40.8%, 46%) !important;
  --text-accent: hsl(254, 40%, 40%) !important;
  --text-accent-hover: hsl(251, 40.8%, 46%) !important;
  --text-faint: rgb(90, 90, 90) !important;
  --text-muted: rgb(55, 65, 81) !important;
  --text-normal: rgb(31, 41, 55) !important;
  --text-selection: hsla(254, 40%, 40%, 0.2) !important;
  --textHighlight: hsla(254, 40%, 40%, 0.1) !important;
  --titlebar-background: rgb(243, 244, 246) !important;
  --titlebar-background-focused: rgb(250, 250, 250) !important;
  --titlebar-border-color: rgb(209, 213, 219) !important;
  --titlebar-text-color: rgb(55, 65, 81) !important;
  --titlebar-text-color-focused: rgb(31, 41, 55) !important;
  --traffic-lights-offset-x: 44px !important;
  --traffic-lights-offset-y: 44px !important;
  --vault-profile-color: rgb(31, 41, 55) !important;
  --vault-profile-color-hover: rgb(31, 41, 55) !important;
  --workspace-background-translucent: rgba(228, 228, 231, 0.7) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(209, 213, 219);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(80, 61, 143, 0.1);
  color: rgb(80, 61, 143);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(153, 94, 0, 0.5);
  color: rgb(255, 239, 214);
  outline: rgb(255, 239, 214) none 0px;
  text-decoration-color: rgb(255, 239, 214);
}

html[saved-theme="light"] body del {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(85, 65, 154);
  border-color: rgb(85, 65, 154);
}

html[saved-theme="light"] body p {
  color: rgb(55, 65, 81);
  outline: rgb(55, 65, 81) none 0px;
  text-decoration-color: rgb(55, 65, 81);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(80, 61, 143);
  outline: rgb(80, 61, 143) none 0px;
  text-decoration-color: rgb(80, 61, 143);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(87, 69, 165);
  outline: rgb(87, 69, 165) none 0px;
  text-decoration-color: rgb(87, 69, 165);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(80, 61, 143);
  filter: contrast(0.3) brightness(1.2);
  outline: rgb(80, 61, 143) none 0px;
  text-decoration: rgba(80, 61, 143, 0.3);
  text-decoration-color: rgba(80, 61, 143, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body dt {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body ol > li {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body ul > li {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(250, 250, 250);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body table {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body figcaption {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgba(31, 41, 55, 0.9);
  border-left-color: rgba(31, 41, 55, 0.9);
  border-right-color: rgba(31, 41, 55, 0.9);
  border-top-color: rgba(31, 41, 55, 0.9);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(31, 41, 55);
  border-bottom-style: solid;
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-right-style: solid;
  border-top-color: rgb(31, 41, 55);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(31, 41, 55);
  text-decoration-color: rgb(31, 41, 55);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(75, 85, 99);
  outline: rgb(75, 85, 99) none 0px;
  text-decoration-color: rgb(75, 85, 99);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(31, 41, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(31, 41, 55);
  border-left-width: 0px;
  border-right-color: rgb(31, 41, 55);
  border-right-width: 0px;
  border-top-color: rgb(31, 41, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 41, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(80, 61, 143, 0.1);
  border-bottom-color: rgba(80, 61, 143, 0.15);
  border-left-color: rgba(80, 61, 143, 0.15);
  border-right-color: rgba(80, 61, 143, 0.15);
  border-top-color: rgba(80, 61, 143, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(80, 61, 143);
}

html[saved-theme="light"] body h1 {
  color: rgba(31, 41, 55, 0.9);
}

html[saved-theme="light"] body h2 {
  color: rgba(31, 41, 55, 0.925);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(87, 69, 165);
}

html[saved-theme="light"] body h3 {
  color: rgba(31, 41, 55, 0.95);
}

html[saved-theme="light"] body h4 {
  color: rgba(31, 41, 55, 0.976);
}

html[saved-theme="light"] body h5 {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body h6 {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(209, 213, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 213, 219);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(55, 65, 81);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(31, 41, 55);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}`,
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(55, 65, 81);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(55, 65, 81);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(85, 65, 154);
  border-left-color: rgb(85, 65, 154);
  border-right-color: rgb(85, 65, 154);
  border-top-color: rgb(85, 65, 154);
  color: rgb(85, 65, 154);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(85, 65, 154);
  stroke: rgb(85, 65, 154);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(90, 90, 90);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(209, 213, 219, 0.5);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body abbr {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body sub {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body summary {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body sup {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(80, 61, 143, 0.1);
  border-bottom-color: rgba(80, 61, 143, 0.15);
  border-left-color: rgba(80, 61, 143, 0.15);
  border-right-color: rgba(80, 61, 143, 0.15);
  border-top-color: rgba(80, 61, 143, 0.15);
  color: rgb(80, 61, 143);
}`,
  },
  extras: `/* Scrolling background animation */
@keyframes scroll-up {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: -5000px;
  }
}

@keyframes scroll-up-down {
  0% {
    background-position-y: 0;
  }
  50% {
    background-position-y: -5000px;
  }
  100% {
    background-position-y: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* RGB cycling box-shadow */
@keyframes rgb-shadow {
  0% {
    box-shadow: 8px 8px 0 red;
  }
  14% {
    box-shadow: 8px 8px 0 orange;
  }
  28% {
    box-shadow: 8px 8px 0 yellow;
  }
  42% {
    box-shadow: 8px 8px 0 green;
  }
  56% {
    box-shadow: 8px 8px 0 cyan;
  }
  70% {
    box-shadow: 8px 8px 0 blue;
  }
  84% {
    box-shadow: 8px 8px 0 purple;
  }
  100% {
    box-shadow: 8px 8px 0 red;
  }
}

/* RGB cycling background */
@keyframes rgb-background {
  0% {
    background-color: red;
  }
  14% {
    background-color: orange;
  }
  28% {
    background-color: yellow;
  }
  42% {
    background-color: green;
  }
  56% {
    background-color: cyan;
  }
  70% {
    background-color: blue;
  }
  84% {
    background-color: purple;
  }
  100% {
    background-color: red;
  }
}

/* Panoramic background pan */
@keyframes pan-right {
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 100%;
  }
}
`,
};
