import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "terraflow",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "seasonal-themes",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 15;
  --accent-l: 60%;
  --accent-s: 65%;
  --background-primary: var(--color-base-00, #282520);
  --background-primary-rgb: 40, 37, 32;
  --background-secondary: var(--color-base-20, #32302a);
  --background-secondary-alt: var(--color-base-30, #3a3832);
  --background-secondary-rgb: 50, 48, 42;
  --bases-cards-background: var(--background-primary, #282520);
  --bases-group-heading-property-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --bases-table-cell-background-active: var(--background-primary, #282520);
  --bases-table-cell-background-selected: var(--table-selection, hsla(15, 65%, 60%, 0.1));
  --bases-table-header-background: var(--background-primary, #282520);
  --bases-table-header-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --bases-table-summary-background: var(--background-primary, #282520);
  --blockquote-border-color: var(--primary-color, #f0916f);
  --border-heavy: 3px;
  --border-thick: 2px;
  --border-thin: 1px;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1);
  --callout-cite: #a29bfe;
  --callout-cite-rgb: 162, 155, 254;
  --callout-danger: #e74c3c;
  --callout-danger-rgb: 231, 76, 60;
  --callout-example: var(--color-purple-rgb, #95b3aa);
  --callout-example-rgb: 149, 179, 170;
  --callout-info: var(--color-blue-rgb, #e9d5a3);
  --callout-info-rgb: 233, 213, 163;
  --callout-note: #f2a882;
  --callout-note-rgb: 242, 168, 130;
  --callout-quote: #e8dcc6;
  --callout-quote-rgb: 232, 220, 198;
  --callout-success: var(--color-green-rgb, #a8c47a);
  --callout-success-rgb: 168, 196, 122;
  --callout-video: #f2b399;
  --callout-video-rgb: 242, 179, 153;
  --callout-warning: var(--color-orange-rgb, #f39c12);
  --callout-warning-rgb: 243, 156, 18;
  --canvas-background: var(--background-primary, #282520);
  --caret-color: var(--text-normal, #e8dcc6);
  --checkbox-border-color-hover: var(--text-muted, rgba(232, 220, 198, 0.7));
  --checkbox-color: var(--primary-color, #f0916f);
  --checkbox-color-hover: var(--interactive-accent-hover, #e27a5a);
  --checkbox-marker-color: var(--background-primary, #282520);
  --checklist-done-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --code-background: var(--background-primary-alt, #3a3832);
  --code-comment: var(--text-faint, #9c9584);
  --code-function: var(--color-yellow, #f2a882);
  --code-important: var(--color-orange, #e27a5a);
  --code-keyword: var(--color-pink, #8bb5d9);
  --code-normal: var(--text-normal, #e8dcc6);
  --code-property: var(--color-cyan, #a8c47a);
  --code-punctuation: var(--text-muted, rgba(232, 220, 198, 0.7));
  --code-string: var(--color-green, #b5a8d4);
  --code-tag: var(--color-red, #e08ba8);
  --code-value: var(--color-purple, #95b3aa);
  --collapse-icon-color-collapsed: var(--text-accent, #e27a5a);
  --dark: var(--text-normal, var(--color-base-100, #e8dcc6));
  --darkgray: var(--text-normal, var(--color-base-100, #e8dcc6));
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
  --divider-color: var(--background-modifier-border, #4a473e88);
  --divider-color-hover: var(--interactive-accent, #f0916f);
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8);
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2);
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3);
  --editor-max-width: 64ch;
  --emphasis-color: #e27a5a;
  --emphasis-color-light: #f2a882;
  --fast: 0.15s ease;
  --file-header-background: var(--background-primary, #282520);
  --file-header-background-focused: var(--background-primary, #282520);
  --flair-color: var(--text-normal, #e8dcc6);
  --footnote-id-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --glass-border: rgba(255, 255, 255, 0.2);
  --graph-node: var(--text-muted, rgba(232, 220, 198, 0.7));
  --graph-node-focused: var(--text-accent, #e27a5a);
  --graph-text: var(--text-normal, #e8dcc6);
  --gray: var(--text-muted, var(--color-base-70, rgba(232, 220, 198, 0.7)));
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
  --heading-tertiary: #b5a8d4;
  --heading-tertiary-rgb: 181, 168, 212;
  --heading-text-multiplier: .85;
  --height-button: 34px;
  --height-button-sm: 32px;
  --height-input: 38px;
  --highlight-bg: #3a2f20;
  --highlight-bg-dark: #5a4430;
  --highlight-bg-dark-color: #5a4430;
  --highlight-bg-light-color: #f2c088;
  --icon-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --icon-color-active: var(--text-accent, #e27a5a);
  --icon-color-focused: var(--text-normal, #e8dcc6);
  --icon-color-hover: var(--text-muted, rgba(232, 220, 198, 0.7));
  --interactive-accent: var(--primary-color, #f0916f);
  --interactive-accent-hover: var(--primary-color-dark, #e27a5a);
  --interactive-accent-hsl: var(--color-accent-hsl, 15, 65%, 60%);
  --light: var(--background-primary, var(--color-base-00, #282520));
  --lightgray: var(--background-secondary, var(--color-base-20, #32302a));
  --line-normal: 1.6;
  --line-relaxed: 2.0;
  --line-tight: 1.5;
  --link-color: var(--primary-color, #f0916f);
  --link-color-hover: var(--primary-color-dark, #e27a5a);
  --link-external-color: var(--text-accent, #e27a5a);
  --link-external-color-hover: var(--text-accent-hover, hsl(10, 68.25%, 77.4%));
  --link-opacity-hover: .18;
  --link-opacity-normal: .1;
  --link-opacity-unresolved: .05;
  --link-opacity-unresolved-hover: .12;
  --link-unresolved-color: var(--primary-color, #f0916f);
  --list-marker-color-collapsed: var(--text-accent, #e27a5a);
  --list-marker-color-hover: var(--text-muted, rgba(232, 220, 198, 0.7));
  --menu-background: var(--background-secondary, #32302a);
  --metadata-input-text-color: var(--text-normal, #e8dcc6);
  --metadata-label-text-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --metadata-label-text-color-hover: var(--text-muted, rgba(232, 220, 198, 0.7));
  --modal-background: var(--background-primary, #282520);
  --nav-heading-color: var(--text-normal, #e8dcc6);
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(232, 220, 198, 0.7));
  --nav-heading-color-hover: var(--text-normal, #e8dcc6);
  --nav-item-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --nav-item-color-active: var(--text-normal, #e8dcc6);
  --nav-item-color-highlighted: var(--text-accent, #e27a5a);
  --nav-item-color-hover: var(--text-normal, #e8dcc6);
  --nav-item-color-selected: var(--text-normal, #e8dcc6);
  --nav-tag-color-active: var(--text-muted, rgba(232, 220, 198, 0.7));
  --nav-tag-color-hover: var(--text-muted, rgba(232, 220, 198, 0.7));
  --normal: 0.25s ease;
  --opacity-active: 0.12;
  --opacity-border: 0.45;
  --opacity-divider: 0.15;
  --opacity-hover: 0.08;
  --opacity-light-overlay: 0.3;
  --opacity-overlay: 0.2;
  --opacity-subtle: 0.1;
  --outline-item-spacing: .5em;
  --pdf-background: var(--background-primary, #282520);
  --pdf-page-background: var(--background-primary, #282520);
  --pdf-sidebar-background: var(--background-primary, #282520);
  --pill-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --pill-color-hover: var(--text-normal, #e8dcc6);
  --pill-color-remove-hover: var(--text-accent, #e27a5a);
  --primary-color: #f0916f;
  --primary-color-dark: #e27a5a;
  --primary-color-rgb: 240, 145, 111;
  --prompt-background: var(--background-primary, #282520);
  --r1: 6px;
  --r2: 10px;
  --r3: 12px;
  --r4: 16px;
  --radius-pill: 100px;
  --reading-max-width: 64ch;
  --ribbon-background: var(--background-secondary, #32302a);
  --ribbon-background-collapsed: var(--background-primary, #282520);
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s6: 24px;
  --s8: 32px;
  --scrollbar-thumb: rgba(240, 145, 111, 0.35);
  --scrollbar-track: rgba(40, 37, 32, 0.2);
  --search-clear-button-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --search-icon-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --search-result-background: var(--background-primary, #282520);
  --secondary: var(--text-accent, var(--primary-color-dark, #e27a5a));
  --setting-group-heading-color: var(--text-normal, #e8dcc6);
  --setting-items-background: var(--background-secondary, #32302a);
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 6px 18px rgba(0, 0, 0, 0.15);
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(232, 220, 198, 0.7));
  --shiki-code-background: var(--code-background, #3a3832);
  --shiki-code-normal: var(--text-muted, rgba(232, 220, 198, 0.7));
  --shiki-code-punctuation: var(--text-muted, rgba(232, 220, 198, 0.7));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(232, 220, 198, 0.7));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(232, 220, 198, 0.7));
  --slow: 0.3s ease;
  --squircle-btn: 40%;
  --squircle-main: 60%;
  --squircle-soft: 80%;
  --status-bar-background: var(--background-secondary, #32302a);
  --status-bar-border-color: var(--divider-color, #4a473e88);
  --status-bar-text-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --suggestion-background: var(--background-primary, #282520);
  --surface-accent: #4a473e;
  --surface-accent-rgb: 74, 71, 62;
  --surface-dark: #282520;
  --surface-dark-rgb: 40, 37, 32;
  --tab-background-active: var(--background-primary, #282520);
  --tab-bg-inactive: rgba(40, 37, 32, 0.15);
  --tab-bg-inactive-hover: rgba(40, 37, 32, 0.25);
  --tab-container-background: var(--background-secondary, #32302a);
  --tab-outline-color: var(--divider-color, #4a473e88);
  --tab-switcher-background: var(--background-secondary, #32302a);
  --tab-text-color-active: var(--text-muted, rgba(232, 220, 198, 0.7));
  --tab-text-color-focused: var(--text-muted, rgba(232, 220, 198, 0.7));
  --tab-text-color-focused-active: var(--text-muted, rgba(232, 220, 198, 0.7));
  --tab-text-color-focused-active-current: var(--text-normal, #e8dcc6);
  --tab-text-color-focused-highlighted: var(--text-accent, #e27a5a);
  --table-drag-handle-background-active: var(--table-selection-border-color, #f0916f);
  --table-header-color: var(--text-normal, #e8dcc6);
  --table-selection-border-color: var(--interactive-accent, #f0916f);
  --tag-color: var(--text-accent, #e27a5a);
  --tag-color-hover: var(--text-accent, #e27a5a);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(10, 68.25%, 77.4%)));
  --text-accent: var(--primary-color-dark, #e27a5a);
  --text-accent-hover: var(--color-accent-2, hsl(10, 68.25%, 77.4%));
  --text-muted: var(--color-base-70, rgba(232, 220, 198, 0.7));
  --text-normal: var(--color-base-100, #e8dcc6);
  --text-normal-rgb: 232, 220, 198;
  --theme-folder-opacity: .12;
  --titlebar-background: var(--background-secondary, #32302a);
  --titlebar-background-focused: var(--background-secondary-alt, #3a3832);
  --titlebar-text-color: var(--text-muted, rgba(232, 220, 198, 0.7));
  --titlebar-text-color-focused: var(--text-normal, #e8dcc6);
  --transition-bounce: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s;
  --transition-depth: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2), transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --vault-profile-color: var(--text-normal, #e8dcc6);
  --vault-profile-color-hover: var(--vault-profile-color, #e8dcc6);
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
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #32302a);
  background-color: var(--glass-bg, rgba(0, 0, 0, 0));
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(40, 37, 32));
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(74, 71, 62, 0.533);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #32302a);
  background-color: var(--glass-bg, rgba(0, 0, 0, 0));
  border-left-color: rgba(74, 71, 62, 0.533);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body html {
  --border-heavy: 3px;
  --border-thick: 2px;
  --border-thin: 1px;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1);
  --checklist-done-decoration: line-through;
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8);
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2);
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3);
  --editor-max-width: var(--line-width, 64ch);
  --fast: 0.15s ease;
  --file-line-width: var(--line-width, 64ch);
  --glass-border: rgba(255, 255, 255, 0.2);
  --heading-bg-opacity: .2;
  --heading-pad-x: 0.5em;
  --heading-pad-y: 0.2em;
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
  --heading-text-multiplier: .85;
  --height-button: 34px;
  --height-button-sm: 32px;
  --height-input: 38px;
  --layer-status-bar: 1000;
  --line-normal: var(--editor-line-height, 1.6);
  --line-relaxed: 2.0;
  --line-tight: 1.5;
  --link-opacity-hover: .18;
  --link-opacity-normal: .1;
  --link-opacity-unresolved: .05;
  --link-opacity-unresolved-hover: .12;
  --normal: 0.25s ease;
  --opacity-active: 0.12;
  --opacity-border: 0.45;
  --opacity-divider: 0.15;
  --opacity-hover: 0.08;
  --opacity-light-overlay: 0.3;
  --opacity-overlay: 0.2;
  --opacity-subtle: 0.1;
  --outline-item-spacing: .5em;
  --r1: 6px;
  --r2: 10px;
  --r3: 12px;
  --r4: 16px;
  --radius-pill: 100px;
  --reading-max-width: var(--line-width, 64ch);
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s6: 24px;
  --s8: 32px;
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 6px 18px rgba(0, 0, 0, var(--opacity-divider));
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12);
  --slow: 0.3s ease;
  --squircle-btn: 40%;
  --squircle-main: 60%;
  --squircle-soft: 80%;
  --theme-folder-opacity: .12;
  --transition-bounce: 0.3s var(--ease-bounce-md);
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s;
  --transition-depth: box-shadow 0.2s var(--ease-bounce-sm), transform 0.2s var(--ease-bounce-sm);
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--text-normal, rgb(242, 168, 130));
  font-weight: var(--weight-bold, 700);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--text-normal, rgb(242, 168, 130));
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--text-normal, rgb(242, 168, 130));
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--text-normal, rgb(242, 168, 130));
  font-weight: var(--weight-bold, 700);
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: rgb(242, 168, 130);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(var(--highlight-bg-rgb, var(--primary-color-rgb)), 0.34);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
  color: var(--highlight-bg-light-color, rgb(242, 192, 136));
  outline: rgb(242, 192, 136) none 0px;
  text-decoration-color: rgb(242, 192, 136);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="dark"] body del {
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: strike-draw;
  color: var(--emphasis-color-light, rgb(242, 168, 130));
  outline: rgb(242, 168, 130) none 0px;
  text-decoration-color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body footer {
  opacity: 0.5;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(232, 220, 198));
  font-weight: var(--weight-medium, 500);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(226, 122, 90);
  border-radius: 6px;
  border-width: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(226, 122, 90));
  border-color: rgb(226, 122, 90);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgba(232, 220, 198, 0.7));
  outline: rgba(232, 220, 198, 0.7) none 0px;
  text-decoration-color: rgba(232, 220, 198, 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  background-color: rgba(240, 145, 111, 0.08);
  color: var(--callout-color, rgb(240, 145, 111));
  outline: rgb(240, 145, 111) none 0px;
  text-decoration-color: var(--callout-color, var(--primary-color));
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(240, 145, 111, 0.08);
  color: hsl(from var(--callout-color) h 90% 85%);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration-color: var(--callout-color, var(--primary-color));
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: rgba(240, 145, 111, 0.08);
  color: hsl(from var(--callout-color) h 90% 85%);
  outline: rgb(240, 145, 111) none 0px;
  text-decoration-color: var(--callout-color, var(--primary-color));
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body dt {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--link-color-hover, rgb(240, 145, 111));
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(var(--background-secondary-rgb), .8);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(232, 220, 198);
  width: 241.219px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(255, 255, 255, 0.03));
}

html[saved-theme="dark"] body td {
  border-top-color: rgb(232, 220, 198);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(232, 220, 198));
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(226, 122, 90);
  border-top-left-radius: 12px;
  color: var(--table-header-color, rgb(232, 220, 198));
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgba(var(--primary-color-rgb), .1);
  border-bottom-color: rgba(240, 145, 111, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgba(240, 145, 111, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(240, 145, 111, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(240, 145, 111, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: var(--code-normal, rgb(232, 220, 198));
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--background-secondary-alt, rgb(58, 56, 50));
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #3a3832);
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body img {
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

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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
  width: var(--checkbox-size, 18px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(232, 220, 198);
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 37, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 37, 32);
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
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-success, #a8c47a);
  --callout-color-rgb: var(--callout-success-rgb, 168, 196, 122);
  background: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(168, 196, 122, 0.12) linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-danger, #e74c3c);
  --callout-color-rgb: var(--callout-danger-rgb, 231, 76, 60);
  background: radial-gradient(at 100% 100%, rgba(231, 76, 60, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(231, 76, 60, 0.12) linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-danger-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(231, 76, 60, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-danger, #e74c3c);
  --callout-color-rgb: var(--callout-danger-rgb, 231, 76, 60);
  background: radial-gradient(at 100% 100%, rgba(231, 76, 60, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(231, 76, 60, 0.12) linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-danger-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(231, 76, 60, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, #95b3aa);
  --callout-color-rgb: var(--callout-example-rgb, 149, 179, 170);
  background: radial-gradient(at 100% 100%, rgba(149, 179, 170, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(149, 179, 170, 0.12) linear-gradient(135deg, rgba(149, 179, 170, 0.05) 0%, rgba(149, 179, 170, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-example-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(149, 179, 170, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(149, 179, 170, 0.05) 0%, rgba(149, 179, 170, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(149, 179, 170);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-danger, #e74c3c);
  --callout-color-rgb: var(--callout-danger-rgb, 231, 76, 60);
  background: radial-gradient(at 100% 100%, rgba(231, 76, 60, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(231, 76, 60, 0.12) linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-danger-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(231, 76, 60, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(231, 76, 60, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(231, 76, 60);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, #e9d5a3);
  --callout-color-rgb: var(--callout-info-rgb, 233, 213, 163);
  background: radial-gradient(at 100% 100%, rgba(233, 213, 163, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(233, 213, 163, 0.12) linear-gradient(135deg, rgba(233, 213, 163, 0.05) 0%, rgba(233, 213, 163, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-info-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(233, 213, 163, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(233, 213, 163, 0.05) 0%, rgba(233, 213, 163, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(233, 213, 163);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-note, #f2a882);
  --callout-color-rgb: var(--callout-note-rgb, 242, 168, 130);
  background: radial-gradient(at 100% 100%, rgba(242, 168, 130, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(242, 168, 130, 0.12) linear-gradient(135deg, rgba(242, 168, 130, 0.05) 0%, rgba(242, 168, 130, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-note-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(242, 168, 130, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(242, 168, 130, 0.05) 0%, rgba(242, 168, 130, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(242, 168, 130);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-warning, #f39c12);
  --callout-color-rgb: var(--callout-warning-rgb, 243, 156, 18);
  background: radial-gradient(at 100% 100%, rgba(243, 156, 18, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(243, 156, 18, 0.12) linear-gradient(135deg, rgba(243, 156, 18, 0.05) 0%, rgba(243, 156, 18, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-warning-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(243, 156, 18, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(243, 156, 18, 0.05) 0%, rgba(243, 156, 18, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(243, 156, 18);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-example, #95b3aa);
  --callout-color-rgb: var(--callout-example-rgb, 149, 179, 170);
  background: radial-gradient(at 100% 100%, rgba(149, 179, 170, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(149, 179, 170, 0.12) linear-gradient(135deg, rgba(149, 179, 170, 0.05) 0%, rgba(149, 179, 170, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-example-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(149, 179, 170, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(149, 179, 170, 0.05) 0%, rgba(149, 179, 170, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(149, 179, 170);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, #a8c47a);
  --callout-color-rgb: var(--callout-success-rgb, 168, 196, 122);
  background: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(168, 196, 122, 0.12) linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-success, #a8c47a);
  --callout-color-rgb: var(--callout-success-rgb, 168, 196, 122);
  background: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(168, 196, 122, 0.12) linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-success, #a8c47a);
  --callout-color-rgb: var(--callout-success-rgb, 168, 196, 122);
  background: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(168, 196, 122, 0.12) linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(168, 196, 122, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(168, 196, 122, 0.05) 0%, rgba(168, 196, 122, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(168, 196, 122);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="dark"] body .callout[data-callout="video"] {
  --background-modifier-active-hover: hsla(15, 65%, 60%, 0.1);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #282520;
  --background-primary-alt: #242424;
  --background-secondary: #32302a;
  --background-secondary-alt: #3a3832;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #f0916f;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-video, #f2b399);
  --callout-color-rgb: var(--callout-video-rgb, 242, 179, 153);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: #95b3aa;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: #e9d5a3;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: #a8c47a;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: #f39c12;
  --canvas-background: #282520;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e8dcc6;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: rgba(232, 220, 198, 0.7);
  --checkbox-color: #f0916f;
  --checkbox-color-hover: #e27a5a;
  --checkbox-marker-color: #282520;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgba(232, 220, 198, 0.7);
  --clickable-icon-radius: 4px;
  --code-background: #3a3832;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #9c9584;
  --code-function: #f2a882;
  --code-important: #e27a5a;
  --code-keyword: #8bb5d9;
  --code-normal: #e8dcc6;
  --code-operator: #fb464c;
  --code-property: #a8c47a;
  --code-punctuation: rgba(232, 220, 198, 0.7);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #b5a8d4;
  --code-tag: #e08ba8;
  --code-value: #95b3aa;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: #e27a5a;
  --color-accent: hsl(15, 65%, 60%);
  --color-accent-1: hsl(12, 66.3%, 69%);
  --color-accent-2: hsl(10, 68.25%, 77.4%);
  --color-accent-hsl: 15, 65%, 60%;
  --divider-color: #4a473e88;
  --divider-color-hover: #f0916f;
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e8dcc6;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: rgba(232, 220, 198, 0.7);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #e27a5a;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #e8dcc6;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --hr-color: #363636;
  --interactive-accent: #f0916f;
  --interactive-accent-hover: #e27a5a;
  --interactive-accent-hsl: 15, 65%, 60%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --layer-status-bar: 15;
  --link-color: #f0916f;
  --link-color-hover: #e27a5a;
  --link-external-color: #e27a5a;
  --link-external-color-hover: hsl(10, 68.25%, 77.4%);
  --link-unresolved-color: #f0916f;
  --link-unresolved-decoration-color: hsla(15, 65%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #32302a;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #282520;
  --pdf-page-background: #282520;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #282520;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: rgba(232, 220, 198, 0.7);
  --search-icon-color: rgba(232, 220, 198, 0.7);
  --search-result-background: #282520;
  --setting-group-heading-color: #e8dcc6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #32302a;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgba(232, 220, 198, 0.7);
  --shiki-code-background: #3a3832;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: rgba(232, 220, 198, 0.7);
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: rgba(232, 220, 198, 0.7);
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: rgba(232, 220, 198, 0.7);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: rgba(232, 220, 198, 0.7);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #282520;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #282520;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #4a473e88;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #32302a;
  --tab-switcher-menubar-background: linear-gradient(to top, #32302a, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(15, 65%, 60%);
  --tab-text-color: #666666;
  --tab-text-color-active: rgba(232, 220, 198, 0.7);
  --tab-text-color-focused: rgba(232, 220, 198, 0.7);
  --tab-text-color-focused-active: rgba(232, 220, 198, 0.7);
  --tab-text-color-focused-active-current: #e8dcc6;
  --tab-text-color-focused-highlighted: #e27a5a;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #f0916f;
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #e8dcc6;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(15, 65%, 60%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #f0916f;
  --table-text-size: 16px;
  --tag-background: hsla(15, 65%, 60%, 0.1);
  --tag-background-hover: hsla(15, 65%, 60%, 0.2);
  --tag-border-color: hsla(15, 65%, 60%, 0.15);
  --tag-border-color-hover: hsla(15, 65%, 60%, 0.15);
  --tag-color: #e27a5a;
  --tag-color-hover: #e27a5a;
  --tag-size: 0.875em;
  --text-accent: #e27a5a;
  --text-accent-hover: hsl(10, 68.25%, 77.4%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: rgba(232, 220, 198, 0.7);
  --text-normal: #e8dcc6;
  --text-selection: #4a3d2e;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-video-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(242, 179, 153, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(242, 179, 153, 0.05) 0%, rgba(242, 179, 153, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 0px;
  border-left-color: rgb(242, 179, 153);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-right-width: 0px;
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  box-shadow: var(--depth-2, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px, rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.15) 0px 8px 16px 0px);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--weight-semibold, 400);
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
  scrollbar-color: rgba(240, 145, 111, 0.35) rgba(40, 37, 32, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, #f39c12);
  --callout-color-rgb: var(--callout-warning-rgb, 243, 156, 18);
  background: radial-gradient(at 100% 100%, rgba(243, 156, 18, 0.25) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(243, 156, 18, 0.12) linear-gradient(135deg, rgba(243, 156, 18, 0.05) 0%, rgba(243, 156, 18, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-warning-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(243, 156, 18, 0.25) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(243, 156, 18, 0.05) 0%, rgba(243, 156, 18, 0.1) 100%);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(243, 156, 18);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: #f2b399;
  border-bottom-color: color(srgb 0.984041 0.906701 0.874783);
  border-left-color: color(srgb 0.984041 0.906701 0.874783);
  border-right-color: color(srgb 0.984041 0.906701 0.874783);
  border-top-color: color(srgb 0.984041 0.906701 0.874783);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.984041 0.906701 0.874783));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .35);
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
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

html[saved-theme="dark"] body .callout[data-callout="video"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5'/%3E%3Crect x='2' y='6' width='14' height='12' rx='2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-normal, rgb(232, 220, 198));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: var(--shadow-4), 0 12px 48px rgba(0, 0, 0, 0.5);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(232, 220, 198);
  outline: rgb(232, 220, 198) none 0px;
  text-decoration-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--primary-color, rgb(240, 145, 111));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(240, 145, 111);
  border-top-color: rgb(240, 145, 111);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--primary-color, rgb(240, 145, 111));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(var(--primary-color-rgb), .2);
  color: var(--primary-color, rgb(240, 145, 111));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(50, 48, 42);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(var(--primary-color-rgb), .2);
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(240, 145, 111);
  border-right-color: rgb(240, 145, 111);
  border-top-color: rgb(240, 145, 111);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--primary-color, rgb(240, 145, 111));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(var(--primary-color-rgb), .2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--primary-color, rgb(240, 145, 111));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(15, 65%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(15, 65%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(15, 65%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(15, 65%, 60%, 0.15));
  --pill-color: var(--tag-color, #e27a5a);
  --pill-color-hover: var(--tag-color-hover, #e27a5a);
  --pill-color-remove: var(--tag-color, #e27a5a);
  --pill-color-remove-hover: var(--tag-color-hover, #e27a5a);
  background-color: rgba(var(--primary-color-rgb), .18);
  border-bottom-color: rgba(219, 120, 87, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body h1 {
  --scale: var(--heading-scale-1, 1.25);
  --scale-x: var(--heading-scale-x-1, 1.6);
  color: hsl(from var(--heading-primary) h s calc(l * var(--heading-text-multiplier)));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--primary-color, rgb(240, 145, 111));
}

html[saved-theme="dark"] body h2 {
  --scale: var(--heading-scale-2, 1.1);
  --scale-x: var(--heading-scale-x-2, 1.5);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--primary-color, rgb(240, 145, 111));
}

html[saved-theme="dark"] body h3 {
  --scale: var(--heading-scale-3, 1.0);
  --scale-x: var(--heading-scale-x-3, 1.5);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  --scale: var(--heading-scale-4, 0.8);
  --scale-x: var(--heading-scale-x-4, 1.2);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  --scale: var(--heading-scale-5, 0.75);
  --scale-x: var(--heading-scale-x-5, 1.2);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  --scale: var(--heading-scale-6, 0.6);
  --scale-x: var(--heading-scale-x-6, 1.1);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(74, 71, 62, 0.533);
  border-left-color: rgba(74, 71, 62, 0.533);
  border-right-color: rgba(74, 71, 62, 0.533);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-note, #f2a882);
  --callout-color-rgb: var(--callout-note-rgb, 242, 168, 130);
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(242, 168, 130);
  border-left-width: 3px;
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(139, 168, 145));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(139, 168, 145));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(232, 220, 198);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--icon-color, rgba(232, 220, 198, 0.7));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(var(--primary-color-rgb), .2);
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
  color: var(--text-muted, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  --nav-collapse-icon-color: var(--folder-text-color, #8ba891);
  --nav-item-color: var(--folder-text-color, #8ba891);
  --nav-item-color-hover: var(--folder-text-color, #8ba891);
  background-color: var(--folder-color, rgba(139, 168, 145, 0.12));
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

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(139, 168, 145));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 168, 145);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  --nav-collapse-icon-color: var(--folder-text-color, #8ba891);
  --nav-item-color: var(--folder-text-color, #8ba891);
  --nav-item-color-hover: var(--folder-text-color, #8ba891);
  background-color: var(--folder-color, rgba(139, 168, 145, 0.12));
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(139, 168, 145);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(139, 168, 145));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-muted, rgba(232, 220, 198, 0.7));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(232, 220, 198, 0.7);
  stroke: rgba(232, 220, 198, 0.7);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  color: rgba(232, 220, 198, 0.7);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgba(var(--primary-color-rgb), .08);
  color: var(--text-normal, rgb(232, 220, 198));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(50, 48, 42));
  border-color: rgb(232, 220, 198);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(226, 122, 90);
  color: var(--table-header-color, rgb(232, 220, 198));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: rgba(var(--primary-color-rgb), .05);
  border-bottom-color: rgba(240, 145, 111, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(240, 145, 111, 0.15);
  border-right-color: rgba(240, 145, 111, 0.15);
  border-top-color: rgba(240, 145, 111, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, rgba(232, 220, 198, 0.7));
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgba(var(--primary-color-rgb), .05);
  border-color: rgba(240, 145, 111, 0.15);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(15, 65%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(15, 65%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(15, 65%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(15, 65%, 60%, 0.15));
  --pill-color: var(--tag-color, #e27a5a);
  --pill-color-hover: var(--tag-color-hover, #e27a5a);
  --pill-color-remove: var(--tag-color, #e27a5a);
  --pill-color-remove-hover: var(--tag-color-hover, #e27a5a);
  background-color: rgba(var(--primary-color-rgb), .18);
  border-radius: 8px;
  color: var(--pill-color, rgb(226, 122, 90));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(232, 220, 198, 0.7);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(40, 37, 32));
  color: var(--text-normal, rgb(232, 220, 198));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(50, 48, 42));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(232, 220, 198);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(var(--primary-color-rgb), .2);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(232, 220, 198));
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(232, 220, 198, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(232, 220, 198, 0.7);
  border-right-color: rgba(232, 220, 198, 0.7);
  border-top-color: rgba(232, 220, 198, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-normal, rgba(232, 220, 198, 0.7));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(58, 56, 50));
  border-bottom-color: rgb(232, 220, 198);
  border-bottom-style: solid;
  border-left-color: rgb(232, 220, 198);
  border-left-style: solid;
  border-right-color: rgb(232, 220, 198);
  border-right-style: solid;
  border-top-color: rgb(232, 220, 198);
  border-top-style: solid;
  color: var(--code-normal, rgb(232, 220, 198));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(232, 220, 198);
  border-left-color: rgb(232, 220, 198);
  border-right-color: rgb(232, 220, 198);
  border-top-color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body sub {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body summary {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body sup {
  color: rgb(232, 220, 198);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(240, 145, 111, 0.08));
  border-bottom-color: rgb(240, 145, 111);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--link-color-hover, rgb(240, 145, 111));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 15;
  --accent-l: 60%;
  --accent-s: 65%;
  --background-primary: var(--color-base-00, #eeece2);
  --background-primary-rgb: 238, 236, 226;
  --background-secondary: var(--color-base-20, #e6e4da);
  --background-secondary-alt: var(--color-base-05, #dfdbd1);
  --background-secondary-rgb: 230, 228, 218;
  --bases-cards-background: var(--background-primary, #eeece2);
  --bases-group-heading-property-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --bases-table-cell-background-active: var(--background-primary, #eeece2);
  --bases-table-cell-background-selected: var(--table-selection, hsla(15, 65%, 60%, 0.1));
  --bases-table-header-background: var(--background-primary, #eeece2);
  --bases-table-header-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --bases-table-summary-background: var(--background-primary, #eeece2);
  --blockquote-border-color: var(--primary-color, #d97756);
  --border-heavy: 3px;
  --border-thick: 2px;
  --border-thin: 1px;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1);
  --callout-cite: #573d84;
  --callout-cite-rgb: 87, 61, 132;
  --callout-danger: #c0392b;
  --callout-danger-rgb: 192, 57, 43;
  --callout-example: var(--color-purple-rgb, #779088);
  --callout-example-rgb: 119, 144, 136;
  --callout-info: var(--color-blue-rgb, #d4af37);
  --callout-info-rgb: 212, 175, 55;
  --callout-note: #d97756;
  --callout-note-rgb: 217, 119, 86;
  --callout-quote: #b0a483;
  --callout-quote-rgb: 176, 164, 131;
  --callout-success: var(--color-green-rgb, #798d5d);
  --callout-success-rgb: 121, 141, 93;
  --callout-video: #a67c52;
  --callout-video-rgb: 166, 124, 82;
  --callout-warning: var(--color-orange-rgb, #e67e22);
  --callout-warning-rgb: 230, 126, 34;
  --canvas-background: var(--background-primary, #eeece2);
  --caret-color: var(--text-normal, #3d2e1a);
  --checkbox-border-color-hover: var(--text-muted, rgba(61, 46, 26, 0.7));
  --checkbox-color: var(--primary-color, #d97756);
  --checkbox-color-hover: var(--interactive-accent-hover, #ae4e36);
  --checkbox-marker-color: var(--background-primary, #eeece2);
  --checklist-done-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --code-background: var(--background-primary-alt, #f5efe0);
  --code-comment: var(--text-faint, #707592);
  --code-function: var(--color-yellow, #d97756);
  --code-important: var(--color-orange, #ae4e36);
  --code-keyword: var(--color-pink, #6a97bb);
  --code-normal: var(--text-normal, #3d2e1a);
  --code-property: var(--color-cyan, #798d5d);
  --code-punctuation: var(--text-muted, rgba(61, 46, 26, 0.7));
  --code-string: var(--color-green, #8f8ca6);
  --code-tag: var(--color-red, #c36686);
  --code-value: var(--color-purple, #779088);
  --collapse-icon-color-collapsed: var(--text-accent, #ae4e36);
  --dark: var(--text-normal, var(--color-base-100, #3d2e1a));
  --darkgray: var(--text-normal, var(--color-base-100, #3d2e1a));
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
  --divider-color: var(--background-modifier-border, #d2cfc588);
  --divider-color-hover: var(--interactive-accent, #d97756);
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8);
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2);
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3);
  --editor-max-width: 64ch;
  --emphasis-color: #ae4e36;
  --emphasis-color-light: #d97756;
  --fast: 0.15s ease;
  --file-header-background: var(--background-primary, #eeece2);
  --file-header-background-focused: var(--background-primary, #eeece2);
  --flair-color: var(--text-normal, #3d2e1a);
  --footnote-id-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --glass-border: rgba(255, 255, 255, 0.2);
  --graph-node: var(--text-muted, rgba(61, 46, 26, 0.7));
  --graph-node-focused: var(--text-accent, #ae4e36);
  --graph-text: var(--text-normal, #3d2e1a);
  --gray: var(--text-muted, var(--color-base-70, rgba(61, 46, 26, 0.7)));
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
  --heading-tertiary: #9a863c;
  --heading-tertiary-rgb: 154, 134, 60;
  --heading-text-multiplier: .85;
  --height-button: 34px;
  --height-button-sm: 32px;
  --height-input: 38px;
  --highlight-bg: #d6b07b;
  --highlight-bg-dark: #c9a772;
  --highlight-bg-dark-color: #2d1f0e;
  --highlight-bg-rgb: 232, 200, 154;
  --icon-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --icon-color-active: var(--text-accent, #ae4e36);
  --icon-color-focused: var(--text-normal, #3d2e1a);
  --icon-color-hover: var(--text-muted, rgba(61, 46, 26, 0.7));
  --interactive-accent: var(--primary-color, #d97756);
  --interactive-accent-hover: var(--primary-color-dark, #ae4e36);
  --interactive-accent-hsl: var(--color-accent-hsl, 15, 65%, 60%);
  --light: var(--background-primary, var(--color-base-00, #eeece2));
  --lightgray: var(--background-secondary, var(--color-base-20, #e6e4da));
  --line-normal: 1.6;
  --line-relaxed: 2.0;
  --line-tight: 1.5;
  --link-color: var(--primary-color, #d97756);
  --link-color-hover: var(--primary-color-dark, #ae4e36);
  --link-external-color: var(--text-accent, #ae4e36);
  --link-external-color-hover: var(--text-accent-hover, hsl(12, 66.3%, 69%));
  --link-opacity-hover: .18;
  --link-opacity-normal: .1;
  --link-opacity-unresolved: .05;
  --link-opacity-unresolved-hover: .12;
  --link-unresolved-color: var(--primary-color, #d97756);
  --list-marker-color-collapsed: var(--text-accent, #ae4e36);
  --list-marker-color-hover: var(--text-muted, rgba(61, 46, 26, 0.7));
  --menu-background: var(--background-secondary, #e6e4da);
  --metadata-input-text-color: var(--text-normal, #3d2e1a);
  --metadata-label-text-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --metadata-label-text-color-hover: var(--text-muted, rgba(61, 46, 26, 0.7));
  --modal-background: var(--background-primary, #eeece2);
  --nav-heading-color: var(--text-normal, #3d2e1a);
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(61, 46, 26, 0.7));
  --nav-heading-color-hover: var(--text-normal, #3d2e1a);
  --nav-item-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --nav-item-color-active: var(--text-normal, #3d2e1a);
  --nav-item-color-highlighted: var(--text-accent, #ae4e36);
  --nav-item-color-hover: var(--text-normal, #3d2e1a);
  --nav-item-color-selected: var(--text-normal, #3d2e1a);
  --nav-tag-color-active: var(--text-muted, rgba(61, 46, 26, 0.7));
  --nav-tag-color-hover: var(--text-muted, rgba(61, 46, 26, 0.7));
  --normal: 0.25s ease;
  --opacity-active: 0.12;
  --opacity-border: 0.45;
  --opacity-divider: 0.15;
  --opacity-hover: 0.08;
  --opacity-light-overlay: 0.3;
  --opacity-overlay: 0.2;
  --opacity-subtle: 0.1;
  --outline-item-spacing: .5em;
  --pdf-background: var(--background-primary, #eeece2);
  --pdf-page-background: var(--background-primary, #eeece2);
  --pdf-sidebar-background: var(--background-primary, #eeece2);
  --pill-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --pill-color-hover: var(--text-normal, #3d2e1a);
  --pill-color-remove-hover: var(--text-accent, #ae4e36);
  --primary-color: #d97756;
  --primary-color-dark: #ae4e36;
  --primary-color-rgb: 217, 119, 86;
  --prompt-background: var(--background-primary, #eeece2);
  --r1: 6px;
  --r2: 10px;
  --r3: 12px;
  --r4: 16px;
  --radius-pill: 100px;
  --raised-background: var(--blur-background, color-mix(in srgb, #eeece2 65%, transparent) linear-gradient(#eeece2, color-mix(in srgb, #eeece2 65%, transparent)));
  --reading-max-width: 64ch;
  --ribbon-background: var(--background-secondary, #e6e4da);
  --ribbon-background-collapsed: var(--background-primary, #eeece2);
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s6: 24px;
  --s8: 32px;
  --scrollbar-thumb: rgba(217, 119, 86, 0.35);
  --scrollbar-track: rgba(245, 239, 224, 0.2);
  --search-clear-button-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --search-icon-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --search-result-background: var(--background-primary, #eeece2);
  --secondary: var(--text-accent, var(--primary-color-dark, #ae4e36));
  --setting-group-heading-color: var(--text-normal, #3d2e1a);
  --setting-items-background: var(--background-secondary, #e6e4da);
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 6px 18px rgba(0, 0, 0, 0.15);
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(61, 46, 26, 0.7));
  --shiki-code-background: var(--code-background, #f5efe0);
  --shiki-code-normal: var(--text-muted, rgba(61, 46, 26, 0.7));
  --shiki-code-punctuation: var(--text-muted, rgba(61, 46, 26, 0.7));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(61, 46, 26, 0.7));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(61, 46, 26, 0.7));
  --slow: 0.3s ease;
  --squircle-btn: 40%;
  --squircle-main: 60%;
  --squircle-soft: 80%;
  --status-bar-background: var(--background-secondary, #e6e4da);
  --status-bar-border-color: var(--divider-color, #d2cfc588);
  --status-bar-text-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --suggestion-background: var(--background-primary, #eeece2);
  --surface-accent: #e8e6dc;
  --surface-accent-rgb: 232, 230, 220;
  --surface-dark: #36342e;
  --surface-dark-rgb: 54, 52, 46;
  --tab-background-active: var(--background-primary, #eeece2);
  --tab-bg-inactive: rgba(245, 239, 224, 0.15);
  --tab-bg-inactive-hover: rgba(245, 239, 224, 0.25);
  --tab-container-background: var(--background-secondary, #e6e4da);
  --tab-outline-color: var(--divider-color, #d2cfc588);
  --tab-switcher-background: var(--background-secondary, #e6e4da);
  --tab-text-color-active: var(--text-muted, rgba(61, 46, 26, 0.7));
  --tab-text-color-focused: var(--text-muted, rgba(61, 46, 26, 0.7));
  --tab-text-color-focused-active: var(--text-muted, rgba(61, 46, 26, 0.7));
  --tab-text-color-focused-active-current: var(--text-normal, #3d2e1a);
  --tab-text-color-focused-highlighted: var(--text-accent, #ae4e36);
  --table-drag-handle-background-active: var(--table-selection-border-color, #d97756);
  --table-header-color: var(--text-normal, #3d2e1a);
  --table-selection-border-color: var(--interactive-accent, #d97756);
  --tag-color: var(--text-accent, #ae4e36);
  --tag-color-hover: var(--text-accent, #ae4e36);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(12, 66.3%, 69%)));
  --text-accent: var(--primary-color-dark, #ae4e36);
  --text-accent-hover: var(--color-accent-2, hsl(12, 66.3%, 69%));
  --text-muted: var(--color-base-70, rgba(61, 46, 26, 0.7));
  --text-normal: var(--color-base-100, #3d2e1a);
  --text-normal-rgb: 61, 46, 26;
  --theme-folder-opacity: .12;
  --titlebar-background: var(--background-secondary, #e6e4da);
  --titlebar-background-focused: var(--background-secondary-alt, #dfdbd1);
  --titlebar-text-color: var(--text-muted, rgba(61, 46, 26, 0.7));
  --titlebar-text-color-focused: var(--text-normal, #3d2e1a);
  --transition-bounce: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s;
  --transition-depth: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2), transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --vault-profile-color: var(--text-normal, #3d2e1a);
  --vault-profile-color-hover: var(--vault-profile-color, #3d2e1a);
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
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #e6e4da);
  background-color: var(--glass-bg, rgba(0, 0, 0, 0));
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(238, 236, 226));
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(210, 207, 197, 0.533);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #e6e4da);
  background-color: var(--glass-bg, rgba(0, 0, 0, 0));
  border-left-color: rgba(210, 207, 197, 0.533);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body html {
  --border-heavy: 3px;
  --border-thick: 2px;
  --border-thin: 1px;
  --bounce: 0.25s cubic-bezier(.34, 1.15, .64, 1);
  --checklist-done-decoration: line-through;
  --ease-bounce-lg: cubic-bezier(0.175, 0.885, 0.32, 1.8);
  --ease-bounce-md: cubic-bezier(0.175, 0.885, 0.32, 1.5);
  --ease-bounce-sm: cubic-bezier(0.175, 0.885, 0.32, 1.2);
  --ease-bounce-xl: cubic-bezier(0.175, 0.885, 0.32, 2.2);
  --ease-overshoot: cubic-bezier(0.68, -0.3, 0.32, 1.3);
  --editor-max-width: var(--line-width, 64ch);
  --fast: 0.15s ease;
  --file-line-width: var(--line-width, 64ch);
  --glass-border: rgba(255, 255, 255, 0.2);
  --heading-bg-opacity: .2;
  --heading-pad-x: 0.5em;
  --heading-pad-y: 0.2em;
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
  --heading-text-multiplier: .85;
  --height-button: 34px;
  --height-button-sm: 32px;
  --height-input: 38px;
  --layer-status-bar: 1000;
  --line-normal: var(--editor-line-height, 1.6);
  --line-relaxed: 2.0;
  --line-tight: 1.5;
  --link-opacity-hover: .18;
  --link-opacity-normal: .1;
  --link-opacity-unresolved: .05;
  --link-opacity-unresolved-hover: .12;
  --normal: 0.25s ease;
  --opacity-active: 0.12;
  --opacity-border: 0.45;
  --opacity-divider: 0.15;
  --opacity-hover: 0.08;
  --opacity-light-overlay: 0.3;
  --opacity-overlay: 0.2;
  --opacity-subtle: 0.1;
  --outline-item-spacing: .5em;
  --r1: 6px;
  --r2: 10px;
  --r3: 12px;
  --r4: 16px;
  --radius-pill: 100px;
  --reading-max-width: var(--line-width, 64ch);
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s6: 24px;
  --s8: 32px;
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-2: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 6px 18px rgba(0, 0, 0, var(--opacity-divider));
  --shadow-4: 0 4px 12px rgba(0, 0, 0, 0.12);
  --slow: 0.3s ease;
  --squircle-btn: 40%;
  --squircle-main: 60%;
  --squircle-soft: 80%;
  --theme-folder-opacity: .12;
  --transition-bounce: 0.3s var(--ease-bounce-md);
  --transition-callout-link: transform 0.18s cubic-bezier(.4, 0, .2, 1), opacity 0.15s cubic-bezier(.4, 0, .2, 1), background-color 0.18s, color 0.18s;
  --transition-depth: box-shadow 0.2s var(--ease-bounce-sm), transform 0.2s var(--ease-bounce-sm);
  --transition-ui: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--text-normal, rgb(174, 78, 54));
  font-weight: var(--weight-bold, 700);
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--text-normal, rgb(174, 78, 54));
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--text-normal, rgb(174, 78, 54));
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--text-normal, rgb(174, 78, 54));
  font-weight: var(--weight-bold, 700);
  outline: rgb(174, 78, 54) none 0px;
  text-decoration-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(var(--highlight-bg-rgb, var(--primary-color-rgb)), 0.34);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  color: var(--highlight-bg-light-color, rgb(45, 31, 14));
  outline: rgb(45, 31, 14) none 0px;
  text-decoration-color: rgb(45, 31, 14);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="light"] body del {
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: strike-draw;
  color: hsl(from var(--callout-color) h s calc(l * 1.1));
  outline: rgb(61, 46, 26) none 0px;
  text-decoration-color: hsl(from var(--callout-color) h s calc(l * 1.1));
}

html[saved-theme="light"] body footer {
  opacity: 0.5;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(61, 46, 26));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(174, 78, 54);
  border-radius: 6px;
  border-width: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(174, 78, 54));
  border-color: rgb(174, 78, 54);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgba(61, 46, 26, 0.7));
  outline: rgba(61, 46, 26, 0.7) none 0px;
  text-decoration-color: rgba(61, 46, 26, 0.7);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  background-color: rgba(217, 119, 86, 0.08);
  color: var(--callout-color, rgb(217, 119, 86));
  outline: rgb(217, 119, 86) none 0px;
  text-decoration-color: var(--callout-color, var(--primary-color));
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(217, 119, 86, 0.08);
  color: hsl(from var(--callout-color) h 90% 85%);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration-color: var(--callout-color, var(--primary-color));
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

html[saved-theme="light"] body a.internal-link.broken {
  background-color: rgba(217, 119, 86, 0.08);
  color: hsl(from var(--callout-color) h 90% 85%);
  outline: rgb(217, 119, 86) none 0px;
  text-decoration-color: var(--callout-color, var(--primary-color));
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body dt {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--link-color-hover, rgb(217, 119, 86));
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(var(--background-secondary-rgb), .7);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body table {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(61, 46, 26);
  width: 241.219px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(0, 0, 0, 0.03));
}

html[saved-theme="light"] body td {
  border-top-color: rgb(61, 46, 26);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(61, 46, 26));
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  background-color: rgb(174, 78, 54);
  border-top-left-radius: 12px;
  color: var(--table-header-color, rgb(238, 236, 226));
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgba(var(--primary-color-rgb), .1);
  border-bottom-color: rgba(217, 119, 86, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgba(217, 119, 86, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(217, 119, 86, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(217, 119, 86, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: var(--code-normal, rgb(61, 46, 26));
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(var(--primary-color-rgb), .2);
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f5efe0);
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body img {
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

html[saved-theme="light"] body video {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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
  width: var(--checkbox-size, 18px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(61, 46, 26);
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(238, 236, 226);
  color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-success, #798d5d);
  --callout-color-rgb: var(--callout-success-rgb, 121, 141, 93);
  background: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(121, 141, 93, 0.12) linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-danger, #c0392b);
  --callout-color-rgb: var(--callout-danger-rgb, 192, 57, 43);
  background: radial-gradient(at 100% 100%, rgba(192, 57, 43, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(192, 57, 43, 0.12) linear-gradient(135deg, rgba(192, 57, 43, 0.01) 0%, rgba(192, 57, 43, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-danger-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(192, 57, 43, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(192, 57, 43, 0.01) 0%, rgba(192, 57, 43, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-danger, #c0392b);
  --callout-color-rgb: var(--callout-danger-rgb, 192, 57, 43);
  background: radial-gradient(at 100% 100%, rgba(192, 57, 43, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(192, 57, 43, 0.12) linear-gradient(135deg, rgba(192, 57, 43, 0.01) 0%, rgba(192, 57, 43, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-danger-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(192, 57, 43, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(192, 57, 43, 0.01) 0%, rgba(192, 57, 43, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, #779088);
  --callout-color-rgb: var(--callout-example-rgb, 119, 144, 136);
  background: radial-gradient(at 100% 100%, rgba(119, 144, 136, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(119, 144, 136, 0.12) linear-gradient(135deg, rgba(119, 144, 136, 0.01) 0%, rgba(119, 144, 136, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-example-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(119, 144, 136, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(119, 144, 136, 0.01) 0%, rgba(119, 144, 136, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(119, 144, 136);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-danger, #c0392b);
  --callout-color-rgb: var(--callout-danger-rgb, 192, 57, 43);
  background: radial-gradient(at 100% 100%, rgba(192, 57, 43, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(192, 57, 43, 0.12) linear-gradient(135deg, rgba(192, 57, 43, 0.01) 0%, rgba(192, 57, 43, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-danger-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(192, 57, 43, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(192, 57, 43, 0.01) 0%, rgba(192, 57, 43, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(192, 57, 43);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, #d4af37);
  --callout-color-rgb: var(--callout-info-rgb, 212, 175, 55);
  background: radial-gradient(at 100% 100%, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(212, 175, 55, 0.12) linear-gradient(135deg, rgba(212, 175, 55, 0.01) 0%, rgba(212, 175, 55, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-info-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(212, 175, 55, 0.01) 0%, rgba(212, 175, 55, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(212, 175, 55);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-note, #d97756);
  --callout-color-rgb: var(--callout-note-rgb, 217, 119, 86);
  background: radial-gradient(at 100% 100%, rgba(217, 119, 86, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(217, 119, 86, 0.12) linear-gradient(135deg, rgba(217, 119, 86, 0.01) 0%, rgba(217, 119, 86, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-note-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(217, 119, 86, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(217, 119, 86, 0.01) 0%, rgba(217, 119, 86, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-warning, #e67e22);
  --callout-color-rgb: var(--callout-warning-rgb, 230, 126, 34);
  background: radial-gradient(at 100% 100%, rgba(230, 126, 34, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(230, 126, 34, 0.12) linear-gradient(135deg, rgba(230, 126, 34, 0.01) 0%, rgba(230, 126, 34, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-warning-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(230, 126, 34, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(230, 126, 34, 0.01) 0%, rgba(230, 126, 34, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(230, 126, 34);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-example, #779088);
  --callout-color-rgb: var(--callout-example-rgb, 119, 144, 136);
  background: radial-gradient(at 100% 100%, rgba(119, 144, 136, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(119, 144, 136, 0.12) linear-gradient(135deg, rgba(119, 144, 136, 0.01) 0%, rgba(119, 144, 136, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-example-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(119, 144, 136, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(119, 144, 136, 0.01) 0%, rgba(119, 144, 136, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(119, 144, 136);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, #798d5d);
  --callout-color-rgb: var(--callout-success-rgb, 121, 141, 93);
  background: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(121, 141, 93, 0.12) linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-success, #798d5d);
  --callout-color-rgb: var(--callout-success-rgb, 121, 141, 93);
  background: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(121, 141, 93, 0.12) linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-success, #798d5d);
  --callout-color-rgb: var(--callout-success-rgb, 121, 141, 93);
  background: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(121, 141, 93, 0.12) linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-success-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(121, 141, 93, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(121, 141, 93, 0.01) 0%, rgba(121, 141, 93, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(121, 141, 93);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
}

html[saved-theme="light"] body .callout[data-callout="video"] {
  --background-modifier-active-hover: hsla(15, 65%, 60%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #eeece2;
  --background-primary-alt: #fafafa;
  --background-secondary: #e6e4da;
  --background-secondary-alt: #dfdbd1;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #d97756;
  --blur-background: color-mix(in srgb, #eeece2 65%, transparent) linear-gradient(#eeece2, color-mix(in srgb, #eeece2 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-video, #a67c52);
  --callout-color-rgb: var(--callout-video-rgb, 166, 124, 82);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: #779088;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: #d4af37;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: #798d5d;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: #e67e22;
  --canvas-background: #eeece2;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #3d2e1a;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: rgba(61, 46, 26, 0.7);
  --checkbox-color: #d97756;
  --checkbox-color-hover: #ae4e36;
  --checkbox-marker-color: #eeece2;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgba(61, 46, 26, 0.7);
  --clickable-icon-radius: 4px;
  --code-background: #f5efe0;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #707592;
  --code-function: #d97756;
  --code-important: #ae4e36;
  --code-keyword: #6a97bb;
  --code-normal: #3d2e1a;
  --code-operator: #e93147;
  --code-property: #798d5d;
  --code-punctuation: rgba(61, 46, 26, 0.7);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #8f8ca6;
  --code-tag: #c36686;
  --code-value: #779088;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: #ae4e36;
  --color-accent: hsl(15, 65%, 60%);
  --color-accent-1: hsl(14, 65.65%, 64.5%);
  --color-accent-2: hsl(12, 66.3%, 69%);
  --color-accent-hsl: 15, 65%, 60%;
  --divider-color: #d2cfc588;
  --divider-color-hover: #d97756;
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #3d2e1a;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: rgba(61, 46, 26, 0.7);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: #ae4e36;
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #3d2e1a;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: #d97756;
  --interactive-accent-hover: #ae4e36;
  --interactive-accent-hsl: 15, 65%, 60%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --layer-status-bar: 15;
  --link-color: #d97756;
  --link-color-hover: #ae4e36;
  --link-external-color: #ae4e36;
  --link-external-color-hover: hsl(12, 66.3%, 69%);
  --link-unresolved-color: #d97756;
  --link-unresolved-decoration-color: hsla(15, 65%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e6e4da;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #eeece2;
  --pdf-page-background: #eeece2;
  --pdf-sidebar-background: #eeece2;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #eeece2 65%, transparent) linear-gradient(#eeece2, color-mix(in srgb, #eeece2 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: rgba(61, 46, 26, 0.7);
  --search-icon-color: rgba(61, 46, 26, 0.7);
  --search-result-background: #eeece2;
  --setting-group-heading-color: #3d2e1a;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e6e4da;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgba(61, 46, 26, 0.7);
  --shiki-code-background: #f5efe0;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: rgba(61, 46, 26, 0.7);
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: rgba(61, 46, 26, 0.7);
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: rgba(61, 46, 26, 0.7);
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: rgba(61, 46, 26, 0.7);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #eeece2;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #eeece2;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #d2cfc588;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e6e4da;
  --tab-switcher-menubar-background: linear-gradient(to top, #e6e4da, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(15, 65%, 60%);
  --tab-text-color: #ababab;
  --tab-text-color-active: rgba(61, 46, 26, 0.7);
  --tab-text-color-focused: rgba(61, 46, 26, 0.7);
  --tab-text-color-focused-active: rgba(61, 46, 26, 0.7);
  --tab-text-color-focused-active-current: #3d2e1a;
  --tab-text-color-focused-highlighted: #ae4e36;
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d97756;
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #3d2e1a;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(15, 65%, 60%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #d97756;
  --table-text-size: 16px;
  --tag-background: hsla(15, 65%, 60%, 0.1);
  --tag-background-hover: hsla(15, 65%, 60%, 0.2);
  --tag-border-color: hsla(15, 65%, 60%, 0.15);
  --tag-border-color-hover: hsla(15, 65%, 60%, 0.15);
  --tag-color: #ae4e36;
  --tag-color-hover: #ae4e36;
  --tag-size: 0.875em;
  --text-accent: #ae4e36;
  --text-accent-hover: hsl(12, 66.3%, 69%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: rgba(61, 46, 26, 0.7);
  --text-normal: #3d2e1a;
  --text-selection: #f0e0d0;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-video-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(166, 124, 82, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(166, 124, 82, 0.01) 0%, rgba(166, 124, 82, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 0px;
  border-left-color: rgb(166, 124, 82);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-right-width: 0px;
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  box-shadow: var(--depth-2, rgba(0, 0, 0, 0.06) 0px 2px 4px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px 0px, rgba(0, 0, 0, 0.02) 0px 8px 16px 0px);
  color: var(--callout-color, rgb(61, 46, 26));
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--weight-semibold, 400);
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
  scrollbar-color: rgba(217, 119, 86, 0.35) rgba(245, 239, 224, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, #e67e22);
  --callout-color-rgb: var(--callout-warning-rgb, 230, 126, 34);
  background: radial-gradient(at 100% 100%, rgba(230, 126, 34, 0.15) 0%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box, rgba(230, 126, 34, 0.12) linear-gradient(135deg, rgba(230, 126, 34, 0.01) 0%, rgba(230, 126, 34, 0.03) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-warning-rgb), .12);
  background-image: radial-gradient(at 100% 100%, rgba(230, 126, 34, 0.15) 0%, rgba(0, 0, 0, 0) 70%), linear-gradient(135deg, rgba(230, 126, 34, 0.01) 0%, rgba(230, 126, 34, 0.03) 100%);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(230, 126, 34);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
  color: var(--callout-color, rgb(61, 46, 26));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: #a67c52;
  border-bottom-color: color(srgb 0.455686 0.340392 0.225098);
  border-left-color: color(srgb 0.455686 0.340392 0.225098);
  border-right-color: color(srgb 0.455686 0.340392 0.225098);
  border-top-color: color(srgb 0.455686 0.340392 0.225098);
  color: hsl(from var(--callout-color) h s calc(l * .7));
  gap: 13.2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.455686 0.340392 0.225098));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background-color: rgba(var(--callout-color-rgb), .3);
  color: var(--callout-color, color(srgb 0.390588 0.291765 0.192941));
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

html[saved-theme="light"] body .callout[data-callout="video"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5'/%3E%3Crect x='2' y='6' width='14' height='12' rx='2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-normal, rgb(61, 46, 26));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgba(238, 236, 226, 0.94));
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.08);
  border-right-color: rgba(0, 0, 0, 0.08);
  border-top-color: rgba(0, 0, 0, 0.08);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: var(--shadow-4), 0 12px 48px rgba(0, 0, 0, 0.2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(61, 46, 26);
  outline: rgb(61, 46, 26) none 0px;
  text-decoration-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--primary-color, rgb(217, 119, 86));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--primary-color, rgb(217, 119, 86));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(var(--primary-color-rgb), .15);
  color: var(--primary-color, rgb(217, 119, 86));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.08);
  border-right-color: rgba(0, 0, 0, 0.08);
  border-top-color: rgba(0, 0, 0, 0.08);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(230, 228, 218);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(var(--primary-color-rgb), .15);
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-right-color: rgb(217, 119, 86);
  border-top-color: rgb(217, 119, 86);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--primary-color, rgb(217, 119, 86));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(var(--primary-color-rgb), .15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--primary-color, rgb(217, 119, 86));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(15, 65%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(15, 65%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(15, 65%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(15, 65%, 60%, 0.15));
  --pill-color: var(--tag-color, #ae4e36);
  --pill-color-hover: var(--tag-color-hover, #ae4e36);
  --pill-color-remove: var(--tag-color, #ae4e36);
  --pill-color-remove-hover: var(--tag-color-hover, #ae4e36);
  background-color: rgba(var(--primary-color-rgb), .15);
  border-bottom-color: rgba(219, 120, 87, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body h1 {
  --scale: var(--heading-scale-1, 1.25);
  --scale-x: var(--heading-scale-x-1, 1.6);
  color: hsl(from var(--heading-primary) h s calc(l * var(--heading-text-multiplier)));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--primary-color, rgb(217, 119, 86));
}

html[saved-theme="light"] body h2 {
  --scale: var(--heading-scale-2, 1.1);
  --scale-x: var(--heading-scale-x-2, 1.5);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--primary-color, rgb(217, 119, 86));
}

html[saved-theme="light"] body h3 {
  --scale: var(--heading-scale-3, 1.0);
  --scale-x: var(--heading-scale-x-3, 1.5);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  --scale: var(--heading-scale-4, 0.8);
  --scale-x: var(--heading-scale-x-4, 1.2);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  --scale: var(--heading-scale-5, 0.75);
  --scale-x: var(--heading-scale-x-5, 1.2);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  --scale: var(--heading-scale-6, 0.6);
  --scale-x: var(--heading-scale-x-6, 1.1);
  color: hsl(from var(--callout-color) h s calc(l * 1.4));
  font-family: var(--heading-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(210, 207, 197, 0.533);
  border-left-color: rgba(210, 207, 197, 0.533);
  border-right-color: rgba(210, 207, 197, 0.533);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-note, #d97756);
  --callout-color-rgb: var(--callout-note-rgb, 217, 119, 86);
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(217, 119, 86);
  border-left-width: 3px;
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 16px;
  border-top-right-radius: 6px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 105, 44));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 105, 44));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(61, 46, 26);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--icon-color, rgba(61, 46, 26, 0.7));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(var(--primary-color-rgb), .2);
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
  color: var(--text-muted, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  --nav-collapse-icon-color: var(--folder-text-color, #b8692c);
  --nav-item-color: var(--folder-text-color, #b8692c);
  --nav-item-color-hover: var(--folder-text-color, #b8692c);
  background-color: var(--folder-color, rgba(184, 105, 44, 0.12));
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

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 105, 44));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 105, 44);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  --nav-collapse-icon-color: var(--folder-text-color, #b8692c);
  --nav-item-color: var(--folder-text-color, #b8692c);
  --nav-item-color-hover: var(--folder-text-color, #b8692c);
  background-color: var(--folder-color, rgba(184, 105, 44, 0.12));
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(184, 105, 44);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 105, 44));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-muted, rgba(61, 46, 26, 0.7));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(61, 46, 26, 0.7);
  stroke: rgba(61, 46, 26, 0.7);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  color: rgba(61, 46, 26, 0.7);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--emphasis-color, rgba(0, 0, 0, 0));
  color: var(--background-primary, rgb(61, 46, 26));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(238, 236, 226));
  border-color: rgb(61, 46, 26);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(174, 78, 54);
  color: var(--table-header-color, rgb(238, 236, 226));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: rgba(var(--background-secondary-rgb), .7);
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, rgba(61, 46, 26, 0.7));
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgba(var(--background-secondary-rgb), .7);
  border-color: rgba(61, 46, 26, 0.7);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(15, 65%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(15, 65%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(15, 65%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(15, 65%, 60%, 0.15));
  --pill-color: var(--tag-color, #ae4e36);
  --pill-color-hover: var(--tag-color-hover, #ae4e36);
  --pill-color-remove: var(--tag-color, #ae4e36);
  --pill-color-remove-hover: var(--tag-color-hover, #ae4e36);
  background-color: rgba(var(--primary-color-rgb), .15);
  border-radius: 8px;
  color: var(--pill-color, rgb(174, 78, 54));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(61, 46, 26, 0.7);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(238, 236, 226));
  color: var(--text-normal, rgb(61, 46, 26));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(230, 228, 218));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(61, 46, 26);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(var(--primary-color-rgb), .2);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(61, 46, 26));
}

html[saved-theme="light"] body abbr {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(61, 46, 26, 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(61, 46, 26, 0.7);
  border-right-color: rgba(61, 46, 26, 0.7);
  border-top-color: rgba(61, 46, 26, 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-normal, rgba(61, 46, 26, 0.7));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(245, 239, 224));
  border-bottom-color: rgb(61, 46, 26);
  border-bottom-style: solid;
  border-left-color: rgb(61, 46, 26);
  border-left-style: solid;
  border-right-color: rgb(61, 46, 26);
  border-right-style: solid;
  border-top-color: rgb(61, 46, 26);
  border-top-style: solid;
  color: var(--code-normal, rgb(61, 46, 26));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(61, 46, 26);
  border-left-color: rgb(61, 46, 26);
  border-right-color: rgb(61, 46, 26);
  border-top-color: rgb(61, 46, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body summary {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(61, 46, 26);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(217, 119, 86, 0.08));
  border-bottom-color: rgb(217, 119, 86);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(219, 120, 87, 0.15);
  border-right-color: rgba(219, 120, 87, 0.15);
  border-top-color: rgba(219, 120, 87, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--link-color-hover, rgb(217, 119, 86));
}`,
  },
  extras: `@keyframes whimsy-modal-open {
  0% {
    transform: translateY(18px) scale(0.99);
  }
  65% {
    transform: translateY(-1px) scale(1.01);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes whimsy-settle-bounce {
  0% {
    transform: scaleY(1.05);
  }
  60% {
    transform: scaleY(0.98);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes whimsy-collapse-bounce {
  0% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(1.06);
  }
  100% {
    transform: scaleY(0.92);
  }
}

@keyframes whimsy-notice-in {
  0% {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes whimsy-float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-4px) rotate(-0.5deg);
  }
  50% {
    transform: translateY(8px) rotate(0.5deg);
  }
  75% {
    transform: translateY(-2px) rotate(-0.3deg);
  }
}

@keyframes whimsy-callout-icon-bounce {
  0% {
    transform: scale(0.4) rotate(-15deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.15) rotate(5deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

@keyframes whimsy-checkbox-pop {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes whimsy-jelly {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.95, 1.05);
  }
  50% {
    transform: scale(1.05, 0.95);
  }
  75% {
    transform: scale(0.98, 1.02);
  }
  100% {
    transform: scale(1, 1);
  }
}

@keyframes whimsy-wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-3deg);
  }
  40% {
    transform: rotate(3deg);
  }
  60% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(2deg);
  }
}

@keyframes whimsy-slide-in-right {
  0% {
    transform: translateX(30px) scale(0.95);
    opacity: 0;
  }
  70% {
    transform: translateX(-5px) scale(1.02);
    opacity: 1;
  }
  100% {
    transform: translateX(0) scale(1);
  }
}

.modal-container {
  animation: whimsy-modal-open 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.callout:not(.is-collapsed) {
  animation: whimsy-settle-bounce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: top center;
}

.callout.is-collapsed {
  animation: whimsy-collapse-bounce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)
    forwards;
  transform-origin: top center;
}

.callout .callout-icon {
  animation: whimsy-callout-icon-bounce 0.35s cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
  transform-origin: center center;
}

.notice-container {
  animation: whimsy-notice-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: top center;
}
`,
  classSettings: {
    "spring-theme": {
      general: `.spring-theme {
--accent-h: 90;
--accent-s: 45%;
--accent-l: 40%;
}`,
      dark: `.theme-light.spring-theme, .spring-theme {
--setting-items-background: var(--background-secondary);
}

.spring-theme {
--background-primary: #1a1f16;
--background-primary-rgb: 26, 31, 22;
--background-secondary: #252b21;
--background-secondary-rgb: 37, 43, 33;
--background-secondary-alt: #2a3125;
--text-normal: #d4e8c4;
--text-normal-rgb: 212, 232, 196;
--text-muted: rgba(212, 232, 196, .7);
--emphasis-color: #9bc95f;
--emphasis-color-light: #a8d46f;
--primary-color: #9bc95f;
--primary-color-rgb: 155, 201, 95;
--primary-color-dark: #7ba049;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #3d4f2e88;
--text-selection: #2a4220;
--scrollbar-thumb: rgba(155, 201, 95, .4);
--scrollbar-track: rgba(26, 31, 22, .2);
--code-background: #2a3125;
--code-normal: var(--text-normal);
--code-comment: rgba(212, 232, 196, .6);
--code-function: #a8d46f;
--code-important: #7ba049;
--code-keyword: #d4a1c4;
--code-property: #b8d982;
--code-punctuation: rgba(212, 232, 196, .7);
--code-string: #f2b399;
--code-tag: #7ba3d4;
--code-value: #e6c547;
--heading-primary: #a8d46f;
--heading-secondary: #c5b8e6;
--heading-tertiary: #ffb380;
--heading-quaternary: #b8d982;
--heading-quinary: #7ba3d4;
--heading-senary: #f5db7a;
--heading-primary-rgb: 168, 212, 111;
--heading-secondary-rgb: 197, 184, 230;
--heading-tertiary-rgb: 255, 179, 128;
--heading-quaternary-rgb: 184, 217, 130;
--heading-quinary-rgb: 123, 163, 212;
--heading-senary-rgb: 245, 219, 122;
--callout-note: #a8d46f;
--callout-note-rgb: 168, 212, 111;
--callout-info: #7ba3d4;
--callout-info-rgb: 123, 163, 212;
--callout-warning: #f1c40f;
--callout-warning-rgb: 241, 196, 15;
--callout-success: #2ecc71;
--callout-success-rgb: 46, 204, 113;
--callout-danger: #545454;
--callout-danger-rgb: 84, 84, 84;
--callout-example: #f2b399;
--callout-example-rgb: 242, 179, 153;
--callout-cite: #a29bfe;
--callout-cite-rgb: 162, 155, 254;
--callout-video: #8bbdd9;
--callout-video-rgb: 139, 189, 217;
--callout-quote: #dff9fb;
--callout-quote-rgb: 223, 249, 251;
--highlight-bg: #252f20;
--highlight-bg-dark: #354530;
--highlight-bg-dark-color: #354530;
--highlight-bg-light-color: #b8d982;
--surface-accent: #3d4f2e;
--surface-accent-rgb: 61, 79, 46;
--surface-dark: #1a1f16;
--surface-dark-rgb: 26, 31, 22;
--tab-bg-inactive: rgba(26, 31, 22, .15);
--tab-bg-inactive-hover: rgba(26, 31, 22, .25);
}`,
      light: `.spring-theme, .theme-dark.spring-theme {
--setting-items-background: var(--background-secondary);
}

.spring-theme {
--background-primary: #f5faf0;
--background-primary-rgb: 245, 250, 240;
--background-secondary: #eef5e6;
--background-secondary-rgb: 238, 245, 230;
--background-secondary-alt: #e6f0da;
--text-normal: #1f2e1a;
--text-normal-rgb: 31, 46, 26;
--text-muted: rgba(31, 46, 26, .7);
--emphasis-color: #4a6b2e;
--emphasis-color-light: #72a043;
--primary-color: #72a043;
--primary-color-rgb: 114, 160, 67;
--primary-color-dark: #4a6b2e;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #d4e6c788;
--text-selection: #e6f2d1;
--scrollbar-thumb: rgba(168, 212, 111, .4);
--scrollbar-track: rgba(240, 249, 240, .2);
--code-background: #f0f7e6;
--code-normal: var(--text-normal);
--code-comment: rgba(31, 46, 26, .6);
--code-function: #5a7a33;
--code-important: #3d5422;
--code-keyword: #a05a8b;
--code-property: #6b8e23;
--code-punctuation: rgba(31, 46, 26, .7);
--code-string: #e07a5f;
--code-tag: #2e5a8b;
--code-value: #b8860b;
--heading-primary: #72a043;
--heading-secondary: #a05a8b;
--heading-tertiary: #ff8b7c;
--heading-quaternary: #6b8e23;
--heading-quinary: #2e5a8b;
--heading-senary: #b8860b;
--heading-primary-rgb: 114, 160, 67;
--heading-secondary-rgb: 160, 90, 139;
--heading-tertiary-rgb: 255, 139, 124;
--heading-quaternary-rgb: 107, 142, 35;
--heading-quinary-rgb: 46, 90, 139;
--heading-senary-rgb: 184, 134, 11;
--callout-note: #6bb02d;
--callout-note-rgb: 107, 176, 45;
--callout-info: #3a8cd6;
--callout-info-rgb: 58, 140, 214;
--callout-warning: #f1c40f;
--callout-warning-rgb: 241, 196, 15;
--callout-success: #2ecc71;
--callout-success-rgb: 46, 204, 113;
--callout-danger: #545454;
--callout-danger-rgb: 84, 84, 84;
--callout-example: #e18c6d;
--callout-example-rgb: 225, 140, 109;
--callout-cite: #573d84;
--callout-cite-rgb: 87, 61, 132;
--callout-video: #7ba3d4;
--callout-video-rgb: 123, 163, 212;
--callout-quote: #b8e994;
--callout-quote-rgb: 184, 233, 148;
--highlight-bg: #a8d67a;
--highlight-bg-rgb: 200, 230, 168;
--highlight-bg-dark: #a6d47a;
--highlight-bg-dark-color: #1a2f0e;
--surface-accent: #f5faf0;
--surface-accent-rgb: 245, 250, 240;
--surface-dark: #2a3d1a;
--surface-dark-rgb: 42, 61, 26;
--tab-bg-inactive: rgba(240, 249, 240, .08);
--tab-bg-inactive-hover: rgba(240, 249, 240, .12);
}`,
    },
    "summer-theme": {
      general: `.summer-theme {
--accent-h: 330;
--accent-s: 70%;
--accent-l: 55%;
}`,
      dark: `.theme-light.summer-theme, .summer-theme {
--setting-items-background: var(--background-secondary);
}

.summer-theme {
--background-primary: #1f1a1a;
--background-primary-rgb: 31, 26, 26;
--background-secondary: #2a2424;
--background-secondary-rgb: 42, 36, 36;
--background-secondary-alt: #2f2828;
--text-normal: #f0d4e8;
--text-normal-rgb: 240, 212, 232;
--text-muted: rgba(240, 212, 232, .7);
--emphasis-color: #f28bb8;
--emphasis-color-light: #f28bb8;
--primary-color: #f28bb8;
--primary-color-rgb: 242, 139, 184;
--primary-color-dark: #e55a73;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #5c3d2f88;
--text-selection: #4a2833;
--scrollbar-thumb: rgba(242, 139, 184, .35);
--scrollbar-track: rgba(31, 26, 26, .2);
--code-background: #2f2828;
--code-normal: var(--text-normal);
--code-comment: rgba(240, 212, 232, .6);
--code-function: #f28bb8;
--code-important: #e55a73;
--code-keyword: #e6c266;
--code-property: #d4a373;
--code-punctuation: rgba(240, 212, 232, .7);
--code-string: #66c4e6;
--code-tag: #66c4aa;
--code-value: #b08fd9;
--heading-primary: #ff94d1;
--heading-secondary: #00d9ff;
--heading-tertiary: #ffd700;
--heading-quaternary: #f2a882;
--heading-quinary: #66c4aa;
--heading-senary: #b08fd9;
--heading-primary-rgb: 255, 148, 209;
--heading-secondary-rgb: 0, 217, 255;
--heading-tertiary-rgb: 255, 215, 0;
--heading-quaternary-rgb: 242, 168, 130;
--heading-quinary-rgb: 102, 196, 170;
--heading-senary-rgb: 176, 143, 217;
--callout-note: #f28bb8;
--callout-note-rgb: 242, 139, 184;
--callout-info: #e6c266;
--callout-info-rgb: 230, 194, 102;
--callout-warning: #66c4e6;
--callout-warning-rgb: 102, 196, 230;
--callout-success: #66c4aa;
--callout-success-rgb: 102, 196, 170;
--callout-danger: #f1c40f;
--callout-danger-rgb: 241, 196, 15;
--callout-example: #f2a882;
--callout-example-rgb: 242, 168, 130;
--callout-cite: #a29bfe;
--callout-cite-rgb: 162, 155, 254;
--callout-video: #57e6ff;
--callout-video-rgb: 87, 230, 255;
--callout-quote: #fbd3e9;
--callout-quote-rgb: 251, 211, 233;
--highlight-bg: #3a2030;
--highlight-bg-dark: #5a3345;
--highlight-bg-dark-color: #5a3345;
--highlight-bg-light-color: #f5a8c9;
--surface-accent: #5c3d2f;
--surface-accent-rgb: 92, 61, 47;
--surface-dark: #1f1a1a;
--surface-dark-rgb: 31, 26, 26;
--tab-bg-inactive: rgba(31, 26, 26, .15);
--tab-bg-inactive-hover: rgba(31, 26, 26, .25);
}`,
      light: `.summer-theme, .theme-dark.summer-theme {
--setting-items-background: var(--background-secondary);
}

.summer-theme {
--background-primary: #f7f7f7;
--background-primary-rgb: 247, 247, 247;
--background-secondary: #f5f5f5;
--background-secondary-rgb: 245, 245, 245;
--background-secondary-alt: #f0f0f0;
--text-normal: #191919;
--text-normal-rgb: 25, 25, 25;
--text-muted: rgba(61, 26, 46, .7);
--emphasis-color: #a02659;
--emphasis-color-light: #d63384;
--primary-color: #d63384;
--primary-color-rgb: 214, 51, 132;
--primary-color-dark: #a02659;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #f0e6e088;
--text-selection: #f0f0f0;
--scrollbar-thumb: rgba(242, 139, 184, .35);
--scrollbar-track: rgba(255, 240, 245, .2);
--code-background: #f8f8f8;
--code-normal: #3d1a2e;
--code-comment: rgba(61, 26, 46, .6);
--code-function: #d63384;
--code-important: #a02659;
--code-keyword: #cc8500;
--code-property: #8b4513;
--code-punctuation: rgba(61, 26, 46, .7);
--code-string: #0c7a93;
--code-tag: #0a6b5d;
--code-value: indigo;
--heading-primary: #ff6b9d;
--heading-secondary: #00c9b7;
--heading-tertiary: #ff9f43;
--heading-quaternary: #f368e0;
--heading-quinary: #0a6b5d;
--heading-senary: #4b0082;
--heading-primary-rgb: 255, 107, 157;
--heading-secondary-rgb: 0, 201, 183;
--heading-tertiary-rgb: 255, 159, 67;
--heading-quaternary-rgb: 243, 104, 224;
--heading-quinary-rgb: 10, 107, 93;
--heading-senary-rgb: 75, 0, 130;
--callout-note: #d63384;
--callout-note-rgb: 214, 51, 132;
--callout-info: #cc8500;
--callout-info-rgb: 204, 133, 0;
--callout-warning: #0c7a93;
--callout-warning-rgb: 12, 122, 147;
--callout-success: #0a6b5d;
--callout-success-rgb: 10, 107, 93;
--callout-danger: #e74c3c;
--callout-danger-rgb: 231, 76, 60;
--callout-example: #f3784e;
--callout-example-rgb: 243, 120, 78;
--callout-cite: #573d84;
--callout-cite-rgb: 87, 61, 132;
--callout-video: #57d9eb;
--callout-video-rgb: 87, 217, 235;
--callout-quote: #fff8dc;
--callout-quote-rgb: 255, 248, 220;
--highlight-bg: #ff99bb;
--highlight-bg-rgb: 255, 201, 224;
--highlight-bg-dark: #f5a8c9;
--highlight-bg-dark-color: #4a1530;
--surface-accent: #fff8f0;
--surface-accent-rgb: 255, 248, 240;
--surface-dark: #5d2f1a;
--surface-dark-rgb: 93, 47, 26;
--tab-bg-inactive: rgba(240, 249, 240, .08);
--tab-bg-inactive-hover: rgba(240, 249, 240, .12);
}`,
    },
    "autumn-theme": {
      general: `.autumn-theme {
--accent-h: 15;
--accent-s: 65%;
--accent-l: 60%;
}`,
      dark: `.theme-light.autumn-theme, .autumn-theme {
--setting-items-background: var(--background-secondary);
}

.autumn-theme {
--background-primary: #282520;
--background-primary-rgb: 40, 37, 32;
--background-secondary: #32302a;
--background-secondary-rgb: 50, 48, 42;
--background-secondary-alt: #3a3832;
--text-normal: #e8dcc6;
--text-normal-rgb: 232, 220, 198;
--text-muted: rgba(232, 220, 198, .7);
--emphasis-color: #e27a5a;
--emphasis-color-light: #f2a882;
--primary-color: #f0916f;
--primary-color-rgb: 240, 145, 111;
--primary-color-dark: #e27a5a;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #4a473e88;
--text-selection: #4a3d2e;
--scrollbar-thumb: rgba(240, 145, 111, .35);
--scrollbar-track: rgba(40, 37, 32, .2);
--code-background: #3a3832;
--code-normal: var(--text-normal);
--code-comment: #9c9584;
--code-function: #f2a882;
--code-important: #e27a5a;
--code-keyword: #8bb5d9;
--code-property: #a8c47a;
--code-punctuation: rgba(232, 220, 198, .7);
--code-string: #b5a8d4;
--code-tag: #e08ba8;
--code-value: #95b3aa;
--heading-primary: #f2a882;
--heading-secondary: #8ba891;
--heading-tertiary: #b5a8d4;
--heading-quaternary: #a8c47a;
--heading-quinary: #c97a94;
--heading-senary: #95b3aa;
--heading-primary-rgb: 242, 168, 130;
--heading-secondary-rgb: 139, 168, 145;
--heading-tertiary-rgb: 181, 168, 212;
--heading-quaternary-rgb: 168, 196, 122;
--heading-quinary-rgb: 201, 122, 148;
--heading-senary-rgb: 149, 179, 170;
--callout-note: #f2a882;
--callout-note-rgb: 242, 168, 130;
--callout-info: #e9d5a3;
--callout-info-rgb: 233, 213, 163;
--callout-warning: #f39c12;
--callout-warning-rgb: 243, 156, 18;
--callout-success: #a8c47a;
--callout-success-rgb: 168, 196, 122;
--callout-danger: #e74c3c;
--callout-danger-rgb: 231, 76, 60;
--callout-example: #95b3aa;
--callout-example-rgb: 149, 179, 170;
--callout-cite: #a29bfe;
--callout-cite-rgb: 162, 155, 254;
--callout-video: #f2b399;
--callout-video-rgb: 242, 179, 153;
--callout-quote: #e8dcc6;
--callout-quote-rgb: 232, 220, 198;
--highlight-bg: #3a2f20;
--highlight-bg-dark: #5a4430;
--highlight-bg-dark-color: #5a4430;
--highlight-bg-light-color: #f2c088;
--surface-accent: #4a473e;
--surface-accent-rgb: 74, 71, 62;
--surface-dark: #282520;
--surface-dark-rgb: 40, 37, 32;
--tab-bg-inactive: rgba(40, 37, 32, .15);
--tab-bg-inactive-hover: rgba(40, 37, 32, .25);
}`,
      light: `.autumn-theme, .theme-dark.autumn-theme {
--setting-items-background: var(--background-secondary);
}

.autumn-theme {
--background-primary: #eeece2;
--background-primary-rgb: 238, 236, 226;
--background-secondary: #e6e4da;
--background-secondary-rgb: 230, 228, 218;
--background-secondary-alt: #dfdbd1;
--text-normal: #3d2e1a;
--text-normal-rgb: 61, 46, 26;
--text-muted: rgba(61, 46, 26, .7);
--emphasis-color: #ae4e36;
--emphasis-color-light: #d97756;
--primary-color: #d97756;
--primary-color-rgb: 217, 119, 86;
--primary-color-dark: #ae4e36;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #d2cfc588;
--text-selection: #f0e0d0;
--scrollbar-thumb: rgba(217, 119, 86, .35);
--scrollbar-track: rgba(245, 239, 224, .2);
--code-background: #f5efe0;
--code-normal: var(--text-normal);
--code-comment: #707592;
--code-function: #d97756;
--code-important: #ae4e36;
--code-keyword: #6a97bb;
--code-property: #798d5d;
--code-punctuation: rgba(61, 46, 26, .7);
--code-string: #8f8ca6;
--code-tag: #c36686;
--code-value: #779088;
--heading-primary: #d97756;
--heading-secondary: #b8692c;
--heading-tertiary: #9a863c;
--heading-quaternary: #798d5d;
--heading-quinary: #c36686;
--heading-senary: #779088;
--heading-primary-rgb: 217, 119, 86;
--heading-secondary-rgb: 184, 105, 44;
--heading-tertiary-rgb: 154, 134, 60;
--heading-quaternary-rgb: 121, 141, 93;
--heading-quinary-rgb: 195, 102, 134;
--heading-senary-rgb: 119, 144, 136;
--callout-note: #d97756;
--callout-note-rgb: 217, 119, 86;
--callout-info: #d4af37;
--callout-info-rgb: 212, 175, 55;
--callout-warning: #e67e22;
--callout-warning-rgb: 230, 126, 34;
--callout-success: #798d5d;
--callout-success-rgb: 121, 141, 93;
--callout-danger: #c0392b;
--callout-danger-rgb: 192, 57, 43;
--callout-example: #779088;
--callout-example-rgb: 119, 144, 136;
--callout-cite: #573d84;
--callout-cite-rgb: 87, 61, 132;
--callout-video: #a67c52;
--callout-video-rgb: 166, 124, 82;
--callout-quote: #b0a483;
--callout-quote-rgb: 176, 164, 131;
--highlight-bg: #d6b07b;
--highlight-bg-rgb: 232, 200, 154;
--highlight-bg-dark: #c9a772;
--highlight-bg-dark-color: #2d1f0e;
--surface-accent: #e8e6dc;
--surface-accent-rgb: 232, 230, 220;
--surface-dark: #36342e;
--surface-dark-rgb: 54, 52, 46;
--tab-bg-inactive: rgba(245, 239, 224, .15);
--tab-bg-inactive-hover: rgba(245, 239, 224, .25);
}`,
    },
    "winter-theme": {
      general: `.winter-theme {
--accent-h: 210;
--accent-s: 50%;
--accent-l: 55%;
}`,
      dark: `.theme-light.winter-theme, .winter-theme {
--setting-items-background: var(--background-secondary);
}

.winter-theme {
--background-primary: #151b21;
--background-primary-rgb: 21, 27, 33;
--background-secondary: #1d242b;
--background-secondary-rgb: 29, 36, 43;
--background-secondary-alt: #212831;
--text-normal: #d4e1ed;
--text-normal-rgb: 212, 225, 237;
--text-muted: rgba(212, 225, 237, .7);
--emphasis-color: #7db3dd;
--emphasis-color-light: #7db3dd;
--primary-color: #7db3dd;
--primary-color-rgb: 125, 179, 221;
--primary-color-dark: #5a91bd;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #3a4a5c88;
--text-selection: #1f3347;
--scrollbar-thumb: rgba(125, 179, 221, .35);
--scrollbar-track: rgba(21, 27, 33, .2);
--code-background: #212831;
--code-normal: var(--text-normal);
--code-comment: rgba(212, 225, 237, .6);
--code-function: #7db3dd;
--code-important: #5a91bd;
--code-keyword: #a1c8f0;
--code-property: #7db37d;
--code-punctuation: rgba(212, 225, 237, .7);
--code-string: #c595c5;
--code-tag: #8a7dd8;
--code-value: #4dd4d4;
--heading-primary: #7eb3d9;
--heading-primary-rgb: 126, 179, 217;
--heading-secondary: #d98099;
--heading-secondary-rgb: 217, 128, 153;
--heading-tertiary: #7db399;
--heading-tertiary-rgb: 125, 179, 153;
--heading-quaternary: #a89dd9;
--heading-quaternary-rgb: 168, 157, 217;
--heading-quinary: #99b8cc;
--heading-quinary-rgb: 153, 184, 204;
--heading-senary: #c299ad;
--heading-senary-rgb: 194, 153, 173;
--callout-note: #7db3dd;
--callout-note-rgb: 125, 179, 221;
--callout-info: #a1c8f0;
--callout-info-rgb: 161, 200, 240;
--callout-warning: #f1c40f;
--callout-warning-rgb: 241, 196, 15;
--callout-success: #7db37d;
--callout-success-rgb: 125, 179, 125;
--callout-danger: #e67e22;
--callout-danger-rgb: 230, 126, 34;
--callout-example: #4dd4d4;
--callout-example-rgb: 77, 212, 212;
--callout-cite: #a29bfe;
--callout-cite-rgb: 162, 155, 254;
--callout-video: #81e6d9;
--callout-video-rgb: 129, 230, 217;
--callout-quote: #d9ebf7;
--callout-quote-rgb: 217, 235, 247;
--highlight-bg: #1f2d3a;
--highlight-bg-dark: #2a3f52;
--highlight-bg-dark-color: #2a3f52;
--highlight-bg-light-color: #9ec5e6;
--surface-accent: #3a4a5c;
--surface-accent-rgb: 58, 74, 92;
--surface-dark: #151b21;
--surface-dark-rgb: 21, 27, 33;
--tab-bg-inactive: rgba(21, 27, 33, .15);
--tab-bg-inactive-hover: rgba(21, 27, 33, .25);
}`,
      light: `.winter-theme, .theme-dark.winter-theme {
--setting-items-background: var(--background-secondary);
}

.winter-theme {
--background-primary: #f0f8ff;
--background-primary-rgb: 240, 248, 255;
--background-secondary: #e6f2ff;
--background-secondary-rgb: 230, 242, 255;
--background-secondary-alt: #dae8f5;
--text-normal: #1a2d3d;
--text-normal-rgb: 26, 45, 61;
--text-muted: rgba(26, 45, 61, .7);
--emphasis-color: #2c4a5e;
--emphasis-color-light: #4a7c9b;
--primary-color: #4a7c9b;
--primary-color-rgb: 74, 124, 155;
--primary-color-dark: #2c4a5e;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #c8d9ed88;
--text-selection: #d1e8ff;
--scrollbar-thumb: rgba(125, 179, 221, .35);
--scrollbar-track: rgba(217, 235, 247, .2);
--code-background: #e1f0ff;
--code-normal: var(--text-normal);
--code-comment: rgba(26, 45, 61, .6);
--code-function: #4a7c9b;
--code-important: #2c4a5e;
--code-keyword: #4682b4;
--code-property: #2d5a2d;
--code-punctuation: rgba(26, 45, 61, .7);
--code-string: #8b4a8b;
--code-tag: #483d8b;
--code-value: #008b8b;
--heading-primary: #2d5a7a;
--heading-primary-rgb: 45, 90, 122;
--heading-secondary: #8b3a52;
--heading-secondary-rgb: 139, 58, 82;
--heading-tertiary: #3d5e4d;
--heading-tertiary-rgb: 61, 94, 77;
--heading-quaternary: #5a4d75;
--heading-quaternary-rgb: 90, 77, 117;
--heading-quinary: #4d6b80;
--heading-quinary-rgb: 77, 107, 128;
--heading-senary: #6b4d5a;
--heading-senary-rgb: 107, 77, 90;
--callout-note: #2e5984;
--callout-note-rgb: 46, 89, 132;
--callout-info: #4682b4;
--callout-info-rgb: 70, 130, 180;
--callout-warning: #e07a5f;
--callout-warning-rgb: 224, 122, 95;
--callout-success: #2d5a2d;
--callout-success-rgb: 45, 90, 45;
--callout-danger: #e67e22;
--callout-danger-rgb: 230, 126, 34;
--callout-example: #008b8b;
--callout-example-rgb: 0, 139, 139;
--callout-cite: #573d84;
--callout-cite-rgb: 87, 61, 132;
--callout-video: #483d8b;
--callout-video-rgb: 72, 61, 139;
--callout-quote: #a1c8f0;
--callout-quote-rgb: 161, 200, 240;
--highlight-bg: #7eb0d6;
--highlight-bg-rgb: 158, 197, 230;
--highlight-bg-dark: #7aaddb;
--highlight-bg-dark-color: #0f2535;
--surface-accent: #e1f0ff;
--surface-accent-rgb: 225, 240, 255;
--surface-dark: #1e2a37;
--surface-dark-rgb: 30, 42, 55;
--tab-bg-inactive: rgba(217, 235, 247, .08);
--tab-bg-inactive-hover: rgba(217, 235, 247, .12);
}`,
    },
    "iceberg-theme": {
      general: `.iceberg-theme {
--accent-h: 213;
--accent-s: 32%;
--accent-l: 65%;
}`,
      dark: `.theme-light.iceberg-theme, .iceberg-theme {
--setting-items-background: var(--background-secondary);
}

.iceberg-theme {
--background-primary: #111319;
--background-primary-rgb: 17, 19, 25;
--background-secondary: #171826;
--background-secondary-rgb: 23, 24, 38;
--background-secondary-alt: #1b1e31;
--text-normal: #babcc7;
--text-normal-rgb: 186, 188, 199;
--text-muted: rgba(186, 188, 199, .7);
--emphasis-color: #728eb9;
--emphasis-color-light: #84a0c6;
--primary-color: #728eb9;
--primary-color-rgb: 114, 142, 185;
--primary-color-dark: #5a73a3;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #1b1e3188;
--text-selection: #1d2033;
--scrollbar-thumb: rgba(114, 142, 185, .35);
--scrollbar-track: rgba(17, 19, 25, .2);
--code-background: #171826;
--code-normal: var(--text-normal);
--code-comment: #585c76;
--code-function: #728eb9;
--code-important: #8e7ebb;
--code-keyword: #728eb9;
--code-property: #a5b26f;
--code-punctuation: rgba(186, 188, 199, .7);
--code-string: #78aab5;
--code-tag: #8e7ebb;
--code-value: #8e7ebb;
--heading-primary: #9dd4f7;
--heading-secondary: #a5b26f;
--heading-tertiary: #a89fd4;
--heading-quaternary: #77e6c8;
--heading-quinary: #e2a478;
--heading-senary: #d4a1c4;
--heading-primary-rgb: 157, 212, 247;
--heading-secondary-rgb: 165, 178, 111;
--heading-tertiary-rgb: 168, 159, 212;
--heading-quaternary-rgb: 119, 230, 200;
--heading-quinary-rgb: 226, 164, 120;
--heading-senary-rgb: 212, 161, 196;
--callout-note: #728eb9;
--callout-note-rgb: 114, 142, 185;
--callout-info: #a5b26f;
--callout-info-rgb: 165, 178, 111;
--callout-warning: #e2a478;
--callout-warning-rgb: 226, 164, 120;
--callout-success: #78aab5;
--callout-success-rgb: 120, 170, 181;
--callout-danger: #cc6666;
--callout-danger-rgb: 204, 102, 102;
--callout-example: #78aab5;
--callout-example-rgb: 120, 170, 181;
--callout-cite: #a29bfe;
--callout-cite-rgb: 162, 155, 254;
--callout-video: #78dce8;
--callout-video-rgb: 120, 220, 232;
--callout-quote: #1d2033;
--callout-quote-rgb: 29, 32, 51;
--highlight-bg: #1f2635;
--highlight-bg-dark: #2a354a;
--highlight-bg-dark-color: #2a354a;
--highlight-bg-light-color: #8a9fc2;
--surface-accent: #1b1e31;
--surface-accent-rgb: 27, 30, 49;
--surface-dark: #111319;
--surface-dark-rgb: 17, 19, 25;
--tab-bg-inactive: rgba(17, 19, 25, .15);
--tab-bg-inactive-hover: rgba(17, 19, 25, .25);
}`,
      light: `.iceberg-theme, .theme-dark.iceberg-theme {
--setting-items-background: var(--background-secondary);
}

.iceberg-theme {
--background-primary: #e2e3e7;
--background-primary-rgb: 226, 227, 231;
--background-secondary: #d4d7e1;
--background-secondary-rgb: 212, 215, 225;
--background-secondary-alt: #c0c4d1;
--text-normal: #26293b;
--text-normal-rgb: 38, 41, 59;
--text-muted: rgba(38, 41, 59, .7);
--emphasis-color: #223e8c;
--emphasis-color-light: #2d539e;
--primary-color: #223e8c;
--primary-color-rgb: 34, 62, 140;
--primary-color-dark: #1a2f6b;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #c0c4d188;
--text-selection: #bec2ce;
--scrollbar-thumb: rgba(34, 62, 140, .35);
--scrollbar-track: rgba(226, 227, 231, .2);
--code-background: #d4d7e1;
--code-normal: var(--text-normal);
--code-comment: #707592;
--code-function: #223e8c;
--code-important: #6341a5;
--code-keyword: #223e8c;
--code-property: #547e2f;
--code-punctuation: rgba(38, 41, 59, .7);
--code-string: #326f95;
--code-tag: #6341a5;
--code-value: #6341a5;
--heading-primary: #223e8c;
--heading-secondary: #5fa83f;
--heading-tertiary: #7b52cc;
--heading-quaternary: #339aa8;
--heading-quinary: #b8450f;
--heading-senary: #8b3a6b;
--heading-primary-rgb: 34, 62, 140;
--heading-secondary-rgb: 95, 168, 63;
--heading-tertiary-rgb: 123, 82, 204;
--heading-quaternary-rgb: 51, 154, 168;
--heading-quinary-rgb: 184, 69, 15;
--heading-senary-rgb: 139, 58, 107;
--callout-note: #223e8c;
--callout-note-rgb: 34, 62, 140;
--callout-info: #547e2f;
--callout-info-rgb: 84, 126, 47;
--callout-warning: #c67d3d;
--callout-warning-rgb: 198, 125, 61;
--callout-success: #326f95;
--callout-success-rgb: 50, 111, 149;
--callout-danger: #a55a5a;
--callout-danger-rgb: 165, 90, 90;
--callout-example: #326f95;
--callout-example-rgb: 50, 111, 149;
--callout-cite: #573d84;
--callout-cite-rgb: 87, 61, 132;
--callout-video: #57d9eb;
--callout-video-rgb: 87, 217, 235;
--callout-quote: #e2eafc;
--callout-quote-rgb: 226, 234, 252;
--highlight-bg: #8a9fc2;
--highlight-bg-rgb: 168, 184, 214;
--highlight-bg-dark: #8a9fc2;
--highlight-bg-dark-color: #1a2535;
--surface-accent: #c0c4d1;
--surface-accent-rgb: 192, 196, 209;
--surface-dark: #26293b;
--surface-dark-rgb: 38, 41, 59;
--tab-bg-inactive: rgba(226, 227, 231, .08);
--tab-bg-inactive-hover: rgba(226, 227, 231, .12);
}`,
    },
    "academia-theme": {
      general: `.academia-theme {
--setting-items-background: var(--background-secondary);
}

.academia-theme {
--accent-h: 30;
--accent-s: 45%;
--accent-l: 50%;
--background-primary: #5C4243;
--background-primary-rgb: 92, 66, 67;
--background-secondary: #513A3B;
--background-secondary-rgb: 81, 58, 59;
--background-secondary-alt: #443131;
--text-normal: #C7B3A8;
--text-normal-rgb: 199, 179, 168;
--text-muted: #A88B84;
--emphasis-color: #a8522d;
--emphasis-color-light: #C6AD75;
--primary-color: #C6AD75;
--primary-color-rgb: 198, 173, 117;
--primary-color-dark: #947E5A;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: #a8522d;
--link-color-hover: #a8522d;
--link-unresolved-color: var(--primary-color);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: rgba(0, 0, 0, var(--opacity-border));
--background-modifier-border: rgba(0, 0, 0, 0.4);
--background-modifier-border-focus: rgba(0, 0, 0, 0.6);
--text-selection: #451B1B;
--scrollbar-thumb: rgba(198, 173, 117, .35);
--scrollbar-track: rgba(92, 66, 67, .2);
--code-background: #513A3B;
--code-normal: var(--text-normal);
--code-comment: #A88B84;
--code-function: #C6AD75;
--code-important: #D7BDBC;
--code-keyword: #C6AD75;
--code-property: #C6AD75;
--code-punctuation: #A88B84;
--code-string: #C16119;
--code-tag: #947E5A;
--code-value: #947E5A;
--heading-primary: #d1968d;
--heading-secondary: #d4a86a;
--heading-tertiary: #a8c9a1;
--heading-quaternary: #FFAA66;
--heading-quinary: #8AB584;
--heading-senary: #84C8FF;
--heading-primary-rgb: 209, 150, 141;
--heading-secondary-rgb: 212, 168, 106;
--heading-tertiary-rgb: 168, 201, 161;
--heading-quaternary-rgb: 255, 170, 102;
--heading-quinary-rgb: 138, 181, 132;
--heading-senary-rgb: 132, 200, 255;
--heading-text-multiplier: 1.15;
--highlight-bg: #6a4e45;
--highlight-bg-dark: #7d5c52;
--highlight-bg-dark-color: #7d5c52;
--highlight-bg-light-color: #FFD484;
--callout-note: #FFD484;
--callout-note-rgb: 255, 212, 132;
--callout-info: #78DCE8;
--callout-info-rgb: 120, 220, 232;
--callout-warning: #FFAA66;
--callout-warning-rgb: 255, 170, 102;
--callout-example: #A9DC76;
--callout-example-rgb: 169, 220, 118;
--callout-quote: #AB9DF2;
--callout-quote-rgb: 171, 157, 242;
--callout-success: #88D6A0;
--callout-success-rgb: 136, 214, 160;
--callout-danger: #990000;
--callout-danger-rgb: 153, 0, 0;
--callout-cite: #BBADFF;
--callout-cite-rgb: 187, 173, 255;
--callout-video: #57E6FF;
--callout-video-rgb: 87, 230, 255;
--surface-accent: #6A5150;
--surface-accent-rgb: 106, 81, 80;
--surface-dark: #3C2A2B;
--surface-dark-rgb: 60, 42, 43;
--tab-bg-inactive: rgba(92, 66, 67, .15);
--tab-bg-inactive-hover: rgba(92, 66, 67, .25);
}`,
    },
    "twilight-theme": {
      general: `.twilight-theme {
--accent-h: 260;
--accent-s: 40%;
--accent-l: 65%;
}`,
      dark: `.theme-light.twilight-theme, .twilight-theme {
--setting-items-background: var(--background-secondary);
}

.twilight-theme {
--background-primary: #16141F;
--background-primary-rgb: 22, 20, 31;
--background-secondary: #1C1A26;
--background-secondary-rgb: 28, 26, 38;
--background-secondary-alt: #23212F;
--text-normal: #E3E1E8;
--text-normal-rgb: 227, 225, 232;
--text-muted: #9E9AA9;
--emphasis-color: #BBADFF;
--emphasis-color-light: #D6BCFA;
--primary-color: #BBADFF;
--primary-color-rgb: 187, 173, 255;
--primary-color-dark: #7B62DA;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--emphasis-color-light);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #23212F88;
--text-selection: #2D2A3D;
--scrollbar-thumb: rgba(187, 173, 255, .35);
--scrollbar-track: rgba(22, 20, 31, .2);
--code-background: #1C1A26;
--code-normal: var(--text-normal);
--code-comment: #6B6877;
--code-function: #BBADFF;
--code-important: #7B62DA;
--code-keyword: #B4A7E5;
--code-property: #A5B26F;
--code-punctuation: rgba(227, 225, 232, .7);
--code-string: #78AAB5;
--code-tag: #D6BCFA;
--code-value: #D6BCFA;
--heading-primary: #BBADFF;
--heading-secondary: #D6BCFA;
--heading-tertiary: #81E6D9;
--heading-quaternary: #F687B3;
--heading-quinary: #7F9CF5;
--heading-senary: #ff9eae;
--heading-primary-rgb: 187, 173, 255;
--heading-secondary-rgb: 214, 188, 250;
--heading-tertiary-rgb: 129, 230, 217;
--heading-quaternary-rgb: 246, 135, 179;
--heading-quinary-rgb: 127, 156, 245;
--heading-senary-rgb: 255, 158, 174;
--callout-note: #F6AD55;
--callout-note-rgb: 246, 173, 85;
--callout-info: #81E6D9;
--callout-info-rgb: 129, 230, 217;
--callout-warning: #E2A478;
--callout-warning-rgb: 226, 164, 120;
--callout-example: #CBD5E0;
--callout-example-rgb: 203, 213, 224;
--callout-quote: #9E9AA9;
--callout-quote-rgb: 158, 154, 169;
--callout-success: #A5B26F;
--callout-success-rgb: 165, 178, 111;
--callout-danger: #F687B3;
--callout-danger-rgb: 246, 135, 179;
--callout-cite: #BBADFF;
--callout-cite-rgb: 187, 173, 255;
--callout-video: #57D9EB;
--callout-video-rgb: 87, 217, 235;
--highlight-bg: #241f30;
--highlight-bg-dark: #352b48;
--highlight-bg-dark-color: #352b48;
--highlight-bg-light-color: #D6BCFA;
--surface-accent: #23212F;
--surface-accent-rgb: 35, 33, 47;
--surface-dark: #16141F;
--surface-dark-rgb: 22, 20, 31;
--tab-bg-inactive: rgba(22, 20, 31, .15);
--tab-bg-inactive-hover: rgba(22, 20, 31, .25);
}`,
      light: `.twilight-theme, .theme-dark.twilight-theme {
--setting-items-background: var(--background-secondary);
}

.twilight-theme {
--background-primary: #FBFBFE;
--background-primary-rgb: 251, 251, 254;
--background-secondary: #F3F1F8;
--background-secondary-rgb: 243, 241, 248;
--background-secondary-alt: #E8E5F1;
--text-normal: #34313D;
--text-normal-rgb: 52, 49, 61;
--text-muted: #6B6877;
--emphasis-color: #7E69AB;
--emphasis-color-light: #B19CD9;
--primary-color: #7E69AB;
--primary-color-rgb: 126, 105, 171;
--primary-color-dark: #5A4A81;
--interactive-accent: var(--primary-color);
--interactive-accent-hover: var(--primary-color-dark);
--link-color: var(--primary-color);
--link-color-hover: var(--primary-color-dark);
--link-unresolved-color: var(--emphasis-color-light);
--blockquote-border-color: var(--primary-color);
--checkbox-color: var(--primary-color);
--text-accent: var(--primary-color-dark);
--divider-color: #E2DFED;
--text-selection: #ECE9F5;
--scrollbar-thumb: rgba(126, 105, 171, .3);
--scrollbar-track: rgba(251, 251, 254, .2);
--code-background: #F3F1F8;
--code-normal: var(--text-normal);
--code-comment: #928EAA;
--code-function: #7E69AB;
--code-important: #5A4A81;
--code-keyword: #8E7BB6;
--code-property: #5B8A46;
--code-punctuation: #6B6877;
--code-string: #4A7C9B;
--code-tag: #5A4A81;
--code-value: #5A4A81;
--heading-primary: #5a3f7d;
--heading-secondary: #a896f0;
--heading-tertiary: #5885AF;
--heading-quaternary: #d66f88;
--heading-quinary: #8854d0;
--heading-senary: #3c40c6;
--heading-primary-rgb: 90, 63, 125;
--heading-secondary-rgb: 168, 150, 240;
--heading-tertiary-rgb: 88, 133, 175;
--heading-quaternary-rgb: 214, 111, 136;
--heading-quinary-rgb: 136, 84, 208;
--heading-senary-rgb: 60, 64, 198;
--callout-note: #E9D5A3;
--callout-note-rgb: 233, 213, 163;
--callout-info: #5885AF;
--callout-info-rgb: 88, 133, 175;
--callout-warning: #C67D3D;
--callout-warning-rgb: 198, 125, 61;
--callout-example: #726DA8;
--callout-example-rgb: 114, 109, 168;
--callout-quote: #928EAA;
--callout-quote-rgb: 146, 142, 170;
--callout-success: #6B9080;
--callout-success-rgb: 107, 144, 128;
--callout-danger: #B56576;
--callout-danger-rgb: 181, 101, 118;
--callout-cite: #5E548E;
--callout-cite-rgb: 94, 84, 142;
--callout-video: #4A6FA5;
--callout-video-rgb: 74, 111, 165;
--highlight-bg: #d4c9e8;
--highlight-bg-rgb: 212, 201, 232;
--highlight-bg-dark: #bfafe0;
--highlight-bg-dark-color: #2a2438;
--surface-accent: #E2DFED;
--surface-accent-rgb: 226, 223, 237;
--surface-dark: #34313D;
--surface-dark-rgb: 52, 49, 61;
--tab-bg-inactive: rgba(126, 105, 171, .05);
--tab-bg-inactive-hover: rgba(126, 105, 171, .1);
}`,
    },
    "paper-theme": {
      general: `.paper-theme {
--accent-h: 210;
--accent-s: 15%;
--accent-l: 55%;
}`,
      dark: `.theme-light.paper-theme, .paper-theme {
--setting-items-background: var(--background-secondary);
}

.paper-theme {
--background-primary: #191919;
--background-primary-rgb: 25, 25, 25;
--background-secondary: #2C2C2E;
--background-secondary-rgb: 44, 44, 46;
--background-secondary-alt: #3A3A3C;
--text-normal: #E5E5EA;
--text-normal-rgb: 229, 229, 234;
--text-muted: #98989D;
--text-faint: #636366;
--bold-color: #FFFFFF;
--italic-color: #FFD60A;
--emphasis-color: #FFD60A;
--emphasis-color-light: #FFD60A;
--primary-color: #8E8E93;
--primary-color-rgb: 142, 142, 147;
--primary-color-dark: #636366;
--interactive-accent: #FFD60A;
--interactive-accent-hover: #FFC107;
--link-color: #FFD60A;
--link-color-hover: #FFC107;
--link-unresolved-color: #FFD60A;
--blockquote-border-color: #FFD60A;
--checkbox-color: #FFD60A;
--text-accent: #FFD60A;
--divider-color: rgba(255, 255, 255, 0.1);
--text-selection: rgba(255, 214, 10, 0.2);
--scrollbar-thumb: rgba(255, 255, 255, 0.15);
--scrollbar-track: rgba(255, 255, 255, 0.02);
--code-background: #252527;
--code-normal: #d1d1d6;
--code-comment: #8e8e93;
--code-function: #FFD60A;
--code-important: #FFD60A;
--code-keyword: #E5E5EA;
--code-property: #b0b0b5;
--code-punctuation: #8e8e93;
--code-string: #FFD60A;
--code-tag: #8E8E93;
--code-value: #d1d1d6;
--heading-primary: #FFD60A;
--heading-secondary: #FFD60A;
--heading-tertiary: #FFD60A;
--heading-quaternary: #FFD60A;
--heading-quinary: #FFD60A;
--heading-senary: #FFD60A;
--heading-primary-rgb: 255, 214, 10;
--heading-secondary-rgb: 255, 214, 10;
--heading-tertiary-rgb: 255, 214, 10;
--heading-quaternary-rgb: 255, 214, 10;
--heading-quinary-rgb: 255, 214, 10;
--heading-senary-rgb: 255, 214, 10;
--callout-note: #FFD60A;
--callout-note-rgb: 255, 214, 10;
--callout-info: #FFD60A;
--callout-info-rgb: 255, 214, 10;
--callout-warning: #FFD60A;
--callout-warning-rgb: 255, 214, 10;
--callout-faq: #FFD60A;
--callout-faq-rgb: 255, 214, 10;
--callout-question: #FFD60A;
--callout-question-rgb: 255, 214, 10;
--callout-success: #FFD60A;
--callout-success-rgb: 255, 214, 10;
--callout-danger: #FFD60A;
--callout-danger-rgb: 255, 214, 10;
--callout-example: #FFD60A;
--callout-example-rgb: 255, 214, 10;
--callout-cite: #FFD60A;
--callout-cite-rgb: 255, 214, 10;
--callout-video: #FFD60A;
--callout-video-rgb: 255, 214, 10;
--callout-quote: #FFD60A;
--callout-quote-rgb: 255, 214, 10;
--highlight-bg: rgba(255, 214, 10, 0.2);
--highlight-bg-rgb: 255, 214, 10;
--highlight-bg-dark: rgba(255, 214, 10, 0.3);
--highlight-bg-dark-color: rgba(255, 214, 10, 0.5);
--highlight-bg-light-color: var(--text-normal);
--tab-bg-inactive: transparent;
--tab-bg-inactive-hover: rgba(255, 255, 255, 0.05);
}

.paper-theme .markdown-rendered table th, .paper-theme .markdown-preview-view table th {
color: #191919 !important;
}`,
      light: `.paper-theme, .theme-dark.paper-theme {
--setting-items-background: var(--background-secondary);
}

.paper-theme {
--background-primary: #F3F1EC;
--background-primary-rgb: 243, 241, 236;
--background-secondary: #E5E3E0;
--background-secondary-rgb: 229, 227, 224;
--background-secondary-alt: #DBD9D6;
--text-normal: #656360;
--text-normal-rgb: 101, 99, 96;
--text-muted: #969491;
--text-faint: #C7C5C2;
--bold-color: #D14532;
--italic-color: #D14532;
--emphasis-color: #D14532;
--emphasis-color-light: #E65A48;
--primary-color: #555555;
--primary-color-rgb: 85, 85, 85;
--primary-color-dark: #333333;
--interactive-accent: #555555;
--interactive-accent-hover: #333333;
--link-color: #D14532;
--link-color-hover: #B83E2D;
--link-unresolved-color: #E65A48;
--blockquote-border-color: #D14532;
--checkbox-color: #D14532;
--text-accent: #D14532;
--divider-color: rgba(0, 0, 0, var(--opacity-hover));
--text-selection: rgba(209, 69, 50, 0.15);
--scrollbar-thumb: rgba(0, 0, 0, var(--opacity-divider));
--scrollbar-track: rgba(0, 0, 0, 0.03);
--code-background: #E8E7E3;
--code-normal: #1C1C1E;
--code-comment: #8E8E93;
--code-function: #555555;
--code-important: #C96652;
--code-keyword: #1C1C1E;
--code-property: #555555;
--code-punctuation: #8E8E93;
--code-string: #C96652;
--code-tag: #555555;
--code-value: #1C1C1E;
--heading-primary: #D14532;
--heading-secondary: #D14532;
--heading-tertiary: #D14532;
--heading-quaternary: #D14532;
--heading-quinary: #D14532;
--heading-senary: #D14532;
--heading-primary-rgb: 209, 69, 50;
--heading-secondary-rgb: 209, 69, 50;
--heading-tertiary-rgb: 209, 69, 50;
--heading-quaternary-rgb: 209, 69, 50;
--heading-quinary-rgb: 209, 69, 50;
--heading-senary-rgb: 209, 69, 50;
--callout-note: #D14532;
--callout-note-rgb: 209, 69, 50;
--callout-info: #D14532;
--callout-info-rgb: 209, 69, 50;
--callout-warning: #D14532;
--callout-warning-rgb: 209, 69, 50;
--callout-faq: #D14532;
--callout-faq-rgb: 209, 69, 50;
--callout-question: #D14532;
--callout-question-rgb: 209, 69, 50;
--callout-success: #D14532;
--callout-success-rgb: 209, 69, 50;
--callout-danger: #D14532;
--callout-danger-rgb: 209, 69, 50;
--callout-example: #D14532;
--callout-example-rgb: 209, 69, 50;
--callout-cite: #D14532;
--callout-cite-rgb: 209, 69, 50;
--callout-video: #D14532;
--callout-video-rgb: 209, 69, 50;
--callout-quote: #D14532;
--callout-quote-rgb: 209, 69, 50;
--highlight-bg: rgba(209, 69, 50, 0.2);
--highlight-bg-rgb: 209, 69, 50;
--highlight-bg-dark: rgba(209, 69, 50, 0.3);
--tab-bg-inactive: transparent;
--tab-bg-inactive-hover: rgba(0, 0, 0, 0.05);
}`,
    },
    "layout-card": {
      general: `body:not(.is-mobile).layout-card .workspace-tab-header-container {
background-color: var(--background-secondary-alt);
height: 50px;
padding: 8px 5px 1px 5px;
display: flex;
align-items: center;
}

body:not(.is-mobile).layout-card .workspace-tab-header-container-inner {
display: flex;
align-items: center;
height: 100%;
margin: 0;
padding: 0 10px;
gap: 6px;
}

body:not(.is-mobile).layout-card .workspace-tab-header {
background-color: rgba(var(--background-secondary-rgb), .3);
border-radius: var(--r3) !important;
height: var(--height-input);
display: flex;
transition: background-color var(--transition-ui), transform var(--transition-ui), box-shadow var(--transition-ui), border-radius var(--transition-ui);
}

body:not(.is-mobile):not(.depth-shadows).layout-card .workspace-tab-header {
background-color: rgba(var(--background-secondary-rgb), .2) !important;
}

body:not(.is-mobile):not(.depth-shadows).layout-card .workspace-tab-header.is-active {
background-color: var(--background-primary) !important;
border: none !important;
box-shadow: 0 0 20px rgba(var(--primary-color-rgb), 0.15) !important;
}

body:not(.is-mobile):not(.depth-shadows).layout-card .workspace-tab-header:not(.is-active):hover {
background-color: rgba(var(--background-secondary-rgb), 0.4);
}

body:not(.is-mobile).depth-shadows.layout-card .workspace-tab-header {
background-color: rgba(var(--background-secondary-rgb), .3);
}

body:not(.is-mobile).depth-shadows.layout-card .workspace-tab-header.is-active {
background-color: var(--background-primary) !important;
border: none !important;
transform: translateY(-2px) !important;
box-shadow: var(--depth-2) !important;
}

body:not(.is-mobile).depth-shadows.layout-card .workspace-tab-header:not(.is-active):hover {
transform: scale(1.02);
background-color: rgba(var(--background-secondary-rgb), 0.5);
}

body:not(.is-mobile).layout-card .workspace-tab-header-inner-title {
color: var(--text-muted);
opacity: 0.7;
}

body:not(.is-mobile).layout-card .workspace-tab-header.is-active .workspace-tab-header-inner-title {
opacity: 1;
color: var(--text-normal);
font-weight: 600;
}

body.layout-card .workspace-split.mod-left-split, body.layout-card .workspace-split.mod-right-split {
background-color: var(--background-secondary-alt);
}

body.mod-macos.is-hidden-frameless.layout-card .workspace-tab-header-container-inner {
padding-inline-start: 5px;
padding-inline-end: 5px;
}

body.layout-card {
--card-bg: var(--background-primary);
--card-radius: 20px;
}

body:not(.is-mobile).layout-card .workspace-leaf {
background-color: transparent !important;
margin: 5px;
}

body:not(.is-mobile).layout-card .workspace-leaf-content {
background-color: var(--card-bg) !important;
border-radius: var(--card-radius);
transform: none !important;
}

body:not(.is-mobile).layout-card .workspace-tab-header-container {
background-color: transparent !important;
}

body:not(.is-mobile).layout-card .workspace-leaf, body:not(.is-mobile).layout-card .workspace-tab-header-container, body:not(.is-mobile).layout-card .workspace-split, body:not(.is-mobile).layout-card .workspace-leaf-resize-handle, body:not(.is-mobile).layout-card .sidebar-left, body:not(.is-mobile).layout-card .sidebar-right, body:not(.is-mobile).layout-card .side-dock-plugin-panel, body:not(.is-mobile).layout-card .side-dock-plugin-panel-inner {
border-inline-end: none !important;
border-inline-start: none !important;
border-block-start: none !important;
border-block-end: none !important;
}

body:not(.is-mobile).layout-card .workspace-split, body:not(.is-mobile).layout-card .workspace-split.mod-vertical, body:not(.is-mobile).layout-card .workspace-split.mod-horizontal {
background-color: var(--background-secondary) !important;
border-radius: 0 !important;
border: none !important;
box-shadow: none !important;
transform: none !important;
z-index: auto !important;
}

body:not(.is-mobile).layout-card .workspace-split:hover, body:not(.is-mobile).layout-card .workspace-split:focus, body:not(.is-mobile).layout-card .workspace-split:focus-within, body:not(.is-mobile).layout-card .workspace-split.mod-vertical:hover, body:not(.is-mobile).layout-card .workspace-split.mod-vertical:focus, body:not(.is-mobile).layout-card .workspace-split.mod-vertical:focus-within, body:not(.is-mobile).layout-card .workspace-split.mod-horizontal:hover, body:not(.is-mobile).layout-card .workspace-split.mod-horizontal:focus, body:not(.is-mobile).layout-card .workspace-split.mod-horizontal:focus-within {
background-color: var(--background-secondary) !important;
border-radius: 0 !important;
border: none !important;
box-shadow: none !important;
transform: none !important;
z-index: auto !important;
}

body:not(.is-mobile).layout-card .view-header {
border: none !important;
border-block-end: none !important;
box-shadow: none !important;
transition: none !important;
transform: none !important;
}

body:not(.is-mobile).layout-card .workspace-leaf-content {
margin-block-end: 20px;
}

body:not(.is-mobile).layout-card .workspace-split.mod-left-split .workspace-tab-header-inner:hover, body:not(.is-mobile).layout-card .workspace-split.mod-right-split .workspace-tab-header-inner:hover {
transform: scale(1.05) !important;
transition: transform var(--transition-ui) !important;
}

body:not(.is-mobile).layout-card .workspace-split.mod-left-split .workspace-tab-header-inner, body:not(.is-mobile).layout-card .workspace-split.mod-right-split .workspace-tab-header-inner {
transition: transform var(--transition-ui) !important;
}

body:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header-container {
background-color: transparent !important;
padding: 8px 5px 1px 5px !important;
border: none !important;
height: 50px !important;
display: flex !important;
align-items: center !important;
}

body:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header-container .workspace-tab-header-container-inner {
background-color: rgba(var(--primary-color-rgb), 0.08) !important;
border-radius: var(--radius-pill) !important;
padding: 1px 4px 1px !important;
margin: 0 auto !important;
gap: 3px !important;
height: 42px !important;
width: fit-content !important;
max-width: calc(100% - 40px);
justify-content: center !important;
border: none !important;
display: flex !important;
align-items: center !important;
}

body:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header {
border-radius: var(--r2) !important;
height: var(--height-button) !important;
margin: 0 !important;
padding: 0 12px !important;
background-color: transparent !important;
transition: background-color var(--transition-ui), transform var(--transition-ui), box-shadow var(--transition-ui), border-radius var(--transition-ui) !important;
border: none !important;
box-shadow: none !important;
}

body:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header.is-active {
background-color: var(--background-primary) !important;
border-radius: var(--r4) !important;
border: none !important;
box-shadow: none !important;
color: var(--text-normal) !important;
transform: none !important;
}

body:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header-inner {
padding: 0 !important;
}

body:not(.is-mobile).mod-macos.is-hidden-frameless.layout-card .workspace-split.mod-left-split .workspace-tab-header-container-inner {
padding-inline-start: 4px !important;
margin-inline-start: 80px !important;
margin-inline-end: auto !important;
width: fit-content !important;
}

body:not(.is-mobile).layout-card .workspace-split.mod-right-split .workspace-tab-header-container .workspace-tab-header-container-inner {
margin-inline-start: 12px !important;
}

body.layout-card:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
background-color: var(--background-primary) !important;
}

body:not(.is-mobile).layout-card .view-header :is(.view-actions, .view-header-nav-buttons) {
background-color: rgba(var(--primary-color-rgb), 0.08) !important;
border-radius: var(--radius-pill) !important;
padding: 2px 4px !important;
margin: 6px 12px !important;
gap: 2px !important;
height: var(--height-button-sm) !important;
width: fit-content !important;
border: none !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
}

body.layout-card .view-header :is(.view-actions, .view-header-nav-buttons) .clickable-icon {
border-radius: var(--r2) !important;
height: 26px !important;
width: 26px !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
background-color: transparent !important;
transition: background-color var(--transition-ui), box-shadow var(--transition-ui), color var(--transition-ui), transform var(--transition-ui) !important;
padding: 0 !important;
color: var(--text-muted) !important;
}

body.layout-card .view-header :is(.view-actions, .view-header-nav-buttons) .clickable-icon:hover {
background-color: var(--background-primary) !important;
border-radius: var(--r3) !important;
box-shadow:
        0 4px 10px rgba(0, 0, 0, var(--opacity-hover)),
        0 1px 3px rgba(0, 0, 0, 0.04) !important;
color: var(--text-normal) !important;
transform: none !important;
}

body.layout-card .search-result {
background-color: rgba(var(--primary-color-rgb), 0.04) !important;
border-radius: var(--card-radius);
margin-block-end: var(--s4);
padding: var(--s3) !important;
border: none;
box-shadow: none !important;
}

body.layout-card .search-result-file-match {
background-color: transparent !important;
border: none !important;
box-shadow: none !important;
padding: 6px 10px !important;
border-radius: var(--r1) !important;
margin: 2px 0 !important;
color: var(--text-normal) !important;
}

body.layout-card .search-result-file-match:hover {
background-color: rgba(var(--primary-color-rgb), 0.05) !important;
}

body.layout-card .search-result-file-match em {
background-color: var(--text-highlight-bg);
color: var(--text-normal);
font-weight: var(--weight-bold);
padding-block: 0;
padding-inline: 4px;
border-radius: 4px;
}

body.layout-card .tag-container {
background-color: rgba(var(--primary-color-rgb), 0.04) !important;
border-radius: var(--card-radius);
padding: var(--s3) !important;
border: none;
}

body.show-header-on-hover.layout-card .view-header:hover {
background-color: transparent !important;
border-block-end: none !important;
}

body.layout-card .workspace-leaf:hover {
box-shadow: none !important;
}

body.is-mobile.layout-card .metadata-container {
background: var(--background-secondary) !important;
background-color: var(--background-secondary) !important;
border: 1px solid var(--background-modifier-border) !important;
border-radius: var(--radius-m) !important;
overflow: visible !important;
box-shadow: var(--shadow-s) !important;
padding: 16px !important;
}

body.layout-card .workspace-leaf {
margin: 8px !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-leaf-content {
box-shadow: var(--depth-2) !important;
transition: box-shadow 0.3s var(--ease-bounce-sm) !important;
overflow: hidden !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-leaf:hover .workspace-leaf-content {
box-shadow: var(--depth-3) !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner {
box-shadow: var(--depth-1) !important;
transition: var(--transition-depth) !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner:hover {
box-shadow: var(--depth-2) !important;
transform: translateY(-1px) !important;
}

body.layout-card:not(.show-ribbon) .workspace-ribbon.side-dock-ribbon.mod-left {
display: none !important;
}

body.layout-card .workspace-ribbon.side-dock-ribbon.mod-left {
background-color: rgba(var(--primary-color-rgb), 0.08) !important;
border-radius: var(--radius-pill) !important;
border: none !important;
box-shadow: none !important;
padding: 8px 6px !important;
margin: 12px 4px !important;
margin-top: 80px !important;
width: fit-content !important;
min-height: 0 !important;
height: auto !important;
max-height: max-content !important;
gap: 4px !important;
display: flex !important;
flex-direction: column !important;
align-items: center !important;
flex-shrink: 0 !important;
overflow: visible !important;
}

body.layout-card .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed {
height: auto !important;
min-height: 0 !important;
}

body.mod-macos.is-hidden-frameless.layout-card .workspace-ribbon.side-dock-ribbon.mod-left:not(.is-collapsed) {
margin-top: 90px !important;
}

body.layout-card:not(.is-left-sidedock-open) .workspace-ribbon.side-dock-ribbon.mod-left:not(.is-collapsed) {
background-color: rgba(var(--primary-color-rgb), 0.08) !important;
border-radius: var(--radius-pill) !important;
border: none !important;
box-shadow: none !important;
}

body.layout-card .workspace-ribbon.mod-left:before {
display: none !important;
}

body.layout-card .side-dock-ribbon-action {
margin: 0 !important;
}

body.layout-card .side-dock-ribbon-action .clickable-icon {
background-color: transparent !important;
border-radius: var(--r3) !important;
}

body.layout-card .side-dock-ribbon-action .clickable-icon:hover {
background-color: rgba(var(--background-secondary-rgb), 0.5) !important;
}

body.layout-card .side-dock-ribbon-action.is-active .clickable-icon {
background-color: var(--background-primary) !important;
border-radius: var(--r3) !important;
}

body.layout-card .workspace-ribbon-collapse-btn {
margin-top: 4px !important;
}

body.depth-shadows.layout-card .workspace-ribbon.side-dock-ribbon.mod-left:not(.is-collapsed) {
box-shadow: none !important;
}

body:not(.is-mobile).layout-card:not(.show-ribbon) .workspace-ribbon.side-dock-ribbon.mod-left {
display: none !important;
}

body.layout-card .workspace.is-left-sidedock-open, body.layout-card .workspace {
background: var(--background-secondary) !important;
}`,
      dark: `:is(body:not(.is-mobile).layout-card, body:not(.is-mobile).theme-dark) .workspace-tab-header:not(.is-active) {
background-color: rgba(var(--primary-color-rgb), 0.08) !important;
}`,
    },
    "depth-shadows": {
      general: `body:not(.is-mobile).layout-card .workspace-tab-header {
background-color: rgba(var(--background-secondary-rgb), .3);
}

body:not(.is-mobile).layout-card .workspace-tab-header.is-active {
background-color: var(--background-primary) !important;
border: none !important;
transform: translateY(-2px) !important;
box-shadow: var(--depth-2) !important;
}

body:not(.is-mobile).layout-card .workspace-tab-header:not(.is-active):hover {
transform: scale(1.02);
background-color: rgba(var(--background-secondary-rgb), 0.5);
}

body.depth-shadows {
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
}

body.depth-shadows :is(.callout, .metadata-container, .canvas-card) {
box-shadow: var(--depth-2) !important;
transition: box-shadow 0.3s var(--ease-bounce-sm), transform 0.3s var(--ease-bounce-sm) !important;
}

body.depth-shadows .callout:hover {
box-shadow: var(--depth-3) !important;
transform: translateY(-2px) !important;
}

body.depth-shadows .metadata-container:hover {
box-shadow: var(--depth-3) !important;
transform: translateY(-1px) !important;
}

body.depth-shadows .canvas-card:hover {
box-shadow: var(--depth-4) !important;
transform: translateY(-3px) scale(1.01) !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-leaf-content {
box-shadow: var(--depth-2) !important;
transition: box-shadow 0.3s var(--ease-bounce-sm) !important;
overflow: hidden !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-leaf:hover .workspace-leaf-content {
box-shadow: var(--depth-3) !important;
}

body.depth-shadows .modal-container .modal {
box-shadow: var(--depth-4) !important;
}

body.depth-shadows .popover {
box-shadow: var(--depth-3) !important;
}

body.depth-shadows .suggestion-container {
box-shadow: var(--depth-3) !important;
}

body.depth-shadows .menu {
box-shadow: var(--depth-3) !important;
}

body.depth-shadows :is(.markdown-rendered pre, .markdown-preview-view pre, .markdown-source-view.mod-cm6 .HyperMD-codeblock) {
box-shadow: var(--depth-1) !important;
transition: box-shadow var(--slow) !important;
}

body.depth-shadows :is(.markdown-rendered pre:hover, .markdown-preview-view pre:hover) {
box-shadow: var(--depth-2) !important;
}

body.depth-shadows .button, body.depth-shadows button:not(.clickable-icon) {
box-shadow: var(--depth-1) !important;
transition: var(--transition-depth) !important;
}

body.depth-shadows .button:hover, body.depth-shadows button:not(.clickable-icon):hover {
box-shadow: var(--depth-2) !important;
transform: translateY(-1px) !important;
}

body.depth-shadows .multi-select-pill {
box-shadow: var(--depth-1) !important;
transition: box-shadow 0.2s ease, transform 0.2s ease !important;
}

body.depth-shadows .multi-select-pill:hover {
box-shadow: var(--depth-2) !important;
transform: translateY(-1px) !important;
}

body.depth-shadows .workspace-tab-header {
box-shadow: var(--depth-1) !important;
transition: var(--transition-depth) !important;
}

body.depth-shadows .workspace-tab-header:hover {
box-shadow: var(--depth-2) !important;
}

body.depth-shadows .workspace-tab-header.is-active {
box-shadow: var(--depth-2) !important;
}

body.depth-shadows .clickable-icon:not(.workspace-tab-header-container *):not(.nav-buttons-container *) {
transition: box-shadow 0.2s ease, transform 0.2s ease !important;
}

body.depth-shadows .clickable-icon:not(.workspace-tab-header-container *):not(.nav-buttons-container *):hover {
box-shadow: var(--depth-1) !important;
transform: translateY(-1px) !important;
}

body.depth-shadows .nav-file-title:hover, body.depth-shadows .nav-folder-title:hover {
box-shadow: var(--depth-1) !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner {
box-shadow: var(--depth-1) !important;
transition: var(--transition-depth) !important;
}

body.depth-shadows:not(.is-mobile).layout-card .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner:hover {
box-shadow: var(--depth-2) !important;
transform: translateY(-1px) !important;
}

body.depth-shadows .nav-buttons-container {
box-shadow: var(--depth-1) !important;
transition: var(--transition-depth) !important;
}

body.depth-shadows .nav-buttons-container:hover {
box-shadow: var(--depth-2) !important;
transform: translateY(-1px) !important;
}

body.depth-shadows .workspace-sidedock-vault-profile {
box-shadow: var(--depth-1) !important;
}

body.depth-shadows .workspace-sidedock-vault-profile:hover {
box-shadow: var(--depth-2) !important;
}

body.depth-shadows .side-dock-ribbon-action .clickable-icon:hover {
box-shadow: var(--depth-1);
}

body.depth-shadows .side-dock-ribbon-action.is-active .clickable-icon {
box-shadow: var(--depth-2);
}

body.layout-card .workspace-ribbon.side-dock-ribbon.mod-left:not(.is-collapsed) {
box-shadow: none !important;
}`,
      dark: `body.theme-dark {
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
}`,
    },
    "enable-monochrome": {
      general: `body.enable-monochrome :is(h1, h2, h3, h4, h5, h6, strong, em, b, i, .cm-header, .cm-strong, .cm-em, .cm-bold, .cm-italic) {
color: var(--text-normal) !important;
}

body.enable-monochrome :is(a, .cm-link, .external-link, .internal-link) {
color: var(--text-normal) !important;
text-decoration-color: var(--text-normal) !important;
}

body.enable-monochrome .callout-title {
color: var(--text-normal) !important;
}`,
      dark: `body.theme-light, body.theme-dark {
--accent-h: 0;
/* Force Text Elements to Grayscale */
--bold-color: var(--text-normal);
--italic-color: var(--text-normal);
--link-color: var(--text-normal);
--link-color-hover: var(--text-normal);
--text-accent: var(--text-normal);
/* Headings inherit text color */
--heading-primary: var(--text-normal);
--heading-secondary: var(--text-normal);
--heading-tertiary: var(--text-normal);
--heading-quaternary: var(--text-normal);
--heading-quinary: var(--text-normal);
--heading-senary: var(--text-normal);
/* Force Callouts to Single Theme Accent */
--callout-note: var(--emphasis-color);
--callout-info: var(--emphasis-color);
--callout-warning: var(--emphasis-color);
--callout-faq: var(--emphasis-color);
--callout-question: var(--emphasis-color);
--callout-success: var(--emphasis-color);
--callout-danger: var(--emphasis-color);
--callout-example: var(--emphasis-color);
--callout-cite: var(--emphasis-color);
--callout-video: var(--emphasis-color);
--callout-quote: var(--emphasis-color);
/* Folders inherit accent */
--folder-color: var(--emphasis-color);
--folder-text-color: var(--text-normal);
--folder-heading-rgb: var(--heading-primary-rgb);
}

body.enable-monochrome {
--background-primary: #111111;
--background-primary-rgb: 17, 17, 17;
--background-secondary: #0a0a0a;
--setting-items-background: var(--background-secondary);
--background-secondary-rgb: 10, 10, 10;
--background-secondary-alt: #000000;
--text-normal: #eeeeee;
--text-normal-rgb: 238, 238, 238;
--text-muted: #888888;
--text-faint: #555555;
--heading-primary-rgb: 255, 255, 255;
--heading-secondary-rgb: 238, 238, 238;
--heading-tertiary-rgb: 221, 221, 221;
--heading-quaternary-rgb: 204, 204, 204;
--heading-quinary-rgb: 187, 187, 187;
--heading-senary-rgb: 170, 170, 170;
--code-background: #0a0a0a;
--code-normal: #eeeeee;
--code-comment: #888888;
/* Structural Grays */
--divider-color: rgba(255, 255, 255, .1);
--text-selection: rgba(255, 255, 255, .1);
--scrollbar-thumb: rgba(255, 255, 255, .2);
--scrollbar-track: rgba(255, 255, 255, .05);
--modal-background: #111111;
--modal-border-color: rgba(255, 255, 255, .1);
--background-modifier-border: rgba(255, 255, 255, .1);
--background-modifier-border-hover: rgba(255, 255, 255, .2);
--input-background: #0a0a0a;
--input-border-color: rgba(255, 255, 255, .1);
--tab-bg-inactive: rgba(255, 255, 255, .02);
--tab-bg-inactive-hover: rgba(255, 255, 255, .05);
}

.enable-monochrome :is(.markdown-rendered, .markdown-preview-view) table th {
background-color: #0f0f0f !important;
color: #e8e8e8 !important;
border-block-end: var(--border-thick) solid rgba(232, 232, 232, .2) !important;
}

.enable-monochrome :is(.markdown-rendered, .markdown-preview-view) table thead tr {
background-color: #0f0f0f !important;
}

.enable-monochrome .markdown-rendered table tbody tr {
border-block-end: var(--border-thin) solid rgba(232, 232, 232, .1);
}

.enable-monochrome :is( .setting-item-name, .setting-item-description, .setting-item-info, .setting-item-control, .vertical-tab-content, .horizontal-tab-content, .modal-content, .prompt-instructions, label, .checkbox-container ) {
color: #e8e8e8 !important;
}

.enable-monochrome .setting-item-description {
color: rgba(232, 232, 232, .7) !important;
}

.enable-monochrome .setting-item-heading {
color: #e8e8e8 !important;
font-weight: 700 !important;
}

.enable-monochrome .setting-item {
border-block-start: var(--border-thin) solid rgba(232, 232, 232, .1);
}

.enable-monochrome :is( input[type="text"], input[type="search"], input[type="email"], input[type="password"], input[type="number"], textarea, select ) {
background-color: #0f0f0f !important;
border: var(--border-thin) solid rgba(232, 232, 232, .2) !important;
color: #e8e8e8 !important;
}

.enable-monochrome :is( input[type="text"], input[type="search"], textarea, select ):focus {
border-color: rgba(232, 232, 232, .4) !important;
}

.enable-monochrome select option {
background-color: #0f0f0f !important;
color: #e8e8e8 !important;
}

.enable-monochrome :is(button, .clickable-icon) {
color: #e8e8e8 !important;
}

.enable-monochrome .mod-cta, .enable-monochrome button.mod-cta {
background-color: #252525 !important;
color: #e8e8e8 !important;
}

.enable-monochrome .vertical-tab-nav-item.is-active, .enable-monochrome .vertical-tab-nav-item.is-active:hover, .enable-monochrome .vertical-tab-nav-item.is-active :is(.vertical-tab-nav-item-title), .enable-monochrome .vertical-tab-nav-item.is-active:hover :is(.vertical-tab-nav-item-title) {
background-color: #e8e8e8 !important;
color: #000000 !important;
font-weight: 600 !important;
}

.enable-monochrome .vertical-tab-nav-item.is-active :is(svg, .vertical-tab-nav-item-icon), .enable-monochrome .vertical-tab-nav-item.is-active:hover :is(svg, .vertical-tab-nav-item-icon) {
color: #000000 !important;
stroke: #000000 !important;
background-color: inherit !important;
border-radius: var(--r1);
padding: 2px;
}

.enable-monochrome .vertical-tab-nav-item {
color: rgba(232, 232, 232, .7) !important;
}

.enable-monochrome .vertical-tab-nav-item:not(.is-active):hover {
background-color: rgba(232, 232, 232, .12) !important;
color: #e8e8e8 !important;
}

.enable-monochrome .vertical-tab-nav-item :is(svg) {
color: rgba(232, 232, 232, .7) !important;
stroke: rgba(232, 232, 232, .7) !important;
}

.enable-monochrome .vertical-tab-nav-item:not(.is-active):hover :is(svg) {
color: #e8e8e8 !important;
stroke: #e8e8e8 !important;
}

.enable-monochrome :is(mark, .cm-highlight, mark:hover, .cm-highlight:hover) {
background-color: #d4af37 !important;
color: #000000 !important;
}`,
      light: `body.theme-light, body.theme-dark {
--accent-h: 0;
/* Force Text Elements to Grayscale */
--bold-color: var(--text-normal);
--italic-color: var(--text-normal);
--link-color: var(--text-normal);
--link-color-hover: var(--text-normal);
--text-accent: var(--text-normal);
/* Headings inherit text color */
--heading-primary: var(--text-normal);
--heading-secondary: var(--text-normal);
--heading-tertiary: var(--text-normal);
--heading-quaternary: var(--text-normal);
--heading-quinary: var(--text-normal);
--heading-senary: var(--text-normal);
/* Force Callouts to Single Theme Accent */
--callout-note: var(--emphasis-color);
--callout-info: var(--emphasis-color);
--callout-warning: var(--emphasis-color);
--callout-faq: var(--emphasis-color);
--callout-question: var(--emphasis-color);
--callout-success: var(--emphasis-color);
--callout-danger: var(--emphasis-color);
--callout-example: var(--emphasis-color);
--callout-cite: var(--emphasis-color);
--callout-video: var(--emphasis-color);
--callout-quote: var(--emphasis-color);
/* Folders inherit accent */
--folder-color: var(--emphasis-color);
--folder-text-color: var(--text-normal);
--folder-heading-rgb: var(--heading-primary-rgb);
}

body.enable-monochrome {
--background-primary: rgb(250, 250, 250);
--background-primary-rgb: 250, 250, 250;
--background-secondary: rgb(242, 242, 242);
--setting-items-background: var(--background-secondary);
--background-secondary-rgb: 242, 242, 242;
--background-secondary-alt: rgb(235, 235, 235);
--text-normal: #111111;
--text-normal-rgb: 17, 17, 17;
--text-muted: #666666;
--text-faint: #999999;
--heading-primary-rgb: 0, 0, 0;
--heading-secondary-rgb: 17, 17, 17;
--heading-tertiary-rgb: 34, 34, 34;
--heading-quaternary-rgb: 51, 51, 51;
--heading-quinary-rgb: 68, 68, 68;
--heading-senary-rgb: 85, 85, 85;
--code-background: #f5f5f5;
--code-normal: #111111;
--code-comment: #888888;
/* Structural Grays */
--divider-color: rgba(0, 0, 0, .1);
--text-selection: rgba(0, 0, 0, .1);
--scrollbar-thumb: rgba(0, 0, 0, .2);
--scrollbar-track: rgba(0, 0, 0, .05);
--tab-bg-inactive: rgba(0, 0, 0, .03);
--tab-bg-inactive-hover: rgba(0, 0, 0, .08);
}

.enable-monochrome :is(.markdown-rendered, .markdown-preview-view) table th {
background-color: #e0e0e0 !important;
color: #000000 !important;
border-block-end: var(--border-thick) solid rgba(0, 0, 0, .2) !important;
}

.enable-monochrome :is(.markdown-rendered, .markdown-preview-view) table thead tr {
background-color: #e0e0e0 !important;
}

.enable-monochrome :is( .setting-item-name, .setting-item-description, .setting-item-info, label ) {
color: #000000 !important;
}

.enable-monochrome .setting-item-description {
color: rgba(0, 0, 0, .65) !important;
}

.enable-monochrome .vertical-tab-nav-item.is-active, .enable-monochrome .vertical-tab-nav-item.is-active:hover, .enable-monochrome .vertical-tab-nav-item.is-active :is(.vertical-tab-nav-item-title), .enable-monochrome .vertical-tab-nav-item.is-active:hover :is(.vertical-tab-nav-item-title) {
background-color: #000000 !important;
color: #ffffff !important;
font-weight: 600 !important;
}

.enable-monochrome .vertical-tab-nav-item.is-active :is(svg, .vertical-tab-nav-item-icon), .enable-monochrome .vertical-tab-nav-item.is-active:hover :is(svg, .vertical-tab-nav-item-icon) {
color: #ffffff !important;
stroke: #ffffff !important;
}

.enable-monochrome :is(mark, .cm-highlight, mark:hover, .cm-highlight:hover) {
background-color: #ffeb3b !important;
color: #000000 !important;
}`,
    },
    "animation-style-whimsy": {
      general: `body.animation-style-whimsy:not(.disable-ui-animations) .modal-container {
transform-origin: center;
animation: whimsy-modal-open var(--whimsy-fast) var(--ease-bounce-lg) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) .modal {
animation: none !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-container:not(.is-collapsed) .metadata-content {
animation: whimsy-settle-bounce var(--whimsy-normal) forwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-container:not(.is-collapsed) {
animation: whimsy-settle-bounce var(--whimsy-slow) forwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-container.is-collapsed {
animation: whimsy-collapse-bounce var(--whimsy-normal) var(--ease-bounce-xl) forwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .notice-container {
animation: whimsy-notice-in var(--whimsy-normal) var(--ease-bounce-xl) !important;
transform-origin: top center;
}

body.animation-style-whimsy:not(.disable-ui-animations) .callout:not(.is-collapsed) {
animation: whimsy-settle-bounce var(--whimsy-normal) var(--ease-bounce-xl) !important;
transform-origin: top center;
}

body.animation-style-whimsy:not(.disable-ui-animations) .callout.is-collapsed {
animation: whimsy-collapse-bounce var(--whimsy-normal) var(--ease-bounce-xl) forwards !important;
transform-origin: top center;
}

body.animation-style-whimsy:not(.disable-ui-animations) .callout .callout-icon {
animation: whimsy-callout-icon-bounce var(--whimsy-normal) var(--ease-bounce-sm) forwards;
transform-origin: center center;
}

body.animation-style-whimsy:not(.disable-ui-animations) .progress-bar-message {
animation: whimsy-float 2s ease-in-out infinite;
display: inline-block;
/* Ensure transform works */
}

body.animation-style-whimsy:not(.disable-ui-animations) .menu, body.animation-style-whimsy:not(.disable-ui-animations) .popover, body.animation-style-whimsy:not(.disable-ui-animations) .prompt, body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-container, body.animation-style-whimsy:not(.disable-ui-animations) .tooltip {
animation: whimsy-modal-open var(--whimsy-fast) var(--ease-bounce-lg) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) input[type="checkbox"]:checked, body.animation-style-whimsy:not(.disable-ui-animations) .task-list-item-checkbox:checked {
animation: whimsy-checkbox-pop var(--whimsy-micro) var(--ease-bounce-md) !important;
}

body.animation-style-whimsy button, body.animation-style-whimsy .clickable-icon {
transition: transform var(--transition-bounce);
}

body.animation-style-whimsy button:hover, body.animation-style-whimsy .clickable-icon:hover {
transform: scale(var(--whimsy-scale-pop));
}

body.animation-style-whimsy button:active, body.animation-style-whimsy .clickable-icon:active {
transform: scale(0.9);
}

body.animation-style-whimsy .workspace-tab-header-inner-close-button {
transition: transform var(--transition-bounce), opacity var(--transition-ui), width var(--transition-ui) !important;
}

body.animation-style-whimsy .workspace-tab-header-inner-close-button:hover {
transform: scale(var(--whimsy-scale-pop)) rotate(90deg);
background-color: var(--primary-color) !important;
color: var(--background-primary) !important;
}

body.animation-style-whimsy .sidebar-toggle-button.mod-left, body.animation-style-whimsy .sidebar-toggle-button.mod-right {
transition: transform 0.5s var(--ease-bounce-md) !important;
}

body.animation-style-whimsy .sidebar-toggle-button.mod-left:hover {
transform: rotate(-180deg) scale(1.1);
}

body.animation-style-whimsy .sidebar-toggle-button.mod-right:hover {
transform: rotate(180deg) scale(1.1);
}

body.animation-style-whimsy .side-dock-ribbon-action:hover, body.animation-style-whimsy .workspace-ribbon-collapse-btn:hover {
transform: scale(var(--whimsy-scale-pop)) rotate(5deg);
}

body.animation-style-whimsy .collapse-icon {
transition: transform var(--transition-bounce) !important;
}

body.animation-style-whimsy .collapse-icon:hover {
transform: scale(1.3);
}

body.animation-style-whimsy .status-bar-item {
transition: transform var(--transition-bounce) !important;
}

body.animation-style-whimsy .status-bar-item:hover {
transform: translateY(-3px);
}

body.animation-style-whimsy .tag, body.animation-style-whimsy .multi-select-pill {
transition: transform var(--transition-bounce) !important;
display: inline-block;
}

body.animation-style-whimsy .tag:hover, body.animation-style-whimsy .multi-select-pill:hover {
transform: scale(var(--whimsy-scale-emphasis)) rotate(-2deg);
}

body.animation-style-whimsy .canvas-control-item {
transition: transform var(--transition-bounce) !important;
}

body.animation-style-whimsy .canvas-control-item:hover {
transform: scale(1.2);
}

body.animation-style-whimsy .search-input-container input {
transition: transform var(--transition-bounce), box-shadow var(--transition-ui) !important;
}

body.animation-style-whimsy .search-input-container input:focus {
transform: scale(var(--whimsy-scale-subtle));
}

body.animation-style-whimsy .workspace-tab-header, body.animation-style-whimsy .workspace-tab-header-inner {
transition: transform 0.4s var(--ease-bounce-sm), background-color var(--transition-ui) !important;
}

body.animation-style-whimsy .view-header {
transition: box-shadow var(--slow), transform 0.4s var(--ease-bounce-sm), background-color var(--transition-ui) !important;
}

body.animation-style-whimsy .side-dock-ribbon-action, body.animation-style-whimsy .workspace-ribbon-collapse-btn, body.animation-style-whimsy .view-header-icon, body.animation-style-whimsy .modal-close-button {
transition: color var(--transition-ui), transform 0.4s var(--ease-bounce-md) !important;
}

body.animation-style-whimsy .metadata-container {
transition: box-shadow var(--slow), transform 0.4s var(--ease-bounce-sm) !important;
}

body.animation-style-whimsy .nav-file-title, body.animation-style-whimsy .nav-folder-title, body.animation-style-whimsy .tree-item-self {
transition: background-color var(--transition-ui), transform 0.3s var(--ease-bounce-sm) !important;
}

body.animation-style-whimsy .nav-file-title:hover, body.animation-style-whimsy .nav-folder-title:hover, body.animation-style-whimsy .tree-item-self:hover {
transform: translateX(3px);
}

body.animation-style-whimsy .checkbox-container {
transition: background-color var(--transition-ui) !important;
}

body.animation-style-whimsy .checkbox-container:after {
transition: transform 0.4s var(--ease-overshoot) !important;
}

body.animation-style-whimsy input[type=range]::-webkit-slider-thumb {
transition: transform 0.2s var(--ease-bounce-md) !important;
}

body.animation-style-whimsy input[type=range]::-webkit-slider-thumb:active {
transform: scale(1.3);
}

body.animation-style-whimsy a.internal-link, body.animation-style-whimsy a.external-link {
transition: transform var(--transition-bounce), color var(--transition-ui), text-shadow var(--transition-ui) !important;
display: inline-block;
/* Required for transform */
}

body.animation-style-whimsy a.internal-link:hover, body.animation-style-whimsy a.external-link:hover {
transform: scale(var(--whimsy-scale-normal));
}

body.animation-style-whimsy .vertical-tab-nav-item {
transition: background-color var(--transition-ui), transform 0.3s var(--ease-bounce-md) !important;
}

body.animation-style-whimsy .vertical-tab-nav-item:hover {
transform: translateX(6px) scale(var(--whimsy-scale-subtle));
}

body.animation-style-whimsy .callout {
transition: transform 0.3s var(--ease-bounce-md), box-shadow var(--slow) !important;
}

body.animation-style-whimsy .callout:hover {
transform: scale(var(--whimsy-scale-subtle)) translateY(-2px);
box-shadow: 0 4px 12px rgba(0, 0, 0, var(--opacity-subtle));
z-index: 10;
}

body.animation-style-whimsy .markdown-rendered blockquote {
transition: transform 0.3s var(--ease-bounce-md), border-left-width var(--transition-ui) !important;
}

body.animation-style-whimsy .markdown-rendered blockquote:hover {
transform: translateX(5px) scale(var(--whimsy-scale-subtle));
border-left-width: 6px;
}

body.animation-style-whimsy img {
transition: transform 0.4s var(--ease-bounce-md) !important;
}

body.animation-style-whimsy img:hover {
transform: scale(1.03) rotate(1deg);
}

body.animation-style-whimsy table {
transition: transform var(--slow) !important;
}

body.animation-style-whimsy table:hover {
transform: scale(var(--whimsy-scale-subtle));
}

body.animation-style-whimsy .markdown-preview-view h1, body.animation-style-whimsy .markdown-preview-view h2, body.animation-style-whimsy .markdown-preview-view h3, body.animation-style-whimsy .markdown-preview-view h4, body.animation-style-whimsy .markdown-preview-view h5, body.animation-style-whimsy .markdown-preview-view h6, body.animation-style-whimsy .markdown-reading-view h1, body.animation-style-whimsy .markdown-reading-view h2, body.animation-style-whimsy .markdown-reading-view h3, body.animation-style-whimsy .markdown-reading-view h4, body.animation-style-whimsy .markdown-reading-view h5, body.animation-style-whimsy .markdown-reading-view h6 {
transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.4), letter-spacing var(--slow), box-shadow var(--transition-ui) !important;
}

body.animation-style-whimsy .markdown-preview-view h1:hover, body.animation-style-whimsy .markdown-preview-view h2:hover, body.animation-style-whimsy .markdown-preview-view h3:hover, body.animation-style-whimsy .markdown-preview-view h4:hover, body.animation-style-whimsy .markdown-preview-view h5:hover, body.animation-style-whimsy .markdown-preview-view h6:hover, body.animation-style-whimsy .markdown-reading-view h1:hover, body.animation-style-whimsy .markdown-reading-view h2:hover, body.animation-style-whimsy .markdown-reading-view h3:hover, body.animation-style-whimsy .markdown-reading-view h4:hover, body.animation-style-whimsy .markdown-reading-view h5:hover, body.animation-style-whimsy .markdown-reading-view h6:hover {
transform: translateX(10px) !important;
letter-spacing: 0.05em !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property {
animation: whimsy-reveal-up var(--transition-bounce) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(1) {
animation-delay: calc(1 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(2) {
animation-delay: calc(2 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(3) {
animation-delay: calc(3 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(4) {
animation-delay: calc(4 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(5) {
animation-delay: calc(5 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(6) {
animation-delay: calc(6 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(7) {
animation-delay: calc(7 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .metadata-property:nth-child(8) {
animation-delay: calc(8 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered pre {
transition: transform 0.3s var(--ease-bounce-md), box-shadow var(--slow) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered pre:hover {
transform: scale(var(--whimsy-scale-subtle));
box-shadow: 0 6px 20px rgba(0, 0, 0, var(--opacity-active));
}

body.animation-style-whimsy:not(.disable-ui-animations) .workspace-tab-header-new-tab {
transition: transform var(--transition-bounce) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) .workspace-tab-header-new-tab:hover {
animation: whimsy-jelly var(--whimsy-normal) ease-in-out;
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-md) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(1) {
animation-delay: calc(1 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(2) {
animation-delay: calc(2 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(3) {
animation-delay: calc(3 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(4) {
animation-delay: calc(4 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(5) {
animation-delay: calc(5 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(6) {
animation-delay: calc(6 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(7) {
animation-delay: calc(7 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .side-dock-ribbon-action:nth-child(8) {
animation-delay: calc(8 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .has-error input, body.animation-style-whimsy:not(.disable-ui-animations) .is-error, body.animation-style-whimsy:not(.disable-ui-animations) .setting-item.is-invalid input {
animation: whimsy-wiggle var(--whimsy-normal) ease-in-out;
}

body.animation-style-whimsy:not(.disable-ui-animations) input:focus, body.animation-style-whimsy:not(.disable-ui-animations) textarea:focus {
animation: whimsy-pulse-soft 2s ease-in-out infinite;
}

body.animation-style-whimsy:not(.disable-ui-animations) .dropdown {
animation: whimsy-slide-in-right var(--transition-bounce);
}

body.animation-style-whimsy:not(.disable-ui-animations) .notice.mod-warning {
animation: whimsy-heartbeat 1.5s ease-in-out infinite;
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered h1 {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-sm) backwards;
animation-delay: 0.1s;
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered h2 {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-sm) backwards;
animation-delay: var(--fast);
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered h3 {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-sm) backwards;
animation-delay: var(--transition-ui);
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered .callout {
animation: whimsy-slide-in-right var(--whimsy-normal) var(--ease-bounce-md) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) table tr {
transition: transform 0.2s var(--ease-bounce-md), background-color var(--transition-ui) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) table tr:hover {
transform: translateX(3px);
background-color: rgba(var(--primary-color-rgb), 0.05);
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ul>li, body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ol>li {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-sm) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ul>li:nth-child(1), body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ol>li:nth-child(1) {
animation-delay: calc(1 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ul>li:nth-child(2), body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ol>li:nth-child(2) {
animation-delay: calc(2 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ul>li:nth-child(3), body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ol>li:nth-child(3) {
animation-delay: calc(3 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ul>li:nth-child(4), body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ol>li:nth-child(4) {
animation-delay: calc(4 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ul>li:nth-child(5), body.animation-style-whimsy:not(.disable-ui-animations) .markdown-rendered ol>li:nth-child(5) {
animation-delay: calc(5 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .checkbox-container:active {
animation: whimsy-jelly var(--whimsy-normal) ease-in-out;
}

body.animation-style-whimsy:not(.disable-ui-animations) ::-webkit-scrollbar-thumb {
transition: transform 0.2s var(--ease-bounce-md), background-color var(--transition-ui) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) ::-webkit-scrollbar-thumb:hover {
transform: scaleX(1.2);
}

body.animation-style-whimsy:not(.disable-ui-animations) ::-webkit-scrollbar-thumb:active {
transform: scaleX(0.9);
}

body.animation-style-whimsy:not(.disable-ui-animations) .view-header-breadcrumb {
transition: transform var(--transition-bounce) !important;
display: inline-block;
}

body.animation-style-whimsy:not(.disable-ui-animations) .view-header-breadcrumb:hover {
transform: translateY(-2px) scale(var(--whimsy-scale-normal));
}

body.animation-style-whimsy:not(.disable-ui-animations) .graph-view.color-fill-node:hover {
animation: whimsy-pulse-soft 1s ease-in-out;
}

body.animation-style-whimsy:not(.disable-ui-animations) .outline-item {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-md) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .outline-item:nth-child(1) {
animation-delay: calc(1 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .outline-item:nth-child(2) {
animation-delay: calc(2 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .outline-item:nth-child(3) {
animation-delay: calc(3 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .outline-item:nth-child(4) {
animation-delay: calc(4 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .outline-item:nth-child(5) {
animation-delay: calc(5 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .outline-item:nth-child(6) {
animation-delay: calc(6 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .search-result {
animation: whimsy-slide-in-right var(--whimsy-normal) var(--ease-bounce-md) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .search-result:nth-child(1) {
animation-delay: calc(1 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .search-result:nth-child(2) {
animation-delay: calc(2 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .search-result:nth-child(3) {
animation-delay: calc(3 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .search-result:nth-child(4) {
animation-delay: calc(4 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .search-result:nth-child(5) {
animation-delay: calc(5 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .backlink-pane .search-result-file-title {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-md) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .workspace-tab-header.is-active {
animation: whimsy-jelly var(--whimsy-normal) var(--ease-bounce-md);
}

body.animation-style-whimsy:not(.disable-ui-animations) .modal-close-button:hover {
transform: rotate(90deg) scale(1.2);
}

body.animation-style-whimsy:not(.disable-ui-animations) .color-swatch {
transition: transform 0.2s var(--ease-bounce-md) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) .color-swatch:hover {
transform: scale(var(--whimsy-scale-pop)) rotate(-5deg);
}

body.animation-style-whimsy:not(.disable-ui-animations) .nav-file-tag {
animation: whimsy-reveal-up var(--transition-bounce) backwards;
animation-delay: var(--transition-ui);
}

body.animation-style-whimsy:not(.disable-ui-animations) .markdown-embed {
animation: whimsy-slide-in-right var(--whimsy-normal) var(--ease-bounce-md) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .pdf-embed {
animation: whimsy-reveal-up var(--whimsy-normal) var(--ease-bounce-sm) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-item {
animation: whimsy-reveal-up var(--whimsy-fast) var(--ease-bounce-md) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-item:nth-child(1) {
animation-delay: calc(1 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-item:nth-child(2) {
animation-delay: calc(2 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-item:nth-child(3) {
animation-delay: calc(3 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-item:nth-child(4) {
animation-delay: calc(4 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-item:nth-child(5) {
animation-delay: calc(5 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .suggestion-item:nth-child(6) {
animation-delay: calc(6 * var(--whimsy-stagger-base));
}

body.animation-style-whimsy:not(.disable-ui-animations) .mermaid {
animation: whimsy-reveal-up var(--whimsy-slow) var(--ease-bounce-sm) backwards;
}

body.animation-style-whimsy:not(.disable-ui-animations) .day {
transition: transform 0.2s var(--ease-bounce-md) !important;
}

body.animation-style-whimsy:not(.disable-ui-animations) .day:hover {
transform: scale(var(--whimsy-scale-pop));
}

body.animation-style-whimsy:not(.disable-ui-animations) .workspace-leaf-content[data-type="excalidraw"] input:focus, body.animation-style-whimsy:not(.disable-ui-animations) .workspace-leaf-content[data-type="excalidraw"] textarea:focus, body.animation-style-whimsy:not(.disable-ui-animations) div[class*="excalidraw"] input:focus, body.animation-style-whimsy:not(.disable-ui-animations) div[class*="excalidraw"] textarea:focus {
animation: none !important;
}`,
    },
    "heading-style-underline": {
      general: `.heading-style-underline .markdown-preview-view h1, .heading-style-underline .markdown-preview-view h2, .heading-style-underline .markdown-preview-view h3, .heading-style-underline .markdown-preview-view h4, .heading-style-underline .markdown-preview-view h5, .heading-style-underline .markdown-preview-view h6, .heading-style-underline .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
background: transparent !important;
background-image: none !important;
box-shadow: none !important;
padding-block: .2em;
padding-inline: 0;
border-block-end: var(--border-heavy) solid;
border-radius: 0;
}

.heading-style-underline .markdown-preview-view h1, .heading-style-underline .markdown-source-view.mod-cm6 .cm-line .cm-header-1 {
border-block-end-color: var(--heading-primary);
border-block-end-width: 4px;
}

.heading-style-underline .markdown-preview-view h2, .heading-style-underline .markdown-source-view.mod-cm6 .cm-line .cm-header-2 {
border-block-end-color: var(--heading-secondary);
border-block-end-width: 3px;
}

.heading-style-underline .markdown-preview-view h3, .heading-style-underline .markdown-source-view.mod-cm6 .cm-line .cm-header-3 {
border-block-end-color: var(--heading-tertiary);
border-block-end-width: 2.5px;
}

.heading-style-underline .markdown-preview-view h4, .heading-style-underline .markdown-source-view.mod-cm6 .cm-line .cm-header-4 {
border-block-end-color: var(--heading-quaternary);
border-block-end-width: 2px;
}

.heading-style-underline .markdown-preview-view h5, .heading-style-underline .markdown-source-view.mod-cm6 .cm-line .cm-header-5 {
border-block-end-color: var(--heading-quinary);
border-block-end-width: 2px;
}

.heading-style-underline .markdown-preview-view h6, .heading-style-underline .markdown-source-view.mod-cm6 .cm-line .cm-header-6 {
border-block-end-color: var(--heading-senary);
border-block-end-width: 1.5px;
}

.heading-style-underline :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: none;
filter: brightness(1.1);
border-block-end-width: calc(var(--border-width, 2px) + 1px);
}`,
    },
    "heading-style-border": {
      general: `.heading-style-border .markdown-preview-view h1, .heading-style-border .markdown-preview-view h2, .heading-style-border .markdown-preview-view h3, .heading-style-border .markdown-preview-view h4, .heading-style-border .markdown-preview-view h5, .heading-style-border .markdown-preview-view h6, .heading-style-border .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
background: transparent !important;
background-image: none !important;
box-shadow: none !important;
padding-block: .2em;
padding-inline-start: .8em;
padding-inline-end: .5em;
border-inline-start: 4px solid;
border-radius: 0;
}

.heading-style-border .markdown-preview-view h1, .heading-style-border .markdown-source-view.mod-cm6 .cm-line .cm-header-1 {
border-inline-start-color: var(--heading-primary);
border-left-width: 5px;
}

.heading-style-border .markdown-preview-view h2, .heading-style-border .markdown-source-view.mod-cm6 .cm-line .cm-header-2 {
border-inline-start-color: var(--heading-secondary);
border-left-width: 4px;
}

.heading-style-border .markdown-preview-view h3, .heading-style-border .markdown-source-view.mod-cm6 .cm-line .cm-header-3 {
border-inline-start-color: var(--heading-tertiary);
border-left-width: 4px;
}

.heading-style-border .markdown-preview-view h4, .heading-style-border .markdown-source-view.mod-cm6 .cm-line .cm-header-4 {
border-inline-start-color: var(--heading-quaternary);
border-left-width: 3px;
}

.heading-style-border .markdown-preview-view h5, .heading-style-border .markdown-source-view.mod-cm6 .cm-line .cm-header-5 {
border-inline-start-color: var(--heading-quinary);
border-left-width: 3px;
}

.heading-style-border .markdown-preview-view h6, .heading-style-border .markdown-source-view.mod-cm6 .cm-line .cm-header-6 {
border-inline-start-color: var(--heading-senary);
border-left-width: 3px;
}

.heading-style-border :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: translateX(2px);
filter: brightness(1.1);
}`,
    },
    "heading-style-minimal": {
      general: `.heading-style-minimal .markdown-preview-view h1, .heading-style-minimal .markdown-preview-view h2, .heading-style-minimal .markdown-preview-view h3, .heading-style-minimal .markdown-preview-view h4, .heading-style-minimal .markdown-preview-view h5, .heading-style-minimal .markdown-preview-view h6, .heading-style-minimal .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
background: transparent !important;
background-image: none !important;
box-shadow: none !important;
padding-block: .2em;
padding-inline: 0;
border-radius: 0;
}

.heading-style-minimal :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: none;
filter: brightness(1.15);
}`,
    },
    "heading-style-gradient": {
      general: `.heading-style-gradient .markdown-preview-view h1, .heading-style-gradient .markdown-preview-view h2, .heading-style-gradient .markdown-preview-view h3, .heading-style-gradient .markdown-preview-view h4, .heading-style-gradient .markdown-preview-view h5, .heading-style-gradient .markdown-preview-view h6, .heading-style-gradient .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
background-image: linear-gradient(135deg, currentColor 0%, currentColor 100%) !important;
background-blend-mode: normal;
}

.heading-style-gradient .markdown-preview-view h1, .heading-style-gradient .markdown-source-view.mod-cm6 .cm-line .cm-header-1 {
background: linear-gradient(135deg, rgba(var(--heading-primary-rgb), 0.4), rgba(var(--heading-primary-rgb), 0.2)) !important;
}

.heading-style-gradient .markdown-preview-view h2, .heading-style-gradient .markdown-source-view.mod-cm6 .cm-line .cm-header-2 {
background: linear-gradient(135deg, rgba(var(--heading-secondary-rgb), 0.4), rgba(var(--heading-secondary-rgb), 0.2)) !important;
}

.heading-style-gradient .markdown-preview-view h3, .heading-style-gradient .markdown-source-view.mod-cm6 .cm-line .cm-header-3 {
background: linear-gradient(135deg, rgba(var(--heading-tertiary-rgb), 0.4), rgba(var(--heading-tertiary-rgb), 0.2)) !important;
}

.heading-style-gradient .markdown-preview-view h4, .heading-style-gradient .markdown-source-view.mod-cm6 .cm-line .cm-header-4 {
background: linear-gradient(135deg, rgba(var(--heading-quaternary-rgb), 0.4), rgba(var(--heading-quaternary-rgb), 0.2)) !important;
}

.heading-style-gradient .markdown-preview-view h5, .heading-style-gradient .markdown-source-view.mod-cm6 .cm-line .cm-header-5 {
background: linear-gradient(135deg, rgba(var(--heading-quinary-rgb), 0.4), rgba(var(--heading-quinary-rgb), 0.2)) !important;
}

.heading-style-gradient .markdown-preview-view h6, .heading-style-gradient .markdown-source-view.mod-cm6 .cm-line .cm-header-6 {
background: linear-gradient(135deg, rgba(var(--heading-senary-rgb), 0.4), rgba(var(--heading-senary-rgb), 0.2)) !important;
}`,
    },
    "heading-style-glass": {
      general: `.heading-style-glass :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-content) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
border-radius: var(--r3);
border: var(--border-thin) solid var(--glass-border);
background-color: rgba(var(--background-secondary-rgb), 0.3);
box-shadow:
        0 6px 16px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
position: relative;
overflow: visible !important;
transition: transform var(--transition-ui), box-shadow var(--transition-ui);
width: fit-content;
max-inline-size: 100%;
display: inline-block;
line-height: 1.4;
will-change: transform;
contain: layout style;
}

body:not(.disable-glass-menus) .heading-style-glass :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-content) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
backdrop-filter: blur(8px) saturate(160%) brightness(1.03);
-webkit-backdrop-filter: blur(8px) saturate(160%) brightness(1.03);
}

.heading-style-glass :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
padding: calc(var(--heading-pad-y) * var(--scale)) calc(var(--heading-pad-x) * var(--scale-x));
}

.heading-style-glass :is(h6, .cm-header-6) {
font-weight: 700;
}

.heading-style-glass :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-content) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: translateY(-2px);
box-shadow:
        0 10px 22px rgba(0, 0, 0, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.45);
filter: brightness(1.05);
}`,
      dark: `.heading-style-glass :is(h1, .cm-header-1) {
background-color: rgba(var(--heading-primary-rgb), 0.3) !important;
color: hsl(from var(--heading-primary) h s 90%) !important;
border-color: rgba(var(--heading-primary-rgb), 0.35);
}

.heading-style-glass :is(h2, .cm-header-2) {
background-color: rgba(var(--heading-secondary-rgb), 0.3) !important;
color: hsl(from var(--heading-secondary) h s 90%) !important;
border-color: rgba(var(--heading-secondary-rgb), 0.35);
}

.heading-style-glass :is(h3, .cm-header-3) {
background-color: rgba(var(--heading-tertiary-rgb), 0.3) !important;
color: hsl(from var(--heading-tertiary) h s 90%) !important;
border-color: rgba(var(--heading-tertiary-rgb), 0.35);
}

.heading-style-glass :is(h4, .cm-header-4) {
background-color: rgba(var(--heading-quaternary-rgb), 0.3) !important;
color: hsl(from var(--heading-quaternary) h s 90%) !important;
border-color: rgba(var(--heading-quaternary-rgb), 0.35);
}

.heading-style-glass :is(h5, .cm-header-5) {
background-color: rgba(var(--heading-quinary-rgb), 0.3) !important;
color: hsl(from var(--heading-quinary) h s 90%) !important;
border-color: rgba(var(--heading-quinary-rgb), 0.35);
}

.heading-style-glass :is(h6, .cm-header-6) {
background-color: rgba(var(--heading-senary-rgb), 0.3) !important;
color: hsl(from var(--heading-senary) h s 90%) !important;
border-color: rgba(var(--heading-senary-rgb), 0.35);
}`,
      light: `.heading-style-glass :is(h1, .cm-header-1) {
background-color: rgba(var(--heading-primary-rgb), 0.28) !important;
color: hsl(from var(--heading-primary) h s 28%) !important;
}

.heading-style-glass :is(h2, .cm-header-2) {
background-color: rgba(var(--heading-secondary-rgb), 0.28) !important;
color: hsl(from var(--heading-secondary) h s 28%) !important;
}

.heading-style-glass :is(h3, .cm-header-3) {
background-color: rgba(var(--heading-tertiary-rgb), 0.28) !important;
color: hsl(from var(--heading-tertiary) h s 28%) !important;
}

.heading-style-glass :is(h4, .cm-header-4) {
background-color: rgba(var(--heading-quaternary-rgb), 0.28) !important;
color: hsl(from var(--heading-quaternary) h s 28%) !important;
}

.heading-style-glass :is(h5, .cm-header-5) {
background-color: rgba(var(--heading-quinary-rgb), 0.28) !important;
color: hsl(from var(--heading-quinary) h s 28%) !important;
}

.heading-style-glass :is(h6, .cm-header-6) {
background-color: rgba(var(--heading-senary-rgb), 0.28) !important;
color: hsl(from var(--heading-senary) h s 28%) !important;
}`,
    },
    "heading-style-badge": {
      general: `.heading-style-badge .markdown-preview-view h1, .heading-style-badge .markdown-preview-view h2, .heading-style-badge .markdown-preview-view h3, .heading-style-badge .markdown-preview-view h4, .heading-style-badge .markdown-preview-view h5, .heading-style-badge .markdown-preview-view h6, .heading-style-badge .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
border-radius: 999px !important;
padding: .3em .8em;
background-image: none !important;
-electron-corner-smoothing: 0% !important;
}

.heading-style-badge :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: scale(1.02);
}

body.is-mobile .heading-style-badge .cm-line:is(.HyperMD-header-1, .HyperMD-header-2, .HyperMD-header-3) .cm-formatting-header + span {
display: inline !important;
white-space: normal !important;
word-break: break-word !important;
}

body.is-mobile.heading-style-badge {
.cm-line.HyperMD-header .cm-formatting-header + span,
    .markdown-rendered :is(h1, h2, h3, h4, h5, h6) {
        display: inline !important;
        padding-inline: 0.5em !important;
        padding-block: 0.25em !important;
        box-decoration-break: clone !important;
        -webkit-box-decoration-break: clone !important;
    };
}`,
    },
    "heading-style-outline": {
      general: `.heading-style-outline .markdown-preview-view h1, .heading-style-outline .markdown-preview-view h2, .heading-style-outline .markdown-preview-view h3, .heading-style-outline .markdown-preview-view h4, .heading-style-outline .markdown-preview-view h5, .heading-style-outline .markdown-preview-view h6, .heading-style-outline .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
background: transparent !important;
background-image: none !important;
border: var(--border-thick) solid;
box-shadow: none !important;
}

.heading-style-outline .markdown-preview-view h1, .heading-style-outline .markdown-source-view.mod-cm6 .cm-line .cm-header-1 {
border-color: var(--heading-primary);
color: var(--heading-primary);
}

.heading-style-outline .markdown-preview-view h2, .heading-style-outline .markdown-source-view.mod-cm6 .cm-line .cm-header-2 {
border-color: var(--heading-secondary);
color: var(--heading-secondary);
}

.heading-style-outline .markdown-preview-view h3, .heading-style-outline .markdown-source-view.mod-cm6 .cm-line .cm-header-3 {
border-color: var(--heading-tertiary);
color: var(--heading-tertiary);
}

.heading-style-outline .markdown-preview-view h4, .heading-style-outline .markdown-source-view.mod-cm6 .cm-line .cm-header-4 {
border-color: var(--heading-quaternary);
color: var(--heading-quaternary);
}

.heading-style-outline .markdown-preview-view h5, .heading-style-outline .markdown-source-view.mod-cm6 .cm-line .cm-header-5 {
border-color: var(--heading-quinary);
color: var(--heading-quinary);
}

.heading-style-outline .markdown-preview-view h6, .heading-style-outline .markdown-source-view.mod-cm6 .cm-line .cm-header-6 {
border-color: var(--heading-senary);
color: var(--heading-senary);
}

.heading-style-outline :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: translateY(-2px);
filter: brightness(1.1);
box-shadow: 0 2px 8px rgba(0, 0, 0, var(--opacity-divider));
}`,
    },
    "heading-style-3d": {
      general: `.heading-style-3d .markdown-preview-view h1, .heading-style-3d .markdown-preview-view h2, .heading-style-3d .markdown-preview-view h3, .heading-style-3d .markdown-preview-view h4, .heading-style-3d .markdown-preview-view h5, .heading-style-3d .markdown-preview-view h6, .heading-style-3d .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
background-image: linear-gradient(to bottom, rgba(255, 255, 255, .25), rgba(255, 255, 255, .05)) !important;
background-blend-mode: overlay;
border: var(--border-thick) solid;
border-block-start-color: rgba(255, 255, 255, 0.4);
border-inline-start-color: rgba(255, 255, 255, var(--opacity-light-overlay));
border-inline-end-color: rgba(0, 0, 0, var(--opacity-divider));
border-block-end-color: rgba(0, 0, 0, var(--opacity-overlay));
box-shadow:
        0 4px 8px rgba(0, 0, 0, var(--opacity-divider)),
        0 2px 4px rgba(0, 0, 0, var(--opacity-subtle)),
        inset 0 1px 0 rgba(255, 255, 255, var(--opacity-light-overlay)),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-subtle));
position: relative;
padding: .3em .7em;
}

.heading-style-3d .markdown-preview-view h1, .heading-style-3d .markdown-source-view.mod-cm6 .cm-line .cm-header-1 {
background-color: rgba(var(--heading-primary-rgb), var(--heading-bg-opacity));
color: hsl(from var(--heading-primary) h s calc(l * var(--heading-text-multiplier)));
border-block-start-color: rgba(255, 255, 255, 0.5);
border-inline-start-color: rgba(255, 255, 255, 0.4);
box-shadow:
        0 6px 12px rgba(0, 0, 0, var(--opacity-overlay)),
        0 3px 6px rgba(0, 0, 0, var(--opacity-divider)),
        inset 0 2px 0 rgba(255, 255, 255, 0.4),
        inset 0 -2px 0 rgba(0, 0, 0, var(--opacity-divider));
}

.heading-style-3d .markdown-preview-view h2, .heading-style-3d .markdown-source-view.mod-cm6 .cm-line .cm-header-2 {
background-color: rgba(var(--heading-secondary-rgb), var(--heading-bg-opacity));
color: hsl(from var(--heading-secondary) h s calc(l * var(--heading-text-multiplier)));
border-block-start-color: rgba(255, 255, 255, 0.45);
border-inline-start-color: rgba(255, 255, 255, 0.35);
box-shadow:
        0 5px 10px rgba(0, 0, 0, 0.18),
        0 2px 5px rgba(0, 0, 0, var(--opacity-active)),
        inset 0 1.5px 0 rgba(255, 255, 255, 0.35),
        inset 0 -1.5px 0 rgba(0, 0, 0, var(--opacity-active));
}

.heading-style-3d .markdown-preview-view h3, .heading-style-3d .markdown-source-view.mod-cm6 .cm-line .cm-header-3 {
background-color: rgba(var(--heading-tertiary-rgb), var(--heading-bg-opacity));
color: hsl(from var(--heading-tertiary) h s calc(l * var(--heading-text-multiplier)));
border-block-start-color: rgba(255, 255, 255, 0.4);
border-inline-start-color: rgba(255, 255, 255, var(--opacity-light-overlay));
box-shadow:
        0 4px 8px rgba(0, 0, 0, var(--opacity-divider)),
        0 2px 4px rgba(0, 0, 0, var(--opacity-subtle)),
        inset 0 1px 0 rgba(255, 255, 255, var(--opacity-light-overlay)),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-subtle));
}

.heading-style-3d .markdown-preview-view h4, .heading-style-3d .markdown-source-view.mod-cm6 .cm-line .cm-header-4 {
background-color: rgba(var(--heading-quaternary-rgb), var(--heading-bg-opacity));
color: hsl(from var(--heading-quaternary) h s calc(l * var(--heading-text-multiplier)));
border-width: 1.5px;
border-block-start-color: rgba(255, 255, 255, 0.35);
border-inline-start-color: rgba(255, 255, 255, 0.25);
box-shadow:
        0 3px 6px rgba(0, 0, 0, var(--opacity-active)),
        0 1px 3px rgba(0, 0, 0, var(--opacity-hover)),
        inset 0 1px 0 rgba(255, 255, 255, 0.25),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-hover));
}

.heading-style-3d .markdown-preview-view h5, .heading-style-3d .markdown-source-view.mod-cm6 .cm-line .cm-header-5 {
background-color: rgba(var(--heading-quinary-rgb), var(--heading-bg-opacity));
color: hsl(from var(--heading-quinary) h s calc(l * var(--heading-text-multiplier)));
border-width: 1.5px;
border-block-start-color: rgba(255, 255, 255, 0.35);
border-inline-start-color: rgba(255, 255, 255, 0.25);
box-shadow:
        0 3px 6px rgba(0, 0, 0, var(--opacity-active)),
        0 1px 3px rgba(0, 0, 0, var(--opacity-hover)),
        inset 0 1px 0 rgba(255, 255, 255, 0.25),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-hover));
}

.heading-style-3d .markdown-preview-view h6, .heading-style-3d .markdown-source-view.mod-cm6 .cm-line .cm-header-6 {
background-color: rgba(var(--heading-senary-rgb), var(--heading-bg-opacity));
color: hsl(from var(--heading-senary) h s calc(l * var(--heading-text-multiplier)));
border-width: var(--border-thin);
border-block-start-color: rgba(255, 255, 255, var(--opacity-light-overlay));
border-inline-start-color: rgba(255, 255, 255, 0.2);
box-shadow:
        0 2px 4px rgba(0, 0, 0, var(--opacity-subtle)),
        0 1px 2px rgba(0, 0, 0, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        inset 0 -1px 0 rgba(0, 0, 0, 0.06);
}

.heading-style-3d :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: translateY(-3px) scale(1.01);
filter: brightness(1.08);
box-shadow:
        0 8px 16px rgba(0, 0, 0, var(--opacity-overlay)),
        0 4px 8px rgba(0, 0, 0, var(--opacity-divider)),
        inset 0 2px 0 rgba(255, 255, 255, 0.4),
        inset 0 -2px 0 rgba(0, 0, 0, var(--opacity-divider));
}`,
      dark: `.theme-dark .heading-style-3d .markdown-preview-view h1, .theme-dark .heading-style-3d .markdown-preview-view h2, .theme-dark .heading-style-3d .markdown-preview-view h3, .theme-dark .heading-style-3d .markdown-preview-view h4, .theme-dark .heading-style-3d .markdown-preview-view h5, .theme-dark .heading-style-3d .markdown-preview-view h6, .theme-dark .heading-style-3d .markdown-source-view.mod-cm6 .cm-line [class*="cm-header-"] {
border-block-start-color: rgba(255, 255, 255, 0.25);
border-inline-start-color: rgba(255, 255, 255, 0.2);
border-inline-end-color: rgba(0, 0, 0, 0.3);
border-block-end-color: rgba(0, 0, 0, 0.35);
box-shadow:
        0 4px 10px rgba(0, 0, 0, 0.3),
        0 2px 5px rgba(0, 0, 0, var(--opacity-overlay)),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-overlay));
}

.theme-dark .heading-style-3d :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.4),
        0 4px 10px rgba(0, 0, 0, 0.3),
        inset 0 2px 0 rgba(255, 255, 255, 0.2),
        inset 0 -2px 0 rgba(0, 0, 0, 0.25);
}`,
    },
    "heading-style-vibrant": {
      general: `.heading-style-vibrant :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-content) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
border-radius: var(--r2);
border: var(--border-thin) solid rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 18px -8px rgba(0, 0, 0, 0.4);
position: relative;
overflow: visible !important;
transition: transform 0.2s cubic-bezier(.34, 1.56, .64, 1), box-shadow var(--transition-ui), filter var(--transition-ui);
width: fit-content;
max-inline-size: 100%;
display: inline-block;
line-height: 1.4;
text-shadow: 0 1px 2px rgba(0, 0, 0, var(--opacity-overlay)) !important;
}

.heading-style-vibrant :is(h1, .cm-header-1) {
padding: calc(var(--heading-pad-y) * 1.25) calc(var(--heading-pad-x) * 1.6);
border-radius: var(--r3);
}

.heading-style-vibrant :is(h2, .cm-header-2) {
padding: calc(var(--heading-pad-y) * 1.1) calc(var(--heading-pad-x) * 1.5);
border-radius: var(--r3);
}

.heading-style-vibrant :is(h3, .cm-header-3) {
padding: calc(var(--heading-pad-y) * 1.1) calc(var(--heading-pad-x) * 1.5);
}

.heading-style-vibrant :is(h4, .cm-header-4) {
padding: calc(var(--heading-pad-y) * 0.8) calc(var(--heading-pad-x) * 1.2);
}

.heading-style-vibrant :is(h5, .cm-header-5) {
padding: calc(var(--heading-pad-y) * 0.75) calc(var(--heading-pad-x) * 1.2);
border-radius: 20px;
}

.heading-style-vibrant :is(h6, .cm-header-6) {
padding: calc(var(--heading-pad-y) * 0.6) calc(var(--heading-pad-x) * 1.1);
border-radius: 20px;
font-weight: 700;
}

.heading-style-vibrant :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-content) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6):hover {
transform: translateY(-3px) scale(1.01);
box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.5);
filter: brightness(1.1);
}`,
      dark: `.heading-style-vibrant :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-content) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
box-shadow: 0 4px 15px -5px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1);
border: var(--border-thin) solid rgba(255, 255, 255, 0.1);
}

.heading-style-vibrant :is(h1, .cm-header-1) {
background: linear-gradient(135deg, hsl(from var(--heading-primary) h 85% 32%) 0%, hsl(from var(--heading-primary) h 75% 18%) 100%) !important;
color: hsl(from var(--heading-primary) h s 94%) !important;
border-color: rgba(var(--heading-primary-rgb), 0.5);
}

.heading-style-vibrant :is(h2, .cm-header-2) {
background: linear-gradient(135deg, hsl(from var(--heading-secondary) h 85% 32%) 0%, hsl(from var(--heading-secondary) h 75% 18%) 100%) !important;
color: hsl(from var(--heading-secondary) h s 94%) !important;
border-color: rgba(var(--heading-secondary-rgb), 0.5);
}

.heading-style-vibrant :is(h3, .cm-header-3) {
background: linear-gradient(135deg, hsl(from var(--heading-tertiary) h 85% 32%) 0%, hsl(from var(--heading-tertiary) h 75% 18%) 100%) !important;
color: hsl(from var(--heading-tertiary) h s 94%) !important;
border-color: rgba(var(--heading-tertiary-rgb), 0.5);
}

.heading-style-vibrant :is(h4, .cm-header-4) {
background: linear-gradient(135deg, hsl(from var(--heading-quaternary) h 85% 32%) 0%, hsl(from var(--heading-quaternary) h 75% 18%) 100%) !important;
color: hsl(from var(--heading-quaternary) h s 94%) !important;
border-color: rgba(var(--heading-quaternary-rgb), 0.5);
}

.heading-style-vibrant :is(h5, .cm-header-5) {
background: linear-gradient(135deg, hsl(from var(--heading-quinary) h 85% 32%) 0%, hsl(from var(--heading-quinary) h 75% 18%) 100%) !important;
color: hsl(from var(--heading-quinary) h s 94%) !important;
border-color: rgba(var(--heading-quinary-rgb), 0.5);
}

.heading-style-vibrant :is(h6, .cm-header-6) {
background: linear-gradient(135deg, hsl(from var(--heading-senary) h 85% 32%) 0%, hsl(from var(--heading-senary) h 75% 18%) 100%) !important;
color: hsl(from var(--heading-senary) h s 94%) !important;
border-color: rgba(var(--heading-senary-rgb), 0.5);
}`,
      light: `.heading-style-vibrant :is(h1, .cm-header-1) {
background: linear-gradient(135deg, var(--heading-primary) 0%, rgba(var(--heading-primary-rgb), 0.8) 100%) !important;
color: hsl(from var(--heading-primary) h s 96%) !important;
}

.heading-style-vibrant :is(h2, .cm-header-2) {
background: linear-gradient(135deg, var(--heading-secondary) 0%, rgba(var(--heading-secondary-rgb), 0.8) 100%) !important;
color: hsl(from var(--heading-secondary) h s 96%) !important;
}

.heading-style-vibrant :is(h3, .cm-header-3) {
background: linear-gradient(135deg, var(--heading-tertiary) 0%, rgba(var(--heading-tertiary-rgb), 0.8) 100%) !important;
color: hsl(from var(--heading-tertiary) h s 96%) !important;
}

.heading-style-vibrant :is(h4, .cm-header-4) {
background: linear-gradient(135deg, var(--heading-quaternary) 0%, rgba(var(--heading-quaternary-rgb), 0.8) 100%) !important;
color: hsl(from var(--heading-quaternary) h s 96%) !important;
}

.heading-style-vibrant :is(h5, .cm-header-5) {
background: linear-gradient(135deg, var(--heading-quinary) 0%, rgba(var(--heading-quinary-rgb), 0.8) 100%) !important;
color: hsl(from var(--heading-quinary) h s 96%) !important;
}

.heading-style-vibrant :is(h6, .cm-header-6) {
background: linear-gradient(135deg, var(--heading-senary) 0%, rgba(var(--heading-senary-rgb), 0.8) 100%) !important;
color: hsl(from var(--heading-senary) h s 96%) !important;
}`,
    },
    "heading-align-center": {
      general: `body.heading-align-center :is(.markdown-preview-view, .markdown-source-view.mod-cm6 .cm-line) :is(h1, h2, h3, h4, h5, h6, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
display: inline-flex !important;
margin-inline: auto;
width: auto;
}

body.heading-align-center .markdown-source-view.mod-cm6 .cm-line:has([class*="cm-header-"]) {
display: flex;
justify-content: center;
}

body.heading-align-center .markdown-preview-view {
& h1, & h2, & h3, & h4, & h5, & h6 {
        display: inline-flex !important;
        margin-inline: auto;
    };
}`,
    },
    "link-style-default": {
      general: `body.link-style-default :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)) {
color: var(--link-color);
background: rgba(var(--primary-color-rgb), .08);
border-radius: var(--r1);
padding-block: 0;
padding-inline: 4px;
}

body.link-style-default :is(p, li)>:is(a, .internal-link, .external-link, .cm-link:not(.cm-formatting), .cm-url:not(.cm-formatting), .cm-hmd-internal-link:not(.cm-formatting), .cm-hmd-external-link:not(.cm-formatting)) {
background: rgba(var(--primary-color-rgb), .05);
padding-block: 0;
padding-inline: 3px;
}

body.link-style-default :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)):hover {
background: rgba(var(--primary-color-rgb), .12);
color: var(--link-color-hover);
}`,
    },
    "link-style-plain": {
      general: `body.link-style-plain :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)) {
color: var(--link-color);
background: transparent !important;
padding-block: 0;
padding-inline: 0;
}

body.link-style-plain :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)):hover {
color: var(--link-color-hover);
text-decoration: underline !important;
}`,
    },
    "link-style-underline": {
      general: `body.link-style-underline :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)) {
color: var(--link-color);
background: transparent !important;
padding-block: 0;
padding-inline: 1px;
border-bottom: 1.5px solid var(--callout-color, rgba(var(--primary-color-rgb), 0.2)) !important;
}

body.link-style-underline :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)):hover {
color: var(--link-color-hover);
background: rgba(var(--primary-color-rgb), 0.04) !important;
}

body.link-style-underline [data-callout] :is(a, .internal-link, .external-link, .cm-url) {
border-block-end-color: var(--callout-color) !important;
}`,
    },
    "link-style-glow": {
      general: `body.link-style-glow :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)) {
color: var(--link-color);
background: rgba(var(--primary-color-rgb), .08);
border-radius: 8px;
padding-block: 5px;
padding-inline: 6px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
margin-block: 0;
margin-inline: 1px;
}

body.link-style-glow :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)):hover {
color: var(--link-color-hover);
background: rgba(var(--callout-color-rgb, var(--primary-color-rgb)), .2);
text-shadow: 0 0 12px rgba(var(--callout-color-rgb, var(--primary-color-rgb)), 0.6);
box-shadow: 0 4px 15px rgba(var(--callout-color-rgb, var(--primary-color-rgb)), 0.2);
transform: translateY(-1px) scale(1.03);
}`,
    },
    "link-style-wavy": {
      general: `body.link-style-wavy :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)) {
color: var(--link-color);
background: transparent !important;
padding-block: 0;
padding-inline: 1px;
text-decoration: none !important;
}

body.link-style-wavy :is(.markdown-rendered a, .markdown-rendered .internal-link, .markdown-rendered .external-link, .markdown-source-view.mod-cm6 .cm-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-url:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-internal-link:not(.cm-formatting), .markdown-source-view.mod-cm6 .cm-hmd-external-link:not(.cm-formatting)):hover {
color: var(--link-color-hover);
text-decoration: wavy underline !important;
text-decoration-color: var(--callout-color, var(--primary-color)) !important;
text-underline-offset: 4px;
}

body.link-style-wavy [data-callout] :is(a, .internal-link, .external-link, .cm-url):hover {
text-decoration-color: var(--callout-color) !important;
}`,
    },
    "highlight-style-glass": {
      general: `.highlight-style-glass :is( .markdown-rendered mark, span.cm-highlight, .markdown-preview-view mark, .cm-s-obsidian span.cm-highlight ) {
background-color: rgba(var(--highlight-bg-rgb, var(--primary-color-rgb)), 0.3);
color: var(--highlight-bg-dark-color);
border: 1px solid var(--glass-border);
border-bottom: 2px solid rgba(var(--highlight-bg-rgb, var(--primary-color-rgb)), 0.45);
box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
backdrop-filter: blur(6px) saturate(140%);
-webkit-backdrop-filter: blur(6px) saturate(140%);
}

.highlight-style-glass :is( .markdown-rendered mark, span.cm-highlight, .markdown-preview-view mark, .cm-s-obsidian span.cm-highlight ):hover {
box-shadow:
        0 4px 10px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
filter: brightness(1.08);
}`,
      dark: `.highlight-style-glass :is( .markdown-rendered mark, span.cm-highlight, .markdown-preview-view mark, .cm-s-obsidian span.cm-highlight ) {
background-color: rgba(var(--highlight-bg-rgb, var(--primary-color-rgb)), 0.34);
color: var(--highlight-bg-light-color);
border-color: rgba(255, 255, 255, 0.12);
border-block-end-color: rgba(var(--highlight-bg-rgb, var(--primary-color-rgb)), 0.55);
text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}`,
    },
    "blockquote-style-glass": {
      general: `.blockquote-style-glass :is(.markdown-preview-view blockquote, .markdown-rendered blockquote, div:not(.CodeMirror-activeline)>.HyperMD-quote, .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote) {
background: linear-gradient(135deg, rgba(var(--background-secondary-rgb), 0.6), rgba(var(--background-secondary-rgb), 0.4)) !important;
border: var(--border-thin) solid rgba(255, 255, 255, 0.2) !important;
border-inline-start: var(--border-heavy) solid var(--blockquote-border-color) !important;
border-block-end: none !important;
box-shadow: 0 4px 12px rgba(0, 0, 0, var(--opacity-subtle)) !important;
}

.blockquote-style-glass :is(.markdown-preview-view blockquote, .markdown-rendered blockquote, div:not(.CodeMirror-activeline)>.HyperMD-quote, .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote):hover {
box-shadow: 0 6px 16px rgba(0, 0, 0, var(--opacity-divider)) !important;
border: var(--border-thin) solid rgba(255, 255, 255, var(--opacity-light-overlay)) !important;
border-inline-start: var(--border-heavy) solid var(--blockquote-border-color) !important;
}`,
      dark: `.theme-dark .blockquote-style-glass :is(.markdown-preview-view blockquote, .markdown-rendered blockquote, div:not(.CodeMirror-activeline)>.HyperMD-quote, .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote) {
background: linear-gradient(135deg, rgba(var(--background-secondary-rgb), 0.38), rgba(var(--background-secondary-rgb), 0.22)) !important;
border-color: rgba(255, 255, 255, 0.2) !important;
box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
}`,
    },
    "blockquote-style-bold": {
      general: `.blockquote-style-bold :is(.markdown-preview-view blockquote, .markdown-rendered blockquote, div:not(.CodeMirror-activeline)>.HyperMD-quote, .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote) {
background:
        radial-gradient(ellipse at top left, rgba(var(--primary-color-rgb), 0.2) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(var(--primary-color-rgb), 0.15) 0%, transparent 50%),
        linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.14) 0%, rgba(var(--background-secondary-rgb), 0.85) 100%) !important;
border: var(--border-heavy) solid var(--blockquote-border-color) !important;
border-inline-start: 6px solid var(--blockquote-border-color) !important;
border-radius: var(--r4) !important;
-electron-corner-smoothing: var(--squircle-main) !important;
box-shadow:
        0 0 0 2px rgba(var(--primary-color-rgb), 0.12),
        0 6px 20px rgba(0, 0, 0, var(--opacity-divider)),
        inset 0 0 20px rgba(var(--primary-color-rgb), 0.05) !important;
position: relative !important;
overflow: hidden !important;
}

.blockquote-style-bold :is(.markdown-preview-view blockquote, .markdown-rendered blockquote)::before {
content: '' !important;
position: absolute !important;
inset-block-start: -3px !important;
inset-inline-start: -3px !important;
inset-inline-end: -3px !important;
inset-block-end: -3px !important;
border: var(--border-thin) solid rgba(var(--primary-color-rgb), 0.18) !important;
border-radius: var(--r4) !important;
pointer-events: none !important;
z-index: -1 !important;
}

.blockquote-style-bold .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote::before {
inline-size: 6px !important;
border-radius: var(--r4) 0 0 var(--r4) !important;
}

.blockquote-style-bold :is(.markdown-preview-view blockquote, .markdown-rendered blockquote, div:not(.CodeMirror-activeline)>.HyperMD-quote, .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote):hover {
border-width: 4px !important;
border-inline-start-width: 8px !important;
box-shadow:
        0 0 0 3px rgba(var(--primary-color-rgb), 0.2),
        0 8px 24px rgba(0, 0, 0, var(--opacity-overlay)),
        inset 0 0 25px rgba(var(--primary-color-rgb), 0.08) !important;
transform: translateY(-2px) scale(1.01) !important;
}`,
      dark: `.theme-dark .blockquote-style-bold :is(.markdown-preview-view blockquote, .markdown-rendered blockquote, div:not(.CodeMirror-activeline)>.HyperMD-quote, .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote) {
background:
        radial-gradient(ellipse at top left, rgba(var(--primary-color-rgb), 0.28) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(var(--primary-color-rgb), 0.2) 0%, transparent 50%),
        linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.2) 0%, rgba(var(--background-secondary-rgb), 0.65) 100%) !important;
box-shadow:
        0 0 0 2px rgba(var(--primary-color-rgb), 0.22),
        0 6px 20px rgba(0, 0, 0, 0.35),
        inset 0 0 20px rgba(var(--primary-color-rgb), 0.08) !important;
}`,
    },
    "callout-style-vintage": {
      general: `.callout-style-vintage .callout {
background:
        repeating-linear-gradient(0deg,
            rgba(var(--callout-color-rgb), 0.03) 0px,
            rgba(var(--callout-color-rgb), 0.05) 1px,
            transparent 1px,
            transparent 2px),
        radial-gradient(ellipse at top left, rgba(var(--callout-color-rgb), 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(var(--callout-color-rgb), 0.08) 0%, transparent 50%),
        linear-gradient(135deg,
            rgba(var(--callout-color-rgb), 0.15) 0%,
            rgba(var(--background-secondary-rgb), 0.95) 50%,
            rgba(var(--background-secondary-rgb), 0.9) 100%) !important;
border: var(--border-thick) solid rgba(var(--callout-color-rgb), 0.25) !important;
border-inline-start: 5px solid var(--callout-color) !important;
border-radius: 4px 12px 12px 4px !important;
box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, var(--opacity-light-overlay)),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-subtle)),
        0 2px 8px rgba(0, 0, 0, var(--opacity-divider)),
        0 1px 3px rgba(0, 0, 0, var(--opacity-subtle)) !important;
position: relative;
overflow: hidden;
}

.callout-style-vintage .callout::before {
content: '';
position: absolute;
inset-block-start: 0;
inset-inline: 0;
height: 1px;
background: linear-gradient(to right,
            transparent,
            rgba(var(--callout-color-rgb), 0.2),
            transparent);
}

.callout-style-vintage .callout:hover {
box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.35),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-active)),
        0 4px 12px rgba(0, 0, 0, var(--opacity-overlay)),
        0 2px 6px rgba(0, 0, 0, var(--opacity-divider)) !important;
border-inline-start-width: 6px !important;
}

.callout-style-vintage .callout .callout-icon {
filter: sepia(0.2) contrast(1.1) !important;
}`,
      dark: `.theme-dark .callout-style-vintage .callout {
background:
        repeating-linear-gradient(0deg,
            rgba(var(--callout-color-rgb), 0.05) 0px,
            rgba(var(--callout-color-rgb), 0.08) 1px,
            transparent 1px,
            transparent 2px),
        radial-gradient(ellipse at top left, rgba(var(--callout-color-rgb), 0.18) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(var(--callout-color-rgb), 0.12) 0%, transparent 50%),
        linear-gradient(135deg,
            rgba(var(--callout-color-rgb), 0.2) 0%,
            rgba(var(--background-secondary-rgb), 0.85) 50%,
            rgba(var(--background-secondary-rgb), 0.8) 100%) !important;
box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-overlay)),
        0 2px 8px rgba(0, 0, 0, 0.3),
        0 1px 3px rgba(0, 0, 0, var(--opacity-overlay)) !important;
}`,
    },
    "callout-style-glass": {
      general: `.callout-style-glass :is(.callout, .cm-callout) {
backdrop-filter: blur(12px) saturate(180%) brightness(1.06) !important;
border-inline-start: none !important;
border-radius: var(--r4) !important;
box-shadow:
        0 6px 18px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
position: relative;
}

.callout-style-glass .markdown-source-view.mod-cm6 .cm-callout {
border: none !important;
outline: none !important;
}

.callout-style-glass .callout::after {
content: '';
position: absolute;
inset-block-start: 0;
inset-inline: 0;
inset-block-end: 0;
background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.12) 0%,
            transparent 55%);
border-radius: var(--r4);
pointer-events: none;
}

.callout-style-glass .callout:hover {
backdrop-filter: blur(20px) saturate(220%) brightness(1.08) !important;
-webkit-backdrop-filter: blur(20px) saturate(220%) brightness(1.08) !important;
transform: translateY(-3px) !important;
box-shadow:
        0 12px 40px rgba(0, 0, 0, var(--opacity-divider)),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, var(--opacity-hover)) !important;
}`,
      dark: `.theme-dark .callout-style-glass :is(.callout, .cm-callout) {
background:
        radial-gradient(ellipse at top left, rgba(var(--callout-color-rgb), 0.3) 0%, transparent 62%),
        radial-gradient(ellipse at bottom right, rgba(var(--callout-color-rgb), 0.22) 0%, transparent 62%),
        linear-gradient(135deg, rgba(var(--callout-color-rgb), 0.26) 0%, rgba(var(--background-primary-rgb), 0.38) 100%) !important;
backdrop-filter: blur(16px) saturate(160%) brightness(0.98) !important;
-webkit-backdrop-filter: blur(16px) saturate(160%) brightness(0.98) !important;
border-color: rgba(var(--callout-color-rgb), 0.35) !important;
box-shadow:
        0 8px 22px rgba(0, 0, 0, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.18) !important;
}`,
    },
    "callout-style-vibrant": {
      general: `.callout-style-vibrant .callout {
background: linear-gradient(135deg,
            hsl(from var(--callout-color) h 65% 45%) 0%,
            hsl(from var(--callout-color) h 55% 32%) 100%) !important;
border: var(--border-thin) solid rgba(var(--callout-color-rgb), 0.4) !important;
border-inline-start: 5px solid hsl(from var(--callout-color) h 90% 60%) !important;
border-radius: var(--r3) !important;
box-shadow:
        0 8px 24px -8px rgba(0, 0, 0, 0.4),
        0 4px 12px -4px rgba(var(--callout-color-rgb), 0.5),
        inset 0 1px 1px rgba(255, 255, 255, 0.1) !important;
overflow: hidden;
}

.callout-style-vibrant .callout .callout-title {
color: hsl(from var(--callout-color) h 85% 95%) !important;
font-weight: 700 !important;
text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) !important;
}

.callout-style-vibrant .callout :is(.callout-icon, .callout-icon svg) {
color: hsl(from var(--callout-color) h 95% 85%) !important;
filter: drop-shadow(0 0 4px rgba(var(--callout-color-rgb), 0.6)) !important;
}

.callout-style-vibrant .callout .callout-content {
color: hsl(from var(--callout-color) h 40% 90%) !important;
opacity: 0.95 !important;
}

.callout-style-vibrant .callout :is(a, .internal-link, .external-link) {
color: hsl(from var(--callout-color) h 90% 85%) !important;
background: rgba(255, 255, 255, 0.1) !important;
text-decoration: underline !important;
text-underline-offset: 3px;
}

.callout-style-vibrant .callout :is(a, .internal-link, .external-link):hover {
background: rgba(255, 255, 255, 0.2) !important;
color: white !important;
}

.callout-style-vibrant .callout :is(strong, em) {
color: white !important;
filter: drop-shadow(0 0 2px rgba(var(--callout-color-rgb), 0.4));
}

.callout-style-vibrant .callout:hover {
transform: translateY(-2px) !important;
box-shadow:
        0 15px 40px -12px rgba(0, 0, 0, 0.5),
        0 10px 20px -5px rgba(var(--callout-color-rgb), 0.6) !important;
filter: brightness(1.1);
}`,
      dark: `.theme-dark .callout-style-vibrant .callout {
background: linear-gradient(135deg,
            hsl(from var(--callout-color) h 75% 38%) 0%,
            hsl(from var(--callout-color) h 65% 22%) 100%) !important;
box-shadow:
        0 12px 32px -12px rgba(0, 0, 0, 0.7),
        0 8px 16px -6px rgba(var(--callout-color-rgb), 0.4),
        inset 0 1px 1px rgba(255, 255, 255, 0.05) !important;
}`,
    },
    "callout-style-bold": {
      general: `.callout-style-bold .callout {
background:
        radial-gradient(ellipse at top left, rgba(var(--callout-color-rgb), 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(var(--callout-color-rgb), 0.2) 0%, transparent 50%),
        linear-gradient(135deg, rgba(var(--callout-color-rgb), 0.18) 0%, rgba(var(--background-secondary-rgb), 0.9) 100%) !important;
border: var(--border-heavy) solid var(--callout-color) !important;
border-inline-start: 6px solid var(--callout-color) !important;
border-radius: var(--r4) !important;
box-shadow:
        0 0 0 2px rgba(var(--callout-color-rgb), 0.15),
        0 6px 20px rgba(0, 0, 0, var(--opacity-divider)),
        inset 0 0 20px rgba(var(--callout-color-rgb), 0.05) !important;
position: relative;
}

.callout-style-bold .callout::before {
content: '';
position: absolute;
inset-block-start: -3px;
inset-inline-start: -3px;
inset-inline-end: -3px;
inset-block-end: -3px;
border: var(--border-thin) solid rgba(var(--callout-color-rgb), 0.2);
border-radius: var(--r4);
pointer-events: none;
z-index: -1;
}

.callout-style-bold .callout:hover {
border-width: 4px !important;
border-left-width: 8px !important;
box-shadow:
        0 0 0 3px rgba(var(--callout-color-rgb), 0.2),
        0 8px 24px rgba(0, 0, 0, var(--opacity-overlay)),
        inset 0 0 25px rgba(var(--callout-color-rgb), 0.08) !important;
transform: translateY(-2px) scale(1.01) !important;
}

.callout-style-bold .callout .callout-title {
font-weight: var(--weight-bold) !important;
letter-spacing: 0.02em !important;
}`,
      dark: `.theme-dark .callout-style-bold .callout {
background:
        radial-gradient(ellipse at top left, rgba(var(--callout-color-rgb), 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(var(--callout-color-rgb), 0.25) 0%, transparent 50%),
        linear-gradient(135deg, rgba(var(--callout-color-rgb), 0.22) 0%, rgba(var(--background-secondary-rgb), 0.7) 100%) !important;
box-shadow:
        0 0 0 2px rgba(var(--callout-color-rgb), 0.25),
        0 6px 20px rgba(0, 0, 0, 0.3),
        inset 0 0 20px rgba(var(--callout-color-rgb), 0.08) !important;
}`,
    },
    "inline-code-accent": {
      general: `body.inline-code-accent :not(pre) > code {
background: linear-gradient(
        135deg,
        rgba(var(--primary-color-rgb), 0.1),
        rgba(var(--primary-color-rgb), 0.15)
    ) !important;
border-left: 3px solid var(--primary-color) !important;
padding: 2px 6px 2px 8px !important;
border-radius: var(--radius-s) !important;
font-weight: var(--weight-medium) !important;
animation: code-pulse 3s ease infinite !important;
transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
box-shadow: 0 1px 3px rgba(var(--primary-color-rgb), 0.1) !important;
}

body.inline-code-accent :not(pre) > code:hover {
background: linear-gradient(
        135deg,
        rgba(var(--primary-color-rgb), 0.2),
        rgba(var(--primary-color-rgb), 0.25)
    ) !important;
transform: translateY(-1px) !important;
box-shadow: 0 2px 6px rgba(var(--primary-color-rgb), 0.2) !important;
animation: none !important;
}`,
      dark: `body.theme-dark :not(pre) > code {
background: linear-gradient(
        135deg,
        rgba(var(--primary-color-rgb), 0.15),
        rgba(var(--primary-color-rgb), 0.2)
    ) !important;
box-shadow: 0 1px 3px rgba(var(--primary-color-rgb), 0.15) !important;
}`,
    },
    "h1-uppercase": {
      general: `body.h1-uppercase :is(h1, .cm-header-1) {
text-transform: uppercase !important;
letter-spacing: 0.02em !important;
}`,
    },
    "h2-uppercase": {
      general: `body.h2-uppercase :is(h2, .cm-header-2) {
text-transform: uppercase !important;
letter-spacing: 0.02em !important;
}`,
    },
    "h3-uppercase": {
      general: `body.h3-uppercase :is(h3, .cm-header-3) {
text-transform: uppercase !important;
letter-spacing: 0.02em !important;
}`,
    },
    "h4-uppercase": {
      general: `body.h4-uppercase :is(h4, .cm-header-4) {
text-transform: uppercase !important;
letter-spacing: 0.02em !important;
}`,
    },
    "h5-uppercase": {
      general: `body.h5-uppercase :is(h5, .cm-header-5) {
text-transform: uppercase !important;
letter-spacing: 0.02em !important;
}`,
    },
    "h6-uppercase": {
      general: `body.h6-uppercase :is(h6, .cm-header-6) {
text-transform: uppercase !important;
letter-spacing: 0.02em !important;
}`,
    },
    "enable-fancy-bullets": {
      general: `body.enable-fancy-bullets {
/* LEVEL 1 */
.markdown-reading-view ul>li>.list-bullet:after,
    .markdown-source-view.mod-cm6 .HyperMD-list-line-1 .list-bullet:after {
        height: 7px;
        width: 7px;
        border-radius: 50%;
    };
/* LEVEL 2 */
.markdown-reading-view ul>li>ul>li>.list-bullet:after,
    .markdown-source-view.mod-cm6 .HyperMD-list-line-2 .list-bullet:after {
        height: 7px;
        width: 7px;
        background-color: transparent;
        border-style: solid;
        border-radius: 50%;
        border-width: var(--border-thin);
    };
/* LEVEL 3 */
.markdown-reading-view ul>li>ul>li>ul>li>.list-bullet:after,
    .markdown-source-view.mod-cm6 .HyperMD-list-line-3 .list-bullet:after {
        height: 5px;
        width: 5px;
        border-radius: 0%;
        background-color: rgb(89, 89, 89);
    };
/* LEVEL 4 */
.markdown-reading-view ul>li>ul>li>ul>li>ul>li>.list-bullet:after,
    .markdown-source-view.mod-cm6 .HyperMD-list-line-4 .list-bullet:after {
        height: 0;
        width: 0;
        background-color: transparent;
        border-radius: 0%;
        border-block-start: 5px solid transparent;
        border-block-end: 5px solid transparent;
        border-inline-start: 8px solid;
        border-inline-end: 0px solid;
    };
}`,
    },
    "enable-floating-nav": {
      general: `body:not(.is-mobile).enable-floating-nav .nav-header {
overflow: visible !important;
padding: 0 !important;
}

body:not(.is-mobile).enable-floating-nav .nav-buttons-container {
position: relative;
width: 60px;
height: 6px;
margin: 4px auto 4px !important;
padding-block: 0;
padding-inline: 0;
border-radius: var(--radius-pill);
background-color: rgba(var(--primary-color-rgb), 0.4);
transition: width var(--slow) cubic-bezier(0.4, 0, 0.2, 1), height var(--slow) cubic-bezier(0.4, 0, 0.2, 1), background-color var(--slow) cubic-bezier(0.4, 0, 0.2, 1), box-shadow var(--slow) cubic-bezier(0.4, 0, 0.2, 1), opacity var(--slow) cubic-bezier(0.4, 0, 0.2, 1), gap var(--slow) cubic-bezier(0.4, 0, 0.2, 1), margin-block-start var(--slow) cubic-bezier(0.4, 0, 0.2, 1), margin-block-end var(--slow) cubic-bezier(0.4, 0, 0.2, 1);
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
gap: 0;
z-index: 10;
border: none !important;
box-shadow: none !important;
opacity: 0.6;
}

body:not(.is-mobile).enable-floating-nav .nav-buttons-container:hover {
width: fit-content;
height: var(--height-input);
background-color: var(--background-secondary-alt);
box-shadow: var(--shadow-2) !important;
overflow: visible;
opacity: 1;
gap: 4px;
margin-block-start: 7px !important;
margin-block-end: 5px !important;
}

body:not(.is-mobile).enable-floating-nav .nav-buttons-container>.clickable-icon {
opacity: 0;
transition: opacity var(--transition-ui), transform var(--transition-ui);
pointer-events: none;
transform: scale(0.8);
}

body:not(.is-mobile).enable-floating-nav .nav-buttons-container:hover>.clickable-icon {
opacity: 1;
pointer-events: auto;
transform: scale(1);
}

body:not(.is-mobile).enable-floating-nav .nav-buttons-container>.clickable-icon:hover {
transform: scale(1.1);
}`,
    },
    "show-header-on-hover": {
      general: `body.show-header-on-hover .view-header {
background-color: transparent !important;
border-block-end: none !important;
transition: background-color var(--transition-ui) !important;
}

body:not(.is-mobile).show-header-on-hover .view-header>div, body:not(.is-mobile).show-header-on-hover .view-header>button, body:not(.is-mobile).show-header-on-hover .view-header>.clickable-icon {
opacity: 0;
pointer-events: none;
transition: opacity var(--transition-ui), transform var(--transition-ui) !important;
transform: translateY(-8px);
}

body.show-header-on-hover .view-header:hover>div, body.show-header-on-hover .view-header:hover>button, body.show-header-on-hover .view-header:hover>.clickable-icon {
opacity: 1;
pointer-events: auto;
transform: translateY(0);
}

body.show-header-on-hover .view-header:hover {
background-color: transparent !important;
border-block-end: none !important;
}

body.layout-card .view-header:hover {
background-color: transparent !important;
border-block-end: none !important;
}`,
    },
    "disable-glass-menus": {
      general: `body.disable-glass-menus :is(.popover, .prompt, .suggestion-container, .menu, .dropdown-menu, .modal) {
background-color: var(--background-primary) !important;
border-color: rgba(var(--primary-color-rgb), .12) !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
}`,
      dark: `body.disable-glass-menus :is(.popover, .prompt, .suggestion-container, .menu, .dropdown-menu, .modal) {
background-color: var(--background-secondary) !important;
border-color: rgba(var(--primary-color-rgb), .2) !important;
}`,
    },
    "disable-shadows": {
      general: `body.disable-shadows {
--shadow-1: none !important;
--shadow-2: none !important;
--shadow-3: none !important;
--shadow-4: none !important;
}`,
    },
  },
};
