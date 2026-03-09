import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "oliviers-theme",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --OT-UI-font-size: 16px;
  --OT-YAML-color: rgb(159, 138, 96);
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif;
  --OT-blockquote-font-size: 17.1px;
  --OT-button-OFF-bg: rgb(89, 72, 38);
  --OT-button-ON-bg: rgb(194, 133, 10);
  --OT-button-background-hover: rgb(245, 184, 61);
  --OT-button-background-normal: rgb(78, 53, 4);
  --OT-button-cta-background-normal: rgb(194, 133, 10);
  --OT-button-cta-text-normal: rgb(36, 24, 0);
  --OT-button-text-hover: rgb(36, 24, 0);
  --OT-button-text-normal: rgb(219, 184, 112);
  --OT-calendar-day-color: rgb(250, 219, 158);
  --OT-calendar-today-color: rgb(250, 219, 158);
  --OT-callout-gallery-gap: 5px;
  --OT-clickable-icon-in-header: rgb(245, 184, 61);
  --OT-clickable-icon-in-tab-header: rgb(245, 184, 61);
  --OT-clickable-icon-on-base-20: rgb(245, 184, 61);
  --OT-color-muted-on-accent-1: rgb(122, 82, 0);
  --OT-color-muted-on-accent-2: rgb(71, 48, 0);
  --OT-color-on-accent-1: rgb(36, 24, 0);
  --OT-color-on-accent-2: rgb(36, 24, 0);
  --OT-color-on-accent-3: rgb(219, 184, 112);
  --OT-editMode-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-font-family: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-line-height: 1.4em;
  --OT-editMode-line-width: 44em;
  --OT-editMode-tableText-percent: 90;
  --OT-editMode-text-size: 18px;
  --OT-img-max-height: 33rem;
  --OT-kanban-font: Uberhand Pro;
  --OT-kanban-font-size: 16px;
  --OT-kbd: rgb(250, 219, 158);
  --OT-kbd-background: darkslate;
  --OT-menu-text-color: rgb(232, 196, 125);
  --OT-menu-text-muted: rgb(153, 133, 92);
  --OT-metadata-label-width: 9em;
  --OT-metadata-property-icon: rgb(245, 184, 61);
  --OT-nav-folder-title-color: rgb(250, 219, 158);
  --OT-nav-item-muted: rgb(153, 133, 92);
  --OT-nav-item-vertical-padding: 4px;
  --OT-pill-background: rgb(194, 133, 10);
  --OT-pill-color: rgb(36, 24, 0);
  --OT-readingMode-line-height: 1.4em;
  --OT-readingMode-line-width: 39em;
  --OT-readingMode-tableText-percent: 90;
  --OT-readingMode-text-size: 18px;
  --OT-ribbon-icon-color-sidebar-is-collapsed: rgb(245, 184, 61);
  --OT-ribbon-icon-color-sidebar-is-open: rgb(245, 184, 61);
  --OT-search-settings-item-name: rgb(250, 219, 158);
  --OT-setting-item-description: rgb(153, 133, 92);
  --OT-setting-item-name: rgb(250, 219, 158);
  --OT-sidebarTab-background-active: rgb(194, 133, 10);
  --OT-sidebarTab-background-active-hover: rgb(245, 184, 61);
  --OT-space-below-h1: 1.0rem;
  --OT-space-below-h2: 1.5rem;
  --OT-space-below-h3: 0.4rem;
  --OT-space-below-h4: 0.2rem;
  --OT-space-below-h5: 0.2rem;
  --OT-space-below-h6: 0.0rem;
  --OT-stabilo-mark: rgb(251, 237, 182);
  --OT-stabilo-text: rgb(32, 28, 19);
  --OT-status-bar-padding: 6px;
  --OT-syntax-markers: rgb(128, 111, 77);
  --OT-tab-background-active-hover: rgb(245, 184, 61);
  --OT-table-alt-background: rgb(45, 39, 27);
  --OT-table-background: rgb(38, 33, 23);
  --OT-theme-h: 40;
  --OT-theme-s: 25%;
  --OT-tree-item-flair-background: rgb(78, 53, 4);
  --OT-tree-item-flair-color: rgb(219, 184, 112);
  --OT-vertical-tab-header-group-title: rgb(153, 133, 92);
  --OT-view-header-title-focus-color: rgb(245, 184, 61);
  --OT-view-header-title-no-focus-color: rgb(153, 133, 92);
  --accent-h: 40;
  --accent-l: 40%;
  --accent-s: 90%;
  --background-modifier-active-hover: rgb(245, 184, 61);
  --background-modifier-border: rgb(70, 61, 42);
  --background-modifier-border-focus: rgb(89, 77, 54);
  --background-modifier-border-hover: rgb(194, 133, 10);
  --background-modifier-form-field: rgb(32, 28, 19);
  --background-modifier-form-field-hover: rgb(32, 28, 19);
  --background-modifier-hover: rgb(245, 184, 61);
  --background-modifier-message: rgb(245, 184, 61);
  --background-modifier-success: rgb(106, 245, 161);
  --background-modifier-success-rgb: 106, 245, 161;
  --background-primary: rgb(32, 28, 19);
  --background-secondary: rgb(45, 39, 27);
  --bases-cards-background: rgb(32, 28, 19);
  --bases-cards-border-width: 1.5px;
  --bases-cards-shadow: 0 0 0 1px rgb(70, 61, 42);
  --bases-cards-shadow-hover: 0 0 0 2px rgb(194, 133, 10);
  --bases-embed-border-color: rgb(70, 61, 42);
  --bases-group-heading-property-color: rgb(153, 133, 92);
  --bases-group-heading-property-size: 12.8px;
  --bases-header-border-width: 0 0 1.5px 0;
  --bases-table-border-color: rgb(64, 55, 38);
  --bases-table-cell-background-active: rgb(32, 28, 19);
  --bases-table-cell-background-disabled: rgb(212, 207, 196);
  --bases-table-cell-background-selected: rgba(194, 133, 10, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 77, 54);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(194, 133, 10);
  --bases-table-column-border-width: 1.5px;
  --bases-table-container-border-width: 1.5px;
  --bases-table-header-background: rgb(32, 28, 19);
  --bases-table-header-background-hover: rgb(245, 184, 61);
  --bases-table-header-color: rgb(219, 184, 112);
  --bases-table-row-background-hover: rgb(45, 39, 27);
  --bases-table-row-border-width: 1.5px;
  --bases-table-summary-background: rgb(32, 28, 19);
  --bases-table-summary-background-hover: rgb(245, 184, 61);
  --blockquote-background-color: rgb(51, 44, 31);
  --blockquote-border-color: rgb(194, 133, 10);
  --blockquote-border-thickness: 0;
  --blockquote-font-style: italic;
  --blockquote-style: italic;
  --blue: rgb(45, 29, 191);
  --border-width: 1.5px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: rgb(32, 28, 19);
  --canvas-card-label-color: rgb(128, 111, 77);
  --canvas-dot-pattern: rgb(89, 77, 54);
  --caret-color: red;
  --checkbox-border-color: rgb(250, 219, 158);
  --checkbox-border-color-hover: rgb(245, 184, 61);
  --checkbox-color: rgb(250, 219, 158);
  --checkbox-color-hover: rgb(245, 184, 61);
  --checkbox-marker-color: rgb(32, 28, 19);
  --checkbox-radius: 0.3rem;
  --checkbox-size: 0.85rem;
  --checklist-done-color: rgb(128, 111, 77);
  --checklist-done-decoration: none;
  --code-background: rgb(38, 33, 23);
  --code-border-color: rgb(250, 219, 158);
  --code-border-width: 1px;
  --code-bracket-background: rgb(245, 184, 61);
  --code-comment: rgb(128, 111, 77);
  --code-normal: rgb(250, 219, 158);
  --code-operator: rgb(250, 219, 158);
  --code-punctuation: rgb(153, 133, 92);
  --code-size: 0.8em;
  --code-string: rgb(117, 158, 240);
  --code-tag: rgb(128, 111, 77);
  --collapse-icon-color: rgb(194, 133, 10);
  --collapse-icon-color-collapsed: rgb(194, 133, 10);
  --color-accent: rgb(194, 133, 10);
  --color-accent-1: rgb(245, 184, 61);
  --color-accent-2: rgb(194, 133, 10);
  --color-accent-3: rgb(78, 53, 4);
  --color-accent-hsl: 40, 90%, 40%;
  --color-base-00: rgb(32, 28, 19);
  --color-base-05: rgb(54, 47, 33);
  --color-base-100: rgb(250, 219, 158);
  --color-base-20: rgb(45, 39, 27);
  --color-base-35: rgb(70, 61, 42);
  --color-base-40: rgb(89, 77, 54);
  --color-base-50: rgb(128, 111, 77);
  --dark-blue: rgb(33, 42, 110);
  --divider-color: rgb(70, 61, 42);
  --divider-color-hover: rgb(194, 133, 10);
  --divider-width: 2px;
  --dropdown-background-hover: rgb(70, 61, 42);
  --dynamic-outline-active-heading-background: rgb(78, 53, 4);
  --dynamic-outline-background: rgb(45, 39, 27);
  --dynamic-outline-background-accent: lime;
  --dynamic-outline-background-hover: rgb(194, 133, 10);
  --dynamic-outline-background-modifier-hover-lighter: lime;
  --dynamic-outline-color: rgb(232, 196, 125);
  --dynamic-outline-h1-text-color: rgb(232, 196, 125);
  --dynamic-outline-h2-text-color: rgb(232, 196, 125);
  --dynamic-outline-h3-text-color: rgb(232, 196, 125);
  --dynamic-outline-h4-text-color: rgb(232, 196, 125);
  --dynamic-outline-h5-text-color: rgb(232, 196, 125);
  --dynamic-outline-h6-text-color: rgb(232, 196, 125);
  --dynamic-outline-text-color: rgb(232, 196, 125);
  --embed-block-shadow-hover: 0 0 0 1px rgb(70, 61, 42), inset 0 0 0 1px rgb(70, 61, 42);
  --embed-border-end: 1px dotted;
  --embed-border-start: 0;
  --embed-padding: 0;
  --favorite-blue: rgb(15, 5, 107);
  --file-header-background: rgb(32, 28, 19);
  --file-header-background-focused: rgb(32, 28, 19);
  --file-header-border: 1.5px solid rgb(70, 61, 42);
  --file-header-font-size: 13.86667px;
  --file-header-justify: left;
  --file-line-width: 39em;
  --file-margins: 0.5em 32px;
  --flair-color: rgb(250, 219, 158);
  --floating-toc-background-color: rgb(32, 28, 19);
  --floating-toc-font-color: rgb(232, 196, 125);
  --floating-toc-header-background-color: rgb(32, 28, 19);
  --floating-toc-hover-color: rgb(36, 24, 0);
  --font-ui-large: 21.33333px;
  --font-ui-medium: 16px;
  --font-ui-small: 13.86667px;
  --font-ui-smaller: 12.8px;
  --footnote-divider-color: rgb(70, 61, 42);
  --footnote-divider-width: 1.5px;
  --footnote-gap: 0.5rem;
  --footnote-id-color: rgb(250, 219, 158);
  --footnote-id-color-no-occurrences: rgb(128, 111, 77);
  --footnote-id-delimiter: ")";
  --footnote-input-background-active: rgb(32, 28, 19);
  --footnote-line-height: 1.3;
  --footnote-size: 16px;
  --graph-line: rgb(250, 219, 158);
  --graph-node: rgb(153, 133, 92);
  --graph-node-focused: rgb(245, 184, 61);
  --graph-node-unresolved: rgb(128, 111, 77);
  --graph-text: rgb(250, 219, 158);
  --h1-color: rgb(250, 219, 158);
  --h2-color: rgb(250, 219, 158);
  --h3-color: rgb(250, 219, 158);
  --h4-color: rgb(250, 219, 158);
  --h5-color: rgb(250, 219, 158);
  --h5-line-height: 1.4em;
  --h6-color: rgb(250, 219, 158);
  --h6-line-height: 1.4em;
  --header-height: 2em;
  --heading-formatting: rgb(128, 111, 77);
  --heading-spacing: 0;
  --highlighted-folder-background: rgb(54, 47, 33);
  --highlighted-folder-color: yellow;
  --highlighted-folder-current-note-color: rgb(245, 184, 61);
  --highlighted-folder-font-weight: 400;
  --highlighted-folder-text-color: rgb(232, 196, 125);
  --highlighted-folder-title-background: rgb(194, 133, 10);
  --highlighted-folder-title-color: rgb(36, 24, 0);
  --highlighted-parent-folder-background: rgb(78, 53, 4);
  --highlighted-parent-folder-color: yellow;
  --highlighted-parent-folder-font-weight: 400;
  --highlighted-parent-folder-text-color: rgb(219, 184, 112);
  --hr-color: rgb(70, 61, 42);
  --icon-color: rgb(245, 184, 61);
  --icon-color-active: rgb(45, 39, 27);
  --icon-color-focused: rgb(250, 219, 158);
  --icon-color-hover: rgb(36, 24, 0);
  --indentation-guide-color: rgb(128, 111, 77);
  --indentation-guide-width: 1.5px;
  --indentation-guide-width-active: 1.5px;
  --inline-title-color: rgb(128, 111, 77);
  --inline-title-font: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --inline-title-line-height: 0em;
  --inline-title-size: 18px;
  --inline-title-weight: 400;
  --input-border-width: 1.5px;
  --input-date-separator: rgb(128, 111, 77);
  --input-placeholder-color: grey;
  --interactive-accent: rgb(194, 133, 10);
  --interactive-accent-hover: rgb(245, 184, 61);
  --interactive-accent-hsl: 40, 90%, 40%;
  --interactive-hover: rgb(70, 61, 42);
  --light-blue: rgb(167, 195, 226);
  --line-height-normal: 1.4em;
  --link-color: rgb(117, 158, 240);
  --link-color-hover: rgb(36, 24, 0);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(117, 158, 240);
  --link-external-color-hover: rgb(245, 184, 61);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #fb464c;
  --link-unresolved-decoration-color: rgba(194, 133, 10, 0.3);
  --link-unresolved-filter: brightness(0.9);
  --list-bullet-size: 0.4em;
  --list-indent: 1.3em;
  --list-marker-color: rgb(250, 219, 158);
  --list-marker-color-collapsed: rgb(245, 184, 61);
  --list-marker-color-hover: rgb(153, 133, 92);
  --list-spacing: 0.05rem;
  --list-spacing-1: 0.3rem;
  --list-spacing-2: 0.2rem;
  --list-spacing-3: 0.1rem;
  --list-spacing-below: 0.8rem;
  --menu-background: rgb(45, 39, 27);
  --menu-border-color: rgb(194, 133, 10);
  --menu-border-width: 1.5px;
  --metadata-background: rgb(32, 28, 19);
  --metadata-border-color: rgb(70, 61, 42);
  --metadata-border-radius: 7px;
  --metadata-divider-color: rgb(70, 61, 42);
  --metadata-divider-width: 1;
  --metadata-input-background-active: rgb(32, 28, 19);
  --metadata-input-font-size: 13.86667px;
  --metadata-input-text-color: rgb(250, 219, 158);
  --metadata-label-background-active: rgb(32, 28, 19);
  --metadata-label-font-size: 13.86667px;
  --metadata-label-font-weight: 600;
  --metadata-label-text-color: rgb(153, 133, 92);
  --metadata-label-text-color-hover: rgb(153, 133, 92);
  --metadata-padding: 0;
  --metadata-property-background-active: rgb(245, 184, 61);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 77, 54);
  --metadata-property-box-shadow-hover: 0 0 0 1.5px rgb(194, 133, 10);
  --metadata-property-padding: 0em 0em 0em 0.3em;
  --metadata-sidebar-input-font-size: 13.86667px;
  --metadata-sidebar-label-font-size: 13.86667px;
  --modal-background: rgb(32, 28, 19);
  --modal-border-color: rgb(89, 77, 54);
  --modal-border-width: 1.5px;
  --modal-height: 88vh;
  --modal-max-height: 98vh;
  --nav-collapse-icon-color: rgb(128, 111, 77);
  --nav-collapse-icon-color-collapsed: red;
  --nav-heading-color: rgb(250, 219, 158);
  --nav-heading-color-collapsed: rgb(128, 111, 77);
  --nav-heading-color-collapsed-hover: rgb(153, 133, 92);
  --nav-heading-color-hover: rgb(250, 219, 158);
  --nav-indentation-guide-color: rgb(128, 111, 77);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-active: rgb(194, 133, 10);
  --nav-item-background-hover: rgb(245, 184, 61);
  --nav-item-background-selected: rgb(78, 53, 4);
  --nav-item-color: rgb(232, 196, 125);
  --nav-item-color-active: rgb(36, 24, 0);
  --nav-item-color-highlighted: rgb(245, 184, 61);
  --nav-item-color-hover: rgb(36, 24, 0);
  --nav-item-color-selected: rgb(219, 184, 112);
  --nav-item-padding: 4px
									8px
									4px
									24px;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px;
  --nav-item-size: 13.86667px;
  --nav-tag-color: rgb(128, 111, 77);
  --nav-tag-color-active: rgb(153, 133, 92);
  --nav-tag-color-hover: rgb(153, 133, 92);
  --neutral-100: rgb(255, 255, 255);
  --obsidian-violet: rgb(138, 92, 245);
  --p-spacing: 0.5em;
  --pdf-background: rgb(32, 28, 19);
  --pdf-page-background: rgb(32, 28, 19);
  --pdf-shadow: 0 0 0 1px rgb(70, 61, 42);
  --pdf-sidebar-background: rgb(32, 28, 19);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(70, 61, 42);
  --pill-background-hover: rgb(245, 184, 61);
  --pill-border-color: rgb(70, 61, 42);
  --pill-border-color-hover: rgb(194, 133, 10);
  --pill-border-width: 1.5px;
  --pill-color: rgb(153, 133, 92);
  --pill-color-hover: rgb(36, 24, 0);
  --pill-color-remove: rgb(194, 133, 10);
  --pill-color-remove-hover: rgb(36, 24, 0);
  --popover-font-size: 14.4px;
  --popover-height: 50vh;
  --popover-width: 46rem;
  --prompt-background: rgb(32, 28, 19);
  --prompt-border-color: rgb(89, 77, 54);
  --prompt-border-width: 1.5px;
  --prompt-max-height: 80vh;
  --ribbon-background: rgb(45, 39, 27);
  --ribbon-background-collapsed: rgb(32, 28, 19);
  --royal-blue: rgb(0, 0, 163);
  --search-clear-button-color: rgb(153, 133, 92);
  --search-icon-color: rgb(245, 184, 61);
  --search-result-background: rgb(32, 28, 19);
  --setting-group-heading-color: rgb(250, 219, 158);
  --setting-group-heading-size: 16px;
  --setting-items-border-color: rgb(70, 61, 42);
  --sky-blue: rgb(36, 211, 255);
  --slider-thumb-border-color: rgb(194, 133, 10);
  --slider-thumb-border-width: 1.5px;
  --slider-track-background: rgb(70, 61, 42);
  --solarized-base0: rgb(131, 148, 149);
  --solarized-base00: rgb(100, 122, 130);
  --solarized-base01: rgb(88, 110, 116);
  --solarized-base02: rgb(7, 53, 65);
  --solarized-base03: rgb(0, 45, 56);
  --solarized-base1: rgb(146, 160, 160);
  --solarized-base2: rgb(237, 231, 212);
  --solarized-base3: rgb(253, 246, 226);
  --solarized-blue: rgb(39, 139, 211);
  --solarized-cyan: rgb(42, 162, 152);
  --solarized-green: rgb(133, 153, 0);
  --solarized-magenta: rgb(211, 54, 130);
  --solarized-orange: rgb(202, 76, 22);
  --solarized-red: rgb(220, 49, 46);
  --solarized-violet: rgb(109, 114, 197);
  --solarized-yellow: rgb(179, 134, 0);
  --stabilo-bleu-clair: rgb(186, 228, 243);
  --stabilo-bleu-foncé: rgb(56, 173, 220);
  --stabilo-jaune-clair: rgb(251, 237, 182);
  --stabilo-jaune-foncé: rgb(241, 232, 65);
  --stabilo-orange-clair: rgb(255, 191, 128);
  --stabilo-orange-foncé: rgb(243, 150, 57);
  --stabilo-rose-clair: rgb(244, 164, 181);
  --stabilo-rose-foncé: rgb(233, 83, 103);
  --stabilo-vert-clair: rgb(176, 232, 200);
  --stabilo-vert-foncé: rgb(1, 193, 132);
  --stabilo-violet-clair: rgb(173, 137, 190);
  --stabilo-violet-foncé: rgb(215, 45, 130);
  --status-bar-background: rgb(78, 53, 4);
  --status-bar-border-color: rgb(194, 133, 10);
  --status-bar-border-width: 1px;
  --status-bar-font-size: 13.86667px;
  --status-bar-radius: 4px;
  --status-bar-text-color: rgb(219, 184, 112);
  --suggestion-background: rgb(32, 28, 19);
  --tab-background-active: rgb(32, 28, 19);
  --tab-container-background: rgb(54, 47, 33);
  --tab-divider-color: rgb(245, 184, 61);
  --tab-font-size: 13.86667px;
  --tab-outline-color: rgb(70, 61, 42);
  --tab-stacked-font-size: 13.86667px;
  --tab-stacked-header-width: 2em;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: rgb(45, 39, 27);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(45, 39, 27), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(194, 133, 10);
  --tab-text-color: rgb(153, 133, 92);
  --tab-text-color-active: rgb(153, 133, 92);
  --tab-text-color-focused: rgb(153, 133, 92);
  --tab-text-color-focused-active: rgb(153, 133, 92);
  --tab-text-color-focused-active-current: rgb(245, 184, 61);
  --tab-text-color-focused-highlighted: rgb(245, 184, 61);
  --table-add-button-border-color: rgb(70, 61, 42);
  --table-background: rgb(45, 39, 27);
  --table-border-color: rgb(64, 55, 38);
  --table-drag-handle-background-active: rgb(194, 133, 10);
  --table-drag-handle-color: rgb(128, 111, 77);
  --table-drag-handle-color-active: rgb(36, 24, 0);
  --table-header-background: rgb(51, 44, 31);
  --table-header-background-hover: rgb(51, 44, 31);
  --table-header-border-color: rgb(64, 55, 38);
  --table-header-color: rgb(250, 219, 158);
  --table-header-size: 16.2px;
  --table-row-alt-background: rgb(38, 33, 23);
  --table-row-alt-background-hover: rgb(38, 33, 23);
  --table-row-background-hover: rgb(45, 39, 27);
  --table-selection: rgba(194, 133, 10, 0.1);
  --table-selection-border-color: rgb(194, 133, 10);
  --table-text-size: 16.2px;
  --tag-background: rgb(194, 133, 10);
  --tag-background-hover: rgb(245, 184, 61);
  --tag-border-color: rgba(194, 133, 10, 0.15);
  --tag-border-color-hover: rgba(194, 133, 10, 0.15);
  --tag-color: rgb(36, 24, 0);
  --tag-color-hover: rgb(36, 24, 0);
  --text-accent: rgb(245, 184, 61);
  --text-accent-hover: rgb(36, 24, 0);
  --text-faint: rgb(128, 111, 77);
  --text-muted: rgb(153, 133, 92);
  --text-normal: rgb(250, 219, 158);
  --text-on-accent: rgb(36, 24, 0);
  --text-on-accent-inverted: rgb(245, 184, 61);
  --text-selection: rgba(245, 184, 61, 0.2);
  --titlebar-background: #333;
  --titlebar-background-focused: rgb(54, 47, 33);
  --titlebar-border-color: rgb(70, 61, 42);
  --titlebar-text-color: rgb(153, 133, 92);
  --titlebar-text-color-focused: rgb(250, 219, 158);
  --toggle-thumb-color: rgb(45, 39, 27);
  --traffic-lights-offset-x: 2em;
  --traffic-lights-offset-y: 2em;
  --vault-profile-color: rgb(245, 184, 61);
  --vault-profile-color-hover: rgb(36, 24, 0);
  --vault-profile-font-size: 21.33333px;
  --vault-profile-font-weight: 700;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 47, 33);
  color: rgb(250, 219, 158);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(45, 39, 27);
  color: rgb(250, 219, 158);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(70, 61, 42);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(54, 47, 33);
  border-left-color: rgb(70, 61, 42);
  color: rgb(250, 219, 158);
}

body div#quartz-root {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .page article p > em, em {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .page article p > i, i {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .page article p > strong, strong {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .text-highlight {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body del {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: line-through rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body p {
  color: rgb(153, 133, 92);
  outline: rgb(153, 133, 92) none 0px;
  text-decoration: rgb(153, 133, 92);
  text-decoration-color: rgb(153, 133, 92);
}`,
    links: `body a.external, footer a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration: rgb(117, 158, 240);
  text-decoration-color: rgb(117, 158, 240);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration: rgb(117, 158, 240);
  text-decoration-color: rgb(117, 158, 240);
}

body a.internal.broken {
  color: rgb(251, 70, 76);
  filter: brightness(0.9);
  outline: rgb(251, 70, 76) none 0px;
  text-decoration: rgba(194, 133, 10, 0.3);
  text-decoration-color: rgba(194, 133, 10, 0.3);
}`,
    lists: `body dd {
  color: rgb(250, 219, 158);
}

body dt {
  color: rgb(250, 219, 158);
}

body ol > li {
  color: rgb(250, 219, 158);
}

body ol.overflow {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body ul > li {
  color: rgb(250, 219, 158);
}

body ul.overflow {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 111, 77);
  text-decoration: rgb(128, 111, 77);
}

body blockquote {
  background-color: rgb(51, 44, 31);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body table {
  color: rgb(250, 219, 158);
  margin-top: 8px;
  width: 227.453px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(45, 39, 27);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(38, 33, 23);
}

body td {
  border-bottom-color: rgb(64, 55, 38);
  border-left-color: rgb(64, 55, 38);
  border-right-color: rgb(64, 55, 38);
  border-top-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}

body th {
  border-bottom-color: rgb(64, 55, 38);
  border-left-color: rgb(64, 55, 38);
  border-right-color: rgb(64, 55, 38);
  border-top-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}

body tr {
  background-color: rgb(51, 44, 31);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

body pre > code, pre:has(> code) {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body figcaption {
  color: rgb(250, 219, 158);
}

body figure {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body img {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body video {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
}

body .footnotes {
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .transclude {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-left-width: 0px;
  border-right-color: rgb(250, 219, 158);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
}

body .transclude-inner {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-left-width: 0px;
  border-right-color: rgb(250, 219, 158);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 111, 77);
  text-decoration: rgb(128, 111, 77);
  text-decoration-color: rgb(128, 111, 77);
}

body input[type=checkbox] {
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  margin-left: -20.4px;
  width: 13.5938px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='-'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}`,
    callouts: `body .callout > .callout-content {
  padding-left: 16px;
  padding-right: 16px;
}

body .callout[data-callout="abstract"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(70, 61, 42);
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-top-color: rgb(70, 61, 42);
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(89, 77, 54);
  border-left-color: rgb(89, 77, 54);
  border-right-color: rgb(89, 77, 54);
  border-top-color: rgb(89, 77, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 184, 61);
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 77, 54);
  border-left-color: rgb(89, 77, 54);
  border-right-color: rgb(89, 77, 54);
  border-top-color: rgb(89, 77, 54);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(45, 39, 27);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(245, 184, 61);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 184, 61);
  color: rgb(250, 219, 158);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(194, 133, 10);
  border-bottom-color: rgba(194, 133, 10, 0.15);
  border-bottom-left-radius: 27.7333px;
  border-bottom-right-radius: 27.7333px;
  border-left-color: rgba(194, 133, 10, 0.15);
  border-right-color: rgba(194, 133, 10, 0.15);
  border-top-color: rgba(194, 133, 10, 0.15);
  border-top-left-radius: 27.7333px;
  border-top-right-radius: 27.7333px;
}

body a.internal.tag-link::before {
  color: rgb(36, 24, 0);
}

body h1 {
  color: rgb(250, 219, 158);
}

body h2 {
  color: rgb(250, 219, 158);
}

body h2.page-title, h2.page-title a {
  color: rgb(128, 111, 77);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body h3 {
  color: rgb(250, 219, 158);
}

body h4 {
  color: rgb(250, 219, 158);
}

body h5 {
  color: rgb(250, 219, 158);
}

body h6 {
  color: rgb(250, 219, 158);
}

body hr {
  border-bottom-color: rgb(70, 61, 42);
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(194, 133, 10);
  border-bottom-color: rgb(36, 24, 0);
  border-left-color: rgb(36, 24, 0);
  border-right-color: rgb(36, 24, 0);
  border-top-color: rgb(36, 24, 0);
  color: rgb(36, 24, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(245, 184, 61);
  border-left-color: rgb(245, 184, 61);
  border-right-color: rgb(245, 184, 61);
  border-top-color: rgb(245, 184, 61);
  color: rgb(245, 184, 61);
}`,
    footer: `body footer {
  background-color: rgb(78, 53, 4);
  border-bottom-color: rgb(194, 133, 10);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(194, 133, 10);
  border-right-color: rgb(194, 133, 10);
  border-right-width: 1px;
  border-top-color: rgb(194, 133, 10);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(219, 184, 112);
}

body footer ul li a {
  color: rgb(219, 184, 112);
  text-decoration: rgb(219, 184, 112);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 219, 158);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 196, 125);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body li.section-li > .section .meta {
  color: rgb(232, 196, 125);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body ul.section-ul {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(245, 184, 61);
  border-left-color: rgb(245, 184, 61);
  border-right-color: rgb(245, 184, 61);
  border-top-color: rgb(245, 184, 61);
  color: rgb(245, 184, 61);
}

body .darkmode svg {
  color: rgb(245, 184, 61);
  stroke: rgb(245, 184, 61);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

body .breadcrumb-element p {
  color: rgb(128, 111, 77);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .metadata {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(70, 61, 42);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-top-color: rgb(70, 61, 42);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(153, 133, 92);
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

body .navigation-progress {
  background-color: rgb(78, 53, 4);
}

body .page-header h2.page-title {
  color: rgb(250, 219, 158);
}

body abbr {
  color: rgb(250, 219, 158);
  text-decoration: underline dotted rgb(250, 219, 158);
}

body details {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body input[type=text] {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

body kbd {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body sub {
  color: rgb(250, 219, 158);
}

body summary {
  color: rgb(250, 219, 158);
}

body sup {
  color: rgb(250, 219, 158);
}`,
  },
  light: {
    base: `:root:root {
  --OT-UI-font-size: 16px;
  --OT-YAML-color: rgb(172, 123, 83);
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif;
  --OT-blockquote-font-size: 17.1px;
  --OT-button-OFF-bg: rgb(214, 203, 194);
  --OT-button-ON-bg: rgb(217, 175, 140);
  --OT-button-background-hover: rgb(191, 121, 64);
  --OT-button-background-normal: rgb(249, 242, 236);
  --OT-button-cta-background-normal: rgb(217, 175, 140);
  --OT-button-cta-text-normal: rgb(250, 244, 240);
  --OT-button-text-hover: rgb(249, 242, 236);
  --OT-button-text-normal: rgb(153, 97, 51);
  --OT-calendar-day-color: rgb(110, 79, 53);
  --OT-calendar-today-color: rgb(110, 79, 53);
  --OT-callout-gallery-gap: 5px;
  --OT-clickable-icon-in-header: rgb(191, 121, 64);
  --OT-clickable-icon-in-tab-header: rgb(191, 121, 64);
  --OT-clickable-icon-on-base-20: rgb(191, 121, 64);
  --OT-color-muted-on-accent-1: rgb(240, 223, 209);
  --OT-color-muted-on-accent-2: rgb(245, 234, 224);
  --OT-color-on-accent-1: rgb(249, 242, 236);
  --OT-color-on-accent-2: rgb(250, 244, 240);
  --OT-color-on-accent-3: rgb(153, 97, 51);
  --OT-editMode-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-font-family: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-line-height: 1.4em;
  --OT-editMode-line-width: 44em;
  --OT-editMode-tableText-percent: 90;
  --OT-editMode-text-size: 18px;
  --OT-img-max-height: 33rem;
  --OT-kanban-font: Uberhand Pro;
  --OT-kanban-font-size: 16px;
  --OT-kbd: rgb(110, 79, 53);
  --OT-kbd-background: floralwhite;
  --OT-menu-text-color: rgb(110, 79, 53);
  --OT-menu-text-muted: rgb(165, 118, 80);
  --OT-metadata-label-width: 9em;
  --OT-metadata-property-icon: rgb(191, 121, 64);
  --OT-nav-folder-title-color: rgb(110, 79, 53);
  --OT-nav-item-muted: rgb(165, 118, 80);
  --OT-nav-item-vertical-padding: 4px;
  --OT-pill-background: rgb(217, 175, 140);
  --OT-pill-color: rgb(250, 244, 240);
  --OT-readingMode-line-height: 1.4em;
  --OT-readingMode-line-width: 39em;
  --OT-readingMode-tableText-percent: 90;
  --OT-readingMode-text-size: 18px;
  --OT-ribbon-icon-color-sidebar-is-collapsed: rgb(191, 121, 64);
  --OT-ribbon-icon-color-sidebar-is-open: rgb(191, 121, 64);
  --OT-search-settings-item-name: rgb(110, 79, 53);
  --OT-setting-item-description: rgb(165, 118, 80);
  --OT-setting-item-name: rgb(110, 79, 53);
  --OT-sidebarTab-background-active: rgb(217, 175, 140);
  --OT-sidebarTab-background-active-hover: rgb(191, 121, 64);
  --OT-space-below-h1: 1.0rem;
  --OT-space-below-h2: 1.5rem;
  --OT-space-below-h3: 0.4rem;
  --OT-space-below-h4: 0.2rem;
  --OT-space-below-h5: 0.2rem;
  --OT-space-below-h6: 0.0rem;
  --OT-stabilo-mark: rgb(251, 237, 182);
  --OT-stabilo-text: rgb(110, 79, 53);
  --OT-status-bar-padding: 6px;
  --OT-syntax-markers: rgb(202, 171, 145);
  --OT-tab-background-active-hover: rgb(191, 121, 64);
  --OT-table-alt-background: rgb(240, 231, 224);
  --OT-table-background: rgb(247, 242, 238);
  --OT-theme-h: 27;
  --OT-theme-s: 35%;
  --OT-tree-item-flair-background: rgb(249, 242, 236);
  --OT-tree-item-flair-color: rgb(153, 97, 51);
  --OT-vertical-tab-header-group-title: rgb(165, 118, 80);
  --OT-view-header-title-focus-color: rgb(191, 121, 64);
  --OT-view-header-title-no-focus-color: rgb(165, 118, 80);
  --accent-h: 27;
  --accent-l: 70%;
  --accent-s: 50%;
  --background-modifier-active-hover: rgb(191, 121, 64);
  --background-modifier-border: rgb(224, 205, 190);
  --background-modifier-border-focus: rgb(110, 79, 53);
  --background-modifier-border-hover: rgb(217, 175, 140);
  --background-modifier-form-field: rgb(245, 239, 234);
  --background-modifier-form-field-hover: rgb(245, 239, 234);
  --background-modifier-hover: rgb(191, 121, 64);
  --background-modifier-message: rgb(191, 121, 64);
  --background-modifier-success: rgb(106, 245, 161);
  --background-modifier-success-rgb: 106, 245, 161;
  --background-primary: rgb(245, 239, 234);
  --background-secondary: rgb(237, 226, 217);
  --background-secondary-alt: rgb(230, 215, 203);
  --bases-cards-background: rgb(245, 239, 234);
  --bases-cards-border-width: 1.5px;
  --bases-cards-shadow: 0 0 0 1px rgb(224, 205, 190);
  --bases-cards-shadow-hover: 0 0 0 2px rgb(217, 175, 140);
  --bases-embed-border-color: rgb(224, 205, 190);
  --bases-group-heading-property-color: rgb(165, 118, 80);
  --bases-group-heading-property-size: 12.8px;
  --bases-header-border-width: 0 0 1.5px 0;
  --bases-table-border-color: rgb(110, 79, 53);
  --bases-table-cell-background-active: rgb(245, 239, 234);
  --bases-table-cell-background-disabled: rgb(212, 203, 196);
  --bases-table-cell-background-selected: rgba(217, 175, 140, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(110, 79, 53);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(217, 175, 140);
  --bases-table-column-border-width: 1.5px;
  --bases-table-container-border-width: 1.5px;
  --bases-table-header-background: rgb(245, 239, 234);
  --bases-table-header-background-hover: rgb(191, 121, 64);
  --bases-table-header-color: rgb(153, 97, 51);
  --bases-table-row-background-hover: rgb(240, 231, 224);
  --bases-table-row-border-width: 1.5px;
  --bases-table-summary-background: rgb(245, 239, 234);
  --bases-table-summary-background-hover: rgb(191, 121, 64);
  --blockquote-background-color: rgb(252, 250, 248);
  --blockquote-border-color: rgb(217, 175, 140);
  --blockquote-border-thickness: 0;
  --blockquote-font-style: italic;
  --blockquote-style: italic;
  --blue: rgb(45, 29, 191);
  --blur-background: color-mix(in srgb, rgb(245, 239, 234) 65%, transparent) linear-gradient(rgb(245, 239, 234), color-mix(in srgb, rgb(245, 239, 234) 65%, transparent));
  --border-width: 1.5px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: rgb(245, 239, 234);
  --canvas-card-label-color: rgb(202, 171, 145);
  --canvas-dot-pattern: rgb(110, 79, 53);
  --caret-color: red;
  --checkbox-border-color: rgb(110, 79, 53);
  --checkbox-border-color-hover: rgb(191, 121, 64);
  --checkbox-color: rgb(110, 79, 53);
  --checkbox-color-hover: rgb(191, 121, 64);
  --checkbox-marker-color: rgb(245, 239, 234);
  --checkbox-radius: 0.3rem;
  --checkbox-size: 0.85rem;
  --checklist-done-color: rgb(202, 171, 145);
  --checklist-done-decoration: none;
  --code-background: rgb(247, 242, 238);
  --code-border-color: rgb(110, 79, 53);
  --code-border-width: 1px;
  --code-bracket-background: rgb(191, 121, 64);
  --code-comment: rgb(202, 171, 145);
  --code-normal: rgb(110, 79, 53);
  --code-operator: rgb(110, 79, 53);
  --code-punctuation: rgb(165, 118, 80);
  --code-size: 0.8em;
  --code-string: rgb(83, 132, 172);
  --code-tag: rgb(202, 171, 145);
  --collapse-icon-color: rgb(217, 175, 140);
  --collapse-icon-color-collapsed: rgb(217, 175, 140);
  --color-accent: rgb(217, 175, 140);
  --color-accent-1: rgb(191, 121, 64);
  --color-accent-2: rgb(217, 175, 140);
  --color-accent-3: rgb(249, 242, 236);
  --color-accent-hsl: 27, 50%, 70%;
  --color-base-00: rgb(245, 239, 234);
  --color-base-05: rgb(230, 215, 203);
  --color-base-100: rgb(110, 79, 53);
  --color-base-20: rgb(237, 226, 217);
  --color-base-35: rgb(224, 205, 190);
  --color-base-40: rgb(110, 79, 53);
  --color-base-50: rgb(202, 171, 145);
  --dark-blue: rgb(33, 42, 110);
  --divider-color: rgb(224, 205, 190);
  --divider-color-hover: rgb(217, 175, 140);
  --divider-width: 2px;
  --dropdown-background: rgb(249, 242, 236);
  --dropdown-background-hover: rgb(191, 121, 64);
  --dynamic-outline-active-heading-background: rgb(249, 242, 236);
  --dynamic-outline-background: rgb(237, 226, 217);
  --dynamic-outline-background-accent: lime;
  --dynamic-outline-background-hover: rgb(217, 175, 140);
  --dynamic-outline-background-modifier-hover-lighter: lime;
  --dynamic-outline-color: rgb(110, 79, 53);
  --dynamic-outline-h1-text-color: rgb(110, 79, 53);
  --dynamic-outline-h2-text-color: rgb(110, 79, 53);
  --dynamic-outline-h3-text-color: rgb(110, 79, 53);
  --dynamic-outline-h4-text-color: rgb(110, 79, 53);
  --dynamic-outline-h5-text-color: rgb(110, 79, 53);
  --dynamic-outline-h6-text-color: rgb(110, 79, 53);
  --dynamic-outline-text-color: rgb(110, 79, 53);
  --embed-block-shadow-hover: 0 0 0 1px rgb(224, 205, 190), inset 0 0 0 1px rgb(224, 205, 190);
  --embed-border-end: 1px dotted;
  --embed-border-start: 0;
  --embed-padding: 0;
  --favorite-blue: rgb(15, 5, 107);
  --file-header-background: rgb(245, 239, 234);
  --file-header-background-focused: rgb(245, 239, 234);
  --file-header-border: 1.5px solid rgb(224, 205, 190);
  --file-header-font-size: 13.86667px;
  --file-header-justify: left;
  --file-line-width: 39em;
  --file-margins: 0.5em 32px;
  --flair-background: rgb(249, 242, 236);
  --flair-color: rgb(110, 79, 53);
  --floating-toc-background-color: rgb(245, 239, 234);
  --floating-toc-font-color: rgb(110, 79, 53);
  --floating-toc-header-background-color: rgb(245, 239, 234);
  --floating-toc-hover-color: rgb(249, 242, 236);
  --font-ui-large: 21.33333px;
  --font-ui-medium: 16px;
  --font-ui-small: 13.86667px;
  --font-ui-smaller: 12.8px;
  --footnote-divider-color: rgb(224, 205, 190);
  --footnote-divider-width: 1.5px;
  --footnote-gap: 0.5rem;
  --footnote-id-color: rgb(110, 79, 53);
  --footnote-id-color-no-occurrences: rgb(202, 171, 145);
  --footnote-id-delimiter: ")";
  --footnote-input-background-active: rgb(245, 239, 234);
  --footnote-line-height: 1.3;
  --footnote-size: 16px;
  --graph-line: rgb(110, 79, 53);
  --graph-node: rgb(165, 118, 80);
  --graph-node-focused: rgb(217, 175, 140);
  --graph-node-unresolved: rgb(202, 171, 145);
  --graph-text: rgb(110, 79, 53);
  --h1-color: rgb(110, 79, 53);
  --h2-color: rgb(110, 79, 53);
  --h3-color: rgb(110, 79, 53);
  --h4-color: rgb(110, 79, 53);
  --h5-color: rgb(110, 79, 53);
  --h5-line-height: 1.4em;
  --h6-color: rgb(110, 79, 53);
  --h6-line-height: 1.4em;
  --header-height: 2em;
  --heading-formatting: rgb(202, 171, 145);
  --heading-spacing: 0;
  --highlighted-folder-background: rgb(230, 215, 203);
  --highlighted-folder-color: yellow;
  --highlighted-folder-current-note-color: rgb(191, 121, 64);
  --highlighted-folder-font-weight: 400;
  --highlighted-folder-text-color: rgb(110, 79, 53);
  --highlighted-folder-title-background: rgb(217, 175, 140);
  --highlighted-folder-title-color: rgb(250, 244, 240);
  --highlighted-parent-folder-background: rgb(249, 242, 236);
  --highlighted-parent-folder-color: yellow;
  --highlighted-parent-folder-font-weight: 400;
  --highlighted-parent-folder-text-color: rgb(153, 97, 51);
  --hr-color: rgb(224, 205, 190);
  --icon-color: rgb(191, 121, 64);
  --icon-color-active: rgb(237, 226, 217);
  --icon-color-focused: rgb(110, 79, 53);
  --icon-color-hover: rgb(249, 242, 236);
  --indentation-guide-color: rgb(202, 171, 145);
  --indentation-guide-width: 1.5px;
  --indentation-guide-width-active: 1.5px;
  --inline-title-color: rgb(202, 171, 145);
  --inline-title-font: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --inline-title-line-height: 0em;
  --inline-title-size: 18px;
  --inline-title-weight: 400;
  --input-border-width: 1.5px;
  --input-date-separator: rgb(202, 171, 145);
  --input-placeholder-color: grey;
  --interactive-accent: rgb(217, 175, 140);
  --interactive-accent-hover: rgb(191, 121, 64);
  --interactive-accent-hsl: 27, 50%, 70%;
  --interactive-hover: rgb(191, 121, 64);
  --interactive-normal: rgb(249, 242, 236);
  --light-blue: rgb(167, 195, 226);
  --line-height-normal: 1.4em;
  --link-color: rgb(83, 132, 172);
  --link-color-hover: rgb(249, 242, 236);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(83, 132, 172);
  --link-external-color-hover: rgb(191, 121, 64);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #e93147;
  --link-unresolved-decoration-color: rgba(217, 175, 140, 0.3);
  --link-unresolved-filter: brightness(0.9);
  --list-bullet-size: 0.4em;
  --list-indent: 1.3em;
  --list-marker-color: rgb(110, 79, 53);
  --list-marker-color-collapsed: rgb(217, 175, 140);
  --list-marker-color-hover: rgb(165, 118, 80);
  --list-spacing: 0.05rem;
  --list-spacing-1: 0.3rem;
  --list-spacing-2: 0.2rem;
  --list-spacing-3: 0.1rem;
  --list-spacing-below: 0.8rem;
  --menu-background: rgb(237, 226, 217);
  --menu-border-color: rgb(217, 175, 140);
  --menu-border-width: 1.5px;
  --metadata-background: rgb(245, 239, 234);
  --metadata-border-color: rgb(224, 205, 190);
  --metadata-border-radius: 7px;
  --metadata-divider-color: rgb(224, 205, 190);
  --metadata-divider-width: 1;
  --metadata-input-background-active: rgb(245, 239, 234);
  --metadata-input-font-size: 13.86667px;
  --metadata-input-text-color: rgb(110, 79, 53);
  --metadata-label-background-active: rgb(245, 239, 234);
  --metadata-label-font-size: 13.86667px;
  --metadata-label-font-weight: 600;
  --metadata-label-text-color: rgb(165, 118, 80);
  --metadata-label-text-color-hover: rgb(165, 118, 80);
  --metadata-padding: 0;
  --metadata-property-background-active: rgb(191, 121, 64);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(110, 79, 53);
  --metadata-property-box-shadow-hover: 0 0 0 1.5px rgb(217, 175, 140);
  --metadata-property-padding: 0em 0em 0em 0.3em;
  --metadata-sidebar-input-font-size: 13.86667px;
  --metadata-sidebar-label-font-size: 13.86667px;
  --modal-background: rgb(245, 239, 234);
  --modal-border-color: rgb(110, 79, 53);
  --modal-border-width: 1.5px;
  --modal-height: 88vh;
  --modal-max-height: 98vh;
  --nav-collapse-icon-color: rgb(202, 171, 145);
  --nav-collapse-icon-color-collapsed: red;
  --nav-heading-color: rgb(110, 79, 53);
  --nav-heading-color-collapsed: rgb(202, 171, 145);
  --nav-heading-color-collapsed-hover: rgb(165, 118, 80);
  --nav-heading-color-hover: rgb(110, 79, 53);
  --nav-indentation-guide-color: rgb(202, 171, 145);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-active: rgb(217, 175, 140);
  --nav-item-background-hover: rgb(191, 121, 64);
  --nav-item-background-selected: rgb(249, 242, 236);
  --nav-item-color: rgb(110, 79, 53);
  --nav-item-color-active: rgb(250, 244, 240);
  --nav-item-color-highlighted: rgb(217, 175, 140);
  --nav-item-color-hover: rgb(249, 242, 236);
  --nav-item-color-selected: rgb(153, 97, 51);
  --nav-item-padding: 4px
									8px
									4px
									24px;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px;
  --nav-item-size: 13.86667px;
  --nav-tag-color: rgb(202, 171, 145);
  --nav-tag-color-active: rgb(165, 118, 80);
  --nav-tag-color-hover: rgb(165, 118, 80);
  --neutral-100: rgb(255, 255, 255);
  --obsidian-violet: rgb(138, 92, 245);
  --p-spacing: 0.5em;
  --pdf-background: rgb(245, 239, 234);
  --pdf-page-background: rgb(245, 239, 234);
  --pdf-sidebar-background: rgb(245, 239, 234);
  --pill-background-hover: rgb(191, 121, 64);
  --pill-border-color: rgb(224, 205, 190);
  --pill-border-color-hover: rgb(217, 175, 140);
  --pill-border-width: 1.5px;
  --pill-color: rgb(165, 118, 80);
  --pill-color-hover: rgb(249, 242, 236);
  --pill-color-remove: rgb(217, 175, 140);
  --pill-color-remove-hover: rgb(249, 242, 236);
  --popover-font-size: 14.4px;
  --popover-height: 50vh;
  --popover-width: 46rem;
  --prompt-background: rgb(245, 239, 234);
  --prompt-border-color: rgb(110, 79, 53);
  --prompt-border-width: 1.5px;
  --prompt-max-height: 80vh;
  --raised-background: color-mix(in srgb, rgb(245, 239, 234) 65%, transparent) linear-gradient(rgb(245, 239, 234), color-mix(in srgb, rgb(245, 239, 234) 65%, transparent));
  --ribbon-background: rgb(237, 226, 217);
  --ribbon-background-collapsed: rgb(245, 239, 234);
  --royal-blue: rgb(0, 0, 163);
  --search-clear-button-color: rgb(165, 118, 80);
  --search-icon-color: rgb(191, 121, 64);
  --search-result-background: rgb(245, 239, 234);
  --setting-group-heading-color: rgb(110, 79, 53);
  --setting-group-heading-size: 16px;
  --setting-items-border-color: rgb(224, 205, 190);
  --sky-blue: rgb(36, 211, 255);
  --slider-thumb-border-color: rgb(217, 175, 140);
  --slider-thumb-border-width: 1.5px;
  --slider-track-background: rgb(224, 205, 190);
  --solarized-base0: rgb(131, 148, 149);
  --solarized-base00: rgb(100, 122, 130);
  --solarized-base01: rgb(88, 110, 116);
  --solarized-base02: rgb(7, 53, 65);
  --solarized-base03: rgb(0, 45, 56);
  --solarized-base1: rgb(146, 160, 160);
  --solarized-base2: rgb(237, 231, 212);
  --solarized-base3: rgb(253, 246, 226);
  --solarized-blue: rgb(39, 139, 211);
  --solarized-cyan: rgb(42, 162, 152);
  --solarized-green: rgb(133, 153, 0);
  --solarized-magenta: rgb(211, 54, 130);
  --solarized-orange: rgb(202, 76, 22);
  --solarized-red: rgb(220, 49, 46);
  --solarized-violet: rgb(109, 114, 197);
  --solarized-yellow: rgb(179, 134, 0);
  --stabilo-bleu-clair: rgb(186, 228, 243);
  --stabilo-bleu-foncé: rgb(56, 173, 220);
  --stabilo-jaune-clair: rgb(251, 237, 182);
  --stabilo-jaune-foncé: rgb(241, 232, 65);
  --stabilo-orange-clair: rgb(255, 191, 128);
  --stabilo-orange-foncé: rgb(243, 150, 57);
  --stabilo-rose-clair: rgb(244, 164, 181);
  --stabilo-rose-foncé: rgb(233, 83, 103);
  --stabilo-vert-clair: rgb(176, 232, 200);
  --stabilo-vert-foncé: rgb(1, 193, 132);
  --stabilo-violet-clair: rgb(173, 137, 190);
  --stabilo-violet-foncé: rgb(215, 45, 130);
  --status-bar-background: rgb(249, 242, 236);
  --status-bar-border-color: rgb(217, 175, 140);
  --status-bar-border-width: 1px;
  --status-bar-font-size: 13.86667px;
  --status-bar-radius: 4px;
  --status-bar-text-color: rgb(153, 97, 51);
  --suggestion-background: rgb(245, 239, 234);
  --tab-background-active: rgb(245, 239, 234);
  --tab-container-background: rgb(230, 215, 203);
  --tab-divider-color: rgb(191, 121, 64);
  --tab-font-size: 13.86667px;
  --tab-outline-color: rgb(224, 205, 190);
  --tab-stacked-font-size: 13.86667px;
  --tab-stacked-header-width: 2em;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: rgb(237, 226, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(237, 226, 217), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(217, 175, 140);
  --tab-text-color: rgb(165, 118, 80);
  --tab-text-color-active: rgb(165, 118, 80);
  --tab-text-color-focused: rgb(165, 118, 80);
  --tab-text-color-focused-active: rgb(165, 118, 80);
  --tab-text-color-focused-active-current: rgb(191, 121, 64);
  --tab-text-color-focused-highlighted: rgb(217, 175, 140);
  --table-add-button-border-color: rgb(224, 205, 190);
  --table-background: rgb(240, 231, 224);
  --table-border-color: rgb(110, 79, 53);
  --table-drag-handle-background-active: rgb(217, 175, 140);
  --table-drag-handle-color: rgb(202, 171, 145);
  --table-drag-handle-color-active: rgb(250, 244, 240);
  --table-header-background: rgb(242, 234, 227);
  --table-header-background-hover: rgb(242, 234, 227);
  --table-header-border-color: rgb(110, 79, 53);
  --table-header-color: rgb(110, 79, 53);
  --table-header-size: 16.2px;
  --table-row-alt-background: rgb(247, 242, 238);
  --table-row-alt-background-hover: rgb(247, 242, 238);
  --table-row-background-hover: rgb(240, 231, 224);
  --table-selection: rgba(217, 175, 140, 0.1);
  --table-selection-border-color: rgb(217, 175, 140);
  --table-text-size: 16.2px;
  --tag-background: rgb(217, 175, 140);
  --tag-background-hover: rgb(191, 121, 64);
  --tag-border-color: rgba(217, 175, 140, 0.15);
  --tag-border-color-hover: rgba(217, 175, 140, 0.15);
  --tag-color: rgb(250, 244, 240);
  --tag-color-hover: rgb(249, 242, 236);
  --text-accent: rgb(217, 175, 140);
  --text-accent-hover: rgb(249, 242, 236);
  --text-faint: rgb(202, 171, 145);
  --text-muted: rgb(165, 118, 80);
  --text-normal: rgb(110, 79, 53);
  --text-on-accent: rgb(250, 244, 240);
  --text-on-accent-inverted: rgb(191, 121, 64);
  --text-selection: rgba(138, 98, 66, 0.2);
  --titlebar-background: #333;
  --titlebar-background-focused: rgb(230, 215, 203);
  --titlebar-border-color: rgb(224, 205, 190);
  --titlebar-text-color: rgb(165, 118, 80);
  --titlebar-text-color-focused: rgb(110, 79, 53);
  --toggle-thumb-color: rgb(237, 226, 217);
  --traffic-lights-offset-x: 2em;
  --traffic-lights-offset-y: 2em;
  --vault-profile-color: rgb(191, 121, 64);
  --vault-profile-color-hover: rgb(249, 242, 236);
  --vault-profile-font-size: 21.33333px;
  --vault-profile-font-weight: 700;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 215, 203);
  color: rgb(110, 79, 53);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 226, 217);
  color: rgb(110, 79, 53);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 205, 190);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 215, 203);
  border-left-color: rgb(224, 205, 190);
  color: rgb(110, 79, 53);
}

body div#quartz-root {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
}`,
    typography: `body .page article p > b, b {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .page article p > em, em {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .page article p > i, i {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .page article p > strong, strong {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .text-highlight {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body del {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: line-through rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body p {
  color: rgb(165, 118, 80);
  outline: rgb(165, 118, 80) none 0px;
  text-decoration: rgb(165, 118, 80);
  text-decoration-color: rgb(165, 118, 80);
}`,
    links: `body a.external, footer a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration: rgb(83, 132, 172);
  text-decoration-color: rgb(83, 132, 172);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration: rgb(83, 132, 172);
  text-decoration-color: rgb(83, 132, 172);
}

body a.internal.broken {
  color: rgb(233, 49, 71);
  filter: brightness(0.9);
  outline: rgb(233, 49, 71) none 0px;
  text-decoration: rgba(217, 175, 140, 0.3);
  text-decoration-color: rgba(217, 175, 140, 0.3);
}`,
    lists: `body dd {
  color: rgb(110, 79, 53);
}

body dt {
  color: rgb(110, 79, 53);
}

body ol > li {
  color: rgb(110, 79, 53);
}

body ol.overflow {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body ul > li {
  color: rgb(110, 79, 53);
}

body ul.overflow {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(202, 171, 145);
  text-decoration: rgb(202, 171, 145);
}

body blockquote {
  background-color: rgb(252, 250, 248);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body table {
  color: rgb(110, 79, 53);
  margin-top: 8px;
  width: 227.453px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(240, 231, 224);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(247, 242, 238);
}

body td {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body th {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body tr {
  background-color: rgb(242, 234, 227);
}`,
    code: `body code {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

body pre > code, pre:has(> code) {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body figcaption {
  color: rgb(110, 79, 53);
}

body figure {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body img {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body video {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
}

body .footnotes {
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .transclude {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-left-width: 0px;
  border-right-color: rgb(110, 79, 53);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
}

body .transclude-inner {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-left-width: 0px;
  border-right-color: rgb(110, 79, 53);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(202, 171, 145);
  text-decoration: rgb(202, 171, 145);
  text-decoration-color: rgb(202, 171, 145);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  margin-left: -20.4px;
  width: 13.5938px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='*'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='-'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='/'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='>'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='?'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='I'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='S'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='b'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='c'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='d'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='f'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='i'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='k'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='l'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='p'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='u'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='w'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}`,
    callouts: `body .callout > .callout-content {
  padding-left: 16px;
  padding-right: 16px;
}

body .callout[data-callout="abstract"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(224, 205, 190);
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-top-color: rgb(224, 205, 190);
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > * {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(191, 121, 64);
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 226, 217);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(191, 121, 64);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(191, 121, 64);
  color: rgb(110, 79, 53);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(217, 175, 140);
  border-bottom-color: rgba(217, 175, 140, 0.15);
  border-bottom-left-radius: 27.7333px;
  border-bottom-right-radius: 27.7333px;
  border-left-color: rgba(217, 175, 140, 0.15);
  border-right-color: rgba(217, 175, 140, 0.15);
  border-top-color: rgba(217, 175, 140, 0.15);
  border-top-left-radius: 27.7333px;
  border-top-right-radius: 27.7333px;
}

body a.internal.tag-link::before {
  color: rgb(250, 244, 240);
}

body h1 {
  color: rgb(110, 79, 53);
}

body h2 {
  color: rgb(110, 79, 53);
}

body h2.page-title, h2.page-title a {
  color: rgb(202, 171, 145);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body h3 {
  color: rgb(110, 79, 53);
}

body h4 {
  color: rgb(110, 79, 53);
}

body h5 {
  color: rgb(110, 79, 53);
}

body h6 {
  color: rgb(110, 79, 53);
}

body hr {
  border-bottom-color: rgb(224, 205, 190);
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(217, 175, 140);
  border-bottom-color: rgb(250, 244, 240);
  border-left-color: rgb(250, 244, 240);
  border-right-color: rgb(250, 244, 240);
  border-top-color: rgb(250, 244, 240);
  color: rgb(250, 244, 240);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(191, 121, 64);
  border-left-color: rgb(191, 121, 64);
  border-right-color: rgb(191, 121, 64);
  border-top-color: rgb(191, 121, 64);
  color: rgb(191, 121, 64);
}`,
    footer: `body footer {
  background-color: rgb(249, 242, 236);
  border-bottom-color: rgb(217, 175, 140);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(217, 175, 140);
  border-right-color: rgb(217, 175, 140);
  border-right-width: 1px;
  border-top-color: rgb(217, 175, 140);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(153, 97, 51);
}

body footer ul li a {
  color: rgb(153, 97, 51);
  text-decoration: rgb(153, 97, 51);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(110, 79, 53);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 79, 53);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body li.section-li > .section .meta {
  color: rgb(110, 79, 53);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body ul.section-ul {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(191, 121, 64);
  border-left-color: rgb(191, 121, 64);
  border-right-color: rgb(191, 121, 64);
  border-top-color: rgb(191, 121, 64);
  color: rgb(191, 121, 64);
}

body .darkmode svg {
  color: rgb(191, 121, 64);
  stroke: rgb(191, 121, 64);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

body .breadcrumb-element p {
  color: rgb(202, 171, 145);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .metadata {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(224, 205, 190);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-top-color: rgb(224, 205, 190);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(165, 118, 80);
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

body .navigation-progress {
  background-color: rgb(249, 242, 236);
}

body .page-header h2.page-title {
  color: rgb(110, 79, 53);
}

body abbr {
  color: rgb(110, 79, 53);
  text-decoration: underline dotted rgb(110, 79, 53);
}

body details {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body input[type=text] {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

body kbd {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body sub {
  color: rgb(110, 79, 53);
}

body summary {
  color: rgb(110, 79, 53);
}

body sup {
  color: rgb(110, 79, 53);
}`,
  },
};
