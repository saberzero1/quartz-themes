import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "neuborder", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 232 !important;
  --accent-l: 64% !important;
  --accent-s: 80% !important;
  --anim-duration-fast: 150ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-slow: 600ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-speed: 1 !important;
  --background: #f0f0f0 !important;
  --background-mod-left-split: #F6F6F6 !important;
  --background-mod-right-split: #F6F6F6 !important;
  --background-mod-root-split: rgb(255, 255, 255) !important;
  --background-modifier-active-hover: rgba(90, 109, 237, 0.15) !important;
  --background-modifier-border: #EAEAEA !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85) !important;
  --background-modifier-hover: rgba(158, 159, 169, 0.15) !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-secondary: #F6F6F6 !important;
  --background-tertiary: rgb(237, 244, 253) !important;
  --background-underlying: rgb(237, 244, 253) !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-shadow: 0 0 0 1px #EAEAEA !important;
  --bases-embed-border-color: #EAEAEA !important;
  --bases-group-heading-property-color: #232323 !important;
  --bases-table-border-color: #EAEAEA !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-selected: rgba(90, 109, 237, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(104, 121, 238) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-background-hover: rgba(158, 159, 169, 0.15) !important;
  --bases-table-header-color: #232323 !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --bases-table-summary-background-hover: rgba(158, 159, 169, 0.15) !important;
  --blockquote-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-border-color: rgb(104, 121, 238) !important;
  --blockquote-border-thickness: 3px !important;
  --blockquote-padding: 8px !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --button-color-1: #f0f0f0 !important;
  --button-radius-circle: 36px !important;
  --button-radius-large: 12px !important;
  --button-radius-medium: 6px !important;
  --button-radius-medium-large: 8px !important;
  --button-radius-small: 3px !important;
  --callout-title-weight: 600;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: rgb(158, 159, 169) !important;
  --card-border-radius: 8px !important;
  --card-shadow: 0px 0px 8px rgba(195, 197, 213, 0.4), 0px 0px 6px rgba(195, 197, 213, 0.2) !important;
  --card-shadow-border-radius: 7px !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: rgb(158, 159, 169) !important;
  --checkbox-border-color-hover: #232323 !important;
  --checkbox-color: rgb(104, 121, 238) !important;
  --checkbox-color-hover: rgb(104, 121, 238) !important;
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checklist-done-color: #232323 !important;
  --code-border-color: #EAEAEA !important;
  --code-bracket-background: rgba(158, 159, 169, 0.15) !important;
  --code-comment: rgb(158, 159, 169) !important;
  --code-normal: #000000 !important;
  --code-punctuation: #232323 !important;
  --collapse-icon-color: rgb(158, 159, 169) !important;
  --collapse-icon-color-collapsed: rgb(90, 109, 237) !important;
  --color: 0, 0% !important;
  --color-accent: rgb(90, 109, 237) !important;
  --color-accent-1: rgb(104, 121, 238) !important;
  --color-accent-2: rgb(113, 130, 239) !important;
  --color-accent-3: rgba(134, 142, 193, 0) !important;
  --color-accent-hsl: 232,
    80%,
    64% !important;
  --color-activated-tab-header: #000000 !important;
  --color-base-15: #f7f7f7 !important;
  --color-base-20: #f0f0f0 !important;
  --color-base-70: #5a5a5a !important;
  --color-base-80: #464646 !important;
  --color-base-90: #333333 !important;
  --color-primary: rgb(230, 230, 230) !important;
  --color-primary-dark: rgb(217, 217, 217) !important;
  --color-primary-darkest: rgb(191, 191, 191) !important;
  --color-primary-light: rgb(237, 237, 237) !important;
  --color-primary-lighter: rgb(247, 247, 247) !important;
  --color-primary-lightest: rgb(255, 255, 255) !important;
  --color-text-dark: rgb(153, 153, 153) !important;
  --color-text-darkest: rgb(128, 128, 128) !important;
  --dark: #000000 !important;
  --darkgray: #000000 !important;
  --divider-color: #EAEAEA !important;
  --divider-color-hover: rgb(104, 121, 238) !important;
  --dropdown-background: #fcfcfc !important;
  --dropdown-background-hover: #f7f7f7 !important;
  --embed-block-shadow-hover: 0 0 0 1px #EAEAEA, inset 0 0 0 1px #EAEAEA !important;
  --embed-border-start: 2px solid rgb(104, 121, 238) !important;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e") !important;
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --flair-background: #fcfcfc !important;
  --flair-color: #000000 !important;
  --footnote-divider-color: #EAEAEA !important;
  --footnote-id-color: #232323 !important;
  --footnote-id-color-no-occurrences: rgb(158, 159, 169) !important;
  --footnote-input-background-active: rgba(158, 159, 169, 0.15) !important;
  --graph-node: #232323 !important;
  --graph-node-focused: rgb(90, 109, 237) !important;
  --graph-node-unresolved: rgb(158, 159, 169) !important;
  --graph-text: #000000 !important;
  --gray: #232323 !important;
  --heading-formatting: rgb(158, 159, 169) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(158, 159, 169, 0.15) !important;
  --hr-color: #EAEAEA !important;
  --icon-color: #232323 !important;
  --icon-color-active: rgb(90, 109, 237) !important;
  --icon-color-focused: #000000 !important;
  --icon-color-hover: #232323 !important;
  --image-radius: 6px !important;
  --input-date-separator: rgb(158, 159, 169) !important;
  --input-placeholder-color: rgb(158, 159, 169) !important;
  --input-shadow: 4px 4px 8px rgba(0, 0, 0, 0.18),             
    -4px -4px 8px rgba(255, 255, 255, 0.5),      
    inset 3px 3px 3px rgba(0, 0, 0, 0),          
    inset -3px -3px 3px rgba(255, 255, 255, 0) !important;
  --input-shadow-hover: 4px 4px 8px rgba(0, 0, 0, 0),                
    -4px -4px 8px rgba(255, 255, 255, 0),        
    inset 3px 3px 3px rgba(0, 0, 0, 0.2),        
    inset -3px -3px 3px rgba(255, 255, 255, 0.7) !important;
  --interactive-accent: rgb(104, 121, 238) !important;
  --interactive-accent-hover: rgb(104, 121, 238) !important;
  --interactive-accent-hsl: 232,
    80%,
    64% !important;
  --interactive-accent-rgb: 32, 171, 233 !important;
  --interactive-hover: #f7f7f7 !important;
  --interactive-normal: #fcfcfc !important;
  --l: 100% !important;
  --light: rgb(255, 255, 255) !important;
  --lightgray: #F6F6F6 !important;
  --link-color: rgb(90, 109, 237) !important;
  --link-color-hover: rgb(113, 130, 239) !important;
  --link-external-color: rgb(90, 109, 237) !important;
  --link-external-color-hover: rgb(113, 130, 239) !important;
  --link-unresolved-color: rgb(90, 109, 237) !important;
  --link-unresolved-decoration-color: rgba(90, 109, 237, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(158, 159, 169) !important;
  --list-marker-color-collapsed: rgb(90, 109, 237) !important;
  --list-marker-color-hover: #232323 !important;
  --list-radius-large: 12px !important;
  --list-radius-medium: 6px !important;
  --list-radius-small: 3px !important;
  --menu-background: #F6F6F6 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
    0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-border-color: #EAEAEA !important;
  --metadata-divider-color: #EAEAEA !important;
  --metadata-input-background-active: rgba(158, 159, 169, 0.15) !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-background-active: rgba(158, 159, 169, 0.15) !important;
  --metadata-label-text-color: #232323 !important;
  --metadata-label-text-color-hover: #232323 !important;
  --metadata-property-background-active: rgba(158, 159, 169, 0.15) !important;
  --mix-blend-mode-on-border: normal !important;
  --modal-background: rgb(255, 255, 255) !important;
  --modal-border-color: #EAEAEA !important;
  --nav-collapse-icon-color: rgb(158, 159, 169) !important;
  --nav-collapse-icon-color-collapsed: rgb(158, 159, 169) !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: rgb(158, 159, 169) !important;
  --nav-heading-color-collapsed-hover: #232323 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-item-background-active: rgba(158, 159, 169, 0.15) !important;
  --nav-item-background-hover: rgba(158, 159, 169, 0.15) !important;
  --nav-item-background-selected: rgba(90, 109, 237, 0.15) !important;
  --nav-item-color: #232323 !important;
  --nav-item-color-active: #000000 !important;
  --nav-item-color-highlighted: rgb(90, 109, 237) !important;
  --nav-item-color-hover: #000000 !important;
  --nav-item-color-selected: #000000 !important;
  --nav-tag-color: rgb(158, 159, 169) !important;
  --nav-tag-color-active: #232323 !important;
  --nav-tag-color-hover: #232323 !important;
  --neumorphic-transition: all 0.15s !important;
  --on-border: rgba(134, 142, 193, 0) !important;
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-border-color: #EAEAEA !important;
  --pill-color: #232323 !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: rgb(158, 159, 169) !important;
  --pill-color-remove-hover: rgb(90, 109, 237) !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: #F6F6F6 !important;
  --ribbon-background-collapsed: rgb(255, 255, 255) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.15) !important;
  --search-clear-button-color: #232323 !important;
  --search-icon-color: #232323 !important;
  --search-result-background: rgb(255, 255, 255) !important;
  --secondary: rgb(90, 109, 237) !important;
  --setting-group-heading-color: #000000 !important;
  --setting-items-border-color: #EAEAEA !important;
  --shadow: 4px 4px 8px rgba(0, 0, 0, 0.18),             
    -4px -4px 8px rgba(255, 255, 255, 0.5),      
    inset 3px 3px 3px rgba(0, 0, 0, 0),          
    inset -3px -3px 3px rgba(255, 255, 255, 0) !important;
  --shadow-active: 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0),
    inset 3px 3px 3px rgba(0, 0, 0, 0.5),
    inset -3px -3px 3px rgba(255, 255, 255, 0.2) !important;
  --shadow-hover: 4px 4px 8px rgba(0, 0, 0, 0),                
    -4px -4px 8px rgba(255, 255, 255, 0),        
    inset 3px 3px 3px rgba(0, 0, 0, 0.2),        
    inset -3px -3px 3px rgba(255, 255, 255, 0.7) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
    0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
    0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --shadow-scrollbar: inset 4px 4px 8px rgba(0, 0, 0, 0.15),
    inset -4px -4px 8px rgba(255, 255, 255, 0.7) !important;
  --shadow-selected: inset 3px 3px 3px rgba(0, 0, 0, 0.3) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-track-background: #EAEAEA !important;
  --status-bar-background: #F6F6F6 !important;
  --status-bar-border-color: #EAEAEA !important;
  --status-bar-text-color: #232323 !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --tab-background-active: rgb(255, 255, 255) !important;
  --tab-container-background: #F6F6F6 !important;
  --tab-outline-color: #EAEAEA !important;
  --tab-switcher-background: #F6F6F6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F6F6F6, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(90, 109, 237) !important;
  --tab-text-color: rgb(158, 159, 169) !important;
  --tab-text-color-active: #232323 !important;
  --tab-text-color-focused: #232323 !important;
  --tab-text-color-focused-active: #232323 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: rgb(90, 109, 237) !important;
  --table-add-button-border-color: #EAEAEA !important;
  --table-border-color: #EAEAEA !important;
  --table-drag-handle-background-active: rgb(104, 121, 238) !important;
  --table-drag-handle-color: rgb(158, 159, 169) !important;
  --table-header-border-color: #EAEAEA !important;
  --table-header-color: #000000 !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(90, 109, 237, 0.1) !important;
  --table-selection-border-color: rgb(104, 121, 238) !important;
  --tag-background: rgba(90, 109, 237, 0.1) !important;
  --tag-background-hover: rgba(90, 109, 237, 0.2) !important;
  --tag-border-color: rgba(90, 109, 237, 0.15) !important;
  --tag-border-color-hover: rgba(90, 109, 237, 0.15) !important;
  --tag-color: rgb(90, 109, 237) !important;
  --tag-color-hover: rgb(90, 109, 237) !important;
  --tertiary: rgb(113, 130, 239) !important;
  --text-accent: rgb(90, 109, 237) !important;
  --text-accent-hover: rgb(113, 130, 239) !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: rgb(158, 159, 169) !important;
  --text-matched: #7dff8f !important;
  --text-muted: #232323 !important;
  --text-normal: #000000 !important;
  --text-selection: rgba(90, 109, 237, 0.2) !important;
  --text-title-h1: #000000 !important;
  --text-title-h2: #000000 !important;
  --text-title-h3: #000000 !important;
  --text-title-h4: #000000 !important;
  --text-title-h5: #000000 !important;
  --text-title-h6: #000000 !important;
  --textHighlight: rgba(158, 159, 169, 0.15) !important;
  --titlebar-background: #F6F6F6 !important;
  --titlebar-border-color: #EAEAEA !important;
  --titlebar-text-color: #232323 !important;
  --titlebar-text-color-focused: #000000 !important;
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 
    0px 1px 2px rgba(0, 0, 0, 0.3), 
    inset 0px -1px 1px rgba(255, 255, 255, 0.4), 
    inset 0px -4px 4px rgba(90, 109, 237, 0.3) !important;
  --toggle-thumb-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 
    0px 1px 2px rgba(0, 0, 0, 0.3), 
    inset 0px -1px 1px rgba(255, 255, 255, 0.4), 
    inset 0px -4px 4px rgba(0, 0, 0, 0.1) !important;
  --vault-profile-color: #000000 !important;
  --vault-profile-color-hover: #000000 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(234, 234, 234);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}

html body div#quartz-root {
  color: rgb(0, 0, 0);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > em, em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > i, i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .text-highlight {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body p {
  color: rgb(35, 35, 35);
  outline: rgb(35, 35, 35) none 0px;
  text-decoration: rgb(35, 35, 35);
  text-decoration-color: rgb(35, 35, 35);
}`,
    links: `html body a.external, footer a {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 109, 237);
  outline: rgb(90, 109, 237) none 0px;
  text-decoration: rgb(90, 109, 237);
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 109, 237);
  outline: rgb(90, 109, 237) none 0px;
  text-decoration: rgb(90, 109, 237);
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}

html body a.internal.broken {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 109, 237);
  outline: rgb(90, 109, 237) none 0px;
  text-decoration: rgb(90, 109, 237);
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}`,
    lists: `html body dd {
  color: rgb(0, 0, 0);
}

html body dt {
  color: rgb(0, 0, 0);
}

html body ol > li {
  color: rgb(0, 0, 0);
}

html body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body ul > li {
  color: rgb(0, 0, 0);
}

html body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(158, 159, 169);
  text-decoration: rgb(158, 159, 169);
}

html body blockquote {
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body table {
  color: rgb(0, 0, 0);
}

html body td {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}

html body th {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}`,
    code: `html body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html body pre > code, pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
}

html body pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body figcaption {
  color: rgb(0, 0, 0);
}

html body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body img {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 0, 0);
  border-radius: 6px;
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
}

html body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(101, 119, 238);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(101, 119, 238);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(158, 159, 169);
  border-left-color: rgb(158, 159, 169);
  border-right-color: rgb(158, 159, 169);
  border-top-color: rgb(158, 159, 169);
  transition: 0.15s;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(158, 159, 169);
  text-decoration: line-through 1px rgb(158, 159, 169);
  text-decoration-color: rgb(158, 159, 169);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space {
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(158, 159, 169, 0.15);
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > input {
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(158, 159, 169, 0.15);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(0, 0, 0);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(158, 159, 169, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(0, 0, 0);
}

html body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(90, 109, 237, 0.1);
  border-bottom-color: rgba(90, 109, 237, 0.15);
  border-left-color: rgba(90, 109, 237, 0.15);
  border-right-color: rgba(90, 109, 237, 0.15);
  border-top-color: rgba(90, 109, 237, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(90, 109, 237);
}

html body h1 {
  color: rgb(0, 0, 0);
}

html body h2 {
  color: rgb(0, 0, 0);
}

html body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

html body h3 {
  color: rgb(0, 0, 0);
}

html body h4 {
  color: rgb(0, 0, 0);
}

html body h5 {
  color: rgb(0, 0, 0);
}

html body h6 {
  color: rgb(0, 0, 0);
}

html body hr {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}`,
    footer: `html body footer {
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(134, 142, 193);
}

html body footer ul li a {
  color: rgb(134, 142, 193);
  text-decoration: rgb(134, 142, 193);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(35, 35, 35);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body li.section-li > .section .meta {
  color: rgb(35, 35, 35);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

html body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html body .darkmode {
  background-color: rgb(235, 242, 252);
  border-bottom-color: rgb(134, 142, 193);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(134, 142, 193);
  border-right-color: rgb(134, 142, 193);
  border-top-color: rgb(134, 142, 193);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(134, 142, 193);
}

html body .darkmode svg {
  color: rgb(134, 142, 193);
  stroke: rgb(134, 142, 193);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

html body .breadcrumb-element p {
  color: rgb(158, 159, 169);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .metadata {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(35, 35, 35);
}

html body .metadata-properties {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

html body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

html body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

html body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body input[type=text] {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

html body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.18) 4px 4px 8px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px, rgba(0, 0, 0, 0) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0) -3px -3px 3px 0px inset;
  color: rgb(0, 0, 0);
}

html body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body sub {
  color: rgb(0, 0, 0);
}

html body summary {
  color: rgb(0, 0, 0);
}

html body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
