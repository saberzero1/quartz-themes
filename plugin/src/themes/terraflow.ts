import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "terraflow",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 15;
  --accent-l: 60%;
  --accent-s: 65%;
  --background-modifier-active-hover: rgba(219, 120, 87, 0.1);
  --background-primary: #282520;
  --background-primary-rgb: 40, 37, 32;
  --background-secondary: #32302a;
  --background-secondary-alt: #3a3832;
  --background-secondary-rgb: 50, 48, 42;
  --bases-cards-background: #282520;
  --bases-group-heading-property-color: rgba(232, 220, 198, 0.7);
  --bases-table-cell-background-active: #282520;
  --bases-table-cell-background-selected: rgba(219, 120, 87, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #f0916f;
  --bases-table-header-background: #282520;
  --bases-table-header-color: rgba(232, 220, 198, 0.7);
  --bases-table-summary-background: #282520;
  --blockquote-border-color: #f0916f;
  --bold-weight: 600;
  --border-heavy: 3px;
  --border-thick: 2px;
  --border-thin: 1px;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1);
  --callout-cite: #a29bfe;
  --callout-cite-rgb: 162, 155, 254;
  --callout-danger: #e74c3c;
  --callout-danger-rgb: 231, 76, 60;
  --callout-example: #95b3aa;
  --callout-example-rgb: 149, 179, 170;
  --callout-info: #e9d5a3;
  --callout-info-rgb: 233, 213, 163;
  --callout-note: #f2a882;
  --callout-note-rgb: 242, 168, 130;
  --callout-quote: #e8dcc6;
  --callout-quote-rgb: 232, 220, 198;
  --callout-success: #a8c47a;
  --callout-success-rgb: 168, 196, 122;
  --callout-title-weight: 600;
  --callout-video: #f2b399;
  --callout-video-rgb: 242, 179, 153;
  --callout-warning: #f39c12;
  --callout-warning-rgb: 243, 156, 18;
  --canvas-background: #282520;
  --caret-color: #e8dcc6;
  --checkbox-border-color-hover: rgba(232, 220, 198, 0.7);
  --checkbox-color: #f0916f;
  --checkbox-color-hover: #e27a5a;
  --checkbox-marker-color: #282520;
  --checklist-done-color: rgba(232, 220, 198, 0.7);
  --code-background: #3a3832;
  --code-comment: #9c9584;
  --code-function: #f2a882;
  --code-important: #e27a5a;
  --code-keyword: #8bb5d9;
  --code-normal: #e8dcc6;
  --code-property: #a8c47a;
  --code-punctuation: rgba(232, 220, 198, 0.7);
  --code-string: #b5a8d4;
  --code-tag: #e08ba8;
  --code-value: #95b3aa;
  --collapse-icon-color-collapsed: #e27a5a;
  --color-accent: rgb(219, 120, 87);
  --color-accent-1: rgb(228, 145, 124);
  --color-accent-2: rgb(236, 170, 156);
  --color-accent-hsl: 15, 65%, 60%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --depth-1: 0 1px 2px rgba(0, 0, 0, 0.2),
               0 2px 4px rgba(0, 0, 0, 0.15);
  --depth-2: 0 2px 4px rgba(0, 0, 0, 0.25),
               0 4px 8px rgba(0, 0, 0, 0.2),
               0 8px 16px rgba(0, 0, 0, 0.15);
  --depth-3: 0 4px 8px rgba(0, 0, 0, 0.3),
               0 8px 16px rgba(0, 0, 0, 0.25),
               0 16px 32px rgba(0, 0, 0, 0.2);
  --depth-4: 0 8px 16px rgba(0, 0, 0, 0.35),
               0 16px 32px rgba(0, 0, 0, 0.3),
               0 32px 64px rgba(0, 0, 0, 0.25);
  --divider-color: #4a473e88;
  --divider-color-hover: #f0916f;
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8);
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2);
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3);
  --editor-max-width: 64ch;
  --embed-border-start: 2px solid #f0916f;
  --emphasis-color: #e27a5a;
  --emphasis-color-light: #f2a882;
  --fast: 0.15s ease;
  --file-header-background: #282520;
  --file-header-background-focused: #282520;
  --file-line-width: 64ch;
  --flair-color: #e8dcc6;
  --footnote-id-color: rgba(232, 220, 198, 0.7);
  --glass-border: rgba(255, 255, 255, 0.2);
  --graph-node: rgba(232, 220, 198, 0.7);
  --graph-node-focused: #e27a5a;
  --graph-text: #e8dcc6;
  --gray: var(--text-muted);
  --heading-bg-opacity: .2;
  --heading-pad-x: 0.5em;
  --heading-pad-y: 0.2em;
  --heading-primary: #f2a882;
  --heading-primary-rgb: 242, 168, 130;
  --heading-quaternary: #a8c47a;
  --heading-quaternary-rgb: 168, 196, 122;
  --heading-quinary: #c97a94;
  --heading-quinary-rgb: 201, 122, 148;
  --heading-scale-1: 1.25;
  --heading-scale-2: 1.1;
  --heading-scale-3: 1.0;
  --heading-scale-4: 0.8;
  --heading-scale-5: 0.75;
  --heading-scale-6: 0.6;
  --heading-scale-x-1: 1.6;
  --heading-scale-x-2: 1.5;
  --heading-scale-x-3: 1.5;
  --heading-scale-x-4: 1.2;
  --heading-scale-x-5: 1.2;
  --heading-scale-x-6: 1.1;
  --heading-secondary: #8ba891;
  --heading-secondary-rgb: 139, 168, 145;
  --heading-senary: #95b3aa;
  --heading-senary-rgb: 149, 179, 170;
  --heading-spacing: 2.5rem;
  --heading-tertiary: #b5a8d4;
  --heading-tertiary-rgb: 181, 168, 212;
  --heading-text-multiplier: .85;
  --height-button: 34px;
  --height-button-sm: 32px;
  --height-input: 38px;
  --highlight: var(--background-modifier-active-hover);
  --highlight-bg: #3a2f20;
  --highlight-bg-dark: #5a4430;
  --highlight-bg-dark-color: #5a4430;
  --highlight-bg-light-color: #f2c088;
  --icon-color: rgba(232, 220, 198, 0.7);
  --icon-color-active: #e27a5a;
  --icon-color-focused: #e8dcc6;
  --icon-color-hover: rgba(232, 220, 198, 0.7);
  --interactive-accent: #f0916f;
  --interactive-accent-hover: #e27a5a;
  --interactive-accent-hsl: 15, 65%, 60%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-normal: 1.6;
  --line-relaxed: 2.0;
  --line-tight: 1.5;
  --link-color: #f0916f;
  --link-color-hover: #e27a5a;
  --link-external-color: #e27a5a;
  --link-external-color-hover: rgb(236, 170, 156);
  --link-opacity-hover: .18;
  --link-opacity-normal: .1;
  --link-opacity-unresolved: .05;
  --link-opacity-unresolved-hover: .12;
  --link-unresolved-color: #f0916f;
  --link-unresolved-decoration-color: rgba(219, 120, 87, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: #e27a5a;
  --list-marker-color-hover: rgba(232, 220, 198, 0.7);
  --menu-background: #32302a;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #e8dcc6;
  --metadata-label-text-color: rgba(232, 220, 198, 0.7);
  --metadata-label-text-color-hover: rgba(232, 220, 198, 0.7);
  --modal-background: #282520;
  --nav-heading-color: #e8dcc6;
  --nav-heading-color-collapsed-hover: rgba(232, 220, 198, 0.7);
  --nav-heading-color-hover: #e8dcc6;
  --nav-item-background-selected: rgba(219, 120, 87, 0.15);
  --nav-item-color: rgba(232, 220, 198, 0.7);
  --nav-item-color-active: #e8dcc6;
  --nav-item-color-highlighted: #e27a5a;
  --nav-item-color-hover: #e8dcc6;
  --nav-item-color-selected: #e8dcc6;
  --nav-tag-color-active: rgba(232, 220, 198, 0.7);
  --nav-tag-color-hover: rgba(232, 220, 198, 0.7);
  --normal: 0.25s ease;
  --opacity-active: 0.12;
  --opacity-border: 0.45;
  --opacity-divider: 0.15;
  --opacity-hover: 0.08;
  --opacity-light-overlay: 0.3;
  --opacity-overlay: 0.2;
  --opacity-subtle: 0.1;
  --outline-item-spacing: .5em;
  --pdf-background: #282520;
  --pdf-page-background: #282520;
  --pdf-sidebar-background: #282520;
  --pill-color: rgba(232, 220, 198, 0.7);
  --pill-color-hover: #e8dcc6;
  --pill-color-remove-hover: #e27a5a;
  --primary-color: #f0916f;
  --primary-color-dark: #e27a5a;
  --primary-color-rgb: 240, 145, 111;
  --prompt-background: #282520;
  --r1: 6px;
  --r2: 10px;
  --r3: 12px;
  --r4: 16px;
  --radius-pill: 100px;
  --reading-max-width: 64ch;
  --ribbon-background: #32302a;
  --ribbon-background-collapsed: #282520;
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s6: 24px;
  --s8: 32px;
  --scrollbar-thumb: rgba(240, 145, 111, 0.35);
  --scrollbar-track: rgba(40, 37, 32, 0.2);
  --search-clear-button-color: rgba(232, 220, 198, 0.7);
  --search-icon-color: rgba(232, 220, 198, 0.7);
  --search-result-background: #282520;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #e8dcc6;
  --setting-items-background: #32302a;
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 6px 18px rgba(0, 0, 0, 0.15);
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12);
  --sidebar-markdown-font-size: 14.4px;
  --slow: 0.3s ease;
  --squircle-btn: 40%;
  --squircle-main: 60%;
  --squircle-soft: 80%;
  --status-bar-background: #32302a;
  --status-bar-border-color: #4a473e88;
  --status-bar-text-color: rgba(232, 220, 198, 0.7);
  --suggestion-background: #282520;
  --surface-accent: #4a473e;
  --surface-accent-rgb: 74, 71, 62;
  --surface-dark: #282520;
  --surface-dark-rgb: 40, 37, 32;
  --tab-background-active: #282520;
  --tab-bg-inactive: rgba(40, 37, 32, 0.15);
  --tab-bg-inactive-hover: rgba(40, 37, 32, 0.25);
  --tab-container-background: #32302a;
  --tab-outline-color: #4a473e88;
  --tab-switcher-background: #32302a;
  --tab-switcher-menubar-background: linear-gradient(to top, #32302a, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(219, 120, 87);
  --tab-text-color-active: rgba(232, 220, 198, 0.7);
  --tab-text-color-focused: rgba(232, 220, 198, 0.7);
  --tab-text-color-focused-active: rgba(232, 220, 198, 0.7);
  --tab-text-color-focused-active-current: #e8dcc6;
  --tab-text-color-focused-highlighted: #e27a5a;
  --table-drag-handle-background-active: #f0916f;
  --table-header-color: #e8dcc6;
  --table-header-weight: 600;
  --table-selection: rgba(219, 120, 87, 0.1);
  --table-selection-border-color: #f0916f;
  --tag-background: rgba(219, 120, 87, 0.1);
  --tag-background-hover: rgba(219, 120, 87, 0.2);
  --tag-border-color: rgba(219, 120, 87, 0.15);
  --tag-border-color-hover: rgba(219, 120, 87, 0.15);
  --tag-color: #e27a5a;
  --tag-color-hover: #e27a5a;
  --tertiary: var(--text-accent-hover);
  --text-accent: #e27a5a;
  --text-accent-hover: rgb(236, 170, 156);
  --text-muted: rgba(232, 220, 198, 0.7);
  --text-normal: #e8dcc6;
  --text-normal-rgb: 232, 220, 198;
  --text-selection: #4a3d2e;
  --textHighlight: var(--background-modifier-active-hover);
  --theme-folder-opacity: .12;
  --titlebar-background: #32302a;
  --titlebar-background-focused: #3a3832;
  --titlebar-text-color: rgba(232, 220, 198, 0.7);
  --titlebar-text-color-focused: #e8dcc6;
  --transition-bounce: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s;
  --transition-depth: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2), transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --vault-profile-color: #e8dcc6;
  --vault-profile-color-hover: #e8dcc6;
  --weight-bold: 700;
  --weight-medium: 500;
  --weight-normal: 400;
  --weight-semibold: 600;
  --whimsy-fast: 0.25s;
  --whimsy-micro: 0.15s;
  --whimsy-normal: 0.35s;
  --whimsy-scale-emphasis: 1.1;
  --whimsy-scale-normal: 1.05;
  --whimsy-scale-pop: 1.15;
  --whimsy-scale-subtle: 1.02;
  --whimsy-slow: 0.5s;
  --whimsy-stagger-base: 0.03s;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(232, 220, 198);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 37, 32);
  color: rgb(232, 220, 198);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(232, 220, 198);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(74, 71, 62, 0.533);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(74, 71, 62, 0.533);
  color: rgb(232, 220, 198);
}

body div#quartz-root {
  background-color: rgb(40, 37, 32);
  color: rgb(232, 220, 198);
}`,
    typography: `body .page article p > b, b {
  color: rgb(242, 168, 130);
  font-weight: 700;
  outline: rgb(242, 168, 130) none 0px;
  text-decoration: rgb(242, 168, 130);
  text-decoration-color: rgb(242, 168, 130);
}

body .page article p > em, em {
  color: rgb(242, 168, 130);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration: rgb(242, 168, 130);
  text-decoration-color: rgb(242, 168, 130);
}

body .page article p > i, i {
  color: rgb(242, 168, 130);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration: rgb(242, 168, 130);
  text-decoration-color: rgb(242, 168, 130);
}

body .page article p > strong, strong {
  color: rgb(242, 168, 130);
  font-weight: 700;
  outline: rgb(242, 168, 130) none 0px;
  text-decoration: rgb(242, 168, 130);
  text-decoration-color: rgb(242, 168, 130);
}

body .text-highlight {
  background-color: rgb(90, 68, 48);
  color: rgb(242, 192, 136);
  outline: rgb(242, 192, 136) none 0px;
  text-decoration: rgb(242, 192, 136);
  text-decoration-color: rgb(242, 192, 136);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

body del {
  color: rgb(242, 168, 130);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration: rgb(242, 168, 130);
  text-decoration-color: rgb(242, 168, 130);
}

body p {
  color: rgba(232, 220, 198, 0.7);
  outline: rgba(232, 220, 198, 0.7) none 0px;
  text-decoration: rgba(232, 220, 198, 0.7);
  text-decoration-color: rgba(232, 220, 198, 0.7);
}`,
    links: `body a.external, footer a {
  background-color: rgba(240, 145, 111, 0.08);
  color: rgb(240, 145, 111);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration: rgb(240, 145, 111);
  text-decoration-color: rgb(240, 145, 111);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(240, 145, 111, 0.08);
  color: rgb(240, 145, 111);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration: rgb(240, 145, 111);
  text-decoration-color: rgb(240, 145, 111);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

body a.internal.broken {
  background-color: rgba(240, 145, 111, 0.08);
  color: rgb(240, 145, 111);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration: rgb(240, 145, 111);
  text-decoration-color: rgb(240, 145, 111);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    lists: `body dd {
  color: rgb(232, 220, 198);
}

body dt {
  color: rgb(232, 220, 198);
}

body ol > li {
  color: rgb(232, 220, 198);
}

body ol.overflow {
  background-color: rgb(40, 37, 32);
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body ul > li {
  color: rgb(232, 220, 198);
}

body ul.overflow {
  background-color: rgb(40, 37, 32);
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(240, 145, 111);
  text-decoration: rgb(240, 145, 111);
}

body blockquote {
  background-color: rgba(50, 48, 42, 0.8);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(232, 220, 198);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}

body td {
  border-top-color: rgb(232, 220, 198);
  border-top-width: 0px;
  color: rgb(232, 220, 198);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body th {
  background-color: rgb(226, 122, 90);
  border-top-left-radius: 12px;
  color: rgb(232, 220, 198);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: rgb(232, 220, 198);
}

body pre > code > [data-line] {
  border-left-color: rgb(242, 168, 130);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 168, 130);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 168, 130);
  border-left-color: rgb(242, 168, 130);
  border-right-color: rgb(242, 168, 130);
  border-top-color: rgb(242, 168, 130);
}

body pre > code, pre:has(> code) {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}

body pre:has(> code) {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgba(240, 145, 111, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(240, 145, 111, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(240, 145, 111, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(240, 145, 111, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body figcaption {
  color: rgb(232, 220, 198);
}

body figure {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body img {
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(232, 220, 198);
  border-radius: 12px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body video {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
}

body .footnotes {
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

body .transclude {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body .transclude-inner {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(232, 220, 198, 0.7);
  text-decoration: line-through 2px rgb(226, 122, 90);
  text-decoration-color: rgb(226, 122, 90);
}

body input[type=checkbox] {
  border-bottom-color: rgb(226, 122, 90);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(226, 122, 90);
  border-left-width: 2px;
  border-right-color: rgb(226, 122, 90);
  border-right-width: 2px;
  border-top-color: rgb(226, 122, 90);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 18px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='*'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='-'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='/'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='>'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='?'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='I'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='S'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='b'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='c'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='d'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='f'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='i'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='k'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='l'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='p'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='u'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body li.task-list-item[data-task='w'] {
  color: rgb(232, 220, 198);
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: color(srgb 0.976505 0.842762 0.774084);
  border-left-color: color(srgb 0.976505 0.842762 0.774084);
  border-right-color: color(srgb 0.976505 0.842762 0.774084);
  border-top-color: color(srgb 0.976505 0.842762 0.774084);
  gap: 13.2px;
}

body .callout[data-callout="abstract"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="bug"] {
  --callout-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="danger"] {
  --callout-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="example"] {
  --callout-color: #95b3aa;
  background-color: rgba(149, 179, 170, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(149, 179, 170);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="failure"] {
  --callout-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="info"] {
  --callout-color: #e9d5a3;
  background-color: rgba(233, 213, 163, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(233, 213, 163);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="note"] {
  --callout-color: #f2a882;
  background-color: rgba(242, 168, 130, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(242, 168, 130);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="question"] {
  --callout-color: #f39c12;
  background-color: rgba(243, 156, 18, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(243, 156, 18);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="quote"] {
  --callout-color: #95b3aa;
  background-color: rgba(149, 179, 170, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(149, 179, 170);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="success"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="tip"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="todo"] {
  --callout-color: #a8c47a;
  background-color: rgba(168, 196, 122, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="warning"] {
  --callout-color: #f39c12;
  background-color: rgba(243, 156, 18, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(243, 156, 18);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(232, 220, 198);
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px 0px, rgba(0, 0, 0, 0.5) 0px 12px 48px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(232, 220, 198);
  outline: rgb(232, 220, 198) none 0px;
  text-decoration: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 145, 111);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(240, 145, 111);
  border-top-color: rgb(240, 145, 111);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(240, 145, 111);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(240, 145, 111, 0.2);
  color: rgb(240, 145, 111);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 48, 42);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(240, 145, 111, 0.2);
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(240, 145, 111);
  border-top-color: rgb(240, 145, 111);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(240, 145, 111);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(240, 145, 111, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(240, 145, 111);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(240, 145, 111, 0.18);
  border-bottom-color: rgba(219, 120, 87, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body a.internal.tag-link::before {
  color: rgb(232, 220, 198);
}

body h1 {
  color: color(srgb 0.928406 0.52087 0.311594);
}

body h2 {
  color: color(srgb 0.441905 0.581429 0.470772);
}

body h2.page-title, h2.page-title a {
  color: rgb(240, 145, 111);
}

body h3 {
  color: color(srgb 0.582564 0.509231 0.757436);
}

body h4 {
  color: color(srgb 0.574063 0.711146 0.348854);
}

body h5 {
  color: color(srgb 0.733369 0.343298 0.471676);
}

body h6 {
  color: color(srgb 0.471941 0.621392 0.576557);
}

body hr {
  border-bottom-color: rgba(74, 71, 62, 0.533);
  border-left-color: rgba(74, 71, 62, 0.533);
  border-right-color: rgba(74, 71, 62, 0.533);
}`,
    scrollbars: `body .callout {
  --callout-color: #f2a882;
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(242, 168, 130);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body ::-webkit-scrollbar {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 37, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 37, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 168, 145);
  text-decoration: rgb(139, 168, 145);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 168, 145);
  text-decoration: rgb(139, 168, 145);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(232, 220, 198, 0.7);
  text-decoration: rgba(232, 220, 198, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(232, 220, 198, 0.7);
}`,
    footer: `body footer {
  background-color: rgba(240, 145, 111, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 0px;
  color: rgba(0, 0, 0, 0);
}

body footer ul li a {
  color: rgba(0, 0, 0, 0);
  text-decoration: rgba(0, 0, 0, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(232, 220, 198);
}

body .recent-notes > ul.recent-ul > li {
  background-color: rgba(139, 168, 145, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(232, 220, 198);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 168, 145);
  text-decoration: rgb(139, 168, 145);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 168, 145);
}`,
    listPage: `body li.section-li {
  background-color: rgba(139, 168, 145, 0.12);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body li.section-li > .section .meta {
  color: rgb(139, 168, 145);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 168, 145);
  text-decoration: rgb(139, 168, 145);
}

body ul.section-ul {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(232, 220, 198, 0.7);
}

body .darkmode svg {
  color: rgba(232, 220, 198, 0.7);
  stroke: rgba(232, 220, 198, 0.7);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  color: rgba(232, 220, 198, 0.7);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

body .metadata {
  background-color: rgba(240, 145, 111, 0.05);
  border-bottom-color: rgba(240, 145, 111, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(240, 145, 111, 0.15);
  border-right-color: rgba(240, 145, 111, 0.15);
  border-top-color: rgba(240, 145, 111, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgba(232, 220, 198, 0.7);
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  color: rgba(232, 220, 198, 0.7);
}

body .navigation-progress {
  background-color: rgba(240, 145, 111, 0.2);
}

body .page-header h2.page-title {
  color: rgb(232, 220, 198);
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px;
}

body abbr {
  color: rgb(232, 220, 198);
  text-decoration: underline dotted rgb(232, 220, 198);
}

body details {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body input[type=text] {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(232, 220, 198, 0.7);
}

body kbd {
  background-color: rgb(58, 56, 50);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-style: solid;
  border-left-color: rgb(232, 220, 198);
  border-left-style: solid;
  border-right-color: rgb(232, 220, 198);
  border-right-style: solid;
  border-top-color: rgb(232, 220, 198);
  border-top-style: solid;
  color: rgb(232, 220, 198);
}

body progress {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

body sub {
  color: rgb(232, 220, 198);
}

body summary {
  color: rgb(232, 220, 198);
}

body sup {
  color: rgb(232, 220, 198);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 15;
  --accent-l: 60%;
  --accent-s: 65%;
  --background-modifier-active-hover: rgba(219, 120, 87, 0.1);
  --background-primary: #eeece2;
  --background-primary-rgb: 238, 236, 226;
  --background-secondary: #e6e4da;
  --background-secondary-alt: #dfdbd1;
  --background-secondary-rgb: 230, 228, 218;
  --bases-cards-background: #eeece2;
  --bases-group-heading-property-color: rgba(61, 46, 26, 0.7);
  --bases-table-cell-background-active: #eeece2;
  --bases-table-cell-background-selected: rgba(219, 120, 87, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #d97756;
  --bases-table-header-background: #eeece2;
  --bases-table-header-color: rgba(61, 46, 26, 0.7);
  --bases-table-summary-background: #eeece2;
  --blockquote-border-color: #d97756;
  --blur-background: color-mix(in srgb, #eeece2 65%, transparent) linear-gradient(#eeece2, color-mix(in srgb, #eeece2 65%, transparent));
  --bold-weight: 600;
  --border-heavy: 3px;
  --border-thick: 2px;
  --border-thin: 1px;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1);
  --callout-cite: #573d84;
  --callout-cite-rgb: 87, 61, 132;
  --callout-danger: #c0392b;
  --callout-danger-rgb: 192, 57, 43;
  --callout-example: #779088;
  --callout-example-rgb: 119, 144, 136;
  --callout-info: #d4af37;
  --callout-info-rgb: 212, 175, 55;
  --callout-note: #d97756;
  --callout-note-rgb: 217, 119, 86;
  --callout-quote: #b0a483;
  --callout-quote-rgb: 176, 164, 131;
  --callout-success: #798d5d;
  --callout-success-rgb: 121, 141, 93;
  --callout-title-weight: 600;
  --callout-video: #a67c52;
  --callout-video-rgb: 166, 124, 82;
  --callout-warning: #e67e22;
  --callout-warning-rgb: 230, 126, 34;
  --canvas-background: #eeece2;
  --caret-color: #3d2e1a;
  --checkbox-border-color-hover: rgba(61, 46, 26, 0.7);
  --checkbox-color: #d97756;
  --checkbox-color-hover: #ae4e36;
  --checkbox-marker-color: #eeece2;
  --checklist-done-color: rgba(61, 46, 26, 0.7);
  --code-background: #f5efe0;
  --code-comment: #707592;
  --code-function: #d97756;
  --code-important: #ae4e36;
  --code-keyword: #6a97bb;
  --code-normal: #3d2e1a;
  --code-property: #798d5d;
  --code-punctuation: rgba(61, 46, 26, 0.7);
  --code-string: #8f8ca6;
  --code-tag: #c36686;
  --code-value: #779088;
  --collapse-icon-color-collapsed: #ae4e36;
  --color-accent: rgb(219, 120, 87);
  --color-accent-1: rgb(225, 134, 107);
  --color-accent-2: rgb(228, 145, 124);
  --color-accent-hsl: 15, 65%, 60%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --depth-1: 0 1px 2px rgba(0, 0, 0, 0.05),
               0 2px 4px rgba(0, 0, 0, 0.03);
  --depth-2: 0 2px 4px rgba(0, 0, 0, 0.06),
               0 4px 8px rgba(0, 0, 0, 0.04),
               0 8px 16px rgba(0, 0, 0, 0.02);
  --depth-3: 0 4px 8px rgba(0, 0, 0, 0.08),
               0 8px 16px rgba(0, 0, 0, 0.06),
               0 16px 32px rgba(0, 0, 0, 0.04);
  --depth-4: 0 8px 16px rgba(0, 0, 0, 0.1),
               0 16px 32px rgba(0, 0, 0, 0.08),
               0 32px 64px rgba(0, 0, 0, 0.06);
  --divider-color: #d2cfc588;
  --divider-color-hover: #d97756;
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8);
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2);
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3);
  --editor-max-width: 64ch;
  --embed-border-start: 2px solid #d97756;
  --emphasis-color: #ae4e36;
  --emphasis-color-light: #d97756;
  --fast: 0.15s ease;
  --file-header-background: #eeece2;
  --file-header-background-focused: #eeece2;
  --file-line-width: 64ch;
  --flair-color: #3d2e1a;
  --footnote-id-color: rgba(61, 46, 26, 0.7);
  --glass-border: rgba(255, 255, 255, 0.2);
  --graph-node: rgba(61, 46, 26, 0.7);
  --graph-node-focused: #ae4e36;
  --graph-text: #3d2e1a;
  --gray: var(--text-muted);
  --heading-bg-opacity: .2;
  --heading-pad-x: 0.5em;
  --heading-pad-y: 0.2em;
  --heading-primary: #d97756;
  --heading-primary-rgb: 217, 119, 86;
  --heading-quaternary: #798d5d;
  --heading-quaternary-rgb: 121, 141, 93;
  --heading-quinary: #c36686;
  --heading-quinary-rgb: 195, 102, 134;
  --heading-scale-1: 1.25;
  --heading-scale-2: 1.1;
  --heading-scale-3: 1.0;
  --heading-scale-4: 0.8;
  --heading-scale-5: 0.75;
  --heading-scale-6: 0.6;
  --heading-scale-x-1: 1.6;
  --heading-scale-x-2: 1.5;
  --heading-scale-x-3: 1.5;
  --heading-scale-x-4: 1.2;
  --heading-scale-x-5: 1.2;
  --heading-scale-x-6: 1.1;
  --heading-secondary: #b8692c;
  --heading-secondary-rgb: 184, 105, 44;
  --heading-senary: #779088;
  --heading-senary-rgb: 119, 144, 136;
  --heading-spacing: 2.5rem;
  --heading-tertiary: #9a863c;
  --heading-tertiary-rgb: 154, 134, 60;
  --heading-text-multiplier: .85;
  --height-button: 34px;
  --height-button-sm: 32px;
  --height-input: 38px;
  --highlight: var(--background-modifier-active-hover);
  --highlight-bg: #d6b07b;
  --highlight-bg-dark: #c9a772;
  --highlight-bg-dark-color: #2d1f0e;
  --highlight-bg-rgb: 232, 200, 154;
  --icon-color: rgba(61, 46, 26, 0.7);
  --icon-color-active: #ae4e36;
  --icon-color-focused: #3d2e1a;
  --icon-color-hover: rgba(61, 46, 26, 0.7);
  --interactive-accent: #d97756;
  --interactive-accent-hover: #ae4e36;
  --interactive-accent-hsl: 15, 65%, 60%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-normal: 1.6;
  --line-relaxed: 2.0;
  --line-tight: 1.5;
  --link-color: #d97756;
  --link-color-hover: #ae4e36;
  --link-external-color: #ae4e36;
  --link-external-color-hover: rgb(228, 145, 124);
  --link-opacity-hover: .18;
  --link-opacity-normal: .1;
  --link-opacity-unresolved: .05;
  --link-opacity-unresolved-hover: .12;
  --link-unresolved-color: #d97756;
  --link-unresolved-decoration-color: rgba(219, 120, 87, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: #ae4e36;
  --list-marker-color-hover: rgba(61, 46, 26, 0.7);
  --menu-background: #e6e4da;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #3d2e1a;
  --metadata-label-text-color: rgba(61, 46, 26, 0.7);
  --metadata-label-text-color-hover: rgba(61, 46, 26, 0.7);
  --modal-background: #eeece2;
  --nav-heading-color: #3d2e1a;
  --nav-heading-color-collapsed-hover: rgba(61, 46, 26, 0.7);
  --nav-heading-color-hover: #3d2e1a;
  --nav-item-background-selected: rgba(219, 120, 87, 0.15);
  --nav-item-color: rgba(61, 46, 26, 0.7);
  --nav-item-color-active: #3d2e1a;
  --nav-item-color-highlighted: #ae4e36;
  --nav-item-color-hover: #3d2e1a;
  --nav-item-color-selected: #3d2e1a;
  --nav-tag-color-active: rgba(61, 46, 26, 0.7);
  --nav-tag-color-hover: rgba(61, 46, 26, 0.7);
  --normal: 0.25s ease;
  --opacity-active: 0.12;
  --opacity-border: 0.45;
  --opacity-divider: 0.15;
  --opacity-hover: 0.08;
  --opacity-light-overlay: 0.3;
  --opacity-overlay: 0.2;
  --opacity-subtle: 0.1;
  --outline-item-spacing: .5em;
  --pdf-background: #eeece2;
  --pdf-page-background: #eeece2;
  --pdf-sidebar-background: #eeece2;
  --pill-color: rgba(61, 46, 26, 0.7);
  --pill-color-hover: #3d2e1a;
  --pill-color-remove-hover: #ae4e36;
  --primary-color: #d97756;
  --primary-color-dark: #ae4e36;
  --primary-color-rgb: 217, 119, 86;
  --prompt-background: #eeece2;
  --r1: 6px;
  --r2: 10px;
  --r3: 12px;
  --r4: 16px;
  --radius-pill: 100px;
  --raised-background: color-mix(in srgb, #eeece2 65%, transparent) linear-gradient(#eeece2, color-mix(in srgb, #eeece2 65%, transparent));
  --reading-max-width: 64ch;
  --ribbon-background: #e6e4da;
  --ribbon-background-collapsed: #eeece2;
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s6: 24px;
  --s8: 32px;
  --scrollbar-thumb: rgba(217, 119, 86, 0.35);
  --scrollbar-track: rgba(245, 239, 224, 0.2);
  --search-clear-button-color: rgba(61, 46, 26, 0.7);
  --search-icon-color: rgba(61, 46, 26, 0.7);
  --search-result-background: #eeece2;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #3d2e1a;
  --setting-items-background: #e6e4da;
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 6px 18px rgba(0, 0, 0, 0.15);
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12);
  --sidebar-markdown-font-size: 14.4px;
  --slow: 0.3s ease;
  --squircle-btn: 40%;
  --squircle-main: 60%;
  --squircle-soft: 80%;
  --status-bar-background: #e6e4da;
  --status-bar-border-color: #d2cfc588;
  --status-bar-text-color: rgba(61, 46, 26, 0.7);
  --suggestion-background: #eeece2;
  --surface-accent: #e8e6dc;
  --surface-accent-rgb: 232, 230, 220;
  --surface-dark: #36342e;
  --surface-dark-rgb: 54, 52, 46;
  --tab-background-active: #eeece2;
  --tab-bg-inactive: rgba(245, 239, 224, 0.15);
  --tab-bg-inactive-hover: rgba(245, 239, 224, 0.25);
  --tab-container-background: #e6e4da;
  --tab-outline-color: #d2cfc588;
  --tab-switcher-background: #e6e4da;
  --tab-switcher-menubar-background: linear-gradient(to top, #e6e4da, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(219, 120, 87);
  --tab-text-color-active: rgba(61, 46, 26, 0.7);
  --tab-text-color-focused: rgba(61, 46, 26, 0.7);
  --tab-text-color-focused-active: rgba(61, 46, 26, 0.7);
  --tab-text-color-focused-active-current: #3d2e1a;
  --tab-text-color-focused-highlighted: #ae4e36;
  --table-drag-handle-background-active: #d97756;
  --table-header-color: #3d2e1a;
  --table-header-weight: 600;
  --table-selection: rgba(219, 120, 87, 0.1);
  --table-selection-border-color: #d97756;
  --tag-background: rgba(219, 120, 87, 0.1);
  --tag-background-hover: rgba(219, 120, 87, 0.2);
  --tag-border-color: rgba(219, 120, 87, 0.15);
  --tag-border-color-hover: rgba(219, 120, 87, 0.15);
  --tag-color: #ae4e36;
  --tag-color-hover: #ae4e36;
  --tertiary: var(--text-accent-hover);
  --text-accent: #ae4e36;
  --text-accent-hover: rgb(228, 145, 124);
  --text-muted: rgba(61, 46, 26, 0.7);
  --text-normal: #3d2e1a;
  --text-normal-rgb: 61, 46, 26;
  --text-selection: #f0e0d0;
  --textHighlight: var(--background-modifier-active-hover);
  --theme-folder-opacity: .12;
  --titlebar-background: #e6e4da;
  --titlebar-background-focused: #dfdbd1;
  --titlebar-text-color: rgba(61, 46, 26, 0.7);
  --titlebar-text-color-focused: #3d2e1a;
  --transition-bounce: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s;
  --transition-depth: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2), transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --vault-profile-color: #3d2e1a;
  --vault-profile-color-hover: #3d2e1a;
  --weight-bold: 700;
  --weight-medium: 500;
  --weight-normal: 400;
  --weight-semibold: 600;
  --whimsy-fast: 0.25s;
  --whimsy-micro: 0.15s;
  --whimsy-normal: 0.35s;
  --whimsy-scale-emphasis: 1.1;
  --whimsy-scale-normal: 1.05;
  --whimsy-scale-pop: 1.15;
  --whimsy-scale-subtle: 1.02;
  --whimsy-slow: 0.5s;
  --whimsy-stagger-base: 0.03s;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(61, 46, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(238, 236, 226);
  color: rgb(61, 46, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(61, 46, 26);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(210, 207, 197, 0.533);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(210, 207, 197, 0.533);
  color: rgb(61, 46, 26);
}

body div#quartz-root {
  background-color: rgb(238, 236, 226);
  color: rgb(61, 46, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(174, 78, 54);
  font-weight: 700;
  outline: rgb(174, 78, 54) none 0px;
  text-decoration: rgb(174, 78, 54);
  text-decoration-color: rgb(174, 78, 54);
}

body .page article p > em, em {
  color: rgb(174, 78, 54);
  outline: rgb(174, 78, 54) none 0px;
  text-decoration: rgb(174, 78, 54);
  text-decoration-color: rgb(174, 78, 54);
}

body .page article p > i, i {
  color: rgb(174, 78, 54);
  outline: rgb(174, 78, 54) none 0px;
  text-decoration: rgb(174, 78, 54);
  text-decoration-color: rgb(174, 78, 54);
}

body .page article p > strong, strong {
  color: rgb(174, 78, 54);
  font-weight: 700;
  outline: rgb(174, 78, 54) none 0px;
  text-decoration: rgb(174, 78, 54);
  text-decoration-color: rgb(174, 78, 54);
}

body .text-highlight {
  background-color: rgb(214, 176, 123);
  color: rgb(45, 31, 14);
  outline: rgb(45, 31, 14) none 0px;
  text-decoration: rgb(45, 31, 14);
  text-decoration-color: rgb(45, 31, 14);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

body del {
  color: rgb(61, 46, 26);
  outline: rgb(61, 46, 26) none 0px;
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body p {
  color: rgba(61, 46, 26, 0.7);
  outline: rgba(61, 46, 26, 0.7) none 0px;
  text-decoration: rgba(61, 46, 26, 0.7);
  text-decoration-color: rgba(61, 46, 26, 0.7);
}`,
    links: `body a.external, footer a {
  background-color: rgba(217, 119, 86, 0.08);
  color: rgb(217, 119, 86);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration: rgb(217, 119, 86);
  text-decoration-color: rgb(217, 119, 86);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(217, 119, 86, 0.08);
  color: rgb(217, 119, 86);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration: rgb(217, 119, 86);
  text-decoration-color: rgb(217, 119, 86);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

body a.internal.broken {
  background-color: rgba(217, 119, 86, 0.08);
  color: rgb(217, 119, 86);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration: rgb(217, 119, 86);
  text-decoration-color: rgb(217, 119, 86);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    lists: `body dd {
  color: rgb(61, 46, 26);
}

body dt {
  color: rgb(61, 46, 26);
}

body ol > li {
  color: rgb(61, 46, 26);
}

body ol.overflow {
  background-color: rgb(238, 236, 226);
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body ul > li {
  color: rgb(61, 46, 26);
}

body ul.overflow {
  background-color: rgb(238, 236, 226);
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(217, 119, 86);
  text-decoration: rgb(217, 119, 86);
}

body blockquote {
  background-color: rgba(230, 228, 218, 0.7);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(61, 46, 26);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.03);
}

body td {
  border-top-color: rgb(61, 46, 26);
  border-top-width: 0px;
  color: rgb(61, 46, 26);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body th {
  background-color: rgb(174, 78, 54);
  border-top-left-radius: 12px;
  color: rgb(238, 236, 226);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: rgb(61, 46, 26);
}

body pre > code > [data-line] {
  border-left-color: rgb(217, 119, 86);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(217, 119, 86);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(217, 119, 86);
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
}

body pre > code, pre:has(> code) {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}

body pre:has(> code) {
  background-color: rgb(223, 219, 209);
  border-bottom-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: rgba(217, 119, 86, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(217, 119, 86, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(217, 119, 86, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body figcaption {
  color: rgb(61, 46, 26);
}

body figure {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body img {
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(61, 46, 26);
  border-radius: 12px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body video {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
}

body .footnotes {
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

body .transclude {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body .transclude-inner {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(61, 46, 26, 0.7);
  text-decoration: line-through 2px rgb(174, 78, 54);
  text-decoration-color: rgb(174, 78, 54);
}

body input[type=checkbox] {
  border-bottom-color: rgb(174, 78, 54);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(174, 78, 54);
  border-left-width: 2px;
  border-right-color: rgb(174, 78, 54);
  border-right-width: 2px;
  border-top-color: rgb(174, 78, 54);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 18px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(61, 46, 26);
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: color(srgb 0.679074 0.285291 0.152691);
  border-left-color: color(srgb 0.679074 0.285291 0.152691);
  border-right-color: color(srgb 0.679074 0.285291 0.152691);
  border-top-color: color(srgb 0.679074 0.285291 0.152691);
  gap: 13.2px;
}

body .callout[data-callout="abstract"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="bug"] {
  --callout-color: #c0392b;
  background-color: rgba(192, 57, 43, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="danger"] {
  --callout-color: #c0392b;
  background-color: rgba(192, 57, 43, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="example"] {
  --callout-color: #779088;
  background-color: rgba(119, 144, 136, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(119, 144, 136);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="failure"] {
  --callout-color: #c0392b;
  background-color: rgba(192, 57, 43, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="info"] {
  --callout-color: #d4af37;
  background-color: rgba(212, 175, 55, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(212, 175, 55);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="note"] {
  --callout-color: #d97756;
  background-color: rgba(217, 119, 86, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="question"] {
  --callout-color: #e67e22;
  background-color: rgba(230, 126, 34, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(230, 126, 34);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="quote"] {
  --callout-color: #779088;
  background-color: rgba(119, 144, 136, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(119, 144, 136);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="success"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="tip"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="todo"] {
  --callout-color: #798d5d;
  background-color: rgba(121, 141, 93, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="warning"] {
  --callout-color: #e67e22;
  background-color: rgba(230, 126, 34, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(230, 126, 34);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(61, 46, 26);
}

body .search > .search-container > .search-space {
  background-color: rgba(238, 236, 226, 0.94);
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.08);
  border-right-color: rgba(0, 0, 0, 0.08);
  border-top-color: rgba(0, 0, 0, 0.08);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px 0px, rgba(0, 0, 0, 0.2) 0px 12px 48px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(61, 46, 26);
  outline: rgb(61, 46, 26) none 0px;
  text-decoration: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 119, 86);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(217, 119, 86);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(217, 119, 86, 0.15);
  color: rgb(217, 119, 86);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.08);
  border-right-color: rgba(0, 0, 0, 0.08);
  border-top-color: rgba(0, 0, 0, 0.08);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 228, 218);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(217, 119, 86, 0.15);
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(217, 119, 86);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(217, 119, 86, 0.15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(217, 119, 86);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(217, 119, 86, 0.15);
  border-bottom-color: rgba(219, 120, 87, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body a.internal.tag-link::before {
  color: rgb(61, 46, 26);
}

body h1 {
  color: color(srgb 0.818261 0.349565 0.191739);
}

body h2 {
  color: color(srgb 0.613333 0.35 0.146667);
}

body h2.page-title, h2.page-title a {
  color: rgb(217, 119, 86);
}

body h3 {
  color: color(srgb 0.513333 0.446667 0.2);
}

body h4 {
  color: color(srgb 0.403333 0.47 0.31);
}

body h5 {
  color: color(srgb 0.711127 0.278873 0.427606);
}

body h6 {
  color: color(srgb 0.393968 0.482699 0.454305);
}

body hr {
  border-bottom-color: rgba(210, 207, 197, 0.533);
  border-left-color: rgba(210, 207, 197, 0.533);
  border-right-color: rgba(210, 207, 197, 0.533);
}`,
    scrollbars: `body .callout {
  --callout-color: #d97756;
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}

body ::-webkit-scrollbar {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

body ::-webkit-scrollbar-corner {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}

body ::-webkit-scrollbar-track {
  background: rgb(238, 236, 226) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 236, 226);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 105, 44);
  text-decoration: rgb(184, 105, 44);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 105, 44);
  text-decoration: rgb(184, 105, 44);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(61, 46, 26, 0.7);
  text-decoration: rgba(61, 46, 26, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(61, 46, 26, 0.7);
}`,
    footer: `body footer {
  background-color: rgba(217, 119, 86, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 0px;
  color: rgba(0, 0, 0, 0);
}

body footer ul li a {
  color: rgba(0, 0, 0, 0);
  text-decoration: rgba(0, 0, 0, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(61, 46, 26);
}

body .recent-notes > ul.recent-ul > li {
  background-color: rgba(184, 105, 44, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(61, 46, 26);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 105, 44);
  text-decoration: rgb(184, 105, 44);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 105, 44);
}`,
    listPage: `body li.section-li {
  background-color: rgba(184, 105, 44, 0.12);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body li.section-li > .section .meta {
  color: rgb(184, 105, 44);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 105, 44);
  text-decoration: rgb(184, 105, 44);
}

body ul.section-ul {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(61, 46, 26, 0.7);
}

body .darkmode svg {
  color: rgba(61, 46, 26, 0.7);
  stroke: rgba(61, 46, 26, 0.7);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  color: rgba(61, 46, 26, 0.7);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

body .metadata {
  background-color: rgba(230, 228, 218, 0.7);
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgba(61, 46, 26, 0.7);
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  color: rgba(61, 46, 26, 0.7);
}

body .navigation-progress {
  background-color: rgba(217, 119, 86, 0.2);
}

body .page-header h2.page-title {
  color: rgb(61, 46, 26);
}

body abbr {
  color: rgb(61, 46, 26);
  text-decoration: underline dotted rgb(61, 46, 26);
}

body details {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body input[type=text] {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgba(61, 46, 26, 0.7);
}

body kbd {
  background-color: rgb(245, 239, 224);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-style: solid;
  border-left-color: rgb(61, 46, 26);
  border-left-style: solid;
  border-right-color: rgb(61, 46, 26);
  border-right-style: solid;
  border-top-color: rgb(61, 46, 26);
  border-top-style: solid;
  color: rgb(61, 46, 26);
}

body progress {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

body sub {
  color: rgb(61, 46, 26);
}

body summary {
  color: rgb(61, 46, 26);
}

body sup {
  color: rgb(61, 46, 26);
}`,
  },
};
