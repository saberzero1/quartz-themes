import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "neuborder", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 80%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-speed: 1;
  --background: #f0f0f0;
  --background-mod-left-split: #F6F6F6;
  --background-mod-right-split: #F6F6F6;
  --background-mod-root-split: rgb(255, 255, 255);
  --background-modifier-active-hover: rgba(90, 109, 237, 0.15);
  --background-modifier-border: #EAEAEA;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85);
  --background-modifier-hover: rgba(158, 159, 169, 0.15);
  --background-primary: rgb(255, 255, 255);
  --background-secondary: #F6F6F6;
  --background-tertiary: rgb(237, 244, 253);
  --background-underlying: rgb(237, 244, 253);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-shadow: 0 0 0 1px #EAEAEA;
  --bases-embed-border-color: #EAEAEA;
  --bases-group-heading-property-color: #232323;
  --bases-table-border-color: #EAEAEA;
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-selected: rgba(90, 109, 237, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(104, 121, 238);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-background-hover: rgba(158, 159, 169, 0.15);
  --bases-table-header-color: #232323;
  --bases-table-summary-background: rgb(255, 255, 255);
  --bases-table-summary-background-hover: rgba(158, 159, 169, 0.15);
  --blockquote-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: rgb(104, 121, 238);
  --blockquote-border-thickness: 3px;
  --blockquote-padding: 8px;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --bold-weight: 600;
  --button-color-1: #f0f0f0;
  --button-radius-circle: 36px;
  --button-radius-large: 12px;
  --button-radius-medium: 6px;
  --button-radius-medium-large: 8px;
  --button-radius-small: 3px;
  --callout-title-weight: 600;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgb(158, 159, 169);
  --card-border-radius: 8px;
  --card-shadow: 0px 0px 8px rgba(195, 197, 213, 0.4), 0px 0px 6px rgba(195, 197, 213, 0.2);
  --card-shadow-border-radius: 7px;
  --caret-color: #000000;
  --checkbox-border-color: rgb(158, 159, 169);
  --checkbox-border-color-hover: #232323;
  --checkbox-color: rgb(104, 121, 238);
  --checkbox-color-hover: rgb(104, 121, 238);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checklist-done-color: #232323;
  --code-border-color: #EAEAEA;
  --code-bracket-background: rgba(158, 159, 169, 0.15);
  --code-comment: rgb(158, 159, 169);
  --code-normal: #000000;
  --code-punctuation: #232323;
  --collapse-icon-color: rgb(158, 159, 169);
  --collapse-icon-color-collapsed: rgb(90, 109, 237);
  --color: 0, 0%;
  --color-accent: rgb(90, 109, 237);
  --color-accent-1: rgb(104, 121, 238);
  --color-accent-2: rgb(113, 130, 239);
  --color-accent-3: rgba(134, 142, 193, 0);
  --color-accent-hsl: 232,
    80%,
    64%;
  --color-activated-tab-header: #000000;
  --color-base-15: #f7f7f7;
  --color-base-20: #f0f0f0;
  --color-base-70: #5a5a5a;
  --color-base-80: #464646;
  --color-base-90: #333333;
  --color-primary: rgb(230, 230, 230);
  --color-primary-dark: rgb(217, 217, 217);
  --color-primary-darkest: rgb(191, 191, 191);
  --color-primary-light: rgb(237, 237, 237);
  --color-primary-lighter: rgb(247, 247, 247);
  --color-primary-lightest: rgb(255, 255, 255);
  --color-text-dark: rgb(153, 153, 153);
  --color-text-darkest: rgb(128, 128, 128);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #EAEAEA;
  --divider-color-hover: rgb(104, 121, 238);
  --dropdown-background: #fcfcfc;
  --dropdown-background-hover: #f7f7f7;
  --embed-block-shadow-hover: 0 0 0 1px #EAEAEA, inset 0 0 0 1px #EAEAEA;
  --embed-border-start: 2px solid rgb(104, 121, 238);
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --flair-background: #fcfcfc;
  --flair-color: #000000;
  --footnote-divider-color: #EAEAEA;
  --footnote-id-color: #232323;
  --footnote-id-color-no-occurrences: rgb(158, 159, 169);
  --footnote-input-background-active: rgba(158, 159, 169, 0.15);
  --graph-node: #232323;
  --graph-node-focused: rgb(90, 109, 237);
  --graph-node-unresolved: rgb(158, 159, 169);
  --graph-text: #000000;
  --gray: var(--text-muted);
  --heading-formatting: rgb(158, 159, 169);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-hover);
  --hr-color: #EAEAEA;
  --icon-color: #232323;
  --icon-color-active: rgb(90, 109, 237);
  --icon-color-focused: #000000;
  --icon-color-hover: #232323;
  --image-radius: 6px;
  --input-date-separator: rgb(158, 159, 169);
  --input-placeholder-color: rgb(158, 159, 169);
  --input-shadow: 4px 4px 8px rgba(0, 0, 0, 0.18),             
    -4px -4px 8px rgba(255, 255, 255, 0.5),      
    inset 3px 3px 3px rgba(0, 0, 0, 0),          
    inset -3px -3px 3px rgba(255, 255, 255, 0);
  --input-shadow-hover: 4px 4px 8px rgba(0, 0, 0, 0),                
    -4px -4px 8px rgba(255, 255, 255, 0),        
    inset 3px 3px 3px rgba(0, 0, 0, 0.2),        
    inset -3px -3px 3px rgba(255, 255, 255, 0.7);
  --interactive-accent: rgb(104, 121, 238);
  --interactive-accent-hover: rgb(104, 121, 238);
  --interactive-accent-hsl: 232,
    80%,
    64%;
  --interactive-accent-rgb: 32, 171, 233;
  --interactive-hover: #f7f7f7;
  --interactive-normal: #fcfcfc;
  --l: 100%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(90, 109, 237);
  --link-color-hover: rgb(113, 130, 239);
  --link-external-color: rgb(90, 109, 237);
  --link-external-color-hover: rgb(113, 130, 239);
  --link-unresolved-color: rgb(90, 109, 237);
  --link-unresolved-decoration-color: rgba(90, 109, 237, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: rgb(158, 159, 169);
  --list-marker-color-collapsed: rgb(90, 109, 237);
  --list-marker-color-hover: #232323;
  --list-radius-large: 12px;
  --list-radius-medium: 6px;
  --list-radius-small: 3px;
  --menu-background: #F6F6F6;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
    0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-border-color: #EAEAEA;
  --metadata-divider-color: #EAEAEA;
  --metadata-input-background-active: rgba(158, 159, 169, 0.15);
  --metadata-input-height: 28px;
  --metadata-input-text-color: #000000;
  --metadata-label-background-active: rgba(158, 159, 169, 0.15);
  --metadata-label-text-color: #232323;
  --metadata-label-text-color-hover: #232323;
  --metadata-property-background-active: rgba(158, 159, 169, 0.15);
  --mix-blend-mode-on-border: normal;
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: #EAEAEA;
  --nav-collapse-icon-color: rgb(158, 159, 169);
  --nav-collapse-icon-color-collapsed: rgb(158, 159, 169);
  --nav-heading-color: #000000;
  --nav-heading-color-collapsed: rgb(158, 159, 169);
  --nav-heading-color-collapsed-hover: #232323;
  --nav-heading-color-hover: #000000;
  --nav-item-background-active: rgba(158, 159, 169, 0.15);
  --nav-item-background-hover: rgba(158, 159, 169, 0.15);
  --nav-item-background-selected: rgba(90, 109, 237, 0.15);
  --nav-item-color: #232323;
  --nav-item-color-active: #000000;
  --nav-item-color-highlighted: rgb(90, 109, 237);
  --nav-item-color-hover: #000000;
  --nav-item-color-selected: #000000;
  --nav-tag-color: rgb(158, 159, 169);
  --nav-tag-color-active: #232323;
  --nav-tag-color-hover: #232323;
  --neumorphic-transition: all 0.15s;
  --on-border: rgba(134, 142, 193, 0);
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: #EAEAEA;
  --pill-color: #232323;
  --pill-color-hover: #000000;
  --pill-color-remove: rgb(158, 159, 169);
  --pill-color-remove-hover: rgb(90, 109, 237);
  --prompt-background: rgb(255, 255, 255);
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: #F6F6F6;
  --ribbon-background-collapsed: rgb(255, 255, 255);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.15);
  --search-clear-button-color: #232323;
  --search-icon-color: #232323;
  --search-result-background: rgb(255, 255, 255);
  --secondary: var(--text-accent);
  --setting-group-heading-color: #000000;
  --setting-items-border-color: #EAEAEA;
  --shadow: 4px 4px 8px rgba(0, 0, 0, 0.18),             
    -4px -4px 8px rgba(255, 255, 255, 0.5),      
    inset 3px 3px 3px rgba(0, 0, 0, 0),          
    inset -3px -3px 3px rgba(255, 255, 255, 0);
  --shadow-active: 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0),
    inset 3px 3px 3px rgba(0, 0, 0, 0.5),
    inset -3px -3px 3px rgba(255, 255, 255, 0.2);
  --shadow-hover: 4px 4px 8px rgba(0, 0, 0, 0),                
    -4px -4px 8px rgba(255, 255, 255, 0),        
    inset 3px 3px 3px rgba(0, 0, 0, 0.2),        
    inset -3px -3px 3px rgba(255, 255, 255, 0.7);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
    0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
    0px 15px 30px rgba(0, 0, 0, 0.07);
  --shadow-scrollbar: inset 4px 4px 8px rgba(0, 0, 0, 0.15),
    inset -4px -4px 8px rgba(255, 255, 255, 0.7);
  --shadow-selected: inset 3px 3px 3px rgba(0, 0, 0, 0.3);
  --sidebar-markdown-font-size: 14.4px;
  --slider-track-background: #EAEAEA;
  --status-bar-background: #F6F6F6;
  --status-bar-border-color: #EAEAEA;
  --status-bar-text-color: #232323;
  --suggestion-background: rgb(255, 255, 255);
  --tab-background-active: rgb(255, 255, 255);
  --tab-container-background: #F6F6F6;
  --tab-outline-color: #EAEAEA;
  --tab-switcher-background: #F6F6F6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F6F6F6, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(90, 109, 237);
  --tab-text-color: rgb(158, 159, 169);
  --tab-text-color-active: #232323;
  --tab-text-color-focused: #232323;
  --tab-text-color-focused-active: #232323;
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: rgb(90, 109, 237);
  --table-add-button-border-color: #EAEAEA;
  --table-border-color: #EAEAEA;
  --table-drag-handle-background-active: rgb(104, 121, 238);
  --table-drag-handle-color: rgb(158, 159, 169);
  --table-header-border-color: #EAEAEA;
  --table-header-color: #000000;
  --table-header-weight: 600;
  --table-selection: rgba(90, 109, 237, 0.1);
  --table-selection-border-color: rgb(104, 121, 238);
  --tag-background: rgba(90, 109, 237, 0.1);
  --tag-background-hover: rgba(90, 109, 237, 0.2);
  --tag-border-color: rgba(90, 109, 237, 0.15);
  --tag-border-color-hover: rgba(90, 109, 237, 0.15);
  --tag-color: rgb(90, 109, 237);
  --tag-color-hover: rgb(90, 109, 237);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(90, 109, 237);
  --text-accent-hover: rgb(113, 130, 239);
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-faint: rgb(158, 159, 169);
  --text-matched: #7dff8f;
  --text-muted: #232323;
  --text-normal: #000000;
  --text-selection: rgba(90, 109, 237, 0.2);
  --text-title-h1: #000000;
  --text-title-h2: #000000;
  --text-title-h3: #000000;
  --text-title-h4: #000000;
  --text-title-h5: #000000;
  --text-title-h6: #000000;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #F6F6F6;
  --titlebar-border-color: #EAEAEA;
  --titlebar-text-color: #232323;
  --titlebar-text-color-focused: #000000;
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 
    0px 1px 2px rgba(0, 0, 0, 0.3), 
    inset 0px -1px 1px rgba(255, 255, 255, 0.4), 
    inset 0px -4px 4px rgba(90, 109, 237, 0.3);
  --toggle-thumb-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 
    0px 1px 2px rgba(0, 0, 0, 0.3), 
    inset 0px -1px 1px rgba(255, 255, 255, 0.4), 
    inset 0px -4px 4px rgba(0, 0, 0, 0.1);
  --vault-profile-color: #000000;
  --vault-profile-color-hover: #000000;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(234, 234, 234);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(35, 35, 35);
  outline: rgb(35, 35, 35) none 0px;
  text-decoration: rgb(35, 35, 35);
  text-decoration-color: rgb(35, 35, 35);
}`,
    links: `body a.external, footer a {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 109, 237);
  outline: rgb(90, 109, 237) none 0px;
  text-decoration: rgb(90, 109, 237);
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 109, 237);
  outline: rgb(90, 109, 237) none 0px;
  text-decoration: rgb(90, 109, 237);
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}

body a.internal.broken {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 109, 237);
  outline: rgb(90, 109, 237) none 0px;
  text-decoration: rgb(90, 109, 237);
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(158, 159, 169);
  text-decoration: rgb(158, 159, 169);
}

body blockquote {
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
}

body td {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
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

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(101, 119, 238);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(101, 119, 238);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body input[type=checkbox] {
  border-bottom-color: rgb(158, 159, 169);
  border-left-color: rgb(158, 159, 169);
  border-right-color: rgb(158, 159, 169);
  border-top-color: rgb(158, 159, 169);
  transition: 0.15s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(158, 159, 169);
  text-decoration: line-through 1px rgb(158, 159, 169);
  text-decoration-color: rgb(158, 159, 169);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space {
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(158, 159, 169, 0.15);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(158, 159, 169, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(90, 109, 237, 0.1);
  border-bottom-color: rgba(90, 109, 237, 0.15);
  border-left-color: rgba(90, 109, 237, 0.15);
  border-right-color: rgba(90, 109, 237, 0.15);
  border-top-color: rgba(90, 109, 237, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(90, 109, 237);
}

body h1 {
  color: rgb(0, 0, 0);
}

body h2 {
  color: rgb(0, 0, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

body h3 {
  color: rgb(0, 0, 0);
}

body h4 {
  color: rgb(0, 0, 0);
}

body h5 {
  color: rgb(0, 0, 0);
}

body h6 {
  color: rgb(0, 0, 0);
}

body hr {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(134, 142, 193);
  text-decoration: rgb(134, 142, 193);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(35, 35, 35);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(35, 35, 35);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(35, 35, 35);
  text-decoration: rgb(35, 35, 35);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(134, 142, 193);
  stroke: rgb(134, 142, 193);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

body .breadcrumb-element p {
  color: rgb(158, 159, 169);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(35, 35, 35);
}

body .metadata-properties {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.18) 4px 4px 8px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px, rgba(0, 0, 0, 0) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0) -3px -3px 3px 0px inset;
  color: rgb(0, 0, 0);
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
