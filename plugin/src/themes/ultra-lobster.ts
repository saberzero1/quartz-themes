import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ultra-lobster",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["nightingale", "monaspace-neon"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-grad: linear-gradient(
			45deg,
			rgb(0, 0, 0) 0%,
			rgb(0, 0, 0) 11%,
			rgb(0, 0, 0) 22%,
			rgb(0, 0, 0) 33%,
			rgb(0, 0, 0) 44%,
			rgb(0, 0, 0) 56%,
			rgb(0, 0, 0) 67%,
			rgb(0, 0, 0) 78%,
			rgb(0, 0, 0) 89%,
			rgb(0, 0, 0) 100%
		);
  --background-modifier-active-hover: rgba(0, 119, 255, 0.15);
  --background-modifier-border: #282828;
  --background-modifier-border-alt: #303030;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-box-shadow: rgb(0 0 0 / 30%);
  --background-modifier-cover: rgb(10 10 10 / 40%);
  --background-modifier-error: #FB464C;
  --background-modifier-error-hover: #FB464C;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-secondary-alt: #282828;
  --bases-cards-shadow: 0 0 0 1px #282828;
  --bases-cards-shadow-hover: 0 0 0 1px #3F3F3F;
  --bases-embed-border-color: #282828;
  --bases-group-heading-property-color: #666;
  --bases-table-border-color: #282828;
  --bases-table-cell-background-selected: rgba(0, 119, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #555;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 119, 255);
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #666;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-border-color: rgb(0, 119, 255);
  --blur-background: color-mix(in srgb, #262626 65%, transparent) linear-gradient(#262626, color-mix(in srgb, #262626 65%, transparent));
  --bold-weight: 600;
  --border-conOp: 1px solid rgb(255 255 255 / 10%);
  --border-lowOp: 1px solid rgb(255 255 255 / 10%);
  --border-midOp: 1px solid rgb(255 255 255 / 30%);
  --callout-blend-mode: normal;
  --callout-question: 224, 222, 113;
  --callout-radius: 8px;
  --canvas-card-label-color: #999;
  --canvas-dot-pattern: #282828;
  --caret-color: #bababa;
  --checkbox-border-color: #999;
  --checkbox-border-color-hover: #666;
  --checkbox-color: rgb(0, 119, 255);
  --checkbox-color-hover: #FA99CD;
  --checklist-done-color: #666;
  --code-border-color: #282828;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #999;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #666;
  --code-operator: #FB464C;
  --code-property: #53DFDD;
  --code-punctuation: #666;
  --code-string: #44CF6E;
  --code-tag: #FB464C;
  --code-value: #A882FF;
  --collapse-icon-color: #999;
  --collapse-icon-color-collapsed: rgb(0, 119, 255);
  --color-accent: rgb(0, 119, 255);
  --color-accent-1: #FA99CD;
  --color-accent-1-rgb: 250, 153, 205;
  --color-accent-2: rgb(0, 0, 0);
  --color-accent-hover: rgb(0, 0, 0);
  --color-accent-hsl: 212, 100%, 50%;
  --color-accent-rgb: 2, 122, 255;
  --color-base-30: #282828;
  --color-base-35: #3F3F3F;
  --color-base-40: #555;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --color-blue: #027AFF;
  --color-blue-hsl: 212, 100%, 50%;
  --color-cyan: #53DFDD;
  --color-cyan-hsl: 179, 69%, 60%;
  --color-green: #44CF6E;
  --color-green-hsl: 138, 59%, 54%;
  --color-orange: #E9973F;
  --color-orange-hsl: 31, 79%, 58%;
  --color-pink: #FA99CD;
  --color-pink-hsl: 328, 91%, 79%;
  --color-purple: #A882FF;
  --color-purple-hsl: 258, 100%, 75%;
  --color-red: #FB464C;
  --color-red-hsl: 358, 96%, 63%;
  --color-yellow: #E0DE71;
  --color-yellow-hsl: 59, 64%, 66%;
  --conOp: rgb(255 255 255 / 10%);
  --divider-color: #282828;
  --divider-color-hover: rgb(0, 119, 255);
  --dropdown-background: #262626;
  --dropdown-background-hover: #3F3F3F;
  --embed-block-shadow-hover: 0 0 0 1px #282828,
        inset 0 0 0 1px #282828;
  --embed-border-left: 2px solid rgb(0, 119, 255);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(0, 119, 255);
  --file-header-font: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 74ch;
  --file-margins: 32px;
  --flair-background: #262626;
  --flair-color: #bababa;
  --floating-toc-header-background: #262626;
  --font-interface: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Satoshi", sans-serif;
  --font-mermaid: '??', "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mono: "Monaspace", monospace;
  --font-print: '??', '??', "Satoshi", sans-serif, 'Arial';
  --font-text: '??', "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Satoshi", sans-serif;
  --font-title: "Monaspace";
  --footnote-divider-color: #282828;
  --footnote-id-color: #666;
  --footnote-id-color-no-occurrences: #999;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --gradient-bg-primary: linear-gradient(135deg, #262626 1.62%, #1e1e1e 50.72%);
  --gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 1.62%, #262626 50.72%);
  --graph-line: #3F3F3F;
  --graph-node: #666;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #555;
  --graph-node-tag: rgb(0, 119, 255);
  --graph-node-unresolved: #999;
  --graph-text: #bababa;
  --h1-font: "Monaspace";
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --h1-weight: 500;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-size: 1.12em;
  --heading-formatting: #999;
  --hr-color: #282828;
  --icon-color: #666;
  --icon-color-active: rgb(0, 119, 255);
  --icon-color-focused: #bababa;
  --icon-color-hover: #666;
  --inline-title-color: #dadada;
  --inline-title-font: "Monaspace";
  --inline-title-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --inline-title-weight: 500;
  --input-date-separator: #999;
  --input-placeholder-color: #999;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgb(255 255 255 / 9%), 0 2px 4px 0 rgb(0 0 0 / 15%), 0 1px 1.5px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 20%), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgb(255 255 255 / 16%), 0 2px 3px 0 rgb(0 0 0 / 30%), 0 1px 1.5px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 40%), 0 0 0 0 transparent;
  --interactive-accent: rgb(0, 119, 255);
  --interactive-accent-hover: #FA99CD;
  --interactive-accent-hsl: 212, 100%, 50%;
  --interactive-hover: #3F3F3F;
  --interactive-normal: #262626;
  --lbs: rgb(0 0 5 / 15%) 0px 20px 30px;
  --link-color: #666;
  --link-color-hover: #bababa;
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: rgb(0, 119, 255);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: transparent;
  --list-indent: 2em;
  --list-marker-color: #999;
  --list-marker-color-collapsed: rgb(0, 119, 255);
  --list-marker-color-hover: #666;
  --lowOp: rgb(255 255 255 / 10%);
  --menu-border-color: #3F3F3F;
  --menu-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  --metadata-border-color: #282828;
  --metadata-divider-color: #282828;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-font: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #bababa;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-font: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #666;
  --metadata-label-text-color-hover: #666;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #555;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3F3F3F;
  --midOp: rgb(255 255 255 / 30%);
  --modal-border-color: #555;
  --modal-radius: 10px;
  --nav-collapse-icon-color: #999;
  --nav-collapse-icon-color-collapsed: #999;
  --nav-heading-color: #bababa;
  --nav-heading-color-collapsed: #999;
  --nav-heading-color-collapsed-hover: #666;
  --nav-heading-color-hover: #bababa;
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: rgba(0, 119, 255, 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 8px;
  --nav-item-color: #666;
  --nav-item-color-active: #bababa;
  --nav-item-color-highlighted: rgb(0, 0, 0);
  --nav-item-color-hover: #bababa;
  --nav-item-color-selected: #bababa;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #999;
  --nav-tag-color-active: #666;
  --nav-tag-color-hover: #666;
  --o-border: 1px solid #282828;
  --pdf-shadow: 0 0 0 1px #282828;
  --pdf-thumbnail-shadow: 0 0 0 1px #282828;
  --pill-border-color: #282828;
  --pill-border-color-hover: #3F3F3F;
  --pill-color: #666;
  --pill-color-hover: #bababa;
  --pill-color-remove: #999;
  --pill-color-remove-hover: rgb(0, 119, 255);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-border-color: #555;
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, #262626 65%, transparent) linear-gradient(#262626, color-mix(in srgb, #262626 65%, transparent));
  --sbs: 24px 24px 84px -4px rgb(0 0 13 / 5%), 0px 16px 64px 6px rgb(0 13 0 / 0.7%);
  --scrollbar-active-thumb-bg: rgb(0, 119, 255);
  --scrollbar-bg: rgba(255, 255, 255, 0.1);
  --scrollbar-radius: 10px;
  --search-clear-button-color: #666;
  --search-icon-color: #666;
  --setting-group-heading-color: #bababa;
  --setting-items-border-color: #282828;
  --setting-items-radius: 10px;
  --shadow-l: rgb(0 0 0 / 20%) 0px 8px 24px;
  --shadow-lm-only: none;
  --shadow-s: rgb(0 0 0 / 16%) 0px 1px 4px;
  --slider-thumb-border-color: #3F3F3F;
  --slider-thumb-radius: 50%;
  --slider-track-background: #282828;
  --status-bar-border-color: #282828;
  --status-bar-text-color: #666;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #FB464C;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027AFF;
  --sync-avatar-color-7: #A882FF;
  --sync-avatar-color-8: #FA99CD;
  --tab-divider-color: #3F3F3F;
  --tab-outline-color: #282828;
  --tab-stacked-text-align: left;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 119, 255);
  --tab-text-color: #999;
  --tab-text-color-active: #666;
  --tab-text-color-focused: #666;
  --tab-text-color-focused-active: #666;
  --tab-text-color-focused-active-current: #bababa;
  --tab-text-color-focused-highlighted: rgb(0, 119, 255);
  --table-add-button-border-color: #282828;
  --table-border-color: #282828;
  --table-drag-handle-background-active: rgb(0, 119, 255);
  --table-drag-handle-color: #999;
  --table-header-border-color: #282828;
  --table-header-color: #bababa;
  --table-header-weight: 600;
  --table-selection: rgba(0, 119, 255, 0.1);
  --table-selection-border-color: rgb(0, 119, 255);
  --table-white-space: normal;
  --tag-background: rgba(0, 119, 255, 0.1);
  --tag-background-hover: rgba(0, 119, 255, 0.2);
  --tag-border-color: rgba(0, 119, 255, 0.15);
  --tag-border-color-hover: rgba(0, 119, 255, 0.15);
  --tag-color: rgb(0, 119, 255);
  --tag-color-hover: rgb(0, 119, 255);
  --test-image: url("https://i.pinimg.com/564x/15/05/3c/15053c066ed66a20595bef2f0b08c37d.jpg");
  --text-accent: rgb(0, 119, 255);
  --text-accent-hover: rgb(0, 0, 0);
  --text-error: #FB464C;
  --text-faint: #999;
  --text-highlight-bg: rgb(255 208 0 / 40%);
  --text-highlight-bg-active: rgb(255 128 0 / 40%);
  --text-muted: #666;
  --text-normal: #bababa;
  --text-on-button: white;
  --text-selection: rgba(0, 119, 255, 0.33);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #282828;
  --titlebar-text-color: #666;
  --titlebar-text-color-focused: #bababa;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94);
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95);
  --ulu-font-general: "Satoshi", sans-serif;
  --ulu-font-title: "Monaspace";
  --vault-name-color: #bababa;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #bababa;
  --vault-profile-color-hover: #bababa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(128, 128, 128);
  color: rgb(186, 186, 186);
}

body div#quartz-root {
  color: rgb(186, 186, 186);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  color: rgb(153, 153, 153);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body .page article p > i, i {
  color: rgb(153, 153, 153);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body .page article p > strong, strong {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body del {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body p {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 119, 255);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(0, 119, 255) none 0px;
  text-decoration: 13% rgb(0, 119, 255);
  text-decoration-color: rgb(0, 119, 255);
  text-decoration-thickness: 13%;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: 13% rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
  text-decoration-thickness: 13%;
}

body a.internal.broken {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
}`,
    lists: `body dd {
  color: rgb(186, 186, 186);
}

body dt {
  color: rgb(186, 186, 186);
}

body ol > li {
  color: rgb(186, 186, 186);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body ul > li {
  color: rgb(186, 186, 186);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  background-color: rgb(30, 30, 30);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body table {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.938px;
}

body td {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-right-width: 0px;
  border-top-color: rgb(186, 186, 186);
  border-top-width: 0px;
  color: rgb(186, 186, 186);
}

body th {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-width: 0px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 0px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 0px;
  border-top-color: rgb(40, 40, 40);
  border-top-width: 0px;
  color: rgb(186, 186, 186);
}`,
    code: `body code {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(186, 186, 186);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body pre:has(> code) {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    images: `body audio {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body figcaption {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body img {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .transclude {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .transclude-inner {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  transition: 0.3s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='-'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='/'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='>'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='?'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='I'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='S'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='b'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='c'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='d'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='f'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='i'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='k'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='l'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='p'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='u'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='w'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-right-width: 0px;
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(48, 48, 48);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 48, 48);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(186, 186, 186);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 119, 255, 0.1);
  border-bottom-color: rgb(0, 119, 255);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(0, 119, 255);
  border-top-color: rgb(0, 119, 255);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

body a.internal.tag-link::before {
  color: rgb(0, 119, 255);
}

body h1 {
  color: rgb(186, 186, 186);
  font-family: Monaspace;
}

body h2 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: Monaspace;
}

body h3 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(218, 218, 218);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(218, 218, 218);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(218, 218, 218);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(102, 102, 102);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(48, 48, 48);
  border-bottom-width: 1px;
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-right-width: 1px;
  border-top-color: rgb(48, 48, 48);
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body li.section-li > .section .meta {
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .metadata {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(186, 186, 186);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(186, 186, 186);
  text-decoration: underline dotted rgb(186, 186, 186);
}

body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body input[type=text] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 119, 255);
  border-left-color: rgb(0, 119, 255);
  border-right-color: rgb(0, 119, 255);
  border-top-color: rgb(0, 119, 255);
  color: rgb(0, 119, 255);
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body sub {
  color: rgb(186, 186, 186);
}

body summary {
  color: rgb(186, 186, 186);
}

body sup {
  color: rgb(186, 186, 186);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgba(8, 108, 221, 0.15);
  --background-modifier-border: #E0E0E0;
  --background-modifier-border-alt: #fff;
  --background-modifier-border-focus: #BDBDBD;
  --background-modifier-border-hover: #D4D4D4;
  --background-modifier-box-shadow: rgb(0 0 0 / 10%);
  --background-modifier-cover: rgb(220 220 220 / 40%);
  --background-modifier-error: #E93147;
  --background-modifier-error-hover: #E93147;
  --background-modifier-form-field: #FFF;
  --background-modifier-form-field-hover: #FFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #08B94E;
  --background-primary: #FFF;
  --background-primary-alt: #FAFAFA;
  --background-secondary: #F3F3F3;
  --background-secondary-alt: #FCFCFC;
  --bases-cards-background: #FFF;
  --bases-cards-cover-background: #FAFAFA;
  --bases-cards-shadow: 0 0 0 1px #E0E0E0;
  --bases-cards-shadow-hover: 0 0 0 1px #D4D4D4;
  --bases-embed-border-color: #E0E0E0;
  --bases-group-heading-property-color: #ABABAB;
  --bases-table-border-color: #E0E0E0;
  --bases-table-cell-background-active: #FFF;
  --bases-table-cell-background-disabled: #FAFAFA;
  --bases-table-cell-background-selected: rgba(8, 108, 221, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #BDBDBD;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(8, 108, 221);
  --bases-table-group-background: #FAFAFA;
  --bases-table-header-background: #FFF;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: #ABABAB;
  --bases-table-summary-background: #FFF;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --blockquote-border-color: rgb(8, 108, 221);
  --blur-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent));
  --bold-weight: 600;
  --border-conOp: 1px solid rgb(0 0 0 / 30%);
  --border-lowOp: 1px solid rgb(0 0 0 / 10%);
  --border-midOp: 1px solid rgb(0 0 0 / 30%);
  --callout-blend-mode: normal;
  --callout-question: 224, 172, 0;
  --callout-radius: 8px;
  --canvas-background: #FFF;
  --canvas-card-label-color: #707070;
  --canvas-color: 10, 10, 10;
  --canvas-dot-pattern: #E0E0E0;
  --caret-color: #5A5A5A;
  --cbs: 24px 24px 64px -4px rgb(0 0 0 / 1%), 0px 16px 32px 6px rgb(0 0 0 / 3%);
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #ABABAB;
  --checkbox-color: rgb(8, 108, 221);
  --checkbox-color-hover: rgb(0, 0, 0);
  --checkbox-marker-color: #FFF;
  --checklist-done-color: #ABABAB;
  --code-background: #FAFAFA;
  --code-border-color: #E0E0E0;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #707070;
  --code-function: #E0AC00;
  --code-important: #EC7500;
  --code-keyword: #D53984;
  --code-normal: #ABABAB;
  --code-operator: #E93147;
  --code-property: #00BFBC;
  --code-punctuation: #ABABAB;
  --code-string: #08B94E;
  --code-tag: #E93147;
  --code-value: #7852EE;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: rgb(8, 108, 221);
  --color-accent: rgb(8, 108, 221);
  --color-accent-1: #D53984;
  --color-accent-1-rgb: 213, 57, 132;
  --color-accent-2: rgb(0, 0, 0);
  --color-accent-hover: rgb(0, 0, 0);
  --color-accent-hsl: 212, 93%, 45%;
  --color-accent-rgb: 8, 109, 221;
  --color-base-00: #FFF;
  --color-base-05: #FCFCFC;
  --color-base-10: #FAFAFA;
  --color-base-100: #222;
  --color-base-20: #F3F3F3;
  --color-base-25: #E3E3E3;
  --color-base-30: #E0E0E0;
  --color-base-35: #D4D4D4;
  --color-base-40: #BDBDBD;
  --color-base-50: #ABABAB;
  --color-base-70: #5A5A5A;
  --color-blue: #086DDD;
  --color-blue-hsl: 212, 93%, 45%;
  --color-cyan: #00BFBC;
  --color-cyan-hsl: 179, 100%, 37%;
  --color-green: #08B94E;
  --color-green-hsl: 144, 92%, 38%;
  --color-orange: #EC7500;
  --color-orange-hsl: 30, 100%, 46%;
  --color-pink: #D53984;
  --color-pink-hsl: 331, 65%, 53%;
  --color-purple: #7852EE;
  --color-purple-hsl: 255, 82%, 63%;
  --color-red: #E93147;
  --color-red-hsl: 353, 81%, 55%;
  --color-yellow: #E0AC00;
  --color-yellow-hsl: 46, 100%, 44%;
  --conOp: rgb(0 0 0 / 30%);
  --divider-color: #E0E0E0;
  --divider-color-hover: rgb(8, 108, 221);
  --dropdown-background: #FFF;
  --dropdown-background-hover: #FAFAFA;
  --embed-block-shadow-hover: 0 0 0 1px #E0E0E0,
        inset 0 0 0 1px #E0E0E0;
  --embed-border-left: 2px solid rgb(8, 108, 221);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(8, 108, 221);
  --file-header-background: #FFF;
  --file-header-background-focused: #FFF;
  --file-header-font: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 74ch;
  --file-margins: 32px;
  --flair-background: #FFF;
  --flair-color: #5A5A5A;
  --floating-toc-header-background: #F3F3F3;
  --font-interface: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Satoshi", sans-serif;
  --font-mermaid: '??', "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mono: "Monaspace", monospace;
  --font-print: '??', '??', "Satoshi", sans-serif, 'Arial';
  --font-text: '??', "Satoshi", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Satoshi", sans-serif;
  --font-title: "Monaspace";
  --footnote-divider-color: #E0E0E0;
  --footnote-id-color: #ABABAB;
  --footnote-id-color-no-occurrences: #707070;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075);
  --gradient-bg-primary: linear-gradient(135deg, #fff 1.62%, #F5F5F5 50.72%);
  --gradient-bg-secondary: linear-gradient(135deg, #F3F3F3 1.62%, #E6E6E6 50.72%);
  --graph-line: #D4D4D4;
  --graph-node: #ABABAB;
  --graph-node-attachment: #E0AC00;
  --graph-node-focused: #BDBDBD;
  --graph-node-tag: rgb(8, 108, 221);
  --graph-node-unresolved: #707070;
  --graph-text: #5A5A5A;
  --h1-font: "Monaspace";
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --h1-weight: 500;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-size: 1.12em;
  --heading-formatting: #707070;
  --hr-color: #E0E0E0;
  --icon-color: #ABABAB;
  --icon-color-active: rgb(8, 108, 221);
  --icon-color-focused: #5A5A5A;
  --icon-color-hover: #ABABAB;
  --inline-title-color: #222;
  --inline-title-font: "Monaspace";
  --inline-title-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --inline-title-weight: 500;
  --input-date-separator: #707070;
  --input-placeholder-color: #707070;
  --input-shadow: inset 0 0 0 1px rgb(0 0 0 / 12%), 0 2px 3px 0 rgb(0 0 0 / 5%), 0 1px 1.5px 0 rgb(0 0 0 / 3%), 0 1px 2px 0 rgb(0 0 0 / 4%), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgb(0 0 0 / 17%), 0 2px 3px 0 rgb(0 0 0 / 10%), 0 1px 1.5px 0 rgb(0 0 0 / 3%), 0 1px 2px 0 rgb(0 0 0 / 4%), 0 0 0 0 transparent;
  --interactive-accent: rgb(8, 108, 221);
  --interactive-accent-hover: rgb(0, 0, 0);
  --interactive-accent-hsl: 212, 93%, 45%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFF;
  --lbs: rgb(0 5 0 / 3%) 0px 20px 30px;
  --link-color: #ABABAB;
  --link-color-hover: #5A5A5A;
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: rgb(8, 108, 221);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #ABABAB;
  --link-unresolved-decoration-color: transparent;
  --list-indent: 2em;
  --list-marker-color: #707070;
  --list-marker-color-collapsed: rgb(8, 108, 221);
  --list-marker-color-hover: #ABABAB;
  --lowOp: rgb(0 0 0 / 10%);
  --menu-background: #F3F3F3;
  --menu-border-color: #D4D4D4;
  --menu-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
  --metadata-border-color: #E0E0E0;
  --metadata-divider-color: #E0E0E0;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075);
  --metadata-input-font: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #5A5A5A;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-font: '??', "Satoshi", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #ABABAB;
  --metadata-label-text-color-hover: #ABABAB;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #BDBDBD;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D4D4D4;
  --modal-background: #FFF;
  --modal-border-color: #BDBDBD;
  --modal-radius: 10px;
  --nav-collapse-icon-color: #707070;
  --nav-collapse-icon-color-collapsed: #707070;
  --nav-heading-color: #5A5A5A;
  --nav-heading-color-collapsed: #707070;
  --nav-heading-color-collapsed-hover: #ABABAB;
  --nav-heading-color-hover: #5A5A5A;
  --nav-item-background-active: rgba(0, 0, 0, 0.075);
  --nav-item-background-hover: rgba(0, 0, 0, 0.075);
  --nav-item-background-selected: rgba(8, 108, 221, 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 8px;
  --nav-item-color: #ABABAB;
  --nav-item-color-active: #5A5A5A;
  --nav-item-color-highlighted: rgb(0, 0, 0);
  --nav-item-color-hover: #5A5A5A;
  --nav-item-color-selected: #5A5A5A;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #707070;
  --nav-tag-color-active: #ABABAB;
  --nav-tag-color-hover: #ABABAB;
  --o-border: 1px solid #E0E0E0;
  --pdf-background: #FFF;
  --pdf-page-background: #FFF;
  --pdf-sidebar-background: #FFF;
  --pill-border-color: #E0E0E0;
  --pill-border-color-hover: #D4D4D4;
  --pill-color: #ABABAB;
  --pill-color-hover: #5A5A5A;
  --pill-color-remove: #707070;
  --pill-color-remove-hover: rgb(8, 108, 221);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #FFF;
  --prompt-border-color: #BDBDBD;
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent));
  --ribbon-background: #F3F3F3;
  --ribbon-background-collapsed: #FFF;
  --sbs: 24px 24px 84px -4px rgb(0 0 0 / 5%), 0px 16px 64px 6px rgb(0 0 0 / 0.7%);
  --scrollbar-active-thumb-bg: rgb(8, 108, 221);
  --scrollbar-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-radius: 10px;
  --search-clear-button-color: #ABABAB;
  --search-icon-color: #ABABAB;
  --search-result-background: #FFF;
  --setting-group-heading-color: #5A5A5A;
  --setting-items-background: #FAFAFA;
  --setting-items-border-color: #E0E0E0;
  --setting-items-radius: 10px;
  --shadow-l: rgb(149 157 165 / 20%) 0px 8px 24px;
  --shadow-lm-only: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  --shadow-s: rgb(0 0 0 / 4%) 0px 3px 5px;
  --slider-thumb-border-color: #D4D4D4;
  --slider-thumb-radius: 50%;
  --slider-track-background: #E0E0E0;
  --status-bar-background: #F3F3F3;
  --status-bar-border-color: #E0E0E0;
  --status-bar-text-color: #ABABAB;
  --suggestion-background: #FFF;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #E93147;
  --sync-avatar-color-2: #EC7500;
  --sync-avatar-color-3: #E0AC00;
  --sync-avatar-color-4: #08B94E;
  --sync-avatar-color-5: #00BFBC;
  --sync-avatar-color-6: #086DDD;
  --sync-avatar-color-7: #7852EE;
  --sync-avatar-color-8: #D53984;
  --tab-background-active: #FFF;
  --tab-container-background: #F3F3F3;
  --tab-divider-color: #D4D4D4;
  --tab-outline-color: #E0E0E0;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #F3F3F3;
  --tab-switcher-menubar-background: linear-gradient(to top, #F3F3F3, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(8, 108, 221);
  --tab-text-color: #707070;
  --tab-text-color-active: #ABABAB;
  --tab-text-color-focused: #ABABAB;
  --tab-text-color-focused-active: #ABABAB;
  --tab-text-color-focused-active-current: #5A5A5A;
  --tab-text-color-focused-highlighted: rgb(8, 108, 221);
  --table-add-button-border-color: #E0E0E0;
  --table-border-color: #E0E0E0;
  --table-drag-handle-background-active: rgb(8, 108, 221);
  --table-drag-handle-color: #707070;
  --table-header-border-color: #E0E0E0;
  --table-header-color: #5A5A5A;
  --table-header-weight: 600;
  --table-selection: rgba(8, 108, 221, 0.1);
  --table-selection-border-color: rgb(8, 108, 221);
  --table-white-space: normal;
  --tag-background: rgba(8, 108, 221, 0.1);
  --tag-background-hover: rgba(8, 108, 221, 0.2);
  --tag-border-color: rgba(8, 108, 221, 0.15);
  --tag-border-color-hover: rgba(8, 108, 221, 0.15);
  --tag-color: rgb(8, 108, 221);
  --tag-color-hover: rgb(8, 108, 221);
  --text-accent: rgb(8, 108, 221);
  --text-accent-hover: rgb(0, 0, 0);
  --text-error: #E93147;
  --text-faint: #707070;
  --text-highlight-bg: rgb(255 208 0 / 40%);
  --text-highlight-bg-active: rgb(255 128 0 / 40%);
  --text-muted: #ABABAB;
  --text-normal: #5A5A5A;
  --text-on-button: #5A5A5A;
  --text-selection: #E0E0E0;
  --text-success: #08B94E;
  --text-warning: #EC7500;
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #E0E0E0;
  --titlebar-text-color: #ABABAB;
  --titlebar-text-color-focused: #5A5A5A;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94);
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95);
  --ulu-font-general: "Satoshi", sans-serif;
  --ulu-font-title: "Monaspace";
  --vault-name-color: #5A5A5A;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #5A5A5A;
  --vault-profile-color-hover: #5A5A5A;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 243, 243);
  border-left-color: rgb(128, 128, 128);
  color: rgb(90, 90, 90);
}

body div#quartz-root {
  color: rgb(90, 90, 90);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  color: rgb(112, 112, 112);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body .page article p > i, i {
  color: rgb(112, 112, 112);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body .page article p > strong, strong {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body del {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: line-through rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body p {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    links: `body a.external, footer a {
  color: rgb(8, 108, 221);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(8, 108, 221) none 0px;
  text-decoration: 13% rgb(8, 108, 221);
  text-decoration-color: rgb(8, 108, 221);
  text-decoration-thickness: 13%;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: 13% rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
  text-decoration-thickness: 13%;
}

body a.internal.broken {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
}`,
    lists: `body dd {
  color: rgb(90, 90, 90);
}

body dt {
  color: rgb(90, 90, 90);
}

body ol > li {
  color: rgb(90, 90, 90);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body ul > li {
  color: rgb(90, 90, 90);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body blockquote {
  background-color: rgb(255, 255, 255);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body table {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.938px;
}

body td {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 90, 90);
  border-left-width: 0px;
  border-right-color: rgb(90, 90, 90);
  border-right-width: 0px;
  border-top-color: rgb(90, 90, 90);
  border-top-width: 0px;
  color: rgb(90, 90, 90);
}

body th {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  color: rgb(90, 90, 90);
}`,
    code: `body code {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(90, 90, 90);
}`,
    images: `body audio {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body figcaption {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body img {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body video {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}

body .footnotes {
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .transclude {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body .transclude-inner {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  transition: 0.3s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='*'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='-'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='/'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='>'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='?'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='I'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='S'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='b'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='c'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='d'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='f'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='i'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='k'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='l'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='p'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='u'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='w'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(224, 172, 0, 0.1);
  border-bottom-color: rgba(224, 172, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 172, 0, 0.25);
  border-right-color: rgba(224, 172, 0, 0.25);
  border-top-color: rgba(224, 172, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-left-width: 0px;
  border-right-color: rgb(90, 90, 90);
  border-right-width: 0px;
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(90, 90, 90);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(8, 108, 221, 0.1);
  border-bottom-color: rgb(8, 108, 221);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(8, 108, 221);
  border-top-color: rgb(8, 108, 221);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

body a.internal.tag-link::before {
  color: rgb(8, 108, 221);
}

body h1 {
  color: rgb(90, 90, 90);
  font-family: Monaspace;
}

body h2 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: Monaspace;
}

body h3 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(171, 171, 171);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body li.section-li > .section .meta {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
}

body ul.section-ul {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .darkmode svg {
  color: rgb(90, 90, 90);
  stroke: rgb(90, 90, 90);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

body .breadcrumb-element p {
  color: rgb(112, 112, 112);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .metadata {
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(90, 90, 90);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(90, 90, 90);
  text-decoration: underline dotted rgb(90, 90, 90);
}

body details {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body input[type=text] {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", Satoshi, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 108, 221);
  border-left-color: rgb(8, 108, 221);
  border-right-color: rgb(8, 108, 221);
  border-top-color: rgb(8, 108, 221);
  color: rgb(8, 108, 221);
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body sub {
  color: rgb(90, 90, 90);
}

body summary {
  color: rgb(90, 90, 90);
}

body sup {
  color: rgb(90, 90, 90);
}`,
  },
};
