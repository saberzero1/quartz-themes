import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "serenity",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-duo", "ia-writer-mono", "ia-writer-quattro-s"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 238;
  --accent-l: 70%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(102, 107, 255, 0.1);
  --background-modifier-border: rgb(61, 61, 61);
  --background-modifier-border-focus: rgb(59, 59, 59);
  --background-modifier-border-hover: rgb(61, 61, 61);
  --background-modifier-form-field: rgb(26, 26, 26);
  --background-modifier-form-field-hover: rgb(26, 26, 26);
  --background-modifier-message: hsl(242, 104%, 76%);
  --background-primary: rgb(13, 13, 13);
  --background-primary-alt: rgb(26, 26, 26);
  --background-secondary: rgb(3, 3, 3);
  --background-secondary-alt: rgb(20, 20, 20);
  --base-c: 15%;
  --base-c-m: 5%;
  --bases-cards-background: rgb(13, 13, 13);
  --bases-cards-cover-background: rgb(26, 26, 26);
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px rgb(61, 61, 61);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(61, 61, 61);
  --bases-embed-border-color: rgb(61, 61, 61);
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: rgb(166, 166, 166);
  --bases-table-border-color: rgb(61, 61, 61);
  --bases-table-cell-background-active: rgb(13, 13, 13);
  --bases-table-cell-background-disabled: rgb(26, 26, 26);
  --bases-table-cell-background-selected: rgba(102, 107, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(59, 59, 59);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(102, 107, 255);
  --bases-table-container-border-radius: 5px;
  --bases-table-group-background: rgb(26, 26, 26);
  --bases-table-header-background: rgb(13, 13, 13);
  --bases-table-header-color: rgb(166, 166, 166);
  --bases-table-summary-background: rgb(13, 13, 13);
  --bg-box: rgba(255, 255, 255, 0.14);
  --bg-box-top: hsl(234, 104%, 75%);
  --blockquote-border-color: rgb(61, 61, 61);
  --blockquote-border-thickness: 1.2px;
  --blur-background: color-mix(in srgb, rgb(20, 20, 20) 65%, transparent) linear-gradient(rgb(20, 20, 20), color-mix(in srgb, rgb(20, 20, 20) 65%, transparent));
  --c-00: 5%;
  --c-05: 6%;
  --c-10: 10%;
  --c-100: 73%;
  --c-20: 1%;
  --c-25: 8%;
  --c-30: 8%;
  --c-35: 24%;
  --c-40: 23%;
  --c-50: 65%;
  --c-60: 69%;
  --c-70: 71%;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-content-background: rgb(26, 26, 26);
  --callout-content-padding: 10px;
  --callout-padding: 0px;
  --callout-radius: 5px;
  --callout-title-padding: 5px 10px;
  --callout-title-size: 0.98em;
  --canvas-background: rgb(13, 13, 13);
  --canvas-card-label-color: rgb(166, 166, 166);
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: rgb(20, 20, 20);
  --caret-color: rgb(186, 186, 186);
  --checkbox-border-color: rgb(166, 166, 166);
  --checkbox-border-color-hover: rgb(166, 166, 166);
  --checkbox-color: rgb(102, 107, 255);
  --checkbox-color-hover: hsl(242, 104%, 76%);
  --checkbox-marker-color: rgb(13, 13, 13);
  --checkbox-radius: 10px;
  --checklist-done-color: rgb(166, 166, 166);
  --clickable-icon-radius: 5px;
  --code-background: rgb(26, 26, 26);
  --code-border-color: rgb(61, 61, 61);
  --code-comment: rgb(166, 166, 166);
  --code-normal: rgb(186, 186, 186);
  --code-punctuation: rgb(166, 166, 166);
  --code-radius: 5px;
  --collapse-icon-color: rgb(166, 166, 166);
  --collapse-icon-color-collapsed: hsl(242, 104%, 76%);
  --color-accent: rgb(102, 107, 255);
  --color-accent-1: hsl(242, 104%, 76%);
  --color-accent-2: hsl(234, 104%, 75%);
  --color-accent-hsl: 238, 100%, 70%;
  --color-base-00: rgb(13, 13, 13);
  --color-base-05: rgb(15, 15, 15);
  --color-base-10: rgb(26, 26, 26);
  --color-base-100: rgb(186, 186, 186);
  --color-base-20: rgb(3, 3, 3);
  --color-base-25: rgb(20, 20, 20);
  --color-base-30: rgb(20, 20, 20);
  --color-base-35: rgb(61, 61, 61);
  --color-base-40: rgb(59, 59, 59);
  --color-base-50: rgb(166, 166, 166);
  --color-base-60: rgb(176, 176, 176);
  --color-base-70: rgb(181, 181, 181);
  --color-muted: #908caa;
  --color-muted-rgb: 144, 140, 170;
  --cursor-color: rgb(102, 107, 255);
  --cursor-width: 2.5px;
  --custom-base-c-d: 10%;
  --custom-base-c-l: 99%;
  --custom-border-c-d: 50%;
  --custom-border-c-l: 82%;
  --custom-c-20-d: 14%;
  --custom-c-20-l: 97%;
  --custom-text-c-d: 90%;
  --custom-text-c-l: 43%;
  --custom-theme-sat-d: 20%;
  --custom-theme-sat-l: 100%;
  --custom-theme-sat-secondary-d: 25%;
  --custom-theme-sat-secondary-l: 77%;
  --custom-theme-sat-text-d: 10%;
  --custom-theme-sat-text-l: 25%;
  --custom-theme-tint-d: 0;
  --custom-theme-tint-l: 15;
  --custom-theme-tint-secondary-d: 0;
  --custom-theme-tint-secondary-l: 15;
  --custom-theme-tint-text-d: 10;
  --custom-theme-tint-text-l: 205;
  --divider-color: rgb(61, 61, 61);
  --divider-color-hover: rgb(102, 107, 255);
  --divider-width: 0.2px;
  --dropdown-background: rgb(20, 20, 20);
  --dropdown-background-hover: rgba(102, 107, 255, 0.1);
  --dv-table-column-alt-background: transparent;
  --dv-table-row-alt-background: transparent;
  --dv-table-text-align: left;
  --editing-file-line-width: 700px;
  --embed-block-shadow-hover: 0 0 0 1px rgb(61, 61, 61), inset 0 0 0 1px rgb(61, 61, 61);
  --embed-border-start: 2px solid rgb(102, 107, 255);
  --file-header-background: rgb(13, 13, 13);
  --file-header-background-focused: rgb(13, 13, 13);
  --file-header-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(20, 20, 20);
  --flair-color: rgb(186, 186, 186);
  --font-default-custom: 'iA Writer Quattro S';
  --font-interface: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif;
  --font-mermaid: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: 'iA Writer Mono S';
  --font-monospace-custom: 'iA Writer Mono S';
  --font-preview-view: 'iA Writer Duo S';
  --font-print: '??', '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, 'Arial';
  --font-secondary: 'iA Writer Duo S';
  --font-secondary-custom: 'iA Writer Duo S';
  --font-text: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif;
  --font-weight-default: 400;
  --footnote-divider-color: rgb(61, 61, 61);
  --footnote-id-color: rgb(166, 166, 166);
  --footnote-id-color-no-occurrences: rgb(166, 166, 166);
  --footnote-line-height: 1.75;
  --footnote-radius: 5px;
  --graph-line: rgb(61, 61, 61);
  --graph-node: rgb(149, 134, 249);
  --graph-node-focused: rgb(104, 109, 243);
  --graph-node-unresolved: rgb(161, 124, 248);
  --graph-text: rgb(186, 186, 186);
  --h-align-s: left;
  --h-weight-s: 600;
  --h1-align: left;
  --h1-size: 1.72em;
  --h1-weight: 600;
  --h2-align: left;
  --h2-size: 1.51em;
  --h2-weight: 600;
  --h3-align: left;
  --h3-size: 1.35em;
  --h3-weight: 600;
  --h4-align: left;
  --h4-size: 1.19em;
  --h4-weight: 600;
  --h5-align: left;
  --h5-line-height: 1.75;
  --h5-size: 1.08em;
  --h5-weight: 600;
  --h6-align: left;
  --h6-line-height: 1.75;
  --heading-formatting: rgb(166, 166, 166);
  --hr-color: rgb(61, 61, 61);
  --hr-thickness: 1px;
  --icon-color: rgb(166, 166, 166);
  --icon-color-active: hsl(242, 104%, 76%);
  --icon-color-focused: rgb(186, 186, 186);
  --icon-color-hover: rgb(166, 166, 166);
  --img-side-margins: auto;
  --inactive-line-blur: 0px;
  --inactive-line-opacity: 0.4;
  --inactive-pane-blur: 0px;
  --inactive-pane-opacity: 0.55;
  --indentation-guide-color-active: rgb(102, 107, 255);
  --indentation-guide-width-active: 1.5px;
  --inline-field-size: 0.933em;
  --inline-title-align: center;
  --inline-title-size: 2.22em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(166, 166, 166);
  --input-placeholder-color: rgb(166, 166, 166);
  --input-shadow: rgb(61, 61, 61) 0 0 0 0.8px;
  --input-shadow-hover: rgba(102, 107, 255, 0.6) 0 0 0px 1px;
  --interactive-accent: rgb(102, 107, 255);
  --interactive-accent-hover: hsl(242, 104%, 76%);
  --interactive-accent-hsl: 238, 100%, 70%;
  --interactive-hover: rgba(102, 107, 255, 0.1);
  --interactive-normal: rgb(20, 20, 20);
  --line-height-normal: 1.75;
  --link-color: hsl(242, 104%, 76%);
  --link-color-hover: hsl(234, 104%, 75%);
  --link-decoration-color: hsl(242, 104%, 76%);
  --link-decoration-color-active: rgba(102, 107, 255, 0.5);
  --link-decoration-thickness: 0.06em;
  --link-external-color: hsl(242, 104%, 76%);
  --link-external-color-hover: hsl(234, 104%, 75%);
  --link-font: 'iA Writer Duo S';
  --link-underline-offset: 2px;
  --link-unresolved-color: hsl(242, 104%, 76%);
  --link-unresolved-decoration-color: rgba(102, 107, 255, 0.3);
  --list-bullet-size: 0.25em;
  --list-marker-color: rgb(166, 166, 166);
  --list-marker-color-collapsed: hsl(242, 104%, 76%);
  --list-marker-color-hover: rgb(166, 166, 166);
  --menu-background: rgb(3, 3, 3);
  --menu-border-color: rgb(61, 61, 61);
  --menu-radius: 12px;
  --metadata-border-color: rgb(61, 61, 61);
  --metadata-divider-color: rgb(61, 61, 61);
  --metadata-input-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(186, 186, 186);
  --metadata-label-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(166, 166, 166);
  --metadata-label-text-color-hover: rgb(166, 166, 166);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(59, 59, 59);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(61, 61, 61);
  --modal-background: rgb(13, 13, 13);
  --modal-border-color: rgb(59, 59, 59);
  --modal-radius: 18px;
  --nav-collapse-icon-color: rgb(166, 166, 166);
  --nav-collapse-icon-color-collapsed: rgb(166, 166, 166);
  --nav-heading-color: rgb(186, 186, 186);
  --nav-heading-color-collapsed: rgb(166, 166, 166);
  --nav-heading-color-collapsed-hover: rgb(166, 166, 166);
  --nav-heading-color-hover: rgb(186, 186, 186);
  --nav-item-background-selected: rgba(102, 107, 255, 0.15);
  --nav-item-color: rgb(166, 166, 166);
  --nav-item-color-active: rgb(186, 186, 186);
  --nav-item-color-highlighted: hsl(242, 104%, 76%);
  --nav-item-color-hover: rgb(186, 186, 186);
  --nav-item-color-selected: rgb(186, 186, 186);
  --nav-item-radius: 5px;
  --nav-tag-color: rgb(166, 166, 166);
  --nav-tag-color-active: rgb(166, 166, 166);
  --nav-tag-color-hover: rgb(166, 166, 166);
  --nav-tag-radius: 5px;
  --p-indent: 15px;
  --p-margin: 20px;
  --pdf-background: rgb(13, 13, 13);
  --pdf-page-background: rgb(13, 13, 13);
  --pdf-shadow: 0 0 0 1px rgb(61, 61, 61);
  --pdf-sidebar-background: rgb(13, 13, 13);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(61, 61, 61);
  --pill-border-color: rgb(61, 61, 61);
  --pill-border-color-hover: rgb(61, 61, 61);
  --pill-color: rgb(166, 166, 166);
  --pill-color-hover: rgb(186, 186, 186);
  --pill-color-remove: rgb(166, 166, 166);
  --pill-color-remove-hover: hsl(242, 104%, 76%);
  --prompt-background: rgb(13, 13, 13);
  --prompt-border-color: rgb(59, 59, 59);
  --prompt-max-height: 40vw;
  --prompt-width: 30vw;
  --radius-l: 18px;
  --radius-m: 12px;
  --radius-s: 5px;
  --radius-xl: 24px;
  --raised-background: color-mix(in srgb, rgb(20, 20, 20) 65%, transparent) linear-gradient(rgb(20, 20, 20), color-mix(in srgb, rgb(20, 20, 20) 65%, transparent));
  --ribbon-background: rgb(13, 13, 13);
  --ribbon-background-collapsed: rgb(13, 13, 13);
  --scrollbar-radius: 18px;
  --search-clear-button-color: rgb(166, 166, 166);
  --search-icon-color: rgb(166, 166, 166);
  --search-result-background: rgb(13, 13, 13);
  --serenity-mode-font-size: 17px;
  --setting-group-heading-color: rgb(186, 186, 186);
  --setting-items-background: rgb(26, 26, 26);
  --setting-items-border-color: rgb(61, 61, 61);
  --setting-items-radius: 18px;
  --slider-thumb-border-color: rgb(61, 61, 61);
  --slider-track-background: rgb(61, 61, 61);
  --speech-color: rgb(186, 186, 186);
  --speech-opacity: 0.5;
  --status-bar-background: rgb(3, 3, 3);
  --status-bar-border-color: rgb(61, 61, 61);
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: rgb(166, 166, 166);
  --suggestion-background: rgb(13, 13, 13);
  --tab-background-active: rgb(13, 13, 13);
  --tab-container-background: rgb(3, 3, 3);
  --tab-divider-color: rgb(20, 20, 20);
  --tab-outline-color: rgb(61, 61, 61);
  --tab-outline-width: 0.7px;
  --tab-radius: 5px;
  --tab-switcher-background: rgb(3, 3, 3);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(3, 3, 3), transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(102, 107, 255);
  --tab-text-color: rgb(166, 166, 166);
  --tab-text-color-active: rgb(166, 166, 166);
  --tab-text-color-focused: rgb(166, 166, 166);
  --tab-text-color-focused-active: rgb(166, 166, 166);
  --tab-text-color-focused-active-current: rgb(186, 186, 186);
  --tab-text-color-focused-highlighted: hsl(242, 104%, 76%);
  --table-add-button-border-color: rgb(61, 61, 61);
  --table-border-color: rgb(61, 61, 61);
  --table-drag-handle-background-active: rgb(102, 107, 255);
  --table-drag-handle-color: rgb(166, 166, 166);
  --table-header-background: rgb(3, 3, 3);
  --table-header-background-hover: rgb(3, 3, 3);
  --table-header-border-color: rgb(61, 61, 61);
  --table-header-color: rgb(186, 186, 186);
  --table-header-size: 0.875em;
  --table-header-weight: 600;
  --table-selection: rgba(102, 107, 255, 0.1);
  --table-selection-border-color: rgb(102, 107, 255);
  --table-text-size: 0.875em;
  --tag-background: rgba(102, 107, 255, 0.1);
  --tag-background-hover: rgba(102, 107, 255, 0.2);
  --tag-border-color: rgba(102, 107, 255, 0.15);
  --tag-border-color-hover: rgba(102, 107, 255, 0.15);
  --tag-color: hsl(242, 104%, 76%);
  --tag-color-hover: hsl(242, 104%, 76%);
  --tag-opacity: 0.25;
  --tag-opacity-hover: 0.2;
  --tag-padding-x: 6px;
  --tag-padding-y: 2px;
  --tag-radius: 5px;
  --text-accent: hsl(242, 104%, 76%);
  --text-accent-hover: hsl(234, 104%, 75%);
  --text-faint: rgb(166, 166, 166);
  --text-muted: rgb(166, 166, 166);
  --text-normal: rgb(186, 186, 186);
  --text-selection: rgba(102, 107, 255, 0.33);
  --theme-sat: 0%;
  --theme-sat-secondary: 0%;
  --theme-sat-text: 0%;
  --theme-tint: 0;
  --theme-tint-secondary: 0;
  --theme-tint-text: 0;
  --titlebar-background: rgb(13, 13, 13);
  --titlebar-background-focused: rgb(3, 3, 3);
  --titlebar-border-color: rgb(61, 61, 61);
  --titlebar-text-color: rgb(166, 166, 166);
  --titlebar-text-color-focused: rgb(186, 186, 186);
  --vault-profile-color: rgb(186, 186, 186);
  --vault-profile-color-hover: rgb(186, 186, 186);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(3, 3, 3);
  color: rgb(186, 186, 186);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 13, 13);
  color: rgb(186, 186, 186);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(3, 3, 3);
  color: rgb(186, 186, 186);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(61, 61, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(3, 3, 3);
  border-left-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
}

body div#quartz-root {
  background-color: rgb(13, 13, 13);
  color: rgb(186, 186, 186);
}`,
    typography: `body .page article p > b, b {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .page article p > em, em {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .page article p > i, i {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .page article p > strong, strong {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 206, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(204, 206, 255) none 0px;
  text-decoration: rgb(204, 206, 255);
  text-decoration-color: rgb(204, 206, 255);
}

body del {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body p {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 166, 166) none 0px;
  text-decoration: rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
}`,
    links: `body a.external, footer a {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(137, 133, 255) none 0px;
  text-decoration: underline 0.96px rgb(137, 133, 255);
  text-decoration-color: rgb(137, 133, 255);
  text-decoration-thickness: 0.96px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(137, 133, 255) none 0px;
  text-decoration: underline 0.96px rgb(137, 133, 255);
  text-decoration-color: rgb(137, 133, 255);
  text-decoration-thickness: 0.96px;
}

body a.internal.broken {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
  outline: rgb(137, 133, 255) none 0px;
  text-decoration: underline 0.96px rgba(102, 107, 255, 0.3);
  text-decoration-color: rgba(102, 107, 255, 0.3);
  text-decoration-thickness: 0.96px;
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
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body ul > li {
  color: rgb(186, 186, 186);
}

body ul.overflow {
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body blockquote {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .spacer {
  background-color: rgb(13, 13, 13);
}

body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body table {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 222.359px;
  margin-right: 222.359px;
  width: 227.281px;
}

body td {
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
  padding-bottom: 0px;
  padding-top: 0px;
}

body th {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  text-align: center;
}

body tr {
  background-color: rgb(3, 3, 3);
}`,
    code: `body code {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
  font-family: "iA Writer Mono S";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `body audio {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body figcaption {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body img {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-radius: 5px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  filter: brightness(0.9);
}

body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .transclude {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .transclude-inner {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 166, 166);
  text-decoration: line-through rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
}

body input[type=checkbox] {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: underline 1.5px rgb(224, 222, 113);
  text-decoration-color: rgb(224, 222, 113);
}

body li.task-list-item[data-task='-'] {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
  text-decoration-color: rgb(166, 166, 166);
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
    callouts: `body .callout .callout-title {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  gap: 15.68px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout > .callout-content {
  background-color: rgb(26, 26, 26);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.17);
  border-bottom-color: rgba(83, 223, 221, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 250, 153, 205;
  background-color: rgba(250, 153, 205, 0.17);
  border-bottom-color: rgba(250, 153, 205, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 153, 205, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(250, 153, 205, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(250, 153, 205, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.17);
  border-bottom-color: rgba(251, 70, 76, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.17);
  border-bottom-color: rgba(168, 130, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(168, 130, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.17);
  border-bottom-color: rgba(251, 70, 76, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.17);
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.17);
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.17);
  border-bottom-color: rgba(233, 151, 63, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgba(158, 158, 158, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.17);
  border-bottom-color: rgba(68, 207, 110, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.17);
  border-bottom-color: rgba(224, 222, 113, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 222, 113, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(224, 222, 113, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(224, 222, 113, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.17);
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.17);
  border-bottom-color: rgba(233, 151, 63, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(59, 59, 59);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(59, 59, 59);
  border-right-color: rgb(59, 59, 59);
  border-top-color: rgb(59, 59, 59);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(186, 186, 186);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(59, 59, 59);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(59, 59, 59);
  border-right-color: rgb(59, 59, 59);
  border-top-color: rgb(59, 59, 59);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(3, 3, 3);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(102, 105, 204, 0.25);
  border-bottom-color: rgb(184, 185, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(184, 185, 224);
  border-right-color: rgb(184, 185, 224);
  border-top-color: rgb(184, 185, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(184, 185, 224);
}

body h1 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.08);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.08);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.08);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.08);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 13, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 13, 13);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 166, 166);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 166, 166);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 166, 166);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(166, 166, 166);
}`,
    footer: `body footer {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgb(61, 61, 61);
  border-left-color: rgb(61, 61, 61);
  border-right-color: rgb(61, 61, 61);
  border-top-color: rgb(61, 61, 61);
  border-top-left-radius: 12px;
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body li.section-li > .section .meta {
  color: rgb(137, 133, 255);
  font-family: "iA Writer Duo S";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
  text-decoration: rgb(166, 166, 166);
}

body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(166, 166, 166);
}

body .darkmode svg {
  color: rgb(166, 166, 166);
  stroke: rgb(166, 166, 166);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(166, 166, 166);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(166, 166, 166);
}

body .breadcrumb-element p {
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: -15px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
}

body .metadata-properties {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
}

body .navigation-progress {
  background-color: rgb(3, 3, 3);
}

body .page-header h2.page-title {
  color: rgb(186, 186, 186);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(68, 207, 110);
  text-decoration: underline dashed rgb(68, 207, 110);
  text-decoration-style: dashed;
}

body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body input[type=text] {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(186, 186, 186);
  font-family: "iA Writer Mono S";
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
  --accent-h: 228;
  --accent-s: 70%;
  --background-modifier-active-hover: rgba(108, 132, 229, 0.1);
  --background-modifier-border: rgb(219, 215, 215);
  --background-modifier-border-focus: rgb(230, 230, 230);
  --background-modifier-border-hover: rgb(134, 121, 121);
  --background-modifier-error: #f45757;
  --background-modifier-error-hover: #f45757;
  --background-modifier-error-rgb: 244, 87, 87;
  --background-modifier-form-field: hsl(0, 0%, 103.2%);
  --background-modifier-form-field-hover: hsl(0, 0%, 103.2%);
  --background-modifier-hover: rgba(0, 0, 0, 0.05);
  --background-modifier-message: rgb(129, 151, 234);
  --background-primary: hsl(0, 0%, 103.2%);
  --background-primary-alt: rgb(247, 247, 247);
  --background-secondary: rgb(250, 250, 250);
  --background-secondary-alt: hsl(0, 0%, 101.2%);
  --base-c: 100%;
  --base-c-bg: 103.2%;
  --bases-cards-background: hsl(0, 0%, 103.2%);
  --bases-cards-cover-background: rgb(247, 247, 247);
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px rgb(219, 215, 215);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(134, 121, 121);
  --bases-embed-border-color: rgb(219, 215, 215);
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: rgb(69, 69, 69);
  --bases-table-border-color: rgb(219, 215, 215);
  --bases-table-cell-background-active: hsl(0, 0%, 103.2%);
  --bases-table-cell-background-disabled: rgb(247, 247, 247);
  --bases-table-cell-background-selected: rgba(108, 132, 229, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(230, 230, 230);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(129, 151, 234);
  --bases-table-container-border-radius: 5px;
  --bases-table-group-background: rgb(247, 247, 247);
  --bases-table-header-background: hsl(0, 0%, 103.2%);
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.05);
  --bases-table-header-color: rgb(69, 69, 69);
  --bases-table-summary-background: hsl(0, 0%, 103.2%);
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.05);
  --bg-box: rgba(255, 255, 255, 0.14);
  --bg-box-top: rgb(135, 162, 237);
  --blockquote-border-color: rgb(134, 121, 121);
  --blockquote-border-thickness: 1.2px;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent) linear-gradient(hsl(0, 0%, 103.2%), color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent));
  --c-00: 103.2%;
  --c-05: 101.2%;
  --c-10: 97.2%;
  --c-100: 20%;
  --c-20: 98.2%;
  --c-25: 92%;
  --c-30: 30%;
  --c-35: 30%;
  --c-40: 90%;
  --c-50: 35%;
  --c-60: 30%;
  --c-70: 27%;
  --callout-blend-mode: normal;
  --callout-bug: 213, 57, 132;
  --callout-content-background: rgb(247, 247, 247);
  --callout-content-padding: 10px;
  --callout-error: 244, 87, 87;
  --callout-fail: 244, 87, 87;
  --callout-padding: 0px;
  --callout-radius: 5px;
  --callout-title-padding: 5px 10px;
  --callout-title-size: 0.98em;
  --canvas-background: hsl(0, 0%, 103.2%);
  --canvas-card-label-color: rgb(89, 89, 89);
  --canvas-color-1: 244, 87, 87;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: rgb(219, 215, 215);
  --caret-color: rgb(51, 51, 51);
  --checkbox-border-color: rgb(89, 89, 89);
  --checkbox-border-color-hover: rgb(69, 69, 69);
  --checkbox-color: rgb(129, 151, 234);
  --checkbox-color-hover: rgb(135, 162, 237);
  --checkbox-marker-color: hsl(0, 0%, 103.2%);
  --checkbox-radius: 10px;
  --checklist-done-color: rgb(69, 69, 69);
  --clickable-icon-radius: 5px;
  --code-background: rgb(247, 247, 247);
  --code-border-color: rgb(219, 215, 215);
  --code-bracket-background: rgba(0, 0, 0, 0.05);
  --code-comment: rgb(89, 89, 89);
  --code-normal: rgb(51, 51, 51);
  --code-operator: #f45757;
  --code-punctuation: rgb(69, 69, 69);
  --code-radius: 5px;
  --code-tag: #f45757;
  --collapse-icon-color: rgb(89, 89, 89);
  --collapse-icon-color-collapsed: rgb(108, 132, 229);
  --color-accent: rgb(108, 132, 229);
  --color-accent-1: rgb(129, 151, 234);
  --color-accent-2: rgb(135, 162, 237);
  --color-accent-hsl: 228, 70%, 66%;
  --color-base-00: hsl(0, 0%, 103.2%);
  --color-base-05: hsl(0, 0%, 101.2%);
  --color-base-10: rgb(247, 247, 247);
  --color-base-100: rgb(51, 51, 51);
  --color-base-20: rgb(250, 250, 250);
  --color-base-25: rgb(235, 235, 235);
  --color-base-30: rgb(219, 215, 215);
  --color-base-35: rgb(134, 121, 121);
  --color-base-40: rgb(230, 230, 230);
  --color-base-50: rgb(89, 89, 89);
  --color-base-60: rgb(77, 77, 77);
  --color-base-70: rgb(69, 69, 69);
  --color-muted: #797593;
  --color-muted-rgb: 121, 117, 147;
  --color-red: #f45757;
  --color-red-rgb: 244, 87, 87;
  --cursor-color: rgb(129, 151, 234);
  --cursor-width: 2.5px;
  --custom-base-c-d: 10%;
  --custom-base-c-l: 99%;
  --custom-border-c-d: 50%;
  --custom-border-c-l: 82%;
  --custom-c-20-d: 14%;
  --custom-c-20-l: 97%;
  --custom-text-c-d: 90%;
  --custom-text-c-l: 43%;
  --custom-theme-sat-d: 20%;
  --custom-theme-sat-l: 100%;
  --custom-theme-sat-secondary-d: 25%;
  --custom-theme-sat-secondary-l: 77%;
  --custom-theme-sat-text-d: 10%;
  --custom-theme-sat-text-l: 25%;
  --custom-theme-tint-d: 0;
  --custom-theme-tint-l: 15;
  --custom-theme-tint-secondary-d: 0;
  --custom-theme-tint-secondary-l: 15;
  --custom-theme-tint-text-d: 10;
  --custom-theme-tint-text-l: 205;
  --divider-color: rgb(219, 215, 215);
  --divider-color-hover: rgb(129, 151, 234);
  --divider-width: 0.2px;
  --dropdown-background: hsl(0, 0%, 101.2%);
  --dropdown-background-hover: rgba(108, 132, 229, 0.1);
  --dv-table-column-alt-background: transparent;
  --dv-table-row-alt-background: transparent;
  --dv-table-text-align: left;
  --editing-file-line-width: 700px;
  --embed-block-shadow-hover: 0 0 0 1px rgb(219, 215, 215), inset 0 0 0 1px rgb(219, 215, 215);
  --embed-border-start: 2px solid rgb(129, 151, 234);
  --file-header-background: hsl(0, 0%, 103.2%);
  --file-header-background-focused: hsl(0, 0%, 103.2%);
  --file-header-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: hsl(0, 0%, 101.2%);
  --flair-color: rgb(51, 51, 51);
  --font-default-custom: 'iA Writer Quattro S';
  --font-interface: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif;
  --font-mermaid: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: 'iA Writer Mono S';
  --font-monospace-custom: 'iA Writer Mono S';
  --font-preview-view: 'iA Writer Duo S';
  --font-print: '??', '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, 'Arial';
  --font-secondary: 'iA Writer Duo S';
  --font-secondary-custom: 'iA Writer Duo S';
  --font-text: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif;
  --font-weight-default: 400;
  --footnote-divider-color: rgb(219, 215, 215);
  --footnote-id-color: rgb(69, 69, 69);
  --footnote-id-color-no-occurrences: rgb(89, 89, 89);
  --footnote-input-background-active: rgba(0, 0, 0, 0.05);
  --footnote-line-height: 1.75;
  --footnote-radius: 5px;
  --graph-line: rgb(134, 121, 121);
  --graph-node: rgb(145, 148, 243);
  --graph-node-focused: rgb(165, 182, 248);
  --graph-node-unresolved: rgb(138, 122, 240);
  --graph-text: rgb(51, 51, 51);
  --h-align-s: left;
  --h-weight-s: 600;
  --h1-align: left;
  --h1-size: 1.72em;
  --h1-weight: 600;
  --h2-align: left;
  --h2-size: 1.51em;
  --h2-weight: 600;
  --h3-align: left;
  --h3-size: 1.35em;
  --h3-weight: 600;
  --h4-align: left;
  --h4-size: 1.19em;
  --h4-weight: 600;
  --h5-align: left;
  --h5-line-height: 1.75;
  --h5-size: 1.08em;
  --h5-weight: 600;
  --h6-align: left;
  --h6-line-height: 1.75;
  --heading-formatting: rgb(89, 89, 89);
  --hr-color: rgb(134, 121, 121);
  --hr-thickness: 1px;
  --icon-color: rgb(69, 69, 69);
  --icon-color-active: rgb(108, 132, 229);
  --icon-color-focused: rgb(51, 51, 51);
  --icon-color-hover: rgb(69, 69, 69);
  --img-side-margins: auto;
  --inactive-line-blur: 0px;
  --inactive-line-opacity: 0.4;
  --inactive-pane-blur: 0px;
  --inactive-pane-opacity: 0.55;
  --indentation-guide-color-active: rgb(129, 151, 234);
  --indentation-guide-width-active: 1.5px;
  --inline-field-size: 0.933em;
  --inline-title-align: center;
  --inline-title-size: 2.22em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(89, 89, 89);
  --input-placeholder-color: rgb(89, 89, 89);
  --input-shadow: rgb(219, 215, 215) 0 0 0 0.8px;
  --input-shadow-hover: rgba(108, 132, 229, 0.6) 0 0 0px 1px;
  --interactive-accent: rgb(129, 151, 234);
  --interactive-accent-hover: rgb(135, 162, 237);
  --interactive-accent-hsl: 228, 70%, 66%;
  --interactive-hover: rgba(108, 132, 229, 0.1);
  --interactive-normal: hsl(0, 0%, 101.2%);
  --line-height-normal: 1.75;
  --link-color: rgb(129, 151, 234);
  --link-color-hover: rgb(135, 162, 237);
  --link-decoration-color: rgb(129, 151, 234);
  --link-decoration-color-active: rgba(108, 132, 229, 0.5);
  --link-decoration-thickness: 0.06em;
  --link-external-color: rgb(108, 132, 229);
  --link-external-color-hover: rgb(135, 162, 237);
  --link-font: 'iA Writer Duo S';
  --link-underline-offset: 2px;
  --link-unresolved-color: rgb(108, 132, 229);
  --link-unresolved-decoration-color: rgba(108, 132, 229, 0.3);
  --list-bullet-size: 0.25em;
  --list-marker-color: rgb(69, 69, 69);
  --list-marker-color-collapsed: rgb(108, 132, 229);
  --list-marker-color-hover: rgb(69, 69, 69);
  --menu-background: rgb(250, 250, 250);
  --menu-border-color: rgb(134, 121, 121);
  --menu-radius: 12px;
  --metadata-border-color: rgb(219, 215, 215);
  --metadata-divider-color: rgb(219, 215, 215);
  --metadata-input-background-active: rgba(0, 0, 0, 0.05);
  --metadata-input-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(51, 51, 51);
  --metadata-label-background-active: rgba(0, 0, 0, 0.05);
  --metadata-label-font: '??', 'iA Writer Quattro S', 'Nanum Gothic Coding', "MS PGothic",'PingFang SC', '蘋方', '蘋方 SC', "Microsoft YaHei Light", ui-sans-serif, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(69, 69, 69);
  --metadata-label-text-color-hover: rgb(69, 69, 69);
  --metadata-property-background-active: rgba(0, 0, 0, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(230, 230, 230);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(134, 121, 121);
  --modal-background: hsl(0, 0%, 103.2%);
  --modal-border-color: rgb(230, 230, 230);
  --modal-radius: 18px;
  --nav-collapse-icon-color: rgb(89, 89, 89);
  --nav-collapse-icon-color-collapsed: rgb(89, 89, 89);
  --nav-heading-color: rgb(51, 51, 51);
  --nav-heading-color-collapsed: rgb(89, 89, 89);
  --nav-heading-color-collapsed-hover: rgb(69, 69, 69);
  --nav-heading-color-hover: rgb(51, 51, 51);
  --nav-item-background-active: rgba(0, 0, 0, 0.05);
  --nav-item-background-hover: rgba(0, 0, 0, 0.05);
  --nav-item-background-selected: rgba(108, 132, 229, 0.15);
  --nav-item-color: rgb(69, 69, 69);
  --nav-item-color-active: rgb(51, 51, 51);
  --nav-item-color-highlighted: rgb(108, 132, 229);
  --nav-item-color-hover: rgb(51, 51, 51);
  --nav-item-color-selected: rgb(51, 51, 51);
  --nav-item-radius: 5px;
  --nav-tag-color: rgb(89, 89, 89);
  --nav-tag-color-active: rgb(69, 69, 69);
  --nav-tag-color-hover: rgb(69, 69, 69);
  --nav-tag-radius: 5px;
  --p-indent: 15px;
  --p-margin: 20px;
  --pdf-background: hsl(0, 0%, 103.2%);
  --pdf-page-background: hsl(0, 0%, 103.2%);
  --pdf-sidebar-background: hsl(0, 0%, 103.2%);
  --pill-border-color: rgb(219, 215, 215);
  --pill-border-color-hover: rgb(134, 121, 121);
  --pill-color: rgb(69, 69, 69);
  --pill-color-hover: rgb(51, 51, 51);
  --pill-color-remove: rgb(89, 89, 89);
  --pill-color-remove-hover: rgb(108, 132, 229);
  --prompt-background: hsl(0, 0%, 103.2%);
  --prompt-border-color: rgb(230, 230, 230);
  --prompt-max-height: 40vw;
  --prompt-width: 30vw;
  --radius-l: 18px;
  --radius-m: 12px;
  --radius-s: 5px;
  --radius-xl: 24px;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent) linear-gradient(hsl(0, 0%, 103.2%), color-mix(in srgb, hsl(0, 0%, 103.2%) 65%, transparent));
  --ribbon-background: hsl(0, 0%, 103.2%);
  --ribbon-background-collapsed: hsl(0, 0%, 103.2%);
  --scrollbar-radius: 18px;
  --search-clear-button-color: rgb(69, 69, 69);
  --search-icon-color: rgb(69, 69, 69);
  --search-result-background: hsl(0, 0%, 103.2%);
  --serenity-mode-font-size: 17px;
  --setting-group-heading-color: rgb(51, 51, 51);
  --setting-items-background: rgb(247, 247, 247);
  --setting-items-border-color: rgb(219, 215, 215);
  --setting-items-radius: 18px;
  --slider-thumb-border-color: rgb(134, 121, 121);
  --slider-track-background: rgb(219, 215, 215);
  --speech-color: rgb(51, 51, 51);
  --speech-opacity: 0.5;
  --status-bar-background: rgb(250, 250, 250);
  --status-bar-border-color: rgb(219, 215, 215);
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: rgb(69, 69, 69);
  --suggestion-background: hsl(0, 0%, 103.2%);
  --sync-avatar-color-1: #f45757;
  --tab-background-active: hsl(0, 0%, 103.2%);
  --tab-container-background: rgb(250, 250, 250);
  --tab-divider-color: rgb(219, 215, 215);
  --tab-outline-color: rgb(219, 215, 215);
  --tab-outline-width: 0.7px;
  --tab-radius: 5px;
  --tab-switcher-background: rgb(250, 250, 250);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(250, 250, 250), transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(108, 132, 229);
  --tab-text-color: rgb(89, 89, 89);
  --tab-text-color-active: rgb(69, 69, 69);
  --tab-text-color-focused: rgb(69, 69, 69);
  --tab-text-color-focused-active: rgb(69, 69, 69);
  --tab-text-color-focused-active-current: rgb(51, 51, 51);
  --tab-text-color-focused-highlighted: rgb(108, 132, 229);
  --table-add-button-border-color: rgb(219, 215, 215);
  --table-border-color: rgb(219, 215, 215);
  --table-drag-handle-background-active: rgb(129, 151, 234);
  --table-drag-handle-color: rgb(89, 89, 89);
  --table-header-background: rgb(250, 250, 250);
  --table-header-background-hover: rgb(250, 250, 250);
  --table-header-border-color: rgb(219, 215, 215);
  --table-header-color: rgb(51, 51, 51);
  --table-header-size: 0.875em;
  --table-header-weight: 600;
  --table-selection: rgba(108, 132, 229, 0.1);
  --table-selection-border-color: rgb(129, 151, 234);
  --table-text-size: 0.875em;
  --tag-background: rgba(108, 132, 229, 0.1);
  --tag-background-hover: rgba(108, 132, 229, 0.2);
  --tag-border-color: rgba(108, 132, 229, 0.15);
  --tag-border-color-hover: rgba(108, 132, 229, 0.15);
  --tag-color: rgb(108, 132, 229);
  --tag-color-hover: rgb(108, 132, 229);
  --tag-opacity: 0.25;
  --tag-opacity-hover: 0.2;
  --tag-padding-x: 6px;
  --tag-padding-y: 2px;
  --tag-radius: 5px;
  --text-accent: rgb(108, 132, 229);
  --text-accent-hover: rgb(135, 162, 237);
  --text-base: 15%;
  --text-error: #f45757;
  --text-faint: rgb(89, 89, 89);
  --text-muted: rgb(69, 69, 69);
  --text-normal: rgb(51, 51, 51);
  --text-selection: rgba(108, 132, 229, 0.2);
  --theme-sat: 0%;
  --theme-sat-secondary: 0%;
  --theme-sat-text: 0%;
  --theme-tint: 0;
  --theme-tint-secondary: 0;
  --theme-tint-text: 0;
  --titlebar-background: hsl(0, 0%, 103.2%);
  --titlebar-background-focused: rgb(250, 250, 250);
  --titlebar-border-color: rgb(219, 215, 215);
  --titlebar-text-color: rgb(69, 69, 69);
  --titlebar-text-color-focused: rgb(51, 51, 51);
  --vault-profile-color: rgb(51, 51, 51);
  --vault-profile-color-hover: rgb(51, 51, 51);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 250, 250);
  color: rgb(51, 51, 51);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 250, 250);
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(219, 215, 215);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 250, 250);
  border-left-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
}

body div#quartz-root {
  color: rgb(51, 51, 51);
}`,
    typography: `body .page article p > b, b {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > em, em {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > i, i {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > strong, strong {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(23, 44, 130);
  font-family: "iA Writer Duo S";
  outline: rgb(23, 44, 130) none 0px;
  text-decoration: rgb(23, 44, 130);
  text-decoration-color: rgb(23, 44, 130);
}

body del {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body p {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 69, 69) none 0px;
  text-decoration: rgb(69, 69, 69);
  text-decoration-color: rgb(69, 69, 69);
}`,
    links: `body a.external, footer a {
  color: rgb(108, 132, 229);
  font-family: "iA Writer Duo S";
  outline: rgb(108, 132, 229) none 0px;
  text-decoration: underline 0.96px rgb(129, 151, 233);
  text-decoration-color: rgb(129, 151, 233);
  text-decoration-thickness: 0.96px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 151, 233);
  font-family: "iA Writer Duo S";
  outline: rgb(129, 151, 233) none 0px;
  text-decoration: underline 0.96px rgb(129, 151, 233);
  text-decoration-color: rgb(129, 151, 233);
  text-decoration-thickness: 0.96px;
}

body a.internal.broken {
  color: rgb(108, 132, 229);
  font-family: "iA Writer Duo S";
  outline: rgb(108, 132, 229) none 0px;
  text-decoration: underline 0.96px rgba(108, 132, 229, 0.3);
  text-decoration-color: rgba(108, 132, 229, 0.3);
  text-decoration-thickness: 0.96px;
}`,
    lists: `body dd {
  color: rgb(51, 51, 51);
}

body dt {
  color: rgb(51, 51, 51);
}

body ol > li {
  color: rgb(51, 51, 51);
}

body ol.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body ul > li {
  color: rgb(51, 51, 51);
}

body ul.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}

body blockquote {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .spacer {
  background-color: rgb(255, 255, 255);
}

body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body table {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 222.359px;
  margin-right: 222.359px;
  width: 227.281px;
}

body td {
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
  padding-bottom: 0px;
  padding-top: 0px;
}

body th {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  text-align: center;
}

body tr {
  background-color: rgb(250, 250, 250);
}`,
    code: `body code {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
  font-family: "iA Writer Mono S";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}

body pre > code, pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(219, 215, 215);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figcaption {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body img {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-radius: 5px;
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  filter: blur(0px);
}

body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `body .file-embed {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(69, 69, 69);
  text-decoration: line-through rgb(69, 69, 69);
  text-decoration-color: rgb(69, 69, 69);
}

body input[type=checkbox] {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration: underline 1.5px rgb(224, 172, 0);
  text-decoration-color: rgb(224, 172, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    callouts: `body .callout .callout-title {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  gap: 15.68px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout > .callout-content {
  background-color: rgb(248, 248, 248);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.17);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 213, 57, 132;
  background-color: rgba(213, 57, 132, 0.17);
  border-bottom-color: rgba(213, 57, 132, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(213, 57, 132, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(213, 57, 132, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(213, 57, 132, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 244, 87, 87;
  background-color: rgba(244, 87, 87, 0.17);
  border-bottom-color: rgba(244, 87, 87, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(244, 87, 87, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(244, 87, 87, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(244, 87, 87, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.17);
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 244, 87, 87;
  background-color: rgba(244, 87, 87, 0.17);
  border-bottom-color: rgba(244, 87, 87, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(244, 87, 87, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(244, 87, 87, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(244, 87, 87, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.17);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.17);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.17);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.17);
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(224, 172, 0, 0.17);
  border-bottom-color: rgba(224, 172, 0, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 172, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(224, 172, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(224, 172, 0, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.17);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.17);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 250, 250);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(102, 122, 204, 0.25);
  border-bottom-color: rgb(31, 49, 122);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(31, 49, 122);
  border-right-color: rgb(31, 49, 122);
  border-top-color: rgb(31, 49, 122);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(31, 49, 122);
}

body h1 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(69, 69, 69);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(69, 69, 69);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(69, 69, 69);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(69, 69, 69);
}`,
    footer: `body footer {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(219, 215, 215);
  border-left-color: rgb(219, 215, 215);
  border-right-color: rgb(219, 215, 215);
  border-top-color: rgb(219, 215, 215);
  border-top-left-radius: 12px;
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(69, 69, 69);
  text-decoration: rgb(69, 69, 69);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(69, 69, 69);
  text-decoration: rgb(69, 69, 69);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(129, 151, 233);
  font-family: "iA Writer Duo S";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body li.section-li > .section .meta {
  color: rgb(129, 151, 233);
  font-family: "iA Writer Duo S";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(69, 69, 69);
  text-decoration: rgb(69, 69, 69);
}

body ul.section-ul {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(69, 69, 69);
}

body .darkmode svg {
  color: rgb(69, 69, 69);
  stroke: rgb(69, 69, 69);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(69, 69, 69);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(69, 69, 69);
}

body .breadcrumb-element p {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: -15px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
}

body .metadata-properties {
  border-bottom-color: rgb(69, 69, 69);
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
}

body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

body .page-header h2.page-title {
  color: rgb(51, 51, 51);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(8, 185, 78);
  text-decoration: underline dashed rgb(8, 185, 78);
  text-decoration-style: dashed;
}

body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body input[type=text] {
  border-bottom-color: rgb(69, 69, 69);
  border-left-color: rgb(69, 69, 69);
  border-right-color: rgb(69, 69, 69);
  border-top-color: rgb(69, 69, 69);
  color: rgb(69, 69, 69);
  font-family: "??", "iA Writer Quattro S", "Nanum Gothic Coding", "MS PGothic", "PingFang SC", 蘋方, "蘋方 SC", "Microsoft YaHei Light", ui-sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(51, 51, 51);
  font-family: "iA Writer Mono S";
}

body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body sub {
  color: rgb(51, 51, 51);
}

body summary {
  color: rgb(51, 51, 51);
}

body sup {
  color: rgb(51, 51, 51);
}`,
  },
};
