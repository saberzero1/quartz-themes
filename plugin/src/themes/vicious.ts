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
  --000: #fbfcfc;
  --000-RGB: 251, 252, 252;
  --100: #f1f2f5;
  --100-RGB: 241, 242, 245;
  --200: #e1e2e9;
  --200-RGB: 225, 226, 233;
  --300: #818184;
  --300-RGB: 129, 129, 132;
  --400: #68696c;
  --400-RGB: 104, 105, 108;
  --500: #4f5053;
  --500-RGB: 79, 80, 83;
  --600: #292a2f;
  --600-RGB: 41, 42, 47;
  --700: #17181e;
  --700-RGB: 23, 24, 30;
  --800: #08090e;
  --800-RGB: 8, 9, 14;
  --C001: #f18196;
  --C001-RGB: 241, 129, 150;
  --C002: #f19a81;
  --C002-RGB: 241, 154, 129;
  --C003: #ebcb8b;
  --C003-RGB: 241, 201, 129;
  --C004: #e3eb8b;
  --C004-RGB: 227, 235, 139;
  --C005: #bcf181;
  --C005-RGB: 188, 241, 129;
  --C006: #8df181;
  --C006-RGB: 141, 241, 129;
  --C007: #81f1a4;
  --C007-RGB: 129, 241, 164;
  --C008: #8be3eb;
  --C008-RGB: 139, 227, 235;
  --C009: #ab8beb;
  --C009-RGB: 171, 139, 235;
  --C010: #ee81f1;
  --C010-RGB: 238, 129, 241;
  --C011: #f181c5;
  --C011-RGB: 241, 129, 197;
  --accent-h: 39;
  --accent-l: 73%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgba(241, 203, 131, 0.1);
  --background-modifier-border: #292a2f;
  --background-modifier-border-focus: #4f5053;
  --background-modifier-border-hover: #4f5053;
  --background-modifier-cover: rgb(8, 9, 14);
  --background-modifier-error: #f18196;
  --background-modifier-error-hover: #f18196;
  --background-modifier-error-rgb: 241, 129, 150;
  --background-modifier-form-field: #292a2f;
  --background-modifier-form-field-hover: #292a2f;
  --background-modifier-hover: #17181e;
  --background-modifier-success: #81f1a4;
  --background-modifier-success-rgb: 129, 241, 164;
  --background-primary: #08090e;
  --background-primary-alt: #17181e;
  --background-secondary: #08090e;
  --background-secondary-alt: #08090e;
  --bases-cards-background: #08090e;
  --bases-cards-cover-background: #17181e;
  --bases-cards-shadow: 0 0 0 1px #292a2f;
  --bases-cards-shadow-hover: 0 0 0 1px #4f5053;
  --bases-embed-border-color: #292a2f;
  --bases-group-heading-property-color: #818184;
  --bases-table-border-color: #292a2f;
  --bases-table-cell-background-active: #08090e;
  --bases-table-cell-background-disabled: #17181e;
  --bases-table-cell-background-selected: rgba(241, 203, 131, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #4f5053;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(241, 203, 131);
  --bases-table-group-background: #17181e;
  --bases-table-header-background: #08090e;
  --bases-table-header-background-hover: #17181e;
  --bases-table-header-color: #818184;
  --bases-table-summary-background: #08090e;
  --bases-table-summary-background-hover: #17181e;
  --blockquote-background-color: #17181e;
  --blockquote-border-color: rgb(241, 203, 131);
  --blur-background: color-mix(in srgb, #08090e 65%, transparent) linear-gradient(#08090e, color-mix(in srgb, #08090e 65%, transparent));
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
  --canvas-background: #08090e;
  --canvas-card-label-color: #68696c;
  --canvas-color-1: 241, 129, 150;
  --canvas-color-2: 241, 154, 129;
  --canvas-color-3: 241, 201, 129;
  --canvas-color-4: 129, 241, 164;
  --canvas-color-5: 139, 227, 235;
  --canvas-color-6: 171, 139, 235;
  --canvas-dot-pattern: #292a2f;
  --card-color: #17181e;
  --caret-color: #fbfcfc;
  --checkbox-border-color: #818184;
  --checkbox-border-color-hover: #818184;
  --checkbox-color: rgb(241, 203, 131);
  --checkbox-color-hover: rgb(248, 221, 181);
  --checkbox-marker-color: #08090e;
  --checklist-done-color: #818184;
  --checklist-done-decoration: none;
  --checklist-textColor: #fbfcfc;
  --checklist-textColor1: #fbfcfc;
  --code-background: #17181e;
  --code-border-color: #292a2f;
  --code-bracket-background: #17181e;
  --code-comment: #68696c;
  --code-function: #ebcb8b;
  --code-important: #f19a81;
  --code-keyword: #ee81f1;
  --code-normal: #fbfcfc;
  --code-operator: #f18196;
  --code-property: #8be3eb;
  --code-punctuation: #818184;
  --code-radius: 8px;
  --code-string: #81f1a4;
  --code-tag: #f18196;
  --code-value: #ab8beb;
  --collapse-icon-color: #4f5053;
  --collapse-icon-color-collapsed: #fbfcfc;
  --color-accent: rgb(241, 203, 131);
  --color-accent-1: rgb(248, 221, 181);
  --color-accent-2: rgb(253, 241, 227);
  --color-accent-hsl: 39, 80%, 73%;
  --color-base-00: #08090e;
  --color-base-05: #08090e;
  --color-base-10: #17181e;
  --color-base-100: #f1f2f5;
  --color-base-20: #17181e;
  --color-base-25: #292a2f;
  --color-base-30: #292a2f;
  --color-base-35: #4f5053;
  --color-base-40: #4f5053;
  --color-base-50: #68696c;
  --color-base-60: #818184;
  --color-base-70: #e1e2e9;
  --color-blue: #bcf181;
  --color-blue-rgb: 188, 241, 129;
  --color-cyan: #8be3eb;
  --color-cyan-rgb: 139, 227, 235;
  --color-green: #81f1a4;
  --color-green-rgb: 129, 241, 164;
  --color-orange: #f19a81;
  --color-orange-rgb: 241, 154, 129;
  --color-pink: #ee81f1;
  --color-pink-rgb: 238, 129, 241;
  --color-purple: #ab8beb;
  --color-purple-rgb: 171, 139, 235;
  --color-red: #f18196;
  --color-red-rgb: 241, 129, 150;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 241, 201, 129;
  --divider-color: transparent;
  --divider-color-hover: rgb(241, 203, 131);
  --divider-width: 4px;
  --divider-width-hover: 4px;
  --dropdown-background: #08090e;
  --dropdown-background-hover: #292a2f;
  --embed-block-shadow-hover: 0 0 0 1px #292a2f, inset 0 0 0 1px #292a2f;
  --embed-border-start: 2px solid rgb(241, 203, 131);
  --file-color-RGB: 23, 24, 30;
  --file-header-background: #08090e;
  --file-header-background-focused: #08090e;
  --file-line-width: 960px;
  --flair-background: #08090e;
  --flair-color: #fbfcfc;
  --footnote-divider-color: #292a2f;
  --footnote-id-color: #818184;
  --footnote-id-color-no-occurrences: #68696c;
  --footnote-input-background-active: #17181e;
  --graph-line: #4f5053;
  --graph-node: #818184;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: rgb(248, 221, 181);
  --graph-node-tag: #81f1a4;
  --graph-node-unresolved: #68696c;
  --graph-text: #fbfcfc;
  --h1-size: 1.8em;
  --h2-size: 1.8em;
  --h3-size: 1.8em;
  --h4-size: 1.8em;
  --h5-size: 1.8em;
  --h6-size: 1.8em;
  --heading-count-bg-color: #17181e;
  --heading-count-color: #818184;
  --heading-formatting: #68696c;
  --hr-color: #17181e;
  --hr-thickness: 3px;
  --icon-color: #fbfcfc;
  --icon-color-active: rgb(248, 221, 181);
  --icon-color-focused: #fbfcfc;
  --icon-color-hover: #818184;
  --indent-use-default: 3.5ch;
  --indentation-guide-color: rgba(251, 252, 252, 0.12);
  --indentation-guide-color-active: rgba(251, 252, 252, 0.3);
  --indentation-guide-width: 0px;
  --inline-title-size: 1.8em;
  --input-color: #08090e;
  --input-date-separator: #68696c;
  --input-placeholder-color: #68696c;
  --interactive-accent: rgb(241, 203, 131);
  --interactive-accent-hover: rgb(248, 221, 181);
  --interactive-accent-hsl: 39, 80%, 73%;
  --interactive-hover: #292a2f;
  --interactive-normal: #08090e;
  --line-highlight-color: rgba(23, 24, 30, 0);
  --link-color: #f18196;
  --link-color-hover: rgb(253, 241, 227);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(248, 221, 181);
  --link-external-color-hover: rgb(253, 241, 227);
  --link-unresolved-color: #8be3eb;
  --link-unresolved-decoration-color: rgba(241, 203, 131, 0.3);
  --list-marker-color: #818184;
  --list-marker-color-collapsed: rgb(248, 221, 181);
  --list-marker-color-hover: #818184;
  --menu-background: #08090e;
  --menu-border-color: #4f5053;
  --metadata-background-color: #08090e;
  --metadata-border-color: #292a2f;
  --metadata-divider-color: #292a2f;
  --metadata-input-background-active: #17181e;
  --metadata-input-text-color: #fbfcfc;
  --metadata-label-background-active: transparent;
  --metadata-label-text-color: #fbfcfc;
  --metadata-label-text-color-hover: #818184;
  --metadata-property-background-active: #17181e;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4f5053;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4f5053;
  --modal-Color: 8, 9, 14;
  --modal-background: #08090e;
  --modal-border-color: #4f5053;
  --mono-rgb-0: 8, 9, 14;
  --mono-rgb-100: 251, 252, 252;
  --nav-collapse-icon-color: #4f5053;
  --nav-collapse-icon-color-collapsed: #68696c;
  --nav-color: 8, 9, 14;
  --nav-heading-color: #fbfcfc;
  --nav-heading-color-collapsed: #68696c;
  --nav-heading-color-collapsed-hover: #818184;
  --nav-heading-color-hover: #fbfcfc;
  --nav-indentation-guide-color: rgba(251, 252, 252, 0.12);
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: #17181e;
  --nav-item-background-hover: #17181e;
  --nav-item-background-selected: rgba(241, 203, 131, 0.15);
  --nav-item-color: #fbfcfc;
  --nav-item-color-active: #fbfcfc;
  --nav-item-color-highlighted: rgb(248, 221, 181);
  --nav-item-color-hover: #fbfcfc;
  --nav-item-color-selected: #fbfcfc;
  --nav-tag-color: #68696c;
  --nav-tag-color-active: #818184;
  --nav-tag-color-hover: #818184;
  --pdf-background: #08090e;
  --pdf-page-background: #08090e;
  --pdf-shadow: 0 0 0 1px #292a2f;
  --pdf-sidebar-background: #08090e;
  --pdf-thumbnail-shadow: 0 0 0 1px #292a2f;
  --pill-background: #17181e;
  --pill-border-color: #292a2f;
  --pill-border-color-hover: #4f5053;
  --pill-color: #818184;
  --pill-color-hover: #fbfcfc;
  --pill-color-remove: #68696c;
  --pill-color-remove-hover: rgb(248, 221, 181);
  --prompt-background: #08090e;
  --prompt-border-color: #4f5053;
  --raised-background: color-mix(in srgb, #08090e 65%, transparent) linear-gradient(#08090e, color-mix(in srgb, #08090e 65%, transparent));
  --ribbon-background: #08090e;
  --ribbon-background-collapsed: #08090e;
  --ribbon-padding: 16px 0 0px 0;
  --ribbon-width: 48px;
  --scrollbar-active-thumb-bg: rgba(251, 252, 252, 0.2);
  --scrollbar-bg: rgba(251, 252, 252, 0.05);
  --scrollbar-thumb-bg: rgba(251, 252, 252, 0.1);
  --search-clear-button-color: #818184;
  --search-icon-color: #818184;
  --search-result-background: #08090e;
  --select-color: #292a2f;
  --setting-group-heading-color: #fbfcfc;
  --setting-items-background: #17181e;
  --setting-items-border-color: #292a2f;
  --shadow-open-tabs: #08090e;
  --side-dock-color: #17181e;
  --slider-thumb-border-color: #4f5053;
  --slider-track-background: #292a2f;
  --status-bar-background: #08090e;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #818184;
  --suggestion-background: #08090e;
  --swatch-shadow: inset 0 0 0 1px rgba(251, 252, 252, 0.15);
  --sync-avatar-color-1: #f18196;
  --sync-avatar-color-2: #f19a81;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #81f1a4;
  --sync-avatar-color-5: #8be3eb;
  --sync-avatar-color-6: #bcf181;
  --sync-avatar-color-7: #ab8beb;
  --sync-avatar-color-8: #ee81f1;
  --tab-background-active: #08090e;
  --tab-container-background: #08090e;
  --tab-divider-color: #4f5053;
  --tab-outline-color: transparent;
  --tab-outline-width: 0px;
  --tab-radius-active: 0 0 0 0;
  --tab-stacked-pane-width: 800px;
  --tab-switcher-background: #08090e;
  --tab-switcher-menubar-background: linear-gradient(to top, #08090e, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(251, 252, 252, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(241, 203, 131);
  --tab-text-color: #68696c;
  --tab-text-color-active: #818184;
  --tab-text-color-focused: #818184;
  --tab-text-color-focused-active: #818184;
  --tab-text-color-focused-active-current: #fbfcfc;
  --tab-text-color-focused-highlighted: rgb(248, 221, 181);
  --table-add-button-border-color: #292a2f;
  --table-border-color: #292a2f;
  --table-drag-handle-background-active: rgb(241, 203, 131);
  --table-drag-handle-color: #68696c;
  --table-drag-handle-color-active: #08090e;
  --table-header-border-color: #292a2f;
  --table-header-color: #fbfcfc;
  --table-selection: rgba(241, 203, 131, 0.1);
  --table-selection-border-color: rgb(241, 203, 131);
  --tag-background: rgba(241, 203, 131, 0.1);
  --tag-background-hover: rgba(241, 203, 131, 0.2);
  --tag-border-color: transparent;
  --tag-border-color-hover: rgba(241, 203, 131, 0.15);
  --tag-border-width: 1px;
  --tag-color: rgb(248, 221, 181);
  --tag-color-hover: rgb(248, 221, 181);
  --tag-padding-x: 0.56em;
  --tag-padding-y: 0.16em;
  --tag-radius: 16px;
  --text-accent: rgb(248, 221, 181);
  --text-accent-hover: rgb(253, 241, 227);
  --text-error: #f18196;
  --text-faint: #68696c;
  --text-highlight-bg: rgba(104, 105, 108, 0.4);
  --text-highlight-bg-rgb: 104, 105, 108;
  --text-muted: #818184;
  --text-normal: #fbfcfc;
  --text-on-accent: #08090e;
  --text-selection: #4f5053;
  --text-success: #81f1a4;
  --text-warning: #f19a81;
  --th-bg: #17181e;
  --titlebar-background: #08090e;
  --titlebar-background-focused: #08090e;
  --titlebar-border-color: #292a2f;
  --titlebar-text-color: #818184;
  --titlebar-text-color-focused: #fbfcfc;
  --vault-profile-color: #fbfcfc;
  --vault-profile-color-hover: #fbfcfc;
  --vicious-color-count: 11;
  --vicious-indent-1: #f18196;
  --vicious-indent-10: #ee81f1;
  --vicious-indent-11: #f181c5;
  --vicious-indent-2: #f19a81;
  --vicious-indent-3: #ebcb8b;
  --vicious-indent-4: #e3eb8b;
  --vicious-indent-5: #bcf181;
  --vicious-indent-6: #8df181;
  --vicious-indent-7: #81f1a4;
  --vicious-indent-8: #8be3eb;
  --vicious-indent-9: #ab8beb;
  --vicious-indent-bg-size: 46.2ch
		1px;
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
	);
  --vicious-indent-width: 4.2ch;
  --vicious-left-offset: 2ch;
  --vicious-line-width: 3px;
  --workspace-background-translucent: rgba(8, 9, 14, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 9, 14);
  color: rgb(251, 252, 252);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 24, 30);
  color: rgb(251, 252, 252);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(8, 9, 14);
  color: rgb(251, 252, 252);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 9, 14);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(251, 252, 252);
}

body div#quartz-root {
  background-color: rgb(8, 9, 14);
  color: rgb(251, 252, 252);
}`,
    typography: `body .page article p > b, b {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

body .page article p > em, em {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

body .page article p > i, i {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

body .page article p > strong, strong {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

body .text-highlight {
  background-color: rgba(104, 105, 108, 0.4);
  color: rgb(251, 252, 252);
  outline: rgb(251, 252, 252) none 0px;
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body del {
  color: rgb(251, 252, 252);
  outline: rgb(251, 252, 252) none 0px;
  text-decoration: line-through rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body p {
  color: rgb(129, 129, 132);
  outline: rgb(129, 129, 132) none 0px;
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}`,
    links: `body a.external, footer a {
  color: rgb(247, 221, 181);
  outline: rgb(247, 221, 181) none 0px;
  text-decoration: underline rgb(247, 221, 181);
  text-decoration-color: rgb(247, 221, 181);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(241, 129, 150);
  outline: rgb(241, 129, 150) none 0px;
  text-decoration: rgb(241, 129, 150);
  text-decoration-color: rgb(241, 129, 150);
}

body a.internal.broken {
  color: rgb(139, 227, 235);
  outline: rgb(139, 227, 235) none 0px;
  text-decoration: rgba(241, 203, 131, 0.3);
  text-decoration-color: rgba(241, 203, 131, 0.3);
}`,
    lists: `body dd {
  color: rgb(251, 252, 252);
}

body dt {
  color: rgb(251, 252, 252);
}

body ol > li {
  color: rgb(251, 252, 252);
}

body ol.overflow {
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body ul > li {
  color: rgb(251, 252, 252);
}

body ul.overflow {
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(251, 252, 252);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(104, 105, 108);
  text-decoration: rgb(104, 105, 108);
}

body blockquote {
  background-color: rgb(23, 24, 30);
}`,
    tables: `body .spacer {
  background-color: rgb(8, 9, 14);
}

body .table-container {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(251, 252, 252);
  margin-top: 0px;
  width: 934px;
}

body td {
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  color: rgb(251, 252, 252);
}

body th {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  color: rgb(251, 252, 252);
  text-align: center;
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body figcaption {
  color: rgb(251, 252, 252);
}

body figure {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body img {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body video {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}`,
    embeds: `body .file-embed {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

body .footnotes {
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

body .transclude {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(241, 203, 131);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body .transclude-inner {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(241, 203, 131);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}

body input[type=checkbox] {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

body li.task-list-item[data-task='!'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='*'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='-'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='/'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='>'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='?'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='I'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='S'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='b'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='c'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='d'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='f'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='i'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='k'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='l'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='p'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='u'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body li.task-list-item[data-task='w'] {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

body .callout > .callout-content {
  background-color: rgb(8, 9, 14);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(79, 80, 83);
  border-left-color: rgb(79, 80, 83);
  border-right-color: rgb(79, 80, 83);
  border-top-color: rgb(79, 80, 83);
}

body .search > .search-container > .search-space > * {
  color: rgb(251, 252, 252);
  outline: rgb(251, 252, 252) none 0px;
  text-decoration: rgb(251, 252, 252);
  text-decoration-color: rgb(251, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(251, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(251, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(23, 24, 30);
  color: rgb(251, 252, 252);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(79, 80, 83);
  border-left-color: rgb(79, 80, 83);
  border-right-color: rgb(79, 80, 83);
  border-top-color: rgb(79, 80, 83);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(23, 24, 30);
  color: rgb(251, 252, 252);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(8, 9, 14);
}

body h1 {
  color: rgb(241, 129, 150);
}

body h2 {
  color: rgb(241, 154, 129);
}

body h2.page-title, h2.page-title a {
  color: rgb(251, 252, 252);
}

body h3 {
  color: rgb(235, 203, 139);
}

body h4 {
  color: rgb(188, 241, 129);
}

body h5 {
  color: rgb(139, 227, 235);
}

body h6 {
  color: rgb(171, 139, 235);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

body ::-webkit-scrollbar-corner {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}

body ::-webkit-scrollbar-track {
  background: rgb(8, 9, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 9, 14);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(251, 252, 252);
  text-decoration: rgb(251, 252, 252);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}`,
    footer: `body footer {
  background-color: rgb(8, 9, 14);
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-left-width: 0px;
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  border-top-width: 0px;
  color: rgb(129, 129, 132);
}

body footer ul li a {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(251, 252, 252);
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(8, 9, 14);
}`,
    listPage: `body li.section-li {
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

body li.section-li > .section .meta {
  color: rgb(8, 9, 14);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body ul.section-ul {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

body .darkmode svg {
  color: rgb(251, 252, 252);
  stroke: rgb(251, 252, 252);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

body .breadcrumb-element p {
  color: rgb(104, 105, 108);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

body .metadata {
  border-bottom-color: rgb(41, 42, 47);
  border-left-color: rgb(41, 42, 47);
  border-right-color: rgb(41, 42, 47);
  border-top-color: rgb(41, 42, 47);
  color: rgb(129, 129, 132);
}

body .metadata-properties {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

body .navigation-progress {
  background-color: rgb(8, 9, 14);
}

body .page-header h2.page-title {
  color: rgb(251, 252, 252);
}

body abbr {
  color: rgb(251, 252, 252);
  text-decoration: underline dotted rgb(251, 252, 252);
}

body details {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body input[type=text] {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

body kbd {
  background-color: rgb(23, 24, 30);
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
  color: rgb(251, 252, 252);
}

body progress {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(251, 252, 252);
  border-right-color: rgb(251, 252, 252);
  border-top-color: rgb(251, 252, 252);
}

body sub {
  color: rgb(251, 252, 252);
}

body summary {
  color: rgb(251, 252, 252);
}

body sup {
  color: rgb(251, 252, 252);
}`,
  },
  light: {
    base: `:root:root {
  --000: #fbfcfc;
  --000-RGB: 251, 252, 252;
  --100: #f1f2f5;
  --100-RGB: 241, 242, 245;
  --200: #e1e2e9;
  --200-RGB: 225, 226, 233;
  --300: #818184;
  --300-RGB: 129, 129, 132;
  --400: #68696c;
  --400-RGB: 104, 105, 108;
  --500: #4f5053;
  --500-RGB: 79, 80, 83;
  --600: #292a2f;
  --600-RGB: 41, 42, 47;
  --700: #17181e;
  --700-RGB: 23, 24, 30;
  --800: #08090e;
  --800-RGB: 8, 9, 14;
  --C001: #f18196;
  --C001-RGB: 241, 129, 150;
  --C002: #f19a81;
  --C002-RGB: 241, 154, 129;
  --C003: #ebcb8b;
  --C003-RGB: 241, 201, 129;
  --C004: #e3eb8b;
  --C004-RGB: 227, 235, 139;
  --C005: #bcf181;
  --C005-RGB: 188, 241, 129;
  --C006: #8df181;
  --C006-RGB: 141, 241, 129;
  --C007: #81f1a4;
  --C007-RGB: 129, 241, 164;
  --C008: #8be3eb;
  --C008-RGB: 139, 227, 235;
  --C009: #ab8beb;
  --C009-RGB: 171, 139, 235;
  --C010: #ee81f1;
  --C010-RGB: 238, 129, 241;
  --C011: #f181c5;
  --C011-RGB: 241, 129, 197;
  --accent-h: 39;
  --accent-l: 73%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgba(241, 203, 131, 0.1);
  --background-modifier-border: #818184;
  --background-modifier-border-focus: #68696c;
  --background-modifier-border-hover: #68696c;
  --background-modifier-cover: rgb(251, 252, 252);
  --background-modifier-error: 241, 129, 150;
  --background-modifier-error-hover: 241, 129, 150;
  --background-modifier-error-rgb: 241, 129, 150;
  --background-modifier-form-field: #fbfcfc;
  --background-modifier-form-field-hover: #fbfcfc;
  --background-modifier-hover: #f1f2f5;
  --background-modifier-success: #81f1a4;
  --background-modifier-success-rgb: 129, 241, 164;
  --background-primary: #fbfcfc;
  --background-primary-alt: #f1f2f5;
  --background-secondary: #fbfcfc;
  --background-secondary-alt: #fbfcfc;
  --bases-cards-background: #fbfcfc;
  --bases-cards-cover-background: #f1f2f5;
  --bases-cards-shadow: 0 0 0 1px #818184;
  --bases-cards-shadow-hover: 0 0 0 1px #68696c;
  --bases-embed-border-color: #818184;
  --bases-group-heading-property-color: #818184;
  --bases-table-border-color: #e1e2e9;
  --bases-table-cell-background-active: #fbfcfc;
  --bases-table-cell-background-disabled: #f1f2f5;
  --bases-table-cell-background-selected: rgba(241, 203, 131, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #68696c;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(244, 211, 153);
  --bases-table-group-background: #f1f2f5;
  --bases-table-header-background: #fbfcfc;
  --bases-table-header-background-hover: #f1f2f5;
  --bases-table-header-color: #818184;
  --bases-table-summary-background: #fbfcfc;
  --bases-table-summary-background-hover: #f1f2f5;
  --blockquote-background-color: #f1f2f5;
  --blockquote-border-color: rgb(244, 211, 153);
  --blur-background: color-mix(in srgb, #fbfcfc 65%, transparent) linear-gradient(#fbfcfc, color-mix(in srgb, #fbfcfc 65%, transparent));
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
  --canvas-background: #fbfcfc;
  --canvas-card-label-color: #818184;
  --canvas-color-1: 241, 129, 150;
  --canvas-color-2: 241, 154, 129;
  --canvas-color-3: 241, 201, 129;
  --canvas-color-4: 129, 241, 164;
  --canvas-color-5: 139, 227, 235;
  --canvas-color-6: 171, 139, 235;
  --canvas-dot-pattern: #818184;
  --card-color: #f1f2f5;
  --caret-color: #08090e;
  --checkbox-border-color: #818184;
  --checkbox-border-color-hover: #818184;
  --checkbox-color: rgb(244, 211, 153);
  --checkbox-color-hover: rgb(248, 221, 181);
  --checkbox-marker-color: #fbfcfc;
  --checklist-done-color: #818184;
  --checklist-done-decoration: none;
  --checklist-textColor: #08090e;
  --checklist-textColor1: #08090e;
  --code-background: #f1f2f5;
  --code-border-color: #818184;
  --code-bracket-background: #f1f2f5;
  --code-comment: #818184;
  --code-function: #ebcb8b;
  --code-important: #f19a81;
  --code-keyword: #ee81f1;
  --code-normal: #08090e;
  --code-operator: 241, 129, 150;
  --code-property: #8be3eb;
  --code-punctuation: #818184;
  --code-radius: 8px;
  --code-string: #81f1a4;
  --code-tag: 241, 129, 150;
  --code-value: #ab8beb;
  --collapse-icon-color: #68696c;
  --collapse-icon-color-collapsed: #08090e;
  --color-accent: rgb(241, 203, 131);
  --color-accent-1: rgb(244, 211, 153);
  --color-accent-2: rgb(248, 221, 181);
  --color-accent-hsl: 39, 80%, 73%;
  --color-base-00: #fbfcfc;
  --color-base-05: #fbfcfc;
  --color-base-10: #f1f2f5;
  --color-base-100: #08090e;
  --color-base-20: #f1f2f5;
  --color-base-25: #818184;
  --color-base-30: #818184;
  --color-base-35: #68696c;
  --color-base-40: #68696c;
  --color-base-50: #4f5053;
  --color-base-60: #292a2f;
  --color-base-70: #17181e;
  --color-blue: #bcf181;
  --color-blue-rgb: 188, 241, 129;
  --color-cyan: #8be3eb;
  --color-cyan-rgb: 139, 227, 235;
  --color-green: #81f1a4;
  --color-green-rgb: 129, 241, 164;
  --color-orange: #f19a81;
  --color-orange-rgb: 241, 154, 129;
  --color-pink: #ee81f1;
  --color-pink-rgb: 238, 129, 241;
  --color-purple: #ab8beb;
  --color-purple-rgb: 171, 139, 235;
  --color-red: 241, 129, 150;
  --color-red-rgb: 241, 129, 150;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 241, 201, 129;
  --divider-color: transparent;
  --divider-color-hover: rgb(244, 211, 153);
  --divider-width: 4px;
  --divider-width-hover: 4px;
  --dropdown-background: #fbfcfc;
  --dropdown-background-hover: #e1e2e9;
  --embed-block-shadow-hover: 0 0 0 1px #818184, inset 0 0 0 1px #818184;
  --embed-border-start: 2px solid rgb(244, 211, 153);
  --file-color-RGB: 241, 242, 245;
  --file-header-background: #fbfcfc;
  --file-header-background-focused: #fbfcfc;
  --file-line-width: 960px;
  --flair-background: #fbfcfc;
  --flair-color: #08090e;
  --footnote-divider-color: #818184;
  --footnote-id-color: #818184;
  --footnote-id-color-no-occurrences: #818184;
  --footnote-input-background-active: #f1f2f5;
  --graph-line: #68696c;
  --graph-node: #818184;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: rgb(241, 203, 131);
  --graph-node-tag: #81f1a4;
  --graph-node-unresolved: #818184;
  --graph-text: #08090e;
  --h1-size: 1.8em;
  --h2-size: 1.8em;
  --h3-size: 1.8em;
  --h4-size: 1.8em;
  --h5-size: 1.8em;
  --h6-size: 1.8em;
  --heading-count-bg-color: #f1f2f5;
  --heading-count-color: #818184;
  --heading-formatting: #818184;
  --hr-color: #f1f2f5;
  --hr-thickness: 3px;
  --icon-color: #08090e;
  --icon-color-active: rgb(241, 203, 131);
  --icon-color-focused: #08090e;
  --icon-color-hover: #818184;
  --indent-use-default: 3.5ch;
  --indentation-guide-color: rgba(8, 9, 14, 0.12);
  --indentation-guide-color-active: rgba(8, 9, 14, 0.3);
  --indentation-guide-width: 0px;
  --inline-title-size: 1.8em;
  --input-color: #fbfcfc;
  --input-date-separator: #818184;
  --input-placeholder-color: #818184;
  --interactive-accent: rgb(244, 211, 153);
  --interactive-accent-hover: rgb(248, 221, 181);
  --interactive-accent-hsl: 39, 80%, 73%;
  --interactive-hover: #e1e2e9;
  --interactive-normal: #fbfcfc;
  --line-highlight-color: rgba(241, 242, 245, 0);
  --link-color: #f18196;
  --link-color-hover: rgb(248, 221, 181);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(241, 203, 131);
  --link-external-color-hover: rgb(248, 221, 181);
  --link-unresolved-color: #8be3eb;
  --link-unresolved-decoration-color: rgba(241, 203, 131, 0.3);
  --list-marker-color: #818184;
  --list-marker-color-collapsed: rgb(241, 203, 131);
  --list-marker-color-hover: #818184;
  --menu-background: #fbfcfc;
  --menu-border-color: #68696c;
  --metadata-background-color: #fbfcfc;
  --metadata-border-color: #818184;
  --metadata-divider-color: #818184;
  --metadata-input-background-active: #f1f2f5;
  --metadata-input-text-color: #08090e;
  --metadata-label-background-active: transparent;
  --metadata-label-text-color: #08090e;
  --metadata-label-text-color-hover: #818184;
  --metadata-property-background-active: #f1f2f5;
  --metadata-property-box-shadow-focus: 0 0 0 2px #68696c;
  --metadata-property-box-shadow-hover: 0 0 0 1px #68696c;
  --modal-Color: 251, 252, 252;
  --modal-background: #fbfcfc;
  --modal-border-color: #68696c;
  --mono-rgb-0: 251, 252, 252;
  --mono-rgb-100: 8, 9, 14;
  --nav-collapse-icon-color: #68696c;
  --nav-collapse-icon-color-collapsed: #818184;
  --nav-color: 251, 252, 252;
  --nav-heading-color: #08090e;
  --nav-heading-color-collapsed: #818184;
  --nav-heading-color-collapsed-hover: #818184;
  --nav-heading-color-hover: #08090e;
  --nav-indentation-guide-color: rgba(8, 9, 14, 0.12);
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: #f1f2f5;
  --nav-item-background-hover: #f1f2f5;
  --nav-item-background-selected: rgba(241, 203, 131, 0.15);
  --nav-item-color: #08090e;
  --nav-item-color-active: #08090e;
  --nav-item-color-highlighted: rgb(241, 203, 131);
  --nav-item-color-hover: #08090e;
  --nav-item-color-selected: #08090e;
  --nav-tag-color: #818184;
  --nav-tag-color-active: #818184;
  --nav-tag-color-hover: #818184;
  --pdf-background: #fbfcfc;
  --pdf-page-background: #fbfcfc;
  --pdf-sidebar-background: #fbfcfc;
  --pill-background: #f1f2f5;
  --pill-border-color: #818184;
  --pill-border-color-hover: #68696c;
  --pill-color: #818184;
  --pill-color-hover: #08090e;
  --pill-color-remove: #818184;
  --pill-color-remove-hover: rgb(241, 203, 131);
  --prompt-background: #fbfcfc;
  --prompt-border-color: #68696c;
  --raised-background: color-mix(in srgb, #fbfcfc 65%, transparent) linear-gradient(#fbfcfc, color-mix(in srgb, #fbfcfc 65%, transparent));
  --ribbon-background: #fbfcfc;
  --ribbon-background-collapsed: #fbfcfc;
  --ribbon-padding: 16px 0 0px 0;
  --ribbon-width: 48px;
  --scrollbar-active-thumb-bg: rgba(8, 9, 14, 0.2);
  --scrollbar-bg: rgba(8, 9, 14, 0.05);
  --scrollbar-thumb-bg: rgba(8, 9, 14, 0.1);
  --search-clear-button-color: #818184;
  --search-icon-color: #818184;
  --search-result-background: #fbfcfc;
  --select-color: #e1e2e9;
  --setting-group-heading-color: #08090e;
  --setting-items-background: #f1f2f5;
  --setting-items-border-color: #818184;
  --shadow-open-tabs: #fbfcfc;
  --side-dock-color: #f1f2f5;
  --slider-thumb-border-color: #68696c;
  --slider-track-background: #818184;
  --status-bar-background: #fbfcfc;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #818184;
  --suggestion-background: #fbfcfc;
  --swatch-shadow: inset 0 0 0 1px rgba(8, 9, 14, 0.15);
  --sync-avatar-color-1: 241, 129, 150;
  --sync-avatar-color-2: #f19a81;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #81f1a4;
  --sync-avatar-color-5: #8be3eb;
  --sync-avatar-color-6: #bcf181;
  --sync-avatar-color-7: #ab8beb;
  --sync-avatar-color-8: #ee81f1;
  --tab-background-active: #fbfcfc;
  --tab-container-background: #fbfcfc;
  --tab-divider-color: #68696c;
  --tab-outline-color: transparent;
  --tab-outline-width: 0px;
  --tab-radius-active: 0 0 0 0;
  --tab-stacked-pane-width: 800px;
  --tab-switcher-background: #fbfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fbfcfc, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(8, 9, 14, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(241, 203, 131);
  --tab-text-color: #818184;
  --tab-text-color-active: #818184;
  --tab-text-color-focused: #818184;
  --tab-text-color-focused-active: #818184;
  --tab-text-color-focused-active-current: #08090e;
  --tab-text-color-focused-highlighted: rgb(241, 203, 131);
  --table-add-button-border-color: #818184;
  --table-border-color: #e1e2e9;
  --table-drag-handle-background-active: rgb(244, 211, 153);
  --table-drag-handle-color: #818184;
  --table-drag-handle-color-active: #08090e;
  --table-header-border-color: #e1e2e9;
  --table-header-color: #08090e;
  --table-selection: rgba(241, 203, 131, 0.1);
  --table-selection-border-color: rgb(244, 211, 153);
  --tag-background: rgba(241, 203, 131, 0.1);
  --tag-background-hover: rgba(241, 203, 131, 0.2);
  --tag-border-color: transparent;
  --tag-border-color-hover: rgba(241, 203, 131, 0.15);
  --tag-border-width: 1px;
  --tag-color: rgb(241, 203, 131);
  --tag-color-hover: rgb(241, 203, 131);
  --tag-padding-x: 0.56em;
  --tag-padding-y: 0.16em;
  --tag-radius: 16px;
  --text-accent: rgb(241, 203, 131);
  --text-accent-hover: rgb(248, 221, 181);
  --text-error: 241, 129, 150;
  --text-faint: #818184;
  --text-highlight-bg: rgba(129, 129, 132, 0.4);
  --text-highlight-bg-rgb: 129, 129, 132;
  --text-muted: #818184;
  --text-normal: #08090e;
  --text-on-accent: #08090e;
  --text-selection: #e1e2e9;
  --text-success: #81f1a4;
  --text-warning: #f19a81;
  --th-bg: #f1f2f5;
  --titlebar-background: #fbfcfc;
  --titlebar-background-focused: #fbfcfc;
  --titlebar-border-color: #818184;
  --titlebar-text-color: #818184;
  --titlebar-text-color-focused: #08090e;
  --vault-profile-color: #08090e;
  --vault-profile-color-hover: #08090e;
  --vicious-color-count: 11;
  --vicious-indent-1: #f18196;
  --vicious-indent-10: #ee81f1;
  --vicious-indent-11: #f181c5;
  --vicious-indent-2: #f19a81;
  --vicious-indent-3: #ebcb8b;
  --vicious-indent-4: #e3eb8b;
  --vicious-indent-5: #bcf181;
  --vicious-indent-6: #8df181;
  --vicious-indent-7: #81f1a4;
  --vicious-indent-8: #8be3eb;
  --vicious-indent-9: #ab8beb;
  --vicious-indent-bg-size: 46.2ch
		1px;
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
	);
  --vicious-indent-width: 4.2ch;
  --vicious-left-offset: 2ch;
  --vicious-line-width: 3px;
  --workspace-background-translucent: rgba(251, 252, 252, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 252, 252);
  color: rgb(8, 9, 14);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(241, 242, 245);
  color: rgb(8, 9, 14);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 252, 252);
  color: rgb(8, 9, 14);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 252, 252);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(8, 9, 14);
}

body div#quartz-root {
  background-color: rgb(251, 252, 252);
  color: rgb(8, 9, 14);
}`,
    typography: `body .page article p > b, b {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

body .page article p > em, em {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

body .page article p > i, i {
  color: rgb(241, 201, 129);
  outline: rgb(241, 201, 129) none 0px;
  text-decoration: rgb(241, 201, 129);
  text-decoration-color: rgb(241, 201, 129);
}

body .page article p > strong, strong {
  color: rgb(241, 154, 129);
  outline: rgb(241, 154, 129) none 0px;
  text-decoration: rgb(241, 154, 129);
  text-decoration-color: rgb(241, 154, 129);
}

body .text-highlight {
  background-color: rgba(129, 129, 132, 0.4);
  color: rgb(8, 9, 14);
  outline: rgb(8, 9, 14) none 0px;
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body del {
  color: rgb(8, 9, 14);
  outline: rgb(8, 9, 14) none 0px;
  text-decoration: line-through rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body p {
  color: rgb(129, 129, 132);
  outline: rgb(129, 129, 132) none 0px;
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}`,
    links: `body a.external, footer a {
  color: rgb(241, 203, 131);
  outline: rgb(241, 203, 131) none 0px;
  text-decoration: underline rgb(241, 203, 131);
  text-decoration-color: rgb(241, 203, 131);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(241, 129, 150);
  outline: rgb(241, 129, 150) none 0px;
  text-decoration: rgb(241, 129, 150);
  text-decoration-color: rgb(241, 129, 150);
}

body a.internal.broken {
  color: rgb(139, 227, 235);
  outline: rgb(139, 227, 235) none 0px;
  text-decoration: rgba(241, 203, 131, 0.3);
  text-decoration-color: rgba(241, 203, 131, 0.3);
}`,
    lists: `body dd {
  color: rgb(8, 9, 14);
}

body dt {
  color: rgb(8, 9, 14);
}

body ol > li {
  color: rgb(8, 9, 14);
}

body ol.overflow {
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body ul > li {
  color: rgb(8, 9, 14);
}

body ul.overflow {
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(8, 9, 14);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
}

body blockquote {
  background-color: rgb(241, 242, 245);
}`,
    tables: `body .spacer {
  background-color: rgb(251, 252, 252);
}

body .table-container {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(8, 9, 14);
  margin-top: 0px;
  width: 934px;
}

body td {
  border-bottom-color: rgb(225, 226, 233);
  border-left-color: rgb(225, 226, 233);
  border-right-color: rgb(225, 226, 233);
  border-top-color: rgb(225, 226, 233);
  color: rgb(8, 9, 14);
}

body th {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(225, 226, 233);
  border-left-color: rgb(225, 226, 233);
  border-right-color: rgb(225, 226, 233);
  border-top-color: rgb(225, 226, 233);
  color: rgb(8, 9, 14);
  text-align: center;
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body figcaption {
  color: rgb(8, 9, 14);
}

body figure {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body img {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body video {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}`,
    embeds: `body .file-embed {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

body .footnotes {
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

body .transclude {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(244, 212, 156);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body .transclude-inner {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(244, 212, 156);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
  text-decoration-color: rgb(129, 129, 132);
}

body input[type=checkbox] {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
}

body li.task-list-item[data-task='!'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='*'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='-'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='/'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='>'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='?'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='I'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='S'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='b'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='c'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='d'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='f'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='i'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='k'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='l'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='p'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='u'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body li.task-list-item[data-task='w'] {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

body .callout > .callout-content {
  background-color: rgb(251, 252, 252);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(104, 105, 108);
  border-left-color: rgb(104, 105, 108);
  border-right-color: rgb(104, 105, 108);
  border-top-color: rgb(104, 105, 108);
}

body .search > .search-container > .search-space > * {
  color: rgb(8, 9, 14);
  outline: rgb(8, 9, 14) none 0px;
  text-decoration: rgb(8, 9, 14);
  text-decoration-color: rgb(8, 9, 14);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 9, 14);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(8, 9, 14);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(241, 242, 245);
  color: rgb(8, 9, 14);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(104, 105, 108);
  border-left-color: rgb(104, 105, 108);
  border-right-color: rgb(104, 105, 108);
  border-top-color: rgb(104, 105, 108);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 252, 252);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(241, 242, 245);
  color: rgb(8, 9, 14);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(251, 252, 252);
}

body h1 {
  color: rgb(241, 129, 150);
}

body h2 {
  color: rgb(241, 154, 129);
}

body h2.page-title, h2.page-title a {
  color: rgb(8, 9, 14);
}

body h3 {
  color: rgb(235, 203, 139);
}

body h4 {
  color: rgb(188, 241, 129);
}

body h5 {
  color: rgb(139, 227, 235);
}

body h6 {
  color: rgb(171, 139, 235);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(251, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}`,
    footer: `body footer {
  background-color: rgb(251, 252, 252);
  border-bottom-color: rgb(225, 226, 233);
  border-left-color: rgb(225, 226, 233);
  border-left-width: 0px;
  border-right-color: rgb(225, 226, 233);
  border-top-color: rgb(225, 226, 233);
  border-top-width: 0px;
  color: rgb(129, 129, 132);
}

body footer ul li a {
  color: rgb(129, 129, 132);
  text-decoration: rgb(129, 129, 132);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(8, 9, 14);
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(8, 9, 14);
}`,
    listPage: `body li.section-li {
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

body li.section-li > .section .meta {
  color: rgb(8, 9, 14);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(8, 9, 14);
  text-decoration: rgb(8, 9, 14);
}

body ul.section-ul {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

body .darkmode svg {
  color: rgb(8, 9, 14);
  stroke: rgb(8, 9, 14);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

body .breadcrumb-element p {
  color: rgb(129, 129, 132);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

body .metadata {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

body .metadata-properties {
  border-bottom-color: rgb(129, 129, 132);
  border-left-color: rgb(129, 129, 132);
  border-right-color: rgb(129, 129, 132);
  border-top-color: rgb(129, 129, 132);
  color: rgb(129, 129, 132);
}

body .navigation-progress {
  background-color: rgb(251, 252, 252);
}

body .page-header h2.page-title {
  color: rgb(8, 9, 14);
}

body abbr {
  color: rgb(8, 9, 14);
  text-decoration: underline dotted rgb(8, 9, 14);
}

body details {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body input[type=text] {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

body kbd {
  background-color: rgb(241, 242, 245);
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
  color: rgb(8, 9, 14);
}

body progress {
  border-bottom-color: rgb(8, 9, 14);
  border-left-color: rgb(8, 9, 14);
  border-right-color: rgb(8, 9, 14);
  border-top-color: rgb(8, 9, 14);
}

body sub {
  color: rgb(8, 9, 14);
}

body summary {
  color: rgb(8, 9, 14);
}

body sup {
  color: rgb(8, 9, 14);
}`,
  },
};
