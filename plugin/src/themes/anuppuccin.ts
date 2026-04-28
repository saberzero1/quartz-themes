import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "anuppuccin",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["noto-serif"],
    styleSettingsId: "anuppuccin-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anp-bold-color: 243, 139, 168;
  --anp-header-font: "Noto Serif";
  --anp-header-margin-value: 15px;
  --anp-highlight-color: 249, 226, 175;
  --anp-italic-color: 166, 227, 161;
  --anp-preview-width-max: 800px;
  --anp-preview-width-pct: 95%;
  --anp-rainbow-folder-bg-opacity: 1;
  --anp-rainbow-folder-border-opacity: 1;
  --anp-rainbow-folder-collapse-border-custom: #00000044;
  --anp-speech-bubble-opacity: 0.9;
  --anp-table-width-pct: 100%;
  --background-modifier-active: rgba(245, 224, 220, 0.1);
  --background-modifier-active-hover: rgba(245, 224, 220, 0.15);
  --background-modifier-border: rgb(49, 50, 68);
  --background-modifier-border-focus: rgb(86, 89, 112);
  --background-modifier-border-hover: rgb(67, 70, 90);
  --background-modifier-cover: rgba(24, 24, 37, 0.4);
  --background-modifier-error: rgb(243, 139, 168);
  --background-modifier-error-hover: rgba(243, 139, 168, 0.9);
  --background-modifier-error-rgb: 243, 139, 168;
  --background-modifier-form-field: rgba(17, 17, 27, 0.3);
  --background-modifier-form-field-hover: rgba(17, 17, 27, 0.3);
  --background-modifier-hover: rgba(198, 208, 245, 0.075);
  --background-modifier-message: rgba(17, 17, 27, 0.9);
  --background-modifier-success: rgb(166, 227, 161);
  --background-modifier-success-hover: rgba(166, 227, 161, 0.9);
  --background-modifier-success-rgb: 166, 227, 161;
  --background-primary: rgb(30, 30, 46);
  --background-primary-alt: rgb(24, 24, 37);
  --background-secondary: rgb(24, 24, 37);
  --background-secondary-alt: rgb(17, 17, 27);
  --bases-cards-background: rgb(30, 30, 46);
  --bases-cards-cover-background: rgb(24, 24, 37);
  --bases-cards-shadow: 0 0 0 1px rgb(49, 50, 68);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(67, 70, 90);
  --bases-embed-border-color: rgb(49, 50, 68);
  --bases-group-heading-property-color: rgb(142, 149, 179);
  --bases-table-border-color: rgb(49, 50, 68);
  --bases-table-cell-background-active: rgb(30, 30, 46);
  --bases-table-cell-background-disabled: rgb(24, 24, 37);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(86, 89, 112);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 224, 220);
  --bases-table-group-background: rgb(24, 24, 37);
  --bases-table-header-background: rgb(30, 30, 46);
  --bases-table-header-background-hover: rgba(198, 208, 245, 0.075);
  --bases-table-header-color: rgb(142, 149, 179);
  --bases-table-summary-background: rgb(30, 30, 46);
  --bases-table-summary-background-hover: rgba(198, 208, 245, 0.075);
  --blockquote-background-color: rgba(17, 17, 27, 0.5);
  --blockquote-border-color: rgb(245, 224, 220);
  --blur-background: color-mix(in srgb, rgb(49, 50, 68) 65%, transparent) linear-gradient(rgb(49, 50, 68), color-mix(in srgb, rgb(49, 50, 68) 65%, transparent));
  --callout-blend-mode: none;
  --callout-bug: 243, 139, 168;
  --callout-content-padding: 8px;
  --callout-default: 135, 176, 249;
  --callout-error: 243, 139, 168;
  --callout-example: 180, 190, 254;
  --callout-fail: 243, 139, 168;
  --callout-important: 137, 220, 235;
  --callout-info: 135, 176, 249;
  --callout-padding: 0;
  --callout-question: 250, 179, 135;
  --callout-success: 166, 227, 161;
  --callout-summary: 137, 220, 235;
  --callout-tip: 137, 220, 235;
  --callout-title-padding: 8px;
  --callout-todo: 135, 176, 249;
  --callout-warning: 250, 179, 135;
  --canvas-background: rgb(30, 30, 46);
  --canvas-card-label-color: rgb(161, 168, 201);
  --canvas-color: 105, 109, 134;
  --canvas-color-1: 243, 139, 168;
  --canvas-color-2: 250, 179, 135;
  --canvas-color-3: 249, 226, 175;
  --canvas-color-4: 166, 227, 161;
  --canvas-color-5: 137, 220, 235;
  --canvas-color-6: 180, 190, 254;
  --canvas-dot-pattern: rgb(67, 70, 90);
  --card-background-color: rgb(17, 17, 27);
  --card-foreground-color: rgb(30, 30, 46);
  --caret-color: rgb(198, 208, 245);
  --checkbox-border-color: rgb(161, 168, 201);
  --checkbox-border-color-hover: rgb(142, 149, 179);
  --checkbox-color: rgb(245, 224, 220);
  --checkbox-color-hover: rgb(245, 224, 220);
  --checkbox-marker-color: rgb(30, 30, 46);
  --checklist-done-color: rgb(142, 149, 179);
  --code-background: rgb(17, 17, 27);
  --code-border-color: rgb(49, 50, 68);
  --code-bracket-background: rgba(198, 208, 245, 0.075);
  --code-comment: rgb(161, 168, 201);
  --code-function: rgb(249, 226, 175);
  --code-important: rgb(250, 179, 135);
  --code-keyword: rgb(245, 194, 231);
  --code-normal: rgb(198, 208, 245);
  --code-operator: rgb(243, 139, 168);
  --code-property: rgb(137, 220, 235);
  --code-punctuation: rgb(142, 149, 179);
  --code-string: rgb(166, 227, 161);
  --code-tag: rgb(243, 139, 168);
  --code-value: rgb(180, 190, 254);
  --collapse-icon-color: rgb(161, 168, 201);
  --collapse-icon-color-collapsed: rgb(245, 224, 220);
  --color-accent: rgb(245, 224, 220);
  --color-accent-1: rgb(245, 224, 220);
  --color-accent-2: rgba(245, 224, 220, 0.9);
  --color-base-00: rgb(17, 17, 27);
  --color-base-10: rgb(24, 24, 37);
  --color-base-100: rgb(198, 208, 245);
  --color-base-20: rgb(30, 30, 46);
  --color-base-25: rgb(49, 50, 68);
  --color-base-30: rgb(67, 70, 90);
  --color-base-35: rgb(86, 89, 112);
  --color-base-40: rgb(105, 109, 134);
  --color-base-50: rgb(123, 129, 157);
  --color-base-60: rgb(142, 149, 179);
  --color-base-70: rgb(161, 168, 201);
  --color-blue: rgb(135, 176, 249);
  --color-blue-rgb: 135, 176, 249;
  --color-cyan: rgb(137, 220, 235);
  --color-cyan-rgb: 137, 220, 235;
  --color-green: rgb(166, 227, 161);
  --color-green-rgb: 166, 227, 161;
  --color-orange: rgb(250, 179, 135);
  --color-orange-rgb: 250, 179, 135;
  --color-pink: rgb(245, 194, 231);
  --color-pink-rgb: 245, 194, 231;
  --color-purple: rgb(180, 190, 254);
  --color-purple-rgb: 180, 190, 254;
  --color-red: rgb(243, 139, 168);
  --color-red-rgb: 243, 139, 168;
  --color-yellow: rgb(249, 226, 175);
  --color-yellow-rgb: 249, 226, 175;
  --colorful-frame-color: rgb(245, 224, 220);
  --colorful-icon-color: rgb(24, 24, 37);
  --colorful-icon-color-alt: rgb(17, 17, 27);
  --ctp-accent: 245, 224, 220;
  --ctp-base: 30, 30, 46;
  --ctp-blue: 135, 176, 249;
  --ctp-crust: 17, 17, 27;
  --ctp-flamingo: 242, 205, 205;
  --ctp-green: 166, 227, 161;
  --ctp-lavender: 180, 190, 254;
  --ctp-mantle: 24, 24, 37;
  --ctp-maroon: 235, 160, 172;
  --ctp-mauve: 203, 166, 247;
  --ctp-overlay0: 105, 109, 134;
  --ctp-overlay1: 123, 129, 157;
  --ctp-overlay2: 142, 149, 179;
  --ctp-peach: 250, 179, 135;
  --ctp-pink: 245, 194, 231;
  --ctp-red: 243, 139, 168;
  --ctp-rosewater: 245, 224, 220;
  --ctp-sapphire: 116, 199, 236;
  --ctp-sky: 137, 220, 235;
  --ctp-subtext0: 161, 168, 201;
  --ctp-subtext1: 179, 188, 223;
  --ctp-surface0: 49, 50, 68;
  --ctp-surface1: 67, 70, 90;
  --ctp-surface2: 86, 89, 112;
  --ctp-teal: 148, 226, 213;
  --ctp-text: 198, 208, 245;
  --ctp-yellow: 249, 226, 175;
  --dark: var(--text-normal, rgb(198, 208, 245));
  --darkgray: var(--text-normal, rgb(198, 208, 245));
  --divider-color: rgb(49, 50, 68);
  --divider-color-hover: rgb(245, 224, 220);
  --drag-ghost-background: rgb(198, 208, 245);
  --drag-ghost-text-color: rgb(17, 17, 27);
  --dropdown-background: rgb(49, 50, 68);
  --dropdown-background-hover: rgb(67, 70, 90);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(245, 224, 220);
  --file-header-background: rgb(30, 30, 46);
  --file-header-background-focused: rgb(30, 30, 46);
  --flair-background: rgb(49, 50, 68);
  --flair-color: rgb(198, 208, 245);
  --footnote-divider-color: rgb(49, 50, 68);
  --footnote-id-color: rgb(142, 149, 179);
  --footnote-id-color-no-occurrences: rgb(161, 168, 201);
  --footnote-input-background-active: rgba(198, 208, 245, 0.075);
  --graph-line: rgb(86, 89, 112);
  --graph-node: rgb(142, 149, 179);
  --graph-node-attachment: rgb(249, 226, 175);
  --graph-node-focused: rgb(245, 224, 220);
  --graph-node-tag: rgb(166, 227, 161);
  --graph-node-unresolved: rgb(161, 168, 201);
  --graph-text: rgb(198, 208, 245);
  --gray: var(--text-muted, rgb(142, 149, 179));
  --heading-formatting: rgb(245, 224, 220);
  --highlight: var(--text-highlight-bg, rgba(249, 226, 175, 0.2));
  --highlight-mix-blend-mode: none;
  --hr-color: rgb(49, 50, 68);
  --icon-color: rgb(142, 149, 179);
  --icon-color-active: rgb(245, 224, 220);
  --icon-color-focused: rgb(245, 224, 220);
  --icon-color-hover: rgb(142, 149, 179);
  --indentation-guide-color: rgba(198, 208, 245, 0.12);
  --indentation-guide-color-active: rgba(198, 208, 245, 0.3);
  --input-date-separator: rgb(161, 168, 201);
  --input-placeholder-color: rgb(161, 168, 201);
  --interactive-accent: rgb(245, 224, 220);
  --interactive-accent-hover: rgb(245, 224, 220);
  --interactive-accent-rgb: 245, 224, 220;
  --interactive-hover: rgb(67, 70, 90);
  --interactive-normal: rgb(49, 50, 68);
  --interactive-success: rgb(166, 227, 161);
  --light: var(--background-primary, rgb(30, 30, 46));
  --lightgray: var(--background-secondary, rgb(24, 24, 37));
  --link-color: rgb(245, 224, 220);
  --link-color-hover: rgb(245, 224, 220);
  --link-external-color: rgb(245, 224, 220);
  --link-external-color-hover: rgb(245, 224, 220);
  --link-unresolved-color: rgb(245, 224, 220);
  --link-unresolved-decoration-color: rgba(245, 224, 220, 0.3);
  --list-marker-color: rgb(161, 168, 201);
  --list-marker-color-collapsed: rgb(245, 224, 220);
  --list-marker-color-hover: rgb(142, 149, 179);
  --max-width-image: 90%;
  --menu-background: rgb(24, 24, 37);
  --menu-border-color: rgb(67, 70, 90);
  --menu-shadow: 0px 1px 2px rgba(17, 17, 27, 0.121),
      0px 3.4px 6.7px rgba(17, 17, 27, 0.179),
      0px 15px 30px rgba(17, 17, 27, 0.3);
  --metadata-border-color: rgb(49, 50, 68);
  --metadata-divider-color: rgb(49, 50, 68);
  --metadata-input-background-active: rgba(198, 208, 245, 0.075);
  --metadata-input-text-color: rgb(198, 208, 245);
  --metadata-label-background-active: rgba(198, 208, 245, 0.075);
  --metadata-label-text-color: rgb(142, 149, 179);
  --metadata-label-text-color-hover: rgb(142, 149, 179);
  --metadata-property-background-active: rgba(198, 208, 245, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(86, 89, 112);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(67, 70, 90);
  --min-width-image: 50%;
  --modal-background: rgb(30, 30, 46);
  --modal-border-color: rgb(49, 50, 68);
  --mono-rgb-0: 17, 17, 27;
  --mono-rgb-100: 198, 208, 245;
  --nav-collapse-icon-color: rgb(161, 168, 201);
  --nav-collapse-icon-color-collapsed: rgb(161, 168, 201);
  --nav-heading-color: rgb(198, 208, 245);
  --nav-heading-color-collapsed: rgb(161, 168, 201);
  --nav-heading-color-collapsed-hover: rgb(142, 149, 179);
  --nav-heading-color-hover: rgb(198, 208, 245);
  --nav-indentation-guide-color: rgb(105, 109, 134);
  --nav-item-background-active: rgba(198, 208, 245, 0.075);
  --nav-item-background-hover: rgba(198, 208, 245, 0.075);
  --nav-item-background-selected: rgba(245, 224, 220, 0.2);
  --nav-item-color: rgb(142, 149, 179);
  --nav-item-color-active: rgb(198, 208, 245);
  --nav-item-color-highlighted: rgb(245, 224, 220);
  --nav-item-color-hover: rgb(198, 208, 245);
  --nav-item-color-selected: rgb(198, 208, 245);
  --nav-tag-color: rgb(161, 168, 201);
  --nav-tag-color-active: rgb(142, 149, 179);
  --nav-tag-color-hover: rgb(142, 149, 179);
  --notion-kanban-card: rgb(49, 50, 68);
  --notion-kanban-card-hover: rgb(67, 70, 90);
  --pdf-background: rgb(30, 30, 46);
  --pdf-dark-opacity: 1;
  --pdf-page-background: rgb(30, 30, 46);
  --pdf-shadow: 0 0 0 1px rgb(49, 50, 68);
  --pdf-sidebar-background: rgb(30, 30, 46);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(49, 50, 68);
  --pill-border-color: rgb(49, 50, 68);
  --pill-border-color-hover: rgb(67, 70, 90);
  --pill-color: rgb(142, 149, 179);
  --pill-color-hover: rgb(198, 208, 245);
  --pill-color-remove: rgb(161, 168, 201);
  --pill-color-remove-hover: rgb(245, 224, 220);
  --prompt-background: rgb(30, 30, 46);
  --prompt-border-color: rgb(105, 109, 134);
  --raised-background: color-mix(in srgb, rgb(49, 50, 68) 65%, transparent) linear-gradient(rgb(49, 50, 68), color-mix(in srgb, rgb(49, 50, 68) 65%, transparent));
  --ribbon-background: rgb(24, 24, 37);
  --ribbon-background-collapsed: rgb(30, 30, 46);
  --scrollbar-active-thumb-bg: rgba(198, 208, 245, 0.2);
  --scrollbar-bg: rgba(198, 208, 245, 0.05);
  --scrollbar-thumb-bg: rgba(198, 208, 245, 0.1);
  --search-clear-button-color: rgb(142, 149, 179);
  --search-icon-color: rgb(142, 149, 179);
  --search-result-background: rgb(30, 30, 46);
  --secondary: var(--text-accent, rgb(245, 224, 220));
  --setting-group-heading-color: rgb(198, 208, 245);
  --setting-items-background: rgb(24, 24, 37);
  --setting-items-border-color: rgb(49, 50, 68);
  --shadow-l: 0px 1.8px 7.3px rgba(17, 17, 27, 0.071),
      0px 6.3px 24.7px rgba(17, 17, 27, 0.112),
      0px 30px 90px rgba(17, 17, 27, 0.2);
  --shadow-s: 0px 1px 2px rgba(17, 17, 27, 0.121),
      0px 3.4px 6.7px rgba(17, 17, 27, 0.179),
      0px 15px 30px rgba(17, 17, 27, 0.3);
  --shiki-active-tab-border-color: rgb(142, 149, 179);
  --shiki-code-background: rgb(17, 17, 27);
  --shiki-code-comment: rgb(161, 168, 201);
  --shiki-code-function: rgb(166, 227, 161);
  --shiki-code-important: rgb(250, 179, 135);
  --shiki-code-keyword: rgb(245, 194, 231);
  --shiki-code-normal: rgb(142, 149, 179);
  --shiki-code-property: rgb(137, 220, 235);
  --shiki-code-punctuation: rgb(142, 149, 179);
  --shiki-code-string: rgb(249, 226, 175);
  --shiki-code-value: rgb(180, 190, 254);
  --shiki-gutter-border-color: rgb(49, 50, 68);
  --shiki-gutter-text-color: rgb(161, 168, 201);
  --shiki-gutter-text-color-highlight: rgb(142, 149, 179);
  --shiki-highlight-green: rgba(166, 227, 161, 0.5);
  --shiki-highlight-green-background: rgba(166, 227, 161, 0.1);
  --shiki-highlight-neutral: rgb(142, 149, 179);
  --shiki-highlight-neutral-background: rgba(198, 208, 245, 0.05);
  --shiki-highlight-red: rgba(243, 139, 168, 0.5);
  --shiki-highlight-red-background: rgba(243, 139, 168, 0.1);
  --shiki-terminal-dots-color: rgb(161, 168, 201);
  --shiki-tooltip-background: rgba(17, 17, 27, 0.9);
  --slider-thumb-border-color: rgb(67, 70, 90);
  --slider-track-background: rgb(49, 50, 68);
  --status-bar-background: rgb(24, 24, 37);
  --status-bar-border-color: rgb(49, 50, 68);
  --status-bar-text-color: rgb(142, 149, 179);
  --suggestion-background: rgb(30, 30, 46);
  --swatch-shadow: inset 0 0 0 1px rgba(198, 208, 245, 0.15);
  --sync-avatar-color-1: rgb(243, 139, 168);
  --sync-avatar-color-2: rgb(250, 179, 135);
  --sync-avatar-color-3: rgb(249, 226, 175);
  --sync-avatar-color-4: rgb(166, 227, 161);
  --sync-avatar-color-5: rgb(137, 220, 235);
  --sync-avatar-color-6: rgb(135, 176, 249);
  --sync-avatar-color-7: rgb(180, 190, 254);
  --sync-avatar-color-8: rgb(245, 194, 231);
  --tab-background-active: rgb(30, 30, 46);
  --tab-container-background: rgb(24, 24, 37);
  --tab-divider-color: rgb(67, 70, 90);
  --tab-inactive-color: rgb(24, 24, 37);
  --tab-outline-color: rgb(49, 50, 68);
  --tab-stacked-pane-width: 700px;
  --tab-switcher-background: rgb(24, 24, 37);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 24, 37), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 208, 245, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 224, 220);
  --tab-text-color: rgb(161, 168, 201);
  --tab-text-color-active: rgb(142, 149, 179);
  --tab-text-color-focused: rgb(142, 149, 179);
  --tab-text-color-focused-active: rgb(142, 149, 179);
  --tab-text-color-focused-active-current: rgb(198, 208, 245);
  --tab-text-color-focused-highlighted: rgb(245, 224, 220);
  --table-add-button-border-color: rgb(49, 50, 68);
  --table-border-color: rgb(49, 50, 68);
  --table-drag-handle-background-active: rgb(245, 224, 220);
  --table-drag-handle-color: rgb(161, 168, 201);
  --table-drag-handle-color-active: rgb(30, 30, 46);
  --table-header-border-color: rgb(49, 50, 68);
  --table-header-color: rgb(198, 208, 245);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(245, 224, 220);
  --tag-background: rgba(245, 224, 220, 0.1);
  --tag-background-hover: rgba(245, 224, 220, 0.2);
  --tag-border-color: rgba(245, 224, 220, 0.15);
  --tag-border-color-hover: rgba(245, 224, 220, 0.15);
  --tag-color: rgb(245, 224, 220);
  --tag-color-hover: rgb(245, 224, 220);
  --tertiary: var(--text-accent-hover, rgb(245, 224, 220));
  --text-accent: rgb(245, 224, 220);
  --text-accent-hover: rgb(245, 224, 220);
  --text-error: rgb(243, 139, 168);
  --text-error-hover: rgba(243, 139, 168, 0.8);
  --text-faint: rgb(161, 168, 201);
  --text-highlight-bg: rgba(249, 226, 175, 0.2);
  --text-highlight-bg-active: rgba(249, 226, 175, 0.4);
  --text-muted: rgb(142, 149, 179);
  --text-muted-rgb: 142, 149, 179;
  --text-normal: rgb(198, 208, 245);
  --text-on-accent: rgb(30, 30, 46);
  --text-selection: rgba(245, 224, 220, 0.25);
  --text-success: rgb(166, 227, 161);
  --text-warning: rgb(250, 179, 135);
  --textHighlight: var(--text-highlight-bg, rgba(249, 226, 175, 0.2));
  --titlebar-background: rgb(24, 24, 37);
  --titlebar-background-focused: rgb(17, 17, 27);
  --titlebar-border-color: rgb(49, 50, 68);
  --titlebar-text-color: rgb(142, 149, 179);
  --titlebar-text-color-focused: rgb(245, 224, 220);
  --vault-profile-color: rgb(198, 208, 245);
  --vault-profile-color-hover: rgb(198, 208, 245);
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(17, 17, 27, 0.6);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(24, 24, 37));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(30, 30, 46));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(24, 24, 37));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(24, 24, 37));
  border-left-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(198, 208, 245));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(198, 208, 245));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(198, 208, 245));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(198, 208, 245));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(249, 226, 175, 0.2));
  color: var(--text-normal, rgb(198, 208, 245));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(245, 224, 220));
  border-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(142, 149, 179));
  outline: rgb(142, 149, 179) none 0px;
  text-decoration-color: rgb(142, 149, 179);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(245, 224, 220));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(245, 224, 220));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(245, 224, 220));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 224, 220) none 0px;
  text-decoration: rgba(245, 224, 220, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(245, 224, 220, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(161, 168, 201));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(17, 17, 27, 0.5));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--table-text-color, rgb(198, 208, 245));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--table-header-color, rgb(198, 208, 245));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(17, 17, 27));
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--code-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(17, 17, 27));
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(198, 208, 245);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 208, 245);
  border-radius: 4px;
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 208, 245);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 208, 245);
  border-radius: 4px;
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(24, 24, 37));
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(245, 224, 220);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(161, 168, 201);
  border-left-color: rgb(161, 168, 201);
  border-right-color: rgb(161, 168, 201);
  border-top-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(123, 129, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 220, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 176, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 176, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 190, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 137, 220, 235;
  background: rgba(137, 220, 235, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="blank-container"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgb(var(--ctp-mantle), rgba(135, 176, 249, 0.1));
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 243, 139, 168;
  background: rgba(243, 139, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="capacities-body"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="capacities-card"] {
  --bold-color: rgb(198, 208, 245);
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h1-color: rgb(198, 208, 245);
  --h1-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-color: rgb(198, 208, 245);
  --h2-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-color: rgb(198, 208, 245);
  --h3-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-color: rgb(198, 208, 245);
  --h4-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-color: rgb(198, 208, 245);
  --h5-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-color: rgb(198, 208, 245);
  --h6-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --italic-color: rgb(198, 208, 245);
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="capacities-card-prop"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="capacities-index"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="capacities-prop"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="capacities-prop-image"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="capacities-sidebar"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 243, 139, 168;
  background: rgba(243, 139, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 180, 190, 254;
  background: rgba(180, 190, 254, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 190, 254, 0.25);
  border-left-color: rgba(180, 190, 254, 0.25);
  border-right-color: rgba(180, 190, 254, 0.25);
  border-top-color: rgba(180, 190, 254, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 243, 139, 168;
  background: rgba(243, 139, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="formula"] {
  --callout-blend-mode: normal;
  --callout-color: 198, 208, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(198, 208, 245) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(198, 208, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(198, 208, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(198, 208, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(198, 208, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 135, 176, 249;
  background: rgba(135, 176, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 135, 176, 249;
  background: rgba(135, 176, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 250, 179, 135;
  background: rgba(250, 179, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="seealso"] {
  --callout-blend-mode: normal;
  --callout-color: 135, 176, 249;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(135, 176, 249) 25%, rgb(30, 30, 46) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(135, 176, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(135, 176, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(135, 176, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 166, 227, 161;
  background: rgba(166, 227, 161, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(166, 227, 161, 0.25);
  border-left-color: rgba(166, 227, 161, 0.25);
  border-right-color: rgba(166, 227, 161, 0.25);
  border-top-color: rgba(166, 227, 161, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 137, 220, 235;
  background: rgba(137, 220, 235, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 135, 176, 249;
  background: rgba(135, 176, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 250, 179, 135;
  background: rgba(250, 179, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(var(--callout-color), rgb(135, 176, 249));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="blank-container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-body"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-card-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-card"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-index"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-prop-image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-sidebar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="formula"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(17, 17, 27, 0.3);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(30, 30, 46));
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
  box-shadow: var(--shadow-l, rgba(17, 17, 27, 0.07) 0px 1.8px 7.3px 0px, rgba(17, 17, 27, 0.114) 0px 6.3px 24.7px 0px, rgba(17, 17, 27, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(var(--ctp-text), 0.075);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 37);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(var(--ctp-text), 0.075);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(var(--ctp-text), 0.075);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(245, 224, 220, 0.1));
  border-bottom-color: rgba(245, 224, 220, 0.15);
  border-left-color: rgba(245, 224, 220, 0.15);
  border-right-color: rgba(245, 224, 220, 0.15);
  border-top-color: rgba(245, 224, 220, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(198, 208, 245));
  font-family: var(--h1-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(198, 208, 245));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(198, 208, 245));
  font-family: var(--h2-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(198, 208, 245));
  font-family: var(--inline-title-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(198, 208, 245));
  font-family: var(--h3-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(198, 208, 245));
  font-family: var(--h4-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(198, 208, 245));
  font-family: var(--h5-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(198, 208, 245));
  font-family: var(--h6-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(105, 109, 134);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(142, 149, 179));
  cursor: var(--anp-cursor, var(--cursor));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(142, 149, 179));
  cursor: var(--anp-cursor, var(--cursor));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 208, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: var(--icon-color, rgb(142, 149, 179));
  cursor: var(--anp-cursor, var(--cursor));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(24, 24, 37));
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--status-bar-text-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(142, 149, 179);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 149, 179);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: var(--icon-color, rgb(142, 149, 179));
  cursor: var(--anp-cursor, var(--cursor));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(142, 149, 179);
  stroke: rgb(142, 149, 179);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(161, 168, 201));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(24, 24, 37));
  border-color: rgb(49, 50, 68);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(49, 50, 68);
  color: var(--table-header-color, rgb(198, 208, 245));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--text-muted, rgb(142, 149, 179));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(245, 224, 220, 0.1));
  color: var(--pill-color, rgb(245, 224, 220));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(30, 30, 46));
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(24, 24, 37));
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(17, 17, 27));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(198, 208, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(var(--ctp-text), rgb(198, 208, 245));
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(24, 24, 37));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: var(--text-normal, rgb(142, 149, 179));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(17, 17, 27));
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: var(--code-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 208, 245);
  font-size: var(--font-smallest, 12.8px);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(245, 224, 220, 0.1));
  border-bottom-color: rgba(245, 224, 220, 0.15);
  border-left-color: rgba(245, 224, 220, 0.15);
  border-right-color: rgba(245, 224, 220, 0.15);
  border-top-color: rgba(245, 224, 220, 0.15);
  color: var(--tag-color, rgb(245, 224, 220));
}`,
  },
  light: {
    base: `:root:root {
  --anp-bold-color: 210, 15, 57;
  --anp-header-font: "Noto Serif";
  --anp-header-margin-value: 15px;
  --anp-highlight-color: 228, 147, 32;
  --anp-italic-color: 64, 160, 43;
  --anp-preview-width-max: 800px;
  --anp-preview-width-pct: 95%;
  --anp-rainbow-folder-bg-opacity: 1;
  --anp-rainbow-folder-border-opacity: 1;
  --anp-rainbow-folder-collapse-border-custom: #00000044;
  --anp-speech-bubble-opacity: 0.5;
  --anp-table-width-pct: 100%;
  --background-modifier-active: rgba(222, 149, 132, 0.1);
  --background-modifier-active-hover: rgba(222, 149, 132, 0.15);
  --background-modifier-border: rgb(188, 192, 204);
  --background-modifier-border-focus: rgb(156, 160, 176);
  --background-modifier-border-hover: rgb(172, 176, 190);
  --background-modifier-cover: #00000022;
  --background-modifier-error: rgb(210, 15, 57);
  --background-modifier-error-hover: rgba(210, 15, 57, 0.9);
  --background-modifier-error-rgb: 210, 15, 57;
  --background-modifier-form-field: rgba(220, 224, 232, 0.3);
  --background-modifier-form-field-hover: rgba(220, 224, 232, 0.3);
  --background-modifier-hover: rgba(76, 79, 105, 0.075);
  --background-modifier-message: rgba(220, 224, 232, 0.9);
  --background-modifier-success: rgb(64, 160, 43);
  --background-modifier-success-hover: rgba(64, 160, 43, 0.9);
  --background-modifier-success-rgb: 64, 160, 43;
  --background-primary: rgb(239, 241, 245);
  --background-primary-alt: rgb(230, 233, 239);
  --background-secondary: rgb(230, 233, 239);
  --background-secondary-alt: rgb(220, 224, 232);
  --bases-cards-background: rgb(239, 241, 245);
  --bases-cards-cover-background: rgb(230, 233, 239);
  --bases-cards-shadow: 0 0 0 1px rgb(188, 192, 204);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(172, 176, 190);
  --bases-embed-border-color: rgb(188, 192, 204);
  --bases-group-heading-property-color: rgb(124, 127, 147);
  --bases-table-border-color: rgb(188, 192, 204);
  --bases-table-cell-background-active: rgb(239, 241, 245);
  --bases-table-cell-background-disabled: rgb(230, 233, 239);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(156, 160, 176);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(222, 149, 132);
  --bases-table-group-background: rgb(230, 233, 239);
  --bases-table-header-background: rgb(239, 241, 245);
  --bases-table-header-background-hover: rgba(76, 79, 105, 0.075);
  --bases-table-header-color: rgb(124, 127, 147);
  --bases-table-summary-background: rgb(239, 241, 245);
  --bases-table-summary-background-hover: rgba(76, 79, 105, 0.075);
  --blockquote-background-color: rgba(220, 224, 232, 0.5);
  --blockquote-border-color: rgb(222, 149, 132);
  --blur-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent));
  --callout-blend-mode: none;
  --callout-bug: 210, 15, 57;
  --callout-content-padding: 8px;
  --callout-default: 42, 110, 245;
  --callout-error: 210, 15, 57;
  --callout-example: 114, 135, 253;
  --callout-fail: 210, 15, 57;
  --callout-important: 4, 165, 229;
  --callout-info: 42, 110, 245;
  --callout-padding: 0;
  --callout-question: 254, 100, 11;
  --callout-success: 64, 160, 43;
  --callout-summary: 4, 165, 229;
  --callout-tip: 4, 165, 229;
  --callout-title-padding: 8px;
  --callout-todo: 42, 110, 245;
  --callout-warning: 254, 100, 11;
  --canvas-background: rgb(239, 241, 245);
  --canvas-card-label-color: rgb(108, 111, 133);
  --canvas-color: 156, 160, 176;
  --canvas-color-1: 210, 15, 57;
  --canvas-color-2: 254, 100, 11;
  --canvas-color-3: 228, 147, 32;
  --canvas-color-4: 64, 160, 43;
  --canvas-color-5: 4, 165, 229;
  --canvas-color-6: 114, 135, 253;
  --canvas-dot-pattern: rgb(188, 192, 204);
  --card-background-color: rgb(220, 224, 232);
  --card-foreground-color: rgb(239, 241, 245);
  --caret-color: rgb(76, 79, 105);
  --checkbox-border-color: rgb(108, 111, 133);
  --checkbox-border-color-hover: rgb(124, 127, 147);
  --checkbox-color: rgb(222, 149, 132);
  --checkbox-color-hover: rgb(222, 149, 132);
  --checkbox-marker-color: rgb(239, 241, 245);
  --checklist-done-color: rgb(124, 127, 147);
  --code-background: rgb(220, 224, 232);
  --code-border-color: rgb(188, 192, 204);
  --code-bracket-background: rgba(76, 79, 105, 0.075);
  --code-comment: rgb(108, 111, 133);
  --code-function: rgb(228, 147, 32);
  --code-important: rgb(254, 100, 11);
  --code-keyword: rgb(236, 131, 208);
  --code-normal: rgb(76, 79, 105);
  --code-operator: rgb(210, 15, 57);
  --code-property: rgb(4, 165, 229);
  --code-punctuation: rgb(124, 127, 147);
  --code-string: rgb(64, 160, 43);
  --code-tag: rgb(210, 15, 57);
  --code-value: rgb(114, 135, 253);
  --collapse-icon-color: rgb(108, 111, 133);
  --collapse-icon-color-collapsed: rgb(222, 149, 132);
  --color-accent: rgb(222, 149, 132);
  --color-accent-1: rgb(222, 149, 132);
  --color-accent-2: rgba(222, 149, 132, 0.9);
  --color-base-00: rgb(220, 224, 232);
  --color-base-10: rgb(230, 233, 239);
  --color-base-100: rgb(76, 79, 105);
  --color-base-20: rgb(239, 241, 245);
  --color-base-25: rgb(204, 208, 218);
  --color-base-30: rgb(188, 192, 204);
  --color-base-35: rgb(172, 176, 190);
  --color-base-40: rgb(156, 160, 176);
  --color-base-50: rgb(140, 143, 161);
  --color-base-60: rgb(124, 127, 147);
  --color-base-70: rgb(108, 111, 133);
  --color-blue: rgb(42, 110, 245);
  --color-blue-rgb: 42, 110, 245;
  --color-cyan: rgb(4, 165, 229);
  --color-cyan-rgb: 4, 165, 229;
  --color-green: rgb(64, 160, 43);
  --color-green-rgb: 64, 160, 43;
  --color-orange: rgb(254, 100, 11);
  --color-orange-rgb: 254, 100, 11;
  --color-pink: rgb(236, 131, 208);
  --color-pink-rgb: 236, 131, 208;
  --color-purple: rgb(114, 135, 253);
  --color-purple-rgb: 114, 135, 253;
  --color-red: rgb(210, 15, 57);
  --color-red-rgb: 210, 15, 57;
  --color-yellow: rgb(228, 147, 32);
  --color-yellow-rgb: 228, 147, 32;
  --colorful-frame-color: rgb(222, 149, 132);
  --colorful-icon-color: rgb(230, 233, 239);
  --colorful-icon-color-alt: rgb(220, 224, 232);
  --ctp-accent: 222, 149, 132;
  --ctp-base: 239, 241, 245;
  --ctp-blue: 42, 110, 245;
  --ctp-crust: 220, 224, 232;
  --ctp-flamingo: 221, 120, 120;
  --ctp-green: 64, 160, 43;
  --ctp-lavender: 114, 135, 253;
  --ctp-mantle: 230, 233, 239;
  --ctp-maroon: 230, 69, 83;
  --ctp-mauve: 136, 57, 239;
  --ctp-overlay0: 156, 160, 176;
  --ctp-overlay1: 140, 143, 161;
  --ctp-overlay2: 124, 127, 147;
  --ctp-peach: 254, 100, 11;
  --ctp-pink: 236, 131, 208;
  --ctp-red: 210, 15, 57;
  --ctp-rosewater: 222, 149, 132;
  --ctp-sapphire: 32, 159, 181;
  --ctp-sky: 4, 165, 229;
  --ctp-subtext0: 108, 111, 133;
  --ctp-subtext1: 92, 95, 119;
  --ctp-surface0: 204, 208, 218;
  --ctp-surface1: 188, 192, 204;
  --ctp-surface2: 172, 176, 190;
  --ctp-teal: 23, 146, 153;
  --ctp-text: 76, 79, 105;
  --ctp-yellow: 228, 147, 32;
  --dark: var(--text-normal, rgb(76, 79, 105));
  --darkgray: var(--text-normal, rgb(76, 79, 105));
  --divider-color: rgb(188, 192, 204);
  --divider-color-hover: rgb(222, 149, 132);
  --drag-ghost-background: rgb(76, 79, 105);
  --drag-ghost-text-color: rgb(220, 224, 232);
  --dropdown-background: rgb(204, 208, 218);
  --dropdown-background-hover: rgb(188, 192, 204);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(222, 149, 132);
  --file-header-background: rgb(239, 241, 245);
  --file-header-background-focused: rgb(239, 241, 245);
  --flair-background: rgb(204, 208, 218);
  --flair-color: rgb(76, 79, 105);
  --footnote-divider-color: rgb(188, 192, 204);
  --footnote-id-color: rgb(124, 127, 147);
  --footnote-id-color-no-occurrences: rgb(108, 111, 133);
  --footnote-input-background-active: rgba(76, 79, 105, 0.075);
  --graph-line: rgb(172, 176, 190);
  --graph-node: rgb(124, 127, 147);
  --graph-node-attachment: rgb(228, 147, 32);
  --graph-node-focused: rgb(222, 149, 132);
  --graph-node-tag: rgb(64, 160, 43);
  --graph-node-unresolved: rgb(108, 111, 133);
  --graph-text: rgb(76, 79, 105);
  --gray: var(--text-muted, rgb(124, 127, 147));
  --heading-formatting: rgb(222, 149, 132);
  --highlight: var(--text-highlight-bg, rgba(228, 147, 32, 0.2));
  --highlight-mix-blend-mode: none;
  --hr-color: rgb(188, 192, 204);
  --icon-color: rgb(124, 127, 147);
  --icon-color-active: rgb(222, 149, 132);
  --icon-color-focused: rgb(222, 149, 132);
  --icon-color-hover: rgb(124, 127, 147);
  --indentation-guide-color: rgba(76, 79, 105, 0.12);
  --indentation-guide-color-active: rgba(76, 79, 105, 0.3);
  --input-date-separator: rgb(108, 111, 133);
  --input-placeholder-color: rgb(108, 111, 133);
  --interactive-accent: rgb(222, 149, 132);
  --interactive-accent-hover: rgb(222, 149, 132);
  --interactive-accent-rgb: 222, 149, 132;
  --interactive-hover: rgb(188, 192, 204);
  --interactive-normal: rgb(204, 208, 218);
  --interactive-success: rgb(64, 160, 43);
  --light: var(--background-primary, rgb(239, 241, 245));
  --lightgray: var(--background-secondary, rgb(230, 233, 239));
  --link-color: rgb(222, 149, 132);
  --link-color-hover: rgb(222, 149, 132);
  --link-external-color: rgb(222, 149, 132);
  --link-external-color-hover: rgb(222, 149, 132);
  --link-unresolved-color: rgb(222, 149, 132);
  --link-unresolved-decoration-color: rgba(222, 149, 132, 0.3);
  --list-marker-color: rgb(108, 111, 133);
  --list-marker-color-collapsed: rgb(222, 149, 132);
  --list-marker-color-hover: rgb(124, 127, 147);
  --max-width-image: 90%;
  --menu-background: rgb(230, 233, 239);
  --menu-border-color: rgb(172, 176, 190);
  --menu-shadow: 0px 1px 2px rgba(220, 224, 232, 0.121),
      0px 3.4px 6.7px rgba(220, 224, 232, 0.179),
      0px 15px 30px rgba(220, 224, 232, 0.3);
  --metadata-border-color: rgb(188, 192, 204);
  --metadata-divider-color: rgb(188, 192, 204);
  --metadata-input-background-active: rgba(76, 79, 105, 0.075);
  --metadata-input-text-color: rgb(76, 79, 105);
  --metadata-label-background-active: rgba(76, 79, 105, 0.075);
  --metadata-label-text-color: rgb(124, 127, 147);
  --metadata-label-text-color-hover: rgb(124, 127, 147);
  --metadata-property-background-active: rgba(76, 79, 105, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(156, 160, 176);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(172, 176, 190);
  --min-width-image: 50%;
  --modal-background: rgb(239, 241, 245);
  --modal-border-color: rgb(204, 208, 218);
  --mono-rgb-0: 220, 224, 232;
  --mono-rgb-100: 76, 79, 105;
  --nav-collapse-icon-color: rgb(108, 111, 133);
  --nav-collapse-icon-color-collapsed: rgb(108, 111, 133);
  --nav-heading-color: rgb(76, 79, 105);
  --nav-heading-color-collapsed: rgb(108, 111, 133);
  --nav-heading-color-collapsed-hover: rgb(124, 127, 147);
  --nav-heading-color-hover: rgb(76, 79, 105);
  --nav-indentation-guide-color: rgb(156, 160, 176);
  --nav-item-background-active: rgba(76, 79, 105, 0.075);
  --nav-item-background-hover: rgba(76, 79, 105, 0.075);
  --nav-item-background-selected: rgba(222, 149, 132, 0.2);
  --nav-item-color: rgb(124, 127, 147);
  --nav-item-color-active: rgb(76, 79, 105);
  --nav-item-color-highlighted: rgb(222, 149, 132);
  --nav-item-color-hover: rgb(76, 79, 105);
  --nav-item-color-selected: rgb(76, 79, 105);
  --nav-tag-color: rgb(108, 111, 133);
  --nav-tag-color-active: rgb(124, 127, 147);
  --nav-tag-color-hover: rgb(124, 127, 147);
  --pdf-background: rgb(239, 241, 245);
  --pdf-dark-opacity: 1;
  --pdf-page-background: rgb(239, 241, 245);
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent;
  --pdf-sidebar-background: rgb(239, 241, 245);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent;
  --pill-border-color: rgb(188, 192, 204);
  --pill-border-color-hover: rgb(172, 176, 190);
  --pill-color: rgb(124, 127, 147);
  --pill-color-hover: rgb(76, 79, 105);
  --pill-color-remove: rgb(108, 111, 133);
  --pill-color-remove-hover: rgb(222, 149, 132);
  --prompt-background: rgb(239, 241, 245);
  --prompt-border-color: rgb(156, 160, 176);
  --raised-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent));
  --ribbon-background: rgb(230, 233, 239);
  --ribbon-background-collapsed: rgb(239, 241, 245);
  --scrollbar-active-thumb-bg: rgba(76, 79, 105, 0.2);
  --scrollbar-bg: rgba(76, 79, 105, 0.05);
  --scrollbar-thumb-bg: rgba(76, 79, 105, 0.1);
  --search-clear-button-color: rgb(124, 127, 147);
  --search-icon-color: rgb(124, 127, 147);
  --search-result-background: rgb(239, 241, 245);
  --secondary: var(--text-accent, rgb(222, 149, 132));
  --setting-group-heading-color: rgb(76, 79, 105);
  --setting-items-background: rgb(230, 233, 239);
  --setting-items-border-color: rgb(188, 192, 204);
  --shadow-l: 0px 1.8px 7.3px rgba(220, 224, 232, 0.071),
      0px 6.3px 24.7px rgba(220, 224, 232, 0.112),
      0px 30px 90px rgba(220, 224, 232, 0.2);
  --shadow-s: 0px 1px 2px rgba(220, 224, 232, 0.121),
      0px 3.4px 6.7px rgba(220, 224, 232, 0.179),
      0px 15px 30px rgba(220, 224, 232, 0.3);
  --shiki-active-tab-border-color: rgb(124, 127, 147);
  --shiki-code-background: rgb(220, 224, 232);
  --shiki-code-comment: rgb(108, 111, 133);
  --shiki-code-function: rgb(64, 160, 43);
  --shiki-code-important: rgb(254, 100, 11);
  --shiki-code-keyword: rgb(236, 131, 208);
  --shiki-code-normal: rgb(124, 127, 147);
  --shiki-code-property: rgb(4, 165, 229);
  --shiki-code-punctuation: rgb(124, 127, 147);
  --shiki-code-string: rgb(228, 147, 32);
  --shiki-code-value: rgb(114, 135, 253);
  --shiki-gutter-border-color: rgb(188, 192, 204);
  --shiki-gutter-text-color: rgb(108, 111, 133);
  --shiki-gutter-text-color-highlight: rgb(124, 127, 147);
  --shiki-highlight-green: rgba(64, 160, 43, 0.5);
  --shiki-highlight-green-background: rgba(64, 160, 43, 0.1);
  --shiki-highlight-neutral: rgb(124, 127, 147);
  --shiki-highlight-neutral-background: rgba(76, 79, 105, 0.05);
  --shiki-highlight-red: rgba(210, 15, 57, 0.5);
  --shiki-highlight-red-background: rgba(210, 15, 57, 0.1);
  --shiki-terminal-dots-color: rgb(108, 111, 133);
  --shiki-tooltip-background: rgba(220, 224, 232, 0.9);
  --slider-thumb-border-color: rgb(172, 176, 190);
  --slider-track-background: rgb(188, 192, 204);
  --status-bar-background: rgb(230, 233, 239);
  --status-bar-border-color: rgb(188, 192, 204);
  --status-bar-text-color: rgb(124, 127, 147);
  --suggestion-background: rgb(239, 241, 245);
  --swatch-shadow: inset 0 0 0 1px rgba(76, 79, 105, 0.15);
  --sync-avatar-color-1: rgb(210, 15, 57);
  --sync-avatar-color-2: rgb(254, 100, 11);
  --sync-avatar-color-3: rgb(228, 147, 32);
  --sync-avatar-color-4: rgb(64, 160, 43);
  --sync-avatar-color-5: rgb(4, 165, 229);
  --sync-avatar-color-6: rgb(42, 110, 245);
  --sync-avatar-color-7: rgb(114, 135, 253);
  --sync-avatar-color-8: rgb(236, 131, 208);
  --tab-background-active: rgb(239, 241, 245);
  --tab-container-background: rgb(230, 233, 239);
  --tab-divider-color: rgb(172, 176, 190);
  --tab-inactive-color: rgb(230, 233, 239);
  --tab-outline-color: rgb(188, 192, 204);
  --tab-stacked-pane-width: 700px;
  --tab-switcher-background: rgb(230, 233, 239);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(230, 233, 239), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(222, 149, 132);
  --tab-text-color: rgb(108, 111, 133);
  --tab-text-color-active: rgb(124, 127, 147);
  --tab-text-color-focused: rgb(124, 127, 147);
  --tab-text-color-focused-active: rgb(124, 127, 147);
  --tab-text-color-focused-active-current: rgb(76, 79, 105);
  --tab-text-color-focused-highlighted: rgb(222, 149, 132);
  --table-add-button-border-color: rgb(188, 192, 204);
  --table-border-color: rgb(188, 192, 204);
  --table-drag-handle-background-active: rgb(222, 149, 132);
  --table-drag-handle-color: rgb(108, 111, 133);
  --table-drag-handle-color-active: rgb(239, 241, 245);
  --table-header-border-color: rgb(188, 192, 204);
  --table-header-color: rgb(76, 79, 105);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(222, 149, 132);
  --tag-background: rgba(222, 149, 132, 0.1);
  --tag-background-hover: rgba(222, 149, 132, 0.2);
  --tag-border-color: rgba(222, 149, 132, 0.15);
  --tag-border-color-hover: rgba(222, 149, 132, 0.15);
  --tag-color: rgb(222, 149, 132);
  --tag-color-hover: rgb(222, 149, 132);
  --tertiary: var(--text-accent-hover, rgb(222, 149, 132));
  --text-accent: rgb(222, 149, 132);
  --text-accent-hover: rgb(222, 149, 132);
  --text-error: rgb(210, 15, 57);
  --text-error-hover: rgba(210, 15, 57, 0.8);
  --text-faint: rgb(108, 111, 133);
  --text-highlight-bg: rgba(228, 147, 32, 0.2);
  --text-highlight-bg-active: rgba(228, 147, 32, 0.4);
  --text-muted: rgb(124, 127, 147);
  --text-muted-rgb: 124, 127, 147;
  --text-normal: rgb(76, 79, 105);
  --text-on-accent: rgb(239, 241, 245);
  --text-selection: rgba(222, 149, 132, 0.25);
  --text-success: rgb(64, 160, 43);
  --text-warning: rgb(254, 100, 11);
  --textHighlight: var(--text-highlight-bg, rgba(228, 147, 32, 0.2));
  --titlebar-background: rgb(230, 233, 239);
  --titlebar-background-focused: rgb(220, 224, 232);
  --titlebar-border-color: rgb(188, 192, 204);
  --titlebar-text-color: rgb(124, 127, 147);
  --titlebar-text-color-focused: rgb(222, 149, 132);
  --vault-profile-color: rgb(76, 79, 105);
  --vault-profile-color-hover: rgb(76, 79, 105);
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(220, 224, 232, 0.6);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(230, 233, 239));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(239, 241, 245));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(230, 233, 239));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(230, 233, 239));
  border-left-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(76, 79, 105));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(76, 79, 105));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(76, 79, 105));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(76, 79, 105));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(228, 147, 32, 0.2));
  color: var(--text-normal, rgb(76, 79, 105));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(222, 149, 132));
  border-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(124, 127, 147));
  outline: rgb(124, 127, 147) none 0px;
  text-decoration-color: rgb(124, 127, 147);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(222, 149, 132));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(222, 149, 132));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(222, 149, 132));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 149, 132) none 0px;
  text-decoration: rgba(222, 149, 132, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(222, 149, 132, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(108, 111, 133));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(220, 224, 232, 0.5));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--table-text-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--table-header-color, rgb(76, 79, 105));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(220, 224, 232));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--code-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(220, 224, 232));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(76, 79, 105);
  border-radius: 4px;
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(76, 79, 105);
  border-radius: 4px;
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(230, 233, 239));
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 100, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 143, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(4, 165, 229);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 110, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 110, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(114, 135, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 4, 165, 229;
  background: rgba(4, 165, 229, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="blank-container"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgb(var(--ctp-mantle), rgba(42, 110, 245, 0.1));
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 210, 15, 57;
  background: rgba(210, 15, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="capacities-body"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="capacities-card"] {
  --bold-color: rgb(76, 79, 105);
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h1-color: rgb(76, 79, 105);
  --h1-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-color: rgb(76, 79, 105);
  --h2-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-color: rgb(76, 79, 105);
  --h3-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-color: rgb(76, 79, 105);
  --h4-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-color: rgb(76, 79, 105);
  --h5-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-color: rgb(76, 79, 105);
  --h6-font: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --italic-color: rgb(76, 79, 105);
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="capacities-card-prop"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="capacities-index"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="capacities-prop"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="capacities-prop-image"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="capacities-sidebar"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 210, 15, 57;
  background: rgba(210, 15, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 114, 135, 253;
  background: rgba(114, 135, 253, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(114, 135, 253, 0.25);
  border-left-color: rgba(114, 135, 253, 0.25);
  border-right-color: rgba(114, 135, 253, 0.25);
  border-top-color: rgba(114, 135, 253, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 210, 15, 57;
  background: rgba(210, 15, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="formula"] {
  --callout-blend-mode: normal;
  --callout-color: 76, 79, 105;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(76, 79, 105) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(76, 79, 105, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(76, 79, 105, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(76, 79, 105, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(76, 79, 105, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 42, 110, 245;
  background: rgba(42, 110, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 42, 110, 245;
  background: rgba(42, 110, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 254, 100, 11;
  background: rgba(254, 100, 11, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="seealso"] {
  --callout-blend-mode: normal;
  --callout-color: 42, 110, 245;
  --font-text: '??', '??', '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-border-color: color-mix(in srgb, rgb(42, 110, 245) 25%, rgb(239, 241, 245) 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(42, 110, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(42, 110, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(42, 110, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 64, 160, 43;
  background: rgba(64, 160, 43, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(64, 160, 43, 0.25);
  border-left-color: rgba(64, 160, 43, 0.25);
  border-right-color: rgba(64, 160, 43, 0.25);
  border-top-color: rgba(64, 160, 43, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 4, 165, 229;
  background: rgba(4, 165, 229, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 42, 110, 245;
  background: rgba(42, 110, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 254, 100, 11;
  background: rgba(254, 100, 11, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(var(--callout-color), rgb(42, 110, 245));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(76, 79, 105));
  font-weight: var(--font-weight, 500);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="blank-container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-body"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-card-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-card"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-index"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-prop-image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-sidebar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="formula"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(220, 224, 232, 0.3);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(239, 241, 245));
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
  box-shadow: var(--shadow-l, rgba(220, 224, 232, 0.07) 0px 1.8px 7.3px 0px, rgba(220, 224, 232, 0.114) 0px 6.3px 24.7px 0px, rgba(220, 224, 232, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(var(--ctp-text), 0.075);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(var(--ctp-text), 0.075);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(var(--ctp-text), 0.075);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(222, 149, 132, 0.1));
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(222, 149, 132);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(76, 79, 105));
  font-family: var(--h1-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(76, 79, 105));
  font-family: var(--h2-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(76, 79, 105));
  font-family: var(--inline-title-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(76, 79, 105));
  font-family: var(--h3-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(76, 79, 105));
  font-family: var(--h4-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(76, 79, 105));
  font-family: var(--h5-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(76, 79, 105));
  font-family: var(--h6-font, "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(124, 127, 147));
  cursor: var(--anp-cursor, var(--cursor));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(124, 127, 147));
  cursor: var(--anp-cursor, var(--cursor));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 79, 105);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: var(--icon-color, rgb(124, 127, 147));
  cursor: var(--anp-cursor, var(--cursor));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(230, 233, 239));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--status-bar-text-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(124, 127, 147);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(124, 127, 147);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: var(--icon-color, rgb(124, 127, 147));
  cursor: var(--anp-cursor, var(--cursor));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(124, 127, 147);
  stroke: rgb(124, 127, 147);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(108, 111, 133));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(230, 233, 239));
  border-color: rgb(188, 192, 204);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(188, 192, 204);
  color: var(--table-header-color, rgb(76, 79, 105));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--text-muted, rgb(124, 127, 147));
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(222, 149, 132, 0.1));
  color: var(--pill-color, rgb(222, 149, 132));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(239, 241, 245));
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(230, 233, 239));
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(220, 224, 232));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(76, 79, 105);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(var(--ctp-text), rgb(76, 79, 105));
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(230, 233, 239));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: var(--text-normal, rgb(124, 127, 147));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(220, 224, 232));
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: var(--code-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 79, 105);
  font-size: var(--font-smallest, 12.8px);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(222, 149, 132, 0.1));
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
  color: var(--tag-color, rgb(222, 149, 132));
}`,
  },
  classSettings: {
    "ctp-latte": `.ctp-latte, .ctp-latte .themed-color-wrapper > .theme-light {
--ctp-rosewater: var(--ctp-custom-rosewater, var(--ctp-ext-rosewater, 222, 149, 132));
--ctp-flamingo: var(--ctp-custom-flamingo, var(--ctp-ext-flamingo, 221, 120, 120));
--ctp-pink: var(--ctp-custom-pink, var(--ctp-ext-pink, 236, 131, 208));
--ctp-mauve: var(--ctp-custom-mauve, var(--ctp-ext-mauve, 136, 57, 239));
--ctp-red: var(--ctp-custom-red, var(--ctp-ext-red, 210, 15, 57));
--ctp-maroon: var(--ctp-custom-maroon, var(--ctp-ext-maroon, 230, 69, 83));
--ctp-peach: var(--ctp-custom-peach, var(--ctp-ext-peach, 254, 100, 11));
--ctp-yellow: var(--ctp-custom-yellow, var(--ctp-ext-yellow, 228, 147, 32));
--ctp-green: var(--ctp-custom-green, var(--ctp-ext-green, 64, 160, 43));
--ctp-teal: var(--ctp-custom-teal, var(--ctp-ext-teal, 23, 146, 153));
--ctp-sky: var(--ctp-custom-sky, var(--ctp-ext-sky, 4, 165, 229));
--ctp-sapphire: var(--ctp-custom-sapphire, var(--ctp-ext-sapphire, 32, 159, 181));
--ctp-blue: var(--ctp-custom-blue, var(--ctp-ext-blue, 42, 110, 245));
--ctp-lavender: var(--ctp-custom-lavender, var(--ctp-ext-lavender, 114, 135, 253));
--ctp-text: var(--ctp-custom-text, var(--ctp-ext-text, 76, 79, 105));
--ctp-subtext1: var(--ctp-custom-subtext1, var(--ctp-ext-subtext1, 92, 95, 119));
--ctp-subtext0: var(--ctp-custom-subtext0, var(--ctp-ext-subtext0, 108, 111, 133));
--ctp-overlay2: var(--ctp-custom-overlay2, var(--ctp-ext-overlay2, 124, 127, 147));
--ctp-overlay1: var(--ctp-custom-overlay1, var(--ctp-ext-overlay1, 140, 143, 161));
--ctp-overlay0: var(--ctp-custom-overlay0, var(--ctp-ext-overlay0, 156, 160, 176));
--ctp-surface2: var(--ctp-custom-surface2, var(--ctp-ext-surface2, 172, 176, 190));
--ctp-surface1: var(--ctp-custom-surface1, var(--ctp-ext-surface1, 188, 192, 204));
--ctp-surface0: var(--ctp-custom-surface0, var(--ctp-ext-surface0, 204, 208, 218));
--ctp-base: var(--ctp-custom-base, var(--ctp-ext-base, 239, 241, 245));
--ctp-mantle: var(--ctp-custom-mantle, var(--ctp-ext-mantle, 230, 233, 239));
--ctp-crust: var(--ctp-custom-crust, var(--ctp-ext-crust, 220, 224, 232));
}`,
    "ctp-rosepine-light": `.ctp-rosepine-light, .ctp-rosepine-light .themed-color-wrapper > .theme-light {
--ctp-rosewater: var(--ctp-custom-rosewater, var(--ctp-ext-rosewater, 214, 129, 125));
--ctp-flamingo: var(--ctp-custom-flamingo, var(--ctp-ext-flamingo, 214, 129, 125));
--ctp-pink: var(--ctp-custom-pink, var(--ctp-ext-pink, 144, 122, 169));
--ctp-mauve: var(--ctp-custom-mauve, var(--ctp-ext-mauve, 144, 122, 169));
--ctp-red: var(--ctp-custom-red, var(--ctp-ext-red, 180, 99, 122));
--ctp-maroon: var(--ctp-custom-maroon, var(--ctp-ext-maroon, 180, 99, 122));
--ctp-peach: var(--ctp-custom-peach, var(--ctp-ext-peach, 214, 129, 125));
--ctp-yellow: var(--ctp-custom-yellow, var(--ctp-ext-yellow, 234, 157, 52));
--ctp-green: var(--ctp-custom-green, var(--ctp-ext-green, 86, 148, 159));
--ctp-teal: var(--ctp-custom-teal, var(--ctp-ext-teal, 86, 148, 159));
--ctp-sky: var(--ctp-custom-sky, var(--ctp-ext-sky, 40, 105, 131));
--ctp-sapphire: var(--ctp-custom-sapphire, var(--ctp-ext-sapphire, 40, 105, 131));
--ctp-blue: var(--ctp-custom-blue, var(--ctp-ext-blue, 40, 105, 131));
--ctp-lavender: var(--ctp-custom-lavender, var(--ctp-ext-lavender, 144, 122, 169));
--ctp-text: var(--ctp-custom-text, var(--ctp-ext-text, 87, 82, 121));
--ctp-subtext1: var(--ctp-custom-subtext1, var(--ctp-ext-subtext1, 97, 92, 132));
--ctp-subtext0: var(--ctp-custom-subtext0, var(--ctp-ext-subtext0, 121, 117, 147));
--ctp-overlay2: var(--ctp-custom-overlay2, var(--ctp-ext-overlay2, 128, 124, 153));
--ctp-overlay1: var(--ctp-custom-overlay1, var(--ctp-ext-overlay1, 152, 147, 165));
--ctp-overlay0: var(--ctp-custom-overlay0, var(--ctp-ext-overlay0, 161, 156, 173));
--ctp-surface2: var(--ctp-custom-surface2, var(--ctp-ext-surface2, 202, 193, 185));
--ctp-surface1: var(--ctp-custom-surface1, var(--ctp-ext-surface1, 209, 201, 194));
--ctp-surface0: var(--ctp-custom-surface0, var(--ctp-ext-surface0, 220, 211, 203));
--ctp-base: var(--ctp-custom-base, var(--ctp-ext-base, 238, 230, 221));
--ctp-mantle: var(--ctp-custom-mantle, var(--ctp-ext-mantle, 230, 219, 209));
--ctp-crust: var(--ctp-custom-crust, var(--ctp-ext-crust, 221, 208, 198));
}`,
    "ctp-frappe": `.ctp-frappe, .ctp-frappe .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-custom-rosewater, var(--ctp-ext-rosewater, 242, 213, 207));
--ctp-flamingo: var(--ctp-custom-flamingo, var(--ctp-ext-flamingo, 238, 190, 190));
--ctp-pink: var(--ctp-custom-pink, var(--ctp-ext-pink, 244, 184, 228));
--ctp-mauve: var(--ctp-custom-mauve, var(--ctp-ext-mauve, 202, 158, 230));
--ctp-red: var(--ctp-custom-red, var(--ctp-ext-red, 231, 130, 132));
--ctp-maroon: var(--ctp-custom-maroon, var(--ctp-ext-maroon, 234, 153, 156));
--ctp-peach: var(--ctp-custom-peach, var(--ctp-ext-peach, 239, 159, 118));
--ctp-yellow: var(--ctp-custom-yellow, var(--ctp-ext-yellow, 229, 200, 144));
--ctp-green: var(--ctp-custom-green, var(--ctp-ext-green, 166, 209, 137));
--ctp-teal: var(--ctp-custom-teal, var(--ctp-ext-teal, 129, 200, 190));
--ctp-sky: var(--ctp-custom-sky, var(--ctp-ext-sky, 153, 209, 219));
--ctp-sapphire: var(--ctp-custom-sapphire, var(--ctp-ext-sapphire, 133, 193, 220));
--ctp-blue: var(--ctp-custom-blue, var(--ctp-ext-blue, 140, 170, 238));
--ctp-lavender: var(--ctp-custom-lavender, var(--ctp-ext-lavender, 186, 187, 241));
--ctp-text: var(--ctp-custom-text, var(--ctp-ext-text, 198, 206, 239));
--ctp-subtext1: var(--ctp-custom-subtext1, var(--ctp-ext-subtext1, 181, 189, 220));
--ctp-subtext0: var(--ctp-custom-subtext0, var(--ctp-ext-subtext0, 165, 172, 201));
--ctp-overlay2: var(--ctp-custom-overlay2, var(--ctp-ext-overlay2, 148, 155, 183));
--ctp-overlay1: var(--ctp-custom-overlay1, var(--ctp-ext-overlay1, 131, 138, 164));
--ctp-overlay0: var(--ctp-custom-overlay0, var(--ctp-ext-overlay0, 115, 120, 145));
--ctp-surface2: var(--ctp-custom-surface2, var(--ctp-ext-surface2, 98, 103, 126));
--ctp-surface1: var(--ctp-custom-surface1, var(--ctp-ext-surface1, 81, 86, 108));
--ctp-surface0: var(--ctp-custom-surface0, var(--ctp-ext-surface0, 65, 69, 89));
--ctp-base: var(--ctp-custom-base, var(--ctp-ext-base, 48, 52, 70));
--ctp-mantle: var(--ctp-custom-mantle, var(--ctp-ext-mantle, 41, 44, 60));
--ctp-crust: var(--ctp-custom-crust, var(--ctp-ext-crust, 35, 38, 52));
}`,
    "ctp-macchiato": `.ctp-macchiato, .ctp-macchiato .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-custom-rosewater, var(--ctp-ext-rosewater, 244, 219, 214));
--ctp-flamingo: var(--ctp-custom-flamingo, var(--ctp-ext-flamingo, 240, 198, 198));
--ctp-pink: var(--ctp-custom-pink, var(--ctp-ext-pink, 245, 189, 230));
--ctp-mauve: var(--ctp-custom-mauve, var(--ctp-ext-mauve, 198, 160, 246));
--ctp-red: var(--ctp-custom-red, var(--ctp-ext-red, 237, 135, 150));
--ctp-maroon: var(--ctp-custom-maroon, var(--ctp-ext-maroon, 238, 153, 160));
--ctp-peach: var(--ctp-custom-peach, var(--ctp-ext-peach, 245, 169, 127));
--ctp-yellow: var(--ctp-custom-yellow, var(--ctp-ext-yellow, 238, 212, 159));
--ctp-green: var(--ctp-custom-green, var(--ctp-ext-green, 166, 218, 149));
--ctp-teal: var(--ctp-custom-teal, var(--ctp-ext-teal, 139, 213, 202));
--ctp-sky: var(--ctp-custom-sky, var(--ctp-ext-sky, 145, 215, 227));
--ctp-sapphire: var(--ctp-custom-sapphire, var(--ctp-ext-sapphire, 125, 196, 228));
--ctp-blue: var(--ctp-custom-blue, var(--ctp-ext-blue, 138, 173, 244));
--ctp-lavender: var(--ctp-custom-lavender, var(--ctp-ext-lavender, 183, 189, 248));
--ctp-text: var(--ctp-custom-text, var(--ctp-ext-text, 197, 207, 245));
--ctp-subtext1: var(--ctp-custom-subtext1, var(--ctp-ext-subtext1, 179, 188, 224));
--ctp-subtext0: var(--ctp-custom-subtext0, var(--ctp-ext-subtext0, 161, 170, 203));
--ctp-overlay2: var(--ctp-custom-overlay2, var(--ctp-ext-overlay2, 143, 151, 183));
--ctp-overlay1: var(--ctp-custom-overlay1, var(--ctp-ext-overlay1, 125, 132, 162));
--ctp-overlay0: var(--ctp-custom-overlay0, var(--ctp-ext-overlay0, 108, 114, 141));
--ctp-surface2: var(--ctp-custom-surface2, var(--ctp-ext-surface2, 90, 95, 120));
--ctp-surface1: var(--ctp-custom-surface1, var(--ctp-ext-surface1, 72, 76, 100));
--ctp-surface0: var(--ctp-custom-surface0, var(--ctp-ext-surface0, 54, 58, 79));
--ctp-base: var(--ctp-custom-base, var(--ctp-ext-base, 36, 39, 58));
--ctp-mantle: var(--ctp-custom-mantle, var(--ctp-ext-mantle, 30, 32, 48));
--ctp-crust: var(--ctp-custom-crust, var(--ctp-ext-crust, 24, 25, 38));
}`,
    "ctp-mocha": `.ctp-mocha, .ctp-mocha .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-custom-rosewater, var(--ctp-ext-rosewater, 245, 224, 220));
--ctp-flamingo: var(--ctp-custom-flamingo, var(--ctp-ext-flamingo, 242, 205, 205));
--ctp-pink: var(--ctp-custom-pink, var(--ctp-ext-pink, 245, 194, 231));
--ctp-mauve: var(--ctp-custom-mauve, var(--ctp-ext-mauve, 203, 166, 247));
--ctp-red: var(--ctp-custom-red, var(--ctp-ext-red, 243, 139, 168));
--ctp-maroon: var(--ctp-custom-maroon, var(--ctp-ext-maroon, 235, 160, 172));
--ctp-peach: var(--ctp-custom-peach, var(--ctp-ext-peach, 250, 179, 135));
--ctp-yellow: var(--ctp-custom-yellow, var(--ctp-ext-yellow, 249, 226, 175));
--ctp-green: var(--ctp-custom-green, var(--ctp-ext-green, 166, 227, 161));
--ctp-teal: var(--ctp-custom-teal, var(--ctp-ext-teal, 148, 226, 213));
--ctp-sky: var(--ctp-custom-sky, var(--ctp-ext-sky, 137, 220, 235));
--ctp-sapphire: var(--ctp-custom-sapphire, var(--ctp-ext-sapphire, 116, 199, 236));
--ctp-blue: var(--ctp-custom-blue, var(--ctp-ext-blue, 135, 176, 249));
--ctp-lavender: var(--ctp-custom-lavender, var(--ctp-ext-lavender, 180, 190, 254));
--ctp-text: var(--ctp-custom-text, var(--ctp-ext-text, 198, 208, 245));
--ctp-subtext1: var(--ctp-custom-subtext1, var(--ctp-ext-subtext1, 179, 188, 223));
--ctp-subtext0: var(--ctp-custom-subtext0, var(--ctp-ext-subtext0, 161, 168, 201));
--ctp-overlay2: var(--ctp-custom-overlay2, var(--ctp-ext-overlay2, 142, 149, 179));
--ctp-overlay1: var(--ctp-custom-overlay1, var(--ctp-ext-overlay1, 123, 129, 157));
--ctp-overlay0: var(--ctp-custom-overlay0, var(--ctp-ext-overlay0, 105, 109, 134));
--ctp-surface2: var(--ctp-custom-surface2, var(--ctp-ext-surface2, 86, 89, 112));
--ctp-surface1: var(--ctp-custom-surface1, var(--ctp-ext-surface1, 67, 70, 90));
--ctp-surface0: var(--ctp-custom-surface0, var(--ctp-ext-surface0, 49, 50, 68));
--ctp-base: var(--ctp-custom-base, var(--ctp-ext-base, 30, 30, 46));
--ctp-mantle: var(--ctp-custom-mantle, var(--ctp-ext-mantle, 24, 24, 37));
--ctp-crust: var(--ctp-custom-crust, var(--ctp-ext-crust, 17, 17, 27));
}

.ctp-mocha-old, .ctp-mocha-old .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-custom-rosewater, var(--ctp-ext-rosewater, 245, 224, 220));
--ctp-flamingo: var(--ctp-custom-flamingo, var(--ctp-ext-flamingo, 242, 205, 205));
--ctp-pink: var(--ctp-custom-pink, var(--ctp-ext-pink, 245, 194, 231));
--ctp-mauve: var(--ctp-custom-mauve, var(--ctp-ext-mauve, 203, 166, 247));
--ctp-red: var(--ctp-custom-red, var(--ctp-ext-red, 243, 139, 168));
--ctp-maroon: var(--ctp-custom-maroon, var(--ctp-ext-maroon, 235, 160, 172));
--ctp-peach: var(--ctp-custom-peach, var(--ctp-ext-peach, 250, 179, 135));
--ctp-yellow: var(--ctp-custom-yellow, var(--ctp-ext-yellow, 249, 226, 175));
--ctp-green: var(--ctp-custom-green, var(--ctp-ext-green, 166, 227, 161));
--ctp-teal: var(--ctp-custom-teal, var(--ctp-ext-teal, 148, 226, 213));
--ctp-sky: var(--ctp-custom-sky, var(--ctp-ext-sky, 137, 220, 235));
--ctp-sapphire: var(--ctp-custom-sapphire, var(--ctp-ext-sapphire, 116, 199, 236));
--ctp-blue: var(--ctp-custom-blue, var(--ctp-ext-blue, 135, 176, 249));
--ctp-lavender: var(--ctp-custom-lavender, var(--ctp-ext-lavender, 180, 190, 254));
--ctp-text: var(--ctp-custom-text, var(--ctp-ext-text, 217, 224, 238));
--ctp-subtext1: var(--ctp-custom-subtext1, var(--ctp-ext-subtext1, 211, 205, 214));
--ctp-subtext0: var(--ctp-custom-subtext0, var(--ctp-ext-subtext0, 190, 179, 193));
--ctp-overlay2: var(--ctp-custom-overlay2, var(--ctp-ext-overlay2, 167, 156, 176));
--ctp-overlay1: var(--ctp-custom-overlay1, var(--ctp-ext-overlay1, 152, 139, 162));
--ctp-overlay0: var(--ctp-custom-overlay0, var(--ctp-ext-overlay0, 109, 107, 125));
--ctp-surface2: var(--ctp-custom-surface2, var(--ctp-ext-surface2, 87, 82, 105));
--ctp-surface1: var(--ctp-custom-surface1, var(--ctp-ext-surface1, 45, 40, 72));
--ctp-surface0: var(--ctp-custom-surface0, var(--ctp-ext-surface0, 48, 45, 65));
--ctp-base: var(--ctp-custom-base, var(--ctp-ext-base, 30, 30, 46));
--ctp-mantle: var(--ctp-custom-mantle, var(--ctp-ext-mantle, 26, 24, 38));
--ctp-crust: var(--ctp-custom-crust, var(--ctp-ext-crust, 22, 19, 32));
}`,
    "ctp-mocha-old": `.ctp-mocha-old, .ctp-mocha-old .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-custom-rosewater, var(--ctp-ext-rosewater, 245, 224, 220));
--ctp-flamingo: var(--ctp-custom-flamingo, var(--ctp-ext-flamingo, 242, 205, 205));
--ctp-pink: var(--ctp-custom-pink, var(--ctp-ext-pink, 245, 194, 231));
--ctp-mauve: var(--ctp-custom-mauve, var(--ctp-ext-mauve, 203, 166, 247));
--ctp-red: var(--ctp-custom-red, var(--ctp-ext-red, 243, 139, 168));
--ctp-maroon: var(--ctp-custom-maroon, var(--ctp-ext-maroon, 235, 160, 172));
--ctp-peach: var(--ctp-custom-peach, var(--ctp-ext-peach, 250, 179, 135));
--ctp-yellow: var(--ctp-custom-yellow, var(--ctp-ext-yellow, 249, 226, 175));
--ctp-green: var(--ctp-custom-green, var(--ctp-ext-green, 166, 227, 161));
--ctp-teal: var(--ctp-custom-teal, var(--ctp-ext-teal, 148, 226, 213));
--ctp-sky: var(--ctp-custom-sky, var(--ctp-ext-sky, 137, 220, 235));
--ctp-sapphire: var(--ctp-custom-sapphire, var(--ctp-ext-sapphire, 116, 199, 236));
--ctp-blue: var(--ctp-custom-blue, var(--ctp-ext-blue, 135, 176, 249));
--ctp-lavender: var(--ctp-custom-lavender, var(--ctp-ext-lavender, 180, 190, 254));
--ctp-text: var(--ctp-custom-text, var(--ctp-ext-text, 217, 224, 238));
--ctp-subtext1: var(--ctp-custom-subtext1, var(--ctp-ext-subtext1, 211, 205, 214));
--ctp-subtext0: var(--ctp-custom-subtext0, var(--ctp-ext-subtext0, 190, 179, 193));
--ctp-overlay2: var(--ctp-custom-overlay2, var(--ctp-ext-overlay2, 167, 156, 176));
--ctp-overlay1: var(--ctp-custom-overlay1, var(--ctp-ext-overlay1, 152, 139, 162));
--ctp-overlay0: var(--ctp-custom-overlay0, var(--ctp-ext-overlay0, 109, 107, 125));
--ctp-surface2: var(--ctp-custom-surface2, var(--ctp-ext-surface2, 87, 82, 105));
--ctp-surface1: var(--ctp-custom-surface1, var(--ctp-ext-surface1, 45, 40, 72));
--ctp-surface0: var(--ctp-custom-surface0, var(--ctp-ext-surface0, 48, 45, 65));
--ctp-base: var(--ctp-custom-base, var(--ctp-ext-base, 30, 30, 46));
--ctp-mantle: var(--ctp-custom-mantle, var(--ctp-ext-mantle, 26, 24, 38));
--ctp-crust: var(--ctp-custom-crust, var(--ctp-ext-crust, 22, 19, 32));
}`,
    "ctp-accent-light-rosewater": `.anuppuccin-accent-toggle.ctp-accent-light-rosewater {
--ctp-accent: var(--ctp-rosewater);
}`,
    "ctp-accent-light-flamingo": `.anuppuccin-accent-toggle.ctp-accent-light-flamingo {
--ctp-accent: var(--ctp-flamingo);
}`,
    "ctp-accent-light-pink": `.anuppuccin-accent-toggle.ctp-accent-light-pink {
--ctp-accent: var(--ctp-pink);
}`,
    "ctp-accent-light-mauve": `.anuppuccin-accent-toggle.ctp-accent-light-mauve {
--ctp-accent: var(--ctp-mauve);
}`,
    "ctp-accent-light-red": `.anuppuccin-accent-toggle.ctp-accent-light-red {
--ctp-accent: var(--ctp-red);
}`,
    "ctp-accent-light-maroon": `.anuppuccin-accent-toggle.ctp-accent-light-maroon {
--ctp-accent: var(--ctp-maroon);
}`,
    "ctp-accent-light-peach": `.anuppuccin-accent-toggle.ctp-accent-light-peach {
--ctp-accent: var(--ctp-peach);
}`,
    "ctp-accent-light-yellow": `.anuppuccin-accent-toggle.ctp-accent-light-yellow {
--ctp-accent: var(--ctp-yellow);
}`,
    "ctp-accent-light-green": `.anuppuccin-accent-toggle.ctp-accent-light-green {
--ctp-accent: var(--ctp-green);
}`,
    "ctp-accent-light-teal": `.anuppuccin-accent-toggle.ctp-accent-light-teal {
--ctp-accent: var(--ctp-teal);
}`,
    "ctp-accent-light-sky": `.anuppuccin-accent-toggle.ctp-accent-light-sky {
--ctp-accent: var(--ctp-sky);
}`,
    "ctp-accent-light-sapphire": `.anuppuccin-accent-toggle.ctp-accent-light-sapphire {
--ctp-accent: var(--ctp-sapphire);
}`,
    "ctp-accent-light-blue": `.anuppuccin-accent-toggle.ctp-accent-light-blue {
--ctp-accent: var(--ctp-blue);
}`,
    "ctp-accent-light-lavender": `.anuppuccin-accent-toggle.ctp-accent-light-lavender {
--ctp-accent: var(--ctp-lavender);
}`,
    "ctp-accent-rosewater": `.anuppuccin-accent-toggle.ctp-accent-rosewater {
--ctp-accent: var(--ctp-rosewater);
}`,
    "ctp-accent-flamingo": `.anuppuccin-accent-toggle.ctp-accent-flamingo {
--ctp-accent: var(--ctp-flamingo);
}`,
    "ctp-accent-pink": `.anuppuccin-accent-toggle.ctp-accent-pink {
--ctp-accent: var(--ctp-pink);
}`,
    "ctp-accent-mauve": `.anuppuccin-accent-toggle.ctp-accent-mauve {
--ctp-accent: var(--ctp-mauve);
}`,
    "ctp-accent-red": `.anuppuccin-accent-toggle.ctp-accent-red {
--ctp-accent: var(--ctp-red);
}`,
    "ctp-accent-maroon": `.anuppuccin-accent-toggle.ctp-accent-maroon {
--ctp-accent: var(--ctp-maroon);
}`,
    "ctp-accent-peach": `.anuppuccin-accent-toggle.ctp-accent-peach {
--ctp-accent: var(--ctp-peach);
}`,
    "ctp-accent-yellow": `.anuppuccin-accent-toggle.ctp-accent-yellow {
--ctp-accent: var(--ctp-yellow);
}`,
    "ctp-accent-green": `.anuppuccin-accent-toggle.ctp-accent-green {
--ctp-accent: var(--ctp-green);
}`,
    "ctp-accent-teal": `.anuppuccin-accent-toggle.ctp-accent-teal {
--ctp-accent: var(--ctp-teal);
}`,
    "ctp-accent-sky": `.anuppuccin-accent-toggle.ctp-accent-sky {
--ctp-accent: var(--ctp-sky);
}`,
    "ctp-accent-sapphire": `.anuppuccin-accent-toggle.ctp-accent-sapphire {
--ctp-accent: var(--ctp-sapphire);
}`,
    "ctp-accent-blue": `.anuppuccin-accent-toggle.ctp-accent-blue {
--ctp-accent: var(--ctp-blue);
}`,
    "ctp-accent-lavender": `.anuppuccin-accent-toggle.ctp-accent-lavender {
--ctp-accent: var(--ctp-lavender);
}`,
    "anuppuccin-accent-toggle": `.ctp-accent-rosewater {
--ctp-accent: var(--ctp-rosewater);
}

.ctp-accent-flamingo {
--ctp-accent: var(--ctp-flamingo);
}

.ctp-accent-pink {
--ctp-accent: var(--ctp-pink);
}

.ctp-accent-mauve {
--ctp-accent: var(--ctp-mauve);
}

.ctp-accent-red {
--ctp-accent: var(--ctp-red);
}

.ctp-accent-maroon {
--ctp-accent: var(--ctp-maroon);
}

.ctp-accent-peach {
--ctp-accent: var(--ctp-peach);
}

.ctp-accent-yellow {
--ctp-accent: var(--ctp-yellow);
}

.ctp-accent-green {
--ctp-accent: var(--ctp-green);
}

.ctp-accent-teal {
--ctp-accent: var(--ctp-teal);
}

.ctp-accent-sky {
--ctp-accent: var(--ctp-sky);
}

.ctp-accent-sapphire {
--ctp-accent: var(--ctp-sapphire);
}

.ctp-accent-blue {
--ctp-accent: var(--ctp-blue);
}

.ctp-accent-lavender {
--ctp-accent: var(--ctp-lavender);
}

.anuppuccin-accent-toggle {
--color-accent: rgb(var(--ctp-accent));
--color-accent-1: rgb(var(--ctp-accent));
--color-accent-2: rgba(var(--ctp-accent), 0.9);
--text-selection: rgba(var(--ctp-accent), 0.25);
--interactive-accent: rgb(var(--ctp-accent));
--interactive-accent-hover: rgba(var(--ctp-accent), 0.9);
--text-accent: rgb(var(--ctp-accent));
--text-accent-hover: rgb(var(--ctp-accent));
--text-highlight-bg: rgba(var(--ctp-accent), 0.4);
--text-highlight-bg-active: rgba(var(--ctp-accent), 0.6);
--interactive-accent: rgb(var(--ctp-accent));
--interactive-accent-rgb: var(--ctp-accent);
--interactive-accent-hover: rgb(var(--ctp-accent));
--blockquote-border-color: rgb(var(--ctp-accent));
--background-modifier-active: rgba(var(--ctp-accent), 0.1);
--background-modifier-active-hover: rgba(var(--ctp-accent), 0.15);
--link-unresolved-decoration-color: rgba(var(--ctp-accent), 0.3);
--tag-background: rgba(var(--ctp-accent), 0.1);
--tag-background-hover: rgba(var(--ctp-accent), 0.2);
--tag-border-color: rgba(var(--ctp-accent), 0.15);
--tag-border-color-hover: rgba(var(--ctp-accent), 0.15);
--nav-item-background-selected: rgba(var(--ctp-accent), 0.2);
--heading-formatting: rgb(var(--ctp-accent));
--icon-color-focused: rgb(var(--ctp-accent));
}

.anuppuccin-accent-toggle .canvas-selection {
background-color: rgba(var(--ctp-accent), 0.1);
border: 2px solid var(--color-accent);
}

.anuppuccin-accent-toggle .canvas-placeholder-message {
background: rgba(var(--ctp-accent), 0.1);
}

.anuppuccin-accent-toggle .drag-ghost-hidden:before {
background-color: rgba(var(--ctp-accent), 0.3);
}

.anp-callout-color-toggle.anuppuccin-accent-toggle .callout[data-callout=note] {
--callout-color: var(--ctp-accent);
}

body.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header, body.anuppuccin-accent-toggle .markdown-rendered.metadata-button .frontmatter-container .frontmatter-container-header {
background-color: rgba(var(--ctp-accent), 0.8);
}

body.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header:hover, body.anuppuccin-accent-toggle .markdown-rendered.metadata-button .frontmatter-container .frontmatter-container-header:hover {
background-color: rgba(var(--ctp-accent), 0.7);
}

body.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header:active, body.anuppuccin-accent-toggle .markdown-rendered.metadata-button .frontmatter-container .frontmatter-container-header:active {
background-color: rgba(var(--ctp-accent), 0.6);
}

.anp-colorful-frame.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-container, .anp-colorful-frame.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-ribbon.mod-left:before, .anp-colorful-frame.anp-colorful-frame.anp-card-layout, .anp-colorful-frame.anp-colorful-frame.anp-card-layout .workspace-tabs.mod-top, .anp-colorful-frame.anp-colorful-frame.anp-card-layout .sidebar-toggle-button, .anp-colorful-frame.anp-colorful-frame.anp-card-layout .workspace-ribbon.mod-left:before {
--tab-container-background: rgba(var(--anp-colorful-frame-color, var(--ctp-accent)), var(--anp-colorful-frame-opacity, 1));
--titlebar-background: rgba(var(--anp-colorful-frame-color, var(--ctp-accent)), var(--anp-colorful-frame-opacity, 1));
}

.anp-colorful-frame.anp-colorful-frame.anp-card-layout .prompt {
--background-modifier-hover: rgba(var(--ctp-text), 0.075) ;
}

.anp-colorful-frame.anp-colorful-frame .sidebar-toggle-button {
--background-modifier-hover: rgba(var(--ctp-text), 0.075);
}

.anp-colorful-frame.anp-card-layout .workspace-tabs {
background-color: var(--tab-container-background);
}

.anuppuccin-accent-toggle .style-settings-heading:is([data-id=anuppuccin-theme-settings], [data-id=anuppuccin-theme-settings-extended]) {
border-color: rgba(var(--ctp-accent), 0.2);
}

.anuppuccin-accent-toggle .style-settings-heading:is([data-id=anuppuccin-theme-settings], [data-id=anuppuccin-theme-settings-extended]):not(.is-collapsed) + .style-settings-container {
border-color: rgba(var(--ctp-accent), 0.2);
}
.ctp-accent-light-rosewater {
--ctp-accent: var(--ctp-rosewater);
}

.ctp-accent-light-flamingo {
--ctp-accent: var(--ctp-flamingo);
}

.ctp-accent-light-pink {
--ctp-accent: var(--ctp-pink);
}

.ctp-accent-light-mauve {
--ctp-accent: var(--ctp-mauve);
}

.ctp-accent-light-red {
--ctp-accent: var(--ctp-red);
}

.ctp-accent-light-maroon {
--ctp-accent: var(--ctp-maroon);
}

.ctp-accent-light-peach {
--ctp-accent: var(--ctp-peach);
}

.ctp-accent-light-yellow {
--ctp-accent: var(--ctp-yellow);
}

.ctp-accent-light-green {
--ctp-accent: var(--ctp-green);
}

.ctp-accent-light-teal {
--ctp-accent: var(--ctp-teal);
}

.ctp-accent-light-sky {
--ctp-accent: var(--ctp-sky);
}

.ctp-accent-light-sapphire {
--ctp-accent: var(--ctp-sapphire);
}

.ctp-accent-light-blue {
--ctp-accent: var(--ctp-blue);
}

.ctp-accent-light-lavender {
--ctp-accent: var(--ctp-lavender);
}`,
    "anp-current-line": `.anp-current-line .markdown-source-view .cm-active.cm-line {
background-color: rgba(var(--ctp-surface1), 0.4);
}

.anp-current-line-border .markdown-source-view .cm-active.cm-line {
border-left: 2px solid var(--interactive-accent);
margin-left: -2px !important;
background-color: rgba(var(--ctp-surface1), 0.4);
}

.anp-current-line-border-only .markdown-source-view .cm-active.cm-line::before {
content: "";
position: absolute;
top: 0;
bottom: 0;
left: -1.5rem;
width: 2px;
background-color: rgba(var(--interactive-accent-rgb), 0.3);
}

.anp-current-line-border-only .markdown-source-view .cm-focused .cm-active.cm-line::before {
background-color: var(--interactive-accent);
}`,
    "anp-current-line-border": `.anp-current-line-border .markdown-source-view .cm-active.cm-line {
border-left: 2px solid var(--interactive-accent);
margin-left: -2px !important;
background-color: rgba(var(--ctp-surface1), 0.4);
}

.anp-current-line-border-only .markdown-source-view .cm-active.cm-line::before {
content: "";
position: absolute;
top: 0;
bottom: 0;
left: -1.5rem;
width: 2px;
background-color: rgba(var(--interactive-accent-rgb), 0.3);
}

.anp-current-line-border-only .markdown-source-view .cm-focused .cm-active.cm-line::before {
background-color: var(--interactive-accent);
}`,
    "anp-current-line-border-only": `.anp-current-line-border-only .markdown-source-view .cm-active.cm-line::before {
content: "";
position: absolute;
top: 0;
bottom: 0;
left: -1.5rem;
width: 2px;
background-color: rgba(var(--interactive-accent-rgb), 0.3);
}

.anp-current-line-border-only .markdown-source-view .cm-focused .cm-active.cm-line::before {
background-color: var(--interactive-accent);
}`,
    "anp-callout-sleek": `.anp-callout-sleek .callout:not([data-callout-metadata*=anp-block], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-vanilla-plus]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) {
--callout-padding: 0;
--callout-border-width: 1px;
--callout-border-opacity: 0.4;
--callout-border-width: 1px;
background-color: rgba(var(--ctp-mantle), 0.4);
}

.anp-callout-sleek .callout:not([data-callout-metadata*=anp-block], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-vanilla-plus]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-title {
background-color: rgba(var(--callout-color), var(--callout-title-opacity, 0.1));
}

.anp-callout-sleek .callout:not([data-callout-metadata*=anp-block], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-vanilla-plus]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-content {
border-top: var(--callout-border-width) dashed rgba(var(--callout-color), var(--callout-border-opacity));
}

.anp-callout-sleek .callout:not([data-callout-metadata*=anp-block], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-vanilla-plus]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) .list-collapse-indicator {
margin-left: -35px;
padding-right: 3px;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card] {
background-color: var(--background-primary);
border-radius: 6px;
mix-blend-mode: normal;
overflow-y: hidden;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card] > .callout-content {
padding: 0;
background-color: var(--background-primary);
overflow-y: hidden;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop] {
border-radius: 0;
top: -1px;
padding-top: 1px;
right: 11px;
padding-right: 1px;
height: calc(100% + 6px);
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop] > .callout-content {
padding: 0;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop] {
border: none;
padding: 0;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop] > .callout-content {
margin: 0 10px 7px 10px;
background-color: var(--background-primary);
border-color: var(--background-modifier-border);
padding: 3px 0;
border-top-style: solid;
border-radius: 6px;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop] > .callout-title, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop] > .callout-title {
text-transform: uppercase;
background-color: transparent;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop] > .callout-title > .callout-title-inner, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop] > .callout-title > .callout-title-inner {
color: rgba(var(--ctp-text), 0.7);
font-size: 80%;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index] {
border-radius: 0;
margin: -1px;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index] > .callout-content {
padding: 0;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index] p:first-child, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index] p:first-child {
margin-bottom: 0;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar] {
background-color: var(--background-secondary);
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar] > .callout-content {
padding-right: 0;
padding-left: 0;
background-color: var(--background-secondary);
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop-image] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop-image] > .callout-content {
padding: 0;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body] {
border-width: 0 1px 0 0;
background-color: var(--background-primary);
mix-blend-mode: normal;
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body] > .callout-content {
padding: var(--callout-padding);
background-color: var(--background-primary);
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop-image], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop-image], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body], .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card] {
border-color: var(--background-modifier-border);
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop-image] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-index] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card-prop] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-prop-image] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-sidebar] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-body] > .callout-content, .anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-normal-toggle div.callout:not([data-callout-metadata*=revert])[data-callout=capacities-card] > .callout-content {
border-top: none;
}

.anp-card-layout.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek {
--capacities-sidebar-bottom: calc(var(--anp-card-layout-padding, 10px) + 80px);
}`,
    "anp-callout-block": `.anp-callout-block .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-vanilla-plus]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) {
border-left: var(--size-2-3) solid rgb(var(--callout-color));
}`,
    "anp-callout-vanilla-normal": `.anp-callout-vanilla-normal .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-plus], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) {
background-color: transparent;
}

.anp-callout-vanilla-normal .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-plus], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-title {
background-color: rgba(var(--callout-color), var(--callout-title-opacity, 0.1));
}

.anp-callout-vanilla-normal .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-plus], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-content {
background-color: rgb(var(--ctp-mantle));
}

.anp-callout-vanilla-normal .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-plus], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-title, .anp-callout-vanilla-normal .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-plus], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-content {
border-left: var(--size-2-3) solid rgb(var(--callout-color));
}`,
    "anp-callout-vanilla-plus": `.anp-callout-vanilla-plus .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) {
background-color: transparent;
}

.anp-callout-vanilla-plus .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-title {
background-color: rgba(var(--callout-color), var(--callout-title-opacity, 0.1));
border-left: var(--size-2-3) solid rgb(var(--callout-color));
}

.anp-callout-vanilla-plus .callout:not([data-callout-metadata*=anp-sleek], [data-callout-metadata*=anp-vanilla-normal], [data-callout-metadata*=anp-block]):not([data-callout-metadata*=revert], [data-callout=blank-container], [data-callout=multi-column]) > .callout-content {
background-color: rgb(var(--ctp-mantle));
}`,
    "anp-callout-color-toggle": `.anp-callout-color-toggle .callout[data-callout=note] {
--callout-color: var(--ctp-blue);
}

.anp-callout-color-toggle .callout[data-callout=abstract], .anp-callout-color-toggle .callout[data-callout=summary], .anp-callout-color-toggle .callout[data-callout=tldr], .anp-callout-color-toggle .callout[data-callout=seealso] {
--callout-color: var(--ctp-blue);
}

.anp-callout-color-toggle .callout[data-callout=info], .anp-callout-color-toggle .callout[data-callout=todo], .anp-callout-color-toggle .callout[data-callout=tip], .anp-callout-color-toggle .callout[data-callout=hint], .anp-callout-color-toggle .callout[data-callout=important] {
--callout-color: var(--ctp-teal);
}

.anp-callout-color-toggle .callout[data-callout=success], .anp-callout-color-toggle .callout[data-callout=check], .anp-callout-color-toggle .callout[data-callout=done], .anp-callout-color-toggle .callout[data-callout=question], .anp-callout-color-toggle .callout[data-callout=help], .anp-callout-color-toggle .callout[data-callout=faq] {
--callout-color: var(--ctp-green);
}

.anp-callout-color-toggle .callout[data-callout=warning], .anp-callout-color-toggle .callout[data-callout=caution], .anp-callout-color-toggle .callout[data-callout=attention] {
--callout-color: var(--ctp-yellow);
}

.anp-callout-color-toggle .callout[data-callout=failure], .anp-callout-color-toggle .callout[data-callout=fail], .anp-callout-color-toggle .callout[data-callout=missing] {
--callout-color: var(--ctp-maroon);
}

.anp-callout-color-toggle .callout[data-callout=danger], .anp-callout-color-toggle .callout[data-callout=error], .anp-callout-color-toggle .callout[data-callout=bug] {
--callout-color: var(--ctp-red);
}

.anp-callout-color-toggle .callout[data-callout=example] {
--callout-color: var(--ctp-mauve);
}

.anp-callout-color-toggle .callout[data-callout=quote], .anp-callout-color-toggle .callout[data-callout=cite] {
--callout-color: var(--ctp-surface2);
}

.anuppuccin-accent-toggle .callout[data-callout=note] {
--callout-color: var(--ctp-accent);
}`,
    "anp-custom-checkboxes": `.anp-custom-checkboxes [data-task=x] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=x] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=x][type=checkbox]:checked {
--checkbox-color: rgb(var(--ctp-green));
--checkbox-color-hover: rgb(var(--ctp-green));
}

.anp-custom-checkboxes [data-task="!"] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="!"] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="!"][type=checkbox]:checked {
--checkbox-color: rgb(var(--ctp-yellow));
--checkbox-color-hover: rgb(var(--ctp-yellow));
}

.anp-custom-checkboxes [data-task="!"] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="!"] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="!"][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
-webkit-mask-size: 20%;
}

.anp-custom-checkboxes [data-task="!"] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="!"] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="!"][type=checkbox]:checked:before {
color: var(--checkbox-color);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="?"] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="?"] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="?"][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="?"] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="?"] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="?"][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-peach));
left: 0px;
}

.anp-custom-checkboxes [data-task="?"] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="?"] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="?"][type=checkbox]:checked:before {
color: rgb(var(--ctp-peach));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="-"] {
text-decoration: var(--checklist-done-decoration);
color: var(--checklist-done-color);
}

.anp-custom-checkboxes [data-task="-"] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="-"] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="-"][type=checkbox]:checked {
--checkbox-color: rgb(var(--ctp-red));
--checkbox-color-hover: rgb(var(--ctp-red));
}

.anp-custom-checkboxes [data-task="-"] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="-"] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="-"][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
-webkit-mask-size: 50%;
}

.anp-custom-checkboxes [data-task="-"] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="-"] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="-"][type=checkbox]:checked:before {
color: var(--checkbox-color);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=b] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=b] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=b][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=b] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=b] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=b][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task=b] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=b] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=b][type=checkbox]:checked:before {
color: rgb(var(--ctp-red));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=I] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=I] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=I][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=I] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=I] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=I][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-yellow));
left: 0px;
}

.anp-custom-checkboxes [data-task=I] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=I] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=I][type=checkbox]:checked:before {
color: rgb(var(--ctp-yellow));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=p] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=p] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=p][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=p] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=p] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=p][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-green));
left: 0px;
}

.anp-custom-checkboxes [data-task=p] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=p] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=p][type=checkbox]:checked:before {
color: rgb(var(--ctp-green));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=c] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=c] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=c][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=c] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=c] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=c][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
-webkit-mask-size: 100%;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task=c] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=c] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=c][type=checkbox]:checked:before {
color: var(--checkbox-color);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=i] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=i] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=i][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=i] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=i] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=i][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-blue));
left: 0px;
}

.anp-custom-checkboxes [data-task=i] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=i] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=i][type=checkbox]:checked:before {
color: rgb(var(--ctp-blue));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=l] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=l] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=l][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=l] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=l] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=l][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-mauve));
left: 0px;
}

.anp-custom-checkboxes [data-task=l] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=l] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=l][type=checkbox]:checked:before {
color: rgb(var(--ctp-mauve));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="*"] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="*"] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="*"][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="*"] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="*"] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="*"][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-yellow));
left: 0px;
}

.anp-custom-checkboxes [data-task="*"] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="*"] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="*"][type=checkbox]:checked:before {
color: rgb(var(--ctp-yellow));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=n] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=n] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=n][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=n] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=n] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=n][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-maroon));
left: 0px;
}

.anp-custom-checkboxes [data-task=n] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=n] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=n][type=checkbox]:checked:before {
color: rgb(var(--ctp-maroon));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=S] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=S] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=S][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=S] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=S] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=S][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-green));
left: 0px;
}

.anp-custom-checkboxes [data-task=S] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=S] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=S][type=checkbox]:checked:before {
color: rgb(var(--ctp-green));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="/"] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="/"] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="/"][type=checkbox]:checked {
--checkbox-color: rgba(var(--ctp-subtext0), 0.3);
--checkbox-color-hover: rgba(var(--ctp-subtext0), 0.3);
border-color: rgb(var(--ctp-subtext0)) !important;
}

.anp-custom-checkboxes [data-task="/"] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="/"] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="/"][type=checkbox]:checked:after {
background-color: transparent;
}

.anp-custom-checkboxes [data-task="/"] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="/"] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="/"][type=checkbox]:checked:before {
color: rgb(var(--ctp-subtext0));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="<"] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="<"] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task="<"][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="<"] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="<"] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task="<"][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-teal));
left: 0px;
}

.anp-custom-checkboxes [data-task="<"] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="<"] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task="<"][type=checkbox]:checked:before {
color: rgb(var(--ctp-teal));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=">"] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=">"] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=">"][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=">"] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=">"] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=">"][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-sapphire));
left: 0px;
}

.anp-custom-checkboxes [data-task=">"] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=">"] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=">"][type=checkbox]:checked:before {
color: rgb(var(--ctp-sapphire));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task='"'] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task='"'] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task='"'][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task='"'] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task='"'] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task='"'][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-subtext0));
left: 0px;
}

.anp-custom-checkboxes [data-task='"'] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task='"'] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task='"'][type=checkbox]:checked:before {
color: rgb(var(--ctp-subtext0));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=u] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=u] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=u][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=u] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=u] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=u][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-green));
left: 0px;
}

.anp-custom-checkboxes [data-task=u] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=u] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=u][type=checkbox]:checked:before {
color: rgb(var(--ctp-green));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=d] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=d] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=d][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=d] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=d] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=d][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task=d] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=d] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=d][type=checkbox]:checked:before {
color: rgb(var(--ctp-red));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=f] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=f] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=f][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=f] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=f] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=f][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task=f] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=f] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=f][type=checkbox]:checked:before {
color: rgb(var(--ctp-red));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=k] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=k] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=k][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=k] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=k] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=k][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-yellow));
left: 0px;
}

.anp-custom-checkboxes [data-task=k] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=k] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=k][type=checkbox]:checked:before {
color: rgb(var(--ctp-yellow));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=w] > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=w] > p > input[type=checkbox]:checked, .anp-custom-checkboxes [data-task=w][type=checkbox]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=w] > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=w] > p > input[type=checkbox]:checked:after, .anp-custom-checkboxes [data-task=w][type=checkbox]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-mauve));
left: 0px;
}

.anp-custom-checkboxes [data-task=w] > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=w] > p > input[type=checkbox]:checked:before, .anp-custom-checkboxes [data-task=w][type=checkbox]:checked:before {
color: rgb(var(--ctp-mauve));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes-labels [data-task="!"] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task="!"][type=checkbox]:checked:before {
content: "IMP";
}

.anp-custom-checkboxes-labels [data-task=">"] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=">"][type=checkbox]:checked:before {
content: "RSCH";
}

.anp-custom-checkboxes-labels [data-task="<"] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task="<"][type=checkbox]:checked:before {
content: "SCH";
}

.anp-custom-checkboxes-labels [data-task="-"] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task="-"][type=checkbox]:checked:before {
content: "CNCL";
}

.anp-custom-checkboxes-labels [data-task="/"] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task="/"][type=checkbox]:checked:before {
content: "PRG";
}

.anp-custom-checkboxes-labels [data-task="?"] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task="?"][type=checkbox]:checked:before {
content: "QUE";
}

.anp-custom-checkboxes-labels [data-task="*"] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task="*"][type=checkbox]:checked:before {
content: "STAR";
}

.anp-custom-checkboxes-labels [data-task=n] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=n][type=checkbox]:checked:before {
content: "NOTE";
}

.anp-custom-checkboxes-labels [data-task=l] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=l][type=checkbox]:checked:before {
content: "LCTN";
}

.anp-custom-checkboxes-labels [data-task=i] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=i][type=checkbox]:checked:before {
content: "INFO";
}

.anp-custom-checkboxes-labels [data-task=I] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=I][type=checkbox]:checked:before {
content: "IDEA";
}

.anp-custom-checkboxes-labels [data-task=S] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=S][type=checkbox]:checked:before {
content: "AMT";
}

.anp-custom-checkboxes-labels [data-task=p] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=p][type=checkbox]:checked:before {
content: "PRO";
}

.anp-custom-checkboxes-labels [data-task=c] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=c][type=checkbox]:checked:before {
content: "CON";
}

.anp-custom-checkboxes-labels [data-task=b] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task=b][type=checkbox]:checked:before {
content: "BKMK";
}

.anp-custom-checkboxes-labels [data-task='"'] input[type=checkbox]:checked:before, .anp-custom-checkboxes-labels [data-task='"'][type=checkbox]:checked:before {
content: "QUOT";
}

.anp-custom-checkboxes-labels .task-list-item .task-list-item-checkbox {
margin-right: calc(var(--checkbox-size) * 2.7);
}`,
    "anp-speech-bubble": `.anp-speech-bubble [data-task="0"], .anp-speech-bubble [data-task="1"], .anp-speech-bubble [data-task="2"], .anp-speech-bubble [data-task="3"], .anp-speech-bubble [data-task="4"], .anp-speech-bubble [data-task="5"], .anp-speech-bubble [data-task="6"], .anp-speech-bubble [data-task="7"], .anp-speech-bubble [data-task="8"], .anp-speech-bubble [data-task="9"] {
margin-inline-start: -15px;
padding: 3px 10px !important;
border-radius: 3px 10px 10px 10px;
max-width: fit-content;
color: var(--text-normal);
--bold-color: var(--text-normal);
--italic-color: var(--text-normal);
}

.anp-speech-bubble [data-task="0"] p, .anp-speech-bubble [data-task="1"] p, .anp-speech-bubble [data-task="2"] p, .anp-speech-bubble [data-task="3"] p, .anp-speech-bubble [data-task="4"] p, .anp-speech-bubble [data-task="5"] p, .anp-speech-bubble [data-task="6"] p, .anp-speech-bubble [data-task="7"] p, .anp-speech-bubble [data-task="8"] p, .anp-speech-bubble [data-task="9"] p {
margin-top: 0;
margin-bottom: 0;
}

.anp-speech-bubble [data-task="0"] .task-list-item-checkbox, .anp-speech-bubble [data-task="1"] .task-list-item-checkbox, .anp-speech-bubble [data-task="2"] .task-list-item-checkbox, .anp-speech-bubble [data-task="3"] .task-list-item-checkbox, .anp-speech-bubble [data-task="4"] .task-list-item-checkbox, .anp-speech-bubble [data-task="5"] .task-list-item-checkbox, .anp-speech-bubble [data-task="6"] .task-list-item-checkbox, .anp-speech-bubble [data-task="7"] .task-list-item-checkbox, .anp-speech-bubble [data-task="8"] .task-list-item-checkbox, .anp-speech-bubble [data-task="9"] .task-list-item-checkbox {
display: none;
}

.anp-speech-bubble [data-task="0"]::selection, .anp-speech-bubble [data-task="1"]::selection, .anp-speech-bubble [data-task="2"]::selection, .anp-speech-bubble [data-task="3"]::selection, .anp-speech-bubble [data-task="4"]::selection, .anp-speech-bubble [data-task="5"]::selection, .anp-speech-bubble [data-task="6"]::selection, .anp-speech-bubble [data-task="7"]::selection, .anp-speech-bubble [data-task="8"]::selection, .anp-speech-bubble [data-task="9"]::selection {
background-color: rgba(var(--ctp-text), 0.2);
}

.anp-speech-bubble .is-live-preview [data-task="0"].cm-active, .anp-speech-bubble .is-live-preview [data-task="1"].cm-active, .anp-speech-bubble .is-live-preview [data-task="2"].cm-active, .anp-speech-bubble .is-live-preview [data-task="3"].cm-active, .anp-speech-bubble .is-live-preview [data-task="4"].cm-active, .anp-speech-bubble .is-live-preview [data-task="5"].cm-active, .anp-speech-bubble .is-live-preview [data-task="6"].cm-active, .anp-speech-bubble .is-live-preview [data-task="7"].cm-active, .anp-speech-bubble .is-live-preview [data-task="8"].cm-active, .anp-speech-bubble .is-live-preview [data-task="9"].cm-active {
border-radius: 0;
--text-normal: rgb(var(--ctp-text));
background: rgba(var(--ctp-surface1), 0.4);
}

.anp-speech-bubble .is-live-preview [data-task="0"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="1"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="2"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="3"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="4"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="5"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="6"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="7"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="8"]:not(.cm-active), .anp-speech-bubble .is-live-preview [data-task="9"]:not(.cm-active) {
max-width: max-content;
}

.anp-speech-bubble .HyperMD-task-line[data-task="0"], .anp-speech-bubble .HyperMD-task-line[data-task="1"], .anp-speech-bubble .HyperMD-task-line[data-task="2"], .anp-speech-bubble .HyperMD-task-line[data-task="3"], .anp-speech-bubble .HyperMD-task-line[data-task="4"], .anp-speech-bubble .HyperMD-task-line[data-task="5"], .anp-speech-bubble .HyperMD-task-line[data-task="6"], .anp-speech-bubble .HyperMD-task-line[data-task="7"], .anp-speech-bubble .HyperMD-task-line[data-task="8"], .anp-speech-bubble .HyperMD-task-line[data-task="9"] {
text-indent: 0px !important;
}

.anp-speech-bubble [data-task="0"] {
background-color: rgba(var(--ctp-red), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="1"] {
background-color: rgba(var(--ctp-peach), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="2"] {
background-color: rgba(var(--ctp-yellow), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="3"] {
background-color: rgba(var(--ctp-green), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="4"] {
background-color: rgba(var(--ctp-teal), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="5"] {
background-color: rgba(var(--ctp-sky), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="6"] {
background-color: rgba(var(--ctp-blue), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="7"] {
background-color: rgba(var(--ctp-mauve), var(--anp-speech-bubble-opacity));
}

.anp-speech-bubble [data-task="8"] {
background: linear-gradient(to right, rgba(var(--ctp-red), var(--anp-speech-bubble-opacity)), rgba(var(--ctp-yellow), var(--anp-speech-bubble-opacity)));
}

.anp-speech-bubble [data-task="9"] {
background: linear-gradient(to left, rgba(var(--ctp-lavender), var(--anp-speech-bubble-opacity)), rgba(var(--ctp-mauve), var(--anp-speech-bubble-opacity)));
}
.anp-speech-bubble [data-task="0"], .anp-speech-bubble [data-task="1"], .anp-speech-bubble [data-task="2"], .anp-speech-bubble [data-task="3"], .anp-speech-bubble [data-task="4"], .anp-speech-bubble [data-task="5"], .anp-speech-bubble [data-task="6"], .anp-speech-bubble [data-task="7"], .anp-speech-bubble [data-task="8"], .anp-speech-bubble [data-task="9"] {
--text-normal: var(--background-primary);
transition: background-color 0.2s, background 0.2s, border-radius 0.2s;
}

.anp-speech-bubble [data-task="0"]::selection, .anp-speech-bubble [data-task="1"]::selection, .anp-speech-bubble [data-task="2"]::selection, .anp-speech-bubble [data-task="3"]::selection, .anp-speech-bubble [data-task="4"]::selection, .anp-speech-bubble [data-task="5"]::selection, .anp-speech-bubble [data-task="6"]::selection, .anp-speech-bubble [data-task="7"]::selection, .anp-speech-bubble [data-task="8"]::selection, .anp-speech-bubble [data-task="9"]::selection {
background-color: rgba(var(--ctp-crust), 0.2);
background: rgba(var(--ctp-crust), 0.2);
}`,
    "anp-codeblock-numbers": `.anp-codeblock-numbers .HyperMD-codeblock-begin {
counter-reset: line-numbers;
}

.anp-codeblock-numbers .HyperMD-codeblock.cm-line:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end) {
padding-left: 5em;
position: relative;
}

.anp-codeblock-numbers .HyperMD-codeblock.cm-line:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end)::before {
align-items: flex-end;
border-right: 1px solid var(--scrollbar-thumb-bg);
color: var(--anp-code-text-color, var(--text-faint));
content: counter(line-numbers);
counter-increment: line-numbers;
display: table-caption;
font-size: 0.8em;
height: 100%;
justify-content: flex-end;
left: 0;
padding-right: 0.5em;
padding-top: 1px;
position: absolute;
text-align: right;
width: 3em;
}

.anp-codeblock-numbers .HyperMD-codeblock.cm-line.cm-active:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end)::before {
color: var(--color-accent);
}

.anp-codeblock-numbers .HyperMD-codeblock .cm-foldPlaceholder::before {
display: none;
}`,
    "anp-latex-inline-rosewater": `.anp-latex-inline-rosewater span.math:not(.math-block) {
color: rgb(var(--ctp-rosewater));
}`,
    "anp-latex-inline-flamingo": `.anp-latex-inline-flamingo span.math:not(.math-block) {
color: rgb(var(--ctp-flamingo));
}`,
    "anp-latex-inline-pink": `.anp-latex-inline-pink span.math:not(.math-block) {
color: rgb(var(--ctp-pink));
}`,
    "anp-latex-inline-mauve": `.anp-latex-inline-mauve span.math:not(.math-block) {
color: rgb(var(--ctp-mauve));
}`,
    "anp-latex-inline-red": `.anp-latex-inline-red span.math:not(.math-block) {
color: rgb(var(--ctp-red));
}`,
    "anp-latex-inline-maroon": `.anp-latex-inline-maroon span.math:not(.math-block) {
color: rgb(var(--ctp-maroon));
}`,
    "anp-latex-inline-peach": `.anp-latex-inline-peach span.math:not(.math-block) {
color: rgb(var(--ctp-peach));
}`,
    "anp-latex-inline-yellow": `.anp-latex-inline-yellow span.math:not(.math-block) {
color: rgb(var(--ctp-yellow));
}`,
    "anp-latex-inline-green": `.anp-latex-inline-green span.math:not(.math-block) {
color: rgb(var(--ctp-green));
}`,
    "anp-latex-inline-teal": `.anp-latex-inline-teal span.math:not(.math-block) {
color: rgb(var(--ctp-teal));
}`,
    "anp-latex-inline-sky": `.anp-latex-inline-sky span.math:not(.math-block) {
color: rgb(var(--ctp-sky));
}`,
    "anp-latex-inline-sapphire": `.anp-latex-inline-sapphire span.math:not(.math-block) {
color: rgb(var(--ctp-sapphire));
}`,
    "anp-latex-inline-blue": `.anp-latex-inline-blue span.math:not(.math-block) {
color: rgb(var(--ctp-blue));
}`,
    "anp-latex-inline-lavender": `.anp-latex-inline-lavender span.math:not(.math-block) {
color: rgb(var(--ctp-lavender));
}`,
    "anp-latex-inline-text": `.anp-latex-inline-text span.math:not(.math-block) {
color: rgb(var(--ctp-text));
}`,
    "anp-latex-inline-subtext1": `.anp-latex-inline-subtext1 span.math:not(.math-block) {
color: rgb(var(--ctp-subtext1));
}`,
    "anp-latex-inline-subtext0": `.anp-latex-inline-subtext0 span.math:not(.math-block) {
color: rgb(var(--ctp-subtext0));
}`,
    "anp-latex-inline-overlay2": `.anp-latex-inline-overlay2 span.math:not(.math-block) {
color: rgb(var(--ctp-overlay2));
}`,
    "anp-latex-inline-overlay1": `.anp-latex-inline-overlay1 span.math:not(.math-block) {
color: rgb(var(--ctp-overlay1));
}`,
    "anp-latex-inline-overlay0": `.anp-latex-inline-overlay0 span.math:not(.math-block) {
color: rgb(var(--ctp-overlay0));
}`,
    "anp-latex-inline-surface2": `.anp-latex-inline-surface2 span.math:not(.math-block) {
color: rgb(var(--ctp-surface2));
}`,
    "anp-latex-inline-surface1": `.anp-latex-inline-surface1 span.math:not(.math-block) {
color: rgb(var(--ctp-surface1));
}`,
    "anp-latex-inline-surface0": `.anp-latex-inline-surface0 span.math:not(.math-block) {
color: rgb(var(--ctp-surface0));
}`,
    "anp-latex-block-rosewater": `.anp-latex-block-rosewater .math-block {
color: rgb(var(--ctp-rosewater));
}`,
    "anp-latex-block-flamingo": `.anp-latex-block-flamingo .math-block {
color: rgb(var(--ctp-flamingo));
}`,
    "anp-latex-block-pink": `.anp-latex-block-pink .math-block {
color: rgb(var(--ctp-pink));
}`,
    "anp-latex-block-mauve": `.anp-latex-block-mauve .math-block {
color: rgb(var(--ctp-mauve));
}`,
    "anp-latex-block-red": `.anp-latex-block-red .math-block {
color: rgb(var(--ctp-red));
}`,
    "anp-latex-block-maroon": `.anp-latex-block-maroon .math-block {
color: rgb(var(--ctp-maroon));
}`,
    "anp-latex-block-peach": `.anp-latex-block-peach .math-block {
color: rgb(var(--ctp-peach));
}`,
    "anp-latex-block-yellow": `.anp-latex-block-yellow .math-block {
color: rgb(var(--ctp-yellow));
}`,
    "anp-latex-block-green": `.anp-latex-block-green .math-block {
color: rgb(var(--ctp-green));
}`,
    "anp-latex-block-teal": `.anp-latex-block-teal .math-block {
color: rgb(var(--ctp-teal));
}`,
    "anp-latex-block-sky": `.anp-latex-block-sky .math-block {
color: rgb(var(--ctp-sky));
}`,
    "anp-latex-block-sapphire": `.anp-latex-block-sapphire .math-block {
color: rgb(var(--ctp-sapphire));
}`,
    "anp-latex-block-blue": `.anp-latex-block-blue .math-block {
color: rgb(var(--ctp-blue));
}`,
    "anp-latex-block-lavender": `.anp-latex-block-lavender .math-block {
color: rgb(var(--ctp-lavender));
}`,
    "anp-latex-block-text": `.anp-latex-block-text .math-block {
color: rgb(var(--ctp-text));
}`,
    "anp-latex-block-subtext1": `.anp-latex-block-subtext1 .math-block {
color: rgb(var(--ctp-subtext1));
}`,
    "anp-latex-block-subtext0": `.anp-latex-block-subtext0 .math-block {
color: rgb(var(--ctp-subtext0));
}`,
    "anp-latex-block-overlay2": `.anp-latex-block-overlay2 .math-block {
color: rgb(var(--ctp-overlay2));
}`,
    "anp-latex-block-overlay1": `.anp-latex-block-overlay1 .math-block {
color: rgb(var(--ctp-overlay1));
}`,
    "anp-latex-block-overlay0": `.anp-latex-block-overlay0 .math-block {
color: rgb(var(--ctp-overlay0));
}`,
    "anp-latex-block-surface2": `.anp-latex-block-surface2 .math-block {
color: rgb(var(--ctp-surface2));
}`,
    "anp-latex-block-surface1": `.anp-latex-block-surface1 .math-block {
color: rgb(var(--ctp-surface1));
}`,
    "anp-latex-block-surface0": `.anp-latex-block-surface0 .math-block {
color: rgb(var(--ctp-surface0));
}`,
    "anp-list-toggle": `.anp-list-toggle div.el-ul > ul.has-list-bullet > li > ul.has-list-bullet > li > .list-bullet::after {
--list-bullet-border: 1px solid var(--list-marker-color);
background-color: transparent;
width: calc(var(--list-bullet-size) - 1px);
height: calc(var(--list-bullet-size) - 1px);
}

.anp-list-toggle div.el-ul > ul.has-list-bullet > li > ul.has-list-bullet > li > ul.has-list-bullet > li > .list-bullet::after {
--list-bullet-radius: 0;
background-color: var(--list-marker-color);
}

.anp-list-toggle div.el-ul > ul.has-list-bullet > li > ul.has-list-bullet > li > ul.has-list-bullet > li > ul.has-list-bullet > li > .list-bullet::after {
width: calc(var(--list-bullet-size) - 1px);
height: calc(var(--list-bullet-size) - 1px);
--list-bullet-radius: 0;
--list-bullet-border: 1px solid var(--list-marker-color);
background-color: transparent;
}`,
    "anp-table-toggle": `.anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table, .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table td, .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table th, .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:first-child, .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th, .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:last-child, .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview), .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) td, .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) th, .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) thead tr > th:first-child, .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) thead tr > th, .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) thead tr > th:last-child, .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table, .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table td, .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table th, .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:first-child, .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th, .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:last-child, .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview), .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) td, .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) th, .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:first-child, .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th, .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:last-child {
border: var(--anp-table-thickness, 1px) solid var(--table-border-color);
}

.anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table th:not([align]), .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:first-child:not([align]), .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:not([align]), .anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:last-child:not([align]), .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) th:not([align]), .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) thead tr > th:first-child:not([align]), .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) thead tr > th:not([align]), .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) thead tr > th:last-child:not([align]), .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table th:not([align]), .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:first-child:not([align]), .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:not([align]), .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:last-child:not([align]), .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) th:not([align]), .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:first-child:not([align]), .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:not([align]), .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:last-child:not([align]) {
text-align: var(--anp-table-align-th, center);
}

.anp-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table td:not([align]), .anp-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) td:not([align]), .anp-table-toggle .is-live-preview:not(.cards):not(.table-disable) table td:not([align]), .anp-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) td:not([align]) {
text-align: var(--anp-table-align-td, center);
}

.anp-table-th-highlight .markdown-preview-view:not(.cards):not(.table-disable) th, .anp-table-th-highlight .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) th, .anp-table-th-highlight .is-live-preview:not(.cards):not(.table-disable) th, .anp-table-th-highlight .is-live-preview.cards:not(.table-disable) table:not(.dataview) th {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}

.anp-table-row-alt .markdown-preview-view:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-row-alt .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .anp-table-row-alt .is-live-preview:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-row-alt .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}

.anp-table-col-alt .markdown-preview-view:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-col-alt .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .anp-table-col-alt .is-live-preview:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-col-alt .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n) {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}

.anp-table-full .markdown-preview-view:not(.cards):not(.table-disable) td, .anp-table-full .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) td, .anp-table-full .is-live-preview:not(.cards):not(.table-disable) td, .anp-table-full .is-live-preview.cards:not(.table-disable) table:not(.dataview) td {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}

.anp-table-checkered .markdown-preview-view:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-checkered .markdown-preview-view:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .anp-table-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .anp-table-checkered .is-live-preview:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-checkered .is-live-preview:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .anp-table-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}

.anp-table-checkered .markdown-preview-view:not(.cards):not(.table-disable) tr:nth-child(2n) td:nth-child(2n), .anp-table-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n), .anp-table-checkered .is-live-preview:not(.cards):not(.table-disable) tr:nth-child(2n) td:nth-child(2n), .anp-table-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n) {
background-color: rgba(var(--ctp-crust), var(--anp-table-highlight-opacity, 0.5));
}

.anp-table-auto.anp-table-toggle .markdown-rendered:not(.cards):not(.table-disable) table, .anp-table-auto.anp-table-toggle .markdown-rendered.cards:not(.table-disable) table:not(.dataview) {
margin: 0 auto;
}

.anp-table-width.anp-table-toggle .markdown-rendered:not(.cards):not(.table-disable) table, .anp-table-width.anp-table-toggle .markdown-rendered.cards:not(.table-disable) table:not(.dataview) {
width: var(--anp-table-width-pct);
margin-left: calc(50% - var(--anp-table-width-pct) / 2);
margin-right: calc(50% - var(--anp-table-width-pct) / 2);
}`,
    "anp-table-width": `.markdown-rendered:not(.cards):not(.table-disable) table, .markdown-rendered.cards:not(.table-disable) table:not(.dataview) {
width: var(--anp-table-width-pct);
}

.anp-table-toggle .markdown-rendered:not(.cards):not(.table-disable) table, .anp-table-toggle .markdown-rendered.cards:not(.table-disable) table:not(.dataview) {
width: var(--anp-table-width-pct);
margin-left: calc(50% - var(--anp-table-width-pct) / 2);
margin-right: calc(50% - var(--anp-table-width-pct) / 2);
}`,
    "anp-table-auto": `.markdown-rendered:not(.cards):not(.table-disable) table, .markdown-rendered.cards:not(.table-disable) table:not(.dataview) {
margin: 0 auto;
}

.anp-table-toggle .markdown-rendered:not(.cards):not(.table-disable) table, .anp-table-toggle .markdown-rendered.cards:not(.table-disable) table:not(.dataview) {
margin: 0 auto;
}`,
    "anp-table-th-highlight": `.anp-table-toggle.anp-table-th-highlight .markdown-preview-view:not(.cards):not(.table-disable) th, .anp-table-toggle.anp-table-th-highlight .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) th, .anp-table-toggle.anp-table-th-highlight .is-live-preview:not(.cards):not(.table-disable) th, .anp-table-toggle.anp-table-th-highlight .is-live-preview.cards:not(.table-disable) table:not(.dataview) th {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}`,
    "anp-table-row-alt": `.anp-table-toggle.anp-table-row-alt .markdown-preview-view:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-toggle.anp-table-row-alt .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .anp-table-toggle.anp-table-row-alt .is-live-preview:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-toggle.anp-table-row-alt .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}`,
    "anp-table-col-alt": `.anp-table-toggle.anp-table-col-alt .markdown-preview-view:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-toggle.anp-table-col-alt .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .anp-table-toggle.anp-table-col-alt .is-live-preview:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-toggle.anp-table-col-alt .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n) {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}`,
    "anp-table-checkered": `.anp-table-toggle.anp-table-checkered .markdown-preview-view:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-toggle.anp-table-checkered .markdown-preview-view:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-toggle.anp-table-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .anp-table-toggle.anp-table-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .anp-table-toggle.anp-table-checkered .is-live-preview:not(.cards):not(.table-disable) tr td:nth-child(2n), .anp-table-toggle.anp-table-checkered .is-live-preview:not(.cards):not(.table-disable) tr:nth-child(2n) td, .anp-table-toggle.anp-table-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .anp-table-toggle.anp-table-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}

.anp-table-toggle.anp-table-checkered .markdown-preview-view:not(.cards):not(.table-disable) tr:nth-child(2n) td:nth-child(2n), .anp-table-toggle.anp-table-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n), .anp-table-toggle.anp-table-checkered .is-live-preview:not(.cards):not(.table-disable) tr:nth-child(2n) td:nth-child(2n), .anp-table-toggle.anp-table-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n) {
background-color: rgba(var(--ctp-crust), var(--anp-table-highlight-opacity, 0.5));
}`,
    "anp-table-full": `.anp-table-toggle.anp-table-full .markdown-preview-view:not(.cards):not(.table-disable) td, .anp-table-toggle.anp-table-full .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) td, .anp-table-toggle.anp-table-full .is-live-preview:not(.cards):not(.table-disable) td, .anp-table-toggle.anp-table-full .is-live-preview.cards:not(.table-disable) table:not(.dataview) td {
background-color: rgba(var(--ctp-mantle), var(--anp-table-highlight-opacity, 0.5));
}`,
    "anp-toggle-preview": `.anp-toggle-preview .markdown-preview-section {
width: var(--anp-preview-width-pct);
margin: 0 auto;
}`,
    "anp-kanban-hide-card-menus": `.anp-kanban-hide-card-menus:not(.is-mobile) .kanban-plugin__item-title + .kanban-plugin__item-postfix-button-wrapper {
display: none;
}

.anp-kanban-hide-archive-btn:not(.is-mobile) .kanban-plugin__item-title-wrapper {
padding: 8px;
position: relative;
}

.anp-kanban-hide-archive-btn:not(.is-mobile) .kanban-plugin__item-prefix-button-wrapper {
background-color: var(--background-primary);
border-top-right-radius: var(--anp-kanban-card-radius, 6px);
display: none;
padding: 3px;
position: absolute;
right: 1px;
top: 1px;
z-index: 1;
}

.anp-kanban-hide-archive-btn:not(.is-mobile) .kanban-plugin__item:hover .kanban-plugin__item-prefix-button-wrapper {
display: flex;
}

.anp-kanban-hide-archive-btn.is-mobile .kanban-plugin__item-prefix-button-wrapper {
display: none;
}`,
    "anp-kanban-hide-archive-btn": `.anp-kanban-hide-card-menus.anp-kanban-hide-archive-btn:not(.is-mobile) .kanban-plugin__item-title-wrapper {
padding: 8px;
position: relative;
}

.anp-kanban-hide-card-menus.anp-kanban-hide-archive-btn:not(.is-mobile) .kanban-plugin__item-prefix-button-wrapper {
background-color: var(--background-primary);
border-top-right-radius: var(--anp-kanban-card-radius, 6px);
display: none;
padding: 3px;
position: absolute;
right: 1px;
top: 1px;
z-index: 1;
}

.anp-kanban-hide-card-menus.anp-kanban-hide-archive-btn:not(.is-mobile) .kanban-plugin__item:hover .kanban-plugin__item-prefix-button-wrapper {
display: flex;
}

.anp-kanban-hide-card-menus.is-mobile .kanban-plugin__item-prefix-button-wrapper {
display: none;
}`,
    "anp-kanban-hide-card-border": `.anp-kanban-hide-card-border .kanban-plugin__item:not(:hover) {
box-shadow: none;
}

.anp-kanban-hide-card-border .kanban-plugin__item.is-search-hit {
box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.anp-kanban-hide-cards.anp-kanban-hide-card-border .kanban-plugin__item.is-search-hit {
box-shadow: none;
}`,
    "anp-kanban-lanes": `.anp-kanban-lanes .kanban-plugin__lane-wrapper {
height: 100%;
}

.anp-kanban-lanes .kanban-plugin__scroll-container.kanban-plugin__vertical {
flex-grow: 1;
}`,
    "anp-kanban-hide-lane-border": `.anp-kanban-hide-lane-border .kanban-plugin__lane, .anp-kanban-hide-lane-border .kanban-plugin__lane-header-wrapper, .anp-kanban-hide-lane-border .kanban-plugin__item-button-wrapper, .anp-kanban-hide-lane-border .kanban-plugin__item-form {
border-width: 0;
box-shadow: none;
}

.anp-kanban-hide-lane-border .kanban-plugin__lane-items {
padding-bottom: 0;
padding-top: 0;
}

.anp-kanban-hide-lane-border .kanban-plugin__lane-setting-wrapper {
border-bottom-width: 0;
padding-top: 6px;
}`,
    "anp-kanban-search-full": `.anp-kanban-search-full .kanban-plugin__search-wrapper {
padding: 10px;
}

.anp-kanban-search-full .kanban-plugin__search-wrapper .kanban-plugin__filter-input {
flex: 1;
}

.anp-kanban-search-full .kanban-plugin__search-wrapper .clickable-icon {
position: absolute;
right: calc(1em - 2px);
}

.anp-kanban-search-full .kanban-plugin__search-wrapper .kanban-plugin__icon {
display: flex;
}`,
    "anp-kanban-collapse-lanes": `.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)), .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]), .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)), .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) {
width: 44px !important;
}

.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-header-wrapper, .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-header-wrapper, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-header-wrapper, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-header-wrapper {
border-width: 0;
gap: 10px;
position: absolute;
transform-origin: 18px 22px;
transform: rotate(90deg);
z-index: 1;
}

.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-grip, .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-grip, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-grip, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-grip {
transform: rotate(-90deg);
}

.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-settings-button-wrapper, .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-settings-button-wrapper, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-settings-button-wrapper, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-settings-button-wrapper {
display: none;
}

.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__item-wrapper, .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__item-wrapper, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__item-wrapper, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__item-wrapper {
display: none;
}

.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__placeholder:only-child, .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__placeholder:only-child, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__placeholder:only-child, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__placeholder:only-child {
display: none;
}

.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__new-item-button, .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__new-item-button, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__new-item-button, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__new-item-button {
font-size: 0;
}

.anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__item-button-plus, .anp-kanban-collapse-lanes:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__item-button-plus, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__item-button-plus, .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__item-button-plus {
font-size: 0.875rem;
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper {
width: 44px !important;
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__lane-header-wrapper {
border-width: 0;
gap: 10px;
position: absolute;
transform-origin: 18px 22px;
transform: rotate(90deg);
z-index: 1;
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__lane-grip {
transform: rotate(-90deg);
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__lane-settings-button-wrapper {
display: none;
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__item-wrapper {
display: none;
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__placeholder:only-child {
display: none;
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__new-item-button {
font-size: 0;
}

.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__item-button-plus {
font-size: 0.875rem;
}`,
    "anp-kanban-hide-cards": `.anp-kanban-hide-cards:not(.anp-kanban-uncollapse-lanes) .kanban-plugin__item-wrapper:has(.is-search-miss), .anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container)) .kanban-plugin__item-wrapper:has(.is-search-miss) {
display: none;
}

.anp-kanban-hide-card-border .kanban-plugin__item.is-search-hit {
box-shadow: none;
}

.anp-kanban-hide-cards:not(.anp-kanban-hide-card-border) .kanban-plugin__item.is-search-hit {
box-shadow: inset 0 0 0 1px var(--background-modifier-border);
}`,
    "anp-kanban-hide-mark": `.anp-kanban-hide-mark .kanban-plugin__item-wrapper .is-search-hit mark {
background-color: transparent;
color: inherit;
}`,
    "anp-kanban-uncollapse-lanes": `.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)), .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) {
width: 44px !important;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-header-wrapper, .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-header-wrapper {
border-width: 0;
gap: 10px;
position: absolute;
transform-origin: 18px 22px;
transform: rotate(90deg);
z-index: 1;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-grip, .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-grip {
transform: rotate(-90deg);
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__lane-settings-button-wrapper, .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__lane-settings-button-wrapper {
display: none;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__item-wrapper, .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__item-wrapper {
display: none;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__placeholder:only-child, .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__placeholder:only-child {
display: none;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__new-item-button, .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__new-item-button {
font-size: 0;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) .kanban-plugin__item-button-plus, .anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container > .kanban-plugin__item-wrapper)) .kanban-plugin__lane-wrapper:not(:has(.kanban-plugin__lane[data-count="0"], .kanban-plugin__item:not(.is-search-miss), .kanban-plugin__item-form)) ~ .kanban-plugin__lane-wrapper:has(.kanban-plugin__lane[data-count="0"]) .kanban-plugin__item-button-plus {
font-size: 0.875rem;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper {
width: 44px !important;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__lane-header-wrapper {
border-width: 0;
gap: 10px;
position: absolute;
transform-origin: 18px 22px;
transform: rotate(90deg);
z-index: 1;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__lane-grip {
transform: rotate(-90deg);
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__lane-settings-button-wrapper {
display: none;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__item-wrapper {
display: none;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__placeholder:only-child {
display: none;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__new-item-button {
font-size: 0;
}

.anp-kanban-collapse-lanes.anp-kanban-uncollapse-lanes .kanban-plugin__drag-container[style*="width: 54px;"] .kanban-plugin__lane-wrapper .kanban-plugin__item-button-plus {
font-size: 0.875rem;
}

.anp-kanban-hide-cards.anp-kanban-uncollapse-lanes:not(:has(.kanban-plugin__drag-container)) .kanban-plugin__item-wrapper:has(.is-search-miss) {
display: none;
}`,
    "anp-color-transition-toggle": `.anp-color-transition-toggle .horizontal-tab-content, .anp-color-transition-toggle .vertical-tab-content, .anp-color-transition-toggle .vertical-tab-header, .anp-color-transition-toggle .workspace-tab-header-container, .anp-color-transition-toggle .workspace-fake-target-overlay:not(.is-in-sidebar) .workspace-tabs .workspace-leaf, .anp-color-transition-toggle .mod-root .workspace-tabs .workspace-leaf, .anp-color-transition-toggle .setting-item-name {
transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out !important;
}`,
    "anp-button-metadata-toggle": `.anp-button-metadata-toggle .markdown-rendered.rtl .frontmatter-container .frontmatter-container-header {
left: unset;
right: calc(100% - 32px);
}

.anp-button-metadata-toggle .markdown-rendered.rtl .frontmatter-container .frontmatter-container-header:after {
margin-left: unset;
margin-right: 7px;
}

body.anuppuccin-accent-toggle.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header {
background-color: rgba(var(--ctp-accent), 0.8);
}

body.anuppuccin-accent-toggle.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header:hover {
background-color: rgba(var(--ctp-accent), 0.7);
}

body.anuppuccin-accent-toggle.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header:active {
background-color: rgba(var(--ctp-accent), 0.6);
}

body:not(.anuppuccin-accent-toggle).anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header {
background-color: hsla(var(--color-accent-hsl), 0.8);
}

body:not(.anuppuccin-accent-toggle).anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header:hover {
background-color: hsla(var(--color-accent-hsl), 0.7);
}

body:not(.anuppuccin-accent-toggle).anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header:active {
background-color: hsla(var(--color-accent-hsl), 0.6);
}

.anp-button-metadata-toggle .frontmatter-container {
padding: 0;
}

.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header {
width: 32px !important;
z-index: 1;
height: 32px !important;
text-overflow: clip;
overflow: hidden;
color: transparent !important;
position: absolute;
left: calc(100% - 32px);
border-radius: 6px;
}

.anp-button-metadata-toggle .frontmatter-container .frontmatter-container-header:after {
position: absolute;
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor;'%3E%3Cpolygon points='12 2 2 7 12 12 22 7 12 2'%3E%3C/polygon%3E%3Cpolyline points='2 17 12 22 22 17'%3E%3C/polyline%3E%3Cpolyline points='2 12 12 17 22 12'%3E%3C/polyline%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor;'%3E%3Cpolygon points='12 2 2 7 12 12 22 7 12 2'%3E%3C/polygon%3E%3Cpolyline points='2 17 12 22 22 17'%3E%3C/polyline%3E%3Cpolyline points='2 12 12 17 22 12'%3E%3C/polyline%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
mask-repeat: no-repeat;
background-size: contain;
background-color: var(--background-primary);
color: var(--background-secondary);
width: 22px;
height: 22px;
margin-left: 5px;
margin-top: 5px;
}`,
    "anp-print": `.anp-print .print {
--ctp-crust: inherit;
--ctp-mantle: inherit;
--ctp-base: inherit;
--ctp-surface0: inherit;
--ctp-surface1: inherit;
--ctp-surface2: inherit;
--ctp-overlay0: inherit;
--ctp-overlay1: inherit;
--ctp-overlay2: inherit;
--ctp-subtext0: inherit;
--ctp-subtext1: inherit;
--ctp-text: inherit;
--ctp-rosewater: inherit;
--ctp-flamingo: inherit;
--ctp-red: inherit;
--ctp-maroon: inherit;
--ctp-mauve: inherit;
--ctp-pink: inherit;
--ctp-peach: inherit;
--ctp-yellow: inherit;
--ctp-green: inherit;
--ctp-teal: inherit;
--ctp-sky: inherit;
--ctp-sapphire: inherit;
--ctp-blue: inherit;
--ctp-lavender: inherit;
}

.anp-print .print, body.anp-print, .anp-print .markdown-rendered, :root:has(.anp-print) {
background-color: rgb(var(--ctp-base));
}

.anp-print .print .markdown-preview-view {
color: rgb(var(--ctp-text));
}
.anp-print .print.theme-light, .anp-print .print.theme-dark {
--ctp-crust: inherit;
--ctp-mantle: inherit;
--ctp-base: inherit;
--ctp-surface0: inherit;
--ctp-surface1: inherit;
--ctp-surface2: inherit;
--ctp-overlay0: inherit;
--ctp-overlay1: inherit;
--ctp-overlay2: inherit;
--ctp-subtext0: inherit;
--ctp-subtext1: inherit;
--ctp-text: inherit;
--ctp-rosewater: inherit;
--ctp-flamingo: inherit;
--ctp-red: inherit;
--ctp-maroon: inherit;
--ctp-mauve: inherit;
--ctp-pink: inherit;
--ctp-peach: inherit;
--ctp-yellow: inherit;
--ctp-green: inherit;
--ctp-teal: inherit;
--ctp-sky: inherit;
--ctp-sapphire: inherit;
--ctp-blue: inherit;
--ctp-lavender: inherit;
}
.anp-print .print.theme-light, .anp-print .print.theme-dark {
--ctp-crust: inherit;
--ctp-mantle: inherit;
--ctp-base: inherit;
--ctp-surface0: inherit;
--ctp-surface1: inherit;
--ctp-surface2: inherit;
--ctp-overlay0: inherit;
--ctp-overlay1: inherit;
--ctp-overlay2: inherit;
--ctp-subtext0: inherit;
--ctp-subtext1: inherit;
--ctp-text: inherit;
--ctp-rosewater: inherit;
--ctp-flamingo: inherit;
--ctp-red: inherit;
--ctp-maroon: inherit;
--ctp-mauve: inherit;
--ctp-pink: inherit;
--ctp-peach: inherit;
--ctp-yellow: inherit;
--ctp-green: inherit;
--ctp-teal: inherit;
--ctp-sky: inherit;
--ctp-sapphire: inherit;
--ctp-blue: inherit;
--ctp-lavender: inherit;
}`,
    "anp-autohide-titlebar": `.anp-autohide-titlebar:not(.is-mobile) {
--title-bar-delay: 150ms;
--title-bar-duration: 300ms;
--title-bar-target-translate-y: 18px;
--title-bar-translate-y: 40px;
/**
  * This should fix the drag/click titlebar issue.
  * 
  * Invisible boxes are not rendered (as if they were fully transparent),
  * cannot be interacted with (and behave as if they had pointer-events: none),
  * and are removed from navigation (similar to display: none).
  * 
  * @see: https://drafts.csswg.org/css-display/#visibility
  */
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header {
margin-top: calc(var(--title-bar-translate-y) * -1);
position: relative;
transition: transform var(--title-bar-duration) var(--title-bar-delay);
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header::before {
bottom: calc(var(--title-bar-target-translate-y) * -1);
content: "";
left: 0;
position: absolute;
top: 0;
transition: transform var(--title-bar-duration) var(--title-bar-delay);
width: 100%;
z-index: 0;
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header:is(:hover, :focus-within)::before {
transform: translateY(var(--title-bar-target-translate-y));
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header:is(:hover, :focus-within), .anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header:is(:hover, :focus-within) + .view-content {
transform: translateY(var(--title-bar-translate-y));
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-content {
transition: transform var(--title-bar-duration) var(--title-bar-delay);
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header-title {
--file-header-font-size: var(--font-ui-medium);
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header > div {
transition: visibility var(--title-bar-duration) var(--title-bar-delay);
visibility: visible;
z-index: 1;
}

.anp-autohide-titlebar:not(.is-mobile) .workspace-leaf-content .view-header:not(:hover, :focus-within) > div {
visibility: hidden;
}`,
    "anp-toggle-metadata": `.anp-toggle-metadata .frontmatter-container {
display: none;
}`,
    "anp-toggle-scrollbars": `.anp-toggle-scrollbars *::-webkit-scrollbar {
display: none;
}`,
    "anp-hide-status-bar": `.anp-hide-status-bar .status-bar {
display: none;
}`,
    "anp-tooltip-toggle": `.anp-tooltip-toggle .tooltip {
display: none;
}`,
    "anp-hide-external-link-icon": `.anp-hide-external-link-icon .external-link, .anp-hide-external-link-icon .external-link:hover {
background-image: none;
padding-right: 0px;
}`,
    "anp-header-color-toggle": `.anp-h1-rosewater .app-container, .anp-h1-rosewater .print {
--h1-color: rgb(var(--ctp-rosewater));
}

.anp-h1-flamingo .app-container, .anp-h1-flamingo .print {
--h1-color: rgb(var(--ctp-flamingo));
}

.anp-h1-pink .app-container, .anp-h1-pink .print {
--h1-color: rgb(var(--ctp-pink));
}

.anp-h1-mauve .app-container, .anp-h1-mauve .print {
--h1-color: rgb(var(--ctp-mauve));
}

.anp-h1-red .app-container, .anp-h1-red .print {
--h1-color: rgb(var(--ctp-red));
}

.anp-h1-maroon .app-container, .anp-h1-maroon .print {
--h1-color: rgb(var(--ctp-maroon));
}

.anp-h1-peach .app-container, .anp-h1-peach .print {
--h1-color: rgb(var(--ctp-peach));
}

.anp-h1-yellow .app-container, .anp-h1-yellow .print {
--h1-color: rgb(var(--ctp-yellow));
}

.anp-h1-green .app-container, .anp-h1-green .print {
--h1-color: rgb(var(--ctp-green));
}

.anp-h1-teal .app-container, .anp-h1-teal .print {
--h1-color: rgb(var(--ctp-teal));
}

.anp-h1-sky .app-container, .anp-h1-sky .print {
--h1-color: rgb(var(--ctp-sky));
}

.anp-h1-sapphire .app-container, .anp-h1-sapphire .print {
--h1-color: rgb(var(--ctp-sapphire));
}

.anp-h1-blue .app-container, .anp-h1-blue .print {
--h1-color: rgb(var(--ctp-blue));
}

.anp-h1-lavender .app-container, .anp-h1-lavender .print {
--h1-color: rgb(var(--ctp-lavender));
}

.anp-h2-rosewater .app-container, .anp-h2-rosewater .print {
--h2-color: rgb(var(--ctp-rosewater));
}

.anp-h2-flamingo .app-container, .anp-h2-flamingo .print {
--h2-color: rgb(var(--ctp-flamingo));
}

.anp-h2-pink .app-container, .anp-h2-pink .print {
--h2-color: rgb(var(--ctp-pink));
}

.anp-h2-mauve .app-container, .anp-h2-mauve .print {
--h2-color: rgb(var(--ctp-mauve));
}

.anp-h2-red .app-container, .anp-h2-red .print {
--h2-color: rgb(var(--ctp-red));
}

.anp-h2-maroon .app-container, .anp-h2-maroon .print {
--h2-color: rgb(var(--ctp-maroon));
}

.anp-h2-peach .app-container, .anp-h2-peach .print {
--h2-color: rgb(var(--ctp-peach));
}

.anp-h2-yellow .app-container, .anp-h2-yellow .print {
--h2-color: rgb(var(--ctp-yellow));
}

.anp-h2-green .app-container, .anp-h2-green .print {
--h2-color: rgb(var(--ctp-green));
}

.anp-h2-teal .app-container, .anp-h2-teal .print {
--h2-color: rgb(var(--ctp-teal));
}

.anp-h2-sky .app-container, .anp-h2-sky .print {
--h2-color: rgb(var(--ctp-sky));
}

.anp-h2-sapphire .app-container, .anp-h2-sapphire .print {
--h2-color: rgb(var(--ctp-sapphire));
}

.anp-h2-blue .app-container, .anp-h2-blue .print {
--h2-color: rgb(var(--ctp-blue));
}

.anp-h2-lavender .app-container, .anp-h2-lavender .print {
--h2-color: rgb(var(--ctp-lavender));
}

.anp-h3-rosewater .app-container, .anp-h3-rosewater .print {
--h3-color: rgb(var(--ctp-rosewater));
}

.anp-h3-flamingo .app-container, .anp-h3-flamingo .print {
--h3-color: rgb(var(--ctp-flamingo));
}

.anp-h3-pink .app-container, .anp-h3-pink .print {
--h3-color: rgb(var(--ctp-pink));
}

.anp-h3-mauve .app-container, .anp-h3-mauve .print {
--h3-color: rgb(var(--ctp-mauve));
}

.anp-h3-red .app-container, .anp-h3-red .print {
--h3-color: rgb(var(--ctp-red));
}

.anp-h3-maroon .app-container, .anp-h3-maroon .print {
--h3-color: rgb(var(--ctp-maroon));
}

.anp-h3-peach .app-container, .anp-h3-peach .print {
--h3-color: rgb(var(--ctp-peach));
}

.anp-h3-yellow .app-container, .anp-h3-yellow .print {
--h3-color: rgb(var(--ctp-yellow));
}

.anp-h3-green .app-container, .anp-h3-green .print {
--h3-color: rgb(var(--ctp-green));
}

.anp-h3-teal .app-container, .anp-h3-teal .print {
--h3-color: rgb(var(--ctp-teal));
}

.anp-h3-sky .app-container, .anp-h3-sky .print {
--h3-color: rgb(var(--ctp-sky));
}

.anp-h3-sapphire .app-container, .anp-h3-sapphire .print {
--h3-color: rgb(var(--ctp-sapphire));
}

.anp-h3-blue .app-container, .anp-h3-blue .print {
--h3-color: rgb(var(--ctp-blue));
}

.anp-h3-lavender .app-container, .anp-h3-lavender .print {
--h3-color: rgb(var(--ctp-lavender));
}

.anp-h4-rosewater .app-container, .anp-h4-rosewater .print {
--h4-color: rgb(var(--ctp-rosewater));
}

.anp-h4-flamingo .app-container, .anp-h4-flamingo .print {
--h4-color: rgb(var(--ctp-flamingo));
}

.anp-h4-pink .app-container, .anp-h4-pink .print {
--h4-color: rgb(var(--ctp-pink));
}

.anp-h4-mauve .app-container, .anp-h4-mauve .print {
--h4-color: rgb(var(--ctp-mauve));
}

.anp-h4-red .app-container, .anp-h4-red .print {
--h4-color: rgb(var(--ctp-red));
}

.anp-h4-maroon .app-container, .anp-h4-maroon .print {
--h4-color: rgb(var(--ctp-maroon));
}

.anp-h4-peach .app-container, .anp-h4-peach .print {
--h4-color: rgb(var(--ctp-peach));
}

.anp-h4-yellow .app-container, .anp-h4-yellow .print {
--h4-color: rgb(var(--ctp-yellow));
}

.anp-h4-green .app-container, .anp-h4-green .print {
--h4-color: rgb(var(--ctp-green));
}

.anp-h4-teal .app-container, .anp-h4-teal .print {
--h4-color: rgb(var(--ctp-teal));
}

.anp-h4-sky .app-container, .anp-h4-sky .print {
--h4-color: rgb(var(--ctp-sky));
}

.anp-h4-sapphire .app-container, .anp-h4-sapphire .print {
--h4-color: rgb(var(--ctp-sapphire));
}

.anp-h4-blue .app-container, .anp-h4-blue .print {
--h4-color: rgb(var(--ctp-blue));
}

.anp-h4-lavender .app-container, .anp-h4-lavender .print {
--h4-color: rgb(var(--ctp-lavender));
}

.anp-h5-rosewater .app-container, .anp-h5-rosewater .print {
--h5-color: rgb(var(--ctp-rosewater));
}

.anp-h5-flamingo .app-container, .anp-h5-flamingo .print {
--h5-color: rgb(var(--ctp-flamingo));
}

.anp-h5-pink .app-container, .anp-h5-pink .print {
--h5-color: rgb(var(--ctp-pink));
}

.anp-h5-mauve .app-container, .anp-h5-mauve .print {
--h5-color: rgb(var(--ctp-mauve));
}

.anp-h5-red .app-container, .anp-h5-red .print {
--h5-color: rgb(var(--ctp-red));
}

.anp-h5-maroon .app-container, .anp-h5-maroon .print {
--h5-color: rgb(var(--ctp-maroon));
}

.anp-h5-peach .app-container, .anp-h5-peach .print {
--h5-color: rgb(var(--ctp-peach));
}

.anp-h5-yellow .app-container, .anp-h5-yellow .print {
--h5-color: rgb(var(--ctp-yellow));
}

.anp-h5-green .app-container, .anp-h5-green .print {
--h5-color: rgb(var(--ctp-green));
}

.anp-h5-teal .app-container, .anp-h5-teal .print {
--h5-color: rgb(var(--ctp-teal));
}

.anp-h5-sky .app-container, .anp-h5-sky .print {
--h5-color: rgb(var(--ctp-sky));
}

.anp-h5-sapphire .app-container, .anp-h5-sapphire .print {
--h5-color: rgb(var(--ctp-sapphire));
}

.anp-h5-blue .app-container, .anp-h5-blue .print {
--h5-color: rgb(var(--ctp-blue));
}

.anp-h5-lavender .app-container, .anp-h5-lavender .print {
--h5-color: rgb(var(--ctp-lavender));
}

.anp-h6-rosewater .app-container, .anp-h6-rosewater .print {
--h6-color: rgb(var(--ctp-rosewater));
}

.anp-h6-flamingo .app-container, .anp-h6-flamingo .print {
--h6-color: rgb(var(--ctp-flamingo));
}

.anp-h6-pink .app-container, .anp-h6-pink .print {
--h6-color: rgb(var(--ctp-pink));
}

.anp-h6-mauve .app-container, .anp-h6-mauve .print {
--h6-color: rgb(var(--ctp-mauve));
}

.anp-h6-red .app-container, .anp-h6-red .print {
--h6-color: rgb(var(--ctp-red));
}

.anp-h6-maroon .app-container, .anp-h6-maroon .print {
--h6-color: rgb(var(--ctp-maroon));
}

.anp-h6-peach .app-container, .anp-h6-peach .print {
--h6-color: rgb(var(--ctp-peach));
}

.anp-h6-yellow .app-container, .anp-h6-yellow .print {
--h6-color: rgb(var(--ctp-yellow));
}

.anp-h6-green .app-container, .anp-h6-green .print {
--h6-color: rgb(var(--ctp-green));
}

.anp-h6-teal .app-container, .anp-h6-teal .print {
--h6-color: rgb(var(--ctp-teal));
}

.anp-h6-sky .app-container, .anp-h6-sky .print {
--h6-color: rgb(var(--ctp-sky));
}

.anp-h6-sapphire .app-container, .anp-h6-sapphire .print {
--h6-color: rgb(var(--ctp-sapphire));
}

.anp-h6-blue .app-container, .anp-h6-blue .print {
--h6-color: rgb(var(--ctp-blue));
}

.anp-h6-lavender .app-container, .anp-h6-lavender .print {
--h6-color: rgb(var(--ctp-lavender));
}`,
    "anp-header-margin-toggle": `.anp-header-margin-toggle .cm-header-1, .anp-header-margin-toggle .markdown-preview-view h1 {
margin-block-start: var(--anp-header-margin-value);
margin-block-end: var(--anp-header-margin-value);
}

.anp-header-margin-toggle .cm-header-2, .anp-header-margin-toggle .markdown-preview-view h2 {
margin-block-start: var(--anp-header-margin-value);
margin-block-end: var(--anp-header-margin-value);
}

.anp-header-margin-toggle .cm-header-3, .anp-header-margin-toggle .markdown-preview-view h3 {
margin-block-start: var(--anp-header-margin-value);
margin-block-end: var(--anp-header-margin-value);
}

.anp-header-margin-toggle .cm-header-4, .anp-header-margin-toggle .markdown-preview-view h4 {
margin-block-start: var(--anp-header-margin-value);
margin-block-end: var(--anp-header-margin-value);
}

.anp-header-margin-toggle .cm-header-5, .anp-header-margin-toggle .markdown-preview-view h5 {
margin-block-start: var(--anp-header-margin-value);
margin-block-end: var(--anp-header-margin-value);
}

.anp-header-margin-toggle .cm-header-6, .anp-header-margin-toggle .markdown-preview-view h6 {
margin-block-start: var(--anp-header-margin-value);
margin-block-end: var(--anp-header-margin-value);
}`,
    "anp-header-divider-color-toggle": `.anp-h1-divider.anp-header-divider-color-toggle .markdown-rendered h1, .anp-h1-divider.anp-header-divider-color-toggle .HyperMD-header-1 {
border-bottom-color: currentColor;
}

.anp-h2-divider.anp-header-divider-color-toggle .markdown-rendered h2, .anp-h2-divider.anp-header-divider-color-toggle .HyperMD-header-2 {
border-bottom-color: currentColor;
}

.anp-h3-divider.anp-header-divider-color-toggle .markdown-rendered h3, .anp-h3-divider.anp-header-divider-color-toggle .HyperMD-header-3 {
border-bottom-color: currentColor;
}

.anp-h4-divider.anp-header-divider-color-toggle .markdown-rendered h4, .anp-h4-divider.anp-header-divider-color-toggle .HyperMD-header-4 {
border-bottom-color: currentColor;
}

.anp-h5-divider.anp-header-divider-color-toggle .markdown-rendered h5, .anp-h5-divider.anp-header-divider-color-toggle .HyperMD-header-5 {
border-bottom-color: currentColor;
}

.anp-h6-divider.anp-header-divider-color-toggle .markdown-rendered h6, .anp-h6-divider.anp-header-divider-color-toggle .HyperMD-header-6 {
border-bottom-color: currentColor;
}`,
    "anp-h1-rosewater": `.anp-header-color-toggle.anp-h1-rosewater .app-container, .anp-header-color-toggle.anp-h1-rosewater .print {
--h1-color: rgb(var(--ctp-rosewater));
}`,
    "anp-h1-flamingo": `.anp-header-color-toggle.anp-h1-flamingo .app-container, .anp-header-color-toggle.anp-h1-flamingo .print {
--h1-color: rgb(var(--ctp-flamingo));
}`,
    "anp-h1-pink": `.anp-header-color-toggle.anp-h1-pink .app-container, .anp-header-color-toggle.anp-h1-pink .print {
--h1-color: rgb(var(--ctp-pink));
}`,
    "anp-h1-mauve": `.anp-header-color-toggle.anp-h1-mauve .app-container, .anp-header-color-toggle.anp-h1-mauve .print {
--h1-color: rgb(var(--ctp-mauve));
}`,
    "anp-h1-red": `.anp-header-color-toggle.anp-h1-red .app-container, .anp-header-color-toggle.anp-h1-red .print {
--h1-color: rgb(var(--ctp-red));
}`,
    "anp-h1-maroon": `.anp-header-color-toggle.anp-h1-maroon .app-container, .anp-header-color-toggle.anp-h1-maroon .print {
--h1-color: rgb(var(--ctp-maroon));
}`,
    "anp-h1-peach": `.anp-header-color-toggle.anp-h1-peach .app-container, .anp-header-color-toggle.anp-h1-peach .print {
--h1-color: rgb(var(--ctp-peach));
}`,
    "anp-h1-yellow": `.anp-header-color-toggle.anp-h1-yellow .app-container, .anp-header-color-toggle.anp-h1-yellow .print {
--h1-color: rgb(var(--ctp-yellow));
}`,
    "anp-h1-green": `.anp-header-color-toggle.anp-h1-green .app-container, .anp-header-color-toggle.anp-h1-green .print {
--h1-color: rgb(var(--ctp-green));
}`,
    "anp-h1-teal": `.anp-header-color-toggle.anp-h1-teal .app-container, .anp-header-color-toggle.anp-h1-teal .print {
--h1-color: rgb(var(--ctp-teal));
}`,
    "anp-h1-sky": `.anp-header-color-toggle.anp-h1-sky .app-container, .anp-header-color-toggle.anp-h1-sky .print {
--h1-color: rgb(var(--ctp-sky));
}`,
    "anp-h1-sapphire": `.anp-header-color-toggle.anp-h1-sapphire .app-container, .anp-header-color-toggle.anp-h1-sapphire .print {
--h1-color: rgb(var(--ctp-sapphire));
}`,
    "anp-h1-blue": `.anp-header-color-toggle.anp-h1-blue .app-container, .anp-header-color-toggle.anp-h1-blue .print {
--h1-color: rgb(var(--ctp-blue));
}`,
    "anp-h1-lavender": `.anp-header-color-toggle.anp-h1-lavender .app-container, .anp-header-color-toggle.anp-h1-lavender .print {
--h1-color: rgb(var(--ctp-lavender));
}`,
    "anp-h1-divider": `.anp-h1-divider .markdown-rendered h1, .anp-h1-divider .HyperMD-header-1 {
border-bottom: var(--hr-thickness) solid var(--background-modifier-border);
padding-bottom: 2px;
}

.anp-header-divider-color-toggle .markdown-rendered h1, .anp-header-divider-color-toggle .HyperMD-header-1 {
border-bottom-color: currentColor;
}`,
    "anp-h2-rosewater": `.anp-header-color-toggle.anp-h2-rosewater .app-container, .anp-header-color-toggle.anp-h2-rosewater .print {
--h2-color: rgb(var(--ctp-rosewater));
}`,
    "anp-h2-flamingo": `.anp-header-color-toggle.anp-h2-flamingo .app-container, .anp-header-color-toggle.anp-h2-flamingo .print {
--h2-color: rgb(var(--ctp-flamingo));
}`,
    "anp-h2-pink": `.anp-header-color-toggle.anp-h2-pink .app-container, .anp-header-color-toggle.anp-h2-pink .print {
--h2-color: rgb(var(--ctp-pink));
}`,
    "anp-h2-mauve": `.anp-header-color-toggle.anp-h2-mauve .app-container, .anp-header-color-toggle.anp-h2-mauve .print {
--h2-color: rgb(var(--ctp-mauve));
}`,
    "anp-h2-red": `.anp-header-color-toggle.anp-h2-red .app-container, .anp-header-color-toggle.anp-h2-red .print {
--h2-color: rgb(var(--ctp-red));
}`,
    "anp-h2-maroon": `.anp-header-color-toggle.anp-h2-maroon .app-container, .anp-header-color-toggle.anp-h2-maroon .print {
--h2-color: rgb(var(--ctp-maroon));
}`,
    "anp-h2-peach": `.anp-header-color-toggle.anp-h2-peach .app-container, .anp-header-color-toggle.anp-h2-peach .print {
--h2-color: rgb(var(--ctp-peach));
}`,
    "anp-h2-yellow": `.anp-header-color-toggle.anp-h2-yellow .app-container, .anp-header-color-toggle.anp-h2-yellow .print {
--h2-color: rgb(var(--ctp-yellow));
}`,
    "anp-h2-green": `.anp-header-color-toggle.anp-h2-green .app-container, .anp-header-color-toggle.anp-h2-green .print {
--h2-color: rgb(var(--ctp-green));
}`,
    "anp-h2-teal": `.anp-header-color-toggle.anp-h2-teal .app-container, .anp-header-color-toggle.anp-h2-teal .print {
--h2-color: rgb(var(--ctp-teal));
}`,
    "anp-h2-sky": `.anp-header-color-toggle.anp-h2-sky .app-container, .anp-header-color-toggle.anp-h2-sky .print {
--h2-color: rgb(var(--ctp-sky));
}`,
    "anp-h2-sapphire": `.anp-header-color-toggle.anp-h2-sapphire .app-container, .anp-header-color-toggle.anp-h2-sapphire .print {
--h2-color: rgb(var(--ctp-sapphire));
}`,
    "anp-h2-blue": `.anp-header-color-toggle.anp-h2-blue .app-container, .anp-header-color-toggle.anp-h2-blue .print {
--h2-color: rgb(var(--ctp-blue));
}`,
    "anp-h2-lavender": `.anp-header-color-toggle.anp-h2-lavender .app-container, .anp-header-color-toggle.anp-h2-lavender .print {
--h2-color: rgb(var(--ctp-lavender));
}`,
    "anp-h2-divider": `.anp-h2-divider .markdown-rendered h2, .anp-h2-divider .HyperMD-header-2 {
border-bottom: var(--hr-thickness) solid var(--background-modifier-border);
padding-bottom: 2px;
}

.anp-header-divider-color-toggle .markdown-rendered h2, .anp-header-divider-color-toggle .HyperMD-header-2 {
border-bottom-color: currentColor;
}`,
    "anp-h3-rosewater": `.anp-header-color-toggle.anp-h3-rosewater .app-container, .anp-header-color-toggle.anp-h3-rosewater .print {
--h3-color: rgb(var(--ctp-rosewater));
}`,
    "anp-h3-flamingo": `.anp-header-color-toggle.anp-h3-flamingo .app-container, .anp-header-color-toggle.anp-h3-flamingo .print {
--h3-color: rgb(var(--ctp-flamingo));
}`,
    "anp-h3-pink": `.anp-header-color-toggle.anp-h3-pink .app-container, .anp-header-color-toggle.anp-h3-pink .print {
--h3-color: rgb(var(--ctp-pink));
}`,
    "anp-h3-mauve": `.anp-header-color-toggle.anp-h3-mauve .app-container, .anp-header-color-toggle.anp-h3-mauve .print {
--h3-color: rgb(var(--ctp-mauve));
}`,
    "anp-h3-red": `.anp-header-color-toggle.anp-h3-red .app-container, .anp-header-color-toggle.anp-h3-red .print {
--h3-color: rgb(var(--ctp-red));
}`,
    "anp-h3-maroon": `.anp-header-color-toggle.anp-h3-maroon .app-container, .anp-header-color-toggle.anp-h3-maroon .print {
--h3-color: rgb(var(--ctp-maroon));
}`,
    "anp-h3-peach": `.anp-header-color-toggle.anp-h3-peach .app-container, .anp-header-color-toggle.anp-h3-peach .print {
--h3-color: rgb(var(--ctp-peach));
}`,
    "anp-h3-yellow": `.anp-header-color-toggle.anp-h3-yellow .app-container, .anp-header-color-toggle.anp-h3-yellow .print {
--h3-color: rgb(var(--ctp-yellow));
}`,
    "anp-h3-green": `.anp-header-color-toggle.anp-h3-green .app-container, .anp-header-color-toggle.anp-h3-green .print {
--h3-color: rgb(var(--ctp-green));
}`,
    "anp-h3-teal": `.anp-header-color-toggle.anp-h3-teal .app-container, .anp-header-color-toggle.anp-h3-teal .print {
--h3-color: rgb(var(--ctp-teal));
}`,
    "anp-h3-sky": `.anp-header-color-toggle.anp-h3-sky .app-container, .anp-header-color-toggle.anp-h3-sky .print {
--h3-color: rgb(var(--ctp-sky));
}`,
    "anp-h3-sapphire": `.anp-header-color-toggle.anp-h3-sapphire .app-container, .anp-header-color-toggle.anp-h3-sapphire .print {
--h3-color: rgb(var(--ctp-sapphire));
}`,
    "anp-h3-blue": `.anp-header-color-toggle.anp-h3-blue .app-container, .anp-header-color-toggle.anp-h3-blue .print {
--h3-color: rgb(var(--ctp-blue));
}`,
    "anp-h3-lavender": `.anp-header-color-toggle.anp-h3-lavender .app-container, .anp-header-color-toggle.anp-h3-lavender .print {
--h3-color: rgb(var(--ctp-lavender));
}`,
    "anp-h3-divider": `.anp-h3-divider .markdown-rendered h3, .anp-h3-divider .HyperMD-header-3 {
border-bottom: var(--hr-thickness) solid var(--background-modifier-border);
padding-bottom: 2px;
}

.anp-header-divider-color-toggle .markdown-rendered h3, .anp-header-divider-color-toggle .HyperMD-header-3 {
border-bottom-color: currentColor;
}`,
    "anp-h4-rosewater": `.anp-header-color-toggle.anp-h4-rosewater .app-container, .anp-header-color-toggle.anp-h4-rosewater .print {
--h4-color: rgb(var(--ctp-rosewater));
}`,
    "anp-h4-flamingo": `.anp-header-color-toggle.anp-h4-flamingo .app-container, .anp-header-color-toggle.anp-h4-flamingo .print {
--h4-color: rgb(var(--ctp-flamingo));
}`,
    "anp-h4-pink": `.anp-header-color-toggle.anp-h4-pink .app-container, .anp-header-color-toggle.anp-h4-pink .print {
--h4-color: rgb(var(--ctp-pink));
}`,
    "anp-h4-mauve": `.anp-header-color-toggle.anp-h4-mauve .app-container, .anp-header-color-toggle.anp-h4-mauve .print {
--h4-color: rgb(var(--ctp-mauve));
}`,
    "anp-h4-red": `.anp-header-color-toggle.anp-h4-red .app-container, .anp-header-color-toggle.anp-h4-red .print {
--h4-color: rgb(var(--ctp-red));
}`,
    "anp-h4-maroon": `.anp-header-color-toggle.anp-h4-maroon .app-container, .anp-header-color-toggle.anp-h4-maroon .print {
--h4-color: rgb(var(--ctp-maroon));
}`,
    "anp-h4-peach": `.anp-header-color-toggle.anp-h4-peach .app-container, .anp-header-color-toggle.anp-h4-peach .print {
--h4-color: rgb(var(--ctp-peach));
}`,
    "anp-h4-yellow": `.anp-header-color-toggle.anp-h4-yellow .app-container, .anp-header-color-toggle.anp-h4-yellow .print {
--h4-color: rgb(var(--ctp-yellow));
}`,
    "anp-h4-green": `.anp-header-color-toggle.anp-h4-green .app-container, .anp-header-color-toggle.anp-h4-green .print {
--h4-color: rgb(var(--ctp-green));
}`,
    "anp-h4-teal": `.anp-header-color-toggle.anp-h4-teal .app-container, .anp-header-color-toggle.anp-h4-teal .print {
--h4-color: rgb(var(--ctp-teal));
}`,
    "anp-h4-sky": `.anp-header-color-toggle.anp-h4-sky .app-container, .anp-header-color-toggle.anp-h4-sky .print {
--h4-color: rgb(var(--ctp-sky));
}`,
    "anp-h4-sapphire": `.anp-header-color-toggle.anp-h4-sapphire .app-container, .anp-header-color-toggle.anp-h4-sapphire .print {
--h4-color: rgb(var(--ctp-sapphire));
}`,
    "anp-h4-blue": `.anp-header-color-toggle.anp-h4-blue .app-container, .anp-header-color-toggle.anp-h4-blue .print {
--h4-color: rgb(var(--ctp-blue));
}`,
    "anp-h4-lavender": `.anp-header-color-toggle.anp-h4-lavender .app-container, .anp-header-color-toggle.anp-h4-lavender .print {
--h4-color: rgb(var(--ctp-lavender));
}`,
    "anp-h4-divider": `.anp-h4-divider .markdown-rendered h4, .anp-h4-divider .HyperMD-header-4 {
border-bottom: var(--hr-thickness) solid var(--background-modifier-border);
padding-bottom: 2px;
}

.anp-header-divider-color-toggle .markdown-rendered h4, .anp-header-divider-color-toggle .HyperMD-header-4 {
border-bottom-color: currentColor;
}`,
    "anp-h5-rosewater": `.anp-header-color-toggle.anp-h5-rosewater .app-container, .anp-header-color-toggle.anp-h5-rosewater .print {
--h5-color: rgb(var(--ctp-rosewater));
}`,
    "anp-h5-flamingo": `.anp-header-color-toggle.anp-h5-flamingo .app-container, .anp-header-color-toggle.anp-h5-flamingo .print {
--h5-color: rgb(var(--ctp-flamingo));
}`,
    "anp-h5-pink": `.anp-header-color-toggle.anp-h5-pink .app-container, .anp-header-color-toggle.anp-h5-pink .print {
--h5-color: rgb(var(--ctp-pink));
}`,
    "anp-h5-mauve": `.anp-header-color-toggle.anp-h5-mauve .app-container, .anp-header-color-toggle.anp-h5-mauve .print {
--h5-color: rgb(var(--ctp-mauve));
}`,
    "anp-h5-red": `.anp-header-color-toggle.anp-h5-red .app-container, .anp-header-color-toggle.anp-h5-red .print {
--h5-color: rgb(var(--ctp-red));
}`,
    "anp-h5-maroon": `.anp-header-color-toggle.anp-h5-maroon .app-container, .anp-header-color-toggle.anp-h5-maroon .print {
--h5-color: rgb(var(--ctp-maroon));
}`,
    "anp-h5-peach": `.anp-header-color-toggle.anp-h5-peach .app-container, .anp-header-color-toggle.anp-h5-peach .print {
--h5-color: rgb(var(--ctp-peach));
}`,
    "anp-h5-yellow": `.anp-header-color-toggle.anp-h5-yellow .app-container, .anp-header-color-toggle.anp-h5-yellow .print {
--h5-color: rgb(var(--ctp-yellow));
}`,
    "anp-h5-green": `.anp-header-color-toggle.anp-h5-green .app-container, .anp-header-color-toggle.anp-h5-green .print {
--h5-color: rgb(var(--ctp-green));
}`,
    "anp-h5-teal": `.anp-header-color-toggle.anp-h5-teal .app-container, .anp-header-color-toggle.anp-h5-teal .print {
--h5-color: rgb(var(--ctp-teal));
}`,
    "anp-h5-sky": `.anp-header-color-toggle.anp-h5-sky .app-container, .anp-header-color-toggle.anp-h5-sky .print {
--h5-color: rgb(var(--ctp-sky));
}`,
    "anp-h5-sapphire": `.anp-header-color-toggle.anp-h5-sapphire .app-container, .anp-header-color-toggle.anp-h5-sapphire .print {
--h5-color: rgb(var(--ctp-sapphire));
}`,
    "anp-h5-blue": `.anp-header-color-toggle.anp-h5-blue .app-container, .anp-header-color-toggle.anp-h5-blue .print {
--h5-color: rgb(var(--ctp-blue));
}`,
    "anp-h5-lavender": `.anp-header-color-toggle.anp-h5-lavender .app-container, .anp-header-color-toggle.anp-h5-lavender .print {
--h5-color: rgb(var(--ctp-lavender));
}`,
    "anp-h5-divider": `.anp-h5-divider .markdown-rendered h5, .anp-h5-divider .HyperMD-header-5 {
border-bottom: var(--hr-thickness) solid var(--background-modifier-border);
padding-bottom: 2px;
}

.anp-header-divider-color-toggle .markdown-rendered h5, .anp-header-divider-color-toggle .HyperMD-header-5 {
border-bottom-color: currentColor;
}`,
    "anp-h6-rosewater": `.anp-header-color-toggle.anp-h6-rosewater .app-container, .anp-header-color-toggle.anp-h6-rosewater .print {
--h6-color: rgb(var(--ctp-rosewater));
}`,
    "anp-h6-flamingo": `.anp-header-color-toggle.anp-h6-flamingo .app-container, .anp-header-color-toggle.anp-h6-flamingo .print {
--h6-color: rgb(var(--ctp-flamingo));
}`,
    "anp-h6-pink": `.anp-header-color-toggle.anp-h6-pink .app-container, .anp-header-color-toggle.anp-h6-pink .print {
--h6-color: rgb(var(--ctp-pink));
}`,
    "anp-h6-mauve": `.anp-header-color-toggle.anp-h6-mauve .app-container, .anp-header-color-toggle.anp-h6-mauve .print {
--h6-color: rgb(var(--ctp-mauve));
}`,
    "anp-h6-red": `.anp-header-color-toggle.anp-h6-red .app-container, .anp-header-color-toggle.anp-h6-red .print {
--h6-color: rgb(var(--ctp-red));
}`,
    "anp-h6-maroon": `.anp-header-color-toggle.anp-h6-maroon .app-container, .anp-header-color-toggle.anp-h6-maroon .print {
--h6-color: rgb(var(--ctp-maroon));
}`,
    "anp-h6-peach": `.anp-header-color-toggle.anp-h6-peach .app-container, .anp-header-color-toggle.anp-h6-peach .print {
--h6-color: rgb(var(--ctp-peach));
}`,
    "anp-h6-yellow": `.anp-header-color-toggle.anp-h6-yellow .app-container, .anp-header-color-toggle.anp-h6-yellow .print {
--h6-color: rgb(var(--ctp-yellow));
}`,
    "anp-h6-green": `.anp-header-color-toggle.anp-h6-green .app-container, .anp-header-color-toggle.anp-h6-green .print {
--h6-color: rgb(var(--ctp-green));
}`,
    "anp-h6-teal": `.anp-header-color-toggle.anp-h6-teal .app-container, .anp-header-color-toggle.anp-h6-teal .print {
--h6-color: rgb(var(--ctp-teal));
}`,
    "anp-h6-sky": `.anp-header-color-toggle.anp-h6-sky .app-container, .anp-header-color-toggle.anp-h6-sky .print {
--h6-color: rgb(var(--ctp-sky));
}`,
    "anp-h6-sapphire": `.anp-header-color-toggle.anp-h6-sapphire .app-container, .anp-header-color-toggle.anp-h6-sapphire .print {
--h6-color: rgb(var(--ctp-sapphire));
}`,
    "anp-h6-blue": `.anp-header-color-toggle.anp-h6-blue .app-container, .anp-header-color-toggle.anp-h6-blue .print {
--h6-color: rgb(var(--ctp-blue));
}`,
    "anp-h6-lavender": `.anp-header-color-toggle.anp-h6-lavender .app-container, .anp-header-color-toggle.anp-h6-lavender .print {
--h6-color: rgb(var(--ctp-lavender));
}`,
    "anp-h6-divider": `.anp-h6-divider .markdown-rendered h6, .anp-h6-divider .HyperMD-header-6 {
border-bottom: var(--hr-thickness) solid var(--background-modifier-border);
padding-bottom: 2px;
}

.anp-header-divider-color-toggle .markdown-rendered h6, .anp-header-divider-color-toggle .HyperMD-header-6 {
border-bottom-color: currentColor;
}`,
    "hide-comments": `.hide-comments .is-live-preview .cm-line:not(.cm-active) .cm-comment {
display: none;
}`,
    "hide-comment-indicators": `.hide-comment-indicators .is-live-preview .cm-line:not(.cm-active) .cm-comment-start, .hide-comment-indicators .is-live-preview .cm-line:not(.cm-active) .cm-comment-end {
display: none;
}`,
    "anp-decoration-toggle": `.anp-decoration-toggle {
--italic-color: rgb(var(--anp-italic-color, var(--text-normal)));
--bold-color: rgb(var(--anp-bold-color, var(--text-normal)));
--text-highlight-bg: rgba(var(--anp-highlight-color, var(--ctp-yellow)), 0.2);
}`,
    "anp-bold-rosewater": `.anp-bold-rosewater {
--anp-bold-color: var(--ctp-rosewater);
}`,
    "anp-bold-flamingo": `.anp-bold-flamingo {
--anp-bold-color: var(--ctp-flamingo);
}`,
    "anp-bold-pink": `.anp-bold-pink {
--anp-bold-color: var(--ctp-pink);
}`,
    "anp-bold-mauve": `.anp-bold-mauve {
--anp-bold-color: var(--ctp-mauve);
}`,
    "anp-bold-red": `.anp-bold-red {
--anp-bold-color: var(--ctp-red);
}`,
    "anp-bold-maroon": `.anp-bold-maroon {
--anp-bold-color: var(--ctp-maroon);
}`,
    "anp-bold-peach": `.anp-bold-peach {
--anp-bold-color: var(--ctp-peach);
}`,
    "anp-bold-yellow": `.anp-bold-yellow {
--anp-bold-color: var(--ctp-yellow);
}`,
    "anp-bold-green": `.anp-bold-green {
--anp-bold-color: var(--ctp-green);
}`,
    "anp-bold-teal": `.anp-bold-teal {
--anp-bold-color: var(--ctp-teal);
}`,
    "anp-bold-sky": `.anp-bold-sky {
--anp-bold-color: var(--ctp-sky);
}`,
    "anp-bold-sapphire": `.anp-bold-sapphire {
--anp-bold-color: var(--ctp-sapphire);
}`,
    "anp-bold-blue": `.anp-bold-blue {
--anp-bold-color: var(--ctp-blue);
}`,
    "anp-bold-lavender": `.anp-bold-lavender {
--anp-bold-color: var(--ctp-lavender);
}`,
    "anp-italic-rosewater": `.anp-italic-rosewater {
--anp-italic-color: var(--ctp-rosewater);
}`,
    "anp-italic-flamingo": `.anp-italic-flamingo {
--anp-italic-color: var(--ctp-flamingo);
}`,
    "anp-italic-pink": `.anp-italic-pink {
--anp-italic-color: var(--ctp-pink);
}`,
    "anp-italic-mauve": `.anp-italic-mauve {
--anp-italic-color: var(--ctp-mauve);
}`,
    "anp-italic-red": `.anp-italic-red {
--anp-italic-color: var(--ctp-red);
}`,
    "anp-italic-maroon": `.anp-italic-maroon {
--anp-italic-color: var(--ctp-maroon);
}`,
    "anp-italic-peach": `.anp-italic-peach {
--anp-italic-color: var(--ctp-peach);
}`,
    "anp-italic-yellow": `.anp-italic-yellow {
--anp-italic-color: var(--ctp-yellow);
}`,
    "anp-italic-green": `.anp-italic-green {
--anp-italic-color: var(--ctp-green);
}`,
    "anp-italic-teal": `.anp-italic-teal {
--anp-italic-color: var(--ctp-teal);
}`,
    "anp-italic-sky": `.anp-italic-sky {
--anp-italic-color: var(--ctp-sky);
}`,
    "anp-italic-sapphire": `.anp-italic-sapphire {
--anp-italic-color: var(--ctp-sapphire);
}`,
    "anp-italic-blue": `.anp-italic-blue {
--anp-italic-color: var(--ctp-blue);
}`,
    "anp-italic-lavender": `.anp-italic-lavender {
--anp-italic-color: var(--ctp-lavender);
}`,
    "anp-highlight-rosewater": `.anp-highlight-rosewater {
--anp-highlight-color: var(--ctp-rosewater);
}`,
    "anp-highlight-flamingo": `.anp-highlight-flamingo {
--anp-highlight-color: var(--ctp-flamingo);
}`,
    "anp-highlight-pink": `.anp-highlight-pink {
--anp-highlight-color: var(--ctp-pink);
}`,
    "anp-highlight-mauve": `.anp-highlight-mauve {
--anp-highlight-color: var(--ctp-mauve);
}`,
    "anp-highlight-red": `.anp-highlight-red {
--anp-highlight-color: var(--ctp-red);
}`,
    "anp-highlight-maroon": `.anp-highlight-maroon {
--anp-highlight-color: var(--ctp-maroon);
}`,
    "anp-highlight-peach": `.anp-highlight-peach {
--anp-highlight-color: var(--ctp-peach);
}`,
    "anp-highlight-yellow": `.anp-highlight-yellow {
--anp-highlight-color: var(--ctp-yellow);
}`,
    "anp-highlight-green": `.anp-highlight-green {
--anp-highlight-color: var(--ctp-green);
}`,
    "anp-highlight-teal": `.anp-highlight-teal {
--anp-highlight-color: var(--ctp-teal);
}`,
    "anp-highlight-sky": `.anp-highlight-sky {
--anp-highlight-color: var(--ctp-sky);
}`,
    "anp-highlight-sapphire": `.anp-highlight-sapphire {
--anp-highlight-color: var(--ctp-sapphire);
}`,
    "anp-highlight-blue": `.anp-highlight-blue {
--anp-highlight-color: var(--ctp-blue);
}`,
    "anp-highlight-lavender": `.anp-highlight-lavender {
--anp-highlight-color: var(--ctp-lavender);
}`,
    "anp-canvas-dark-bg": `.anp-canvas-dark-bg .canvas-wrapper {
background-color: var(--background-secondary);
}

.anp-canvas-dark-bg .canvas-controls button, .anp-canvas-dark-bg .canvas-card-menu {
background-color: var(--background-primary);
}

.anp-canvas-dark-bg .canvas-card-menu .canvas-card-menu-button svg {
fill: var(--background-primary);
}`,
    "anp-colorful-frame": `.anp-fixed-status-bar.anp-card-layout .status-bar, .anp-fixed-status-bar.anp-border-layout .status-bar {
--status-bar-background: var(--colorful-frame-color);
--status-bar-text-color: var(--colorful-icon-color);
}

.anp-fixed-status-bar.anp-card-layout .status-bar .status-bar-item.mod-clickable:hover, .anp-fixed-status-bar.anp-border-layout .status-bar .status-bar-item.mod-clickable:hover {
color: var(--colorful-icon-color);
background-color: rgba(var(--ctp-crust), 0.2);
}

.anp-card-layout .workspace-split.mod-right-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, .anp-card-layout .workspace-split.mod-left-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-split.mod-left-split .workspace-tabs.mod-top .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-split.mod-right-split .workspace-tabs.mod-top .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: rgba(var(--ctp-crust), 0.2);
}

.is-frameless.is-frameless:not(.is-hidden-frameless) .sidebar-toggle-button.mod-left {
border-radius: 0 var(--radius-m) var(--radius-m) 0;
}

.anuppuccin-accent-toggle.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-container, .anuppuccin-accent-toggle.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-ribbon.mod-left:before, .anuppuccin-accent-toggle.anp-card-layout, .anuppuccin-accent-toggle.anp-card-layout .workspace-tabs.mod-top, .anuppuccin-accent-toggle.anp-card-layout .sidebar-toggle-button, .anuppuccin-accent-toggle.anp-card-layout .workspace-ribbon.mod-left:before {
--tab-container-background: rgba(var(--anp-colorful-frame-color, var(--ctp-accent)), var(--anp-colorful-frame-opacity, 1));
--titlebar-background: rgba(var(--anp-colorful-frame-color, var(--ctp-accent)), var(--anp-colorful-frame-opacity, 1));
}

.anuppuccin-accent-toggle.anp-card-layout .prompt {
--background-modifier-hover: rgba(var(--ctp-text), 0.075) ;
}

.anuppuccin-accent-toggle.anp-colorful-frame .sidebar-toggle-button, .anp-colorful-frame .sidebar-toggle-button {
--background-modifier-hover: rgba(var(--ctp-text), 0.075);
}

.is-focused .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header-inner .workspace-tab-header-inner-title, .is-focused .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header-inner .workspace-tab-header-inner-close-button {
color: var(--text-muted);
}

.anp-colorful-frame .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header-inner .workspace-tab-header-inner-close-button {
color: var(--text-muted);
}

.is-focused .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header.is-active .workspace-tab-header-inner .workspace-tab-header-inner-title, .is-focused .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header.is-active .workspace-tab-header-inner .workspace-tab-header-inner-close-button {
color: var(--color-accent);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-container, .anp-card-layout, .anp-card-layout .workspace-tabs.mod-top, .anp-card-layout .sidebar-toggle-button, .anp-card-layout .workspace-ribbon.mod-left:before, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-ribbon.mod-left:before {
--tab-container-background: hsla(var(--anp-colorful-frame-color-hsl, var(--color-accent-hsl)), var(--anp-colorful-frame-opacity, 1));
--titlebar-background: hsla(var(--anp-colorful-frame-color-hsl, var(--color-accent-hsl)), var(--anp-colorful-frame-opacity, 1));
}

.anp-card-layout {
--divider-color-hover: var(--background-secondary-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top:not(.mod-stacked) .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top:not(.mod-stacked) .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top:not(.mod-stacked) .is-focused.workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top:not(.mod-stacked) .workspace-tab-header-container, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top:not(.mod-stacked) .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top:not(.mod-stacked) .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top:not(.mod-stacked) .is-focused.workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top:not(.mod-stacked) .workspace-tab-header-container {
--tab-text-color: var(--colorful-icon-color-alt);
--icon-color: var(--colorful-icon-color-alt);
--icon-color-hover: var(--colorful-icon-color);
--tab-text-color-focused: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top.mod-stacked .workspace-tab-header-new-tab .clickable-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top.mod-stacked .workspace-tab-header-new-tab .clickable-icon {
--icon-color: var(--colorful-icon-color-alt);
--icon-color-hover: var(--colorful-icon-color);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-tab-list .clickable-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-tab-list .clickable-icon:hover, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-new-tab .clickable-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-new-tab .clickable-icon:hover, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top .workspace-tab-header-tab-list .clickable-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top .workspace-tab-header-tab-list .clickable-icon:hover, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top .workspace-tab-header-new-tab .clickable-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-top .workspace-tab-header-new-tab .clickable-icon:hover {
color: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top {
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active {
--tab-text-color-focused-active: var(--colorful-icon-color-alt);
--tab-text-color-active: var(--colorful-icon-color-alt);
--tab-text-color-focused: var(--colorful-icon-color-alt);
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button {
--tab-text-color-focused: var(--colorful-icon-color-alt);
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-right-split .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-left-split .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-container .clickable-icon.has-active-menu, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-top .workspace-tab-header-container .clickable-icon:active {
--icon-color-focused: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-tab-header .workspace-tab-header-inner-close-button {
--tab-text-color-focused: var(--colorful-icon-color-alt);
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-tab-header.is-active .workspace-tab-header-inner-close-button {
--tab-text-color-focused: var(--text-faint);
--tab-text-color-focused-active-current: var(--text-normal);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-left-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-right-split .mod-top .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-crust), 0.2);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-left-split .mod-top .workspace-tab-header.is-active:hover, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-right-split .mod-top .workspace-tab-header.is-active:hover {
background-color: rgba(var(--ctp-crust), 0.3);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-active:not(.mod-stacked).mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-left-split .mod-top .workspace-tab-header:active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .mod-right-split .mod-top .workspace-tab-header:active .workspace-tab-header-inner-icon {
color: var(--colorful-icon-color-alt);
}

.anp-card-layout .mod-vertical .workspace-tabs {
background-color: var(--tab-container-background);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top:not(.mod-stacked) .workspace-tab-header:not(.is-active), .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top:not(.mod-stacked) .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner-close-button {
color: var(--colorful-icon-color-alt);
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-split.mod-vertical > * > .workspace-leaf-resize-handle, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-split.mod-left-split > .workspace-leaf-resize-handle, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout) .workspace-split.mod-right-split > .workspace-leaf-resize-handle {
height: calc(100% - var(--header-height));
}

.anp-colorful-frame .sidebar-toggle-button.sidebar-toggle-button {
background-color: var(--background-primary) !important;
}

.anp-colorful-frame .sidebar-toggle-button {
padding: var(--size-4-1) !important;
background-color: var(--background-primary);
--tab-container-background: var(--background-primary) !important;
height: calc(var(--header-height) - 5px);
margin-right: 0;
border-radius: 0 0 var(--radius-m) var(--radius-m);
border-width: 0 1px 1px 1px;
border-style: solid;
border-color: var(--tab-outline-color);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}

.anp-colorful-frame .sidebar-toggle-button .clickable-icon {
--icon-color: var(--text-muted) !important;
--icon-color-hover: var(--text-muted) !important;
--icon-color-active: var(--text-accent) !important;
--icon-color-focused: var(--text-normal) !important;
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle.is-focused .mod-active.mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle.is-focused .mod-active.mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--background-primary);
}

.mod-macos .sidebar-toggle-button.mod-right {
border-radius: 0 0 0 var(--radius-m);
}

.is-fullscreen:not(.is-popout-window) .sidebar-toggle-button.mod-left {
border-radius: 0 0 var(--radius-m) 0;
}

body.anp-card-layout .workspace, .anuppuccin-accent-toggle.anp-card-layout .workspace-tabs {
background-color: var(--tab-container-background);
}

.anp-card-layout, .anp-card-layout .workspace-tab-container, .anp-card-layout.anp-mini-tab-toggle .mod-vertical .workspace-tab-header.is-active, .anp-card-layout:not(.anp-card-layout-filebrowser) .workspace-leaf-content[data-type=file-explorer] {
--tab-text-color: var(--background-secondary-alt);
--tab-text-color-focused: var(--background-secondary-alt);
--tab-text-color-focused-active: var(--background-secondary-alt);
--tab-text-color-focused-highlighted: var(--background-secondary-alt);
--tab-text-color-focused-active-current: var(--background-secondary-alt);
--icon-color: var(--background-secondary-alt);
--icon-color-hover: var(--background-secondary-alt);
--icon-color-active: var(--background-secondary-alt);
--icon-color-focused: var(--background-secondary-alt);
}

.anp-card-layout:not(.anp-alternate-layout) .workspace-tab-header-status-icon {
color: var(--icon-color);
}

.anp-card-layout.is-focused:not(.anp-mini-tab-toggle) .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-card-layout.is-focused:not(.anp-mini-tab-toggle) .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--color-accent);
}

.anp-card-layout.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title, .anp-card-layout.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title {
color: var(--background-secondary-alt);
}

.anp-card-layout .mod-left-split .workspace-tab-container, .anp-card-layout .mod-right-split .workspace-tab-container {
background-color: transparent;
}

.anp-card-layout .mod-left-split {
background-color: transparent;
}

.anp-card-layout .mod-vertical .workspace-tab-container {
background-color: transparent;
}

.anp-card-layout .mod-right-split .workspace-tab-header.is-active, .anp-card-layout .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-crust), 0.2);
}

.anp-card-layout .mod-right-split .workspace-tab-header.is-active:hover, .anp-card-layout .mod-left-split .workspace-tab-header.is-active:hover {
background-color: rgba(var(--ctp-crust), 0.3);
}

.anp-card-layout:not(.anp-mini-tab-toggle) .mod-vertical .workspace-tab-header.is-active {
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-normal);
}

.anp-mini-tab-toggle.anp-colorful-frame .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tabs.mod-top .workspace-tab-header-container-inner .workspace-tab-header.is-active {
border-bottom: 2px solid var(--background-secondary-alt);
}

.anp-card-layout .workspace-drop-overlay:before {
background-color: var(--background-secondary-alt);
border-radius: var(--radius-m);
opacity: 0.5;
}

.anp-colorful-frame {
--titlebar-background: var(--anp-colorful-frame-color, var(--color-accent));
--titlebar-background-focused: var(--anp-colorful-frame-color, var(--color-accent));
--titlebar-text-color: var(--background-primary);
--titlebar-text-color-focused: var(--background-secondary-alt);
}

.is-frameless:not(.is-hidden-frameless) .sidebar-toggle-button.mod-right, .is-frameless:not(.is-hidden-frameless) .sidebar-toggle-button.mod-left {
border-radius: var(--radius-m);
}

.anp-colorful-frame:not(.is-frameless) .sidebar-toggle-button.mod-right, .anp-colorful-frame:not(.is-frameless) .sidebar-toggle-button.mod-left {
border-radius: var(--radius-m);
}

body.anp-border-layout .horizontal-main-container {
background-color: var(--colorful-frame-color);
--titlebar-background: var(--colorful-frame-color);
--ribbon-background: var(--colorful-frame-color);
--ribbon-background-collapsed: var(--colorful-frame-color);
--card-background-color: var(--colorful-frame-color);
}

body.anp-border-layout .workspace-ribbon {
--icon-color: var(--colorful-icon-color);
--icon-color-hover: var(--colorful-icon-color-alt);
--icon-color-active: var(--colorful-icon-color-alt);
--icon-color-focused: var(--colorful-icon-color);
}

body.anp-border-layout .workspace-ribbon .clickable-icon:hover {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-border-layout .workspace-ribbon .clickable-icon:active {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-border-layout .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon {
--icon-color: var(--colorful-icon-color);
--icon-color-hover: var(--colorful-icon-color-alt);
--icon-color-active: var(--colorful-icon-color-alt);
--icon-color-focused: var(--colorful-icon-color);
}

body.anp-border-layout .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon:hover {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-border-layout .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon:active {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container, body.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container {
--icon-color: var(--colorful-icon-color);
--icon-color-hover: var(--colorful-icon-color-alt);
--icon-color-active: var(--colorful-icon-color-alt);
--icon-color-focused: var(--colorful-icon-color);
}

body.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, body.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner, body.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:hover, body.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:hover {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:active, body.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:active {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner-icon, body.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .is-focused .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, body.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner-icon, body.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .is-focused .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--colorful-icon-color);
}

body.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-title, body.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-status-container, body.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-close-button, body.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-icon {
color: var(--background-primary);
}
body.anp-colorful-frame-icon-toggle-light.theme-light, body.anp-colorful-frame-icon-toggle-dark.theme-dark {
--colorful-icon-color: var(--text-normal);
--colorful-icon-color-alt: var(--text-muted);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .mod-top .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}

.anp-card-layout:not(.anp-card-layout-filebrowser).anp-colorful-frame-icon-toggle-light.theme-light .workspace-leaf-content[data-type=file-explorer], .anp-card-layout:not(.anp-card-layout-filebrowser).anp-colorful-frame-icon-toggle-dark.theme-dark .workspace-leaf-content[data-type=file-explorer] {
--tab-text-color: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-highlighted: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal);
--icon-color-hover: var(--text-normal);
--icon-color-active: var(--text-normal);
--icon-color-focused: var(--text-normal);
}

.anp-card-layout.anp-colorful-frame-icon-toggle-light.theme-light, .anp-card-layout.anp-colorful-frame-icon-toggle-dark.theme-dark, .anp-card-layout.anp-card-layout-actions .workspace-ribbon, .anp-card-layout .workspace-tab-container, .anp-card-layout .modal, .anp-card-layout .mod-vertical .workspace-tab-header.is-active, .anp-card-layout.anp-alternate-tab-toggle .mod-vertical .workspace-tab-header {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}

.anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-normal);
}

.anp-card-layout.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .workspace-tab-header.is-active, .anp-card-layout.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .workspace-tab-header.is-active, .anp-card-layout.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .workspace-tab-header.is-active, .anp-card-layout.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}
body.anp-colorful-frame-icon-toggle-light.theme-light, body.anp-colorful-frame-icon-toggle-dark.theme-dark {
--colorful-icon-color: var(--text-normal);
--colorful-icon-color-alt: var(--text-muted);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .mod-top .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}

.anp-card-layout:not(.anp-card-layout-filebrowser).anp-colorful-frame-icon-toggle-light.theme-light .workspace-leaf-content[data-type=file-explorer], .anp-card-layout:not(.anp-card-layout-filebrowser).anp-colorful-frame-icon-toggle-dark.theme-dark .workspace-leaf-content[data-type=file-explorer] {
--tab-text-color: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-highlighted: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal);
--icon-color-hover: var(--text-normal);
--icon-color-active: var(--text-normal);
--icon-color-focused: var(--text-normal);
}

.anp-card-layout.anp-colorful-frame-icon-toggle-light.theme-light, .anp-card-layout.anp-colorful-frame-icon-toggle-dark.theme-dark, .anp-card-layout.anp-card-layout-actions .workspace-ribbon, .anp-card-layout .workspace-tab-container, .anp-card-layout .modal, .anp-card-layout .mod-vertical .workspace-tab-header.is-active, .anp-card-layout.anp-alternate-tab-toggle .mod-vertical .workspace-tab-header {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}

.anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-card-layout.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-normal);
}

.anp-card-layout.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .workspace-tab-header.is-active, .anp-card-layout.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .workspace-tab-header.is-active, .anp-card-layout.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .workspace-tab-header.is-active, .anp-card-layout.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}`,
    "anp-colorful-frame-icon-toggle-light": `body.theme-light {
--colorful-icon-color: var(--text-normal);
--colorful-icon-color-alt: var(--text-muted);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).theme-light .mod-left-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).theme-light .mod-right-split .mod-top .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}

.anp-colorful-frame.anp-card-layout:not(.anp-card-layout-filebrowser).theme-light .workspace-leaf-content[data-type=file-explorer] {
--tab-text-color: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-highlighted: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal);
--icon-color-hover: var(--text-normal);
--icon-color-active: var(--text-normal);
--icon-color-focused: var(--text-normal);
}

.anp-colorful-frame.anp-card-layout.theme-light {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}

.anp-colorful-frame.anp-card-layout.is-focused.theme-light .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.anp-card-layout.is-focused.theme-light .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-normal);
}

.anp-colorful-frame.anp-card-layout.theme-light .mod-right-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-card-layout.theme-light .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}`,
    "anp-colorful-frame-icon-toggle-dark": `body.theme-dark {
--colorful-icon-color: var(--text-normal);
--colorful-icon-color-alt: var(--text-muted);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).theme-dark .mod-left-split .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).theme-dark .mod-right-split .mod-top .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}

.anp-colorful-frame.anp-card-layout:not(.anp-card-layout-filebrowser).theme-dark .workspace-leaf-content[data-type=file-explorer] {
--tab-text-color: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-highlighted: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal);
--icon-color-hover: var(--text-normal);
--icon-color-active: var(--text-normal);
--icon-color-focused: var(--text-normal);
}

.anp-colorful-frame.anp-card-layout.theme-dark {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}

.anp-colorful-frame.anp-card-layout.is-focused.theme-dark .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.anp-card-layout.is-focused.theme-dark .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-normal);
}

.anp-colorful-frame.anp-card-layout.theme-dark .mod-right-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-card-layout.theme-dark .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}`,
    "anp-custom-vault-toggle": `.anp-custom-vault-toggle .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content {
font-size: 130%;
font-weight: bold;
text-align: center;
margin-left: 30px;
}

.anp-custom-vault-toggle .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content:before {
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor;'%3E%3Cpath d='m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor;'%3E%3Cpath d='m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2'%3E%3C/path%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
mask-repeat: no-repeat;
mask-size: contain;
background-size: contain;
text-align: center;
width: 26px;
height: 26px;
margin-left: -30px;
margin-top: -4px;
color: rgb(var(--ctp-yellow));
position: absolute;
background-color: rgb(var(--ctp-yellow));
}

.anp-floating-header.anp-custom-vault-toggle .nav-folder.mod-root > .nav-folder-title {
padding-top: 10px;
}`,
    "anp-file-icons": `.anp-file-icons .nav-file .nav-file-title[data-path] {
align-items: center;
}

.anp-file-icons .nav-file .nav-file-title[data-path]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpath d='M14 2v6h6'/%3E%3C/svg%3E%0A");
-webkit-mask-repeat: no-repeat;
background-color: var(--icon-color);
content: "";
display: flex;
flex-shrink: 0;
height: var(--size-4-4);
margin-left: calc(-1 * var(--size-4-5));
opacity: var(--icon-opacity);
position: absolute;
width: var(--size-4-4);
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".md"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpath d='M14 2v6h6m-4 5H8m8 4H8m2-8H8'/%3E%3C/svg%3E%0A");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".canvas"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3h7v9H3zm11 0h7v5h-7zm0 9h7v9h-7zM3 16h7v5H3z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".excalidraw.md"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5'/%3E%3Cpath d='M14 2v6h6'/%3E%3Cpath d='M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".svg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".bmp"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".jpg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".gif"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".webp"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".jpeg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".png"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpath d='M14 2v6h6'/%3E%3Ccircle cx='10' cy='13' r='2'/%3E%3Cpath d='m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22'/%3E%3C/svg%3E%0A");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".mp3"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".wav"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".m4a"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".ogg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".flac"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".3gp"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18V5l12-2v13M9 9l12-2'/%3E%3Ccircle cx='6' cy='18' r='3'/%3E%3Ccircle cx='18' cy='16' r='3'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".webm"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M10 8l6 4-6 4V8z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".mp4"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".ogv"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".mov"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".mkv"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z'/%3E%3Cpath d='m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z'/%3E%3Cpath d='M6.6 4.99l3.38 4.2m1.88-5.81l3.38 4.2'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".loom"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v18'/%3E%3Crect width='18' height='18' x='3' y='3' rx='2'/%3E%3Cpath d='M3 9h18M3 15h18'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}`,
    "anp-floating-header": `.anp-floating-header .nav-folder.mod-root > .nav-folder-title {
background-color: var(--background-secondary);
position: sticky;
top: 0;
z-index: var(--layer-popover);
width: 100%;
border: 1px solid var(--background-modifier-border);
border-radius: var(--radius-s);
box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.05);
}

.anp-card-layout .nav-folder.mod-root > .nav-folder-title {
background-color: var(--card-foreground-color, var(--background-primary));
}

.anp-custom-vault-toggle .nav-folder.mod-root > .nav-folder-title {
padding-top: 10px;
}`,
    "anp-collapse-folders": `.anp-collapse-folders .workspace-leaf-content:not([data-type=search]) .nav-folder.mod-root .nav-folder > .nav-folder-children:is(.nav-file, .nav-folder) {
margin-left: var(--size-2-1);
}

.anp-collapse-folders .workspace-leaf-content:not([data-type=search]) .tree-item .nav-folder-title {
align-items: center;
}

.anp-collapse-folders .workspace-leaf-content:not([data-type=search]) .tree-item .collapse-icon {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 24' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M6 14l1.45-2.9A2 2 0 0 1 9.24 10H22a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2'/%3E%3C/svg%3E%0A");
-webkit-mask-repeat: no-repeat;
background-color: currentColor;
display: flex;
flex-basis: 100%;
height: 16px;
width: 17px;
}

.anp-collapse-folders .workspace-leaf-content:not([data-type=search]) .tree-item.is-collapsed .collapse-icon {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 24' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z'/%3E%3Cpath d='M2 10h20' /%3E%3C/svg%3E%0A");
}

.anp-collapse-folders .workspace-leaf-content:not([data-type=search]) .tree-item .collapse-icon svg {
display: none;
}`,
    "anp-pdf-blend-toggle-dark": `.anp-pdf-blend-toggle-dark {
--pdf-background: var(--background-secondary);
--pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 8px transparent;
--pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 8px transparent;
}

.anp-pdf-blend-toggle-dark .pdf-viewer .canvasWrapper, .anp-pdf-blend-toggle-dark .pdf-thumbnail-view .thumbnailImage {
filter: invert(1) hue-rotate(180deg);
mix-blend-mode: screen;
}

.anp-pdf-blend-toggle-dark .pdf-viewer {
background-color: var(--pdf-background);
}

.anp-pdf-blend-toggle-dark .pdf-viewer .page {
background-color: var(--background-primary);
border-color: var(--pdf-background);
}`,
    "anp-pdf-blend-toggle-light": `.anp-pdf-blend-toggle-light {
--pdf-background: var(--background-secondary);
--pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 8px transparent;
--pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 8px transparent;
}

.anp-pdf-blend-toggle-light .pdf-viewer .canvasWrapper, .anp-pdf-blend-toggle-light .pdf-thumbnail-view .thumbnailImage {
filter: invert(1) hue-rotate(180deg);
mix-blend-mode: screen;
}

.anp-pdf-blend-toggle-light .pdf-viewer {
background-color: var(--pdf-background);
}

.anp-pdf-blend-toggle-light .pdf-viewer .page {
background-color: var(--background-primary);
border-color: var(--pdf-background);
}`,
    "anp-full-rainbow-color-toggle": `.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder .nav-folder-title, .anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder .nav-file-title, .anp-full-rainbow-color-toggle .nav-files-container .collapse-icon svg.svg-icon, .anp-full-rainbow-color-toggle .tree-item-self .tree-item-icon {
color: var(--anp-full-rainbow-text-inverted, var(--background-primary));
--icon-color: var(--anp-full-rainbow-text-inverted,
          var(--background-primary));
}

.anp-rainbow-file-toggle .nav-files-container > div > .nav-folder-children > .nav-file .nav-file-title {
color: var(--anp-full-rainbow-text-inverted, var(--background-primary));
}

.anp-rainbow-file-toggle .nav-files-container > div > .nav-file {
border-radius: 5px;
margin-bottom: 2px;
}

.anp-full-rainbow-color-toggle:not(.is-grabbing) .nav-files-container > div > .nav-folder .nav-folder-title:hover, .anp-full-rainbow-color-toggle:not(.is-grabbing) .nav-files-container > div .nav-file .nav-file-title:hover {
background-color: rgba(var(--ctp-base), 0.1);
}

.anp-full-rainbow-color-toggle:not(.is-grabbing) .nav-files-container > div > .nav-folder .nav-file-title.is-active {
border-color: rgba(var(--ctp-base), 0.2);
background-color: rgba(var(--ctp-base), 0.2);
}

.anp-full-rainbow-color-toggle .nav-file {
overflow-y: hidden;
}

.anp-full-rainbow-color-toggle .nav-file-title-content.is-being-renamed, .anp-full-rainbow-color-toggle .nav-folder-title-content.is-being-renamed {
cursor: text;
border-color: var(--interactive-accent);
background-color: rgba(var(--ctp-crust), 0.2);
}

.anp-full-rainbow-color-toggle .nav-file-title-content.is-being-renamed::selection, .anp-full-rainbow-color-toggle .nav-folder-title-content.is-being-renamed::selection {
background-color: hsla(var(--color-accent-hsl), 0.2);
}

.anp-full-rainbow-color-toggle .nav-file-title-content.is-being-renamed::selection {
background-color: rgba(var(--ctp-accent), 0.2);
}

.anp-full-rainbow-color-toggle .nav-files-container .nav-folder > .nav-folder-children {
padding: 0 5px 0 5px;
}

.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder {
transition: background-color 0.4s;
background-color: rgba(var(--rainbow-folder-color), var(--anp-rainbow-folder-bg-opacity));
margin-bottom: 2px;
border-radius: 5px;
}

.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder .nav-folder-children {
border-color: rgba(var(--ctp-crust), 0.4);
}

.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-file.has-focus {
background-color: rgba(var(--ctp-text), var(--anp-rainbow-folder-bg-opacity));
border-left: none;
border-color: rgb(var(--ctp-accent));
}

.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-file > .nav-file-title, .anp-full-rainbow-color-toggle .nav-files-container > div > .nav-file.has-focus > .nav-file-title {
margin-bottom: 0;
}

.anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-file-title, .anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-file-title:focus-within, .anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-folder-title, .anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-folder-title:focus-within {
box-shadow: none;
}
.anp-rainbow-file-toggle.theme-dark .nav-files-container > .nav-folder-children > .nav-file {
background-color: rgba(var(--ctp-text), var(--anp-rainbow-folder-bg-opacity));
}
.anp-rainbow-file-toggle.theme-light .nav-files-container > div > .nav-file {
background-color: rgba(var(--ctp-overlay1), var(--anp-rainbow-folder-bg-opacity));
}`,
    "anp-simple-rainbow-color-toggle": `.anp-simple-rainbow-title-toggle .nav-files-container > div > .nav-folder .nav-folder-title, .anp-simple-rainbow-title-toggle [data-type=bookmarks] .tree-item .tree-item-inner {
transition: color 0.4s;
color: rgba(var(--rainbow-folder-color), var(--anp-simple-rainbow-opacity, 1));
--nav-item-background-hover: rgba(var(--rainbow-folder-color), 0.1);
--nav-item-background-active: rgba(var(--rainbow-folder-color), 0.1);
}

.anp-simple-rainbow-title-toggle .nav-folder.is-being-dragged-over {
background-color: rgba(var(--rainbow-folder-color), 0.1);
}

.anp-simple-rainbow-icon-toggle .nav-files-container > div > .nav-folder .nav-folder-title:after, .anp-simple-rainbow-icon-toggle [data-type=bookmarks] .tree-item .tree-item-inner:after {
transition: color 0.4s;
color: rgba(var(--rainbow-folder-color), var(--anp-simple-rainbow-opacity, 1));
content: "⬤";
font-size: 10px;
position: relative;
margin-left: 4px;
opacity: 0.5;
top: -0.5px;
}

.anp-simple-rainbow-icon-toggle [data-type=bookmarks] .tree-item .tree-item-inner {
align-items: center;
display: flex;
flex-grow: 1;
justify-content: space-between;
}

.anp-simple-rainbow-indentation-toggle .nav-files-container .nav-folder > .nav-folder-children, .anp-simple-rainbow-indentation-toggle [data-type=bookmarks] .tree-item .tree-item-children {
transition: color 0.4s;
border-color: rgba(var(--rainbow-folder-color), 0.5);
}

.anp-simple-rainbow-collapse-icon-toggle .tree-item-self .tree-item-icon {
--icon-color: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
--nav-collapse-icon-color: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
--nav-collapse-icon-color-collapsed: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
}

.anp-simple-rainbow-icon-folder-toggle .obsidian-icon-folder-icon {
color: rgb(var(--rainbow-folder-color));
}`,
    "anp-rainbow-file-toggle": `.anp-full-rainbow-color-toggle.anp-rainbow-file-toggle .nav-files-container > div > .nav-folder-children > .nav-file .nav-file-title {
color: var(--anp-full-rainbow-text-inverted, var(--background-primary));
}

.anp-full-rainbow-color-toggle.anp-rainbow-file-toggle .nav-files-container > div > .nav-file {
border-radius: 5px;
margin-bottom: 2px;
}
.anp-full-rainbow-color-toggle.theme-dark .nav-files-container > .nav-folder-children > .nav-file {
background-color: rgba(var(--ctp-text), var(--anp-rainbow-folder-bg-opacity));
}
.anp-full-rainbow-color-toggle.theme-light .nav-files-container > div > .nav-file {
background-color: rgba(var(--ctp-overlay1), var(--anp-rainbow-folder-bg-opacity));
}`,
    "anp-full-rainbow-text-color-toggle-light": `.theme-light {
--anp-full-rainbow-text-inverted: rgb(var(--ctp-text));
}`,
    "anp-full-rainbow-text-color-toggle-dark": `.theme-dark {
--anp-full-rainbow-text-inverted: rgb(var(--ctp-text));
}`,
    "anp-simple-rainbow-title-toggle": `.anp-simple-rainbow-color-toggle.anp-simple-rainbow-title-toggle .nav-files-container > div > .nav-folder .nav-folder-title, .anp-simple-rainbow-color-toggle.anp-simple-rainbow-title-toggle [data-type=bookmarks] .tree-item .tree-item-inner {
transition: color 0.4s;
color: rgba(var(--rainbow-folder-color), var(--anp-simple-rainbow-opacity, 1));
--nav-item-background-hover: rgba(var(--rainbow-folder-color), 0.1);
--nav-item-background-active: rgba(var(--rainbow-folder-color), 0.1);
}

.anp-simple-rainbow-color-toggle.anp-simple-rainbow-title-toggle .nav-folder.is-being-dragged-over {
background-color: rgba(var(--rainbow-folder-color), 0.1);
}`,
    "anp-simple-rainbow-collapse-icon-toggle": `.anp-simple-rainbow-color-toggle.anp-simple-rainbow-collapse-icon-toggle .tree-item-self .tree-item-icon {
--icon-color: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
--nav-collapse-icon-color: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
--nav-collapse-icon-color-collapsed: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
}`,
    "anp-simple-rainbow-indentation-toggle": `.anp-simple-rainbow-color-toggle.anp-simple-rainbow-indentation-toggle .nav-files-container .nav-folder > .nav-folder-children, .anp-simple-rainbow-color-toggle.anp-simple-rainbow-indentation-toggle [data-type=bookmarks] .tree-item .tree-item-children {
transition: color 0.4s;
border-color: rgba(var(--rainbow-folder-color), 0.5);
}`,
    "anp-simple-rainbow-icon-toggle": `.anp-simple-rainbow-color-toggle.anp-simple-rainbow-icon-toggle .nav-files-container > div > .nav-folder .nav-folder-title:after, .anp-simple-rainbow-color-toggle.anp-simple-rainbow-icon-toggle [data-type=bookmarks] .tree-item .tree-item-inner:after {
transition: color 0.4s;
color: rgba(var(--rainbow-folder-color), var(--anp-simple-rainbow-opacity, 1));
content: "⬤";
font-size: 10px;
position: relative;
margin-left: 4px;
opacity: 0.5;
top: -0.5px;
}

.anp-simple-rainbow-color-toggle.anp-simple-rainbow-icon-toggle [data-type=bookmarks] .tree-item .tree-item-inner {
align-items: center;
display: flex;
flex-grow: 1;
justify-content: space-between;
}`,
    "anp-rainbow-subfolder-color-toggle": `.anp-rainbow-subfolder-color-toggle .nav-files-container .nav-folder.nav-folder .nav-folder, .anp-rainbow-subfolder-color-toggle [data-type=bookmarks] .tree-item .tree-item {
--rainbow-folder-color: inherit;
}`,
    "anp-floating-status-bar": `.anp-floating-status-bar {
--status-bar-position: absolute;
--status-bar-radius: var(--radius-m);
--status-bar-border-width: 1px;
}

.anp-floating-status-bar .status-bar {
transform: translateX(calc(100% + 5px));
transition: transform 300ms 150ms;
bottom: 5px;
right: 5px;
box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.05);
}

.anp-floating-status-bar .status-bar::before {
width: 100%;
min-height: 100%;
content: " ";
position: absolute;
left: 0;
bottom: 0;
transform: translateX(-100%);
}

.anp-floating-status-bar .status-bar:hover {
transform: none;
transition: transform 300ms 150ms;
}`,
    "anp-fixed-status-bar": `body.anp-card-layout.anp-card-layout-actions.anp-fixed-status-bar .side-dock-settings {
border-width: 1px;
border-radius: 0px var(--anp-card-radius, var(--radius-xl)) var(--anp-card-radius, var(--radius-xl)) 0px;
}

body.anp-border-layout.anp-fixed-status-bar {
--anp-border-bottom-padding: calc(var(--anp-border-padding, 20px) - 18px);
}

.anp-fixed-status-bar .status-bar {
--status-bar-position: relative;
--status-bar-radius: 0;
}

.anp-card-layout .status-bar, .anp-border-layout .status-bar {
--status-bar-border-width: 0;
--status-bar-background: transparent;
--status-bar-border-color: transparent;
--status-bar-background: var(--card-background-color);
}

.anp-colorful-frame.anp-card-layout .status-bar, .anp-colorful-frame.anp-border-layout .status-bar {
--status-bar-background: var(--colorful-frame-color);
--status-bar-text-color: var(--colorful-icon-color);
}

.anp-colorful-frame.anp-card-layout .status-bar .status-bar-item.mod-clickable:hover, .anp-colorful-frame.anp-border-layout .status-bar .status-bar-item.mod-clickable:hover {
color: var(--colorful-icon-color);
background-color: rgba(var(--ctp-crust), 0.2);
}`,
    "anp-default-tab": `.anp-default-tab {
--header-height: var(--anp-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--anp-stacked-header-width, 40px);
}`,
    "anp-depth-tab-toggle": `.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header {
--tab-text-color-focused-active-current: rgb(var(--anp-depth-tab-text, var(--ctp-text)));
--tab-text-color-focused: rgb(var(--anp-depth-tab-text, var(--ctp-text)));
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header:not(.is-active) {
--tab-text-color: rgb(var(--anp-depth-tab-text));
--icon-color: rgb(var(--anp-depth-tab-text));
--icon-color-hover: rgb(var(--anp-depth-tab-text));
background-color: rgba(var(--ctp-mantle), var(--anp-depth-tab-opacity, 0.6));
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header:not(.is-active)::before, .anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header:not(.is-active)::after {
box-shadow: inset 0 0 0 var(--tab-outline-width) transparent, 0 0 0 calc(var(--tab-curve) * 4) rgba(var(--ctp-mantle), var(--anp-depth-tab-opacity, 0.6));
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header:not(.is-active)::after {
clip-path: inset(50% 50% 0 calc(var(--tab-curve) * 0));
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header:not(.is-active)::before {
clip-path: inset(50% calc(var(--tab-curve) * 0) 0 50%);
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header-inner::after {
display: none;
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header-container-inner {
gap: var(--anp-depth-tab-gap, 10px);
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: transparent;
}

.anp-depth-tab-toggle .workspace .mod-root .workspace-tab-header-inner-close-button:hover {
background-color: var(--background-modifier-hover);
}

.anp-depth-tab-text-invert {
--anp-depth-tab-text: var(--ctp-crust);
}`,
    "anp-mini-tab-toggle": `.anp-mini-tab-toggle {
--header-height: var(--anp-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--anp-stacked-header-width, 40px);
}

.anp-mini-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header {
background-color: transparent;
box-shadow: none;
}

.anp-mini-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header::before, .anp-mini-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header::after {
display: none;
}

.anp-mini-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header.is-active {
border-bottom: 2px solid var(--color-accent);
margin-bottom: 0px;
padding-bottom: 0px;
}

.anp-mini-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header.is-active .workspace-tab-header-inner {
border-radius: var(--tab-radius) var(--tab-radius) 0px 0px;
margin-top: 0.5px;
padding-bottom: 4px;
}

.anp-mini-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header ::after {
display: none;
}

.anp-mini-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header:hover .workspace-tab-header-inner {
background-color: var(--background-modifier-hover);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top {
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active {
--tab-text-color-focused-active: var(--colorful-icon-color-alt);
--tab-text-color-active: var(--colorful-icon-color-alt);
--tab-text-color-focused: var(--colorful-icon-color-alt);
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header .workspace-tab-header-inner-close-button, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.is-focused.anp-mini-tab-toggle .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-close-button {
--tab-text-color-focused: var(--colorful-icon-color-alt);
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused.anp-mini-tab-toggle .mod-top:not(.mod-stacked) .workspace-tab-header:not(.is-active), .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).anp-mini-tab-toggle .mod-top:not(.mod-stacked) .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner-close-button {
color: var(--colorful-icon-color-alt);
--tab-text-color-focused-active-current: var(--colorful-icon-color-alt);
}

.anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-active.mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame:not(.anp-card-layout, .anp-border-layout).is-focused .mod-active.mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--background-primary);
}

.anp-colorful-frame.anp-card-layout.anp-mini-tab-toggle .mod-vertical .workspace-tab-header.is-active {
--tab-text-color: var(--background-secondary-alt);
--tab-text-color-focused: var(--background-secondary-alt);
--tab-text-color-focused-active: var(--background-secondary-alt);
--tab-text-color-focused-highlighted: var(--background-secondary-alt);
--tab-text-color-focused-active-current: var(--background-secondary-alt);
--icon-color: var(--background-secondary-alt);
--icon-color-hover: var(--background-secondary-alt);
--icon-color-active: var(--background-secondary-alt);
--icon-color-focused: var(--background-secondary-alt);
}

.anp-colorful-frame.anp-card-layout.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title, .anp-colorful-frame.anp-card-layout.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title {
color: var(--background-secondary-alt);
}

.anp-colorful-frame .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tabs.mod-top .workspace-tab-header-container-inner .workspace-tab-header.is-active {
border-bottom: 2px solid var(--background-secondary-alt);
}

body.anp-colorful-frame.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-title, body.anp-colorful-frame.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-status-container, body.anp-colorful-frame.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-close-button, body.anp-colorful-frame.anp-border-layout.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-icon {
color: var(--background-primary);
}`,
    "anp-alternate-tab-toggle": `.anp-alternate-tab-toggle {
--header-height: var(--anp-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--anp-stacked-header-width, 40px);
}

.anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) {
--tab-background: var(--background-secondary);
--tab-background-active: var(--background-primary);
--tab-font-size: 12px;
--tab-height: calc(var(--header-height)*0.7);
--tab-max-width: 200px;
--tab-max-width-active: 300px ;
}

.anp-alternate-tab-toggle .workspace-ribbon.mod-left {
margin-top: var(--header-height);
}

.anp-alternate-tab-toggle .workspace-ribbon.mod-left:before {
padding-bottom: 0px;
}

.anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header::before, .anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header::after, .anp-alternate-tab-toggle .workspace .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner::after {
display: none;
}

.anp-alternate-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .anp-alternate-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
align-items: center;
justify-content: var(--anp-safari-tab-align, center);
margin: 0;
width: 100%;
gap: var(--anp-safari-tab-gap, 10px);
}

.anp-disable-newtab-align.anp-alternate-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .anp-disable-newtab-align.anp-alternate-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
width: unset;
gap: var(--anp-safari-tab-gap, 10px);
}

.anp-alternate-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header, .anp-alternate-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
background: var(--tab-background);
border-radius: var(--anp-safari-tab-radius, 6px);
box-shadow: none !important;
height: var(--tab-height);
padding: 0 !important;
transition: 400ms, background-color 150ms ease-in-out;
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
max-width: var(--tab-max-width);
border: var(--anp-safari-border-width, 1px) solid var(--tab-outline-color);
}

.anp-alt-tab-anim-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
transition: 400ms, background-color 150ms ease-in-out;
}

.anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header:first-child {
margin-left: 0;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner {
padding: 7px 8px;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner {
padding: 0 4px 0 8px;
transition: 400ms, background-color 150ms ease-in-out, max-width 400ms;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner, .anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-close-button, .anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-icon {
color: var(--text-muted);
}

.anp-alternate-tab-toggle .workspace .mod-root .workspace-tab-header-inner::after {
display: none;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active {
flex-grow: 1.67;
max-width: var(--tab-max-width-active);
background-color: var(--background-primary);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--color-accent);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-title, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-faint);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner:hover {
background-color: rgba(var(--ctp-surface1), 0.4);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--color-accent) !important;
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active:hover {
background-color: var(--background-modifier-border);
}

.anp-alternate-tab-toggle .sidebar-toggle-button.mod-left, .anp-alternate-tab-toggle .sidebar-toggle-button.mod-right {
align-items: center;
}

.anp-alternate-tab-toggle .sidebar-toggle-button.mod-left .clickable-icon, .anp-alternate-tab-toggle .sidebar-toggle-button.mod-right .clickable-icon {
height: var(--tab-height);
}

.anp-colorful-frame.anp-card-layout.anp-alternate-tab-toggle .mod-vertical .workspace-tab-header {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}`,
    "anp-safari-tab-toggle": `.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root {
/*-----VARIABLES---------*/
--tab-background-inactive: var(--background-secondary-alt);
--tab-background-active: var(--background-primary);
--tab-background-inactive-hover: var(--background-primary-secondary);
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-accent);
--tab-divider-color: var(--background-modifier-border-hover);
--tab-width: 200px;
--tab-max-width: 320px;
/*-------CONFIGS---------*/
}

.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner {
margin: 5px 0 !important;
gap: var(--anp-safari-tab-gap, 10px);
}

.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header {
border-radius: var(--anp-safari-tab-radius, 5px);
border: var(--anp-safari-border-width, 1px) solid var(--tab-outline-color);
background-color: var(--tab-background-inactive);
color: var(--text-muted);
max-width: var(--tab-max-width);
}

.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header:not(.is-active) {
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
}

.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header .workspace-tab-header-inner .workspace-tab-header-inner-title {
margin-top: 3px;
}

.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header::before, .anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header::after {
display: none;
}

.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active {
background-color: var(--tab-background-active);
max-width: var(--tab-max-width);
box-shadow: none;
}

.anp-safari-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: transparent;
}

.anp-safari-tab-toggle:not(.anp-disable-newtab-align) .workspace-tab-header-container-inner {
width: 100%;
}

.anp-safari-tab-animated .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header {
transition: max-width 400ms ease-in-out, width 400ms ease-in-out, flex-grow 400ms ease, background-color 150ms;
}

.anp-safari-tab-animated .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active {
flex-grow: 1.67;
max-width: var(--tab-max-width-active);
}

.anp-safari-tab-toggle {
--header-height: var(--anp-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--anp-stacked-header-width, 40px);
}

.anp-safari-tab-toggle .workspace-tabs:not(.mod-stacked) {
--tab-background: var(--background-secondary);
--tab-background-active: var(--background-primary);
--tab-font-size: 12px;
--tab-height: calc(var(--header-height)*0.7);
--tab-max-width: 200px;
--tab-max-width-active: 300px ;
}`,
    "anp-disable-newtab-align": `.anp-alternate-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .anp-alternate-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
width: unset;
gap: var(--anp-safari-tab-gap, 10px);
}`,
    "anp-depth-tab-text-invert": `.anp-depth-tab-toggle.anp-depth-tab-text-invert {
--anp-depth-tab-text: var(--ctp-crust);
}`,
    "anp-safari-tab-animated": `.anp-safari-tab-toggle.anp-safari-tab-animated .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header {
transition: max-width 400ms ease-in-out, width 400ms ease-in-out, flex-grow 400ms ease, background-color 150ms;
}

.anp-safari-tab-toggle.anp-safari-tab-animated .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active {
flex-grow: 1.67;
max-width: var(--tab-max-width-active);
}`,
    "anp-border-layout": `.anp-border-layout .workspace-split:not(.mod-root) .graph-controls.is-close, .anp-border-layout .workspace-split:not(.mod-root) .graph-controls, .anp-border-layout .workspace-split:not(.mod-root) .graph-controls:not(.is-close) {
background-color: rgb(var(--ctp-mantle));
}

.anp-border-layout .mod-vertical .workspace-tabs {
background-color: var(--tab-container-background);
}

.is-translucent.anp-border-layout {
--card-background-color: transparent;
}

body.anp-border-layout {
--card-background-color: rgb(var(--ctp-crust));
--card-foreground-color: var(--background-primary);
--border-border-style: 1px solid var(--tab-outline-color);
--anp-border-bottom-padding: var(--anp-border-padding, 20px);
}

body.anp-border-layout .horizontal-main-container {
background-color: var(--card-background-color);
--titlebar-background: var(--card-background-color);
--ribbon-background: var(--card-background-color);
--ribbon-background-collapsed: var(--card-background-color);
}

body.anp-fixed-status-bar {
--anp-border-bottom-padding: calc(var(--anp-border-padding, 20px) - 18px);
}

body.anp-border-layout .workspace .workspace-tab-container {
border-bottom: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-tabs:nth-child(2).workspace-tabs.mod-top-left-space > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2).mod-top-left-space > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2).mod-top-left-space > .workspace-tab-container {
border-bottom-left-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root .workspace-tabs.mod-top-left-space .workspace-tab-container {
border-top-left-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs:last-child .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs:last-child .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs:last-child .workspace-tab-container {
border-bottom-left-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical:last-child > .workspace-tabs:nth-child(2) .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical:last-child > .workspace-tabs:nth-child(2) .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical:last-child > .workspace-tabs:nth-child(2) .workspace-tab-container {
border-bottom-left-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root .workspace-tabs.mod-top-left-space > .workspace-tab-container {
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs > .workspace-tab-container {
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs:not(.mod-top-left-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs:not(.mod-top-left-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-tabs:not(.mod-top-left-space) > .workspace-tab-header-container {
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2) > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2) > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2) > .workspace-tab-container {
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2):not(.mod-top-left-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2):not(.mod-top-left-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-left-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:nth-child(2) > .workspace-split.mod-vertical > .workspace-tabs:nth-child(2):not(.mod-top-left-space) > .workspace-tab-header-container {
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-tabs:last-child.mod-top-right-space > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-tabs:last-child.mod-top-right-space > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-tabs:last-child.mod-top-right-space > .workspace-tab-container {
border-bottom-right-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root .workspace-tabs.mod-top-right-space .workspace-tab-container {
border-top-right-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:last-child > .workspace-tabs:last-child .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-tabs:last-child .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-tabs:last-child .workspace-tab-container {
border-bottom-right-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical:last-child > .workspace-tabs:last-child .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical:last-child > .workspace-tabs:last-child .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical:last-child > .workspace-tabs:last-child .workspace-tab-container {
border-bottom-right-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root .workspace-tabs.mod-top-right-space > .workspace-tab-container {
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:last-child > .workspace-tabs > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-tabs > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-tabs > .workspace-tab-container {
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:last-child > .workspace-tabs:not(.mod-top-right-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-tabs:not(.mod-top-right-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-tabs:not(.mod-top-right-space) > .workspace-tab-header-container {
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical > .workspace-tabs:last-child > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical > .workspace-tabs:last-child > .workspace-tab-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical > .workspace-tabs:last-child > .workspace-tab-container {
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical > .workspace-tabs:last-child:not(.mod-top-right-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical > .workspace-tabs:last-child:not(.mod-top-right-space) > .workspace-tab-header-container, body.anp-border-layout .workspace:not(.is-right-sidedock-open) > .workspace-split.mod-vertical.mod-root > .workspace-split.mod-vertical > .workspace-split.mod-vertical > .workspace-split.mod-horizontal:last-child > .workspace-split.mod-vertical > .workspace-tabs:last-child:not(.mod-top-right-space) > .workspace-tab-header-container {
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split {
background-color: var(--card-background-color);
padding-left: calc(var(--anp-border-padding, 20px) - 20px);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split .workspace-tabs {
background-color: var(--card-background-color);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split .workspace-tabs .workspace-tab-container {
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split .workspace-tabs .workspace-tab-container .workspace-leaf {
background-color: var(--card-foreground-color);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split .workspace-tabs:last-child .workspace-tab-container {
border-bottom: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split .workspace-tabs.mod-top-left-space .workspace-tab-container {
border-top: var(--border-border-style);
border-left: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
border-top: none;
background-color: var(--card-foreground-color);
border-left: var(--border-border-style);
border-bottom: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-right-split {
background-color: var(--card-background-color);
}

body.anp-border-layout .workspace .workspace-split.mod-right-split .workspace-tabs {
background-color: var(--card-background-color);
}

body.anp-border-layout .workspace .workspace-split.mod-right-split .workspace-tabs .workspace-tab-container {
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-right-split .workspace-tabs .workspace-tab-container .workspace-leaf {
background-color: var(--card-foreground-color);
}

body.anp-border-layout .workspace .workspace-split.mod-right-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-right-split .workspace-tabs:last-child .workspace-tab-container {
border-bottom: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split.mod-right-split .workspace-tabs.mod-top-right-space .workspace-tab-container {
border-top: var(--border-border-style);
border-right: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split:not(.mod-right-split):not(.mod-left-split) {
background-color: var(--card-background-color);
}

body.anp-border-layout .workspace .workspace-split:not(.mod-right-split):not(.mod-left-split) > .workspace-split {
padding-bottom: 0;
}

body.anp-border-layout .workspace .workspace-split:not(.mod-right-split):not(.mod-left-split) .workspace-tabs {
background-color: var(--card-background-color);
}

body.anp-border-layout .workspace .workspace-split:not(.mod-right-split):not(.mod-left-split) .workspace-tabs:last-child .workspace-tab-container {
border-bottom: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-split:not(.mod-right-split):not(.mod-left-split) .workspace-tabs.mod-top .workspace-tab-container {
border-top: var(--border-border-style);
}

body.anp-border-layout .workspace .workspace-tabs:not(.mod-top) .workspace-tab-header-container {
background-color: var(--card-foreground-color);
}

body.anp-border-layout .workspace .workspace-tabs.mod-top .workspace-tab-header-container {
border-bottom: none;
}

body.anp-border-layout .workspace-split.mod-left-split > .workspace-leaf-resize-handle, body.anp-border-layout .workspace-split.mod-right-split > .workspace-leaf-resize-handle {
height: calc(100% + -1 * var(--header-height) + -1 * var(--anp-border-bottom-padding, 20px));
bottom: var(--anp-border-bottom-padding, 20px);
}

body.anp-border-layout .workspace-split {
--divider-vertical-height: calc(100% + -1*var(--header-height));
}

body.anp-border-layout .workspace-ribbon.mod-left:before {
border-bottom: 1px solid var(--card-background-color);
}

body.anp-border-layout .workspace-ribbon.mod-left, body.anp-border-layout .workspace-ribbon.mod-left.is-focused {
border-right-color: var(--card-background-color);
}

body.is-popout-window .workspace {
margin-left: var(--anp-border-padding, 20px);
}

body.anp-border-layout:not(.is-mobile) .workspace {
margin-right: var(--anp-border-padding, 20px);
}

body.anp-border-layout:not(.is-mobile) .workspace .workspace-split.mod-left-split {
padding-bottom: var(--anp-border-bottom-padding, 20px);
}

body.anp-border-layout:not(.is-mobile) .workspace .workspace-split.mod-left-split .workspace-tabs.mod-top-left-space .workspace-tab-container {
border-top-left-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout:not(.is-mobile) .workspace .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
border-bottom-left-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout:not(.is-mobile) .workspace .workspace-split.mod-right-split {
padding-bottom: var(--anp-border-bottom-padding, 20px);
}

body.anp-border-layout:not(.is-mobile) .workspace .workspace-split.mod-right-split .workspace-tabs:last-child .workspace-tab-container {
border-bottom-right-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout:not(.is-mobile) .workspace .workspace-split.mod-right-split .workspace-tabs.mod-top-right-space .workspace-tab-container {
border-top-right-radius: var(--anp-border-radius, var(--radius-xl));
}

body.anp-border-layout:not(.is-mobile) .workspace .workspace-split.mod-root:not(.mod-right-split):not(.mod-left-split) {
padding-bottom: var(--anp-border-bottom-padding, 20px);
}

.anp-fixed-status-bar.anp-border-layout .status-bar {
--status-bar-border-width: 0;
--status-bar-background: transparent;
--status-bar-border-color: transparent;
--status-bar-background: var(--card-background-color);
}

.anp-colorful-frame.anp-fixed-status-bar.anp-border-layout .status-bar {
--status-bar-background: var(--colorful-frame-color);
--status-bar-text-color: var(--colorful-icon-color);
}

.anp-colorful-frame.anp-fixed-status-bar.anp-border-layout .status-bar .status-bar-item.mod-clickable:hover {
color: var(--colorful-icon-color);
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-colorful-frame.anp-border-layout .horizontal-main-container {
background-color: var(--colorful-frame-color);
--titlebar-background: var(--colorful-frame-color);
--ribbon-background: var(--colorful-frame-color);
--ribbon-background-collapsed: var(--colorful-frame-color);
--card-background-color: var(--colorful-frame-color);
}

body.anp-colorful-frame.anp-border-layout .workspace-ribbon {
--icon-color: var(--colorful-icon-color);
--icon-color-hover: var(--colorful-icon-color-alt);
--icon-color-active: var(--colorful-icon-color-alt);
--icon-color-focused: var(--colorful-icon-color);
}

body.anp-colorful-frame.anp-border-layout .workspace-ribbon .clickable-icon:hover {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-colorful-frame.anp-border-layout .workspace-ribbon .clickable-icon:active {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-colorful-frame.anp-border-layout .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon {
--icon-color: var(--colorful-icon-color);
--icon-color-hover: var(--colorful-icon-color-alt);
--icon-color-active: var(--colorful-icon-color-alt);
--icon-color-focused: var(--colorful-icon-color);
}

body.anp-colorful-frame.anp-border-layout .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon:hover {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-colorful-frame.anp-border-layout .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon:active {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-colorful-frame.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container {
--icon-color: var(--colorful-icon-color);
--icon-color-hover: var(--colorful-icon-color-alt);
--icon-color-active: var(--colorful-icon-color-alt);
--icon-color-focused: var(--colorful-icon-color);
}

body.anp-colorful-frame.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-colorful-frame.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-colorful-frame.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:hover, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:hover {
background-color: rgba(var(--ctp-crust), 0.2);
}

body.anp-colorful-frame.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:active, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .clickable-icon:active {
background-color: rgba(var(--ctp-crust), 0.3);
}

body.anp-colorful-frame.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner-icon, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-right-split .workspace-tabs.mod-top > .workspace-tab-header-container .is-focused .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner-icon, body.anp-colorful-frame.anp-border-layout .workspace-split.mod-left-split .workspace-tabs.mod-top > .workspace-tab-header-container .is-focused .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--colorful-icon-color);
}

body.anp-colorful-frame.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-title, body.anp-colorful-frame.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-status-container, body.anp-colorful-frame.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-close-button, body.anp-colorful-frame.anp-mini-tab-toggle .workspace-tabs.mod-top .workspace-tab-header-inner-icon {
color: var(--background-primary);
}`,
    "anp-card-layout": `.anp-card-layout .workspace-split:not(.mod-root) .graph-controls.is-close, .anp-card-layout .workspace-split:not(.mod-root) .graph-controls, .anp-card-layout .workspace-split:not(.mod-root) .graph-controls:not(.is-close) {
background-color: rgb(var(--ctp-mantle));
}

.anp-card-layout .mod-vertical .workspace-tabs {
background-color: var(--tab-container-background);
}

.anp-card-layout .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container .workspace-leaf {
background-color: var(--background-primary);
}

.is-translucent.anp-card-layout {
--card-background-color: transparent;
}

body.anp-card-layout {
--card-background-color: rgb(var(--ctp-crust));
--card-foreground-color: var(--background-primary);
--divider-color: transparent;
--tab-outline-color: var(--background-modifier-border);
--divider-color-hover: var(--backgrouund-modifier-border);
--divider-width: 4px;
--divider-width-hover: 4px;
--tab-container-background: var(--card-background-color);
--file-header-border: var(--border-width) dashed var(--background-modifier-border);
--ribbon-padding: 0;
}

body.anp-hide-borders {
--tab-outline-color: transparent;
}

body.anp-hide-borders .menu {
border: 0px !important;
}

body.anp-card-layout .sidebar-toggle-button, body.anp-card-layout .workspace-tabs.mod-top {
--tab-container-background: var(--card-background-color);
}

body.anp-card-layout .workspace-tabs.mod-top:has(.obsidian-banner-wrapper) {
--file-header-border: none;
}

body.is-focused, body.is-focused .sidebar-toggle-button, body.is-focused .workspace-tabs.mod-top {
--tab-container-background: var(--card-background-color);
}

body.anp-card-layout .mod-left-split .workspace-tabs .workspace-leaf, body.anp-card-layout .mod-right-split .workspace-tabs .workspace-leaf, body.anp-card-layout .mod-left-split, body.anp-card-layout .mod-vertical .workspace-tab-container, body.anp-card-layout .mod-vertical, body.anp-card-layout .workspace-split.mod-vertical, body.anp-card-layout .workspace-fake-target-overlay:not(.is-in-sidebar) .workspace-tabs .workspace-leaf, body.anp-card-layout .mod-root .workspace-tabs .workspace-leaf, body.anp-card-layout .workspace-ribbon.mod-left, body.anp-card-layout .workspace-ribbon.mod-left:before {
background-color: var(--tab-container-background);
}

body.anp-card-layout-actions .workspace-ribbon.mod-left {
margin-right: var(--anp-card-layout-padding, 10px);
}

body.anp-card-layout-actions .side-dock-actions {
border-radius: 0px var(--anp-card-radius, var(--radius-xl)) var(--anp-card-radius, var(--radius-xl)) 0px;
margin-top: 2px;
border-width: 1px 1px 0px 1px;
}

body.anp-card-layout-actions .side-dock-actions {
border-style: solid;
border-color: var(--tab-outline-color);
background-color: var(--card-foreground-color);
}

body.anp-card-layout-actions.anp-fixed-status-bar .side-dock-settings {
border-width: 1px;
border-radius: 0px var(--anp-card-radius, var(--radius-xl)) var(--anp-card-radius, var(--radius-xl)) 0px;
}

body.anp-card-layout .side-dock-actions {
padding: var(--size-4-2) var(--size-4-1) var(--size-4-3);
}

body.anp-card-layout .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
border: none;
margin: var(--anp-card-layout-padding, 10px);
margin-bottom: 0;
background-color: transparent;
}

body.anp-card-layout .workspace-ribbon.mod-left {
margin-top: calc(var(--header-height) - 1px);
}

body.anp-card-layout .workspace-tab-header-container, body.anp-card-layout .workspace-ribbon.mod-left:before {
border-bottom: none;
}

body.anp-card-layout .mod-vertical .workspace-tabs .workspace-tab-header-container {
padding-left: var(--anp-card-header-left-padding, 20px);
}

body.anp-card-layout .mod-vertical .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner {
margin: 6px -5px calc(var(--tab-outline-width) * -1);
z-index: 1;
}

body.anp-card-layout .mod-left-split .workspace-tab-container, body.anp-card-layout .mod-right-split .workspace-tab-container {
padding-left: var(--anp-card-layout-padding, 10px);
padding-right: var(--anp-card-layout-padding, 10px);
background-color: var(--tab-container-background);
}

body.anp-card-layout .workspace-split .workspace-leaf-content:not([data-type=file-explorer]), body.anp-card-layout-filebrowser .workspace-leaf-content[data-type=file-explorer] {
background-color: var(--card-foreground-color);
border: 1px solid var(--tab-outline-color);
}

body.anp-card-shadows .workspace-split .workspace-leaf-content, body.anp-card-shadows.anp-card-layout-actions .side-dock-actions, body.anp-card-shadows.anp-card-layout-filebrowser .workspace-split .workspace-leaf-content[data-type=file-explorer] {
box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.05);
}

body.anp-card-layout .workspace-split .mod-stacked .workspace-leaf-content {
border-radius: 0;
border: none;
margin-bottom: 0px;
border-left: none;
}

body.anp-card-layout .workspace-split.mod-horizontal > * {
width: unset;
}

body.anp-card-layout .workspace .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header {
border-style: solid;
border-radius: var(--anp-card-radius, var(--radius-xl)) 0px 0px var(--anp-card-radius, var(--radius-xl));
border-width: var(--tab-outline-width);
border-color: var(--tab-outline-color);
border-right: var(--tab-outline-width) dashed var(--tab-outline-color);
}

body.anp-card-layout .workspace .workspace-tabs.mod-stacked .workspace-leaf {
border-left-width: 0px;
border-top-width: var(--tab-outline-width);
border-bottom-width: var(--tab-outline-width);
border-style: solid;
border-color: var(--tab-outline-color);
border-radius: 0 var(--anp-card-radius, var(--radius-xl)) var(--anp-card-radius, var(--radius-xl)) 0;
}

body.anp-card-layout .workspace .workspace-tabs.mod-stacked .workspace-tab-container {
padding-bottom: var(--anp-card-layout-padding, 10px);
}

body.anp-card-layout .workspace-drop-overlay:before {
width: calc(100% - 6px - var(--anp-card-layout-padding, 0) * 2);
height: calc(100% - 6px - var(--anp-card-layout-padding, 0) * 2);
margin: auto;
}

body.anp-card-layout:not(.is-phone) .mod-vertical .workspace-tabs {
padding-left: var(--anp-card-layout-padding, 10px);
padding-right: var(--anp-card-layout-padding, 10px);
}

body.anp-card-layout:not(.is-phone) .workspace-split .workspace-leaf-content:not([data-type=file-explorer]), body.anp-card-layout:not(.is-phone).anp-card-layout-filebrowser .workspace-leaf-content[data-type=file-explorer] {
border-radius: var(--anp-card-radius, var(--radius-xl));
margin-bottom: var(--anp-card-layout-padding, 10px);
}

.anp-fixed-status-bar.anp-card-layout .status-bar {
--status-bar-border-width: 0;
--status-bar-background: transparent;
--status-bar-border-color: transparent;
--status-bar-background: var(--card-background-color);
}

.anp-callout-toggle.anp-callout-toggle.anp-callout-toggle.anp-callout-sleek {
--capacities-sidebar-bottom: calc(var(--anp-card-layout-padding, 10px) + 80px);
}

.anp-colorful-frame.anp-fixed-status-bar.anp-card-layout .status-bar {
--status-bar-background: var(--colorful-frame-color);
--status-bar-text-color: var(--colorful-icon-color);
}

.anp-colorful-frame.anp-fixed-status-bar.anp-card-layout .status-bar .status-bar-item.mod-clickable:hover {
color: var(--colorful-icon-color);
background-color: rgba(var(--ctp-crust), 0.2);
}

.anp-colorful-frame.anp-card-layout .workspace-split.mod-right-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, .anp-colorful-frame.anp-card-layout .workspace-split.mod-left-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: rgba(var(--ctp-crust), 0.2);
}

.anp-colorful-frame.anuppuccin-accent-toggle.anp-colorful-frame.anp-card-layout, .anp-colorful-frame.anuppuccin-accent-toggle.anp-colorful-frame.anp-card-layout .workspace-tabs.mod-top, .anp-colorful-frame.anuppuccin-accent-toggle.anp-colorful-frame.anp-card-layout .sidebar-toggle-button, .anp-colorful-frame.anuppuccin-accent-toggle.anp-colorful-frame.anp-card-layout .workspace-ribbon.mod-left:before {
--tab-container-background: rgba(var(--anp-colorful-frame-color, var(--ctp-accent)), var(--anp-colorful-frame-opacity, 1));
--titlebar-background: rgba(var(--anp-colorful-frame-color, var(--ctp-accent)), var(--anp-colorful-frame-opacity, 1));
}

.anp-colorful-frame.anuppuccin-accent-toggle.anp-colorful-frame.anp-card-layout .prompt {
--background-modifier-hover: rgba(var(--ctp-text), 0.075) ;
}

.anp-colorful-frame.anp-colorful-frame.anp-card-layout, .anp-colorful-frame.anp-colorful-frame.anp-card-layout .workspace-tabs.mod-top, .anp-colorful-frame.anp-colorful-frame.anp-card-layout .sidebar-toggle-button, .anp-colorful-frame.anp-colorful-frame.anp-card-layout .workspace-ribbon.mod-left:before {
--tab-container-background: hsla(var(--anp-colorful-frame-color-hsl, var(--color-accent-hsl)), var(--anp-colorful-frame-opacity, 1));
--titlebar-background: hsla(var(--anp-colorful-frame-color-hsl, var(--color-accent-hsl)), var(--anp-colorful-frame-opacity, 1));
}

.anp-colorful-frame.anp-card-layout {
--divider-color-hover: var(--background-secondary-alt);
}

.anp-colorful-frame.anp-card-layout .mod-vertical .workspace-tabs {
background-color: var(--tab-container-background);
}

body.anp-colorful-frame.anp-card-layout .workspace, .anp-colorful-frame.anuppuccin-accent-toggle.anp-card-layout .workspace-tabs {
background-color: var(--tab-container-background);
}

.anp-colorful-frame.anp-card-layout, .anp-colorful-frame.anp-card-layout .workspace-tab-container, .anp-colorful-frame.anp-mini-tab-toggle .mod-vertical .workspace-tab-header.is-active {
--tab-text-color: var(--background-secondary-alt);
--tab-text-color-focused: var(--background-secondary-alt);
--tab-text-color-focused-active: var(--background-secondary-alt);
--tab-text-color-focused-highlighted: var(--background-secondary-alt);
--tab-text-color-focused-active-current: var(--background-secondary-alt);
--icon-color: var(--background-secondary-alt);
--icon-color-hover: var(--background-secondary-alt);
--icon-color-active: var(--background-secondary-alt);
--icon-color-focused: var(--background-secondary-alt);
}

.anp-colorful-frame.anp-card-layout:not(.anp-alternate-layout) .workspace-tab-header-status-icon {
color: var(--icon-color);
}

.anp-colorful-frame.is-focused:not(.anp-mini-tab-toggle) .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused:not(.anp-mini-tab-toggle) .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--color-accent);
}

.anp-colorful-frame.anp-card-layout .mod-left-split .workspace-tab-container, .anp-colorful-frame.anp-card-layout .mod-right-split .workspace-tab-container {
background-color: transparent;
}

.anp-colorful-frame.anp-card-layout .mod-left-split {
background-color: transparent;
}

.anp-colorful-frame.anp-card-layout .mod-vertical .workspace-tab-container {
background-color: transparent;
}

.anp-colorful-frame.anp-card-layout .mod-right-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-card-layout .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-crust), 0.2);
}

.anp-colorful-frame.anp-card-layout .mod-right-split .workspace-tab-header.is-active:hover, .anp-colorful-frame.anp-card-layout .mod-left-split .workspace-tab-header.is-active:hover {
background-color: rgba(var(--ctp-crust), 0.3);
}

.anp-colorful-frame.anp-card-layout:not(.anp-mini-tab-toggle) .mod-vertical .workspace-tab-header.is-active {
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-normal);
}

.anp-colorful-frame.anp-card-layout .workspace-drop-overlay:before {
background-color: var(--background-secondary-alt);
border-radius: var(--radius-m);
opacity: 0.5;
}

.anp-floating-header.anp-card-layout .nav-folder.mod-root > .nav-folder-title {
background-color: var(--card-foreground-color, var(--background-primary));
}
.anp-colorful-frame.anp-colorful-frame-icon-toggle-light.theme-light, .anp-colorful-frame.anp-colorful-frame-icon-toggle-dark.theme-dark, .anp-colorful-frame.anp-card-layout-actions .workspace-ribbon, .anp-colorful-frame.anp-card-layout .workspace-tab-container, .anp-colorful-frame.anp-card-layout .modal, .anp-colorful-frame.anp-card-layout .mod-vertical .workspace-tab-header.is-active, .anp-colorful-frame.anp-alternate-tab-toggle .mod-vertical .workspace-tab-header {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}

.anp-colorful-frame.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title, .anp-colorful-frame.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-dark.theme-dark) .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-light.theme-light) .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-dark.theme-dark) .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-light.theme-light) .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--background-secondary-alt);
}

.anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-normal);
}

.anp-colorful-frame.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}
.anp-colorful-frame.anp-colorful-frame-icon-toggle-light.theme-light, .anp-colorful-frame.anp-colorful-frame-icon-toggle-dark.theme-dark, .anp-colorful-frame.anp-card-layout-actions .workspace-ribbon, .anp-colorful-frame.anp-card-layout .workspace-tab-container, .anp-colorful-frame.anp-card-layout .modal, .anp-colorful-frame.anp-card-layout .mod-vertical .workspace-tab-header.is-active, .anp-colorful-frame.anp-alternate-tab-toggle .mod-vertical .workspace-tab-header {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}

.anp-colorful-frame.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title, .anp-colorful-frame.anp-mini-tab-toggle .mod-vertical .workspace-tab-header .workspace-tab-header-inner-title, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-dark.theme-dark) .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-light.theme-light) .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-dark.theme-dark) .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused:not(.anp-colorful-frame-icon-toggle-light.theme-light) .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--background-secondary-alt);
}

.anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .anp-colorful-frame.is-focused.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-normal);
}

.anp-colorful-frame.anp-colorful-frame-icon-toggle-light.theme-light .mod-right-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-colorful-frame-icon-toggle-light.theme-light .mod-left-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-right-split .workspace-tab-header.is-active, .anp-colorful-frame.anp-colorful-frame-icon-toggle-dark.theme-dark .mod-left-split .workspace-tab-header.is-active {
background-color: rgba(var(--ctp-text), 0.3);
}`,
    "anp-bg-fix": `.anp-bg-fix .workspace, .anp-bg-fix .app-container, .anp-bg-fix .horizontal-main-container {
background-color: var(--tab-container-background);
}`,
    "anp-hide-borders": `body.anp-card-layout.anp-hide-borders {
--tab-outline-color: transparent;
}

body.anp-card-layout.anp-hide-borders .menu {
border: 0px !important;
}

.anp-hide-borders {
--tab-outline-color: transparent;
--divider-color: transparent;
}`,
    "anp-card-shadows": `body.anp-card-layout.anp-card-shadows .workspace-split .workspace-leaf-content, body.anp-card-layout.anp-card-layout-actions .side-dock-actions, body.anp-card-layout.anp-card-layout-filebrowser .workspace-split .workspace-leaf-content[data-type=file-explorer] {
box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.05);
}`,
    "anp-card-layout-actions": `body.anp-card-layout.anp-card-layout-actions .workspace-ribbon.mod-left {
margin-right: var(--anp-card-layout-padding, 10px);
}

body.anp-card-layout.anp-card-layout-actions .side-dock-actions {
border-radius: 0px var(--anp-card-radius, var(--radius-xl)) var(--anp-card-radius, var(--radius-xl)) 0px;
margin-top: 2px;
border-width: 1px 1px 0px 1px;
}

body.anp-card-layout.anp-card-layout-actions .side-dock-actions {
border-style: solid;
border-color: var(--tab-outline-color);
background-color: var(--card-foreground-color);
}

body.anp-card-layout.anp-fixed-status-bar .side-dock-settings {
border-width: 1px;
border-radius: 0px var(--anp-card-radius, var(--radius-xl)) var(--anp-card-radius, var(--radius-xl)) 0px;
}

body.anp-card-layout.anp-card-shadows.anp-card-layout-actions .side-dock-actions {
box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.05);
}

.anp-colorful-frame.anp-card-layout.anp-card-layout-actions .workspace-ribbon {
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-muted);
--icon-color-active: var(--text-accent);
--icon-color-focused: var(--text-normal);
}`,
    "anp-card-layout-filebrowser": `body.anp-card-layout.anp-card-layout-filebrowser .workspace-leaf-content[data-type=file-explorer] {
background-color: var(--card-foreground-color);
border: 1px solid var(--tab-outline-color);
}

body.anp-card-layout.anp-card-shadows.anp-card-layout-filebrowser .workspace-split .workspace-leaf-content[data-type=file-explorer] {
box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.05);
}

body.anp-card-layout:not(.is-phone).anp-card-layout-filebrowser .workspace-leaf-content[data-type=file-explorer] {
border-radius: var(--anp-card-radius, var(--radius-xl));
margin-bottom: var(--anp-card-layout-padding, 10px);
}`,
  },
};
