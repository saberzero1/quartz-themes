import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vicious",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --000: #fbfcfc !important;
  --000-RGB: 251, 252, 252 !important;
  --100: #f1f2f5 !important;
  --100-RGB: 241, 242, 245 !important;
  --200: #e1e2e9 !important;
  --200-RGB: 225, 226, 233 !important;
  --300: #818184 !important;
  --300-RGB: 129, 129, 132 !important;
  --400: #68696c !important;
  --400-RGB: 104, 105, 108 !important;
  --500: #4f5053 !important;
  --500-RGB: 79, 80, 83 !important;
  --600: #292a2f !important;
  --600-RGB: 41, 42, 47 !important;
  --700: #17181e !important;
  --700-RGB: 23, 24, 30 !important;
  --800: #08090e !important;
  --800-RGB: 8, 9, 14 !important;
  --C001: #f18196 !important;
  --C001-RGB: 241, 129, 150 !important;
  --C002: #f19a81 !important;
  --C002-RGB: 241, 154, 129 !important;
  --C003: #ebcb8b !important;
  --C003-RGB: 241, 201, 129 !important;
  --C004: #e3eb8b !important;
  --C004-RGB: 227, 235, 139 !important;
  --C005: #bcf181 !important;
  --C005-RGB: 188, 241, 129 !important;
  --C006: #8df181 !important;
  --C006-RGB: 141, 241, 129 !important;
  --C007: #81f1a4 !important;
  --C007-RGB: 129, 241, 164 !important;
  --C008: #8be3eb !important;
  --C008-RGB: 139, 227, 235 !important;
  --C009: #ab8beb !important;
  --C009-RGB: 171, 139, 235 !important;
  --C010: #ee81f1 !important;
  --C010-RGB: 238, 129, 241 !important;
  --C011: #f181c5 !important;
  --C011-RGB: 241, 129, 197 !important;
  --accent-h: 39 !important;
  --accent-l: 73% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: rgba(241, 203, 131, 0.1) !important;
  --background-modifier-border: #292a2f !important;
  --background-modifier-border-focus: #4f5053 !important;
  --background-modifier-border-hover: #4f5053 !important;
  --background-modifier-cover: rgb(8, 9, 14) !important;
  --background-modifier-error: #f18196 !important;
  --background-modifier-error-hover: #f18196 !important;
  --background-modifier-error-rgb: 241, 129, 150 !important;
  --background-modifier-form-field: #292a2f !important;
  --background-modifier-form-field-hover: #292a2f !important;
  --background-modifier-hover: #17181e !important;
  --background-modifier-success: #81f1a4 !important;
  --background-modifier-success-rgb: 129, 241, 164 !important;
  --background-primary: #08090e !important;
  --background-primary-alt: #17181e !important;
  --background-secondary: #08090e !important;
  --background-secondary-alt: #08090e !important;
  --bases-cards-background: #08090e !important;
  --bases-cards-cover-background: #17181e !important;
  --bases-cards-shadow: 0 0 0 1px #292a2f !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4f5053 !important;
  --bases-embed-border-color: #292a2f !important;
  --bases-group-heading-property-color: #818184 !important;
  --bases-table-border-color: #292a2f !important;
  --bases-table-cell-background-active: #08090e !important;
  --bases-table-cell-background-disabled: #17181e !important;
  --bases-table-cell-background-selected: rgba(241, 203, 131, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4f5053 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(241, 203, 131) !important;
  --bases-table-group-background: #17181e !important;
  --bases-table-header-background: #08090e !important;
  --bases-table-header-background-hover: #17181e !important;
  --bases-table-header-color: #818184 !important;
  --bases-table-summary-background: #08090e !important;
  --bases-table-summary-background-hover: #17181e !important;
  --blockquote-background-color: #17181e !important;
  --blockquote-border-color: rgb(241, 203, 131) !important;
  --blur-background: color-mix(in srgb, #08090e 65%, transparent) linear-gradient(#08090e, color-mix(in srgb, #08090e 65%, transparent)) !important;
  --callout-RGB: 41, 42, 47;
  --callout-abstract: 227, 235, 139;
  --callout-bug: 241, 201, 129;
  --callout-content-background: #08090e;
  --callout-default: 251, 252, 252;
  --callout-error: 241, 129, 150;
  --callout-example: 171, 139, 235;
  --callout-fail: 241, 129, 197;
  --callout-faq: 241, 154, 129;
  --callout-help: 241, 154, 129;
  --callout-hint: 241, 201, 129;
  --callout-important: 141, 241, 129;
  --callout-info: 188, 241, 129;
  --callout-padding: 0;
  --callout-question: 241, 154, 129;
  --callout-quote: 139, 227, 235;
  --callout-radius: 8px;
  --callout-success: 129, 241, 164;
  --callout-summary: 227, 235, 139;
  --callout-tip: 241, 201, 129;
  --callout-title-padding: 4px 12px;
  --callout-tldr: 227, 235, 139;
  --callout-todo: 139, 227, 235;
  --callout-warning: 241, 129, 150;
  --canvas-background: #08090e !important;
  --canvas-card-label-color: #68696c !important;
  --canvas-color-1: 241, 129, 150 !important;
  --canvas-color-2: 241, 154, 129 !important;
  --canvas-color-3: 241, 201, 129 !important;
  --canvas-color-4: 129, 241, 164 !important;
  --canvas-color-5: 139, 227, 235 !important;
  --canvas-color-6: 171, 139, 235 !important;
  --canvas-dot-pattern: #292a2f !important;
  --card-color: #17181e !important;
  --caret-color: #fbfcfc !important;
  --checkbox-border-color: #818184 !important;
  --checkbox-border-color-hover: #818184 !important;
  --checkbox-color: rgb(241, 203, 131) !important;
  --checkbox-color-hover: rgb(248, 221, 181) !important;
  --checkbox-marker-color: #08090e !important;
  --checklist-done-color: #818184 !important;
  --checklist-done-decoration: none !important;
  --checklist-textColor: #fbfcfc !important;
  --checklist-textColor1: #fbfcfc !important;
  --code-background: #17181e !important;
  --code-border-color: #292a2f !important;
  --code-bracket-background: #17181e !important;
  --code-comment: #68696c !important;
  --code-function: #ebcb8b !important;
  --code-important: #f19a81 !important;
  --code-keyword: #ee81f1 !important;
  --code-normal: #fbfcfc !important;
  --code-operator: #f18196 !important;
  --code-property: #8be3eb !important;
  --code-punctuation: #818184 !important;
  --code-radius: 8px !important;
  --code-string: #81f1a4 !important;
  --code-tag: #f18196 !important;
  --code-value: #ab8beb !important;
  --collapse-icon-color: #4f5053 !important;
  --collapse-icon-color-collapsed: #fbfcfc !important;
  --color-accent: rgb(241, 203, 131) !important;
  --color-accent-1: rgb(248, 221, 181) !important;
  --color-accent-2: rgb(253, 241, 227) !important;
  --color-accent-hsl: 39, 80%, 73% !important;
  --color-base-00: #08090e !important;
  --color-base-05: #08090e !important;
  --color-base-10: #17181e !important;
  --color-base-100: #f1f2f5 !important;
  --color-base-20: #17181e !important;
  --color-base-25: #292a2f !important;
  --color-base-30: #292a2f !important;
  --color-base-35: #4f5053 !important;
  --color-base-40: #4f5053 !important;
  --color-base-50: #68696c !important;
  --color-base-60: #818184 !important;
  --color-base-70: #e1e2e9 !important;
  --color-blue: #bcf181 !important;
  --color-blue-rgb: 188, 241, 129 !important;
  --color-cyan: #8be3eb !important;
  --color-cyan-rgb: 139, 227, 235 !important;
  --color-green: #81f1a4 !important;
  --color-green-rgb: 129, 241, 164 !important;
  --color-orange: #f19a81 !important;
  --color-orange-rgb: 241, 154, 129 !important;
  --color-pink: #ee81f1 !important;
  --color-pink-rgb: 238, 129, 241 !important;
  --color-purple: #ab8beb !important;
  --color-purple-rgb: 171, 139, 235 !important;
  --color-red: #f18196 !important;
  --color-red-rgb: 241, 129, 150 !important;
  --color-yellow: #ebcb8b !important;
  --color-yellow-rgb: 241, 201, 129 !important;
  --dark: #fbfcfc !important;
  --darkgray: #fbfcfc !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(241, 203, 131) !important;
  --divider-width: 4px !important;
  --divider-width-hover: 4px !important;
  --dropdown-background: #08090e !important;
  --dropdown-background-hover: #292a2f !important;
  --embed-block-shadow-hover: 0 0 0 1px #292a2f, inset 0 0 0 1px #292a2f !important;
  --embed-border-start: 2px solid rgb(241, 203, 131) !important;
  --file-color-RGB: 23, 24, 30 !important;
  --file-header-background: #08090e !important;
  --file-header-background-focused: #08090e !important;
  --file-line-width: 960px !important;
  --flair-background: #08090e !important;
  --flair-color: #fbfcfc !important;
  --footnote-divider-color: #292a2f !important;
  --footnote-id-color: #818184 !important;
  --footnote-id-color-no-occurrences: #68696c !important;
  --footnote-input-background-active: #17181e !important;
  --graph-line: #4f5053 !important;
  --graph-node: #818184 !important;
  --graph-node-attachment: #ebcb8b !important;
  --graph-node-focused: rgb(248, 221, 181) !important;
  --graph-node-tag: #81f1a4 !important;
  --graph-node-unresolved: #68696c !important;
  --graph-text: #fbfcfc !important;
  --gray: #818184 !important;
  --h1-size: 1.8em !important;
  --h2-size: 1.8em !important;
  --h3-size: 1.8em !important;
  --h4-size: 1.8em !important;
  --h5-size: 1.8em !important;
  --h6-size: 1.8em !important;
  --heading-count-bg-color: #17181e !important;
  --heading-count-color: #818184 !important;
  --heading-formatting: #68696c !important;
  --highlight: rgba(104, 105, 108, 0.4) !important;
  --hr-color: #17181e !important;
  --hr-thickness: 3px !important;
  --icon-color: #fbfcfc !important;
  --icon-color-active: rgb(248, 221, 181) !important;
  --icon-color-focused: #fbfcfc !important;
  --icon-color-hover: #818184 !important;
  --indent-use-default: 3.5ch !important;
  --indentation-guide-color: rgba(251, 252, 252, 0.12) !important;
  --indentation-guide-color-active: rgba(251, 252, 252, 0.3) !important;
  --indentation-guide-width: 0px !important;
  --inline-title-size: 1.8em !important;
  --input-color: #08090e !important;
  --input-date-separator: #68696c !important;
  --input-placeholder-color: #68696c !important;
  --interactive-accent: rgb(241, 203, 131) !important;
  --interactive-accent-hover: rgb(248, 221, 181) !important;
  --interactive-accent-hsl: 39, 80%, 73% !important;
  --interactive-hover: #292a2f !important;
  --interactive-normal: #08090e !important;
  --light: #08090e !important;
  --lightgray: #08090e !important;
  --line-highlight-color: rgba(23, 24, 30, 0) !important;
  --link-color: #f18196 !important;
  --link-color-hover: rgb(253, 241, 227) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(248, 221, 181) !important;
  --link-external-color-hover: rgb(253, 241, 227) !important;
  --link-unresolved-color: #8be3eb !important;
  --link-unresolved-decoration-color: rgba(241, 203, 131, 0.3) !important;
  --list-marker-color: #818184 !important;
  --list-marker-color-collapsed: rgb(248, 221, 181) !important;
  --list-marker-color-hover: #818184 !important;
  --menu-background: #08090e !important;
  --menu-border-color: #4f5053 !important;
  --metadata-background-color: #08090e !important;
  --metadata-border-color: #292a2f !important;
  --metadata-divider-color: #292a2f !important;
  --metadata-input-background-active: #17181e !important;
  --metadata-input-text-color: #fbfcfc !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-text-color: #fbfcfc !important;
  --metadata-label-text-color-hover: #818184 !important;
  --metadata-property-background-active: #17181e !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4f5053 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4f5053 !important;
  --modal-Color: 8, 9, 14 !important;
  --modal-background: #08090e !important;
  --modal-border-color: #4f5053 !important;
  --mono-rgb-0: 8, 9, 14 !important;
  --mono-rgb-100: 251, 252, 252 !important;
  --nav-collapse-icon-color: #4f5053 !important;
  --nav-collapse-icon-color-collapsed: #68696c !important;
  --nav-color: 8, 9, 14 !important;
  --nav-heading-color: #fbfcfc !important;
  --nav-heading-color-collapsed: #68696c !important;
  --nav-heading-color-collapsed-hover: #818184 !important;
  --nav-heading-color-hover: #fbfcfc !important;
  --nav-indentation-guide-color: rgba(251, 252, 252, 0.12) !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: #17181e !important;
  --nav-item-background-hover: #17181e !important;
  --nav-item-background-selected: rgba(241, 203, 131, 0.15) !important;
  --nav-item-color: #fbfcfc !important;
  --nav-item-color-active: #fbfcfc !important;
  --nav-item-color-highlighted: rgb(248, 221, 181) !important;
  --nav-item-color-hover: #fbfcfc !important;
  --nav-item-color-selected: #fbfcfc !important;
  --nav-tag-color: #68696c !important;
  --nav-tag-color-active: #818184 !important;
  --nav-tag-color-hover: #818184 !important;
  --pdf-background: #08090e !important;
  --pdf-page-background: #08090e !important;
  --pdf-shadow: 0 0 0 1px #292a2f !important;
  --pdf-sidebar-background: #08090e !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #292a2f !important;
  --pill-background: #17181e !important;
  --pill-border-color: #292a2f !important;
  --pill-border-color-hover: #4f5053 !important;
  --pill-color: #818184 !important;
  --pill-color-hover: #fbfcfc !important;
  --pill-color-remove: #68696c !important;
  --pill-color-remove-hover: rgb(248, 221, 181) !important;
  --prompt-background: #08090e !important;
  --prompt-border-color: #4f5053 !important;
  --raised-background: color-mix(in srgb, #08090e 65%, transparent) linear-gradient(#08090e, color-mix(in srgb, #08090e 65%, transparent)) !important;
  --ribbon-background: #08090e !important;
  --ribbon-background-collapsed: #08090e !important;
  --ribbon-padding: 16px 0 0px 0 !important;
  --ribbon-width: 48px !important;
  --scrollbar-active-thumb-bg: rgba(251, 252, 252, 0.2) !important;
  --scrollbar-bg: rgba(251, 252, 252, 0.05) !important;
  --scrollbar-thumb-bg: rgba(251, 252, 252, 0.1) !important;
  --search-clear-button-color: #818184 !important;
  --search-icon-color: #818184 !important;
  --search-result-background: #08090e !important;
  --secondary: rgb(248, 221, 181) !important;
  --select-color: #292a2f !important;
  --setting-group-heading-color: #fbfcfc !important;
  --setting-items-background: #17181e !important;
  --setting-items-border-color: #292a2f !important;
  --shadow-open-tabs: #08090e !important;
  --side-dock-color: #17181e !important;
  --slider-thumb-border-color: #4f5053 !important;
  --slider-track-background: #292a2f !important;
  --status-bar-background: #08090e !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #818184 !important;
  --suggestion-background: #08090e !important;
  --swatch-shadow: inset 0 0 0 1px rgba(251, 252, 252, 0.15) !important;
  --sync-avatar-color-1: #f18196 !important;
  --sync-avatar-color-2: #f19a81 !important;
  --sync-avatar-color-3: #ebcb8b !important;
  --sync-avatar-color-4: #81f1a4 !important;
  --sync-avatar-color-5: #8be3eb !important;
  --sync-avatar-color-6: #bcf181 !important;
  --sync-avatar-color-7: #ab8beb !important;
  --sync-avatar-color-8: #ee81f1 !important;
  --tab-background-active: #08090e !important;
  --tab-container-background: #08090e !important;
  --tab-divider-color: #4f5053 !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 0px !important;
  --tab-radius-active: 0 0 0 0 !important;
  --tab-stacked-pane-width: 800px !important;
  --tab-switcher-background: #08090e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #08090e, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(251, 252, 252, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(241, 203, 131) !important;
  --tab-text-color: #68696c !important;
  --tab-text-color-active: #818184 !important;
  --tab-text-color-focused: #818184 !important;
  --tab-text-color-focused-active: #818184 !important;
  --tab-text-color-focused-active-current: #fbfcfc !important;
  --tab-text-color-focused-highlighted: rgb(248, 221, 181) !important;
  --table-add-button-border-color: #292a2f !important;
  --table-border-color: #292a2f !important;
  --table-drag-handle-background-active: rgb(241, 203, 131) !important;
  --table-drag-handle-color: #68696c !important;
  --table-drag-handle-color-active: #08090e !important;
  --table-header-border-color: #292a2f !important;
  --table-header-color: #fbfcfc !important;
  --table-selection: rgba(241, 203, 131, 0.1) !important;
  --table-selection-border-color: rgb(241, 203, 131) !important;
  --tag-background: rgba(241, 203, 131, 0.1) !important;
  --tag-background-hover: rgba(241, 203, 131, 0.2) !important;
  --tag-border-color: transparent !important;
  --tag-border-color-hover: rgba(241, 203, 131, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(248, 221, 181) !important;
  --tag-color-hover: rgb(248, 221, 181) !important;
  --tag-padding-x: 0.56em !important;
  --tag-padding-y: 0.16em !important;
  --tag-radius: 16px !important;
  --tertiary: rgb(253, 241, 227) !important;
  --text-accent: rgb(248, 221, 181) !important;
  --text-accent-hover: rgb(253, 241, 227) !important;
  --text-error: #f18196 !important;
  --text-faint: #68696c !important;
  --text-highlight-bg: rgba(104, 105, 108, 0.4) !important;
  --text-highlight-bg-rgb: 104, 105, 108 !important;
  --text-muted: #818184 !important;
  --text-normal: #fbfcfc !important;
  --text-on-accent: #08090e !important;
  --text-selection: #4f5053 !important;
  --text-success: #81f1a4 !important;
  --text-warning: #f19a81 !important;
  --textHighlight: rgba(104, 105, 108, 0.4) !important;
  --th-bg: #17181e !important;
  --titlebar-background: #08090e !important;
  --titlebar-background-focused: #08090e !important;
  --titlebar-border-color: #292a2f !important;
  --titlebar-text-color: #818184 !important;
  --titlebar-text-color-focused: #fbfcfc !important;
  --vault-profile-color: #fbfcfc !important;
  --vault-profile-color-hover: #fbfcfc !important;
  --vicious-color-count: 11 !important;
  --vicious-indent-1: #f18196 !important;
  --vicious-indent-10: #ee81f1 !important;
  --vicious-indent-11: #f181c5 !important;
  --vicious-indent-2: #f19a81 !important;
  --vicious-indent-3: #ebcb8b !important;
  --vicious-indent-4: #e3eb8b !important;
  --vicious-indent-5: #bcf181 !important;
  --vicious-indent-6: #8df181 !important;
  --vicious-indent-7: #81f1a4 !important;
  --vicious-indent-8: #8be3eb !important;
  --vicious-indent-9: #ab8beb !important;
  --vicious-indent-bg-size: 46.2ch
		1px !important;
  --vicious-indent-colorful-bg: linear-gradient(
		to right,
		#f18196 0 3px,
		transparent 3px
			4.2ch,
		#f19a81 4.2ch
			calc(4.2ch + 3px),
		transparent
			calc(4.2ch + 3px)
			8.4ch,
		#ebcb8b 8.4ch
			calc(8.4ch + 3px),
		transparent
			calc(8.4ch + 3px)
			12.6ch,
		#e3eb8b 12.6ch
			calc(12.6ch + 3px),
		transparent
			calc(12.6ch + 3px)
			16.8ch,
		#bcf181 16.8ch
			calc(16.8ch + 3px),
		transparent
			calc(16.8ch + 3px)
			21ch,
		#8df181 21ch
			calc(21ch + 3px),
		transparent
			calc(21ch + 3px)
			25.2ch,
		#81f1a4 25.2ch
			calc(25.2ch + 3px),
		transparent
			calc(25.2ch + 3px)
			29.4ch,
		#8be3eb 29.4ch
			calc(29.4ch + 3px),
		transparent
			calc(29.4ch + 3px)
			33.6ch,
		#ab8beb 33.6ch
			calc(33.6ch + 3px),
		transparent
			calc(33.6ch + 3px)
			37.8ch,
		#ee81f1 37.8ch
			calc(37.8ch + 3px),
		transparent
			calc(37.8ch + 3px)
			42ch,
		#f181c5 42ch
			calc(42ch + 3px),
		transparent
			calc(29.4ch + 3px)
			33.6ch
	) !important;
  --vicious-indent-width: 4.2ch !important;
  --vicious-left-offset: 2ch !important;
  --vicious-line-width: 3px !important;
  --workspace-background-translucent: rgba(8, 9, 14, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 9, 14);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(23, 24, 30);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(8, 9, 14);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 9, 14);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(8, 9, 14);
  color: rgb(251, 252, 252);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(104, 105, 108, 0.4);
  color: rgb(251, 252, 252);
  outline: rgb(251, 252, 252) none 0px;
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body del {
  color: rgb(251, 252, 252);
  outline: rgb(251, 252, 252) none 0px;
  text-decoration: line-through rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body p {
  color: rgb(129, 129, 132);
  outline: rgb(129, 129, 132) none 0px;
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(247, 221, 181);
  outline: rgb(247, 221, 181) none 0px;
  text-decoration: underline rgb(247, 221, 181);
  text-decoration-color: rgb(247, 221, 181);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(241, 129, 150);
  outline: rgb(241, 129, 150) none 0px;
  text-decoration: rgb(241, 129, 150);
  text-decoration-color: rgb(241, 129, 150);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(139, 227, 235);
  outline: rgb(139, 227, 235) none 0px;
  text-decoration: rgba(241, 203, 131, 0.3);
  text-decoration-color: rgba(241, 203, 131, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body dt {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(104, 105, 108);
  text-decoration: rgb(104, 105, 108);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(23, 24, 30);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(251, 252, 252);
  margin-top: 0px;
  width: 934px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body th {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  color: rgb(251, 252, 252);
  text-align: center;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(41, 42, 47);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(41, 42, 47);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(41, 42, 47);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(41, 42, 47);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(241, 203, 131);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(241, 203, 131);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgb(8, 9, 14);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 227, 235, 139;
  background-color: rgb(227, 235, 139);
  border-bottom-color: rgba(227, 235, 139, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(227, 235, 139, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(227, 235, 139, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(227, 235, 139, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 241, 201, 129;
  background-color: rgb(241, 201, 129);
  border-bottom-color: rgba(241, 201, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 201, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 201, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 201, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 241, 129, 150;
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgba(241, 129, 150, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 129, 150, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 129, 150, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 129, 150, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 171, 139, 235;
  background-color: rgb(171, 139, 235);
  border-bottom-color: rgba(171, 139, 235, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(171, 139, 235, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(171, 139, 235, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(171, 139, 235, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 241, 129, 197;
  background-color: rgb(241, 129, 197);
  border-bottom-color: rgba(241, 129, 197, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 129, 197, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 129, 197, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 129, 197, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 188, 241, 129;
  background-color: rgb(188, 241, 129);
  border-bottom-color: rgba(188, 241, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(188, 241, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(188, 241, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(188, 241, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 251, 252, 252;
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgba(251, 252, 252, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 252, 252, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(251, 252, 252, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(251, 252, 252, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 241, 154, 129;
  background-color: rgb(241, 154, 129);
  border-bottom-color: rgba(241, 154, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 154, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 154, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 154, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 139, 227, 235;
  background-color: rgb(139, 227, 235);
  border-bottom-color: rgba(139, 227, 235, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(139, 227, 235, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(139, 227, 235, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(139, 227, 235, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 129, 241, 164;
  background-color: rgb(129, 241, 164);
  border-bottom-color: rgba(129, 241, 164, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(129, 241, 164, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(129, 241, 164, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(129, 241, 164, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 241, 201, 129;
  background-color: rgb(241, 201, 129);
  border-bottom-color: rgba(241, 201, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 201, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 201, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 201, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 139, 227, 235;
  background-color: rgb(139, 227, 235);
  border-bottom-color: rgba(139, 227, 235, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(139, 227, 235, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(139, 227, 235, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(139, 227, 235, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 241, 129, 150;
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgba(241, 129, 150, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 129, 150, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 129, 150, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 129, 150, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(41, 42, 47);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(79, 80, 83);
  border-left-color: rgb(79, 80, 83);
  border-right-color: rgb(79, 80, 83);
  border-top-color: rgb(79, 80, 83);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(251, 252, 252);
  outline: rgb(251, 252, 252) none 0px;
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(23, 24, 30);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(79, 80, 83);
  border-left-color: rgb(79, 80, 83);
  border-right-color: rgb(79, 80, 83);
  border-top-color: rgb(79, 80, 83);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(23, 24, 30);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body h1 {
  color: rgb(241, 129, 150);
}

html[saved-theme="dark"] body h2 {
  color: rgb(241, 154, 129);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body h3 {
  color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body h4 {
  color: rgb(188, 241, 129);
}

html[saved-theme="dark"] body h5 {
  color: rgb(139, 227, 235);
}

html[saved-theme="dark"] body h6 {
  color: rgb(171, 139, 235);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 251, 252, 252;
  border-bottom-color: rgba(251, 252, 252, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 252, 252, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(251, 252, 252, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(251, 252, 252, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(251, 252, 252);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-left-width: 0px;
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  border-top-width: 0px;
  color: rgb(129, 129, 132);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(8, 9, 14);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(251, 252, 252);
  stroke: rgb(251, 252, 252);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(104, 105, 108);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  color: rgb(129, 129, 132);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(8, 9, 14);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body abbr {
  color: rgb(251, 252, 252);
  text-decoration: underline dotted rgb(251, 252, 252);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body sub {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body summary {
  color: rgb(251, 252, 252);
}

html[saved-theme="dark"] body sup {
  color: rgb(251, 252, 252);
}`,
  },
  light: {
    base: `:root:root {
  --000: #fbfcfc !important;
  --000-RGB: 251, 252, 252 !important;
  --100: #f1f2f5 !important;
  --100-RGB: 241, 242, 245 !important;
  --200: #e1e2e9 !important;
  --200-RGB: 225, 226, 233 !important;
  --300: #818184 !important;
  --300-RGB: 129, 129, 132 !important;
  --400: #68696c !important;
  --400-RGB: 104, 105, 108 !important;
  --500: #4f5053 !important;
  --500-RGB: 79, 80, 83 !important;
  --600: #292a2f !important;
  --600-RGB: 41, 42, 47 !important;
  --700: #17181e !important;
  --700-RGB: 23, 24, 30 !important;
  --800: #08090e !important;
  --800-RGB: 8, 9, 14 !important;
  --C001: #f18196 !important;
  --C001-RGB: 241, 129, 150 !important;
  --C002: #f19a81 !important;
  --C002-RGB: 241, 154, 129 !important;
  --C003: #ebcb8b !important;
  --C003-RGB: 241, 201, 129 !important;
  --C004: #e3eb8b !important;
  --C004-RGB: 227, 235, 139 !important;
  --C005: #bcf181 !important;
  --C005-RGB: 188, 241, 129 !important;
  --C006: #8df181 !important;
  --C006-RGB: 141, 241, 129 !important;
  --C007: #81f1a4 !important;
  --C007-RGB: 129, 241, 164 !important;
  --C008: #8be3eb !important;
  --C008-RGB: 139, 227, 235 !important;
  --C009: #ab8beb !important;
  --C009-RGB: 171, 139, 235 !important;
  --C010: #ee81f1 !important;
  --C010-RGB: 238, 129, 241 !important;
  --C011: #f181c5 !important;
  --C011-RGB: 241, 129, 197 !important;
  --accent-h: 39 !important;
  --accent-l: 73% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: rgba(241, 203, 131, 0.1) !important;
  --background-modifier-border: #818184 !important;
  --background-modifier-border-focus: #68696c !important;
  --background-modifier-border-hover: #68696c !important;
  --background-modifier-cover: rgb(251, 252, 252) !important;
  --background-modifier-error: 241, 129, 150 !important;
  --background-modifier-error-hover: 241, 129, 150 !important;
  --background-modifier-error-rgb: 241, 129, 150 !important;
  --background-modifier-form-field: #fbfcfc !important;
  --background-modifier-form-field-hover: #fbfcfc !important;
  --background-modifier-hover: #f1f2f5 !important;
  --background-modifier-success: #81f1a4 !important;
  --background-modifier-success-rgb: 129, 241, 164 !important;
  --background-primary: #fbfcfc !important;
  --background-primary-alt: #f1f2f5 !important;
  --background-secondary: #fbfcfc !important;
  --background-secondary-alt: #fbfcfc !important;
  --bases-cards-background: #fbfcfc !important;
  --bases-cards-cover-background: #f1f2f5 !important;
  --bases-cards-shadow: 0 0 0 1px #818184 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #68696c !important;
  --bases-embed-border-color: #818184 !important;
  --bases-group-heading-property-color: #818184 !important;
  --bases-table-border-color: #e1e2e9 !important;
  --bases-table-cell-background-active: #fbfcfc !important;
  --bases-table-cell-background-disabled: #f1f2f5 !important;
  --bases-table-cell-background-selected: rgba(241, 203, 131, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #68696c !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(244, 211, 153) !important;
  --bases-table-group-background: #f1f2f5 !important;
  --bases-table-header-background: #fbfcfc !important;
  --bases-table-header-background-hover: #f1f2f5 !important;
  --bases-table-header-color: #818184 !important;
  --bases-table-summary-background: #fbfcfc !important;
  --bases-table-summary-background-hover: #f1f2f5 !important;
  --blockquote-background-color: #f1f2f5 !important;
  --blockquote-border-color: rgb(244, 211, 153) !important;
  --blur-background: color-mix(in srgb, #fbfcfc 65%, transparent) linear-gradient(#fbfcfc, color-mix(in srgb, #fbfcfc 65%, transparent)) !important;
  --callout-RGB: 225, 226, 233;
  --callout-abstract: 227, 235, 139;
  --callout-bug: 241, 201, 129;
  --callout-content-background: #fbfcfc;
  --callout-default: 8, 9, 14;
  --callout-error: 241, 129, 150;
  --callout-example: 171, 139, 235;
  --callout-fail: 241, 129, 197;
  --callout-faq: 241, 154, 129;
  --callout-help: 241, 154, 129;
  --callout-hint: 241, 201, 129;
  --callout-important: 141, 241, 129;
  --callout-info: 188, 241, 129;
  --callout-padding: 0;
  --callout-question: 241, 154, 129;
  --callout-quote: 139, 227, 235;
  --callout-radius: 8px;
  --callout-success: 129, 241, 164;
  --callout-summary: 227, 235, 139;
  --callout-tip: 241, 201, 129;
  --callout-title-padding: 4px 12px;
  --callout-tldr: 227, 235, 139;
  --callout-todo: 139, 227, 235;
  --callout-warning: 241, 129, 150;
  --canvas-background: #fbfcfc !important;
  --canvas-card-label-color: #818184 !important;
  --canvas-color-1: 241, 129, 150 !important;
  --canvas-color-2: 241, 154, 129 !important;
  --canvas-color-3: 241, 201, 129 !important;
  --canvas-color-4: 129, 241, 164 !important;
  --canvas-color-5: 139, 227, 235 !important;
  --canvas-color-6: 171, 139, 235 !important;
  --canvas-dot-pattern: #818184 !important;
  --card-color: #f1f2f5 !important;
  --caret-color: #08090e !important;
  --checkbox-border-color: #818184 !important;
  --checkbox-border-color-hover: #818184 !important;
  --checkbox-color: rgb(244, 211, 153) !important;
  --checkbox-color-hover: rgb(248, 221, 181) !important;
  --checkbox-marker-color: #fbfcfc !important;
  --checklist-done-color: #818184 !important;
  --checklist-done-decoration: none !important;
  --checklist-textColor: #08090e !important;
  --checklist-textColor1: #08090e !important;
  --code-background: #f1f2f5 !important;
  --code-border-color: #818184 !important;
  --code-bracket-background: #f1f2f5 !important;
  --code-comment: #818184 !important;
  --code-function: #ebcb8b !important;
  --code-important: #f19a81 !important;
  --code-keyword: #ee81f1 !important;
  --code-normal: #08090e !important;
  --code-operator: 241, 129, 150 !important;
  --code-property: #8be3eb !important;
  --code-punctuation: #818184 !important;
  --code-radius: 8px !important;
  --code-string: #81f1a4 !important;
  --code-tag: 241, 129, 150 !important;
  --code-value: #ab8beb !important;
  --collapse-icon-color: #68696c !important;
  --collapse-icon-color-collapsed: #08090e !important;
  --color-accent: rgb(241, 203, 131) !important;
  --color-accent-1: rgb(244, 211, 153) !important;
  --color-accent-2: rgb(248, 221, 181) !important;
  --color-accent-hsl: 39, 80%, 73% !important;
  --color-base-00: #fbfcfc !important;
  --color-base-05: #fbfcfc !important;
  --color-base-10: #f1f2f5 !important;
  --color-base-100: #08090e !important;
  --color-base-20: #f1f2f5 !important;
  --color-base-25: #818184 !important;
  --color-base-30: #818184 !important;
  --color-base-35: #68696c !important;
  --color-base-40: #68696c !important;
  --color-base-50: #4f5053 !important;
  --color-base-60: #292a2f !important;
  --color-base-70: #17181e !important;
  --color-blue: #bcf181 !important;
  --color-blue-rgb: 188, 241, 129 !important;
  --color-cyan: #8be3eb !important;
  --color-cyan-rgb: 139, 227, 235 !important;
  --color-green: #81f1a4 !important;
  --color-green-rgb: 129, 241, 164 !important;
  --color-orange: #f19a81 !important;
  --color-orange-rgb: 241, 154, 129 !important;
  --color-pink: #ee81f1 !important;
  --color-pink-rgb: 238, 129, 241 !important;
  --color-purple: #ab8beb !important;
  --color-purple-rgb: 171, 139, 235 !important;
  --color-red: 241, 129, 150 !important;
  --color-red-rgb: 241, 129, 150 !important;
  --color-yellow: #ebcb8b !important;
  --color-yellow-rgb: 241, 201, 129 !important;
  --dark: #08090e !important;
  --darkgray: #08090e !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(244, 211, 153) !important;
  --divider-width: 4px !important;
  --divider-width-hover: 4px !important;
  --dropdown-background: #fbfcfc !important;
  --dropdown-background-hover: #e1e2e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #818184, inset 0 0 0 1px #818184 !important;
  --embed-border-start: 2px solid rgb(244, 211, 153) !important;
  --file-color-RGB: 241, 242, 245 !important;
  --file-header-background: #fbfcfc !important;
  --file-header-background-focused: #fbfcfc !important;
  --file-line-width: 960px !important;
  --flair-background: #fbfcfc !important;
  --flair-color: #08090e !important;
  --footnote-divider-color: #818184 !important;
  --footnote-id-color: #818184 !important;
  --footnote-id-color-no-occurrences: #818184 !important;
  --footnote-input-background-active: #f1f2f5 !important;
  --graph-line: #68696c !important;
  --graph-node: #818184 !important;
  --graph-node-attachment: #ebcb8b !important;
  --graph-node-focused: rgb(241, 203, 131) !important;
  --graph-node-tag: #81f1a4 !important;
  --graph-node-unresolved: #818184 !important;
  --graph-text: #08090e !important;
  --gray: #818184 !important;
  --h1-size: 1.8em !important;
  --h2-size: 1.8em !important;
  --h3-size: 1.8em !important;
  --h4-size: 1.8em !important;
  --h5-size: 1.8em !important;
  --h6-size: 1.8em !important;
  --heading-count-bg-color: #f1f2f5 !important;
  --heading-count-color: #818184 !important;
  --heading-formatting: #818184 !important;
  --highlight: rgba(129, 129, 132, 0.4) !important;
  --hr-color: #f1f2f5 !important;
  --hr-thickness: 3px !important;
  --icon-color: #08090e !important;
  --icon-color-active: rgb(241, 203, 131) !important;
  --icon-color-focused: #08090e !important;
  --icon-color-hover: #818184 !important;
  --indent-use-default: 3.5ch !important;
  --indentation-guide-color: rgba(8, 9, 14, 0.12) !important;
  --indentation-guide-color-active: rgba(8, 9, 14, 0.3) !important;
  --indentation-guide-width: 0px !important;
  --inline-title-size: 1.8em !important;
  --input-color: #fbfcfc !important;
  --input-date-separator: #818184 !important;
  --input-placeholder-color: #818184 !important;
  --interactive-accent: rgb(244, 211, 153) !important;
  --interactive-accent-hover: rgb(248, 221, 181) !important;
  --interactive-accent-hsl: 39, 80%, 73% !important;
  --interactive-hover: #e1e2e9 !important;
  --interactive-normal: #fbfcfc !important;
  --light: #fbfcfc !important;
  --lightgray: #fbfcfc !important;
  --line-highlight-color: rgba(241, 242, 245, 0) !important;
  --link-color: #f18196 !important;
  --link-color-hover: rgb(248, 221, 181) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(241, 203, 131) !important;
  --link-external-color-hover: rgb(248, 221, 181) !important;
  --link-unresolved-color: #8be3eb !important;
  --link-unresolved-decoration-color: rgba(241, 203, 131, 0.3) !important;
  --list-marker-color: #818184 !important;
  --list-marker-color-collapsed: rgb(241, 203, 131) !important;
  --list-marker-color-hover: #818184 !important;
  --menu-background: #fbfcfc !important;
  --menu-border-color: #68696c !important;
  --metadata-background-color: #fbfcfc !important;
  --metadata-border-color: #818184 !important;
  --metadata-divider-color: #818184 !important;
  --metadata-input-background-active: #f1f2f5 !important;
  --metadata-input-text-color: #08090e !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-text-color: #08090e !important;
  --metadata-label-text-color-hover: #818184 !important;
  --metadata-property-background-active: #f1f2f5 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #68696c !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #68696c !important;
  --modal-Color: 251, 252, 252 !important;
  --modal-background: #fbfcfc !important;
  --modal-border-color: #68696c !important;
  --mono-rgb-0: 251, 252, 252 !important;
  --mono-rgb-100: 8, 9, 14 !important;
  --nav-collapse-icon-color: #68696c !important;
  --nav-collapse-icon-color-collapsed: #818184 !important;
  --nav-color: 251, 252, 252 !important;
  --nav-heading-color: #08090e !important;
  --nav-heading-color-collapsed: #818184 !important;
  --nav-heading-color-collapsed-hover: #818184 !important;
  --nav-heading-color-hover: #08090e !important;
  --nav-indentation-guide-color: rgba(8, 9, 14, 0.12) !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: #f1f2f5 !important;
  --nav-item-background-hover: #f1f2f5 !important;
  --nav-item-background-selected: rgba(241, 203, 131, 0.15) !important;
  --nav-item-color: #08090e !important;
  --nav-item-color-active: #08090e !important;
  --nav-item-color-highlighted: rgb(241, 203, 131) !important;
  --nav-item-color-hover: #08090e !important;
  --nav-item-color-selected: #08090e !important;
  --nav-tag-color: #818184 !important;
  --nav-tag-color-active: #818184 !important;
  --nav-tag-color-hover: #818184 !important;
  --pdf-background: #fbfcfc !important;
  --pdf-page-background: #fbfcfc !important;
  --pdf-sidebar-background: #fbfcfc !important;
  --pill-background: #f1f2f5 !important;
  --pill-border-color: #818184 !important;
  --pill-border-color-hover: #68696c !important;
  --pill-color: #818184 !important;
  --pill-color-hover: #08090e !important;
  --pill-color-remove: #818184 !important;
  --pill-color-remove-hover: rgb(241, 203, 131) !important;
  --prompt-background: #fbfcfc !important;
  --prompt-border-color: #68696c !important;
  --raised-background: color-mix(in srgb, #fbfcfc 65%, transparent) linear-gradient(#fbfcfc, color-mix(in srgb, #fbfcfc 65%, transparent)) !important;
  --ribbon-background: #fbfcfc !important;
  --ribbon-background-collapsed: #fbfcfc !important;
  --ribbon-padding: 16px 0 0px 0 !important;
  --ribbon-width: 48px !important;
  --scrollbar-active-thumb-bg: rgba(8, 9, 14, 0.2) !important;
  --scrollbar-bg: rgba(8, 9, 14, 0.05) !important;
  --scrollbar-thumb-bg: rgba(8, 9, 14, 0.1) !important;
  --search-clear-button-color: #818184 !important;
  --search-icon-color: #818184 !important;
  --search-result-background: #fbfcfc !important;
  --secondary: rgb(241, 203, 131) !important;
  --select-color: #e1e2e9 !important;
  --setting-group-heading-color: #08090e !important;
  --setting-items-background: #f1f2f5 !important;
  --setting-items-border-color: #818184 !important;
  --shadow-open-tabs: #fbfcfc !important;
  --side-dock-color: #f1f2f5 !important;
  --slider-thumb-border-color: #68696c !important;
  --slider-track-background: #818184 !important;
  --status-bar-background: #fbfcfc !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #818184 !important;
  --suggestion-background: #fbfcfc !important;
  --swatch-shadow: inset 0 0 0 1px rgba(8, 9, 14, 0.15) !important;
  --sync-avatar-color-1: 241, 129, 150 !important;
  --sync-avatar-color-2: #f19a81 !important;
  --sync-avatar-color-3: #ebcb8b !important;
  --sync-avatar-color-4: #81f1a4 !important;
  --sync-avatar-color-5: #8be3eb !important;
  --sync-avatar-color-6: #bcf181 !important;
  --sync-avatar-color-7: #ab8beb !important;
  --sync-avatar-color-8: #ee81f1 !important;
  --tab-background-active: #fbfcfc !important;
  --tab-container-background: #fbfcfc !important;
  --tab-divider-color: #68696c !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 0px !important;
  --tab-radius-active: 0 0 0 0 !important;
  --tab-stacked-pane-width: 800px !important;
  --tab-switcher-background: #fbfcfc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fbfcfc, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(8, 9, 14, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(241, 203, 131) !important;
  --tab-text-color: #818184 !important;
  --tab-text-color-active: #818184 !important;
  --tab-text-color-focused: #818184 !important;
  --tab-text-color-focused-active: #818184 !important;
  --tab-text-color-focused-active-current: #08090e !important;
  --tab-text-color-focused-highlighted: rgb(241, 203, 131) !important;
  --table-add-button-border-color: #818184 !important;
  --table-border-color: #e1e2e9 !important;
  --table-drag-handle-background-active: rgb(244, 211, 153) !important;
  --table-drag-handle-color: #818184 !important;
  --table-drag-handle-color-active: #08090e !important;
  --table-header-border-color: #e1e2e9 !important;
  --table-header-color: #08090e !important;
  --table-selection: rgba(241, 203, 131, 0.1) !important;
  --table-selection-border-color: rgb(244, 211, 153) !important;
  --tag-background: rgba(241, 203, 131, 0.1) !important;
  --tag-background-hover: rgba(241, 203, 131, 0.2) !important;
  --tag-border-color: transparent !important;
  --tag-border-color-hover: rgba(241, 203, 131, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(241, 203, 131) !important;
  --tag-color-hover: rgb(241, 203, 131) !important;
  --tag-padding-x: 0.56em !important;
  --tag-padding-y: 0.16em !important;
  --tag-radius: 16px !important;
  --tertiary: rgb(248, 221, 181) !important;
  --text-accent: rgb(241, 203, 131) !important;
  --text-accent-hover: rgb(248, 221, 181) !important;
  --text-error: 241, 129, 150 !important;
  --text-faint: #818184 !important;
  --text-highlight-bg: rgba(129, 129, 132, 0.4) !important;
  --text-highlight-bg-rgb: 129, 129, 132 !important;
  --text-muted: #818184 !important;
  --text-normal: #08090e !important;
  --text-on-accent: #08090e !important;
  --text-selection: #e1e2e9 !important;
  --text-success: #81f1a4 !important;
  --text-warning: #f19a81 !important;
  --textHighlight: rgba(129, 129, 132, 0.4) !important;
  --th-bg: #f1f2f5 !important;
  --titlebar-background: #fbfcfc !important;
  --titlebar-background-focused: #fbfcfc !important;
  --titlebar-border-color: #818184 !important;
  --titlebar-text-color: #818184 !important;
  --titlebar-text-color-focused: #08090e !important;
  --vault-profile-color: #08090e !important;
  --vault-profile-color-hover: #08090e !important;
  --vicious-color-count: 11 !important;
  --vicious-indent-1: #f18196 !important;
  --vicious-indent-10: #ee81f1 !important;
  --vicious-indent-11: #f181c5 !important;
  --vicious-indent-2: #f19a81 !important;
  --vicious-indent-3: #ebcb8b !important;
  --vicious-indent-4: #e3eb8b !important;
  --vicious-indent-5: #bcf181 !important;
  --vicious-indent-6: #8df181 !important;
  --vicious-indent-7: #81f1a4 !important;
  --vicious-indent-8: #8be3eb !important;
  --vicious-indent-9: #ab8beb !important;
  --vicious-indent-bg-size: 46.2ch
		1px !important;
  --vicious-indent-colorful-bg: linear-gradient(
		to right,
		#f18196 0 3px,
		transparent 3px
			4.2ch,
		#f19a81 4.2ch
			calc(4.2ch + 3px),
		transparent
			calc(4.2ch + 3px)
			8.4ch,
		#ebcb8b 8.4ch
			calc(8.4ch + 3px),
		transparent
			calc(8.4ch + 3px)
			12.6ch,
		#e3eb8b 12.6ch
			calc(12.6ch + 3px),
		transparent
			calc(12.6ch + 3px)
			16.8ch,
		#bcf181 16.8ch
			calc(16.8ch + 3px),
		transparent
			calc(16.8ch + 3px)
			21ch,
		#8df181 21ch
			calc(21ch + 3px),
		transparent
			calc(21ch + 3px)
			25.2ch,
		#81f1a4 25.2ch
			calc(25.2ch + 3px),
		transparent
			calc(25.2ch + 3px)
			29.4ch,
		#8be3eb 29.4ch
			calc(29.4ch + 3px),
		transparent
			calc(29.4ch + 3px)
			33.6ch,
		#ab8beb 33.6ch
			calc(33.6ch + 3px),
		transparent
			calc(33.6ch + 3px)
			37.8ch,
		#ee81f1 37.8ch
			calc(37.8ch + 3px),
		transparent
			calc(37.8ch + 3px)
			42ch,
		#f181c5 42ch
			calc(42ch + 3px),
		transparent
			calc(29.4ch + 3px)
			33.6ch
	) !important;
  --vicious-indent-width: 4.2ch !important;
  --vicious-left-offset: 2ch !important;
  --vicious-line-width: 3px !important;
  --workspace-background-translucent: rgba(251, 252, 252, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 252, 252);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(241, 242, 245);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 252, 252);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 252, 252);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 252, 252);
  color: rgb(8, 9, 14);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(129, 129, 132, 0.4);
  color: rgb(8, 9, 14);
  outline: rgb(8, 9, 14) none 0px;
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body del {
  color: rgb(8, 9, 14);
  outline: rgb(8, 9, 14) none 0px;
  text-decoration: line-through rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body p {
  color: rgb(129, 129, 132);
  outline: rgb(129, 129, 132) none 0px;
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(241, 203, 131);
  outline: rgb(241, 203, 131) none 0px;
  text-decoration: underline rgb(241, 203, 131);
  text-decoration-color: rgb(241, 203, 131);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(241, 129, 150);
  outline: rgb(241, 129, 150) none 0px;
  text-decoration: rgb(241, 129, 150);
  text-decoration-color: rgb(241, 129, 150);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(139, 227, 235);
  outline: rgb(139, 227, 235) none 0px;
  text-decoration: rgba(241, 203, 131, 0.3);
  text-decoration-color: rgba(241, 203, 131, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(241, 242, 245);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(251, 252, 252);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(8, 9, 14);
  margin-top: 0px;
  width: 934px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(225, 226, 233);
  border-left-color: rgb(225, 226, 233);
  border-right-color: rgb(225, 226, 233);
  border-top-color: rgb(225, 226, 233);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body th {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(225, 226, 233);
  border-left-color: rgb(225, 226, 233);
  border-right-color: rgb(225, 226, 233);
  border-top-color: rgb(225, 226, 233);
  color: rgb(8, 9, 14);
  text-align: center;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(129, 129, 132);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(129, 129, 132);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(129, 129, 132);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(129, 129, 132);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(244, 212, 156);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(244, 212, 156);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgb(251, 252, 252);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 227, 235, 139;
  background-color: rgb(227, 235, 139);
  border-bottom-color: rgba(227, 235, 139, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(227, 235, 139, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(227, 235, 139, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(227, 235, 139, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 241, 201, 129;
  background-color: rgb(241, 201, 129);
  border-bottom-color: rgba(241, 201, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 201, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 201, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 201, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 241, 129, 150;
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgba(241, 129, 150, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 129, 150, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 129, 150, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 129, 150, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 171, 139, 235;
  background-color: rgb(171, 139, 235);
  border-bottom-color: rgba(171, 139, 235, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(171, 139, 235, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(171, 139, 235, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(171, 139, 235, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 241, 129, 197;
  background-color: rgb(241, 129, 197);
  border-bottom-color: rgba(241, 129, 197, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 129, 197, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 129, 197, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 129, 197, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 188, 241, 129;
  background-color: rgb(188, 241, 129);
  border-bottom-color: rgba(188, 241, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(188, 241, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(188, 241, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(188, 241, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 9, 14;
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgba(8, 9, 14, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 9, 14, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(8, 9, 14, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(8, 9, 14, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 241, 154, 129;
  background-color: rgb(241, 154, 129);
  border-bottom-color: rgba(241, 154, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 154, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 154, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 154, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 139, 227, 235;
  background-color: rgb(139, 227, 235);
  border-bottom-color: rgba(139, 227, 235, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(139, 227, 235, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(139, 227, 235, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(139, 227, 235, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 129, 241, 164;
  background-color: rgb(129, 241, 164);
  border-bottom-color: rgba(129, 241, 164, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(129, 241, 164, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(129, 241, 164, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(129, 241, 164, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 241, 201, 129;
  background-color: rgb(241, 201, 129);
  border-bottom-color: rgba(241, 201, 129, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 201, 129, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 201, 129, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 201, 129, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 139, 227, 235;
  background-color: rgb(139, 227, 235);
  border-bottom-color: rgba(139, 227, 235, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(139, 227, 235, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(139, 227, 235, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(139, 227, 235, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 241, 129, 150;
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgba(241, 129, 150, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(241, 129, 150, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(241, 129, 150, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(241, 129, 150, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(129, 129, 132);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(104, 105, 108);
  border-left-color: rgb(104, 105, 108);
  border-right-color: rgb(104, 105, 108);
  border-top-color: rgb(104, 105, 108);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(8, 9, 14);
  outline: rgb(8, 9, 14) none 0px;
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(241, 242, 245);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(104, 105, 108);
  border-left-color: rgb(104, 105, 108);
  border-right-color: rgb(104, 105, 108);
  border-top-color: rgb(104, 105, 108);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(241, 242, 245);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(251, 252, 252);
}

html[saved-theme="light"] body h1 {
  color: rgb(241, 129, 150);
}

html[saved-theme="light"] body h2 {
  color: rgb(241, 154, 129);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body h3 {
  color: rgb(235, 203, 139);
}

html[saved-theme="light"] body h4 {
  color: rgb(188, 241, 129);
}

html[saved-theme="light"] body h5 {
  color: rgb(139, 227, 235);
}

html[saved-theme="light"] body h6 {
  color: rgb(171, 139, 235);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 9, 14;
  border-bottom-color: rgba(8, 9, 14, 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 9, 14, 0.64);
  border-left-width: 1px;
  border-right-color: rgba(8, 9, 14, 0.64);
  border-right-width: 1px;
  border-top-color: rgba(8, 9, 14, 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(8, 9, 14);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(225, 226, 233);
  border-left-color: rgb(225, 226, 233);
  border-left-width: 0px;
  border-right-color: rgb(225, 226, 233);
  border-top-color: rgb(225, 226, 233);
  border-top-width: 0px;
  color: rgb(129, 129, 132);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(8, 9, 14);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: rgb(241, 129, 150);
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(8, 9, 14);
  stroke: rgb(8, 9, 14);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(129, 129, 132);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(251, 252, 252);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 9, 14);
  text-decoration: underline dotted rgb(8, 9, 14);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 9, 14);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 9, 14);
}`,
  },
};
