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
  --accent-color: rgb(128, 208, 255);
  --accent-h: 202;
  --accent-l: 75%;
  --accent-s: 100%;
  --background-modifier: rgba(25, 25, 25, 0.5);
  --background-modifier-active-hover: rgb(25, 25, 25);
  --background-modifier-border: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-cover: rgba(8, 8, 8, 0.8);
  --background-modifier-error: rgb(255, 117, 127);
  --background-modifier-error-hover: rgb(255, 117, 127);
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-highlighted: rgb(8, 8, 8);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: rgba(25, 25, 25, 0.7);
  --background-modifier-hover-rgb: 25, 25, 25;
  --background-modifier-message: rgba(25, 25, 25, 0.9);
  --background-modifier-success: rgb(158, 206, 106);
  --background-primary: #020202;
  --background-primary-alt: rgb(15, 15, 15);
  --background-primary-rgb: 15, 15, 15;
  --background-secondary: #020202;
  --background-secondary-alt: rgb(8, 8, 8);
  --background-secondary-rgb: 8, 8, 8;
  --bases-cards-background: #020202;
  --bases-cards-cover-background: rgb(15, 15, 15);
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-embed-border-radius: 6px;
  --bases-group-heading-property-color: rgb(180, 180, 180);
  --bases-table-cell-background-active: #020202;
  --bases-table-cell-background-disabled: rgb(15, 15, 15);
  --bases-table-cell-background-selected: rgba(128, 208, 255, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(128, 208, 255);
  --bases-table-container-border-radius: 6px;
  --bases-table-group-background: rgb(15, 15, 15);
  --bases-table-header-background: #020202;
  --bases-table-header-background-hover: rgba(25, 25, 25, 0.7);
  --bases-table-header-color: rgb(180, 180, 180);
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 18px, black 18px);
  --bases-table-summary-background: #020202;
  --bases-table-summary-background-hover: rgba(25, 25, 25, 0.7);
  --bg: rgb(15, 15, 15);
  --bg-primary: #020202;
  --bg-primary-rgb: 2, 2, 2;
  --bg-secondary-rgb: 8, 8, 8;
  --bg_dark: rgb(8, 8, 8);
  --bg_dark2: rgb(2, 2, 2);
  --bg_dark2_x: 2, 2, 2;
  --bg_dark_x: 8, 8, 8;
  --bg_highlight: rgb(25, 25, 25);
  --bg_highlight_dark: rgb(18, 18, 18);
  --bg_highlight_dark_x: 18, 18, 18;
  --bg_highlight_x: 25, 25, 25;
  --bg_x: 15, 15, 15;
  --blockquote-background-color: rgba(187, 154, 247, 0.12);
  --blockquote-border-color: rgb(128, 208, 255);
  --blue: rgb(122, 162, 247);
  --blue0: rgb(61, 89, 161);
  --blue0_x: 61, 89, 161;
  --blue_x: 122, 162, 247;
  --blur-background: color-mix(in srgb, rgb(8, 8, 8) 65%, transparent) linear-gradient(rgb(8, 8, 8), color-mix(in srgb, rgb(8, 8, 8) 65%, transparent));
  --bold-color: rgb(125, 207, 255);
  --border-radius: 8px;
  --bullet-new-color: rgb(187, 154, 247);
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
  --canvas-background: #020202;
  --canvas-card-label-color: rgb(180, 180, 180);
  --canvas-controls-radius: 6px;
  --caret-color: rgb(220, 220, 220);
  --checkbox-border-color: rgb(120, 120, 120);
  --checkbox-border-color-hover: rgb(120, 120, 120);
  --checkbox-color: rgb(158, 206, 106);
  --checkbox-color-hover: hsl(199, 102%, 86.25%);
  --checkbox-marker-color: #020202;
  --checkbox-radius: 6px;
  --checklist-done-color: rgb(180, 180, 180);
  --clickable-icon-radius: 6px;
  --code-background: rgb(187, 154, 247, 0.05);
  --code-border-color: transparent;
  --code-bracket-background: rgba(25, 25, 25, 0.7);
  --code-comment: rgb(115, 125, 165);
  --code-comment_x: 115, 125, 165;
  --code-function: rgb(224, 175, 104);
  --code-important: rgb(255, 158, 100);
  --code-keyword: rgb(187, 154, 247);
  --code-normal: rgb(180, 180, 180);
  --code-operator: rgb(255, 117, 127);
  --code-property: rgb(125, 207, 255);
  --code-punctuation: rgb(180, 180, 180);
  --code-radius: 6px;
  --code-string: rgb(158, 206, 106);
  --code-tag: rgb(255, 117, 127);
  --code-value: rgb(187, 154, 247);
  --collapse-icon-color: rgb(180, 180, 180);
  --collapse-icon-color-collapsed: rgb(187, 154, 247);
  --color-accent: rgb(128, 208, 255);
  --color-accent-1: hsl(199, 102%, 86.25%);
  --color-accent-2: hsl(197, 105%, 96.75%);
  --color-accent-hsl: 202, 100%, 75%;
  --color-blue: rgb(122, 162, 247);
  --color-cyan: rgb(125, 207, 255);
  --color-green: rgb(158, 206, 106);
  --color-orange: rgb(255, 158, 100);
  --color-pink: rgb(187, 154, 247);
  --color-purple: rgb(187, 154, 247);
  --color-red: rgb(255, 117, 127);
  --color-yellow: rgb(224, 175, 104);
  --comment: rgb(120, 120, 120);
  --comment_x: 120, 120, 120;
  --cyan: rgb(125, 207, 255);
  --cyan_hsl: 202 100% 75%;
  --cyan_x: 125, 207, 255;
  --divider-color: transparent;
  --divider-color-hover: rgb(128, 208, 255);
  --divider-vertical-height: 0%;
  --dropdown-background: rgb(8, 8, 8);
  --dropdown-background-hover: rgb(25, 25, 25);
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --embed-border-start: 2px solid rgb(128, 208, 255);
  --embed-padding: 0 0 0 18px;
  --fg: rgb(220, 220, 220);
  --fg_dark: rgb(180, 180, 180);
  --fg_dark_x: 180, 180, 180;
  --fg_x: 220, 220, 220;
  --file-header-background: #020202;
  --file-header-background-focused: #020202;
  --file-margins: clamp(8px, 4vw, 24px);
  --flair-background: rgb(8, 8, 8);
  --flair-color: rgb(220, 220, 220);
  --folder-note-color: rgb(200, 190, 250);
  --folder-note-color_x: 200, 190, 250;
  --font-family-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-theme: 16px;
  --footnote-divider-color: transparent;
  --footnote-gap: 8px;
  --footnote-id-color: rgb(180, 180, 180);
  --footnote-id-color-no-occurrences: rgb(180, 180, 180);
  --footnote-input-background-active: rgba(25, 25, 25, 0.7);
  --footnote-line-height: 1.6;
  --footnote-radius: 6px;
  --frame-right-space: 80px;
  --graph-line: rgb(120, 120, 120);
  --graph-node: rgb(220, 220, 220);
  --graph-node-attachment: rgb(122, 162, 247);
  --graph-node-focused: rgb(187, 154, 247);
  --graph-node-tag: rgb(255, 158, 100);
  --graph-node-unresolved: rgb(180, 180, 180);
  --graph-text: rgb(220, 220, 220);
  --green: rgb(158, 206, 106);
  --green-dark: rgb(120, 156, 122);
  --green-dark_x: 120, 156, 122;
  --green_x: 158, 206, 106;
  --h1-color: rgb(255, 117, 127);
  --h2-color: rgb(187, 154, 247);
  --h3-color: rgb(158, 206, 106);
  --h4-color: rgb(125, 207, 255);
  --h5-color: rgb(122, 162, 247);
  --h5-line-height: 1.6;
  --h6-color: rgb(224, 175, 104);
  --h6-line-height: 1.6;
  --heading-formatting: rgb(180, 180, 180);
  --hr-color: transparent;
  --icon-color: rgb(180, 180, 180);
  --icon-color-active: rgb(187, 154, 247);
  --icon-color-focused: rgb(220, 220, 220);
  --icon-color-hover: rgb(180, 180, 180);
  --inline-title-color: rgb(255, 117, 127);
  --input-date-separator: rgb(180, 180, 180);
  --input-icon-inset: 8px;
  --input-padding: 8px 10px;
  --input-placeholder-color: rgb(180, 180, 180);
  --insertion-color: rgb(255, 158, 100);
  --interactive-accent: rgb(128, 208, 255);
  --interactive-accent-hover: hsl(199, 102%, 86.25%);
  --interactive-accent-hsl: 202, 100%, 75%;
  --interactive-hover: rgb(25, 25, 25);
  --interactive-normal: rgb(8, 8, 8);
  --interactive-success: rgb(158, 206, 106);
  --internal-link-color: rgb(158, 206, 106);
  --internal-link-color-hover: rgb(122, 162, 247);
  --italic-color: rgb(122, 162, 247);
  --line-height-normal: 1.6;
  --line-height-theme: 1.6;
  --link-color: rgb(187, 154, 247);
  --link-color-hover: rgb(125, 207, 255);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(187, 154, 247);
  --link-external-color-hover: rgb(125, 207, 255);
  --link-unresolved-color: rgb(187, 154, 247);
  --link-unresolved-decoration-color: rgba(128, 208, 255, 0.3);
  --list-indent: 2em;
  --list-marker-color: rgb(187, 154, 247);
  --list-marker-color-collapsed: rgb(180, 180, 180);
  --list-marker-color-hover: rgb(210, 180, 255);
  --list-number-color: rgb(187, 154, 247);
  --list-number-color-hover: rgb(210, 190, 255);
  --list-spacing: 0;
  --magent_hsl: 261 85% 79%;
  --magenta: rgb(187, 154, 247);
  --magenta-light: rgb(210, 190, 255);
  --magenta-light_x: 210, 190, 255;
  --magenta_x: 187, 154, 247;
  --menu-background: #020202;
  --menu-border-color: transparent;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-input-background-active: rgba(25, 25, 25, 0.7);
  --metadata-input-padding: 8px 10px;
  --metadata-input-text-color: rgb(220, 220, 220);
  --metadata-label-background-active: rgba(25, 25, 25, 0.7);
  --metadata-label-text-color: rgb(180, 180, 180);
  --metadata-label-text-color-hover: rgb(180, 180, 180);
  --metadata-padding: 10px 0;
  --metadata-property-background-active: rgba(25, 25, 25, 0.7);
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --modal-background: #020202;
  --motion-duration-fast: 0.15s;
  --motion-duration-medium: 0.25s;
  --motion-duration-slow: 0.35s;
  --motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --motion-easing-decelerate: cubic-bezier(0.0, 0, 0.2, 1);
  --motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --nav-collapse-icon-color: rgb(180, 180, 180);
  --nav-collapse-icon-color-collapsed: rgb(180, 180, 180);
  --nav-file-tag: rgba(224, 175, 104, 0.9);
  --nav-heading-color: rgb(220, 220, 220);
  --nav-heading-color-collapsed: rgb(180, 180, 180);
  --nav-heading-color-collapsed-hover: rgb(180, 180, 180);
  --nav-heading-color-hover: rgb(220, 220, 220);
  --nav-item-background-active: rgba(rgb(25, 25, 25), 0.2);
  --nav-item-background-hover: rgb(25, 25, 25);
  --nav-item-background-selected: rgba(128, 208, 255, 0.15);
  --nav-item-color: rgba(220, 220, 220, 0.9);
  --nav-item-color-active: rgb(220, 220, 220);
  --nav-item-color-highlighted: rgb(187, 154, 247);
  --nav-item-color-hover: rgb(220, 220, 220);
  --nav-item-color-selected: rgb(220, 220, 220);
  --nav-item-padding: 4px 8px 4px 18px;
  --nav-item-parent-padding: 4px 8px 4px 18px;
  --nav-item-radius: 6px;
  --nav-tag-color: rgb(180, 180, 180);
  --nav-tag-color-active: rgb(180, 180, 180);
  --nav-tag-color-hover: rgb(180, 180, 180);
  --nav-tag-radius: 6px;
  --orange: rgb(255, 158, 100);
  --orange_x: 255, 158, 100;
  --pdf-background: #020202;
  --pdf-page-background: #020202;
  --pdf-shadow: 0 0 0 1px transparent;
  --pdf-sidebar-background: #020202;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent;
  --pill-border-color: transparent;
  --pill-border-color-hover: transparent;
  --pill-color: rgb(180, 180, 180);
  --pill-color-hover: rgb(220, 220, 220);
  --pill-color-remove: rgb(180, 180, 180);
  --pill-color-remove-hover: rgb(187, 154, 247);
  --pink: rgb(217, 0, 105);
  --pink_hsl: 331 100% 43%;
  --pink_x: 217, 0, 105;
  --popover-height: 500px;
  --popover-width: 500px;
  --prompt-background: #020202;
  --purple: rgb(187, 154, 247);
  --purple-light: rgb(210, 180, 255);
  --purple-light_x: 210, 180, 255;
  --purple_x: 187, 154, 247;
  --radius-s: 6px;
  --raised-background: color-mix(in srgb, rgb(8, 8, 8) 65%, transparent) linear-gradient(rgb(8, 8, 8), color-mix(in srgb, rgb(8, 8, 8) 65%, transparent));
  --red: rgb(255, 117, 127);
  --red-dark: rgb(255, 117, 127);
  --red-dark_x: 155, 45, 45;
  --red1: rgb(219, 75, 75);
  --red1_x: 219, 75, 75;
  --red_x: 255, 117, 127;
  --ribbon-background: #020202;
  --ribbon-background-collapsed: #020202;
  --ribbon-padding: 10px 8px 12px;
  --scrollbar-active-thumb-bg: rgba(180, 180, 180, 0.4);
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: rgba(180, 180, 180, 0.2);
  --scrollbar-width: 10px;
  --search-clear-button-color: rgb(180, 180, 180);
  --search-icon-color: rgb(180, 180, 180);
  --search-result-background: #020202;
  --setting-group-heading-color: rgb(220, 220, 220);
  --setting-items-background: transparent;
  --setting-items-border-color: transparent;
  --setting-items-padding: 16px;
  --shadow-l: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  --shadow-m: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05);
  --size-4-1: 8px;
  --size-4-2: 10px;
  --size-4-4: 14px;
  --size-4-5: 16px;
  --size-4-6: 18px;
  --slider-thumb-border-color: transparent;
  --slider-track-background: transparent;
  --spoiler-background: rgba(25, 25, 25, 0.3);
  --spoiler-background-hover: rgba(25, 25, 25, 0.5);
  --spoiler-pattern: radial-gradient(circle 1px at 10px 8px, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
        radial-gradient(circle 1px at 30px 2px, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 50px 12px, rgba(255, 255, 255, 0.9) 50%, transparent 50%),
        radial-gradient(circle 1px at 70px 6px, rgba(255, 255, 255, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 15px 24px, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
        radial-gradient(circle 1px at 38px 28px, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 60px 36px, rgba(255, 255, 255, 0.9) 50%, transparent 50%),
        radial-gradient(circle 1px at 85px 22px, rgba(255, 255, 255, 0.7) 50%, transparent 50%);
  --status-bar-background: #020202;
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgb(180, 180, 180);
  --suggestion-background: #020202;
  --sync-avatar-color-1: rgb(255, 117, 127);
  --sync-avatar-color-2: rgb(255, 158, 100);
  --sync-avatar-color-3: rgb(224, 175, 104);
  --sync-avatar-color-4: rgb(158, 206, 106);
  --sync-avatar-color-5: rgb(125, 207, 255);
  --sync-avatar-color-6: rgb(122, 162, 247);
  --sync-avatar-color-7: rgb(187, 154, 247);
  --sync-avatar-color-8: rgb(187, 154, 247);
  --tab-background: rgba(2, 2, 2, 0.9);
  --tab-background-active: rgba(25, 25, 25, 0.95);
  --tab-background-hover: rgba(18, 18, 18, 0.8);
  --tab-container-background: #020202;
  --tab-divider-color: rgba(40, 40, 40, 0.3);
  --tab-max-width: 200px;
  --tab-min-width: 40px;
  --tab-outline-color: transparent;
  --tab-radius: 6px;
  --tab-switcher-background: #020202;
  --tab-switcher-menubar-background: linear-gradient(to top, #020202, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(128, 208, 255);
  --tab-text-color: rgb(180, 180, 180);
  --tab-text-color-active: rgb(180, 180, 180);
  --tab-text-color-focused: rgb(180, 180, 180);
  --tab-text-color-focused-active: rgb(180, 180, 180);
  --tab-text-color-focused-active-current: rgb(220, 220, 220);
  --tab-text-color-focused-highlighted: rgb(187, 154, 247);
  --tab-width: 120px;
  --table-add-button-border-color: transparent;
  --table-drag-handle-background-active: rgb(128, 208, 255);
  --table-drag-handle-color: rgb(180, 180, 180);
  --table-drag-handle-color-active: rgb(15, 15, 15);
  --table-header-background: rgb(2, 2, 2);
  --table-header-background-hover: rgb(2, 2, 2);
  --table-header-color: rgb(220, 220, 220);
  --table-selection: rgba(128, 208, 255, 0.1);
  --table-selection-border-color: rgb(128, 208, 255);
  --tag-background: rgba(187, 154, 247, 0.15);
  --tag-background-hover: rgba(125, 207, 255, 0.15);
  --tag-border-color: rgba(128, 208, 255, 0.15);
  --tag-border-color-hover: rgba(128, 208, 255, 0.15);
  --tag-color: rgb(187, 154, 247);
  --tag-color-hover: rgb(125, 207, 255);
  --teal: rgb(26, 188, 156);
  --teal_x: 26, 188, 156;
  --terminal_black: rgb(65, 72, 104);
  --terminal_black_x: 65, 72, 104;
  --text-accent: rgb(187, 154, 247);
  --text-accent-hover: rgb(125, 207, 255);
  --text-error: rgb(219, 75, 75);
  --text-error-hover: rgb(255, 117, 127);
  --text-faint: rgb(180, 180, 180);
  --text-highlight-bg: rgba(255, 158, 100, 0.25);
  --text-muted: rgb(180, 180, 180);
  --text-muted-rgb: 180, 180, 180;
  --text-normal: rgb(220, 220, 220);
  --text-on-accent: rgb(15, 15, 15);
  --text-selection: rgba(128, 208, 255, 0.33);
  --text-success: rgb(158, 206, 106);
  --text-warning: rgb(255, 158, 100);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: transparent;
  --titlebar-height: 40px;
  --titlebar-text-color: rgb(180, 180, 180);
  --titlebar-text-color-focused: rgb(220, 220, 220);
  --unknown: #ffffff;
  --vault-profile-color: rgb(220, 220, 220);
  --vault-profile-color-hover: rgb(220, 220, 220);
  --workspace-background-translucent: rgba(2, 2, 2, 0.9);
  --yellow: rgb(224, 175, 104);
  --yellow_x: 224, 175, 104;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 2, 2);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 220, 220);
}

body div#quartz-root {
  background-color: rgb(2, 2, 2);
  color: rgb(220, 220, 220);
}`,
    typography: `body .page article p > b, b {
  color: rgb(125, 207, 255);
  font-weight: 700;
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

body .page article p > em, em {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

body .page article p > i, i {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

body .page article p > strong, strong {
  color: rgb(125, 207, 255);
  font-weight: 700;
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

body .text-highlight {
  background-color: rgba(255, 158, 100, 0.25);
  color: rgb(220, 220, 220);
  font-weight: 500;
  outline: rgb(220, 220, 220) none 0px;
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body del {
  color: rgb(219, 75, 75);
  outline: rgb(219, 75, 75) none 0px;
  text-decoration: line-through rgb(219, 75, 75);
  text-decoration-color: rgb(219, 75, 75);
}

body p {
  color: rgb(180, 180, 180);
  outline: rgb(180, 180, 180) none 0px;
  text-decoration: rgb(180, 180, 180);
  text-decoration-color: rgb(180, 180, 180);
}`,
    links: `body a.external, footer a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(158, 206, 106);
  outline: rgb(158, 206, 106) none 0px;
  text-decoration: rgb(158, 206, 106);
  text-decoration-color: rgb(158, 206, 106);
}

body a.internal.broken {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}`,
    lists: `body dd {
  color: rgb(220, 220, 220);
}

body dt {
  color: rgb(220, 220, 220);
}

body ol > li {
  color: rgb(220, 220, 220);
}

body ol.overflow {
  background-color: rgb(2, 2, 2);
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body ul > li {
  color: rgb(220, 220, 220);
}

body ul.overflow {
  background-color: rgb(2, 2, 2);
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(180, 180, 180);
  text-decoration: rgb(180, 180, 180);
}

body blockquote {
  background-color: rgba(187, 154, 247, 0.12);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body table {
  color: rgb(220, 220, 220);
  width: 230.219px;
}

body td {
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

body th {
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

body tr {
  background-color: rgb(2, 2, 2);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(224, 175, 104);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(224, 175, 104);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(224, 175, 104);
  border-left-color: rgb(224, 175, 104);
  border-right-color: rgb(224, 175, 104);
  border-top-color: rgb(224, 175, 104);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body figcaption {
  color: rgb(220, 220, 220);
}

body figure {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body img {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body video {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
}

body .transclude {
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

body .transclude-inner {
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
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(180, 180, 180);
  text-decoration: line-through rgb(180, 180, 180);
  text-decoration-color: rgb(180, 180, 180);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 220, 220);
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgba(15, 15, 15, 0.25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 25px 50px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 220, 220);
  outline: rgb(220, 220, 220) none 0px;
  text-decoration: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(128, 208, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(128, 208, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(128, 208, 255);
  border-top-color: rgb(128, 208, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(128, 208, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(128, 208, 255, 0.2);
  color: rgb(128, 208, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(128, 208, 255, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(128, 208, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(187, 154, 247);
}

body h1 {
  color: rgb(255, 117, 127);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h2 {
  color: rgb(187, 154, 247);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 117, 127);
}

body h3 {
  color: rgb(158, 206, 106);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h4 {
  color: rgb(125, 207, 255);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h5 {
  color: rgb(122, 162, 247);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h6 {
  color: rgb(224, 175, 104);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

body ::-webkit-scrollbar-corner {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}

body ::-webkit-scrollbar-track {
  background: rgb(2, 2, 2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 2, 2);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(220, 220, 220, 0.9);
  text-decoration: rgba(220, 220, 220, 0.9);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(220, 220, 220, 0.9);
  text-decoration: rgba(220, 220, 220, 0.9);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(220, 220, 220, 0.9);
  text-decoration: rgba(220, 220, 220, 0.9);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(220, 220, 220);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(2, 2, 2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(180, 180, 180);
}

body footer ul li a {
  color: rgb(180, 180, 180);
  text-decoration: rgb(180, 180, 180);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 220, 220);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(220, 220, 220, 0.9);
  text-decoration: rgba(220, 220, 220, 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(220, 220, 220, 0.9);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body li.section-li > .section .meta {
  color: rgba(220, 220, 220, 0.9);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(220, 220, 220, 0.9);
  text-decoration: rgba(220, 220, 220, 0.9);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(180, 180, 180);
  stroke: rgb(180, 180, 180);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(180, 180, 180);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
  color: rgb(220, 220, 220);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(180, 180, 180);
  padding-bottom: 10px;
  padding-top: 10px;
}

body .metadata-properties {
  border-bottom-color: rgb(180, 180, 180);
  border-left-color: rgb(180, 180, 180);
  border-right-color: rgb(180, 180, 180);
  border-top-color: rgb(180, 180, 180);
  color: rgb(180, 180, 180);
}

body .navigation-progress {
  background-color: rgb(2, 2, 2);
}

body .page-header h2.page-title {
  color: rgb(220, 220, 220);
}

body abbr {
  color: rgb(220, 220, 220);
  text-decoration: underline dotted rgb(220, 220, 220);
}

body details {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body input[type=text] {
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

body kbd {
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

body progress {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-right-color: rgb(220, 220, 220);
  border-top-color: rgb(220, 220, 220);
}

body sub {
  color: rgb(220, 220, 220);
}

body summary {
  color: rgb(220, 220, 220);
}

body sup {
  color: rgb(220, 220, 220);
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: rgb(129, 71, 209);
  --accent-h: 265;
  --accent-l: 55%;
  --accent-s: 60%;
  --background-modifier: rgba(255, 255, 255, 0.5);
  --background-modifier-active-hover: rgb(255, 255, 255);
  --background-modifier-border: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(240, 242, 246, 0.8);
  --background-modifier-error: rgb(200, 50, 70);
  --background-modifier-error-hover: rgb(200, 50, 70);
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-highlighted: rgb(240, 242, 246);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: rgba(255, 255, 255, 0.7);
  --background-modifier-hover-rgb: 255, 255, 255;
  --background-modifier-message: rgba(255, 255, 255, 0.9);
  --background-modifier-success: rgb(20, 140, 80);
  --background-primary: #f8fafc;
  --background-primary-alt: rgb(248, 250, 252);
  --background-primary-rgb: 248, 250, 252;
  --background-secondary: #f8fafc;
  --background-secondary-alt: rgb(240, 242, 246);
  --background-secondary-rgb: 240, 242, 246;
  --bases-cards-background: #f8fafc;
  --bases-cards-cover-background: rgb(248, 250, 252);
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-embed-border-radius: 6px;
  --bases-group-heading-property-color: rgb(75, 85, 95);
  --bases-table-cell-background-active: #f8fafc;
  --bases-table-cell-background-disabled: rgb(248, 250, 252);
  --bases-table-cell-background-selected: rgba(129, 71, 209, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(129, 71, 209);
  --bases-table-container-border-radius: 6px;
  --bases-table-group-background: rgb(248, 250, 252);
  --bases-table-header-background: #f8fafc;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.7);
  --bases-table-header-color: rgb(75, 85, 95);
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 18px, black 18px);
  --bases-table-summary-background: #f8fafc;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.7);
  --bg: rgb(248, 250, 252);
  --bg_dark: rgb(240, 242, 246);
  --bg_dark2: rgb(230, 232, 236);
  --bg_dark2_x: 230, 232, 236;
  --bg_dark_x: 240, 242, 246;
  --bg_highlight: rgb(255, 255, 255);
  --bg_highlight_dark: rgb(235, 238, 242);
  --bg_highlight_dark_x: 235, 238, 242;
  --bg_highlight_x: 255, 255, 255;
  --bg_x: 248, 250, 252;
  --blockquote-background-color: rgba(102, 63, 191, 0.08);
  --blockquote-border-color: rgb(129, 71, 209);
  --blue: rgb(30, 70, 160);
  --blue0: rgb(25, 55, 100);
  --blue0_x: 25, 55, 100;
  --blue_x: 30, 70, 160;
  --blur-background: color-mix(in srgb, #f8fafc 65%, transparent) linear-gradient(#f8fafc, color-mix(in srgb, #f8fafc 65%, transparent));
  --bold-color: rgb(0, 120, 180);
  --border-radius: 8px;
  --bullet-new-color: rgb(102, 63, 191);
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
  --canvas-background: #f8fafc;
  --canvas-card-label-color: rgb(75, 85, 95);
  --canvas-controls-radius: 6px;
  --caret-color: rgb(30, 35, 42);
  --checkbox-border-color: rgb(120, 125, 135);
  --checkbox-border-color-hover: rgb(120, 125, 135);
  --checkbox-color: rgb(20, 140, 80);
  --checkbox-color-hover: rgb(145, 103, 218);
  --checkbox-marker-color: #f8fafc;
  --checkbox-radius: 6px;
  --checklist-done-color: rgb(75, 85, 95);
  --clickable-icon-radius: 6px;
  --code-background: rgba(102, 63, 191, 0.06);
  --code-border-color: transparent;
  --code-bracket-background: rgba(255, 255, 255, 0.7);
  --code-comment: rgb(110, 115, 125);
  --code-comment_x: 110, 115, 125;
  --code-function: rgb(180, 120, 0);
  --code-important: rgb(220, 100, 20);
  --code-keyword: rgb(160, 30, 140);
  --code-normal: rgb(30, 35, 42);
  --code-operator: rgb(200, 50, 70);
  --code-property: rgb(0, 120, 180);
  --code-punctuation: rgb(75, 85, 95);
  --code-radius: 6px;
  --code-string: rgb(20, 140, 80);
  --code-tag: rgb(200, 50, 70);
  --code-value: rgb(160, 30, 140);
  --collapse-icon-color: rgb(75, 85, 95);
  --collapse-icon-color-collapsed: rgb(160, 30, 140);
  --color-accent: rgb(129, 71, 209);
  --color-accent-1: rgb(138, 87, 214);
  --color-accent-2: rgb(145, 103, 218);
  --color-accent-hsl: 265, 60%, 55%;
  --color-blue: rgb(30, 70, 160);
  --color-cyan: rgb(0, 120, 180);
  --color-green: rgb(20, 140, 80);
  --color-orange: rgb(220, 100, 20);
  --color-pink: rgb(160, 30, 140);
  --color-purple: rgb(160, 30, 140);
  --color-red: rgb(200, 50, 70);
  --color-yellow: rgb(180, 120, 0);
  --comment: rgb(120, 125, 135);
  --comment_x: 120, 125, 135;
  --cyan: rgb(0, 120, 180);
  --cyan_x: 0, 120, 180;
  --divider-color: transparent;
  --divider-color-hover: rgb(129, 71, 209);
  --divider-vertical-height: 0%;
  --dropdown-background: #e2e8f0;
  --dropdown-background-hover: #cbd5e1;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --embed-border-start: 2px solid rgb(129, 71, 209);
  --embed-padding: 0 0 0 18px;
  --fg: rgb(30, 35, 42);
  --fg_dark: rgb(75, 85, 95);
  --fg_dark_x: 75, 85, 95;
  --fg_x: 30, 35, 42;
  --file-header-background: #f8fafc;
  --file-header-background-focused: #f8fafc;
  --file-margins: clamp(8px, 4vw, 24px);
  --flair-background: #e2e8f0;
  --flair-color: rgb(30, 35, 42);
  --folder-note-color: rgb(120, 85, 200);
  --folder-note-color_x: 120, 85, 200;
  --font-family-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-theme: 16px;
  --footnote-divider-color: transparent;
  --footnote-gap: 8px;
  --footnote-id-color: rgb(75, 85, 95);
  --footnote-id-color-no-occurrences: rgb(75, 85, 95);
  --footnote-input-background-active: rgba(255, 255, 255, 0.7);
  --footnote-line-height: 1.6;
  --footnote-radius: 6px;
  --frame-right-space: 80px;
  --graph-line: rgb(120, 125, 135);
  --graph-node: rgb(30, 35, 42);
  --graph-node-attachment: rgb(30, 70, 160);
  --graph-node-focused: rgb(160, 30, 140);
  --graph-node-tag: rgb(220, 100, 20);
  --graph-node-unresolved: rgb(75, 85, 95);
  --graph-text: rgb(30, 35, 42);
  --green: rgb(20, 140, 80);
  --green_x: 20, 140, 80;
  --h1-color: rgb(200, 50, 70);
  --h2-color: rgb(102, 63, 191);
  --h3-color: rgb(20, 140, 80);
  --h4-color: rgb(0, 120, 180);
  --h5-color: rgb(30, 70, 160);
  --h5-line-height: 1.6;
  --h6-color: rgb(180, 120, 0);
  --h6-line-height: 1.6;
  --heading-formatting: rgb(75, 85, 95);
  --hr-color: transparent;
  --icon-color: rgb(75, 85, 95);
  --icon-color-active: rgb(160, 30, 140);
  --icon-color-focused: rgb(30, 35, 42);
  --icon-color-hover: rgb(75, 85, 95);
  --inline-title-color: rgb(200, 50, 70);
  --input-date-separator: rgb(75, 85, 95);
  --input-icon-inset: 8px;
  --input-padding: 8px 10px;
  --input-placeholder-color: rgb(75, 85, 95);
  --insertion-color: rgb(220, 100, 20);
  --interactive-accent: rgb(129, 71, 209);
  --interactive-accent-hover: rgb(145, 103, 218);
  --interactive-accent-hsl: 265, 60%, 55%;
  --interactive-hover: #cbd5e1;
  --interactive-normal: #e2e8f0;
  --interactive-success: rgb(20, 140, 80);
  --internal-link-color: rgb(20, 140, 80);
  --internal-link-color-hover: rgb(30, 70, 160);
  --italic-color: rgb(30, 70, 160);
  --line-height-normal: 1.6;
  --line-height-theme: 1.6;
  --link-color: rgb(102, 63, 191);
  --link-color-hover: rgb(0, 120, 180);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(102, 63, 191);
  --link-external-color-hover: rgb(0, 120, 180);
  --link-unresolved-color: rgb(160, 30, 140);
  --link-unresolved-decoration-color: rgba(129, 71, 209, 0.3);
  --list-indent: 2em;
  --list-marker-color: rgb(102, 63, 191);
  --list-marker-color-collapsed: rgb(75, 85, 95);
  --list-marker-color-hover: rgb(140, 100, 220);
  --list-number-color: rgb(160, 30, 140);
  --list-number-color-hover: rgb(180, 60, 200);
  --list-spacing: 0;
  --magent_hsl: 261 65% 50%;
  --magenta: rgb(160, 30, 140);
  --magenta-light: rgb(180, 60, 200);
  --magenta-light_x: 180, 60, 200;
  --magenta_x: 160, 30, 140;
  --menu-background: #f8fafc;
  --menu-border-color: transparent;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-input-background-active: rgba(255, 255, 255, 0.7);
  --metadata-input-padding: 8px 10px;
  --metadata-input-text-color: rgb(30, 35, 42);
  --metadata-label-background-active: rgba(255, 255, 255, 0.7);
  --metadata-label-text-color: rgb(75, 85, 95);
  --metadata-label-text-color-hover: rgb(75, 85, 95);
  --metadata-padding: 10px 0;
  --metadata-property-background-active: rgba(255, 255, 255, 0.7);
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --modal-background: #f8fafc;
  --motion-duration-fast: 0.15s;
  --motion-duration-medium: 0.25s;
  --motion-duration-slow: 0.35s;
  --motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --motion-easing-decelerate: cubic-bezier(0.0, 0, 0.2, 1);
  --motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --nav-collapse-icon-color: rgb(75, 85, 95);
  --nav-collapse-icon-color-collapsed: rgb(75, 85, 95);
  --nav-file-tag: rgba(180, 120, 0, 0.9);
  --nav-heading-color: rgb(30, 35, 42);
  --nav-heading-color-collapsed: rgb(75, 85, 95);
  --nav-heading-color-collapsed-hover: rgb(75, 85, 95);
  --nav-heading-color-hover: rgb(30, 35, 42);
  --nav-item-background-active: rgba(rgb(255, 255, 255), 0.2);
  --nav-item-background-hover: rgb(255, 255, 255);
  --nav-item-background-selected: rgba(129, 71, 209, 0.15);
  --nav-item-color: rgba(30, 35, 42, 0.9);
  --nav-item-color-active: rgb(30, 35, 42);
  --nav-item-color-highlighted: rgb(160, 30, 140);
  --nav-item-color-hover: rgb(30, 35, 42);
  --nav-item-color-selected: rgb(30, 35, 42);
  --nav-item-padding: 4px 8px 4px 18px;
  --nav-item-parent-padding: 4px 8px 4px 18px;
  --nav-item-radius: 6px;
  --nav-tag-color: rgb(75, 85, 95);
  --nav-tag-color-active: rgb(75, 85, 95);
  --nav-tag-color-hover: rgb(75, 85, 95);
  --nav-tag-radius: 6px;
  --orange: rgb(220, 100, 20);
  --orange_x: 220, 100, 20;
  --pdf-background: #f8fafc;
  --pdf-page-background: #f8fafc;
  --pdf-sidebar-background: #f8fafc;
  --pill-border-color: transparent;
  --pill-border-color-hover: transparent;
  --pill-color: rgb(75, 85, 95);
  --pill-color-hover: rgb(30, 35, 42);
  --pill-color-remove: rgb(75, 85, 95);
  --pill-color-remove-hover: rgb(160, 30, 140);
  --pink: rgb(200, 30, 140);
  --pink_hsl: 320 65% 50%;
  --pink_x: 200, 30, 140;
  --popover-height: 500px;
  --popover-width: 500px;
  --prompt-background: #f8fafc;
  --purple: rgb(102, 63, 191);
  --purple-light: rgb(140, 100, 220);
  --purple-light_x: 140, 100, 220;
  --purple_x: 102, 63, 191;
  --radius-s: 6px;
  --raised-background: color-mix(in srgb, #f8fafc 65%, transparent) linear-gradient(#f8fafc, color-mix(in srgb, #f8fafc 65%, transparent));
  --red: rgb(200, 50, 70);
  --red1: rgb(180, 30, 50);
  --red1_x: 180, 30, 50;
  --red_x: 200, 50, 70;
  --ribbon-background: #f8fafc;
  --ribbon-background-collapsed: #f8fafc;
  --ribbon-padding: 10px 8px 12px;
  --scrollbar-active-thumb-bg: rgba(75, 85, 95, 0.4);
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: rgba(75, 85, 95, 0.2);
  --scrollbar-width: 10px;
  --search-clear-button-color: rgb(75, 85, 95);
  --search-icon-color: rgb(75, 85, 95);
  --search-result-background: #f8fafc;
  --setting-group-heading-color: rgb(30, 35, 42);
  --setting-items-background: transparent;
  --setting-items-border-color: transparent;
  --setting-items-padding: 16px;
  --shadow-l: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  --shadow-m: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05);
  --size-4-1: 8px;
  --size-4-2: 10px;
  --size-4-4: 14px;
  --size-4-5: 16px;
  --size-4-6: 18px;
  --slider-thumb-border-color: transparent;
  --slider-track-background: transparent;
  --spoiler-background: rgba(240, 242, 246, 0.5);
  --spoiler-background-hover: rgba(240, 242, 246, 0.7);
  --spoiler-pattern: radial-gradient(circle 1px at 10px 8px, rgba(100, 100, 100, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 30px 2px, rgba(100, 100, 100, 0.4) 50%, transparent 50%),
        radial-gradient(circle 1px at 50px 12px, rgba(100, 100, 100, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 70px 6px, rgba(100, 100, 100, 0.5) 50%, transparent 50%),
        radial-gradient(circle 1px at 15px 24px, rgba(100, 100, 100, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 38px 28px, rgba(100, 100, 100, 0.4) 50%, transparent 50%),
        radial-gradient(circle 1px at 60px 36px, rgba(100, 100, 100, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 85px 22px, rgba(100, 100, 100, 0.5) 50%, transparent 50%);
  --status-bar-background: #f8fafc;
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgb(75, 85, 95);
  --suggestion-background: #f8fafc;
  --sync-avatar-color-1: rgb(200, 50, 70);
  --sync-avatar-color-2: rgb(220, 100, 20);
  --sync-avatar-color-3: rgb(180, 120, 0);
  --sync-avatar-color-4: rgb(20, 140, 80);
  --sync-avatar-color-5: rgb(0, 120, 180);
  --sync-avatar-color-6: rgb(30, 70, 160);
  --sync-avatar-color-7: rgb(160, 30, 140);
  --sync-avatar-color-8: rgb(160, 30, 140);
  --tab-background: rgba(240, 242, 246, 0.9);
  --tab-background-active: rgba(255, 255, 255, 0.95);
  --tab-background-hover: rgba(248, 250, 252, 0.8);
  --tab-container-background: #f8fafc;
  --tab-divider-color: rgba(200, 205, 210, 0.4);
  --tab-max-width: 200px;
  --tab-min-width: 40px;
  --tab-outline-color: transparent;
  --tab-radius: 6px;
  --tab-switcher-background: #f8fafc;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fafc, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(129, 71, 209);
  --tab-text-color: rgb(75, 85, 95);
  --tab-text-color-active: rgb(75, 85, 95);
  --tab-text-color-focused: rgb(75, 85, 95);
  --tab-text-color-focused-active: rgb(75, 85, 95);
  --tab-text-color-focused-active-current: rgb(30, 35, 42);
  --tab-text-color-focused-highlighted: rgb(160, 30, 140);
  --tab-width: 120px;
  --table-add-button-border-color: transparent;
  --table-drag-handle-background-active: rgb(129, 71, 209);
  --table-drag-handle-color: rgb(75, 85, 95);
  --table-drag-handle-color-active: rgb(248, 250, 252);
  --table-header-background: rgb(230, 232, 236);
  --table-header-background-hover: rgb(230, 232, 236);
  --table-header-color: rgb(30, 35, 42);
  --table-selection: rgba(129, 71, 209, 0.1);
  --table-selection-border-color: rgb(129, 71, 209);
  --tag-background: rgba(160, 30, 140, 0.15);
  --tag-background-hover: rgba(0, 120, 180, 0.15);
  --tag-border-color: rgba(129, 71, 209, 0.15);
  --tag-border-color-hover: rgba(129, 71, 209, 0.15);
  --tag-color: rgb(160, 30, 140);
  --tag-color-hover: rgb(0, 120, 180);
  --teal: rgb(0, 140, 160);
  --teal_x: 0, 140, 160;
  --terminal_black: rgb(15, 15, 20);
  --terminal_black_x: 15, 15, 20;
  --text-accent: rgb(160, 30, 140);
  --text-accent-hover: rgb(0, 120, 180);
  --text-error: rgb(180, 30, 50);
  --text-error-hover: rgb(200, 50, 70);
  --text-faint: rgb(75, 85, 95);
  --text-highlight-bg: rgba(220, 100, 20, 0.25);
  --text-muted: rgb(75, 85, 95);
  --text-muted-rgb: 75, 85, 95;
  --text-normal: rgb(30, 35, 42);
  --text-on-accent: rgb(248, 250, 252);
  --text-selection: rgba(129, 71, 209, 0.2);
  --text-success: rgb(20, 140, 80);
  --text-warning: rgb(220, 100, 20);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: transparent;
  --titlebar-height: 40px;
  --titlebar-text-color: rgb(75, 85, 95);
  --titlebar-text-color-focused: rgb(30, 35, 42);
  --unknown: #000000;
  --vault-profile-color: rgb(30, 35, 42);
  --vault-profile-color-hover: rgb(30, 35, 42);
  --yellow: rgb(180, 120, 0);
  --yellow_x: 180, 120, 0;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 250, 252);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(30, 35, 42);
}

body div#quartz-root {
  background-color: rgb(248, 250, 252);
  color: rgb(30, 35, 42);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 120, 180);
  font-weight: 700;
  outline: rgb(0, 120, 180) none 0px;
  text-decoration: rgb(0, 120, 180);
  text-decoration-color: rgb(0, 120, 180);
}

body .page article p > em, em {
  color: rgb(30, 70, 160);
  outline: rgb(30, 70, 160) none 0px;
  text-decoration: rgb(30, 70, 160);
  text-decoration-color: rgb(30, 70, 160);
}

body .page article p > i, i {
  color: rgb(30, 70, 160);
  outline: rgb(30, 70, 160) none 0px;
  text-decoration: rgb(30, 70, 160);
  text-decoration-color: rgb(30, 70, 160);
}

body .page article p > strong, strong {
  color: rgb(0, 120, 180);
  font-weight: 700;
  outline: rgb(0, 120, 180) none 0px;
  text-decoration: rgb(0, 120, 180);
  text-decoration-color: rgb(0, 120, 180);
}

body .text-highlight {
  background-color: rgba(220, 100, 20, 0.25);
  color: rgb(30, 35, 42);
  font-weight: 500;
  outline: rgb(30, 35, 42) none 0px;
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body del {
  color: rgb(180, 30, 50);
  outline: rgb(180, 30, 50) none 0px;
  text-decoration: line-through rgb(180, 30, 50);
  text-decoration-color: rgb(180, 30, 50);
}

body p {
  color: rgb(75, 85, 95);
  outline: rgb(75, 85, 95) none 0px;
  text-decoration: rgb(75, 85, 95);
  text-decoration-color: rgb(75, 85, 95);
}`,
    links: `body a.external, footer a {
  color: rgb(102, 63, 191);
  outline: rgb(102, 63, 191) none 0px;
  text-decoration: rgb(102, 63, 191);
  text-decoration-color: rgb(102, 63, 191);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(20, 140, 80);
  outline: rgb(20, 140, 80) none 0px;
  text-decoration: rgb(20, 140, 80);
  text-decoration-color: rgb(20, 140, 80);
}

body a.internal.broken {
  color: rgb(160, 30, 140);
  outline: rgb(160, 30, 140) none 0px;
  text-decoration: rgb(160, 30, 140);
  text-decoration-color: rgb(160, 30, 140);
}`,
    lists: `body dd {
  color: rgb(30, 35, 42);
}

body dt {
  color: rgb(30, 35, 42);
}

body ol > li {
  color: rgb(30, 35, 42);
}

body ol.overflow {
  background-color: rgb(248, 250, 252);
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body ul > li {
  color: rgb(30, 35, 42);
}

body ul.overflow {
  background-color: rgb(248, 250, 252);
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(75, 85, 95);
  text-decoration: rgb(75, 85, 95);
}

body blockquote {
  background-color: rgba(102, 63, 191, 0.08);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body table {
  color: rgb(30, 35, 42);
  width: 230.219px;
}

body td {
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

body th {
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

body tr {
  background-color: rgb(230, 232, 236);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(180, 120, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(180, 120, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(180, 120, 0);
  border-left-color: rgb(180, 120, 0);
  border-right-color: rgb(180, 120, 0);
  border-top-color: rgb(180, 120, 0);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body figcaption {
  color: rgb(30, 35, 42);
}

body figure {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body img {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body video {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(30, 35, 42);
  color: rgb(30, 35, 42);
}

body .transclude {
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

body .transclude-inner {
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
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(75, 85, 95);
  text-decoration: line-through rgb(75, 85, 95);
  text-decoration-color: rgb(75, 85, 95);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='*'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='-'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='/'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='>'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='?'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='I'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='S'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='b'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='c'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='d'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='f'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='i'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='k'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='l'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='p'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='u'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body li.task-list-item[data-task='w'] {
  color: rgb(30, 35, 42);
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(30, 70, 160);
  border-left-color: rgb(30, 70, 160);
  border-right-color: rgb(30, 70, 160);
  border-top-color: rgb(30, 70, 160);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgba(248, 250, 252, 0.25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 25px 50px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(30, 35, 42);
  outline: rgb(30, 35, 42) none 0px;
  text-decoration: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(129, 71, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(129, 71, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(129, 71, 209);
  border-right-color: rgb(129, 71, 209);
  border-top-color: rgb(129, 71, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(129, 71, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(129, 71, 209, 0.2);
  color: rgb(129, 71, 209);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(129, 71, 209, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(129, 71, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(160, 30, 140, 0.15);
  border-bottom-color: rgba(129, 71, 209, 0.15);
  border-left-color: rgba(129, 71, 209, 0.15);
  border-right-color: rgba(129, 71, 209, 0.15);
  border-top-color: rgba(129, 71, 209, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(160, 30, 140);
}

body h1 {
  color: rgb(200, 50, 70);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h2 {
  color: rgb(102, 63, 191);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(200, 50, 70);
}

body h3 {
  color: rgb(20, 140, 80);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h4 {
  color: rgb(0, 120, 180);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h5 {
  color: rgb(30, 70, 160);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body h6 {
  color: rgb(180, 120, 0);
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 250, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(30, 35, 42, 0.9);
  text-decoration: rgba(30, 35, 42, 0.9);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(30, 35, 42, 0.9);
  text-decoration: rgba(30, 35, 42, 0.9);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(30, 35, 42, 0.9);
  text-decoration: rgba(30, 35, 42, 0.9);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(30, 35, 42);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(248, 250, 252);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(226, 232, 240);
  color: rgb(100, 116, 139);
}

body footer ul li a {
  color: rgb(100, 116, 139);
  text-decoration: rgb(100, 116, 139);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(30, 35, 42);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
  color: rgb(30, 35, 42);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(30, 35, 42, 0.9);
  text-decoration: rgba(30, 35, 42, 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(30, 35, 42, 0.9);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body li.section-li > .section .meta {
  color: rgba(30, 35, 42, 0.9);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(30, 35, 42, 0.9);
  text-decoration: rgba(30, 35, 42, 0.9);
}

body ul.section-ul {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(75, 85, 95);
  stroke: rgb(75, 85, 95);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(75, 85, 95);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
  color: rgb(30, 35, 42);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(75, 85, 95);
  padding-bottom: 10px;
  padding-top: 10px;
}

body .metadata-properties {
  border-bottom-color: rgb(75, 85, 95);
  border-left-color: rgb(75, 85, 95);
  border-right-color: rgb(75, 85, 95);
  border-top-color: rgb(75, 85, 95);
  color: rgb(75, 85, 95);
}

body .navigation-progress {
  background-color: rgb(248, 250, 252);
}

body .page-header h2.page-title {
  color: rgb(30, 35, 42);
}

body abbr {
  color: rgb(30, 35, 42);
  text-decoration: underline dotted rgb(30, 35, 42);
}

body details {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body input[type=text] {
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

body kbd {
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

body progress {
  border-bottom-color: rgb(30, 35, 42);
  border-left-color: rgb(30, 35, 42);
  border-right-color: rgb(30, 35, 42);
  border-top-color: rgb(30, 35, 42);
}

body sub {
  color: rgb(30, 35, 42);
}

body summary {
  color: rgb(30, 35, 42);
}

body sup {
  color: rgb(30, 35, 42);
}`,
  },
};
