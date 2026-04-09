import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "robsi",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: hsl(202, 100%, 75%) !important;
  --accent-h: 202 !important;
  --accent-l: 75% !important;
  --accent-s: 100% !important;
  --background-modifier: rgba(25, 25, 25, 0.5) !important;
  --background-modifier-active-hover: rgb(25, 25, 25) !important;
  --background-modifier-border: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-cover: rgba(8, 8, 8, 0.8) !important;
  --background-modifier-error: rgb(255, 117, 127) !important;
  --background-modifier-error-hover: rgb(255, 117, 127) !important;
  --background-modifier-form-field: transparent !important;
  --background-modifier-form-field-highlighted: rgb(8, 8, 8) !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: rgba(25, 25, 25, 0.7) !important;
  --background-modifier-hover-rgb: 25, 25, 25 !important;
  --background-modifier-message: rgba(25, 25, 25, 0.9) !important;
  --background-modifier-success: rgb(158, 206, 106) !important;
  --background-primary: #020202 !important;
  --background-primary-alt: rgb(15, 15, 15) !important;
  --background-primary-rgb: 15, 15, 15 !important;
  --background-secondary: #020202 !important;
  --background-secondary-alt: rgb(8, 8, 8) !important;
  --background-secondary-rgb: 8, 8, 8 !important;
  --bases-cards-background: #020202 !important;
  --bases-cards-cover-background: rgb(15, 15, 15) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 6px !important;
  --bases-group-heading-property-color: rgb(180, 180, 180) !important;
  --bases-table-cell-background-active: #020202 !important;
  --bases-table-cell-background-disabled: rgb(15, 15, 15) !important;
  --bases-table-cell-background-selected: hsla(202, 100%, 75%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(202, 100%, 75%) !important;
  --bases-table-container-border-radius: 6px !important;
  --bases-table-group-background: rgb(15, 15, 15) !important;
  --bases-table-header-background: #020202 !important;
  --bases-table-header-background-hover: rgba(25, 25, 25, 0.7) !important;
  --bases-table-header-color: rgb(180, 180, 180) !important;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 18px, black 18px) !important;
  --bases-table-summary-background: #020202 !important;
  --bases-table-summary-background-hover: rgba(25, 25, 25, 0.7) !important;
  --bg: rgb(15, 15, 15) !important;
  --bg-primary: #020202 !important;
  --bg-primary-rgb: 2, 2, 2 !important;
  --bg-secondary-rgb: 8, 8, 8 !important;
  --bg_dark: rgb(8, 8, 8) !important;
  --bg_dark2: rgb(2, 2, 2) !important;
  --bg_dark2_x: 2, 2, 2 !important;
  --bg_dark_x: 8, 8, 8 !important;
  --bg_highlight: rgb(25, 25, 25) !important;
  --bg_highlight_dark: rgb(18, 18, 18) !important;
  --bg_highlight_dark_x: 18, 18, 18 !important;
  --bg_highlight_x: 25, 25, 25 !important;
  --bg_x: 15, 15, 15 !important;
  --blockquote-background-color: rgba(187, 154, 247, 0.12) !important;
  --blockquote-border-color: hsl(202, 100%, 75%) !important;
  --blue: rgb(122, 162, 247) !important;
  --blue0: rgb(61, 89, 161) !important;
  --blue0_x: 61, 89, 161 !important;
  --blue_x: 122, 162, 247 !important;
  --blur-background: color-mix(in srgb, rgb(8, 8, 8) 65%, transparent) linear-gradient(rgb(8, 8, 8), color-mix(in srgb, rgb(8, 8, 8) 65%, transparent)) !important;
  --bold-color: rgb(125, 207, 255) !important;
  --border-radius: 8px !important;
  --bullet-new-color: rgb(187, 154, 247) !important;
  --callout-bug: 255, 117, 127;
  --callout-default: 122, 162, 247;
  --callout-error: 219, 75, 75;
  --callout-example: 187, 154, 247;
  --callout-fail: 219, 75, 75;
  --callout-important: 158, 206, 106;
  --callout-info: 122, 162, 247;
  --callout-padding: 16px;
  --callout-question: 224, 175, 104;
  --callout-quote: 180, 180, 180;
  --callout-radius: 8px;
  --callout-success: 26, 188, 156;
  --callout-summary: 125, 207, 255;
  --callout-tip: 125, 207, 255;
  --callout-todo: 125, 207, 255;
  --callout-warning: 255, 158, 100;
  --canvas-background: #020202 !important;
  --canvas-card-label-color: rgb(180, 180, 180) !important;
  --canvas-controls-radius: 6px !important;
  --caret-color: rgb(220, 220, 220) !important;
  --checkbox-border-color: rgb(120, 120, 120) !important;
  --checkbox-border-color-hover: rgb(120, 120, 120) !important;
  --checkbox-color: rgb(158, 206, 106) !important;
  --checkbox-color-hover: hsl(199, 102%, 86.25%) !important;
  --checkbox-marker-color: #020202 !important;
  --checkbox-radius: 6px !important;
  --checklist-done-color: rgb(180, 180, 180) !important;
  --clickable-icon-radius: 6px !important;
  --code-background: rgb(187, 154, 247, 0.05) !important;
  --code-border-color: transparent !important;
  --code-bracket-background: rgba(25, 25, 25, 0.7) !important;
  --code-comment: rgb(115, 125, 165) !important;
  --code-comment_x: 115, 125, 165 !important;
  --code-function: rgb(224, 175, 104) !important;
  --code-important: rgb(255, 158, 100) !important;
  --code-keyword: rgb(187, 154, 247) !important;
  --code-normal: rgb(180, 180, 180) !important;
  --code-operator: rgb(255, 117, 127) !important;
  --code-property: rgb(125, 207, 255) !important;
  --code-punctuation: rgb(180, 180, 180) !important;
  --code-radius: 6px !important;
  --code-string: rgb(158, 206, 106) !important;
  --code-tag: rgb(255, 117, 127) !important;
  --code-value: rgb(187, 154, 247) !important;
  --collapse-icon-color: rgb(180, 180, 180) !important;
  --collapse-icon-color-collapsed: rgb(187, 154, 247) !important;
  --color-accent: hsl(202, 100%, 75%) !important;
  --color-accent-1: hsl(199, 102%, 86.25%) !important;
  --color-accent-2: hsl(197, 105%, 96.75%) !important;
  --color-accent-hsl: 202, 100%, 75% !important;
  --color-blue: rgb(122, 162, 247) !important;
  --color-cyan: rgb(125, 207, 255) !important;
  --color-green: rgb(158, 206, 106) !important;
  --color-orange: rgb(255, 158, 100) !important;
  --color-pink: rgb(187, 154, 247) !important;
  --color-purple: rgb(187, 154, 247) !important;
  --color-red: rgb(255, 117, 127) !important;
  --color-yellow: rgb(224, 175, 104) !important;
  --comment: rgb(120, 120, 120) !important;
  --comment_x: 120, 120, 120 !important;
  --cyan: rgb(125, 207, 255) !important;
  --cyan_hsl: 202 100% 75% !important;
  --cyan_x: 125, 207, 255 !important;
  --dark: rgb(220, 220, 220) !important;
  --darkgray: rgb(220, 220, 220) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(202, 100%, 75%) !important;
  --divider-vertical-height: 0% !important;
  --dropdown-background: rgb(8, 8, 8) !important;
  --dropdown-background-hover: rgb(25, 25, 25) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid hsl(202, 100%, 75%) !important;
  --embed-padding: 0 0 0 18px !important;
  --fg: rgb(220, 220, 220) !important;
  --fg_dark: rgb(180, 180, 180) !important;
  --fg_dark_x: 180, 180, 180 !important;
  --fg_x: 220, 220, 220 !important;
  --file-header-background: #020202 !important;
  --file-header-background-focused: #020202 !important;
  --file-margins: clamp(8px, 4vw, 24px) !important;
  --flair-background: rgb(8, 8, 8) !important;
  --flair-color: rgb(220, 220, 220) !important;
  --folder-note-color: rgb(200, 190, 250) !important;
  --folder-note-color_x: 200, 190, 250 !important;
  --font-family-heading: 'Inter', system-ui, -apple-system, sans-serif !important;
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace !important;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif !important;
  --font-size-theme: 16px !important;
  --footnote-divider-color: transparent !important;
  --footnote-gap: 8px !important;
  --footnote-id-color: rgb(180, 180, 180) !important;
  --footnote-id-color-no-occurrences: rgb(180, 180, 180) !important;
  --footnote-input-background-active: rgba(25, 25, 25, 0.7) !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 6px !important;
  --frame-right-space: 80px !important;
  --graph-line: rgb(120, 120, 120) !important;
  --graph-node: rgb(220, 220, 220) !important;
  --graph-node-attachment: rgb(122, 162, 247) !important;
  --graph-node-focused: rgb(187, 154, 247) !important;
  --graph-node-tag: rgb(255, 158, 100) !important;
  --graph-node-unresolved: rgb(180, 180, 180) !important;
  --graph-text: rgb(220, 220, 220) !important;
  --gray: rgb(180, 180, 180) !important;
  --green: rgb(158, 206, 106) !important;
  --green-dark: rgb(120, 156, 122) !important;
  --green-dark_x: 120, 156, 122 !important;
  --green_x: 158, 206, 106 !important;
  --h1-color: rgb(255, 117, 127) !important;
  --h2-color: rgb(187, 154, 247) !important;
  --h3-color: rgb(158, 206, 106) !important;
  --h4-color: rgb(125, 207, 255) !important;
  --h5-color: rgb(122, 162, 247) !important;
  --h5-line-height: 1.6 !important;
  --h6-color: rgb(224, 175, 104) !important;
  --h6-line-height: 1.6 !important;
  --heading-formatting: rgb(180, 180, 180) !important;
  --highlight: rgba(255, 158, 100, 0.25) !important;
  --hr-color: transparent !important;
  --icon-color: rgb(180, 180, 180) !important;
  --icon-color-active: rgb(187, 154, 247) !important;
  --icon-color-focused: rgb(220, 220, 220) !important;
  --icon-color-hover: rgb(180, 180, 180) !important;
  --inline-title-color: rgb(255, 117, 127) !important;
  --input-date-separator: rgb(180, 180, 180) !important;
  --input-icon-inset: 8px !important;
  --input-padding: 8px 10px !important;
  --input-placeholder-color: rgb(180, 180, 180) !important;
  --insertion-color: rgb(255, 158, 100) !important;
  --interactive-accent: hsl(202, 100%, 75%) !important;
  --interactive-accent-hover: hsl(199, 102%, 86.25%) !important;
  --interactive-accent-hsl: 202, 100%, 75% !important;
  --interactive-hover: rgb(25, 25, 25) !important;
  --interactive-normal: rgb(8, 8, 8) !important;
  --interactive-success: rgb(158, 206, 106) !important;
  --internal-link-color: rgb(158, 206, 106) !important;
  --internal-link-color-hover: rgb(122, 162, 247) !important;
  --italic-color: rgb(122, 162, 247) !important;
  --light: #020202 !important;
  --lightgray: #020202 !important;
  --line-height-normal: 1.6 !important;
  --line-height-theme: 1.6 !important;
  --link-color: rgb(187, 154, 247) !important;
  --link-color-hover: rgb(125, 207, 255) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(187, 154, 247) !important;
  --link-external-color-hover: rgb(125, 207, 255) !important;
  --link-unresolved-color: rgb(187, 154, 247) !important;
  --link-unresolved-decoration-color: hsla(202, 100%, 75%, 0.3) !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(187, 154, 247) !important;
  --list-marker-color-collapsed: rgb(180, 180, 180) !important;
  --list-marker-color-hover: rgb(210, 180, 255) !important;
  --list-number-color: rgb(187, 154, 247) !important;
  --list-number-color-hover: rgb(210, 190, 255) !important;
  --list-spacing: 0 !important;
  --magent_hsl: 261 85% 79% !important;
  --magenta: rgb(187, 154, 247) !important;
  --magenta-light: rgb(210, 190, 255) !important;
  --magenta-light_x: 210, 190, 255 !important;
  --magenta_x: 187, 154, 247 !important;
  --menu-background: #020202 !important;
  --menu-border-color: transparent !important;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: rgba(25, 25, 25, 0.7) !important;
  --metadata-input-padding: 8px 10px !important;
  --metadata-input-text-color: rgb(220, 220, 220) !important;
  --metadata-label-background-active: rgba(25, 25, 25, 0.7) !important;
  --metadata-label-text-color: rgb(180, 180, 180) !important;
  --metadata-label-text-color-hover: rgb(180, 180, 180) !important;
  --metadata-padding: 10px 0 !important;
  --metadata-property-background-active: rgba(25, 25, 25, 0.7) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --modal-background: #020202 !important;
  --motion-duration-fast: 0.15s !important;
  --motion-duration-medium: 0.25s !important;
  --motion-duration-slow: 0.35s !important;
  --motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1) !important;
  --motion-easing-decelerate: cubic-bezier(0.0, 0, 0.2, 1) !important;
  --motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --nav-collapse-icon-color: rgb(180, 180, 180) !important;
  --nav-collapse-icon-color-collapsed: rgb(180, 180, 180) !important;
  --nav-file-tag: rgba(224, 175, 104, 0.9) !important;
  --nav-heading-color: rgb(220, 220, 220) !important;
  --nav-heading-color-collapsed: rgb(180, 180, 180) !important;
  --nav-heading-color-collapsed-hover: rgb(180, 180, 180) !important;
  --nav-heading-color-hover: rgb(220, 220, 220) !important;
  --nav-item-background-active: rgba(rgb(25, 25, 25), 0.2) !important;
  --nav-item-background-hover: rgb(25, 25, 25) !important;
  --nav-item-background-selected: hsla(202, 100%, 75%, 0.15) !important;
  --nav-item-color: rgba(220, 220, 220, 0.9) !important;
  --nav-item-color-active: rgb(220, 220, 220) !important;
  --nav-item-color-highlighted: rgb(187, 154, 247) !important;
  --nav-item-color-hover: rgb(220, 220, 220) !important;
  --nav-item-color-selected: rgb(220, 220, 220) !important;
  --nav-item-padding: 4px 8px 4px 18px !important;
  --nav-item-parent-padding: 4px 8px 4px 18px !important;
  --nav-item-radius: 6px !important;
  --nav-tag-color: rgb(180, 180, 180) !important;
  --nav-tag-color-active: rgb(180, 180, 180) !important;
  --nav-tag-color-hover: rgb(180, 180, 180) !important;
  --nav-tag-radius: 6px !important;
  --orange: rgb(255, 158, 100) !important;
  --orange_x: 255, 158, 100 !important;
  --pdf-background: #020202 !important;
  --pdf-page-background: #020202 !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: #020202 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: rgb(180, 180, 180) !important;
  --pill-color-hover: rgb(220, 220, 220) !important;
  --pill-color-remove: rgb(180, 180, 180) !important;
  --pill-color-remove-hover: rgb(187, 154, 247) !important;
  --pink: rgb(217, 0, 105) !important;
  --pink_hsl: 331 100% 43% !important;
  --pink_x: 217, 0, 105 !important;
  --popover-height: 500px !important;
  --popover-width: 500px !important;
  --prompt-background: #020202 !important;
  --purple: rgb(187, 154, 247) !important;
  --purple-light: rgb(210, 180, 255) !important;
  --purple-light_x: 210, 180, 255 !important;
  --purple_x: 187, 154, 247 !important;
  --radius-s: 6px !important;
  --raised-background: color-mix(in srgb, rgb(8, 8, 8) 65%, transparent) linear-gradient(rgb(8, 8, 8), color-mix(in srgb, rgb(8, 8, 8) 65%, transparent)) !important;
  --red: rgb(255, 117, 127) !important;
  --red-dark: rgb(255, 117, 127) !important;
  --red-dark_x: 155, 45, 45 !important;
  --red1: rgb(219, 75, 75) !important;
  --red1_x: 219, 75, 75 !important;
  --red_x: 255, 117, 127 !important;
  --ribbon-background: #020202 !important;
  --ribbon-background-collapsed: #020202 !important;
  --ribbon-padding: 10px 8px 12px !important;
  --scrollbar-active-thumb-bg: rgba(180, 180, 180, 0.4) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: rgba(180, 180, 180, 0.2) !important;
  --scrollbar-width: 10px !important;
  --search-clear-button-color: rgb(180, 180, 180) !important;
  --search-icon-color: rgb(180, 180, 180) !important;
  --search-result-background: #020202 !important;
  --secondary: rgb(187, 154, 247) !important;
  --setting-group-heading-color: rgb(220, 220, 220) !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: transparent !important;
  --setting-items-padding: 16px !important;
  --shadow-l: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1) !important;
  --shadow-m: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12) !important;
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05) !important;
  --size-4-1: 8px !important;
  --size-4-2: 10px !important;
  --size-4-4: 14px !important;
  --size-4-5: 16px !important;
  --size-4-6: 18px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --spoiler-background: rgba(25, 25, 25, 0.3) !important;
  --spoiler-background-hover: rgba(25, 25, 25, 0.5) !important;
  --spoiler-pattern: radial-gradient(circle 1px at 10px 8px, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
        radial-gradient(circle 1px at 30px 2px, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 50px 12px, rgba(255, 255, 255, 0.9) 50%, transparent 50%),
        radial-gradient(circle 1px at 70px 6px, rgba(255, 255, 255, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 15px 24px, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
        radial-gradient(circle 1px at 38px 28px, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 60px 36px, rgba(255, 255, 255, 0.9) 50%, transparent 50%),
        radial-gradient(circle 1px at 85px 22px, rgba(255, 255, 255, 0.7) 50%, transparent 50%) !important;
  --status-bar-background: #020202 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgb(180, 180, 180) !important;
  --suggestion-background: #020202 !important;
  --sync-avatar-color-1: rgb(255, 117, 127) !important;
  --sync-avatar-color-2: rgb(255, 158, 100) !important;
  --sync-avatar-color-3: rgb(224, 175, 104) !important;
  --sync-avatar-color-4: rgb(158, 206, 106) !important;
  --sync-avatar-color-5: rgb(125, 207, 255) !important;
  --sync-avatar-color-6: rgb(122, 162, 247) !important;
  --sync-avatar-color-7: rgb(187, 154, 247) !important;
  --sync-avatar-color-8: rgb(187, 154, 247) !important;
  --tab-background: rgba(2, 2, 2, 0.9) !important;
  --tab-background-active: rgba(25, 25, 25, 0.95) !important;
  --tab-background-hover: rgba(18, 18, 18, 0.8) !important;
  --tab-container-background: #020202 !important;
  --tab-divider-color: rgba(40, 40, 40, 0.3) !important;
  --tab-max-width: 200px !important;
  --tab-min-width: 40px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 6px !important;
  --tab-switcher-background: #020202 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #020202, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(202, 100%, 75%) !important;
  --tab-text-color: rgb(180, 180, 180) !important;
  --tab-text-color-active: rgb(180, 180, 180) !important;
  --tab-text-color-focused: rgb(180, 180, 180) !important;
  --tab-text-color-focused-active: rgb(180, 180, 180) !important;
  --tab-text-color-focused-active-current: rgb(220, 220, 220) !important;
  --tab-text-color-focused-highlighted: rgb(187, 154, 247) !important;
  --tab-width: 120px !important;
  --table-add-button-border-color: transparent !important;
  --table-drag-handle-background-active: hsl(202, 100%, 75%) !important;
  --table-drag-handle-color: rgb(180, 180, 180) !important;
  --table-drag-handle-color-active: rgb(15, 15, 15) !important;
  --table-header-background: rgb(2, 2, 2) !important;
  --table-header-background-hover: rgb(2, 2, 2) !important;
  --table-header-color: rgb(220, 220, 220) !important;
  --table-selection: hsla(202, 100%, 75%, 0.1) !important;
  --table-selection-border-color: hsl(202, 100%, 75%) !important;
  --tag-background: rgba(187, 154, 247, 0.15) !important;
  --tag-background-hover: rgba(125, 207, 255, 0.15) !important;
  --tag-border-color: hsla(202, 100%, 75%, 0.15) !important;
  --tag-border-color-hover: hsla(202, 100%, 75%, 0.15) !important;
  --tag-color: rgb(187, 154, 247) !important;
  --tag-color-hover: rgb(125, 207, 255) !important;
  --teal: rgb(26, 188, 156) !important;
  --teal_x: 26, 188, 156 !important;
  --terminal_black: rgb(65, 72, 104) !important;
  --terminal_black_x: 65, 72, 104 !important;
  --tertiary: rgb(125, 207, 255) !important;
  --text-accent: rgb(187, 154, 247) !important;
  --text-accent-hover: rgb(125, 207, 255) !important;
  --text-error: rgb(219, 75, 75) !important;
  --text-error-hover: rgb(255, 117, 127) !important;
  --text-faint: rgb(180, 180, 180) !important;
  --text-highlight-bg: rgba(255, 158, 100, 0.25) !important;
  --text-muted: rgb(180, 180, 180) !important;
  --text-muted-rgb: 180, 180, 180 !important;
  --text-normal: rgb(220, 220, 220) !important;
  --text-on-accent: rgb(15, 15, 15) !important;
  --text-selection: hsla(202, 100%, 75%, 0.33) !important;
  --text-success: rgb(158, 206, 106) !important;
  --text-warning: rgb(255, 158, 100) !important;
  --textHighlight: rgba(255, 158, 100, 0.25) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: transparent !important;
  --titlebar-height: 40px !important;
  --titlebar-text-color: rgb(180, 180, 180) !important;
  --titlebar-text-color-focused: rgb(220, 220, 220) !important;
  --unknown: #ffffff !important;
  --vault-profile-color: rgb(220, 220, 220) !important;
  --vault-profile-color-hover: rgb(220, 220, 220) !important;
  --workspace-background-translucent: rgba(2, 2, 2, 0.9) !important;
  --yellow: rgb(224, 175, 104) !important;
  --yellow_x: 224, 175, 104 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(2, 2, 2);
  border-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(187, 154, 247, 0.15);
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 2, 2);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(125, 207, 255);
  font-weight: 700;
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(125, 207, 255);
  font-weight: 700;
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 158, 100, 0.25);
  color: rgb(220, 220, 220);
  font-weight: 500;
  outline: rgb(220, 220, 220) none 0px;
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body del {
  color: rgb(219, 75, 75);
  outline: rgb(219, 75, 75) none 0px;
  text-decoration-color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body footer {
  opacity: 0.3;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(120, 120, 120);
  border-radius: 6px;
  border-width: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(158, 206, 106);
  border-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body p {
  color: rgb(180, 180, 180);
  outline: rgb(180, 180, 180) none 0px;
  text-decoration-color: rgb(180, 180, 180);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(158, 206, 106);
  outline: rgb(158, 206, 106) none 0px;
  text-decoration-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration-color: rgb(187, 154, 247);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(187, 154, 247, 0.12);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 220, 220);
  width: 230.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: rgb(220, 220, 220);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: rgb(220, 220, 220);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(2, 2, 2);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(187, 154, 247, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(187, 154, 247, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(224, 175, 104);
  border-left-color: rgb(224, 175, 104);
  border-right-color: rgb(224, 175, 104);
  border-top-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(187, 154, 247, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-left: 14px;
  padding-right: 14px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(187, 154, 247, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-left: 14px;
  padding-right: 14px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 117, 127);
  border-left-color: rgb(255, 117, 127);
  border-right-color: rgb(255, 117, 127);
  border-top-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(180, 180, 180);
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(15, 15, 15, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(15, 15, 15, 0.2);
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-right-style: solid;
  border-top-color: rgb(220, 220, 220);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 3px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 3px;
  border-right-color: rgb(120, 120, 120);
  border-right-width: 3px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 3px;
  margin-left: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 117, 127;
  background-color: rgba(255, 117, 127, 0.1);
  border-bottom-color: rgba(255, 117, 127, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 117, 127, 0.25);
  border-right-color: rgba(255, 117, 127, 0.25);
  border-top-color: rgba(255, 117, 127, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.1);
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 187, 154, 247;
  background-color: rgba(187, 154, 247, 0.1);
  border-bottom-color: rgba(187, 154, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(187, 154, 247, 0.25);
  border-right-color: rgba(187, 154, 247, 0.25);
  border-top-color: rgba(187, 154, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.1);
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.1);
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.1);
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 175, 104;
  background-color: rgba(224, 175, 104, 0.1);
  border-bottom-color: rgba(224, 175, 104, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 175, 104, 0.25);
  border-right-color: rgba(224, 175, 104, 0.25);
  border-top-color: rgba(224, 175, 104, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 180, 180, 180;
  background-color: rgba(180, 180, 180, 0.1);
  border-bottom-color: rgba(180, 180, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 180, 180, 0.25);
  border-right-color: rgba(180, 180, 180, 0.25);
  border-top-color: rgba(180, 180, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 26, 188, 156;
  background-color: rgba(26, 188, 156, 0.1);
  border-bottom-color: rgba(26, 188, 156, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(26, 188, 156, 0.25);
  border-right-color: rgba(26, 188, 156, 0.25);
  border-top-color: rgba(26, 188, 156, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 158, 100;
  background-color: rgba(255, 158, 100, 0.1);
  border-bottom-color: rgba(255, 158, 100, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 158, 100, 0.25);
  border-right-color: rgba(255, 158, 100, 0.25);
  border-top-color: rgba(255, 158, 100, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(15, 15, 15, 0.25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 25px 50px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 220, 220);
  outline: rgb(220, 220, 220) none 0px;
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(128, 208, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(128, 208, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(128, 208, 255);
  border-top-color: rgb(128, 208, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(128, 208, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(128, 208, 255, 0.2);
  color: rgb(128, 208, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgba(15, 15, 15, 0.5);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(128, 208, 255, 0.2);
  border-bottom-color: rgb(128, 208, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(128, 208, 255);
  border-top-color: rgb(128, 208, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(128, 208, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(128, 208, 255, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(128, 208, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 117, 127);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(187, 154, 247);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body h3 {
  color: rgb(158, 206, 106);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(125, 207, 255);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(122, 162, 247);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 175, 104);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(220, 220, 220, 0.9);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(220, 220, 220, 0.9);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 220, 220);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(180, 180, 180);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(2, 2, 2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(180, 180, 180);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(220, 220, 220, 0.9);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(220, 220, 220, 0.9);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(220, 220, 220, 0.9);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(220, 220, 220, 0.9);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(180, 180, 180);
  stroke: rgb(180, 180, 180);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(180, 180, 180);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(180, 180, 180);
  padding-bottom: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(180, 180, 180);
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(2, 2, 2);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(220, 220, 220);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(187, 154, 247, 0.05);
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  color: rgb(187, 154, 247);
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: hsl(265, 60%, 55%) !important;
  --accent-h: 265 !important;
  --accent-l: 55% !important;
  --accent-s: 60% !important;
  --background-modifier: rgba(255, 255, 255, 0.5) !important;
  --background-modifier-active-hover: rgb(255, 255, 255) !important;
  --background-modifier-border: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(240, 242, 246, 0.8) !important;
  --background-modifier-error: rgb(200, 50, 70) !important;
  --background-modifier-error-hover: rgb(200, 50, 70) !important;
  --background-modifier-form-field: transparent !important;
  --background-modifier-form-field-highlighted: rgb(240, 242, 246) !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.7) !important;
  --background-modifier-hover-rgb: 255, 255, 255 !important;
  --background-modifier-message: rgba(255, 255, 255, 0.9) !important;
  --background-modifier-success: rgb(20, 140, 80) !important;
  --background-primary: #f8fafc !important;
  --background-primary-alt: rgb(248, 250, 252) !important;
  --background-primary-rgb: 248, 250, 252 !important;
  --background-secondary: #f8fafc !important;
  --background-secondary-alt: rgb(240, 242, 246) !important;
  --background-secondary-rgb: 240, 242, 246 !important;
  --bases-cards-background: #f8fafc !important;
  --bases-cards-cover-background: rgb(248, 250, 252) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 6px !important;
  --bases-group-heading-property-color: rgb(75, 85, 95) !important;
  --bases-table-cell-background-active: #f8fafc !important;
  --bases-table-cell-background-disabled: rgb(248, 250, 252) !important;
  --bases-table-cell-background-selected: hsla(265, 60%, 55%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(265, 60%, 55%) !important;
  --bases-table-container-border-radius: 6px !important;
  --bases-table-group-background: rgb(248, 250, 252) !important;
  --bases-table-header-background: #f8fafc !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.7) !important;
  --bases-table-header-color: rgb(75, 85, 95) !important;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 18px, black 18px) !important;
  --bases-table-summary-background: #f8fafc !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.7) !important;
  --bg: rgb(248, 250, 252) !important;
  --bg_dark: rgb(240, 242, 246) !important;
  --bg_dark2: rgb(230, 232, 236) !important;
  --bg_dark2_x: 230, 232, 236 !important;
  --bg_dark_x: 240, 242, 246 !important;
  --bg_highlight: rgb(255, 255, 255) !important;
  --bg_highlight_dark: rgb(235, 238, 242) !important;
  --bg_highlight_dark_x: 235, 238, 242 !important;
  --bg_highlight_x: 255, 255, 255 !important;
  --bg_x: 248, 250, 252 !important;
  --blockquote-background-color: rgba(102, 63, 191, 0.08) !important;
  --blockquote-border-color: hsl(265, 60%, 55%) !important;
  --blue: rgb(30, 70, 160) !important;
  --blue0: rgb(25, 55, 100) !important;
  --blue0_x: 25, 55, 100 !important;
  --blue_x: 30, 70, 160 !important;
  --blur-background: color-mix(in srgb, #f8fafc 65%, transparent) linear-gradient(#f8fafc, color-mix(in srgb, #f8fafc 65%, transparent)) !important;
  --bold-color: rgb(0, 120, 180) !important;
  --border-radius: 8px !important;
  --bullet-new-color: rgb(102, 63, 191) !important;
  --callout-bug: 200, 50, 70;
  --callout-default: 30, 70, 160;
  --callout-error: 180, 30, 50;
  --callout-example: 160, 30, 140;
  --callout-fail: 180, 30, 50;
  --callout-important: 20, 140, 80;
  --callout-info: 30, 70, 160;
  --callout-padding: 16px;
  --callout-question: 180, 120, 0;
  --callout-quote: 75, 85, 95;
  --callout-radius: 8px;
  --callout-success: 0, 140, 160;
  --callout-summary: 0, 120, 180;
  --callout-tip: 0, 120, 180;
  --callout-todo: 0, 120, 180;
  --callout-warning: 220, 100, 20;
  --canvas-background: #f8fafc !important;
  --canvas-card-label-color: rgb(75, 85, 95) !important;
  --canvas-controls-radius: 6px !important;
  --caret-color: rgb(30, 35, 42) !important;
  --checkbox-border-color: rgb(120, 125, 135) !important;
  --checkbox-border-color-hover: rgb(120, 125, 135) !important;
  --checkbox-color: rgb(20, 140, 80) !important;
  --checkbox-color-hover: hsl(262, 61.2%, 63.25%) !important;
  --checkbox-marker-color: #f8fafc !important;
  --checkbox-radius: 6px !important;
  --checklist-done-color: rgb(75, 85, 95) !important;
  --clickable-icon-radius: 6px !important;
  --code-background: rgba(102, 63, 191, 0.06) !important;
  --code-border-color: transparent !important;
  --code-bracket-background: rgba(255, 255, 255, 0.7) !important;
  --code-comment: rgb(110, 115, 125) !important;
  --code-comment_x: 110, 115, 125 !important;
  --code-function: rgb(180, 120, 0) !important;
  --code-important: rgb(220, 100, 20) !important;
  --code-keyword: rgb(160, 30, 140) !important;
  --code-normal: rgb(30, 35, 42) !important;
  --code-operator: rgb(200, 50, 70) !important;
  --code-property: rgb(0, 120, 180) !important;
  --code-punctuation: rgb(75, 85, 95) !important;
  --code-radius: 6px !important;
  --code-string: rgb(20, 140, 80) !important;
  --code-tag: rgb(200, 50, 70) !important;
  --code-value: rgb(160, 30, 140) !important;
  --collapse-icon-color: rgb(75, 85, 95) !important;
  --collapse-icon-color-collapsed: rgb(160, 30, 140) !important;
  --color-accent: hsl(265, 60%, 55%) !important;
  --color-accent-1: hsl(264, 60.6%, 59.125%) !important;
  --color-accent-2: hsl(262, 61.2%, 63.25%) !important;
  --color-accent-hsl: 265, 60%, 55% !important;
  --color-blue: rgb(30, 70, 160) !important;
  --color-cyan: rgb(0, 120, 180) !important;
  --color-green: rgb(20, 140, 80) !important;
  --color-orange: rgb(220, 100, 20) !important;
  --color-pink: rgb(160, 30, 140) !important;
  --color-purple: rgb(160, 30, 140) !important;
  --color-red: rgb(200, 50, 70) !important;
  --color-yellow: rgb(180, 120, 0) !important;
  --comment: rgb(120, 125, 135) !important;
  --comment_x: 120, 125, 135 !important;
  --cyan: rgb(0, 120, 180) !important;
  --cyan_x: 0, 120, 180 !important;
  --dark: rgb(30, 35, 42) !important;
  --darkgray: rgb(30, 35, 42) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(265, 60%, 55%) !important;
  --divider-vertical-height: 0% !important;
  --dropdown-background: #e2e8f0 !important;
  --dropdown-background-hover: #cbd5e1 !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid hsl(265, 60%, 55%) !important;
  --embed-padding: 0 0 0 18px !important;
  --fg: rgb(30, 35, 42) !important;
  --fg_dark: rgb(75, 85, 95) !important;
  --fg_dark_x: 75, 85, 95 !important;
  --fg_x: 30, 35, 42 !important;
  --file-header-background: #f8fafc !important;
  --file-header-background-focused: #f8fafc !important;
  --file-margins: clamp(8px, 4vw, 24px) !important;
  --flair-background: #e2e8f0 !important;
  --flair-color: rgb(30, 35, 42) !important;
  --folder-note-color: rgb(120, 85, 200) !important;
  --folder-note-color_x: 120, 85, 200 !important;
  --font-family-heading: 'Inter', system-ui, -apple-system, sans-serif !important;
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace !important;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif !important;
  --font-size-theme: 16px !important;
  --footnote-divider-color: transparent !important;
  --footnote-gap: 8px !important;
  --footnote-id-color: rgb(75, 85, 95) !important;
  --footnote-id-color-no-occurrences: rgb(75, 85, 95) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.7) !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 6px !important;
  --frame-right-space: 80px !important;
  --graph-line: rgb(120, 125, 135) !important;
  --graph-node: rgb(30, 35, 42) !important;
  --graph-node-attachment: rgb(30, 70, 160) !important;
  --graph-node-focused: rgb(160, 30, 140) !important;
  --graph-node-tag: rgb(220, 100, 20) !important;
  --graph-node-unresolved: rgb(75, 85, 95) !important;
  --graph-text: rgb(30, 35, 42) !important;
  --gray: rgb(75, 85, 95) !important;
  --green: rgb(20, 140, 80) !important;
  --green_x: 20, 140, 80 !important;
  --h1-color: rgb(200, 50, 70) !important;
  --h2-color: rgb(102, 63, 191) !important;
  --h3-color: rgb(20, 140, 80) !important;
  --h4-color: rgb(0, 120, 180) !important;
  --h5-color: rgb(30, 70, 160) !important;
  --h5-line-height: 1.6 !important;
  --h6-color: rgb(180, 120, 0) !important;
  --h6-line-height: 1.6 !important;
  --heading-formatting: rgb(75, 85, 95) !important;
  --highlight: rgba(220, 100, 20, 0.25) !important;
  --hr-color: transparent !important;
  --icon-color: rgb(75, 85, 95) !important;
  --icon-color-active: rgb(160, 30, 140) !important;
  --icon-color-focused: rgb(30, 35, 42) !important;
  --icon-color-hover: rgb(75, 85, 95) !important;
  --inline-title-color: rgb(200, 50, 70) !important;
  --input-date-separator: rgb(75, 85, 95) !important;
  --input-icon-inset: 8px !important;
  --input-padding: 8px 10px !important;
  --input-placeholder-color: rgb(75, 85, 95) !important;
  --insertion-color: rgb(220, 100, 20) !important;
  --interactive-accent: hsl(265, 60%, 55%) !important;
  --interactive-accent-hover: hsl(262, 61.2%, 63.25%) !important;
  --interactive-accent-hsl: 265, 60%, 55% !important;
  --interactive-hover: #cbd5e1 !important;
  --interactive-normal: #e2e8f0 !important;
  --interactive-success: rgb(20, 140, 80) !important;
  --internal-link-color: rgb(20, 140, 80) !important;
  --internal-link-color-hover: rgb(30, 70, 160) !important;
  --italic-color: rgb(30, 70, 160) !important;
  --light: #f8fafc !important;
  --lightgray: #f8fafc !important;
  --line-height-normal: 1.6 !important;
  --line-height-theme: 1.6 !important;
  --link-color: rgb(102, 63, 191) !important;
  --link-color-hover: rgb(0, 120, 180) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(102, 63, 191) !important;
  --link-external-color-hover: rgb(0, 120, 180) !important;
  --link-unresolved-color: rgb(160, 30, 140) !important;
  --link-unresolved-decoration-color: hsla(265, 60%, 55%, 0.3) !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(102, 63, 191) !important;
  --list-marker-color-collapsed: rgb(75, 85, 95) !important;
  --list-marker-color-hover: rgb(140, 100, 220) !important;
  --list-number-color: rgb(160, 30, 140) !important;
  --list-number-color-hover: rgb(180, 60, 200) !important;
  --list-spacing: 0 !important;
  --magent_hsl: 261 65% 50% !important;
  --magenta: rgb(160, 30, 140) !important;
  --magenta-light: rgb(180, 60, 200) !important;
  --magenta-light_x: 180, 60, 200 !important;
  --magenta_x: 160, 30, 140 !important;
  --menu-background: #f8fafc !important;
  --menu-border-color: transparent !important;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.7) !important;
  --metadata-input-padding: 8px 10px !important;
  --metadata-input-text-color: rgb(30, 35, 42) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.7) !important;
  --metadata-label-text-color: rgb(75, 85, 95) !important;
  --metadata-label-text-color-hover: rgb(75, 85, 95) !important;
  --metadata-padding: 10px 0 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.7) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --modal-background: #f8fafc !important;
  --motion-duration-fast: 0.15s !important;
  --motion-duration-medium: 0.25s !important;
  --motion-duration-slow: 0.35s !important;
  --motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1) !important;
  --motion-easing-decelerate: cubic-bezier(0.0, 0, 0.2, 1) !important;
  --motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --nav-collapse-icon-color: rgb(75, 85, 95) !important;
  --nav-collapse-icon-color-collapsed: rgb(75, 85, 95) !important;
  --nav-file-tag: rgba(180, 120, 0, 0.9) !important;
  --nav-heading-color: rgb(30, 35, 42) !important;
  --nav-heading-color-collapsed: rgb(75, 85, 95) !important;
  --nav-heading-color-collapsed-hover: rgb(75, 85, 95) !important;
  --nav-heading-color-hover: rgb(30, 35, 42) !important;
  --nav-item-background-active: rgba(rgb(255, 255, 255), 0.2) !important;
  --nav-item-background-hover: rgb(255, 255, 255) !important;
  --nav-item-background-selected: hsla(265, 60%, 55%, 0.15) !important;
  --nav-item-color: rgba(30, 35, 42, 0.9) !important;
  --nav-item-color-active: rgb(30, 35, 42) !important;
  --nav-item-color-highlighted: rgb(160, 30, 140) !important;
  --nav-item-color-hover: rgb(30, 35, 42) !important;
  --nav-item-color-selected: rgb(30, 35, 42) !important;
  --nav-item-padding: 4px 8px 4px 18px !important;
  --nav-item-parent-padding: 4px 8px 4px 18px !important;
  --nav-item-radius: 6px !important;
  --nav-tag-color: rgb(75, 85, 95) !important;
  --nav-tag-color-active: rgb(75, 85, 95) !important;
  --nav-tag-color-hover: rgb(75, 85, 95) !important;
  --nav-tag-radius: 6px !important;
  --orange: rgb(220, 100, 20) !important;
  --orange_x: 220, 100, 20 !important;
  --pdf-background: #f8fafc !important;
  --pdf-page-background: #f8fafc !important;
  --pdf-sidebar-background: #f8fafc !important;
  --pill-border-color: transparent !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: rgb(75, 85, 95) !important;
  --pill-color-hover: rgb(30, 35, 42) !important;
  --pill-color-remove: rgb(75, 85, 95) !important;
  --pill-color-remove-hover: rgb(160, 30, 140) !important;
  --pink: rgb(200, 30, 140) !important;
  --pink_hsl: 320 65% 50% !important;
  --pink_x: 200, 30, 140 !important;
  --popover-height: 500px !important;
  --popover-width: 500px !important;
  --prompt-background: #f8fafc !important;
  --purple: rgb(102, 63, 191) !important;
  --purple-light: rgb(140, 100, 220) !important;
  --purple-light_x: 140, 100, 220 !important;
  --purple_x: 102, 63, 191 !important;
  --radius-s: 6px !important;
  --raised-background: color-mix(in srgb, #f8fafc 65%, transparent) linear-gradient(#f8fafc, color-mix(in srgb, #f8fafc 65%, transparent)) !important;
  --red: rgb(200, 50, 70) !important;
  --red1: rgb(180, 30, 50) !important;
  --red1_x: 180, 30, 50 !important;
  --red_x: 200, 50, 70 !important;
  --ribbon-background: #f8fafc !important;
  --ribbon-background-collapsed: #f8fafc !important;
  --ribbon-padding: 10px 8px 12px !important;
  --scrollbar-active-thumb-bg: rgba(75, 85, 95, 0.4) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: rgba(75, 85, 95, 0.2) !important;
  --scrollbar-width: 10px !important;
  --search-clear-button-color: rgb(75, 85, 95) !important;
  --search-icon-color: rgb(75, 85, 95) !important;
  --search-result-background: #f8fafc !important;
  --secondary: rgb(160, 30, 140) !important;
  --setting-group-heading-color: rgb(30, 35, 42) !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: transparent !important;
  --setting-items-padding: 16px !important;
  --shadow-l: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1) !important;
  --shadow-m: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12) !important;
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05) !important;
  --size-4-1: 8px !important;
  --size-4-2: 10px !important;
  --size-4-4: 14px !important;
  --size-4-5: 16px !important;
  --size-4-6: 18px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --spoiler-background: rgba(240, 242, 246, 0.5) !important;
  --spoiler-background-hover: rgba(240, 242, 246, 0.7) !important;
  --spoiler-pattern: radial-gradient(circle 1px at 10px 8px, rgba(100, 100, 100, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 30px 2px, rgba(100, 100, 100, 0.4) 50%, transparent 50%),
        radial-gradient(circle 1px at 50px 12px, rgba(100, 100, 100, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 70px 6px, rgba(100, 100, 100, 0.5) 50%, transparent 50%),
        radial-gradient(circle 1px at 15px 24px, rgba(100, 100, 100, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 38px 28px, rgba(100, 100, 100, 0.4) 50%, transparent 50%),
        radial-gradient(circle 1px at 60px 36px, rgba(100, 100, 100, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 85px 22px, rgba(100, 100, 100, 0.5) 50%, transparent 50%) !important;
  --status-bar-background: #f8fafc !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgb(75, 85, 95) !important;
  --suggestion-background: #f8fafc !important;
  --sync-avatar-color-1: rgb(200, 50, 70) !important;
  --sync-avatar-color-2: rgb(220, 100, 20) !important;
  --sync-avatar-color-3: rgb(180, 120, 0) !important;
  --sync-avatar-color-4: rgb(20, 140, 80) !important;
  --sync-avatar-color-5: rgb(0, 120, 180) !important;
  --sync-avatar-color-6: rgb(30, 70, 160) !important;
  --sync-avatar-color-7: rgb(160, 30, 140) !important;
  --sync-avatar-color-8: rgb(160, 30, 140) !important;
  --tab-background: rgba(240, 242, 246, 0.9) !important;
  --tab-background-active: rgba(255, 255, 255, 0.95) !important;
  --tab-background-hover: rgba(248, 250, 252, 0.8) !important;
  --tab-container-background: #f8fafc !important;
  --tab-divider-color: rgba(200, 205, 210, 0.4) !important;
  --tab-max-width: 200px !important;
  --tab-min-width: 40px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 6px !important;
  --tab-switcher-background: #f8fafc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fafc, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(265, 60%, 55%) !important;
  --tab-text-color: rgb(75, 85, 95) !important;
  --tab-text-color-active: rgb(75, 85, 95) !important;
  --tab-text-color-focused: rgb(75, 85, 95) !important;
  --tab-text-color-focused-active: rgb(75, 85, 95) !important;
  --tab-text-color-focused-active-current: rgb(30, 35, 42) !important;
  --tab-text-color-focused-highlighted: rgb(160, 30, 140) !important;
  --tab-width: 120px !important;
  --table-add-button-border-color: transparent !important;
  --table-drag-handle-background-active: hsl(265, 60%, 55%) !important;
  --table-drag-handle-color: rgb(75, 85, 95) !important;
  --table-drag-handle-color-active: rgb(248, 250, 252) !important;
  --table-header-background: rgb(230, 232, 236) !important;
  --table-header-background-hover: rgb(230, 232, 236) !important;
  --table-header-color: rgb(30, 35, 42) !important;
  --table-selection: hsla(265, 60%, 55%, 0.1) !important;
  --table-selection-border-color: hsl(265, 60%, 55%) !important;
  --tag-background: rgba(160, 30, 140, 0.15) !important;
  --tag-background-hover: rgba(0, 120, 180, 0.15) !important;
  --tag-border-color: hsla(265, 60%, 55%, 0.15) !important;
  --tag-border-color-hover: hsla(265, 60%, 55%, 0.15) !important;
  --tag-color: rgb(160, 30, 140) !important;
  --tag-color-hover: rgb(0, 120, 180) !important;
  --teal: rgb(0, 140, 160) !important;
  --teal_x: 0, 140, 160 !important;
  --terminal_black: rgb(15, 15, 20) !important;
  --terminal_black_x: 15, 15, 20 !important;
  --tertiary: rgb(0, 120, 180) !important;
  --text-accent: rgb(160, 30, 140) !important;
  --text-accent-hover: rgb(0, 120, 180) !important;
  --text-error: rgb(180, 30, 50) !important;
  --text-error-hover: rgb(200, 50, 70) !important;
  --text-faint: rgb(75, 85, 95) !important;
  --text-highlight-bg: rgba(220, 100, 20, 0.25) !important;
  --text-muted: rgb(75, 85, 95) !important;
  --text-muted-rgb: 75, 85, 95 !important;
  --text-normal: rgb(30, 35, 42) !important;
  --text-on-accent: rgb(248, 250, 252) !important;
  --text-selection: hsla(265, 60%, 55%, 0.2) !important;
  --text-success: rgb(20, 140, 80) !important;
  --text-warning: rgb(220, 100, 20) !important;
  --textHighlight: rgba(220, 100, 20, 0.25) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: transparent !important;
  --titlebar-height: 40px !important;
  --titlebar-text-color: rgb(75, 85, 95) !important;
  --titlebar-text-color-focused: rgb(30, 35, 42) !important;
  --unknown: #000000 !important;
  --vault-profile-color: rgb(30, 35, 42) !important;
  --vault-profile-color-hover: rgb(30, 35, 42) !important;
  --yellow: rgb(180, 120, 0) !important;
  --yellow_x: 180, 120, 0 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(30, 35, 42);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(248, 250, 252);
  border-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(160, 30, 140, 0.15);
  color: rgb(160, 30, 140);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 250, 252);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 120, 180);
  font-weight: 700;
  outline: rgb(0, 120, 180) none 0px;
  text-decoration-color: rgb(0, 120, 180);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(30, 70, 160);
  outline: rgb(30, 70, 160) none 0px;
  text-decoration-color: rgb(30, 70, 160);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(30, 70, 160);
  outline: rgb(30, 70, 160) none 0px;
  text-decoration-color: rgb(30, 70, 160);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 120, 180);
  font-weight: 700;
  outline: rgb(0, 120, 180) none 0px;
  text-decoration-color: rgb(0, 120, 180);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(220, 100, 20, 0.25);
  color: rgb(30, 35, 42);
  font-weight: 500;
  outline: rgb(30, 35, 42) none 0px;
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body del {
  color: rgb(180, 30, 50);
  outline: rgb(180, 30, 50) none 0px;
  text-decoration-color: rgb(180, 30, 50);
}

html[saved-theme="light"] body footer {
  opacity: 0.3;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(120, 125, 135);
  border-radius: 6px;
  border-width: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(20, 140, 80);
  border-color: rgb(20, 140, 80);
}

html[saved-theme="light"] body p {
  color: rgb(75, 85, 95);
  outline: rgb(75, 85, 95) none 0px;
  text-decoration-color: rgb(75, 85, 95);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(102, 63, 191);
  outline: rgb(102, 63, 191) none 0px;
  text-decoration-color: rgb(102, 63, 191);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(20, 140, 80);
  outline: rgb(20, 140, 80) none 0px;
  text-decoration-color: rgb(20, 140, 80);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(160, 30, 140);
  outline: rgb(160, 30, 140) none 0px;
  text-decoration-color: rgb(160, 30, 140);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body dt {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ol > li {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ul > li {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(102, 63, 191, 0.08);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body table {
  color: rgb(30, 35, 42);
  width: 230.219px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: rgb(30, 35, 42);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: rgb(30, 35, 42);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(230, 232, 236);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(102, 63, 191, 0.06);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(102, 63, 191, 0.06);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(180, 120, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(180, 120, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(180, 120, 0);
  border-left-color: rgb(180, 120, 0);
  border-right-color: rgb(180, 120, 0);
  border-top-color: rgb(180, 120, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(102, 63, 191, 0.06);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-left: 14px;
  padding-right: 14px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(102, 63, 191, 0.06);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-left: 14px;
  padding-right: 14px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body figcaption {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(200, 50, 70);
  border-left-color: rgb(200, 50, 70);
  border-right-color: rgb(200, 50, 70);
  border-top-color: rgb(200, 50, 70);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(248, 250, 252);
  border-bottom-color: rgb(75, 85, 95);
  border-left-color: rgb(75, 85, 95);
  border-right-color: rgb(75, 85, 95);
  border-top-color: rgb(75, 85, 95);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(30, 35, 42);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(248, 250, 252, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(248, 250, 252, 0.2);
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-right-style: solid;
  border-top-color: rgb(30, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(120, 125, 135);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 3px;
  border-left-color: rgb(120, 125, 135);
  border-left-width: 3px;
  border-right-color: rgb(120, 125, 135);
  border-right-width: 3px;
  border-top-color: rgb(120, 125, 135);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 3px;
  margin-left: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(30, 70, 160);
  border-left-color: rgb(30, 70, 160);
  border-right-color: rgb(30, 70, 160);
  border-top-color: rgb(30, 70, 160);
  color: rgb(30, 70, 160);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(30, 70, 160);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 120, 180;
  background-color: rgba(0, 120, 180, 0.1);
  border-bottom-color: rgba(0, 120, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 120, 180, 0.25);
  border-right-color: rgba(0, 120, 180, 0.25);
  border-top-color: rgba(0, 120, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 200, 50, 70;
  background-color: rgba(200, 50, 70, 0.1);
  border-bottom-color: rgba(200, 50, 70, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(200, 50, 70, 0.25);
  border-right-color: rgba(200, 50, 70, 0.25);
  border-top-color: rgba(200, 50, 70, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 180, 30, 50;
  background-color: rgba(180, 30, 50, 0.1);
  border-bottom-color: rgba(180, 30, 50, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 30, 50, 0.25);
  border-right-color: rgba(180, 30, 50, 0.25);
  border-top-color: rgba(180, 30, 50, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 160, 30, 140;
  background-color: rgba(160, 30, 140, 0.1);
  border-bottom-color: rgba(160, 30, 140, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(160, 30, 140, 0.25);
  border-right-color: rgba(160, 30, 140, 0.25);
  border-top-color: rgba(160, 30, 140, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 180, 30, 50;
  background-color: rgba(180, 30, 50, 0.1);
  border-bottom-color: rgba(180, 30, 50, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 30, 50, 0.25);
  border-right-color: rgba(180, 30, 50, 0.25);
  border-top-color: rgba(180, 30, 50, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 30, 70, 160;
  background-color: rgba(30, 70, 160, 0.1);
  border-bottom-color: rgba(30, 70, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(30, 70, 160, 0.25);
  border-right-color: rgba(30, 70, 160, 0.25);
  border-top-color: rgba(30, 70, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 30, 70, 160;
  background-color: rgba(30, 70, 160, 0.1);
  border-bottom-color: rgba(30, 70, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(30, 70, 160, 0.25);
  border-right-color: rgba(30, 70, 160, 0.25);
  border-top-color: rgba(30, 70, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 180, 120, 0;
  background-color: rgba(180, 120, 0, 0.1);
  border-bottom-color: rgba(180, 120, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 120, 0, 0.25);
  border-right-color: rgba(180, 120, 0, 0.25);
  border-top-color: rgba(180, 120, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 75, 85, 95;
  background-color: rgba(75, 85, 95, 0.1);
  border-bottom-color: rgba(75, 85, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(75, 85, 95, 0.25);
  border-right-color: rgba(75, 85, 95, 0.25);
  border-top-color: rgba(75, 85, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 140, 160;
  background-color: rgba(0, 140, 160, 0.1);
  border-bottom-color: rgba(0, 140, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 140, 160, 0.25);
  border-right-color: rgba(0, 140, 160, 0.25);
  border-top-color: rgba(0, 140, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 120, 180;
  background-color: rgba(0, 120, 180, 0.1);
  border-bottom-color: rgba(0, 120, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 120, 180, 0.25);
  border-right-color: rgba(0, 120, 180, 0.25);
  border-top-color: rgba(0, 120, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 120, 180;
  background-color: rgba(0, 120, 180, 0.1);
  border-bottom-color: rgba(0, 120, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 120, 180, 0.25);
  border-right-color: rgba(0, 120, 180, 0.25);
  border-top-color: rgba(0, 120, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 220, 100, 20;
  background-color: rgba(220, 100, 20, 0.1);
  border-bottom-color: rgba(220, 100, 20, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(220, 100, 20, 0.25);
  border-right-color: rgba(220, 100, 20, 0.25);
  border-top-color: rgba(220, 100, 20, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(248, 250, 252, 0.25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 25px 50px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(30, 35, 42);
  outline: rgb(30, 35, 42) none 0px;
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(129, 71, 209);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(129, 71, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(129, 71, 209);
  border-right-color: rgb(129, 71, 209);
  border-top-color: rgb(129, 71, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(129, 71, 209);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(129, 71, 209, 0.2);
  color: rgb(129, 71, 209);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgba(248, 250, 252, 0.5);
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(189, 189, 189);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(189, 189, 189);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(189, 189, 189);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(129, 71, 209, 0.2);
  border-bottom-color: rgb(129, 71, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(129, 71, 209);
  border-right-color: rgb(129, 71, 209);
  border-top-color: rgb(129, 71, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(129, 71, 209);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(129, 71, 209, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(129, 71, 209);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(160, 30, 140, 0.15);
  border-bottom-color: rgba(129, 71, 209, 0.15);
  border-left-color: rgba(129, 71, 209, 0.15);
  border-right-color: rgba(129, 71, 209, 0.15);
  border-top-color: rgba(129, 71, 209, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(160, 30, 140);
}

html[saved-theme="light"] body h1 {
  color: rgb(200, 50, 70);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(102, 63, 191);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(200, 50, 70);
}

html[saved-theme="light"] body h3 {
  color: rgb(20, 140, 80);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 120, 180);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(30, 70, 160);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(180, 120, 0);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgba(30, 70, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(30, 70, 160, 0.25);
  border-right-color: rgba(30, 70, 160, 0.25);
  border-top-color: rgba(30, 70, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(30, 35, 42, 0.9);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(30, 35, 42, 0.9);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(30, 35, 42);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(75, 85, 95);
  border-right-color: rgb(75, 85, 95);
  border-top-color: rgb(75, 85, 95);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(75, 85, 95);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(248, 250, 252);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(226, 232, 240);
  color: rgb(100, 116, 139);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(100, 116, 139);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(30, 35, 42, 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(30, 35, 42, 0.9);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(30, 35, 42, 0.9);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(30, 35, 42, 0.9);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(75, 85, 95);
  border-right-color: rgb(75, 85, 95);
  border-top-color: rgb(75, 85, 95);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(75, 85, 95);
  stroke: rgb(75, 85, 95);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(75, 85, 95);
  border-right-color: rgb(75, 85, 95);
  border-top-color: rgb(75, 85, 95);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(75, 85, 95);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(75, 85, 95);
  padding-bottom: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(75, 85, 95);
  border-left-color: rgb(75, 85, 95);
  border-right-color: rgb(75, 85, 95);
  border-top-color: rgb(75, 85, 95);
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(248, 250, 252);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body abbr {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(30, 35, 42);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="light"] body kbd {
  background-color: rgba(102, 63, 191, 0.06);
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body sub {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body summary {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body sup {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(160, 30, 140, 0.15);
  border-bottom-color: rgba(129, 71, 209, 0.15);
  border-left-color: rgba(129, 71, 209, 0.15);
  border-right-color: rgba(129, 71, 209, 0.15);
  border-top-color: rgba(129, 71, 209, 0.15);
  color: rgb(160, 30, 140);
}`,
  },
  extras: `/* Snowfall particle effect on spoiler elements */
@keyframes snowfall {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 40px;
  }
}

.cm-spoiler::before,
.spoiler::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image:
    radial-gradient(2px 2px at 20px 30px, white, transparent),
    radial-gradient(2px 2px at 40px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1px 1px at 130px 80px, white, transparent),
    radial-gradient(2px 2px at 160px 30px, white, transparent),
    radial-gradient(1px 1px at 200px 60px, white, transparent),
    radial-gradient(2px 2px at 50px 110px, white, transparent),
    radial-gradient(1px 1px at 100px 150px, white, transparent),
    radial-gradient(2px 2px at 180px 120px, white, transparent);
  background-size: 240px 180px;
  animation: snowfall 3s linear infinite;
}
`,
};
