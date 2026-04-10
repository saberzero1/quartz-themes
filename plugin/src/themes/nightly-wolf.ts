import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nightly-wolf",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 262 !important;
  --accent-l: 69% !important;
  --accent-s: 83% !important;
  --background-modifier-active-hover: hsla(262, 83%, 69%, 0.1) !important;
  --background-modifier-border: rgb(24, 20, 33) !important;
  --background-modifier-border-focus: rgb(125, 125, 125) !important;
  --background-modifier-border-hover: rgb(75, 75, 75) !important;
  --background-modifier-form-field: rgb(38, 38, 38) !important;
  --background-modifier-form-field-hover: rgb(38, 38, 38) !important;
  --background-primary: rgb(19, 16, 26) !important;
  --background-primary-alt: rgb(27, 27, 27) !important;
  --background-secondary: rgb(24, 20, 33) !important;
  --background-secondary-alt: rgb(24, 20, 33) !important;
  --bases-cards-background: rgb(19, 16, 26) !important;
  --bases-cards-cover-background: rgb(27, 27, 27) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(24, 20, 33) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(75, 75, 75) !important;
  --bases-embed-border-color: rgb(24, 20, 33) !important;
  --bases-group-heading-property-color: rgb(200, 200, 200) !important;
  --bases-table-border-color: rgb(24, 20, 33) !important;
  --bases-table-cell-background-active: rgb(19, 16, 26) !important;
  --bases-table-cell-background-disabled: rgb(27, 27, 27) !important;
  --bases-table-cell-background-selected: hsla(262, 83%, 69%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(125, 125, 125) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(262, 83%, 69%) !important;
  --bases-table-group-background: rgb(27, 27, 27) !important;
  --bases-table-header-background: rgb(19, 16, 26) !important;
  --bases-table-header-color: rgb(200, 200, 200) !important;
  --bases-table-summary-background: rgb(19, 16, 26) !important;
  --blockquote-border-color: hsl(262, 83%, 69%) !important;
  --blur-background: color-mix(in srgb, rgb(24, 20, 33) 65%, transparent) linear-gradient(rgb(24, 20, 33), color-mix(in srgb, rgb(24, 20, 33) 65%, transparent)) !important;
  --bold-weight: 800 !important;
  --canvas-background: rgb(19, 16, 26) !important;
  --canvas-card-label-color: rgb(135, 135, 135) !important;
  --canvas-dot-pattern: rgb(24, 20, 33) !important;
  --caret-color: rgb(245, 245, 245) !important;
  --checkbox-border-color: rgb(135, 135, 135) !important;
  --checkbox-border-color-hover: rgb(200, 200, 200) !important;
  --checkbox-color: hsl(262, 83%, 69%) !important;
  --checkbox-color-hover: hsl(259, 84.66%, 79.35%) !important;
  --checkbox-marker-color: rgb(19, 16, 26) !important;
  --checklist-done-color: rgb(135, 135, 135) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(27, 27, 27) !important;
  --code-border-color: rgb(24, 20, 33) !important;
  --code-comment: rgb(135, 135, 135) !important;
  --code-normal: rgb(245, 245, 245) !important;
  --code-punctuation: rgb(200, 200, 200) !important;
  --collapse-icon-color: rgb(135, 135, 135) !important;
  --collapse-icon-color-collapsed: hsl(259, 84.66%, 79.35%) !important;
  --color-accent: hsl(262, 83%, 69%) !important;
  --color-accent-1: hsl(259, 84.66%, 79.35%) !important;
  --color-accent-2: hsl(257, 87.15%, 89.01%) !important;
  --color-accent-hsl: 262, 83%, 69% !important;
  --color-base-00: rgb(19, 16, 26) !important;
  --color-base-05: rgb(22, 22, 22) !important;
  --color-base-10: rgb(27, 27, 27) !important;
  --color-base-100: rgb(245, 245, 245) !important;
  --color-base-20: rgb(24, 20, 33) !important;
  --color-base-25: rgb(38, 38, 38) !important;
  --color-base-30: rgb(24, 20, 33) !important;
  --color-base-35: rgb(75, 75, 75) !important;
  --color-base-40: rgb(125, 125, 125) !important;
  --color-base-50: rgb(135, 135, 135) !important;
  --color-base-60: rgb(180, 180, 180) !important;
  --color-base-70: rgb(200, 200, 200) !important;
  --dark: rgb(245, 245, 245) !important;
  --darkgray: rgb(245, 245, 245) !important;
  --divider-color: rgb(24, 20, 33) !important;
  --divider-color-hover: hsl(262, 83%, 69%) !important;
  --dropdown-background: rgb(24, 20, 33) !important;
  --dropdown-background-hover: rgb(75, 75, 75) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(24, 20, 33), inset 0 0 0 1px rgb(24, 20, 33) !important;
  --embed-border-start: 2px solid hsl(262, 83%, 69%) !important;
  --en-acrylic: blur(8px) !important;
  --en-acrylic-opacity: 0.66 !important;
  --en-modal-backdrop: blur(25px) !important;
  --en-opacity: 1 !important;
  --file-header-background: rgb(19, 16, 26) !important;
  --file-header-background-focused: rgb(19, 16, 26) !important;
  --flair-background: rgb(24, 20, 33) !important;
  --flair-color: rgb(245, 245, 245) !important;
  --footnote-divider-color: rgb(24, 20, 33) !important;
  --footnote-id-color: rgb(200, 200, 200) !important;
  --footnote-id-color-no-occurrences: rgb(135, 135, 135) !important;
  --footnote-line-height: 1.65 !important;
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
  --grey-600-rgb: 24, 20, 33 !important;
  --grey-700-rgb: 38, 38, 38 !important;
  --grey-800-rgb: 24, 20, 33 !important;
  --grey-850-rgb: 27, 27, 27 !important;
  --grey-875-rgb: 22, 22, 22 !important;
  --grey-900-rgb: 19, 16, 26 !important;
  --guide-color: rgba(204, 36, 36, 0.3) !important;
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
  --hr-color: #6a6161b3 !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(200, 200, 200) !important;
  --icon-color-active: hsl(259, 84.66%, 79.35%) !important;
  --icon-color-focused: rgb(245, 245, 245) !important;
  --icon-color-hover: rgb(200, 200, 200) !important;
  --indentation-guide: rgba(204, 36, 36, 0.3) !important;
  --indentation-guide-active: rgba(204, 36, 36, 0.6) !important;
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
  --interactive-normal: rgb(24, 20, 33) !important;
  --light: rgb(19, 16, 26) !important;
  --lightgray: rgb(24, 20, 33) !important;
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
  --list-marker-color: #992929 !important;
  --list-marker-color-collapsed: hsl(259, 84.66%, 79.35%) !important;
  --list-marker-color-hover: rgb(200, 200, 200) !important;
  --lucide-maximize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E") !important;
  --lucide-minimize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minimize'%3E%3Cpath d='M8 3v3a2 2 0 0 1-2 2H3'/%3E%3Cpath d='M21 8h-3a2 2 0 0 1-2-2V3'/%3E%3Cpath d='M3 16h3a2 2 0 0 1 2 2v3'/%3E%3Cpath d='M16 21v-3a2 2 0 0 1 2-2h3'/%3E%3C/svg%3E") !important;
  --lucide-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E") !important;
  --lucide-x: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --menu-background: rgb(24, 20, 33) !important;
  --menu-border-color: rgb(75, 75, 75) !important;
  --metadata-border-color: rgb(24, 20, 33) !important;
  --metadata-divider-color: rgb(24, 20, 33) !important;
  --metadata-input-text-color: rgb(245, 245, 245) !important;
  --metadata-label-text-color: rgb(200, 200, 200) !important;
  --metadata-label-text-color-hover: rgb(200, 200, 200) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(125, 125, 125) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(75, 75, 75) !important;
  --modal-background: rgb(19, 16, 26) !important;
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
  --nightly-wolf-translucency-strength: 0.25 !important;
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23ffffff90' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5.812 7s-.453.628-.996 1.667M18.188 7s.453.628.997 1.667m-14.37 0C4.008 10.214 3 12.674 3 15.333C5.813 15.333 7.5 17 7.5 17s1.125 5 4.5 5s4.5-5 4.5-5s1.688-1.667 4.5-1.667c0-2.659-1.007-5.119-1.816-6.666m-14.368 0S1.875 6.444 4.816 2c.996.556 3.809 2.778 3.809 2.778S10.313 3.667 12 3.667c1.688 0 3.375 1.11 3.375 1.11S18.188 2.557 19.313 2c2.812 4.445-.128 6.667-.128 6.667M11 18h1m1 0h-1m0 0v1m-3.5-6.5L10 14m5.5-1.5L14 14'/%3E%3C/svg%3E") !important;
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%2300000090' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5.812 7s-.453.628-.996 1.667M18.188 7s.453.628.997 1.667m-14.37 0C4.008 10.214 3 12.674 3 15.333C5.813 15.333 7.5 17 7.5 17s1.125 5 4.5 5s4.5-5 4.5-5s1.688-1.667 4.5-1.667c0-2.659-1.007-5.119-1.816-6.666m-14.368 0S1.875 6.444 4.816 2c.996.556 3.809 2.778 3.809 2.778S10.313 3.667 12 3.667c1.688 0 3.375 1.11 3.375 1.11S18.188 2.557 19.313 2c2.812 4.445-.128 6.667-.128 6.667M11 18h1m1 0h-1m0 0v1m-3.5-6.5L10 14m5.5-1.5L14 14'/%3E%3C/svg%3E") !important;
  --p-tree-line-color: #992929 !important;
  --p-tree-line-color-active: #E54545 !important;
  --pdf-background: rgb(19, 16, 26) !important;
  --pdf-page-background: rgb(19, 16, 26) !important;
  --pdf-shadow: 0 0 0 1px rgb(24, 20, 33) !important;
  --pdf-sidebar-background: rgb(19, 16, 26) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(24, 20, 33) !important;
  --pill-border-color: rgb(24, 20, 33) !important;
  --pill-border-color-hover: rgb(75, 75, 75) !important;
  --pill-color: rgb(200, 200, 200) !important;
  --pill-color-hover: rgb(245, 245, 245) !important;
  --pill-color-remove: rgb(135, 135, 135) !important;
  --pill-color-remove-hover: hsl(259, 84.66%, 79.35%) !important;
  --prompt-background: rgb(19, 16, 26) !important;
  --prompt-border-color: rgb(125, 125, 125) !important;
  --raised-background: color-mix(in srgb, rgb(24, 20, 33) 65%, transparent) linear-gradient(rgb(24, 20, 33), color-mix(in srgb, rgb(24, 20, 33) 65%, transparent)) !important;
  --ribbon-background: rgb(24, 20, 33) !important;
  --ribbon-background-collapsed: rgb(19, 16, 26) !important;
  --search-clear-button-color: rgb(200, 200, 200) !important;
  --search-icon-color: rgb(200, 200, 200) !important;
  --search-result-background: rgb(19, 16, 26) !important;
  --secondary: hsl(259, 84.66%, 79.35%) !important;
  --setting-group-heading-color: rgb(245, 245, 245) !important;
  --setting-items-background: rgb(27, 27, 27) !important;
  --setting-items-border-color: rgb(24, 20, 33) !important;
  --slider-thumb-border-color: rgb(75, 75, 75) !important;
  --slider-track-background: rgb(24, 20, 33) !important;
  --status-bar-background: rgb(24, 20, 33) !important;
  --status-bar-border-color: rgb(24, 20, 33) !important;
  --status-bar-text-color: rgb(200, 200, 200) !important;
  --suggestion-background: rgb(19, 16, 26) !important;
  --tab-background-active: rgb(19, 16, 26) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: rgb(75, 75, 75) !important;
  --tab-height: 38px !important;
  --tab-outline-color: rgb(24, 20, 33) !important;
  --tab-radius: 6px !important;
  --tab-stacked-header-width: 44px !important;
  --tab-switcher-background: rgb(24, 20, 33) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 20, 33), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(262, 83%, 69%) !important;
  --tab-text-color: rgb(135, 135, 135) !important;
  --tab-text-color-active: rgb(200, 200, 200) !important;
  --tab-text-color-focused: rgb(200, 200, 200) !important;
  --tab-text-color-focused-active: rgb(200, 200, 200) !important;
  --tab-text-color-focused-active-current: rgb(245, 245, 245) !important;
  --tab-text-color-focused-highlighted: hsl(259, 84.66%, 79.35%) !important;
  --table-add-button-border-color: rgb(24, 20, 33) !important;
  --table-border-color: rgb(24, 20, 33) !important;
  --table-drag-handle-background-active: hsl(262, 83%, 69%) !important;
  --table-drag-handle-color: rgb(135, 135, 135) !important;
  --table-header-border-color: rgb(24, 20, 33) !important;
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
  --titlebar-background: rgb(24, 20, 33) !important;
  --titlebar-background-focused: rgb(24, 20, 33) !important;
  --titlebar-border-color: rgb(24, 20, 33) !important;
  --titlebar-text-color: rgb(200, 200, 200) !important;
  --titlebar-text-color-focused: rgb(245, 245, 245) !important;
  --traffic-lights-offset-x: 44px !important;
  --traffic-lights-offset-y: 44px !important;
  --tree-line-color: #992929 !important;
  --vault-profile-color: rgb(245, 245, 245) !important;
  --vault-profile-color-hover: rgb(245, 245, 245) !important;
  --workspace-background-translucent: rgb(19, 16, 26) !important;
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
  border-color: rgb(24, 20, 33);
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
  background-color: rgb(24, 20, 33);
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(24, 20, 33);
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
  background-color: rgba(0, 0, 0, 0);
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
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgba(19, 16, 26, 0.6);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
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
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
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
  border-top-color: rgb(24, 20, 33);
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
  border-top-color: rgb(24, 20, 33);
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
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
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
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
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
  background-color: rgba(24, 20, 33, 0.5);
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
  border-bottom-color: rgb(24, 20, 33);
  border-left-color: rgb(24, 20, 33);
  border-right-color: rgb(24, 20, 33);
  border-top-color: rgb(24, 20, 33);
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
  background-color: rgba(24, 20, 33, 0.5);
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
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --flair-background: rgb(255, 255, 255) !important;
  --flair-color: rgb(31, 41, 55) !important;
  --footnote-divider-color: rgb(209, 213, 219) !important;
  --footnote-id-color: rgb(55, 65, 81) !important;
  --footnote-id-color-no-occurrences: rgb(90, 90, 90) !important;
  --footnote-line-height: 1.65 !important;
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
  --guide-color: rgba(204, 36, 36, 0.3) !important;
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
  --indentation-guide: rgba(204, 36, 36, 0.3) !important;
  --indentation-guide-active: rgba(204, 36, 36, 0.6) !important;
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
  --list-marker-color: #992929 !important;
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
  --nightly-wolf-translucency-strength: 0.25 !important;
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23ffffff90' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5.812 7s-.453.628-.996 1.667M18.188 7s.453.628.997 1.667m-14.37 0C4.008 10.214 3 12.674 3 15.333C5.813 15.333 7.5 17 7.5 17s1.125 5 4.5 5s4.5-5 4.5-5s1.688-1.667 4.5-1.667c0-2.659-1.007-5.119-1.816-6.666m-14.368 0S1.875 6.444 4.816 2c.996.556 3.809 2.778 3.809 2.778S10.313 3.667 12 3.667c1.688 0 3.375 1.11 3.375 1.11S18.188 2.557 19.313 2c2.812 4.445-.128 6.667-.128 6.667M11 18h1m1 0h-1m0 0v1m-3.5-6.5L10 14m5.5-1.5L14 14'/%3E%3C/svg%3E") !important;
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%2300000090' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5.812 7s-.453.628-.996 1.667M18.188 7s.453.628.997 1.667m-14.37 0C4.008 10.214 3 12.674 3 15.333C5.813 15.333 7.5 17 7.5 17s1.125 5 4.5 5s4.5-5 4.5-5s1.688-1.667 4.5-1.667c0-2.659-1.007-5.119-1.816-6.666m-14.368 0S1.875 6.444 4.816 2c.996.556 3.809 2.778 3.809 2.778S10.313 3.667 12 3.667c1.688 0 3.375 1.11 3.375 1.11S18.188 2.557 19.313 2c2.812 4.445-.128 6.667-.128 6.667M11 18h1m1 0h-1m0 0v1m-3.5-6.5L10 14m5.5-1.5L14 14'/%3E%3C/svg%3E") !important;
  --p-tree-line-color: #992929 !important;
  --p-tree-line-color-active: #E54545 !important;
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
  --tree-line-color: #992929 !important;
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
  background-color: rgba(0, 0, 0, 0);
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
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(196, 189, 201);
}

html[saved-theme="light"] body .table-container {
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
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
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
};
