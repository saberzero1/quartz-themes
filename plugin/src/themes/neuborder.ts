import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "neuborder", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 80%;
  --anim-duration-fast: calc(150ms/var(--anim-speed));
  --anim-duration-moderate: calc(300ms/var(--anim-speed));
  --anim-duration-slow: calc(600ms/var(--anim-speed));
  --anim-duration-superfast: calc(75ms/var(--anim-speed));
  --anim-speed: 1;
  --background: #f0f0f0;
  --background-mod-left-split: var(--background-secondary, #F6F6F6);
  --background-mod-right-split: var(--background-secondary, #F6F6F6);
  --background-mod-root-split: var(--background-primary, hsl(0, 0%,
    100%));
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-base-30, #EAEAEA);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85);
  --background-modifier-hover: hsla(var(--accent-h), 6%, 64%, 0.15);
  --background-primary: var(--color-primary-lightest, hsl(0, 0%,
    100%));
  --background-secondary: var(--color-base-20, #F6F6F6);
  --background-tertiary: hsl(calc(var(--accent-h) - 18), 
    calc(var(--accent-s) - 4%), 
    calc(100% - (100% - var(--accent-l))/7));
  --background-underlying: var(--background-tertiary, hsl(214, 
    76%, 
    94.85714%));
  --bases-cards-background: var(--background-primary, hsl(0, 0%,
    100%));
  --bases-embed-border-color: var(--background-modifier-border, #EAEAEA);
  --bases-group-heading-property-color: var(--text-muted, #232323);
  --bases-table-border-color: var(--table-border-color, #EAEAEA);
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 0%,
    100%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(232,
    80%,
    64%, 0.1));
  --bases-table-header-background: var(--background-primary, hsl(0, 0%,
    100%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --bases-table-header-color: var(--text-muted, #232323);
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%,
    100%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --blockquote-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: var(--interactive-accent, hsl(232, 
    80%, 
    66.5%));
  --blockquote-border-thickness: 3px;
  --blockquote-padding: 8px;
  --button-color-1: var(--color-base-20, #f0f0f0);
  --button-radius-circle: 36px;
  --button-radius-large: 12px;
  --button-radius-medium: 6px;
  --button-radius-medium-large: 8px;
  --button-radius-small: 3px;
  --canvas-background: var(--background-primary, hsl(0, 0%,
    100%));
  --canvas-card-label-color: var(--text-faint, hsl(232, 6%, 64%));
  --card-border-radius: 8px;
  --card-shadow: 0px 0px 8px hsla(var(--accent-h), 18%, 80%, 0.4), 0px 0px 6px hsla(var(--accent-h), 18%, 80%, 0.2);
  --card-shadow-border-radius: calc(var(--card-border-radius) - 1px);
  --caret-color: var(--text-normal, #000000);
  --checkbox-border-color: var(--text-faint, hsl(232, 6%, 64%));
  --checkbox-border-color-hover: var(--text-muted, #232323);
  --checkbox-color: var(--interactive-accent, hsl(232, 
    80%, 
    66.5%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(232, 
    80%, 
    66.5%));
  --checkbox-marker-color: var(--background-primary, hsl(0, 0%,
    100%));
  --checklist-done-color: var(--text-muted, #232323);
  --code-border-color: var(--background-modifier-border, #EAEAEA);
  --code-bracket-background: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --code-comment: var(--text-faint, hsl(232, 6%, 64%));
  --code-normal: var(--text-normal, #000000);
  --code-punctuation: var(--text-muted, #232323);
  --collapse-icon-color: var(--text-faint, hsl(232, 6%, 64%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --color: 0, 0%;
  --color-accent: hsl(var(--accent-h), 
    var(--accent-s), 
    var(--accent-l));
  --color-accent-1: hsl(var(--accent-h), 
    var(--accent-s), 
    calc(var(--accent-l) + 2.5%));
  --color-accent-2: hsl(var(--accent-h), 
    var(--accent-s), 
    calc(var(--accent-l) + 5%));
  --color-accent-3: hsla(var(--accent-h), 
    calc(var(--accent-s)*0.4), 
    calc(var(--accent-l)));
  --color-accent-hsl: var(--accent-h),
    var(--accent-s),
    var(--accent-l);
  --color-activated-tab-header: var(--text-normal, #000000);
  --color-base-15: #f7f7f7;
  --color-base-20: #f0f0f0;
  --color-base-70: #5a5a5a;
  --color-base-80: #464646;
  --color-base-90: #333333;
  --color-primary: hsl(var(--color), 
    calc(var(--l) - 10%));
  --color-primary-dark: hsl(var(--color), 
    calc(var(--l) - 15%));
  --color-primary-darkest: hsl(var(--color), 
    calc(var(--l) - 25%));
  --color-primary-light: hsl(var(--color), 
    calc(var(--l) - 7.5%));
  --color-primary-lighter: hsl(var(--color), 
    calc(var(--l) - 3%));
  --color-primary-lightest: hsl(var(--color),
    var(--l));
  --color-text-dark: hsl(var(--color), 
    calc(var(--l) - 40%));
  --color-text-darkest: hsl(var(--color), 
    calc(var(--l) - 50%));
  --dark: var(--text-normal, var(--color-base-100, #000000));
  --darkgray: var(--text-normal, var(--color-base-100, #000000));
  --divider-color: var(--background-modifier-border, #EAEAEA);
  --divider-color-hover: var(--interactive-accent, hsl(232, 
    80%, 
    66.5%));
  --dropdown-background: var(--interactive-normal, #fcfcfc);
  --dropdown-background-hover: var(--interactive-hover, #f7f7f7);
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: var(--background-primary, hsl(0, 0%,
    100%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%,
    100%));
  --flair-background: var(--interactive-normal, #fcfcfc);
  --flair-color: var(--text-normal, #000000);
  --footnote-divider-color: var(--metadata-divider-color, #EAEAEA);
  --footnote-id-color: var(--text-muted, #232323);
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(232, 6%, 64%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(232, 6%, 64%, 0.15));
  --graph-node: var(--text-muted, #232323);
  --graph-node-focused: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --graph-node-unresolved: var(--text-faint, hsl(232, 6%, 64%));
  --graph-text: var(--text-normal, #000000);
  --gray: var(--text-muted, var(--color-base-70, #232323));
  --heading-formatting: var(--text-faint, hsl(232, 6%, 64%));
  --highlight: var(--background-modifier-hover, hsla(var(--accent-h), 6%, 64%, 0.15));
  --hr-color: var(--background-modifier-border, #EAEAEA);
  --icon-color: var(--text-muted, #232323);
  --icon-color-active: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --icon-color-focused: var(--text-normal, #000000);
  --icon-color-hover: var(--text-muted, #232323);
  --image-radius: 6px;
  --input-date-separator: var(--text-faint, hsl(232, 6%, 64%));
  --input-placeholder-color: var(--text-faint, hsl(232, 6%, 64%));
  --input-shadow: var(--shadow, 4px 4px 8px rgba(0, 0, 0, 0.18),             
    -4px -4px 8px rgba(255, 255, 255, 0.5),      
    inset 3px 3px 3px rgba(0, 0, 0, 0),          
    inset -3px -3px 3px rgba(255, 255, 255, 0));
  --input-shadow-hover: var(--shadow-hover, 4px 4px 8px rgba(0, 0, 0, 0),                
    -4px -4px 8px rgba(255, 255, 255, 0),        
    inset 3px 3px 3px rgba(0, 0, 0, 0.2),        
    inset -3px -3px 3px rgba(255, 255, 255, 0.7));
  --interactive-accent: var(--color-accent-1, hsl(232, 
    80%, 
    66.5%));
  --interactive-accent-hover: var(--interactive-accent, hsl(232, 
    80%, 
    66.5%));
  --interactive-accent-hsl: var(--color-accent-hsl, 232,
    80%,
    64%);
  --interactive-accent-rgb: 32, 171, 233;
  --interactive-hover: var(--color-base-15, #f7f7f7);
  --interactive-normal: var(--color-base-05, #fcfcfc);
  --l: 100%;
  --light: var(--background-primary, var(--color-primary-lightest, hsl(0, 0%,
    100%)));
  --lightgray: var(--background-secondary, var(--color-base-20, #F6F6F6));
  --link-color: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --link-color-hover: var(--text-accent-hover, hsl(232, 
    80%, 
    69%));
  --link-external-color: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --link-external-color-hover: var(--text-accent-hover, hsl(232, 
    80%, 
    69%));
  --link-unresolved-color: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --list-marker-color: var(--text-faint, hsl(232, 6%, 64%));
  --list-marker-color-collapsed: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --list-marker-color-hover: var(--text-muted, #232323);
  --list-radius-large: 12px;
  --list-radius-medium: 6px;
  --list-radius-small: 3px;
  --menu-background: var(--background-secondary, #F6F6F6);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
    0px 15px 30px rgba(0, 0, 0, 0.07));
  --metadata-border-color: var(--background-modifier-border, #EAEAEA);
  --metadata-divider-color: var(--background-modifier-border, #EAEAEA);
  --metadata-input-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --metadata-input-text-color: var(--text-normal, #000000);
  --metadata-label-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --metadata-label-text-color: var(--text-muted, #232323);
  --metadata-label-text-color-hover: var(--text-muted, #232323);
  --metadata-property-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --mix-blend-mode-on-border: normal;
  --modal-background: var(--background-primary, hsl(0, 0%,
    100%));
  --modal-border-color: var(--background-modifier-border, #EAEAEA);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(232, 6%, 64%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(232, 6%, 64%));
  --nav-heading-color: var(--text-normal, #000000);
  --nav-heading-color-collapsed: var(--text-faint, hsl(232, 6%, 64%));
  --nav-heading-color-collapsed-hover: var(--text-muted, #232323);
  --nav-heading-color-hover: var(--text-normal, #000000);
  --nav-item-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --nav-item-color: var(--text-muted, #232323);
  --nav-item-color-active: var(--text-normal, #000000);
  --nav-item-color-highlighted: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --nav-item-color-hover: var(--text-normal, #000000);
  --nav-item-color-selected: var(--text-normal, #000000);
  --nav-tag-color: var(--text-faint, hsl(232, 6%, 64%));
  --nav-tag-color-active: var(--text-muted, #232323);
  --nav-tag-color-hover: var(--text-muted, #232323);
  --neumorphic-transition: all 0.15s;
  --neumorphic-transition-faster: all 0.10s;
  --on-border: hsl(var(--accent-h), 60%, 50%);
  --pdf-background: var(--background-primary, hsl(0, 0%,
    100%));
  --pdf-page-background: var(--background-primary, hsl(0, 0%,
    100%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 0%,
    100%));
  --pill-border-color: var(--background-modifier-border, #EAEAEA);
  --pill-color: var(--text-muted, #232323);
  --pill-color-hover: var(--text-normal, #000000);
  --pill-color-remove: var(--text-faint, hsl(232, 6%, 64%));
  --pill-color-remove-hover: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --prompt-background: var(--background-primary, hsl(0, 0%,
    100%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 0%,
    100%) 65%, transparent) linear-gradient(hsl(0, 0%,
    100%), color-mix(in srgb, hsl(0, 0%,
    100%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, #F6F6F6);
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 0%,
    100%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.15);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.15);
  --search-clear-button-color: var(--text-muted, #232323);
  --search-icon-color: var(--text-muted, #232323);
  --search-result-background: var(--background-primary, hsl(0, 0%,
    100%));
  --secondary: var(--text-accent, var(--color-accent, hsl(232, 
    80%, 
    64%)));
  --setting-group-heading-color: var(--text-normal, #000000);
  --setting-items-border-color: var(--background-modifier-border, #EAEAEA);
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
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #232323);
  --shiki-code-comment: var(--text-faint, hsl(232, 6%, 64%));
  --shiki-code-normal: var(--text-muted, #232323);
  --shiki-code-punctuation: var(--text-muted, #232323);
  --shiki-gutter-border-color: var(--background-modifier-border, #EAEAEA);
  --shiki-gutter-text-color: var(--text-faint, hsl(232, 6%, 64%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #232323);
  --shiki-highlight-neutral: var(--shiki-code-normal, #232323);
  --shiki-terminal-dots-color: var(--text-faint, hsl(232, 6%, 64%));
  --slider-thumb-shadow: inset 0.45em 0.45em 5px -5px rgba(255, 255, 255, 0.65),
    inset -0.25em -0.25em 8px -2px rgba(0, 0, 0, 0.2),
    0.4em 0.3em 5px -0.3em rgba(0, 0, 0, 0.35);
  --slider-thumb-shadow-active: inset 0.3em 0.3em 6px -3px rgba(0, 0, 0, 0.3),
    inset -0.2em -0.2em 5px -3px rgba(255, 255, 255, 0.4),
    0 0 0 3px hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --slider-thumb-shadow-hover: inset 0.45em 0.45em 5px -5px rgba(255, 255, 255, 0.65),
    inset -0.25em -0.25em 8px -2px rgba(0, 0, 0, 0.2),
    0.4em 0.3em 5px -0.3em rgba(0, 0, 0, 0.35),
    0 0 0 3px hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.3);
  --slider-track-background: var(--background-modifier-border, #EAEAEA);
  --slider-track-shadow: inset 3px 4px 10px rgba(0, 0, 0, 0.15),
    inset -3px -4px 10px rgba(255, 255, 255, 0.55);
  --status-bar-background: var(--background-secondary, #F6F6F6);
  --status-bar-border-color: var(--divider-color, #EAEAEA);
  --status-bar-text-color: var(--text-muted, #232323);
  --suggestion-background: var(--background-primary, hsl(0, 0%,
    100%));
  --tab-background-active: var(--background-primary, hsl(0, 0%,
    100%));
  --tab-container-background: var(--background-secondary, #F6F6F6);
  --tab-outline-color: var(--divider-color, #EAEAEA);
  --tab-stacked-header-width: var(--header-height, 50px);
  --tab-switcher-background: var(--background-secondary, #F6F6F6);
  --tab-text-color: var(--text-faint, hsl(232, 6%, 64%));
  --tab-text-color-active: var(--text-muted, #232323);
  --tab-text-color-focused: var(--text-muted, #232323);
  --tab-text-color-focused-active: var(--text-muted, #232323);
  --tab-text-color-focused-active-current: var(--text-normal, #000000);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --table-add-button-border-color: var(--background-modifier-border, #EAEAEA);
  --table-border-color: var(--background-modifier-border, #EAEAEA);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(232, 
    80%, 
    66.5%));
  --table-drag-handle-color: var(--text-faint, hsl(232, 6%, 64%));
  --table-header-border-color: var(--table-border-color, #EAEAEA);
  --table-header-color: var(--text-normal, #000000);
  --table-selection-border-color: var(--interactive-accent, hsl(232, 
    80%, 
    66.5%));
  --tag-color: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --tag-color-hover: var(--text-accent, hsl(232, 
    80%, 
    64%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(232, 
    80%, 
    69%)));
  --text-accent: var(--color-accent, hsl(232, 
    80%, 
    64%));
  --text-accent-hover: var(--color-accent-2, hsl(232, 
    80%, 
    69%));
  --text-error: var(--color-red, #ff3333);
  --text-error-hover: #990000;
  --text-faint: hsl(var(--accent-h), 6%, 64%);
  --text-matched: #7dff8f;
  --text-muted: var(--color-base-70, #232323);
  --text-normal: var(--color-base-100, #000000);
  --text-title-h1: #000000;
  --text-title-h2: #000000;
  --text-title-h3: #000000;
  --text-title-h4: #000000;
  --text-title-h5: #000000;
  --text-title-h6: #000000;
  --textHighlight: var(--background-modifier-hover, hsla(var(--accent-h), 6%, 64%, 0.15));
  --titlebar-background: var(--background-secondary, #F6F6F6);
  --titlebar-border-color: var(--background-modifier-border, #EAEAEA);
  --titlebar-text-color: var(--text-muted, #232323);
  --titlebar-text-color-focused: var(--text-normal, #000000);
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 
    0px 1px 2px rgba(0, 0, 0, 0.3), 
    inset 0px -1px 1px rgba(255, 255, 255, 0.4), 
    inset 0px -4px 4px hsla(var(--interactive-accent-hsl), 0.3);
  --toggle-thumb-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 
    0px 1px 2px rgba(0, 0, 0, 0.3), 
    inset 0px -1px 1px rgba(255, 255, 255, 0.4), 
    inset 0px -4px 4px rgba(0, 0, 0, 0.1);
  --vault-profile-color: var(--text-normal, #000000);
  --vault-profile-color-hover: var(--vault-profile-color, #000000);
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #F6F6F6);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: var(--color-activated-tab-header, rgb(0, 0, 0));
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(234, 234, 234);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #F6F6F6);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(234, 234, 234);
  color: rgb(0, 0, 0);
}

html body html {
  --button-radius-circle: 36px;
  --button-radius-large: 12px;
  --button-radius-medium: 6px;
  --button-radius-medium-large: 8px;
  --button-radius-small: 3px;
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 3, 138, 255;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-rgb: 54, 215, 183;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 120, 186, 126;
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 243, 156, 18;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 242, 63, 165;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 148, 85, 236;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 254, 121, 104;
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-rgb: 229, 199, 0;
  --image-radius: 6px;
  --input-radius: 5px;
  --list-radius-large: 12px;
  --list-radius-medium: 6px;
  --list-radius-small: 3px;
  --mono-rgb-0: 255, 255, 255;
  --mono-rgb-100: 0, 0, 0;
  --neumorphic-transition: all 0.15s;
  --neumorphic-transition-faster: all 0.10s;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .text-highlight {
  color: var(--text-normal, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body footer {
  --icon-color: var(--text-muted, hsl(232, 60%, 50%));
  --icon-color-hover: var(--text-muted, hsl(232, 60%, 50%));
  --status-bar-text-color: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color: var(--text-faint, hsl(232, 60%, 50%));
  --tab-text-color-active: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused-active: var(--text-muted, hsl(232, 60%, 50%));
  --text-faint: var(--on-border, hsl(232, 60%, 50%));
  --text-muted: var(--on-border, hsl(232, 60%, 50%));
  --titlebar-text-color: var(--text-muted, hsl(232, 60%, 50%));
}

html body h1.article-title {
  color: var(--text-normal, rgb(0, 0, 0));
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(158, 159, 169);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(101, 119, 238));
  border-color: rgb(101, 119, 238);
}

html body p {
  color: var(--text-muted, rgb(35, 35, 35));
  outline: rgb(35, 35, 35) none 0px;
  text-decoration-color: rgb(35, 35, 35);
}`,
    links: `html body a.external-link, html footer a {
  background-color: var(--color-primary-lighter, rgb(247, 247, 247));
  box-shadow: var(--shadow, rgba(0, 0, 0, 0.18) 4px 4px 8px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px, rgba(0, 0, 0, 0) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0) -3px -3px 3px 0px inset);
  color: var(--link-external-color, rgb(90, 109, 237));
  outline: rgb(90, 109, 237) none 0px;
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--color-primary-lighter, rgb(247, 247, 247));
  box-shadow: var(--shadow, rgba(0, 0, 0, 0.18) 4px 4px 8px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px, rgba(0, 0, 0, 0) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0) -3px -3px 3px 0px inset);
  color: var(--link-color, rgb(90, 109, 237));
  outline: rgb(90, 109, 237) none 0px;
  text-decoration-color: rgb(90, 109, 237);
  transition: 0.15s;
}

html body a.internal-link.broken {
  background-color: var(--color-primary-lighter, rgb(247, 247, 247));
  box-shadow: var(--shadow, rgba(0, 0, 0, 0.18) 4px 4px 8px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px, rgba(0, 0, 0, 0) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0) -3px -3px 3px 0px inset);
  color: var(--link-unresolved-color, rgb(90, 109, 237));
  outline: rgb(90, 109, 237) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(90, 109, 237));
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
  color: var(--text-faint, rgb(158, 159, 169));
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
  color: var(--table-text-color, rgb(0, 0, 0));
}

html body th {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: var(--table-header-color, rgb(0, 0, 0));
}`,
    code: `html body code {
  background-color: var(--background-secondary, rgb(246, 246, 246));
  border-bottom-color: rgb(234, 234, 234);
  border-bottom-width: 1px;
  border-left-color: rgb(234, 234, 234);
  border-left-width: 1px;
  border-right-color: rgb(234, 234, 234);
  border-right-width: 1px;
  border-top-color: rgb(234, 234, 234);
  border-top-width: 1px;
  color: var(--color-monospace, rgb(0, 0, 0));
  padding-bottom: 2.088px;
  padding-left: 4.176px;
  padding-right: 4.176px;
  padding-top: 2.088px;
}

html body pre:has(> code) {
  background-color: var(--background-secondary, rgb(246, 246, 246));
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
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(158, 159, 169);
  border-left-color: rgb(158, 159, 169);
  border-right-color: rgb(158, 159, 169);
  border-top-color: rgb(158, 159, 169);
  transition: 0.15s;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(0, 0, 0);
}

html li.task-list-item[data-task="body"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="."] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="="] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(0, 0, 0);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(0, 0, 0);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="y"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(158, 159, 169);
  text-decoration: line-through 1px rgb(158, 159, 169);
  text-decoration-color: rgb(158, 159, 169);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M0 8a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M0 8a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M8 0a2.463 2.463 0 0 0-2.43 2.864v.002L6.686 9.55a1.334 1.334 0 0 0 2.63 0l1.114-6.685v-.002A2.463 2.463 0 0 0 8 0Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M8 0a2.463 2.463 0 0 0-2.43 2.864v.002L6.686 9.55a1.334 1.334 0 0 0 2.63 0l1.114-6.685v-.002A2.463 2.463 0 0 0 8 0Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.871 3.692c0 3.56-3.956 3.319-3.956 5.78v.014c0 .284-.23.514-.514.514H6.243a.514.514 0 0 1-.515-.514V9.34c0-3.803 3.473-3.56 3.473-5.341 0-.77-.571-1.23-1.517-1.23-.768 0-1.554.335-2.268 1.022a.512.512 0 0 1-.67.031l-1.419-1.11a.513.513 0 0 1-.056-.76C4.457.731 5.997 0 8.036 0c3.23 0 4.835 1.736 4.835 3.692ZM9.355 14c0 1.099-.88 2-2 2-1.1 0-2-.901-2-2s.9-2 2-2c1.12 0 2 .901 2 2Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.871 3.692c0 3.56-3.956 3.319-3.956 5.78v.014c0 .284-.23.514-.514.514H6.243a.514.514 0 0 1-.515-.514V9.34c0-3.803 3.473-3.56 3.473-5.341 0-.77-.571-1.23-1.517-1.23-.768 0-1.554.335-2.268 1.022a.512.512 0 0 1-.67.031l-1.419-1.11a.513.513 0 0 1-.056-.76C4.457.731 5.997 0 8.036 0c3.23 0 4.835 1.736 4.835 3.692ZM9.355 14c0 1.099-.88 2-2 2-1.1 0-2-.901-2-2s.9-2 2-2c1.12 0 2 .901 2 2Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(120, 82, 238);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgb(8, 109, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(213, 57, 132);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(8, 109, 221);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66-.13-.9,.35-.25-.23-.4-.54-.43-.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06-.18,.16,.34,.28,.47,.13-.14,.28-.25,.45-.32,.17,.07,.35,.11,.54-.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25-.25-.39-.59-.39-.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38-.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47,.39,.12-.17,.21,.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66-.13-.9,.35-.25-.23-.4-.54-.43-.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06-.18,.16,.34,.28,.47,.13-.14,.28-.25,.45-.32,.17,.07,.35,.11,.54-.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25-.25-.39-.59-.39-.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38-.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47,.39,.12-.17,.21,.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19-.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52-.11-.71,.29c-.19-.19-.29-.44-.29-.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52-.11-.71-.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19-.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52-.11-.71,.29c-.19-.19-.29-.44-.29-.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52-.11-.71-.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19-.44,.29-.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0-.26,.11-.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19-.44,.29-.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0-.26,.11-.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M10.34 14.025c-.007.002-.56.186-1.04.186-.265 0-.372-.055-.406-.08-.168-.116-.48-.335.054-1.4l1-1.993c.593-1.184.681-2.33.245-3.226-.356-.733-1.039-1.236-1.92-1.416A5 5 0 0 0 7.315 6C5.466 6 4.221 7.08 4.17 7.125a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.04-.187.262 0 .368.055.401.078.17.119.482.34-.05 1.403l-1.001 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.49-.85ZM9.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M10.34 14.025c-.007.002-.56.186-1.04.186-.265 0-.372-.055-.406-.08-.168-.116-.48-.335.054-1.4l1-1.993c.593-1.184.681-2.33.245-3.226-.356-.733-1.039-1.236-1.92-1.416A5 5 0 0 0 7.315 6C5.466 6 4.221 7.08 4.17 7.125a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.04-.187.262 0 .368.055.401.078.17.119.482.34-.05 1.403l-1.001 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.49-.85ZM9.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(236, 117, 0);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14-.14,.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14-.14,.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14-.14,.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14-.14,.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(0, 191, 188);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08-.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08-.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.781 8.34c-.84-.665-2.146-1.247-3.354-1.715V4.396a28.48 28.48 0 0 1 2.123.772c.096.04.209.006.265-.082l1.193-1.805a.219.219 0 0 0-.079-.314c-.68-.365-2.072-.93-3.502-1.293V.366a.27.27 0 0 0-.27-.271H6.985a.271.271 0 0 0-.271.271v.973c-2.014.092-3.38.795-4.166 2.147-.616 1.06-.613 2.255.004 3.118.645.922 1.699 1.332 3.031 1.851l.172.066c.309.118.634.239.959.359v2.715c-1.41-.335-2.736-1.023-2.98-1.189a.218.218 0 0 0-.296.048l-1.444 1.883a.211.211 0 0 0-.043.163.22.22 0 0 0 .086.145c.874.648 2.145 1.266 3.403 1.654a12.4 12.4 0 0 0 1.275.316v1.018c0 .148.121.27.271.27h2.173a.27.27 0 0 0 .27-.27v-.845c1.928-.16 3.368-.997 4.192-2.45.793-1.402.49-2.858-.839-3.998ZM6.712 4.014v1.643c-.624-.2-.993-.394-.953-.872.04-.49.51-.69.954-.771Zm2.716 5.875c.458.205.806.42.927.689.069.152.063.326-.016.533-.14.364-.502.553-.912.649V9.889Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.781 8.34c-.84-.665-2.146-1.247-3.354-1.715V4.396a28.48 28.48 0 0 1 2.123.772c.096.04.209.006.265-.082l1.193-1.805a.219.219 0 0 0-.079-.314c-.68-.365-2.072-.93-3.502-1.293V.366a.27.27 0 0 0-.27-.271H6.985a.271.271 0 0 0-.271.271v.973c-2.014.092-3.38.795-4.166 2.147-.616 1.06-.613 2.255.004 3.118.645.922 1.699 1.332 3.031 1.851l.172.066c.309.118.634.239.959.359v2.715c-1.41-.335-2.736-1.023-2.98-1.189a.218.218 0 0 0-.296.048l-1.444 1.883a.211.211 0 0 0-.043.163.22.22 0 0 0 .086.145c.874.648 2.145 1.266 3.403 1.654a12.4 12.4 0 0 0 1.275.316v1.018c0 .148.121.27.271.27h2.173a.27.27 0 0 0 .27-.27v-.845c1.928-.16 3.368-.997 4.192-2.45.793-1.402.49-2.858-.839-3.998ZM6.712 4.014v1.643c-.624-.2-.993-.394-.953-.872.04-.49.51-.69.954-.771Zm2.716 5.875c.458.205.806.42.927.689.069.152.063.326-.016.533-.14.364-.502.553-.912.649V9.889Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(0, 0, 0);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: var(--text-normal, rgb(0, 0, 0));
}

html body .search > .search-container > .search-space {
  background-color: var(--workspace-background-translucent, rgba(255, 255, 255, 0.6));
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px);
}

html body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
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
  background-color: var(--background-modifier-hover, rgba(158, 159, 169, 0.15));
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > input {
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(158, 159, 169, 0.15));
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
  background-color: var(--background-modifier-hover, rgba(158, 159, 169, 0.15));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(0, 0, 0);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(232,
    80%,
    64%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(232,
    80%,
    64%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(232,
    80%,
    64%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(232,
    80%,
    64%, 0.15));
  --pill-color: var(--tag-color, hsl(232, 
    80%, 
    64%));
  --pill-color-hover: var(--tag-color-hover, hsl(232, 
    80%, 
    64%));
  --pill-color-remove: var(--tag-color, hsl(232, 
    80%, 
    64%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(232, 
    80%, 
    64%));
  background-color: var(--pill-background, rgba(90, 109, 237, 0.1));
  border-bottom-color: rgba(90, 109, 237, 0.15);
  border-left-color: rgba(90, 109, 237, 0.15);
  border-right-color: rgba(90, 109, 237, 0.15);
  border-top-color: rgba(90, 109, 237, 0.15);
}

html body a.internal-link.tag-link::before {
  color: rgb(90, 109, 237);
}

html body h1 {
  color: var(--h1-color, rgb(0, 0, 0));
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(0, 0, 0));
}

html body h1::after {
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h1-weight, 700);
  background: rgb(232, 241, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 241, 252);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(0, 0, 0));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 700px;
}

html body h2 {
  color: var(--h2-color, rgb(0, 0, 0));
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgb(0, 0, 0));
}

html body h2::after {
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h2-weight, 680);
  background: rgb(232, 241, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 241, 252);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(0, 0, 0));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 666px;
}

html body h3 {
  color: var(--h3-color, rgb(0, 0, 0));
}

html body h4 {
  color: var(--h4-color, rgb(0, 0, 0));
}

html body h5 {
  color: var(--h5-color, rgb(0, 0, 0));
}

html body h6 {
  color: var(--h6-color, rgb(0, 0, 0));
}

html body hr {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(35, 35, 35));
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(35, 35, 35));
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(0, 0, 0);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: var(--icon-color, rgb(35, 35, 35));
}`,
    footer: `html body footer {
  --icon-color: var(--text-muted, hsl(232, 60%, 50%));
  --icon-color-hover: var(--text-muted, hsl(232, 60%, 50%));
  --status-bar-text-color: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color: var(--text-faint, hsl(232, 60%, 50%));
  --tab-text-color-active: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused-active: var(--text-muted, hsl(232, 60%, 50%));
  --text-faint: var(--on-border, hsl(232, 60%, 50%));
  --text-muted: var(--on-border, hsl(232, 60%, 50%));
  --titlebar-text-color: var(--text-muted, hsl(232, 60%, 50%));
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
  color: var(--status-bar-text-color, rgb(51, 71, 204));
}

html body footer ul li a {
  color: rgb(51, 71, 204);
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
  color: var(--nav-item-color, rgb(35, 35, 35));
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
  color: var(--nav-item-color, rgb(35, 35, 35));
}

html body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html body .darkmode {
  background-color: var(--background-tertiary, rgb(232, 241, 252));
  border-bottom-color: rgb(51, 71, 204);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(51, 71, 204);
  border-right-color: rgb(51, 71, 204);
  border-top-color: rgb(51, 71, 204);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(51, 71, 204));
}

html body .darkmode svg {
  --icon-size: var(--icon-l, 20px);
  color: rgb(51, 71, 204);
  stroke: rgb(51, 71, 204);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: var(--text-muted, rgb(35, 35, 35));
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(158, 159, 169));
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(0, 0, 0));
}

html body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html body .canvas-sidebar {
  border-color: rgb(0, 0, 0);
  box-shadow: var(--input-shadow, rgba(0, 0, 0, 0.18) 4px 4px 8px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px, rgba(0, 0, 0, 0) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0) -3px -3px 3px 0px inset);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(234, 234, 234);
  color: var(--table-header-color, rgb(0, 0, 0));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: var(--text-muted, rgb(35, 35, 35));
}

html body .metadata-properties {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(35, 35, 35);
}

html body .note-properties {
  border-color: rgb(234, 234, 234);
}

html body .note-properties-key {
  color: rgb(35, 35, 35);
}

html body .note-properties-row {
  border-color: rgb(35, 35, 35);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(232,
    80%,
    64%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(232,
    80%,
    64%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(232,
    80%,
    64%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(232,
    80%,
    64%, 0.15));
  --pill-color: var(--tag-color, hsl(232, 
    80%, 
    64%));
  --pill-color-hover: var(--tag-color-hover, hsl(232, 
    80%, 
    64%));
  --pill-color-remove: var(--tag-color, hsl(232, 
    80%, 
    64%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(232, 
    80%, 
    64%));
  background-color: var(--pill-background, rgba(90, 109, 237, 0.1));
  color: var(--pill-color, rgb(90, 109, 237));
}

html body .note-properties-value {
  color: rgb(35, 35, 35);
}

html body div#quartz-root {
  color: var(--text-normal, rgb(0, 0, 0));
}

html body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(0, 0, 0);
}

html body .stacked-page-header {
  --icon-color: var(--text-muted, hsl(232, 60%, 50%));
  --icon-color-hover: var(--text-muted, hsl(232, 60%, 50%));
  --status-bar-text-color: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color: var(--text-faint, hsl(232, 60%, 50%));
  --tab-text-color-active: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused-active: var(--text-muted, hsl(232, 60%, 50%));
  --text-faint: var(--on-border, hsl(232, 60%, 50%));
  --text-muted: var(--on-border, hsl(232, 60%, 50%));
  --titlebar-text-color: var(--text-muted, hsl(232, 60%, 50%));
  background-color: var(--background-tertiary, rgb(232, 241, 252));
}

html body .stacked-page.active {
  border-color: rgb(0, 0, 0);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .navigation-progress {
  --icon-color: var(--text-muted, hsl(232, 60%, 50%));
  --icon-color-hover: var(--text-muted, hsl(232, 60%, 50%));
  --status-bar-text-color: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color: var(--text-faint, hsl(232, 60%, 50%));
  --tab-text-color-active: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused: var(--text-muted, hsl(232, 60%, 50%));
  --tab-text-color-focused-active: var(--text-muted, hsl(232, 60%, 50%));
  --text-faint: var(--on-border, hsl(232, 60%, 50%));
  --text-muted: var(--on-border, hsl(232, 60%, 50%));
  --titlebar-text-color: var(--text-muted, hsl(232, 60%, 50%));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgb(0, 0, 0));
}

html body abbr {
  color: rgb(0, 0, 0);
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
  color: var(--text-normal, rgb(35, 35, 35));
}

html body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  box-shadow: var(--shadow, rgba(0, 0, 0, 0.18) 4px 4px 8px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px, rgba(0, 0, 0, 0) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0) -3px -3px 3px 0px inset);
  color: var(--code-normal, rgb(0, 0, 0));
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
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(90, 109, 237, 0.1));
  border-bottom-color: rgba(90, 109, 237, 0.15);
  border-left-color: rgba(90, 109, 237, 0.15);
  border-right-color: rgba(90, 109, 237, 0.15);
  border-top-color: rgba(90, 109, 237, 0.15);
  color: var(--tag-color, rgb(90, 109, 237));
}`,
  },
};
