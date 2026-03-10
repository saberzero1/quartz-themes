import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sqdthone",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-code", "source-sans-pro"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(98, 119, 188) !important;
  --background-modifier-error: 346, 50%, 36% !important;
  --background-modifier-error-hover: 346, 50%, 36% !important;
  --background-modifier-success: 108, 40%, 42% !important;
  --background-primary: rgb(38, 34, 38) !important;
  --background-primary-alt: rgb(49, 43, 49) !important;
  --background-secondary: rgb(49, 43, 49) !important;
  --background-secondary-alt: rgb(59, 53, 59) !important;
  --bases-cards-background: rgb(38, 34, 38) !important;
  --bases-cards-cover-background: rgb(49, 43, 49) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(98, 119, 188) !important;
  --bases-embed-border-color: rgb(98, 119, 188) !important;
  --bases-group-heading-property-color: rgb(59, 176, 137) !important;
  --bases-table-border-color: rgb(98, 119, 188) !important;
  --bases-table-cell-background-active: rgb(38, 34, 38) !important;
  --bases-table-cell-background-disabled: rgb(49, 43, 49) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(98, 119, 188) !important;
  --bases-table-group-background: rgb(49, 43, 49) !important;
  --bases-table-header-background: rgb(38, 34, 38) !important;
  --bases-table-header-color: rgb(59, 176, 137) !important;
  --bases-table-summary-background: rgb(38, 34, 38) !important;
  --blockquote-border-color: rgb(98, 119, 188) !important;
  --bodyFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(38, 34, 38) !important;
  --canvas-card-label-color: rgb(79, 196, 173) !important;
  --caret-color: rgb(48, 145, 113) !important;
  --checkbox-border-color: rgb(79, 196, 173) !important;
  --checkbox-border-color-hover: rgb(59, 176, 137) !important;
  --checkbox-color: rgb(98, 119, 188) !important;
  --checkbox-marker-color: rgb(38, 34, 38) !important;
  --checklist-done-color: rgb(59, 176, 137) !important;
  --code-background: rgb(49, 43, 49) !important;
  --code-border-color: rgb(98, 119, 188) !important;
  --code-comment: rgb(79, 196, 173) !important;
  --code-function: 45, 50%, 44% !important;
  --code-important: 21, 50%, 52% !important;
  --code-keyword: 316, 50%, 80% !important;
  --code-normal: rgb(48, 145, 113) !important;
  --code-operator: 346, 50%, 36% !important;
  --code-property: 189, 40%, 50% !important;
  --code-punctuation: rgb(59, 176, 137) !important;
  --code-string: 108, 40%, 42% !important;
  --code-tag: 346, 50%, 36% !important;
  --code-value: 270, 40%, 42% !important;
  --codeFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(79, 196, 173) !important;
  --color-alternate: 316, 50%, 80% !important;
  --color-base-0: 300,  6%, 10% !important;
  --color-base-1: 300,  6%, 14% !important;
  --color-base-2: 300,  6%, 18% !important;
  --color-base-3: 300,  6%, 22% !important;
  --color-base-4: 300,  6%, 26% !important;
  --color-base-5: 300,  6%, 30% !important;
  --color-black: 300,  6%, 22% !important;
  --color-blue: 226, 40%, 56% !important;
  --color-caution: 45, 50%, 44% !important;
  --color-checklist-empty: 346, 50%, 36% !important;
  --color-checklist-empty-border: 346, 50%, 36% !important;
  --color-checklist-full: 108, 40%, 42% !important;
  --color-checklist-full-border: 108, 40%, 42% !important;
  --color-code-comment: 168, 50%, 54% !important;
  --color-code-function: 45, 50%, 44% !important;
  --color-code-important: 21, 50%, 52% !important;
  --color-code-keyword: 316, 50%, 80% !important;
  --color-code-normal: 160, 50%, 46% !important;
  --color-code-property: 226, 40%, 56% !important;
  --color-code-punctuation: 160, 50%, 46% !important;
  --color-code-string: 108, 40%, 42% !important;
  --color-code-tag: 346, 50%, 36% !important;
  --color-code-value: 270, 40%, 42% !important;
  --color-confirmed: 108, 40%, 42% !important;
  --color-content: 160, 50%, 46% !important;
  --color-cyan: 189, 40%, 50% !important;
  --color-green: 108, 40%, 42% !important;
  --color-horizontal-rule: 316, 50%, 80% !important;
  --color-hovered: 270, 40%, 42% !important;
  --color-interactable: 226, 40%, 56% !important;
  --color-list-bullets: 316, 50%, 80% !important;
  --color-list-indentation-indicator: magenta !important;
  --color-list-indentation-indicator-hover: 316, 50%, 80% !important;
  --color-orange: 21, 50%, 52% !important;
  --color-pink: 316, 50%, 80% !important;
  --color-purple: 270, 40%, 42% !important;
  --color-red: 346, 50%, 36% !important;
  --color-selected: 21, 50%, 52% !important;
  --color-stop: 346, 50%, 36% !important;
  --color-tag: 45, 50%, 44% !important;
  --color-tag-hover: 45, 50%, 44% !important;
  --color-teal: 160, 50%, 46% !important;
  --color-text-bold: 189, 40%, 50% !important;
  --color-text-faint: 168, 50%, 54% !important;
  --color-text-h1: 21, 50%, 52% !important;
  --color-text-h2: 21, 50%, 52% !important;
  --color-text-h3: 226, 40%, 44% !important;
  --color-text-h4: 226, 40%, 44% !important;
  --color-text-h5: 226, 40%, 44% !important;
  --color-text-h6: 226, 40%, 44% !important;
  --color-text-highlight: 15, 20%, 84% !important;
  --color-text-highlight-active-background: 21, 50%, 52% !important;
  --color-text-highlight-background: 45, 50%, 44% !important;
  --color-text-italic: 108, 40%, 42% !important;
  --color-text-muted: 160, 50%, 46% !important;
  --color-text-normal: 160, 50%, 38% !important;
  --color-text-strikethrough: 346, 50%, 36% !important;
  --color-text-title: 316, 50%, 80% !important;
  --color-white: 15, 20%, 84% !important;
  --color-yellow: 45, 50%, 44% !important;
  --crimson0: 346, 50%, 40% !important;
  --crimson1: 346, 50%, 36% !important;
  --crimson2: 346, 50%, 32% !important;
  --crimson3: 346, 50%, 28% !important;
  --crimson4: 346, 50%, 24% !important;
  --crimson5: 346, 50%, 20% !important;
  --dark: rgb(48, 145, 113) !important;
  --darkgray: rgb(48, 145, 113) !important;
  --day0: 15, 20%, 96% !important;
  --day1: 15, 20%, 92% !important;
  --day2: 15, 20%, 88% !important;
  --day3: 15, 20%, 84% !important;
  --day4: 15, 20%, 80% !important;
  --day5: 15, 20%, 76% !important;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif !important;
  --divider-color: rgb(98, 119, 188) !important;
  --divider-color-hover: rgb(98, 119, 188) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(98, 119, 188), inset 0 0 0 1px rgb(98, 119, 188) !important;
  --embed-border-start: 2px solid rgb(98, 119, 188) !important;
  --file-header-background: rgb(38, 34, 38) !important;
  --file-header-background-focused: rgb(38, 34, 38) !important;
  --file-header-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: rgb(48, 145, 113) !important;
  --font-headings: 'Tahoma', serif !important;
  --font-interface: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif !important;
  --footnote-divider-color: rgb(98, 119, 188) !important;
  --footnote-id-color: rgb(59, 176, 137) !important;
  --footnote-id-color-no-occurrences: rgb(79, 196, 173) !important;
  --frost0: 226, 40%, 44% !important;
  --frost1: 226, 40%, 48% !important;
  --frost2: 226, 40%, 52% !important;
  --frost3: 226, 40%, 56% !important;
  --frost4: 226, 40%, 60% !important;
  --frost5: 226, 40%, 64% !important;
  --graph-node: rgb(59, 176, 137) !important;
  --graph-node-attachment: 45, 50%, 44% !important;
  --graph-node-tag: 108, 40%, 42% !important;
  --graph-node-unresolved: rgb(79, 196, 173) !important;
  --graph-text: rgb(48, 145, 113) !important;
  --gray: rgb(59, 176, 137) !important;
  --green0: 108, 40%, 34% !important;
  --green1: 108, 40%, 38% !important;
  --green2: 108, 40%, 42% !important;
  --green3: 108, 40%, 46% !important;
  --green4: 108, 40%, 50% !important;
  --green5: 108, 40%, 54% !important;
  --headerFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(79, 196, 173) !important;
  --highlight: rgb(168, 140, 56) !important;
  --hr-color: rgb(98, 119, 188) !important;
  --icon-color: rgb(59, 176, 137) !important;
  --icon-color-focused: rgb(48, 145, 113) !important;
  --icon-color-hover: rgb(59, 176, 137) !important;
  --indigo0: 270, 40%, 30% !important;
  --indigo1: 270, 40%, 34% !important;
  --indigo2: 270, 40%, 38% !important;
  --indigo3: 270, 40%, 42% !important;
  --indigo4: 270, 40%, 46% !important;
  --indigo5: 270, 40%, 50% !important;
  --input-date-separator: rgb(79, 196, 173) !important;
  --input-placeholder-color: rgb(79, 196, 173) !important;
  --interactive-accent: rgb(98, 119, 188) !important;
  --letterspacing-text-headers: 1.2px !important;
  --letterspacing-text-p: 1px !important;
  --light: rgb(38, 34, 38) !important;
  --lightgray: rgb(49, 43, 49) !important;
  --link-color-hover: rgb(107, 64, 150) !important;
  --link-external-color-hover: rgb(107, 64, 150) !important;
  --list-marker-color: rgb(79, 196, 173) !important;
  --list-marker-color-hover: rgb(59, 176, 137) !important;
  --menu-background: rgb(49, 43, 49) !important;
  --metadata-border-color: rgb(98, 119, 188) !important;
  --metadata-divider-color: rgb(98, 119, 188) !important;
  --metadata-input-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(48, 145, 113) !important;
  --metadata-label-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(59, 176, 137) !important;
  --metadata-label-text-color-hover: rgb(59, 176, 137) !important;
  --modal-background: rgb(38, 34, 38) !important;
  --moonstone0: 189, 40%, 34% !important;
  --moonstone1: 189, 40%, 38% !important;
  --moonstone2: 189, 40%, 42% !important;
  --moonstone3: 189, 40%, 46% !important;
  --moonstone4: 189, 40%, 50% !important;
  --moonstone5: 189, 40%, 54% !important;
  --nav-collapse-icon-color: rgb(79, 196, 173) !important;
  --nav-collapse-icon-color-collapsed: rgb(79, 196, 173) !important;
  --nav-heading-color: rgb(48, 145, 113) !important;
  --nav-heading-color-collapsed: rgb(79, 196, 173) !important;
  --nav-heading-color-collapsed-hover: rgb(59, 176, 137) !important;
  --nav-heading-color-hover: rgb(48, 145, 113) !important;
  --nav-item-color: rgb(59, 176, 137) !important;
  --nav-item-color-active: rgb(48, 145, 113) !important;
  --nav-item-color-hover: rgb(48, 145, 113) !important;
  --nav-item-color-selected: rgb(48, 145, 113) !important;
  --nav-tag-color: rgb(79, 196, 173) !important;
  --nav-tag-color-active: rgb(59, 176, 137) !important;
  --nav-tag-color-hover: rgb(59, 176, 137) !important;
  --night0: 300,  6%, 10% !important;
  --night1: 300,  6%, 14% !important;
  --night2: 300,  6%, 18% !important;
  --night3: 300,  6%, 22% !important;
  --night4: 300,  6%, 26% !important;
  --night5: 300,  6%, 30% !important;
  --pdf-background: rgb(38, 34, 38) !important;
  --pdf-page-background: rgb(38, 34, 38) !important;
  --pdf-shadow: 0 0 0 1px rgb(98, 119, 188) !important;
  --pdf-sidebar-background: rgb(38, 34, 38) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(98, 119, 188) !important;
  --peach0: 22, 50%, 40% !important;
  --peach1: 22, 50%, 44% !important;
  --peach2: 21, 50%, 48% !important;
  --peach3: 21, 50%, 52% !important;
  --peach4: 21, 50%, 56% !important;
  --peach5: 22, 50%, 60% !important;
  --pill-border-color: rgb(98, 119, 188) !important;
  --pill-color: rgb(59, 176, 137) !important;
  --pill-color-hover: rgb(48, 145, 113) !important;
  --pill-color-remove: rgb(79, 196, 173) !important;
  --pink0: 316, 50%, 60% !important;
  --pink1: 316, 50%, 64% !important;
  --pink2: 316, 50%, 68% !important;
  --pink3: 316, 50%, 72% !important;
  --pink4: 315, 50%, 76% !important;
  --pink5: 316, 50%, 80% !important;
  --prompt-background: rgb(38, 34, 38) !important;
  --ribbon-background: rgb(49, 43, 49) !important;
  --ribbon-background-collapsed: rgb(38, 34, 38) !important;
  --scrollbar-active-thumb-bg: rgb(107, 64, 150) !important;
  --search-clear-button-color: rgb(59, 176, 137) !important;
  --search-icon-color: rgb(59, 176, 137) !important;
  --search-result-background: rgb(38, 34, 38) !important;
  --secondary: rgb(98, 119, 188) !important;
  --setting-group-heading-color: rgb(48, 145, 113) !important;
  --setting-items-background: rgb(49, 43, 49) !important;
  --setting-items-border-color: rgb(98, 119, 188) !important;
  --size-icon: 15px !important;
  --size-text-h1: 3em !important;
  --size-text-h2: 30px !important;
  --size-text-h3: 27px !important;
  --size-text-h4: 24px !important;
  --size-text-h5: 21px !important;
  --size-text-h6: 18px !important;
  --size-text-p: 15px !important;
  --size-text-title: 5em !important;
  --slider-track-background: rgb(98, 119, 188) !important;
  --status-bar-background: rgb(49, 43, 49) !important;
  --status-bar-border-color: rgb(98, 119, 188) !important;
  --status-bar-text-color: rgb(59, 176, 137) !important;
  --suggestion-background: rgb(38, 34, 38) !important;
  --sync-avatar-color-1: 346, 50%, 36% !important;
  --sync-avatar-color-2: 21, 50%, 52% !important;
  --sync-avatar-color-3: 45, 50%, 44% !important;
  --sync-avatar-color-4: 108, 40%, 42% !important;
  --sync-avatar-color-5: 189, 40%, 50% !important;
  --sync-avatar-color-6: 226, 40%, 56% !important;
  --sync-avatar-color-7: 270, 40%, 42% !important;
  --sync-avatar-color-8: 316, 50%, 80% !important;
  --tab-background-active: rgb(38, 34, 38) !important;
  --tab-container-background: rgb(49, 43, 49) !important;
  --tab-outline-color: rgb(98, 119, 188) !important;
  --tab-switcher-background: rgb(49, 43, 49) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(49, 43, 49), transparent) !important;
  --tab-text-color: rgb(79, 196, 173) !important;
  --tab-text-color-active: rgb(107, 64, 150) !important;
  --tab-text-color-focused: rgb(59, 176, 137) !important;
  --tab-text-color-focused-active: rgb(59, 176, 137) !important;
  --tab-text-color-focused-active-current: rgb(194, 114, 71) !important;
  --table-add-button-border-color: rgb(98, 119, 188) !important;
  --table-border-color: rgb(98, 119, 188) !important;
  --table-drag-handle-background-active: rgb(98, 119, 188) !important;
  --table-drag-handle-color: rgb(79, 196, 173) !important;
  --table-header-border-color: rgb(98, 119, 188) !important;
  --table-header-color: rgb(48, 145, 113) !important;
  --table-selection-border-color: rgb(98, 119, 188) !important;
  --teal0: 160, 50%, 34% !important;
  --teal1: 160, 50%, 38% !important;
  --teal2: 160, 50%, 42% !important;
  --teal3: 160, 50%, 46% !important;
  --teal4: 160, 50%, 50% !important;
  --teal5: 168, 50%, 54% !important;
  --tertiary: rgb(107, 64, 150) !important;
  --text-accent-hover: rgb(107, 64, 150) !important;
  --text-error: 346, 50%, 36% !important;
  --text-faint: rgb(79, 196, 173) !important;
  --text-highlight-bg: rgb(168, 140, 56) !important;
  --text-highlight-bg-active: rgb(194, 114, 71) !important;
  --text-muted: rgb(59, 176, 137) !important;
  --text-normal: rgb(48, 145, 113) !important;
  --text-selection: rgb(222, 210, 206) !important;
  --text-success: 108, 40%, 42% !important;
  --text-warning: 21, 50%, 52% !important;
  --textHighlight: rgb(168, 140, 56) !important;
  --titleFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(59, 53, 59) !important;
  --titlebar-background-focused: rgb(49, 43, 49) !important;
  --titlebar-border-color: rgb(98, 119, 188) !important;
  --titlebar-text-color: rgb(59, 176, 137) !important;
  --titlebar-text-color-focused: rgb(48, 145, 113) !important;
  --vault-profile-color: rgb(48, 145, 113) !important;
  --vault-profile-color-hover: rgb(48, 145, 113) !important;
  --weight-bold: 700 !important;
  --weight-extrabold: 800 !important;
  --weight-extralight: 200 !important;
  --weight-light: 300 !important;
  --weight-maxbold: 900 !important;
  --weight-medium: 500 !important;
  --weight-normal: 400 !important;
  --weight-semibold: 600 !important;
  --weight-thin: 100 !important;
  --yellow0: 45, 50%, 44% !important;
  --yellow1: 45, 50%, 48% !important;
  --yellow2: 45, 50%, 52% !important;
  --yellow3: 45, 50%, 56% !important;
  --yellow4: 45, 50%, 60% !important;
  --yellow5: 45, 50%, 64% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 43, 49);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(38, 34, 38);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 43, 49);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 43, 49);
  border-left-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(38, 34, 38);
  color: rgb(48, 145, 113);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(77, 163, 179);
  outline: rgb(77, 163, 179) none 0px;
  text-decoration: rgb(77, 163, 179);
  text-decoration-color: rgb(77, 163, 179);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(77, 163, 179);
  outline: rgb(77, 163, 179) none 0px;
  text-decoration: rgb(77, 163, 179);
  text-decoration-color: rgb(77, 163, 179);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(194, 114, 71);
  color: rgb(222, 210, 206);
  outline: rgb(222, 210, 206) none 0px;
  text-decoration: rgb(222, 210, 206);
  text-decoration-color: rgb(222, 210, 206);
}

html[saved-theme="dark"] body del {
  color: rgb(138, 46, 67);
  outline: rgb(138, 46, 67) none 0px;
  text-decoration: line-through rgb(138, 46, 67);
  text-decoration-color: rgb(138, 46, 67);
}

html[saved-theme="dark"] body p {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(59, 176, 137) none 0px;
  text-decoration: rgb(59, 176, 137);
  text-decoration-color: rgb(59, 176, 137);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(230, 179, 216);
  outline: rgb(230, 179, 216) none 0px;
  text-decoration: underline rgb(230, 179, 216);
  text-decoration-color: rgb(230, 179, 216);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(230, 179, 216);
  outline: rgb(230, 179, 216) none 0px;
  text-decoration: underline rgb(230, 179, 216);
  text-decoration-color: rgb(230, 179, 216);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 46, 67);
  outline: rgb(138, 46, 67) none 0px;
  text-decoration: underline rgb(138, 46, 67);
  text-decoration-color: rgb(138, 46, 67);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body dt {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(79, 196, 173);
  text-decoration: rgb(79, 196, 173);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(168, 140, 56, 0.1);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(168, 140, 56);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(168, 140, 56);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(168, 140, 56);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgb(168, 140, 56);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(48, 145, 113);
  width: 277.219px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(49, 43, 49);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(59, 53, 59);
  border-bottom-width: 0px;
  border-left-color: rgb(48, 145, 113);
  border-left-width: 0px;
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  border-top-width: 0px;
  color: rgb(48, 145, 113);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(48, 145, 113);
  border-left-width: 0px;
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(98, 119, 188);
  border-top-width: 0px;
  color: rgb(48, 145, 113);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="dark"] body thead {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(59, 176, 137);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(59, 176, 137);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(48, 145, 113);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(59, 176, 137);
  text-decoration: line-through rgb(59, 176, 137);
  text-decoration-color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(230, 179, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(230, 179, 216);
  border-right-color: rgb(230, 179, 216);
  border-top-color: rgb(230, 179, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.3s;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(79, 196, 173);
  text-decoration: line-through 1px rgb(79, 196, 173);
  text-decoration-color: rgb(79, 196, 173);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(59, 53, 59);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(48, 145, 113);
  outline: rgb(48, 145, 113) none 0px;
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(49, 43, 49);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(38, 34, 38);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(38, 34, 38);
}

html[saved-theme="dark"] body h1 {
  color: rgb(194, 114, 71);
  font-family: Tahoma, serif;
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(194, 114, 71);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(230, 179, 216);
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="dark"] body h3 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(230, 179, 216);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(27, 24, 27);
  border-bottom-color: rgb(49, 43, 49);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 43, 49);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(49, 43, 49);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(49, 43, 49);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(194, 114, 71);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 900;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(98, 119, 188);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 176, 137);
  text-decoration: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 176, 137);
  text-decoration: rgb(59, 176, 137);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(98, 119, 188);
  stroke: rgb(98, 119, 188);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(79, 196, 173);
  border-left-color: rgb(79, 196, 173);
  border-right-color: rgb(79, 196, 173);
  border-top-color: rgb(79, 196, 173);
  color: rgb(79, 196, 173);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(79, 196, 173);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(59, 53, 59);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(48, 145, 113);
  text-decoration: underline dotted rgb(48, 145, 113);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body sub {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body summary {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body sup {
  color: rgb(48, 145, 113);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(84, 106, 182) !important;
  --background-modifier-error: 346, 50%, 32% !important;
  --background-modifier-error-hover: 346, 50%, 32% !important;
  --background-modifier-success: 108, 40%, 42% !important;
  --background-primary: rgb(239, 233, 231) !important;
  --background-primary-alt: rgb(231, 221, 218) !important;
  --background-secondary: rgb(231, 221, 218) !important;
  --background-secondary-alt: rgb(222, 210, 206) !important;
  --bases-cards-background: rgb(239, 233, 231) !important;
  --bases-cards-cover-background: rgb(231, 221, 218) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(84, 106, 182) !important;
  --bases-embed-border-color: rgb(84, 106, 182) !important;
  --bases-group-heading-property-color: rgb(59, 53, 59) !important;
  --bases-table-border-color: rgb(84, 106, 182) !important;
  --bases-table-cell-background-active: rgb(239, 233, 231) !important;
  --bases-table-cell-background-disabled: rgb(231, 221, 218) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(84, 106, 182) !important;
  --bases-table-group-background: rgb(231, 221, 218) !important;
  --bases-table-header-background: rgb(239, 233, 231) !important;
  --bases-table-header-color: rgb(59, 53, 59) !important;
  --bases-table-summary-background: rgb(239, 233, 231) !important;
  --blockquote-border-color: rgb(84, 106, 182) !important;
  --blur-background: color-mix(in srgb, rgb(239, 233, 231) 65%, transparent) linear-gradient(rgb(239, 233, 231), color-mix(in srgb, rgb(239, 233, 231) 65%, transparent)) !important;
  --bodyFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(239, 233, 231) !important;
  --canvas-card-label-color: rgb(81, 72, 81) !important;
  --caret-color: rgb(38, 34, 38) !important;
  --checkbox-border-color: rgb(81, 72, 81) !important;
  --checkbox-border-color-hover: rgb(59, 53, 59) !important;
  --checkbox-color: rgb(84, 106, 182) !important;
  --checkbox-color-hover: rgb(97, 58, 136) !important;
  --checkbox-marker-color: rgb(239, 233, 231) !important;
  --checklist-done-color: rgb(59, 53, 59) !important;
  --code-background: rgb(231, 221, 218) !important;
  --code-border-color: rgb(84, 106, 182) !important;
  --code-comment: rgb(81, 72, 81) !important;
  --code-function: 45, 50%, 44% !important;
  --code-important: 22, 50%, 40% !important;
  --code-keyword: 316, 50%, 68% !important;
  --code-normal: rgb(38, 34, 38) !important;
  --code-operator: 346, 50%, 32% !important;
  --code-property: 189, 40%, 42% !important;
  --code-punctuation: rgb(59, 53, 59) !important;
  --code-string: 108, 40%, 42% !important;
  --code-tag: 346, 50%, 32% !important;
  --code-value: 270, 40%, 38% !important;
  --codeFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(81, 72, 81) !important;
  --collapse-icon-color-collapsed: rgb(84, 106, 182) !important;
  --color-alternate: 316, 50%, 68% !important;
  --color-base-0: 15, 20%, 96% !important;
  --color-base-1: 15, 20%, 92% !important;
  --color-base-2: 15, 20%, 88% !important;
  --color-base-3: 15, 20%, 84% !important;
  --color-base-4: 15, 20%, 80% !important;
  --color-base-5: 15, 20%, 76% !important;
  --color-black: 300,  6%, 18% !important;
  --color-blue: 226, 40%, 52% !important;
  --color-caution: 45, 50%, 44% !important;
  --color-checklist-empty: 346, 50%, 32% !important;
  --color-checklist-empty-border: 346, 50%, 32% !important;
  --color-checklist-full: 108, 40%, 42% !important;
  --color-checklist-full-border: 108, 40%, 42% !important;
  --color-code-comment: 300,  6%, 30% !important;
  --color-code-function: 45, 50%, 44% !important;
  --color-code-important: 22, 50%, 40% !important;
  --color-code-keyword: 316, 50%, 68% !important;
  --color-code-normal: 300,  6%, 22% !important;
  --color-code-property: 226, 40%, 52% !important;
  --color-code-punctuation: 300,  6%, 22% !important;
  --color-code-string: 108, 40%, 42% !important;
  --color-code-tag: 346, 50%, 32% !important;
  --color-code-value: 270, 40%, 38% !important;
  --color-confirmed: 108, 40%, 42% !important;
  --color-content: 160, 50%, 38% !important;
  --color-cyan: 189, 40%, 42% !important;
  --color-green: 108, 40%, 42% !important;
  --color-horizontal-rule: 316, 50%, 68% !important;
  --color-hovered: 270, 40%, 38% !important;
  --color-interactable: 226, 40%, 52% !important;
  --color-list-bullets: 316, 50%, 68% !important;
  --color-list-indentation-indicator: magenta !important;
  --color-list-indentation-indicator-hover: 316, 50%, 68% !important;
  --color-orange: 22, 50%, 40% !important;
  --color-pink: 316, 50%, 68% !important;
  --color-purple: 270, 40%, 38% !important;
  --color-red: 346, 50%, 32% !important;
  --color-selected: 22, 50%, 40% !important;
  --color-stop: 346, 50%, 32% !important;
  --color-tag: 45, 50%, 44% !important;
  --color-tag-hover: 45, 50%, 44% !important;
  --color-teal: 160, 50%, 38% !important;
  --color-text-bold: 189, 40%, 42% !important;
  --color-text-faint: 300,  6%, 30% !important;
  --color-text-h1: 189, 40%, 42% !important;
  --color-text-h2: 189, 40%, 42% !important;
  --color-text-h3: 226, 40%, 52% !important;
  --color-text-h4: 226, 40%, 52% !important;
  --color-text-h5: 226, 40%, 52% !important;
  --color-text-h6: 226, 40%, 52% !important;
  --color-text-highlight: 15, 20%, 88% !important;
  --color-text-highlight-active-background: 22, 50%, 40% !important;
  --color-text-highlight-background: 45, 50%, 44% !important;
  --color-text-italic: 108, 40%, 42% !important;
  --color-text-muted: 300,  6%, 22% !important;
  --color-text-normal: 300,  6%, 14% !important;
  --color-text-strikethrough: 346, 50%, 32% !important;
  --color-text-title: 270, 40%, 38% !important;
  --color-white: 15, 20%, 88% !important;
  --color-yellow: 45, 50%, 44% !important;
  --crimson0: 346, 50%, 40% !important;
  --crimson1: 346, 50%, 36% !important;
  --crimson2: 346, 50%, 32% !important;
  --crimson3: 346, 50%, 28% !important;
  --crimson4: 346, 50%, 24% !important;
  --crimson5: 346, 50%, 20% !important;
  --dark: rgb(38, 34, 38) !important;
  --darkgray: rgb(38, 34, 38) !important;
  --day0: 15, 20%, 96% !important;
  --day1: 15, 20%, 92% !important;
  --day2: 15, 20%, 88% !important;
  --day3: 15, 20%, 84% !important;
  --day4: 15, 20%, 80% !important;
  --day5: 15, 20%, 76% !important;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif !important;
  --divider-color: rgb(84, 106, 182) !important;
  --divider-color-hover: rgb(84, 106, 182) !important;
  --dropdown-background: rgb(222, 210, 206) !important;
  --dropdown-background-hover: rgb(97, 58, 136) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(84, 106, 182), inset 0 0 0 1px rgb(84, 106, 182) !important;
  --embed-border-start: 2px solid rgb(84, 106, 182) !important;
  --file-header-background: rgb(239, 233, 231) !important;
  --file-header-background-focused: rgb(239, 233, 231) !important;
  --file-header-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(222, 210, 206) !important;
  --flair-color: rgb(38, 34, 38) !important;
  --font-headings: 'Tahoma', serif !important;
  --font-interface: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif !important;
  --footnote-divider-color: rgb(84, 106, 182) !important;
  --footnote-id-color: rgb(59, 53, 59) !important;
  --footnote-id-color-no-occurrences: rgb(81, 72, 81) !important;
  --frost0: 226, 40%, 44% !important;
  --frost1: 226, 40%, 48% !important;
  --frost2: 226, 40%, 52% !important;
  --frost3: 226, 40%, 56% !important;
  --frost4: 226, 40%, 60% !important;
  --frost5: 226, 40%, 64% !important;
  --graph-node: rgb(59, 53, 59) !important;
  --graph-node-attachment: 45, 50%, 44% !important;
  --graph-node-focused: rgb(84, 106, 182) !important;
  --graph-node-tag: 108, 40%, 42% !important;
  --graph-node-unresolved: rgb(81, 72, 81) !important;
  --graph-text: rgb(38, 34, 38) !important;
  --gray: rgb(59, 53, 59) !important;
  --green0: 108, 40%, 34% !important;
  --green1: 108, 40%, 38% !important;
  --green2: 108, 40%, 42% !important;
  --green3: 108, 40%, 46% !important;
  --green4: 108, 40%, 50% !important;
  --green5: 108, 40%, 54% !important;
  --headerFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(81, 72, 81) !important;
  --highlight: rgb(168, 140, 56) !important;
  --hr-color: rgb(84, 106, 182) !important;
  --icon-color: rgb(59, 53, 59) !important;
  --icon-color-active: rgb(84, 106, 182) !important;
  --icon-color-focused: rgb(38, 34, 38) !important;
  --icon-color-hover: rgb(59, 53, 59) !important;
  --indigo0: 270, 40%, 30% !important;
  --indigo1: 270, 40%, 34% !important;
  --indigo2: 270, 40%, 38% !important;
  --indigo3: 270, 40%, 42% !important;
  --indigo4: 270, 40%, 46% !important;
  --indigo5: 270, 40%, 50% !important;
  --input-date-separator: rgb(81, 72, 81) !important;
  --input-placeholder-color: rgb(81, 72, 81) !important;
  --interactive-accent: rgb(84, 106, 182) !important;
  --interactive-accent-hover: rgb(97, 58, 136) !important;
  --interactive-hover: rgb(97, 58, 136) !important;
  --interactive-normal: rgb(222, 210, 206) !important;
  --letterspacing-text-headers: 1.2px !important;
  --letterspacing-text-p: 1px !important;
  --light: rgb(239, 233, 231) !important;
  --lightgray: rgb(231, 221, 218) !important;
  --link-color: rgb(84, 106, 182) !important;
  --link-color-hover: rgb(97, 58, 136) !important;
  --link-external-color: rgb(84, 106, 182) !important;
  --link-external-color-hover: rgb(97, 58, 136) !important;
  --link-unresolved-color: rgb(84, 106, 182) !important;
  --list-marker-color: rgb(81, 72, 81) !important;
  --list-marker-color-collapsed: rgb(84, 106, 182) !important;
  --list-marker-color-hover: rgb(59, 53, 59) !important;
  --menu-background: rgb(231, 221, 218) !important;
  --metadata-border-color: rgb(84, 106, 182) !important;
  --metadata-divider-color: rgb(84, 106, 182) !important;
  --metadata-input-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(38, 34, 38) !important;
  --metadata-label-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(59, 53, 59) !important;
  --metadata-label-text-color-hover: rgb(59, 53, 59) !important;
  --modal-background: rgb(239, 233, 231) !important;
  --moonstone0: 189, 40%, 34% !important;
  --moonstone1: 189, 40%, 38% !important;
  --moonstone2: 189, 40%, 42% !important;
  --moonstone3: 189, 40%, 46% !important;
  --moonstone4: 189, 40%, 50% !important;
  --moonstone5: 189, 40%, 54% !important;
  --nav-collapse-icon-color: rgb(81, 72, 81) !important;
  --nav-collapse-icon-color-collapsed: rgb(81, 72, 81) !important;
  --nav-heading-color: rgb(38, 34, 38) !important;
  --nav-heading-color-collapsed: rgb(81, 72, 81) !important;
  --nav-heading-color-collapsed-hover: rgb(59, 53, 59) !important;
  --nav-heading-color-hover: rgb(38, 34, 38) !important;
  --nav-item-color: rgb(59, 53, 59) !important;
  --nav-item-color-active: rgb(38, 34, 38) !important;
  --nav-item-color-highlighted: rgb(84, 106, 182) !important;
  --nav-item-color-hover: rgb(38, 34, 38) !important;
  --nav-item-color-selected: rgb(38, 34, 38) !important;
  --nav-tag-color: rgb(81, 72, 81) !important;
  --nav-tag-color-active: rgb(59, 53, 59) !important;
  --nav-tag-color-hover: rgb(59, 53, 59) !important;
  --night0: 300,  6%, 10% !important;
  --night1: 300,  6%, 14% !important;
  --night2: 300,  6%, 18% !important;
  --night3: 300,  6%, 22% !important;
  --night4: 300,  6%, 26% !important;
  --night5: 300,  6%, 30% !important;
  --pdf-background: rgb(239, 233, 231) !important;
  --pdf-page-background: rgb(239, 233, 231) !important;
  --pdf-sidebar-background: rgb(239, 233, 231) !important;
  --peach0: 22, 50%, 40% !important;
  --peach1: 22, 50%, 44% !important;
  --peach2: 21, 50%, 48% !important;
  --peach3: 21, 50%, 52% !important;
  --peach4: 21, 50%, 56% !important;
  --peach5: 22, 50%, 60% !important;
  --pill-border-color: rgb(84, 106, 182) !important;
  --pill-color: rgb(59, 53, 59) !important;
  --pill-color-hover: rgb(38, 34, 38) !important;
  --pill-color-remove: rgb(81, 72, 81) !important;
  --pill-color-remove-hover: rgb(84, 106, 182) !important;
  --pink0: 316, 50%, 60% !important;
  --pink1: 316, 50%, 64% !important;
  --pink2: 316, 50%, 68% !important;
  --pink3: 316, 50%, 72% !important;
  --pink4: 315, 50%, 76% !important;
  --pink5: 316, 50%, 80% !important;
  --prompt-background: rgb(239, 233, 231) !important;
  --raised-background: color-mix(in srgb, rgb(239, 233, 231) 65%, transparent) linear-gradient(rgb(239, 233, 231), color-mix(in srgb, rgb(239, 233, 231) 65%, transparent)) !important;
  --ribbon-background: rgb(231, 221, 218) !important;
  --ribbon-background-collapsed: rgb(239, 233, 231) !important;
  --scrollbar-active-thumb-bg: rgb(97, 58, 136) !important;
  --search-clear-button-color: rgb(59, 53, 59) !important;
  --search-icon-color: rgb(59, 53, 59) !important;
  --search-result-background: rgb(239, 233, 231) !important;
  --secondary: rgb(84, 106, 182) !important;
  --setting-group-heading-color: rgb(38, 34, 38) !important;
  --setting-items-background: rgb(231, 221, 218) !important;
  --setting-items-border-color: rgb(84, 106, 182) !important;
  --size-icon: 15px !important;
  --size-text-h1: 3em !important;
  --size-text-h2: 30px !important;
  --size-text-h3: 27px !important;
  --size-text-h4: 24px !important;
  --size-text-h5: 21px !important;
  --size-text-h6: 18px !important;
  --size-text-p: 15px !important;
  --size-text-title: 5em !important;
  --slider-track-background: rgb(84, 106, 182) !important;
  --status-bar-background: rgb(231, 221, 218) !important;
  --status-bar-border-color: rgb(84, 106, 182) !important;
  --status-bar-text-color: rgb(59, 53, 59) !important;
  --suggestion-background: rgb(239, 233, 231) !important;
  --sync-avatar-color-1: 346, 50%, 32% !important;
  --sync-avatar-color-2: 22, 50%, 40% !important;
  --sync-avatar-color-3: 45, 50%, 44% !important;
  --sync-avatar-color-4: 108, 40%, 42% !important;
  --sync-avatar-color-5: 189, 40%, 42% !important;
  --sync-avatar-color-6: 226, 40%, 52% !important;
  --sync-avatar-color-7: 270, 40%, 38% !important;
  --sync-avatar-color-8: 316, 50%, 68% !important;
  --tab-background-active: rgb(239, 233, 231) !important;
  --tab-container-background: rgb(231, 221, 218) !important;
  --tab-outline-color: rgb(84, 106, 182) !important;
  --tab-switcher-background: rgb(231, 221, 218) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(231, 221, 218), transparent) !important;
  --tab-text-color: rgb(81, 72, 81) !important;
  --tab-text-color-active: rgb(97, 58, 136) !important;
  --tab-text-color-focused: rgb(59, 53, 59) !important;
  --tab-text-color-focused-active: rgb(59, 53, 59) !important;
  --tab-text-color-focused-active-current: rgb(153, 88, 51) !important;
  --tab-text-color-focused-highlighted: rgb(84, 106, 182) !important;
  --table-add-button-border-color: rgb(84, 106, 182) !important;
  --table-border-color: rgb(84, 106, 182) !important;
  --table-drag-handle-background-active: rgb(84, 106, 182) !important;
  --table-drag-handle-color: rgb(81, 72, 81) !important;
  --table-header-border-color: rgb(84, 106, 182) !important;
  --table-header-color: rgb(38, 34, 38) !important;
  --table-selection-border-color: rgb(84, 106, 182) !important;
  --tag-color: rgb(84, 106, 182) !important;
  --tag-color-hover: rgb(84, 106, 182) !important;
  --teal0: 160, 50%, 34% !important;
  --teal1: 160, 50%, 38% !important;
  --teal2: 160, 50%, 42% !important;
  --teal3: 160, 50%, 46% !important;
  --teal4: 160, 50%, 50% !important;
  --teal5: 168, 50%, 54% !important;
  --tertiary: rgb(97, 58, 136) !important;
  --text-accent: rgb(84, 106, 182) !important;
  --text-accent-hover: rgb(97, 58, 136) !important;
  --text-error: 346, 50%, 32% !important;
  --text-faint: rgb(81, 72, 81) !important;
  --text-highlight-bg: rgb(168, 140, 56) !important;
  --text-highlight-bg-active: rgb(153, 88, 51) !important;
  --text-muted: rgb(59, 53, 59) !important;
  --text-normal: rgb(38, 34, 38) !important;
  --text-selection: rgb(168, 140, 56) !important;
  --text-success: 108, 40%, 42% !important;
  --text-warning: 22, 50%, 40% !important;
  --textHighlight: rgb(168, 140, 56) !important;
  --titleFont: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(222, 210, 206) !important;
  --titlebar-background-focused: rgb(231, 221, 218) !important;
  --titlebar-border-color: rgb(84, 106, 182) !important;
  --titlebar-text-color: rgb(59, 53, 59) !important;
  --titlebar-text-color-focused: rgb(38, 34, 38) !important;
  --vault-profile-color: rgb(38, 34, 38) !important;
  --vault-profile-color-hover: rgb(38, 34, 38) !important;
  --weight-bold: 700 !important;
  --weight-extrabold: 800 !important;
  --weight-extralight: 200 !important;
  --weight-light: 300 !important;
  --weight-maxbold: 900 !important;
  --weight-medium: 500 !important;
  --weight-normal: 400 !important;
  --weight-semibold: 600 !important;
  --weight-thin: 100 !important;
  --yellow0: 45, 50%, 44% !important;
  --yellow1: 45, 50%, 48% !important;
  --yellow2: 45, 50%, 52% !important;
  --yellow3: 45, 50%, 56% !important;
  --yellow4: 45, 50%, 60% !important;
  --yellow5: 45, 50%, 64% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(231, 221, 218);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 233, 231);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(231, 221, 218);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(84, 106, 182);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(231, 221, 218);
  border-left-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 233, 231);
  color: rgb(38, 34, 38);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(64, 137, 150);
  outline: rgb(64, 137, 150) none 0px;
  text-decoration: rgb(64, 137, 150);
  text-decoration-color: rgb(64, 137, 150);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(64, 137, 150);
  outline: rgb(64, 137, 150) none 0px;
  text-decoration: rgb(64, 137, 150);
  text-decoration-color: rgb(64, 137, 150);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(153, 88, 51);
  color: rgb(231, 221, 218);
  outline: rgb(231, 221, 218) none 0px;
  text-decoration: rgb(231, 221, 218);
  text-decoration-color: rgb(231, 221, 218);
}

html[saved-theme="light"] body del {
  color: rgb(122, 41, 60);
  outline: rgb(122, 41, 60) none 0px;
  text-decoration: line-through rgb(122, 41, 60);
  text-decoration-color: rgb(122, 41, 60);
}

html[saved-theme="light"] body p {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(59, 53, 59) none 0px;
  text-decoration: rgb(59, 53, 59);
  text-decoration-color: rgb(59, 53, 59);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(214, 133, 192);
  outline: rgb(214, 133, 192) none 0px;
  text-decoration: underline rgb(214, 133, 192);
  text-decoration-color: rgb(214, 133, 192);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 133, 192);
  outline: rgb(214, 133, 192) none 0px;
  text-decoration: underline rgb(214, 133, 192);
  text-decoration-color: rgb(214, 133, 192);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(122, 41, 60);
  outline: rgb(122, 41, 60) none 0px;
  text-decoration: underline rgb(122, 41, 60);
  text-decoration-color: rgb(122, 41, 60);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(81, 72, 81);
  text-decoration: rgb(81, 72, 81);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(168, 140, 56, 0.1);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(168, 140, 56);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(168, 140, 56);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(168, 140, 56);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgb(168, 140, 56);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(38, 34, 38);
  width: 277.219px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(231, 221, 218);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(222, 210, 206);
  border-bottom-width: 0px;
  border-left-color: rgb(38, 34, 38);
  border-left-width: 0px;
  border-right-color: rgb(222, 210, 206);
  border-top-color: rgb(222, 210, 206);
  border-top-width: 0px;
  color: rgb(38, 34, 38);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="light"] body th {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(38, 34, 38);
  border-left-width: 0px;
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(84, 106, 182);
  border-top-width: 0px;
  color: rgb(38, 34, 38);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="light"] body thead {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(48, 145, 113);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(48, 145, 113);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(38, 34, 38);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(59, 53, 59);
  text-decoration: line-through rgb(59, 53, 59);
  text-decoration-color: rgb(59, 53, 59);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(214, 133, 192);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(214, 133, 192);
  border-right-color: rgb(214, 133, 192);
  border-top-color: rgb(214, 133, 192);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.3s;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(81, 72, 81);
  text-decoration: line-through 1px rgb(81, 72, 81);
  text-decoration-color: rgb(81, 72, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(222, 210, 206);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 34, 38);
  outline: rgb(38, 34, 38) none 0px;
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(231, 221, 218);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(239, 233, 231);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(239, 233, 231);
  border-right-color: rgb(239, 233, 231);
  border-top-color: rgb(239, 233, 231);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(239, 233, 231);
}

html[saved-theme="light"] body h1 {
  color: rgb(64, 137, 150);
  font-family: Tahoma, serif;
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="light"] body h2 {
  color: rgb(64, 137, 150);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(97, 58, 136);
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="light"] body h3 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(214, 133, 192);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 53, 59);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 53, 59);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(59, 53, 59);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(247, 244, 243);
  border-bottom-color: rgb(231, 221, 218);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(231, 221, 218);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(231, 221, 218);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(231, 221, 218);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(153, 88, 51);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 900;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(84, 106, 182);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 53, 59);
  text-decoration: rgb(59, 53, 59);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 53, 59);
  text-decoration: rgb(59, 53, 59);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(84, 106, 182);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(84, 106, 182);
  stroke: rgb(84, 106, 182);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(81, 72, 81);
  border-left-color: rgb(81, 72, 81);
  border-right-color: rgb(81, 72, 81);
  border-top-color: rgb(81, 72, 81);
  color: rgb(81, 72, 81);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(81, 72, 81);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(222, 210, 206);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 34, 38);
  text-decoration: underline dotted rgb(38, 34, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 34, 38);
}`,
  },
};
