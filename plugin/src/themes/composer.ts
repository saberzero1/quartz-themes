import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "composer",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 30 !important;
  --accent-l: 65% !important;
  --accent-s: 40% !important;
  --background-gradient: linear-gradient(
		155deg,
		rgb(30, 37, 47) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	) !important;
  --background-modifier-active-hover: rgba(201, 166, 130, 0.1) !important;
  --background-modifier-border: rgb(69, 74, 84) !important;
  --background-modifier-border-focus: #4a5059 !important;
  --background-modifier-border-hover: #404650 !important;
  --background-modifier-error-rgb: 255, 123, 114 !important;
  --background-modifier-form-field: #2f343d !important;
  --background-modifier-form-field-hover: #2f343d !important;
  --background-modifier-message: rgb(43, 47, 59) !important;
  --background-modifier-success-rgb: 123, 204, 148 !important;
  --background-primary: rgb(30, 37, 47) !important;
  --background-primary-alt: rgb(40, 47, 57) !important;
  --background-secondary: rgb(43, 47, 59) !important;
  --background-secondary-alt: rgb(61, 62, 82) !important;
  --bases-cards-background: rgb(30, 37, 47) !important;
  --bases-cards-cover-background: rgb(40, 47, 57) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(69, 74, 84) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #404650 !important;
  --bases-embed-border-color: rgb(69, 74, 84) !important;
  --bases-group-heading-property-color: #8d949d !important;
  --bases-table-border-color: rgb(69, 74, 84) !important;
  --bases-table-cell-background-active: rgb(30, 37, 47) !important;
  --bases-table-cell-background-disabled: rgb(40, 47, 57) !important;
  --bases-table-cell-background-selected: rgba(201, 166, 130, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a5059 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(201, 166, 130) !important;
  --bases-table-group-background: rgb(40, 47, 57) !important;
  --bases-table-header-background: rgb(30, 37, 47) !important;
  --bases-table-header-color: #8d949d !important;
  --bases-table-summary-background: rgb(30, 37, 47) !important;
  --blockquote-background-color: rgba(42, 49, 60, 0.6) !important;
  --blockquote-border-color: #67594c !important;
  --blockquote-color: rgb(207, 197, 175) !important;
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent)) !important;
  --bold-color: #f0f4f8 !important;
  --bold-weight: 600 !important;
  --callout-bug: 255, 123, 114;
  --callout-color: transparent;
  --callout-default: 123, 175, 222;
  --callout-error: 255, 100, 92;
  --callout-example: 182, 155, 255;
  --callout-fail: 255, 123, 114;
  --callout-important: 123, 204, 214;
  --callout-info: 123, 175, 222;
  --callout-question: 255, 182, 104;
  --callout-radius: 8px;
  --callout-success: 123, 204, 148;
  --callout-summary: 123, 204, 214;
  --callout-tip: 123, 204, 214;
  --callout-title-weight: 600;
  --callout-todo: 123, 175, 222;
  --callout-warning: 255, 170, 92;
  --canvas-background: rgb(30, 37, 47) !important;
  --canvas-card-label-color: #5a616a !important;
  --canvas-color-1: 255, 123, 114 !important;
  --canvas-color-2: 255, 182, 104 !important;
  --canvas-color-3: 255, 203, 107 !important;
  --canvas-color-4: 123, 204, 148 !important;
  --canvas-color-5: 123, 204, 214 !important;
  --canvas-color-6: 182, 155, 255 !important;
  --canvas-dot-pattern: #373c46 !important;
  --caret-color: #e3e7eb !important;
  --checkbox-border-color: #5a616a !important;
  --checkbox-border-color-hover: #8d949d !important;
  --checkbox-color: rgb(201, 166, 130) !important;
  --checkbox-color-hover: rgb(217, 189, 165) !important;
  --checkbox-marker-color: rgb(30, 37, 47) !important;
  --checklist-done-color: #8d949d !important;
  --code-background: rgb(40, 47, 57) !important;
  --code-border-color: transparent !important;
  --code-comment: #5a616a !important;
  --code-normal: #ff7b72 !important;
  --code-punctuation: #8d949d !important;
  --codeblock-background: rgba(37, 44, 55, 0.85) !important;
  --codeblock-border: #e5e7eb !important;
  --codeblock-border-radius: 8px !important;
  --codeblock-caret-color: rgb(201, 166, 130) !important;
  --collapse-icon-color: #5a616a !important;
  --collapse-icon-color-collapsed: rgb(217, 189, 165) !important;
  --color-accent: rgb(201, 166, 130) !important;
  --color-accent-1: rgb(217, 189, 165) !important;
  --color-accent-2: rgb(231, 211, 197) !important;
  --color-accent-hsl: 30, 40%, 65% !important;
  --color-base-00: #181c22 !important;
  --color-base-05: #1d2128 !important;
  --color-base-10: #22262e !important;
  --color-base-100: #e3e7eb !important;
  --color-base-20: #282d35 !important;
  --color-base-25: #2f343d !important;
  --color-base-30: #373c46 !important;
  --color-base-35: #404650 !important;
  --color-base-40: #4a5059 !important;
  --color-base-50: #5a616a !important;
  --color-base-60: #6c737b !important;
  --color-base-70: #8d949d !important;
  --color-blue-rgb: 123, 175, 222 !important;
  --color-cyan-rgb: 123, 204, 214 !important;
  --color-green-rgb: 123, 204, 148 !important;
  --color-orange-rgb: 255, 182, 104 !important;
  --color-pink-rgb: 255, 157, 194 !important;
  --color-purple-rgb: 182, 155, 255 !important;
  --color-red-rgb: 255, 123, 114 !important;
  --color-yellow-rgb: 255, 203, 107 !important;
  --dark: #e3e7eb !important;
  --darkgray: #e3e7eb !important;
  --divider-color: rgb(69, 74, 84) !important;
  --divider-color-hover: rgb(201, 166, 130) !important;
  --dropdown-background: #373c46 !important;
  --dropdown-background-hover: #404650 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(69, 74, 84), inset 0 0 0 1px rgb(69, 74, 84) !important;
  --embed-border-start: 2px solid #cbd5e0 !important;
  --file-header-background: rgb(30, 37, 47) !important;
  --file-header-background-focused: rgb(30, 37, 47) !important;
  --file-margins: 24px !important;
  --flair-background: #373c46 !important;
  --flair-color: #e3e7eb !important;
  --footnote-divider-color: rgb(69, 74, 84) !important;
  --footnote-id-color: #8d949d !important;
  --footnote-id-color-no-occurrences: #5a616a !important;
  --footnote-line-height: 1.7 !important;
  --graph-line: #404650 !important;
  --graph-node: #8d949d !important;
  --graph-node-focused: rgb(217, 189, 165) !important;
  --graph-node-unresolved: #5a616a !important;
  --graph-text: #e3e7eb !important;
  --gray: #8d949d !important;
  --h1-color: #e2e6eb !important;
  --h1-indicator-color: #e2e6eb !important;
  --h1-size: 1.69em !important;
  --h2-color: #c5cad4 !important;
  --h2-indicator-color: #c5cad4 !important;
  --h2-size: 1.51em !important;
  --h3-color: #a8aeb9 !important;
  --h3-indicator-color: #a8aeb9 !important;
  --h3-size: 1.35em !important;
  --h4-color: #8f96a1 !important;
  --h4-indicator-color: #8f96a1 !important;
  --h4-size: 1.21em !important;
  --h5-color: #787f8a !important;
  --h5-indicator-color: #787f8a !important;
  --h5-line-height: 1.7 !important;
  --h5-size: 1.1em !important;
  --h6-color: #666d78 !important;
  --h6-indicator-color: #666d78 !important;
  --h6-line-height: 1.7 !important;
  --header-active-bg: rgba(255, 255, 255, 0.05) !important;
  --header-height: 36px !important;
  --heading-formatting: #5a616a !important;
  --heading-indicator-spacing: 6px !important;
  --heading-spacing: 1.8rem !important;
  --highlight: rgba(201, 166, 130, 0.1) !important;
  --hr-color: rgb(69, 74, 84) !important;
  --icon-color: #8d949d !important;
  --icon-color-active: rgb(217, 189, 165) !important;
  --icon-color-focused: #e3e7eb !important;
  --icon-color-hover: #8d949d !important;
  --indentation-guide-color: transparent !important;
  --inline-code-background: rgba(54, 66, 73, 0.4) !important;
  --inline-code-normal: #ff7b72 !important;
  --inline-title-color: #e3e7eb !important;
  --inline-title-size: 1.6rem !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #5a616a !important;
  --input-placeholder-color: #5a616a !important;
  --interactive-accent: rgb(201, 166, 130) !important;
  --interactive-accent-hover: rgb(217, 189, 165) !important;
  --interactive-accent-hsl: 30, 40%, 65% !important;
  --interactive-hover: #404650 !important;
  --interactive-normal: #373c46 !important;
  --light: rgb(30, 37, 47) !important;
  --lightgray: rgb(43, 47, 59) !important;
  --line-height-normal: 1.7 !important;
  --link-color: rgb(217, 189, 165) !important;
  --link-color-hover: rgb(231, 211, 197) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(217, 189, 165) !important;
  --link-external-color-hover: rgb(231, 211, 197) !important;
  --link-unresolved-color: rgb(217, 189, 165) !important;
  --link-unresolved-decoration-color: rgba(201, 166, 130, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #5a616a !important;
  --list-marker-color-collapsed: rgb(217, 189, 165) !important;
  --list-marker-color-hover: #8d949d !important;
  --list-spacing: 0.225em !important;
  --menu-background: rgb(43, 47, 59) !important;
  --menu-border-color: #404650 !important;
  --metadata-border-color: rgb(69, 74, 84) !important;
  --metadata-divider-color: rgb(69, 74, 84) !important;
  --metadata-input-font-size: 14px !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #e3e7eb !important;
  --metadata-label-text-color: #8d949d !important;
  --metadata-label-text-color-hover: #8d949d !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a5059 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #404650 !important;
  --mod-left-ribbon-background: transparent !important;
  --mod-left-ribbon-background-collapsed: transparent !important;
  --mod-left-split-background: transparent !important;
  --mod-right-split-background: transparent !important;
  --mod-root-background: transparent !important;
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84) !important;
  --mod-root-header-background: transparent !important;
  --mod-root-header-margin: 0px 0px 4px 0px !important;
  --modal-background: rgb(30, 37, 47) !important;
  --modal-bg-blur: 3px !important;
  --modal-border-color: #4a5059 !important;
  --nav-button-container-bg: rgba(255, 255, 255, 0.03) !important;
  --nav-collapse-icon-color: #5a616a !important;
  --nav-collapse-icon-color-collapsed: #5a616a !important;
  --nav-heading-color: #e3e7eb !important;
  --nav-heading-color-collapsed: #5a616a !important;
  --nav-heading-color-collapsed-hover: #8d949d !important;
  --nav-heading-color-hover: #e3e7eb !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-selected: rgba(201, 166, 130, 0.15) !important;
  --nav-item-color: #8d949d !important;
  --nav-item-color-active: #e3e7eb !important;
  --nav-item-color-highlighted: rgb(217, 189, 165) !important;
  --nav-item-color-hover: #e3e7eb !important;
  --nav-item-color-selected: #e3e7eb !important;
  --nav-tag-color: #5a616a !important;
  --nav-tag-color-active: #8d949d !important;
  --nav-tag-color-hover: #8d949d !important;
  --outline-collapsed-icon-opacity: 1 !important;
  --paragraph-letter-spacing: 0.035em !important;
  --paragraph-line-height: 1.7 !important;
  --paragraph-word-spacing: 0.035em !important;
  --pdf-background: rgb(30, 37, 47) !important;
  --pdf-page-background: rgb(30, 37, 47) !important;
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84) !important;
  --pdf-sidebar-background: rgb(30, 37, 47) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84) !important;
  --pill-border-color: rgb(69, 74, 84) !important;
  --pill-border-color-hover: #404650 !important;
  --pill-color: #8d949d !important;
  --pill-color-hover: #e3e7eb !important;
  --pill-color-remove: #5a616a !important;
  --pill-color-remove-hover: rgb(217, 189, 165) !important;
  --prompt-background: rgb(30, 37, 47) !important;
  --prompt-border-color: #4a5059 !important;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-padding: 0px !important;
  --root-workspace-background: transparent !important;
  --root-workspace-margin-spacing: 16px !important;
  --root-workspace-padding-bottom: 28px !important;
  --root-workspace-radius: 8px !important;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px !important;
  --search-clear-button-color: #8d949d !important;
  --search-icon-color: #8d949d !important;
  --search-result-background: rgb(30, 37, 47) !important;
  --secondary: rgb(217, 189, 165) !important;
  --setting-group-heading-color: #e3e7eb !important;
  --setting-items-background: rgb(40, 47, 57) !important;
  --setting-items-border-color: rgb(69, 74, 84) !important;
  --side-dock-actions-border-color: rgb(69, 74, 84) !important;
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #404650 !important;
  --slider-track-background: rgb(69, 74, 84) !important;
  --status-bar-background: rgb(43, 47, 59) !important;
  --status-bar-border-color: rgb(69, 74, 84) !important;
  --status-bar-text-color: #8d949d !important;
  --suggestion-background: rgb(30, 37, 47) !important;
  --suggesttion-highlight-color: #ff7b72 !important;
  --tab-background-active: rgba(255, 255, 255, 0.067) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: #404650 !important;
  --tab-outline-color: rgb(69, 74, 84) !important;
  --tab-stacked-header-width: 36px !important;
  --tab-switcher-background: rgb(43, 47, 59) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(43, 47, 59), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(201, 166, 130) !important;
  --tab-text-color: #5a616a !important;
  --tab-text-color-active: #e3e7eb !important;
  --tab-text-color-focused: #5a616a !important;
  --tab-text-color-focused-active: #e3e7eb !important;
  --tab-text-color-focused-active-current: #e3e7eb !important;
  --tab-text-color-focused-highlighted: rgb(217, 189, 165) !important;
  --table-add-button-border-color: rgb(69, 74, 84) !important;
  --table-border-color: rgb(69, 74, 84) !important;
  --table-drag-handle-background-active: rgb(201, 166, 130) !important;
  --table-drag-handle-color: #5a616a !important;
  --table-header-border-color: rgb(69, 74, 84) !important;
  --table-header-color: #e3e7eb !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(201, 166, 130, 0.1) !important;
  --table-selection-border-color: rgb(201, 166, 130) !important;
  --tag-background: rgba(201, 166, 130, 0.1) !important;
  --tag-background-hover: rgba(201, 166, 130, 0.2) !important;
  --tag-border-color: rgba(201, 166, 130, 0.15) !important;
  --tag-border-color-hover: rgba(201, 166, 130, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(217, 189, 165) !important;
  --tag-color-hover: rgb(217, 189, 165) !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: rgb(231, 211, 197) !important;
  --text-accent: rgb(217, 189, 165) !important;
  --text-accent-hover: rgb(231, 211, 197) !important;
  --text-faint: #5a616a !important;
  --text-highlight-background: rgba(169, 146, 106, 0.5) !important;
  --text-highlight-border-color: rgb(210, 170, 127) !important;
  --text-highlight-color: rgb(235, 231, 224) !important;
  --text-muted: #8d949d !important;
  --text-normal: #e3e7eb !important;
  --text-selection: rgba(201, 166, 130, 0.33) !important;
  --textHighlight: rgba(201, 166, 130, 0.1) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgb(69, 74, 84) !important;
  --titlebar-text-color: #8d949d !important;
  --titlebar-text-color-focused: #e3e7eb !important;
  --traffic-lights-offset-x: 36px !important;
  --traffic-lights-offset-y: 36px !important;
  --vault-profile-color: #e3e7eb !important;
  --vault-profile-color-hover: #e3e7eb !important;
  --workspace-header-background: transparent !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(69, 74, 84);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(69, 74, 84);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 37, 47);
  color: rgb(227, 231, 235);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(240, 244, 248);
  outline: rgb(240, 244, 248) none 0px;
  text-decoration: rgb(240, 244, 248);
  text-decoration-color: rgb(240, 244, 248);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(240, 244, 248);
  outline: rgb(240, 244, 248) none 0px;
  text-decoration: rgb(240, 244, 248);
  text-decoration-color: rgb(240, 244, 248);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(169, 146, 106, 0.5);
  color: rgb(235, 231, 224);
  outline: rgb(235, 231, 224) none 0px;
  text-decoration: rgb(235, 231, 224);
  text-decoration-color: rgb(235, 231, 224);
}

html[saved-theme="dark"] body del {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: line-through rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body p {
  color: rgb(141, 148, 157);
  outline: rgb(141, 148, 157) none 0px;
  text-decoration: rgb(141, 148, 157);
  text-decoration-color: rgb(141, 148, 157);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(217, 188, 164);
  outline: rgb(217, 188, 164) none 0px;
  text-decoration: rgb(217, 188, 164);
  text-decoration-color: rgb(217, 188, 164);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(217, 188, 164);
  outline: rgb(217, 188, 164) none 0px;
  text-decoration: rgb(217, 188, 164);
  text-decoration-color: rgb(217, 188, 164);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(217, 188, 164);
  outline: rgb(217, 188, 164) none 0px;
  text-decoration: rgba(201, 166, 130, 0.3);
  text-decoration-color: rgba(201, 166, 130, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body dt {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(90, 97, 106);
  text-decoration: rgb(90, 97, 106);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(42, 49, 60, 0.6);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body table {
  background-color: rgb(40, 47, 57);
  color: rgb(227, 231, 235);
  width: 233.969px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(30, 37, 47);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(227, 231, 235);
  border-left-width: 0px;
  border-right-color: rgb(227, 231, 235);
  border-right-width: 0px;
  border-top-color: rgb(69, 74, 84);
  color: rgb(227, 231, 235);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-left-width: 0px;
  border-right-color: rgb(69, 74, 84);
  border-right-width: 0px;
  border-top-color: rgb(69, 74, 84);
  color: rgb(227, 231, 235);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 123, 114);
  border-left-color: rgb(255, 123, 114);
  border-right-color: rgb(255, 123, 114);
  border-top-color: rgb(255, 123, 114);
  color: rgb(255, 123, 114);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(37, 44, 55, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(37, 44, 55, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(37, 44, 55, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(37, 44, 55, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 148, 157);
  text-decoration: line-through rgb(141, 148, 157);
  text-decoration-color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(90, 97, 106);
  border-left-color: rgb(90, 97, 106);
  border-right-color: rgb(90, 97, 106);
  border-top-color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(90, 97, 106);
  text-decoration: line-through 1px rgb(90, 97, 106);
  text-decoration-color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 123, 204, 214;
  background-color: rgba(123, 204, 214, 0.1);
  border-bottom-color: rgba(123, 204, 214, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 204, 214, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 204, 214, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 204, 214, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 123, 114;
  background-color: rgba(255, 123, 114, 0.1);
  border-bottom-color: rgba(255, 123, 114, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 123, 114, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 123, 114, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 123, 114, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 100, 92;
  background-color: rgba(255, 100, 92, 0.1);
  border-bottom-color: rgba(255, 100, 92, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 100, 92, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 100, 92, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 100, 92, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 182, 155, 255;
  background-color: rgba(182, 155, 255, 0.1);
  border-bottom-color: rgba(182, 155, 255, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(182, 155, 255, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(182, 155, 255, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(182, 155, 255, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 123, 114;
  background-color: rgba(255, 123, 114, 0.1);
  border-bottom-color: rgba(255, 123, 114, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 123, 114, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 123, 114, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 123, 114, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 123, 175, 222;
  background-color: rgba(123, 175, 222, 0.1);
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 123, 175, 222;
  background-color: rgba(123, 175, 222, 0.1);
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255, 182, 104;
  background-color: rgba(255, 182, 104, 0.1);
  border-bottom-color: rgba(255, 182, 104, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 182, 104, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 182, 104, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 182, 104, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 123, 204, 148;
  background-color: rgba(123, 204, 148, 0.1);
  border-bottom-color: rgba(123, 204, 148, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 204, 148, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 204, 148, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 204, 148, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 123, 204, 214;
  background-color: rgba(123, 204, 214, 0.1);
  border-bottom-color: rgba(123, 204, 214, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 204, 214, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 204, 214, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 204, 214, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 123, 175, 222;
  background-color: rgba(123, 175, 222, 0.1);
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 170, 92;
  background-color: rgba(255, 170, 92, 0.1);
  border-bottom-color: rgba(255, 170, 92, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 170, 92, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 170, 92, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 170, 92, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(47, 52, 61);
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
  border-top-color: rgb(69, 74, 84);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 37, 47);
  border-bottom-color: rgb(74, 80, 89);
  border-left-color: rgb(74, 80, 89);
  border-right-color: rgb(74, 80, 89);
  border-top-color: rgb(74, 80, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 80, 89);
  border-left-color: rgb(74, 80, 89);
  border-right-color: rgb(74, 80, 89);
  border-top-color: rgb(74, 80, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(43, 47, 59);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(201, 166, 130, 0.1);
  border-bottom-color: rgba(201, 166, 130, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(201, 166, 130, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(201, 166, 130, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(201, 166, 130, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(217, 188, 164);
}

html[saved-theme="dark"] body h1 {
  color: rgb(226, 230, 235);
}

html[saved-theme="dark"] body h2 {
  color: rgb(197, 202, 212);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body h3 {
  color: rgb(168, 174, 185);
}

html[saved-theme="dark"] body h4 {
  color: rgb(143, 150, 161);
}

html[saved-theme="dark"] body h5 {
  color: rgb(120, 127, 138);
}

html[saved-theme="dark"] body h6 {
  color: rgb(102, 109, 120);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(123, 175, 222, 0.85);
  text-decoration: rgba(123, 175, 222, 0.85);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(123, 175, 222, 0.7);
  text-decoration: rgba(123, 175, 222, 0.7);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-left-width: 0px;
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  border-top-width: 0px;
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 148, 157);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(141, 148, 157);
  stroke: rgb(141, 148, 157);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(90, 97, 106);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
  border-top-color: rgb(69, 74, 84);
  color: rgb(141, 148, 157);
  margin-bottom: 8px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body abbr {
  color: rgb(227, 231, 235);
  text-decoration: underline dotted rgb(227, 231, 235);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(255, 123, 114);
  border-left-color: rgb(255, 123, 114);
  border-right-color: rgb(255, 123, 114);
  border-top-color: rgb(255, 123, 114);
  color: rgb(255, 123, 114);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body sub {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body summary {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body sup {
  color: rgb(227, 231, 235);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 12 !important;
  --accent-l: 60% !important;
  --accent-s: 31% !important;
  --background-gradient: linear-gradient(
		rgb(217, 224, 227),
		rgb(235, 215, 210)
	) !important;
  --background-modifier-active-hover: rgba(185, 134, 121, 0.1) !important;
  --background-modifier-border: rgba(194, 176, 163, 0.4) !important;
  --background-modifier-border-focus: #a3958c !important;
  --background-modifier-border-hover: #b6a79d !important;
  --background-modifier-error-rgb: 174, 62, 76 !important;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	) !important;
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	) !important;
  --background-modifier-message: rgb(232, 223, 217) !important;
  --background-modifier-success-rgb: 62, 132, 98 !important;
  --background-primary: rgb(243, 237, 233) !important;
  --background-primary-alt: rgb(238, 230, 225) !important;
  --background-secondary: rgb(232, 223, 217) !important;
  --background-secondary-alt: rgb(225, 215, 208) !important;
  --bases-cards-background: rgb(243, 237, 233) !important;
  --bases-cards-cover-background: rgb(238, 230, 225) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(194, 176, 163, 0.4) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #b6a79d !important;
  --bases-embed-border-color: rgba(194, 176, 163, 0.4) !important;
  --bases-group-heading-property-color: #554d47 !important;
  --bases-table-border-color: rgba(194, 176, 163, 0.4) !important;
  --bases-table-cell-background-active: rgb(243, 237, 233) !important;
  --bases-table-cell-background-disabled: rgb(238, 230, 225) !important;
  --bases-table-cell-background-selected: rgba(185, 134, 121, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #a3958c !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(193, 148, 138) !important;
  --bases-table-group-background: rgb(238, 230, 225) !important;
  --bases-table-header-background: rgb(243, 237, 233) !important;
  --bases-table-header-color: #554d47 !important;
  --bases-table-summary-background: rgb(243, 237, 233) !important;
  --blockquote-background-color: rgba(237, 228, 222, 0.811) !important;
  --blockquote-border-color: rgb(194, 176, 163) !important;
  --blockquote-color: rgb(92, 74, 61) !important;
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent)) !important;
  --bold-color: #2d3748 !important;
  --bold-weight: 600 !important;
  --callout-bug: 174, 62, 76;
  --callout-color: transparent;
  --callout-default: 95, 164, 218;
  --callout-error: 158, 48, 57;
  --callout-example: 94, 72, 146;
  --callout-fail: 174, 62, 76;
  --callout-important: 52, 136, 152;
  --callout-info: 95, 164, 218;
  --callout-question: 184, 110, 51;
  --callout-radius: 8px;
  --callout-success: 62, 132, 98;
  --callout-summary: 52, 136, 152;
  --callout-tip: 52, 136, 152;
  --callout-title-weight: 600;
  --callout-todo: 95, 164, 218;
  --callout-warning: 191, 127, 63;
  --canvas-background: rgb(243, 237, 233) !important;
  --canvas-card-label-color: #8a7e76 !important;
  --canvas-color-1: 174, 62, 76 !important;
  --canvas-color-2: 184, 110, 51 !important;
  --canvas-color-3: 191, 143, 63 !important;
  --canvas-color-4: 62, 132, 98 !important;
  --canvas-color-5: 52, 136, 152 !important;
  --canvas-color-6: 94, 72, 146 !important;
  --canvas-dot-pattern: #c8b9af !important;
  --caret-color: #3a3330 !important;
  --checkbox-border-color: #8a7e76 !important;
  --checkbox-border-color-hover: #554d47 !important;
  --checkbox-color: rgb(193, 148, 138) !important;
  --checkbox-color-hover: rgb(201, 158, 151) !important;
  --checkbox-marker-color: rgb(243, 237, 233) !important;
  --checklist-done-color: #554d47 !important;
  --code-background: rgb(238, 230, 225) !important;
  --code-border-color: transparent !important;
  --code-comment: #8a7e76 !important;
  --code-normal: #eb5757 !important;
  --code-punctuation: #554d47 !important;
  --codeblock-background: rgba(234, 223, 215, 0.749) !important;
  --codeblock-border-radius: 8px !important;
  --codeblock-caret-color: rgb(92, 74, 61) !important;
  --collapse-icon-color: #8a7e76 !important;
  --collapse-icon-color-collapsed: rgb(185, 134, 121) !important;
  --color-accent: rgb(185, 134, 121) !important;
  --color-accent-1: rgb(193, 148, 138) !important;
  --color-accent-2: rgb(201, 158, 151) !important;
  --color-accent-hsl: 12, 31%, 60% !important;
  --color-base-00: #f8f4f0 !important;
  --color-base-05: #f3ece6 !important;
  --color-base-10: #eee6df !important;
  --color-base-100: #3a3330 !important;
  --color-base-20: #e6dcd3 !important;
  --color-base-25: #d8ccc2 !important;
  --color-base-30: #c8b9af !important;
  --color-base-35: #b6a79d !important;
  --color-base-40: #a3958c !important;
  --color-base-50: #8a7e76 !important;
  --color-base-60: #6b625b !important;
  --color-base-70: #554d47 !important;
  --color-blue-rgb: 95, 164, 218 !important;
  --color-cyan-rgb: 52, 136, 152 !important;
  --color-green-rgb: 62, 132, 98 !important;
  --color-orange-rgb: 184, 110, 51 !important;
  --color-pink-rgb: 184, 92, 132 !important;
  --color-purple-rgb: 94, 72, 146 !important;
  --color-red-rgb: 174, 62, 76 !important;
  --color-yellow-rgb: 191, 143, 63 !important;
  --dark: #3a3330 !important;
  --darkgray: #3a3330 !important;
  --divider-color: rgba(194, 176, 163, 0.4) !important;
  --divider-color-hover: rgb(193, 148, 138) !important;
  --dropdown-background: #f8f4f0 !important;
  --dropdown-background-hover: #eee6df !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(194, 176, 163, 0.4), inset 0 0 0 1px rgba(194, 176, 163, 0.4) !important;
  --embed-border-start: 2px solid #cbd5e0 !important;
  --file-header-background: rgb(243, 237, 233) !important;
  --file-header-background-focused: rgb(243, 237, 233) !important;
  --file-margins: 24px !important;
  --flair-background: #f8f4f0 !important;
  --flair-color: #3a3330 !important;
  --footnote-divider-color: rgba(194, 176, 163, 0.4) !important;
  --footnote-id-color: #554d47 !important;
  --footnote-id-color-no-occurrences: #8a7e76 !important;
  --footnote-line-height: 1.7 !important;
  --graph-line: #b6a79d !important;
  --graph-node: #554d47 !important;
  --graph-node-focused: rgb(185, 134, 121) !important;
  --graph-node-unresolved: #8a7e76 !important;
  --graph-text: #3a3330 !important;
  --gray: #554d47 !important;
  --h1-color: #2d3748 !important;
  --h1-indicator-color: #2d3748 !important;
  --h1-size: 1.69em !important;
  --h2-color: #4a556b !important;
  --h2-indicator-color: #4a556b !important;
  --h2-size: 1.51em !important;
  --h3-color: #66788d !important;
  --h3-indicator-color: #66788d !important;
  --h3-size: 1.35em !important;
  --h4-color: #7f8a9b !important;
  --h4-indicator-color: #7f8a9b !important;
  --h4-size: 1.21em !important;
  --h5-color: #9aa5b5 !important;
  --h5-indicator-color: #9aa5b5 !important;
  --h5-line-height: 1.7 !important;
  --h5-size: 1.1em !important;
  --h6-color: #808080 !important;
  --h6-indicator-color: #808080 !important;
  --h6-line-height: 1.7 !important;
  --header-active-bg: rgba(31, 34, 37, 0.03) !important;
  --header-height: 36px !important;
  --heading-formatting: #8a7e76 !important;
  --heading-indicator-spacing: 6px !important;
  --heading-spacing: 1.8rem !important;
  --highlight: rgba(185, 134, 121, 0.1) !important;
  --hr-color: rgba(194, 176, 163, 0.4) !important;
  --icon-color: #554d47 !important;
  --icon-color-active: rgb(185, 134, 121) !important;
  --icon-color-focused: #3a3330 !important;
  --icon-color-hover: #554d47 !important;
  --indentation-guide-color: transparent !important;
  --inline-code-background: rgba(240, 230, 219, 0.6) !important;
  --inline-code-normal: #eb5757 !important;
  --inline-title-color: #3a3330 !important;
  --inline-title-size: 1.6rem !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #8a7e76 !important;
  --input-placeholder-color: #8a7e76 !important;
  --interactive-accent: rgb(193, 148, 138) !important;
  --interactive-accent-hover: rgb(201, 158, 151) !important;
  --interactive-accent-hsl: 12, 31%, 60% !important;
  --interactive-hover: #eee6df !important;
  --interactive-normal: #f8f4f0 !important;
  --light: rgb(243, 237, 233) !important;
  --lightgray: rgb(232, 223, 217) !important;
  --line-height-normal: 1.7 !important;
  --link-color: rgb(185, 134, 121) !important;
  --link-color-hover: rgb(201, 158, 151) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(185, 134, 121) !important;
  --link-external-color-hover: rgb(201, 158, 151) !important;
  --link-unresolved-color: rgb(185, 134, 121) !important;
  --link-unresolved-decoration-color: rgba(185, 134, 121, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #8a7e76 !important;
  --list-marker-color-collapsed: rgb(185, 134, 121) !important;
  --list-marker-color-hover: #554d47 !important;
  --list-spacing: 0.225em !important;
  --menu-background: rgb(232, 223, 217) !important;
  --menu-border-color: #b6a79d !important;
  --metadata-border-color: rgba(194, 176, 163, 0.4) !important;
  --metadata-divider-color: rgba(194, 176, 163, 0.4) !important;
  --metadata-input-font-size: 14px !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #3a3330 !important;
  --metadata-label-text-color: #554d47 !important;
  --metadata-label-text-color-hover: #554d47 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a3958c !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b6a79d !important;
  --mod-left-ribbon-background: transparent !important;
  --mod-left-ribbon-background-collapsed: transparent !important;
  --mod-left-split-background: transparent !important;
  --mod-right-split-background: transparent !important;
  --mod-root-background: transparent !important;
  --mod-root-border: 0px 1px 0px 1px solid rgba(194, 176, 163, 0.4) !important;
  --mod-root-header-background: transparent !important;
  --mod-root-header-margin: 0px 0px 4px 0px !important;
  --modal-background: rgb(243, 237, 233) !important;
  --modal-bg-blur: 3px !important;
  --modal-border-color: #a3958c !important;
  --nav-button-container-bg: rgba(31, 34, 37, 0.03) !important;
  --nav-collapse-icon-color: #8a7e76 !important;
  --nav-collapse-icon-color-collapsed: #8a7e76 !important;
  --nav-heading-color: #3a3330 !important;
  --nav-heading-color-collapsed: #8a7e76 !important;
  --nav-heading-color-collapsed-hover: #554d47 !important;
  --nav-heading-color-hover: #3a3330 !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-selected: rgba(185, 134, 121, 0.15) !important;
  --nav-item-color: #554d47 !important;
  --nav-item-color-active: #3a3330 !important;
  --nav-item-color-highlighted: rgb(185, 134, 121) !important;
  --nav-item-color-hover: #3a3330 !important;
  --nav-item-color-selected: #3a3330 !important;
  --nav-tag-color: #8a7e76 !important;
  --nav-tag-color-active: #554d47 !important;
  --nav-tag-color-hover: #554d47 !important;
  --outline-collapsed-icon-opacity: 1 !important;
  --paragraph-letter-spacing: 0.035em !important;
  --paragraph-line-height: 1.7 !important;
  --paragraph-word-spacing: 0.035em !important;
  --pdf-background: rgb(243, 237, 233) !important;
  --pdf-page-background: rgb(243, 237, 233) !important;
  --pdf-sidebar-background: rgb(243, 237, 233) !important;
  --pill-border-color: rgba(194, 176, 163, 0.4) !important;
  --pill-border-color-hover: #b6a79d !important;
  --pill-color: #554d47 !important;
  --pill-color-hover: #3a3330 !important;
  --pill-color-remove: #8a7e76 !important;
  --pill-color-remove-hover: rgb(185, 134, 121) !important;
  --prompt-background: rgb(243, 237, 233) !important;
  --prompt-border-color: #a3958c !important;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-padding: 0px !important;
  --root-workspace-background: transparent !important;
  --root-workspace-margin-spacing: 16px !important;
  --root-workspace-padding-bottom: 28px !important;
  --root-workspace-radius: 8px !important;
  --root-workspace-shadow: rgba(194, 176, 163, 0.4) 0px 0px 3px 0px,
		rgba(194, 176, 163, 0.4) 0px 1px 2px 0px !important;
  --search-clear-button-color: #554d47 !important;
  --search-icon-color: #554d47 !important;
  --search-result-background: rgb(243, 237, 233) !important;
  --secondary: rgb(185, 134, 121) !important;
  --setting-group-heading-color: #3a3330 !important;
  --setting-items-background: rgb(238, 230, 225) !important;
  --setting-items-border-color: rgba(194, 176, 163, 0.4) !important;
  --side-dock-actions-border-color: rgba(194, 176, 163, 0.4) !important;
  --side-dock-actions-shadow: rgba(194, 176, 163, 0.4) 0px 1px 2px
			0px,
		rgba(194, 176, 163, 0.4) 0px 0px 0px 1px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #b6a79d !important;
  --slider-track-background: rgba(194, 176, 163, 0.4) !important;
  --status-bar-background: rgb(232, 223, 217) !important;
  --status-bar-border-color: rgba(194, 176, 163, 0.4) !important;
  --status-bar-text-color: #554d47 !important;
  --suggestion-background: rgb(243, 237, 233) !important;
  --suggesttion-highlight-color: #eb5757 !important;
  --tab-background-active: rgba(0, 0, 0, 0.067) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: #b6a79d !important;
  --tab-outline-color: rgba(194, 176, 163, 0.4) !important;
  --tab-stacked-header-width: 36px !important;
  --tab-switcher-background: rgb(232, 223, 217) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(185, 134, 121) !important;
  --tab-text-color: #8a7e76 !important;
  --tab-text-color-active: #3a3330 !important;
  --tab-text-color-focused: #8a7e76 !important;
  --tab-text-color-focused-active: #3a3330 !important;
  --tab-text-color-focused-active-current: #3a3330 !important;
  --tab-text-color-focused-highlighted: rgb(185, 134, 121) !important;
  --table-add-button-border-color: rgba(194, 176, 163, 0.4) !important;
  --table-border-color: rgba(194, 176, 163, 0.4) !important;
  --table-drag-handle-background-active: rgb(193, 148, 138) !important;
  --table-drag-handle-color: #8a7e76 !important;
  --table-header-border-color: rgba(194, 176, 163, 0.4) !important;
  --table-header-color: #3a3330 !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(185, 134, 121, 0.1) !important;
  --table-selection-border-color: rgb(193, 148, 138) !important;
  --tag-background: rgba(185, 134, 121, 0.1) !important;
  --tag-background-hover: rgba(185, 134, 121, 0.2) !important;
  --tag-border-color: rgba(185, 134, 121, 0.15) !important;
  --tag-border-color-hover: rgba(185, 134, 121, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(185, 134, 121) !important;
  --tag-color-hover: rgb(185, 134, 121) !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: rgb(201, 158, 151) !important;
  --text-accent: rgb(185, 134, 121) !important;
  --text-accent-hover: rgb(201, 158, 151) !important;
  --text-faint: #8a7e76 !important;
  --text-highlight-background: rgba(248, 227, 217, 0.9) !important;
  --text-highlight-border-color: rgb(167, 98, 64) !important;
  --text-highlight-border-radius: 4px !important;
  --text-highlight-color: rgb(102, 80, 63) !important;
  --text-muted: #554d47 !important;
  --text-normal: #3a3330 !important;
  --text-selection: rgba(185, 134, 121, 0.2) !important;
  --textHighlight: rgba(185, 134, 121, 0.1) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgba(194, 176, 163, 0.4) !important;
  --titlebar-text-color: #554d47 !important;
  --titlebar-text-color-focused: #3a3330 !important;
  --traffic-lights-offset-x: 36px !important;
  --traffic-lights-offset-y: 36px !important;
  --vault-profile-color: #3a3330 !important;
  --vault-profile-color-hover: #3a3330 !important;
  --workspace-header-background: transparent !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(194, 176, 163, 0.4);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(194, 176, 163, 0.4);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(243, 237, 233);
  color: rgb(58, 51, 48);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(45, 55, 72);
  outline: rgb(45, 55, 72) none 0px;
  text-decoration: rgb(45, 55, 72);
  text-decoration-color: rgb(45, 55, 72);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(45, 55, 72);
  outline: rgb(45, 55, 72) none 0px;
  text-decoration: rgb(45, 55, 72);
  text-decoration-color: rgb(45, 55, 72);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(248, 227, 217, 0.9);
  color: rgb(102, 80, 63);
  outline: rgb(102, 80, 63) none 0px;
  text-decoration: rgb(102, 80, 63);
  text-decoration-color: rgb(102, 80, 63);
}

html[saved-theme="light"] body del {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: line-through rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body p {
  color: rgb(85, 77, 71);
  outline: rgb(85, 77, 71) none 0px;
  text-decoration: rgb(85, 77, 71);
  text-decoration-color: rgb(85, 77, 71);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(185, 134, 121);
  outline: rgb(185, 134, 121) none 0px;
  text-decoration: rgb(185, 134, 121);
  text-decoration-color: rgb(185, 134, 121);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(185, 134, 121);
  outline: rgb(185, 134, 121) none 0px;
  text-decoration: rgb(185, 134, 121);
  text-decoration-color: rgb(185, 134, 121);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(185, 134, 121);
  outline: rgb(185, 134, 121) none 0px;
  text-decoration: rgba(185, 134, 121, 0.3);
  text-decoration-color: rgba(185, 134, 121, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body dt {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ol > li {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ul > li {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(138, 126, 118);
  text-decoration: rgb(138, 126, 118);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(237, 228, 222, 0.81);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body table {
  background-color: rgb(238, 230, 225);
  color: rgb(58, 51, 48);
  width: 233.969px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(243, 237, 233);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgb(58, 51, 48);
  border-left-width: 0px;
  border-right-color: rgb(58, 51, 48);
  border-right-width: 0px;
  border-top-color: rgba(194, 176, 163, 0.4);
  color: rgb(58, 51, 48);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(194, 176, 163, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(194, 176, 163, 0.4);
  color: rgb(58, 51, 48);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(235, 87, 87);
  border-left-color: rgb(235, 87, 87);
  border-right-color: rgb(235, 87, 87);
  border-top-color: rgb(235, 87, 87);
  color: rgb(235, 87, 87);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(234, 223, 215, 0.75);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(234, 223, 215, 0.75);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(234, 223, 215, 0.75);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(234, 223, 215, 0.75);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body figcaption {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(238, 230, 225);
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 77, 71);
  text-decoration: line-through rgb(85, 77, 71);
  text-decoration-color: rgb(85, 77, 71);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 126, 118);
  border-left-color: rgb(138, 126, 118);
  border-right-color: rgb(138, 126, 118);
  border-top-color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(138, 126, 118);
  text-decoration: line-through 1px rgb(138, 126, 118);
  text-decoration-color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 52, 136, 152;
  background-color: rgba(52, 136, 152, 0.1);
  border-bottom-color: rgba(52, 136, 152, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(52, 136, 152, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(52, 136, 152, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(52, 136, 152, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 174, 62, 76;
  background-color: rgba(174, 62, 76, 0.1);
  border-bottom-color: rgba(174, 62, 76, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(174, 62, 76, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(174, 62, 76, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(174, 62, 76, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 158, 48, 57;
  background-color: rgba(158, 48, 57, 0.1);
  border-bottom-color: rgba(158, 48, 57, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 48, 57, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 48, 57, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 48, 57, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 94, 72, 146;
  background-color: rgba(94, 72, 146, 0.1);
  border-bottom-color: rgba(94, 72, 146, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(94, 72, 146, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(94, 72, 146, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(94, 72, 146, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 174, 62, 76;
  background-color: rgba(174, 62, 76, 0.1);
  border-bottom-color: rgba(174, 62, 76, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(174, 62, 76, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(174, 62, 76, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(174, 62, 76, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 95, 164, 218;
  background-color: rgba(95, 164, 218, 0.1);
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 95, 164, 218;
  background-color: rgba(95, 164, 218, 0.1);
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 184, 110, 51;
  background-color: rgba(184, 110, 51, 0.1);
  border-bottom-color: rgba(184, 110, 51, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(184, 110, 51, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(184, 110, 51, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(184, 110, 51, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 62, 132, 98;
  background-color: rgba(62, 132, 98, 0.1);
  border-bottom-color: rgba(62, 132, 98, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(62, 132, 98, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(62, 132, 98, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(62, 132, 98, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 52, 136, 152;
  background-color: rgba(52, 136, 152, 0.1);
  border-bottom-color: rgba(52, 136, 152, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(52, 136, 152, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(52, 136, 152, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(52, 136, 152, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 95, 164, 218;
  background-color: rgba(95, 164, 218, 0.1);
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 191, 127, 63;
  background-color: rgba(191, 127, 63, 0.1);
  border-bottom-color: rgba(191, 127, 63, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 127, 63, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(191, 127, 63, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(191, 127, 63, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(185, 134, 121, 0.1);
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
  border-top-color: rgba(194, 176, 163, 0.4);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(243, 237, 233);
  border-bottom-color: rgb(163, 149, 140);
  border-left-color: rgb(163, 149, 140);
  border-right-color: rgb(163, 149, 140);
  border-top-color: rgb(163, 149, 140);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 149, 140);
  border-left-color: rgb(163, 149, 140);
  border-right-color: rgb(163, 149, 140);
  border-top-color: rgb(163, 149, 140);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 223, 217);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(185, 134, 121, 0.1);
  border-bottom-color: rgba(185, 134, 121, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(185, 134, 121, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(185, 134, 121, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(185, 134, 121, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(185, 134, 121);
}

html[saved-theme="light"] body h1 {
  color: rgb(45, 55, 72);
}

html[saved-theme="light"] body h2 {
  color: rgb(74, 85, 107);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body h3 {
  color: rgb(102, 120, 141);
}

html[saved-theme="light"] body h4 {
  color: rgb(127, 138, 155);
}

html[saved-theme="light"] body h5 {
  color: rgb(154, 165, 181);
}

html[saved-theme="light"] body h6 {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(95, 164, 218, 0.85);
  text-decoration: rgba(95, 164, 218, 0.85);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(95, 164, 218, 0.7);
  text-decoration: rgba(95, 164, 218, 0.7);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-left-width: 0px;
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  border-top-width: 0px;
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 77, 71);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(85, 77, 71);
  stroke: rgb(85, 77, 71);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(138, 126, 118);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
  border-top-color: rgba(194, 176, 163, 0.4);
  color: rgb(85, 77, 71);
  margin-bottom: 8px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body abbr {
  color: rgb(58, 51, 48);
  text-decoration: underline dotted rgb(58, 51, 48);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(238, 230, 225);
  border-bottom-color: rgb(235, 87, 87);
  border-left-color: rgb(235, 87, 87);
  border-right-color: rgb(235, 87, 87);
  border-top-color: rgb(235, 87, 87);
  color: rgb(235, 87, 87);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body sub {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body summary {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body sup {
  color: rgb(58, 51, 48);
}`,
  },
};
