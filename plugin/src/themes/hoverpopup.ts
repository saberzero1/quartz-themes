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
  --heading-formatting: #ffc83d;
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
  --setting-group-heading-color: #e0e0ff;
  --setting-items-background: #232433;
  --setting-items-border-color: rgb(from #5e6280 r g b / 0.1);
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
  --text-accent: #a464fc;
  --text-error: #ff3d63;
  --text-faint: #ffc83d;
  --text-highlight-bg: #ffc83d;
  --text-muted: #afb2c7;
  --text-normal: #e0e0ff;
  --text-on-accent: #e0e0ff;
  --titlebar-background: #232433;
  --titlebar-background-focused: #404359;
  --titlebar-border-color: rgb(from #5e6280 r g b / 0.1);
  --titlebar-text-color: #afb2c7;
  --titlebar-text-color-focused: #e0e0ff;
  --vault-profile-color: #e0e0ff;
  --vault-profile-color-hover: #e0e0ff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 36, 51);
  color: rgb(224, 224, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(16, 17, 25);
  color: rgb(224, 224, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 36, 51);
  color: rgb(224, 224, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 36, 51);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  color: rgb(224, 224, 255);
}

body div#quartz-root {
  background-color: rgb(16, 17, 25);
  color: rgb(224, 224, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration: rgb(164, 100, 252);
  text-decoration-color: rgb(164, 100, 252);
}

body .page article p > em, em {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration: rgb(164, 100, 252);
  text-decoration-color: rgb(164, 100, 252);
}

body .page article p > i, i {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration: rgb(164, 100, 252);
  text-decoration-color: rgb(164, 100, 252);
}

body .page article p > strong, strong {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration: rgb(164, 100, 252);
  text-decoration-color: rgb(164, 100, 252);
}

body .text-highlight {
  background-color: rgb(255, 200, 61);
  color: rgb(224, 224, 255);
  outline: rgb(224, 224, 255) none 0px;
  text-decoration: rgb(224, 224, 255);
  text-decoration-color: rgb(224, 224, 255);
}

body del {
  color: rgb(224, 224, 255);
  outline: rgb(224, 224, 255) none 0px;
  text-decoration: line-through rgb(224, 224, 255);
  text-decoration-color: rgb(224, 224, 255);
}

body p {
  color: rgb(175, 178, 199);
  outline: rgb(175, 178, 199) none 0px;
  text-decoration: rgb(175, 178, 199);
  text-decoration-color: rgb(175, 178, 199);
}`,
    links: `body a.external, footer a {
  color: rgb(100, 188, 252);
  outline: rgb(100, 188, 252) none 0px;
  text-decoration: rgb(100, 188, 252);
  text-decoration-color: rgb(100, 188, 252);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(100, 188, 252);
  outline: rgb(100, 188, 252) none 0px;
  text-decoration: rgb(100, 188, 252);
  text-decoration-color: rgb(100, 188, 252);
}

body a.internal.broken {
  color: rgb(255, 76, 48);
  outline: rgb(255, 76, 48) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(224, 224, 255);
}

body dt {
  color: rgb(224, 224, 255);
}

body ol > li {
  color: rgb(224, 224, 255);
}

body ol.overflow {
  background-color: rgb(16, 17, 25);
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body ul > li {
  color: rgb(224, 224, 255);
}

body ul.overflow {
  background-color: rgb(16, 17, 25);
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(255, 200, 61);
  text-decoration: rgb(255, 200, 61);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body table {
  color: rgb(224, 224, 255);
}

body td {
  border-bottom-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-left-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-right-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-top-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}

body th {
  border-bottom-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-left-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-right-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-top-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0 0.866667 1 / 0.06);
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
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0 0.866667 1 / 0.06);
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
  color: rgb(0, 221, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(64, 255, 175);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(64, 255, 175);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(64, 255, 175);
  border-left-color: rgb(64, 255, 175);
  border-right-color: rgb(64, 255, 175);
  border-top-color: rgb(64, 255, 175);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0 0.866667 1 / 0.06);
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
  overflow-x: visible;
}

body pre:has(> code) {
  background-color: color(srgb 0 0.866667 1 / 0.06);
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
  overflow-x: visible;
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body figcaption {
  color: rgb(224, 224, 255);
}

body figure {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body img {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body video {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

body .transclude {
  border-bottom-color: rgb(224, 224, 255);
  border-bottom-style: solid;
  border-left-color: rgb(164, 100, 252);
  border-right-color: rgb(224, 224, 255);
  border-right-style: solid;
  border-top-color: rgb(224, 224, 255);
  border-top-style: solid;
}

body .transclude-inner {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(164, 100, 252);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 61, 99);
  border-left-color: rgb(255, 61, 99);
  border-right-color: rgb(255, 61, 99);
  border-top-color: rgb(255, 61, 99);
  width: 20px;
}

body input[type=checkbox]:checked:after {
  background-color: rgba(0, 0, 0, 0);
  content: "";
  display: block;
  position: absolute;
  width: 4px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through rgb(0, 221, 255);
  text-decoration-color: rgb(0, 221, 255);
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(16, 17, 25);
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 255);
  outline: rgb(224, 224, 255) none 0px;
  text-decoration: rgb(224, 224, 255);
  text-decoration-color: rgb(224, 224, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 224, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 224, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(164, 100, 252);
  color: rgb(224, 224, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(164, 100, 252);
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(164, 100, 252);
  color: rgb(224, 224, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(35, 36, 51);
}

body a.internal.tag-link::before {
  color: rgb(175, 178, 199);
}

body h1 {
  color: rgb(0, 221, 255);
}

body h2 {
  color: rgb(255, 61, 99);
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 224, 255);
}

body h3 {
  color: rgb(255, 200, 61);
}

body h4 {
  color: rgb(164, 100, 252);
}

body h5 {
  color: rgb(0, 255, 106);
}

body h6 {
  color: rgb(175, 178, 199);
}

body hr {
  border-bottom-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(175, 178, 199);
  text-decoration: rgb(175, 178, 199);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(175, 178, 199);
  text-decoration: rgb(175, 178, 199);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(175, 178, 199);
  text-decoration: rgb(175, 178, 199);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(255, 200, 61);
  border-left-color: rgb(255, 200, 61);
  border-right-color: rgb(255, 200, 61);
  border-top-color: rgb(255, 200, 61);
  color: rgb(255, 200, 61);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(175, 178, 199);
  text-decoration: rgb(175, 178, 199);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(224, 224, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(175, 178, 199);
  text-decoration: rgb(175, 178, 199);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(175, 178, 199);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body li.section-li > .section .meta {
  color: rgb(175, 178, 199);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(175, 178, 199);
  text-decoration: rgb(175, 178, 199);
}

body ul.section-ul {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

body .darkmode svg {
  color: rgb(175, 178, 199);
  stroke: rgb(175, 178, 199);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

body .breadcrumb-element p {
  color: rgb(255, 200, 61);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

body .metadata {
  border-bottom-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-top-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  color: rgb(175, 178, 199);
}

body .metadata-properties {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

body .navigation-progress {
  background-color: rgb(35, 36, 51);
}

body .page-header h2.page-title {
  color: rgb(224, 224, 255);
}

body abbr {
  color: rgb(224, 224, 255);
  text-decoration: underline dotted rgb(224, 224, 255);
}

body details {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(175, 178, 199);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

body sub {
  color: rgb(224, 224, 255);
}

body summary {
  color: rgb(224, 224, 255);
}

body sup {
  color: rgb(224, 224, 255);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
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
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
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
}

body pre > code > [data-line] {
  border-left-color: rgb(34, 34, 34);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(34, 34, 34);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
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
  overflow-x: visible;
}

body pre:has(> code) {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
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
  overflow-x: visible;
}`,
    embeds: `body .file-embed {
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
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(34, 34, 34);
  text-decoration: line-through rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body input[type=checkbox] {
  width: 20px;
}

body input[type=checkbox]:checked:after {
  background-color: rgba(0, 0, 0, 0);
  content: "";
  display: block;
  position: absolute;
  width: 4px;
}

body li.task-list-item[data-task='!'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='*'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='-'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='/'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='>'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='?'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='I'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='S'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='b'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='c'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='d'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='f'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='i'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='k'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='l'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='p'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='u'] {
  text-decoration: line-through rgb(34, 34, 34);
}

body li.task-list-item[data-task='w'] {
  text-decoration: line-through rgb(34, 34, 34);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
}`,
  },
};
