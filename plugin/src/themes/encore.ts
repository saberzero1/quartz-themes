import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "encore",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "encore-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 262;
  --accent-l: 69%;
  --accent-s: 83%;
  --background-modifier-border: var(--color-base-30, rgb(45, 45, 45));
  --background-modifier-border-focus: var(--color-base-40, rgb(125, 125, 125));
  --background-modifier-border-hover: var(--color-base-35, rgb(75, 75, 75));
  --background-modifier-form-field: var(--color-base-25, rgb(38, 38, 38));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgb(38, 38, 38));
  --background-primary: var(--color-base-00, rgb(15, 15, 15));
  --background-primary-alt: var(--color-base-10, rgb(27, 27, 27));
  --background-secondary: var(--color-base-20, rgb(34, 34, 34));
  --background-secondary-alt: var(--color-base-30, rgb(45, 45, 45));
  --bases-cards-background: var(--background-primary, rgb(15, 15, 15));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(27, 27, 27));
  --bases-embed-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --bases-group-heading-property-color: var(--text-muted, rgb(200, 200, 200));
  --bases-table-border-color: var(--table-border-color, rgb(45, 45, 45));
  --bases-table-cell-background-active: var(--background-primary, rgb(15, 15, 15));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(27, 27, 27));
  --bases-table-cell-background-selected: var(--table-selection, hsla(262, 83%, 69%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, rgb(27, 27, 27));
  --bases-table-header-background: var(--background-primary, rgb(15, 15, 15));
  --bases-table-header-color: var(--text-muted, rgb(200, 200, 200));
  --bases-table-summary-background: var(--background-primary, rgb(15, 15, 15));
  --blockquote-border-color: var(--interactive-accent, hsl(262, 83%, 69%));
  --canvas-background: var(--background-primary, rgb(15, 15, 15));
  --canvas-card-label-color: var(--text-faint, rgb(135, 135, 135));
  --canvas-dot-pattern: var(--color-base-30, rgb(45, 45, 45));
  --caret-color: var(--text-normal, rgb(245, 245, 245));
  --checkbox-border-color: var(--text-faint, rgb(135, 135, 135));
  --checkbox-border-color-hover: var(--text-muted, rgb(200, 200, 200));
  --checkbox-color: var(--interactive-accent, hsl(262, 83%, 69%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(259, 84.66%, 79.35%));
  --checkbox-marker-color: var(--background-primary, rgb(15, 15, 15));
  --checklist-done-color: var(--color-base-50, rgb(135, 135, 135));
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, rgb(27, 27, 27));
  --code-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --code-comment: var(--text-faint, rgb(135, 135, 135));
  --code-normal: var(--text-normal, rgb(245, 245, 245));
  --code-punctuation: var(--text-muted, rgb(200, 200, 200));
  --collapse-icon-color: var(--text-faint, rgb(135, 135, 135));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --color-base-00: rgb(var(--grey-900-rgb));
  --color-base-05: rgb(var(--grey-875-rgb));
  --color-base-10: rgb(var(--grey-850-rgb));
  --color-base-100: rgb(var(--grey-100-rgb));
  --color-base-20: rgb(var(--grey-800-rgb));
  --color-base-25: rgb(var(--grey-700-rgb));
  --color-base-30: rgb(var(--grey-600-rgb));
  --color-base-35: rgb(var(--grey-500-rgb));
  --color-base-40: rgb(var(--grey-400-rgb));
  --color-base-50: rgb(
    var(--grey-350-rgb)
  );
  --color-base-60: rgb(var(--grey-300-rgb));
  --color-base-70: rgb(var(--grey-200-rgb));
  --dark: var(--text-normal, var(--color-base-100, rgb(245, 245, 245)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(245, 245, 245)));
  --divider-color: var(--background-modifier-border, rgb(45, 45, 45));
  --divider-color-hover: var(--interactive-accent, hsl(262, 83%, 69%));
  --dropdown-background: var(--interactive-normal, rgb(45, 45, 45));
  --dropdown-background-hover: var(--interactive-hover, rgb(75, 75, 75));
  --en-acrylic: blur(8px);
  --en-acrylic-opacity: 0.66;
  --en-modal-backdrop: blur(25px);
  --en-opacity: 1;
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --encore-translucency-strength: 0.25;
  --file-header-background: var(--background-primary, rgb(15, 15, 15));
  --file-header-background-focused: var(--background-primary, rgb(15, 15, 15));
  --flair-background: var(--interactive-normal, rgb(45, 45, 45));
  --flair-color: var(--text-normal, rgb(245, 245, 245));
  --footnote-divider-color: var(--metadata-divider-color, rgb(45, 45, 45));
  --footnote-id-color: var(--text-muted, rgb(200, 200, 200));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(135, 135, 135));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --grain: url("data:image/pngbase64,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");
  --graph-node: var(--text-muted, rgb(200, 200, 200));
  --graph-node-focused: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --graph-node-unresolved: var(--text-faint, rgb(135, 135, 135));
  --graph-text: var(--text-normal, rgb(245, 245, 245));
  --gray: var(--text-muted, var(--color-base-70, rgb(200, 200, 200)));
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
  --h1-color: rgba(var(--grey-100-rgb), 0.9);
  --h1-line-height: 1.111;
  --h1-size: 2.25rem;
  --h1-weight: 800;
  --h2-color: rgba(var(--grey-100-rgb), 0.925);
  --h2-line-height: 1.333;
  --h2-size: 1.5rem;
  --h2-weight: 700;
  --h3-color: rgba(var(--grey-100-rgb), 0.95);
  --h3-line-height: 1.6;
  --h3-size: 1.25rem;
  --h3-weight: 600;
  --h4-color: rgba(var(--grey-100-rgb), 0.975);
  --h4-line-height: 1.5;
  --h4-size: 1rem;
  --h4-weight: 600;
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 0.95rem;
  --h5-weight: 600;
  --h6-line-height: var(--line-height-normal, 1.7);
  --h6-size: 0.85rem;
  --header-height: 44px;
  --heading-formatting: var(--text-faint, rgb(135, 135, 135));
  --highlight-hue: 37;
  --hr-color: var(--background-modifier-border, #ffffff90);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, rgb(200, 200, 200));
  --icon-color-active: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --icon-color-focused: var(--text-normal, rgb(245, 245, 245));
  --icon-color-hover: var(--text-muted, rgb(200, 200, 200));
  --inline-title-color: var(--color-accent-2, hsl(257, 87.15%, 89.01%));
  --inline-title-line-height: var(--h1-line-height, 1.111);
  --inline-title-size: var(--h1-size, 2.25rem);
  --inline-title-weight: var(--h1-weight, 800);
  --input-date-separator: var(--text-faint, rgb(135, 135, 135));
  --input-placeholder-color: var(--text-faint, rgb(135, 135, 135));
  --interactive-accent: var(--color-accent, hsl(262, 83%, 69%));
  --interactive-accent-hover: var(--color-accent-1, hsl(259, 84.66%, 79.35%));
  --interactive-accent-hsl: var(--color-accent-hsl, 262, 83%, 69%);
  --interactive-hover: var(--color-base-35, rgb(75, 75, 75));
  --interactive-normal: var(--color-base-30, rgb(45, 45, 45));
  --light: var(--background-primary, var(--color-base-00, rgb(15, 15, 15)));
  --lightgray: var(--background-secondary, var(--color-base-20, rgb(34, 34, 34)));
  --line-height-normal: 1.65;
  --link-color: var(--color-accent-2, hsl(257, 87.15%, 89.01%));
  --link-color-hover: var(--text-accent-hover, hsl(257, 87.15%, 89.01%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --link-external-color-hover: var(--text-accent-hover, hsl(257, 87.15%, 89.01%));
  --link-unresolved-color: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --link-unresolved-filter: contrast(0.3) brightness(120%);
  --link-unresolved-opacity: 1;
  --list-marker-color: var(--color-base-40, rgb(125, 125, 125));
  --list-marker-color-collapsed: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --list-marker-color-hover: var(--text-muted, rgb(200, 200, 200));
  --lucide-maximize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E");
  --lucide-minimize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minimize'%3E%3Cpath d='M8 3v3a2 2 0 0 1-2 2H3'/%3E%3Cpath d='M21 8h-3a2 2 0 0 1-2-2V3'/%3E%3Cpath d='M3 16h3a2 2 0 0 1 2 2v3'/%3E%3Cpath d='M16 21v-3a2 2 0 0 1 2-2h3'/%3E%3C/svg%3E");
  --lucide-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --lucide-x: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --menu-background: var(--background-secondary, rgb(34, 34, 34));
  --menu-border-color: var(--background-modifier-border-hover, rgb(75, 75, 75));
  --metadata-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --metadata-divider-color: var(--background-modifier-border, rgb(45, 45, 45));
  --metadata-input-text-color: var(--text-normal, rgb(245, 245, 245));
  --metadata-label-text-color: var(--text-muted, rgb(200, 200, 200));
  --metadata-label-text-color-hover: var(--text-muted, rgb(200, 200, 200));
  --modal-background: var(--background-primary, rgb(15, 15, 15));
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(135, 135, 135));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(135, 135, 135));
  --nav-heading-color: var(--text-normal, rgb(245, 245, 245));
  --nav-heading-color-collapsed: var(--text-faint, rgb(135, 135, 135));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(200, 200, 200));
  --nav-heading-color-hover: var(--text-normal, rgb(245, 245, 245));
  --nav-item-color: var(--text-muted, rgb(200, 200, 200));
  --nav-item-color-active: var(--text-normal, rgb(245, 245, 245));
  --nav-item-color-highlighted: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --nav-item-color-hover: var(--text-normal, rgb(245, 245, 245));
  --nav-item-color-selected: var(--text-normal, rgb(245, 245, 245));
  --nav-tag-color: var(--text-faint, rgb(135, 135, 135));
  --nav-tag-color-active: var(--text-muted, rgb(200, 200, 200));
  --nav-tag-color-hover: var(--text-muted, rgb(200, 200, 200));
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%23ffffff90' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%2300000090' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --pdf-background: var(--background-primary, rgb(15, 15, 15));
  --pdf-page-background: var(--background-primary, rgb(15, 15, 15));
  --pdf-sidebar-background: var(--background-primary, rgb(15, 15, 15));
  --pill-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(75, 75, 75));
  --pill-color: var(--text-muted, rgb(200, 200, 200));
  --pill-color-hover: var(--text-normal, rgb(245, 245, 245));
  --pill-color-remove: var(--text-faint, rgb(135, 135, 135));
  --pill-color-remove-hover: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --prompt-background: var(--background-primary, rgb(15, 15, 15));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(45, 45, 45) 65%, transparent) linear-gradient(rgb(45, 45, 45), color-mix(in srgb, rgb(45, 45, 45) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(34, 34, 34));
  --ribbon-background-collapsed: var(--background-primary, rgb(15, 15, 15));
  --search-clear-button-color: var(--text-muted, rgb(200, 200, 200));
  --search-icon-color: var(--text-muted, rgb(200, 200, 200));
  --search-result-background: var(--background-primary, rgb(15, 15, 15));
  --secondary: var(--text-accent, var(--color-accent-1, hsl(259, 84.66%, 79.35%)));
  --setting-group-heading-color: var(--text-normal, rgb(245, 245, 245));
  --setting-items-background: var(--background-primary-alt, rgb(27, 27, 27));
  --setting-items-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(200, 200, 200));
  --shiki-code-background: var(--code-background, rgb(27, 27, 27));
  --shiki-code-comment: var(--text-faint, rgb(135, 135, 135));
  --shiki-code-normal: var(--text-muted, rgb(200, 200, 200));
  --shiki-code-punctuation: var(--text-muted, rgb(200, 200, 200));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --shiki-gutter-text-color: var(--text-faint, rgb(135, 135, 135));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(200, 200, 200));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(200, 200, 200));
  --shiki-terminal-dots-color: var(--text-faint, rgb(135, 135, 135));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(75, 75, 75));
  --slider-track-background: var(--background-modifier-border, rgb(45, 45, 45));
  --status-bar-background: var(--background-secondary, rgb(34, 34, 34));
  --status-bar-border-color: var(--divider-color, rgb(45, 45, 45));
  --status-bar-text-color: var(--text-muted, rgb(200, 200, 200));
  --suggestion-background: var(--background-primary, rgb(15, 15, 15));
  --tab-background-active: var(--background-primary, rgb(15, 15, 15));
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, rgb(75, 75, 75));
  --tab-height: 38px;
  --tab-outline-color: var(--divider-color, rgb(45, 45, 45));
  --tab-radius: var(--radius-s, 6px);
  --tab-stacked-header-width: var(--header-height, 44px);
  --tab-switcher-background: var(--background-secondary, rgb(34, 34, 34));
  --tab-text-color: var(--text-faint, rgb(135, 135, 135));
  --tab-text-color-active: var(--text-muted, rgb(200, 200, 200));
  --tab-text-color-focused: var(--text-muted, rgb(200, 200, 200));
  --tab-text-color-focused-active: var(--text-muted, rgb(200, 200, 200));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(245, 245, 245));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --table-add-button-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --table-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(262, 83%, 69%));
  --table-drag-handle-color: var(--text-faint, rgb(135, 135, 135));
  --table-header-border-color: var(--table-border-color, rgb(45, 45, 45));
  --table-header-color: var(--text-normal, rgb(245, 245, 245));
  --table-selection-border-color: var(--interactive-accent, hsl(262, 83%, 69%));
  --tag-color: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --tag-color-hover: var(--text-accent, hsl(259, 84.66%, 79.35%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(257, 87.15%, 89.01%)));
  --text-accent: var(--color-accent-1, hsl(259, 84.66%, 79.35%));
  --text-accent-hover: var(--color-accent-2, hsl(257, 87.15%, 89.01%));
  --text-faint: var(--color-base-50, rgb(135, 135, 135));
  --text-muted: var(--color-base-70, rgb(200, 200, 200));
  --text-normal: var(--color-base-100, rgb(245, 245, 245));
  --titlebar-background: var(--background-secondary, rgb(34, 34, 34));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(45, 45, 45));
  --titlebar-border-color: var(--background-modifier-border, rgb(45, 45, 45));
  --titlebar-text-color: var(--text-muted, rgb(200, 200, 200));
  --titlebar-text-color-focused: var(--text-normal, rgb(245, 245, 245));
  --traffic-lights-offset-x: var(--header-height, 44px);
  --traffic-lights-offset-y: var(--header-height, 44px);
  --vault-profile-color: var(--text-normal, rgb(245, 245, 245));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(245, 245, 245));
  --workspace-background-translucent: rgba(var(--grey-900-rgb), 0.2);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(34, 34, 34));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(34, 34, 34));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(128, 128, 128);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body html {
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --encore-translucency-strength: 0.25;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(245, 245, 245));
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(245, 245, 245));
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(245, 245, 245));
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(245, 245, 245));
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: hsla(var(--highlight-hue), 100%, 30%, 0.5);
  color: hsla(var(--highlight-hue), 100%, 92%, 1);
  outline: rgb(255, 239, 214) none 0px;
  text-decoration-color: rgb(255, 239, 214);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(135, 135, 135);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(158, 110, 242));
  border-color: rgb(158, 110, 242);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(200, 200, 200));
  outline: rgb(200, 200, 200) none 0px;
  text-decoration-color: rgb(200, 200, 200);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(186, 158, 247));
  outline: rgb(186, 158, 247) none 0px;
  text-decoration-color: rgb(186, 158, 247);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(216, 203, 251));
  outline: rgb(216, 203, 251) none 0px;
  text-decoration-color: rgb(216, 203, 251);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(186, 158, 247));
  filter: var(--link-unresolved-filter, contrast(0.3) brightness(1.2));
  outline: rgb(186, 158, 247) none 0px;
  text-decoration: rgba(158, 110, 242, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(158, 110, 242, 0.3));
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
  color: var(--text-faint, rgb(135, 135, 135));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--color-base-10, rgb(27, 27, 27));
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
  color: var(--table-text-color, rgb(245, 245, 245));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: var(--table-header-color, rgb(245, 245, 245));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(27, 27, 27));
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: var(--code-normal, rgb(245, 245, 245));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(27, 27, 27));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  --code-background: var(--ec-frm-edBg, rgb(27, 27, 27));
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
  background-color: var(--color-base-10, rgb(27, 27, 27));
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 38, 38);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: var(--color-base-30, rgb(45, 45, 45));
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
  background-color: var(--color-base-10, rgb(27, 27, 27));
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
  border-top-color: var(--color-base-30, rgb(45, 45, 45));
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(135, 135, 135);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(135, 135, 135);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(245, 245, 245);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 15, 15);
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
  background-color: rgb(135, 135, 135);
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
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(245, 245, 245);
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
  color: var(--text-normal, rgb(245, 245, 245));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgba(0, 0, 0, 0));
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
  color: rgba(var(--grey-300-rgb), var(--en-opacity));
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(262, 83%, 69%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(262, 83%, 69%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(262, 83%, 69%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(262, 83%, 69%, 0.15));
  --pill-color: var(--tag-color, hsl(259, 84.66%, 79.35%));
  --pill-color-hover: var(--tag-color-hover, hsl(259, 84.66%, 79.35%));
  --pill-color-remove: var(--tag-color, hsl(259, 84.66%, 79.35%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(259, 84.66%, 79.35%));
  background-color: var(--pill-background, rgba(158, 110, 242, 0.1));
  border-bottom-color: rgba(158, 110, 242, 0.15);
  border-left-color: rgba(158, 110, 242, 0.15);
  border-right-color: rgba(158, 110, 242, 0.15);
  border-top-color: rgba(158, 110, 242, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(186, 158, 247);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 800);
  color: var(--h1-color, rgba(245, 245, 245, 0.9));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(216, 203, 251));
  font-size: var(--inline-title-size, 36px);
  font-weight: var(--inline-title-weight, 800);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 700);
  color: var(--h2-color, rgba(245, 245, 245, 0.925));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(216, 203, 251));
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, rgba(245, 245, 245, 0.95));
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgba(245, 245, 245, 0.976));
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(245, 245, 245));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(245, 245, 245));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(200, 200, 200));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(200, 200, 200));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 245, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: var(--icon-color, rgb(200, 200, 200));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(var(--grey-600-rgb), var(--en-opacity));
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
  color: var(--status-bar-text-color, rgb(200, 200, 200));
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
  color: var(--nav-item-color, rgb(200, 200, 200));
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
  color: var(--nav-item-color, rgb(200, 200, 200));
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
  color: var(--interactive-accent, rgb(158, 110, 242));
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
  color: var(--text-faint, rgb(135, 135, 135));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(245, 245, 245));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(34, 34, 34));
  border-color: rgb(245, 245, 245);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(45, 45, 45);
  color: var(--table-header-color, rgb(245, 245, 245));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: var(--text-muted, rgb(200, 200, 200));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
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
  --pill-background: var(--tag-background, hsla(262, 83%, 69%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(262, 83%, 69%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(262, 83%, 69%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(262, 83%, 69%, 0.15));
  --pill-color: var(--tag-color, hsl(259, 84.66%, 79.35%));
  --pill-color-hover: var(--tag-color-hover, hsl(259, 84.66%, 79.35%));
  --pill-color-remove: var(--tag-color, hsl(259, 84.66%, 79.35%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(259, 84.66%, 79.35%));
  background-color: var(--pill-background, rgba(158, 110, 242, 0.1));
  color: var(--pill-color, rgb(186, 158, 247));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--icon-color, rgb(15, 15, 15));
  color: var(--text-normal, rgb(245, 245, 245));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(245, 245, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(var(--grey-600-rgb), var(--en-opacity));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(245, 245, 245));
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
  color: var(--text-normal, rgb(200, 200, 200));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(27, 27, 27));
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: var(--code-normal, rgb(245, 245, 245));
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
  background-color: var(--tag-background, rgba(158, 110, 242, 0.1));
  border-bottom-color: rgba(158, 110, 242, 0.15);
  border-left-color: rgba(158, 110, 242, 0.15);
  border-right-color: rgba(158, 110, 242, 0.15);
  border-top-color: rgba(158, 110, 242, 0.15);
  color: var(--tag-color, rgb(186, 158, 247));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254;
  --accent-l: 40%;
  --accent-s: 40%;
  --background-modifier-border: var(--color-base-30, rgb(209, 213, 219));
  --background-modifier-border-focus: var(--color-base-40, rgb(107, 114, 128));
  --background-modifier-border-hover: var(--color-base-35, rgb(156, 163, 175));
  --background-modifier-form-field: var(--color-base-00, rgb(255, 255, 255));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgb(255, 255, 255));
  --background-primary: var(--color-base-00, rgb(255, 255, 255));
  --background-primary-alt: var(--color-base-10, rgb(250, 250, 250));
  --background-secondary: var(--color-base-20, rgb(243, 244, 246));
  --background-secondary-alt: var(--color-base-05, rgb(250, 250, 250));
  --bases-cards-background: var(--background-primary, rgb(255, 255, 255));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(250, 250, 250));
  --bases-embed-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --bases-group-heading-property-color: var(--text-muted, rgb(55, 65, 81));
  --bases-table-border-color: var(--table-border-color, rgb(209, 213, 219));
  --bases-table-cell-background-active: var(--background-primary, rgb(255, 255, 255));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(250, 250, 250));
  --bases-table-cell-background-selected: var(--table-selection, hsla(254, 40%, 40%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, rgb(250, 250, 250));
  --bases-table-header-background: var(--background-primary, rgb(255, 255, 255));
  --bases-table-header-color: var(--text-muted, rgb(55, 65, 81));
  --bases-table-summary-background: var(--background-primary, rgb(255, 255, 255));
  --blockquote-border-color: var(--interactive-accent, hsl(253, 40.4%, 43%));
  --canvas-background: var(--background-primary, rgb(255, 255, 255));
  --canvas-card-label-color: var(--text-faint, rgb(90, 90, 90));
  --canvas-dot-pattern: var(--color-base-30, rgb(209, 213, 219));
  --caret-color: var(--text-normal, rgb(31, 41, 55));
  --checkbox-border-color: var(--text-faint, rgb(90, 90, 90));
  --checkbox-border-color-hover: var(--text-muted, rgb(55, 65, 81));
  --checkbox-color: var(--interactive-accent, hsl(253, 40.4%, 43%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(251, 40.8%, 46%));
  --checkbox-marker-color: var(--background-primary, rgb(255, 255, 255));
  --checklist-done-color: var(--color-base-50, rgb(90, 90, 90));
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, rgb(250, 250, 250));
  --code-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --code-comment: var(--text-faint, rgb(90, 90, 90));
  --code-normal: var(--text-normal, rgb(31, 41, 55));
  --code-punctuation: var(--text-muted, rgb(55, 65, 81));
  --collapse-icon-color: var(--text-faint, rgb(90, 90, 90));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(254, 40%, 40%));
  --color-base-00: rgb(var(--grey-900-rgb));
  --color-base-05: rgb(var(--grey-875-rgb));
  --color-base-10: rgb(var(--grey-850-rgb));
  --color-base-100: rgb(var(--grey-100-rgb));
  --color-base-20: rgb(var(--grey-800-rgb));
  --color-base-25: rgb(var(--grey-700-rgb));
  --color-base-30: rgb(var(--grey-600-rgb));
  --color-base-35: rgb(var(--grey-500-rgb));
  --color-base-40: rgb(var(--grey-400-rgb));
  --color-base-50: rgb(
    var(--grey-350-rgb)
  );
  --color-base-60: rgb(var(--grey-300-rgb));
  --color-base-70: rgb(var(--grey-200-rgb));
  --dark: var(--text-normal, var(--color-base-100, rgb(31, 41, 55)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(31, 41, 55)));
  --divider-color: var(--background-modifier-border, rgb(209, 213, 219));
  --divider-color-hover: var(--interactive-accent, hsl(253, 40.4%, 43%));
  --dropdown-background: var(--interactive-normal, rgb(255, 255, 255));
  --dropdown-background-hover: var(--interactive-hover, rgb(250, 250, 250));
  --en-acrylic: blur(8px);
  --en-acrylic-opacity: 0.66;
  --en-modal-backdrop: blur(25px);
  --en-opacity: 1;
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --encore-translucency-strength: 0.25;
  --file-header-background: var(--background-primary, rgb(255, 255, 255));
  --file-header-background-focused: var(--background-primary, rgb(255, 255, 255));
  --flair-background: var(--interactive-normal, rgb(255, 255, 255));
  --flair-color: var(--text-normal, rgb(31, 41, 55));
  --footnote-divider-color: var(--metadata-divider-color, rgb(209, 213, 219));
  --footnote-id-color: var(--text-muted, rgb(55, 65, 81));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(90, 90, 90));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --grain: url("data:image/pngbase64,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");
  --graph-node: var(--text-muted, rgb(55, 65, 81));
  --graph-node-focused: var(--text-accent, hsl(254, 40%, 40%));
  --graph-node-unresolved: var(--text-faint, rgb(90, 90, 90));
  --graph-text: var(--text-normal, rgb(31, 41, 55));
  --gray: var(--text-muted, var(--color-base-70, rgb(55, 65, 81)));
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
  --h1-color: rgba(var(--grey-100-rgb), 0.9);
  --h1-line-height: 1.111;
  --h1-size: 2.25rem;
  --h1-weight: 800;
  --h2-color: rgba(var(--grey-100-rgb), 0.925);
  --h2-line-height: 1.333;
  --h2-size: 1.5rem;
  --h2-weight: 700;
  --h3-color: rgba(var(--grey-100-rgb), 0.95);
  --h3-line-height: 1.6;
  --h3-size: 1.25rem;
  --h3-weight: 600;
  --h4-color: rgba(var(--grey-100-rgb), 0.975);
  --h4-line-height: 1.5;
  --h4-size: 1rem;
  --h4-weight: 600;
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 0.95rem;
  --h5-weight: 600;
  --h6-line-height: var(--line-height-normal, 1.7);
  --h6-size: 0.85rem;
  --header-height: 44px;
  --heading-formatting: var(--text-faint, rgb(90, 90, 90));
  --highlight-hue: 37;
  --hr-color: var(--background-modifier-border, #00000090);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, rgb(55, 65, 81));
  --icon-color-active: var(--text-accent, hsl(254, 40%, 40%));
  --icon-color-focused: var(--text-normal, rgb(31, 41, 55));
  --icon-color-hover: var(--text-muted, rgb(55, 65, 81));
  --inline-title-color: var(--color-accent-2, hsl(251, 40.8%, 46%));
  --inline-title-line-height: var(--h1-line-height, 1.111);
  --inline-title-size: var(--h1-size, 2.25rem);
  --inline-title-weight: var(--h1-weight, 800);
  --input-date-separator: var(--text-faint, rgb(90, 90, 90));
  --input-placeholder-color: var(--text-faint, rgb(90, 90, 90));
  --interactive-accent: var(--color-accent-1, hsl(253, 40.4%, 43%));
  --interactive-accent-hover: var(--color-accent-2, hsl(251, 40.8%, 46%));
  --interactive-accent-hsl: var(--color-accent-hsl, 254, 40%, 40%);
  --interactive-hover: var(--color-base-10, rgb(250, 250, 250));
  --interactive-normal: var(--color-base-00, rgb(255, 255, 255));
  --light: var(--background-primary, var(--color-base-00, rgb(255, 255, 255)));
  --lightgray: var(--background-secondary, var(--color-base-20, rgb(243, 244, 246)));
  --line-height-normal: 1.65;
  --link-color: var(--color-accent-2, hsl(251, 40.8%, 46%));
  --link-color-hover: var(--text-accent-hover, hsl(251, 40.8%, 46%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(254, 40%, 40%));
  --link-external-color-hover: var(--text-accent-hover, hsl(251, 40.8%, 46%));
  --link-unresolved-color: var(--text-accent, hsl(254, 40%, 40%));
  --link-unresolved-filter: contrast(0.3) brightness(120%);
  --link-unresolved-opacity: 1;
  --list-marker-color: var(--color-base-40, rgb(107, 114, 128));
  --list-marker-color-collapsed: var(--text-accent, hsl(254, 40%, 40%));
  --list-marker-color-hover: var(--text-muted, rgb(55, 65, 81));
  --lucide-maximize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E");
  --lucide-minimize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minimize'%3E%3Cpath d='M8 3v3a2 2 0 0 1-2 2H3'/%3E%3Cpath d='M21 8h-3a2 2 0 0 1-2-2V3'/%3E%3Cpath d='M3 16h3a2 2 0 0 1 2 2v3'/%3E%3Cpath d='M16 21v-3a2 2 0 0 1 2-2h3'/%3E%3C/svg%3E");
  --lucide-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --lucide-x: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --menu-background: var(--background-secondary, rgb(243, 244, 246));
  --menu-border-color: var(--background-modifier-border-hover, rgb(156, 163, 175));
  --metadata-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --metadata-divider-color: var(--background-modifier-border, rgb(209, 213, 219));
  --metadata-input-text-color: var(--text-normal, rgb(31, 41, 55));
  --metadata-label-text-color: var(--text-muted, rgb(55, 65, 81));
  --metadata-label-text-color-hover: var(--text-muted, rgb(55, 65, 81));
  --modal-background: var(--background-primary, rgb(255, 255, 255));
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(90, 90, 90));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(90, 90, 90));
  --nav-heading-color: var(--text-normal, rgb(31, 41, 55));
  --nav-heading-color-collapsed: var(--text-faint, rgb(90, 90, 90));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(55, 65, 81));
  --nav-heading-color-hover: var(--text-normal, rgb(31, 41, 55));
  --nav-item-color: var(--text-muted, rgb(55, 65, 81));
  --nav-item-color-active: var(--text-normal, rgb(31, 41, 55));
  --nav-item-color-highlighted: var(--text-accent, hsl(254, 40%, 40%));
  --nav-item-color-hover: var(--text-normal, rgb(31, 41, 55));
  --nav-item-color-selected: var(--text-normal, rgb(31, 41, 55));
  --nav-tag-color: var(--text-faint, rgb(90, 90, 90));
  --nav-tag-color-active: var(--text-muted, rgb(55, 65, 81));
  --nav-tag-color-hover: var(--text-muted, rgb(55, 65, 81));
  --obsidian-logo-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%23ffffff90' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --obsidian-logo-small-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='8' height='8' fill='none' stroke='%2300000090' stroke-width='5%' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --pdf-background: var(--background-primary, rgb(255, 255, 255));
  --pdf-page-background: var(--background-primary, rgb(255, 255, 255));
  --pdf-sidebar-background: var(--background-primary, rgb(255, 255, 255));
  --pill-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(156, 163, 175));
  --pill-color: var(--text-muted, rgb(55, 65, 81));
  --pill-color-hover: var(--text-normal, rgb(31, 41, 55));
  --pill-color-remove: var(--text-faint, rgb(90, 90, 90));
  --pill-color-remove-hover: var(--text-accent, hsl(254, 40%, 40%));
  --prompt-background: var(--background-primary, rgb(255, 255, 255));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(243, 244, 246));
  --ribbon-background-collapsed: var(--background-primary, rgb(255, 255, 255));
  --search-clear-button-color: var(--text-muted, rgb(55, 65, 81));
  --search-icon-color: var(--text-muted, rgb(55, 65, 81));
  --search-result-background: var(--background-primary, rgb(255, 255, 255));
  --secondary: var(--text-accent, var(--color-accent, hsl(254, 40%, 40%)));
  --setting-group-heading-color: var(--text-normal, rgb(31, 41, 55));
  --setting-items-background: var(--background-primary-alt, rgb(250, 250, 250));
  --setting-items-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(55, 65, 81));
  --shiki-code-background: var(--code-background, rgb(250, 250, 250));
  --shiki-code-comment: var(--text-faint, rgb(90, 90, 90));
  --shiki-code-normal: var(--text-muted, rgb(55, 65, 81));
  --shiki-code-punctuation: var(--text-muted, rgb(55, 65, 81));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --shiki-gutter-text-color: var(--text-faint, rgb(90, 90, 90));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(55, 65, 81));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(55, 65, 81));
  --shiki-terminal-dots-color: var(--text-faint, rgb(90, 90, 90));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(156, 163, 175));
  --slider-track-background: var(--background-modifier-border, rgb(209, 213, 219));
  --status-bar-background: var(--background-secondary, rgb(243, 244, 246));
  --status-bar-border-color: var(--divider-color, rgb(209, 213, 219));
  --status-bar-text-color: var(--text-muted, rgb(55, 65, 81));
  --suggestion-background: var(--background-primary, rgb(255, 255, 255));
  --tab-background-active: var(--background-primary, rgb(255, 255, 255));
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, rgb(156, 163, 175));
  --tab-height: 38px;
  --tab-outline-color: var(--divider-color, rgb(209, 213, 219));
  --tab-radius: var(--radius-s, 6px);
  --tab-stacked-header-width: var(--header-height, 44px);
  --tab-switcher-background: var(--background-secondary, rgb(243, 244, 246));
  --tab-text-color: var(--text-faint, rgb(90, 90, 90));
  --tab-text-color-active: var(--text-muted, rgb(55, 65, 81));
  --tab-text-color-focused: var(--text-muted, rgb(55, 65, 81));
  --tab-text-color-focused-active: var(--text-muted, rgb(55, 65, 81));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(31, 41, 55));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(254, 40%, 40%));
  --table-add-button-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --table-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(253, 40.4%, 43%));
  --table-drag-handle-color: var(--text-faint, rgb(90, 90, 90));
  --table-header-border-color: var(--table-border-color, rgb(209, 213, 219));
  --table-header-color: var(--text-normal, rgb(31, 41, 55));
  --table-selection-border-color: var(--interactive-accent, hsl(253, 40.4%, 43%));
  --tag-color: var(--text-accent, hsl(254, 40%, 40%));
  --tag-color-hover: var(--text-accent, hsl(254, 40%, 40%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(251, 40.8%, 46%)));
  --text-accent: var(--color-accent, hsl(254, 40%, 40%));
  --text-accent-hover: var(--color-accent-2, hsl(251, 40.8%, 46%));
  --text-faint: var(--color-base-50, rgb(90, 90, 90));
  --text-muted: var(--color-base-70, rgb(55, 65, 81));
  --text-normal: var(--color-base-100, rgb(31, 41, 55));
  --titlebar-background: var(--background-secondary, rgb(243, 244, 246));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(250, 250, 250));
  --titlebar-border-color: var(--background-modifier-border, rgb(209, 213, 219));
  --titlebar-text-color: var(--text-muted, rgb(55, 65, 81));
  --titlebar-text-color-focused: var(--text-normal, rgb(31, 41, 55));
  --traffic-lights-offset-x: var(--header-height, 44px);
  --traffic-lights-offset-y: var(--header-height, 44px);
  --vault-profile-color: var(--text-normal, rgb(31, 41, 55));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(31, 41, 55));
  --workspace-background-translucent: rgba(var(--grey-700-rgb), 0.7);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(243, 244, 246));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(243, 244, 246));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(128, 128, 128);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body html {
  --encore-translucency-image: url("https://images.unsplash.com/photo-1707494966495-a2cc8c1dac1f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --encore-translucency-strength: 0.25;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(31, 41, 55));
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(31, 41, 55));
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(31, 41, 55));
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(31, 41, 55));
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .text-highlight {
  background-color: hsla(var(--highlight-hue), 100%, 30%, 0.5);
  color: hsla(var(--highlight-hue), 100%, 92%, 1);
  outline: rgb(255, 239, 214) none 0px;
  text-decoration-color: rgb(255, 239, 214);
}

html[saved-theme="light"] body del {
  color: rgb(31, 41, 55);
  outline: rgb(31, 41, 55) none 0px;
  text-decoration-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(85, 65, 154));
  border-color: rgb(85, 65, 154);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(55, 65, 81));
  outline: rgb(55, 65, 81) none 0px;
  text-decoration-color: rgb(55, 65, 81);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(80, 61, 143));
  outline: rgb(80, 61, 143) none 0px;
  text-decoration-color: rgb(80, 61, 143);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(87, 69, 165));
  outline: rgb(87, 69, 165) none 0px;
  text-decoration-color: rgb(87, 69, 165);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(80, 61, 143));
  filter: var(--link-unresolved-filter, contrast(0.3) brightness(1.2));
  outline: rgb(80, 61, 143) none 0px;
  text-decoration: rgba(80, 61, 143, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(80, 61, 143, 0.3));
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
  color: var(--text-faint, rgb(90, 90, 90));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--color-base-10, rgb(250, 250, 250));
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
  color: var(--table-text-color, rgb(31, 41, 55));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: var(--table-header-color, rgb(31, 41, 55));
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: var(--code-normal, rgb(31, 41, 55));
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  --code-background: var(--ec-frm-edBg, rgb(250, 250, 250));
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
  background-color: var(--color-base-10, rgb(250, 250, 250));
  border-bottom-color: rgb(228, 228, 231);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(228, 228, 231);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(228, 228, 231);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: var(--color-base-30, rgb(209, 213, 219));
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
  background-color: var(--color-base-10, rgb(250, 250, 250));
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
  border-top-color: var(--color-base-30, rgb(209, 213, 219));
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(90, 90, 90);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(90, 90, 90);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(31, 41, 55);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  background-color: rgb(90, 90, 90);
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
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(31, 41, 55);
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
  color: var(--text-normal, rgb(31, 41, 55));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgba(0, 0, 0, 0));
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
  color: rgba(var(--grey-300-rgb), var(--en-opacity));
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(254, 40%, 40%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(254, 40%, 40%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(254, 40%, 40%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(254, 40%, 40%, 0.15));
  --pill-color: var(--tag-color, hsl(254, 40%, 40%));
  --pill-color-hover: var(--tag-color-hover, hsl(254, 40%, 40%));
  --pill-color-remove: var(--tag-color, hsl(254, 40%, 40%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(254, 40%, 40%));
  background-color: var(--pill-background, rgba(80, 61, 143, 0.1));
  border-bottom-color: rgba(80, 61, 143, 0.15);
  border-left-color: rgba(80, 61, 143, 0.15);
  border-right-color: rgba(80, 61, 143, 0.15);
  border-top-color: rgba(80, 61, 143, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(80, 61, 143);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 800);
  color: var(--h1-color, rgba(31, 41, 55, 0.9));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(87, 69, 165));
  font-size: var(--inline-title-size, 36px);
  font-weight: var(--inline-title-weight, 800);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 700);
  color: var(--h2-color, rgba(31, 41, 55, 0.925));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(87, 69, 165));
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, rgba(31, 41, 55, 0.95));
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgba(31, 41, 55, 0.976));
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(31, 41, 55));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(31, 41, 55));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(55, 65, 81));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(55, 65, 81));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(31, 41, 55);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: var(--icon-color, rgb(55, 65, 81));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(var(--grey-600-rgb), var(--en-opacity));
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
  color: var(--status-bar-text-color, rgb(55, 65, 81));
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
  color: var(--nav-item-color, rgb(55, 65, 81));
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
  color: var(--nav-item-color, rgb(55, 65, 81));
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
  color: var(--interactive-accent, rgb(85, 65, 154));
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
  color: var(--text-faint, rgb(90, 90, 90));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(31, 41, 55));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(31, 41, 55);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(209, 213, 219);
  color: var(--table-header-color, rgb(31, 41, 55));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: var(--text-muted, rgb(55, 65, 81));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(55, 65, 81);
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
  --pill-background: var(--tag-background, hsla(254, 40%, 40%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(254, 40%, 40%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(254, 40%, 40%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(254, 40%, 40%, 0.15));
  --pill-color: var(--tag-color, hsl(254, 40%, 40%));
  --pill-color-hover: var(--tag-color-hover, hsl(254, 40%, 40%));
  --pill-color-remove: var(--tag-color, hsl(254, 40%, 40%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(254, 40%, 40%));
  background-color: var(--pill-background, rgba(80, 61, 143, 0.1));
  color: var(--pill-color, rgb(80, 61, 143));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(55, 65, 81);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgba(var(--grey-600-rgb), var(--en-opacity));
  color: var(--text-normal, rgb(31, 41, 55));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(31, 41, 55);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(var(--grey-600-rgb), var(--en-opacity));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(31, 41, 55));
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
  color: var(--text-normal, rgb(55, 65, 81));
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(31, 41, 55);
  border-right-color: rgb(31, 41, 55);
  border-top-color: rgb(31, 41, 55);
  color: var(--code-normal, rgb(31, 41, 55));
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
  background-color: var(--tag-background, rgba(80, 61, 143, 0.1));
  border-bottom-color: rgba(80, 61, 143, 0.15);
  border-left-color: rgba(80, 61, 143, 0.15);
  border-right-color: rgba(80, 61, 143, 0.15);
  border-top-color: rgba(80, 61, 143, 0.15);
  color: var(--tag-color, rgb(80, 61, 143));
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
  classSettings: {
    "encore-theme-dark": {
      dark: `body.encore-theme-dark-cobalt.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 235, 240, 246;
--grey-200-rgb: 186, 192, 201;
--grey-300-rgb: 163, 186, 178;
--grey-350-rgb: 117, 122, 132;
--grey-400-rgb: 108, 114, 125;
--grey-500-rgb: 70, 76, 89;
--grey-600-rgb: 48, 55, 66;
--grey-700-rgb: 34, 43, 54;
--grey-800-rgb: 23, 31, 43;
--grey-850-rgb: 14, 18, 27;
--grey-875-rgb: 9, 13, 21;
--grey-900-rgb: 11, 16, 28;
--accent-h: 93;
--accent-s: 93%;
--accent-l: 76%;
}

body.encore-theme-dark-cobalt.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #b3bcf0;
--h2-color: #989ed6;
--h3-color: #8987c9;
--h4-color: #9482c5;
--h5-color: #9482c5;
--h6-color: #9482c5;
}

body.encore-theme-dark-mercury.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 244, 244, 247;
--grey-200-rgb: 199, 199, 204;
--grey-300-rgb: 174, 175, 183;
--grey-350-rgb: 129, 130, 144;
--grey-400-rgb: 116, 116, 127;
--grey-500-rgb: 73, 73, 80;
--grey-600-rgb: 42, 42, 46;
--grey-700-rgb: 33, 33, 36;
--grey-800-rgb: 29, 29, 32;
--grey-850-rgb: 23, 23, 26;
--grey-875-rgb: 18, 18, 21;
--grey-900-rgb: 12, 12, 15;
--accent-h: 21;
--accent-s: 92%;
--accent-l: 69%;
}

body.encore-theme-dark-mercury.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #61aafd;
--h2-color: #5ce4ab;
--h3-color: #50f3d8;
--h4-color: #9adfff;
--h5-color: #9482c5;
--h6-color: #9482c5;
}

body.encore-theme-dark-iron.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 245, 240, 240;
--grey-200-rgb: 231, 223, 219;
--grey-300-rgb: 212, 204, 198;
--grey-350-rgb: 147, 137, 136;
--grey-400-rgb: 115, 105, 105;
--grey-500-rgb: 97, 89, 87;
--grey-600-rgb: 87, 79, 76;
--grey-700-rgb: 57, 51, 50;
--grey-800-rgb: 41, 36, 36;
--grey-850-rgb: 36, 31, 31;
--grey-875-rgb: 33, 29, 28;
--grey-900-rgb: 28, 25, 23;
--accent-h: 165;
--accent-s: 74%;
--accent-l: 52%;
--color-red: #df2a51;
--color-green: #2adfb2;
--color-orange: #ff9b7c;
--color-yellow: #abe667;
--color-cyan: #2abbdf;
--color-blue: #5c87ff;
}

body.encore-theme-dark-iron.encore-colors-colorful {
--highlight-hue: 30;
--italic-color: #82c0e9;
--bold-color: #d86679;
--h1-color: #ffc444;
--h2-color: #faa250;
--h3-color: #f88765;
--h4-color: #f88773;
--h5-color: #f88773;
--h6-color: #f88773;
}

body.encore-theme-dark-carbon.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 11, 11, 12;
--grey-850-rgb: 8, 8, 8;
--grey-875-rgb: 6, 6, 6;
--grey-900-rgb: 3, 3, 3;
--accent-h: 203;
--accent-s: 66%;
--accent-l: 54%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
}

body.encore-theme-dark-carbon.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: var(--color-green);
--italic-color: var(--color-red);
--h1-color: #5af273;
--h2-color: #65e4de;
--h3-color: #e755db;
--h4-color: #e9ca63;
--h5-color: #9dee51;
--h6-color: #8badec;
}

body.encore-theme-dark-blackout.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 0, 0, 0;
--grey-850-rgb: 0, 0, 0;
--grey-875-rgb: 0, 0, 0;
--grey-900-rgb: 0, 0, 0;
--accent-h: 203;
--accent-s: 66%;
--accent-l: 54%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
}

body.encore-theme-dark-blackout.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: #a283ec;
--italic-color: #98f8eb;
--h1-color: #975af2;
--h2-color: #d965e4;
--h3-color: #e05b9e;
--h4-color: #e96363;
--h5-color: #ee7e51;
--h6-color: #ecc68b;
}

body.encore-theme-dark-slate.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 241, 243, 244;
--grey-200-rgb: 228, 228, 231;
--grey-300-rgb: 209, 213, 219;
--grey-350-rgb: 177, 179, 192;
--grey-400-rgb: 156, 163, 175;
--grey-500-rgb: 107, 114, 128;
--grey-600-rgb: 75, 85, 99;
--grey-700-rgb: 55, 65, 81;
--grey-800-rgb: 31, 41, 55;
--grey-850-rgb: 23, 29, 44;
--grey-875-rgb: 20, 26, 38;
--grey-900-rgb: 17, 24, 39;
--accent-h: 93;
--accent-s: 93%;
--accent-l: 76%;
}

body.encore-theme-dark-atom.theme-dark {
--grey-900-rgb: 32, 36, 43;
--grey-800-rgb: 39, 43, 52;
--grey-700-rgb: 61, 68, 83;
--grey-600-rgb: 79, 88, 107;
--grey-500-rgb: 79, 88, 107;
--grey-400-rgb: 171, 178, 191;
--grey-300-rgb: 171, 178, 191;
--grey-200-rgb: 171, 178, 191;
--grey-100-rgb: 206, 210, 218;
--grey-50-rgb: 206, 210, 218;
--accent-h: 207;
--accent-s: 82%;
--accent-l: 66%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
--color-red: #e06c75;
--color-green: #98c379;
--color-orange: #d19a66;
--color-yellow: #e5c07b;
--color-cyan: #56b6c2;
--color-blue: #61afef;
}

body.encore-theme-dark-atom.encore-colors-colorful {
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
--highlight-hue: 37;
--h1-color: var(--color-orange);
--h2-color: var(--color-green);
--h3-color: var(--color-cyan);
--h4-color: var(--color-blue);
--h5-color: var(--color-red);
--h6-color: var(--color-yellow);
}

body.encore-theme-dark-obsidian.theme-dark {
--grey-900-rgb: 30, 30, 30;
--grey-800-rgb: 38, 38, 38;
--grey-700-rgb: 54, 54, 54;
--grey-600-rgb: 82, 82, 91;
--grey-500-rgb: 113, 113, 122;
--grey-400-rgb: 161, 161, 170;
--grey-300-rgb: 212, 212, 216;
--grey-200-rgb: 228, 228, 231;
--grey-100-rgb: 244, 244, 245;
--grey-50-rgb: 250, 250, 250;
--accent-h: 255;
--accent-s: 92%;
--accent-l: 76%;
--inline-title-color: var(--text-color);
--bold-color: var(--text-color);
--italic-color: var(--text-color);
--workspace-background-translucent: rgba(var(--grey-700-rgb), 0.33);
background-color: rgba(var(--grey-800-rgb), var(--en-opacity));
}

body.encore-theme-dark-obsidian.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content {
--en-opacity: 1;
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
}

body.encore-theme-dark-obsidian.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content .canvas-wrapper .canvas-background {
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
}

body.encore-theme-dark-obsidian.theme-dark .mk-note-header:after {
--gradient-color: var(--color-base-10);
}

body.encore-theme-dark-obsidian.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
--en-opacity: 0.66;
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
backdrop-filter: var(--en-acrylic);
}

body.encore-theme-dark-rgb.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 11, 11, 12;
--grey-850-rgb: 8, 8, 8;
--grey-875-rgb: 6, 6, 6;
--grey-900-rgb: 3, 3, 3;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
--rainbow-gradient: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,222,0,1) 15%, rgba(167,255,0,1) 26%, rgba(0,255,136,1) 39%, rgba(15,245,254,1) 55%, rgba(111,0,255,1) 80%, rgba(253,45,45,1) 100%);
}

body.encore-theme-dark-rgb.encore-colors-colorful {
--bold-color: var(--color-red);
--italic-color: var(--color-green);
}

body.encore-theme-dark-rgb.theme-dark .mod-root .workspace-tab-container {
border-radius: var(--tab-radius);
--shadow-properties: 0 0 50px -25px;
animation: rgb-shadow 12s linear infinite forwards;
}

body.encore-theme-dark-rgb.theme-dark .modal {
--shadow-properties: 0 0 50px -15px;
animation: rgb-shadow 12s linear infinite forwards;
}

body.encore-theme-dark-rgb.theme-dark .prompt::before {
content: "";
position: fixed;
top: 0;
left: 0;
right: 0;
height: 30px;
background-color: red;
background-image: var(--rainbow-gradient);
animation: pan-right 5s linear infinite forwards;
filter: blur(60px);
}

body.encore-theme-dark-rgb.theme-dark .prompt::after {
content: "";
position: fixed;
top: 0;
left: 0;
right: 0;
height: 10px;
background-color: red;
background-image: var(--rainbow-gradient);
animation: pan-right 5s linear infinite forwards;
filter: blur(15px);
}

body.encore-theme-dark-rgb.theme-dark .mod-root .workspace-tab-header.is-active .workspace-tab-header-inner {
--en-opacity: 0.2;
background-color: rgba(var(--grey-100-rgb), var(--en-opacity));
}

body.encore-theme-dark-materialocean.theme-dark {
--grey-50-rgb: 245, 248, 254;
--grey-100-rgb: 237, 241, 249;
--grey-200-rgb: 227, 231, 240;
--grey-300-rgb: 200, 207, 223;
--grey-350-rgb: 183, 191, 209;
--grey-400-rgb: 152, 165, 188;
--grey-500-rgb: 87, 98, 126;
--grey-600-rgb: 58, 65, 89;
--grey-700-rgb: 32, 36, 51;
--grey-800-rgb: 15, 17, 26;
--grey-850-rgb: 8, 9, 19;
--grey-875-rgb: 1, 3, 17;
--grey-900-rgb: 0, 1, 10;
--accent-h: 355;
--accent-s: 100%;
--accent-l: 63%;
--color-red: #bf616a;
--color-green: #a3be8c;
--color-orange: #b48ead;
--color-yellow: #ebcb8b;
--color-cyan: #88c0d0;
--color-blue: #81a1c1;
}

body.encore-theme-dark-materialocean.encore-colors-colorful {
--highlight-hue: 355;
--italic-color: #d7dfec;
--bold-color: #d9dee9;
--h1-color: var(--color-red);
--h2-color: var(--color-green);
--h3-color: var(--color-blue);
--h4-color: var(--color-cyan);
--h5-color: var(--color-yellow);
--h6-color: var(--color-orange);
}

body.encore-theme-dark-flexoki.theme-dark {
--grey-50-rgb: 242, 240, 229;
--grey-100-rgb: 206, 205, 195;
--grey-200-rgb: 168, 166, 159;
--grey-300-rgb: 135, 133, 128;
--grey-350-rgb: 114, 111, 106;
--grey-400-rgb: 85, 82, 78;
--grey-500-rgb: 64, 62, 60;
--grey-600-rgb: 52, 51, 49;
--grey-700-rgb: 40, 39, 38;
--grey-800-rgb: 28, 27, 26;
--grey-850-rgb: 23, 22, 22;
--grey-875-rgb: 20, 19, 19;
--grey-900-rgb: 16, 15, 15;
--accent-h: 175;
--accent-s: 49%;
--accent-l: 45%;
--workspace-background-translucent: rgba(var(--grey-700-rgb), 0.33);
background-color: rgb(var(--grey-875-rgb));
}

body.encore-theme-dark-flexoki.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #b3bcf0;
--h2-color: #989ed6;
--h3-color: #8987c9;
--h4-color: #9482c5;
--h5-color: #9482c5;
--h6-color: #9482c5;
}

body.encore-theme-dark-flexoki.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content {
--en-opacity: 1;
background-color: rgb(var(--grey-900-rgb));
}

body.encore-theme-dark-flexoki.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content .canvas-wrapper .canvas-background {
background-color: rgb(var(--grey-900-rgb));
}

body.encore-theme-dark-flexoki.theme-dark .mk-note-header:after {
--gradient-color: var(--color-base-10);
}

body.encore-theme-dark-flexoki.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
--en-opacity: 0.66;
background-color: rgb(var(--grey-900-rgb));
backdrop-filter: var(--en-acrylic);
}

body.encore-theme-dark-glass-royale.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 11, 11, 12;
--grey-850-rgb: 8, 8, 8;
--grey-875-rgb: 6, 6, 6;
--grey-900-rgb: 0, 0, 0;
--accent-h: 203;
--accent-s: 66%;
--accent-l: 54%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
}

body.encore-theme-dark-glass-royale.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: var(--color-green);
--italic-color: var(--color-red);
--h1-color: #5af273;
--h2-color: #65e4de;
--h3-color: #e755db;
--h4-color: #e9ca63;
--h5-color: #9dee51;
--h6-color: #8badec;
}

body.encore-theme-dark-glass-royale.theme-dark .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, body.encore-theme-dark-glass-royale.theme-dark .mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
background-color: rgba(255, 255, 255, 0.062745098);
backdrop-filter: blur(20px) saturate(1.8);
}

body.encore-theme-dark-glass-royale.theme-dark .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active, body.encore-theme-dark-glass-royale.theme-dark .mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active {
background-color: rgba(255, 255, 255, 0.1882352941);
}

body.encore-theme-dark-glass-royale.theme-dark .mod-root .workspace-tab-header.is-active .workspace-tab-header-inner {
background-color: rgba(255, 255, 255, 0.1882352941);
backdrop-filter: blur(50px) saturate(1.5);
}

body.encore-theme-dark-glass-royale.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content {
--en-opacity: 0.75;
background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2509803922)), linear-gradient(rgba(255, 255, 255, 0.031372549), rgba(255, 255, 255, 0.0078431373));
backdrop-filter: blur(32px) saturate(2);
}

body.encore-theme-dark-glass-royale.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content .canvas-wrapper .canvas-background {
background-color: transparent;
--canvas-dot-pattern: #ffffff15;
}

body.encore-theme-dark-glass-royale.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
background-color: rgba(0, 0, 0, 0);
backdrop-filter: var(--en-acrylic);
}`,
    },
    "encore-theme-dark-cobalt": {
      dark: `body.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 235, 240, 246;
--grey-200-rgb: 186, 192, 201;
--grey-300-rgb: 163, 186, 178;
--grey-350-rgb: 117, 122, 132;
--grey-400-rgb: 108, 114, 125;
--grey-500-rgb: 70, 76, 89;
--grey-600-rgb: 48, 55, 66;
--grey-700-rgb: 34, 43, 54;
--grey-800-rgb: 23, 31, 43;
--grey-850-rgb: 14, 18, 27;
--grey-875-rgb: 9, 13, 21;
--grey-900-rgb: 11, 16, 28;
--accent-h: 93;
--accent-s: 93%;
--accent-l: 76%;
}

body.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #b3bcf0;
--h2-color: #989ed6;
--h3-color: #8987c9;
--h4-color: #9482c5;
--h5-color: #9482c5;
--h6-color: #9482c5;
}`,
    },
    "encore-theme-dark-mercury": {
      dark: `body.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 244, 244, 247;
--grey-200-rgb: 199, 199, 204;
--grey-300-rgb: 174, 175, 183;
--grey-350-rgb: 129, 130, 144;
--grey-400-rgb: 116, 116, 127;
--grey-500-rgb: 73, 73, 80;
--grey-600-rgb: 42, 42, 46;
--grey-700-rgb: 33, 33, 36;
--grey-800-rgb: 29, 29, 32;
--grey-850-rgb: 23, 23, 26;
--grey-875-rgb: 18, 18, 21;
--grey-900-rgb: 12, 12, 15;
--accent-h: 21;
--accent-s: 92%;
--accent-l: 69%;
}

body.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #61aafd;
--h2-color: #5ce4ab;
--h3-color: #50f3d8;
--h4-color: #9adfff;
--h5-color: #9482c5;
--h6-color: #9482c5;
}`,
    },
    "encore-theme-dark-iron": {
      dark: `body.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 245, 240, 240;
--grey-200-rgb: 231, 223, 219;
--grey-300-rgb: 212, 204, 198;
--grey-350-rgb: 147, 137, 136;
--grey-400-rgb: 115, 105, 105;
--grey-500-rgb: 97, 89, 87;
--grey-600-rgb: 87, 79, 76;
--grey-700-rgb: 57, 51, 50;
--grey-800-rgb: 41, 36, 36;
--grey-850-rgb: 36, 31, 31;
--grey-875-rgb: 33, 29, 28;
--grey-900-rgb: 28, 25, 23;
--accent-h: 165;
--accent-s: 74%;
--accent-l: 52%;
--color-red: #df2a51;
--color-green: #2adfb2;
--color-orange: #ff9b7c;
--color-yellow: #abe667;
--color-cyan: #2abbdf;
--color-blue: #5c87ff;
}

body.encore-colors-colorful {
--highlight-hue: 30;
--italic-color: #82c0e9;
--bold-color: #d86679;
--h1-color: #ffc444;
--h2-color: #faa250;
--h3-color: #f88765;
--h4-color: #f88773;
--h5-color: #f88773;
--h6-color: #f88773;
}`,
    },
    "encore-theme-dark-carbon": {
      dark: `body.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 11, 11, 12;
--grey-850-rgb: 8, 8, 8;
--grey-875-rgb: 6, 6, 6;
--grey-900-rgb: 3, 3, 3;
--accent-h: 203;
--accent-s: 66%;
--accent-l: 54%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
}

body.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: var(--color-green);
--italic-color: var(--color-red);
--h1-color: #5af273;
--h2-color: #65e4de;
--h3-color: #e755db;
--h4-color: #e9ca63;
--h5-color: #9dee51;
--h6-color: #8badec;
}`,
    },
    "encore-theme-dark-blackout": {
      dark: `body.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 0, 0, 0;
--grey-850-rgb: 0, 0, 0;
--grey-875-rgb: 0, 0, 0;
--grey-900-rgb: 0, 0, 0;
--accent-h: 203;
--accent-s: 66%;
--accent-l: 54%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
}

body.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: #a283ec;
--italic-color: #98f8eb;
--h1-color: #975af2;
--h2-color: #d965e4;
--h3-color: #e05b9e;
--h4-color: #e96363;
--h5-color: #ee7e51;
--h6-color: #ecc68b;
}`,
    },
    "encore-theme-dark-obsidian": {
      dark: `body.theme-dark {
--grey-900-rgb: 30, 30, 30;
--grey-800-rgb: 38, 38, 38;
--grey-700-rgb: 54, 54, 54;
--grey-600-rgb: 82, 82, 91;
--grey-500-rgb: 113, 113, 122;
--grey-400-rgb: 161, 161, 170;
--grey-300-rgb: 212, 212, 216;
--grey-200-rgb: 228, 228, 231;
--grey-100-rgb: 244, 244, 245;
--grey-50-rgb: 250, 250, 250;
--accent-h: 255;
--accent-s: 92%;
--accent-l: 76%;
--inline-title-color: var(--text-color);
--bold-color: var(--text-color);
--italic-color: var(--text-color);
--workspace-background-translucent: rgba(var(--grey-700-rgb), 0.33);
background-color: rgba(var(--grey-800-rgb), var(--en-opacity));
}

body.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content {
--en-opacity: 1;
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
}

body.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content .canvas-wrapper .canvas-background {
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
}

body.theme-dark .mk-note-header:after {
--gradient-color: var(--color-base-10);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
--en-opacity: 0.66;
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
backdrop-filter: var(--en-acrylic);
}`,
    },
    "encore-theme-dark-slate": {
      dark: `body.theme-dark {
--grey-50-rgb: 255, 255, 255;
--grey-100-rgb: 241, 243, 244;
--grey-200-rgb: 228, 228, 231;
--grey-300-rgb: 209, 213, 219;
--grey-350-rgb: 177, 179, 192;
--grey-400-rgb: 156, 163, 175;
--grey-500-rgb: 107, 114, 128;
--grey-600-rgb: 75, 85, 99;
--grey-700-rgb: 55, 65, 81;
--grey-800-rgb: 31, 41, 55;
--grey-850-rgb: 23, 29, 44;
--grey-875-rgb: 20, 26, 38;
--grey-900-rgb: 17, 24, 39;
--accent-h: 93;
--accent-s: 93%;
--accent-l: 76%;
}`,
    },
    "encore-theme-dark-atom": {
      dark: `body.theme-dark {
--grey-900-rgb: 32, 36, 43;
--grey-800-rgb: 39, 43, 52;
--grey-700-rgb: 61, 68, 83;
--grey-600-rgb: 79, 88, 107;
--grey-500-rgb: 79, 88, 107;
--grey-400-rgb: 171, 178, 191;
--grey-300-rgb: 171, 178, 191;
--grey-200-rgb: 171, 178, 191;
--grey-100-rgb: 206, 210, 218;
--grey-50-rgb: 206, 210, 218;
--accent-h: 207;
--accent-s: 82%;
--accent-l: 66%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
--color-red: #e06c75;
--color-green: #98c379;
--color-orange: #d19a66;
--color-yellow: #e5c07b;
--color-cyan: #56b6c2;
--color-blue: #61afef;
}

body.encore-colors-colorful {
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
--highlight-hue: 37;
--h1-color: var(--color-orange);
--h2-color: var(--color-green);
--h3-color: var(--color-cyan);
--h4-color: var(--color-blue);
--h5-color: var(--color-red);
--h6-color: var(--color-yellow);
}`,
    },
    "encore-theme-dark-rgb": {
      dark: `body.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 11, 11, 12;
--grey-850-rgb: 8, 8, 8;
--grey-875-rgb: 6, 6, 6;
--grey-900-rgb: 3, 3, 3;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
--rainbow-gradient: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,222,0,1) 15%, rgba(167,255,0,1) 26%, rgba(0,255,136,1) 39%, rgba(15,245,254,1) 55%, rgba(111,0,255,1) 80%, rgba(253,45,45,1) 100%);
}

body.encore-colors-colorful {
--bold-color: var(--color-red);
--italic-color: var(--color-green);
}

body.theme-dark .mod-root .workspace-tab-container {
border-radius: var(--tab-radius);
--shadow-properties: 0 0 50px -25px;
animation: rgb-shadow 12s linear infinite forwards;
}

body.theme-dark .modal {
--shadow-properties: 0 0 50px -15px;
animation: rgb-shadow 12s linear infinite forwards;
}

body.theme-dark .prompt::before {
content: "";
position: fixed;
top: 0;
left: 0;
right: 0;
height: 30px;
background-color: red;
background-image: var(--rainbow-gradient);
animation: pan-right 5s linear infinite forwards;
filter: blur(60px);
}

body.theme-dark .prompt::after {
content: "";
position: fixed;
top: 0;
left: 0;
right: 0;
height: 10px;
background-color: red;
background-image: var(--rainbow-gradient);
animation: pan-right 5s linear infinite forwards;
filter: blur(15px);
}

body.theme-dark .mod-root .workspace-tab-header.is-active .workspace-tab-header-inner {
--en-opacity: 0.2;
background-color: rgba(var(--grey-100-rgb), var(--en-opacity));
}`,
    },
    "encore-theme-dark-materialocean": {
      dark: `body.theme-dark {
--grey-50-rgb: 245, 248, 254;
--grey-100-rgb: 237, 241, 249;
--grey-200-rgb: 227, 231, 240;
--grey-300-rgb: 200, 207, 223;
--grey-350-rgb: 183, 191, 209;
--grey-400-rgb: 152, 165, 188;
--grey-500-rgb: 87, 98, 126;
--grey-600-rgb: 58, 65, 89;
--grey-700-rgb: 32, 36, 51;
--grey-800-rgb: 15, 17, 26;
--grey-850-rgb: 8, 9, 19;
--grey-875-rgb: 1, 3, 17;
--grey-900-rgb: 0, 1, 10;
--accent-h: 355;
--accent-s: 100%;
--accent-l: 63%;
--color-red: #bf616a;
--color-green: #a3be8c;
--color-orange: #b48ead;
--color-yellow: #ebcb8b;
--color-cyan: #88c0d0;
--color-blue: #81a1c1;
}

body.encore-colors-colorful {
--highlight-hue: 355;
--italic-color: #d7dfec;
--bold-color: #d9dee9;
--h1-color: var(--color-red);
--h2-color: var(--color-green);
--h3-color: var(--color-blue);
--h4-color: var(--color-cyan);
--h5-color: var(--color-yellow);
--h6-color: var(--color-orange);
}`,
    },
    "encore-theme-dark-flexoki": {
      dark: `body.theme-dark {
--grey-50-rgb: 242, 240, 229;
--grey-100-rgb: 206, 205, 195;
--grey-200-rgb: 168, 166, 159;
--grey-300-rgb: 135, 133, 128;
--grey-350-rgb: 114, 111, 106;
--grey-400-rgb: 85, 82, 78;
--grey-500-rgb: 64, 62, 60;
--grey-600-rgb: 52, 51, 49;
--grey-700-rgb: 40, 39, 38;
--grey-800-rgb: 28, 27, 26;
--grey-850-rgb: 23, 22, 22;
--grey-875-rgb: 20, 19, 19;
--grey-900-rgb: 16, 15, 15;
--accent-h: 175;
--accent-s: 49%;
--accent-l: 45%;
--workspace-background-translucent: rgba(var(--grey-700-rgb), 0.33);
background-color: rgb(var(--grey-875-rgb));
}

body.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #b3bcf0;
--h2-color: #989ed6;
--h3-color: #8987c9;
--h4-color: #9482c5;
--h5-color: #9482c5;
--h6-color: #9482c5;
}

body.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content {
--en-opacity: 1;
background-color: rgb(var(--grey-900-rgb));
}

body.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content .canvas-wrapper .canvas-background {
background-color: rgb(var(--grey-900-rgb));
}

body.theme-dark .mk-note-header:after {
--gradient-color: var(--color-base-10);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
--en-opacity: 0.66;
background-color: rgb(var(--grey-900-rgb));
backdrop-filter: var(--en-acrylic);
}`,
    },
    "encore-theme-dark-glass-royale": {
      dark: `body.theme-dark {
--grey-50-rgb: 225, 227, 233;
--grey-100-rgb: 222, 227, 241;
--grey-200-rgb: 173, 181, 200;
--grey-300-rgb: 162, 165, 186;
--grey-350-rgb: 126, 128, 148;
--grey-400-rgb: 97, 97, 115;
--grey-500-rgb: 40, 40, 48;
--grey-600-rgb: 26, 26, 32;
--grey-700-rgb: 20, 20, 25;
--grey-800-rgb: 11, 11, 12;
--grey-850-rgb: 8, 8, 8;
--grey-875-rgb: 6, 6, 6;
--grey-900-rgb: 0, 0, 0;
--accent-h: 203;
--accent-s: 66%;
--accent-l: 54%;
--workspace-background-translucent: rgba(var(--grey-900-rgb), 0.4);
}

body.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: var(--color-green);
--italic-color: var(--color-red);
--h1-color: #5af273;
--h2-color: #65e4de;
--h3-color: #e755db;
--h4-color: #e9ca63;
--h5-color: #9dee51;
--h6-color: #8badec;
}

body.theme-dark .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, body.theme-dark .mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
background-color: rgba(255, 255, 255, 0.062745098);
backdrop-filter: blur(20px) saturate(1.8);
}

body.theme-dark .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active, body.theme-dark .mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active {
background-color: rgba(255, 255, 255, 0.1882352941);
}

body.theme-dark .mod-root .workspace-tab-header.is-active .workspace-tab-header-inner {
background-color: rgba(255, 255, 255, 0.1882352941);
backdrop-filter: blur(50px) saturate(1.5);
}

body.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content {
--en-opacity: 0.75;
background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2509803922)), linear-gradient(rgba(255, 255, 255, 0.031372549), rgba(255, 255, 255, 0.0078431373));
backdrop-filter: blur(32px) saturate(2);
}

body.theme-dark .mod-root .workspace-tab-container .workspace-leaf-content .canvas-wrapper .canvas-background {
background-color: transparent;
--canvas-dot-pattern: #ffffff15;
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
background-color: rgba(0, 0, 0, 0);
backdrop-filter: var(--en-acrylic);
}`,
    },
    "encore-theme-light": {
      general: `body.encore-theme-light-sterling.encore-colors-colorful {
--highlight-hue: 30;
--italic-color: #82c0e9;
--bold-color: #d86679;
--h1-color: #ffc444;
--h2-color: #faa250;
--h3-color: #f88765;
--h4-color: #f88773;
--h5-color: #f88773;
--h6-color: #f88773;
}`,
      light: `body.encore-theme-light-atom.theme-light {
--grey-50-rgb: 32, 36, 43;
--grey-100-rgb: 39, 43, 52;
--grey-200-rgb: 61, 68, 83;
--grey-300-rgb: 79, 88, 107;
--grey-400-rgb: 79, 88, 107;
--grey-500-rgb: 171, 178, 191;
--grey-600-rgb: 171, 178, 191;
--grey-700-rgb: 171, 178, 191;
--grey-800-rgb: 206, 210, 218;
--grey-900-rgb: 206, 210, 218;
--accent-h: 207;
--accent-s: 82%;
--accent-l: 56%;
--workspace-background-translucent: rgba(var(--grey-700-rgb), 0.7);
--color-red: #b95059;
--color-green: #759c59;
--color-orange: #c78a51;
--color-yellow: #d3a95c;
--color-cyan: #42abb9;
--color-blue: #469de4;
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
--highlight-hue: 37;
--h1-color: var(--color-orange);
--h2-color: var(--color-green);
--h3-color: var(--color-cyan);
--h4-color: var(--color-blue);
--h5-color: var(--color-red);
--h6-color: var(--color-yellow);
}

body.encore-theme-light-sterling.theme-light {
--grey-50-rgb: 17, 24, 39;
--grey-100-rgb: 31, 41, 55;
--grey-200-rgb: 55, 65, 81;
--grey-300-rgb: 75, 85, 99;
--grey-350-rgb: 90, 90, 90;
--grey-400-rgb: 107, 114, 128;
--grey-500-rgb: 156, 163, 175;
--grey-600-rgb: 209, 213, 219;
--grey-700-rgb: 228, 228, 231;
--grey-800-rgb: 243, 244, 246;
--grey-850-rgb: 250, 250, 250;
--grey-875-rgb: 250, 250, 250;
--grey-900-rgb: 255, 255, 255;
--accent-h: 165;
--accent-s: 74%;
--accent-l: 52%;
--color-red: #df2a51;
--color-green: #2adfb2;
--color-orange: #ff9b7c;
--color-yellow: #abe667;
--color-cyan: #2abbdf;
--color-blue: #5c87ff;
}`,
    },
    "encore-theme-light-sterling": {
      general: `body.encore-colors-colorful {
--highlight-hue: 30;
--italic-color: #82c0e9;
--bold-color: #d86679;
--h1-color: #ffc444;
--h2-color: #faa250;
--h3-color: #f88765;
--h4-color: #f88773;
--h5-color: #f88773;
--h6-color: #f88773;
}`,
      light: `body.theme-light {
--grey-50-rgb: 17, 24, 39;
--grey-100-rgb: 31, 41, 55;
--grey-200-rgb: 55, 65, 81;
--grey-300-rgb: 75, 85, 99;
--grey-350-rgb: 90, 90, 90;
--grey-400-rgb: 107, 114, 128;
--grey-500-rgb: 156, 163, 175;
--grey-600-rgb: 209, 213, 219;
--grey-700-rgb: 228, 228, 231;
--grey-800-rgb: 243, 244, 246;
--grey-850-rgb: 250, 250, 250;
--grey-875-rgb: 250, 250, 250;
--grey-900-rgb: 255, 255, 255;
--accent-h: 165;
--accent-s: 74%;
--accent-l: 52%;
--color-red: #df2a51;
--color-green: #2adfb2;
--color-orange: #ff9b7c;
--color-yellow: #abe667;
--color-cyan: #2abbdf;
--color-blue: #5c87ff;
}`,
    },
    "encore-theme-light-atom": {
      light: `body.theme-light {
--grey-50-rgb: 32, 36, 43;
--grey-100-rgb: 39, 43, 52;
--grey-200-rgb: 61, 68, 83;
--grey-300-rgb: 79, 88, 107;
--grey-400-rgb: 79, 88, 107;
--grey-500-rgb: 171, 178, 191;
--grey-600-rgb: 171, 178, 191;
--grey-700-rgb: 171, 178, 191;
--grey-800-rgb: 206, 210, 218;
--grey-900-rgb: 206, 210, 218;
--accent-h: 207;
--accent-s: 82%;
--accent-l: 56%;
--workspace-background-translucent: rgba(var(--grey-700-rgb), 0.7);
--color-red: #b95059;
--color-green: #759c59;
--color-orange: #c78a51;
--color-yellow: #d3a95c;
--color-cyan: #42abb9;
--color-blue: #469de4;
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
--highlight-hue: 37;
--h1-color: var(--color-orange);
--h2-color: var(--color-green);
--h3-color: var(--color-cyan);
--h4-color: var(--color-blue);
--h5-color: var(--color-red);
--h6-color: var(--color-yellow);
}`,
    },
    "encore-colors-colorful": {
      general: `body.encore-theme-light-sterling.encore-colors-colorful {
--highlight-hue: 30;
--italic-color: #82c0e9;
--bold-color: #d86679;
--h1-color: #ffc444;
--h2-color: #faa250;
--h3-color: #f88765;
--h4-color: #f88773;
--h5-color: #f88773;
--h6-color: #f88773;
}`,
      dark: `body.encore-colors-colorful {
--highlight-hue: 30;
--h1-color: #975af2;
--h2-color: #d965e4;
--h3-color: #e05b9e;
--h4-color: #e96363;
--h5-color: #ee7e51;
--h6-color: #ecc68b;
}

body.encore-theme-dark-cobalt.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #b3bcf0;
--h2-color: #989ed6;
--h3-color: #8987c9;
--h4-color: #9482c5;
--h5-color: #9482c5;
--h6-color: #9482c5;
}

body.encore-theme-dark-mercury.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #61aafd;
--h2-color: #5ce4ab;
--h3-color: #50f3d8;
--h4-color: #9adfff;
--h5-color: #9482c5;
--h6-color: #9482c5;
}

body.encore-theme-dark-iron.encore-colors-colorful {
--highlight-hue: 30;
--italic-color: #82c0e9;
--bold-color: #d86679;
--h1-color: #ffc444;
--h2-color: #faa250;
--h3-color: #f88765;
--h4-color: #f88773;
--h5-color: #f88773;
--h6-color: #f88773;
}

body.encore-theme-dark-carbon.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: var(--color-green);
--italic-color: var(--color-red);
--h1-color: #5af273;
--h2-color: #65e4de;
--h3-color: #e755db;
--h4-color: #e9ca63;
--h5-color: #9dee51;
--h6-color: #8badec;
}

body.encore-theme-dark-blackout.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: #a283ec;
--italic-color: #98f8eb;
--h1-color: #975af2;
--h2-color: #d965e4;
--h3-color: #e05b9e;
--h4-color: #e96363;
--h5-color: #ee7e51;
--h6-color: #ecc68b;
}

body.encore-theme-dark-atom.encore-colors-colorful {
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
--highlight-hue: 37;
--h1-color: var(--color-orange);
--h2-color: var(--color-green);
--h3-color: var(--color-cyan);
--h4-color: var(--color-blue);
--h5-color: var(--color-red);
--h6-color: var(--color-yellow);
}

body.encore-theme-dark-rgb.encore-colors-colorful {
--bold-color: var(--color-red);
--italic-color: var(--color-green);
}

body.encore-theme-dark-materialocean.encore-colors-colorful {
--highlight-hue: 355;
--italic-color: #d7dfec;
--bold-color: #d9dee9;
--h1-color: var(--color-red);
--h2-color: var(--color-green);
--h3-color: var(--color-blue);
--h4-color: var(--color-cyan);
--h5-color: var(--color-yellow);
--h6-color: var(--color-orange);
}

body.encore-theme-dark-flexoki.encore-colors-colorful {
--highlight-hue: 50;
--italic-color: #d2e6d2;
--bold-color: #e0eec5;
--h1-color: #b3bcf0;
--h2-color: #989ed6;
--h3-color: #8987c9;
--h4-color: #9482c5;
--h5-color: #9482c5;
--h6-color: #9482c5;
}

body.encore-theme-dark-glass-royale.encore-colors-colorful {
--highlight-hue: 30;
--bold-color: var(--color-green);
--italic-color: var(--color-red);
--h1-color: #5af273;
--h2-color: #65e4de;
--h3-color: #e755db;
--h4-color: #e9ca63;
--h5-color: #9dee51;
--h6-color: #8badec;
}`,
    },
    "encore-colors-custom": {
      general: `body.encore-colors-custom {
--italic-color: var(--encore-custom-italic) !important;
--bold-color: var(--encore-custom-bold) !important;
--h1-color: var(--encore-custom-h1) !important;
--h2-color: var(--encore-custom-h2) !important;
--h3-color: var(--encore-custom-h3) !important;
--h4-color: var(--encore-custom-h4) !important;
--h5-color: var(--encore-custom-h5) !important;
--h6-color: var(--encore-custom-h6) !important;
}`,
    },
    "encore-translucency": {
      general: `body.encore-bg-image .app-container {
background-image: var(--encore-translucency-image);
background-size: cover;
}

body.encore-bg-image .app-container::before {
position: fixed;
inset: 0;
content: "";
background: transparent;
backdrop-filter: blur(calc(1px * pow(var(--encore-translucency-blur-amount, 10), 2)));
}

body.encore-bg-frosty {
background-image: linear-gradient(rgb(12, 136, 126), rgb(78, 4, 250));
}

body.encore-bg-frosty .app-container {
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1920 3240' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3C/defs%3E%3Cellipse style='filter: blur(200px); fill: rgb(38, 214, 255);' cx='465.54' cy='549.634' rx='559.232' ry='230.137'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(59, 55, 212);' cx='1461.894' cy='749.77' rx='559.232' ry='338.301'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(123, 130, 208);' cx='398.22' cy='1237.125' rx='559.232' ry='338.301'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(17, 197, 255);' cx='1546.62' cy='1737.081' rx='603.713' ry='357.778'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(185, 185, 185);' cx='981.906' cy='1520.478' rx='371.639' ry='230.137'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(35, 30, 204);' cx='549.068' cy='2325.941' rx='721.684' ry='405.989'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(148, 19, 172);' cx='1338.121' cy='2790.09' rx='721.684' ry='405.989'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(148, 19, 172);' cx='1297.975' cy='-434.34' rx='721.684' ry='405.989'%3E%3C/ellipse%3E%3C/svg%3E");
background-size: cover;
background-repeat: mirror;
animation: scroll-up infinite 120s linear;
}

body.encore-bg-chromatic {
background-image: repeating-linear-gradient(45deg, rgb(15, 245, 254), rgb(111, 0, 255), rgb(255, 0, 0), rgb(255, 222, 0), rgb(167, 255, 0), rgb(0, 255, 136), rgb(15, 245, 254), rgb(111, 0, 255), rgb(253, 0, 0), rgb(255, 222, 0), rgb(167, 255, 0), rgb(0, 255, 136), rgb(15, 245, 254), rgb(111, 0, 255));
background-size: 100% 800vh;
animation: scroll-up-down infinite 180s ease-in-out alternate-reverse;
}

body.encore-bg-chromatic::before {
position: fixed;
inset: 0;
content: "";
background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.9411764706));
}

body.encore-bg-prismatic {
background-image: repeating-linear-gradient(45deg, rgb(0, 4, 255), rgb(107, 15, 254), rgb(153, 0, 255), rgb(255, 0, 242), rgb(255, 0, 170), rgb(255, 0, 242), rgb(153, 0, 255), rgb(107, 15, 254), rgb(0, 4, 255), rgb(107, 15, 254), rgb(153, 0, 255), rgb(255, 0, 242));
background-size: 100% 400vh;
animation: scroll-up infinite 30s linear;
}

body.encore-bg-prismatic::before {
position: fixed;
inset: 0;
content: "";
background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.9411764706));
}

body.encore-bg-dawn {
background-image: radial-gradient(transparent, rgba(1, 2, 36, 0.4784313725)), linear-gradient(to bottom, rgba(222, 244, 255, 0.11), transparent), linear-gradient(to bottom left, #0036e6, #400dcc);
}

body.encore-bg-dawn::before {
position: fixed;
inset: 0;
content: "";
animation: fade-in 60s linear infinite alternate;
background-image: radial-gradient(transparent, rgba(1, 2, 36, 0.5764705882)), linear-gradient(to bottom, rgba(222, 244, 255, 0.1568627451), transparent), linear-gradient(to bottom left, #ee8d4d, rgba(0, 18, 182, 0.7058823529));
}

body.encore-bg-lava {
background-image: radial-gradient(transparent, #360700), linear-gradient(to top, #d86800, transparent), linear-gradient(to bottom left, #b43900, #1a0101);
}

body.encore-bg-lava::before {
position: fixed;
inset: 0;
content: "";
animation: fade-in 60s linear infinite alternate;
background-image: radial-gradient(transparent, #360700), linear-gradient(to top, #f5e498, transparent), linear-gradient(to bottom left, #ff0000, #ff0000);
}

body.encore-bg-emerald {
background-image: radial-gradient(transparent, #071400), linear-gradient(to top, #54f1d7, transparent), linear-gradient(to bottom left, #55df00, #1b4900);
}

body.encore-bg-sapphire {
background-image: radial-gradient(transparent, #000018), linear-gradient(to top, #5871ff, transparent), linear-gradient(to bottom left, #0400ff, #0084ff);
}

body.encore-translucency .horizontal-main-container {
background-color: rgba(var(--grey-900-rgb), calc(1 - var(--encore-translucency-strength)));
}`,
    },
    "encore-bg-image": {
      general: `body.encore-translucency.encore-bg-image .app-container {
background-image: var(--encore-translucency-image);
background-size: cover;
}

body.encore-translucency.encore-bg-image .app-container::before {
position: fixed;
inset: 0;
content: "";
background: transparent;
backdrop-filter: blur(calc(1px * pow(var(--encore-translucency-blur-amount, 10), 2)));
}`,
    },
    "encore-bg-emerald": {
      general: `body.encore-translucency.encore-bg-emerald {
background-image: radial-gradient(transparent, #071400), linear-gradient(to top, #54f1d7, transparent), linear-gradient(to bottom left, #55df00, #1b4900);
}`,
    },
    "encore-bg-sapphire": {
      general: `body.encore-translucency.encore-bg-sapphire {
background-image: radial-gradient(transparent, #000018), linear-gradient(to top, #5871ff, transparent), linear-gradient(to bottom left, #0400ff, #0084ff);
}`,
    },
    "encore-bg-frosty": {
      general: `body.encore-translucency.encore-bg-frosty {
background-image: linear-gradient(rgb(12, 136, 126), rgb(78, 4, 250));
}

body.encore-translucency.encore-bg-frosty .app-container {
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1920 3240' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3C/defs%3E%3Cellipse style='filter: blur(200px); fill: rgb(38, 214, 255);' cx='465.54' cy='549.634' rx='559.232' ry='230.137'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(59, 55, 212);' cx='1461.894' cy='749.77' rx='559.232' ry='338.301'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(123, 130, 208);' cx='398.22' cy='1237.125' rx='559.232' ry='338.301'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(17, 197, 255);' cx='1546.62' cy='1737.081' rx='603.713' ry='357.778'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(185, 185, 185);' cx='981.906' cy='1520.478' rx='371.639' ry='230.137'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(35, 30, 204);' cx='549.068' cy='2325.941' rx='721.684' ry='405.989'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(148, 19, 172);' cx='1338.121' cy='2790.09' rx='721.684' ry='405.989'%3E%3C/ellipse%3E%3Cellipse style='filter: blur(200px); fill: rgb(148, 19, 172);' cx='1297.975' cy='-434.34' rx='721.684' ry='405.989'%3E%3C/ellipse%3E%3C/svg%3E");
background-size: cover;
background-repeat: mirror;
animation: scroll-up infinite 120s linear;
}`,
    },
    "encore-bg-lava": {
      general: `body.encore-translucency.encore-bg-lava {
background-image: radial-gradient(transparent, #360700), linear-gradient(to top, #d86800, transparent), linear-gradient(to bottom left, #b43900, #1a0101);
}

body.encore-translucency.encore-bg-lava::before {
position: fixed;
inset: 0;
content: "";
animation: fade-in 60s linear infinite alternate;
background-image: radial-gradient(transparent, #360700), linear-gradient(to top, #f5e498, transparent), linear-gradient(to bottom left, #ff0000, #ff0000);
}`,
    },
    "encore-bg-dawn": {
      general: `body.encore-translucency.encore-bg-dawn {
background-image: radial-gradient(transparent, rgba(1, 2, 36, 0.4784313725)), linear-gradient(to bottom, rgba(222, 244, 255, 0.11), transparent), linear-gradient(to bottom left, #0036e6, #400dcc);
}

body.encore-translucency.encore-bg-dawn::before {
position: fixed;
inset: 0;
content: "";
animation: fade-in 60s linear infinite alternate;
background-image: radial-gradient(transparent, rgba(1, 2, 36, 0.5764705882)), linear-gradient(to bottom, rgba(222, 244, 255, 0.1568627451), transparent), linear-gradient(to bottom left, #ee8d4d, rgba(0, 18, 182, 0.7058823529));
}`,
    },
    "encore-bg-chromatic": {
      general: `body.encore-translucency.encore-bg-chromatic {
background-image: repeating-linear-gradient(45deg, rgb(15, 245, 254), rgb(111, 0, 255), rgb(255, 0, 0), rgb(255, 222, 0), rgb(167, 255, 0), rgb(0, 255, 136), rgb(15, 245, 254), rgb(111, 0, 255), rgb(253, 0, 0), rgb(255, 222, 0), rgb(167, 255, 0), rgb(0, 255, 136), rgb(15, 245, 254), rgb(111, 0, 255));
background-size: 100% 800vh;
animation: scroll-up-down infinite 180s ease-in-out alternate-reverse;
}

body.encore-translucency.encore-bg-chromatic::before {
position: fixed;
inset: 0;
content: "";
background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.9411764706));
}`,
    },
    "encore-bg-prismatic": {
      general: `body.encore-translucency.encore-bg-prismatic {
background-image: repeating-linear-gradient(45deg, rgb(0, 4, 255), rgb(107, 15, 254), rgb(153, 0, 255), rgb(255, 0, 242), rgb(255, 0, 170), rgb(255, 0, 242), rgb(153, 0, 255), rgb(107, 15, 254), rgb(0, 4, 255), rgb(107, 15, 254), rgb(153, 0, 255), rgb(255, 0, 242));
background-size: 100% 400vh;
animation: scroll-up infinite 30s linear;
}

body.encore-translucency.encore-bg-prismatic::before {
position: fixed;
inset: 0;
content: "";
background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.9411764706));
}`,
    },
    "encore-fancy-headers": {
      general: `body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content {
position: relative;
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
position: absolute;
left: 0;
right: 0;
--en-opacity: var(--en-acrylic-opacity);
background-color: rgba(var(--grey-800-rgb), var(--en-opacity));
backdrop-filter: var(--en-acrylic);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-content > div > div > .cm-scroller {
padding-top: calc(var(--header-height) + 32px);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-content > iframe {
padding-top: var(--header-height);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content .markdown-reading-view > .markdown-preview-view {
padding-top: var(--header-height);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content .graph-controls {
margin-top: var(--header-height);
background-color: rgba(var(--grey-700-rgb), var(--en-opacity));
border: none;
box-shadow: none;
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content .canvas-wrapper .canvas-controls {
margin-top: var(--header-height);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content .canvas-wrapper .markdown-preview-view {
padding-top: 0;
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content[data-type=image] > .view-content {
padding-top: var(--header-height);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content[data-type=style-settings] > .view-content {
padding-top: var(--header-height);
}

body.encore-fancy-headers .workspace-tab-container .workspace-leaf-content[data-type=kanban] > .view-header {
position: relative !important;
}

body.encore-fancy-headers .workspace-leaf-content[data-type=excalidraw] .layer-ui__wrapper, body.encore-fancy-headers .workspace-leaf-content[data-type=excalidraw] .App-top-bar, body.encore-fancy-headers .workspace-leaf-content[data-type=excalidraw] .layer-ui__sidebar {
margin-top: var(--header-height);
}

body.encore-fancy-headers .excalidraw .layer-ui__wrapper .layer-ui__wrapper__footer-left, body.encore-fancy-headers .excalidraw .layer-ui__wrapper .layer-ui__wrapper__footer-right {
margin-bottom: var(--header-height);
}

.mod-root.encore-fancy-headers .workspace-tab-container .workspace-leaf-content .projects-container {
padding-top: var(--header-height);
}

.mod-root.encore-fancy-headers .workspace-tab-container .workspace-leaf-content .projects-container .container {
background-color: transparent;
border-bottom: 1px solid rgba(var(--grey-700-rgb), var(--en-opacity));
}`,
      dark: `body.encore-theme-dark-obsidian.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
--en-opacity: 0.66;
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
backdrop-filter: var(--en-acrylic);
}

body.encore-theme-dark-flexoki.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
--en-opacity: 0.66;
background-color: rgb(var(--grey-900-rgb));
backdrop-filter: var(--en-acrylic);
}

body.encore-theme-dark-glass-royale.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
background-color: rgba(0, 0, 0, 0);
backdrop-filter: var(--en-acrylic);
}`,
      light: `body.theme-light .mod-root.encore-fancy-headers .workspace-tab-container .workspace-leaf-content > .view-header {
background-color: rgba(var(--grey-900-rgb), var(--en-opacity));
}`,
    },
    "encore-mobile-oled-mode": {
      dark: `.is-mobile.encore-mobile-oled-mode .mod-root .workspace-tab-container .workspace-leaf-content {
background-color: black;
}`,
    },
    "encore-mobile-translucency": {
      general: `.is-mobile {
--sidebar-filter: blur(16px);
}

.is-mobile.encore-blur-less {
--sidebar-filter: blur(8px);
}

.is-mobile .workspace-drawer-inner {
background-color: rgba(var(--grey-900-rgb), 0.6);
backdrop-filter: var(--sidebar-filter);
}

.is-mobile .mobile-navbar {
border-top: 1px solid var(--color-base-25);
background-color: rgba(var(--grey-900-rgb), 0.66);
backdrop-filter: var(--en-acrylic);
}`,
    },
    "encore-coloured-tooltip": {
      general: `body.encore-coloured-tooltip > .tooltip {
--tooltip-edge-colour: var(--color-accent);
}`,
    },
    "encore-highlight-border": {
      general: `body.encore-highlight-border .markdown-rendered mark, body.encore-highlight-border .cm-s-obsidian span.cm-formatting-highlight, body.encore-highlight-border .cm-s-obsidian span.cm-highlight, body.encore-highlight-border .search-result-file-matched-text {
outline: 1px solid hsla(var(--highlight-hue), 90%, 50%, 0.85);
box-shadow: 0 0 10px hsla(var(--highlight-hue), 90%, 50%, 0.75);
padding: 0 0.15em;
border-radius: 0.2em;
border: none;
}`,
    },
    "encore-bright-accent": {
      general: `body.encore-bright-accent {
--text-on-accent: var(--color-base-00);
}`,
    },
    "encore-blur-less": {
      general: `.encore-mobile-translucency.is-mobile.encore-blur-less {
--sidebar-filter: blur(8px);
}

body.encore-blur-less {
--en-acrylic: blur(4px);
--en-acrylic-opacity: 0.9;
--en-modal-backdrop: blur(5px);
}`,
    },
    "encore-blur-off": {
      general: `body.encore-blur-off {
--en-acrylic: brightness(0.5);
--en-acrylic-opacity: 0.9;
--en-modal-backdrop: brightness(0.5);
}`,
    },
    "encore-disable-logo-on-hr": {
      general: `body.encore-disable-logo-on-hr .markdown-rendered hr, body.encore-disable-logo-on-hr .cm-line.hr hr {
height: 1px;
background-image: linear-gradient(to right, transparent, var(--hr-color) 30%, var(--hr-color) 70%, transparent);
border: none;
}`,
    },
  },
};
