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
  --accent-h: 30;
  --accent-l: 65%;
  --accent-s: 40%;
  --background-gradient: linear-gradient(
		155deg,
		rgb(30, 37, 47) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-active-hover: rgba(201, 166, 130, 0.1);
  --background-modifier-border: rgb(69, 74, 84);
  --background-modifier-border-focus: #4a5059;
  --background-modifier-border-hover: #404650;
  --background-modifier-error-rgb: 255, 123, 114;
  --background-modifier-form-field: #2f343d;
  --background-modifier-form-field-hover: #2f343d;
  --background-modifier-message: rgb(43, 47, 59);
  --background-modifier-success-rgb: 123, 204, 148;
  --background-primary: rgb(30, 37, 47);
  --background-primary-alt: rgb(40, 47, 57);
  --background-secondary: rgb(43, 47, 59);
  --background-secondary-alt: rgb(61, 62, 82);
  --bases-cards-background: rgb(30, 37, 47);
  --bases-cards-cover-background: rgb(40, 47, 57);
  --bases-cards-shadow: 0 0 0 1px rgb(69, 74, 84);
  --bases-cards-shadow-hover: 0 0 0 1px #404650;
  --bases-embed-border-color: rgb(69, 74, 84);
  --bases-group-heading-property-color: #8d949d;
  --bases-table-border-color: rgb(69, 74, 84);
  --bases-table-cell-background-active: rgb(30, 37, 47);
  --bases-table-cell-background-disabled: rgb(40, 47, 57);
  --bases-table-cell-background-selected: rgba(201, 166, 130, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #4a5059;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(201, 166, 130);
  --bases-table-group-background: rgb(40, 47, 57);
  --bases-table-header-background: rgb(30, 37, 47);
  --bases-table-header-color: #8d949d;
  --bases-table-summary-background: rgb(30, 37, 47);
  --blockquote-background-color: rgba(42, 49, 60, 0.6);
  --blockquote-border-color: #67594c;
  --blockquote-color: rgb(207, 197, 175);
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --bold-color: #f0f4f8;
  --bold-weight: 600;
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
  --canvas-background: rgb(30, 37, 47);
  --canvas-card-label-color: #5a616a;
  --canvas-color-1: 255, 123, 114;
  --canvas-color-2: 255, 182, 104;
  --canvas-color-3: 255, 203, 107;
  --canvas-color-4: 123, 204, 148;
  --canvas-color-5: 123, 204, 214;
  --canvas-color-6: 182, 155, 255;
  --canvas-dot-pattern: #373c46;
  --caret-color: #e3e7eb;
  --checkbox-border-color: #5a616a;
  --checkbox-border-color-hover: #8d949d;
  --checkbox-color: rgb(201, 166, 130);
  --checkbox-color-hover: rgb(217, 189, 165);
  --checkbox-marker-color: rgb(30, 37, 47);
  --checklist-done-color: #8d949d;
  --code-background: rgb(40, 47, 57);
  --code-border-color: transparent;
  --code-comment: #5a616a;
  --code-normal: #ff7b72;
  --code-punctuation: #8d949d;
  --codeblock-background: rgba(37, 44, 55, 0.85);
  --codeblock-border: #e5e7eb;
  --codeblock-border-radius: 8px;
  --codeblock-caret-color: rgb(201, 166, 130);
  --collapse-icon-color: #5a616a;
  --collapse-icon-color-collapsed: rgb(217, 189, 165);
  --color-accent: rgb(201, 166, 130);
  --color-accent-1: rgb(217, 189, 165);
  --color-accent-2: rgb(231, 211, 197);
  --color-accent-hsl: 30, 40%, 65%;
  --color-base-00: #181c22;
  --color-base-05: #1d2128;
  --color-base-10: #22262e;
  --color-base-100: #e3e7eb;
  --color-base-20: #282d35;
  --color-base-25: #2f343d;
  --color-base-30: #373c46;
  --color-base-35: #404650;
  --color-base-40: #4a5059;
  --color-base-50: #5a616a;
  --color-base-60: #6c737b;
  --color-base-70: #8d949d;
  --color-blue-rgb: 123, 175, 222;
  --color-cyan-rgb: 123, 204, 214;
  --color-green-rgb: 123, 204, 148;
  --color-orange-rgb: 255, 182, 104;
  --color-pink-rgb: 255, 157, 194;
  --color-purple-rgb: 182, 155, 255;
  --color-red-rgb: 255, 123, 114;
  --color-yellow-rgb: 255, 203, 107;
  --divider-color: rgb(69, 74, 84);
  --divider-color-hover: rgb(201, 166, 130);
  --dropdown-background: #373c46;
  --dropdown-background-hover: #404650;
  --embed-block-shadow-hover: 0 0 0 1px rgb(69, 74, 84), inset 0 0 0 1px rgb(69, 74, 84);
  --embed-border-start: 2px solid #cbd5e0;
  --file-header-background: rgb(30, 37, 47);
  --file-header-background-focused: rgb(30, 37, 47);
  --file-margins: 24px;
  --flair-background: #373c46;
  --flair-color: #e3e7eb;
  --footnote-divider-color: rgb(69, 74, 84);
  --footnote-id-color: #8d949d;
  --footnote-id-color-no-occurrences: #5a616a;
  --footnote-line-height: 1.7;
  --graph-line: #404650;
  --graph-node: #8d949d;
  --graph-node-focused: rgb(217, 189, 165);
  --graph-node-unresolved: #5a616a;
  --graph-text: #e3e7eb;
  --h1-color: #e2e6eb;
  --h1-indicator-color: #e2e6eb;
  --h1-size: 1.69em;
  --h2-color: #c5cad4;
  --h2-indicator-color: #c5cad4;
  --h2-size: 1.51em;
  --h3-color: #a8aeb9;
  --h3-indicator-color: #a8aeb9;
  --h3-size: 1.35em;
  --h4-color: #8f96a1;
  --h4-indicator-color: #8f96a1;
  --h4-size: 1.21em;
  --h5-color: #787f8a;
  --h5-indicator-color: #787f8a;
  --h5-line-height: 1.7;
  --h5-size: 1.1em;
  --h6-color: #666d78;
  --h6-indicator-color: #666d78;
  --h6-line-height: 1.7;
  --header-active-bg: rgba(255, 255, 255, 0.05);
  --header-height: 36px;
  --heading-formatting: #5a616a;
  --heading-indicator-spacing: 6px;
  --heading-spacing: 1.8rem;
  --hr-color: rgb(69, 74, 84);
  --icon-color: #8d949d;
  --icon-color-active: rgb(217, 189, 165);
  --icon-color-focused: #e3e7eb;
  --icon-color-hover: #8d949d;
  --indentation-guide-color: transparent;
  --inline-code-background: rgba(54, 66, 73, 0.4);
  --inline-code-normal: #ff7b72;
  --inline-title-color: #e3e7eb;
  --inline-title-size: 1.6rem;
  --inline-title-weight: 500;
  --input-date-separator: #5a616a;
  --input-placeholder-color: #5a616a;
  --interactive-accent: rgb(201, 166, 130);
  --interactive-accent-hover: rgb(217, 189, 165);
  --interactive-accent-hsl: 30, 40%, 65%;
  --interactive-hover: #404650;
  --interactive-normal: #373c46;
  --line-height-normal: 1.7;
  --link-color: rgb(217, 189, 165);
  --link-color-hover: rgb(231, 211, 197);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(217, 189, 165);
  --link-external-color-hover: rgb(231, 211, 197);
  --link-unresolved-color: rgb(217, 189, 165);
  --link-unresolved-decoration-color: rgba(201, 166, 130, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #5a616a;
  --list-marker-color-collapsed: rgb(217, 189, 165);
  --list-marker-color-hover: #8d949d;
  --list-spacing: 0.225em;
  --menu-background: rgb(43, 47, 59);
  --menu-border-color: #404650;
  --metadata-border-color: rgb(69, 74, 84);
  --metadata-divider-color: rgb(69, 74, 84);
  --metadata-input-font-size: 14px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #e3e7eb;
  --metadata-label-text-color: #8d949d;
  --metadata-label-text-color-hover: #8d949d;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a5059;
  --metadata-property-box-shadow-hover: 0 0 0 1px #404650;
  --mod-left-ribbon-background: transparent;
  --mod-left-ribbon-background-collapsed: transparent;
  --mod-left-split-background: transparent;
  --mod-right-split-background: transparent;
  --mod-root-background: transparent;
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84);
  --mod-root-header-background: transparent;
  --mod-root-header-margin: 0px 0px 4px 0px;
  --modal-background: rgb(30, 37, 47);
  --modal-bg-blur: 3px;
  --modal-border-color: #4a5059;
  --nav-button-container-bg: rgba(255, 255, 255, 0.03);
  --nav-collapse-icon-color: #5a616a;
  --nav-collapse-icon-color-collapsed: #5a616a;
  --nav-heading-color: #e3e7eb;
  --nav-heading-color-collapsed: #5a616a;
  --nav-heading-color-collapsed-hover: #8d949d;
  --nav-heading-color-hover: #e3e7eb;
  --nav-indentation-guide-color: transparent;
  --nav-item-background-selected: rgba(201, 166, 130, 0.15);
  --nav-item-color: #8d949d;
  --nav-item-color-active: #e3e7eb;
  --nav-item-color-highlighted: rgb(217, 189, 165);
  --nav-item-color-hover: #e3e7eb;
  --nav-item-color-selected: #e3e7eb;
  --nav-tag-color: #5a616a;
  --nav-tag-color-active: #8d949d;
  --nav-tag-color-hover: #8d949d;
  --outline-collapsed-icon-opacity: 1;
  --paragraph-letter-spacing: 0.035em;
  --paragraph-line-height: 1.7;
  --paragraph-word-spacing: 0.035em;
  --pdf-background: rgb(30, 37, 47);
  --pdf-page-background: rgb(30, 37, 47);
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pdf-sidebar-background: rgb(30, 37, 47);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pill-border-color: rgb(69, 74, 84);
  --pill-border-color-hover: #404650;
  --pill-color: #8d949d;
  --pill-color-hover: #e3e7eb;
  --pill-color-remove: #5a616a;
  --pill-color-remove-hover: rgb(217, 189, 165);
  --prompt-background: rgb(30, 37, 47);
  --prompt-border-color: #4a5059;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --ribbon-padding: 0px;
  --root-workspace-background: transparent;
  --root-workspace-margin-spacing: 16px;
  --root-workspace-padding-bottom: 28px;
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px;
  --search-clear-button-color: #8d949d;
  --search-icon-color: #8d949d;
  --search-result-background: rgb(30, 37, 47);
  --setting-group-heading-color: #e3e7eb;
  --setting-items-background: rgb(40, 47, 57);
  --setting-items-border-color: rgb(69, 74, 84);
  --side-dock-actions-border-color: rgb(69, 74, 84);
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #404650;
  --slider-track-background: rgb(69, 74, 84);
  --status-bar-background: rgb(43, 47, 59);
  --status-bar-border-color: rgb(69, 74, 84);
  --status-bar-text-color: #8d949d;
  --suggestion-background: rgb(30, 37, 47);
  --suggesttion-highlight-color: #ff7b72;
  --tab-background-active: rgba(255, 255, 255, 0.067);
  --tab-container-background: transparent;
  --tab-divider-color: #404650;
  --tab-outline-color: rgb(69, 74, 84);
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(43, 47, 59);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(43, 47, 59), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(201, 166, 130);
  --tab-text-color: #5a616a;
  --tab-text-color-active: #e3e7eb;
  --tab-text-color-focused: #5a616a;
  --tab-text-color-focused-active: #e3e7eb;
  --tab-text-color-focused-active-current: #e3e7eb;
  --tab-text-color-focused-highlighted: rgb(217, 189, 165);
  --table-add-button-border-color: rgb(69, 74, 84);
  --table-border-color: rgb(69, 74, 84);
  --table-drag-handle-background-active: rgb(201, 166, 130);
  --table-drag-handle-color: #5a616a;
  --table-header-border-color: rgb(69, 74, 84);
  --table-header-color: #e3e7eb;
  --table-header-weight: 600;
  --table-selection: rgba(201, 166, 130, 0.1);
  --table-selection-border-color: rgb(201, 166, 130);
  --tag-background: rgba(201, 166, 130, 0.1);
  --tag-background-hover: rgba(201, 166, 130, 0.2);
  --tag-border-color: rgba(201, 166, 130, 0.15);
  --tag-border-color-hover: rgba(201, 166, 130, 0.15);
  --tag-border-width: 1px;
  --tag-color: rgb(217, 189, 165);
  --tag-color-hover: rgb(217, 189, 165);
  --tag-padding-y: 0.2em;
  --tag-size: 0.8em;
  --text-accent: rgb(217, 189, 165);
  --text-accent-hover: rgb(231, 211, 197);
  --text-faint: #5a616a;
  --text-highlight-background: rgba(169, 146, 106, 0.5);
  --text-highlight-border-color: rgb(210, 170, 127);
  --text-highlight-color: rgb(235, 231, 224);
  --text-muted: #8d949d;
  --text-normal: #e3e7eb;
  --text-selection: rgba(201, 166, 130, 0.33);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: rgb(69, 74, 84);
  --titlebar-text-color: #8d949d;
  --titlebar-text-color-focused: #e3e7eb;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  --vault-profile-color: #e3e7eb;
  --vault-profile-color-hover: #e3e7eb;
  --workspace-header-background: transparent;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(227, 231, 235);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(227, 231, 235);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(227, 231, 235);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(69, 74, 84);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(69, 74, 84);
  color: rgb(227, 231, 235);
}

body div#quartz-root {
  background-color: rgb(30, 37, 47);
  color: rgb(227, 231, 235);
}`,
    typography: `body .page article p > b, b {
  color: rgb(240, 244, 248);
  outline: rgb(240, 244, 248) none 0px;
  text-decoration: rgb(240, 244, 248);
  text-decoration-color: rgb(240, 244, 248);
}

body .page article p > em, em {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body .page article p > i, i {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body .page article p > strong, strong {
  color: rgb(240, 244, 248);
  outline: rgb(240, 244, 248) none 0px;
  text-decoration: rgb(240, 244, 248);
  text-decoration-color: rgb(240, 244, 248);
}

body .text-highlight {
  background-color: rgba(169, 146, 106, 0.5);
  color: rgb(235, 231, 224);
  outline: rgb(235, 231, 224) none 0px;
  text-decoration: rgb(235, 231, 224);
  text-decoration-color: rgb(235, 231, 224);
}

body del {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: line-through rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body p {
  color: rgb(141, 148, 157);
  outline: rgb(141, 148, 157) none 0px;
  text-decoration: rgb(141, 148, 157);
  text-decoration-color: rgb(141, 148, 157);
}`,
    links: `body a.external, footer a {
  color: rgb(217, 188, 164);
  outline: rgb(217, 188, 164) none 0px;
  text-decoration: rgb(217, 188, 164);
  text-decoration-color: rgb(217, 188, 164);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(217, 188, 164);
  outline: rgb(217, 188, 164) none 0px;
  text-decoration: rgb(217, 188, 164);
  text-decoration-color: rgb(217, 188, 164);
}

body a.internal.broken {
  color: rgb(217, 188, 164);
  outline: rgb(217, 188, 164) none 0px;
  text-decoration: rgba(201, 166, 130, 0.3);
  text-decoration-color: rgba(201, 166, 130, 0.3);
}`,
    lists: `body dd {
  color: rgb(227, 231, 235);
}

body dt {
  color: rgb(227, 231, 235);
}

body ol > li {
  color: rgb(227, 231, 235);
}

body ol.overflow {
  background-color: rgb(30, 37, 47);
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body ul > li {
  color: rgb(227, 231, 235);
}

body ul.overflow {
  background-color: rgb(30, 37, 47);
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(90, 97, 106);
  text-decoration: rgb(90, 97, 106);
}

body blockquote {
  background-color: rgba(42, 49, 60, 0.6);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body table {
  background-color: rgb(40, 47, 57);
  color: rgb(227, 231, 235);
  width: 233.969px;
}

body tbody tr:nth-child(odd) {
  background-color: rgb(30, 37, 47);
}

body td {
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

body th {
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
    code: `body code {
  border-bottom-color: rgb(255, 123, 114);
  border-left-color: rgb(255, 123, 114);
  border-right-color: rgb(255, 123, 114);
  border-top-color: rgb(255, 123, 114);
  color: rgb(255, 123, 114);
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body figcaption {
  color: rgb(227, 231, 235);
}

body figure {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body img {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body video {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
}

body .footnotes {
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

body .transclude {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body .transclude-inner {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 148, 157);
  text-decoration: line-through rgb(141, 148, 157);
  text-decoration-color: rgb(141, 148, 157);
}

body input[type=checkbox] {
  border-bottom-color: rgb(90, 97, 106);
  border-left-color: rgb(90, 97, 106);
  border-right-color: rgb(90, 97, 106);
  border-top-color: rgb(90, 97, 106);
}

body li.task-list-item[data-task='!'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='*'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='-'] {
  color: rgb(90, 97, 106);
  text-decoration: line-through 1px rgb(90, 97, 106);
  text-decoration-color: rgb(90, 97, 106);
}

body li.task-list-item[data-task='/'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='>'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='?'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='I'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='S'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='b'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='c'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='d'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='f'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='i'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='k'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='l'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='p'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='u'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body li.task-list-item[data-task='w'] {
  color: rgb(227, 231, 235);
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
  background-color: rgb(47, 52, 61);
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
  border-top-color: rgb(69, 74, 84);
  color: rgb(227, 231, 235);
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 37, 47);
  border-bottom-color: rgb(74, 80, 89);
  border-left-color: rgb(74, 80, 89);
  border-right-color: rgb(74, 80, 89);
  border-top-color: rgb(74, 80, 89);
}

body .search > .search-container > .search-space > * {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(227, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(227, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(227, 231, 235);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 80, 89);
  border-left-color: rgb(74, 80, 89);
  border-right-color: rgb(74, 80, 89);
  border-top-color: rgb(74, 80, 89);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(43, 47, 59);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(227, 231, 235);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(217, 188, 164);
}

body h1 {
  color: rgb(226, 230, 235);
}

body h2 {
  color: rgb(197, 202, 212);
}

body h2.page-title, h2.page-title a {
  color: rgb(227, 231, 235);
}

body h3 {
  color: rgb(168, 174, 185);
}

body h4 {
  color: rgb(143, 150, 161);
}

body h5 {
  color: rgb(120, 127, 138);
}

body h6 {
  color: rgb(102, 109, 120);
}

body hr {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 37, 47);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(123, 175, 222, 0.85);
  text-decoration: rgba(123, 175, 222, 0.85);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(123, 175, 222, 0.7);
  text-decoration: rgba(123, 175, 222, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-left-width: 0px;
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  border-top-width: 0px;
  color: rgb(141, 148, 157);
}

body footer ul li a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(227, 231, 235);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 148, 157);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body li.section-li > .section .meta {
  color: rgb(141, 148, 157);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(141, 148, 157);
  text-decoration: rgb(141, 148, 157);
}

body ul.section-ul {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

body .darkmode svg {
  color: rgb(141, 148, 157);
  stroke: rgb(141, 148, 157);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

body .breadcrumb-element p {
  color: rgb(90, 97, 106);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

body .metadata {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
  border-top-color: rgb(69, 74, 84);
  color: rgb(141, 148, 157);
  margin-bottom: 8px;
}

body .metadata-properties {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(227, 231, 235);
}

body abbr {
  color: rgb(227, 231, 235);
  text-decoration: underline dotted rgb(227, 231, 235);
}

body details {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body input[type=text] {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

body kbd {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(255, 123, 114);
  border-left-color: rgb(255, 123, 114);
  border-right-color: rgb(255, 123, 114);
  border-top-color: rgb(255, 123, 114);
  color: rgb(255, 123, 114);
}

body progress {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

body sub {
  color: rgb(227, 231, 235);
}

body summary {
  color: rgb(227, 231, 235);
}

body sup {
  color: rgb(227, 231, 235);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 12;
  --accent-l: 60%;
  --accent-s: 31%;
  --background-gradient: linear-gradient(
		rgb(217, 224, 227),
		rgb(235, 215, 210)
	);
  --background-modifier-active-hover: rgba(185, 134, 121, 0.1);
  --background-modifier-border: rgba(194, 176, 163, 0.4);
  --background-modifier-border-focus: #a3958c;
  --background-modifier-border-hover: #b6a79d;
  --background-modifier-error-rgb: 174, 62, 76;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-message: rgb(232, 223, 217);
  --background-modifier-success-rgb: 62, 132, 98;
  --background-primary: rgb(243, 237, 233);
  --background-primary-alt: rgb(238, 230, 225);
  --background-secondary: rgb(232, 223, 217);
  --background-secondary-alt: rgb(225, 215, 208);
  --bases-cards-background: rgb(243, 237, 233);
  --bases-cards-cover-background: rgb(238, 230, 225);
  --bases-cards-shadow: 0 0 0 1px rgba(194, 176, 163, 0.4);
  --bases-cards-shadow-hover: 0 0 0 1px #b6a79d;
  --bases-embed-border-color: rgba(194, 176, 163, 0.4);
  --bases-group-heading-property-color: #554d47;
  --bases-table-border-color: rgba(194, 176, 163, 0.4);
  --bases-table-cell-background-active: rgb(243, 237, 233);
  --bases-table-cell-background-disabled: rgb(238, 230, 225);
  --bases-table-cell-background-selected: rgba(185, 134, 121, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #a3958c;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(193, 148, 138);
  --bases-table-group-background: rgb(238, 230, 225);
  --bases-table-header-background: rgb(243, 237, 233);
  --bases-table-header-color: #554d47;
  --bases-table-summary-background: rgb(243, 237, 233);
  --blockquote-background-color: rgba(237, 228, 222, 0.811);
  --blockquote-border-color: rgb(194, 176, 163);
  --blockquote-color: rgb(92, 74, 61);
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --bold-color: #2d3748;
  --bold-weight: 600;
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
  --canvas-background: rgb(243, 237, 233);
  --canvas-card-label-color: #8a7e76;
  --canvas-color-1: 174, 62, 76;
  --canvas-color-2: 184, 110, 51;
  --canvas-color-3: 191, 143, 63;
  --canvas-color-4: 62, 132, 98;
  --canvas-color-5: 52, 136, 152;
  --canvas-color-6: 94, 72, 146;
  --canvas-dot-pattern: #c8b9af;
  --caret-color: #3a3330;
  --checkbox-border-color: #8a7e76;
  --checkbox-border-color-hover: #554d47;
  --checkbox-color: rgb(193, 148, 138);
  --checkbox-color-hover: rgb(201, 158, 151);
  --checkbox-marker-color: rgb(243, 237, 233);
  --checklist-done-color: #554d47;
  --code-background: rgb(238, 230, 225);
  --code-border-color: transparent;
  --code-comment: #8a7e76;
  --code-normal: #eb5757;
  --code-punctuation: #554d47;
  --codeblock-background: rgba(234, 223, 215, 0.749);
  --codeblock-border-radius: 8px;
  --codeblock-caret-color: rgb(92, 74, 61);
  --collapse-icon-color: #8a7e76;
  --collapse-icon-color-collapsed: rgb(185, 134, 121);
  --color-accent: rgb(185, 134, 121);
  --color-accent-1: rgb(193, 148, 138);
  --color-accent-2: rgb(201, 158, 151);
  --color-accent-hsl: 12, 31%, 60%;
  --color-base-00: #f8f4f0;
  --color-base-05: #f3ece6;
  --color-base-10: #eee6df;
  --color-base-100: #3a3330;
  --color-base-20: #e6dcd3;
  --color-base-25: #d8ccc2;
  --color-base-30: #c8b9af;
  --color-base-35: #b6a79d;
  --color-base-40: #a3958c;
  --color-base-50: #8a7e76;
  --color-base-60: #6b625b;
  --color-base-70: #554d47;
  --color-blue-rgb: 95, 164, 218;
  --color-cyan-rgb: 52, 136, 152;
  --color-green-rgb: 62, 132, 98;
  --color-orange-rgb: 184, 110, 51;
  --color-pink-rgb: 184, 92, 132;
  --color-purple-rgb: 94, 72, 146;
  --color-red-rgb: 174, 62, 76;
  --color-yellow-rgb: 191, 143, 63;
  --divider-color: rgba(194, 176, 163, 0.4);
  --divider-color-hover: rgb(193, 148, 138);
  --dropdown-background: #f8f4f0;
  --dropdown-background-hover: #eee6df;
  --embed-block-shadow-hover: 0 0 0 1px rgba(194, 176, 163, 0.4), inset 0 0 0 1px rgba(194, 176, 163, 0.4);
  --embed-border-start: 2px solid #cbd5e0;
  --file-header-background: rgb(243, 237, 233);
  --file-header-background-focused: rgb(243, 237, 233);
  --file-margins: 24px;
  --flair-background: #f8f4f0;
  --flair-color: #3a3330;
  --footnote-divider-color: rgba(194, 176, 163, 0.4);
  --footnote-id-color: #554d47;
  --footnote-id-color-no-occurrences: #8a7e76;
  --footnote-line-height: 1.7;
  --graph-line: #b6a79d;
  --graph-node: #554d47;
  --graph-node-focused: rgb(185, 134, 121);
  --graph-node-unresolved: #8a7e76;
  --graph-text: #3a3330;
  --h1-color: #2d3748;
  --h1-indicator-color: #2d3748;
  --h1-size: 1.69em;
  --h2-color: #4a556b;
  --h2-indicator-color: #4a556b;
  --h2-size: 1.51em;
  --h3-color: #66788d;
  --h3-indicator-color: #66788d;
  --h3-size: 1.35em;
  --h4-color: #7f8a9b;
  --h4-indicator-color: #7f8a9b;
  --h4-size: 1.21em;
  --h5-color: #9aa5b5;
  --h5-indicator-color: #9aa5b5;
  --h5-line-height: 1.7;
  --h5-size: 1.1em;
  --h6-color: #808080;
  --h6-indicator-color: #808080;
  --h6-line-height: 1.7;
  --header-active-bg: rgba(31, 34, 37, 0.03);
  --header-height: 36px;
  --heading-formatting: #8a7e76;
  --heading-indicator-spacing: 6px;
  --heading-spacing: 1.8rem;
  --hr-color: rgba(194, 176, 163, 0.4);
  --icon-color: #554d47;
  --icon-color-active: rgb(185, 134, 121);
  --icon-color-focused: #3a3330;
  --icon-color-hover: #554d47;
  --indentation-guide-color: transparent;
  --inline-code-background: rgba(240, 230, 219, 0.6);
  --inline-code-normal: #eb5757;
  --inline-title-color: #3a3330;
  --inline-title-size: 1.6rem;
  --inline-title-weight: 500;
  --input-date-separator: #8a7e76;
  --input-placeholder-color: #8a7e76;
  --interactive-accent: rgb(193, 148, 138);
  --interactive-accent-hover: rgb(201, 158, 151);
  --interactive-accent-hsl: 12, 31%, 60%;
  --interactive-hover: #eee6df;
  --interactive-normal: #f8f4f0;
  --line-height-normal: 1.7;
  --link-color: rgb(185, 134, 121);
  --link-color-hover: rgb(201, 158, 151);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(185, 134, 121);
  --link-external-color-hover: rgb(201, 158, 151);
  --link-unresolved-color: rgb(185, 134, 121);
  --link-unresolved-decoration-color: rgba(185, 134, 121, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #8a7e76;
  --list-marker-color-collapsed: rgb(185, 134, 121);
  --list-marker-color-hover: #554d47;
  --list-spacing: 0.225em;
  --menu-background: rgb(232, 223, 217);
  --menu-border-color: #b6a79d;
  --metadata-border-color: rgba(194, 176, 163, 0.4);
  --metadata-divider-color: rgba(194, 176, 163, 0.4);
  --metadata-input-font-size: 14px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #3a3330;
  --metadata-label-text-color: #554d47;
  --metadata-label-text-color-hover: #554d47;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a3958c;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b6a79d;
  --mod-left-ribbon-background: transparent;
  --mod-left-ribbon-background-collapsed: transparent;
  --mod-left-split-background: transparent;
  --mod-right-split-background: transparent;
  --mod-root-background: transparent;
  --mod-root-border: 0px 1px 0px 1px solid rgba(194, 176, 163, 0.4);
  --mod-root-header-background: transparent;
  --mod-root-header-margin: 0px 0px 4px 0px;
  --modal-background: rgb(243, 237, 233);
  --modal-bg-blur: 3px;
  --modal-border-color: #a3958c;
  --nav-button-container-bg: rgba(31, 34, 37, 0.03);
  --nav-collapse-icon-color: #8a7e76;
  --nav-collapse-icon-color-collapsed: #8a7e76;
  --nav-heading-color: #3a3330;
  --nav-heading-color-collapsed: #8a7e76;
  --nav-heading-color-collapsed-hover: #554d47;
  --nav-heading-color-hover: #3a3330;
  --nav-indentation-guide-color: transparent;
  --nav-item-background-selected: rgba(185, 134, 121, 0.15);
  --nav-item-color: #554d47;
  --nav-item-color-active: #3a3330;
  --nav-item-color-highlighted: rgb(185, 134, 121);
  --nav-item-color-hover: #3a3330;
  --nav-item-color-selected: #3a3330;
  --nav-tag-color: #8a7e76;
  --nav-tag-color-active: #554d47;
  --nav-tag-color-hover: #554d47;
  --outline-collapsed-icon-opacity: 1;
  --paragraph-letter-spacing: 0.035em;
  --paragraph-line-height: 1.7;
  --paragraph-word-spacing: 0.035em;
  --pdf-background: rgb(243, 237, 233);
  --pdf-page-background: rgb(243, 237, 233);
  --pdf-sidebar-background: rgb(243, 237, 233);
  --pill-border-color: rgba(194, 176, 163, 0.4);
  --pill-border-color-hover: #b6a79d;
  --pill-color: #554d47;
  --pill-color-hover: #3a3330;
  --pill-color-remove: #8a7e76;
  --pill-color-remove-hover: rgb(185, 134, 121);
  --prompt-background: rgb(243, 237, 233);
  --prompt-border-color: #a3958c;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --ribbon-padding: 0px;
  --root-workspace-background: transparent;
  --root-workspace-margin-spacing: 16px;
  --root-workspace-padding-bottom: 28px;
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgba(194, 176, 163, 0.4) 0px 0px 3px 0px,
		rgba(194, 176, 163, 0.4) 0px 1px 2px 0px;
  --search-clear-button-color: #554d47;
  --search-icon-color: #554d47;
  --search-result-background: rgb(243, 237, 233);
  --setting-group-heading-color: #3a3330;
  --setting-items-background: rgb(238, 230, 225);
  --setting-items-border-color: rgba(194, 176, 163, 0.4);
  --side-dock-actions-border-color: rgba(194, 176, 163, 0.4);
  --side-dock-actions-shadow: rgba(194, 176, 163, 0.4) 0px 1px 2px
			0px,
		rgba(194, 176, 163, 0.4) 0px 0px 0px 1px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #b6a79d;
  --slider-track-background: rgba(194, 176, 163, 0.4);
  --status-bar-background: rgb(232, 223, 217);
  --status-bar-border-color: rgba(194, 176, 163, 0.4);
  --status-bar-text-color: #554d47;
  --suggestion-background: rgb(243, 237, 233);
  --suggesttion-highlight-color: #eb5757;
  --tab-background-active: rgba(0, 0, 0, 0.067);
  --tab-container-background: transparent;
  --tab-divider-color: #b6a79d;
  --tab-outline-color: rgba(194, 176, 163, 0.4);
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(232, 223, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(185, 134, 121);
  --tab-text-color: #8a7e76;
  --tab-text-color-active: #3a3330;
  --tab-text-color-focused: #8a7e76;
  --tab-text-color-focused-active: #3a3330;
  --tab-text-color-focused-active-current: #3a3330;
  --tab-text-color-focused-highlighted: rgb(185, 134, 121);
  --table-add-button-border-color: rgba(194, 176, 163, 0.4);
  --table-border-color: rgba(194, 176, 163, 0.4);
  --table-drag-handle-background-active: rgb(193, 148, 138);
  --table-drag-handle-color: #8a7e76;
  --table-header-border-color: rgba(194, 176, 163, 0.4);
  --table-header-color: #3a3330;
  --table-header-weight: 600;
  --table-selection: rgba(185, 134, 121, 0.1);
  --table-selection-border-color: rgb(193, 148, 138);
  --tag-background: rgba(185, 134, 121, 0.1);
  --tag-background-hover: rgba(185, 134, 121, 0.2);
  --tag-border-color: rgba(185, 134, 121, 0.15);
  --tag-border-color-hover: rgba(185, 134, 121, 0.15);
  --tag-border-width: 1px;
  --tag-color: rgb(185, 134, 121);
  --tag-color-hover: rgb(185, 134, 121);
  --tag-padding-y: 0.2em;
  --tag-size: 0.8em;
  --text-accent: rgb(185, 134, 121);
  --text-accent-hover: rgb(201, 158, 151);
  --text-faint: #8a7e76;
  --text-highlight-background: rgba(248, 227, 217, 0.9);
  --text-highlight-border-color: rgb(167, 98, 64);
  --text-highlight-border-radius: 4px;
  --text-highlight-color: rgb(102, 80, 63);
  --text-muted: #554d47;
  --text-normal: #3a3330;
  --text-selection: rgba(185, 134, 121, 0.2);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: rgba(194, 176, 163, 0.4);
  --titlebar-text-color: #554d47;
  --titlebar-text-color-focused: #3a3330;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  --vault-profile-color: #3a3330;
  --vault-profile-color-hover: #3a3330;
  --workspace-header-background: transparent;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 51, 48);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 51, 48);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 51, 48);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(194, 176, 163, 0.4);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(194, 176, 163, 0.4);
  color: rgb(58, 51, 48);
}

body div#quartz-root {
  background-color: rgb(243, 237, 233);
  color: rgb(58, 51, 48);
}`,
    typography: `body .page article p > b, b {
  color: rgb(45, 55, 72);
  outline: rgb(45, 55, 72) none 0px;
  text-decoration: rgb(45, 55, 72);
  text-decoration-color: rgb(45, 55, 72);
}

body .page article p > em, em {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body .page article p > i, i {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body .page article p > strong, strong {
  color: rgb(45, 55, 72);
  outline: rgb(45, 55, 72) none 0px;
  text-decoration: rgb(45, 55, 72);
  text-decoration-color: rgb(45, 55, 72);
}

body .text-highlight {
  background-color: rgba(248, 227, 217, 0.9);
  color: rgb(102, 80, 63);
  outline: rgb(102, 80, 63) none 0px;
  text-decoration: rgb(102, 80, 63);
  text-decoration-color: rgb(102, 80, 63);
}

body del {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: line-through rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body p {
  color: rgb(85, 77, 71);
  outline: rgb(85, 77, 71) none 0px;
  text-decoration: rgb(85, 77, 71);
  text-decoration-color: rgb(85, 77, 71);
}`,
    links: `body a.external, footer a {
  color: rgb(185, 134, 121);
  outline: rgb(185, 134, 121) none 0px;
  text-decoration: rgb(185, 134, 121);
  text-decoration-color: rgb(185, 134, 121);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(185, 134, 121);
  outline: rgb(185, 134, 121) none 0px;
  text-decoration: rgb(185, 134, 121);
  text-decoration-color: rgb(185, 134, 121);
}

body a.internal.broken {
  color: rgb(185, 134, 121);
  outline: rgb(185, 134, 121) none 0px;
  text-decoration: rgba(185, 134, 121, 0.3);
  text-decoration-color: rgba(185, 134, 121, 0.3);
}`,
    lists: `body dd {
  color: rgb(58, 51, 48);
}

body dt {
  color: rgb(58, 51, 48);
}

body ol > li {
  color: rgb(58, 51, 48);
}

body ol.overflow {
  background-color: rgb(243, 237, 233);
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body ul > li {
  color: rgb(58, 51, 48);
}

body ul.overflow {
  background-color: rgb(243, 237, 233);
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 126, 118);
  text-decoration: rgb(138, 126, 118);
}

body blockquote {
  background-color: rgba(237, 228, 222, 0.81);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body table {
  background-color: rgb(238, 230, 225);
  color: rgb(58, 51, 48);
  width: 233.969px;
}

body tbody tr:nth-child(odd) {
  background-color: rgb(243, 237, 233);
}

body td {
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

body th {
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
    code: `body code {
  border-bottom-color: rgb(235, 87, 87);
  border-left-color: rgb(235, 87, 87);
  border-right-color: rgb(235, 87, 87);
  border-top-color: rgb(235, 87, 87);
  color: rgb(235, 87, 87);
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body figcaption {
  color: rgb(58, 51, 48);
}

body figure {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body img {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body video {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    embeds: `body .file-embed {
  background-color: rgb(238, 230, 225);
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
}

body .footnotes {
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

body .transclude {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body .transclude-inner {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 77, 71);
  text-decoration: line-through rgb(85, 77, 71);
  text-decoration-color: rgb(85, 77, 71);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 126, 118);
  border-left-color: rgb(138, 126, 118);
  border-right-color: rgb(138, 126, 118);
  border-top-color: rgb(138, 126, 118);
}

body li.task-list-item[data-task='!'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='*'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='-'] {
  color: rgb(138, 126, 118);
  text-decoration: line-through 1px rgb(138, 126, 118);
  text-decoration-color: rgb(138, 126, 118);
}

body li.task-list-item[data-task='/'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='>'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='?'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='I'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='S'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='b'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='c'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='d'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='f'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='i'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='k'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='l'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='p'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='u'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body li.task-list-item[data-task='w'] {
  color: rgb(58, 51, 48);
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
  background-color: rgba(185, 134, 121, 0.1);
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
  border-top-color: rgba(194, 176, 163, 0.4);
  color: rgb(58, 51, 48);
}

body .search > .search-container > .search-space {
  background-color: rgb(243, 237, 233);
  border-bottom-color: rgb(163, 149, 140);
  border-left-color: rgb(163, 149, 140);
  border-right-color: rgb(163, 149, 140);
  border-top-color: rgb(163, 149, 140);
}

body .search > .search-container > .search-space > * {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(58, 51, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(58, 51, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(58, 51, 48);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 149, 140);
  border-left-color: rgb(163, 149, 140);
  border-right-color: rgb(163, 149, 140);
  border-top-color: rgb(163, 149, 140);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 223, 217);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(58, 51, 48);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(185, 134, 121);
}

body h1 {
  color: rgb(45, 55, 72);
}

body h2 {
  color: rgb(74, 85, 107);
}

body h2.page-title, h2.page-title a {
  color: rgb(58, 51, 48);
}

body h3 {
  color: rgb(102, 120, 141);
}

body h4 {
  color: rgb(127, 138, 155);
}

body h5 {
  color: rgb(154, 165, 181);
}

body h6 {
  color: rgb(128, 128, 128);
}

body hr {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

body ::-webkit-scrollbar-corner {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}

body ::-webkit-scrollbar-track {
  background: rgb(243, 237, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 237, 233);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(95, 164, 218, 0.85);
  text-decoration: rgba(95, 164, 218, 0.85);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(95, 164, 218, 0.7);
  text-decoration: rgba(95, 164, 218, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-left-width: 0px;
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  border-top-width: 0px;
  color: rgb(85, 77, 71);
}

body footer ul li a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(58, 51, 48);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 77, 71);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body li.section-li > .section .meta {
  color: rgb(85, 77, 71);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 77, 71);
  text-decoration: rgb(85, 77, 71);
}

body ul.section-ul {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

body .darkmode svg {
  color: rgb(85, 77, 71);
  stroke: rgb(85, 77, 71);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

body .breadcrumb-element p {
  color: rgb(138, 126, 118);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

body .metadata {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
  border-top-color: rgba(194, 176, 163, 0.4);
  color: rgb(85, 77, 71);
  margin-bottom: 8px;
}

body .metadata-properties {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(58, 51, 48);
}

body abbr {
  color: rgb(58, 51, 48);
  text-decoration: underline dotted rgb(58, 51, 48);
}

body details {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body input[type=text] {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

body kbd {
  background-color: rgb(238, 230, 225);
  border-bottom-color: rgb(235, 87, 87);
  border-left-color: rgb(235, 87, 87);
  border-right-color: rgb(235, 87, 87);
  border-top-color: rgb(235, 87, 87);
  color: rgb(235, 87, 87);
}

body progress {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

body sub {
  color: rgb(58, 51, 48);
}

body summary {
  color: rgb(58, 51, 48);
}

body sup {
  color: rgb(58, 51, 48);
}`,
  },
};
