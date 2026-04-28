import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hoverpopup",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --BBB: true;
  --background-modifier-border: rgb(from #5e6280 r g b / 0.1);
  --background-modifier-border-focus: #a464fc;
  --background-modifier-error: #ff3d63;
  --background-modifier-form-field: #101119;
  --background-modifier-form-field-hover: #101119;
  --background-modifier-hover: #a464fc;
  --background-primary: #101119;
  --background-primary-alt: #232433;
  --background-secondary: #232433;
  --background-secondary-alt: #404359;
  --bases-cards-background: #101119;
  --bases-cards-cover-background: #232433;
  --bases-cards-shadow: 0 0 0 1px rgb(from #5e6280 r g b / 0.1);
  --bases-embed-border-color: rgb(from #5e6280 r g b / 0.1);
  --bases-group-heading-property-color: #afb2c7;
  --bases-table-border-color: rgb(from #a464fc r g b / 0.2);
  --bases-table-cell-background-active: #101119;
  --bases-table-cell-background-disabled: #232433;
  --bases-table-cell-shadow-active: 0 0 0 2px #a464fc;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a464fc;
  --bases-table-group-background: #232433;
  --bases-table-header-background: #101119;
  --bases-table-header-background-hover: #a464fc;
  --bases-table-header-color: #afb2c7;
  --bases-table-summary-background: #101119;
  --bases-table-summary-background-hover: #a464fc;
  --blockquote-border-color: #6f74a1;
  --blockquote-border-color-deep: #191b33;
  --blockquote-border-width: 3px;
  --blockquote-color: #9198c7;
  --blur-background: color-mix(in srgb, #232433 65%, transparent) linear-gradient(#232433, color-mix(in srgb, #232433 65%, transparent));
  --brightness-heading-1: 1.2;
  --brightness-heading-2: 1.2;
  --brightness-heading-3: 1.2;
  --brightness-heading-4: 1.2;
  --brightness-heading-5: 1.2;
  --brightness-heading-6: 1.2;
  --canvas-background: #101119;
  --canvas-card-label-color: #ffc83d;
  --caret-color: #e0e0ff;
  --checkbox-border-color: #ff3d63;
  --checkbox-border-color-hover: #ffc83d;
  --checkbox-color: #ffc83d;
  --checkbox-color-hover: #ff3d63;
  --checkbox-marker-color: #101119;
  --checklist-done-color: #ffc83d;
  --code-background: #181926;
  --code-border-color: #181926;
  --code-bracket-background: #a464fc;
  --code-comment: #ffc83d;
  --code-normal: #e0e0ff;
  --code-punctuation: #afb2c7;
  --collapse-icon-color: #a464fc;
  --collapse-icon-color-collapsed: #ffc83d;
  --color-code: #96ff00;
  --color-code-cyberpunk: #00ff7f;
  --color-code-dark: #43ad39;
  --color-code-p1-green: #40ff33;
  --color-code-p3-ember: #ffb000;
  --color-code-p3-ember-rgb: 255, 176, 0;
  --color-code-p4-white: #e0e0ff;
  --color-code-p7-dark: #33FF66;
  --color-code-p7-gbmix: #a0ffd0;
  --color-code-preview-code: #e0e0ff;
  --color-code-preview-knownl: #00b3ff;
  --color-code-preview-primary: #00ddff;
  --color-code-preview-scan-a: rgb(0, 221, 255);
  --color-code-preview-scan-b: rgba(0, 221, 255, 0.4);
  --color-code-preview-scan-c: rgba(0, 221, 255, 0.18);
  --color-code-preview-scan-d: rgba(0, 221, 255, 0.06);
  --color-code-preview-scrollbar: rgb(0, 221, 255, 0.1);
  --color-code-preview-scrollbar-active: rgb(0, 221, 255, 1);
  --color-code-preview-scrollbar-hover: rgb(0, 221, 255, 0.4);
  --color-code-preview-secondary: #00ddff;
  --color-ember-background: #1A0E00;
  --color-ember-background-rgb: 26, 14, 0;
  --color-ember-dark: #b36b00;
  --color-ember-dark-rgb: 179, 107, 0;
  --color-ember-deep: #754400;
  --color-ember-leaf: #8fff05;
  --color-ember-normal: #ff9900;
  --color-ember-normal-rgb: 255, 153, 0;
  --color-ember-orange: #ff7a00;
  --color-ember-orange-rgb: 255, 122, 0;
  --color-ember-red: #ff530f;
  --color-ember-red-rgb: 255, 83, 15;
  --color-ember-rose: #ff241c;
  --color-heading-1: #00ddff;
  --color-heading-2: #ff3d63;
  --color-heading-3: #ffc83d;
  --color-heading-4: #a464fc;
  --color-heading-5: #00ff6a;
  --color-heading-6: #afb2c7;
  --color-holo-background: #00031a;
  --color-holo-background-rgb: 0, 3, 26;
  --color-holo-blue: #5485ff;
  --color-holo-dark: #3252d1;
  --color-holo-dark-rgb: 11, 117, 184;
  --color-holo-mint: #40ffaf;
  --color-holo-mint-rgb: 64, 255, 175;
  --color-holo-normal: #00b3ff;
  --color-holo-normal-rgb: 69, 208, 255;
  --color-holo-purple: #776eff;
  --color-holo-purple-rgb: 119, 110, 255;
  --color-horizontal-rule: #a464fc;
  --color-horizontal-rule-opacity: rgb(#a464fc r g b / 0);
  --color-interactive-hover: #7845bf;
  --color-main-alart: #ff4c30;
  --color-main-black: #0b0c14;
  --color-main-blue: #64bcfc;
  --color-main-blue-rgb: 100, 188, 252;
  --color-main-dark: #101119;
  --color-main-debug: #ff00ff;
  --color-main-deepgrey: #232433;
  --color-main-gold: #ffc83d;
  --color-main-green: #00ff6a;
  --color-main-grey: #404359;
  --color-main-holo: #00ddff;
  --color-main-holo-rgb: 0, 221, 255;
  --color-main-icon: #afb2c7;
  --color-main-lemon: #fff700;
  --color-main-lightdark: #181926;
  --color-main-lightgrey: #5e6280;
  --color-main-lowicon: #8487a1;
  --color-main-orange: #ff8f1f;
  --color-main-pale: #e0e0e0;
  --color-main-paleyellow: #fff4b8;
  --color-main-purple: #a464fc;
  --color-main-purple-rgb: 164, 100, 252;
  --color-main-red: #ff3d63;
  --color-satu-deepgrey: #191b33;
  --color-satu-grey: #303559;
  --color-satu-icon: #9198c7;
  --color-satu-lowicon: #6f74a1;
  --color-scrollbar-track: #282b3b;
  --color-spliter: rgb(from #5e6280 r g b / 0.1);
  --dark: var(--text-normal, #e0e0ff);
  --darkgray: var(--text-normal, #e0e0ff);
  --divider-color: rgb(from #5e6280 r g b / 0.1);
  --divider-color-hover: #a464fc;
  --dropdown-background: #232433;
  --dropdown-background-hover: #404359;
  --embed-block-shadow-hover: 0 0 0 1px rgb(from #5e6280 r g b / 0.1), inset 0 0 0 1px rgb(from #5e6280 r g b / 0.1);
  --embed-border-start: 2px solid #a464fc;
  --file-header-background: #101119;
  --file-header-background-focused: #101119;
  --flair-background: #232433;
  --flair-color: #e0e0ff;
  --font-size-heading-1: 36px;
  --font-size-heading-2: 32px;
  --font-size-heading-3: 28px;
  --font-size-heading-4: 26px;
  --font-size-heading-5: 24px;
  --font-size-heading-6: 22px;
  --footnote-divider-color: rgb(from #5e6280 r g b / 0.1);
  --footnote-id-color: #afb2c7;
  --footnote-id-color-no-occurrences: #ffc83d;
  --footnote-input-background-active: #a464fc;
  --graph-node: #afb2c7;
  --graph-node-focused: #a464fc;
  --graph-node-unresolved: #ffc83d;
  --graph-text: #e0e0ff;
  --gray: var(--text-muted, #afb2c7);
  --heading-formatting: #ffc83d;
  --highlight: var(--text-highlight-bg, #ffc83d);
  --hr-color: rgb(from #5e6280 r g b / 0.1);
  --icon-color: #afb2c7;
  --icon-color-active: #a464fc;
  --icon-color-focused: #101119;
  --icon-color-hover: #101119;
  --input-date-separator: #ffc83d;
  --input-placeholder-color: #5e6280;
  --interactive-accent: #a464fc;
  --interactive-accent-hover: #7845bf;
  --interactive-hover: #404359;
  --interactive-normal: #232433;
  --light: var(--background-primary, #101119);
  --lightgray: var(--background-secondary, #232433);
  --link-color: #64bcfc;
  --link-color-hover: #00ddff;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #64bcfc;
  --link-external-color-hover: #00ddff;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #ff4c30;
  --link-unresolved-color-hover: #ff4c30;
  --link-unresolved-opacity: 0.8;
  --list-marker-color: #a464fc;
  --list-marker-color-collapsed: #ffc83d;
  --list-marker-color-hover: #afb2c7;
  --menu-background: #232433;
  --metadata-border-color: rgb(from #5e6280 r g b / 0.1);
  --metadata-divider-color: rgb(from #5e6280 r g b / 0.1);
  --metadata-input-background-active: #a464fc;
  --metadata-input-text-color: #e0e0ff;
  --metadata-label-background-active: #a464fc;
  --metadata-label-text-color: #afb2c7;
  --metadata-label-text-color-hover: #afb2c7;
  --metadata-property-background-active: #a464fc;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a464fc;
  --modal-background: #101119;
  --nav-collapse-icon-color: #a464fc;
  --nav-collapse-icon-color-collapsed: #ffc83d;
  --nav-heading-color: #a464fc;
  --nav-heading-color-collapsed: #afb2c7;
  --nav-heading-color-collapsed-hover: #a464fc;
  --nav-heading-color-hover: #e0e0ff;
  --nav-item-background-active: #a464fc;
  --nav-item-background-hover: #181926;
  --nav-item-color: #afb2c7;
  --nav-item-color-active: #e0e0ff;
  --nav-item-color-highlighted: #a464fc;
  --nav-item-color-hover: #a464fc;
  --nav-item-color-selected: #e0e0ff;
  --nav-tag-color: #ffc83d;
  --nav-tag-color-active: #afb2c7;
  --nav-tag-color-hover: #afb2c7;
  --pdf-background: #101119;
  --pdf-page-background: #101119;
  --pdf-shadow: 0 0 0 1px rgb(from #5e6280 r g b / 0.1);
  --pdf-sidebar-background: #101119;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(from #5e6280 r g b / 0.1);
  --pill-border-color: rgb(from #5e6280 r g b / 0.1);
  --pill-color: #afb2c7;
  --pill-color-hover: #e0e0ff;
  --pill-color-remove: #ffc83d;
  --pill-color-remove-hover: #a464fc;
  --prompt-background: #101119;
  --raised-background: color-mix(in srgb, #232433 65%, transparent) linear-gradient(#232433, color-mix(in srgb, #232433 65%, transparent));
  --ribbon-background: #232433;
  --ribbon-background-collapsed: #101119;
  --scrollbar-thumb-bg: #232433;
  --scrollbar-width: 16px;
  --search-clear-button-color: #afb2c7;
  --search-icon-color: #afb2c7;
  --search-result-background: #181926;
  --secondary: var(--text-accent, #a464fc);
  --setting-group-heading-color: #e0e0ff;
  --setting-items-background: #232433;
  --setting-items-border-color: rgb(from #5e6280 r g b / 0.1);
  --shiki-active-tab-border-color: #afb2c7;
  --shiki-code-background: #181926;
  --shiki-code-comment: #ffc83d;
  --shiki-code-normal: #afb2c7;
  --shiki-code-punctuation: #afb2c7;
  --shiki-gutter-border-color: rgb(from #5e6280 r g b / 0.1);
  --shiki-gutter-text-color: #ffc83d;
  --shiki-gutter-text-color-highlight: #afb2c7;
  --shiki-highlight-neutral: #afb2c7;
  --shiki-terminal-dots-color: #ffc83d;
  --side-dock-ribbon-anime-time: 0.3s;
  --slider-track-background: rgb(from #5e6280 r g b / 0.1);
  --status-bar-background: #232433;
  --status-bar-border-color: rgb(from #5e6280 r g b / 0.1);
  --status-bar-text-color: #afb2c7;
  --suggestion-background: #101119;
  --tab-background-active: #101119;
  --tab-container-background: #232433;
  --tab-divider-color: #a464fc;
  --tab-outline-color: rgb(from #5e6280 r g b / 0.1);
  --tab-switcher-background: #232433;
  --tab-switcher-menubar-background: linear-gradient(to top, #232433, transparent);
  --tab-text-color: #afb2c7;
  --tab-text-color-active: #afb2c7;
  --tab-text-color-focused: #afb2c7;
  --tab-text-color-focused-active: #afb2c7;
  --tab-text-color-focused-active-current: #e0e0ff;
  --tab-text-color-focused-highlighted: #a464fc;
  --table-add-button-border-color: rgb(from #5e6280 r g b / 0.1);
  --table-border-color: rgb(from #a464fc r g b / 0.2);
  --table-drag-handle-background-active: #a464fc;
  --table-drag-handle-color: #ffc83d;
  --table-drag-handle-color-active: #e0e0ff;
  --table-header-border-color: rgb(from #a464fc r g b / 0.2);
  --table-header-color: #e0e0ff;
  --table-selection-border-color: #a464fc;
  --tag-background: #232433;
  --tag-color: #afb2c7;
  --tag-color-hover: #e0e0ff;
  --tertiary: var(--interactive-accent-hover, #7845bf);
  --text-accent: #a464fc;
  --text-error: #ff3d63;
  --text-faint: #ffc83d;
  --text-highlight-bg: #ffc83d;
  --text-muted: #afb2c7;
  --text-normal: #e0e0ff;
  --text-on-accent: #e0e0ff;
  --textHighlight: var(--text-highlight-bg, #ffc83d);
  --titlebar-background: #232433;
  --titlebar-background-focused: #404359;
  --titlebar-border-color: rgb(from #5e6280 r g b / 0.1);
  --titlebar-text-color: #afb2c7;
  --titlebar-text-color-focused: #e0e0ff;
  --vault-profile-color: #e0e0ff;
  --vault-profile-color-hover: #e0e0ff;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 36, 51);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(16, 17, 25);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 36, 51);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 36, 51);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  color: rgb(224, 224, 255);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --font-weight: 700;
  background-color: color(srgb 0 0.866667 1);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 221, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 221, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: oklab(0.825339 -0.120173 -0.0813295 / 0.867016) 0px 0px 5px 0px, oklab(0 0 0 / 0) 0px 0px 10.6387px 0px;
  color: rgb(0, 221, 255);
  content: "";
  filter: brightness(0.335082);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.54px;
  line-height: 43.2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .text-highlight {
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-name: search-horizontal-scan;
  animation-timing-function: linear;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(224, 224, 255);
  font-weight: 200;
  outline: rgb(224, 224, 255) none 0px;
  text-decoration-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 224, 255);
  outline: rgb(224, 224, 255) none 0px;
  text-decoration-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body footer {
  opacity: 0.4;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body h2 {
  --font-weight: 680;
  background-color: color(srgb 1 0.239216 0.388235);
  border-bottom-color: rgb(255, 61, 99);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 61, 99);
  border-left-width: 0px;
  border-right-color: rgb(255, 61, 99);
  border-right-width: 0px;
  border-top-color: rgb(255, 61, 99);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: oklab(0.662837 0.218874 0.0608537 / 0.868414) 0px 0px 5px 0px, oklab(0 0 0 / 0) 0px 0px 10.5269px 0px;
  color: rgb(255, 61, 99);
  content: "";
  filter: brightness(0.342068);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 32px;
  font-weight: 680;
  letter-spacing: -0.352px;
  line-height: 38.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: 660;
  background-color: color(srgb 1 0.784314 0.239216);
  border-bottom-color: rgb(255, 200, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 200, 61);
  border-left-width: 0px;
  border-right-color: rgb(255, 200, 61);
  border-right-width: 0px;
  border-top-color: rgb(255, 200, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: oklab(0.859435 0.0116608 0.157856 / 0.868414) 0px 0px 5px 0px, oklab(0 0 0 / 0) 0px 0px 10.5269px 0px;
  color: rgb(255, 200, 61);
  content: "";
  filter: brightness(0.342068);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 28px;
  font-weight: 660;
  letter-spacing: -0.224px;
  line-height: 36.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  --font-weight: 640;
  background-color: color(srgb 0.643137 0.392157 0.988235);
  border-bottom-color: rgb(164, 100, 252);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(164, 100, 252);
  border-left-width: 0px;
  border-right-color: rgb(164, 100, 252);
  border-right-width: 0px;
  border-top-color: rgb(164, 100, 252);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: oklab(0.645584 0.10779 -0.189102 / 0.868414) 0px 0px 5px 0px, oklab(0 0 0 / 0) 0px 0px 10.5269px 0px;
  color: rgb(164, 100, 252);
  content: "";
  filter: brightness(0.342068);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 26px;
  font-weight: 640;
  letter-spacing: -0.13px;
  line-height: 36.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h5 {
  --font-weight: 620;
  background-color: color(srgb 0 1 0.415686);
  border-bottom-color: rgb(0, 255, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 255, 106);
  border-left-width: 0px;
  border-right-color: rgb(0, 255, 106);
  border-right-width: 0px;
  border-top-color: rgb(0, 255, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: oklab(0.872209 -0.213713 0.133043 / 0.868414) 0px 0px 5px 0px, oklab(0 0 0 / 0) 0px 0px 10.5269px 0px;
  color: rgb(0, 255, 106);
  content: "";
  filter: brightness(0.342068);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 24px;
  font-weight: 620;
  letter-spacing: -0.048px;
  line-height: 36px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h6 {
  --font-weight: 600;
  background-color: color(srgb 0.686275 0.698039 0.780392);
  border-bottom-color: rgb(175, 178, 199);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(175, 178, 199);
  border-left-width: 0px;
  border-right-color: rgb(175, 178, 199);
  border-right-width: 0px;
  border-top-color: rgb(175, 178, 199);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: oklab(0.767873 0.00484005 -0.0296212 / 0.868414) 0px 0px 5px 0px, oklab(0 0 0 / 0) 0px 0px 10.5269px 0px;
  color: rgb(175, 178, 199);
  content: "";
  filter: brightness(0.342068);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 61, 99);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 200, 61);
  border-color: rgb(255, 200, 61);
}

html[saved-theme="dark"] body p {
  color: rgb(175, 178, 199);
  outline: rgb(175, 178, 199) none 0px;
  text-decoration-color: rgb(175, 178, 199);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(100, 188, 252);
  border-bottom-color: rgb(100, 188, 252);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(100, 188, 252);
  border-left-width: 0px;
  border-right-color: rgb(100, 188, 252);
  border-right-width: 0px;
  border-top-color: rgb(100, 188, 252);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(100, 188, 252);
  content: "";
  filter: brightness(1);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(100, 188, 252) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(100, 188, 252);
  transform: matrix(0, 0, 0, 1, 0, 0);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(100, 188, 252);
  border-bottom-color: rgb(100, 188, 252);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(100, 188, 252);
  border-left-width: 0px;
  border-right-color: rgb(100, 188, 252);
  border-right-width: 0px;
  border-top-color: rgb(100, 188, 252);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(100, 188, 252);
  content: "";
  filter: brightness(1);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(100, 188, 252) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(100, 188, 252);
  transform: matrix(0, 0, 0, 1, 0, 0);
}

html[saved-theme="dark"] body a.internal-link.broken {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(255, 76, 48);
  border-bottom-color: rgb(255, 76, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 76, 48);
  border-left-width: 0px;
  border-right-color: rgb(255, 76, 48);
  border-right-width: 0px;
  border-top-color: rgb(255, 76, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(255, 76, 48);
  content: "";
  filter: brightness(1);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(255, 76, 48) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
  transform: matrix(0, 0, 0, 1, 0, 0);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(255, 200, 61);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-left-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-right-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-top-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-left-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-right-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-top-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(24, 25, 38);
  border-left-color: rgb(24, 25, 38);
  border-right-color: rgb(24, 25, 38);
  border-top-color: rgb(24, 25, 38);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(24, 25, 38);
  border-bottom-color: color(srgb 0 0.866667 1 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0 0.866667 1 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0 0.866667 1 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0 0.866667 1 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(35, 36, 51);
  border-bottom-color: rgb(16, 17, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-left-color: rgb(16, 17, 25);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(16, 17, 25);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(16, 17, 25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 224, 255);
  border-bottom-style: solid;
  border-left-color: rgb(164, 100, 252);
  border-right-color: rgb(224, 224, 255);
  border-right-style: solid;
  border-top-color: rgb(224, 224, 255);
  border-top-style: solid;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 61, 99);
  border-left-color: rgb(255, 61, 99);
  border-right-color: rgb(255, 61, 99);
  border-top-color: rgb(255, 61, 99);
  width: 20px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.56505px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.1519px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.56505px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.1519px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.56505px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.1519px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.56505px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.1519px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.56505px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.1519px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.56505px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.1519px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.60958px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2132px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.60958px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2132px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(0, 221, 255);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(0, 221, 255);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(0, 221, 255);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-style: solid;
  border-top-width: 10px;
  box-shadow: rgb(0, 221, 255) 0px 0px 1.61532px 0px, oklab(0.825339 -0.120173 -0.0813295 / 0.3) 0px 0px 12.2211px 0px;
  color: rgb(0, 221, 255);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(0, 221, 255) 0px 0px 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(0, 221, 255);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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
  background-color: rgb(16, 17, 25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 255);
  outline: rgb(224, 224, 255) none 0px;
  text-decoration-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(164, 100, 252);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(164, 100, 252);
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(164, 100, 252);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(35, 36, 51);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body h1 {
  color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 61, 99);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 200, 61);
}

html[saved-theme="dark"] body h4 {
  color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body h5 {
  color: rgb(0, 255, 106);
}

html[saved-theme="dark"] body h6 {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(175, 178, 199);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 224, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(35, 36, 51);
  border-bottom-color: rgb(16, 17, 25);
  border-bottom-width: 2px;
  border-left-color: rgb(16, 17, 25);
  border-left-width: 2px;
  border-right-color: rgb(16, 17, 25);
  border-right-width: 2px;
  border-top-color: rgb(16, 17, 25);
  border-top-width: 2px;
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(175, 178, 199);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(175, 178, 199);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(175, 178, 199);
  stroke: rgb(175, 178, 199);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(255, 200, 61);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(35, 36, 51);
  border-color: rgb(224, 224, 255);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-top-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(35, 36, 51);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 17, 25);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(35, 36, 51);
  border-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(64, 67, 89);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(224, 224, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(35, 36, 51);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(175, 178, 199);
  border-bottom-color: rgb(16, 17, 25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(16, 17, 25);
  border-right-color: rgb(16, 17, 25);
  border-top-color: rgb(16, 17, 25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(16, 17, 25);
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(35, 36, 51);
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --font-weight: 700;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  filter: brightness(0.338569);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.24px;
  line-height: 19.2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .text-highlight {
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-name: search-horizontal-scan;
  animation-timing-function: linear;
  background-color: rgba(0, 0, 0, 0);
  font-weight: 200;
}

html[saved-theme="light"] body footer {
  opacity: 0.4;
}

html[saved-theme="light"] body h2 {
  --font-weight: 680;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  filter: brightness(0.343847);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  font-weight: 680;
  letter-spacing: -0.176px;
  line-height: 19.2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-weight: 660;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  filter: brightness(0.343847);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  font-weight: 660;
  letter-spacing: -0.128px;
  line-height: 20.8px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  --font-weight: 640;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  filter: brightness(0.343847);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  font-weight: 640;
  letter-spacing: -0.08px;
  line-height: 22.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h5 {
  --font-weight: 620;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  filter: brightness(0.343847);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  font-weight: 620;
  letter-spacing: -0.032px;
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

html[saved-theme="light"] body h6 {
  --font-weight: 600;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  filter: brightness(0.343847);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(138, 92, 245);
  content: "";
  filter: brightness(1);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(0, 0, 0, 1, 0, 0);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(138, 92, 245);
  content: "";
  filter: brightness(1);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(0, 0, 0, 1, 0, 0);
}

html[saved-theme="light"] body a.internal-link.broken {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(138, 92, 245);
  content: "";
  filter: brightness(1);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(0, 0, 0, 1, 0, 0);
}`,
    code: `html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  width: 20px;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgb(34, 34, 34) 0px 0px 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 2px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 2px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 2px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(34, 34, 34);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
  },
  extras: `@keyframes cute-bounce {
  0% {
    transform: translateY(2px) scaleX(120%) scaleY(90%);
  }
  60% {
    transform: translateY(-2px) scaleX(90%) scaleY(110%);
  }
  100% {
    transform: translateY(2px) scaleX(120%) scaleY(90%);
  }
}

/* Breathing glow uses brightness filter + box-shadow cycling — not obvious from property names */
@keyframes heading-breath-h1 {
  50% {
    opacity: 0;
    filter: brightness(0);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

@keyframes heading-breath-h2 {
  50% {
    opacity: 0;
    filter: brightness(0);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

@keyframes heading-breath-h3 {
  50% {
    opacity: 0;
    filter: brightness(0);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

/* Horizontal rule radial-gradient expansion animation */
@keyframes hr-spread {
  0% {
    background-size:
      100% 100%,
      100% 100%,
      100% 100%;
    background-position: center, center, center;
  }
  100% {
    background-size:
      196% 100%,
      196% 100%,
      100% 100%;
    background-position: left, right, center;
  }
}

@keyframes hr-spread-opacity {
  0% {
    opacity: 0;
  }
  20%,
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes checkbox-holo {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

/* Scan line moves horizontally across search input — repeating-linear-gradient creates the line */
@keyframes search-horizontal-scan {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`,
};
