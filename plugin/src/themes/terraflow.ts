import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "terraflow",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 15 !important;
  --accent-l: 60% !important;
  --accent-s: 65% !important;
  --background-modifier-active-hover: hsla(15, 65%, 60%, 0.1) !important;
  --background-primary: #282520 !important;
  --background-primary-rgb: 40, 37, 32 !important;
  --background-secondary: #32302a !important;
  --background-secondary-alt: #3a3832 !important;
  --background-secondary-rgb: 50, 48, 42 !important;
  --bases-cards-background: #282520 !important;
  --bases-group-heading-property-color: rgba(232, 220, 198, 0.7) !important;
  --bases-table-cell-background-active: #282520 !important;
  --bases-table-cell-background-selected: hsla(15, 65%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f0916f !important;
  --bases-table-header-background: #282520 !important;
  --bases-table-header-color: rgba(232, 220, 198, 0.7) !important;
  --bases-table-summary-background: #282520 !important;
  --blockquote-border-color: #f0916f !important;
  --border-heavy: 3px !important;
  --border-thick: 2px !important;
  --border-thin: 1px !important;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1) !important;
  --callout-cite: #a29bfe;
  --callout-cite-rgb: 162, 155, 254;
  --callout-danger: #e74c3c;
  --callout-danger-rgb: 231, 76, 60;
  --callout-example: #95b3aa;
  --callout-example-rgb: 149, 179, 170;
  --callout-info: #e9d5a3;
  --callout-info-rgb: 233, 213, 163;
  --callout-note: #f2a882;
  --callout-note-rgb: 242, 168, 130;
  --callout-quote: #e8dcc6;
  --callout-quote-rgb: 232, 220, 198;
  --callout-success: #a8c47a;
  --callout-success-rgb: 168, 196, 122;
  --callout-video: #f2b399;
  --callout-video-rgb: 242, 179, 153;
  --callout-warning: #f39c12;
  --callout-warning-rgb: 243, 156, 18;
  --canvas-background: #282520 !important;
  --caret-color: #e8dcc6 !important;
  --checkbox-border-color-hover: rgba(232, 220, 198, 0.7) !important;
  --checkbox-color: #f0916f !important;
  --checkbox-color-hover: #e27a5a !important;
  --checkbox-marker-color: #282520 !important;
  --checklist-done-color: rgba(232, 220, 198, 0.7) !important;
  --code-background: #3a3832 !important;
  --code-comment: #9c9584 !important;
  --code-function: #f2a882 !important;
  --code-important: #e27a5a !important;
  --code-keyword: #8bb5d9 !important;
  --code-normal: #e8dcc6 !important;
  --code-property: #a8c47a !important;
  --code-punctuation: rgba(232, 220, 198, 0.7) !important;
  --code-string: #b5a8d4 !important;
  --code-tag: #e08ba8 !important;
  --code-value: #95b3aa !important;
  --collapse-icon-color-collapsed: #e27a5a !important;
  --color-accent: hsl(15, 65%, 60%) !important;
  --color-accent-1: hsl(12, 66.3%, 69%) !important;
  --color-accent-2: hsl(10, 68.25%, 77.4%) !important;
  --color-accent-hsl: 15, 65%, 60% !important;
  --dark: #e8dcc6 !important;
  --darkgray: #e8dcc6 !important;
  --depth-1: 0 1px 2px rgba(0, 0, 0, 0.2),
               0 2px 4px rgba(0, 0, 0, 0.15) !important;
  --depth-2: 0 2px 4px rgba(0, 0, 0, 0.25),
               0 4px 8px rgba(0, 0, 0, 0.2),
               0 8px 16px rgba(0, 0, 0, 0.15) !important;
  --depth-3: 0 4px 8px rgba(0, 0, 0, 0.3),
               0 8px 16px rgba(0, 0, 0, 0.25),
               0 16px 32px rgba(0, 0, 0, 0.2) !important;
  --depth-4: 0 8px 16px rgba(0, 0, 0, 0.35),
               0 16px 32px rgba(0, 0, 0, 0.3),
               0 32px 64px rgba(0, 0, 0, 0.25) !important;
  --divider-color: #4a473e88 !important;
  --divider-color-hover: #f0916f !important;
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8) !important;
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5) !important;
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2) !important;
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2) !important;
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3) !important;
  --editor-max-width: 64ch !important;
  --embed-border-start: 2px solid #f0916f !important;
  --emphasis-color: #e27a5a !important;
  --emphasis-color-light: #f2a882 !important;
  --fast: 0.15s ease !important;
  --file-header-background: #282520 !important;
  --file-header-background-focused: #282520 !important;
  --file-line-width: 64ch !important;
  --flair-color: #e8dcc6 !important;
  --footnote-id-color: rgba(232, 220, 198, 0.7) !important;
  --glass-border: rgba(255, 255, 255, 0.2) !important;
  --graph-node: rgba(232, 220, 198, 0.7) !important;
  --graph-node-focused: #e27a5a !important;
  --graph-text: #e8dcc6 !important;
  --gray: rgba(232, 220, 198, 0.7) !important;
  --heading-bg-opacity: .2 !important;
  --heading-pad-x: 0.5em !important;
  --heading-pad-y: 0.2em !important;
  --heading-primary: #f2a882 !important;
  --heading-primary-rgb: 242, 168, 130 !important;
  --heading-quaternary: #a8c47a !important;
  --heading-quaternary-rgb: 168, 196, 122 !important;
  --heading-quinary: #c97a94 !important;
  --heading-quinary-rgb: 201, 122, 148 !important;
  --heading-scale-1: 1.25 !important;
  --heading-scale-2: 1.1 !important;
  --heading-scale-3: 1.0 !important;
  --heading-scale-4: 0.8 !important;
  --heading-scale-5: 0.75 !important;
  --heading-scale-6: 0.6 !important;
  --heading-scale-x-1: 1.6 !important;
  --heading-scale-x-2: 1.5 !important;
  --heading-scale-x-3: 1.5 !important;
  --heading-scale-x-4: 1.2 !important;
  --heading-scale-x-5: 1.2 !important;
  --heading-scale-x-6: 1.1 !important;
  --heading-secondary: #8ba891 !important;
  --heading-secondary-rgb: 139, 168, 145 !important;
  --heading-senary: #95b3aa !important;
  --heading-senary-rgb: 149, 179, 170 !important;
  --heading-tertiary: #b5a8d4 !important;
  --heading-tertiary-rgb: 181, 168, 212 !important;
  --heading-text-multiplier: .85 !important;
  --height-button: 34px !important;
  --height-button-sm: 32px !important;
  --height-input: 38px !important;
  --highlight: hsla(15, 65%, 60%, 0.1) !important;
  --highlight-bg: #3a2f20 !important;
  --highlight-bg-dark: #5a4430 !important;
  --highlight-bg-dark-color: #5a4430 !important;
  --highlight-bg-light-color: #f2c088 !important;
  --icon-color: rgba(232, 220, 198, 0.7) !important;
  --icon-color-active: #e27a5a !important;
  --icon-color-focused: #e8dcc6 !important;
  --icon-color-hover: rgba(232, 220, 198, 0.7) !important;
  --interactive-accent: #f0916f !important;
  --interactive-accent-hover: #e27a5a !important;
  --interactive-accent-hsl: 15, 65%, 60% !important;
  --light: #282520 !important;
  --lightgray: #32302a !important;
  --line-normal: 1.6 !important;
  --line-relaxed: 2.0 !important;
  --line-tight: 1.5 !important;
  --link-color: #f0916f !important;
  --link-color-hover: #e27a5a !important;
  --link-external-color: #e27a5a !important;
  --link-external-color-hover: hsl(10, 68.25%, 77.4%) !important;
  --link-opacity-hover: .18 !important;
  --link-opacity-normal: .1 !important;
  --link-opacity-unresolved: .05 !important;
  --link-opacity-unresolved-hover: .12 !important;
  --link-unresolved-color: #f0916f !important;
  --link-unresolved-decoration-color: hsla(15, 65%, 60%, 0.3) !important;
  --list-marker-color-collapsed: #e27a5a !important;
  --list-marker-color-hover: rgba(232, 220, 198, 0.7) !important;
  --menu-background: #32302a !important;
  --metadata-input-text-color: #e8dcc6 !important;
  --metadata-label-text-color: rgba(232, 220, 198, 0.7) !important;
  --metadata-label-text-color-hover: rgba(232, 220, 198, 0.7) !important;
  --modal-background: #282520 !important;
  --nav-heading-color: #e8dcc6 !important;
  --nav-heading-color-collapsed-hover: rgba(232, 220, 198, 0.7) !important;
  --nav-heading-color-hover: #e8dcc6 !important;
  --nav-item-background-selected: hsla(15, 65%, 60%, 0.15) !important;
  --nav-item-color: rgba(232, 220, 198, 0.7) !important;
  --nav-item-color-active: #e8dcc6 !important;
  --nav-item-color-highlighted: #e27a5a !important;
  --nav-item-color-hover: #e8dcc6 !important;
  --nav-item-color-selected: #e8dcc6 !important;
  --nav-tag-color-active: rgba(232, 220, 198, 0.7) !important;
  --nav-tag-color-hover: rgba(232, 220, 198, 0.7) !important;
  --normal: 0.25s ease !important;
  --opacity-active: 0.12 !important;
  --opacity-border: 0.45 !important;
  --opacity-divider: 0.15 !important;
  --opacity-hover: 0.08 !important;
  --opacity-light-overlay: 0.3 !important;
  --opacity-overlay: 0.2 !important;
  --opacity-subtle: 0.1 !important;
  --outline-item-spacing: .5em !important;
  --pdf-background: #282520 !important;
  --pdf-page-background: #282520 !important;
  --pdf-sidebar-background: #282520 !important;
  --pill-color: rgba(232, 220, 198, 0.7) !important;
  --pill-color-hover: #e8dcc6 !important;
  --pill-color-remove-hover: #e27a5a !important;
  --primary-color: #f0916f !important;
  --primary-color-dark: #e27a5a !important;
  --primary-color-rgb: 240, 145, 111 !important;
  --prompt-background: #282520 !important;
  --r1: 6px !important;
  --r2: 10px !important;
  --r3: 12px !important;
  --r4: 16px !important;
  --radius-pill: 100px !important;
  --reading-max-width: 64ch !important;
  --ribbon-background: #32302a !important;
  --ribbon-background-collapsed: #282520 !important;
  --s1: 4px !important;
  --s2: 8px !important;
  --s3: 12px !important;
  --s4: 16px !important;
  --s6: 24px !important;
  --s8: 32px !important;
  --scrollbar-thumb: rgba(240, 145, 111, 0.35) !important;
  --scrollbar-track: rgba(40, 37, 32, 0.2) !important;
  --search-clear-button-color: rgba(232, 220, 198, 0.7) !important;
  --search-icon-color: rgba(232, 220, 198, 0.7) !important;
  --search-result-background: #282520 !important;
  --secondary: #e27a5a !important;
  --setting-group-heading-color: #e8dcc6 !important;
  --setting-items-background: #32302a !important;
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
  --shadow-3: 0 6px 18px rgba(0, 0, 0, 0.15) !important;
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12) !important;
  --slow: 0.3s ease !important;
  --squircle-btn: 40% !important;
  --squircle-main: 60% !important;
  --squircle-soft: 80% !important;
  --status-bar-background: #32302a !important;
  --status-bar-border-color: #4a473e88 !important;
  --status-bar-text-color: rgba(232, 220, 198, 0.7) !important;
  --suggestion-background: #282520 !important;
  --surface-accent: #4a473e !important;
  --surface-accent-rgb: 74, 71, 62 !important;
  --surface-dark: #282520 !important;
  --surface-dark-rgb: 40, 37, 32 !important;
  --tab-background-active: #282520 !important;
  --tab-bg-inactive: rgba(40, 37, 32, 0.15) !important;
  --tab-bg-inactive-hover: rgba(40, 37, 32, 0.25) !important;
  --tab-container-background: #32302a !important;
  --tab-outline-color: #4a473e88 !important;
  --tab-switcher-background: #32302a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #32302a, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(15, 65%, 60%) !important;
  --tab-text-color-active: rgba(232, 220, 198, 0.7) !important;
  --tab-text-color-focused: rgba(232, 220, 198, 0.7) !important;
  --tab-text-color-focused-active: rgba(232, 220, 198, 0.7) !important;
  --tab-text-color-focused-active-current: #e8dcc6 !important;
  --tab-text-color-focused-highlighted: #e27a5a !important;
  --table-drag-handle-background-active: #f0916f !important;
  --table-header-color: #e8dcc6 !important;
  --table-selection: hsla(15, 65%, 60%, 0.1) !important;
  --table-selection-border-color: #f0916f !important;
  --tag-background: hsla(15, 65%, 60%, 0.1) !important;
  --tag-background-hover: hsla(15, 65%, 60%, 0.2) !important;
  --tag-border-color: hsla(15, 65%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(15, 65%, 60%, 0.15) !important;
  --tag-color: #e27a5a !important;
  --tag-color-hover: #e27a5a !important;
  --tertiary: hsl(10, 68.25%, 77.4%) !important;
  --text-accent: #e27a5a !important;
  --text-accent-hover: hsl(10, 68.25%, 77.4%) !important;
  --text-muted: rgba(232, 220, 198, 0.7) !important;
  --text-normal: #e8dcc6 !important;
  --text-normal-rgb: 232, 220, 198 !important;
  --text-selection: #4a3d2e !important;
  --textHighlight: hsla(15, 65%, 60%, 0.1) !important;
  --theme-folder-opacity: .12 !important;
  --titlebar-background: #32302a !important;
  --titlebar-background-focused: #3a3832 !important;
  --titlebar-text-color: rgba(232, 220, 198, 0.7) !important;
  --titlebar-text-color-focused: #e8dcc6 !important;
  --transition-bounce: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5) !important;
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s !important;
  --transition-depth: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2), transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2) !important;
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  --vault-profile-color: #e8dcc6 !important;
  --vault-profile-color-hover: #e8dcc6 !important;
  --weight-bold: 700 !important;
  --weight-medium: 500 !important;
  --weight-normal: 400 !important;
  --weight-semibold: 600 !important;
  --whimsy-fast: 0.25s !important;
  --whimsy-micro: 0.15s !important;
  --whimsy-normal: 0.35s !important;
  --whimsy-scale-emphasis: 1.1 !important;
  --whimsy-scale-normal: 1.05 !important;
  --whimsy-scale-pop: 1.15 !important;
  --whimsy-scale-subtle: 1.02 !important;
  --whimsy-slow: 0.5s !important;
  --whimsy-stagger-base: 0.03s !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 37, 32);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(226, 122, 90);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(50, 48, 42);
  border-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgba(240, 145, 111, 0.05);
  border-color: rgba(240, 145, 111, 0.15);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(240, 145, 111, 0.18);
  border-radius: 8px;
  color: rgb(226, 122, 90);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(74, 71, 62, 0.533);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(74, 71, 62, 0.533);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 37, 32);
  color: rgb(232, 220, 198);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(242, 168, 130);
  font-weight: 700;
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(242, 168, 130);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(242, 168, 130);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(242, 168, 130);
  font-weight: 700;
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(90, 68, 48);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
  color: rgb(242, 192, 136);
  outline: rgb(242, 192, 136) none 0px;
  text-decoration-color: rgb(242, 192, 136);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="dark"] body del {
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: strike-draw;
  color: rgb(242, 168, 130);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body footer {
  opacity: 0.5;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(232, 220, 198);
  font-weight: 500;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(226, 122, 90);
  border-radius: 6px;
  border-width: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(226, 122, 90);
  border-color: rgb(226, 122, 90);
}

html[saved-theme="dark"] body p {
  color: rgba(232, 220, 198, 0.7);
  outline: rgba(232, 220, 198, 0.7) none 0px;
  text-decoration-color: rgba(232, 220, 198, 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  background-color: rgba(240, 145, 111, 0.08);
  color: rgb(240, 145, 111);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration-color: rgb(240, 145, 111);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(240, 145, 111, 0.08);
  color: rgb(240, 145, 111);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration-color: rgb(240, 145, 111);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="dark"] body a.internal.broken {
  background-color: rgba(240, 145, 111, 0.08);
  color: rgb(240, 145, 111);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration-color: rgb(240, 145, 111);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body dt {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(240, 145, 111);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(50, 48, 42, 0.8);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(232, 220, 198);
  width: 241.219px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}

html[saved-theme="dark"] body td {
  border-top-color: rgb(232, 220, 198);
  border-top-width: 0px;
  color: rgb(232, 220, 198);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(226, 122, 90);
  border-top-left-radius: 12px;
  color: rgb(232, 220, 198);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 168, 130);
  border-left-color: rgb(242, 168, 130);
  border-right-color: rgb(242, 168, 130);
  border-top-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(232, 220, 198);
  border-radius: 12px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(226, 122, 90);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(226, 122, 90);
  border-left-width: 2px;
  border-right-color: rgb(226, 122, 90);
  border-right-width: 2px;
  border-top-color: rgb(226, 122, 90);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 18px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: color(srgb 0.984041 0.906701 0.874783);
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: color(srgb 0.984041 0.906701 0.874783);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: #95b3aa;
  background-color: rgba(149, 179, 170, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(149, 179, 170);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: #e9d5a3;
  background-color: rgba(233, 213, 163, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(233, 213, 163);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: #f2a882;
  background-color: rgba(242, 168, 130, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(242, 168, 130);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: #f39c12;
  background-color: rgba(243, 156, 18, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(243, 156, 18);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: #95b3aa;
  background-color: rgba(149, 179, 170, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(149, 179, 170);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: #f39c12;
  background-color: rgba(243, 156, 18, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(243, 156, 18);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
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

html[saved-theme="dark"] body .callout[data-callout="video"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5'/%3E%3Crect x='2' y='6' width='14' height='12' rx='2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px 0px, rgba(0, 0, 0, 0.5) 0px 12px 48px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(232, 220, 198);
  outline: rgb(232, 220, 198) none 0px;
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 145, 111);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(240, 145, 111);
  border-top-color: rgb(240, 145, 111);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(240, 145, 111);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(240, 145, 111, 0.2);
  color: rgb(240, 145, 111);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 48, 42);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(240, 145, 111, 0.2);
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(240, 145, 111);
  border-top-color: rgb(240, 145, 111);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(240, 145, 111);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(240, 145, 111, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(240, 145, 111);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(240, 145, 111, 0.18);
  border-bottom-color: rgba(219, 120, 87, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body h1 {
  color: color(srgb 0.928406 0.52087 0.311594);
}

html[saved-theme="dark"] body h2 {
  color: color(srgb 0.441905 0.581429 0.470772);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(240, 145, 111);
}

html[saved-theme="dark"] body h3 {
  color: color(srgb 0.582564 0.509231 0.757436);
}

html[saved-theme="dark"] body h4 {
  color: color(srgb 0.574063 0.711146 0.348854);
}

html[saved-theme="dark"] body h5 {
  color: color(srgb 0.733369 0.343298 0.471676);
}

html[saved-theme="dark"] body h6 {
  color: color(srgb 0.471941 0.621392 0.576557);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(74, 71, 62, 0.533);
  border-left-color: rgba(74, 71, 62, 0.533);
  border-right-color: rgba(74, 71, 62, 0.533);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: #f2a882;
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(242, 168, 130);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 168, 145);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 168, 145);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(232, 220, 198);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(232, 220, 198, 0.7);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(240, 145, 111, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 0px;
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: rgba(139, 168, 145, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 168, 145);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 168, 145);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: rgba(139, 168, 145, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(139, 168, 145);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 168, 145);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(232, 220, 198, 0.7);
  stroke: rgba(232, 220, 198, 0.7);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  color: rgba(232, 220, 198, 0.7);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgba(240, 145, 111, 0.05);
  border-bottom-color: rgba(240, 145, 111, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(240, 145, 111, 0.15);
  border-right-color: rgba(240, 145, 111, 0.15);
  border-top-color: rgba(240, 145, 111, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgba(232, 220, 198, 0.7);
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(240, 145, 111, 0.2);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(232, 220, 198);
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-style: solid;
  border-left-color: rgb(232, 220, 198);
  border-left-style: solid;
  border-right-color: rgb(232, 220, 198);
  border-right-style: solid;
  border-top-color: rgb(232, 220, 198);
  border-top-style: solid;
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body sub {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body summary {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body sup {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(240, 145, 111, 0.08);
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(240, 145, 111);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 15 !important;
  --accent-l: 60% !important;
  --accent-s: 65% !important;
  --background-modifier-active-hover: hsla(15, 65%, 60%, 0.1) !important;
  --background-primary: #eeece2 !important;
  --background-primary-rgb: 238, 236, 226 !important;
  --background-secondary: #e6e4da !important;
  --background-secondary-alt: #dfdbd1 !important;
  --background-secondary-rgb: 230, 228, 218 !important;
  --bases-cards-background: #eeece2 !important;
  --bases-group-heading-property-color: rgba(61, 46, 26, 0.7) !important;
  --bases-table-cell-background-active: #eeece2 !important;
  --bases-table-cell-background-selected: hsla(15, 65%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d97756 !important;
  --bases-table-header-background: #eeece2 !important;
  --bases-table-header-color: rgba(61, 46, 26, 0.7) !important;
  --bases-table-summary-background: #eeece2 !important;
  --blockquote-border-color: #d97756 !important;
  --blur-background: color-mix(in srgb, #eeece2 65%, transparent) linear-gradient(#eeece2, color-mix(in srgb, #eeece2 65%, transparent)) !important;
  --border-heavy: 3px !important;
  --border-thick: 2px !important;
  --border-thin: 1px !important;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1) !important;
  --callout-cite: #573d84;
  --callout-cite-rgb: 87, 61, 132;
  --callout-danger: #c0392b;
  --callout-danger-rgb: 192, 57, 43;
  --callout-example: #779088;
  --callout-example-rgb: 119, 144, 136;
  --callout-info: #d4af37;
  --callout-info-rgb: 212, 175, 55;
  --callout-note: #d97756;
  --callout-note-rgb: 217, 119, 86;
  --callout-quote: #b0a483;
  --callout-quote-rgb: 176, 164, 131;
  --callout-success: #798d5d;
  --callout-success-rgb: 121, 141, 93;
  --callout-video: #a67c52;
  --callout-video-rgb: 166, 124, 82;
  --callout-warning: #e67e22;
  --callout-warning-rgb: 230, 126, 34;
  --canvas-background: #eeece2 !important;
  --caret-color: #3d2e1a !important;
  --checkbox-border-color-hover: rgba(61, 46, 26, 0.7) !important;
  --checkbox-color: #d97756 !important;
  --checkbox-color-hover: #ae4e36 !important;
  --checkbox-marker-color: #eeece2 !important;
  --checklist-done-color: rgba(61, 46, 26, 0.7) !important;
  --code-background: #f5efe0 !important;
  --code-comment: #707592 !important;
  --code-function: #d97756 !important;
  --code-important: #ae4e36 !important;
  --code-keyword: #6a97bb !important;
  --code-normal: #3d2e1a !important;
  --code-property: #798d5d !important;
  --code-punctuation: rgba(61, 46, 26, 0.7) !important;
  --code-string: #8f8ca6 !important;
  --code-tag: #c36686 !important;
  --code-value: #779088 !important;
  --collapse-icon-color-collapsed: #ae4e36 !important;
  --color-accent: hsl(15, 65%, 60%) !important;
  --color-accent-1: hsl(14, 65.65%, 64.5%) !important;
  --color-accent-2: hsl(12, 66.3%, 69%) !important;
  --color-accent-hsl: 15, 65%, 60% !important;
  --dark: #3d2e1a !important;
  --darkgray: #3d2e1a !important;
  --depth-1: 0 1px 2px rgba(0, 0, 0, 0.05),
               0 2px 4px rgba(0, 0, 0, 0.03) !important;
  --depth-2: 0 2px 4px rgba(0, 0, 0, 0.06),
               0 4px 8px rgba(0, 0, 0, 0.04),
               0 8px 16px rgba(0, 0, 0, 0.02) !important;
  --depth-3: 0 4px 8px rgba(0, 0, 0, 0.08),
               0 8px 16px rgba(0, 0, 0, 0.06),
               0 16px 32px rgba(0, 0, 0, 0.04) !important;
  --depth-4: 0 8px 16px rgba(0, 0, 0, 0.1),
               0 16px 32px rgba(0, 0, 0, 0.08),
               0 32px 64px rgba(0, 0, 0, 0.06) !important;
  --divider-color: #d2cfc588 !important;
  --divider-color-hover: #d97756 !important;
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8) !important;
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5) !important;
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2) !important;
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2) !important;
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3) !important;
  --editor-max-width: 64ch !important;
  --embed-border-start: 2px solid #d97756 !important;
  --emphasis-color: #ae4e36 !important;
  --emphasis-color-light: #d97756 !important;
  --fast: 0.15s ease !important;
  --file-header-background: #eeece2 !important;
  --file-header-background-focused: #eeece2 !important;
  --file-line-width: 64ch !important;
  --flair-color: #3d2e1a !important;
  --footnote-id-color: rgba(61, 46, 26, 0.7) !important;
  --glass-border: rgba(255, 255, 255, 0.2) !important;
  --graph-node: rgba(61, 46, 26, 0.7) !important;
  --graph-node-focused: #ae4e36 !important;
  --graph-text: #3d2e1a !important;
  --gray: rgba(61, 46, 26, 0.7) !important;
  --heading-bg-opacity: .2 !important;
  --heading-pad-x: 0.5em !important;
  --heading-pad-y: 0.2em !important;
  --heading-primary: #d97756 !important;
  --heading-primary-rgb: 217, 119, 86 !important;
  --heading-quaternary: #798d5d !important;
  --heading-quaternary-rgb: 121, 141, 93 !important;
  --heading-quinary: #c36686 !important;
  --heading-quinary-rgb: 195, 102, 134 !important;
  --heading-scale-1: 1.25 !important;
  --heading-scale-2: 1.1 !important;
  --heading-scale-3: 1.0 !important;
  --heading-scale-4: 0.8 !important;
  --heading-scale-5: 0.75 !important;
  --heading-scale-6: 0.6 !important;
  --heading-scale-x-1: 1.6 !important;
  --heading-scale-x-2: 1.5 !important;
  --heading-scale-x-3: 1.5 !important;
  --heading-scale-x-4: 1.2 !important;
  --heading-scale-x-5: 1.2 !important;
  --heading-scale-x-6: 1.1 !important;
  --heading-secondary: #b8692c !important;
  --heading-secondary-rgb: 184, 105, 44 !important;
  --heading-senary: #779088 !important;
  --heading-senary-rgb: 119, 144, 136 !important;
  --heading-tertiary: #9a863c !important;
  --heading-tertiary-rgb: 154, 134, 60 !important;
  --heading-text-multiplier: .85 !important;
  --height-button: 34px !important;
  --height-button-sm: 32px !important;
  --height-input: 38px !important;
  --highlight: hsla(15, 65%, 60%, 0.1) !important;
  --highlight-bg: #d6b07b !important;
  --highlight-bg-dark: #c9a772 !important;
  --highlight-bg-dark-color: #2d1f0e !important;
  --highlight-bg-rgb: 232, 200, 154 !important;
  --icon-color: rgba(61, 46, 26, 0.7) !important;
  --icon-color-active: #ae4e36 !important;
  --icon-color-focused: #3d2e1a !important;
  --icon-color-hover: rgba(61, 46, 26, 0.7) !important;
  --interactive-accent: #d97756 !important;
  --interactive-accent-hover: #ae4e36 !important;
  --interactive-accent-hsl: 15, 65%, 60% !important;
  --light: #eeece2 !important;
  --lightgray: #e6e4da !important;
  --line-normal: 1.6 !important;
  --line-relaxed: 2.0 !important;
  --line-tight: 1.5 !important;
  --link-color: #d97756 !important;
  --link-color-hover: #ae4e36 !important;
  --link-external-color: #ae4e36 !important;
  --link-external-color-hover: hsl(12, 66.3%, 69%) !important;
  --link-opacity-hover: .18 !important;
  --link-opacity-normal: .1 !important;
  --link-opacity-unresolved: .05 !important;
  --link-opacity-unresolved-hover: .12 !important;
  --link-unresolved-color: #d97756 !important;
  --link-unresolved-decoration-color: hsla(15, 65%, 60%, 0.3) !important;
  --list-marker-color-collapsed: #ae4e36 !important;
  --list-marker-color-hover: rgba(61, 46, 26, 0.7) !important;
  --menu-background: #e6e4da !important;
  --metadata-input-text-color: #3d2e1a !important;
  --metadata-label-text-color: rgba(61, 46, 26, 0.7) !important;
  --metadata-label-text-color-hover: rgba(61, 46, 26, 0.7) !important;
  --modal-background: #eeece2 !important;
  --nav-heading-color: #3d2e1a !important;
  --nav-heading-color-collapsed-hover: rgba(61, 46, 26, 0.7) !important;
  --nav-heading-color-hover: #3d2e1a !important;
  --nav-item-background-selected: hsla(15, 65%, 60%, 0.15) !important;
  --nav-item-color: rgba(61, 46, 26, 0.7) !important;
  --nav-item-color-active: #3d2e1a !important;
  --nav-item-color-highlighted: #ae4e36 !important;
  --nav-item-color-hover: #3d2e1a !important;
  --nav-item-color-selected: #3d2e1a !important;
  --nav-tag-color-active: rgba(61, 46, 26, 0.7) !important;
  --nav-tag-color-hover: rgba(61, 46, 26, 0.7) !important;
  --normal: 0.25s ease !important;
  --opacity-active: 0.12 !important;
  --opacity-border: 0.45 !important;
  --opacity-divider: 0.15 !important;
  --opacity-hover: 0.08 !important;
  --opacity-light-overlay: 0.3 !important;
  --opacity-overlay: 0.2 !important;
  --opacity-subtle: 0.1 !important;
  --outline-item-spacing: .5em !important;
  --pdf-background: #eeece2 !important;
  --pdf-page-background: #eeece2 !important;
  --pdf-sidebar-background: #eeece2 !important;
  --pill-color: rgba(61, 46, 26, 0.7) !important;
  --pill-color-hover: #3d2e1a !important;
  --pill-color-remove-hover: #ae4e36 !important;
  --primary-color: #d97756 !important;
  --primary-color-dark: #ae4e36 !important;
  --primary-color-rgb: 217, 119, 86 !important;
  --prompt-background: #eeece2 !important;
  --r1: 6px !important;
  --r2: 10px !important;
  --r3: 12px !important;
  --r4: 16px !important;
  --radius-pill: 100px !important;
  --raised-background: color-mix(in srgb, #eeece2 65%, transparent) linear-gradient(#eeece2, color-mix(in srgb, #eeece2 65%, transparent)) !important;
  --reading-max-width: 64ch !important;
  --ribbon-background: #e6e4da !important;
  --ribbon-background-collapsed: #eeece2 !important;
  --s1: 4px !important;
  --s2: 8px !important;
  --s3: 12px !important;
  --s4: 16px !important;
  --s6: 24px !important;
  --s8: 32px !important;
  --scrollbar-thumb: rgba(217, 119, 86, 0.35) !important;
  --scrollbar-track: rgba(245, 239, 224, 0.2) !important;
  --search-clear-button-color: rgba(61, 46, 26, 0.7) !important;
  --search-icon-color: rgba(61, 46, 26, 0.7) !important;
  --search-result-background: #eeece2 !important;
  --secondary: #ae4e36 !important;
  --setting-group-heading-color: #3d2e1a !important;
  --setting-items-background: #e6e4da !important;
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
  --shadow-3: 0 6px 18px rgba(0, 0, 0, 0.15) !important;
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12) !important;
  --slow: 0.3s ease !important;
  --squircle-btn: 40% !important;
  --squircle-main: 60% !important;
  --squircle-soft: 80% !important;
  --status-bar-background: #e6e4da !important;
  --status-bar-border-color: #d2cfc588 !important;
  --status-bar-text-color: rgba(61, 46, 26, 0.7) !important;
  --suggestion-background: #eeece2 !important;
  --surface-accent: #e8e6dc !important;
  --surface-accent-rgb: 232, 230, 220 !important;
  --surface-dark: #36342e !important;
  --surface-dark-rgb: 54, 52, 46 !important;
  --tab-background-active: #eeece2 !important;
  --tab-bg-inactive: rgba(245, 239, 224, 0.15) !important;
  --tab-bg-inactive-hover: rgba(245, 239, 224, 0.25) !important;
  --tab-container-background: #e6e4da !important;
  --tab-outline-color: #d2cfc588 !important;
  --tab-switcher-background: #e6e4da !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e6e4da, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(15, 65%, 60%) !important;
  --tab-text-color-active: rgba(61, 46, 26, 0.7) !important;
  --tab-text-color-focused: rgba(61, 46, 26, 0.7) !important;
  --tab-text-color-focused-active: rgba(61, 46, 26, 0.7) !important;
  --tab-text-color-focused-active-current: #3d2e1a !important;
  --tab-text-color-focused-highlighted: #ae4e36 !important;
  --table-drag-handle-background-active: #d97756 !important;
  --table-header-color: #3d2e1a !important;
  --table-selection: hsla(15, 65%, 60%, 0.1) !important;
  --table-selection-border-color: #d97756 !important;
  --tag-background: hsla(15, 65%, 60%, 0.1) !important;
  --tag-background-hover: hsla(15, 65%, 60%, 0.2) !important;
  --tag-border-color: hsla(15, 65%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(15, 65%, 60%, 0.15) !important;
  --tag-color: #ae4e36 !important;
  --tag-color-hover: #ae4e36 !important;
  --tertiary: hsl(12, 66.3%, 69%) !important;
  --text-accent: #ae4e36 !important;
  --text-accent-hover: hsl(12, 66.3%, 69%) !important;
  --text-muted: rgba(61, 46, 26, 0.7) !important;
  --text-normal: #3d2e1a !important;
  --text-normal-rgb: 61, 46, 26 !important;
  --text-selection: #f0e0d0 !important;
  --textHighlight: hsla(15, 65%, 60%, 0.1) !important;
  --theme-folder-opacity: .12 !important;
  --titlebar-background: #e6e4da !important;
  --titlebar-background-focused: #dfdbd1 !important;
  --titlebar-text-color: rgba(61, 46, 26, 0.7) !important;
  --titlebar-text-color-focused: #3d2e1a !important;
  --transition-bounce: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5) !important;
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s !important;
  --transition-depth: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2), transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2) !important;
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  --vault-profile-color: #3d2e1a !important;
  --vault-profile-color-hover: #3d2e1a !important;
  --weight-bold: 700 !important;
  --weight-medium: 500 !important;
  --weight-normal: 400 !important;
  --weight-semibold: 600 !important;
  --whimsy-fast: 0.25s !important;
  --whimsy-micro: 0.15s !important;
  --whimsy-normal: 0.35s !important;
  --whimsy-scale-emphasis: 1.1 !important;
  --whimsy-scale-normal: 1.05 !important;
  --whimsy-scale-pop: 1.15 !important;
  --whimsy-scale-subtle: 1.02 !important;
  --whimsy-slow: 0.5s !important;
  --whimsy-stagger-base: 0.03s !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(238, 236, 226);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(174, 78, 54);
  color: rgb(238, 236, 226);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(238, 236, 226);
  border-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgba(230, 228, 218, 0.7);
  border-color: rgba(61, 46, 26, 0.7);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(217, 119, 86, 0.15);
  border-radius: 8px;
  color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(210, 207, 197, 0.533);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(210, 207, 197, 0.533);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(238, 236, 226);
  color: rgb(61, 46, 26);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(174, 78, 54);
  font-weight: 700;
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(174, 78, 54);
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(174, 78, 54);
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(174, 78, 54);
  font-weight: 700;
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(214, 176, 123);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  color: rgb(45, 31, 14);
  outline: rgb(45, 31, 14) none 0px;
  text-decoration-color: rgb(45, 31, 14);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="light"] body del {
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: strike-draw;
  color: rgb(61, 46, 26);
  outline: rgb(61, 46, 26) none 0px;
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body footer {
  opacity: 0.5;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(174, 78, 54);
  border-radius: 6px;
  border-width: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(174, 78, 54);
  border-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body p {
  color: rgba(61, 46, 26, 0.7);
  outline: rgba(61, 46, 26, 0.7) none 0px;
  text-decoration-color: rgba(61, 46, 26, 0.7);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  background-color: rgba(217, 119, 86, 0.08);
  color: rgb(217, 119, 86);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration-color: rgb(217, 119, 86);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(217, 119, 86, 0.08);
  color: rgb(217, 119, 86);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration-color: rgb(217, 119, 86);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="light"] body a.internal.broken {
  background-color: rgba(217, 119, 86, 0.08);
  color: rgb(217, 119, 86);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration-color: rgb(217, 119, 86);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body dt {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(217, 119, 86);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(230, 228, 218, 0.7);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(61, 46, 26);
  width: 241.219px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.03);
}

html[saved-theme="light"] body td {
  border-top-color: rgb(61, 46, 26);
  border-top-width: 0px;
  color: rgb(61, 46, 26);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  background-color: rgb(174, 78, 54);
  border-top-left-radius: 12px;
  color: rgb(238, 236, 226);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(217, 119, 86);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(217, 119, 86);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(217, 119, 86);
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(61, 46, 26);
  border-radius: 12px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(174, 78, 54);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(174, 78, 54);
  border-left-width: 2px;
  border-right-color: rgb(174, 78, 54);
  border-right-width: 2px;
  border-top-color: rgb(174, 78, 54);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 18px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: color(srgb 0.455686 0.340392 0.225098);
  gap: 13.2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: color(srgb 0.455686 0.340392 0.225098);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: #c0392b;
  background-color: rgba(192, 57, 43, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: #c0392b;
  background-color: rgba(192, 57, 43, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: #779088;
  background-color: rgba(119, 144, 136, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(119, 144, 136);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: #c0392b;
  background-color: rgba(192, 57, 43, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: #d4af37;
  background-color: rgba(212, 175, 55, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(212, 175, 55);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: #d97756;
  background-color: rgba(217, 119, 86, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: #e67e22;
  background-color: rgba(230, 126, 34, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(230, 126, 34);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: #779088;
  background-color: rgba(119, 144, 136, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(119, 144, 136);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: #e67e22;
  background-color: rgba(230, 126, 34, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(230, 126, 34);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
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

html[saved-theme="light"] body .callout[data-callout="video"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5'/%3E%3Crect x='2' y='6' width='14' height='12' rx='2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(238, 236, 226, 0.94);
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.08);
  border-right-color: rgba(0, 0, 0, 0.08);
  border-top-color: rgba(0, 0, 0, 0.08);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px 0px, rgba(0, 0, 0, 0.2) 0px 12px 48px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(61, 46, 26);
  outline: rgb(61, 46, 26) none 0px;
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 119, 86);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(217, 119, 86);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(217, 119, 86, 0.15);
  color: rgb(217, 119, 86);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.08);
  border-right-color: rgba(0, 0, 0, 0.08);
  border-top-color: rgba(0, 0, 0, 0.08);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 228, 218);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(217, 119, 86, 0.15);
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(217, 119, 86);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(217, 119, 86);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(217, 119, 86, 0.15);
  border-bottom-color: rgba(219, 120, 87, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body h1 {
  color: color(srgb 0.818261 0.349565 0.191739);
}

html[saved-theme="light"] body h2 {
  color: color(srgb 0.613333 0.35 0.146667);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(217, 119, 86);
}

html[saved-theme="light"] body h3 {
  color: color(srgb 0.513333 0.446667 0.2);
}

html[saved-theme="light"] body h4 {
  color: color(srgb 0.403333 0.47 0.31);
}

html[saved-theme="light"] body h5 {
  color: color(srgb 0.711127 0.278873 0.427606);
}

html[saved-theme="light"] body h6 {
  color: color(srgb 0.393968 0.482699 0.454305);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(210, 207, 197, 0.533);
  border-left-color: rgba(210, 207, 197, 0.533);
  border-right-color: rgba(210, 207, 197, 0.533);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: #d97756;
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 105, 44);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 105, 44);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(61, 46, 26);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(61, 46, 26, 0.7);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(217, 119, 86, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 0px;
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: rgba(184, 105, 44, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 105, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 105, 44);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: rgba(184, 105, 44, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(184, 105, 44);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 105, 44);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(61, 46, 26, 0.7);
  stroke: rgba(61, 46, 26, 0.7);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  color: rgba(61, 46, 26, 0.7);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .metadata {
  background-color: rgba(230, 228, 218, 0.7);
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgba(61, 46, 26, 0.7);
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(217, 119, 86, 0.2);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body abbr {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 239, 224);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-style: solid;
  border-left-color: rgb(61, 46, 26);
  border-left-style: solid;
  border-right-color: rgb(61, 46, 26);
  border-right-style: solid;
  border-top-color: rgb(61, 46, 26);
  border-top-style: solid;
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body summary {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(217, 119, 86, 0.08);
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(217, 119, 86);
}`,
  },
  extras: `@keyframes whimsy-modal-open {
  0% {
    transform: translateY(18px) scale(0.99);
  }
  65% {
    transform: translateY(-1px) scale(1.01);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes whimsy-settle-bounce {
  0% {
    transform: scaleY(1.05);
  }
  60% {
    transform: scaleY(0.98);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes whimsy-collapse-bounce {
  0% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(1.06);
  }
  100% {
    transform: scaleY(0.92);
  }
}

@keyframes whimsy-notice-in {
  0% {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes whimsy-float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-4px) rotate(-0.5deg);
  }
  50% {
    transform: translateY(8px) rotate(0.5deg);
  }
  75% {
    transform: translateY(-2px) rotate(-0.3deg);
  }
}

@keyframes whimsy-callout-icon-bounce {
  0% {
    transform: scale(0.4) rotate(-15deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.15) rotate(5deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

@keyframes whimsy-checkbox-pop {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes whimsy-jelly {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.95, 1.05);
  }
  50% {
    transform: scale(1.05, 0.95);
  }
  75% {
    transform: scale(0.98, 1.02);
  }
  100% {
    transform: scale(1, 1);
  }
}

@keyframes whimsy-wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-3deg);
  }
  40% {
    transform: rotate(3deg);
  }
  60% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(2deg);
  }
}

@keyframes whimsy-slide-in-right {
  0% {
    transform: translateX(30px) scale(0.95);
    opacity: 0;
  }
  70% {
    transform: translateX(-5px) scale(1.02);
    opacity: 1;
  }
  100% {
    transform: translateX(0) scale(1);
  }
}

.modal-container {
  animation: whimsy-modal-open 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.callout:not(.is-collapsed) {
  animation: whimsy-settle-bounce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: top center;
}

.callout.is-collapsed {
  animation: whimsy-collapse-bounce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)
    forwards;
  transform-origin: top center;
}

.callout .callout-icon {
  animation: whimsy-callout-icon-bounce 0.35s cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
  transform-origin: center center;
}

.notice-container {
  animation: whimsy-notice-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: top center;
}
`,
};
