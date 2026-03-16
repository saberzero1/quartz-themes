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
  --background-mod-root-split: hsl(0, 0%,
    100%) !important;
  --background-modifier-active-hover: hsla(232,
    80%,
    64%, 0.15) !important;
  --background-modifier-border: #EAEAEA !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85) !important;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15) !important;
  --background-primary: hsl(0, 0%,
    100%) !important;
  --background-secondary: #F6F6F6 !important;
  --background-tertiary: hsl(214, 
    76%, 
    95.5%) !important;
  --background-underlying: hsl(214, 
    76%, 
    95.5%) !important;
  --bases-cards-background: hsl(0, 0%,
    100%) !important;
  --bases-cards-shadow: 0 0 0 1px #EAEAEA !important;
  --bases-embed-border-color: #EAEAEA !important;
  --bases-group-heading-property-color: #232323 !important;
  --bases-table-border-color: #EAEAEA !important;
  --bases-table-cell-background-active: hsl(0, 0%,
    100%) !important;
  --bases-table-cell-background-selected: hsla(232,
    80%,
    64%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(232, 
    80%, 
    66.5%) !important;
  --bases-table-header-background: hsl(0, 0%,
    100%) !important;
  --bases-table-header-background-hover: hsla(232, 6%, 64%, 0.15) !important;
  --bases-table-header-color: #232323 !important;
  --bases-table-summary-background: hsl(0, 0%,
    100%) !important;
  --bases-table-summary-background-hover: hsla(232, 6%, 64%, 0.15) !important;
  --blockquote-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-border-color: hsl(232, 
    80%, 
    66.5%) !important;
  --blockquote-border-thickness: 3px !important;
  --blockquote-padding: 8px !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%,
    100%) 65%, transparent) linear-gradient(hsl(0, 0%,
    100%), color-mix(in srgb, hsl(0, 0%,
    100%) 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --button-color-1: #f0f0f0 !important;
  --button-radius-circle: 36px !important;
  --button-radius-large: 12px !important;
  --button-radius-medium: 6px !important;
  --button-radius-medium-large: 8px !important;
  --button-radius-small: 3px !important;
  --callout-title-weight: 600;
  --canvas-background: hsl(0, 0%,
    100%) !important;
  --canvas-card-label-color: hsl(232, 6%, 64%) !important;
  --card-border-radius: 8px !important;
  --card-shadow: 0px 0px 8px hsla(232, 18%, 80%, 0.4), 0px 0px 6px hsla(232, 18%, 80%, 0.2) !important;
  --card-shadow-border-radius: 7px !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: hsl(232, 6%, 64%) !important;
  --checkbox-border-color-hover: #232323 !important;
  --checkbox-color: hsl(232, 
    80%, 
    66.5%) !important;
  --checkbox-color-hover: hsl(232, 
    80%, 
    66.5%) !important;
  --checkbox-marker-color: hsl(0, 0%,
    100%) !important;
  --checklist-done-color: #232323 !important;
  --code-border-color: #EAEAEA !important;
  --code-bracket-background: hsla(232, 6%, 64%, 0.15) !important;
  --code-comment: hsl(232, 6%, 64%) !important;
  --code-normal: #000000 !important;
  --code-punctuation: #232323 !important;
  --collapse-icon-color: hsl(232, 6%, 64%) !important;
  --collapse-icon-color-collapsed: hsl(232, 
    80%, 
    64%) !important;
  --color: 0, 0% !important;
  --color-accent: hsl(232, 
    80%, 
    64%) !important;
  --color-accent-1: hsl(232, 
    80%, 
    66.5%) !important;
  --color-accent-2: hsl(232, 
    80%, 
    69%) !important;
  --color-accent-3: hsla(232, 
    32%, 
    64%) !important;
  --color-accent-hsl: 232,
    80%,
    64% !important;
  --color-activated-tab-header: #000000 !important;
  --color-base-15: #f7f7f7 !important;
  --color-base-20: #f0f0f0 !important;
  --color-base-70: #5a5a5a !important;
  --color-base-80: #464646 !important;
  --color-base-90: #333333 !important;
  --color-primary: hsl(0, 0%, 
    90%) !important;
  --color-primary-dark: hsl(0, 0%, 
    85%) !important;
  --color-primary-darkest: hsl(0, 0%, 
    75%) !important;
  --color-primary-light: hsl(0, 0%, 
      92.5%) !important;
  --color-primary-lighter: hsl(0, 0%, 
      97%) !important;
  --color-primary-lightest: hsl(0, 0%,
    100%) !important;
  --color-text-dark: hsl(0, 0%, 
    60%) !important;
  --color-text-darkest: hsl(0, 0%, 
    50%) !important;
  --dark: #000000 !important;
  --darkgray: #000000 !important;
  --divider-color: #EAEAEA !important;
  --divider-color-hover: hsl(232, 
    80%, 
    66.5%) !important;
  --dropdown-background: #fcfcfc !important;
  --dropdown-background-hover: #f7f7f7 !important;
  --embed-block-shadow-hover: 0 0 0 1px #EAEAEA, inset 0 0 0 1px #EAEAEA !important;
  --embed-border-start: 2px solid hsl(232, 
    80%, 
    66.5%) !important;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e") !important;
  --file-header-background: hsl(0, 0%,
    100%) !important;
  --file-header-background-focused: hsl(0, 0%,
    100%) !important;
  --flair-background: #fcfcfc !important;
  --flair-color: #000000 !important;
  --footnote-divider-color: #EAEAEA !important;
  --footnote-id-color: #232323 !important;
  --footnote-id-color-no-occurrences: hsl(232, 6%, 64%) !important;
  --footnote-input-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --graph-node: #232323 !important;
  --graph-node-focused: hsl(232, 
    80%, 
    64%) !important;
  --graph-node-unresolved: hsl(232, 6%, 64%) !important;
  --graph-text: #000000 !important;
  --gray: #232323 !important;
  --heading-formatting: hsl(232, 6%, 64%) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(232, 6%, 64%, 0.15) !important;
  --hr-color: #EAEAEA !important;
  --icon-color: #232323 !important;
  --icon-color-active: hsl(232, 
    80%, 
    64%) !important;
  --icon-color-focused: #000000 !important;
  --icon-color-hover: #232323 !important;
  --image-radius: 6px !important;
  --input-date-separator: hsl(232, 6%, 64%) !important;
  --input-placeholder-color: hsl(232, 6%, 64%) !important;
  --input-shadow: 4px 4px 8px rgba(0, 0, 0, 0.18),             
    -4px -4px 8px rgba(255, 255, 255, 0.5),      
    inset 3px 3px 3px rgba(0, 0, 0, 0),          
    inset -3px -3px 3px rgba(255, 255, 255, 0) !important;
  --input-shadow-hover: 4px 4px 8px rgba(0, 0, 0, 0),                
    -4px -4px 8px rgba(255, 255, 255, 0),        
    inset 3px 3px 3px rgba(0, 0, 0, 0.2),        
    inset -3px -3px 3px rgba(255, 255, 255, 0.7) !important;
  --interactive-accent: hsl(232, 
    80%, 
    66.5%) !important;
  --interactive-accent-hover: hsl(232, 
    80%, 
    66.5%) !important;
  --interactive-accent-hsl: 232,
    80%,
    64% !important;
  --interactive-accent-rgb: 32, 171, 233 !important;
  --interactive-hover: #f7f7f7 !important;
  --interactive-normal: #fcfcfc !important;
  --l: 100% !important;
  --light: hsl(0, 0%,
    100%) !important;
  --lightgray: #F6F6F6 !important;
  --link-color: hsl(232, 
    80%, 
    64%) !important;
  --link-color-hover: hsl(232, 
    80%, 
    69%) !important;
  --link-external-color: hsl(232, 
    80%, 
    64%) !important;
  --link-external-color-hover: hsl(232, 
    80%, 
    69%) !important;
  --link-unresolved-color: hsl(232, 
    80%, 
    64%) !important;
  --link-unresolved-decoration-color: hsla(232,
    80%,
    64%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(232, 6%, 64%) !important;
  --list-marker-color-collapsed: hsl(232, 
    80%, 
    64%) !important;
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
  --metadata-input-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --metadata-label-text-color: #232323 !important;
  --metadata-label-text-color-hover: #232323 !important;
  --metadata-property-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --mix-blend-mode-on-border: normal !important;
  --modal-background: hsl(0, 0%,
    100%) !important;
  --modal-border-color: #EAEAEA !important;
  --nav-collapse-icon-color: hsl(232, 6%, 64%) !important;
  --nav-collapse-icon-color-collapsed: hsl(232, 6%, 64%) !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: hsl(232, 6%, 64%) !important;
  --nav-heading-color-collapsed-hover: #232323 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-item-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --nav-item-background-hover: hsla(232, 6%, 64%, 0.15) !important;
  --nav-item-background-selected: hsla(232,
    80%,
    64%, 0.15) !important;
  --nav-item-color: #232323 !important;
  --nav-item-color-active: #000000 !important;
  --nav-item-color-highlighted: hsl(232, 
    80%, 
    64%) !important;
  --nav-item-color-hover: #000000 !important;
  --nav-item-color-selected: #000000 !important;
  --nav-tag-color: hsl(232, 6%, 64%) !important;
  --nav-tag-color-active: #232323 !important;
  --nav-tag-color-hover: #232323 !important;
  --neumorphic-transition: all 0.15s !important;
  --on-border: hsla(232, 
    32%, 
    64%) !important;
  --pdf-background: hsl(0, 0%,
    100%) !important;
  --pdf-page-background: hsl(0, 0%,
    100%) !important;
  --pdf-sidebar-background: hsl(0, 0%,
    100%) !important;
  --pill-border-color: #EAEAEA !important;
  --pill-color: #232323 !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: hsl(232, 6%, 64%) !important;
  --pill-color-remove-hover: hsl(232, 
    80%, 
    64%) !important;
  --prompt-background: hsl(0, 0%,
    100%) !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%,
    100%) 65%, transparent) linear-gradient(hsl(0, 0%,
    100%), color-mix(in srgb, hsl(0, 0%,
    100%) 65%, transparent)) !important;
  --ribbon-background: #F6F6F6 !important;
  --ribbon-background-collapsed: hsl(0, 0%,
    100%) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.15) !important;
  --search-clear-button-color: #232323 !important;
  --search-icon-color: #232323 !important;
  --search-result-background: hsl(0, 0%,
    100%) !important;
  --secondary: hsl(232, 
    80%, 
    64%) !important;
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
  --suggestion-background: hsl(0, 0%,
    100%) !important;
  --tab-background-active: hsl(0, 0%,
    100%) !important;
  --tab-container-background: #F6F6F6 !important;
  --tab-outline-color: #EAEAEA !important;
  --tab-switcher-background: #F6F6F6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F6F6F6, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 
    80%, 
    64%) !important;
  --tab-text-color: hsl(232, 6%, 64%) !important;
  --tab-text-color-active: #232323 !important;
  --tab-text-color-focused: #232323 !important;
  --tab-text-color-focused-active: #232323 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: hsl(232, 
    80%, 
    64%) !important;
  --table-add-button-border-color: #EAEAEA !important;
  --table-border-color: #EAEAEA !important;
  --table-drag-handle-background-active: hsl(232, 
    80%, 
    66.5%) !important;
  --table-drag-handle-color: hsl(232, 6%, 64%) !important;
  --table-header-border-color: #EAEAEA !important;
  --table-header-color: #000000 !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(232,
    80%,
    64%, 0.1) !important;
  --table-selection-border-color: hsl(232, 
    80%, 
    66.5%) !important;
  --tag-background: hsla(232,
    80%,
    64%, 0.1) !important;
  --tag-background-hover: hsla(232,
    80%,
    64%, 0.2) !important;
  --tag-border-color: hsla(232,
    80%,
    64%, 0.15) !important;
  --tag-border-color-hover: hsla(232,
    80%,
    64%, 0.15) !important;
  --tag-color: hsl(232, 
    80%, 
    64%) !important;
  --tag-color-hover: hsl(232, 
    80%, 
    64%) !important;
  --tertiary: hsl(232, 
    80%, 
    69%) !important;
  --text-accent: hsl(232, 
    80%, 
    64%) !important;
  --text-accent-hover: hsl(232, 
    80%, 
    69%) !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: hsl(232, 6%, 64%) !important;
  --text-matched: #7dff8f !important;
  --text-muted: #232323 !important;
  --text-normal: #000000 !important;
  --text-selection: hsla(232,
    80%,
    64%, 0.2) !important;
  --text-title-h1: #000000 !important;
  --text-title-h2: #000000 !important;
  --text-title-h3: #000000 !important;
  --text-title-h4: #000000 !important;
  --text-title-h5: #000000 !important;
  --text-title-h6: #000000 !important;
  --textHighlight: hsla(232, 6%, 64%, 0.15) !important;
  --titlebar-background: #F6F6F6 !important;
  --titlebar-border-color: #EAEAEA !important;
  --titlebar-text-color: #232323 !important;
  --titlebar-text-color-focused: #000000 !important;
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 
    0px 1px 2px rgba(0, 0, 0, 0.3), 
    inset 0px -1px 1px rgba(255, 255, 255, 0.4), 
    inset 0px -4px 4px hsla(232,
    80%,
    64%, 0.3) !important;
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

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
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
    typography: `html body .page article p > b, html b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > em, html em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > i, html i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > strong, html strong {
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
    links: `html body a.external, html footer a {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 109, 237);
  outline: rgb(90, 109, 237) none 0px;
  text-decoration: rgb(90, 109, 237);
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
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
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body ul > li {
  color: rgb(0, 0, 0);
}

html body ul.overflow {
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

html body pre > code, html pre:has(> code) {
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

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(158, 159, 169, 0.15);
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > input {
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(158, 159, 169, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(0, 0, 0);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html body h2.page-title, html h2.page-title a {
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
